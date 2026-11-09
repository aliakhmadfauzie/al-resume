# Power Automate Enterprise Workflows: The 13 Flagship Applications

[![Platform: Power Automate](https://img.shields.io/badge/Platform-Microsoft%20Power%20Automate-0078D4.svg)](#)
[![Designer: Modern UI](https://img.shields.io/badge/Designer-Modern%20v3%20Canvas-5C2D91.svg)](#)
[![Enterprise: IOI Acidchem](https://img.shields.io/badge/Enterprise-IOI%20Acidchem%20%7C%20IOI%20Group-006C4C.svg)](#)

A comprehensive architectural catalog of enterprise cloud automation workflows engineered for the **13 mission-critical applications** across 7 core departments at **IOI Acidchem / IOI Group**. 

Every workflow is designed using the **Microsoft Power Automate Modern Designer**, complete with step-by-step logic, dynamic tokens, multi-tier approvals, connector integrations (SharePoint, Teams, Approvals, Outlook, AI Builder, SAP ERP), and enterprise-grade **Scope - Try / Catch** resilience.

---

## 📊 Master Workflows Directory & Visual Mockups

| Department | App Code & Title | Workflow Name | Modern UI Visual Mockup (1920×1080) | Architecture Breakdown Spec | Key Enterprise Integrations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Information Technology** | **ITSSR**<br>IT Support & Service Request | `ITSSR-Autotask-Routing-SLA-Approval-Engine` | [View Modern Designer](./power-automate/mockups/ITSSR_Flow_Designer.png) | [`ITSSR_Flow_Architecture.md`](./power-automate/workflows/ITSSR_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Information Technology** | **EAF**<br>External Access Form | `EAF-Contractor-Access-Provisioning-Lifecycle` | [View Modern Designer](./power-automate/mockups/EAF_Flow_Designer.png) | [`EAF_Flow_Architecture.md`](./power-automate/workflows/EAF_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Human Resources** | **LVE**<br>Leave Management System | `LVE-Leave-Validation-ShiftClash-Approval` | [View Modern Designer](./power-automate/mockups/LVE_Flow_Designer.png) | [`LVE_Flow_Architecture.md`](./power-automate/workflows/LVE_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Human Resources** | **MCL**<br>Medical Claims & Benefits | `MCL-Outpatient-Claim-Quota-SAP-Batch-Export` | [View Modern Designer](./power-automate/mockups/MCL_Flow_Designer.png) | [`MCL_Flow_Architecture.md`](./power-automate/workflows/MCL_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Finance** | **CAR**<br>Capital Appropriation Request | `CAR-Capex-MultiTier-Executive-Authorization` | [View Modern Designer](./power-automate/mockups/CAR_Flow_Designer.png) | [`CAR_Flow_Architecture.md`](./power-automate/workflows/CAR_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Finance** | **CMF**<br>Credit Management Form | `CMF-Commercial-Credit-Risk-Rating-Approval` | [View Modern Designer](./power-automate/mockups/CMF_Flow_Designer.png) | [`CMF_Flow_Architecture.md`](./power-automate/workflows/CMF_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Safety, Health & Environment** | **SHEINCIACCI**<br>Incident & Accident Reporting | `SHE-Incident-Statutory-DOSH-Escalation-CAPA` | [View Modern Designer](./power-automate/mockups/SHEINCIACCI_Flow_Designer.png) | [`SHEINCIACCI_Flow_Architecture.md`](./power-automate/workflows/SHEINCIACCI_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Safety, Health & Environment** | **PPEREQU**<br>PPE Requisition & Issuance | `PPEREQU-Hazard-Zone-Quota-Stock-Issuance` | [View Modern Designer](./power-automate/mockups/PPEREQU_Flow_Designer.png) | [`PPEREQU_Flow_Architecture.md`](./power-automate/workflows/PPEREQU_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Plant Maintenance** | **FAR**<br>Equipment Failure Analysis Report | `FAR-RCFA-Critical-Asset-SAP-PM-Sync` | [View Modern Designer](./power-automate/mockups/FAR_Flow_Designer.png) | [`FAR_Flow_Architecture.md`](./power-automate/workflows/FAR_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Plant Maintenance** | **MTP**<br>Turnaround & Overhaul Planning | `MTP-Shutdown-Turnaround-Permit-Milestone-Sync` | [View Modern Designer](./power-automate/mockups/MTP_Flow_Designer.png) | [`MTP_Flow_Architecture.md`](./power-automate/workflows/MTP_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Quality Assurance** | **NCRINTEAUDI**<br>Internal Audit Non-Conformance | `NCR-ISO-Audit-Containment-CAPA-Signoff` | [View Modern Designer](./power-automate/mockups/NCRINTEAUDI_Flow_Designer.png) | [`NCRINTEAUDI_Flow_Architecture.md`](./power-automate/workflows/NCRINTEAUDI_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Quality Control** | **OOS**<br>Out-of-Specification & CAPA | `OOS-Lab-Chemical-Quarantine-Disposition-Flow` | [View Modern Designer](./power-automate/mockups/OOS_Flow_Designer.png) | [`OOS_Flow_Architecture.md`](./power-automate/workflows/OOS_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |
| **Logistics** | **CSD**<br>Container Shipment & Tankers | `CSD-Bulk-Tanker-Inspection-Weighbridge-Release` | [View Modern Designer](./power-automate/mockups/CSD_Flow_Designer.png) | [`CSD_Flow_Architecture.md`](./power-automate/workflows/CSD_Flow_Architecture.md) | SharePoint, Approvals, Teams, SAP / ERP REST API |

---

## 🎨 Visual Showcase: Modern Designer Mockups Gallery

### Information Technology: IT Support & Service Request (`ITSSR`)
**Flow Name:** `ITSSR-Autotask-Routing-SLA-Approval-Engine`  
**Trigger:** `When an item is created or modified (V2)` on `MainDB_IT_Ext_Support`  
**Active Panel Inspection:** `Start and wait for an approval (V2)`  

![ITSSR Power Automate Modern Designer](./power-automate/mockups/ITSSR_Flow_Designer.png)

---

### Information Technology: External Access Form (`EAF`)
**Flow Name:** `EAF-Contractor-Access-Provisioning-Lifecycle`  
**Trigger:** `When an item is created (V2)` on `MainDB_IT_Ext_Access`  
**Active Panel Inspection:** `Start and wait for an approval (V2)`  

![EAF Power Automate Modern Designer](./power-automate/mockups/EAF_Flow_Designer.png)

---

### Human Resources: Leave Management System (`LVE`)
**Flow Name:** `LVE-Leave-Validation-ShiftClash-Approval`  
**Trigger:** `When an item is created or modified (V2)` on `HR_LeaveRecords`  
**Active Panel Inspection:** `Start and wait for an approval (V2)`  

![LVE Power Automate Modern Designer](./power-automate/mockups/LVE_Flow_Designer.png)

---

### Human Resources: Medical Claims & Benefits (`MCL`)
**Flow Name:** `MCL-Outpatient-Claim-Quota-SAP-Batch-Export`  
**Trigger:** `When a claim item is created (V2)` on `HR_MedicalClaims`  
**Active Panel Inspection:** `Extract information from receipts (AI Builder)`  

![MCL Power Automate Modern Designer](./power-automate/mockups/MCL_Flow_Designer.png)

---

### Finance: Capital Appropriation Request (`CAR`)
**Flow Name:** `CAR-Capex-MultiTier-Executive-Authorization`  
**Trigger:** `When an item is created or modified (V2)` on `FIN_CAR_Master`  
**Active Panel Inspection:** `Start and wait for an approval (V2)`  

![CAR Power Automate Modern Designer](./power-automate/mockups/CAR_Flow_Designer.png)

---

### Finance: Credit Management Form (`CMF`)
**Flow Name:** `CMF-Commercial-Credit-Risk-Rating-Approval`  
**Trigger:** `When a credit review is submitted` on `FIN_CMF_Master`  
**Active Panel Inspection:** `HTTP - Query Commercial Credit Agency (D&B / CTOS API)`  

![CMF Power Automate Modern Designer](./power-automate/mockups/CMF_Flow_Designer.png)

---

### Safety, Health & Environment: Incident & Accident Reporting (`SHEINCIACCI`)
**Flow Name:** `SHE-Incident-Statutory-DOSH-Escalation-CAPA`  
**Trigger:** `When an incident is logged (V2)` on `SHE_IncidentMaster`  
**Active Panel Inspection:** `Post adaptive card in Teams (High Priority Incident Alert)`  

![SHEINCIACCI Power Automate Modern Designer](./power-automate/mockups/SHEINCIACCI_Flow_Designer.png)

---

### Safety, Health & Environment: PPE Requisition & Issuance (`PPEREQU`)
**Flow Name:** `PPEREQU-Hazard-Zone-Quota-Stock-Issuance`  
**Trigger:** `When a PPE requisition is created` on `SHE_PPERequests`  
**Active Panel Inspection:** `Start and wait for an approval (V2)`  

![PPEREQU Power Automate Modern Designer](./power-automate/mockups/PPEREQU_Flow_Designer.png)

---

### Plant Maintenance: Equipment Failure Analysis Report (`FAR`)
**Flow Name:** `FAR-RCFA-Critical-Asset-SAP-PM-Sync`  
**Trigger:** `When a failure report is logged (V2)` on `MTN_FailureReports`  
**Active Panel Inspection:** `HTTP - Create SAP PM Maintenance Notification & Breakdown Order`  

![FAR Power Automate Modern Designer](./power-automate/mockups/FAR_Flow_Designer.png)

---

### Plant Maintenance: Turnaround & Overhaul Planning (`MTP`)
**Flow Name:** `MTP-Shutdown-Turnaround-Permit-Milestone-Sync`  
**Trigger:** `When a turnaround milestone is updated` on `MTN_TurnaroundPlans`  
**Active Panel Inspection:** `Start and wait for an approval (V2) - Multi-Discipline Safety Gate`  

![MTP Power Automate Modern Designer](./power-automate/mockups/MTP_Flow_Designer.png)

---

### Quality Assurance: Internal Audit Non-Conformance (`NCRINTEAUDI`)
**Flow Name:** `NCR-ISO-Audit-Containment-CAPA-Signoff`  
**Trigger:** `When an audit NCR is opened (V2)` on `QA_AuditNCR_Master`  
**Active Panel Inspection:** `Data Operation - Calculate 48-Hour Containment Deadline`  

![NCRINTEAUDI Power Automate Modern Designer](./power-automate/mockups/NCRINTEAUDI_Flow_Designer.png)

---

### Quality Control: Out-of-Specification & CAPA (`OOS`)
**Flow Name:** `OOS-Lab-Chemical-Quarantine-Disposition-Flow`  
**Trigger:** `When an OOS variance is detected` on `QC_OOS_Master`  
**Active Panel Inspection:** `HTTP - Lock Storage Tank to QUARANTINE in SAP ERP`  

![OOS Power Automate Modern Designer](./power-automate/mockups/OOS_Flow_Designer.png)

---

### Logistics: Container Shipment & Tankers (`CSD`)
**Flow Name:** `CSD-Bulk-Tanker-Inspection-Weighbridge-Release`  
**Trigger:** `When a tanker inspection is completed (V2)` on `LOG_ShipmentDispatch`  
**Active Panel Inspection:** `Condition - 18 Safety & Food-Grade Criteria Passed?`  

![CSD Power Automate Modern Designer](./power-automate/mockups/CSD_Flow_Designer.png)

---

