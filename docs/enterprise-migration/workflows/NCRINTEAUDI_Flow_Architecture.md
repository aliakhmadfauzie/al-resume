# Cloud Flow Architecture: NCR-ISO-Audit-Containment-CAPA-Signoff

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Quality Assurance](https://img.shields.io/badge/Department-Quality%20Assurance-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Internal Audit Non-Conformance (NCRINTEAUDI)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **NCR-ISO-Audit-Containment-CAPA-Signoff** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![NCR-ISO-Audit-Containment-CAPA-Signoff](./../mockups/NCRINTEAUDI_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When an audit NCR is opened (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-QA`
* **Entity / List:** `QA_AuditNCR_Master`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/NCRStatus/Value'], 'Open_Containment_Required')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When an audit NCR is opened (V2)` | **SHAREPOINT** | `trigger` | QA_AuditNCR_Master · Audit finding logged |
| **Step 2** | `Data Operation - Calculate 48-Hour Containment Deadline` | **DATA-OP** | `action` | Enforce statutory ISO 9001 48-hr immediate containment window |
| **Step 3** | `Post adaptive card in Teams - Immediate Containment Order` | **TEAMS** | `action` | Alert Section Manager with countdown timer for quarantine actions |
| **Step 4** | `Start and wait for an approval (V2) - Lead Auditor CAPA Sign-off` | **APPROVALS** | `action` | Lead Auditor reviews 5-Whys fishbone analysis & long-term systemic fix |
| **Step 5** | `Create item - Schedule 30-Day Post-Implementation Audit Check` | **SHAREPOINT** | `action` | Add task to QA Audit Follow-Up Schedule in SharePoint |
| **Step 6** | `Scope - Catch (Audit Escalation to QA Director)` | **SCOPE** | `catch` | Escalate to Managing Director if 48h containment is breached |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Inputs** | `addHours(triggerOutputs()?['body/Created'], 48)` | `triggerOutputs()?['body/CreatedTimestamp']` | Core operational field in NCRINTEAUDI workflow |
| **Formula representation** | `fx addHours(triggerOutputs()?['body/Created'], 48)` | `triggerOutputs()?['body/Value']` | Core operational field in NCRINTEAUDI workflow |
| **ISO Clause Reference** | `ISO 9001:2015 Clause 8.7 (Non-conforming Outputs) & FSSC 22000` | `triggerOutputs()?['body/ISO_Standard']` | Core operational field in NCRINTEAUDI workflow |
| **Escalation Alert Interval** | `Every 12 Hours until Containment Action Plan Submitted` | `triggerOutputs()?['body/Value']` | Core operational field in NCRINTEAUDI workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
