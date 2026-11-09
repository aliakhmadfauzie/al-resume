# Delegated Engineering Work Orders

> **Standards Alignment:** Product Portfolio Architect Protocol — Stage 4 Sub-Skill Delegation  
> **Operational Rule:** The Architect designs the technical contracts, boundary invariants, and validation matrices; execution is delegated to specialized engineering agents without writing raw application code in the architecture layer.

---

## 🎨 1. Frontend UI Engineering Work Order
**Assigned Specialist:** Senior Mobile & Frontend UI Engineer  
**Scope:** Responsive layout hardening, safe-area insets, accessibility contrast tokens, and optimistic state skeletons.

### Objective
Implement ergonomic surface updates across mobile and PWA clients (SaltDistribute, Jastip Cross-Border, PelatihKu PRO) ensuring zero UI clipping across diverse OEM devices and full WCAG 2.2 AA accessibility compliance.

### Technical Deliverables
1. **Container Layout & Safe-Area Padding:**
   - Enforce dynamic hardware insets across all viewport edges using `react-native-safe-area-context` on React Native / Expo targets, and CSS environment variables (`env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`) on PWA targets.
   - Maintain minimum 16px lateral gutter margins and 24px bottom clearance for floating action buttons (FAB) above native navigation bars.
2. **Touch Target Standard Enforcement:**
   - Audit and enforce that every interactive touch element (buttons, icon taps, stepper controls, tabs) occupies a minimum bounding box of **48×48 dp** (52×52 dp for gym-floor PelatihKu controls).
   - Expand touch slop on compact icon buttons using `hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}`.
3. **Contrast Tokens & Theming:**
   - Ensure all typography tokens against container backgrounds exceed **4.5:1** for standard text and **3:1** for large headers under WCAG 2.2 AA rules.
   - For PelatihKu PRO, enforce the Pitch Obsidian OLED palette (`#080808` base, `#D4FF00` Electric Volt-Lime interactive highlights).
4. **Loading Skeletons & Error Boundaries:**
   - Replace generic spinning loading indicators with shimmer content skeletons matching exact component geometric dimensions to achieve Cumulative Layout Shift (CLS) ≤ 0.05.
   - Wrap all major view tabs in isolated React Error Boundaries with localized fallback state triggers and retry levers.

---

## 🗄️ 2. Database & Data Architecture Work Order
**Assigned Specialist:** Staff Database & Cloud Storage Architect  
**Scope:** Firestore security rules audit, schema validation, composite indexes, and optimistic transaction boundaries.

### Objective
Harden real-time Cloud Firestore collections and relational persistence stores across all production repositories, eliminating permission leaks and high-concurrency race conditions.

### Technical Deliverables
1. **Cloud Firestore Security Rules Hardening:**
   - Audit and deploy strict declarative `firestore.rules` preventing unauthorized client document mutations.
   - Enforce role-based access control (RBAC) via `request.auth.token.role` claims for administrative operations.
   - Ensure customer orders and guest inquiries follow a **Public-Create / Admin-Read** boundary where guests can write initial documents with schema sanitization, but cannot query or read other users' documents.
2. **Atomic Inventory Leases & Concurrency Control:**
   - Refactor inventory allocation logic in SaltDistribute and Jastip Cross-Border into atomic `runTransaction()` blocks.
   - Implement temporary lease locks with 15-minute Time-to-Live (TTL) timestamps to prevent double-reservation of stock during simultaneous checkout attempts.
3. **Composite Indexing & Query Optimization:**
   - Verify all compound queries (e.g. `where("status", "==", "active").orderBy("createdAt", "desc")`) are backed by explicit definitions in `firestore.indexes.json` to prevent runtime query rejections.
4. **Data Rollback & Migration Protocol:**
   - Document zero-downtime schema evolution patterns: newly added document fields must be optional with safe client-side fallback defaults.
   - Create automated database export backups to Google Cloud Storage (GCS) before any schema migration script is executed.

---

## ⚙️ 3. Backend API & Cloud Services Work Order
**Assigned Specialist:** Principal Backend & Distributed Systems Engineer  
**Scope:** Route contracts, payload validation, idempotency guarantees, and rate-limiting.

### Objective
Establish bulletproof HTTP and serverless function contracts for webhooks, external payment notifications, and background batch jobs.

### Technical Deliverables
1. **Route Contract Specifications:**
   - `POST /api/checkout/reserve-lease`: Validates cart items, verifies in-stock quantities, and returns an atomic lease token.
   - `POST /api/webhooks/payment`: Ingests bank and marketplace payment callbacks with mandatory signature verification.
   - `GET /api/system/health`: Lightweight health check endpoint verifying database connectivity and latency.
2. **Payload Validation & Sanitization:**
   - Enforce schema validation on all incoming request bodies using Zod or equivalent TypeScript runtime validators.
   - Reject any malformed payload with an explicit HTTP 400 response containing structured field error paths.
3. **Idempotency Guarantees:**
   - Require an `Idempotency-Key` header on all financial mutations. Store processed keys with a 24-hour expiration in Firestore/Redis to prevent duplicate charges or double dispatch on network retries.
4. **HTTP Status Response Matrix:**
   - `200 OK`: Request succeeded.
   - `201 Created`: Resource successfully provisioned.
   - `400 Bad Request`: Payload validation failed.
   - `401 Unauthorized`: Missing or invalid session token.
   - `403 Forbidden`: Authenticated user lacks required role permissions.
   - `409 Conflict`: Inventory lease collision or concurrent lock conflict.
   - `429 Too Many Requests`: Rate limit exceeded (enforce 60 req/min per IP).
   - `500 Internal Error`: Unhandled server exception with internal logging.

---

## 🧪 4. Quality Assurance (QA) & Test Automation Work Order
**Assigned Specialist:** Lead QA & Automation Engineer  
**Scope:** Automated E2E testing matrix, boundary assertions, network degradation recovery, and accessibility audits.

### Objective
Expand end-to-end (E2E) and integration test coverage across all flagship repositories to achieve regression-free deployments.

### Technical Deliverables
1. **Automated Playwright E2E Test Suite:**
   - Script full end-to-end user journeys for Jastip Cross-Border Manager and Putri GarmentHub:
     - Flow 1: Authentication ➔ Trip Selection ➔ Aisle Item Triage ➔ Barcode Scan.
     - Flow 2: Cart Checkout ➔ Proof of Payment Submission ➔ Admin Approval.
     - Flow 3: SPK Creation ➔ Partial Intake Batch Recording ➔ Profit Calculation.
2. **Network Degradation & Offline Resilience Checks:**
   - Simulate offline transitions during active forms using Chrome DevTools Protocol network throttling (`Offline`, `Slow 3G`).
   - Assert that active user inputs remain cached in local state and that a visible offline banner is rendered without crashing the app.
   - Verify that upon network restoration, pending mutations are cleanly synchronized without duplicate document creation.
3. **Boundary Condition & Negative Test Matrix:**
   - Assert system behavior on zero values, negative numeric inputs, and extreme boundary quantities (e.g., ordering 0 tons or 10,000 tons of salt).
   - Test currency conversion edge-cases with extreme exchange rates.
4. **Accessibility (a11y) Automated Audit:**
   - Execute automated Axe-Core / Lighthouse accessibility scans across all top-level routes, requiring zero critical violations and minimum accessibility score of 95.

---

## 🖼️ 5. Visual UI Showcase & Gallery Work Order
**Assigned Specialist:** Design Systems & Creative Technologist  
**Scope:** Viewport screen capture, ergonomic annotations, and visual asset delivery.

### Objective
Capture and curate high-resolution visual evidence of all application interfaces following the specifications defined in [`PROJECT_SHOWCASE_GALLERY.md`](./PROJECT_SHOWCASE_GALLERY.md).

### Technical Deliverables
1. **Live Viewport Capture:**
   - Capture clean 390×844 dp mobile viewports and 1440×900 dp desktop viewports for deployed systems (SaltDistribute PWA, Jastip Cross-Border Manager, Headless E-Commerce PWA).
   - Remove browser chrome or emulate native mobile devices via Playwright screenshot automation (`viewport: { width: 390, height: 844 }`, `deviceScaleFactor: 2`).
2. **Interface Screen Cataloging:**
   - Deliver 4 canonical views per project:
     - Screen 1: Value Proposition Hero.
     - Screen 2: Core Transaction / Workflow.
     - Screen 3: Telemetry & Observability.
     - Screen 4: Operational Resilience / Empty State.
3. **Architectural Annotation:**
   - Embed captions explaining information density choices, color tokens, and touch target standards directly alongside visual assets.
