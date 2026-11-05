import { ProjectItem, MigrationSlice, ExperienceItem, DevStackItem, GovernanceItem, BusinessCompetency, InterviewTopic } from '../types';

export const PERSONAL_INFO = {
  name: "Ali Akhmad Fauzie",
  title: "Power Platform Solution Architect & Enterprise Modernization Specialist",
  tagline: "Power Platform Developer | Solution Architect | Driving digital transformation through scalable, intelligent automation.",
  location: "West Java 40111, Indonesia / Kuala Lumpur, Malaysia",
  email: "aliakhmadfauzie@gmail.com",
  phone: "+62 851-1055-2118 / +60 13-295 7406",
  linkedIn: "https://linkedin.com/in/aliakhmadfauzie",
  github: "https://github.com/aliakhmadfauzie",
  yearsExperience: "9+ Years",
  summary: "A results-driven Power Platform solution architect specializing in migrating legacy systems (Lotus Notes) to modern Microsoft 365 ecosystems. Proven track record in designing end-to-end automation workflows, AI-enhanced processes, and robust governance frameworks that deliver significant reductions in manual workload and operational cycle times. Expert in bridging functional silos across Quality, Warehouse, HR, and IT."
};

export const KEY_METRICS = [
  { label: "DATABASES MIGRATED", value: "365+", subtext: "Across 28+ Business Units" },
  { label: "BUS TRANSFORMED", value: "28+", subtext: "Quality, Supply Chain, IT, HR" },
  { label: "APPS DELIVERED", value: "16+", subtext: "Production Power Apps (Slice) & 23 Enterprise" },
  { label: "AUTOMATION IMPACT", value: "90%", subtext: "Manual Reporting Reduction" }
];

export const CORE_PROJECTS: ProjectItem[] = [
  {
    id: "ats-automation",
    title: "ATS Automation Engine",
    subtitle: "Dual-Track AI Tailoring, Workday Bot & Profile Sync Engine",
    category: "core",
    date: "2025",
    role: "Principal AI Automation & Full-Stack Systems Architect",
    repoUrl: "https://github.com/AlTechSolutions-AAF/ats-automation",
    tools: [
      "Python 3.11+",
      "Playwright Sync",
      "Google Gemini API",
      "Groq Llama-3.3-70B",
      "Pydantic v2",
      "ReportLab & PyPDF",
      "Supabase PostgreSQL",
      "SharePoint REST API",
      "Vercel Serverless"
    ],
    problem: "Dual-track career applications suffer from LLM metric hallucinations, hostile Workday SPA DOM traps (hidden file inputs, custom ARIA listboxes, inert Next buttons, strict name validators), single-provider 429 API quota exhaustion, and cross-platform profile drift across JobStreet, Indeed, SEEK, and Glassdoor.",
    solution: "Engineered an end-to-end career automation command center anchored to a canonical Single Source of Truth (MASTER_SOURCE_OF_TRUTH.md & profile.json) featuring a Tri-Engine AI Router with cross-process fcntl locking, a 10-gate PDF verification suite (Q1–Q10), a Workday-hardened Playwright wizard bot with SHA-256 response caching, and a Human-in-the-Loop multi-platform profile sync engine.",
    impact: "100% SSOT metric fidelity via regex hallucination gates (Q1–Q10); zero 429 pipeline drops via Tri-Engine failover; automated multi-step Workday wizard completion & 4-portal profile sync.",
    impactMetrics: [
      { label: "Quality Gates", value: "Q1–Q10" },
      { label: "AI Engines", value: "3 Routers" },
      { label: "Fact Drift", value: "0%" }
    ],
    technicalDetails: [
      "Tri-Engine AI Gateway (ai_gateway.py): Task-specific routing ('fast' -> Groq/OpenCode/Gemini vs 'structured' -> Gemini/OpenCode/Groq) with rolling 60s RPM/RPD counters, cross-process fcntl file locking, and automatic tool-call to JSON-schema prompt inlining fallback",
      "Governance-Gated Dual-Track Tailoring (tailor_to_jd.py & verify_pdfs.py): Verbatim experience/project/education bullet lock, regex SSOT metric cross-referencing to block fabricated numbers, and 10 deterministic PDF quality gates (Q1–Q10) via ReportLab & pypdf",
      "Workday-Hardened Playwright Bot (app_bot_v6.py): Option-aware SHA-256 disk cache (response_cache.json), hidden file input uploader with resume parse detection, ARIA listbox resolver, 3.0s Next button stability check, and title-case name normalizer",
      "Multi-Platform Profile Sync (profile_sync/engine.py): Resilient case-insensitive XPath locator generator across JobStreet, Indeed, SEEK, and Glassdoor with Gemini character-limit trimming and mandatory HITL review pause",
      "Hybrid Local & Cloud Command Center: Zero-dependency Python ThreadingHTTPServer streaming live subprocess stdout progress (0–100%), paired with Vercel serverless API, Supabase PostgreSQL + 7 Storage buckets, and SharePoint App-Only OAuth2 archival"
    ],
    codeSnippet: `# tailor_to_jd.py — Regex Metric Cross-Reference Against SSOT
if ssot_text:
    tailored_metrics = set(re.findall(r"\\b\\d+%\\+?|\\b\\d+\\+", text))
    ssot_metrics = set(re.findall(r"\\b\\d+%\\+?|\\b\\d+\\+", ssot_text))
    fabricated = [m for m in tailored_metrics if m not in ssot_metrics and m not in base_text]
    if fabricated:
        problems.append(f"Hallucinated metrics blocked by Governance Gate: {fabricated}")`,
    liveDemoId: "ats-automation",
    featured: true
  },
  {
    id: "power-platform-portfolio",
    title: "Enterprise Architecture Sandbox Portfolio",
    subtitle: "Interactive 7-Simulator Executive Showcase & Migration Explorer",
    category: "standalone",
    date: "2025",
    role: "Principal Solution Architect & Full-Stack Modernization Engineer",
    repoUrl: "https://github.com/aliakhmadfauzie/power-platform-portfolio",
    tools: [
      "React 19",
      "TypeScript 5.8",
      "Tailwind CSS 4",
      "Motion (Framer Motion 12)",
      "Vite 6",
      "Power Platform Architecture",
      "Dataverse"
    ],
    problem: "Production enterprise systems (financial rebate engines, ISO 9001/27001 document registries, SAP warehouse portals) reside inside NDA-locked corporate tenants protected by Azure AD Conditional Access and DLP policies, making static PDFs insufficient for technical evaluators.",
    solution: "Architected an interactive single-page executive showcase and live operational sandbox embedding 7 functional enterprise simulators, a 6-slice Domino-to-M365 migration explorer, polymorphic TypeScript inspection drawers, and a WCAG-compliant focus-trapped CV viewer.",
    impact: "7 live operational enterprise simulators; 365+ database migration telemetry across 6 domain slices; sub-second Rollup vendor chunking.",
    impactMetrics: [
      { label: "Live Simulators", value: "7 Apps" },
      { label: "Migration Slices", value: "6 Domains" },
      { label: "Canvas Screens", value: "878" }
    ],
    technicalDetails: [
      "Reactive 7-Component Statutory Rebate Simulator enforcing the RM 0.20/metric tonne ceiling in real time with atomic cross-view deep linking",
      "Polymorphic TypeScript discriminated union narrowing (ProjectItem | MigrationSlice) powering a unified slide-over specification drawer",
      "WCAG-compliant custom keyboard focus trap (Tab / Shift+Tab boundary wrapping, Escape dismissal) and print-ready PDF stylesheet in ResumeModal",
      "Rollup manual vendor chunk splitting (react-vendor, ui-vendor) and resilient external image fallback handlers"
    ],
    codeSnippet: `// LiveDemosView.tsx — 7-Component Statutory Rebate Ceiling Engine
const rawRebatePerTonne = Math.max(0, rebateBaseRate + rebateDistance + rebateSpecialTerm + rebateSeasonal + rebateTax - rebateCreditDeduction);
const cappedRebatePerTonne = Math.min(rawRebatePerTonne, 0.20);
const isCapped = rawRebatePerTonne > 0.20;
const totalRebateAmountRM = (cappedRebatePerTonne * rebateVolume).toFixed(2);`,
    liveDemoId: "rebate",
    featured: true
  },
  {
    id: "ioi-acidchem-she-platform",
    title: "IOI Enterprise M365 Migration & Acidchem SHE Platform",
    subtitle: "7,878 Power Apps YAML Screens, $960K/yr License Avoidance & DOSH 5×5 SHE Suite",
    category: "core",
    date: "2025 – 2026",
    role: "Lead Enterprise Modernization & Full-Stack Solution Architect",
    tools: [
      "React 19",
      "TypeScript 5.7",
      "Power Apps Canvas (.pa.yaml)",
      "@microsoft/power-apps SDK",
      "SharePoint Online MainDB",
      "Power Automate",
      "TanStack Query v5 & Jotai",
      "Python AST Validator"
    ],
    problem: "361+ Lotus Domino forms across 28+ departments at IOI Corporation / Acidchem (Penang & Johor chemical plants) suffered from 3–5 day paper/email turnarounds, while premium Power Platform connectors for 2,000+ users would cost $960,000+/year and 361 separate SharePoint lists would cause severe governance drift.",
    solution: "Engineered a Dual-Track Modernization Program housing 7,878 Power Apps YAML screens, 16 production .msapp packages, a 400+ file React 19 code-first mirror, a Single MainDB_{Dept} SharePoint architecture with indexed FormCode discriminators, and a dedicated DOSH/SIRIM Chemical Plant SHE Suite (5×5 HIRADC Matrix, 5-Whys CAPA, PPE stock alerts).",
    impact: "$960K+/yr premium licensing avoided via MainDB_{Dept} standard-connector architecture; 7,878 .pa.yaml screens statically verified; 99.4% DOSH/SIRIM PPE compliance across Penang & Johor plants.",
    impactMetrics: [
      { label: "YAML Screens", value: "7,878" },
      { label: "License Saved", value: "$960K/yr" },
      { label: "Risk Matrix", value: "DOSH 5×5" }
    ],
    technicalDetails: [
      "Single MainDB_{Dept} List per Site (MainDB_IT, MainDB_IT_JHR, MainDB_SHE) with an indexed FormCode discriminator (DEC-2026-001), eliminating 361-list sprawl and saving $960K/yr in premium connectors",
      "Automated Power Apps YAML v3.0 static validator (_validate_pa.py) checking Properties indentation hierarchy, multiline block scalars, leading '=' Power Fx prefixes, and control name uniqueness across 7,878 screens",
      "SharePoint GUID & URL canonicalizer (audit-power-config.mjs) preventing placeholder GUIDs and multi-encoded URL drift across 13+ data sources in CI",
      "Interactive DOSH/SIRIM 5×5 HIRADC Risk Matrix Heatmap (Likelihood × Severity), 5-Tier Hierarchy of Controls, 5-Whys Root Cause Investigation (SHEAI/SHEICAR), and multi-plant PPE threshold alerting"
    ],
    codeSnippet: `// ioi-she-platform/src/services/sheService.ts — DOSH 5x5 HIRADC Risk Scoring
export function calculateRiskScore(likelihood: number, severity: number): { score: number; level: RiskLevel } {
  const score = likelihood * severity;
  let level: RiskLevel = "LOW";
  if (score >= 15) level = "HIGH";
  else if (score >= 5) level = "MEDIUM";
  return { score, level };
}`,
    liveDemoId: "she-matrix",
    featured: true
  },
  {
    id: "putri-garmenthub-erp",
    title: "Putri App — GarmentHub Workshop ERP & 4-Pocket Cash Flow",
    subtitle: "Offline-First Garment Manufacturing ERP & Multi-Pocket Financial Ledger PWA (v2.12.11)",
    category: "standalone",
    date: "2025 – 2026",
    role: "Principal Full-Stack Architect & PWA Performance Engineer",
    tools: [
      "React 19",
      "TypeScript 5.7",
      "Firebase Cloud Firestore",
      "Google Genkit AI",
      "Vite 6 & Workbox PWA",
      "Vitest 5 & Playwright"
    ],
    problem: "Garment manufacturing workshops (konveksi) suffer from fragmented multi-color/6-size SPK batch tracking, partial tailor drops with fatal/repair QC defects and running cash advances (Kasbon), commingled cash ledgers leaking owner profits to floor staff, and 6,070ms mobile TBT hangs on weak workshop Wi-Fi.",
    solution: "Built an offline-first React 19 ERP & 4-Pocket Cash Ledger PWA featuring 3-step SPK progression (Potong -> Jahit -> Selesai), cumulative partial drop QC penalty math, 4 segregated cash pockets (Kas Bahan, Kas Operasional, Kas Iklan, Owner-isolated Kas Profit), 3-tier PIN RBAC, and a 0ms synchronous localStorage + 2,500ms race-timeout Firestore sync engine.",
    impact: "Eliminated 6,070ms mobile Total Blocking Time (0ms sync hydration); 100% Kas Profit isolation via 3-tier RBAC; automated QC defect wage deduction & pro-rata catalog restocking.",
    impactMetrics: [
      { label: "Hydration Latency", value: "0ms Sync" },
      { label: "Cash Segregation", value: "4 Pockets" },
      { label: "TBT Eliminated", value: "-6,070ms" }
    ],
    technicalDetails: [
      "Hybrid 0ms Local-First & Cloud Sync Engine (storageAdapter.ts) combining synchronous localStorage hydration with a 2,500ms fetchWithTimeout race wrapper and timestamp conflict resolution (localTime >= serverTime)",
      "Cumulative Multi-Drop SPK Intake & QC Defect Engine (calculateDropWageAndDefects) deducting BS Fatal & BS Repair items and incrementing catalog stock strictly by the pro-rata passed-QC ratio",
      "Atomic 4-Pocket Cash Ledger (recordCashTransaction) executing Firestore writeBatch commits across transaksi_kas, audit_logs, and sistem/wallets while filtering kas_profit at the Context boundary for non-owner roles",
      "Idempotent Historical Excel Migration (FR-4.3) tagging imported records with isHistorical: true to establish opening balances without double-counting live inventory"
    ],
    codeSnippet: `// src/utils/calculations.ts — Multi-Drop SPK QC Defect & Net Wage Engine
export function calculateDropWageAndDefects(
  totalReceived: number, sewingRatePerLusin: number, bsFatalQty = 0, bsRepairQty = 0, defectPenaltyRatePerLusin = 50000
): DropWageResult {
  const passedQC = Math.max(0, Math.max(0, totalReceived) - (Math.max(0, bsFatalQty) + Math.max(0, bsRepairQty)));
  const grossWage = Math.round(passedQC * Math.max(0, sewingRatePerLusin));
  const defectPenalty = Math.round(Math.max(0, bsFatalQty) * Math.max(0, defectPenaltyRatePerLusin));
  return { totalReceived, passedQC, bsFatal: bsFatalQty, bsRepair: bsRepairQty, grossWage, defectPenalty, netWage: Math.max(0, grossWage - defectPenalty) };
}`,
    liveDemoId: "garment-erp",
    featured: true
  },
  {
    id: "jastip-cross-border",
    title: "Jastip Cross-Border Order Management System",
    subtitle: "Mobile-First Live Shopping Triage, Gemini 2.5 Flash Receipt OCR & FX Arbitrage SaaS",
    category: "standalone",
    date: "2025 – 2026",
    role: "Lead Full-Stack Mobile PWA & Multimodal AI Architect",
    tools: [
      "React 19",
      "TypeScript 7",
      "Zustand 5",
      "Tailwind CSS 4",
      "Gemini 2.5 Flash OCR",
      "Firebase v12 Firestore",
      "html5-qrcode & WebRTC",
      "Workbox PWA"
    ],
    problem: "Cross-border personal shoppers operating in Bangkok (THB), Kuala Lumpur (MYR), Singapore (SGD), and Tokyo (JPY) lose profit margins to chaotic mall aisle triage, unlinked foreign-script thermal receipts, untracked FX spread arbitrage, and multi-day domestic hub parcel sorting.",
    solution: "Engineered a 6-module mobile-shell SaaS PWA combining store-scoped live mall triage, Gemini 2.5 Flash structured JSON receipt OCR with currency-aware offline fallbacks, dual-profit accounting (Fee Jastip + FX Spread Arbitrage), real-time SaaS license enforcement with a 14-day read-only grace period, and atomic multi-collection Firestore synchronization.",
    impact: "Instantaneous 4-currency receipt OCR & FX arbitrage ledger; 5 concurrent multi-tenant Firestore listeners via Zustand 5; zero data lockouts via 14-day SLA read-only grace period.",
    impactMetrics: [
      { label: "FX Currencies", value: "THB/MYR/SGD/JPY" },
      { label: "Receipt OCR", value: "Gemini 2.5" },
      { label: "SLA Grace", value: "14 Days" }
    ],
    technicalDetails: [
      "Structured Multimodal Receipt OCR (src/services/gemini.ts) using gemini-2.5-flash with strict Type.OBJECT responseSchema to extract store, receiptNo, totalAmount, and vatAmount, backed by zero-downtime currency fallbacks",
      "Real-Time B2B SaaS Licensing Engine (useLicense.ts & LicenseGate.tsx) enforcing active, 14-day read-only grace_period (assertNotReadOnly), and feature-gated add-ons (aiReceiptOcr, waAutoBlast)",
      "Multi-Tenant Real-Time Sync & Atomic Cascade Delete (FirestoreSyncManager.tsx & deleteTripWithCascade) managing 5 collections (/trips, /orders, /customers, /shipments, /expenses) with single-batch cleanup and idempotent pilot seeding",
      "One-handed Live Mall Triage deck (BelanjaView.tsx) with dynamic store pill tabs, 4-state status filters, HTML5 barcode scanning, and 1-tap WhatsApp substitution auto-drafting"
    ],
    codeSnippet: `// src/services/firestore.ts — Atomic Multi-Collection Cascade Trip Deletion
export const deleteTripWithCascade = async (tripId: string) => {
  const batch = writeBatch(db);
  batch.delete(doc(db, 'trips', tripId));
  await Promise.all(['orders', 'customers', 'shipments', 'expenses'].map(async (collName) => {
    const snap = await getDocs(query(collection(db, collName), where('tripId', '==', tripId)));
    snap.forEach((d) => batch.delete(d.ref));
  }));
  await batch.commit();
};`,
    featured: true
  },
  {
    id: "dlab-night-match",
    title: "DLAB Night Match — Haute Parfumerie & Nocturnal Extraits",
    subtitle: "93-SKU Luxury Headless Storefront, 10-Second Olfactory Diagnostic & Cloud Admin Suite",
    category: "standalone",
    date: "2026",
    role: "Principal Frontend Performance & Cloud Security Architect",
    tools: [
      "React 19",
      "TypeScript 7",
      "Vite 8",
      "Tailwind CSS 4",
      "Firebase v13 Firestore & Auth",
      "Google Gen AI SDK",
      "Node Native Test Runner"
    ],
    problem: "Artisanal high-concentration perfumery across 93 specialized SKUs suffers from digital sensory decision paralysis, multi-channel cross-border checkout friction (WhatsApp concierge, Grab Express, Shopee, Lazada, TikTok across USD/EUR/GBP/JPY), and main-thread jank from 6 concurrent real-time Firestore listeners.",
    solution: "Built an obsidian-and-gold headless luxury PWA featuring 'The Elimination Game' 10-second direct olfactory assessment, a 4-step algorithmic scent affinity engine, NUL-delimited pre-computed search indexing with React 19 useDeferredValue, idle-scheduled localStorage caching, and 398 lines of PII-isolating Firestore security rules.",
    impact: "Zero-jank 60fps search across 93 SKUs; >=90% in-stock olfactory match confidence in 10 seconds; 100% patron PII isolation via public-create / admin-read Firestore rules.",
    impactMetrics: [
      { label: "Verified Catalog", value: "93 SKUs" },
      { label: "Scent Triage", value: "10 Seconds" },
      { label: "Security Rules", value: "398 Lines" }
    ],
    technicalDetails: [
      "DeferredOverlay Mounting (useMountOnFirstOpen + scheduleIdle) and Reference-Preserving Snapshot Diffing (keepIfUnchanged + useLocalStorageCache) eliminating redundant re-renders and main-thread JSON serialization",
      "NUL-Delimited Pre-Computed Search Index ('\\u0000') paired with React 19 useDeferredValue(searchQuery) preventing cross-field false-positive matches across 10+ fragrance note attributes",
      "Client-to-Firestore Defensive Sanitizers (sanitizeProductPayload, sanitizeOrder, sanitizePromoCode) guaranteeing 100% conformance with 398 lines of strict firestore.rules",
      "Deterministic In-Stock Scent Matching (direct10SecondAssessment) and Multi-Currency Cart Engine supporting +$20 3-character gold-leaf monogramming, complimentary 2ml vials, and dynamic free shipping"
    ],
    codeSnippet: `// src/App.tsx — NUL-Delimited Pre-Computed Search Index + Concurrent Deferral
const catalogIndex = useMemo(() => products.map((p) => ({
  product: p,
  category: getProductCatalogCategory(p),
  haystack: [p.name, p.shortCode, p.code, p.description, p.intensity, p.experience, ...p.notes.top, ...p.notes.heart, ...p.notes.base]
    .join('\\u0000').toLowerCase()
})), [products]);
const deferredSearchQuery = useDeferredValue(searchQuery);`,
    featured: true
  },
  {
    id: "saltdistribute-b2b-logistics",
    title: "SaltDistribute — B2B Wholesale Salt & GNSS Logistics Platform",
    subtitle: "Expo SDK 54 Android & PWA Wholesale ERP, 24h Lazy Stock Rollback & Live Haversine Radar",
    category: "core",
    date: "2025 – 2026",
    role: "Lead Cross-Platform Mobile & Real-Time Logistics Architect",
    tools: [
      "React 19 & React Native 0.81",
      "Expo SDK 54 & Expo Router v6",
      "TypeScript 5.9",
      "Cloud Firestore & Storage",
      "Leaflet.js + CARTO/Esri Radar",
      "Screen WakeLock & Workbox"
    ],
    problem: "Regional B2B wholesale salt distribution (NaCl 99.2% ISO/Halal) in Medan Belawan suffered from phantom stock lockups due to unpaid reservations, high-friction guest ordering, blind COD driver rendezvous in industrial zones, and dual-codebase maintenance across Android and Web.",
    solution: "Architected a unified Expo SDK 54 + React Native Web platform featuring zero-polling Firestore synchronization, a zero-cost 24-hour lazy stock expiration engine, automated GDPR/PDPA guest PII redaction upon completion, weighted-average COGS accounting, and a live GNSS Haversine proximity radar with Screen Wake Lock.",
    impact: "Zero cloud cron costs via client-driven 24h lazy stock rollback; automated guest PII scrubbing on order completion; real-time <=150m GNSS Haversine rendezvous telemetry.",
    impactMetrics: [
      { label: "Stock Rollback", value: "24h Lazy TTL" },
      { label: "GNSS Radar", value: "≤150m Lock" },
      { label: "Guest PII", value: "Auto-Purged" }
    ],
    technicalDetails: [
      "Zero-Cost Lazy Expiration Engine (runLazyExpirationCheck) scanning unpaid bookings over 24h on hydration, transitioning status to CANCELLED_UNPAID, and atomically restoring availableQuantityGram",
      "Ephemeral Guest Privacy & Automated PII Redaction (markCompleted) scrubbing buyerName, buyerPhone, deliveryAddress, and paymentProofUrl while preserving grandTotal and quantityGram for COGS accounting",
      "Optimistic Local Creation vs. Firestore Snapshot Reconciliation preserving pending local bookings across asynchronous onSnapshot emissions with recursive undefined sanitization",
      "Seller-Exclusive Live GNSS Proximity Radar (AdminLiveRadarModal) combining spherical Haversine distance classification (AT_MEETING_POINT <=150m, APPROACHING <=800m), CARTO/Esri satellite switching, and Screen Wake Lock"
    ],
    codeSnippet: `// src/services/locationService.ts — Spherical Haversine Distance & Proximity Telemetry
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return Number((R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(2));
}`,
    liveDemoId: "warehouse"
  },
  {
    id: "barbershop-power-code-app",
    title: "Barbershop Management System — Power Platform & React 19 Suite",
    subtitle: "Smart Barber Desk Auto-Shift Queue, 60s Undo Snapshot, Backbar Recipe POS & WhatsApp v20",
    category: "core",
    date: "2025 – 2026",
    role: "Enterprise Power Apps Code SDK & Full-Stack Architect",
    tools: [
      "React 19",
      "@microsoft/power-apps Code SDK",
      "Microsoft Dataverse & OData v4",
      "TanStack Query v5 & Jotai",
      "Zod v4",
      "PnP PowerShell",
      "Meta WhatsApp Graph API v20.0"
    ],
    problem: "High-volume multi-branch barbershops suffer from cascading schedule breakdowns when booked clients arrive past the 10-minute grace period or no-show, front-desk check-in bottlenecks, unrecorded backbar consumable shrinkage (blades, gel, towels), and manual commission/expense reconciliation.",
    solution: "Engineered a hybrid Microsoft Power Apps Code App and multi-branch POS featuring an Automated Grace-Period & Timeline Auto-Shift Queue Engine with a 60-second transactional undo window, a deterministic QR Check-In Kiosk, automated service-recipe backbar deduction, outlier expense detection, and Meta WhatsApp Cloud API v20.0 dispatch.",
    impact: "Instantaneous 10-min grace auto-shift with 60-second transactional undo; 100% automated backbar consumable recipe deduction; 8 relational Dataverse/SharePoint entities provisioned via PnP PowerShell.",
    impactMetrics: [
      { label: "Auto-Shift Undo", value: "60s Window" },
      { label: "Dataverse Entities", value: "8 Tables" },
      { label: "Grace Threshold", value: "10 Mins" }
    ],
    technicalDetails: [
      "Automated Grace-Period & Timeline Auto-Shift Engine (barber-desk.tsx) pushing or pulling subsequent appointments in parallel across Dataverse with a 60-second UndoSnapshot rollback window",
      "Automated Backbar Consumable Recipe Deduction & Multi-Tier Commission Engine (BarbershopContext.tsx) calculating split service vs. retail commissions (Junior, Senior, Master) and decrementing recipe consumables per haircut",
      "Hybrid Dataverse / In-Memory OData v4 Data Layer combining @microsoft/power-apps retrieveMultipleRecordsAsync, TanStack Query v5 hooks, odata-v4-inmemory CI fallback, and strict Zod v4 schemas",
      "Idempotent PnP PowerShell Relational Provisioning (provision-lists.ps1) wiring SharePoint Lookup columns and Meta WhatsApp Graph API v20.0 E.164 notifications"
    ],
    codeSnippet: `// src/pages/barber-desk.tsx — Transactional Queue Auto-Shift with 60-Second Undo Snapshot
async function updateTimes(items: QueueItem[], minutes: number, direction: 'later' | 'earlier', label: string) {
  const changes = items.map((item) => ({ id: item.id, tanggalWaktuJanji: item.tanggalWaktuJanji }));
  await Promise.all(items.map((item) => updateBooking.mutateAsync({
    id: item.id,
    changedFields: { tanggalWaktuJanji: addMinutes(new Date(item.tanggalWaktuJanji), direction === 'later' ? minutes : -minutes).toISOString() }
  })));
  setUndoSnapshot({ expiresAt: Date.now() + 60_000, changes, label });
}`,
    liveDemoId: "erp"
  },
  {
    id: "lewi-house-syariah-pms",
    title: "Lewi House Syariah — Hybrid Guesthouse & Kosan PMS",
    subtitle: "4-Floor 17-Room Hospitality PMS, Multi-OTA Deep-Link Engine, FastAPI + Firestore RBAC",
    category: "standalone",
    date: "2025 – 2026",
    role: "Full-Stack Hospitality Systems & Security Architect",
    tools: [
      "React 19 & TypeScript 5.8",
      "Python FastAPI & Motor",
      "Cloud Firestore & MongoDB Atlas",
      "Firebase Custom Claims RBAC",
      "Midtrans Snap & PyWebPush",
      "Recharts & Tailwind CSS 4"
    ],
    problem: "Operating a 4-floor, 17-room hybrid property simultaneously as a daily Syariah Guesthouse across 5 OTAs (Agoda, Traveloka, Booking.com, Tiket.com, Trip.com) and a monthly boarding house (Kosan) caused channel inventory collisions, pre-check-in Syariah policy misunderstandings, forgotten resident credentials, and quadratic Firestore chat read costs.",
    solution: "Architected a dual-ecosystem suite combining a public Guesthouse SPA with a Syariah-gated Multi-OTA Deep-Link Booking Router and a full-stack Property Management System (FastAPI + MongoDB + Cloud Firestore) featuring atomic move-in/move-out writeBatches, 4-stage multi-identifier auth with 5-attempt lockout, and cursor-paginated multi-admin chat.",
    impact: "Atomic room/resident consistency across 17 units & 4 floors; 0 extra Firestore RBAC read cost via Custom Claims; bounded 30-message chat pagination with multi-admin collision alerts.",
    impactMetrics: [
      { label: "Property Grid", value: "17 Rooms / 4F" },
      { label: "Auth Lockout", value: "5 Attempts" },
      { label: "RBAC Extra Reads", value: "0 Reads" }
    ],
    technicalDetails: [
      "4-Stage Multi-Identifier Authentication Resolver (backend/server.py) matching email, case-insensitive username, normalized phone, or active room unit (e.g. 'K-204') guarded by a 5-attempt, 15-minute brute-force lockout",
      "Atomic Room Assignment & Move-Out Transactions (propertyTransactions.js) executing indivisible Firestore writeBatch mutations across /residents and /rooms",
      "Cost-Optimized Real-Time Chat (useChatMessages.js) bounded to limitToLast(30) with endBefore cursor pagination, 4s typing TTL, internal admin note filtering, and multi-admin presence collision detection",
      "Zero-Extra-Read Enterprise RBAC (firestore.rules) verifying request.auth.token.role custom claims and blocking role/privilege escalation via affectedKeys() diff guards"
    ],
    codeSnippet: `// firestore.rules — Anti-Privilege Escalation & Zero-Extra-Read Custom Claim RBAC
match /users/{userId} {
  allow read: if isSelf(userId) || isOwnerOrAdmin();
  allow update: if isOwnerOrAdmin() || (
    isSelf(userId) &&
    !request.resource.data.diff(resource.data).affectedKeys().hasAny(['role', 'admin', 'id'])
  );
}`
  },
  {
    id: "warung-dewasa-pwa",
    title: "Warung Dewasa — Headless E-Commerce PWA & Direct COD Engine",
    subtitle: "167-SKU Privacy-First Storefront, OpenStreetMap Nominatim COD & Idle-Deferred WebGL",
    category: "standalone",
    date: "2025 – 2026",
    role: "Lead Frontend Performance & Headless Commerce Architect",
    tools: [
      "React 18.3 & TypeScript 5.7",
      "Three.js & GSAP ScrollTrigger",
      "Supabase PostgreSQL",
      "OpenStreetMap Nominatim API",
      "4-Tier Service Worker v2.0",
      "Vite 6 & Terser"
    ],
    problem: "Selling privacy-sensitive wellness products across 167 SKUs faced marketplace keyword delistings, lack of 45–90 minute discreet local COD in Medan, mobile web-view traps when clicking Shopee/Tokopedia links, and 5,880ms Total Blocking Time (TBT) from synchronous WebGL shader compilation.",
    solution: "Built a dual-channel headless PWA combining direct Medan COD checkout (GPS reverse geocoding + 350ms debounced OpenStreetMap Nominatim search), an 800ms native app URI deep-link resolver (shopee:// / tokopedia://), progressive 16-SKU batch rendering (-85% mount work), and requestIdleCallback-deferred 30fps Three.js crystal rendering.",
    impact: "Eliminated 5,880ms WebGL TBT; reduced initial React mount scripting by 85% across 167 SKUs; 100% offline storefront & Merchant Hub resilience via Supabase + 4-tier Service Worker.",
    impactMetrics: [
      { label: "Verified Catalog", value: "167 SKUs" },
      { label: "Mount Work Drop", value: "-85%" },
      { label: "WebGL TBT Cut", value: "-5,880ms" }
    ],
    technicalDetails: [
      "Idle-Deferred 30fps WebGL & Zero-GSAP Critical Path (OrchestratedWebGLBackground.tsx & HeroMotion.tsx) loading Three.js inside requestIdleCallback after window.load and pausing when document.hidden is true",
      "Progressive Batch Rendering (visibleCount = 16) paired with React useDeferredValue(searchQuery), React.memo product cards, and dedicated Rollup chunks for catalog-data and admin",
      "Cross-Platform Marketplace Deep-Link Resolver (deepLinkResolver.ts) launching native shopee:// and tokopedia:// schemes with an 800ms elapsed-time web fallback",
      "Direct COD Checkout Bottom Sheet (DirectOrderModal.tsx) with Medan district presets, OpenStreetMap Nominatim reverse geocoding, and 4-bucket FIFO Service Worker caching"
    ],
    codeSnippet: `// src/lib/deepLinkResolver.ts — Native App Scheme Launcher with 800ms Web Fallback
const start = Date.now();
if (nativeUrl) window.location.href = nativeUrl;
setTimeout(() => {
  if (Date.now() - start < 1500) {
    window.open(webUrl, '_blank', 'noopener,noreferrer');
  }
}, 800);`
  },
  {
    id: "ats-flow-resume",
    title: "ATS Flow — Deterministic ATS-First Resume Builder",
    subtitle: "Isomorphic TypeScript Compiler (@ats-resume/core), Sandboxed A4 Preview & Puppeteer PDF Service",
    category: "core",
    date: "2025 – 2026",
    role: "Creator & Lead Monorepo Systems Architect",
    tools: [
      "pnpm Workspaces",
      "TypeScript 5.9",
      "React 18 & Vite 6",
      "Tailwind CSS 4 & React Aria",
      "Puppeteer Core & @sparticuz/chromium",
      "Firebase Anonymous Auth & Firestore",
      "Upstash Redis"
    ],
    problem: "Commercial WYSIWYG resume builders scramble ATS text extraction with multi-column/canvas layouts, lock candidate data behind export paywalls, suffer from SPA fallback iframe corruption, and strip trailing commas during live skill array editing.",
    solution: "Architected a pnpm monorepo combining a zero-DOM isomorphic compiler (@ats-resume/core), an 8-tab split-pane visual editor with a 300ms debounced <iframe srcDoc> A4 preview, a Dockerized Express + Puppeteer headless Chromium PDF microservice, opt-in anonymous Firestore cloud sync with public recruiter share links, and idempotent Redis telemetry.",
    impact: "100% deterministic 1:1 A4 semantic HTML-to-PDF compilation across browser, CLI, and container; zero XSS or SPA fallback corruption; privacy-first client-side execution.",
    impactMetrics: [
      { label: "Preview Debounce", value: "300ms" },
      { label: "Reducer Actions", value: "22 Types" },
      { label: "PDF Fidelity", value: "1:1 A4" }
    ],
    technicalDetails: [
      "Isomorphic Template Compiler (packages/core/src/renderer.ts) sanitizing all fields via escapeHtml(), inlining print-safe A4 CSS via regex, and dynamically formatting E.164 contact bars without dangling pipes",
      "Anti-SPA-Fallback Verification & 300ms Debounced Compilation (usePreviewHtml.ts) validating {{NAME}} and {{SKILLS_HTML}} tokens before caching templates in module scope",
      "Controlled SkillItemsInput Buffer (EditorPage.tsx) preserving natural comma-separated typing UX with onBlur reducer commits and external store synchronization",
      "Fault-Tolerant Serverless PDF Rendering (services/pdf/server.js) with guaranteed finally browser.close() teardown and atomic Upstash Redis SET NX EX user deduplication"
    ],
    codeSnippet: `// packages/web/src/hooks/usePreviewHtml.ts — Anti-SPA-Fallback Guard & 300ms Debouncer
async function loadAssets() {
  if (_templateHtml && _css) return;
  const [tpl, css] = await Promise.all([loadText(base("templates/ats.html")), loadText(base("templates/style.css"))]);
  if (!tpl.includes("{{NAME}}") || !tpl.includes("{{SKILLS_HTML}}")) {
    throw new Error("ats.html is not the resume template");
  }
  _templateHtml = tpl; _css = css;
}`
  },
  {
    id: "resumeforge-nextjs",
    title: "ResumeForge — Next.js 14 ATS Tailoring & Scoring Engine",
    subtitle: "4-Phase Tailoring Pipeline (Parse → Weighted Match → Fact-Locked Rewrite → A4 Export)",
    category: "core",
    date: "2025",
    role: "Full-Stack Next.js & NLP Systems Engineer",
    tools: [
      "Next.js 14 App Router",
      "TypeScript 5.5",
      "pdfjs-dist Web Worker",
      "Mammoth DOCX",
      "OpenAI gpt-4o-mini",
      "Zustand & Zod",
      "Supabase SSR",
      "Vitest & Playwright"
    ],
    problem: "Over 75% of enterprise resumes are filtered out by ATS parsers due to exact vs. abbreviated keyword mismatches (K8s vs Kubernetes), unweighted JD section scoring, hostile Unicode glyphs, and unguarded LLM rewrites that alter employer names or dates.",
    solution: "Engineered a 4-phase Next.js 14 pipeline featuring dual-path client/server document ingestion (.pdf via browser pdfjs-dist worker, .docx via server Mammoth), 5-bucket prominence-weighted JD scoring with abbreviation root resolution, fact-locked gpt-4o-mini rewriting with deterministic offline fallback, and a live 3-pane A4 editor.",
    impact: "Zero Node.js PDF worker crashes via isomorphic client extraction; prominence-weighted 40/30/20/10 composite ATS scoring; 100% locked employer/title/date facts during AI rewrites.",
    impactMetrics: [
      { label: "Pipeline Stages", value: "4 Phases" },
      { label: "Fact Lock", value: "100% Locked" },
      { label: "Composite Weights", value: "40/30/20/10" }
    ],
    technicalDetails: [
      "Hybrid Isomorphic Ingestion (app/upload/page.tsx & /api/parse) running pdfjs-dist v4 Web Workers in the browser for PDFs while streaming DOCX/TXT FormData to Mammoth on the server",
      "Prominence-Weighted ATS Scoring Engine (services/matching/index.ts) applying 2x multipliers for required terms, 0.5 weight for abbreviation roots, and a 40% hard-skill / 30% soft-skill / 20% cert / 10% formatting composite formula",
      "Fact-Locked AI Rewriter (services/rewriting/index.ts) locking [title, company, startDate, endDate] in prompts and falling back to deterministic keyword injection (rewriteWithoutLLM) when offline",
      "Interactive Granular Diff Approval Cards (DiffViewer) and 3-pane live editor recalculating ATS match gauges on every keystroke"
    ],
    codeSnippet: `// services/matching/index.ts — Weighted Composite ATS Score Formula
const hardSkillScore = calculateCategoryScore(matched, partial, jd.keywords, 'hard-skill');
const softSkillScore = calculateCategoryScore(matched, partial, jd.keywords, 'soft-skill');
const certScore = calculateCategoryScore(matched, partial, jd.keywords, 'certification');
const formattingScore = calculateFormattingScore(auditFormatting(resume));
const atsScore = Math.round(hardSkillScore * 0.4 + softSkillScore * 0.3 + certScore * 0.2 + formattingScore * 0.1);`
  },
  {
    id: "altech-job-llm-suite",
    title: "ALTech Solution & Custom AI Tools Suite (Job-LLM / ResumeFlow)",
    subtitle: "5-Layer Interactive Mermaid Portal, Multi-Provider Instructor LLM Router, LaTeX & Notion CRM",
    category: "core",
    date: "2025 – 2026",
    role: "Principal AI Systems & Developer Tooling Architect",
    tools: [
      "Python 3.11+ & Poetry",
      "Instructor & Pydantic",
      "OpenAI / Gemini / Ollama",
      "Firecrawl v1/v4 & Jina Reader",
      "Jinja2 LaTeX & pdflatex",
      "scikit-learn & NLTK",
      "Notion SDK",
      "React 19 & HTML5 Canvas"
    ],
    problem: "Scaling technical job applications and architectural showcases requires bridging interactive 5-layer system diagrams, anti-bot JS job scraping across breaking Firecrawl SDK versions, schema-guaranteed LLM outputs across OpenAI/Gemini/Ollama, collision-free Jinja2 LaTeX compilation, and Notion API's 2,000-character block limit.",
    solution: "Built a 3-repository AI & Developer Tools suite combining the ALTech Solution interactive 5-layer Mermaid SVG portal, the Job-LLM (ResumeFlow) multi-provider Instructor + tenacity pipeline, a dual-tier Firecrawl/Jina scraper, custom \\BLOCK/\\VAR Jinja2 LaTeX compiler with 15-character recursive escaping, TF-IDF/Jaccard similarity analytics, and a 1,900-char chunked Notion CRM sync engine.",
    impact: "Guaranteed Pydantic JSON schema adherence across 3 LLM providers; 0 pdflatex special-character crashes; automated 3-database relational Notion CRM provisioning.",
    impactMetrics: [
      { label: "LLM Providers", value: "OpenAI/Gemini/Ollama" },
      { label: "LaTeX Escaper", value: "15 Control Chars" },
      { label: "Notion Chunker", value: "1,900 Chars" }
    ],
    technicalDetails: [
      "Multi-Provider Instructor LLM Router (zlm/utils/llm_models.py) wrapping OpenAI and Gemini (Mode.GEMINI_JSON) with max_retries=3 and tenacity exponential backoff, plus local Ollama JSON model validation",
      "Dual-Strategy Web Scraper (zlm/utils/scraper.py) with runtime SDK introspection supporting both firecrawl-py >=4 (V1FirecrawlApp) and <4, with automatic httpx fallback to Jina Reader (https://r.jina.ai/)",
      "Collision-Free Jinja2 LaTeX Compiler (zlm/utils/latex_ops.py) using custom \\BLOCK{...} and \\VAR{...} delimiters and recursive 15-character LaTeX escaping",
      "Fail-Soft Notion Workspace Sync (zlm/utils/notion_ops.py) provisioning 3 linked databases (Jobs, Resumes, Applications) and slicing rich_text blocks at 1,900-character boundaries"
    ],
    codeSnippet: `# zlm/utils/latex_ops.py — Custom-Delimiter Jinja2 LaTeX Environment
latex_jinja_env = jinja2.Environment(
    block_start_string=r"\\BLOCK{", block_end_string="}",
    variable_start_string=r"\\VAR{", variable_end_string="}",
    comment_start_string=r"\\#{", comment_end_string="}",
    line_statement_prefix="%-", line_comment_prefix="%#",
    trim_blocks=True, autoescape=False, loader=jinja2.FileSystemLoader(templates_path),
)
escaped_json_resume = escape_for_latex(json_resume)`
  },
  {
    id: "altech-stitch-mcp",
    title: "ALTech Swiss Editorial & Emerald Portfolio System (Google Stitch MCP)",
    subtitle: "Programmatic Stitch MCP Design System, 15-Dossier Compiler & Mermaid Audit Reader",
    category: "standalone",
    date: "2026",
    role: "Principal UI/UX Systems Architect & MCP Automation Engineer",
    tools: [
      "Google Stitch MCP",
      "GEMINI_3_8_FLASH",
      "Tailwind CSS & Material 3 Tokens",
      "Mermaid.js v10",
      "marked.js",
      "Space Grotesk & JetBrains Mono",
      "Node.js Compiler (ESM)"
    ],
    problem: "Traditional architect portfolios either rely on generic AI-slop templates or static text lists that fail to prove production engineering depth across 15 audited enterprise systems (365+ migrated Domino forms, RM 4.2M/yr licensing avoidance, 878+ Power Apps screens).",
    solution: "Integrated the Google Stitch MCP Server (stitch.googleapis.com/mcp) directly into an automated Node.js pipeline to synthesize the ALTech Swiss Editorial & Emerald Design System, extract 2560×8492 Hi-DPI assets, and compile 15 Markdown + Mermaid.js architectural dossiers into a zero-latency interactive audit reader.",
    impact: "15 audited production case studies compiled into a single zero-build interactive reader with live Mermaid vector topologies and deterministic sandbox kernels.",
    impactMetrics: [
      { label: "Audited Systems", value: "15 Dossiers" },
      { label: "Cost Recovery", value: "RM 4.2M/yr" },
      { label: "M3 Tokens", value: "50+ Surfaces" }
    ],
    technicalDetails: [
      "Programmatic Stitch MCP Orchestration (run_stitch_portfolio.mjs & download_stitch_assets.mjs) chaining create_project, create_design_system, generate_screen_from_text, and base64 Hi-DPI PNG extraction",
      "Interactive 15-Project Showcase Compiler (build_interactive_portfolio.mjs) unifying static Stitch HTML layouts with dynamic marked.js Markdown parsing and on-demand mermaid.run() vector topology rendering",
      "Split-Pane Case Study & Code Audit Reader featuring a 4-KPI impact strip, zoomable full-page UI screenshot lightbox, and sticky 15-project registry switcher",
      "Embedded deterministic client sandbox kernels for the Putri GarmentHub 4-Pocket Cash Sharding Engine and IOI DOSH 5×5 Hazard Risk Matrix"
    ],
    codeSnippet: `// build_interactive_portfolio.mjs — Dynamic Mermaid v10 Vector Topology Re-Hydration
const mermaidBlocks = container.querySelectorAll('code.language-mermaid');
mermaidBlocks.forEach((block, idx) => {
  const pre = block.parentElement;
  const div = document.createElement('div');
  div.className = 'mermaid my-6 bg-[#0c0e0f] p-4 rounded border border-[#222628]';
  div.textContent = block.textContent;
  pre.replaceWith(div);
});
await mermaid.run({ querySelector: '.mermaid' });`,
    liveDemoId: "garment-erp"
  },
  {
    id: "fandy-geophysical-portfolio",
    title: "Fandy Interactive Geophysical Engineer & Data Analyst Lab",
    subtitle: "5-Simulator Subsurface Geophysics Lab (Wadati QC, 3D JHD Relocation, Res2Dinv) & Bilingual CMS",
    category: "standalone",
    date: "2025 – 2026",
    role: "Lead Scientific Web Application & Simulation Architect",
    repoUrl: "https://github.com/aliakhmadfauzie/fandy-resume-portfolio",
    tools: [
      "React 19",
      "TypeScript 5.8",
      "Tailwind CSS 4",
      "Motion 12",
      "Firebase Cloud Firestore",
      "SVG Scientific Computing",
      "Bilingual i18n (ID/EN)"
    ],
    problem: "Subsurface exploration and seismic data deliverables live inside proprietary desktop toolchains (SeisGram2K70, VELEST/JHD, MATLAB, Res2Dinv, Leapfrog Geo) that technical interviewers cannot open in a browser, hiding the mathematical rigor of >1,000 microearthquake arrival pickings and 3D fault-plane relocations.",
    solution: "Engineered a bilingual (ID/EN), dual-theme scientific web platform featuring 5 real-time browser mathematical simulators (Least-Squares Wadati Vp/Vs QC, 3D JHD Hypocenter Relocation with SVG fault migration vectors, Res2Dinv 2D resistivity inversion, Spatial GIS catalog explorer, Field FinOps calculator), a Ctrl+K quick-jump shell, a live localStorage Admin CMS with JSON backup, and a Firestore recruitment pipeline.",
    impact: "Real-time 60fps ordinary least-squares Wadati regression & 89.5% JHD RMS decay visualization; 1,000+ microearthquake dataset modeled; zero-backend bilingual CMS with JSON portability.",
    impactMetrics: [
      { label: "Seismic Events", value: "1,000+ Picks" },
      { label: "Physics Labs", value: "5 Simulators" },
      { label: "JHD RMS Drop", value: "-89.5%" }
    ],
    technicalDetails: [
      "Real-Time Ordinary Least-Squares Wadati Regression (LiveDemosView.tsx) computing Ts - Tp residuals, flagging outliers against an interactive threshold (0.05s–0.40s), and deriving live Vp/Vs = slope + 1.0 and R²",
      "Iterative 3D JHD Hypocenter Convergence Model interpolating Geiger initial coordinates toward relocated fault-plane solutions (Strike N135°E, Dip 65° SW) with exponential RMS decay (380ms -> 42ms)",
      "Res2Dinv 2D Geoelectrical Inversion Simulator computing geometric factor K, damping factor lambda, and pseudosection resistivity contours across Wenner, Schlumberger, and Dipole-Dipole arrays",
      "Zero-Backend Live Admin CMS (AdminDashboardView.tsx) with sessionStorage auth gate, one-click timestamped JSON dataset export/restore, and schema-validated Firestore /contact_messages rules"
    ],
    codeSnippet: `// LiveDemosView.tsx — Closed-Form Least-Squares Wadati Vp/Vs Regression
validPoints.forEach(p => {
  sumX += p.Tp; sumY += p.deltaT; sumXY += p.Tp * p.deltaT; sumX2 += p.Tp * p.Tp;
});
const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
const vpvs = Math.max(1.5, Math.min(2.2, slope + 1.0));`
  },
  {
    id: "al-resume-interview-prep",
    title: "Al Resume & Executive Interview Prep Studio",
    subtitle: "Dual-Surface Executive Command Hub, Multi-Persona Editorial Switcher & 'Ask Ali' Router",
    category: "standalone",
    date: "2025 – 2026",
    role: "Principal Solution Architect & Frontend Systems Engineer",
    repoUrl: "https://github.com/aliakhmadfauzie/al-resume",
    tools: [
      "React 19",
      "TypeScript 5.8",
      "Tailwind CSS 4",
      "Motion 12",
      "HTML5 Canvas MatrixRain",
      "Vercel & Firebase Hosting",
      "RFC-2426 vCard & ATS Serializer"
    ],
    problem: "Hybrid technology leaders bridging Enterprise Solution Architecture (365+ Domino DBs, 60+ Dataverse tables, 40+ C# plugins) and Global Operations Management (34-person multilingual BPO across 7 APAC markets at >98% SLA) face persona context overload, NDA barriers, and passive interview formats.",
    solution: "Built a dual-surface React 19 ecosystem pairing the Dark-Mode Enterprise Command & 7-Step Guided Hiring Manager Walkthrough (with the hallucination-free 'Ask Ali' keyword-intent router) and the Editorial Multi-Persona Studio (Full | Architecture | Operations mode switcher, 12-tile SVG Impact Dashboard, 30fps CPU-safe MatrixRain canvas, and 3-in-1 PDF / ATS Plain-Text / .vcf generator).",
    impact: "9 below-the-fold React.lazy chunks for instant LCP; 100% factual grounding via deterministic 'Ask Ali' intent routing with cross-mode deep-linking; instant persona-tailored ATS & vCard exports.",
    impactMetrics: [
      { label: "Persona Modes", value: "Full/Arch/Ops" },
      { label: "Lazy Chunks", value: "9 Split Views" },
      { label: "Export Formats", value: "PDF/ATS/.vcf" }
    ],
    technicalDetails: [
      "Above-the-Fold LCP Optimization (src/App.tsx) code-splitting 9 below-the-fold views and modals via React.lazy() with named-export promise adapters and Suspense boundaries",
      "CPU-Safe, WCAG-Compliant MatrixRain Canvas (MatrixRain.tsx) throttled to 30fps, rendering a single static frame under prefers-reduced-motion: reduce, and cancelling RAF when document.hidden is true",
      "Hallucination-Free 'Ask Ali' Assistant (InterviewModeView.tsx) matching normalized queries against verified ASK_ALI_PROMPTS and deep-linking across both Guided step mode and Explore scroll mode",
      "Persona-Aware 3-in-1 Resume Exporter (ResumeModal.tsx) dynamically serializing the active track ('architecture' vs 'operations') into print A4, clean ASCII ATS plain-text, and RFC-2426 vCard 3.0 (.vcf) blobs"
    ],
    codeSnippet: `// ResumeModal.tsx — Persona-Scoped RFC-2426 vCard 3.0 (.vcf) Blob Serializer
const isArch = selectedFocus === 'architecture' || selectedFocus === 'architect';
const vCardData = \`BEGIN:VCARD\\nVERSION:3.0\\nFN:Ali Akhmad Fauzie\\nTITLE:\${isArch ? personalInfo.titles.architect : personalInfo.titles.operations}\\nTEL;TYPE=CELL,VOICE:\${personalInfo.phoneMY}\\nEMAIL:\${personalInfo.email}\\nEND:VCARD\`;
const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });`
  },
  {
    id: "pulsetrack",
    title: "PulseTrack",
    subtitle: "Real-time Operations & Agent Status Automation",
    category: "core",
    date: "Oct 2024",
    role: "Power Platform solution delivery & automation design",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Microsoft Forms"],
    problem: "Agent status was captured via WhatsApp, requiring heavy manual roll-up for team leads, leading to delays and inaccuracies.",
    solution: "Implemented a structured status capture system on SharePoint with an automated reporting workflow, providing real-time visibility.",
    impact: "90% less manual reporting; 98% status accuracy; 60–80% reduction in team-lead workload.",
    impactMetrics: [
      { label: "Manual Reporting", value: "-90%" },
      { label: "Status Accuracy", value: "98%" },
      { label: "Team Lead Workload", value: "-70%" }
    ],
    technicalDetails: [
      "SharePoint Online schema optimized for concurrent agent logging",
      "Automated Power Automate schedule & webhook trigger for instantaneous roll-up",
      "Adaptive Cards delivered directly to Microsoft Teams leadership channel",
      "Role-based access ensuring data privacy across regional squads"
    ],
    liveDemoId: "it-service",
    featured: true
  },
  {
    id: "smartflow",
    title: "SmartFlow",
    subtitle: "End-to-End Enterprise Request & Approval Orchestrator",
    category: "core",
    date: "Nov 2024",
    role: "End-to-end request/approval system design",
    tools: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Teams", "Outlook"],
    problem: "Requests and approvals were routed via email and spreadsheets, resulting in delayed visibility and poor tracking.",
    solution: "Developed an integrated request + approval flow with a Power BI dashboard for live tracking, centralizing all requests.",
    impact: "90% data accuracy; 80% less manual work; 100% real-time tracking.",
    impactMetrics: [
      { label: "Data Accuracy", value: "90%" },
      { label: "Manual Work", value: "-80%" },
      { label: "Real-Time Tracking", value: "100%" }
    ],
    technicalDetails: [
      "Responsive Power Apps Canvas front-end with dynamic form validations",
      "Multi-stage sequential & parallel Power Automate approval chains with timeout escalations",
      "Interactive Power BI telemetry embedded inside Microsoft Teams",
      "Automatic Outlook actionable messages allowing one-click approvals from inbox"
    ],
    liveDemoId: "finops",
    featured: true
  },
  {
    id: "cs-resolver",
    title: "Customer Service Resolver",
    subtitle: "AI-Assisted Classification & Procedure Recommendation",
    category: "core",
    date: "Nov 2024",
    role: "AI-assisted classification & procedure recommendation",
    tools: ["AI Builder", "Lark Automation", "NLP Classification"],
    problem: "Agents manually searched through complex SOPs to classify and route customer issues, leading to inconsistent handling and high resolution times.",
    solution: "Deployed an AI model to automatically classify the issue and recommend the appropriate SOP procedure with direct links for the agent.",
    impact: "30–50% faster resolution; 40–60% better classification accuracy; 50–80% less handling time.",
    impactMetrics: [
      { label: "Resolution Speed", value: "+40%" },
      { label: "Classification Accuracy", value: "+50%" },
      { label: "Handling Time", value: "-65%" }
    ],
    technicalDetails: [
      "Custom AI Builder text classification model trained on 120+ standard operating procedures",
      "Automated extraction of key sentiment and entity metadata from ticket payloads",
      "Dynamic hyperlink generation routing agents directly to corresponding SOP chapters",
      "Confidence score thresholding triggering manual supervisor fallback when below 85%"
    ],
    liveDemoId: "cs-resolver",
    featured: true
  },
  {
    id: "document-finder",
    title: "Document Finder",
    subtitle: "Intelligent Semantic Search & Recommendation Engine",
    category: "core",
    date: "Nov 2024",
    role: "AI search & ranking architecture",
    tools: ["AI Builder", "Power Apps", "SharePoint", "Dataverse"],
    problem: "Staff searched for documents by memory and keyword browsing, which was inefficient and frequently missed relevant compliance files.",
    solution: "Implemented a ranked keyword search with built-in recommendation logic, surfacing the most relevant documents first.",
    impact: "70–90% faster search; 99% recommendation accuracy.",
    impactMetrics: [
      { label: "Search Speed", value: "+80%" },
      { label: "Recommendation Accuracy", value: "99%" },
      { label: "Missing Files", value: "0%" }
    ],
    technicalDetails: [
      "Vector/keyword weighted scoring algorithm for enterprise documentation",
      "Dynamic document tagging with taxonomy extraction upon upload",
      "Security trimming ensuring users only discover files permitted by their Azure AD group",
      "Instant preview viewer with highlighted keyword occurrences"
    ],
    liveDemoId: "erp"
  },
  {
    id: "tasek-cement-rebate",
    title: "Tasek Cement Rebate Approval System",
    subtitle: "Formula-Driven High-Volume Financial Approval Engine",
    category: "standalone",
    date: "Nov–Dec 2023",
    role: "Rebate calculation + multi-level approval workflow",
    tools: ["Power Apps", "Power Automate", "Powerbiz", "Dataverse"],
    problem: "Rebate approvals took 2–3 days via email and manual checks, creating cashflow friction and human error.",
    solution: "Reduced to a ~15-minute workflow with a multi-level Sales → Group COO approval path. Implemented a seven-component rebate formula with a cap of 0.20 RM/metric tonne. Synchronized with purchase orders without creating POs inside the app.",
    impact: "Major cycle-time reduction from 3 days to 15 minutes (99% faster); zero audit non-compliances.",
    impactMetrics: [
      { label: "Cycle Time", value: "15 min" },
      { label: "Speed Gain", value: "99% Faster" },
      { label: "Formula Cap", value: "0.20 RM/t" }
    ],
    technicalDetails: [
      "7-component dynamic calculation engine: Base Rate + Volume Tier + Distance + Special Terms + Seasonal Adj + Tax - Credit Deductions",
      "Hard validation enforcing statutory RM 0.20/metric tonne ceiling",
      "Integration with ERP purchase order ledgers for balance validation",
      "Delegated signature authorization matrix matching corporate governance"
    ],
    liveDemoId: "rebate",
    featured: true
  },
  {
    id: "staff-requisition",
    title: "Staff Requisition Form & Vacancy Control",
    subtitle: "Four-Tier Headcount Governance & Interview Enforcement",
    category: "standalone",
    date: "Nov–Dec 2023",
    role: "Vacancy control & interview logging enforcement",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Vacancies could be advertised without a completed four-tier requisition and interview log, causing unauthorized budget commitments.",
    solution: "Enforced that no vacancy is advertised without an approved requisition. Added an optional CFO gate for new headcount and a mandatory five-working-day internal advertisement lockout.",
    impact: "Stronger hiring governance, 100% compliant headcount budget, and zero unapproved postings.",
    impactMetrics: [
      { label: "Hiring Compliance", value: "100%" },
      { label: "Internal Lockout", value: "5 Days" },
      { label: "Audit Readiness", value: "100%" }
    ],
    technicalDetails: [
      "Strict state-machine workflow: Draft → Line Manager → HR Head → CFO (if new headcount) → Published",
      "Automated 5-working-day lock preventing external posting before internal employee visibility",
      "Interview candidate evaluation scorecard with digital signatures"
    ],
    liveDemoId: "erp"
  },
  {
    id: "ask-lark",
    title: "Ask Lark Knowledge Base",
    subtitle: "Query Tracking & De-Duplication System",
    category: "standalone",
    date: "Nov 2024",
    role: "Knowledge query tracking & de-duplication",
    tools: ["Lark Automation", "Lark Base", "AI Webhooks"],
    problem: "Repeated questions across operations teams and unstructured QA answers cluttered operational channels.",
    solution: "Implemented an automated query tracking and de-duplication system to manage enterprise FAQs with automatic answer matching.",
    impact: "50–70% faster responses; 40–60% fewer repeat inquiries.",
    impactMetrics: [
      { label: "Response Speed", value: "+60%" },
      { label: "Repeat Questions", value: "-50%" },
      { label: "Knowledge Base Size", value: "500+ FAQs" }
    ],
    technicalDetails: [
      "Similarity matching against indexed questions in Lark Base",
      "Auto-tagging by department and severity",
      "Analytics dashboard on unresolved query trends"
    ]
  },
  {
    id: "it-support-service-request",
    title: "IT Support & Service Request Framework",
    subtitle: "Enterprise ITSM Ticket Lifecycle & Automated SLAs",
    category: "security",
    date: "2025",
    role: "Service request lifecycle & routing framework",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
    problem: "Lotus Notes service tickets had hidden site routing and no structured requestor close-out, leading to poor closure rates and ticket hoarding.",
    solution: "Designed a Submit → Admin Triage → Assign → Resolve → Requestor Accept & Rate → Close lifecycle. Added a 72-hour accept window and 30-day automatic close.",
    impact: "56 mapped columns; 5 flows; 5 screens; 95% on-time resolution; automated audit trail.",
    impactMetrics: [
      { label: "Mapped Columns", value: "56" },
      { label: "Accept Window", value: "72 Hours" },
      { label: "Auto Close", value: "30 Days" }
    ],
    technicalDetails: [
      "5 custom Power Apps screens covering Ticket Entry, Dispatcher Triage, Tech Workbench, Requester Review, and Metrics",
      "Automated timer flow monitoring 72-hour customer satisfaction rating countdown",
      "Escalation notification triggered at 80% SLA elapsed time"
    ],
    liveDemoId: "it-service",
    featured: true
  },
  {
    id: "infosec-doc-register",
    title: "Information Security Group Documentation Register",
    subtitle: "Publication Control & Reader Permissions Governance",
    category: "security",
    date: "2025",
    role: "Publication control & reader permissions governance",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Document metadata and reader permissions were maintained with weak publication control and zero audit history on Lotus Notes.",
    solution: "Implemented an Author Submit → Owner Review → Publish with Reader Permissions workflow.",
    impact: "100% controlled, auditable publishing across all information security policies.",
    impactMetrics: [
      { label: "Security Governance", value: "100%" },
      { label: "Audit Compliance", value: "ISO 27001" },
      { label: "Permission Drifts", value: "0" }
    ],
    technicalDetails: [
      "Dynamic SharePoint item-level permission inheritance breaking on publication",
      "Automated reader group assignment based on classification tier (Public, Internal, Confidential, Restricted)",
      "Periodic access certification reminder flows"
    ]
  },
  {
    id: "it-server-checklist",
    title: "IT Server Health & Audit Checklist",
    subtitle: "Standardized Weekly Server Audit & Hardware Diagnostics",
    category: "security",
    date: "2025",
    role: "Standard weekly audit checklist + review workflow",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Weekly server health notes were captured outside a numbered audit register, resulting in overlooked disk space warnings and unpatched servers.",
    solution: "Standardized a weekly audit with numbering: `Server Checklist-[year]-[week]-[sequence]`. Captures processor, memory, drives, and OS patch updates. Follows a Technician Submit → Systems Manager Review workflow.",
    impact: "5 screens; 100% weekly audit adherence; proactive hardware failure prevention.",
    impactMetrics: [
      { label: "Audit Adherence", value: "100%" },
      { label: "Failure Warning", value: "Proactive" },
      { label: "Audit Traceability", value: "Standardized" }
    ],
    technicalDetails: [
      "Auto-numbering formula: Server Checklist-[YYYY]-[WW]-[####]",
      "Dynamic thresholds highlighting memory/disk capacity over 85% in red",
      "Manager sign-off notification with one-click approval summary"
    ],
    liveDemoId: "maintenance"
  }
];

export const MIGRATION_OVERVIEW = {
  title: "IOI Oleo Lotus Domino → Microsoft 365 Enterprise Migration",
  period: "2023 – 2025",
  role: "Lead Solution Architect & Power Apps Rebuild Slice Delivery",
  scope: "Architected the enterprise migration of 365+ Lotus Domino applications across 28+ business units to Microsoft 365, SharePoint Online, OneDrive, Teams, and Dataverse.",
  sliceDelivery: "Spearheaded the rebuild and deployment of 16-23 production Canvas & Model-Driven Power Apps, 878 Canvas screens, and 400+ custom React/TypeScript components as a live operational slice.",
  complexityTiers: {
    high: 24,
    medium: 28,
    low: 12
  },
  evidence: "Documented the Quality / Warehouse / Master Data slice by analyzing 54 system reports covering 6 critical domains.",
  consolidationStats: {
    uniqueGroups: 314,
    sharedCrossDepartment: 7,
    sameDepartmentVariants: 8,
    routingDifferencesResolved: 8
  },
  highlightedConsolidations: [
    {
      name: "Customer Requirement Review & EnMS",
      type: "Cross-Department & Multi-Site",
      resolution: "Unified disparate Johor/Penang routing behaviors and QA/Marketing approval paths into single Dataverse-backed architectures."
    },
    {
      name: "Yearly Database Silos (e.g. CCCAR 2026, Sampling)",
      type: "Same-Department Variants",
      resolution: "Merged scattered, year-based Domino databases into continuous, scalable cloud data schemas with automated routing."
    }
  ]
};

export const MIGRATION_SLICES: MigrationSlice[] = [
  {
    id: "slice-a",
    letter: "A",
    title: "Quality Management System & Documentation Control",
    appCount: 23,
    role: "Lifecycle standardization & approval workflow automation",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
    problem: "Drafts, SOPs, work instructions, and test methods were stored across multiple Lotus Notes DBs with inconsistent approvers.",
    solution: "Built a controlled lifecycle: Draft → Submitted → Approved → Briefing/Distribution → Complete. Replaced legacy pending-approval and pending-briefing agents with automated cloud workflows.",
    impact: "Consistent process control, ISO 9001 audit compliance, and significantly reduced administrative overhead.",
    examples: ["SOP Requisition Portal", "Work Instruction Approver", "Laboratory Test Method Registry", "Controlled Copy Distribution Manager"],
    keyHighlights: ["Zero lost revision histories", "Automated distribution briefings with read-acknowledgment", "Multi-stage QA Head sign-off"]
  },
  {
    id: "slice-b",
    letter: "B",
    title: "Quality Event & Corrective Action (CAPA)",
    appCount: 12,
    role: "End-to-end corrective action cycle automation",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Nonconformance, customer complaints, and deviations were scattered across silos, with overdue chasing done via scheduled Notes agents.",
    solution: "Implemented a unified cycle: Identify → Investigate → Propose → Approve → Implement → Verify Effectiveness. Automated overdue reminders replaced multiple chase agents.",
    impact: "Faster closure times, improved cross-department accountability, and zero overdue CAPAs.",
    examples: ["NCR Deviation Tracker", "Customer Complaint Resolution Hub", "CAPA Root Cause Matrix", "Audit Finding Action Register"],
    keyHighlights: ["Automated 5-Why & Fishbone analysis forms", "SLA escalation timers at 7, 14, and 30 days", "Effectiveness verification signoff"]
  },
  {
    id: "slice-c",
    letter: "C",
    title: "Customer & Supply Chain Integration",
    appCount: 5,
    role: "Alignment workflow across functional departments",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Customer specifications, packaging questionnaires, and audit actions lived in disconnected silos across sales, quality, and logistics.",
    solution: "Aligned a review sequence: Production → QC → HOD → Marketing. Integrated customer questionnaires, country master requirements, and audit actions to ensure pre-dispatch readiness.",
    impact: "Reduced rework, eliminated customs holds, and achieved 100% pre-dispatch readiness.",
    examples: ["Customer Spec Matrix", "Country Regulatory Compliance Registry", "Packaging Questionnaire Approval", "Pre-Dispatch Sign-off"],
    keyHighlights: ["Country-specific ingredient rules checking", "Multi-initiator departmental sign-off", "Automated CoA generation"]
  },
  {
    id: "slice-d",
    letter: "D",
    title: "Warehouse & Logistics Operations",
    appCount: 10,
    role: "Connected warehouse data & approval & reminder workflows",
    tools: ["Power Apps", "Power Automate", "SharePoint", "SAP Data Patterns"],
    problem: "Warehouse notices and vendor agreements were handled via separate Lotus Notes forms with scheduled mail agents, resulting in delayed container turnaround.",
    solution: "Connected data across processes, added approval workflows, scheduled centralized reminders, and enabled sharing of pre-loading container inspection photos directly in Power Apps.",
    impact: "Faster processing, fewer missing inspection artifacts, and reduced demurrage fees.",
    examples: ["Pre-Loading Container Inspection", "Vendor Storage Agreement Hub", "Demurrage & Gate Pass Tracker", "Pallet Movement Log"],
    keyHighlights: ["Mobile photo capture of container seals & pallet integrity", "SAP PO synchronizations", "Automated gate pass issuance"]
  },
  {
    id: "slice-e",
    letter: "E",
    title: "Master Data & Reference Governance",
    appCount: 10,
    role: "Validated master data management with expiry/obsolescence controls",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Independent lists caused missed renewals for critical data like filters, calibrated tooling records, and safety data sheets.",
    solution: "Built validated master lists with automated expiry and obsolescence notifications. Integrated GHS Safety Data Sheets with scheduled re-certification alerts.",
    impact: "Higher governance, zero expired SDS sheets on factory floor, and reduced compliance risk.",
    examples: ["GHS Safety Data Sheet (SDS) Library", "Filter & Tooling Calibration Register", "Approved Vendor Master", "Raw Material Catalog"],
    keyHighlights: ["90/60/30-day proactive expiry notifications", "Automated version obsolescence watermarking", "Centralized search"]
  },
  {
    id: "slice-f",
    letter: "F",
    title: "Training & Continuous Improvement (CI)",
    appCount: 4,
    role: "Training staging & attendance follow-up automation",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Training and briefing records had limited attendance follow-up and paper-based records, leaving CI project visibility low.",
    solution: "Created staged review workflows with automated attendance follow-up and quizzes. The CI project register now actively tracks 2,000+ project documents.",
    impact: "Better training completion tracking, 100% briefing audit trail, and centralized CI ROI visibility.",
    examples: ["Competency & Training Tracker", "Continuous Improvement (Kaizen) Register", "Briefing Signoff Hub", "Quiz Assessment App"],
    keyHighlights: ["2,000+ CI project records indexed", "Digital signature attendance log", "Automated retraining triggers"]
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-freelance",
    role: "Enterprise Power Platform Solution Architect / Freelance",
    company: "Independent Consultant",
    location: "Kuala Lumpur, Malaysia / West Java, Indonesia",
    period: "May 2025 – Present",
    isCurrent: true,
    tags: ["Process Optimization", "Six Sigma Green Belt", "AI Management", "Dataverse", "ALM Pipelines"],
    bulletPoints: [
      "Led the enterprise migration of over 365 Lotus Domino and legacy business applications across more than 28 business units to Microsoft 365 and Dataverse, defining the migration strategy, data mapping, and governance for cutover.",
      "Translated executive requirements into scalable Power Platform roadmaps, establishing governance standards and security controls while supporting POCs, proposals, and signed SOWs.",
      "Architected hybrid applications utilizing React 19, TypeScript, Canvas Apps, and Dataverse, ensuring seamless integrations and modernized enterprise solutions.",
      "Strengthened release quality and deployment efficiency through Azure Pipelines, GitHub Actions, and PAC CLI-based ALM practices, facilitating continuous integration and delivery.",
      "Delivered the Isolated Rebate Approval System with Dataverse database isolation and multi-tier role-based security, ensuring compliance with strict financial audit requirements.",
      "Deployed AI Builder solutions for classification and search, improving ticket resolution times by 30-50%."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLvU986Laj-OuiWRRfw79rRmQ1Af2VbPFVtrPSB72Wo9V88kaO90hM2vSiIyegL0KpNPVaIs5k8pb8GidYMH6PXhA7U04s5hKIZ4-scgVIPhgbAMp-N_6pw-pdhgKxLgkXWXOpIMEfQ9qHOJryAln-fm5PbLUvdCozDpaUF5Wb2pd9j6FecPYaUUtGLRjQD6AmqriWMXqCsgqicT1ZFoRkTNVbVQAD2xFY6rvYgSbibYeYCQlXTZQMWg0P0"
  },
  {
    id: "exp-concentrix",
    role: "Operations Team Leader & Process Automation Lead",
    company: "Concentrix CVG",
    location: "Kuala Lumpur, Malaysia",
    period: "May 2023 – April 2025",
    tags: ["Team Scaling", "SLA Management", "Power Apps", "Power BI", "Workflow Analytics"],
    bulletPoints: [
      "Managed and mentored a 34-member multilingual customer support and operations team across 7 international markets, maintaining over 98% SLA compliance.",
      "Scaled operational team capacity by 380% within 18 months (from 9 to 34 agents) while maintaining operational quality, low attrition, and high customer satisfaction.",
      "Built PulseTrack and SmartFlow analytics tools using Power Apps and Power BI, eliminating 90% of manual reporting and freeing 60-80% of leadership administrative workload.",
      "Implemented automated reporting frameworks in Power BI and QlikView, enhancing operational efficiency by 25% and standardizing KPI visibility across teams.",
      "Engineered real-time data tracking pipelines achieving over 90% data accuracy and reducing average handling time (AHT) by 25%."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLvmmzx9g8QWMTnbVE5HiJ0Irunu5Gtf2ebevSFo95ySGtpMDBWPfFNg_FwzmCyJhHZufYZ9NNx98kiGNdmGVeFPP-GDa4zFBKy0uA8FMmewuUVgDgj4lU9Vl4uHA9cJ9iGSsDweASYMdl1lU9yhk8aaTgN90ntn5_N3xy1Nd4mSUNw1eoVbwjC8DgMT5D9RBEaIQOws3VpHkMu-YxRQL9hvDcNSO_plh7LeeNR3Lx_2iIVUiNU3yV3qvFo"
  },
  {
    id: "exp-accenture-lead",
    role: "Senior Team Lead / Operations Team Lead",
    company: "Accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "July 2017 – November 2022",
    tags: ["Leadership", "Efficiency", "Incident Protocol", "Talent Pipeline", "SQL Reporting"],
    bulletPoints: [
      "Directed a cross-functional team of 25-34 direct reports across 7 global markets, consistently exceeding 98% SLA compliance.",
      "Architected a new incident response protocol, reducing triage time by 60% and standardizing root-cause escalation paths.",
      "Mentored junior analysts, establishing a robust internal talent pipeline and career progression framework.",
      "Developed SQL-backed reporting dashboards using Tableau and QlikView to analyze decision accuracy, critical error rates, and escalation trends."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLuWNX9kpNESeN2LE9ZXEuM9faNOispkbhER3yOGZhkNWsbcKk2R-Sw4nsBnRZNbpQj78ce0zGX38bQWx2w1AHfh9Za1Zd0ap5E6G4Td0TKeDdpHY49etM5UZ_dW416O0p3Za3vVT0eo805LJw2_nzXXeo3IRcEVl6H5BCwszFhZm5eCKXtrGc0r98GFzEyucidiXCF7FQT5TiHAG_pF_EW6Xh6NB-lEFY8vkep7_n_dYdmLmN_f63REMnw"
  },
  {
    id: "exp-accenture-analyst",
    role: "Data Analyst",
    company: "Accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "Aug 2017 – May 2018",
    tags: ["Data Analysis", "KPI Tracking", "PL/SQL", "Process Bottlenecks"],
    bulletPoints: [
      "Conducted rigorous KPI analysis for enterprise service delivery metrics across multiple customer accounts.",
      "Identified critical operational bottlenecks, informing strategic pivot plans and automation opportunities."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLvMeGtVB-hkpzhJr1SmjJO1LGK5TgTd9cNasMmoNHqYRHtjIffVePmeKQcNcwZP2ih7bOE1yOcLFBDpFuHWlhAF--iCWFupocXWOayfV63jiWnEYHIFNVjM4VbVgSxkNHl9jjNWqXneRIJgW5TahbGQ1OVqLjn5tqNr1B2iNDFlm1hkz7jL3U1cBJ2RavDaPfLs-i9A7vUY99HtIsQ7iJl2JE3N-B_5uYzlLL4VVhk0_D1A2rkoqA3dkWE"
  },
  {
    id: "exp-education",
    role: "Academic Foundation",
    company: "Universiti Utara Malaysia (UUM)",
    location: "Sintok, Kedah, Malaysia",
    period: "Feb 2013 – Dec 2016",
    tags: ["Bachelor Degree", "International Business", "Scholarship Recipient", "Dean's Award"],
    bulletPoints: [
      "Bachelor of International Business Management (Honours).",
      "Minor in Logistics & Transportation.",
      "UUM International Scheme Scholarship Recipient.",
      "3x Dean's Academic Award recipient."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLsF2AZQa5UP7hM2UK6rk7VNQgF5ETWXXe-83-WuHc7KnrUO7-ItBHf8EqJ1vsh-G4xiWTEMlrDqIV8EmAzNOMM5kl_cxvL8mU2Qr-BN_n84YztVEEkjQIrEgBCCPX97ph6JEsGrsnc9aPuPlC6vd_E3wsw3_NMt6_4T3r-CqpDhNjSz4xhDbJ6lNTPNI41h2QNfQKIVACPb4MzZaDRHT1m0AoB8HwBxPO1aQraK_nMgrI5u9Vm_rSKlS4c"
  }
];

export const DEV_STACK: DevStackItem[] = [
  { code: "Fx", name: "Power Fx & Formulas", percentage: 98, color: "#2563eb" },
  { code: "AI", name: "AI Builder, Gemini & Groq Orchestration", percentage: 94, color: "#3b82f6" },
  { code: "Py", name: "Python 3.11+ (Playwright, Pydantic, ReportLab)", percentage: 90, color: "#2563eb" },
  { code: "API", name: "REST APIs, Graph API & SharePoint OAuth2", percentage: 90, color: "#3b82f6" },
  { code: "SQL", name: "T-SQL / PL-SQL / Supabase PostgreSQL", percentage: 88, color: "#2563eb" },
  { code: "TS", name: "TypeScript 5.8 / React 19 (PCF & SPA)", percentage: 86, color: "#3b82f6" }
];

export const GOVERNANCE_ITEMS: GovernanceItem[] = [
  {
    icon: "terminal",
    name: "PAC CLI",
    description: "Solution packaging, component compilation, and deployment automation."
  },
  {
    icon: "all_inclusive",
    name: "Azure DevOps & Pipelines",
    description: "Multi-stage CI/CD pipelines for automated solution packing, unpacking, and test deployment."
  },
  {
    icon: "source",
    name: "Git / GitHub Actions",
    description: "Version control, feature branching strategies, and automated PR verification."
  },
  {
    icon: "admin_panel_settings",
    name: "CoE Starter Kit",
    description: "Environment strategy, DLP policy enforcement, tenant hygiene, and compliance governance."
  }
];

export const BUSINESS_COMPETENCIES: BusinessCompetency[] = [
  {
    icon: "speed",
    title: "SLA & KPI MANAGEMENT",
    description: "Designing metrics that align technical output with executive business goals and operational performance."
  },
  {
    icon: "handshake",
    title: "SERVICE DELIVERY",
    description: "End-to-end lifecycle management ensuring high availability, continuous uptime, and swift user adoption."
  },
  {
    icon: "manufacturing",
    title: "OPERATIONAL EFFICIENCY",
    description: "Identifying organizational bottlenecks and implementing intelligent automation to drastically reduce manual overhead."
  },
  {
    icon: "diversity_3",
    title: "CROSS-FUNCTIONAL LEAD",
    description: "Bridging the functional gap between stakeholders, business leads, software engineers, and IT administrators."
  }
];

export const ADDITIONAL_COMPETENCIES = [
  {
    category: "Customer Service Management",
    skills: ["SLA & KPI Management", "Service Delivery", "Operational Efficiency", "Escalation Management", "Quality Assurance (QA)", "Contact Center Operations", "Shift & Capacity Planning"]
  },
  {
    category: "Team Leadership & Development",
    skills: ["Performance Management", "Coaching & Mentoring", "Cross-Functional Leadership", "Change Enablement", "Hiring & Onboarding", "Attrition Reduction"]
  },
  {
    category: "Support Tools & Platforms",
    skills: ["Salesforce CRM", "Jira", "Zendesk", "Tableau", "Power BI", "Advanced MS Excel", "MS Teams", "Slack", "Zoom"]
  },
  {
    category: "Process Automation & Analytics",
    skills: ["Workflow Automation", "Incident Command & Management", "Escalation Triage", "Process Optimization", "Real-Time Dashboards"]
  },
  {
    category: "Languages",
    skills: ["English (Fluent)", "Malay (Fluent)", "Indonesian (Native)"]
  }
];

export const INTERVIEW_TOPICS: InterviewTopic[] = [
  {
    id: "domino-migration-strategy",
    category: "Enterprise Architecture",
    question: "How did you approach migrating 365+ legacy Lotus Domino applications without business interruption?",
    executiveSummary: "Implemented a 6-slice domain triage based on system reports, cataloging 24 High, 28 Medium, and 12 Low complexity applications. Replaced scheduled Domino background agents with event-driven Power Automate cloud flows and centralized Dataverse / SharePoint schemas.",
    deepDiveArchitecture: "1. Discovery & Analysis: Analyzed 54 Domino system reports to map data structures, access control lists (ACLs), and scheduled agent jobs.\n2. Triage & Slicing: Grouped apps into 6 functional slices (QMS, CAPA, Supply Chain, Warehouse, Master Data, CI).\n3. Dual-Track Delivery: Built standard operational apps using Canvas/Model-Driven Power Apps while developing 400+ custom React PCF components for specialized data grids.\n4. Cutover Governance: Implemented parallel run phases, automated data migration scripts via Azure Pipelines, and validated 100% record integrity before decommission.",
    keyArtifacts: ["54 System Reports", "878 Canvas Screens", "16-23 Live Production Power Apps", "Zero Downtime Cutover"]
  },
  {
    id: "dataverse-security-isolation",
    category: "Data Security & Governance",
    question: "How do you handle strict audit compliance, database isolation, and role-based access in Power Platform?",
    executiveSummary: "Utilized Dataverse Business Units, Security Roles, Field-Level Security, and dedicated environment isolation for sensitive financial flows like the Tasek Rebate Approval System.",
    deepDiveArchitecture: "• Isolated Database Environments: Created dedicated production environments with dedicated Dataverse instances to keep financial rebate formulas segregated.\n• Tiered Role-Based Access: Configured hierarchical security with Sales Approvers, Finance Reviewers, and Group COO sign-off.\n• Immutable Audit Trail: Enabled Dataverse auditing on all transactional entities to preserve timestamped modification logs for external financial auditors.\n• DLP Policies: Enforced tenant Data Loss Prevention policies restricting connector access to approved endpoints.",
    keyArtifacts: ["Dataverse Hierarchy", "DLP Policies", "Field-Level Security", "Audit Logging"]
  },
  {
    id: "alm-pac-cli",
    category: "DevOps & ALM",
    question: "What is your Application Lifecycle Management (ALM) workflow for Power Platform solutions?",
    executiveSummary: "Leveraged PAC CLI alongside Azure Pipelines and GitHub Actions to implement source-control driven ALM, converting raw solution zip files into version-controlled unmanaged xml and deploying managed solutions to UAT/Production.",
    deepDiveArchitecture: "1. Developer branches off main in Git.\n2. PAC CLI extracts solutions into unmanaged files (Canvas assets, PCF controls, cloud flow JSON).\n3. Pull Request triggers automated linting and solution checker validation in Azure DevOps.\n4. Build pipeline packages solution as 'Managed' and deploys to staging for QA sign-off.\n5. Release pipeline automates promotion to Production with environment variable configuration and connection reference re-mapping.",
    codeOrFlowSnippet: `# Example PAC CLI solution export & unpack\npac solution export --name "Enterprise_Rebate_Engine" --path "./solutions/Rebate_Managed.zip" --managed\npac solution unpack --zipfile "./solutions/Rebate_Managed.zip" --folder "./src/Solutions/Rebate"`,
    keyArtifacts: ["PAC CLI", "Azure Pipelines YAML", "Managed Solutions", "Solution Checker"]
  },
  {
    id: "ai-builder-integration",
    category: "AI & Intelligent Automation",
    question: "How do you deploy AI Builder models to optimize enterprise ticket triage and document extraction?",
    executiveSummary: "Trained custom NLP classification models on 120+ SOP categories, achieving 40-60% improvement in accuracy and cutting manual handling time by up to 80%.",
    deepDiveArchitecture: "• Model Training: Fine-tuned AI Builder text categorization models on historical customer service inquiries and standard operating procedures.\n• Automated Routing: Flow consumes incoming inquiries, queries AI Builder prediction API, extracts confidence score and recommended SOP.\n• Confidence Gating: If confidence > 85%, auto-suggests SOP link in agent interface; if < 85%, routes to Tier-2 senior lead for human-in-the-loop review.\n• Continuous Feedback: Feedback loop captures agent corrections to retrain models periodically.",
    keyArtifacts: ["120+ SOP Categories", "AI Builder NLP", "85% Confidence Gate", "-65% Handling Time"]
  },
  {
    id: "ats-tri-engine-governance",
    category: "AI Gateway & Governance",
    question: "How did you prevent LLM metric hallucinations and API 429 resource exhaustion in the ATS Automation pipeline?",
    executiveSummary: "Engineered a Tri-Engine AI Router (Gemini, Groq, OpenCode Zen) with cross-process fcntl file locking and a post-generation 10-gate PDF verification suite (Q1–Q10) that cross-references every regex-extracted number against MASTER_SOURCE_OF_TRUTH.md.",
    deepDiveArchitecture: "1. Task-Specific Tri-Engine Routing: Routed low-latency form queries ('fast') through Groq -> OpenCode -> Gemini, and schema-heavy resume tailoring ('structured') through Gemini -> OpenCode -> Groq.\n2. Cross-Process Rate Limiting: Persisted rolling 60-second RPM and daily RPD counters in ai_gateway_state.json guarded by fcntl.flock, with automatic fallback from tool-calling to system-prompt JSON schema inlining when a provider rejects tools payloads.\n3. Verbatim Fact Lock & Regex SSOT Gate: Enforced verbatim copying of experience/project/education bullets via Pydantic v2 schemas and ran a post-PDF regex extraction pass (\\b\\d+%\\+?|\\b\\d+\\+) to block any number not present in MASTER_SOURCE_OF_TRUTH.md.\n4. 10 Deterministic Quality Gates (Q1–Q10): Validated selectable word count, URI annotations, canonical metrics ('365+', '878', '98%'), title accuracy, contact accuracy, and page count limits before deployment.",
    codeOrFlowSnippet: `# tailor_to_jd.py — SSOT Regex Metric Verification Gate
if ssot_text:
    tailored_metrics = set(re.findall(r"\\b\\d+%\\+?|\\b\\d+\\+", text))
    ssot_metrics = set(re.findall(r"\\b\\d+%\\+?|\\b\\d+\\+", ssot_text))
    fabricated = [m for m in tailored_metrics if m not in ssot_metrics and m not in base_text]
    if fabricated:
        problems.append(f"Metrics not found in SSOT (hallucination blocked): {fabricated}")`,
    keyArtifacts: ["Tri-Engine AI Gateway", "Q1–Q10 PDF Gates", "fcntl Cross-Process Lock", "0% Fact Drift"]
  },
  {
    id: "workday-playwright-hardening",
    category: "Browser Automation & DOM Resilience",
    question: "How did you overcome hostile Workday SPA DOM quirks and multi-portal XPath variations in Playwright?",
    executiveSummary: "Built targeted Workday handlers in app_bot_v6.py for hidden file inputs, custom ARIA listboxes, 3-second Next button stability checks, and SHA-256 option-aware disk caching, paired with case-insensitive XPath translate() locators for multi-board profile sync.",
    deepDiveArchitecture: "• Hidden File Input & Parse Synchronization: Attached resume PDFs directly to hidden <input type='file'> nodes behind Workday drop-zones and polled document.body.innerText for upload confirmation plus a 6-second autofill buffer.\n• Next Button Stability & Step Fingerprinting: Required the wizard Next button to remain continuously enabled for >= 3.0s and verified DOM fingerprint transitions after clicking.\n• ARIA Listbox & Phone Guards: Resolved button[aria-haspopup='listbox'] dropdowns showing 'Select One', protected phoneNumber--extension and countryPhoneCode from substring collisions, and normalized names to title-case.\n• Option-Aware SHA-256 Cache: Hashed question + field_type + sorted(options) in response_cache.json for zero-latency repeat answers.",
    codeOrFlowSnippet: `# app_bot_v6.py — Workday Name Capitalization Normalizer
def normalize_name(value: str) -> str:
    """Title-case a person's name to satisfy ATS capitalization validators."""
    if not value:
        return value
    lowered = value.strip().lower()
    return re.sub(r"(^|[\\s\\-'\\u2019])([a-z])", lambda m: m.group(1) + m.group(2).upper(), lowered)`,
    keyArtifacts: ["Workday Wizard Bot v6", "SHA-256 Response Cache", "XPath CI Locators", "HITL Review Gate"]
  },
  {
    id: "sharepoint-maindb-dosh-she",
    category: "M365 Licensing & Industrial Safety",
    question: "How did you avoid $960K+/year in premium Power Platform licensing while consolidating 361 Domino forms and digitizing chemical plant SHE compliance?",
    executiveSummary: "Designed a Single MainDB_{Dept} SharePoint list per site with an indexed FormCode discriminator (DEC-2026-001), paired with a static Python AST validator for 7,878 .pa.yaml screens and a React 19 DOSH/SIRIM 5×5 HIRADC safety suite.",
    deepDiveArchitecture: "1. Standard-Connector MainDB Architecture: Consolidated 361 Lotus Domino forms into departmental SharePoint lists (MainDB_IT, MainDB_IT_JHR, MainDB_SHE) using an indexed FormCode discriminator and typed OData columns—avoiding $40/user/month premium connectors across 2,000+ employees ($960K+/yr saved).\n2. Static .pa.yaml v3.0 Verification: Built _validate_pa.py to lint 7,878 Canvas YAML screens for Properties indentation, multiline block scalars, leading '=' Power Fx prefixes, and duplicate control names prior to pac canvas pack.\n3. SharePoint GUID & Config Auditing: Engineered audit-power-config.mjs to canonicalize multi-encoded SharePoint URLs and block placeholder GUIDs in CI.\n4. DOSH/SIRIM Chemical Plant SHE Suite: Delivered real-time 5×5 HIRADC risk scoring (Likelihood × Severity), 5-Whys Root Cause Investigation (SHEAI/SHEICAR), and multi-plant PPE reorder alerting across Penang and Johor plants.",
    codeOrFlowSnippet: `// ioi-she-platform/src/services/sheService.ts — Deterministic DOSH 5x5 Risk Scoring
export function calculateRiskScore(likelihood: number, severity: number): { score: number; level: RiskLevel } {
  const score = likelihood * severity;
  return { score, level: score >= 15 ? "HIGH" : score >= 5 ? "MEDIUM" : "LOW" };
}`,
    keyArtifacts: ["$960K/yr Saved", "7,878 .pa.yaml Screens", "MainDB FormCode Schema", "DOSH 5×5 HIRADC Matrix"]
  },
  {
    id: "offline-first-pwa-erp-sync",
    category: "Offline-First PWA & Financial Ledgers",
    question: "How do you architect 0ms optimistic UI responsiveness and strict financial profit isolation across offline-first ERP & B2B PWAs?",
    executiveSummary: "Combined 0ms synchronous localStorage hydration with 2,500ms race-timeout Firestore adapters, timestamp-aware conflict resolution (localTime >= serverTime), atomic writeBatch multi-pocket ledgers, and 24-hour lazy stock expiration.",
    deepDiveArchitecture: "• Zero-Latency Hydration & Race Timeouts (Putri GarmentHub): Replaced CPU-heavy canvas loops with GPU compositor orbs (-6,070ms TBT) and built storageAdapter.ts with synchronous getters, a 2,500ms Promise.race timeout, and timestamp conflict merging so stale server reads never overwrite optimistic floor edits.\n• 4-Pocket Cash Segregation & RBAC: Segregated workshop funds into Kas Bahan, Kas Operasional, Kas Iklan, and Owner-only Kas Profit, filtering kas_profit at the React Context boundary and committing mutations + embedded audit logs via atomic Firestore writeBatch.\n• Lazy Stock Expiration & Guest PII Scrubbing (SaltDistribute): Implemented client-driven 24-hour lazy expiration to roll back unpaid gram reservations without cloud cron jobs, and automatically scrubbed guest PII upon order completion while preserving COGS financial metrics.",
    codeOrFlowSnippet: `// storageAdapter.ts — Timestamp-Aware Conflict Resolution (Optimistic Local vs Firestore)
localData.forEach(b => {
  const existing = mergedMap.get(b.id);
  const localTime = new Date(b.updatedAt || b.createdAt).getTime();
  const serverTime = existing ? new Date(existing.updatedAt || existing.createdAt).getTime() : 0;
  if (!existing || localTime >= serverTime) mergedMap.set(b.id, b);
});`,
    keyArtifacts: ["0ms Sync Hydration", "4-Pocket Atomic Ledger", "24h Lazy Stock TTL", "Guest PII Auto-Purge"]
  }
];
