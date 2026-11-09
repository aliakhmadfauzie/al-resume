# Cloud Flow Architecture: CSD-Bulk-Tanker-Inspection-Weighbridge-Release

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Logistics](https://img.shields.io/badge/Department-Logistics-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Container Shipment & Tankers (CSD)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **CSD-Bulk-Tanker-Inspection-Weighbridge-Release** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![CSD-Bulk-Tanker-Inspection-Weighbridge-Release](./../mockups/CSD_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When a tanker inspection is completed (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-Logistics`
* **Entity / List:** `LOG_ShipmentDispatch`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/DispatchStatus/Value'], 'Inspection_Submitted')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When a tanker inspection is completed (V2)` | **SHAREPOINT** | `trigger` | LOG_ShipmentDispatch · Gate entry triage |
| **Step 2** | `Condition - 18 Safety & Food-Grade Criteria Passed?` | **CONTROL** | `condition` | Validate tank cleanliness, seal integrity, and prior cargo compatibility |
| **Step 3** | `HTTP - Capture Tare Weight from Automated Weighbridge` | **HTTP** | `action` | GET https://weighbridge.plant2.ioi.internal/api/readings/live |
| **Step 4** | `Start and wait for an approval (V2) - Loading Master Dispatch` | **APPROVALS** | `action` | Bay Supervisor electronic sign-off on filling arm connection |
| **Step 5** | `Create file - Generate Digital QR Loading Clearance Pass` | **SHAREPOINT** | `action` | Send electronic gate pass barcode to driver mobile device |
| **Step 6** | `Scope - Catch (Security Gate Interlock)` | **SCOPE** | `catch` | Hold vehicle at security gatehouse and alert Logistics Manager |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Expression** | `@and(equals(triggerOutputs()?['body/InspectionChecklistPassed'], true), equals(triggerOutputs()?['body/PriorCargoCompatible'], true))` | `triggerOutputs()?['body/ChecklistPassed']` | Core operational field in CSD workflow |
| **True Branch (18/18 Cleared)** | `Weighbridge Tare Capture -> Issue Gate Pass -> Open Loading Bay Barrier` | `triggerOutputs()?['body/Value']` | Core operational field in CSD workflow |
| **False Branch (Variance / Contamination)** | `Reject Vehicle -> Lock Security Turnstile -> Issue Rejection Memo` | `triggerOutputs()?['body/Value']` | Core operational field in CSD workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
