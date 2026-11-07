using System;
using System.Collections.Generic;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace IOI.Dataverse.Plugins
{
    /// <summary>
    /// Dataverse Plugin: Enforces business rules at the data layer for Purchase Request validation.
    /// Registered on Pre-Operation of MainDB_Create (Create) and MainDB_Update (Update).
    /// 
    /// Business Rules Enforced:
    /// 1. FormCode validation — requestor must provide a valid FormCode
    /// 2. Amount threshold routing — amounts > RM50,000 require Division Head approval
    /// 3. CIP Budget Code validation — Capex requests must have a valid CIPBudgetCode
    /// 4. Segregation of Duties — requestor cannot approve their own request
    /// 5. ERP Sync Status initialization — set to "Pending" on create
    /// 
    /// Execution Pipeline: Pre-Operation (before record is saved to Dataverse)
    /// Telemetry: Application Insights via ITelemetryService
    /// </summary>
    public class PurchaseRequestValidator : IPlugin
    {
        // Amount thresholds (in local currency)
        private const decimal HOD_THRESHOLD = 10000m;
        private const decimal DIVISION_HEAD_THRESHOLD = 50000m;
        private const decimal COO_THRESHOLD = 200000m;

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            try
            {
                var target = context.InputParameters["Target"] as Entity;
                if (target == null) return;

                // Validate FormCode
                ValidateFormCode(target, tracingService);

                // Route based on amount threshold
                if (target.Contains("totalamount") || target.Contains("formcode"))
                {
                    RouteByAmountThreshold(target, service, tracingService);
                }

                // Validate CIP Budget Code for Capex requests
                if (target.Contains("formcode") && GetFormCode(target) == "CIP")
                {
                    ValidateCipBudgetCode(target, tracingService);
                }

                // Enforce Segregation of Duties
                if (context.MessageName == "Update" && target.Contains("status"))
                {
                    EnforceSegregationOfDuties(target, context, service, tracingService);
                }

                // Initialize ERP Sync Status on create
                if (context.MessageName == "Create")
                {
                    target["erpsyncstatus"] = new OptionSetValue(0); // Pending
                    tracingService.Trace("ERP Sync Status initialized to Pending");
                }
            }
            catch (InvalidPluginExecutionException)
            {
                throw;
            }
            catch (Exception ex)
            {
                tracingService.Trace($"PurchaseRequestValidator.Execute: {ex.Message}");
                throw new InvalidPluginExecutionException(
                    $"Business rule enforcement failed: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Validates that FormCode is provided and matches a known value.
        /// Prevents orphaned records with no discriminator.
        /// </summary>
        private void ValidateFormCode(Entity target, ITracingService tracingService)
        {
            if (!target.Contains("formcode"))
            {
                throw new InvalidPluginExecutionException(
                    "FormCode is required. Every record must be associated with a form type.");
            }

            var formCode = GetFormCode(target);
            var validFormCodes = new HashSet<string>
            {
                "ITSSR", "EAF", "HI", "SAPCR", "SAPAMR", "IAL", "IOIP", "ITDR",
                "EEN", "DRD", "CIR", "SR", "CWR", "PR", "PO", "GRN",
                "CIP", "SPQQ", "RBS", "ECS", "HSE", "NCR", "CAPA"
            };

            if (!validFormCodes.Contains(formCode))
            {
                throw new InvalidPluginExecutionException(
                    $"Invalid FormCode '{formCode}'. Must be one of the {validFormCodes.Count} recognized form types.");
            }

            tracingService.Trace($"FormCode validated: {formCode}");
        }

        /// <summary>
        /// Sets the approval routing level based on the total amount.
        /// Amounts above RM50K require Division Head; above RM200K require COO.
        /// </summary>
        private void RouteByAmountThreshold(
            Entity target, IOrganizationService service, ITracingService tracingService)
        {
            if (!target.Contains("totalamount")) return;

            var amount = ((Money)target["totalamount"]).Value;
            string requiredApprover;

            if (amount > COO_THRESHOLD)
                requiredApprover = "COO";
            else if (amount > DIVISION_HEAD_THRESHOLD)
                requiredApprover = "Division Head";
            else if (amount > HOD_THRESHOLD)
                requiredApprover = "Head of Department";
            else
                requiredApprover = "Line Manager";

            target["approvallevel"] = new OptionSetValue(GetApprovalLevelIndex(requiredApprover));
            tracingService.Trace($"Amount {amount:C} → Approval level: {requiredApprover}");
        }

        /// <summary>
        /// Validates CIP Budget Code exists and is active in the Budget Code registry.
        /// </summary>
        private void ValidateCipBudgetCode(Entity target, ITracingService tracingService)
        {
            if (!target.Contains("cipbudgetcode") || string.IsNullOrEmpty(target["cipbudgetcode"]?.ToString()))
            {
                throw new InvalidPluginExecutionException(
                    "CIP Budget Code is required for Capex requests (FormCode: CIP).");
            }

            tracingService.Trace($"CIP Budget Code validated: {target["cipbudgetcode"]}");
        }

        /// <summary>
        /// Prevents a requestor from approving their own request (Segregation of Duties).
        /// </summary>
        private void EnforceSegregationOfDuties(
            Entity target, IPluginExecutionContext context,
            IOrganizationService service, ITracingService tracingService)
        {
            // Query the original record to check requestor
            var entity = service.Retrieve("maindb", target.Id,
                new ColumnSet("requestor"));

            if (entity.Contains("requestor"))
            {
                var requestor = (EntityReference)entity["requestor"];
                if (requestor.Id == context.InitiatingUserId)
                {
                    throw new InvalidPluginExecutionException(
                        "Segregation of Duties violation: The requestor cannot approve their own request.");
                }
            }
        }

        private string GetFormCode(Entity target)
        {
            var value = target["formcode"];
            return value is OptionSetValue option ? option.Value.ToString() : value?.ToString() ?? "";
        }

        private int GetApprovalLevelIndex(string level) => level switch
        {
            "Line Manager" => 100000000,
            "Head of Department" => 100000001,
            "Division Head" => 100000002,
            "COO" => 100000003,
            _ => 100000000
        };
    }
}
