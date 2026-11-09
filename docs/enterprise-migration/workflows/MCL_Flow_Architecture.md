# Cloud Flow Architecture: MCL-Outpatient-Claim-Quota-SAP-Batch-Export

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Human Resources](https://img.shields.io/badge/Department-Human%20Resources-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Medical Claims & Benefits (MCL)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **MCL-Outpatient-Claim-Quota-SAP-Batch-Export** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![MCL-Outpatient-Claim-Quota-SAP-Batch-Export](./../mockups/MCL_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When a claim item is created (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-HR`
* **Entity / List:** `HR_MedicalClaims`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/ClaimStatus/Value'], 'Submitted')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When a claim item is created (V2)` | **SHAREPOINT** | `trigger` | HR_MedicalClaims · Submissions queue |
| **Step 2** | `Extract information from receipts (AI Builder)` | **AI-BUILDER** | `action` | OCR parsing of clinic receipt total, clinic name & tax ID |
| **Step 3** | `Get items - Query YTD Medical Claim Balance` | **SHAREPOINT** | `action` | Calculate remaining annual dental/optical/outpatient ceiling |
| **Step 4** | `Condition - Claim <= Annual Ceiling?` | **CONTROL** | `condition` | lessOrEquals(variables('ClaimAmount'), variables('RemainingQuota')) |
| **Step 5** | `Start and wait for an approval (V2)` | **APPROVALS** | `action` | HR Benefits Officer (Auto-approve if < RM150 with panel clinic) |
| **Step 6** | `HTTP - Export to SAP HCM Payroll Wage Type 2010` | **HTTP** | `action` | POST https://sap-gateway.ioi.internal/api/hcm/medical-claims |
| **Step 7** | `Scope - Catch (Audit Exception Log)` | **SCOPE** | `catch` | Flag claim for manual HR compensation review |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **AI Model** | `Receipt Processing Prebuilt Model` | `triggerOutputs()?['body/Value']` | Core operational field in MCL workflow |
| **Receipt file** | `triggerOutputs()?['body/{Attachment}']` | `triggerOutputs()?['body/ReceiptAttachment']` | Core operational field in MCL workflow |
| **Confidence threshold** | `0.85` | `triggerOutputs()?['body/Value']` | Core operational field in MCL workflow |
| **Validation fields** | `• Clinic / Merchant Name • Total Transaction Amount (MYR) • Receipt Date & Invoice Number • Itemized Prescription / Consultation Fees` | `triggerOutputs()?['body/Value']` | Core operational field in MCL workflow |
| **Output target** | `variables('ClaimExtractedAmount')` | `triggerOutputs()?['body/ExtractedTotal']` | Core operational field in MCL workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
