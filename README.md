# Ali Akhmad Fauzie — Developer Portfolio & Digital Resume

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Power Platform](https://img.shields.io/badge/Power%20Platform-Power%20Apps%20%26%20Automate-742774?style=for-the-badge&logo=powerapps&logoColor=white)](https://powerapps.microsoft.com)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting%20%26%20Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Google Gemini API](https://img.shields.io/badge/Google%20Gemini-AI%20Assistant-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)

**Ali Akhmad Fauzie Portfolio & Digital Resume** is an enterprise developer portfolio and living architecture resume engineered with React 19, Vite, and Tailwind CSS. It highlights professional software engineering achievements, cross-border migrations, full-stack enterprise solutions, and features an integrated Gemini AI conversational assistant.

🌐 **Live Production Deployment**: [https://aliakhmadfauzie.web.app](https://aliakhmadfauzie.web.app)

---

## 🌟 Interactive Highlights

- **Flagship Enterprise Power Platform Showcase**: Interactive deep-dive into the modernization of **365+ legacy Lotus Domino databases** into a consolidated Microsoft Power Platform ecosystem for IOI Oleo / IOI Acidchem.
- **Departmental Apps & Flows Catalog**: Real-time filtering across 8 business domains (IT, HR, Finance, SHE, Maintenance, QA, QC, Logistics) with a 5-way screen switcher (`Login`, `Browse`, `Details`, `Edit`, `⚡ Cloud Flow`), 1080p image zoom modal, and expandable Power Fx YAML / Automate flow drawer.
- **AI Career Concierge**: Conversational assistant grounded in professional experience, tech stack proficiency, and project outcomes powered by Google Gemini.
- **Enterprise Case Studies**: Interactive case studies spanning PropTech (LewiHouse), B2B Logistics (SaltDistribute), and Enterprise Chemical Manufacturing Modernization (IOI Acidchem).
- **Architecture & Competency Visualizer**: Dynamic visual representation of competencies across Enterprise Platforms (Power Platform / SAP / Dataverse), Mobile (React Native / Kotlin), and Cloud (Firebase / GCP / Azure).

---

## 🏛️ Enterprise Power Platform Migration Suite

This repository houses the complete design system, UI assets, and architecture specifications for the **IOI Oleo Enterprise Modernization Project**:

- **Scope**: Replaced 365+ fragmented Lotus Domino databases (`.nsf`), eliminating **$960K/year** in software licensing with zero operational downtime.
- **Unified Quadruplet UX & Bespoke Archetypes**: Standardized every single application into a 4-screen quadruplet (`LoginScreen`, `BrowseScreen`, `DetailsScreen`, `EditScreen`), with 13 completely distinct UI archetypes tailored to operational environments (no generic UI slop; featuring ITIL command centers, Gantt turnaround schedulers, tribology wear matrices, and weighbridge terminal gates).
- **13 Flagship Production Systems**: Full implementations across IT (`ITSSR`, `EAF`), HR (`LVE`, `MCL`), Finance (`CAR`, `CMF`), Safety (`SHEINCIACCI`, `PPEREQU`), Engineering (`FAR`, `MTP`), QA (`NCRINTEAUDI`), QC (`OOS`), and Logistics (`CSD`).
- **Power Automate Cloud Flows**: 13 automated multi-stage approval flows featuring modern designer canvases, parallel branch routing, SAP RFC ERP synchronization, and automated Teams/Email approval triggers.
- **Declarative Power Fx Source Code**: 52 production-ready `.pa.yaml` screen source files stored in [`docs/enterprise-migration/canvas-apps/`](docs/enterprise-migration/canvas-apps/).

📖 **Detailed Handbook**: For full technical specifications, architecture diagrams, and field mapping schemas, see [`docs/enterprise-migration/README.md`](docs/enterprise-migration/README.md).

---

## 🛠️ Continuing Development: Adding More App Samples

Developers looking to add new application samples or extend the showcase can refer to the following workflow:

1. **Prepare Visual Assets**: Save the 4 screen mockups (`01-loginscreen.png`, `02-browsescreen.png`, `03-detailsscreen.png`, `04-editscreen.png`) under `public/assets/power-apps/apps/{app_code}/` and the flow diagram under `public/assets/power-apps/workflows/{app_code}-flow-designer.png`.
2. **Add Declarative Power Fx YAML**: Place the four screen YAML source files in `docs/enterprise-migration/canvas-apps/{APP_CODE}/`.
3. **Document Flow Architecture**: Add `{APP_CODE}_Flow_Architecture.md` under `docs/enterprise-migration/workflows/`.
4. **Register in TypeScript Data Store**: Append the new typed entry into `DEPARTMENTAL_APPS` in [`src/data/powerPlatformAppsData.ts`](src/data/powerPlatformAppsData.ts).
5. **Verify & Deploy**: Run `npm run build` to verify types and `firebase deploy --only hosting` to update the live site.

See the complete developer guide in [`docs/enterprise-migration/README.md`](docs/enterprise-migration/README.md#5-developer-guide-how-to-add-more-application-samples).

---

## 🔗 Authoritative Reference Sources & Repositories

When extending this project or researching source assets, consult these authoritative repositories and locations:

| Source | Reference Link / Path | Purpose |
|---|---|---|
| **Live Production Site** | [https://aliakhmadfauzie.web.app](https://aliakhmadfauzie.web.app) | Public-facing portfolio with active departmental applications catalog. |
| **Main Portfolio Repo** | [aliakhmadfauzie/al-resume](https://github.com/aliakhmadfauzie/al-resume.git) | Core repository (React 19, Vite, Tailwind CSS 4, Firebase Hosting). |
| **Power Platform Portfolio** | [aliakhmadfauzie/power-platform-portfolio](https://github.com/aliakhmadfauzie/power-platform-portfolio.git) | Dedicated repository for Power Platform components, flows, and canvas tooling. |
| **IOI M365 Migration Suite** | [aliakhmadfauzie/ioi-m365-migration-suite](https://github.com/aliakhmadfauzie/ioi-m365-migration-suite.git) | Enterprise migration scripts, DXL schema parsers, and cutover playbooks. |
| **Local Migration Project** | `c:\Users\AL_AAF\OneDrive\Documents\IOI HCL Migration Projects` | Full local development workspace with audit reports and Playwright automation scripts. |
| **Original App Archives** | `C:\Users\AL_AAF\OneDrive\IOIAPPS` | Raw packaged solutions (`.msapp`), managed solution ZIPs, and tooling. |

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/aliakhmadfauzie/al-resume.git
cd al-resume

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Run type verification & production build
npm run build

# 5. Deploy to Firebase Hosting
firebase deploy --only hosting
```

---

## 📄 License & Attribution
Authored by **Ali Akhmad Fauzie** ([@aliakhmadfauzie](https://github.com/aliakhmadfauzie)). All rights reserved.
