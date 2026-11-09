# Cloud Flow Architecture: SHE-Incident-Statutory-DOSH-Escalation-CAPA

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Safety, Health & Environment](https://img.shields.io/badge/Department-Safety%2C%20Health%20%26%20Environment-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Incident & Accident Reporting (SHEINCIACCI)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **SHE-Incident-Statutory-DOSH-Escalation-CAPA** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![SHE-Incident-Statutory-DOSH-Escalation-CAPA](./../mockups/SHEINCIACCI_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When an incident is logged (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-SHE`
* **Entity / List:** `SHE_IncidentMaster`
* **Trigger Filter Expression:**
```text
@not(empty(triggerOutputs()?['body/IncidentSeverity/Value']))
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When an incident is logged (V2)` | **SHAREPOINT** | `trigger` | SHE_IncidentMaster · Instant plant intake |
| **Step 2** | `Data Operation - Calculate Statutory 24-hr DOSH Window` | **DATA-OP** | `action` | addHours(triggerOutputs()?['body/IncidentTime'], 24) |
| **Step 3** | `Post adaptive card in Teams (High Priority Incident Alert)` | **TEAMS** | `action` | Emergency broadcast to Plant GM, Safety Committee & Legal Counsel |
| **Step 4** | `Condition - Is Lost Time Injury (LTI) or Dangerous Occurrence?` | **CONTROL** | `condition` | or(equals(variables('Severity'), 'LTI'), equals(variables('Severity'), 'Dangerous_Occurrence')) |
| **Step 5** | `Convert file - Generate Draft DOSH JKKP 6/8 Statutory Form` | **SHAREPOINT** | `action` | Scaffold pre-populated regulatory submission document |
| **Step 6** | `Start and wait for an approval (V2) - 5-Whys RCFA Sign-off` | **APPROVALS** | `action` | SHE Manager & Operations Head validation of corrective actions |
| **Step 7** | `Scope - Catch (Regulatory Breach Safeguard)` | **SCOPE** | `catch` | Auto-dial emergency safety coordinator if workflow stalls |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Post as** | `Flow bot` | `triggerOutputs()?['body/Value']` | Core operational field in SHEINCIACCI workflow |
| **Post in** | `Channel` | `triggerOutputs()?['body/Value']` | Core operational field in SHEINCIACCI workflow |
| **Team** | `IOI Acidchem - Safety Emergency Response Team` | `triggerOutputs()?['body/Value']` | Core operational field in SHEINCIACCI workflow |
| **Channel** | `🚨-critical-incident-hotline` | `triggerOutputs()?['body/Value']` | Core operational field in SHEINCIACCI workflow |
| **Adaptive Card Payload** | `{   "type": "AdaptiveCard",   "version": "1.4",   "body": [     {       "type": "TextBlock",       "text": "⚠️ STATUTORY DOSH INCIDENT ESCALATION",       "weight": "Bolder",       "color": "Attention",       "size": "Medium"     },     {       "type": "FactSet",       "facts": [         {"title": "Incident No:", "value": "@{triggerOutputs()?['body/Title']}"},         {"title": "Severity:", "value": "@{triggerOutputs()?['body/IncidentSeverity/Value']}"},         {"title": "Location:", "value": "@{triggerOutputs()?['body/PlantArea/Value']}"},         {"title": "DOSH 24h Deadline:", "value": "@{variables('DOSH_Deadline_Time')}"}       ]     }   ] }` | `triggerOutputs()?['body/Value']` | Core operational field in SHEINCIACCI workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
