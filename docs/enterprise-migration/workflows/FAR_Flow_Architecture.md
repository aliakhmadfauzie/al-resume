# Cloud Flow Architecture: FAR-RCFA-Critical-Asset-SAP-PM-Sync

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Plant Maintenance](https://img.shields.io/badge/Department-Plant%20Maintenance-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Equipment Failure Analysis Report (FAR)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **FAR-RCFA-Critical-Asset-SAP-PM-Sync** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![FAR-RCFA-Critical-Asset-SAP-PM-Sync](./../mockups/FAR_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When a failure report is logged (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-Maintenance`
* **Entity / List:** `MTN_FailureReports`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/ReportStage/Value'], 'Submitted_For_RCFA')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When a failure report is logged (V2)` | **SHAREPOINT** | `trigger` | MTN_FailureReports · Breakdown triage |
| **Step 2** | `Data Operation - Evaluate Asset Criticality (Class A vs B/C)` | **DATA-OP** | `action` | Check if equipment failure threatens continuous plant production |
| **Step 3** | `HTTP - Create SAP PM Maintenance Notification & Breakdown Order` | **HTTP** | `action` | Dispatch SAP PM work order with downtime duration telemetry |
| **Step 4** | `Start and wait for an approval (V2)` | **APPROVALS** | `action` | Reliability Engineer & Engineering Head RCFA Root Cause Validation |
| **Step 5** | `HTTP - Update MTBF / MTTR Reliability Telemetry in Power BI` | **HTTP** | `action` | Stream failure interval metrics to executive plant reliability dashboard |
| **Step 6** | `Scope - Catch (Reliability Sync Escalation)` | **SCOPE** | `catch` | Alert Reliability Lead & Plant Maintenance Superintendent |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Method** | `POST` | `triggerOutputs()?['body/Value']` | Core operational field in FAR workflow |
| **URI** | `https://sap-gateway.ioi.internal/api/pm/notifications` | `triggerOutputs()?['body/SAP_PM_Gateway']` | Core operational field in FAR workflow |
| **Headers** | `Authorization: Bearer @{variables('SAP_Bearer_Token')} Content-Type: application/json x-client-id: IOI_PLANT_MAINTENANCE` | `triggerOutputs()?['body/Value']` | Core operational field in FAR workflow |
| **Body** | `{   "notificationType": "M1",   "functionalLocation": "@{triggerOutputs()?['body/FunctionalLocation']}",   "equipmentNumber": "@{triggerOutputs()?['body/EquipmentAssetTag']}",   "breakdown": true,   "downtimeHours": @{triggerOutputs()?['body/DowntimeHours']},   "shortText": "Boiler Steam Turbine Mechanical Seal Failure - RCFA Logged",   "longText": "@{triggerOutputs()?['body/FailureMechanismDescription']}" }` | `triggerOutputs()?['body/Value']` | Core operational field in FAR workflow |
| **Retry Policy** | `Exponential Interval (Count: 4, Interval: PT1M)` | `triggerOutputs()?['body/Value']` | Core operational field in FAR workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
