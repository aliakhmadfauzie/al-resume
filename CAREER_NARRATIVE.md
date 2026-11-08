# Ali Akhmad Fauzie — Executive Career Narrative & Architectural Dossier
*Grounding: 365+ Domino DBs Migrated · $960K/yr License Avoidance · GAMP 5 Cat 4 & 21 CFR Part 11 · 380% BPO Team Scaling · Hang Tuah Distinction*

---

## The Hook

Two thousand chemical plant workers across Penang and Pasir Gudang were running 361 mission-critical workflows—from raw oleochemical tank dispatch to statutory DOSH chemical incident filings—on 25-year-old Lotus Domino databases. The physical on-premise servers in Penang had reached hardware end-of-life, and HCL Domino v9/v10 extended support was ending, leaving unpatchable OS security vulnerabilities exposed on the manufacturing network. When external enterprise consultants delivered a modernization quote to Microsoft 365, their roadmap carried a $960,000 annual line item: $40-per-user monthly premium Dataverse connector fees for every plant operator and shift lead. Compounding the stakes, any new system touching quality, tank sampling, and chemical batching had to satisfy GAMP 5 Category 4 computerized system validation and 21 CFR Part 11 electronic signature mandates. The organization faced a brutal ultimatum: commit nearly a million dollars annually to perpetual software licensing, or risk catastrophic plant downtime and audit failure.

---

## The Narrative

### Beat 1: The Broken Status Quo (The Stakes)

Before stepping into enterprise solution architecture, I spent four years on the operations floor at Accenture and Concentrix. I started in August 2017 writing PL/SQL queries and forecasting queues as a frontline Data Analyst. Over four merit promotions, I moved from frontline analytics to Junior Team Lead, Team Lead, and eventually Senior Team Lead directing cross-functional customer support and trust-and-safety delivery across seven APAC markets.

Floor management taught me how systems actually fail. At Concentrix, we scaled a multilingual operations pod from 9 to 34 agents handling seven international jurisdictions. When queue spikes hit, our biggest friction was not agent motivation—it was tooling blindness. Shift handovers and agent statuses were tracked through chaotic WhatsApp groups. Team leads burned two to three hours every shift manually tallying agent availability in spreadsheets instead of coaching underperforming queues. During customer triage, agents toggled between four disconnected browser tabs, bleeding 110 seconds of pure navigation latency on every single ticket.

Later, when I transitioned into enterprise modernization at IOI Oleochemical, that same operational breakdown existed at industrial scale across 28 business units. A single document revision required chasing physical sign-offs from production to quality control, then to heads of department and marketing. In quality management, Corrective and Preventive Actions (CAPAs) averaged 45 business days to investigate and close because follow-ups sat inside unmonitored Domino background agents. Overdue chasing was done manually, and 30-day post-implementation effectiveness verification lagged at a dismal 61%.

The compliance exposure was acute. Under Good Manufacturing and Documentation Practice (GxP) and ISO 9001 regulations, documentation is not an administrative byproduct—it is legally binding evidence of product integrity. Across our plant floors, laboratory test methods and pre-loading inspection logs lacked non-repudiable audit trails. Signatures were scrawled on paper slips, document revisions had no enforced "Reason for Change," and superseded SOPs frequently lingered on factory clipboards, creating immediate risk of export container holds and regulatory sanctions.

### Beat 2: The Epiphany (The Pivot)

The standard consulting playbook for retiring Lotus Domino is brute-force replication: buy Microsoft Power Apps Premium licenses for all 2,000+ users, provision 361 separate SharePoint lists or Dataverse tables, and recreate forms one by one.

I rejected that approach immediately. 

First, the recurring $960,000 annual licensing budget was commercially unacceptable for factory floor workstations. Second, spinning up 361 independent SharePoint lists would create governance chaos within twelve months; schemas would drift, URLs would break, and cross-department reporting would collapse under 361 disconnected permissions models.

The breakthrough came from rethinking both the data architecture and the compliance framework:

1. **Partitioned Storage Architecture:** Instead of 361 separate database silos, I designed a partitioned single-table architecture: `MainDB_{Department}` (such as `MainDB_IT`, `MainDB_IT_JHR`, and `MainDB_SHE`). Each form type received an indexed discriminator code (`FormCode`, e.g., `DEC-2026-001`) backed by typed OData columns on standard SharePoint Online lists. This allowed standard M365 connectors to process 1.4 million migrated historical records and support 320 peak concurrent plant operators across three daily shifts without ever triggering SharePoint's notorious 5,000-item view threshold lockout.
2. **GAMP 5 & ALCOA+ Documentation Framework:** For regulated modules (QMS documentation, CAPA registers, and chemical batch sign-offs), standard SharePoint editing was strictly prohibited. I engineered a GAMP 5 Category 4 validation framework with Good Documentation Practice (GDocP) enforcing the **ALCOA+ standard** directly in the software:
   - **Attributable & 21 CFR Part 11 Compliant:** Every form interaction recorded authenticated Azure AD dual-factor identity, assigned role, client IP, UTC timestamp, and explicit signature intent (Preparer, Reviewer, Approver).
   - **Contemporaneous & Original:** Edits occurred in real-time with enforced semantic versioning (`v1.0 → v1.1 → v2.0`); raw database entries were preserved as immutable master records.
   - **Accurate & Complete:** Mandatory "Reason for Change" prompts were required on every document revision. I instituted a standardized canonical syntax for all controlled documents (`[SITE]-[DEPT]-[DOC_TYPE]-[SEQ]-[REV]`, such as `AC-QA-SOP-042-REV03`), backed by automated multi-tier approval gates.
   - **Enduring & Legible:** Deprecated records were never deleted; they were programmatically watermarked with automated obsolescence tags (`OBSOLETE - ARCHIVED`) to maintain full regulatory inspection readiness.

### Beat 3: The Execution Friction (The Struggle)

Designing the architecture on a whiteboard was the easy part. Delivering it across two chemical manufacturing complexes without halting daily plant operations pushed against severe technical, regulatory, and cultural friction.

The first wall was code generation at scale. Over 18 months, our delivery pod generated 7,878 Power Apps YAML screens across 16 production `.msapp` application packages. Power Apps Canvas YAML v3.0 is unforgiving: an errant two-space indentation, a malformed multiline block scalar, or an unescaped leading `=` Power Fx prefix will silently corrupt an `.msapp` package upon compilation with the PAC CLI. To prevent late-night deployment failures, I wrote a custom static AST linter in Python (`_validate_pa.py`) and a SharePoint GUID canonicalizer (`audit-power-config.mjs`) that ran inside our Azure DevOps CI pipeline. Across 260+ automated pull requests, this pipeline intercepted and blocked 142 syntax regressions, 38 duplicate control ID collisions, and 19 placeholder GUID leaks before code ever touched staging.

The second wall was mathematical enforcement and ERP integration boundaries. In our bulk materials division, financial rebates on cement and chemical consignments were governed by complex multi-tier commercial rules. The legacy process relied on spreadsheets where sales leads could manually override rebate ceilings. In the new automated engine, I wrote a deterministic 7-component formula that calculated base rate, distance, volume, and seasonal adjustments, locking a hard statutory ceiling of RM 0.20 per metric tonne directly in code. The application interfaced with SAP ECC 6.0 / S/4HANA (MM & SD modules) and Oracle 19c staging tables via read-only OData endpoints to validate purchase order balances without creating unapproved commitments. When commercial leads requested manual overrides for key accounts, the engine held: no transaction could bypass the RM 0.20 cap without Group COO dual-authorization and an immutable Dataverse audit log capturing before-and-after values.

The third wall was operational connectivity on the plant floor. In industrial zones and regional workshops—like the Putri GarmentHub ERP and SaltDistribute wholesale platforms I engineered—plant Wi-Fi was notoriously unstable. When mobile devices dropped connection, standard web apps froze, incurring up to 6,070ms of Total Blocking Time (TBT). I rewrote the storage adapter from scratch: UI views hydrated in 0ms synchronously from local storage, while background network calls raced against a 2,500ms timeout. If a floor supervisor recorded an inspection or defect deduction offline, the app queued the mutation locally and resolved conflicts using strict `updatedAt >= serverTime` timestamps the moment network ping returned, preserving complete audit chronology.

### Beat 4: The Transformation (The Delta)

The operational shift across the enterprise was immediate, measurable, and permanent.

At IOI Corporation, all 365+ legacy Lotus Domino applications across 28 business units were systematically retired into modern Microsoft 365 and Power Platform environments with zero hours of unplanned factory downtime. Consolidating the database footprint into governed `MainDB_{Dept}` schemas permanently eliminated the need for premium connectors, avoiding $960,000 every year in recurring software licenses while maintaining strict ISO 9001, ISO 27001, and GxP compliance.

In Quality and Industrial Safety, paper-based incident forms were replaced by Slice A (Quality Management System & Documentation Control) and a live DOSH/SIRIM 5×5 HIRADC risk matrix across the Penang and Johor plants:
- 100% of standard operating procedures and laboratory test methods now follow an automated four-stage lifecycle (*Draft → Submitted → QA Approved → Briefed/Distributed*).
- Lost revision histories were eliminated; zero unapproved document drafts reached the plant floor.
- CAPA investigation closure time plummeted from 45 business days to 12 business days (a 73% acceleration), while 30-day post-implementation effectiveness verification adherence jumped from 61% to a perfect 100%.
- Chemical plant safety equipment compliance reached 99.4%, and consignment rebate approval cycles dropped from 3 days to under 15 minutes.

This same operational discipline reinforced team leadership on the frontline. At Accenture, when a major regional platform outage triggered an 800% ticket surge across Southeast Asian e-commerce queues, I commanded real-time queue recovery, stabilizing operations and restoring full contractual SLA adherence within 48 hours without associate burnout—an achievement recognized with the prestigious Hang Tuah Distinction and the Accenture Diamond Award. Later at Concentrix, the internal tools I built—PulseTrack and SmartFlow—slashed manual reporting by 90% and eliminated 110 seconds of tab-switching latency per ticket. My operations squad maintained a 98%+ contractual SLA compliance record while scaling 380% across seven countries, holding annualized staff attrition below 5%.

Whether commanding frontline crisis response across 34 agents or validating GxP compliance across 7,878 YAML screens for an industrial enterprise, the core lesson remained identical: lasting digital transformation happens only when technical architecture respects frontline operational realities and regulatory rigor.

---

## The Impact Delta

| Dimension | Broken Status Quo (Before) | Engineered Transformation (After) | Verifiable Business / Technical Delta |
| :--- | :--- | :--- | :--- |
| **Enterprise Software Licensing** | $40/user/month premium connectors proposed for 2,000+ users ($960K/yr cost). | Single `MainDB_{Dept}` partitioned list architecture on standard M365 connectors. | **$960,000/year in recurring software licenses avoided**. |
| **Legacy Database Sprawl & Hardware EOL** | 365+ fragmented Domino DBs; server hardware EOL; unpatchable Domino v9/v10 OS CVEs. | Governed 6-slice migration into M365, SharePoint Online, and Dataverse. | **100% database retirement**; 1.4M records migrated; 0 hours unplanned plant downtime. |
| **GxP & Regulatory Documentation** | Paper drafts, handwritten sign-offs, untracked PDF revisions, missing change rationales. | GAMP 5 Cat 4 validation; ALCOA+ lifecycle; mandatory "Reason for Change" prompts. | **100% revision traceability**; standardized `AC-QA-SOP-042-REV03` syntax; 0 unapproved SOPs on floor. |
| **CAPA Cycle & Effectiveness Tracking** | 45-day average investigation time; 61% follow-up adherence on effectiveness checks. | Automated Power Automate escalation flows (7, 14, 30 days) with QA verification sign-off. | **CAPA closure cut from 45 to 12 days (-73%)**; **100% effectiveness verification adherence**. |
| **Electronic Signature & Audit Trails** | Approvals buried in loose email threads with no non-repudiation or role separation. | 21 CFR Part 11 compliant Azure AD 2FA sign-off gates with field-level delta logging. | **Tamper-proof immutable audit trail**; GxP, ISO 9001, and ISO 27001 audit-ready. |
| **Code Quality & CI Deployment** | Manual Canvas `.msapp` assembly prone to silent YAML syntax corruption. | Automated Python AST linter (`_validate_pa.py`) & CI GUID canonicalizer. | **7,878 Canvas screens** verified; **142 syntax regressions & 19 GUID leaks blocked** across 260+ PRs. |
| **Consignment Rebate Cycle & ERP Sync** | 2 to 3 days of manual emails and spreadsheet checks; human error in rebate caps. | Automated 7-component formula engine; SAP S/4HANA & Oracle 19c OData sync. | Approvals cut from **3 days to <15 minutes** (99% cycle-time drop); 0 audit non-compliances. |
| **Frontline Operations Reporting** | 2–3 hours/shift spent compiling agent status from WhatsApp into Excel; 4 tabs toggled. | Centralized SharePoint + Power Automate workflow (`PulseTrack` & `SmartFlow`). | **90% reduction in manual reporting**; **110s tab-switching latency eliminated** per interaction. |
| **Incident Command & SLA Delivery** | 800% queue surge during major regional platform outage threatening contractual SLA. | Commanded real-time queue recovery and rapid triage protocols at Accenture. | **Full SLA restored within 48h**; won **Hang Tuah Distinction** & **Diamond Award**; attrition <5%. |
| **BPO Squad Scaling & SLA** | 9 agents struggling with queue spikes across regional APAC markets. | Scaled to 34 multilingual agents with Six Sigma DMAIC coaching controls. | **380% team expansion** across 7 countries; sustained **>98% contractual SLA**. |
| **Mobile & Field App Latency** | 6,070ms Total Blocking Time on weak plant Wi-Fi; offline data loss. | 0ms synchronous local hydration + 2,500ms race timeout Firestore adapter. | **6,070ms TBT eliminated**; 100% data integrity during intermittent connectivity. |

---

## Locked Context Flags

- **`[FLAG-GXP-01: System Validation Standard]`** $\rightarrow$ **Locked:** GAMP 5 Category 4 Configured Software with URS, FS, and IQ/OQ/PQ verification.
- **`[FLAG-GXP-02: Electronic Records & Signatures]`** $\rightarrow$ **Locked:** 21 CFR Part 11 compliant via Azure AD 2FA, signature manifestation, and immutable delta logging.
- **`[FLAG-GXP-03: SOP Identifier Syntax]`** $\rightarrow$ **Locked:** Canonical `[SITE]-[DEPT]-[DOC_TYPE]-[SEQ]-[REV]` syntax (`AC-QA-SOP-042-REV03`).
- **`[FLAG-GXP-04: CAPA Turnaround Metric]`** $\rightarrow$ **Locked:** Investigation cycle dropped from 45 to 12 days (-73%); 30-day effectiveness verification lifted to 100%.
- **`[FLAG-ARCH-01: Legacy Hardware EOL Catalyst]`** $\rightarrow$ **Locked:** Penang data center physical server EOL + HCL Domino v9/v10 extended support sunset.
- **`[FLAG-ARCH-02: Concurrent Load & Sizing]`** $\rightarrow$ **Locked:** 320 peak concurrent operators across 3 shifts; 1.4M records migrated without 5,000-item view threshold locks.
- **`[FLAG-ARCH-03: ERP Integration Interface]`** $\rightarrow$ **Locked:** SAP ECC 6.0 / S/4HANA (MM & SD) and Oracle 19c staging tables via read-only OData endpoints.
- **`[FLAG-OPS-01: Incident Command Surge Trigger]`** $\rightarrow$ **Locked:** 800% ticket surge during major regional platform outage stabilized within 48 hours (Hang Tuah Distinction).
- **`[FLAG-OPS-02: DMAIC Latency Reduction]`** $\rightarrow$ **Locked:** Unified 4-tab workflow into single-pane interface, saving 110s handling time per interaction.
- **`[FLAG-CODE-01: AST Linter CI Telemetry]`** $\rightarrow$ **Locked:** 142 syntax regressions, 38 control ID collisions, and 19 placeholder GUID leaks blocked across 260+ PRs.
- **`[FLAG-CODE-02: Multi-LLM Gateway FinOps]`** $\rightarrow$ **Locked:** 82% fast queries on Groq (240ms latency, $0 cost) / 18% schema synthesis on Gemini 2.5 Flash via fcntl locks.
