# Cloud Flow Architecture: CAR-Capex-MultiTier-Executive-Authorization

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Finance](https://img.shields.io/badge/Department-Finance-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Capital Appropriation Request (CAR)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **CAR-Capex-MultiTier-Executive-Authorization** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![CAR-Capex-MultiTier-Executive-Authorization](./../mockups/CAR_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When an item is created or modified (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-Finance`
* **Entity / List:** `FIN_CAR_Master`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/ApprovalStatus/Value'], 'Pending_Finance_Review')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When an item is created or modified (V2)` | **SHAREPOINT** | `trigger` | FIN_CAR_Master · Financial sign-off trigger |
| **Step 2** | `Data Operation - Validate NPV / IRR Financial Thresholds` | **DATA-OP** | `action` | Verify financial metrics meet Group Treasury guidelines |
| **Step 3** | `Start and wait for an approval (V2)` | **APPROVALS** | `action` | 3-Tier Executive Chain: Plant GM -> Financial Controller -> Managing Director |
| **Step 4** | `Condition - Unanimously Approved?` | **CONTROL** | `condition` | equals(outputs('Start_and_wait_for_an_approval')?['body/outcome'], 'Approve') |
| **Step 5** | `HTTP - Create SAP WBS Element & Internal Order` | **HTTP** | `action` | POST https://sap-gateway.ioi.internal/api/co/internal-orders |
| **Step 6** | `Update item - Mark as Authorized with Cryptographic Hash` | **SHAREPOINT** | `action` | Store SHA-256 digital signature of board approval |
| **Step 7** | `Scope - Catch (Rollback & Executive Alert)` | **SCOPE** | `catch` | Notify Group Internal Audit and release budget reservation |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Approval type** | `Everyone must approve (Sequential)` | `triggerOutputs()?['body/Value']` | Core operational field in CAR workflow |
| **Title** | `CAPEX Authorization (RM 1,250,000): Plant 2 Fractionation Energy Recovery Heat Exchanger` | `triggerOutputs()?['body/CapexAmount']` | Core operational field in CAR workflow |
| **Assigned to** | `plant.gm@acidchem.ioi.com.my; fin.controller@ioigroup.com; md@ioigroup.com` | `triggerOutputs()?['body/ExecutiveApproverChain']` | Core operational field in CAR workflow |
| **Details** | `### Capital Expenditure Appropriation Dossier **CAR Code:** CAR-2026-PG-088 **Asset Class:** Plant Machinery & Decarbonization **Total Outlay:** RM 1,250,000 **Financial ROI / Payback:** 2.1 Years · IRR 24.8% **Budget Provision:** Included in FY2026 CAPEX Plan *Full engineering feasibility & vendor quotes attached.*` | `triggerOutputs()?['body/Value']` | Core operational field in CAR workflow |
| **Item link** | `https://apps.powerapps.com/play/e/ioi-acidchem/a/car?carId=CAR-2026-PG-088` | `triggerOutputs()?['body/CAR_Dossier_Link']` | Core operational field in CAR workflow |
| **Item link description** | `Open Financial Dossier in Power Apps` | `triggerOutputs()?['body/Value']` | Core operational field in CAR workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
