# IOI HCL Migration Projects: Enterprise Power Platform Modernization

[![Platform](https://img.shields.io/badge/Platform-Power%20Apps%20%7C%20Dataverse%20%7C%20SharePoint-0078D4.svg)](#)
[![Automation](https://img.shields.io/badge/Automation-Playwright%20%7C%20Python%20AST-4B8BBE.svg)](#)
[![Case Study](https://img.shields.io/badge/Portfolio-Case%20Study%20Available-brightgreen.svg)](./PORTFOLIO.md)
[![Notion Portfolio](https://img.shields.io/badge/Notion-Live%20Portfolio-000000.svg)](https://app.notion.com/p/4128e5697cbf81d8aeefcc4df14089c2)

End-to-end enterprise modernization repository migrating legacy **HCL / Lotus Domino** databases and forms across 23 departments at **IOI Acidchem / IOI Group** into the **Microsoft Power Platform** ecosystem.

> 📖 **Read the comprehensive case study in [PORTFOLIO.md](./PORTFOLIO.md)** or view the live interactive portfolio on **[Notion](https://app.notion.com/p/4128e5697cbf81d8aeefcc4df14089c2)**.

---

## 📸 Production Platform Preview

![IOI Acidchem Enterprise Platform - v2](./powerapps_authenticated_initial_full.png)

---

## 📂 Repository Structure

```
.
├── PORTFOLIO.md                  # Comprehensive Portfolio Case Study & Architecture Overview
├── analysis/                     # Domino DXL field inventories, CRUD gap analysis & departmental evaluations
├── audit/                        # Verification registers, fix backlogs, Power Apps YAML audits
├── canvas-app-rebuild/           # Modernized Canvas App screen YAML definitions & formula scripts
├── canvas-apps-output/           # Extracted and compiled Power Apps components & screens (670+ files)
├── canvas-migration-design/      # Visual design tokens, screen layout definitions, and form specs
├── design/canvas-apps-tools/     # Bespoke Python AST & regex patch tools for Canvas App YAMLs
├── ioi_Docs (2)/                 # Master specifications, SharePoint schemas, and solution packages
│   ├── docs/                     # SharePoint provisioning runbooks and list structure plans
│   ├── fin-forms-app/            # Financial forms Power Apps solution module
│   └── ioi-platform-shell/       # Main platform shell & shared navigation
├── scripts/                      # Playwright CDP automation & inventory visual capture scripts
├── powerapps-screenshots/        # Live UI captures and visual audit artifacts
└── powerapps-*-snapshot.md       # Live DOM inspection snapshots of the deployed v2 platform
```

---

## 🚀 Key Modules Modernized & Showcase Catalog

The platform architecture modernizes 20+ departmental workflows into modular suites within **IOI Acidchem Enterprise Platform (v2)**. A showcase catalog of **13 flagship applications** across 7 departments has been engineered with full client-ready UI mockups and complete declarative Power Fx Canvas YAML code:

* **52 High-Fidelity UI Mockups:** 1920×1080 pixel-perfect screenshots located in [`mockups/apps/`](./mockups/apps/) (4 core screens per application: `LoginScreen`, `DashboardScreen`, `DetailsScreen`, `EditScreen`).
* **Operational Command Dashboards:** Replaced static browse screens with dynamic analytical dashboards featuring 4 domain KPI trend cards and authentic interactive SVG data visualizations (7-day shift Gantt bars, Centrifuge FFT vibration waveforms, GC-MS fatty acid peak spectra, USL/LSL tolerance gauges, CapEx waterfall charts, and AR aging histograms).
* **Context-Aware Persistent Navigation:** Fixed 260px left sidebar persistently anchored across all 4 screens with domain-specific sub-navigation and dynamic active state highlighting.
* **Domain-Driven Color Theming:** 100% strict color discipline per app based on industry psychology, compliant with WCAG AA/AAA accessibility standards.
* **52 Declarative Power Fx YAML Definitions:** Functional Canvas v3 YAML definitions located in [`canvas-apps/`](./canvas-apps/) (`*.pa.yaml`).
* **13 Power Automate Modern UI Workflows:** Full-resolution (1920×1080) Modern Designer mockups located in [`power-automate/mockups/`](./power-automate/mockups/) and complete specifications in [`power-automate/workflows/`](./power-automate/workflows/). Detailed master guide in [**`POWER_AUTOMATE_WORKFLOWS.md`**](./POWER_AUTOMATE_WORKFLOWS.md).
* **Live Portfolio Integration & Deployment:** Fully synchronized to the main portfolio repo at [`C:\Users\AL_AAF\Project\04_portfolio_and_resumes\Al-resume v2`](file:///C:/Users/AL_AAF/Project/04_portfolio_and_resumes/Al-resume%20v2) and deployed live to [**https://aliakhmadfauzie.web.app**](https://aliakhmadfauzie.web.app).

| Department | Application Code | Application Title | 4 Visual Mockups | 4 Power Fx Screen YAMLs |
| :--- | :--- | :--- | :--- | :--- |
| **IT** | `ITSSR` | IT Support & Service Request | [View 4 Screens](./mockups/apps/ITSSR/) | [View 4 YAMLs](./canvas-apps/ITSSR/) |
| **IT** | `EAF` | External Access Form | [View 4 Screens](./mockups/apps/EAF/) | [View 4 YAMLs](./canvas-apps/EAF/) |
| **HR** | `LVE` | Leave Management System | [View 4 Screens](./mockups/apps/LVE/) | [View 4 YAMLs](./canvas-apps/LVE/) |
| **HR** | `MCL` | Medical Claims & Benefits | [View 4 Screens](./mockups/apps/MCL/) | [View 4 YAMLs](./canvas-apps/MCL/) |
| **Finance** | `CAR` | Capital Appropriation Request | [View 4 Screens](./mockups/apps/CAR/) | [View 4 YAMLs](./canvas-apps/CAR/) |
| **Finance** | `CMF` | Credit Management Form | [View 4 Screens](./mockups/apps/CMF/) | [View 4 YAMLs](./canvas-apps/CMF/) |
| **SHE** | `SHEINCIACCI` | Incident & Accident Investigation | [View 4 Screens](./mockups/apps/SHEINCIACCI/) | [View 4 YAMLs](./canvas-apps/SHEINCIACCI/) |
| **SHE** | `PPEREQU` | PPE Requisition & Issuance | [View 4 Screens](./mockups/apps/PPEREQU/) | [View 4 YAMLs](./canvas-apps/PPEREQU/) |
| **Maintenance**| `FAR` | Equipment Failure Analysis Report | [View 4 Screens](./mockups/apps/FAR/) | [View 4 YAMLs](./canvas-apps/FAR/) |
| **Maintenance**| `MTP` | Turnaround & Overhaul Planning | [View 4 Screens](./mockups/apps/MTP/) | [View 4 YAMLs](./canvas-apps/MTP/) |
| **QA** | `NCRINTEAUDI` | Internal Audit Non-Conformance | [View 4 Screens](./mockups/apps/NCRINTEAUDI/) | [View 4 YAMLs](./canvas-apps/NCRINTEAUDI/) |
| **QC** | `OOS` | Out-of-Specification & CAPA | [View 4 Screens](./mockups/apps/OOS/) | [View 4 YAMLs](./canvas-apps/OOS/) |
| **Logistics** | `CSD` | Container Shipment & Tankers | [View 4 Screens](./mockups/apps/CSD/) | [View 4 YAMLs](./canvas-apps/CSD/) |

> 📖 **For complete deep-dives, architecture diagrams, and interactive screenshot embeds, see [PORTFOLIO.md](./PORTFOLIO.md).**

---

## 🛠️ Tooling & Scripts

* **`scripts/capture-visual-inventory.mjs`**: Automated Node.js and Playwright CDP crawler that iterates through all departmental routes, records DOM accessibility trees, and captures full-page visual regression screenshots.
* **`design/canvas-apps-tools/`**: Python AST utilities to enforce control type safety, scaffold Browse/Detail/Edit screen triplets, and repair Power Fx formula syntax.
