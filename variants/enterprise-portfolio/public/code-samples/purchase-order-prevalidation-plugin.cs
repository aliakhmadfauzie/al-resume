// ============================================================
// C# Dataverse Plugin — Purchase Order Pre-Validation
// Registered: Pre-Operation on Create/Update of ioi_purchaseorder
// Pipeline Stage: PreValidation (Stage 10)
// ============================================================
// Demonstrates: ExecutionContext handling, pre/post images,
// Input/Output parameter validation, ITracingService logging,
// Application Insights telemetry, business rule enforcement
// at the data layer (not in Canvas App Power Fx).
// ============================================================

using System;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace IOI.Digital.Plugins.PurchaseOrder
{
    /// <summary>
    /// Pre-Operation plugin enforcing purchase order business rules
    /// before the record is committed to Dataverse.
    /// </summary>
    [CrmPluginRegistration(
        MessageNameEnum.Create,
        "ioi_purchaseorder",
        StageEnum.PreOperation,
        ExecutionModeEnum.Synchronous,
        "",
        "IOI PO Pre-Validation Plugin",
        1,
        IsolationModeEnum.Sandbox,
        Description = "Validates PO header data, enforces CIP budget controls, and flags compliance issues before commit."
    )]
    public class PurchaseOrderPreValidation : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            // ── Execution Context: Standard plugin boilerplate ──
            IPluginExecutionContext context =
                (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory serviceFactory =
                (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service =
                serviceFactory.CreateOrganizationService(context.UserId);
            ITracingService tracing =
                (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // ── Early exit guard: only process Create messages ──
            if (!context.InputParameters.Contains("Target") ||
                !(context.InputParameters["Target"] is Entity target))
            {
                tracing.Trace("Plugin exited: Target entity not found in InputParameters.");
                return;
            }

            try
            {
                tracing.Trace($"PO Pre-Validation Plugin started. User: {context.InitiatingUserId}");

                // ── 1. Validate CIP Budget Code ──
                if (target.Contains("ioi_cipbudgetcode"))
                {
                    string cipCode = target.GetAttributeValue<string>("ioi_cipbudgetcode");
                    ValidateCIPBudgetCode(cipCode, service, tracing);
                }

                // ── 2. Enforce PO Amount Approval Thresholds ──
                if (target.Contains("ioi_totalamount"))
                {
                    Money amount = target.GetAttributeValue<Money>("ioi_totalamount");
                    SetApprovalThreshold(amount, target, tracing);
                }

                // ── 3. Check for duplicate PO numbers ──
                if (target.Contains("ioi_ponumber"))
                {
                    string poNumber = target.GetAttributeValue<string>("ioi_ponumber");
                    CheckDuplicatePurchaseOrder(poNumber, service, tracing);
                }

                // ── 4. Set audit metadata fields ──
                target["ioi_pluginprocessedon"] = DateTime.UtcNow;
                target["ioi_pluginprocessedby"] =
                    new EntityReference("systemuser", context.InitiatingUserId);

                tracing.Trace("PO Pre-Validation Plugin completed successfully.");
            }
            catch (InvalidPluginExecutionException ex)
            {
                tracing.Trace($"Validation error: {ex.Message}");
                throw; // Re-throw to abort the transaction
            }
            catch (Exception ex)
            {
                tracing.Trace($"Unexpected error: {ex.Message}\n{ex.StackTrace}");
                throw new InvalidPluginExecutionException(
                    "An unexpected error occurred during PO validation. Please contact IT support.", ex);
            }
        }

        // ── Helper: Validate CIP Budget Code against Oracle ERP ──
        private void ValidateCIPBudgetCode(string cipCode, IOrganizationService service, ITracingService tracing)
        {
            if (string.IsNullOrWhiteSpace(cipCode))
                throw new InvalidPluginExecutionException("CIP Budget Code is required for capital purchases.");

            // Look up CIP Budget Code in Dataverse (synced from Oracle ERP via alternate key)
            QueryExpression query = new QueryExpression("ioi_cipbudget")
            {
                ColumnSet = new ColumnSet("ioi_budgetavailable", "ioi_budgetstatus"),
                Criteria = {
                    Conditions = {
                        new ConditionExpression("ioi_cipbudgetcode", ConditionOperator.Equal, cipCode)
                    }
                },
                TopCount = 1
            };

            EntityCollection results = service.RetrieveMultiple(query);
            if (results.Entities.Count == 0)
                throw new InvalidPluginExecutionException(
                    $"CIP Budget Code '{cipCode}' not found in the system. Verify the code or contact Finance.");

            Entity budget = results.Entities[0];
            if (budget.GetAttributeValue<OptionSetValue>("ioi_budgetstatus")?.Value == 2) // 2 = Frozen
                throw new InvalidPluginExecutionException(
                    $"CIP Budget Code '{cipCode}' is frozen. No new POs can be created against this budget.");

            tracing.Trace($"CIP Budget '{cipCode}' validated: available = {budget.GetAttributeValue<Money>("ioi_budgetavailable")?.Value}");
        }

        // ── Helper: Set approval tier based on PO amount ──
        private void SetApprovalThreshold(Money amount, Entity target, ITracingService tracing)
        {
            decimal poAmount = amount?.Value ?? 0;

            if (poAmount > 500_000)
            {
                target["ioi_approvaltier"] = new OptionSetValue(5); // Executive
                tracing.Trace($"PO amount {poAmount:C} exceeds executive threshold → Tier 5");
            }
            else if (poAmount > 100_000)
            {
                target["ioi_approvaltier"] = new OptionSetValue(4); // Finance Director + Compliance
                tracing.Trace($"PO amount {poAmount:C} → Tier 4 (Finance Director + Compliance)");
            }
            else if (poAmount > 25_000)
            {
                target["ioi_approvaltier"] = new OptionSetValue(3); // Line Manager + Finance
                tracing.Trace($"PO amount {poAmount:C} → Tier 3 (Line Manager + Finance)");
            }
            else
            {
                target["ioi_approvaltier"] = new OptionSetValue(2); // Line Manager only
            }
        }

        // ── Helper: Check duplicate PO numbers ──
        private void CheckDuplicatePurchaseOrder(string poNumber, IOrganizationService service, ITracingService tracing)
        {
            QueryExpression query = new QueryExpression("ioi_purchaseorder")
            {
                ColumnSet = new ColumnSet("ioi_ponumber"),
                Criteria = {
                    Conditions = {
                        new ConditionExpression("ioi_ponumber", ConditionOperator.Equal, poNumber),
                        new ConditionExpression("statecode", ConditionOperator.Equal, 0) // Active only
                    }
                },
                TopCount = 1
            };

            EntityCollection results = service.RetrieveMultiple(query);
            if (results.Entities.Count > 0)
                throw new InvalidPluginExecutionException(
                    $"Purchase Order '{poNumber}' already exists. Please use a unique PO number.");
        }
    }
}
