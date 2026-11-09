# Cloud Flow Architecture: LVE-Leave-Validation-ShiftClash-Approval

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Human Resources](https://img.shields.io/badge/Department-Human%20Resources-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Leave Management System (LVE)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **LVE-Leave-Validation-ShiftClash-Approval** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![LVE-Leave-Validation-ShiftClash-Approval](./../mockups/LVE_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When an item is created or modified (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-HR`
* **Entity / List:** `HR_LeaveRecords`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/Status/Value'], 'Pending_Approval')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When an item is created or modified (V2)` | **SHAREPOINT** | `trigger` | HR_LeaveRecords · Trigger on Pending_Approval |
| **Step 2** | `Get items - Check Shift Roster & Relief Staff Availability` | **SHAREPOINT** | `action` | Query Plant_ShiftRosters for conflicting shift allocations |
| **Step 3** | `Start and wait for an approval (V2)` | **APPROVALS** | `action` | Line Supervisor Endorsement with Relief Staff Confirmation |
| **Step 4** | `Condition - Manager Approved?` | **CONTROL** | `condition` | equals(outputs('Start_and_wait_for_an_approval')?['body/outcome'], 'Approve') |
| **Step 5** | `Update item - Deduct Leave Balance in HR_LeaveBalances` | **SHAREPOINT** | `action` | Subtract requested days from employee entitlement list |
| **Step 6** | `Create event (V4) - Plant Shift Calendar` | **OUTLOOK** | `action` | Block dates on Operations Shift Calendar & trigger auto-reply |
| **Step 7** | `Scope - Catch (Rollback Balance & Alert HR)` | **SCOPE** | `catch` | Revert deducted balance if calendar event or status update fails |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Approval type** | `First to respond` | `triggerOutputs()?['body/Value']` | Core operational field in LVE workflow |
| **Title** | `Leave Request: Muhammad Zulkifli (5 Days Annual Leave - Shift A)` | `triggerOutputs()?['body/EmployeeName']` | Core operational field in LVE workflow |
| **Assigned to** | `shift.lead.plant1@acidchem.ioi.com.my` | `triggerOutputs()?['body/ReportingManagerEmail']` | Core operational field in LVE workflow |
| **Details** | `### Employee Shift Leave Verification **Employee:** Muhammad Zulkifli (Badge #8834) **Department:** Fractionation Plant 1 · Shift A **Duration:** 14 Nov 2026 to 18 Nov 2026 (5 Days) **Relief Handover Assigned:** Tan Wei Loon (Verified Available) **Remaining Accrued Balance:** 14.5 Days` | `triggerOutputs()?['body/Value']` | Core operational field in LVE workflow |
| **Item link** | `https://apps.powerapps.com/play/e/ioi-acidchem/a/lve?ref=LVE-2026-1182` | `triggerOutputs()?['body/LeaveDossierURL']` | Core operational field in LVE workflow |
| **Item link description** | `Approve in IOI Acidchem HR Portal` | `triggerOutputs()?['body/Value']` | Core operational field in LVE workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
