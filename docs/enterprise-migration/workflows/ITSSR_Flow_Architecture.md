# Cloud Flow Architecture: ITSSR-Autotask-Routing-SLA-Approval-Engine

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Information Technology](https://img.shields.io/badge/Department-Information%20Technology-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **IT Support & Service Request (ITSSR)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **ITSSR-Autotask-Routing-SLA-Approval-Engine** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![ITSSR-Autotask-Routing-SLA-Approval-Engine](./../mockups/ITSSR_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When an item is created or modified (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-IT`
* **Entity / List:** `MainDB_IT_Ext_Support`
* **Trigger Filter Expression:**
```text
@and(not(equals(triggerOutputs()?['body/RequestStatus/Value'], 'Draft')), not(equals(triggerOutputs()?['body/RequestStatus/Value'], 'Resolved')))
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When an item is created or modified (V2)` | **SHAREPOINT** | `trigger` | MainDB_IT_Ext_Support (Filter: Status != Draft) |
| **Step 2** | `Get manager (V2)` | **O365** | `action` | Lookup Submitter's Department Head & Plant GM via Entra ID |
| **Step 3** | `Calculate SLA Target Timestamp` | **DATA-OP** | `action` | addHours(utcNow(), if(equals(triggerOutputs()?['body/Priority/Value'], 'URGENT'), 4, 24)) |
| **Step 4** | `Start and wait for an approval (V2)` | **APPROVALS** | `action` | Dual-Tier Sign-off: Engineering HOD & Plant General Manager |
| **Step 5** | `Condition - Is Request Approved?` | **CONTROL** | `condition` | equals(outputs('Start_and_wait_for_an_approval_(V2)')?['body/outcome'], 'Approve') |
| **Step 6** | `Update item - Approved` | **SHAREPOINT** | `action` | MainDB_IT_Ext_Support · Set Status = Approved_Pending_Dispatch |
| **Step 7** | `Post adaptive card in a chat or channel` | **TEAMS** | `action` | IT Operations Channel · Alert On-duty Network Engineers |
| **Step 8** | `HTTP - Trigger SAP PM Maintenance Reservation` | **HTTP** | `action` | POST https://sap-gateway.ioi.internal/api/pm/reservations |
| **Step 9** | `Scope - Catch (Error Handling & Audit)` | **SCOPE** | `catch` | Runs after Scope - Try fails or times out · Logs exception to IT_Audit_Log & alerts SecOps |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Approval type** | `First to respond` | `triggerOutputs()?['body/Value']` | Core operational field in ITSSR workflow |
| **Title** | `[P1 URGENT] Approval Required: Boiler DCS Network Gateway Failure` | `triggerOutputs()?['body/Title']` | Core operational field in ITSSR workflow |
| **Assigned to** | `k.raman@acidchem.ioi.com.my; bh.lim@acidchem.ioi.com.my` | `triggerOutputs()?['body/ApproverEmails']` | Core operational field in ITSSR workflow |
| **Details** | `### IT Emergency Equipment Replacement **Submitter:** Ir. Ahmad Faisal **Location:** Johor Plant 2 · Rack 4B **Category:** Plant Automation / SCADA **Estimated Cost:** RM 14,800 *Click below to review technical dossier in Power Apps.*` | `triggerOutputs()?['body/Value']` | Core operational field in ITSSR workflow |
| **Item link** | `https://apps.powerapps.com/play/e/ioi-acidchem/a/itssr?dossierId=ITSSR-2026-0941` | `triggerOutputs()?['body/AppDossierURL']` | Core operational field in ITSSR workflow |
| **Item link description** | `View Ticket Dossier in IOI Acidchem Power Apps` | `triggerOutputs()?['body/Value']` | Core operational field in ITSSR workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
