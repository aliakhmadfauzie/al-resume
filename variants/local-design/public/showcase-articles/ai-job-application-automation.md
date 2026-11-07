# AI-Powered Job Application Automation: Tailoring Documents at Scale

How we built an **ATS automation toolkit** that tailors resumes and cover letters to any job description, generates dual-track PDFs, syncs them to Google Drive, and automates form-filling on Workday portals — all governed by a single source of truth.

> **AL**
> **Ali Akhmad Fauzie** — ALM & AI Engineering Lead

> **Repository**: [github.com/AlTechSolutions-AAF/ats-automation](https://github.com/AlTechSolutions-AAF/ats-automation)

---

## Moving Beyond One-Off Tailoring

Applying to dozens of roles means rewriting the same resume over and over, with inconsistent formatting and no audit trail. This toolkit turns that into a deterministic, governed pipeline.

## What It Does

- **AI Tailoring with Gemini & Groq** — Generates resume and cover-letter variants matched to a specific job description.
- **Dual-Track Generation** — Produces both a **Tech** track and an **Ops** track variant so the same profile speaks to different role families.
- **Standardized PDF Output** — Applies a strict naming convention so every generated document is consistent and traceable.
- **Google Drive Sync** — Automatically uploads generated and deployed documents to a governed Drive structure.
- **NotebookLM Integration** — Interfaces with NotebookLM for document analysis and review.
- **Profile Sync** — Keeps a single profile in sync across LinkedIn, Indeed, JobStreet, SEEK, and Glassdoor via platform-specific adapters.
- **Workday ATS Bot** — Automates form filling on Workday-based application portals.
- **Local Command-Center Dashboard** — A web dashboard to monitor generation, deployment, and activity.

## Governance & Audit

The toolkit treats documents as governed artifacts:

- `MASTER_SOURCE_OF_TRUTH.md` — single source of truth for profile data.
- `APPLICATION_TRACKER.md` — tracks every application and tailored document.
- `PDF_NAMING_CONVENTION.md` / `PDF_OUTPUT_GOVERNANCE.md` — output standards.
- `DRIVE_API_SETUP.md` / `NOTEBOOKLM_SETUP.md` / `PROFILE_SYNC_GUIDE.md` — setup runbooks.

## Key Modules

| Module | Purpose |
|---|---|
| `ai_gateway.py` | AI API abstraction (Gemini, Groq) |
| `tailor_to_jd.py` | JD-tailored document generation |
| `generate_dual_track_docs.py` | Dual-track PDF generation |
| `app_bot_v6.py` | Workday ATS automation bot |
| `json/profile_data.py` | Profile data loader |
| `profile_sync/` | Profile sync engine + platform adapters |
| `drive_sync.py`, `drive_upload.py` | Google Drive orchestration |
| `dashboard/` | Local web command center |

---

> **Reference**: Evidence sourced from the `ATS AUTOMAYTION/ats-automation` repository (`README.md`, `MASTER_SOURCE_OF_TRUTH.md`, `APPLICATION_TRACKER.md`, `PDF_OUTPUT_GOVERNANCE.md`).
