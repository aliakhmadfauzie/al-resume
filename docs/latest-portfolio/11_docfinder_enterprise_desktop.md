# DocFinder Enterprise Desktop — Product Requirements Document (PRD)
**Target Organization:** Accenture Trust & Safety Operations (T&S Floor Alpha)  
**Version:** 1.0.0-PROD  
**Document Status:** Approved for Engineering & Ops Dispatch  
**Primary Stakeholders:** T&S Delivery Leads, Floor Operations Managers, Security Forensics (SecOps), Regulatory Compliance, Legal Counsel  

---

## 1. Executive Summary & Problem Statement

### 1.1 Context
Accenture Trust & Safety operations process hundreds of thousands of high-stakes, time-sensitive escalation tickets across digital fraud, synthetic identity verification (KYC), account takeover (ATO), intellectual property disputes, and critical fast-path safety protocols (CSAM/threat escalation). 

### 1.2 Core Problem
Conventional enterprise knowledge bases and SaaS tooling suffer from "UI Slop": excessive whitespace, sluggish vector search latency, ambiguous version provenance, non-standardized layout shifts, and visual fatigue for operators working 8-hour high-cognitive-load shifts. An operator searching for a chargeback or refund exception clause cannot afford to read 40 pages of unindexed PDF or wait for multiple page redirects while an active breach or fraudulent transaction settles.

### 1.3 Solution
**DocFinder Enterprise Desktop** is an ultra-dense, keyboard-first, low-latency operational terminal engineered to eliminate friction between automated policy intelligence and human incident mitigation. It provides instant semantic retrieval of Standard Operating Procedures (SOPs), real-time split-diff policy version comparisons, and direct one-click action routing to floor agents and external systems (e.g., Lark, ticketing queues, L3 lead escalation).

---

## 2. Guiding Product & Architectural Principles ("Anti-UI-Slop")

1. **Information Density First**:
   - Zero gratuitous padding. Compact structural rhythm (`p-2.5` to `p-3`, `gap-2`).
   - Maximum vertical real estate efficiency; critical clauses must fit on standard 13"–15" enterprise laptop screens (1366x768 to 1920x1080) without requiring deep vertical scrolling.
2. **Predictable State Integrity**:
   - Every interface view explicitly implements three synchronized states: **Empty (Contextual Prompting)**, **Loading (Dimension-Matched Skeleton)**, and **Populated (Live Operational Telemetry)** to eliminate layout shift (Cumulative Layout Shift = 0.00).
3. **Color Discipline & Brand Semantics**:
   - Neutral Slate foundation (`slate-50` to `slate-900`) prevents visual burnout during extended shifts.
   - Accenture Purple (`#A100FF`) is strictly reserved for actionable user intent ("Purple = Actionable"). No neon drop shadows or gradient clutter.
4. **Data Integrity & Tabular Stability**:
   - Monospaced tabular numerals (`tabular-nums font-mono`) across all confidence scores, latencies, timestamps, and case counters to eliminate character jitter during live updates.
   - High-contrast visual highlighting for scanning operational thresholds (e.g., `"14-day window"`, `"24 Hours Continuous"`).
5. **Keyboard-Driven Velocity**:
   - 100% accessible via keyboard shortcuts (`⌘K` / `Ctrl+K` for search, `Tab` cycling, `J`/`K` diff navigation, `Enter` / `⌘↵` for dispatch).

---

## 3. System Scope & Core Functional Modules

### 3.1 Module 1: SOP Search & Retrieval Engine (`SCREEN_4`)
* **Live Semantic Retrieval**: Vector-indexed retrieval over enterprise SOP corpus (Embedding-Gecko-v4 / T&S-US-EAST shard) returning sub-50ms query responses.
* **Metadata & Confidence Scoring**:
  - Semantic match rating displayed in monospaced badge (e.g., `98.4% MATCH`).
  - Active policy version, global jurisdiction tag, last audit timestamp, and custodian unit.
* **Contextual Token Highlighting**: Exact-match and semantic token highlight blocks within extracted clause snippets.
* **Direct Action Routing Handoffs**:
  - `Push to Agent Chat [P]`: Dispatches grounded clause citation directly into agent conversation window.
  - `Open Lark SOP`: Deep-links into the authoritative enterprise document repo.
  - `Copy Citation [⌘C]`: Copies markdown-formatted legal attribution.
  - `Escalate to L3 Lead [E]`: Opens fast-track incident override ticket with attached telemetry.

### 3.2 Module 2: Policy Library & Versioning / Comparative Diff (`SCREEN_2`)
* **Comparative Dual-Pane Split Diff**:
  - Side-by-side synchronized comparison between Baseline Archive (e.g., `v4.1.1 Superseded`) and Target Production (e.g., `v4.1.2 Active Hotfix`).
  - Strict line-by-line gutter numbering and diff tallies (`+24 additions`, `-18 deletions`).
  - View modes: Split Diff, Unified Inline, and Changelog.
* **Policy Ledger Sub-Rail**:
  - Category filters: `Financial`, `ATO & Security`, `Regulatory & Legal`, `CSAM / Critical`.
  - Version tags, active status pills, domain indicators, and recency timestamps.
* **Governance & Audit Trail Forensics**:
  - Change Request attribution (`CR-2025-0891`), legal counsel sign-off (`T&S Global Legal - M. Sterling`), operational floor impact assessment (`Tier-2 Mod Lead: 42 cases`).
  - Fast-action buttons: `Export Redline PDF`, `Rollback (L3 Lead Req.)`, `Acknowledge Version Readout [⌘↵]`.

### 3.3 Module 3: Audit & Incident Logs (Planned Extension)
* Real-time ledger of all floor agent lookups, policy citations pushed to tickets, and override escalations.
* Exportable compliance bundle for internal and external ISO/SOC2 audits.

### 3.4 Module 4: Team Lead Dispatch & Queue Management (Planned Extension)
* Live capacity balancing, shift roster tracking (NA-East Morning, EMEA Evening, APAC Night), and hotfix broadcast distribution.

---

## 4. Technical Architecture & Non-Functional Requirements

### 4.1 Frontend Specifications
* **Framework / Styling**: HTML5, Tailwind CSS, Lucide icons, Google Sans & Hanken Grotesk / JetBrains Mono typography.
* **Performance Budget**:
  - First Contentful Paint (FCP): < 400ms.
  - Time to Interactive (TTI): < 650ms.
  - Vector search query dispatch to render: < 60ms.
* **Accessibility**: WCAG 2.1 Level AA compliant; forced high-contrast focus rings (`focus-visible:ring-2 focus-visible:ring-[#A100FF]`).

### 4.2 Security, Privacy & Data Compliance
* Zero client-side logging of PII/customer-sensitive payload data.
* Role-Based Access Control (RBAC):
  - *Tier-1 Agent*: Read SOP, Push to Chat, Copy Citation.
  - *Tier-2 Mod Lead*: Read Diff, Acknowledge Readouts, Create Shift Notes.
  - *Tier-3 SecOps / Legal Lead*: Trigger Rollback, Author Policy Updates, Override Hotfixes.

---

## 5. User Roles & Personas

| Role | Primary Goal | Critical Pain Point Solved |
|:---|:---|:---|
| **Tier-1 T&S Floor Agent** | Resolve 60+ user disputes/tickets per shift with 100% adherence to active policy. | Instant answer extraction without searching massive PDF manuals; 1-click citation push to chat. |
| **Tier-2 Team Lead (TL)** | Monitor floor queues, verify edge-case escalations, confirm policy updates during shift handoff. | Instant visual diff of hotfixes without guessing what changed in clauses; queue telemetry. |
| **SecOps & Legal Compliance Counsel** | Ensure operational alignment with consumer protection directives and statutory laws. | Immutable audit trail, change request (CR) governance tagging, and one-click redline export. |

---

## 6. Release Roadmap & Implementation Milestones

* **Milestone 1 (Shipped)**: SOP Search & Retrieval Engine (`SCREEN_4`) with 3-state architecture, keyboard shortcuts, and semantic action routing.
* **Milestone 2 (Shipped)**: Policy Library & Versioning comparative split-diff workspace (`SCREEN_2`) with governance forensics and domain filtering.
* **Milestone 3 (Next Sprint)**: Audit & Incident Logs interface with filterable compliance telemetry and agent citation histories.
* **Milestone 4 (Future)**: Shift Queue Dispatcher & real-time Lark / Slack broadcast integration for critical policy hotfixes.
