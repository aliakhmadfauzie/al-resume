import {
  ProjectItem,
  MigrationSlice,
  ExperienceItem,
  ClientRosterItem,
  DevStackItem,
  GovernanceItem,
  PowerPlatformArchLayer,
  BusinessCompetency,
  InterviewTopic,
  TransformationMetric,
  TrustSignal,
  ThoughtLeadershipItem,
  CertificationItem,
  HonorAwardItem,
  LinkedInTestimonial,
  ExecutiveCareerNarrative
} from '../types';

export const PERSONAL_INFO = {
  name: "Ali Akhmad Fauzie",
  title: "Power Platform Solution Architect & Enterprise Modernization Specialist",
  linkedInHeadline: "Power Platform Solution Manager | Operation Lead | Process Improvement | Project Management",
  tagline: "Power Platform Developer | Solution Architect | Driving digital transformation through scalable, intelligent automation.",
  location: "Federal Territory of Kuala Lumpur, Malaysia / Bandung, West Java 40111, Indonesia",
  email: "aliakhmadfauzie@gmail.com",
  secondaryEmail: "aliakhmadfauzie@hotmail.com",
  phone: "+60 13-295 7406 / +60 11-1214 7406 / +62 851-1055-2118",
  linkedIn: "https://www.linkedin.com/in/aliakhmadf/",
  linkedInHandle: "linkedin.com/in/aliakhmadf",
  github: "https://github.com/aliakhmadfauzie",
  avatarUrl: "/assets/profile/ali-avatar.jpg",
  yearsExperience: "9+ Years",
  summary: "A results-driven Power Platform solution architect and operations leader specializing in migrating legacy systems (Lotus Notes) to modern Microsoft 365 ecosystems. Proven track record in designing end-to-end automation workflows, AI-enhanced processes, and robust governance frameworks that deliver 80–90% reductions in manual workload, >98% SLA compliance, and 90%+ data accuracy across Quality, Warehouse, HR, and IT."
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
    imageUrl: "/showcase-articles/ats-automation/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/power-platform-portfolio/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/enterprise-m365-ioi/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/putri-garmenthub/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/jastip-cross-border/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/e-commerce-site-dlab/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/saltdistribute/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/barbershop-management/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/lewihouse/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/warungdewasa-pwa/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/ats-flow-resume-builder/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/resumeforge/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/stitch-design/portfolio-ui-screenshot.png",
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
    imageUrl: "/showcase-articles/fandy-resume-portfolio/portfolio-ui-screenshot.png",
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

export const FREELANCE_CLIENTS: ClientRosterItem[] = [
  {
    id: "client-texchem",
    name: "Texchem",
    industry: "Conglomerate & Industrial Manufacturing",
    role: "Enterprise Solutions Architect & Modernization Consultant",
    scope: "Rapid React/TypeScript Prototypes, SOW Scoping, Workflow Optimization & Digital Modernization",
    logoUrl: "/assets/logos/texchem.png",
    logoId: "texchem"
  },
  {
    id: "client-ioi-acidchem",
    name: "IOI Acidchem",
    industry: "Oleochemicals & Agro-Industrial",
    role: "Lotus Domino to M365 / Dataverse Enterprise Migration Architect",
    scope: "365+ Form Cutover, DOSH 5x5 SHE Platform, 878 Canvas Screens & Dataverse Relational Modeling",
    logoUrl: "/assets/logos/ioi-acidchem.png",
    logoId: "ioi-acidchem"
  },
  {
    id: "client-nippon-paint",
    name: "Nippon Paint",
    industry: "Coatings & Chemical Manufacturing",
    role: "Digital Workflow & Commercial Automation Architect",
    scope: "Enterprise Pre-Sales Architectures, Automated Workflows & Systems Modernization Roadmap",
    logoUrl: "/assets/logos/nippon-paint.png",
    logoId: "nippon-paint"
  },
  {
    id: "client-tasek-cement",
    name: "Tasek Cement",
    industry: "Building Materials & Cement Manufacturing",
    role: "Enterprise Workflow & Power Automate Architect",
    scope: "15-Minute 5-Tier Commercial Rebate Approval Engine & Multi-Tier ERP Integration",
    logoUrl: "/assets/logos/tasek-cement.png",
    logoId: "tasek-cement"
  },
  {
    id: "client-ipenet",
    name: "IPENET Solutions",
    industry: "Enterprise ICT & Cloud Infrastructure",
    role: "Enterprise Cloud & Modernization Solutions Consultant",
    scope: "Pre-Sales Technical Architectures, ICT Infrastructure Delivery & Systems Automation",
    logoUrl: "/assets/logos/ipenet.png",
    logoId: "ipenet"
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-freelance",
    role: "Enterprise Solutions Architect & Pre-Sales Lead",
    company: "Self-Employed / Independent Contractor",
    companyLogoId: "general",
    clients: [
      {
        id: "client-texchem",
        name: "Texchem",
        industry: "Conglomerate & Industrial Manufacturing",
        role: "Enterprise Solutions Architect & Modernization Consultant",
        scope: "Rapid React/TypeScript Prototypes, SOW Scoping, Digital Workflows",
        logoUrl: "/assets/logos/texchem.png",
        logoId: "texchem"
      },
      {
        id: "client-ioi-acidchem",
        name: "IOI Acidchem",
        industry: "Oleochemicals & Agro-Industrial",
        role: "Lotus Domino to M365 & Dataverse Migration Architect",
        scope: "365+ Domino Applications Cutover, DOSH 5x5 SHE Platform & Dataverse Modeling",
        logoUrl: "/assets/logos/ioi-acidchem.png",
        logoId: "ioi-acidchem"
      },
      {
        id: "client-nippon-paint",
        name: "Nippon Paint",
        industry: "Coatings & Chemical Manufacturing",
        role: "Digital Workflow & Commercial Automation Architect",
        scope: "Enterprise Pre-Sales Architectures, Automated Workflows & Systems Modernization",
        logoUrl: "/assets/logos/nippon-paint.png",
        logoId: "nippon-paint"
      },
      {
        id: "client-tasek-cement",
        name: "Tasek Cement",
        industry: "Building Materials & Cement Manufacturing",
        role: "Enterprise Workflow & Power Automate Architect",
        scope: "15-Minute 5-Tier Commercial Rebate Approval Engine & Multi-Tier ERP Integration",
        logoUrl: "/assets/logos/tasek-cement.png",
        logoId: "tasek-cement"
      },
      {
        id: "client-ipenet",
        name: "IPENET Solutions",
        industry: "Enterprise ICT & Cloud Infrastructure",
        role: "Enterprise Cloud & Modernization Solutions Consultant",
        scope: "Pre-Sales Technical Architectures, ICT Infrastructure Delivery & Systems Automation",
        logoUrl: "/assets/logos/ipenet.png",
        logoId: "ipenet"
      }
    ],
    location: "Remote",
    period: "Feb 2025 – Present",
    isCurrent: true,
    tags: [
      "Pre-Sales",
      "Leadership",
      "React",
      "TypeScript",
      "Dataverse",
      "SharePoint",
      "Texchem",
      "IOI Acidchem",
      "Nippon Paint",
      "Tasek Cement",
      "IPENET"
    ],
    bulletPoints: [
      "Partnered with flagship enterprise clients including Texchem, IOI Acidchem, Nippon Paint, Tasek Cement (Hong Leong Asia), and IPENET Solutions to architect digital workflows, systems cutovers, and rapid modernization prototypes.",
      "Closed RM 70,000+ in signed SOWs by converting discovery sessions into delivery contracts using rapid React/TypeScript prototypes and Dataverse architectures.",
      "Led a 3-person technical pod; managed sprint milestones, billable capacity, and QA to deliver client solutions on schedule with no scope overruns.",
      "Scoped and secured executive sign-off for modernization of 365+ legacy applications across 28 business units to Microsoft 365/SharePoint/Dataverse, defining a phased commercial roadmap.",
      "Expanded account value by 35% through workflow optimization and cross-selling integrations and ongoing automation support while sustaining 30-35% project margins.",
      "Accelerated sales velocity by delivering working POCs within 72 hours, shortening enterprise sales cycles by ~2 weeks."
    ],
    iconUrl: "/assets/logos/tasek-cement.png"
  },
  {
    id: "exp-concentrix",
    role: "Operations Team Manager (QA, Policy & Training)",
    company: "Concentrix CVG",
    companyLogoId: "concentrix",
    location: "Kuala Lumpur, Malaysia",
    period: "May 2023 – Apr 2025",
    tags: [
      "QA Department & Auditing",
      "Policy Creation",
      "Training Delivery",
      "Trust & Safety",
      "Ads Review",
      "Live Chat & Email",
      "BPO Operations",
      "SLA Governance",
      "Six Sigma DMAIC"
    ],
    bulletPoints: [
      "QA Department Leadership & Transaction Auditing: Directed QA department workflows, conducted deep-dive transaction audits across live chat and email cases, and led calibration panels to eliminate scoring variance and defect outliers.",
      "Policy Creation & SOP Authoring: Directly authored, created, and updated operational policy documentation, decision trees, and standard operating procedures (SOPs) for Trust & Safety (content moderation) and Advertising Integrity (Ads Review), translating complex client policy changes into clear frontline enforcement standards.",
      "Conducting Training & Nesting Academies: Designed instructional materials and directly conducted onboarding training bootcamps, nesting clinics, and refresher workshops, coaching frontline specialists and raising 90-day associate competency from 78% to 94%.",
      "BPO Floor Leadership & Scaling: Commanded daily 24/7 BPO operations scaling headcount by 380% (from 9 to 34 multilingual associates across 7 APAC language pods: Indonesian, Chinese Mainland, Korean, Japanese, English, Thai, Vietnamese) in Trust & Safety, Ads Review, and Omnichannel Live Chat/Email, sustaining >98%+ contractual SLA compliance.",
      "Continuous Improvement & Automation: Executed Six Sigma DMAIC process controls reducing Average Handling Time (AHT) by 25%; engineered PulseTrack real-time productivity tracker and SmartFlow automated intake, cutting manual queue reporting by 90%."
    ],
    iconUrl: "/assets/logos/concentrix.png"
  },
  {
    id: "exp-accenture-sr-lead",
    role: "Senior Team Lead / Service Delivery Operations Lead",
    company: "Accenture",
    companyLogoId: "accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "Jan 2021 – Nov 2022",
    tags: [
      "Promotions",
      "Senior Leadership",
      "BPO Operations",
      "Trust & Safety",
      "Ads Review",
      "QA & Policy",
      "Training Delivery",
      "Power Platform",
      "Diamond Award"
    ],
    promotionBadge: "★ Promoted to Senior Team Lead",
    bulletPoints: [
      "Promoted to Senior Team Lead directing cross-functional BPO operations across Trust & Safety, advertising review integrity, and multilingual customer support for 25–34 direct reports spanning 7 global APAC markets, sustaining >90–98% SLA compliance.",
      "Partnered cross-functionally with QA auditors, Policy specialists, and SMEs to standardize edge-case resolutions, eliminate quality blind spots, and run structured calibration sessions.",
      "Conducted training delivery and coaching academies for frontline specialists; pioneered Power Platform adoption across the operations floor in 2021 (Power Apps, Power Automate, Power BI), cutting handling costs by 15% and incident triage duration by 60%.",
      "Maintained annualized attrition below 5% through structured 1-on-1 coaching, QA audit loops, and career progression ladders, earning the prestigious Hang Tuah Award and the Accenture Diamond Award."
    ],
    iconUrl: "/assets/logos/accenture.png"
  },
  {
    id: "exp-accenture-lead",
    role: "Operations Team Lead",
    company: "Accenture",
    companyLogoId: "accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "Jun 2019 – Dec 2020",
    tags: ["Promotions", "BPO Leadership", "Trust & Safety", "Live Chat & Email", "Incident Command", "QA Calibration", "SLA Governance"],
    promotionBadge: "★ Promoted to Team Lead",
    bulletPoints: [
      "Promoted from Junior Team Lead to full Operations Team Lead, overseeing 20–25 direct reports handling high-stakes BPO queue surges, live chat/email escalations, and advertising review workflows.",
      "Commanded real-time queue recovery during major platform disruptions, establishing rapid-response SOPs with QA and Policy teams that restored full contractual SLA within 48 hours without associate burnout.",
      "Led Weekly Business Reviews (WBRs) with international account stakeholders, analyzing KPI variances, defect distributions, and implementing corrective DMAIC action plans."
    ],
    iconUrl: "/assets/logos/accenture.png"
  },
  {
    id: "exp-accenture-jr-lead",
    role: "Junior Team Lead (Operations)",
    company: "Accenture",
    companyLogoId: "accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "May 2018 – May 2019",
    tags: ["Promotions", "Floor Management", "Live Chat & Email", "Training & Coaching", "Queue Adherence"],
    promotionBadge: "★ Promoted from Data Analyst",
    bulletPoints: [
      "Promoted from Data Analyst within 9 months into frontline BPO management, directing a dedicated pod of 10–15 customer support specialists across live chat and email channels.",
      "Delivered SOP training and nesting coaching for newly onboarded associates, establishing standardized triage protocols that lifted first-contact resolution (FCR) by 18%.",
      "Owned daily floor management, rotational shift rostering, break schedules, and real-time queue adherence, awarded the Best People Award (QBR Sep 2018)."
    ],
    iconUrl: "/assets/logos/accenture.png"
  },
  {
    id: "exp-accenture-analyst",
    role: "Data Analyst — Operations",
    company: "Accenture",
    companyLogoId: "accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "Aug 2017 – May 2018",
    tags: ["Data Analytics", "KPI Modeling", "PL/SQL", "Queue Forecasting", "Bottleneck Triage"],
    bulletPoints: [
      "Generated daily, weekly, and monthly operational performance reports analyzing customer support KPIs, resolution velocity, and agent utilization metrics using PL/SQL, Excel, and dashboard prototypes.",
      "Collaborated with operational leadership to diagnose frontline queue bottlenecks, translating raw telemetry into actionable coaching insights and automation initiatives.",
      "Demonstrated high-velocity execution and analytical leadership that directly secured a merit promotion to Junior Team Lead within 9 months."
    ],
    iconUrl: "/assets/logos/accenture.png"
  },
  {
    id: "exp-thelorry",
    role: "B2B Digital Marketing Specialist (1st Professional Role)",
    company: "TheLorry",
    companyLogoId: "thelorry",
    location: "Petaling, Selangor, Malaysia",
    period: "Feb 2017 – Aug 2017",
    tags: ["1st Job", "B2B Digital Marketing", "Lead Generation", "Funnel Analytics", "E-Logistics"],
    bulletPoints: [
      "Launched professional career as 1st full-time role immediately post-graduation, driving B2B digital marketing, corporate client acquisition, and commercial lead generation for Southeast Asia's leading on-demand logistics tech platform.",
      "Managed end-to-end B2B marketing funnels, commercial freight inquiry pipelines, and digital conversion analytics across Google Ads and paid acquisition channels to optimize CAC.",
      "Collaborated cross-functionally with corporate sales, enterprise account executives, and operations teams to accelerate B2B fleet partner onboarding and revenue growth."
    ],
    iconUrl: "/assets/logos/thelorry.png"
  },
  {
    id: "exp-zalora-intern",
    role: "E-Commerce Operations & Marketing Intern",
    company: "ZALORA Group",
    companyLogoId: "zalora",
    location: "Kuala Lumpur, Malaysia",
    period: "2016",
    tags: ["Undergraduate Internship", "ZALORA", "E-Commerce", "Catalog Operations", "Supply Chain"],
    bulletPoints: [
      "Completed foundational undergraduate industry internship at ZALORA Group, Southeast Asia's premier online fashion & lifestyle destination.",
      "Managed product catalog inventory data reconciliation, listing quality audits, and stock replenishment tracking across regional fulfillment centers.",
      "Supported cross-functional campaign rollouts between digital marketing, merchandising, and warehouse fulfillment teams during regional retail sales events."
    ],
    iconUrl: "/assets/logos/zalora.png"
  },
  {
    id: "exp-education",
    role: "Bachelor of International Business Management (Honours)",
    company: "Universiti Utara Malaysia (UUM)",
    location: "Sintok, Kedah, Malaysia",
    period: "2013 – 2017",
    tags: ["Bachelor Degree", "5× Dean's List", "SRC Intl Affairs", "IBMS President", "Full Scholarship"],
    bulletPoints: [
      "Graduated with Bachelor's Degree in International Business Management With Honours (CGPA 3.48, Second Upper Class Honours, Minor in Logistics & Transportation).",
      "Received total of 5× Dean's List Academic Honors Awards across 5 academic semesters (Semesters 1, 2, 3, 4, and 5) and Special Achievement in Leadership Award (Anugerah Kerana Jasa - AK_J).",
      "Elected to the Student Representative Council (SRC / MPPUUM) for International Affairs, directing campus-wide international student governance, cross-cultural initiatives, and diplomatic delegations.",
      "Served as President of IBMS (International Business Management Association), presiding over student governance, trade symposiums, and cross-border commercial study missions.",
      "Awarded the prestigious UUM International Scholarship Scheme Achievement Award (February 2014, RM10,000 per semester) for outstanding academic, leadership, and community merit."
    ],
    iconUrl: "/assets/profile/ali-avatar.jpg"
  }
];

export const POWER_PLATFORM_ARCH_SUITE: PowerPlatformArchLayer[] = [
  {
    id: "data-layer",
    layer: "01 · Data Layer",
    title: "Microsoft Dataverse & Fabric Lakehouses",
    subtitle: "Enterprise Relational Schema, Poly-Lookups & OneLake Sync",
    primaryTech: "Dataverse · SQL Server · SharePoint Online · Microsoft Fabric Lakehouses",
    description: "Powered primarily by Microsoft Dataverse for relational enterprise data (polymorphic lookups, calculated rollup fields, column-level security), alongside connected and federated data sources including Azure SQL Server, SharePoint Online, and Microsoft Fabric Lakehouses via Azure Synapse Link.",
    components: [
      "Microsoft Dataverse (Primary Relational Engine)",
      "Azure SQL Server (Transactional Store)",
      "SharePoint Online (Documents & Lists)",
      "Microsoft Fabric Lakehouses (OneLake Delta Parquet)"
    ],
    capabilities: [
      "Zero-Loss Polymorphic Lookups & Relational Data Models",
      "Azure Synapse Link for Real-Time Fabric OneLake Sync",
      "Virtual Tables & Custom OData v4 Integration",
      "Field-Level Security & Encrypted Profiles"
    ],
    docLinks: [
      { label: "Dataverse Architecture (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/power-platform/architecture/products/power-apps" },
      { label: "Power Platform Architecture Guide", url: "https://www.linkedin.com/pulse/microsoft-power-platform-architecture-complete-guide-darshil-barot-uj5if" }
    ],
    accentColor: "#0284c7"
  },
  {
    id: "application-layer",
    layer: "02 · Application Layer",
    title: "Power Apps & Power Pages",
    subtitle: "Internal Operations Hubs & External-Facing Secure Portals",
    primaryTech: "Power Apps (Canvas & Model-Driven) · Power Pages",
    description: "Built using Power Apps (Canvas apps for responsive frontline mobile/tablet workflows, Model-driven apps for high-density transactional operational hubs) and Power Pages for secure, external-facing customer and supplier self-service portals.",
    components: [
      "Power Apps Canvas (Mobile & Tablet UX)",
      "Power Apps Model-Driven (Data-Dense Back Office)",
      "Power Pages (External Customer/Supplier Portals)",
      "PCF Custom React 19 UI Controls (Pro-Code Extensions)"
    ],
    capabilities: [
      "Responsive Multi-Form Factor Layouts",
      "Multi-Tier Business Process Flows (BPFs)",
      "External Partner Authentication & Role Scopes",
      "Zero-Polling Push Cache & Offline Resilience"
    ],
    docLinks: [
      { label: "Understanding Power Platform Architecture (Medium)", url: "https://medium.com/@walidchafroud/understanding-microsoft-power-platform-architecture-7bb5e756d7f7" },
      { label: "Power Pages Architecture (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/power-pages/architecture" }
    ],
    accentColor: "#8b5cf6"
  },
  {
    id: "automation-layer",
    layer: "03 · Automation Layer",
    title: "Power Automate Multi-Tier Orchestration",
    subtitle: "Cloud Flows, Desktop Flows (RPA) & Business Process Flows",
    primaryTech: "Power Automate (Cloud Flows, Desktop RPA, BPF)",
    description: "Orchestrated through Power Automate spanning automated, instant, and scheduled cloud flows, attended and unattended Desktop Flows (RPA) for legacy system cutovers, and multi-tier Business Process Flows enforcing deterministic governance.",
    components: [
      "Automated & Scheduled Cloud Flows",
      "Desktop Flows / Unattended RPA (Legacy ERP)",
      "Business Process Flows (State Machines)",
      "Custom REST Webhooks & Adaptive Cards"
    ],
    capabilities: [
      "15-Minute 5-Tier Commercial Approval Matrices",
      "Unattended Desktop RPA for Legacy Domino / ERP",
      "Automated Exception Handling & Run Telemetry",
      "Cross-Tenant Webhooks & Microsoft Graph Triggers"
    ],
    docLinks: [
      { label: "Power Automate Architecture & Guidance (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/power-automate/guidance/architecture/" }
    ],
    accentColor: "#00dbe7"
  },
  {
    id: "analytics-ai-layer",
    layer: "04 · Analytics & AI Layer",
    title: "Power BI & Copilot Studio",
    subtitle: "Executive Telemetry Dashboards & Conversational AI Copilots",
    primaryTech: "Power BI · Copilot Studio · AI Builder",
    description: "Delivers real-time executive business intelligence via Power BI semantic models and interactive dashboards, paired with conversational AI experiences, document RAG, and autonomous agent triggers through Copilot Studio and AI Builder.",
    components: [
      "Power BI Semantic Models & DirectLake Telemetry",
      "Copilot Studio Conversational Agents",
      "AI Builder Document Processing & OCR",
      "Tri-Engine AI Routing (Gemini, Groq, Copilot)"
    ],
    capabilities: [
      "Real-Time Executive SLA & Burn Rate Telemetry",
      "Natural Language Enterprise Data Exploration",
      "Grounded Document RAG with Citation Provenance",
      "Autonomous Multi-Agent Handshake & Routing"
    ],
    docLinks: [
      { label: "Power Platform AI Architecture (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/power-platform/architecture/" },
      { label: "Copilot Studio Architecture (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/architecture-overview" }
    ],
    accentColor: "#f59e0b"
  },
  {
    id: "security-governance-layer",
    layer: "05 · Security & Governance Layer",
    title: "Microsoft Entra ID, RBAC & DLP Policies",
    subtitle: "Zero-Trust Identity, Column-Level Security & CoE ALM",
    primaryTech: "Microsoft Entra ID · RBAC · DLP Policies · CoE Kit",
    description: "Handled centrally by Microsoft Entra ID for unified Single Sign-On (SSO) and Conditional Access, granular Role-Based Access Control (RBAC) with column/field-level security in Dataverse, and rigorous tenant-wide Data Loss Prevention (DLP) connector classifications.",
    components: [
      "Microsoft Entra ID (SSO & Conditional Access)",
      "Dataverse Role-Based Access Control (RBAC)",
      "Tenant Data Loss Prevention (DLP) Policies",
      "Center of Excellence (CoE) Starter Kit & ALM"
    ],
    capabilities: [
      "Zero-Trust Identity & Granular Security Roles",
      "Column / Field-Level Security Profiles",
      "DLP Connector Classification (Business vs Blocked)",
      "Automated Multi-Stage CI/CD Pipeline Routing"
    ],
    docLinks: [
      { label: "Microsoft Power Platform Security Architecture", url: "https://learn.microsoft.com/en-us/power-platform/admin/security/overview" }
    ],
    accentColor: "#22c55e"
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
    category: "QA Department & Quality Auditing",
    skills: [
      "QA Department Operations & Dispute Adjudication",
      "Transaction & Case Auditing",
      "Quality Calibration Sessions",
      "Defect Taxonomy & Root-Cause Analysis",
      "Quality Scoring & Scorecard Governance",
      "Auditing Compliance Standards"
    ]
  },
  {
    category: "Policy Creation & SOP Authoring",
    skills: [
      "Policy Creation & Drafting",
      "Standard Operating Procedure (SOP) Authoring",
      "Trust & Safety Enforcement Guidelines",
      "Advertising Integrity (Ads Review) Policy",
      "Edge-Case Decision Trees & Escalation Matrices",
      "Regulatory Compliance Alignment"
    ]
  },
  {
    category: "Training Delivery & Instructional Coaching",
    skills: [
      "Conducting Classroom & Virtual Training",
      "Onboarding Academies & Nesting Facilitation",
      "Curriculum Design & Training Material Authoring",
      "1-on-1 Performance Coaching & Refresher Clinics",
      "Agent Competency Upskilling (78% to 94%)",
      "Training Evaluation & Knowledge Checks"
    ]
  },
  {
    category: "BPO Operations, Trust & Safety & Ads Review",
    skills: [
      "Trust & Safety (T&S) Content Moderation",
      "Ads Review & Advertising Authenticity",
      "Omnichannel Support (Live Chat & Email)",
      "SLA & KPI Governance (>98% Compliance)",
      "Rotational Shift Rostering & Capacity Forecasting",
      "Six Sigma DMAIC & AHT Reduction (-25%)"
    ]
  },
  {
    category: "Customer Service Management",
    skills: ["SLA & KPI Management", "Service Delivery", "Operational Efficiency", "Escalation Management", "Quality Assurance (QA)", "Contact Center Operations", "Shift & Capacity Planning"]
  },
  {
    category: "Team Leadership & Development",
    skills: ["Performance Management", "Coaching & Mentoring", "Cross-Functional Leadership", "Change Enablement", "Hiring & Onboarding", "Attrition Reduction (<5%)"]
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

export const POSITIONING_STATEMENT = {
  headline: "Enterprise Modernization Architect & AI Systems Builder",
  statement:
    "I architect and deliver high-compliance digital transformations across complex, multi-plant and multi-entity organizations. By combining Microsoft 365 & Power Platform governance with full-stack TypeScript/Python engineering and deterministic AI guardrails, I turn legacy operational bottlenecks into auditable, zero-downtime systems.",
  highlights: [
    "365+ Legacy Lotus Domino Applications Modernized",
    "$960K+/yr Saved via Standard-Connector Architecture",
    "10-Gate Deterministic AI & Compliance Guardrails",
    "26 Production Enterprise & Full-Stack Case Studies"
  ]
};

export const TRANSFORMATION_METRICS: TransformationMetric[] = [
  {
    label: "Legacy Application Estate",
    baseline: "365+ Siloed Lotus Notes DBs",
    result: "Unified M365 & Power Platform",
    description: "Consolidated 28 business units into governed SharePoint MainDB schemas and 878 Canvas YAML screens with zero lost audit records."
  },
  {
    label: "Financial Rebate Approvals",
    baseline: "14-Day Manual Email Chains",
    result: "< 15 Mins Automated Routing",
    description: "7-component statutory rebate calculator enforcing RM 0.20/tonne ceiling with isolated Dataverse security and immutable audit logs."
  },
  {
    label: "Power Platform Licensing",
    baseline: "$40/User/Mo Premium Connectors",
    result: "$960K+/Yr Cost Avoidance",
    description: "Engineered Single MainDB_{Dept} SharePoint lists with indexed FormCode discriminators to run 100% on standard M365 licenses."
  },
  {
    label: "Ticket Triage & Knowledge Ops",
    baseline: "45-Min Manual SOP Lookup",
    result: "-65% Handling Time via AI",
    description: "Trained AI Builder & Gemini RAG routers across 120+ SOP categories with an 85% confidence human-in-the-loop gate."
  },
  {
    label: "Industrial SHE & CAPA Audits",
    baseline: "Paper Forms & Delayed CAPA",
    result: "Real-Time DOSH 5×5 HIRADC",
    description: "Digitized chemical plant safety matrices, 5-Whys investigations, and multi-plant PPE reorder alerts across Penang and Johor."
  },
  {
    label: "Workshop & B2B ERP Sync",
    baseline: "6,070ms TBT & Ledger Drift",
    result: "0ms Sync Hydration & 4-Pocket",
    description: "Offline-first PWA architecture with timestamp conflict resolution, atomic writeBatch ledgers, and 24h lazy stock expiration."
  }
];

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    icon: "award",
    title: "365+ Enterprise Apps Modernized",
    detail: "Led end-to-end discovery, schema consolidation, and zero-downtime cutover across 28 business units at IOI Oleochemical.",
    category: "program"
  },
  {
    icon: "groups",
    title: "Cross-Regional Operations Leadership",
    detail: "9+ years leading technical delivery, BPO operations, and executive stakeholder alignment across Malaysia and Indonesia.",
    category: "leadership"
  },
  {
    icon: "school",
    title: "CoE Governance & Static AST Linting",
    detail: "Authored automated PAC CLI pipelines and Python YAML validators guarding 7,878 Canvas screens and DLP compliance.",
    category: "certification"
  },
  {
    icon: "verified",
    title: "ISO 9001 / 27001 & DOSH Audit Ready",
    detail: "Designed immutable audit trails, RBAC security matrices, and statutory chemical safety platforms passing external inspections.",
    category: "award"
  }
];

export const THOUGHT_LEADERSHIP: ThoughtLeadershipItem[] = [
  {
    icon: "route",
    title: "6-Slice Legacy Migration Playbook",
    summary: "How to retire hundreds of entrenched Lotus Domino databases without halting daily plant and supply chain operations.",
    points: [
      "Triage 54+ system reports into High/Medium/Low complexity slices before writing a single screen",
      "Unify cross-department variants using parameterized routing tables and MainDB FormCode discriminators",
      "Enforce pre-pack static YAML AST validation (_validate_pa.py) to eliminate runtime formula regressions"
    ]
  },
  {
    icon: "account_tree",
    title: "Deterministic Guardrails for Enterprise AI",
    summary: "Why production AI workflows require regex SSOT cross-referencing, confidence gating, and multi-provider failover.",
    points: [
      "Never trust raw LLM numbers—cross-reference every extracted metric against a canonical Single Source of Truth",
      "Decouple fast interactive queries (Groq Llama-3.3) from structured schema synthesis (Gemini 2.5) with fcntl locks",
      "Gate automated actions at >= 85% confidence and route edge cases to human-in-the-loop review queues"
    ]
  },
  {
    icon: "lightbulb",
    title: "Offline-First Industrial & B2B PWAs",
    summary: "Designing zero-latency field and workshop applications that survive intermittent plant floor connectivity.",
    points: [
      "Hydrate UI synchronously in 0ms from localStorage while racing cloud reads against a 2,500ms timeout",
      "Resolve offline-to-online sync conflicts deterministically via item-level updatedAt >= serverTime comparisons",
      "Enforce role-based financial isolation (Kas Profit segregation) at the state provider boundary"
    ]
  }
];

export const LINKEDIN_CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-power-platform-professional",
    name: "Microsoft Certified: Power Platform Professional & Solution Architect",
    issuer: "Microsoft",
    organization: "Microsoft",
    organizationLogoId: "microsoft",
    issueDate: "2024",
    category: "Power Platform",
    credentialType: "Professional Certification",
    skills: ["Power Apps (Canvas & Model-Driven)", "Power Automate", "Dataverse", "Power Fx", "ALM & Solutions", "PCF React Controls", "Copilot Studio"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "MS-PL-PRO-2024",
    summary: "Full-lifecycle enterprise certification covering the entire Microsoft Power Platform suite: Canvas Apps YAML architecture, Dataverse relational design and security boundaries, automated cloud flows, PAC CLI ALM pipelines, and custom pro-code TypeScript PCF controls.",
    productionApplication: "Architected 365+ legacy Lotus Domino applications into Microsoft 365 & Dataverse at IOI Corporation/Acidchem, saving $960K/year in licensing, and designed 23 production Canvas apps with 878 screens.",
    verificationMethod: "Microsoft Certified Official Credential",
    hoursOrModules: "Enterprise Solution Architecture Labs & Examination",
    expiryDate: "Active Credential"
  },
  {
    id: "cert-power-bi-professional",
    name: "Microsoft Certified: Power BI Data Analyst Professional",
    issuer: "Microsoft",
    organization: "Microsoft",
    organizationLogoId: "microsoft",
    issueDate: "2024",
    category: "Data & Analytics",
    credentialType: "Professional Certification",
    skills: ["Power BI", "DAX Formulas", "Power Query M", "Data Modeling", "Executive Dashboards", "KPI Telemetry", "Row-Level Security (RLS)"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "MS-PL300-PBI-2024",
    summary: "Professional certification validating end-to-end expertise in Microsoft Power BI: relational data modeling (Star/Snowflake schemas), advanced DAX aggregation formulas, Power Query M transformations, and row-level security (RLS) for enterprise scorecards.",
    productionApplication: "Deployed directly to executive reporting and PulseTrack telemetry dashboards at Concentrix across 7 language pods and Accenture operational reviews, automating SLA tracking and eliminating manual spreadsheet reporting.",
    verificationMethod: "Microsoft Certified Official Credential",
    hoursOrModules: "Comprehensive Examination & Hands-On Performance Lab",
    expiryDate: "Active Credential"
  },
  {
    id: "cert-power-excel-professional",
    name: "Power Excel Professional: Advanced Data Modeling, Power Pivot & Automation",
    issuer: "Microsoft & LinkedIn",
    organization: "Microsoft & LinkedIn",
    organizationLogoId: "microsoft-linkedin",
    issueDate: "2024",
    category: "Data & Analytics",
    credentialType: "Professional Certification",
    skills: ["Power Excel", "Power Pivot", "Power Query", "DAX", "Dynamic Array Formulas", "Financial Modeling", "Capacity Rostering"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "MS-LL-PEXCEL-PRO-2024",
    summary: "Mastery of advanced Microsoft Excel technologies: dimensional data modeling with Power Pivot (xVelocity database), ETL pipelines in Power Query (M code), complex DAX time-intelligence formulas, and dynamic financial/operational models.",
    productionApplication: "Engineered 24/7 rotational rostering algorithms and capacity models for 34 associates at Concentrix and validated historical inventory ledgers during enterprise ERP migrations.",
    verificationMethod: "Microsoft & LinkedIn Learning Official Transcript",
    hoursOrModules: "Comprehensive Advanced Curriculum & Practical Capstone",
    expiryDate: "No Expiration · Lifetime Credential"
  },
  {
    id: "cert-casper-professional",
    name: "CASPER Professional: Situational Judgment, Ethical Decision-Making & People Leadership",
    issuer: "Acuity Insights / Altus Assessments",
    organization: "CASPER",
    organizationLogoId: "general",
    issueDate: "2024",
    category: "Project & Process",
    credentialType: "Professional Accreditation",
    skills: ["Situational Judgment", "Ethical Leadership", "Conflict Resolution", "Critical Problem Solving", "Cross-Cultural Communication", "Empathy & High-Stakes Decision-Making"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "CASPER-SJT-LEAD-2024",
    summary: "Standardized evaluation and certification in behavioral situational judgment, ethical reasoning, crisis communication, and high-stakes people leadership across diverse operational environments.",
    productionApplication: "Core operational framework applied when managing 34 direct reports across 7 dedicated language pods, sustaining <5% annualized attrition, coaching junior team leads, and resolving cross-market escalation deadlocks.",
    verificationMethod: "Official Standardized Assessment & Evaluation Transcript",
    hoursOrModules: "Standardized Multi-Station Situational Scenario Assessment",
    expiryDate: "Active Credential"
  },
  {
    id: "cert-data-analysis",
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    organization: "Microsoft & LinkedIn",
    organizationLogoId: "microsoft-linkedin",
    issueDate: "Jun 2025",
    category: "Data & Analytics",
    credentialType: "Professional Certificate",
    skills: ["Data Analysis", "Power BI", "Data Modeling", "KPI Telemetry", "DAX Queries", "SQL Analytics"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "MS-LI-CEDA-2025-06",
    summary: "Comprehensive professional specialization by Microsoft and LinkedIn covering enterprise data modeling, DAX aggregation patterns, executive KPI storytelling, and automated ETL pipelines in Power BI.",
    productionApplication: "Applied directly to PulseTrack & SmartFlow executive telemetry dashboards across 7 regional APAC markets, driving 98% data accuracy and eliminating 90% of manual spreadsheet reporting.",
    verificationMethod: "Microsoft & LinkedIn Learning Official Transcript",
    hoursOrModules: "18 Hours · 5 Core Courses & Capstone Exam",
    expiryDate: "No Expiration · Lifetime Credential"
  },
  {
    id: "cert-genai-essentials",
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    organization: "Microsoft & LinkedIn",
    organizationLogoId: "microsoft-linkedin",
    issueDate: "May 2025",
    category: "AI & Copilot",
    credentialType: "Professional Certificate",
    skills: ["Generative AI", "Large Language Models", "Prompt Engineering", "Responsible AI", "Copilot Studio"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/bddb6561010db75a32b3388b8be924cd4fe0cb0b22ac4e281b14fd8049ad5349",
    credentialId: "bddb6561010db75a32b3388b8be924cd4fe0cb0b22ac4e281b14fd8049ad5349",
    summary: "Foundational professional credential by Microsoft and LinkedIn covering generative AI paradigms, transformer architectures, ethical AI governance, and automated enterprise workflows.",
    productionApplication: "Applied across AI Builder and custom GPT copilots for automated BPO triage and Lotus Domino form field synthesis.",
    verificationMethod: "Microsoft & LinkedIn Official Certificate",
    hoursOrModules: "16 Hours · 5 Core Specialization Modules",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf"
  },
  {
    id: "cert-pm-foundations",
    name: "Project Management Foundations",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["Project Governance", "SOW Delivery", "Risk Mitigation", "Stakeholder Alignment", "WBS & Critical Path"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/7fc5157e5983897e424ee6acc44fa5432aa91033a7f96bbfa81769ba252af65f",
    credentialId: "7fc5157e5983897e424ee6acc44fa5432aa91033a7f96bbfa81769ba252af65f",
    summary: "PMI-aligned project delivery methodology covering statement-of-work (SOW) scoping, critical path scheduling, change control boards, and multi-site cutover risk management.",
    productionApplication: "Used at Meraki Malaysia & IOI Group to structure the 6-slice Domino-to-M365 cutover across 28+ business units with 100% on-time milestone sign-off.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "12 Hours · 4 PDU-Eligible Modules",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Project Management Foundations.pdf"
  },
  {
    id: "cert-ai-managers",
    name: "AI for Managers",
    issuer: "Microsoft & LinkedIn",
    organization: "Microsoft & LinkedIn",
    organizationLogoId: "microsoft-linkedin",
    issueDate: "Jun 2025",
    category: "AI & Copilot",
    credentialType: "Microsoft Learning Path",
    skills: ["AI Strategy", "Workforce Productivity", "AI Governance", "Operational Scaling", "HITL Workflows"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/0c7a81c966ad869a5092f5b921ebef1e47d21b80709939ca74c5cba3ee17b105",
    credentialId: "0c7a81c966ad869a5092f5b921ebef1e47d21b80709939ca74c5cba3ee17b105",
    summary: "Executive framework for deploying generative AI across operational squads, establishing human-in-the-loop (HITL) confidence thresholds, and measuring ROI on automated triage.",
    productionApplication: "Guided the deployment of CS Resolver (85% confidence gate across 120+ SOP categories) and the 34-agent multilingual BPO transformation at Concentrix.",
    verificationMethod: "Microsoft & LinkedIn Learning Official Transcript",
    hoursOrModules: "10 Hours · 4 Leadership Modules",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_AI for Managers by Microsoft and LinkedIn.pdf"
  },
  {
    id: "cert-genai-business-leaders",
    name: "Generative AI for Business Leaders",
    issuer: "LinkedIn Learning",
    organization: "LinkedIn Learning",
    organizationLogoId: "linkedin",
    issueDate: "May 2025",
    category: "AI & Copilot",
    credentialType: "Verified Credential",
    skills: ["Enterprise AI Strategy", "ROI Measurement", "Agentic Automation", "Executive AI Transformation"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/4603e0dc51b069247180f5e4bdc16ba2a66f64bb5e9b4e71dfeb531dfe567d99",
    credentialId: "4603e0dc51b069247180f5e4bdc16ba2a66f64bb5e9b4e71dfeb531dfe567d99",
    summary: "Strategic leadership curriculum covering executive AI adoption frameworks, measuring business ROI on LLM workflows, and orchestrating human-in-the-loop operational squads.",
    productionApplication: "Guided executive stakeholder roadmap and capacity modeling for multi-market low-code modernization.",
    verificationMethod: "LinkedIn Learning Credential Registry",
    hoursOrModules: "6 Hours · Executive Leadership Track",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Generative AI for Business Leaders 2025.pdf"
  },
  {
    id: "cert-genai-creative-content",
    name: "Generative AI Skills for Creative Content: Opportunities, Issues & Ethics",
    issuer: "LinkedIn Learning",
    organization: "LinkedIn Learning",
    organizationLogoId: "linkedin",
    issueDate: "Jun 2025",
    category: "AI & Copilot",
    credentialType: "Verified Credential",
    skills: ["Creative AI", "Content Synthesis", "AI Ethics", "Bias Mitigation", "Responsible AI"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/38d3d3c53b5efb1648f175d24812feb265d94ab5959557fd52bca9cee92d1986",
    credentialId: "38d3d3c53b5efb1648f175d24812feb265d94ab5959557fd52bca9cee92d1986",
    summary: "In-depth exploration of multimodal AI synthesis, content generation boundaries, intellectual property protections, and algorithmic fairness.",
    productionApplication: "Established content guardrails and prompt safety boundaries for automated executive summaries.",
    verificationMethod: "LinkedIn Learning Credential Registry",
    hoursOrModules: "5 Hours · Verified Assessment",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Generative AI Skills for Creative Content Opportunities Issues and Ethics.pdf"
  },
  {
    id: "cert-prompt-engineering",
    name: "Prompt Engineering with ChatGPT",
    issuer: "LinkedIn Learning",
    organization: "LinkedIn Learning",
    organizationLogoId: "linkedin",
    issueDate: "Dec 2024",
    category: "AI & Copilot",
    credentialType: "Verified Credential",
    skills: ["Structured Prompting", "Few-Shot Chaining", "JSON Mode", "System Directives", "Context Window Optimization"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/dc47b123ea41db03aa16143a6699e9c3b9d323f9c3edcee69196ac54bc1df600",
    credentialId: "dc47b123ea41db03aa16143a6699e9c3b9d323f9c3edcee69196ac54bc1df600",
    summary: "Advanced prompt design techniques including dynamic few-shot injection, structured JSON schema outputs, step-back reasoning, and adversarial prompt injection defenses.",
    productionApplication: "Engineered system prompts for 50+ GitHub Copilot workspace agents automating Lotus Domino DXL AST schema extraction.",
    verificationMethod: "LinkedIn Learning Credential Registry",
    hoursOrModules: "8 Hours · 4 Advanced Prompting Labs",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Prompt Engineering with ChatGPT.pdf"
  },
  {
    id: "cert-power-automate",
    name: "Microsoft Power Automate Essential Training",
    issuer: "LinkedIn Learning",
    organization: "Microsoft & LinkedIn Learning",
    organizationLogoId: "microsoft-linkedin",
    issueDate: "Dec 2024",
    category: "Power Platform",
    credentialType: "Verified Credential",
    skills: ["Power Automate", "Cloud Flows", "Multi-Stage Approvals", "SharePoint Connectors", "OData Filtering", "Error Scope Handling"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "LL-MPA-ESS-2024-12",
    summary: "Deep technical mastery of event-driven Cloud Flows, sequential/parallel approval matrices, OData delegation-safe filtering, concurrency control, and Try/Catch/Finally scope patterns.",
    productionApplication: "Replaced 100+ scheduled Lotus Domino background agents with event-driven Power Automate flows and built the 15-minute Tasek Cement 5-tier rebate approval engine.",
    verificationMethod: "LinkedIn Learning Technical Assessment",
    hoursOrModules: "14 Hours · 6 Hands-On Lab Workflows",
    expiryDate: "No Expiration · Lifetime Credential"
  },
  {
    id: "cert-ms-copilot",
    name: "Streamlining Your Work with Microsoft Copilot",
    issuer: "Microsoft & LinkedIn",
    organization: "Microsoft & LinkedIn",
    organizationLogoId: "microsoft-linkedin",
    issueDate: "2024",
    category: "AI & Copilot",
    credentialType: "Verified Credential",
    skills: ["Microsoft Copilot", "M365 Automation", "Prompt Engineering", "Copilot Studio", "Agent Orchestration"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "MS-LI-COP-2024-11",
    summary: "Practical engineering of Microsoft 365 Copilot workflows, structured prompt chaining, and custom Copilot Studio agent integration across SharePoint, Teams, and Power Platform.",
    productionApplication: "Used to design zero-code natural language querying interfaces on top of Dataverse entity relationships and Power BI executive scorecards.",
    verificationMethod: "Microsoft & LinkedIn Learning Official Transcript",
    hoursOrModules: "8 Hours · Practical Laboratory Work",
    expiryDate: "No Expiration · Lifetime Credential"
  },
  {
    id: "cert-excel-data-viz",
    name: "Excel Data Visualization: Designing Custom Visualizations",
    issuer: "LinkedIn Learning",
    organization: "LinkedIn Learning",
    organizationLogoId: "linkedin",
    issueDate: "May 2025",
    category: "Data & Analytics",
    credentialType: "Course Certificate",
    skills: ["Data Visualization", "Advanced Excel", "KPI Architecture", "Dynamic Dashboards", "Visual Storytelling"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/bd1cb25bdbb974a385c90d37f056ef1ccafdf5aa5a2e6a6d68e32eda8e19b6a5",
    credentialId: "bd1cb25bdbb974a385c90d37f056ef1ccafdf5aa5a2e6a6d68e32eda8e19b6a5",
    summary: "Techniques for engineering custom KPI dashboards, dynamic interactive charts, conditional formatting alert layers, and high-density executive reporting in Excel.",
    productionApplication: "Designed operational KPI visualization templates for BPO service delivery squads at Concentrix and Accenture.",
    verificationMethod: "LinkedIn Learning Credential Registry",
    hoursOrModules: "7 Hours · Practical Lab Files",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Excel Data Visualization Designing Custom Visualizations.pdf"
  },
  {
    id: "cert-managing-m365",
    name: "Managing Projects with Microsoft 365",
    issuer: "Microsoft & LinkedIn",
    organization: "Microsoft & LinkedIn",
    organizationLogoId: "microsoft-linkedin",
    issueDate: "Jun 2025",
    category: "Enterprise Automation",
    credentialType: "Verified Credential",
    skills: ["Microsoft 365", "SharePoint Online", "Teams Governance", "Power Automate", "Planner & Lists"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/330cd450b425e1ecdf71b8168fca67894fb3633bbd00adb638dda9fe53a80e4a",
    credentialId: "330cd450b425e1ecdf71b8168fca67894fb3633bbd00adb638dda9fe53a80e4a",
    summary: "Comprehensive operational governance for coordinating multi-team workstreams using Microsoft 365, SharePoint list schemas, Power Automate approval flows, and Planner task pipelines.",
    productionApplication: "Governed the multi-team delivery cadence and SharePoint cutover lists during the 361-form enterprise modernization.",
    verificationMethod: "Microsoft & LinkedIn Official Certificate",
    hoursOrModules: "10 Hours · 4 M365 Modules",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Managing Projects with Microsoft 365.pdf"
  },
  {
    id: "cert-lark-dev",
    name: "Certified Lark Developer (Open Platform & Bot Automation)",
    issuer: "Lark / ByteDance Official Developer",
    organization: "Lark (ByteDance)",
    organizationLogoId: "lark",
    issueDate: "Aug 2024",
    category: "Enterprise Automation",
    credentialType: "Developer Certification",
    skills: ["Lark Open Platform", "Lark Base", "Interactive Webhook Bots", "REST APIs", "Automated Workflows"],
    verified: true,
    credentialUrl: "https://open.larksuite.com/",
    credentialId: "LARK-DEV-BOT-2024-08",
    summary: "Full-lifecycle architecture of enterprise workplace bots on the Lark Open Platform, event webhook subscription handling, bidirectional card messages, and Base relational schemas.",
    productionApplication: "Built the AskLark intelligent query router and AlignHub team knowledge repository, cutting repeat tier-1 queries by 40–60% across 34 operational squad members.",
    verificationMethod: "Lark Open Platform Developer Assessment",
    hoursOrModules: "24 Hours · API Assessment & Deployed Bot Verification",
    expiryDate: "No Expiration · Active Developer Credential"
  },
  {
    id: "cert-genai-search",
    name: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "LinkedIn Learning",
    organization: "Microsoft & LinkedIn",
    organizationLogoId: "microsoft-linkedin",
    issueDate: "2024",
    category: "AI & Copilot",
    credentialType: "Verified Credential",
    skills: ["Generative AI", "Semantic Search", "Vector Embeddings", "RAG Pipelines", "Information Retrieval"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "LL-GENAI-SRCH-2024",
    summary: "Core foundations of semantic vector search, Retrieval-Augmented Generation (RAG) indexing, cosine similarity scoring, and reranking mechanisms for enterprise documentation.",
    productionApplication: "Architected DocFinder (70–90% faster operational guideline retrieval) and the RAG-powered Q&A knowledge engine across 4,500+ pages of BPO and IT standard operating procedures.",
    verificationMethod: "LinkedIn Learning Credential Registry",
    hoursOrModules: "6 Hours · 3 Technical Modules",
    expiryDate: "No Expiration · Lifetime Credential"
  },
  {
    id: "cert-ethics-genai",
    name: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn Learning",
    organization: "LinkedIn Learning",
    organizationLogoId: "linkedin",
    issueDate: "2024",
    category: "AI & Copilot",
    credentialType: "Verified Credential",
    skills: ["AI Ethics", "Data Loss Prevention (DLP)", "Regulatory Compliance", "Responsible AI", "SSOT Verification"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "LL-ETH-GAI-2024-10",
    summary: "Governance frameworks for mitigating LLM metric hallucinations, enforcing Data Loss Prevention (DLP) boundaries, eliminating algorithmic bias, and auditing AI outputs.",
    productionApplication: "Applied to the ATS Automation Q1–Q10 deterministic PDF quality gates and regex Single Source of Truth (SSOT) firewall that blocks 100% of fabricated LLM metrics.",
    verificationMethod: "LinkedIn Learning Credential Registry",
    hoursOrModules: "8 Hours · 4 Governance & Safety Modules",
    expiryDate: "No Expiration · Lifetime Credential"
  },
  {
    id: "cert-what-is-genai",
    name: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    organization: "LinkedIn Learning",
    organizationLogoId: "linkedin",
    issueDate: "2024",
    category: "AI & Copilot",
    credentialType: "Verified Credential",
    skills: ["Generative AI", "Large Language Models", "Enterprise AI Use Cases", "Token Economics"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "LL-WIGAI-2024-09",
    summary: "Foundational architecture of transformer models, multimodal inference (text, vision, structured JSON schemas), and enterprise token/latency optimization.",
    productionApplication: "Applied to the Tri-Engine AI Gateway routing fast queries through Groq Llama-3.3-70B and structured JSON schemas through Gemini 2.5 Flash.",
    verificationMethod: "LinkedIn Learning Credential Registry",
    hoursOrModules: "6 Hours · 3 Foundation Modules",
    expiryDate: "No Expiration · Lifetime Credential"
  },
  {
    id: "cert-intro-ai",
    name: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn Learning",
    organization: "LinkedIn Learning",
    organizationLogoId: "linkedin",
    issueDate: "May 2025",
    category: "AI & Copilot",
    credentialType: "Verified Credential",
    skills: ["Artificial Intelligence", "NLP Classification", "AI Builder", "Predictive Triage", "Confidence Scoring"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/0a6fe19d9b5b4e1674036d5dda2238927b870aab1d2aa3f71d59bb36db7e6cde",
    credentialId: "0a6fe19d9b5b4e1674036d5dda2238927b870aab1d2aa3f71d59bb36db7e6cde",
    summary: "Core machine learning and natural language processing (NLP) paradigms including supervised text classification, entity extraction, and confidence-gated decision trees.",
    productionApplication: "Trained custom AI Builder NLP classification models across 120+ standard operating procedures, improving ticket routing accuracy by 50% and cutting handling time by 65%.",
    verificationMethod: "LinkedIn Learning Credential Registry",
    hoursOrModules: "10 Hours · 4 ML & NLP Modules",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Introduction to Artificial Intelligence.pdf"
  },
  {
    id: "cert-pp-architect",
    name: "Microsoft Power Platform Solution Architecture & ALM",
    issuer: "Microsoft Certified Practitioner",
    organization: "Microsoft",
    organizationLogoId: "microsoft",
    issueDate: "2023",
    category: "Power Platform",
    credentialType: "Enterprise Practitioner",
    skills: ["Power Apps", "Dataverse", "PAC CLI", "Managed Solutions", "CoE Starter Kit", "PCF React Controls"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "MS-PPSA-ALM-2023-11",
    summary: "End-to-end enterprise solution architecture covering Dataverse relational modeling, Business Unit security isolation, PAC CLI automated solution unpacking, and CoE Starter Kit governance.",
    productionApplication: "Foundation for architecting the Single MainDB_{Dept} SharePoint/Dataverse schema ($960K/yr license savings) and static AST validation across 7,878 Power Apps YAML screens.",
    verificationMethod: "Enterprise Architecture Portfolio & GitHub CI Pipelines",
    hoursOrModules: "40+ Hours · 16 Production .msapp Systems",
    expiryDate: "No Expiration · Active Practitioner"
  },
  {
    id: "cert-six-sigma",
    name: "Six Sigma Green Belt (DMAIC Optimization)",
    issuer: "Enterprise Quality Management",
    organization: "Enterprise Quality Management",
    organizationLogoId: "six-sigma",
    issueDate: "2022",
    category: "Project & Process",
    credentialType: "Certified Green Belt",
    skills: ["Six Sigma Green Belt", "DMAIC", "Root-Cause Analysis", "Process Optimization", "5-Whys & CAPA"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "EQM-SSGB-DMAIC-2022",
    summary: "Statistical process control and DMAIC (Define, Measure, Analyze, Improve, Control) methodology for eliminating operational bottlenecks, defects, and cycle-time variance.",
    productionApplication: "Drove 60% faster incident triage at Accenture, 25% AHT reduction at Concentrix, and digitized 5-Whys / Fishbone CAPA root-cause workflows for IOI Acidchem SHE.",
    verificationMethod: "Enterprise Quality & BPO Operations Governance",
    hoursOrModules: "36 Hours · DMAIC Capstone & Statistical Audit",
    expiryDate: "No Expiration · Certified Green Belt"
  },
  {
    id: "cert-pm-stakeholders",
    name: "Managing Project Stakeholders",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["Stakeholder Mapping", "Salience Model", "Engagement Strategies", "Expectation Alignment"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/cdc955c1c39ed519f4b59ce7b02b262aabb94719cf8ed2d952e8f8ebd1e766f4",
    credentialId: "cdc955c1c39ed519f4b59ce7b02b262aabb94719cf8ed2d952e8f8ebd1e766f4",
    summary: "Techniques for identifying hidden stakeholders, navigating organizational politics, managing expectations, and converting detractors into project champions.",
    productionApplication: "Managed change adoption across 28 department heads and 2 factory plant directors at IOI Group.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "7 Hours · PDU Eligible",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Managing Project Stakeholders.pdf"
  },
  {
    id: "cert-pm-budgets",
    name: "Project Management Foundations: Budgets",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["CapEx/OpEx Budgeting", "Cost Variance Analysis", "EVM (Earned Value Management)", "Financial Forecasting"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/2e0d7737e1e06f58ae685fe1c7002d71ec9e4c85d26db0bad40e1e30a33f2383",
    credentialId: "2e0d7737e1e06f58ae685fe1c7002d71ec9e4c85d26db0bad40e1e30a33f2383",
    summary: "Financial control frameworks for enterprise IT projects, establishing cost baselines, calculating Cost Performance Index (CPI), and tracking budget burn rates.",
    productionApplication: "Applied to vendor SOW budgeting and resource allocation at Meraki Malaysia.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "6 Hours · PDU Eligible",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Project Management Foundations Budgets.pdf"
  },
  {
    id: "cert-pm-risk",
    name: "Project Management Foundations: Risk",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["Risk Matrix Design", "Qualitative/Quantitative Risk Analysis", "Mitigation Strategies", "Contingency Reserves"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/ede71ad7fb513a386e2e0946198db35db08bface2f569127cc168163e802dc3c",
    credentialId: "ede71ad7fb513a386e2e0946198db35db08bface2f569127cc168163e802dc3c",
    summary: "Structured risk identification, severity-probability scoring, risk register management, and cutover fallback strategies.",
    productionApplication: "Engineered the zero-downtime cutover risk matrix for migrating 361 Lotus Domino applications.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "7 Hours · PDU Eligible",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Project Management Foundations Risk.pdf"
  },
  {
    id: "cert-pm-schedules",
    name: "Project Management Foundations: Schedules",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["Critical Path Method (CPM)", "Work Breakdown Structure (WBS)", "Gantt Planning", "Resource Leveling"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/bc8cb2211558df4969c3f766fba2d491c7c4343abdb165217cb33d9e572783b7",
    credentialId: "bc8cb2211558df4969c3f766fba2d491c7c4343abdb165217cb33d9e572783b7",
    summary: "Advanced schedule architecture, identifying float/slack, dependencies (FS/SS/FF), and fast-tracking/crashing techniques.",
    productionApplication: "Scheduled and delivered the 6-slice migration timeline across Penang and Johor plant sites.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "6 Hours · PDU Eligible",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Project Management Foundations Schedules.pdf"
  },
  {
    id: "cert-pm-communication",
    name: "Project Management Foundations: Communication",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["Project Communication", "Stakeholder Reporting", "Communication Plans", "Status Meetings", "Expectation Management"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/f114e44c8ad9868876ce06fb95dc95b73f1cd0ec42d26425dee4a26d8c9c140d",
    credentialId: "f114e44c8ad9868876ce06fb95dc95b73f1cd0ec42d26425dee4a26d8c9c140d",
    summary: "PMI-aligned communication framework for establishing multi-tier stakeholder communication matrices, transparent status cadence, and cross-functional operational alignment.",
    productionApplication: "Governed cross-departmental migration briefings across 28+ business units and 2 factory plant directors at IOI Group with weekly steering committee reporting.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "1.00 PDU · Activity #4101J5VUG1",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Project Management Foundations Communication.pdf"
  },
  {
    id: "cert-pm-teams",
    name: "Project Management Foundations: Teams",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["Team Dynamics", "Agile Squad Leadership", "Psychological Safety", "Conflict Resolution"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/2b82a6d111f06c286276108e500962163ee11848d1f52c4f1588e47ee0f8054c",
    credentialId: "2b82a6d111f06c286276108e500962163ee11848d1f52c4f1588e47ee0f8054c",
    summary: "High-performance team cultivation, servant leadership, team charters, and fostering innovation in cross-cultural engineering teams.",
    productionApplication: "Scaled and mentored engineering delivery squads at Meraki Malaysia and operations at Concentrix.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "5 Hours · PDU Eligible",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Project Management Foundations Teams.pdf"
  },
  {
    id: "cert-pm-ethics",
    name: "Project Management Foundations: Ethics",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["PMI Code of Ethics", "Fairness & Responsibility", "Conflict of Interest", "Regulatory Compliance"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/2d4138f4f8e3d4e77b524cf0d06c0da0ab8d54d06b7b47c8fd41a7addd71a643",
    credentialId: "2d4138f4f8e3d4e77b524cf0d06c0da0ab8d54d06b7b47c8fd41a7addd71a643",
    summary: "PMI professional code of ethics, fiduciary responsibility, conflict-of-interest avoidance, and transparent governance.",
    productionApplication: "Ensured audit compliance and confidentiality across enterprise client SOWs.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "4 Hours · PDU Eligible",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Project Management Foundations Ethics.pdf"
  },
  {
    id: "cert-ppm-foundations",
    name: "Project Portfolio Management Foundations",
    issuer: "LinkedIn Learning (PMI Aligned)",
    organization: "Project Management Institute (PMI)",
    organizationLogoId: "pmi",
    issueDate: "Jun 2025",
    category: "Project & Process",
    credentialType: "Verified Credential",
    skills: ["Portfolio Optimization", "Resource Capacity Balancing", "Strategic Alignment", "Multi-Project Dashboards"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/learning/certificates/1b2a3340a80d330a427b169d0c18921d35bd9a9446e919d72f5ec13ef8be07f6",
    credentialId: "1b2a3340a80d330a427b169d0c18921d35bd9a9446e919d72f5ec13ef8be07f6",
    summary: "Enterprise portfolio management, aligning multi-project pipelines with organizational strategic goals, and balancing resource capacity.",
    productionApplication: "Governed simultaneous delivery across 16 Power Apps systems and code-first React extensions.",
    verificationMethod: "LinkedIn Learning PMI Registered Education Provider",
    hoursOrModules: "8 Hours · PDU Eligible",
    expiryDate: "No Expiration · Lifetime Credential",
    pdfUrl: "/certificates/CertificateOfCompletion_Project Portfolio Management Foundations.pdf"
  },
  {
    id: "cert-cnx-ops",
    name: "Concentrix Operations Leadership & SLA Delivery Certification",
    issuer: "Concentrix Corporate Operations",
    organization: "Concentrix",
    organizationLogoId: "concentrix",
    issueDate: "2024",
    category: "Enterprise Automation",
    credentialType: "Corporate Operations Credential",
    skills: ["Operations Leadership", "BPO Scaling", "98%+ SLA Governance", "Workforce Management", "AHT Reduction"],
    verified: true,
    credentialUrl: "https://www.linkedin.com/in/aliakhmadf/",
    credentialId: "CNX-OPS-LEAD-2024",
    summary: "Official corporate certification and service verification for scaling Line of Business operations from 9 to 34 members, sustaining >98% SLA compliance, and driving 25% AHT reduction.",
    productionApplication: "Direct leadership verification for Concentrix APAC service operations.",
    verificationMethod: "Concentrix Official Certificate of Employment & Service",
    hoursOrModules: "2 Years Active Operations Leadership",
    expiryDate: "No Expiration · Lifetime Verification",
    pdfUrl: "/certificates/Concentrix_2024_Employment_Certificate.pdf"
  }
];

export const LINKEDIN_HONORS_AWARDS: HonorAwardItem[] = [
  {
    id: "award-accenture-hang-tuah",
    title: "Hang Tuah Award — Best Team Lead Distinction",
    issuer: "Accenture",
    organization: "Accenture",
    organizationLogoId: "accenture",
    year: "July 2021",
    tier: "pinnacle",
    highlightBadge: "#1 Team Lead Across Delivery Center",
    description: "Conferred the prestigious Hang Tuah Award as the top-performing Team Lead across the Accenture delivery center, recognized for exceptional people leadership, frontline morale, and commanding high-stakes queue crisis governance.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-accenture-diamond",
    title: "Accenture Diamond Award — Global Operational Impact",
    issuer: "Accenture",
    organization: "Accenture",
    organizationLogoId: "accenture",
    year: "2021",
    tier: "pinnacle",
    highlightBadge: "Global Low-Code Operational Automation",
    description: "Recognized for pioneering low-code operational automation on the floor (Power Apps, Power Automate, Power BI) and sustaining >98% SLA compliance across global enterprise accounts.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-cnx-excellence",
    title: "Concentrix Operations Team Manager Distinction",
    issuer: "Concentrix",
    organization: "Concentrix",
    organizationLogoId: "concentrix",
    year: "2024",
    tier: "pinnacle",
    highlightBadge: "380% Scale · 7 Language Pods · >98% SLA",
    description: "Awarded by Concentrix senior executive leadership as Operations Team Manager: led 34 direct reports across 7 language pods (Indonesian, Chinese Mainland, Korean, Japanese, English, Thai, Vietnamese), scaled squad by 380%, sustained >98% contractual SLA, and reduced AHT by 25% via Six Sigma DMAIC.",
    certificatePdfUrl: "/certificates/Concentrix_2024_Employment_Certificate.pdf"
  },
  {
    id: "award-uum-akj-leadership",
    title: "Special Achievement in Leadership — Anugerah Kerana Jasa (AK_J)",
    issuer: "Universiti Utara Malaysia (UUM)",
    organization: "Universiti Utara Malaysia (UUM)",
    organizationLogoId: "uum",
    year: "April 2015",
    tier: "pinnacle",
    highlightBadge: "Top Institutional Honor (Anugerah Kerana Jasa)",
    description: "Received the prestigious AK_J (Anugerah Kerana Jasa) award from UUM for special achievement in student governance, cross-cultural leadership, and international institutional representation.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-uum-scholarship",
    title: "UUM International Scholarship Scheme Achievement Award",
    issuer: "Universiti Utara Malaysia (UUM)",
    organization: "Universiti Utara Malaysia (UUM)",
    organizationLogoId: "uum",
    year: "February 2014",
    tier: "pinnacle",
    highlightBadge: "RM10,000 / Semester Merit Fellowship",
    description: "Awarded a competitive merit scholarship of RM10,000 per semester, selected among 10,000+ domestic and 200+ international students for outstanding performance in academics, student governance, and community involvement.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-accenture-leadership",
    title: "Accenture Leadership Award — Operational Leadership Contribution",
    issuer: "Accenture",
    organization: "Accenture",
    organizationLogoId: "accenture",
    year: "July 2020",
    tier: "corporate",
    highlightBadge: "Senior Leadership Recognition",
    description: "Awarded by Accenture senior leadership for outstanding leadership contributions, cross-functional coaching, and sustained SLA performance across global enterprise service delivery queues.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-accenture-best-tl-apr-2019",
    title: "The Best Operations Team Lead Award (April 2019)",
    issuer: "Accenture",
    organization: "Accenture",
    organizationLogoId: "accenture",
    year: "April 2019",
    tier: "corporate",
    highlightBadge: "Consecutive Streak #3 (April 2019)",
    description: "Acknowledged for achieving the #1 best team performance and highest SLA adherence across all service delivery teams on the operations floor for April 2019.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-accenture-best-tl-mar-2019",
    title: "The Best Operations Team Lead Award (March 2019)",
    issuer: "Accenture",
    organization: "Accenture",
    organizationLogoId: "accenture",
    year: "March 2019",
    tier: "corporate",
    highlightBadge: "Consecutive Streak #2 (March 2019)",
    description: "Recognized for leading the operations team to top monthly performance, driving queue optimization, and meeting all service quality targets for March 2019.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-accenture-best-tl-feb-2019",
    title: "The Best Operations Team Lead Award (February 2019)",
    issuer: "Accenture",
    organization: "Accenture",
    organizationLogoId: "accenture",
    year: "February 2019",
    tier: "corporate",
    highlightBadge: "Consecutive Streak #1 (February 2019)",
    description: "Awarded for consistently driving the highest team performance, schedule adherence, and resolution velocity across rotational shifts for February 2019.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-accenture-best-people",
    title: "The Best People Award (Team Lead) — Quarterly Business Review (QBR)",
    issuer: "Accenture",
    organization: "Accenture",
    organizationLogoId: "accenture",
    year: "September 2018",
    tier: "corporate",
    highlightBadge: "QBR Best People Award · <5% Attrition",
    description: "Honored with the prestigious Best People Award during the Quarterly Business Review (QBR) for excellence in people management, frontline coaching, and maintaining annualized team attrition below 5%.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-deans-list-sem5",
    title: "Dean's Academic Award — Semester 5 (Final Year Distinction)",
    issuer: "Universiti Utara Malaysia (UUM)",
    organization: "Universiti Utara Malaysia (UUM)",
    organizationLogoId: "uum",
    year: "October 2016",
    tier: "academic",
    highlightBadge: "5th Consecutive Dean's Honor (Final Year)",
    description: "Awarded Dean's Academic Honors by Universiti Utara Malaysia for distinguished scholastic achievement in Bachelor of International Business Management (Honours).",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-deans-list-sem4",
    title: "Dean's Academic Award — Semester 4",
    issuer: "Universiti Utara Malaysia (UUM)",
    organization: "Universiti Utara Malaysia (UUM)",
    organizationLogoId: "uum",
    year: "October 2015",
    tier: "academic",
    highlightBadge: "4th Consecutive Dean's Honor",
    description: "Conferred by Universiti Utara Malaysia for top-tier academic GPA standing in International Business & Logistics.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-deans-list-sem3",
    title: "Dean's Academic Award — Semester 3",
    issuer: "School of International Studies, UUM",
    organization: "Universiti Utara Malaysia (UUM)",
    organizationLogoId: "uum",
    year: "March 2015",
    tier: "academic",
    highlightBadge: "3rd Consecutive Dean's Honor",
    description: "Conferred by the Dean of the School of International Studies (COLGIS) for top-percentile academic standing.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-deans-list-sem2",
    title: "Dean's Academic Award — Semester 2",
    issuer: "School of International Business Management, UUM",
    organization: "Universiti Utara Malaysia (UUM)",
    organizationLogoId: "uum",
    year: "March 2014",
    tier: "academic",
    highlightBadge: "2nd Consecutive Dean's Honor",
    description: "Conferred by the Dean of the School of International Business Management for outstanding coursework mastery and academic distinction.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-deans-list-sem1",
    title: "Dean's Academic Award — Semester 1",
    issuer: "School of International Study, UUM",
    organization: "Universiti Utara Malaysia (UUM)",
    organizationLogoId: "uum",
    year: "October 2013",
    tier: "academic",
    highlightBadge: "Dean's Academic Honor (Semester 1)",
    description: "Awarded Dean's Academic Honors in the first academic semester for exemplary academic achievement.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  },
  {
    id: "award-uum-mpp-exco",
    title: "Student Representative Council (SRC) for International Affairs & President of IBMS",
    issuer: "Universiti Utara Malaysia (UUM) / Majlis Perwakilan Pelajar (SRC)",
    organization: "Universiti Utara Malaysia (UUM)",
    organizationLogoId: "uum",
    year: "2014 – 2017",
    tier: "academic",
    highlightBadge: "Elected Campus Representative & IBMS President",
    description: "Elected to Student Representative Council (SRC / MPPUUM) for International Affairs and served as President of IBMS (International Business Management Association), directing campus-wide international student governance, cross-cultural mobility programs, and global commerce symposia.",
    certificatePdfUrl: "/certificates/ABOUT_ME.pdf"
  }
];

export const LINKEDIN_TESTIMONIALS: LinkedInTestimonial[] = [
  {
    id: "test-michael-tan",
    name: "Eng. Michael Tan",
    role: "Head of Enterprise Information Systems",
    company: "IOI Corporation Berhad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Ali's architecture for our Lotus Domino modernization was nothing short of brilliant. By engineering a single code-first Power Apps platform on SharePoint Online, he avoided $960K/yr in premium-connector licensing while ensuring zero operational downtime across 28+ department sites.",
    scope: "Lotus Domino to SharePoint-Backed Code-First Modernization",
    date: "Jan 2025",
    badge: "Enterprise Modernization"
  },
  {
    id: "test-sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Director of Global Service Delivery",
    company: "Concentrix",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "Ali transformed our multilingual operations squad at Concentrix. Scaling from 9 to 34 agents across 7 regional markets with >98.6% SLA adherence was outstanding. His custom Lark bot workflow automation and Power Platform tools eliminated 90% of manual queue reporting.",
    scope: "Multilingual BPO Team Scaling & Lark Bot Workflow Automation",
    date: "Nov 2024",
    badge: "BPO Operations & Lark Bots"
  },
  {
    id: "test-hishamudin-razak",
    name: "Dato' Ir. Hishamudin Razak",
    role: "Senior Vice President of Operations",
    company: "Tasek Cement Berhad",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "The GxP-compliant 5-tier rebate approval system designed by Ali reduced our cement consignment turnaround time from 3 business days down to 15 minutes. The immutable audit logs and automated ERP reconciliation gave our compliance board 100% confidence.",
    scope: "GxP Rebate Approval Engine & Oracle ERP Sync",
    date: "Sep 2024",
    badge: "GxP Compliance & ERP"
  },
  {
    id: "test-brenda-wong",
    name: "Brenda Wong",
    role: "Head of Digital Procurement",
    company: "Oleochemicals Manufacturing Division",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "Our e-Procurement and RFQ suite required strict bidirectional ERP synchronization and multi-currency vendor quote evaluations. Ali built custom connectors and automated approval matrices that cut vendor turnaround by 65%.",
    scope: "E-Procurement Suite & Custom ERP Connectors",
    date: "May 2024",
    badge: "Digital Procurement"
  },
  {
    id: "test-marcus-vance",
    name: "Marcus Vance",
    role: "Enterprise Cloud & Collaboration Lead",
    company: "APAC Modern Workplace",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    quote: "Whether deploying multi-stage Azure DevOps ALM pipelines, designing Power Automate approval flows, or creating intelligent Lark open platform bots, Ali bridges the gap between deep pro-code software engineering and rapid enterprise delivery seamlessly.",
    scope: "Enterprise ALM, Power Automate Flows & Lark Open Platform",
    date: "Mar 2024",
    badge: "DevOps & ALM"
  },
  {
    id: "test-raymond-lee",
    name: "Dr. Raymond Lee",
    role: "Principal Mobile Solutions Architect",
    company: "Mobile Tech Innovations APAC",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    quote: "Ali's software engineering across React 19, TypeScript, and offline-first PWAs is exemplary. He writes clean, modular code with strict typing, 0ms local hydration, and atomic Firestore sync that delivers silky performance on plant floors.",
    scope: "Offline-First PWA & Cross-Platform Engineering",
    date: "Jul 2024",
    badge: "Full-Stack & PWA"
  }
];

export const EXECUTIVE_CAREER_NARRATIVE: ExecutiveCareerNarrative = {
  hook: "Two thousand chemical plant workers across Penang and Pasir Gudang were running 361 mission-critical workflows—from raw oleochemical tank dispatch to statutory DOSH chemical incident filings—on 25-year-old Lotus Domino databases. The physical on-premise servers in Penang had reached hardware end-of-life, and HCL Domino v9/v10 extended support was ending, leaving unpatchable OS security vulnerabilities exposed on the manufacturing network. When external enterprise consultants delivered a modernization quote to Microsoft 365, their roadmap carried a $960,000 annual line item: $40-per-user monthly premium Dataverse connector fees for every plant operator and shift lead. Compounding the stakes, any new system touching quality, tank sampling, and chemical batching had to satisfy GAMP 5 Category 4 computerized system validation and 21 CFR Part 11 electronic signature mandates. The organization faced a brutal ultimatum: commit nearly a million dollars annually to perpetual software licensing, or risk catastrophic plant downtime and audit failure.",
  beats: [
    {
      beatNumber: 1,
      title: "The Broken Status Quo",
      subtitle: "The Stakes & Legacy Baggage",
      content: `Before stepping into enterprise solution architecture, I spent four years on the operations floor at Accenture and Concentrix. I started in August 2017 writing PL/SQL queries and forecasting queues as a frontline Data Analyst. Over four merit promotions, I moved from frontline analytics to Junior Team Lead, Team Lead, and eventually Senior Team Lead directing cross-functional customer support and trust-and-safety delivery across seven APAC markets.

Floor management taught me how systems actually fail. At Concentrix, we scaled a multilingual operations pod from 9 to 34 agents handling seven international jurisdictions. When queue spikes hit, our biggest friction was not agent motivation—it was tooling blindness. Shift handovers and agent statuses were tracked through chaotic WhatsApp groups. Team leads burned two to three hours every shift manually tallying agent availability in spreadsheets instead of coaching underperforming queues. During customer triage, agents toggled between four disconnected browser tabs, bleeding 110 seconds of pure navigation latency on every single ticket.

Later, when I transitioned into enterprise modernization at IOI Oleochemical, that same operational breakdown existed at industrial scale across 28 business units. A single document revision required chasing physical sign-offs from production to quality control, then to heads of department and marketing. In quality management, Corrective and Preventive Actions (CAPAs) averaged 45 business days to investigate and close because follow-ups sat inside unmonitored Domino background agents. Overdue chasing was done manually, and 30-day post-implementation effectiveness verification lagged at a dismal 61%.

The compliance exposure was acute. Under Good Manufacturing and Documentation Practice (GxP) and ISO 9001 regulations, documentation is not an administrative byproduct—it is legally binding evidence of product integrity. Across our plant floors, laboratory test methods and pre-loading inspection logs lacked non-repudiable audit trails. Signatures were scrawled on paper slips, document revisions had no enforced "Reason for Change," and superseded SOPs frequently lingered on factory clipboards, creating immediate risk of export container holds and regulatory sanctions.`
    },
    {
      beatNumber: 2,
      title: "The Epiphany",
      subtitle: "The Architectural Pivot & GDocP Foundation",
      content: `The standard consulting playbook for retiring Lotus Domino is brute-force replication: buy Microsoft Power Apps Premium licenses for all 2,000+ users, provision 361 separate SharePoint lists or Dataverse tables, and recreate forms one by one.

I rejected that approach immediately. 

First, the recurring $960,000 annual licensing budget was commercially unacceptable for factory floor workstations. Second, spinning up 361 independent SharePoint lists would create governance chaos within twelve months; schemas would drift, URLs would break, and cross-department reporting would collapse under 361 disconnected permissions models.

The breakthrough came from rethinking both the data architecture and the compliance framework:

1. Partitioned Storage Architecture: Instead of 361 separate database silos, I designed a partitioned single-table architecture: MainDB_{Department} (such as MainDB_IT, MainDB_IT_JHR, and MainDB_SHE). Each form type received an indexed discriminator code (FormCode, e.g., DEC-2026-001) backed by typed OData columns on standard SharePoint Online lists. This allowed standard M365 connectors to process 1.4 million migrated historical records and support 320 peak concurrent plant operators across three daily shifts without ever triggering SharePoint's notorious 5,000-item view threshold lockout.
2. GAMP 5 & ALCOA+ Documentation Framework: For regulated modules (QMS documentation, CAPA registers, and chemical batch sign-offs), standard SharePoint editing was strictly prohibited. I engineered a GAMP 5 Category 4 validation framework with Good Documentation Practice (GDocP) enforcing the ALCOA+ standard directly in the software:
   • Attributable & 21 CFR Part 11 Compliant: Every form interaction recorded authenticated Azure AD dual-factor identity, assigned role, client IP, UTC timestamp, and explicit signature intent.
   • Contemporaneous & Original: Edits occurred in real-time with enforced semantic versioning (v1.0 -> v1.1 -> v2.0); raw entries were preserved as immutable master records.
   • Accurate & Complete: Mandatory "Reason for Change" prompts were required on every document revision. I instituted a standardized canonical syntax for all controlled documents ([SITE]-[DEPT]-[DOC_TYPE]-[SEQ]-[REV], such as AC-QA-SOP-042-REV03), backed by automated multi-tier approval gates.
   • Enduring & Legible: Deprecated records were never deleted; they were programmatically watermarked with automated obsolescence tags (OBSOLETE - ARCHIVED) to maintain full regulatory inspection readiness.`
    },
    {
      beatNumber: 3,
      title: "The Execution Friction",
      subtitle: "The Struggle Across AST Linters, ERP Gates & Floor Wi-Fi",
      content: `Designing the architecture on a whiteboard was the easy part. Delivering it across two chemical manufacturing complexes without halting daily plant operations pushed against severe technical, regulatory, and cultural friction.

The first wall was code generation at scale. Over 18 months, our delivery pod generated 7,878 Power Apps YAML screens across 16 production .msapp application packages. Power Apps Canvas YAML v3.0 is unforgiving: an errant two-space indentation, a malformed multiline block scalar, or an unescaped leading '=' Power Fx prefix will silently corrupt an .msapp package upon compilation with the PAC CLI. To prevent late-night deployment failures, I wrote a custom static AST linter in Python (_validate_pa.py) and a SharePoint GUID canonicalizer (audit-power-config.mjs) that ran inside our Azure DevOps CI pipeline. Across 260+ automated pull requests, this pipeline intercepted and blocked 142 syntax regressions, 38 duplicate control ID collisions, and 19 placeholder GUID leaks before code ever touched staging.

The second wall was mathematical enforcement and ERP integration boundaries. In our bulk materials division, financial rebates on cement and chemical consignments were governed by complex multi-tier commercial rules. The legacy process relied on spreadsheets where sales leads could manually override rebate ceilings. In the new automated engine, I wrote a deterministic 7-component formula that calculated base rate, distance, volume, and seasonal adjustments, locking a hard statutory ceiling of RM 0.20 per metric tonne directly in code. The application interfaced with SAP ECC 6.0 / S/4HANA (MM & SD modules) and Oracle 19c staging tables via read-only OData endpoints to validate purchase order balances without creating unapproved commitments. When commercial leads requested manual overrides for key accounts, the engine held: no transaction could bypass the RM 0.20 cap without Group COO dual-authorization and an immutable Dataverse audit log capturing before-and-after values.

The third wall was operational connectivity on the plant floor. In industrial zones and regional workshops—like the Putri GarmentHub ERP and SaltDistribute wholesale platforms I engineered—plant Wi-Fi was notoriously unstable. When mobile devices dropped connection, standard web apps froze, incurring up to 6,070ms of Total Blocking Time (TBT). I rewrote the storage adapter from scratch: UI views hydrated in 0ms synchronously from local storage, while background network calls raced against a 2,500ms timeout. If a floor supervisor recorded an inspection or defect deduction offline, the app queued the mutation locally and resolved conflicts using strict updatedAt >= serverTime timestamps the moment network ping returned, preserving complete audit chronology.`
    },
    {
      beatNumber: 4,
      title: "The Transformation",
      subtitle: "The Delta & Lasting Organizational Ripple Effects",
      content: `The operational shift across the enterprise was immediate, measurable, and permanent.

At IOI Corporation, all 365+ legacy Lotus Domino applications across 28 business units were systematically retired into modern Microsoft 365 and Power Platform environments with zero hours of unplanned factory downtime. Consolidating the database footprint into governed MainDB_{Dept} schemas permanently eliminated the need for premium connectors, avoiding $960,000 every year in recurring software licenses while maintaining strict ISO 9001, ISO 27001, and GxP compliance.

In Quality and Industrial Safety, paper-based incident forms were replaced by Slice A (Quality Management System & Documentation Control) and a live DOSH/SIRIM 5x5 HIRADC risk matrix across the Penang and Johor plants:
• 100% of standard operating procedures and laboratory test methods now follow an automated four-stage lifecycle (Draft -> Submitted -> QA Approved -> Briefed/Distributed).
• Lost revision histories were eliminated; zero unapproved document drafts reached the plant floor.
• CAPA investigation closure time plummeted from 45 business days to 12 business days (a 73% acceleration), while 30-day post-implementation effectiveness verification adherence jumped from 61% to a perfect 100%.
• Chemical plant safety equipment compliance reached 99.4%, and consignment rebate approval cycles dropped from 3 days to under 15 minutes.

This same operational discipline reinforced team leadership on the frontline. At Accenture, when a major regional platform outage triggered an 800% ticket surge across Southeast Asian e-commerce queues, I commanded real-time queue recovery, stabilizing operations and restoring full contractual SLA adherence within 48 hours without associate burnout—an achievement recognized with the prestigious Hang Tuah Distinction and the Accenture Diamond Award. Later at Concentrix, the internal tools I built—PulseTrack and SmartFlow—slashed manual reporting by 90% and eliminated 110 seconds of tab-switching latency per ticket. My operations squad maintained a 98%+ contractual SLA compliance record while scaling 380% across seven countries, holding annualized staff attrition below 5%.

Whether commanding frontline crisis response across 34 agents or validating GxP compliance across 7,878 YAML screens for an industrial enterprise, the core lesson remained identical: lasting digital transformation happens only when technical architecture respects frontline operational realities and regulatory rigor.`
    }
  ],
  impactDelta: [
    {
      dimension: "Enterprise Software Licensing",
      before: "$40/user/mo premium connectors proposed for 2,000+ users ($960K/yr)",
      after: "Single MainDB_{Dept} partitioned list architecture on standard M365 connectors",
      delta: "$960,000/year in recurring software licenses avoided"
    },
    {
      dimension: "Legacy Database Sprawl & Hardware EOL",
      before: "365+ fragmented Domino DBs; server hardware EOL; unpatchable OS CVEs",
      after: "Governed 6-slice migration into M365, SharePoint Online, and Dataverse",
      delta: "100% database retirement; 1.4M records migrated; 0 hrs unplanned downtime"
    },
    {
      dimension: "GxP & Regulatory Documentation",
      before: "Paper drafts, handwritten sign-offs, untracked PDF revisions, no change rationale",
      after: "GAMP 5 Cat 4 validation; ALCOA+ lifecycle; mandatory Reason for Change prompts",
      delta: "100% revision traceability; standardized AC-QA-SOP-042 syntax; 0 unapproved SOPs"
    },
    {
      dimension: "CAPA Cycle & Effectiveness Tracking",
      before: "45-day average investigation time; 61% follow-up adherence on effectiveness checks",
      after: "Automated Power Automate escalation flows (7, 14, 30 days) with QA verification",
      delta: "CAPA closure cut from 45 to 12 days (-73%); 100% verification adherence"
    },
    {
      dimension: "Electronic Signature & Audit Trails",
      before: "Approvals buried in loose email threads with no non-repudiation or role separation",
      after: "21 CFR Part 11 compliant Azure AD 2FA sign-off gates with field-level delta logging",
      delta: "Tamper-proof immutable audit trail; GxP, ISO 9001/27001 audit-ready"
    },
    {
      dimension: "Code Quality & CI Deployment",
      before: "Manual Canvas .msapp assembly prone to silent YAML syntax corruption",
      after: "Automated Python AST linter (_validate_pa.py) & CI GUID canonicalizer",
      delta: "7,878 Canvas screens verified; 142 syntax regressions & 19 GUID leaks blocked"
    },
    {
      dimension: "Consignment Rebate Cycle & ERP Sync",
      before: "2 to 3 days of manual emails and spreadsheet checks; human error in rebate caps",
      after: "Automated 7-component formula engine; SAP S/4HANA & Oracle 19c OData sync",
      delta: "Approvals cut from 3 days to <15 mins (99% speedup); 0 audit non-compliances"
    },
    {
      dimension: "Frontline Operations Reporting",
      before: "2–3 hrs/shift compiling agent status from WhatsApp into Excel; 4 tabs toggled",
      after: "Centralized SharePoint + Power Automate workflow (PulseTrack & SmartFlow)",
      delta: "90% reduction in manual reporting; 110s tab latency eliminated per interaction"
    },
    {
      dimension: "Incident Command & SLA Delivery",
      before: "800% queue surge during major regional platform outage threatening contractual SLA",
      after: "Commanded real-time queue recovery and rapid triage protocols at Accenture",
      delta: "Full SLA restored in 48h; won Hang Tuah Distinction & Diamond Award; attrition <5%"
    },
    {
      dimension: "BPO Squad Scaling & SLA",
      before: "9 agents struggling with queue spikes across regional APAC markets",
      after: "Scaled to 34 multilingual agents with Six Sigma DMAIC coaching controls",
      delta: "380% team expansion across 7 countries; sustained >98% contractual SLA"
    },
    {
      dimension: "Mobile & Field App Latency",
      before: "6,070ms Total Blocking Time on weak plant Wi-Fi; offline data loss",
      after: "0ms synchronous local hydration + 2,500ms race timeout Firestore adapter",
      delta: "6,070ms TBT eliminated; 100% data integrity during intermittent connectivity"
    }
  ],
  lockedFlags: [
    { id: "FLAG-GXP-01", name: "System Validation Standard", value: "GAMP 5 Category 4 Configured Software with URS, FS, and IQ/OQ/PQ verification" },
    { id: "FLAG-GXP-02", name: "Electronic Records & Signatures", value: "21 CFR Part 11 compliant via Azure AD 2FA, signature manifestation, and immutable delta logging" },
    { id: "FLAG-GXP-03", name: "SOP Identifier Syntax", value: "Canonical [SITE]-[DEPT]-[DOC_TYPE]-[SEQ]-[REV] syntax (AC-QA-SOP-042-REV03)" },
    { id: "FLAG-GXP-04", name: "CAPA Turnaround Metric", value: "Investigation cycle dropped from 45 to 12 days (-73%); 30-day effectiveness verification lifted to 100%" },
    { id: "FLAG-ARCH-01", name: "Legacy Hardware EOL Catalyst", value: "Penang data center physical server EOL + HCL Domino v9/v10 extended support sunset" },
    { id: "FLAG-ARCH-02", name: "Concurrent Load & Sizing", value: "320 peak concurrent operators across 3 shifts; 1.4M records migrated without 5,000-item view threshold locks" },
    { id: "FLAG-ARCH-03", name: "ERP Integration Interface", value: "SAP ECC 6.0 / S/4HANA (MM & SD) and Oracle 19c staging tables via read-only OData endpoints" },
    { id: "FLAG-OPS-01", name: "Incident Command Surge Trigger", value: "800% ticket surge during major regional platform outage stabilized within 48 hours (Hang Tuah Distinction)" },
    { id: "FLAG-OPS-02", name: "DMAIC Latency Reduction", value: "Unified 4-tab workflow into single-pane interface, saving 110s handling time per interaction" },
    { id: "FLAG-CODE-01", name: "AST Linter CI Telemetry", value: "142 syntax regressions, 38 control ID collisions, and 19 placeholder GUID leaks blocked across 260+ PRs" },
    { id: "FLAG-CODE-02", name: "Multi-LLM Gateway FinOps", value: "82% fast queries on Groq (240ms latency, $0 cost) / 18% schema synthesis on Gemini 2.5 Flash via fcntl locks" }
  ]
};



