# Architecting Enterprise Modernization: Migrating Legacy Lotus Domino Applications to a SharePoint-Backed, Code-First Power Apps Platform

A deep dive into the architecture used at **IOI Corporation Berhad**: a single **code-first Power Apps** platform built on **React + TypeScript**, persisted on **SharePoint Online** (`MainDB_IT` + `FormCode` discriminator), and orchestrated by **Power Automate** — avoiding premium-connector licensing.

> **AL**
> **Ali Akhmad Fauzie** — Fullstack & Enterprise Solution Architect

![IT Service Request dashboard](https://raw.githubusercontent.com/Altechsolution123/altechsolution_33/main/public/gallery/stitch_unified_it_ticketing_system/dashboard_overview.png)

---

## The Legacy Domino Modernization Challenge

In large manufacturing and plantation conglomerates like **IOI Corporation Berhad**, decades of critical operational business logic were locked inside **hundreds of legacy Lotus Domino forms and applications** across **36 department-sites** (22 Penang/Prai + 14 Johor/PanCen). These applications suffered from severe technical debt:

- Unsupported on-premise servers and a lack of modern authentication
- Opaque document schemas with no relational integrity
- Zero mobile capabilities for field and factory workers
- Escalating maintenance costs and licensing friction

---

## The Architectural Strategy

Rather than an impulsive "big-bang" replatforming, we engineered a **code-first, SharePoint-backended** architecture:

### Code-First Power Apps App (Single App for All Departments)

- **Single app, single data model**: One **code-first** Power Apps app for all departments (decision DEC-2026-003), filtered by `FormCode` / department — no per-department apps.
- **Modern front-end stack**: React 19 + TypeScript + Vite + shadcn/ui + Radix UI + Tailwind CSS v4 + React Query + Jotai, built on the `@microsoft/power-apps` SDK (v1.1.3).
- **Single main list per site**: `MainDB_IT` with a `FormCode` discriminator, plus extension lists (`MainDB_IT_Ext_*`) and `Config_*` lists (decision DEC-2026-001).
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
- **Automated Quality Gates**: PAC CLI v2.7.4, TypeScript strict compilation (`tsc --noEmit`), and ESLint validation.
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

> **Reference**: Evidence sourced from `design/m365-design/powerapps-design.md`, `docs/central-form-reference.md`, `analysis/domino-field-inventory.md`, and `docs/repo-knowledge-base.md` in the `ioi-domino-m365-migration` repository.
