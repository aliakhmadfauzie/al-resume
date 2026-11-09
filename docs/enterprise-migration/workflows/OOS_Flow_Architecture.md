# Cloud Flow Architecture: OOS-Lab-Chemical-Quarantine-Disposition-Flow

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Quality Control](https://img.shields.io/badge/Department-Quality%20Control-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Out-of-Specification & CAPA (OOS)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **OOS-Lab-Chemical-Quarantine-Disposition-Flow** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![OOS-Lab-Chemical-Quarantine-Disposition-Flow](./../mockups/OOS_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When an OOS variance is detected`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-QC`
* **Entity / List:** `QC_OOS_Master`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/DispositionStatus/Value'], 'Quarantine_Triggered')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When an OOS variance is detected` | **SHAREPOINT** | `trigger` | QC_OOS_Master · Lab test variance logged |
| **Step 2** | `HTTP - Lock Storage Tank to QUARANTINE in SAP ERP` | **HTTP** | `action` | Instantly lock automated loading valves and tanker filling arms |
| **Step 3** | `Send SMS / Priority Push Alert - Refinery Superintendent` | **OUTLOOK** | `action` | Alert Production Head: Batch #B26-092 quarantined |
| **Step 4** | `Start and wait for an approval (V2) - Chief Chemist Disposition` | **APPROVALS** | `action` | Options: Re-fractionation, Down-blending, or Downgrade to Technical Grade |
| **Step 5** | `Condition - Released or Reprocessed?` | **CONTROL** | `condition` | equals(outputs('Start_and_wait_for_an_approval')?['body/outcome'], 'Release') |
| **Step 6** | `HTTP - Unlock SAP Tank Quality Status` | **HTTP** | `action` | Update SAP QM inspection lot with disposition certificate |
| **Step 7** | `Scope - Catch (Quality Safeguard Interlock)` | **SCOPE** | `catch` | Ensure tank remains strictly locked if error occurs during flow |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Method** | `PUT` | `triggerOutputs()?['body/Value']` | Core operational field in OOS workflow |
| **URI** | `https://sap-gateway.ioi.internal/api/qm/storage-tanks/quarantine` | `triggerOutputs()?['body/SAP_QM_Gateway']` | Core operational field in OOS workflow |
| **Headers** | `Authorization: Bearer @{variables('SAP_Auth_Token')} Content-Type: application/json x-facility: JOHOR_PLANT_2` | `triggerOutputs()?['body/Value']` | Core operational field in OOS workflow |
| **Body** | `{   "storageTankId": "@{triggerOutputs()?['body/StorageTankID']}",   "batchNumber": "@{triggerOutputs()?['body/BatchNumber']}",   "productGrade": "Triple Pressed Stearic Acid (TPSA)",   "quarantineStatus": "LOCKED_QUALITY_HOLD",   "varianceReason": "Acid Value 203.2 mg KOH/g (Specification Limit: 206.0 - 210.0)",   "chemistBadge": "@{triggerOutputs()?['body/ChemistBadgeNo']}" }` | `triggerOutputs()?['body/Value']` | Core operational field in OOS workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
