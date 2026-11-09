# Cloud Flow Architecture: MTP-Shutdown-Turnaround-Permit-Milestone-Sync

[![Platform: Microsoft Power Automate](https://img.shields.io/badge/Platform-Power%20Automate%20Modern%20Designer-0078D4.svg)](#)
[![Department: Plant Maintenance](https://img.shields.io/badge/Department-Plant%20Maintenance-green.svg)](#)
[![Status: Enterprise Ready](https://img.shields.io/badge/Status-Production%20Engineered-brightgreen.svg)](#)

Enterprise multi-stage cloud workflow engineered for **Turnaround & Overhaul Planning (MTP)** within the **IOI Acidchem Enterprise Platform**. Built to replace decades of legacy Lotus Domino email routing and agent scripts with declarative Power Automate connectors, automated SLA escalation, and full exception auditing.

---

## 📸 Assembled Flow Architecture Preview (Modern Designer Canvas)

Below is the verified full-resolution visual layout of **MTP-Shutdown-Turnaround-Permit-Milestone-Sync** inside the Microsoft Power Automate Modern Designer canvas (1920×1080):

![MTP-Shutdown-Turnaround-Permit-Milestone-Sync](./../mockups/MTP_Flow_Designer.png)

---

## 🏗️ Technical Specification & Workflow Pipeline

### 1. Trigger Definition
* **Connector:** `SharePoint`
* **Operation:** `When a turnaround milestone is updated`
* **Target Site:** `https://ioigroup.sharepoint.com/sites/IOI-Acidchem-Maintenance`
* **Entity / List:** `MTN_TurnaroundPlans`
* **Trigger Filter Expression:**
```text
@equals(triggerOutputs()?['body/MilestoneStatus/Value'], 'Ready_For_LOTO_Release')
```
* **Concurrency Control:** Degree of Parallelism = `5` (Enforces FIFO ordering for regulatory and audit parity).

---

### 2. Step-by-Step Logic Execution Table

| Execution Sequence | Action Name | Connector | Logic Type | Dynamic Content & Expressions |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | `When a turnaround milestone is updated` | **SHAREPOINT** | `trigger` | MTN_TurnaroundPlans · Milestone trigger |
| **Step 2** | `Get items - Verify All Lock-Out / Tag-Out (LOTO) Flange Isolations` | **SHAREPOINT** | `action` | Check that 100% of physical blind flanges and valve locks are verified |
| **Step 3** | `Start and wait for an approval (V2) - Multi-Discipline Safety Gate` | **APPROVALS** | `action` | Parallel approvals from Operations Head, Maintenance Head & Safety Head |
| **Step 4** | `Condition - All Three Heads Approved?` | **CONTROL** | `condition` | equals(outputs('Start_and_wait_for_an_approval')?['body/outcome'], 'Approve') |
| **Step 5** | `Update item - Release Digital Hot Work / Confined Space Permit (PTW)` | **SHAREPOINT** | `action` | Generate cryptographic permit token for contractor gate entry |
| **Step 6** | `Post adaptive card - Daily Shutdown Gantt Milestone Broadcast` | **TEAMS** | `action` | Publish updated critical path schedule to Plant Operations channel |
| **Step 7** | `Scope - Catch (Turnaround Stop-Work Escalation)` | **SCOPE** | `catch` | Issue immediate emergency work stop notice if LOTO fail detected |

---

### 3. Dynamic Content & Field Mapping Schema

| Parameter Name | Target Power Automate Token | Source Expression / JSON Attribute | Business Function |
| :--- | :--- | :--- | :--- |
| **Approval type** | `Everyone must approve (Parallel)` | `triggerOutputs()?['body/Value']` | Core operational field in MTP workflow |
| **Title** | `Safety Gate Release: Annual Statutory Boiler #2 Inspection & Overhaul (Package WBS-04)` | `triggerOutputs()?['body/WorkPackageTitle']` | Core operational field in MTP workflow |
| **Assigned to** | `head.ops@acidchem.ioi.com.my; head.mtn@acidchem.ioi.com.my; she.mgr@acidchem.ioi.com.my` | `triggerOutputs()?['body/TriDisciplineApprovers']` | Core operational field in MTP workflow |
| **Details** | `### Plant Turnaround Safety Gate & LOTO Verification **Turnaround Package:** Annual Boiler Overhaul 2026 **Boiler Tag:** BLR-02 (Statutory DOSH Registration: PMT-1049) **LOTO Isolation Tags Verified:** 28 Electrical & Steam Blind Flanges **Atmospheric Gas Test:** Confined Space Safe (O2: 20.9%, H2S: 0 ppm) **Contractor Safety Induction:** 42 External Riggers Cleared` | `triggerOutputs()?['body/Value']` | Core operational field in MTP workflow |
| **Item link** | `https://apps.powerapps.com/play/e/ioi-acidchem/a/mtp?pkgId=WBS-BLR-02-2026` | `triggerOutputs()?['body/TurnaroundPackageURL']` | Core operational field in MTP workflow |
| **Item link description** | `Review LOTO Isolation & Work Permits` | `triggerOutputs()?['body/Value']` | Core operational field in MTP workflow |

---

### 4. Enterprise Resilience & Error Handling (`Scope - Catch`)

* **Scope - Try:** Houses the primary business logic, multi-stage approval dispatch, and database mutation.
* **Scope - Catch Execution Trigger:** Configured with `runAfter: ["hasFailed", "hasTimedOut", "isSkipped"]`.
* **Telemetry & Escalation Actions:**
  1. **Filter Error Array:** Extracts root-cause failure codes from `result('Scope_Try')`.
  2. **Security & SecOps Broadcast:** Posts high-urgency Adaptive Card to Microsoft Teams Emergency Operations Channel.
  3. **Exception Audit Record:** Creates immutable entry in SharePoint `IT_Flow_Exceptions_Log` with SHA-256 event ID.
  4. **Graceful Termination:** Terminates workflow with status `Failed` and explicit business error message.
