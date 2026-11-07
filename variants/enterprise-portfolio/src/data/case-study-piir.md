# Case Study: Industrial Incident Report System

**By Ali Akhmad Fauzie** · Enterprise Power Platform & Dynamics 365 Solution Architect

> Enterprise safety management platform — 27K+ records, 247-field incident form, 8-state workflow engine, 9 automated notification agents, 4-form application suite. Built for a palm oil refinery and oleochemical manufacturing facility.

---

## Overview

| Metric               | Value                            |
| -------------------- | -------------------------------- |
| **Documents**        | 27,353                           |
| **Data Volume**      | 2.3 GB                           |
| **Forms**            | 4 (Incident, Reminder, OAR, EIR) |
| **Fields**           | 247 (Incident form)              |
| **Workflow States**  | 8                                |
| **Scheduled Agents** | 9                                |
| **Views**            | 28                               |
| **Active Users**     | Multi-site (Penang + Johor)      |

---

## The Problem

Industrial facilities face a critical challenge: **when an incident occurs, every second counts** — but legacy systems create friction at exactly the moment you need speed.

The existing system was built on Lotus Domino (20+ years old). It worked, but it had fundamental limitations:

- **No mobile access** — incident reports could only be filed from desktop workstations
- **No real-time notifications** — scheduled agents ran daily, not instantly
- **No relational data model** — 247 fields on a single flat form, with 10 parallel corrective action slots (70 fields) instead of a proper child table
- **No SSO or MFA** — security depended on Domino's proprietary authentication
- **No audit trails** — regulatory compliance required manual record-keeping
- **Limited developer talent** — proprietary platform with a shrinking expert pool

The business needed an enterprise-grade incident management system that could handle **high-volume, multi-site operations** with proper workflow automation, regulatory compliance (OAR/EIR filings), and real-time notifications.

---

## Architecture

### System Design — 4-Form Application Suite

```
┌─────────────────────────────────────────────────────┐
│              INCIDENT MANAGEMENT SYSTEM              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌───────────────┐     ┌───────────────┐           │
│  │   INCIDENT    │     │   REMINDER    │           │
│  │   (Main App)  │────▶│   (Notifier)  │           │
│  │   247 fields  │     │   6 fields    │           │
│  │   13 actions  │     │   9 agents    │           │
│  └───────┬───────┘     └───────────────┘           │
│          │                                          │
│     ┌────┴────┐                                     │
│     │         │                                     │
│  ┌──▼──┐  ┌──▼──┐                                  │
│  │ OAR │  │ EIR │  ← Regulatory Sub-Reports        │
│  │ 16  │  │ 16  │    (Occupational Accident +      │
│  │flds │  │flds │     Environmental Incident)      │
│  └─────┘  └─────┘                                  │
└─────────────────────────────────────────────────────┘
```

### Data Model Highlights

**Incident Form (247 fields)** — the core of the system:

| Category           | Fields                                                  | Purpose                         |
| ------------------ | ------------------------------------------------------- | ------------------------------- |
| Classification     | Company, Type, Level                                    | Incident type and severity      |
| Incident Details   | Date, Time, Location, Description                       | What happened and where         |
| Injured Person     | Name, NRIC, Employee No, Designation                    | Who was affected                |
| PPE Checklist      | E_1 through E_34 (34 yes/no fields)                     | Equipment and safety compliance |
| Investigation      | Coordinator, InvTeam, Method                            | Who investigated and how        |
| Narrative          | Before, During, After                                   | Incident timeline               |
| Corrective Actions | 10 slots × 7 fields (RC/AT/PIC/CompDate/HS/Ver/VerDate) | Root causes and remediation     |
| Workflow State     | CurrentAction + 8 Editor fields                         | Dynamic access control          |
| Approvals          | App1/App2/App3 + Name/Date/Comment                      | 3-level approval chain          |

**Key Design Pattern: Repeating Groups Without Subforms**

Instead of a child table, the system uses 10 parallel field sets for corrective actions:

```
RC_1  AT_1  PIC_1  CompDate_1  HS_1  Ver_1  VerDate_1  AttH_1
RC_2  AT_2  PIC_2  CompDate_2  HS_2  Ver_2  VerDate_2  AttH_2
...
RC_10 AT_10 PIC_10 CompDate_10 HS_10 Ver_10 VerDate_10 AttH_10
```

Progress is tracked via computed aggregation:
```
TotalReq = Sum(R1:R2:...:R10)   — corrective actions required
TotalDone = Sum(S1:S2:...:S10)  — corrective actions verified + closed
```

This gives a simple completion percentage without complex reporting.

---

## Workflow Engine

### 8-State State Machine with Level-Dependent Branching

```
                    ┌─────────────┐
                    │   REQUEST   │  ← Reporter files incident
                    └──────┬──────┘
                           │ Submit
                           ▼
                    ┌─────────────┐
                    │  SUBMITTED  │  ← SHE team receives
                    └──────┬──────┘
                           │ Assign Investigation
                           ▼
                    ┌─────────────┐
                    │ SUBMITTED-  │  ← Coordinator + team investigates
                    │    INV      │
                    └──────┬──────┘
                           │ Submit Report
                           ▼
                    ┌─────────────┐
                    │ SUBMITTED-  │  ← Investigation report submitted
                    │   REPORT    │
                    └──────┬──────┘
                           │ HOD Approve
                           ▼
                    ┌─────────────┐
                    │ APPROVED-   │  ← HOD approves investigation
                    │    HOD      │
                    └──────┬──────┘
                           │ SHE HOD Approve
                           ▼
                    ┌─────────────┐
                    │ APPROVED-   │  ← SHE HOD approves
                    │  SHEHOD     │
                    └──────┬──────┘
                           │ Final Approve
                           ▼
                    ┌─────────────┐
                    │ APPROVED-   │  ← COO/GM final approval
                    │   FINAL     │
                    └──────┬──────┘
                           │ Verify Actions
                           ▼
                    ┌─────────────┐
                    │  VERIFIED   │  ← All corrective actions verified
                    └─────────────┘

  AT ANY POINT: [Withdrawn] ← SHEHOD can withdraw with reason
```

### Severity-Dependent Approval Chain

| Level       | Classification                                           | Approval Chain           |
| ----------- | -------------------------------------------------------- | ------------------------ |
| **Level 1** | Lost Time Injury / Major Environmental or Process Safety | HOD → SHE HOD → GM + COO |
| **Level 2** | Minor Injury / Medium Environmental or Process Safety    | HOD → SHE HOD → COO      |
| **Level 3** | First Aid Case / Minor Environmental or Process Safety   | HOD → SHE HOD → COO      |

The approval path changes based on incident severity — a common pattern in safety systems that requires careful state machine design.

### Role-Based Access Control

8 computed `Editor` fields form a dynamic ACL that controls who can see/edit which buttons at each workflow stage:

| Editor  | Active When                        | Controls Access For              |
| ------- | ---------------------------------- | -------------------------------- |
| Editor1 | `CurrentAction="Request"`          | Reporter (DocAuthor)             |
| Editor2 | `CurrentAction="Submitted"`        | SHE / SHEHOD                     |
| Editor3 | `CurrentAction="Submitted-Inv"`    | Coordinator + Investigation Team |
| Editor4 | `CurrentAction="Submitted-Report"` | HOD                              |
| Editor5 | `CurrentAction="Approved-HOD"`     | SHE HOD                          |
| Editor6 | `CurrentAction="Approved-SHEHOD"`  | GM+COO (L1) or COO (L2/3)        |
| Editor7 | `CurrentAction="Approved-Final"`   | SHE                              |
| Editor8 | Any non-request state              | SHEHOD (withdrawal)              |

---

## Notification Engine

### 9 Scheduled Agents

The Reminder form is a lightweight notification record (6 fields) created by scheduled agents that run daily:

| Agent            | Purpose                                             |
| ---------------- | --------------------------------------------------- |
| `RemPdgSHE`      | Remind SHE team of pending incidents                |
| `RemPdgInv`      | Remind investigation team of pending investigations |
| `RemPdgFinalApp` | Remind final approvers of pending approvals         |
| `RemPdgSHEVeri`  | Remind SHE of pending verifications                 |
| `RemPdgHOD`      | Remind HODs of pending report reviews               |
| `RemPdgSHEHOD`   | Remind SHE HOD of pending approvals                 |
| `RemPdgAction`   | Remind PIC of overdue corrective actions            |
| `RemOARPdgSHE`   | Remind SHE of pending OAR filings                   |
| `RemEIRPdgSHE`   | Remind SHE of pending EIR filings                   |

### Notification Flow

Each major state transition triggers an email with a doclink back to the incident:

```
[Submit] → Email to SHE team:
  Subject: "Pancen Industrial Incident Report - {ReportNo} - {Level} - Submitted to SHE"

[Approve HOD] → Email to SHEHOD:
  Subject: "Pancen Industrial Incident Report - {ReportNo} - {Level} - Approved by HOD"

[Approve SHEHOD] → Email to GM/COO:
  Subject: "Pancen Industrial Incident Report - {ReportNo} - {Level} - Approved by SHE HOD"

[Reject] → Email to Notifier:
  Subject: "Pancen Industrial Incident Report - {ReportNo} - {Level} - Rejected by {Approver}"
  Body includes rejection reason
```

---

## Key Design Patterns

### 1. Dynamic Access Control via Computed Fields

Instead of a separate permissions table, the system uses 8 `Editor` fields that resolve to different users based on the current workflow state. This is Domino's way of implementing RBAC without a relational permissions model.

### 2. Reminder Documents as Notification Decoupling

Instead of sending emails directly from the main form, the system creates Reminder documents — a lightweight notification record that scheduled agents process daily. This decouples notification timing from form submission and allows batch processing.

### 3. Auto-Numbering via LotusScript QuerySave

A QuerySave agent generates sequential running numbers (`2026-01-0042`) by reading a counter document and incrementing it:

```vb
Sub Querysave(Source As Notesuidocument, Continue As Variant)
  If TempNum$ = "" And TempStatus$ = "Submitted" Then
    p = doc.GetItemValue("INO")
    c = Val(p(0)) + 1
    x = Trim(Str(c))
    Do While Len(x) < 4
      x = "0" & Trim(x)
    Loop
    uidoc.FieldSetText "INO", x
  End If
End Sub
```

### 4. Level-Dependent Notification Routing

Email recipients change based on incident severity:
- **Level 1**: ED, GM, COO, PanCen Group, DocAuthor, HOD, CC
- **Level 2**: ED, GM, COO, PCNMGR, DocAuthor, HOD, CC
- **Level 3**: COO, PCNMGR, DocAuthor, HOD, CC

### 5. Progress Tracking via Computed Aggregation

Corrective action completion is tracked using computed fields that count "done" items:
```
R1 = @If(AT_1_1!="";"1";"0")     — action exists?
S1 = @If(HS_1="Closed" & VerDate_1!="";"1";"0")  — action verified + closed?
TotalReq = Sum(R1:R2:...:R10)
TotalDone = Sum(S1:S2:...:S10)
```

---

## Regulatory Compliance

### OAR (Occupational Accident Register)

Government-mandated occupational safety reporting. Created from the Incident form after investigation.

- **Report Number**: `"OSH - " + FY + " - " + Period`
- **Period**: 1st Half (Jul-Dec) / Yearly (Jul-Jun)
- **Workflow**: Draft → Submitted → SHE HOD Approves/Rejects → Final

### EIR (Environmental Incident Register)

Identical structure to OAR but for environmental incidents.

- **Report Number**: `"ENV - " + FY + " - " + Period`
- **Workflow**: Same as OAR

---

## Technical Highlights

### Data Volume Handling

| Metric                | Value      |
| --------------------- | ---------- |
| Total Documents       | 27,353     |
| Disk Size             | 2.3 GB     |
| Average Document Size | ~86 KB     |
| Peak Concurrent Users | Multi-site |

### Access Control

| Level   | Who                                 |
| ------- | ----------------------------------- |
| Manager | 5 named individuals + server groups |
| Editor  | 2 named individuals + PanCen Group  |
| Default | No Access                           |

### Computed Role Resolution

10+ `@DbLookup` calls on every form open, each hitting the Domino Directory to resolve role groups:
- SHE, SHEHOD, SHEPIC, SHEAdmin, IT, ED, GM, COO, PCNMGR, PCNGRP

---

## Lessons Learned

1. **Repeating fields are a platform limitation** — The 10 corrective action slots (70 fields) would be a child table in any relational system. This pattern works but limits flexibility (max 10 actions, no dynamic sizing).

2. **Computed role resolution is expensive** — 10+ directory lookups per form open. Modern systems would use a role table or identity provider with caching.

3. **Reminder documents are clever but wasteful** — Creating a document to trigger a notification is unusual. Modern systems use event-driven notifications (webhooks, Power Automate, etc.).

4. **Level-dependent approval chains add complexity** — The approval path changes based on severity. This is a common pattern in safety systems but requires careful state machine design.

5. **247 fields on one form indicates accumulation** — This form has grown over many years as new requirements were added. A modern redesign would split this into 3-4 related tables.

6. **Sequential auto-numbering has race conditions** — The LotusScript QuerySave approach can produce duplicate numbers under concurrent load. Modern systems use database sequences or UUIDs.

---

## Migration Complexity Assessment

| Dimension              | Complexity | Notes                                   |
| ---------------------- | ---------- | --------------------------------------- |
| Field Count            | 🔴 Critical | 247 fields — extremely high             |
| Workflow States        | 🔴 Critical | 8 states with level-dependent branching |
| Repeating Groups       | 🟡 Moderate | 10 corrective action slots              |
| Role-Based Access      | 🟡 Moderate | 8 editor fields + 10 role groups        |
| Notifications          | 🟡 Moderate | 9 scheduled agents                      |
| Auto-Numbering         | 🟢 Low      | Sequential counter                      |
| Regulatory Sub-Reports | 🟡 Moderate | OAR + EIR with own workflows            |
| Data Volume            | 🔴 Critical | 27K+ documents, 2.3GB                   |
| Attachments            | 🟡 Moderate | 12 attachment fields                    |
| Custom Code            | 🟢 Low      | Only QuerySave for numbering            |

### Estimated Effort

| Component                            | Days           |
| ------------------------------------ | -------------- |
| Data schema design                   | 3-5            |
| Incident form UI                     | 5-8            |
| Investigation + corrective action UI | 5-8            |
| Workflow engine (8 states)           | 5-8            |
| Notification system                  | 3-5            |
| OAR/EIR sub-reports                  | 2-3            |
| Data migration (27K documents)       | 3-5            |
| Testing & validation                 | 5-8            |
| **Total**                            | **31-50 days** |

---

*This case study demonstrates enterprise-grade system design for high-volume industrial operations — handling 27K+ documents with complex multi-level workflows, regulatory compliance, and role-based access control across a multi-site manufacturing facility.*

---

**Author**: Ali Akhmad Fauzie · Enterprise Power Platform & Dynamics 365 Solution Architect
**Portfolio**: [aliakhmadfauzie.dev](https://aliakhmadfauzie.dev)
**LinkedIn**: [linkedin.com/in/aliakhmadf](https://linkedin.com/in/aliakhmadf)
