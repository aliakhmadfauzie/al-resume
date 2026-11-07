import { ArticleItem } from "../types";

export const initialArticlesData: ArticleItem[] = [
  {
    id: "art-legacy-domino-modernization",
    slug: "architecting-enterprise-modernization-migrating-legacy-lotus-domino-applications",
    title: "Architecting Enterprise Modernization: Migrating Legacy Lotus Domino Applications to a SharePoint-Backed, Code-First Power Apps Platform",
    date: "Feb 18, 2025",
    readTime: "7 min read",
    category: "architecture",
    featured: true,
    excerpt:
      "A deep dive into the architecture used at IOI Corporation Berhad: a single code-first Power Apps platform built on React + TypeScript, persisted on SharePoint Online (MainDB_IT + FormCode discriminator), and orchestrated by Power Automate — avoiding premium-connector licensing.",
    tags: [
      "IOI Corporation",
      "Lotus Domino Migration",
      "Code-First Power Apps",
      "SharePoint Online",
      "React 19",
      "TypeScript",
      "Standard Connectors",
      "Power Automate",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Fullstack & Enterprise Solution Architect",
    },
    content: `![IOI IT service request dashboard](https://raw.githubusercontent.com/Altechsolution123/altechsolution_33/main/public/gallery/stitch_unified_it_ticketing_system/dashboard_overview.png)\n\n## The Legacy Domino Modernization Challenge

In large manufacturing and plantation conglomerates like **IOI Corporation Berhad**, decades of critical operational business logic were locked inside **hundreds of legacy Lotus Domino forms and applications** across **36 department-sites** (22 Penang/Prai + 14 Johor/PanCen). These applications suffered from severe technical debt:

- Unsupported on-premise servers and a lack of modern authentication
- Opaque document schemas with no relational integrity
- Zero mobile capabilities for field and factory workers
- Escalating maintenance costs and licensing friction

---

## The Architectural Strategy

Rather than an impulsive "big-bang" replatforming, we engineered a **code-first, SharePoint-backended** architecture:

### Code-First Power Apps App (Single App for All Departments)

- **Single app, single data model**: One **code-first** Power Apps app for all departments (decision DEC-2026-003), filtered by \`FormCode\` / department — no per-department apps.
- **Modern front-end stack**: React 19 + TypeScript + Vite + shadcn/ui + Radix UI + Tailwind CSS v4 + React Query + Jotai, built on the \`@microsoft/power-apps\` SDK (v1.1.3).
- **Single main list per site**: \`MainDB_IT\` with a \`FormCode\` discriminator, plus extension lists (\`MainDB_IT_Ext_*\`) and \`Config_*\` lists (decision DEC-2026-001).
- **Standard-only connectors**: SharePoint, Microsoft 365 Users, and Office 365 Outlook — avoiding premium-connector licensing.
- **Power Automate orchestration**: Approvals and email notifications (e.g., the 5-stage EAF external-access approval; 15× Key User + 10× BPO sign-off for UAT forms).
- **Type-safe business logic in code**: 28 JSON form schemas, generated models/services/hooks/validators, and conditional section visibility — enforced client-side and in flows rather than C# plugins.

### Scope in the App

- **28 JSON form schemas**, **24 active forms** (IT department focus)
- **1,006 fields** and **144 sections** modelled in the schemas
- **40+ page routes**, **70+ reusable UI components**, **80+ generated models, services, hooks, and validators**
- **23 department hub routes** configured

---

## Application Lifecycle Management (ALM) & Governance

To guarantee enterprise compliance and audit readiness:

- **Environment Progression**: Development → UAT → Production with connection references and environment variables.
- **Automated Quality Gates**: PAC CLI v2.7.4, TypeScript strict compilation (\`tsc --noEmit\`), and ESLint validation.
- **Version-Controlled Source**: Form schemas, generated models/services/hooks/validators, flow definitions, and provisioning scripts are all committed as code.
- **Audit & History**: System-field normalization (Created By / Created On / Last Modified By / Last Modified On) and document-history sections retained across form schemas.

---

## Key Results

1. **Legacy Portfolio Catalogued**: ~**418+ forms across 36 department-sites** inventoried, with ~**1,797 PDF UI exports** and ~**119 DXL/XML files** enabling deep field-level analysis.
2. **Deep Form Analysis**: 23 IT forms (20 Penang + 3 Johor) fully field-mapped, alongside HR and QA/QC form families.
3. **One Code-First App** serving all departments with 24 active IT forms and centralized form routing.
4. **Standard-Only Connectors** (SharePoint, Microsoft 365 Users, Office 365 Outlook) avoid premium-connector licensing.
5. **Form-Specific Workflow Engines** (multi-stage approvals, sign-off matrices, conditional section visibility) implemented in code and Power Automate.

---

> **Reference**: Evidence sourced from \`design/m365-design/powerapps-design.md\`, \`docs/central-form-reference.md\`, \`analysis/domino-field-inventory.md\`, and \`docs/repo-knowledge-base.md\` in the \`ioi-domino-m365-migration\` repository.
`,
  },
  {
    id: "art-ai-enabled-development-pipeline",
    slug: "ai-enabled-development-orchestrating-copilot-agents-governed-migration-pipeline",
    title: "AI-Enabled Development: Orchestrating Copilot Agents Within a Governed Migration Pipeline",
    date: "Feb 10, 2025",
    readTime: "6 min read",
    category: "devops",
    featured: true,
    excerpt:
      "How we used GitHub Copilot agents, skills, and instruction files to drive a repeatable, evidence-gated Domino → Microsoft 365 migration — with standard-only connectors, code-as-source, and release gates enforced by a pipeline controller.",
    tags: [
      "GitHub Copilot",
      "Copilot Agents",
      "Migration Pipeline",
      "Governance",
      "ALM",
      "Power Apps",
      "SharePoint",
      "DLP",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "ALM & AI Engineering Lead",
    },
    content: `![IOI IT ticketing dashboard](https://raw.githubusercontent.com/Altechsolution123/altechsolution_33/main/public/gallery/stitch_unified_it_ticketing_system/ticket_management.png)\n\n## Moving Beyond Generic AI Prompts

Enterprise low-code development moves rapidly, but scaling without governance invites inconsistent quality and unverified work. Rather than ad-hoc prompting, we baked the migration playbook into **version-controlled Copilot agents, skills, and instruction files** that every agent must read before acting:

- **\`domino-migration-agent\`** — Domino → M365 migration specialist (DXL/XML parsing, SharePoint list design, Power Apps, flows).
- **\`code-app-architectV2\`** — Power Apps code-app architect (React/Vite architecture, SharePoint integration, connector patterns).
- **Skills** — \`domino-migration\`, \`domino-form-reader\`, \`add-datasource\`, \`add-sharepoint\`, \`automate-sharepoint-pnp\`, \`create-code-app\`.
- **Instructions** — \`domino-migration.instructions.md\` (form inventory, hard rules, workflow specs, department lists) and \`copilot-instructions.md\` (screen/page patterns, system-field normalization).

---

## The Governed Migration Pipeline

We replaced inconsistent "just build it" workflows with a **Migration Pipeline Controller** that selects exactly one task at a time and enforces ordering:

- **Default pipeline tasks**: Extraction → Quality Review → Promotion → Schema Generation → Schema Validation → Build → Build Audit → Fix → Re-Audit → Progress Register Update → Human Confirmation Question Update.
- **Rule-based selection** from \`MASTER_TASK_QUEUE.md\`: P0 before P1, fix failed builds before starting new ones, re-audit before dependent builds, and never mark work complete **without evidence**.
- **Hard blocking rules** (\`BLOCKING_RULES.md\`): a failed strict re-audit blocks downstream forms; wrong SharePoint list writes, wrong internal column names, or an approval workflow on a non-approval form each block the next build.
- **Single source of truth**: app source is only modified in \`Fix\` or \`Build\` mode, under \`apps/code-first/ioicodeapp/powerapps-mirror/apps/ioi-platform/src/\`.

---

## Enterprise Governance, DLP & Safety Guardrails

- **Data protection via standard-only connectors**: the app binds to **SharePoint, Microsoft 365 Users, and Office 365 Outlook** only — no premium connectors, reducing licensing cost and data-surface risk.
- **Code-as-source governance**: form schemas, generated models/services/hooks/validators, flow definitions, and provisioning scripts are all committed and version-controlled.
- **Audit trail**: an \`audit/\` register, findings, fix backlog, build reviews, and UAT folder track every finding through fix → re-audit → promoted.
- **Automated quality gates**: TypeScript strict compilation (\`tsc --noEmit\`) and ESLint validation gate merges.
- **Human-in-the-loop confirmation**: the pipeline controller surfaces **Human Confirmation Question** tasks for decisions the repo cannot infer (e.g., unknown approval status on specific forms).

---

## Measurable Impact

- **Repeatable, evidence-gated workflow**: every task must prove completion before the pipeline advances.
- **Verifiable build state**: TypeScript compiles clean (\`tsc --noEmit\` exits 0) and the Vite build succeeds.
- **Real production scope**: 23 IT forms fully analyzed, 24 active forms shipped, 28 JSON form schemas, 1,006 fields, and ~1,797 PDF UI exports supporting the inventory.
- **Governed connector posture**: standard-only connectors on a single code-first app for all departments.

---

> **Reference**: Evidence sourced from \`automation/MIGRATION_PIPELINE_CONTROLLER.md\`, \`automation/MASTER_TASK_QUEUE.md\`, \`automation/BLOCKING_RULES.md\`, \`docs/repo-knowledge-base.md\`, and the \`.github/\` agent/skill/instruction files in the \`ioi-domino-m365-migration\` repository.
`,
  },
  {
    id: "art-ai-job-application-automation",
    slug: "ai-powered-job-application-automation-tailoring-documents-at-scale",
    title: "AI-Powered Job Application Automation: Tailoring Documents at Scale",
    date: "Jan 28, 2025",
    readTime: "5 min read",
    category: "ai",
    featured: false,
    excerpt:
      "How we built an ATS automation toolkit that tailors resumes and cover letters to any job description, generates dual-track PDFs, syncs them to Google Drive, and automates form-filling on Workday portals — all governed by a single source of truth.",
    tags: [
      "ATS Automation",
      "Gemini",
      "Groq",
      "Python",
      "Workday Bot",
      "Google Drive Sync",
      "NotebookLM",
      "Dual-Track",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "ALM & AI Engineering Lead",
    },
    content: `## Moving Beyond One-Off Tailoring

Applying to dozens of roles means rewriting the same resume over and over, with inconsistent formatting and no audit trail. This toolkit turns that into a deterministic, governed pipeline.

---

## What It Does

- **AI Tailoring with Gemini & Groq** — Generates resume and cover-letter variants matched to a specific job description.
- **Dual-Track Generation** — Produces both a **Tech** track and an **Ops** track variant so the same profile speaks to different role families.
- **Standardized PDF Output** — Applies a strict naming convention so every generated document is consistent and traceable.
- **Google Drive Sync** — Automatically uploads generated and deployed documents to a governed Drive structure.
- **NotebookLM Integration** — Interfaces with NotebookLM for document analysis and review.
- **Profile Sync** — Keeps a single profile in sync across LinkedIn, Indeed, JobStreet, SEEK, and Glassdoor via platform-specific adapters.
- **Workday ATS Bot** — Automates form filling on Workday-based application portals.
- **Local Command-Center Dashboard** — A web dashboard to monitor generation, deployment, and activity.

---

## Governance & Audit

The toolkit treats documents as governed artifacts:

- \`MASTER_SOURCE_OF_TRUTH.md\` — single source of truth for profile data.
- \`APPLICATION_TRACKER.md\` — tracks every application and tailored document.
- \`PDF_NAMING_CONVENTION.md\` / \`PDF_OUTPUT_GOVERNANCE.md\` — output standards.
- \`DRIVE_API_SETUP.md\` / \`NOTEBOOKLM_SETUP.md\` / \`PROFILE_SYNC_GUIDE.md\` — setup runbooks.

---

## Key Modules

| Module | Purpose |
|---|---|
| \`ai_gateway.py\` | AI API abstraction (Gemini, Groq) |
| \`tailor_to_jd.py\` | JD-tailored document generation |
| \`generate_dual_track_docs.py\` | Dual-track PDF generation |
| \`app_bot_v6.py\` | Workday ATS automation bot |
| \`json/profile_data.py\` | Profile data loader |
| \`profile_sync/\` | Profile sync engine + platform adapters |
| \`drive_sync.py\`, \`drive_upload.py\` | Google Drive orchestration |
| \`dashboard/\` | Local web command center |

---

> **Reference**: Evidence sourced from the \`ATS AUTOMAYTION/ats-automation\` repository (\`README.md\`, \`MASTER_SOURCE_OF_TRUTH.md\`, \`APPLICATION_TRACKER.md\`, \`PDF_OUTPUT_GOVERNANCE.md\`).
`,
  },
  {
    id: "art-resumeflow-llm-pipeline",
    slug: "resumeflow-llm-pipeline-personalized-resume-generation",
    title: "ResumeFlow: An LLM Pipeline for Personalized Resume Generation",
    date: "Jan 12, 2025",
    readTime: "5 min read",
    category: "ai",
    featured: false,
    excerpt:
      "An open-source, LLM-facilitated pipeline that turns a single master resume into a tailored resume and cover letter for any job — published as a Python package, a web tool, and an academic paper.",
    tags: [
      "Open Source",
      "PyPI",
      "ACM Digital Library",
      "arXiv",
      "Gemini Pro",
      "OpenAI",
      "Streamlit",
      "Python",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "ALM & AI Engineering Lead",
    },
    content: `![ResumeFlow auto job-apply pipeline](https://raw.githubusercontent.com/Ztrimus/job-llm/main/resources/auto_job_apply_workflow.jpg)\n\n## The Problem

Job seekers rewrite their resume for every role, losing consistency and time. ResumeFlow automates the tailoring step with a language model while keeping a single master resume as the source of truth.

---

## What It Does

- **Resume + Cover Letter Pipeline** — \`resume_cv_pipeline()\` generates a curated resume and cover letter for a job URL.
- **Master Data Ingest** — accepts the master resume as \`.pdf\` or \`.json\` and uses it as the canonical profile.
- **Provider-Agnostic LLM** — works with **OpenAI** or **Gemini Pro**.
- **Dual Delivery** — run as a **web tool** (\`resumeflow.streamlit.app\`) or install as a **Python package** (\`zlm\` on PyPI).

---

## Usage

\`\`\`python
from zlm import AutoApplyModel

job_llm = AutoApplyModel(
    api_key="PROVIDE_API_KEY",
    provider="gemini",          # or "openai"
    downloads_dir="downloads"
)

job_llm.resume_cv_pipeline(
    "ENTER_JOB_URL",
    "YOUR_MASTER_RESUME_DATA"   # .pdf or .json
)
\`\`\`

---

## Publication & Distribution

- **ACM Digital Library** paper (doi: 10.1145/3626772.3657680)
- **arXiv** preprint (arXiv:2402.06221)
- **PyPI** package \`zlm\`
- **GitHub** source (MIT licensed, open for contributions)

---

> **Reference**: Evidence sourced from the \`job-llm\` repository (\`README.md\`, \`zlm/\`, \`MASTER_SOURCE_OF_TRUTH.md\`, \`web_app.py\`).
`,
  },
  {
    id: "art-resumeforge-ats-engine",
    slug: "resumeforge-ats-optimized-resume-tailoring-engine",
    title: "ResumeForge: An ATS-Optimized Resume Tailoring Engine",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    category: "architecture",
    featured: false,
    excerpt:
      "A Next.js application that parses an uploaded resume, tailors it to a job description with an LLM, and exports an ATS-friendly document — with a Supabase backend and a full test suite.",
    tags: [
      "Next.js 14",
      "Supabase",
      "TypeScript",
      "OpenAI",
      "DOCX Export",
      "Vitest",
      "Playwright",
      "Tailwind CSS",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Fullstack & Enterprise Solution Architect",
    },
    content: `## The Goal

Produce a **job-description-tailored, ATS-optimized** resume from a single master document, without losing the original's structure.

---

## How It Works

- **Document Ingestion** — Parse uploaded resumes with \`pdfjs-dist\` (PDF) and \`mammoth\` (DOCX), via \`react-dropzone\`.
- **Tailoring Engine** — Uses **OpenAI** to rework the resume against a job description.
- **ATS Optimization** — Output is structured for applicant tracking systems.
- **Export** — Generates a **DOCX** file with the \`docx\` library.
- **Comparison** — \`diff\` is used to show changes between source and tailored output.

---

## Platform & Architecture

| Layer | Technology |
|---|---|
| Framework | **Next.js 14** (App Router) |
| UI | **Radix UI** + **lucide-react** + Tailwind |
| Backend | **Supabase** (SSR + Postgres, generated TypeScript types) |
| AI | **OpenAI** |
| Docs | \`docx\` (export), \`pdfjs-dist\` / \`mammoth\` (parse) |
| Quality | **Vitest**, **Playwright e2e**, **Prettier**, **Husky** |

---

## Engineering Practices

- **Type-safe database access** via \`supabase gen types\` → \`lib/types/supabase.ts\`.
- **Test coverage** with Vitest unit tests and Playwright end-to-end tests.
- **Husky** git hooks + Prettier to enforce formatting on commit.
- **Developer scripts** for DB generate / push / reset.

---

> **Reference**: Evidence sourced from the \`Resume Buildder\` repository (\`package.json\`, \`app/\`, \`lib/\`, \`services/\`, \`supabase/\`, \`tests/\`).
`,
  },
  {
    id: "art-barbershop-management-system",
    slug: "barbershop-management-system-low-code-operations-platform",
    title: "Barbershop Management System: A Low-Code Operations Platform",
    date: "Nov 18, 2024",
    readTime: "5 min read",
    category: "powerplatform",
    featured: false,
    excerpt:
      "A Power Platform solution that runs a full barbershop operation — from customer booking to staff scheduling and reporting — built as Microsoft Forms → Power Automate → SharePoint → Power Apps (Canvas) → Power BI.",
    tags: [
      "Power Platform",
      "Power Apps Canvas",
      "SharePoint Lists",
      "Power Automate",
      "Power BI",
      "Operations",
      "OData",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Fullstack & Enterprise Solution Architect",
    },
    content: `## The Architecture

Rather than a bespoke build, the system is assembled from native Microsoft 365 building blocks:

\`\`\`
Microsoft Forms → Power Automate → SharePoint Lists → Power Apps (Canvas) → Power BI
\`\`\`

- **SharePoint** is the relational data store (6 lists with Lookup relationships).
- **Power Automate** runs the request/confirm flow and notifications.
- **Power Apps (Canvas)** is the staff-facing front end.
- **Power BI** provides quality-check and reporting dashboards.

---

## SharePoint Data Model

Six SharePoint lists form the relational core. Key entities include:

- **Customers** — profile, contact, lifetime visit/spend, \`IsVIP\`, preferred staff (Lookup), and notes. Primary key is a friendly ID like \`CUS-0001\`.
- **Staff** — role (\`Barber\`, \`Senior Barber\`, \`Master Barber\`, \`Apprentice\`, \`Receptionist\`, \`Manager\`), specialties, \`CommissionRate\`, \`MaxDailyBookings\`, and a \`ColorCode\` used for calendar display. Referenced by \`Appointments.Staff\`.

Lookup columns link customers to their preferred staff, appointments to staff, and services to staff — giving relational integrity out of the box.

---

## Power Automate "Request & Confirm" Flow

- Triggered on item create/modify.
- Routes the request through confirmation and notification steps.
- Emails confirmations to customers and notifies the relevant staff.

---

## Staff Canvas App

The app exposes the day-to-day screens: scheduling, appointment management, customer lookup, and staff visibility — driven by the SharePoint lists and the flow.

---

## Quality Check & Reporting

Power BI dashboards surface operational KPIs — visit counts, revenue, VIP cohorts, and staff commission — to support decision-making.

---

## Developer Enablement

The project also ships VS Code + Power Platform CLI setup and an **OData query reference** so queries against the SharePoint lists are delegation-safe and predictable.

---

> **Reference**: Evidence sourced from the \`Barbershop Project\` repository (\`Barbershop-Management-System-Specification.md\`, \`flows/\`, \`canvas-app/\`, \`powerbi/\`, \`solutions/\`).
`,
  },
  {
    id: "art-power-fx-troubleshooter-copilot-agent",
    slug: "building-a-power-fx-troubleshooter-microsoft-365-declarative-agent",
    title: "Building a Power Fx Troubleshooter: A Microsoft 365 Declarative Agent",
    date: "Jan 05, 2025",
    readTime: "5 min read",
    category: "powerplatform",
    featured: false,
    excerpt:
      "A custom Microsoft 365 Copilot agent that helps low-code makers debug and fix Power Fx formulas directly in Copilot — grounded in web search, code interpretation, and maker list schemas.",
    tags: [
      "Microsoft 365 Copilot",
      "Declarative Agent",
      "Power Fx",
      "M365 Agents Toolkit",
      "Copilot Eval",
      "SharePoint",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "ALM & AI Engineering Lead",
    },
    content: `## Why a Declarative Agent?

Power Fx errors (delegation warnings, formula bugs, schema mismatches) are common, and answers are scattered across Learn docs and the maker's own lists. A declarative agent packages that expertise into a conversational, grounded assistant.

---

## How It's Built

Using the **Microsoft 365 Agents Toolkit**, the agent is a declarative definition (no custom backend — Copilot handles orchestration):

- **\`declarativeAgent.json\`** (v1.7 schema) defines the agent: name, description, instructions, actions, capabilities, and conversation starters.
- **\`instruction.txt\`** supplies the system prompt that makes the agent a Power Fx specialist.
- **\`learn-plugin.json\`** is an action the agent can invoke to pull in targeted reference content.

---

## Capabilities

| Capability | Use |
|---|---|
| **WebSearch** | Find current Power Fx / Microsoft Learn guidance |
| **CodeInterpreter** | Reason over formula snippets and sample code |
| **OneDriveAndSharePoint** | Read the maker's list **schema** to write accurate formulas |

---

## Conversation Starters

The agent ships with starter prompts that model real maker work:

- **"Debug a formula"** — e.g. \`If(IsBlank(TextInput1.Text), "", Value(TextInput1.Text)) * PriceSlider.Value\`
- **"Fix delegation warning"** — e.g. \`Filter(Accounts, Name in ["Contoso", "Fabrikam"])\`
- **"Check list schema"** — look up a SharePoint list schema to write correct formulas
- **"Find code samples"** — search Learn for patterns like \`ForAll\` with collections

---

## Evaluation

The project wires in the **Microsoft 365 Copilot Agent Evaluations CLI** (\`@microsoft/m365-copilot-eval\`) to measure and improve answer quality with AI-based scoring and result reports.

---

> **Reference**: Evidence sourced from the \`Copilot\` repository (\`appPackage/declarativeAgent.json\`, \`m365agents.yml\`, \`evals/\`).
`,
  },
  {
    id: "art-lewi-house-syariah-booking",
    slug: "lewi-house-syariah-brand-first-hospitality-booking-platform",
    title: "Lewi House Syariah: A Brand-First Hospitality Booking Platform",
    date: "Sep 28, 2024",
    readTime: "4 min read",
    category: "architecture",
    featured: false,
    excerpt:
      "A modern booking and browsing experience for Lewi House Syariah — built on Firebase with a rigorous design system, modern minimalism, and CodeFormer AI-assisted image enhancement.",
    tags: [
      "Firebase",
      "Firestore",
      "Design System",
      "Hospitality",
      "CodeFormer AI",
      "Tailwind CSS",
      "Modern Minimalism",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Fullstack & Enterprise Solution Architect",
    },
    content: `![Lewi House Syariah gallery](https://raw.githubusercontent.com/gradiuzz2009/Lewi-House-Web/main/public/gallery/gallery-01.webp)\n\n## The Design System

The product is built on **Modern Minimalism** with a touch of **Corporate Professionalism**, tuned for a Syariah hospitality brand that emphasizes trust, cleanliness, and value.

- **Primary — Deep Corporate Blue** (\`#1A365D\`): navigation, headers, structural elements, secondary actions.
- **Accent — Booking Orange** (\`#FF5E1F\`): reserved exclusively for booking CTAs ("Check Availability", "Book Now"), creating clear conversion urgency.
- **Typography**: Montserrat for headings, Inter for body — hierarchy driven by weight, not just size.
- **Layout**: a fixed 1200px grid on desktop and fluid 4-column on mobile.

### Design Tokens

Tokens are defined once in CSS (\`@theme\`) and reused across the app, ensuring consistency:

| Token | Value | Role |
|---|---|---|
| \`--color-primary\` | \`#1A365D\` | Nav, headers, secondary buttons |
| \`--color-accent\` | \`#FF5E1F\` | Booking CTAs, badges |
| \`--color-sand\` | \`#FAF9F6\` | Page background |
| \`--color-surface\` | \`#FFFFFF\` | Cards & containers |

Third-party OTA brand colors (Booking.com, Agoda, Trip.com) are deliberately **excluded** from the token system and hardcoded in the booking modal — respecting third-party brand identity.

---

## Backend & Platform

- **Firebase Hosting**, **Firestore**, and **Firestore rules** for data and security.
- **Firebase Functions** for server-side logic.
- **CodeFormer image enhancement** (\`CodeFormer/\` + \`convert_enhanced_to_webp.py\`) to upscale and clean room imagery into optimized WebP assets.

---

## Scope

The app covers the full browsing and booking journey — room inventory, amenities, filtering, availability, and a booking modal that combines the OTA brand colors with the site's own conversion design.

---

> **Reference**: Evidence sourced from the \`lEWIHOUSEWEB\` repository (\`DESIGN.md\`, \`firestore.rules\`, \`functions/\`, \`CodeFormer/\`, \`src/\`).
`,
  },
  {
    id: "art-enterprise-portfolio-ai-resume",
    slug: "ali-akhmad-fauzie-enterprise-portfolio-ai-powered-resume",
    title: "Ali Akhmad Fauzie — Enterprise Portfolio & AI-Powered Resume",
    date: "Oct 15, 2024",
    readTime: "4 min read",
    category: "architecture",
    featured: false,
    excerpt:
      "An interactive portfolio for an Enterprise Power Platform & Dynamics 365 Solution Architect — featuring live project demos, an AI-powered 'Ask Ali' assistant, and a guided hiring-manager experience.",
    tags: [
      "React 19",
      "TypeScript",
      "Vite 6",
      "Tailwind CSS",
      "Framer Motion",
      "Ask Ali AI",
      "Portfolio Architecture",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Fullstack & Enterprise Solution Architect",
    },
    content: `![Al Resume hero screenshot](https://raw.githubusercontent.com/gradiuzz2009/Al-resume/main/ocr-shots/home-full.png)\n\n## The Product

Beyond a static resume, this site is a **conversational showcase** of enterprise delivery:

- **Home** — hero section with headline impact metrics and an animated entrance.
- **Projects** — core enterprise projects presented as problem → solution → impact modals.
- **Skills** — visual proficiency across Power Platform, Dynamics 365, Azure, and enterprise architecture.
- **Experience** — professional timeline and certifications.
- **Live Demos** — interactive embedded demos (e.g., FinOps, IT Service).
- **Hiring Manager Experience** — a guided 10-minute journey covering career history, flagship delivery (Situation → Approach → Architecture → Outcome → Lessons), solution design methodology, leadership operating system, AI & automation stack, and a first-90-days plan.
- **"Ask Ali" AI Assistant** — an intent-routed knowledge assistant grounded in the portfolio content.
- **Resume & Contact** — quick-access modals for resume download and contact.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **React 19 + TypeScript** |
| Build tool | **Vite 6** |
| Styling | **Tailwind CSS 4** |
| Animations | **Framer Motion (Motion)** |
| Icons | **Lucide React** |
| AI | "Ask Ali" intent-routed assistant |
| Hosting | **Firebase Hosting + Vercel** |

---

## Design & Responsiveness

The app uses smooth page transitions and micro-interactions, its own dark/light/Power-Apps theme, and is optimized for both desktop (1440px) and mobile (390px) viewports — with canvas particle and parallax effects for the hero.

---

> **Reference**: Evidence sourced from the \`Al Resume\` and \`portfolio\` repositories (\`README.md\`, \`src/\`, \`.vercel/\`, \`.firebase/\`).
`,
  },
  {
    id: "art-scaling-multilingual-ops-sla",
    slug: "scaling-multilingual-operations-34-fte-98-sla",
    title: "Scaling Multilingual Support Operations: Maintaining 98%+ SLA Compliance Across 7 Global Markets",
    date: "Nov 24, 2024",
    readTime: "5 min read",
    category: "operations",
    featured: false,
    excerpt:
      "How we scaled a customer support operations team from 9 to 34 FTEs, reduced average handle time by 25%, and sustained industry-leading SLA compliance using Six Sigma and real-time telemetry.",
    tags: [
      "Operations Leadership",
      "SLA Management",
      "Six Sigma",
      "PulseTrack",
      "Workforce Planning",
      "BPO Scaling",
    ],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Operations Delivery Leader & Six Sigma Green Belt",
    },
    content: `## The Scaling Dilemma in High-Volume Operations

Scaling a specialized customer support or BPO team rapidly often brings chaos: fluctuating Average Handling Time (AHT), misallocated shift capacities, training bottlenecks, and degraded Service Level Agreement (SLA) performance.

When our operational scope expanded across **7 international markets** (handling multi-language queues in English, Bahasa Indonesia, and Malay), we needed to grow our frontline team from **9 to 34 agents** (a 380% expansion) without compromising our **98%+ SLA benchmark**.

---

### The Three-Pronged Operational Strategy

### 1. Six Sigma DMAIC & Root-Cause Triage
Applying Six Sigma principles to contact center workflows:
- **Define**: Isolated top complaint categories generating 70% of inbound escalation backlog.
- **Measure**: Mapped cycle time for each handoff point between Tier 1 support, Subject Matter Experts (SMEs), and logistics partners.
- **Analyze**: Discovered that 35% of handling delays were caused by ambiguous escalation criteria and manual verification spreadsheets.
- **Improve**: Published standardized **Interactive Decision Trees** and unified ticket classification.
- **Control**: Implemented statistical process control (SPC) charts to monitor daily outlier handling times.

---

### 2. PulseTrack: Real-Time Operational Telemetry
We eliminated the end-of-day reporting sprint by deploying **PulseTrack**—an automated Power BI & Power Automate telemetry dashboard:
- Ingests queue velocity, agent status, and backlog count in real time.
- Sends proactive **MS Teams Adaptive Cards** when any regional queue reaches 80% of its SLA threshold.
- Saved **15+ hours weekly** of management administrative time, allowing team leads to refocus on high-impact 1-on-1 coaching.

---

### 3. Culture of Psychological Safety & <5% Attrition
High frontline turnover destroys operational continuity. We instituted:
- **Structured Onboarding Tracks**: 2-week immersive pairing with senior mentors before independent queue routing.
- **Transparent QA Scoring**: Real-time feedback loops highlighting strengths rather than punitive checklists.
- **Career Pathing**: Clear milestones for agents to transition into Quality Assurance, Workforce Management, and Technical Architecture roles.

---

### Results & Executive Summary
- **34 FTE Scaled**: Seamlessly onboarded and trained 25 new team members in under 6 months.
- **98%+ SLA Sustained**: Exceeded strict contractual client SLAs continuously across all 7 territories.
- **25% AHT Reduction**: Compressed overall resolution cycles while improving First Contact Resolution (FCR).
- **<5% Annualized Attrition**: Maintained top-tier retention within a historically high-churn industry.
`,
  },
];
