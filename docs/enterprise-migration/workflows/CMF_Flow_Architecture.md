# Cloud Flow Architecture: CMF-Commercial-Credit-Risk-Rating-Approval

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Finance](https://img.shields.io/badge/Department-Finance-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Credit Management Form (CMF)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **CMF-Commercial-Credit-Risk-Rating-Approval** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![CMF-Commercial-Credit-Risk-Rating-Approval](./../mockups/CMF_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When a credit review is submitted`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-Finance`
* **Entity / List:** `FIN_CMF_Master`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/WorkflowStage/Value'], 'Under_Credit_Assessment')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When a credit review is submitted` | **SHAREPOINT** | `trigger` | FIN_CMF_Master · Commercial sales submission |
| **Step 2** | `HTTP - Query Commercial Credit Agency (D&B / CTOS API)` | **HTTP** | `action` | Retrieve credit score, litigation history & recommended credit ceiling |
| **Step 3** | `Parse JSON - Credit Bureau Response` | **DATA-OP** | `action` | Extract Risk Rating (A/B/C/D) and Bankruptcy Risk Index |
| **Step 4** | `Start and wait for an approval (V2)` | **APPROVALS** | `action` | Credit Committee: Head of Commercial & Finance Director |
| **Step 5** | `HTTP - Update SAP SD Customer Master Credit Limit` | **HTTP** | `action` | PATCH https://sap-gateway.ioi.internal/api/sd/customer-credit |
| **Step 6** | `Send an email (V2) - Official Credit Term Facility Letter` | **OUTLOOK** | `action` | Send PDF credit facility agreement to customer & sales agent |
| **Step 7** | `Scope - Catch (Credit Freeze & Exception Alert)` | **SCOPE** | `catch` | Lock customer account in SAP and alert Credit Risk Manager |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Method** | `POST` | `triggerOutputs()?['body/Value']` | Core operational field in CMF workflow |
| **URI** | `https://api.credit-bureau.com/v2/corporate/risk-score` | `triggerOutputs()?['body/CreditAPI_Endpoint']` | Core operational field in CMF workflow |
| **Headers** | `Authorization: Bearer @{parameters('CreditBureauAPIKey')} Content-Type: application/json x-corp-id: IOI-OLEO-MY` | `triggerOutputs()?['body/Value']` | Core operational field in CMF workflow |
| **Body** | `{   "registrationNumber": "@{triggerOutputs()?['body/BusinessRegNo']}",   "companyName": "@{triggerOutputs()?['body/CustomerName']}",   "requestedCreditLimit": @{triggerOutputs()?['body/RequestedLimitMYR']},   "country": "MYS" }` | `triggerOutputs()?['body/Value']` | Core operational field in CMF workflow |
| **Timeout** | `PT30S` | `triggerOutputs()?['body/Value']` | Core operational field in CMF workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
