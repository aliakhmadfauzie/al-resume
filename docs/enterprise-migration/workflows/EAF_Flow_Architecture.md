# Cloud Flow Architecture: EAF-Contractor-Access-Provisioning-Lifecycle

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Information Technology](https://img.shields.io/badge/Department-Information%20Technology-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **External Access Form (EAF)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **EAF-Contractor-Access-Provisioning-Lifecycle** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![EAF-Contractor-Access-Provisioning-Lifecycle](./../mockups/EAF_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When an item is created (V2)`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-IT`
* **Entity / List:** `MainDB_IT_Ext_Access`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/WorkflowStatus/Value'], 'Submitted')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When an item is created (V2)` | **SHAREPOINT** | `trigger` | MainDB_IT_Ext_Access (Trigger: New Submissions) |
| **Step 2** | `Get vendor NDA verification status` | **DATA-OP** | `action` | Check ISO 27001 NDA registry attachment & expiry date |
| **Step 3** | `Start and wait for an approval (V2)` | **APPROVALS** | `action` | Sequential: Department Sponsor -> CISO Security Clearance |
| **Step 4** | `Condition - Access Authorized?` | **CONTROL** | `condition` | equals(outputs('Start_and_wait_for_an_approval')?['body/outcome'], 'Approve') |
| **Step 5** | `Azure AD - Invite Guest User & Assign Security Group` | **AZURE-AD** | `action` | Add user to Entra ID Group: VPN-Contractors-Restricted |
| **Step 6** | `Send secure credentials email (V2)` | **OUTLOOK** | `action` | Encrypted message to Sponsor with temporary OTP credentials |
| **Step 7** | `Scope - Catch (Revocation & Breach Alert)` | **SCOPE** | `catch` | Rollback Entra ID provisioning & send high-severity SOC alert |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Approval type** | `Everyone must approve` | `triggerOutputs()?['body/Value']` | Core operational field in EAF workflow |
| **Title** | `External Access Authorization: Yokogawa DCS Remote Diagnostics (Yokogawa Malaysia Sdn Bhd)` | `triggerOutputs()?['body/VendorName']` | Core operational field in EAF workflow |
| **Assigned to** | `ciso@ioigroup.com; head.it@acidchem.ioi.com.my` | `triggerOutputs()?['body/CISO_Email']` | Core operational field in EAF workflow |
| **Details** | `### Contractor External Network Clearance **Vendor:** Yokogawa Malaysia Sdn Bhd **Contractor Lead:** Kenji Tanaka **Access Protocol:** TLS IPsec VPN + MFA Token **Access Duration:** 14 Calendar Days **NDA Signed:** Verified (Attached in SharePoint)` | `triggerOutputs()?['body/Value']` | Core operational field in EAF workflow |
| **Item link** | `https://apps.powerapps.com/play/e/ioi-acidchem/a/eaf?req=EAF-2026-0412` | `triggerOutputs()?['body/EAF_Link']` | Core operational field in EAF workflow |
| **Item link description** | `Review Contractor Security Assessment` | `triggerOutputs()?['body/Value']` | Core operational field in EAF workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
