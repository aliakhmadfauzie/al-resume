# Cloud Flow Architecture: PPEREQU-Hazard-Zone-Quota-Stock-Issuance

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Safety, Health & Environment](https://img.shields.io/badge/Department-Safety%2C%20Health%20%26%20Environment-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **PPE Requisition & Issuance (PPEREQU)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **PPEREQU-Hazard-Zone-Quota-Stock-Issuance** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![PPEREQU-Hazard-Zone-Quota-Stock-Issuance](./../mockups/PPEREQU_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When a PPE requisition is created`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-SHE`
* **Entity / List:** `SHE_PPERequests`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/ReqStatus/Value'], 'Pending_Safety_Check')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When a PPE requisition is created` | **SHAREPOINT** | `trigger` | SHE_PPERequests · Employee safety request |
| **Step 2** | `Get items - Query Hazard Zone PPE Matrix & Replacement Frequency` | **SHAREPOINT** | `action` | Enforce statutory replacement interval (e.g. 6 months for cartridges) |
| **Step 3** | `Start and wait for an approval (V2)` | **APPROVALS** | `action` | Safety Officer Endorsement for high-risk corrosive zone access |
| **Step 4** | `Condition - Safety Officer Endorsed?` | **CONTROL** | `condition` | equals(outputs('Start_and_wait_for_an_approval')?['body/outcome'], 'Approve') |
| **Step 5** | `Update item - Decrement Warehouse Stock in SHE_PPE_Inventory` | **SHAREPOINT** | `action` | Reserve item and trigger reorder trigger if below safety buffer |
| **Step 6** | `Post message in chat - Central Store Pick & Pack Dispatch` | **TEAMS** | `action` | Notify storekeeper with worker badge QR code for issuance scan |
| **Step 7** | `Scope - Catch (Inventory Reversal & Audit Alert)` | **SCOPE** | `catch` | Restore stock quantity and notify plant SHE committee |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Approval type** | `First to respond` | `triggerOutputs()?['body/Value']` | Core operational field in PPEREQU workflow |
| **Title** | `Specialized PPE Requisition: Heavy-Duty Chemical Acid Suit & Respirator Cartridge` | `triggerOutputs()?['body/PPE_Item_Name']` | Core operational field in PPEREQU workflow |
| **Assigned to** | `she.officer.plant2@acidchem.ioi.com.my` | `triggerOutputs()?['body/ZoneSafetyOfficerEmail']` | Core operational field in PPEREQU workflow |
| **Details** | `### Hazard Zone Safety Equipment Clearance **Requester:** Ahmad Syafiq (Badge #5512) **Hazard Zone:** Fatty Acid Fractionation Unit 3 (Corrosive Atmosphere) **Item Requested:** Acid-Resistant PVC Overall (Level B) + Multi-Gas Cartridge **Replacement Reason:** Scheduled replacement cycle (6 Months expired) **Stock Availability:** In Stock (Central Safety Store: 14 units available)` | `triggerOutputs()?['body/Value']` | Core operational field in PPEREQU workflow |
| **Item link** | `https://apps.powerapps.com/play/e/ioi-acidchem/a/pperequ?reqId=PPE-2026-0819` | `triggerOutputs()?['body/PPE_Dossier_Link']` | Core operational field in PPEREQU workflow |
| **Item link description** | `Verify Hazard Zone Safety Compliance` | `triggerOutputs()?['body/Value']` | Core operational field in PPEREQU workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
