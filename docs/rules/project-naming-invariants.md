---
title: Project Naming & Canonical Architecture Invariants
description: Mandatory naming conventions and single-source-of-truth invariants for projects across Ali Akhmad Fauzie's portfolio and resumes.
always_on: true
---

# Project Naming & Canonical Architecture Invariants

These rules govern all past, present, and future agent interactions, documentation generation, and UI components in this repository.

## 1. GarmentHub Project
- **Canonical Title:** `GarmentHub Workshop ERP & Cash Flow Management`
- **Project ID:** `putri-garmenthub-erp`
- **Constraint:** NEVER rename or revert to "Putri App — GarmentHub Workshop ERP & 4-Pocket Cash Flow" or "Putri App". Always refer to it as "GarmentHub Workshop ERP & Cash Flow Management".

## 2. IOI Oleochemicals Modernization Project
- **Canonical Title:** `IOI Oleo Enterprise Modernization & Departmental Power Apps Suite`
- **Project ID:** `ioi-acidchem-she-platform`
- **Sub-Components:**
  - 13 Departmental Power Apps Suite (52 1080p screens across 7 departments)
  - 13 Event-Driven Power Automate Modern Cloud Flows
  - DOSH/SIRIM 5×5 Chemical Safety & Environment (SHE) Suite
  - Single `MainDB_{Dept}` SharePoint Online Architecture ($960K/yr license avoidance)
- **Constraint:** The 13 Departmental Power Apps and the Domino migration are NOT separated initiatives. The 13 apps are the direct production output and deliverable of decommissioning the 365+ Lotus Domino databases. NEVER split them into separate portfolio cards.

## 3. PulseTrack Project
- **Canonical Title:** `PulseTrack: Real-Time Agent Status System`
- **Project ID:** `pulsetrack`
- **Core Description & Problem:** Centralized, real-time workforce management and compliance tracking system built to solve a severe operational bottleneck: a strict no-phone policy on the production floor meant Team Leaders could not bring mobile phones to their desks. To check if a missing agent had updated their status via unauthorized external messaging tools like WhatsApp, Team Leaders had to continuously walk back and forth to the locker room. This caused massive time waste, delayed response times, data fragmentation, and heavy manual overhead.
- **M365 Architecture (How it Works):**
  - **Intake:** Agents use a standardized Microsoft Form to submit their status updates, specifically when reporting they will be on sick leave or running late.
  - **Automation:** Microsoft Power Automate instantly parses these submissions and writes them to a secure, centralized SharePoint list that Team Leaders can access directly from their production floor laptops, eliminating the need to check their phones.
  - **Visibility:** A live Power BI dashboard visualizes the entire floor's schedule adherence, current headcount, and cumulative time-in-state.
  - **Alerting:** Microsoft Teams integrations push automated alerts to Team Leaders when SLA thresholds are breached, or critically, when the volume of agents calling in sick exceeds the maximum allowable capacity for the shift.
- **Quantified Business Impact:**
  - **90% reduction** in manual reporting and status tracking overhead.
  - **98% accuracy** in real-time status updates and attendance tracking.
  - **60–80% reduction** in Team Leader administrative workload by eliminating locker trips and manual verification, allowing leaders to remain on the floor managing operations.

## 4. SmartFlow Project
- **Canonical Title:** `SmartFlow: Enterprise Business Request & Resource Automation Engine`
- **Project ID:** `smartflow`
- **Core Operational Challenge:** Executing client-initiated changes—such as scaling headcount, launching a new workflow, or modifying SLAs—previously triggered chaotic sequential email coordination across siloed departments, causing misaligned timelines (e.g. Recruitment hiring before Operations secured seating, or Finance missing a billing cycle update), delaying time-to-market for the client and risking SLA penalties.
- **M365 Architecture (How it Works):**
  - **Dynamic Intake Portal (Microsoft Forms):** Standardized, conditional form capturing exact language requirements, shift parameters, and target go-live dates upon client-initiated change requests.
  - **Parallel Orchestration (Power Automate):** Simultaneously generates and assigns distinct, customized task payloads across 4 critical departments:
    1. **Operations:** Prepares shift schedules, maps physical production floor seating, and allocates Team Leader/QA bandwidth.
    2. **Finance:** Updates client billing projections, adjusts payroll forecasts, and aligns OPEX budgets for new headcount.
    3. **Recruitment:** Opens specific job requisitions matching client language and skill requirements to the candidate pipeline.
    4. **Training:** Secures training room capacity, allocates subject matter experts (SMEs), and schedules onboarding timelines.
  - **The Nerve Center (SharePoint):** Centralized SharePoint database acting as an immutable single source of truth and strict audit trail for client compliance.
  - **Executive Visibility (Power BI & Teams):** Live Power BI dashboard rendering real-time RAG (Red/Amber/Green) readiness status per department, with Microsoft Teams Adaptive Cards notifying the PM upon phase completion or deadline risk.
- **Quantified Business Impact:**
  - **Accelerated Time-to-Market:** Shifted sequential human coordination to parallel automated task dispatching, significantly compressing agent ramp-up lead times.
  - **Zero-Defect Billing & Compliance:** Hardcoded Finance and Training into the automated loop, guaranteeing 100% of new agents are billed to the client and certified before hitting the production floor.
  - **80% Reduction in Administrative Overhead:** Eradicated status-update meetings and email chasing, freeing Project Managers to focus on client strategy.
  - **100% Real-Time Transparency:** Transformed an opaque process into a fully visible pipeline with **90% improved data accuracy**.
