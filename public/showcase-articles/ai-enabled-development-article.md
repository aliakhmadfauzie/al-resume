# AI-Enabled Development: Orchestrating Copilot Agents Within a Governed Migration Pipeline

How we used **GitHub Copilot agents, skills, and instruction files** to drive a repeatable, evidence-gated Domino → Microsoft 365 migration — with standard-only connectors, code-as-source, and release gates enforced by a pipeline controller.

> **AL**
> **Ali Akhmad Fauzie** — ALM & AI Engineering Lead

![IT ticketing dashboard](https://raw.githubusercontent.com/Altechsolution123/altechsolution_33/main/public/gallery/stitch_unified_it_ticketing_system/ticket_management.png)

---

## Moving Beyond Generic AI Prompts

Enterprise low-code development moves rapidly, but scaling without governance invites inconsistent quality and unverified work. Rather than ad-hoc prompting, we baked the migration playbook into **version-controlled Copilot agents, skills, and instruction files** that every agent must read before acting:

- **`domino-migration-agent`** — Domino → M365 migration specialist (DXL/XML parsing, SharePoint list design, Power Apps, flows).
- **`code-app-architectV2`** — Power Apps code-app architect (React/Vite architecture, SharePoint integration, connector patterns).
- **Skills** — `domino-migration`, `domino-form-reader`, `add-datasource`, `add-sharepoint`, `automate-sharepoint-pnp`, `create-code-app`.
- **Instructions** — `domino-migration.instructions.md` (form inventory, hard rules, workflow specs, department lists) and `copilot-instructions.md` (screen/page patterns, system-field normalization).

---

## The Governed Migration Pipeline

We replaced inconsistent "just build it" workflows with a **Migration Pipeline Controller** that selects exactly one task at a time and enforces ordering:

- **Default pipeline tasks**: Extraction → Quality Review → Promotion → Schema Generation → Schema Validation → Build → Build Audit → Fix → Re-Audit → Progress Register Update → Human Confirmation Question Update.
- **Rule-based selection** from `MASTER_TASK_QUEUE.md`: P0 before P1, fix failed builds before starting new ones, re-audit before dependent builds, and never mark work complete **without evidence**.
- **Hard blocking rules** (`BLOCKING_RULES.md`): a failed strict re-audit blocks downstream forms; wrong SharePoint list writes, wrong internal column names, or an approval workflow on a non-approval form each block the next build.
- **Single source of truth**: app source is only modified in `Fix` or `Build` mode, under `apps/code-first/ioicodeapp/powerapps-mirror/apps/ioi-platform/src/`.

---

## Enterprise Governance, DLP & Safety Guardrails

- **Data protection via standard-only connectors**: the app binds to **SharePoint, Microsoft 365 Users, and Office 365 Outlook** only — no premium connectors, reducing licensing cost and data-surface risk.
- **Code-as-source governance**: form schemas, generated models/services/hooks/validators, flow definitions, and provisioning scripts are all committed and version-controlled.
- **Audit trail**: an `audit/` register, findings, fix backlog, build reviews, and UAT folder track every finding through fix → re-audit → promoted.
- **Automated quality gates**: TypeScript strict compilation (`tsc --noEmit`) and ESLint validation gate merges.
- **Human-in-the-loop confirmation**: the pipeline controller surfaces **Human Confirmation Question** tasks for decisions the repo cannot infer (e.g., unknown approval status on specific forms).

---

## Measurable Impact

- **Repeatable, evidence-gated workflow**: every task must prove completion before the pipeline advances.
- **Verifiable build state**: TypeScript compiles clean (`tsc --noEmit` exits 0) and the Vite build succeeds.
- **Real production scope**: 23 IT forms fully analyzed, 24 active forms shipped, 28 JSON form schemas, 1,006 fields, and ~1,797 PDF UI exports supporting the inventory.
- **Governed connector posture**: standard-only connectors on a single code-first app for all departments.

---

> **Reference**: Evidence sourced from `automation/MIGRATION_PIPELINE_CONTROLLER.md`, `automation/MASTER_TASK_QUEUE.md`, `automation/BLOCKING_RULES.md`, `docs/repo-knowledge-base.md`, and the `.github/` agent/skill/instruction files in the `ioi-domino-m365-migration` repository.
