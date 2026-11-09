# Enterprise Power Platform & M365 Migration Architecture Handbook

> **Project Scope**: Legacy Lotus Domino (DXL) to Microsoft Power Platform (Power Apps Canvas + Power Automate Cloud Flows + Dataverse + SAP/Oracle ERP) Enterprise Cutover Suite.  
> **Engineering Lead**: Ali Akhmad Fauzie ([@aliakhmadfauzie](https://github.com/aliakhmadfauzie))  
> **Production Deployment**: [https://aliakhmadfauzie.web.app](https://aliakhmadfauzie.web.app)  
> **Portfolio Repository**: [`https://github.com/aliakhmadfauzie/al-resume.git`](https://github.com/aliakhmadfauzie/al-resume.git)

---

## 1. Executive Context & Modernization Background

This repository contains the complete frontend showcase, architectural specifications, declarative Power Fx YAML source codes, and Power Automate workflow definitions resulting from the enterprise modernization of **365+ legacy Lotus Domino databases** into a unified **Microsoft Power Platform** ecosystem for a global multi-plant chemical and oleochemical manufacturing conglomerate (IOI Oleo / IOI Acidchem).

### Core Problem & Status Quo
- **Legacy Technical Debt**: 365+ disparate Lotus Notes databases (`.nsf`), undocumented Domino @Formula and LotusScript logic, fragmented local server storage, and escalating enterprise licensing costs ($960K/year avoided upon cutover).
- **Data Inconsistencies**: No centralized validation, disparate master data across plants, disconnected approval trails, and slow investigation cycles (73% average reduction in CAPA resolution post-migration).
- **Modernization Mandate**: Replace proprietary legacy workflows with zero-downtime, declarative, WCAG 2.1 AA compliant Power Apps Canvas applications integrated with SAP ERP and Microsoft Dataverse.

---

## 2. Standardized Application Quadruplet Architecture

Every migrated departmental application is engineered adhering to a strict **4-Screen Quadruplet Architecture**, ensuring unified mental models for floor operators, engineers, and executive approvers:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       ENTERPRISE QUADRUPLET ARCHITECTURE                    │
├──────────────────┬──────────────────┬──────────────────┬────────────────────┤
│ 1. LOGIN SCREEN  │ 2. BROWSE SCREEN │ 3. DETAILS SCREEN│ 4. EDIT SCREEN     │
│ (SSO & Role Gate)│ (Queue & Search) │ (Approval Trail) │ (Intake Wizard)    │
│                  │                  │                  │                    │
│ • Azure AD SSO   │ • Search & Filter│ • Progress Stepper│ • Form Validation │
│ • Role Gate Check│ • Paginated Grid │ • Line Items View│ • Multi-Step Wizard│
│ • Facility Picker│ • Status Badges  │ • Digital Sign-off│ • Attachment Drop │
└──────────────────┴──────────────────┴──────────────────┴────────────────────┘
                                     │
                                     ▼
        ┌────────────────────────────────────────────────────────┐
        │       POWER AUTOMATE 3-TIER CLOUD WORKFLOW ENGINE      │
        │ • Trigger (Dataverse/SharePoint Item Created/Modified) │
        │ • Multi-Stage Approval Routing & Parallel Sign-offs    │
        │ • ERP Integration (SAP RFC / Oracle BAPI sync)         │
        │ • Automated Notifications & Immutable Audit Log       │
        └────────────────────────────────────────────────────────┘
```

### The 4 Core Screens
1. **`LoginScreen` (SSO & Role-Based Access Control)**:
   - Azure Active Directory (Entra ID) single sign-on with automatic token renewal.
   - User profile hydration via `Office365Users.UserProfileV2()`.
   - Security role gate checking against Dataverse User Roles (Operator, Reviewer, HOD, Plant Manager).
   - Facility and operating plant selector (`Penang Plant 1`, `Plant 2`, `Praai Terminal`).
2. **`BrowseScreen` (Active Work Queue & Master-Detail Gallery)**:
   - Zero-polling gallery fed by indexed Dataverse views and optimized OData delegation queries.
   - Real-time search by Reference Number, Batch ID, Requester, or Department.
   - Color-coded SLA status chips (`Draft`, `Under Review`, `Approved`, `Rejected`, `Closed`).
   - Sticky action bar with responsive bulk-export to Excel/CSV.
3. **`DetailsScreen` (Approval Stepper & Line-Item Inspection)**:
   - Visual 4-stage approval stepper (`Draft` ➔ `HOD Endorsement` ➔ `EHS/Quality Sign-Off` ➔ `Plant Manager Authorization`).
   - Collapsible sections for financial cost allocation, root-cause 5-Why analysis, or item breakdown.
   - Actionable signature pads and one-click rejection modals with mandatory remarks.
4. **`EditScreen` (Dynamic Intake Wizard & Validation Engine)**:
   - Structured multi-step intake wizard preventing incomplete submissions.
   - Deep declarative Power Fx field validation preventing invalid data states before write.
   - File attachment drop-zone integrating directly with SharePoint Online / Azure Blob document libraries.

---

## 3. The 13 Departmental Applications Suite

The suite covers 8 core business units across chemical manufacturing and plant operations:

| # | Code | Application Name | Business Department | Primary Power Automate Trigger | Target Database / ERP |
|---|---|---|---|---|---|
| 1 | `ITSSR` | IT Support Service Request | Information Technology | Dataverse `OnRecordCreated` | Dataverse / ServiceNow Gateway |
| 2 | `ITAMR` | Hardware Asset & Peripheral Management | Information Technology | SharePoint `ItemCreated` (Asset Queue) | SharePoint Online / SAP Fixed Assets |
| 3 | `HRONB` | Employee Onboarding & Equipment Provisioning | Human Resources | Dataverse `OnStageChange` (Hire) | Dataverse / Active Directory / SAP HR |
| 4 | `HRTRV` | Travel Request & Expense Authorization | Human Resources | SharePoint `ItemCreated` (Trip Itinerary) | SharePoint / Concur / SAP FI |
| 5 | `FINEXP` | Operational Expense Reimbursement | Finance & Accounting | Dataverse `OnCreated` (Expense Claim) | Dataverse / SAP Financials (FI/CO) |
| 6 | `FINCAP` | Capital Expenditure (AFCE) Authorization | Finance & Accounting | Dataverse `OnCreated` (AFCE Request) | Dataverse / SAP Project Systems (PS) |
| 7 | `SHEINC` | Safety Incident & Near-Miss Investigation | Safety, Health & Environment | SharePoint `ItemCreated` (Incident Log) | SharePoint / EHS Regulatory Portal |
| 8 | `SHEAUD` | Hazardous Work Permit & EHS Compliance | Safety, Health & Environment | Dataverse `OnCreated` (Hot Work Permit) | Dataverse / Safety Cloud |
| 9 | `MAINTWO` | Work Order & Preventive Maintenance | Engineering & Maintenance | Dataverse `OnRecordCreated` (Breakdown) | Dataverse / SAP Plant Maintenance (PM) |
| 10 | `MAINTCAL` | Equipment Calibration & Service Dispatch | Engineering & Maintenance | Recurrence Schedule + Dataverse Trigger | Dataverse / Fluke Calibration Database |
| 11 | `QANCR` | Non-Conformance Report & Corrective Action | Quality Assurance | Dataverse `OnRecordCreated` (OOS Flag) | Dataverse / SAP Quality Management (QM) |
| 12 | `QCAPPR` | Finished Goods & Raw Material CoA Approval | Quality Control | Dataverse `OnRecordCreated` (Lab CoA) | Dataverse / LIMS / SAP Batch Release |
| 13 | `LOGDD` | Dispatch Delivery Order & Gate Pass Clearance | Logistics & Supply Chain | Dataverse `OnRecordCreated` (Truck Arrived) | Dataverse / SAP Sales & Distribution (SD) |

---

## 4. Repository Artifact Organization

All generated files, specifications, and assets are structured cleanly across this repository:

```
Al-resume v2/
├── docs/
│   └── enterprise-migration/
│       ├── README.md                          <-- This architecture handbook
│       ├── PORTFOLIO.md                       <-- Master Portfolio & specs breakdown
│       ├── POWER_AUTOMATE_WORKFLOWS.md        <-- Step-by-step cloud workflow architecture
│       ├── MIGRATION_PROJECT_OVERVIEW.md      <-- Domino cutover historical overview
│       ├── workflows/                         <-- 13 Flow Architecture markdown specs
│       │   ├── CAR_Flow_Architecture.md
│       │   ├── ITSSR_Flow_Architecture.md
│       │   └── ... (all 13 systems)
│       ├── canvas-apps/                       <-- 52 Power Fx declarative YAML screen source codes
│       │   ├── ITSSR/
│       │   │   ├── LoginScreen.pa.yaml
│       │   │   ├── BrowseScreen.pa.yaml
│       │   │   ├── DetailsScreen.pa.yaml
│       │   │   └── EditScreen.pa.yaml
│       │   └── ... (13 app directories)
│       ├── canvas-app-showcase/               <-- Showcase flagship YAML definitions
│       ├── flow-designers/                    <-- 13 Modern UI Flow Designer visualizer HTML files
│       ├── mockup-templates/                  <-- High-fidelity screen layout HTML templates
│       └── scripts/                           <-- Node.js / Playwright / Generation scripts
├── public/
│   └── assets/
│       └── power-apps/
│           ├── mockups/                       <-- 4 flagship 1080p core quadruplet mockups
│           ├── workflows/                     <-- 13 Power Automate Modern Designer screenshots
│           └── apps/                          <-- 52 individual app screenshots (13 apps × 4)
│               ├── itssr/
│               │   ├── 01-loginscreen.png
│               │   ├── 02-browsescreen.png
│               │   ├── 03-detailsscreen.png
│               │   └── 04-editscreen.png
│               └── ... (all 13 apps)
├── src/
│   ├── data/
│   │   ├── powerPlatformAppsData.ts           <-- Strongly-typed TypeScript database for 13 apps
│   │   ├── portfolioData.ts                   <-- Main portfolio projects and case studies
│   │   └── projectGalleries.ts                <-- Gallery lightbox configuration
│   └── components/
│       └── views/
│           ├── DepartmentalAppsShowcase.tsx   <-- Interactive showcase React component
│           └── ProjectsView.tsx               <-- Main projects page displaying the showcase
```

---

## 5. Developer Guide: How to Add More Application Samples

Follow this exact step-by-step guide to integrate additional applications into this portfolio:

### Step 1: Capture or Generate Visual Mockups
For every new application, generate 5 web-safe, high-definition PNG images:
1. `01-loginscreen.png`: SSO login screen with user profile & facility picker.
2. `02-browsescreen.png`: Filterable master queue with KPI badges.
3. `03-detailsscreen.png`: Stepper progress, line-item table, and signature pad.
4. `04-editscreen.png`: Dynamic intake wizard with validation error gates.
5. `{app_code}-flow-designer.png`: Power Automate Modern Canvas flow visualization.

Place them into the repository at:
- `public/assets/power-apps/apps/{app_code}/`
- `public/assets/power-apps/workflows/{app_code}-flow-designer.png`

### Step 2: Add Declarative Power Fx YAML Source Files
Create a new directory at `docs/enterprise-migration/canvas-apps/{APP_CODE}/` containing:
- `LoginScreen.pa.yaml`
- `BrowseScreen.pa.yaml`
- `DetailsScreen.pa.yaml`
- `EditScreen.pa.yaml`

Use authentic Power Fx formulas conforming to modern Power Apps standards (`Set()`, `Patch()`, `Notify()`, `LookUp()`, `Filter()`).

### Step 3: Author the Workflow Architecture Document
Create `docs/enterprise-migration/workflows/{APP_CODE}_Flow_Architecture.md` defining:
- Flow Name and Department.
- Trigger event and filter expressions (`@equals(triggerOutputs()?['body/status'], 'Pending')`).
- Step-by-step actions (HOD Approval, SAP RFC BAPI call, Notifications).
- Error handling configuration (Scope block with `runAfter: TimedOut, Failed`).

### Step 4: Register the Application in TypeScript
Open [`src/data/powerPlatformAppsData.ts`](file:///C:/Users/AL_AAF/Project/04_portfolio_and_resumes/Al-resume%20v2/src/data/powerPlatformAppsData.ts) and append your new app to `DEPARTMENTAL_APPS`:

```typescript
{
  code: 'NEWAPP',
  name: 'New Enterprise App Title',
  department: 'Maintenance', // 'IT' | 'HR' | 'Finance' | 'SHE' | 'Maintenance' | 'QA' | 'QC' | 'Logistics'
  category: 'Asset Integrity',
  businessImpact: 'Key quantified business metric (e.g., -40% resolution lag)',
  powerFxSnippet: `// Authentic Power Fx code snippet...`,
  screens: {
    login: {
      title: 'SSO & Access Gateway',
      image: '/assets/power-apps/apps/newapp/01-loginscreen.png',
      description: 'Azure AD authentication and role dispatch'
    },
    browse: {
      title: 'Active Work Queue',
      image: '/assets/power-apps/apps/newapp/02-browsescreen.png',
      description: 'Dataverse delegation gallery with multi-criteria filters'
    },
    details: {
      title: 'Detailed Inspection & Sign-Off',
      image: '/assets/power-apps/apps/newapp/03-detailsscreen.png',
      description: 'Line-item breakdown and digital approval signature'
    },
    edit: {
      title: 'Dynamic Intake Wizard',
      image: '/assets/power-apps/apps/newapp/04-editscreen.png',
      description: 'Step-by-step wizard with strict validation rules'
    }
  },
  workflow: {
    title: 'Automated 3-Tier Multi-Approver Engine',
    flowImage: '/assets/power-apps/workflows/newapp-flow-designer.png',
    trigger: 'When a new request is submitted (Dataverse)',
    actions: [
      'Parse request attributes and determine routing matrix',
      'Generate approval card to Department HOD via Teams & Email',
      'Invoke SAP RFC Connector to commit transaction upon sign-off',
      'Archive signed record to SharePoint with immutable SHA-256 hash'
    ],
    integration: 'Microsoft Dataverse + SAP ERP + Teams Adaptive Cards'
  }
}
```

### Step 5: Test & Verify Production Build
Run local build verification to ensure zero TypeScript and Vite bundle errors:

```bash
npm run build
```

### Step 6: Deploy to Firebase Hosting
Deploy the new app and images live to production:

```bash
firebase deploy --only hosting
```

---

## 6. Reference Repositories & Source Archives

Developers maintaining or expanding this system should cross-reference the following authoritative source repositories and local directories:

| Resource | Location / Link | Description |
|---|---|---|
| **Active Live Portfolio** | [https://aliakhmadfauzie.web.app](https://aliakhmadfauzie.web.app) | Live production application with interactive departmental showcase. |
| **Main Portfolio Repo** | [https://github.com/aliakhmadfauzie/al-resume.git](https://github.com/aliakhmadfauzie/al-resume.git) | Current React 19 / Vite source code and deployment pipeline. |
| **Power Platform Portfolio** | [https://github.com/aliakhmadfauzie/power-platform-portfolio.git](https://github.com/aliakhmadfauzie/power-platform-portfolio.git) | Dedicated Power Platform repository with raw components and workflows. |
| **IOI M365 Migration Suite** | [https://github.com/aliakhmadfauzie/ioi-m365-migration-suite.git](https://github.com/aliakhmadfauzie/ioi-m365-migration-suite.git) | Comprehensive enterprise migration suite, DXL schemas, and scripts. |
| **Local Migration Project** | `c:\Users\AL_AAF\OneDrive\Documents\IOI HCL Migration Projects` | Full local workspace containing analysis, mockups, and Playwright scripts. |
| **OneDrive App Archives** | `C:\Users\AL_AAF\OneDrive\IOIAPPS` | Original `.msapp` files, unpacked managed solutions (`IOI_1_0_0_9_managed.zip`), and tooling. |

---

## 7. Quality Standards & WCAG 2.1 AA Compliance

All screens and components in this suite adhere to the following strict front-end standards:
- **Typography Scale**: High-contrast, tabular-nums for numeric IDs, monospace for system tags.
- **Color Contrast**: 4.5:1 minimum contrast for body copy; 3:1 for graphical UI controls.
- **Design Tokens**: Standardized on CSS variables (`var(--bg-surface)`, `var(--bg-primary)`, `var(--border-subtle)`, `var(--text-accent)`).
- **Responsive Layout**: Designed for seamless display across mobile devices, tablets, and 4K desktop command centers.
- **Zero Mock Fallbacks**: Every UI control maps directly to real Dataverse schema fields and authentic Power Fx formulas.
