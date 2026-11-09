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
  name: "Ali Akhmad Fauzie, B.I.B.M. (Hons.)",
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
  { label: "LICENSE AVOIDED", value: "$960K/yr", subtext: "Single MainDB Partitioning" },
  { label: "DATABASES RETIRED", value: "365+", subtext: "28 BUs (0h Unplanned Downtime)" },
  { label: "SCREENS IN CI", value: "7,878", subtext: "Power Apps YAML AST Verified" },
  { label: "BPO SCALING", value: "380%", subtext: "34 Agents · >98% SLA Sustained" }
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
    id: "ioi-acidchem-she-platform",
    imageUrl: "/showcase-articles/enterprise-m365-ioi/portfolio-ui-screenshot.png",
    title: "IOI Oleo Enterprise Modernization & Departmental Power Apps Suite",
    subtitle: "Decommissioned 365+ Lotus Domino DBs into 13 Departmental Power Apps (52 1080p Screens), $960K/yr License Avoidance & DOSH 5×5 SHE Suite",
    category: "core",
    date: "2024 – 2026",
    role: "Lead Enterprise Modernization & Full-Stack Solution Architect",
    repoUrl: "https://github.com/aliakhmadfauzie/power-platform-portfolio",
    tools: [
      "Power Apps Canvas (.pa.yaml)",
      "Power Automate Modern v3",
      "Power Fx",
      "SharePoint Online MainDB",
      "Microsoft Dataverse",
      "React 19 & TypeScript 5.8",
      "Python AST Toolchain",
      "DOSH 5×5 Risk Matrix",
      "Playwright CDP"
    ],
    problem: "365+ legacy IBM Lotus Domino databases across 28+ business units at IOI Oleochemicals / Acidchem (Penang Prai & Johor chemical plants) trapped critical workflows in unindexed rich-text silos, manual paper/email approvals with 3–5 day turnarounds, and non-mobile interfaces. Default enterprise migration onto premium Power Platform / Dataverse connectors for 2,000+ users would cost $960,000+/year, while uncurated migration threatened 360+ SharePoint list sprawl.",
    solution: "Architected a full-scale legacy modernization program delivering: 1) The 13 Departmental Power Apps Suite across 7 core departments (IT, Safety/SHE, QA/QC, Finance, Production, HR, Supply Chain) based on the 4-Screen Quadruplet Standard with 52 production-ready 1080p screens; 2) 13 event-driven Power Automate cloud workflows with Scope Try/Catch resilience replacing Domino macros; 3) The dedicated DOSH/SIRIM Chemical Safety & Environment (SHE) Suite (5×5 HIRADC Matrix, 5-Whys CAPA, PPE stock alerts); 4) A Single MainDB_{Dept} partitioned SharePoint architecture saving $960K/year in licensing, validated across 7,878 .pa.yaml screens via an automated Python AST compiler.",
    impact: "Successfully decommissioned 365+ Lotus Domino databases across 28+ business units with zero unplanned plant downtime; $960K/yr in licensing eliminated; 13 mission-critical departmental apps deployed; 52 client-ready 1920×1080 screens verified; -73% CAPA resolution duration; 99.4% DOSH/SIRIM PPE safety compliance.",
    impactMetrics: [
      { label: "Modernized Apps", value: "13 Suite" },
      { label: "License Saved", value: "$960K/yr" },
      { label: "Verified Screens", value: "52 UI" },
      { label: "Risk Engine", value: "DOSH 5×5" }
    ],
    technicalDetails: [
      "Standardized 4-Screen Quadruplet Architecture (LoginScreen, BrowseScreen, DetailsScreen, EditScreen) across all 13 departmental modules with 48px touch ergonomics and WCAG 2.1 AA compliance",
      "Event-driven Power Automate Modern UI Cloud Flows with pre-filtered trigger conditions, multi-tier executive approvals, and Scope - Try / Catch exception handling alerting SecOps channels",
      "Single MainDB_{Dept} List per Site (MainDB_IT, MainDB_IT_JHR, MainDB_SHE) with an indexed FormCode discriminator (DEC-2026-001), eliminating 361-list sprawl and saving $960K/yr in premium connectors",
      "Automated Power Apps YAML v3.0 static validator (_validate_pa.py) checking Properties indentation hierarchy, multiline block scalars, leading '=' Power Fx prefixes, and control name uniqueness across 7,878 screens",
      "Interactive DOSH/SIRIM 5×5 HIRADC Risk Matrix Heatmap (Likelihood × Severity), 5-Tier Hierarchy of Controls, 5-Whys Root Cause Investigation (SHEAI/SHEICAR), and multi-plant PPE threshold alerting",
      "Automated Playwright CDP test harness systematically auditing DOM accessibility trees and rendering pixel-perfect visual regression screenshots at 1920×1080 resolution"
    ],
    codeSnippet: `// Power Fx Canvas YAML Screen Quadruplet Standard (ITSSR_BrowseScreen.pa.yaml)
ITSSR_BrowseScreen As Screen:
    Properties:
        Fill: RGBA(250, 249, 248, 1)
        OnVisible: |-
            =Set(varActiveTab, "All");
            Set(varSearchQuery, "");
            Concurrent(
                ClearCollect(colActiveTickets, Filter(MainDB_IT_Ext_Support, RequestStatus.Value <> "Resolved")),
                ClearCollect(colSLAAlerts, Filter(MainDB_IT_Ext_Support, Priority.Value = "URGENT"))
            );
    Children:
        - conMetricStrip As groupContainer.horizontalAutoLayoutContainer:
            Properties:
                Height: 90
                Fill: RGBA(255, 255, 255, 1)
                DropShadow: DropShadow.Light
        - galTicketLedger As gallery.galleryVertical:
            Properties:
                Items: |-
                    =SortByColumns(
                        Filter(colActiveTickets, varSearchQuery in Title Or varSearchQuery in Category.Value),
                        "Created",
                        SortOrder.Descending
                    )`,
    liveDemoId: "she-matrix",
    featured: true
  },
  {
    id: "putri-garmenthub-erp",
    imageUrl: "/showcase-articles/putri-garmenthub/portfolio-ui-screenshot.png",
    title: "GarmentHub Workshop ERP & Cash Flow Management",
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
    imageUrl: "/assets/projects/pulsetrack/live-floor-telemetry.png",
    title: "PulseTrack: Real-Time Agent Status System",
    subtitle: "Centralized Workforce Management & Production Floor Compliance Automation",
    category: "core",
    date: "Oct 2024",
    role: "Power Platform solution delivery & automation design",
    tools: ["Microsoft Forms", "Power Automate", "SharePoint", "Power BI", "Microsoft Teams"],
    problem: "PulseTrack is a centralized, real-time workforce management and compliance tracking system. It was built to solve a severe operational bottleneck: a strict no-phone policy on the production floor meant Team Leaders were not allowed to bring their phones to their desks. To check if a missing agent had updated their status via unauthorized external messaging tools like WhatsApp, Team Leaders had to continuously walk back and forth to the locker room. This caused massive time waste, delayed response times, data fragmentation, and heavy manual overhead.",
    solution: "PulseTrack provides an end-to-end automated workforce status pipeline across Microsoft 365:\n\n• Intake: Agents use a standardized Microsoft Form to submit their status updates, specifically when reporting they will be on sick leave or running late.\n\n• Automation: Microsoft Power Automate instantly parses these submissions and writes them to a secure, centralized SharePoint list that Team Leaders can access directly from their production floor laptops, eliminating the need to check their phones.\n\n• Visibility: A live Power BI dashboard visualizes the entire floor's schedule adherence, current headcount, and cumulative time-in-state.\n\n• Alerting: Microsoft Teams integrations push automated alerts to Team Leaders when SLA thresholds are breached, or critically, when the volume of agents calling in sick exceeds the maximum allowable capacity for the shift.",
    impact: "90% reduction in manual reporting and status tracking overhead; 98% accuracy in real-time status updates and attendance tracking; 60–80% reduction in Team Leader administrative workload by eliminating locker trips and manual verification, allowing leaders to remain on the floor managing operations.",
    impactMetrics: [
      { label: "Manual Tracking Overhead", value: "-90%" },
      { label: "Status & Attendance Accuracy", value: "98%" },
      { label: "TL Administrative Workload", value: "-60% to -80%" }
    ],
    technicalDetails: [
      "Standardized Intake: Microsoft Form for structured agent submissions (sick leave, late arrival, schedule updates) replacing unmonitored external messaging",
      "Automated Processing: Microsoft Power Automate instant cloud flows parsing payloads and writing to a secure, centralized SharePoint list in real time",
      "Zero-Phone Floor Accessibility: Direct laptop access on the production floor for Team Leaders, eliminating repeated locker room trips and preserving strict security compliance",
      "Live Operational Visibility: Power BI floor telemetry dashboard tracking schedule adherence, active headcount, and cumulative time-in-state",
      "Capacity & SLA Alerting: Microsoft Teams automated push notifications triggering upon SLA threshold breaches or when shift sick-call volume exceeds maximum allowable capacity"
    ],
    gallery: [
      {
        id: "pulsetrack-screen-1",
        title: "Live Floor Telemetry & Pod Matrix",
        caption: "Real-time production floor headcount, time-in-state stopwatches, and spatial seat occupancy across ASEAN delivery pods.",
        imageUrl: "/assets/projects/pulsetrack/live-floor-telemetry.png",
        expectedPath: "/assets/projects/pulsetrack/live-floor-telemetry.png"
      },
      {
        id: "pulsetrack-screen-2",
        title: "Absence & Leave Intake Hub",
        caption: "Standardized Microsoft Forms intake with digital MC validation and automated write-back to SharePoint Online.",
        imageUrl: "/assets/projects/pulsetrack/absence-leave-intake.png",
        expectedPath: "/assets/projects/pulsetrack/absence-leave-intake.png"
      },
      {
        id: "pulsetrack-screen-3",
        title: "Agent Self-Service Status Portal",
        caption: "Desktop portal allowing associates to submit real-time schedule adjustments and sick notices without unauthorized messaging apps.",
        imageUrl: "/assets/projects/pulsetrack/agent-self-service-portal.png",
        expectedPath: "/assets/projects/pulsetrack/agent-self-service-portal.png"
      }
    ],
    liveDemoId: "it-service",
    featured: true
  },
  {
    id: "smartflow",
    imageUrl: "/assets/projects/smartflow/executive-rag-matrix.png",
    title: "SmartFlow: Enterprise Business Request & Resource Automation Engine",
    subtitle: "Parallel-Processing M365 Orchestration Engine for Client Changes & Resource Provisioning",
    category: "core",
    date: "Nov 2024",
    role: "Power Platform Solution Delivery & Parallel Orchestration Architecture",
    tools: ["Microsoft Forms", "Power Automate", "SharePoint Online", "Power BI", "Microsoft Teams"],
    problem: "Executing client-initiated changes—such as scaling headcount, launching a new workflow, or modifying service level agreements (SLAs)—previously triggered a chaotic, manual chain reaction. Project Managers were forced to act as manual dispatchers, coordinating via disjointed email threads across multiple siloed departments. This sequential, manual coordination frequently resulted in misaligned timelines (e.g., Recruitment hiring agents before Operations had secured seating, or Finance missing a billing cycle update), ultimately delaying the time-to-market for the client and risking SLA penalties.",
    solution: "SmartFlow was engineered as a centralized, parallel-processing automation engine using the Microsoft Power Platform to replace human middleware with intelligent routing:\n\n• Dynamic Intake Portal (Microsoft Forms): The Project Manager initiates the workflow through a standardized, conditional form. If a client requests to \"Add 10 new agents for a localized workflow,\" the form dynamically captures the exact language requirements, shift parameters, and target go-live dates.\n\n• Parallel Orchestration (Power Automate): Instead of sequential emails, Power Automate intercepts the submission and instantly generates and assigns distinct, customized task payloads to four critical departments simultaneously:\n  1. Operations: Triggered to prepare shift schedules, map physical production floor seating, and allocate Team Leader/QA bandwidth.\n  2. Finance: Triggered to update client billing projections, adjust payroll forecasts, and align OPEX budgets for the new headcount.\n  3. Recruitment: Triggered to immediately open specific job requisitions, matching the client's language and skill requirements to the candidate pipeline.\n  4. Training: Triggered to secure training room capacity, allocate subject matter experts (SMEs), and schedule the onboarding timeline.\n\n• The Nerve Center (SharePoint): Every triggered task, document, and departmental sign-off is logged in a centralized SharePoint database. It acts as a single, immutable source of truth and a strict audit trail for client compliance.\n\n• Executive Visibility (Power BI & Teams): A live Power BI dashboard provides the Project Manager and Senior Leadership with a real-time RAG (Red/Amber/Green) readiness status for each department. Microsoft Teams adaptive cards automatically notify the PM the moment a department completes their phase, or alerts them if a department is at risk of missing the go-live deadline.",
    impact: "Accelerated Time-to-Market by shifting from sequential human coordination to parallel automated task dispatching, significantly reducing client ramp-up lead time; achieved Zero-Defect Billing & Compliance by hardcoding Finance and Training sign-offs; delivered an 80% reduction in administrative overhead by eradicating status-update meetings and email chasing; and established 100% real-time pipeline transparency with 90% improved data accuracy.",
    impactMetrics: [
      { label: "Administrative Overhead", value: "-80%" },
      { label: "Real-Time Pipeline Transparency", value: "100%" },
      { label: "Data & Billing Accuracy", value: "90%" }
    ],
    technicalDetails: [
      "Dynamic Intake Portal: Conditional Microsoft Form dynamically capturing language requirements, shift parameters, and go-live schedules upon client-initiated change requests",
      "Parallel Orchestration: Power Automate instant workflow dispatching 4 simultaneous departmental task payloads across Operations, Finance, Recruitment, and Training",
      "Centralized Audit Store: SharePoint Online list schema serving as an immutable single source of truth for cross-departmental deliverables, sign-offs, and compliance records",
      "Executive RAG Telemetry: Embedded Power BI dashboard visualizing real-time departmental Red/Amber/Green readiness and bottleneck triage",
      "Automated Milestone Alerting: Microsoft Teams Adaptive Cards alerting Project Managers upon phase completion or escalation risks for upcoming go-live deadlines",
      "Zero-Defect Enforcement: Hardcoded validation gates guaranteeing 100% of new agents are captured in billing projections and certified before floor deployment"
    ],
    gallery: [
      {
        id: "smartflow-screen-1",
        title: "Executive RAG Readiness Dashboard & Critical Path",
        caption: "Real-time Red/Amber/Green departmental readiness matrix, T-minus milestone pacing, and active MercadoPay Global 10-agent scale progression.",
        imageUrl: "/assets/projects/smartflow/executive-rag-matrix.png",
        expectedPath: "/assets/projects/smartflow/executive-rag-matrix.png"
      },
      {
        id: "smartflow-screen-2",
        title: "Dynamic Intake Portal & Multi-Department Request Builder",
        caption: "Guided 3-step structured configuration flow capturing headcount scaling, CEFR language requirements, shift differentials, and instant OPEX impact.",
        imageUrl: "/assets/projects/smartflow/dynamic-intake-portal.png",
        expectedPath: "/assets/projects/smartflow/dynamic-intake-portal.png"
      },
      {
        id: "smartflow-screen-3",
        title: "Departmental Execution Hub & Parallel Workbenches",
        caption: "Parallel workbenches for Operations seating, Finance billing ledgers, Recruitment pipeline, and Training SME overload rebalancing.",
        imageUrl: "/assets/projects/smartflow/departmental-execution-hub.png",
        expectedPath: "/assets/projects/smartflow/departmental-execution-hub.png"
      },
      {
        id: "smartflow-screen-4",
        title: "Compliance Audit Trail & Microsoft Teams Telemetry",
        caption: "Immutable SHA-256 transaction journal, Microsoft Graph webhook latency monitors (18ms), and interactive Teams bot escalation cards.",
        imageUrl: "/assets/projects/smartflow/compliance-audit-teams-log.png",
        expectedPath: "/assets/projects/smartflow/compliance-audit-teams-log.png"
      },
      {
        id: "smartflow-screen-5",
        title: "Dynamic Request Builder & Financial Impact Simulation",
        caption: "Live calculation engine simulating monthly OPEX ($41,200), gross margin (+36.4%), hardware thin-client requirements, and workstation allocation.",
        imageUrl: "/assets/projects/smartflow/dynamic-intake-request-builder.png",
        expectedPath: "/assets/projects/smartflow/dynamic-intake-request-builder.png"
      }
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
    tools: ["Power Apps", "Power Automate", "SharePoint MainDB", "Power Fx"],
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
  period: "2024 – 2026",
  role: "Lead Enterprise Modernization & Full-Stack Solution Architect",
  scope: "Architected the complete decommissioning of 365+ Lotus Domino databases across 28+ business units to Microsoft 365, SharePoint Online MainDB partitioned lists, and Power Platform, eliminating $960,000/year in licensing overhead.",
  sliceDelivery: "Delivered the 13 Departmental Power Apps Suite (52 production-ready 1080p Canvas screens) and 13 modern Power Automate cloud workflows as the primary operational output across 7 departments.",
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
      resolution: "Unified disparate Johor/Penang routing behaviors and QA/Marketing approval paths into single MainDB_{Dept} partitioned SharePoint architectures saving $960K/yr."
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
      "Weekly Business Review (WBR)",
      "Client Quality Representative",
      "Innovation Team",
      "2x Innovation Winner",
      "Policy Creation",
      "Training Delivery",
      "Trust & Safety",
      "Content Moderation",
      "Ads Review",
      "Game Review",
      "Live Chat & Email",
      "BPO Operations",
      "SLA Governance",
      "Six Sigma DMAIC"
    ],
    bulletPoints: [
      "Client WBR Quality Representation: Served as the primary client-facing Weekly Business Review (WBR) representative for Quality, leading weekly calibration panels, error variance triage, and contractual SLA compliance sign-offs with global client leadership.",
      "Innovation Team & 2-Time Innovation Competition Winner: Core driver on the operational Innovation Team; crowned the Winner of the Enterprise Innovation Competition for 2 consecutive years respectively for engineering PulseTrack real-time productivity telemetry and automated queue orchestrators.",
      "QA Department Leadership & Transaction Auditing: Directed QA department workflows, conducted deep-dive transaction audits across live chat and email cases, and led calibration panels to eliminate scoring variance and defect outliers.",
      "Policy Creation & SOP Authoring: Directly authored, created, and updated operational policy documentation, decision trees, and standard operating procedures (SOPs) for Trust & Safety (content moderation) and Advertising Integrity (Ads Review), translating complex client policy changes into clear frontline enforcement standards.",
      "Conducting Training & Nesting Academies: Designed instructional materials and directly conducted onboarding training bootcamps, nesting clinics, and refresher workshops, coaching frontline specialists and raising 90-day associate competency from 78% to 94%.",
      "BPO Floor Leadership & Scaling: Commanded daily 24/7 BPO operations scaling headcount by 380% (from 9 to 34 multilingual associates across 7 APAC language pods: Indonesian, Chinese Mainland, Korean, Japanese, English, Thai, Vietnamese) in Trust & Safety, Ads Review, and Omnichannel Live Chat/Email, sustaining >98%+ contractual SLA compliance.",
      "Continuous Improvement & Automation: Executed Six Sigma DMAIC process controls reducing Average Handling Time (AHT) by 25%; engineered PulseTrack real-time agent status tracking system (cutting manual reporting by 90%, achieving 98% status accuracy, and eliminating locker room trips under floor zero-phone policies to reduce TL admin workload by 60–80%) and SmartFlow parallel resource automation engine (dispatching simultaneous task payloads across Operations, Finance, Recruitment, and Training to cut admin overhead by 80% with 100% real-time transparency)."
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
    tags: ["Bachelor Degree", "1st Intl SRC Member", "5× Dean's List", "SOIS Bus Stop Contributor", "Full Scholarship", "Bond Reform"],
    bulletPoints: [
      "Graduated with Bachelor's Degree in International Business Management With Honours (CGPA 3.48, Second Upper Class Honours, Minor in Logistics & Transportation).",
      "Received total of 5× Dean's List Academic Honors Awards across 5 academic semesters and Special Achievement in Leadership Award (Anugerah Kerana Jasa - AK_J).",
      "Elected as the First International Student to the Student Representative Council (SRC / Majlis Perwakilan Pelajar - MPP UUM) for International Affairs (Kerusi Hal Ehwal Antarabangsa).",
      "Organized and executed 8 cross-border international delegations as official UUM representative: 4 programs to Indonesia, 2 to Thailand, 1 to South Korea, and 1 to the Philippines.",
      "Successfully fulfilled landmark student manifesto commitments: (1) Spearheaded the construction of the permanent bus stop at SOIS (School of International Studies) with name officially engraved on the structure as contributor; (2) Successfully negotiated lowering the international student bond and expanding the allowed tuition fee debt threshold from RM150 to RM1,500 to protect student course registration.",
      "Awarded the prestigious UUM International Scholarship Scheme Achievement Award (February 2014, RM10,000 per semester) for outstanding academic, diplomatic, and leadership merit."
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
    "id": "cert-power-platform-professional",
    "name": "Microsoft Certified: Power Platform Professional & Solution Architect",
    "issuer": "Microsoft",
    "organization": "Microsoft",
    "organizationLogoId": "microsoft",
    "issueDate": "2024",
    "category": "Power Platform",
    "credentialType": "Professional Certification",
    "skills": [
      "Power Apps (Canvas & Model-Driven)",
      "Power Automate",
      "Dataverse",
      "Power Fx",
      "ALM & Solutions",
      "PCF React Controls",
      "Copilot Studio"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "MS-PL-PRO-2024",
    "summary": "Full-lifecycle enterprise certification covering the entire Microsoft Power Platform suite: Canvas Apps YAML architecture, Model-driven relational Dataverse schemas, complex Power Automate cloud/desktop RPA flows, security governance via Entra ID, and solution lifecycle ALM deployment pipelines.",
    "productionApplication": "Deployed across enterprise clients (IOI Acidchem, Nippon Paint, Tasek Cement) to architect zero-downtime cutovers, Dataverse migration models, and production Canvas applications.",
    "verificationMethod": "Verified Microsoft Official Credential Registry",
    "hoursOrModules": "120+ Curriculum Hours"
  },
  {
    "id": "cert-power-bi-data-analyst",
    "name": "Microsoft Certified: Power BI Data Analyst Professional",
    "issuer": "Microsoft",
    "organization": "Microsoft",
    "organizationLogoId": "microsoft",
    "issueDate": "2024",
    "category": "Data & Analytics",
    "credentialType": "Professional Certification",
    "skills": [
      "Power BI",
      "DAX Formulas",
      "Power Query M",
      "Data Modeling",
      "Star Schema",
      "Executive KPI Dashboards",
      "Row-Level Security (RLS)"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "MS-PBI-DA-2024",
    "summary": "Professional certification validating mastery in enterprise business intelligence, advanced DAX calculations, Power Query ETL pipelines, star schema semantic modeling, and interactive C-suite executive dashboard design.",
    "productionApplication": "Designed real-time financial, delivery SLA, and multi-market BPO operational performance dashboards with automated scheduled gateway refreshes.",
    "verificationMethod": "Verified Microsoft Official Credential Registry",
    "hoursOrModules": "85+ Curriculum Hours"
  },
  {
    "id": "cert-power-excel-pro",
    "name": "Power Excel Professional: Advanced Data Modeling, Power Pivot & Automation",
    "issuer": "Microsoft & LinkedIn",
    "organization": "Microsoft",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "2024",
    "category": "Data & Analytics",
    "credentialType": "Professional Certification",
    "skills": [
      "Advanced Excel",
      "Power Pivot",
      "Power Query",
      "Data Modeling",
      "Dynamic Arrays",
      "VBA & Office Scripts",
      "Financial Forecasting"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "MS-EXCEL-PRO-2024",
    "summary": "Advanced analytical accreditation focusing on Power Pivot data models, Power Query M code transformations, complex statistical modeling, multi-criteria dynamic arrays, and process automation.",
    "productionApplication": "Built complex financial models, pricing calculators for RM70k+ SOWs, and workforce capacity forecasting models across 34-agent teams.",
    "verificationMethod": "Verified Microsoft & LinkedIn Learning Transcript",
    "hoursOrModules": "40+ Practical Hours"
  },
  {
    "id": "cert-casper-professional",
    "name": "CASPER Professional: Situational Judgment, Ethical Decision-Making & People Leadership",
    "issuer": "Acuity Insights / Altus Assessments",
    "organization": "Acuity Insights",
    "organizationLogoId": "general",
    "issueDate": "2024",
    "category": "Project & Process",
    "credentialType": "Professional Certification",
    "skills": [
      "Situational Judgment",
      "Ethical Decision-Making",
      "Crisis Management",
      "Cross-Cultural Communication",
      "Team Conflict Resolution",
      "Executive Empathy"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "CASPER-LEAD-2024",
    "summary": "Standardized evaluation score for situational judgment, ethical reasoning, conflict mediation, and cross-cultural people leadership under intense operational constraints.",
    "productionApplication": "Applied directly in directing 34 direct reports across 7 international language pods at Concentrix and Accenture, holding attrition under 5%.",
    "verificationMethod": "Official Acuity Insights Assessment Verification",
    "hoursOrModules": "Standardized Assessment"
  },
  {
    "id": "cert-lark-developer",
    "name": "Certified Lark Developer (Open Platform & Bot Automation)",
    "issuer": "Lark / ByteDance Official Developer",
    "organization": "Lark",
    "organizationLogoId": "lark",
    "issueDate": "Aug 2024",
    "category": "Enterprise Automation",
    "credentialType": "Developer Certification",
    "skills": [
      "Lark Open Platform",
      "Webhook Bot Automation",
      "Base API",
      "Approval Workflows",
      "JavaScript / TypeScript",
      "Microservices"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "LARK-DEV-2024-8841",
    "summary": "Technical accreditation for engineering automated bots, custom Lark Base automations, and webhook-driven incident escalation systems via the Lark Open Platform API.",
    "productionApplication": "Created automated shift-handover bots and real-time SLA incident dispatch bots at Concentrix, eliminating 90% of manual queue reporting.",
    "verificationMethod": "Lark Open Platform Developer Registry",
    "hoursOrModules": "30+ Dev Hours"
  },
  {
    "id": "cert-concentrix-leadership",
    "name": "Concentrix Operations Leadership & SLA Delivery Certification",
    "issuer": "Concentrix Corporate Operations",
    "organization": "Concentrix",
    "organizationLogoId": "concentrix",
    "issueDate": "2024",
    "category": "Enterprise Automation",
    "credentialType": "Leadership Certification",
    "skills": [
      "Operations Management",
      "SLA Governance",
      "QA Department Leadership",
      "Policy Creation",
      "Training Delivery",
      "Six Sigma DMAIC",
      "WBR/QBR Governance"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "CNX-LEAD-2024-001",
    "summary": "Corporate executive verification certifying operational mastery in leading multilingual operations teams, managing QA department audits, authoring policies, and sustaining >98% contractual SLA compliance.",
    "productionApplication": "Led 34 direct reports across 7 APAC language pods; achieved 380% squad headcount scale with under 5% annual attrition.",
    "verificationMethod": "Concentrix Official Certificate of Employment & Service",
    "hoursOrModules": "Full Operational Tenure"
  },
  {
    "id": "path-career-essentials-genai",
    "name": "Career Essentials in Generative AI",
    "issuer": "Microsoft and LinkedIn",
    "organization": "Microsoft & LinkedIn",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Updated 1 month ago",
    "category": "AI & Copilot",
    "credentialType": "Learning Path",
    "skills": [
      "Generative AI",
      "LLM Architecture",
      "Prompt Engineering",
      "AI Ethics",
      "Copilot Integration",
      "Workplace Productivity"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "LP-MS-GENAI-2025",
    "summary": "Premier Microsoft & LinkedIn accreditation covering foundational AI concepts, transformer architectures, prompt engineering patterns, and generative AI workplace deployment.",
    "productionApplication": "Applied in developing Gemini Flash multi-agent prompts and AI-assisted workflow engines for enterprise modernizations.",
    "verificationMethod": "Microsoft & LinkedIn Verified Learning Path",
    "hoursOrModules": "4h 14m 22s (5 Modules)",
    "pdfUrl": "/certificates/CertificateOfCompletion_Career%20Essentials%20in%20Generative%20AI%20by%20Microsoft%20and%20LinkedIn.pdf"
  },
  {
    "id": "path-career-essentials-pm",
    "name": "Career Essentials in Project Management",
    "issuer": "Microsoft and LinkedIn",
    "organization": "Microsoft & LinkedIn",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Updated 1 month ago",
    "category": "Project & Process",
    "credentialType": "Learning Path",
    "skills": [
      "Project Management",
      "PMI PMBOK",
      "Risk Management",
      "Schedule Development",
      "Cost Estimation",
      "Stakeholder Governance",
      "Agile & Waterfall"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "LP-MS-PM-2025",
    "summary": "Comprehensive 14+ hour project governance track aligning PMI standards with modern Microsoft 365 toolchains: schedules, budgets, risk registers, stakeholder engagement, and team leadership.",
    "productionApplication": "Managed sprint milestones, billable technical capacity, and SOW cutovers across 28 business units at IOI Acidchem, Nippon Paint, and Tasek Cement.",
    "verificationMethod": "Microsoft & LinkedIn Verified Learning Path",
    "hoursOrModules": "14h 38m 4s (10 Modules)"
  },
  {
    "id": "path-genai-productivity-skills",
    "name": "Build Your Generative AI Productivity Skills",
    "issuer": "Microsoft and LinkedIn",
    "organization": "Microsoft & LinkedIn",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Updated 2 months ago",
    "category": "AI & Copilot",
    "credentialType": "Learning Path",
    "skills": [
      "AI Productivity",
      "Prompt Crafting",
      "Workflow Synthesis",
      "Microsoft 365 Copilot",
      "Autonomous Task Routing"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "LP-GENAI-PROD-2025",
    "summary": "Advanced generative productivity track mastering AI-accelerated writing, contextual summarization, automated code generation, and multi-turn conversational agents.",
    "productionApplication": "Used to speed up enterprise RFP discovery documentation, user story creation, and system specification generation by 4x.",
    "verificationMethod": "Microsoft & LinkedIn Verified Learning Path",
    "hoursOrModules": "5h 39m 48s"
  },
  {
    "id": "path-career-essentials-data-analysis",
    "name": "Career Essentials in Data Analysis",
    "issuer": "Microsoft and LinkedIn",
    "organization": "Microsoft & LinkedIn",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Updated Dec 2025",
    "category": "Data & Analytics",
    "credentialType": "Learning Path",
    "skills": [
      "Data Analysis",
      "Exploratory Data Analysis (EDA)",
      "Statistical Inference",
      "Power BI",
      "Data Modeling",
      "ETL Pipelines",
      "Data Storytelling"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "LP-MS-DATA-2025",
    "summary": "In-depth 12+ hour data analysis program spanning statistical inquiry, relational data modeling, query optimization, KPI synthesis, and executive data presentation.",
    "productionApplication": "Informed analytical reporting engines, defect variance tracking, and queue performance analysis across 7 regional APAC markets.",
    "verificationMethod": "Microsoft & LinkedIn Verified Learning Path",
    "hoursOrModules": "12h 18m 33s"
  },
  {
    "id": "path-ai-for-managers",
    "name": "AI for Managers",
    "issuer": "Microsoft and LinkedIn",
    "organization": "Microsoft & LinkedIn",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Updated 1 month ago",
    "category": "AI & Copilot",
    "credentialType": "Learning Path",
    "skills": [
      "AI Strategy",
      "Executive Decision Making",
      "Responsible AI Governance",
      "People Leadership in AI Era",
      "Change Management"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "credentialId": "LP-MS-AIMGR-2025",
    "summary": "Strategic management path addressing ethical AI adoption, workforce transition planning, bias mitigation, and augmenting human management coaching through AI tools.",
    "productionApplication": "Guided ethical policy frameworks and training academies for Trust & Safety and content moderation operations.",
    "verificationMethod": "Microsoft & LinkedIn Verified Learning Path",
    "hoursOrModules": "4h 33m 49s",
    "pdfUrl": "/certificates/CertificateOfCompletion_AI%20for%20Managers%20by%20Microsoft%20and%20LinkedIn.pdf"
  },
  {
    "id": "course-intro-ai-rose",
    "name": "Introduction to Artificial Intelligence",
    "issuer": "Doug Rose",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Nov 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Artificial Intelligence",
      "Machine Learning Concepts",
      "Neural Networks",
      "Algorithmic Logic"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Foundational breakdown of machine learning algorithms, deep neural nets, and enterprise AI transformation strategies.",
    "hoursOrModules": "2h 26m 32s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Introduction%20to%20Artificial%20Intelligence.pdf"
  },
  {
    "id": "course-genai-creative-content",
    "name": "Generative AI Skills for Creative Content: Opportunities, Issues, and Ethics",
    "issuer": "Ashley Kennedy",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Jun 2023",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Creative GenAI",
      "Multimodal Content",
      "Copyright & IP",
      "AI Ethics",
      "Content Moderation"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Deep dive into generative media synthesis, synthetic asset ethics, legal frameworks, and creative workflow augmentation.",
    "hoursOrModules": "1h 02m 27s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Generative%20AI%20Skills%20for%20Creative%20Content%20Opportunities%20Issues%20and%20Ethics.pdf"
  },
  {
    "id": "course-excel-copilot-mount",
    "name": "Excel with Copilot: AI-Driven Data Analysis",
    "issuer": "George Mount",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Updated 3 weeks ago",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Microsoft Copilot",
      "Excel Automation",
      "AI Data Analysis",
      "Formula Synthesis",
      "Pattern Recognition"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Harnessing Microsoft 365 Copilot within Excel to query structured data via natural language, generate complex formulas, and uncover statistical correlations.",
    "hoursOrModules": "1h 55m 12s"
  },
  {
    "id": "course-copilot-powerpoint-terberg",
    "name": "Copilot in PowerPoint: From Prompt to Presentation (2024)",
    "issuer": "Julie Terberg",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Feb 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Microsoft Copilot",
      "PowerPoint",
      "Executive Decks",
      "Prompt-to-Slide Synthesis",
      "Visual Storytelling"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Authoring high-impact executive decks from raw Word docs, technical specs, and natural language prompts using Copilot in PowerPoint.",
    "hoursOrModules": "45m 06s"
  },
  {
    "id": "course-ai-productivity-hacks-nika",
    "name": "AI Productivity Hacks to Reimagine Your Workday and Career",
    "issuer": "Dr. Marily Nika",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated Sep 2025",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "AI Productivity",
      "Prompt Tuning",
      "Personal Automation",
      "Workflow Acceleration"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Tactical strategies to automate daily administrative overhead, structure meeting syntheses, and leverage LLMs as cognitive force multipliers.",
    "hoursOrModules": "30m 58s"
  },
  {
    "id": "course-prompt-engineering-sheer",
    "name": "Introduction to Prompt Engineering for Generative AI",
    "issuer": "Ronnie Sheer",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Aug 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Prompt Engineering",
      "Few-Shot Prompting",
      "Chain-of-Thought",
      "System Prompts",
      "Hallucination Reduction"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Core prompt engineering methodologies: role definition, few-shot conditioning, chain-of-thought elicitation, and output schema constraints.",
    "hoursOrModules": "1h 03m 29s"
  },
  {
    "id": "course-automate-workflows-genai",
    "name": "Automate Your Workflows with Generative AI",
    "issuer": "Madecraft and Tamara Franklin",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Nov 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Workflow Automation",
      "API Integration",
      "AI Pipelines",
      "Process Automation"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Designing automated enterprise operational loops combining LLM API endpoints with modern workplace workflows.",
    "hoursOrModules": "20m 33s"
  },
  {
    "id": "course-genai-business-leaders",
    "name": "Generative AI for Business Leaders (2025)",
    "issuer": "Tomer Cohen",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated Sep 2025",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "AI Strategy",
      "Executive ROI Analysis",
      "Enterprise AI Architecture",
      "Organizational Scaling"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Framework for evaluating generative AI initiatives, calculating infrastructure ROI, and deploying LLM applications safely in regulated environments.",
    "hoursOrModules": "1h 17m 58s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Generative%20AI%20for%20Business%20Leaders%202025.pdf"
  },
  {
    "id": "course-prompt-engineering-chatgpt",
    "name": "Prompt Engineering with ChatGPT",
    "issuer": "Ronnie Sheer",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Apr 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "ChatGPT",
      "Advanced Prompting",
      "Temperature & Top-P",
      "Context Windows",
      "API Scripting"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Practical prompting tactics for conversational LLMs: output conditioning, recursive critique, and structured JSON parsing.",
    "hoursOrModules": "54m 55s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Prompt%20Engineering%20with%20ChatGPT.pdf"
  },
  {
    "id": "course-what-is-genai-demirdag",
    "name": "What Is Generative AI?",
    "issuer": "Pinar Seyhan Demirdag",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated 1 month ago",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Generative AI Principles",
      "Foundational Models",
      "Text & Image Synthesis",
      "Diffusion Models"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Comprehensive walkthrough of generative algorithms, multi-modal synthesis, and industry use-cases across software and design.",
    "hoursOrModules": "1h 17m 41s"
  },
  {
    "id": "course-genai-evolution-search",
    "name": "Generative AI: The Evolution of Thoughtful Online Search",
    "issuer": "Ashley Kennedy, Brandie Nonnecke, and 1 other",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated May 2025",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Semantic Search",
      "RAG Concepts",
      "Information Retrieval",
      "Source Verification"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Evolution of web indexing into neural semantic search, grounding, and retrieval-augmented verification techniques.",
    "hoursOrModules": "31m 17s"
  },
  {
    "id": "course-ethics-genai-dhar",
    "name": "Ethics in the Age of Generative AI",
    "issuer": "Vilas Dhar",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated Dec 2025",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "AI Ethics",
      "Data Privacy",
      "Algorithmic Bias",
      "Societal Impact",
      "Compliance & Governance"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Examination of accountability, algorithmic transparency, copyright litigation, and regulatory compliance (EU AI Act, PDPA).",
    "hoursOrModules": "45m 59s"
  },
  {
    "id": "course-streamlining-copilot-brazzi",
    "name": "Streamlining Your Work with Microsoft Copilot (Nov 2024)",
    "issuer": "Nicholas Brazzi",
    "organization": "Microsoft & LinkedIn",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Nov 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Microsoft Copilot",
      "Cross-App Intelligence",
      "Email & Calendar Synthesis",
      "Workplace Automation"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Leveraging Copilot across Outlook, Teams, Word, and Excel to summarize complex correspondence and draft technical deliverables.",
    "hoursOrModules": "Official Microsoft Curriculum"
  },
  {
    "id": "course-m365-copilot-for-work",
    "name": "Learning Microsoft 365 Copilot for Work (2024)",
    "issuer": "Nicholas Brazzi",
    "organization": "Microsoft & LinkedIn",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Oct 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Microsoft 365 Copilot",
      "Graph Grounding",
      "Enterprise Data Security",
      "Prompt Library"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Mastering Microsoft Graph grounding, tenant-level data security, and enterprise copilot prompting across collaborative workspaces.",
    "hoursOrModules": "29m 49s"
  },
  {
    "id": "course-responsible-ai-managers",
    "name": "Responsible AI for Managers",
    "issuer": "Dr. Terri Horton",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Aug 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Responsible AI",
      "Workforce Governance",
      "Fairness & Inclusivity",
      "Compliance"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Equipping operations managers with frameworks to evaluate algorithm outputs, detect bias, and safeguard associate trust.",
    "hoursOrModules": "23m 26s"
  },
  {
    "id": "course-career-conversations-ai",
    "name": "The Manager's Guide to Career Conversations in the Age of AI",
    "issuer": "Dr. Terri Horton",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Apr 2024",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Talent Development",
      "AI Upskilling",
      "Career Coaching",
      "Associate Retention"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Guiding direct reports on AI upskilling paths, alleviating replacement anxiety, and aligning career progression with modern tools.",
    "hoursOrModules": "57m 21s"
  },
  {
    "id": "course-ai-powered-people-manager",
    "name": "Become an AI-Powered People Manager (2025)",
    "issuer": "Ashley Herd",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated Apr 2025",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "People Management",
      "AI Feedback Loops",
      "1-on-1 Coaching",
      "Performance Management"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Modern people management techniques utilizing AI for objective feedback drafting, sentiment tracking, and performance reviews.",
    "hoursOrModules": "54m 58s"
  },
  {
    "id": "course-collaborative-team-culture-ai",
    "name": "Building a Collaborative Team Culture with AI",
    "issuer": "Madecraft and Andra Vaduva",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Dec 2023",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Team Culture",
      "Collaborative AI",
      "Psychological Safety",
      "Knowledge Sharing"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Fostering psychological safety and transparent peer collaboration when integrating automated AI tools into team workflows.",
    "hoursOrModules": "39m 49s"
  },
  {
    "id": "course-coaching-impact-ai",
    "name": "Enhance Your Coaching Impact with AI",
    "issuer": "Sara Canaday",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated 1 month ago",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Executive Coaching",
      "Active Listening",
      "AI Reflection",
      "Performance Diagnosis"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Synthesizing associate performance telemetry using AI to prepare high-impact, empathetic 1-on-1 coaching conversations.",
    "hoursOrModules": "37m 51s"
  },
  {
    "id": "course-amplify-critical-thinking-ai",
    "name": "Amplify Your Critical Thinking with AI",
    "issuer": "Becki Saltzman",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated 1 week ago",
    "category": "AI & Copilot",
    "credentialType": "Specialized Course",
    "skills": [
      "Critical Thinking",
      "Hypothesis Testing",
      "Cognitive Debiasing",
      "Strategic Analysis"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Using AI as an intellectual sparring partner to challenge assumptions, reveal blind spots, and stress-test strategic roadmaps.",
    "hoursOrModules": "1h 10m 24s"
  },
  {
    "id": "course-pm-foundations-biafore",
    "name": "Project Management Foundations",
    "issuer": "Bonnie Biafore",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated Apr 2025",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "PMBOK Standards",
      "Work Breakdown Structures (WBS)",
      "Scope Baseline",
      "Project Charters"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Core foundations of the Project Management Institute (PMI) framework: project initiation, WBS development, and milestone delivery.",
    "hoursOrModules": "4h 01m 41s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Project%20Management%20Foundations.pdf"
  },
  {
    "id": "course-pm-schedules-biafore",
    "name": "Project Management Foundations: Schedules",
    "issuer": "Bonnie Biafore",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated 3 months ago",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Critical Path Method (CPM)",
      "Gantt Scheduling",
      "Resource Leveling",
      "Float / Slack Calculation"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Rigorous schedule design: dependency sequencing, lead/lag optimization, critical path analysis, and baseline maintenance.",
    "hoursOrModules": "2h 21m 40s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Project%20Management%20Foundations%20Schedules.pdf"
  },
  {
    "id": "course-pm-risk-mcgannon",
    "name": "Project Management Foundations: Risk",
    "issuer": "Bob McGannon",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated 2 months ago",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Risk Identification",
      "Probability-Impact Matrix",
      "Contingency Planning",
      "Risk Mitigation"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Quantitative and qualitative risk modeling, trigger definition, contingency reserves, and enterprise mitigation strategies.",
    "hoursOrModules": "1h 26m 03s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Project%20Management%20Foundations%20Risk.pdf"
  },
  {
    "id": "course-pm-ethics-mcgannon",
    "name": "Project Management Foundations: Ethics",
    "issuer": "Bob McGannon",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated 1 month ago",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "PMI Code of Ethics",
      "Fiduciary Responsibility",
      "Conflict of Interest",
      "Professional Transparency"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Application of the PMI Code of Ethics & Professional Conduct in client engagements, resource allocation, and reporting.",
    "hoursOrModules": "1h 20m 36s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Project%20Management%20Foundations%20Ethics.pdf"
  },
  {
    "id": "course-pm-budgets-mcgannon",
    "name": "Project Management Foundations: Budgets",
    "issuer": "Bob McGannon",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated Jun 2025",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Earned Value Management (EVM)",
      "Cost Variance (CV)",
      "Budget Baselines",
      "Capex / Opex Allocation"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Cost estimation methods, parametric costing, Earned Value Management (CPI/SPI), and budget variance control.",
    "hoursOrModules": "57m 33s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Project%20Management%20Foundations%20Budgets.pdf"
  },
  {
    "id": "course-pm-communication-rose",
    "name": "Project Management Foundations: Communication",
    "issuer": "Doug Rose",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated May 2024",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Communications Matrix",
      "Stakeholder Briefings",
      "Escalation Paths",
      "Status Reporting"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Designing communication management plans, cross-functional stakeholder cadence, and executive crisis messaging.",
    "hoursOrModules": "1h 00m 55s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Project%20Management%20Foundations%20Communication.pdf"
  },
  {
    "id": "course-pm-requirements-stanton",
    "name": "Project Management Foundations: Requirements",
    "issuer": "Daniel Stanton",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated Apr 2024",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Requirements Elicitation",
      "Traceability Matrix (RTM)",
      "Acceptance Criteria",
      "Scope Creep Defense"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Eliciting, documenting, and validating functional and non-functional requirements to guarantee delivery scope containment.",
    "hoursOrModules": "29m 18s"
  },
  {
    "id": "course-pm-teams-stanton",
    "name": "Project Management Foundations: Teams",
    "issuer": "Daniel Stanton",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated Apr 2025",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Tuckman Team Stages",
      "Cross-Functional Synergy",
      "Motivation & Accountability",
      "Pod Leadership"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Leading high-performance delivery squads through Forming-Storming-Norming-Performing transitions.",
    "hoursOrModules": "28m 29s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Project%20Management%20Foundations%20Teams.pdf"
  },
  {
    "id": "course-managing-stakeholders-kasimtseva",
    "name": "Managing Project Stakeholders",
    "issuer": "Natasha Kasimtseva",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Updated Mar 2024",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Stakeholder Salience Model",
      "Power-Interest Grid",
      "Expectation Alignment",
      "Executive Buy-In"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Mapping stakeholder influence, diagnosing resistance, and orchestrating steering committee alignment for enterprise cutovers.",
    "hoursOrModules": "23m 03s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Managing%20Project%20Stakeholders.pdf"
  },
  {
    "id": "course-portfolio-management-jordan",
    "name": "Project Portfolio Management Foundations",
    "issuer": "Andy Jordan",
    "organization": "LinkedIn Learning (PMI Aligned)",
    "organizationLogoId": "pmi",
    "issueDate": "Aug 2018",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Portfolio Optimization",
      "Strategic Alignment",
      "Resource Capacity Planning",
      "Capex Prioritization"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Prioritizing multi-project portfolios against corporate strategic objectives, balancing technical risk and capital allocation.",
    "hoursOrModules": "1h 15m 22s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Project%20Portfolio%20Management%20Foundations.pdf"
  },
  {
    "id": "course-optimizing-m365-mackey",
    "name": "Optimizing Your Work with Microsoft 365",
    "issuer": "Microsoft and Zakiya Mackey",
    "organization": "Microsoft",
    "organizationLogoId": "microsoft",
    "issueDate": "Aug 2022",
    "category": "Power Platform",
    "credentialType": "Specialized Course",
    "skills": [
      "Microsoft 365",
      "SharePoint Modern Lists",
      "OneDrive Governance",
      "Workplace Productivity"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Maximizing collaborative cloud productivity across modern SharePoint libraries, Teams hubs, and Microsoft 365 services.",
    "hoursOrModules": "1h 45m 12s"
  },
  {
    "id": "course-managing-projects-m365-matheney",
    "name": "Managing Projects with Microsoft 365",
    "issuer": "Microsoft and Christine Matheney",
    "organization": "Microsoft",
    "organizationLogoId": "microsoft",
    "issueDate": "Aug 2022",
    "category": "Power Platform",
    "credentialType": "Specialized Course",
    "skills": [
      "Microsoft Planner",
      "Power Automate",
      "Lists",
      "Project for the Web",
      "Status Dashboards"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Architecting agile task-tracking and status dispatch pipelines using Planner, SharePoint Lists, and automated notification flows.",
    "hoursOrModules": "49m 21s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Managing%20Projects%20with%20Microsoft%20365.pdf"
  },
  {
    "id": "course-collaborating-m365-hodge",
    "name": "Collaborating with Microsoft 365",
    "issuer": "Microsoft and Courtney Hodge",
    "organization": "Microsoft",
    "organizationLogoId": "microsoft",
    "issueDate": "Aug 2022",
    "category": "Power Platform",
    "credentialType": "Specialized Course",
    "skills": [
      "Microsoft Teams",
      "SharePoint Architecture",
      "Co-Authoring",
      "External Sharing Governance"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Establishing secure multi-tenant collaboration policies, co-authoring workflows, and external guest permission boundaries.",
    "hoursOrModules": "48m 54s"
  },
  {
    "id": "course-powerapps-cds-courter",
    "name": "Microsoft PowerApps: Using the Common Data Service",
    "issuer": "Gini von Courter",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Mar 2019",
    "category": "Power Platform",
    "credentialType": "Specialized Course",
    "skills": [
      "Common Data Service (Dataverse)",
      "Entity Modeling",
      "1:N & N:N Relationships",
      "Business Rules",
      "Role-Based Security"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Relational entity schema design, field validation rules, and transactional security modeling inside the Common Data Service (now Dataverse).",
    "hoursOrModules": "1h 23m 30s"
  },
  {
    "id": "course-powerapps-essential-basics",
    "name": "Microsoft Power Apps Essential Training: The Basics (2022)",
    "issuer": "Gini von Courter",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Jun 2022",
    "category": "Power Platform",
    "credentialType": "Specialized Course",
    "skills": [
      "Power Apps Canvas",
      "Power Fx Expressions",
      "Screen Navigation",
      "Form Data Binding",
      "Delegation Rules"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Designing enterprise mobile and desktop Canvas applications with responsive layouts, delegation-safe queries, and custom Power Fx logic.",
    "hoursOrModules": "1h 33m 20s"
  },
  {
    "id": "course-powerapps-data-driven-gold",
    "name": "Power Apps: Building Data-Driven Apps",
    "issuer": "Phil Gold",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Mar 2020",
    "category": "Power Platform",
    "credentialType": "Specialized Course",
    "skills": [
      "Dataverse Integration",
      "Model-Driven Apps",
      "Custom Business Process Flows",
      "Subgrids",
      "Data Connectors"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Developing complex data-driven applications powered by multi-table Dataverse schemas and multi-stage guided business process flows.",
    "hoursOrModules": "2h 01m 32s"
  },
  {
    "id": "course-power-automate-essential-kulterman",
    "name": "Microsoft Power Automate Essential Training (2022)",
    "issuer": "Bill Kulterman",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Sep 2022",
    "category": "Power Platform",
    "credentialType": "Specialized Course",
    "skills": [
      "Cloud Flows",
      "Automated Triggers",
      "Dynamic Content",
      "Error Handling",
      "Approval Engines"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Building robust cloud flows with conditional branching, parallel approval routes, error-trapping run-after blocks, and automated notifications.",
    "hoursOrModules": "2h 17m 22s"
  },
  {
    "id": "course-power-automate-advanced-gold",
    "name": "Microsoft Power Automate: Advanced Business Automation",
    "issuer": "Phil Gold",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Aug 2022",
    "category": "Power Platform",
    "credentialType": "Specialized Course",
    "skills": [
      "Advanced Automation",
      "OData Filtering",
      "Parse JSON Actions",
      "Child Flows",
      "Desktop RPA"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Advanced enterprise automation: OData filter queries, complex JSON parsing, reusable modular child flows, and service principal authentication.",
    "hoursOrModules": "1h 07m 31s"
  },
  {
    "id": "course-intro-career-data-analytics-hunt",
    "name": "Introduction to Career Skills in Data Analytics",
    "issuer": "Robin Hunt",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Aug 2022",
    "category": "Data & Analytics",
    "credentialType": "Specialized Course",
    "skills": [
      "Data Analyst Mindset",
      "Data Hygiene",
      "Business Requirements Gathering",
      "Analytical Framing"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Translating ambiguous operational problems into structured analytical inquiries, data cleansing protocols, and decision models.",
    "hoursOrModules": "2h 21m 36s"
  },
  {
    "id": "course-learning-data-analytics-foundations",
    "name": "Learning Data Analytics: 1 Foundations",
    "issuer": "Robin Hunt",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated Dec 2023",
    "category": "Data & Analytics",
    "credentialType": "Specialized Course",
    "skills": [
      "Relational Database Basics",
      "SQL Querying",
      "Data Normalization",
      "Descriptive Statistics"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Core foundations of data querying, relational database normal forms (1NF-3NF), data types, and descriptive statistical measures.",
    "hoursOrModules": "3h 29m 13s"
  },
  {
    "id": "course-learning-data-analytics-extending",
    "name": "Learning Data Analytics Part 2: Extending and Applying Core Knowledge",
    "issuer": "Robin Hunt",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated Dec 2023",
    "category": "Data & Analytics",
    "credentialType": "Specialized Course",
    "skills": [
      "Advanced SQL Joins",
      "Aggregation Functions",
      "Subqueries",
      "Hypothesis Validation"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Extending foundational analytics: multi-table joins, subqueries, group rollups, and empirical hypothesis verification.",
    "hoursOrModules": "3h 22m 51s"
  },
  {
    "id": "course-excel-data-viz-dutton",
    "name": "Excel Data Visualization: Designing Custom Visualizations",
    "issuer": "Maven Analytics and Chris Dutton",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "linkedin",
    "issueDate": "Updated Mar 2022",
    "category": "Data & Analytics",
    "credentialType": "Specialized Course",
    "skills": [
      "Data Visualization",
      "Custom Charting",
      "Dynamic Dashboarding",
      "Visual Hierarchy"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Crafting bespoke executive charts, bullet graphs, sparklines, and dynamic dashboards tailored for C-suite decision support.",
    "hoursOrModules": "2h 03m 50s",
    "pdfUrl": "/certificates/CertificateOfCompletion_Excel%20Data%20Visualization%20Designing%20Custom%20Visualizations.pdf"
  },
  {
    "id": "course-excel-essential-taylor",
    "name": "Excel Essential Training (Microsoft 365) (2022)",
    "issuer": "Dennis Taylor",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "microsoft-linkedin",
    "issueDate": "Updated Jul 2023",
    "category": "Data & Analytics",
    "credentialType": "Specialized Course",
    "skills": [
      "Microsoft 365 Excel",
      "XLOOKUP",
      "PivotTables",
      "Data Validation",
      "Conditional Formatting"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Comprehensive mastery of Excel 365: dynamic formulas (XLOOKUP, FILTER, UNIQUE), PivotTable slicing, and automated data audits.",
    "hoursOrModules": "2h 29m 28s"
  },
  {
    "id": "course-six-sigma-green-belt-chua",
    "name": "Six Sigma: Green Belt",
    "issuer": "Richard Chua",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "six-sigma",
    "issueDate": "Updated Oct 2025",
    "category": "Project & Process",
    "credentialType": "Specialized Course",
    "skills": [
      "Six Sigma DMAIC",
      "Root Cause Analysis (Fishbone/5 Whys)",
      "Process Capability (Cp/Cpk)",
      "Statistical Process Control (SPC)"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Rigorous continuous process improvement using DMAIC methodology, defect reduction metrics, control charts, and variance elimination.",
    "productionApplication": "Applied at Concentrix to eliminate defect outliers, cut ticket AHT by 25%, and stabilize quality grading.",
    "hoursOrModules": "2h 02m 01s"
  },
  {
    "id": "course-intro-web-apis-probert",
    "name": "Introduction to Web APIs",
    "issuer": "Andrew Probert",
    "organization": "LinkedIn Learning",
    "organizationLogoId": "general",
    "issueDate": "Mar 2023",
    "category": "Enterprise Automation",
    "credentialType": "Specialized Course",
    "skills": [
      "RESTful APIs",
      "HTTP Methods & Status Codes",
      "JSON Payloads",
      "OAuth2 & API Authentication",
      "Postman Testing"
    ],
    "verified": true,
    "credentialUrl": "https://www.linkedin.com/in/aliakhmadf/details/certifications/",
    "summary": "Deep architectural grounding in RESTful Web APIs, endpoint routing, authorization tokens, rate limiting, and webhook dispatch.",
    "hoursOrModules": "1h 20m 48s"
  }
];

export const LINKEDIN_HONORS_AWARDS: HonorAwardItem[] = [
  {
    "id": "award-accenture-hang-tuah",
    "title": "Hang Tuah Award — Best Team Lead Distinction",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Global Delivery Center · Top Operations Lead",
    "year": "July 2021",
    "shortDate": "Jul 2021",
    "tier": "pinnacle",
    "category": "enterprise",
    "isMarqueeMilestone": true,
    "highlightBadge": "#1 Team Lead Across Delivery Center",
    "metricHighlight": "Top Delivery Lead across Delivery Center · 800% Queue Surge Recovery · >98% SLA",
    "description": "Conferred the prestigious Hang Tuah Award as the top-performing Team Lead across the Accenture delivery center, recognized for exceptional people leadership, frontline morale, and commanding high-stakes queue crisis governance.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-diamond",
    "title": "Accenture Diamond Award — Global Operational Impact",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Operations Automation & Global Accounts",
    "year": "2021",
    "shortDate": "2021",
    "tier": "pinnacle",
    "category": "enterprise",
    "isMarqueeMilestone": true,
    "highlightBadge": "Global Low-Code Operational Automation",
    "metricHighlight": ">98% SLA Sustained · Global Low-Code Automation (Power Platform)",
    "description": "Recognized for pioneering low-code operational automation on the floor (Power Apps, Power Automate, Power BI) and sustaining >98% SLA compliance across global enterprise accounts.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-cnx-excellence",
    "title": "Concentrix Operation Team Manager Distinction",
    "issuer": "Concentrix",
    "organization": "Concentrix",
    "organizationLogoId": "concentrix",
    "departmentOrScope": "APAC Delivery Operations (QA, Policy & Training)",
    "year": "2024",
    "shortDate": "2024",
    "tier": "pinnacle",
    "category": "enterprise",
    "isMarqueeMilestone": true,
    "highlightBadge": "380% Scale · 7 Language Pods · >98% SLA",
    "metricHighlight": "34 Direct Reports across 7 Language Pods · 380% Scale · -25% AHT (Six Sigma)",
    "description": "Awarded by Concentrix senior executive leadership as Operations Team Manager (QA, Policy & Training): led 34 direct reports across 7 language pods (Indonesian, Chinese Mainland, Korean, Japanese, English, Thai, Vietnamese), scaled squad by 380%, sustained >98% contractual SLA, and reduced AHT by 25% via Six Sigma DMAIC.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-uum-akj-leadership",
    "title": "Special Achievement in Leadership — Anugerah Kerana Jasa (AK_J)",
    "issuer": "Universiti Utara Malaysia (UUM)",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "Institutional Student Affairs & Governance",
    "year": "April 2015",
    "shortDate": "Apr 2015",
    "tier": "pinnacle",
    "category": "academic",
    "isMarqueeMilestone": true,
    "highlightBadge": "Top Institutional Honor (Anugerah Kerana Jasa)",
    "metricHighlight": "Top Institutional Honor · Cross-Cultural Governance & International Representation",
    "description": "Received the prestigious AK_J (Anugerah Kerana Jasa) award from UUM for special achievement in student governance, cross-cultural leadership, and international institutional representation.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-uum-scholarship",
    "title": "UUM International Scholarship Scheme Achievement Award",
    "issuer": "Universiti Utara Malaysia (UUM)",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "Academic & International Student Affairs",
    "year": "February 2014",
    "shortDate": "Feb 2014",
    "tier": "pinnacle",
    "category": "academic",
    "isMarqueeMilestone": true,
    "highlightBadge": "RM10,000 / Semester Merit Fellowship",
    "metricHighlight": "RM10,000 / Semester Fellowship · Top 2% Merit Selection (10,000+ Students)",
    "description": "Awarded a competitive merit scholarship of RM10,000 per semester, selected among 10,000+ domestic and 200+ international students for outstanding performance in academics, student governance, and community involvement.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-leadership",
    "title": "Accenture Leadership Award — Operational Leadership Contribution",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Enterprise Service Delivery Queues",
    "year": "July 2020",
    "shortDate": "Jul 2020",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "Senior Leadership Recognition",
    "metricHighlight": "Senior Leadership Honor · Cross-Functional Coaching & Rotational Shift Governance",
    "description": "Awarded by Accenture senior leadership for outstanding leadership contributions, cross-functional coaching, and sustained SLA performance across global enterprise service delivery queues.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-best-tl-apr-2019",
    "title": "The Best Operations Team Lead Award (April 2019)",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Frontline Service Operations",
    "year": "April 2019",
    "shortDate": "Apr 2019",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "Consecutive Streak #3 (April 2019)",
    "metricHighlight": "Consecutive Streak #3 · #1 Highest SLA Adherence & Quality Floor-Wide",
    "description": "Acknowledged for achieving the #1 best team performance and highest SLA adherence across all service delivery teams on the operations floor for April 2019.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-best-tl-mar-2019",
    "title": "The Best Operations Team Lead Award (March 2019)",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Frontline Service Operations",
    "year": "March 2019",
    "shortDate": "Mar 2019",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "Consecutive Streak #2 (March 2019)",
    "metricHighlight": "Consecutive Streak #2 · Highest Monthly Delivery Velocity & Queue Clearing",
    "description": "Recognized for leading the operations team to top monthly performance, driving queue optimization, and meeting all service quality targets for March 2019.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-best-tl-feb-2019",
    "title": "The Best Operations Team Lead Award (February 2019)",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Frontline Service Operations",
    "year": "February 2019",
    "shortDate": "Feb 2019",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "Consecutive Streak #1 (February 2019)",
    "metricHighlight": "Consecutive Streak #1 · 100% Shift Schedule Adherence & Resolution Velocity",
    "description": "Awarded for consistently driving the highest team performance, schedule adherence, and resolution velocity across rotational shifts for February 2019.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-best-people",
    "title": "The Best People Award (Team Lead) — Quarterly Business Review (QBR)",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Quarterly Business Review (QBR)",
    "year": "September 2018",
    "shortDate": "Sep 2018",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "QBR Best People Award · <5% Attrition",
    "metricHighlight": "<5% Annualized Attrition · Frontline Morale & Retention Champion",
    "description": "Honored with the prestigious Best People Award during the Quarterly Business Review (QBR) for excellence in people management, frontline coaching, and maintaining annualized team attrition below 5%.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-deans-list-sem5",
    "title": "Dean's Academic Award — Semester 5 (Final Year Distinction)",
    "issuer": "School of International Studies, UUM",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "School of International Studies (COLGIS)",
    "year": "October 2016",
    "shortDate": "Oct 2016",
    "tier": "academic",
    "category": "academic",
    "isMarqueeMilestone": false,
    "highlightBadge": "5th Consecutive Dean's Honor (Final Year)",
    "metricHighlight": "5th Consecutive Dean's Honor · Top-Percentile Final Year Standing",
    "description": "Awarded Dean's Academic Honors by Universiti Utara Malaysia for distinguished scholastic achievement in Bachelor of International Business Management (Honours).",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-deans-list-sem4",
    "title": "Dean's Academic Award — Semester 4",
    "issuer": "School of International Studies, UUM",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "School of International Studies (COLGIS)",
    "year": "October 2015",
    "shortDate": "Oct 2015",
    "tier": "academic",
    "category": "academic",
    "isMarqueeMilestone": false,
    "highlightBadge": "4th Consecutive Dean's Honor",
    "metricHighlight": "4th Consecutive Dean's Honor · Top GPA in International Business & Logistics",
    "description": "Conferred by Universiti Utara Malaysia for top-tier academic GPA standing in International Business & Logistics.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-deans-list-sem3",
    "title": "Dean's Academic Award — Semester 3",
    "issuer": "School of International Studies, UUM",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "School of International Studies (COLGIS)",
    "year": "March 2015",
    "shortDate": "Mar 2015",
    "tier": "academic",
    "category": "academic",
    "isMarqueeMilestone": false,
    "highlightBadge": "3rd Consecutive Dean's Honor",
    "metricHighlight": "3rd Consecutive Dean's Honor · COLGIS Academic Distinction",
    "description": "Conferred by the Dean of the School of International Studies (COLGIS) for top-percentile academic standing.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-deans-list-sem2",
    "title": "Dean's Academic Award — Semester 2",
    "issuer": "School of International Studies, UUM",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "School of International Studies (COLGIS)",
    "year": "March 2014",
    "shortDate": "Mar 2014",
    "tier": "academic",
    "category": "academic",
    "isMarqueeMilestone": false,
    "highlightBadge": "2nd Consecutive Dean's Honor",
    "metricHighlight": "2nd Consecutive Dean's Honor · Coursework Mastery & Trade Distinction",
    "description": "Conferred by the Dean of the School of International Studies for outstanding coursework mastery and academic distinction.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-deans-list-sem1",
    "title": "Dean's Academic Award — Semester 1",
    "issuer": "School of International Studies, UUM",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "School of International Studies (COLGIS)",
    "year": "October 2013",
    "shortDate": "Oct 2013",
    "tier": "academic",
    "category": "academic",
    "isMarqueeMilestone": false,
    "highlightBadge": "Dean's Academic Honor (Semester 1)",
    "metricHighlight": "Dean's Academic Honor (Semester 1) · Exemplary Foundation Distinction",
    "description": "Awarded Dean's Academic Honors in the first academic semester for exemplary academic achievement.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-uum-mpp-exco",
    "title": "First International Student Elected to Student Representative Council (SRC) & President of IBMS",
    "issuer": "Universiti Utara Malaysia (UUM) / Majlis Perwakilan Pelajar (SRC)",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "Majlis Perwakilan Pelajar (SRC) & IBMS",
    "year": "2014 – 2017",
    "shortDate": "2014 – 2017",
    "tier": "academic",
    "category": "academic",
    "isMarqueeMilestone": false,
    "highlightBadge": "1st International Student SRC & IBMS President",
    "metricHighlight": "1st International SRC Member · SOIS Bus Stop · RM1,500 Fee Debt Reform",
    "description": "First international student elected to the Student Representative Council (SRC / MPP UUM) for International Affairs (Kerusi Hal Ehwal Antarabangsa) and served as President of IBMS. Spearheaded 8 cross-border international delegations (4 Indonesia, 2 Thailand, 1 South Korea, 1 Philippines). Delivered landmark manifesto commitments: constructed the permanent bus stop at SOIS (School of International Studies) with name engraved as contributor, and lowered international student bonds while expanding outstanding tuition fee debt allowance from RM150 to RM1,500.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  }
];

export const CONSOLIDATED_HONORS_AWARDS: HonorAwardItem[] = [
  // 01. Enterprise Pinnacle Milestones
  {
    "id": "award-accenture-hang-tuah",
    "title": "Hang Tuah Award — Best Team Lead Distinction",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Global Delivery Center · Top Operations Lead",
    "year": "July 2021",
    "shortDate": "Jul 2021",
    "tier": "pinnacle",
    "category": "enterprise",
    "isMarqueeMilestone": true,
    "highlightBadge": "#1 Team Lead Across Delivery Center",
    "metricHighlight": "Top Delivery Lead across Delivery Center · 800% Queue Surge Recovery · >98% SLA",
    "description": "Conferred the prestigious Hang Tuah Award as the top-performing Team Lead across the Accenture delivery center, recognized for exceptional people leadership, frontline morale, and commanding high-stakes queue crisis governance.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-diamond",
    "title": "Accenture Diamond Award — Global Operational Impact",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Operations Automation & Global Accounts",
    "year": "2021",
    "shortDate": "2021",
    "tier": "pinnacle",
    "category": "enterprise",
    "isMarqueeMilestone": true,
    "highlightBadge": "Global Low-Code Operational Automation",
    "metricHighlight": ">98% SLA Sustained · Global Floor-Wide Automation (Power Platform)",
    "description": "Recognized for pioneering low-code operational automation on the floor (Power Apps, Power Automate, Power BI) and sustaining >98% SLA compliance across global enterprise accounts.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-cnx-excellence",
    "title": "Concentrix Operation Team Manager Distinction",
    "issuer": "Concentrix",
    "organization": "Concentrix",
    "organizationLogoId": "concentrix",
    "departmentOrScope": "APAC Delivery Operations (QA, Policy & Training)",
    "year": "2024",
    "shortDate": "2024",
    "tier": "pinnacle",
    "category": "enterprise",
    "isMarqueeMilestone": true,
    "highlightBadge": "380% Scale · 7 Language Pods · >98% SLA",
    "metricHighlight": "34 Direct Reports across 7 Language Pods · 380% Scale · -25% AHT (Six Sigma)",
    "description": "Awarded by Concentrix senior executive leadership as Operations Team Manager (QA, Policy & Training): led 34 direct reports across 7 language pods (Indonesian, Chinese Mainland, Korean, Japanese, English, Thai, Vietnamese), scaled squad by 380%, sustained >98% contractual SLA, and reduced AHT by 25% via Six Sigma DMAIC.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  // 02. Academic Pinnacle Honors & Consolidated Showcase
  {
    "id": "award-uum-akj-leadership",
    "title": "Special Achievement in Leadership — Anugerah Kerana Jasa (AK_J)",
    "issuer": "Universiti Utara Malaysia (UUM)",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "Institutional Student Affairs & Governance",
    "year": "April 2015",
    "shortDate": "Apr 2015",
    "tier": "pinnacle",
    "category": "academic",
    "isMarqueeMilestone": true,
    "highlightBadge": "Top Institutional Honor (Anugerah Kerana Jasa)",
    "metricHighlight": "Top Institutional Honor · Cross-Cultural Governance & International Representation",
    "description": "Received the prestigious AK_J (Anugerah Kerana Jasa) award from UUM for special achievement in student governance, cross-cultural leadership, and international institutional representation.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-uum-scholarship",
    "title": "UUM International Scholarship Scheme Achievement Award",
    "issuer": "Universiti Utara Malaysia (UUM)",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "Academic & International Student Affairs",
    "year": "February 2014",
    "shortDate": "Feb 2014",
    "tier": "pinnacle",
    "category": "academic",
    "isMarqueeMilestone": true,
    "highlightBadge": "RM10,000 / Semester Merit Fellowship",
    "metricHighlight": "RM10,000 / Semester Fellowship · Top 2% Merit Selection (10,000+ Students)",
    "description": "Awarded a competitive merit scholarship of RM10,000 per semester, selected among 10,000+ domestic and 200+ international students for outstanding performance in academics, student governance, and community involvement.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-deans-list-consolidated",
    "title": "5× Dean's List Academic Honors (2013–2016)",
    "issuer": "Universiti Utara Malaysia (UUM)",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "School of International Studies (COLGIS)",
    "year": "2013 – 2016",
    "shortDate": "2013 – 2016",
    "tier": "pinnacle",
    "category": "academic",
    "isMarqueeMilestone": true,
    "highlightBadge": "5 Consecutive Semesters · CGPA 3.48 (Second Upper)",
    "metricHighlight": "5 Consecutive Semesters · Top Academic GPA Distinction · Minor in Logistics",
    "description": "Conferred 5 consecutive Dean's Academic Honors across 5 academic semesters throughout the Bachelor of International Business Management (Honours) program by the Dean of the School of International Studies (COLGIS) for sustained scholastic excellence and top-tier GPA standing.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/",
    "deansListSemesters": [
      {
        "semester": "Sem 1",
        "session": "A131",
        "period": "Oct 2013",
        "standing": "Dean's Academic Honor (GPA ≥ 3.50)",
        "school": "School of International Studies (COLGIS)",
        "description": "Exemplary first-semester academic distinction in international business foundations."
      },
      {
        "semester": "Sem 2",
        "session": "A132",
        "period": "Mar 2014",
        "standing": "Dean's Academic Honor (GPA ≥ 3.50)",
        "school": "School of International Studies (COLGIS)",
        "description": "Second consecutive semester honor for coursework mastery and international trade distinction."
      },
      {
        "semester": "Sem 3",
        "session": "A141",
        "period": "Mar 2015",
        "standing": "Dean's Academic Honor (GPA ≥ 3.50)",
        "school": "School of International Studies (COLGIS)",
        "description": "Third consecutive semester distinction for top-percentile academic standing across core business analytical curriculum."
      },
      {
        "semester": "Sem 4",
        "session": "A142",
        "period": "Oct 2015",
        "standing": "Dean's Academic Honor (GPA ≥ 3.50)",
        "school": "School of International Studies (COLGIS)",
        "description": "Fourth consecutive semester honors for top-tier GPA standing in International Business & Logistics operations."
      },
      {
        "semester": "Sem 5",
        "session": "A151",
        "period": "Oct 2016",
        "standing": "Dean's Academic Honor (Final Year Distinction)",
        "school": "School of International Studies (COLGIS)",
        "description": "Final year scholastic distinction completing a 5-semester consecutive honors streak across the degree program."
      }
    ]
  },
  // 03. Enterprise Operational & Leadership Awards
  {
    "id": "award-accenture-leadership",
    "title": "Accenture Leadership Award — Operational Leadership Contribution",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Enterprise Service Delivery Queues",
    "year": "July 2020",
    "shortDate": "Jul 2020",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "Senior Leadership Recognition",
    "metricHighlight": "Senior Leadership Honor · Cross-Functional Coaching & Rotational Shift Governance",
    "description": "Awarded by Accenture senior leadership for outstanding leadership contributions, cross-functional coaching, and sustained SLA performance across global enterprise service delivery queues.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-best-tl-apr-2019",
    "title": "The Best Operations Team Lead Award (April 2019)",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Frontline Service Operations",
    "year": "April 2019",
    "shortDate": "Apr 2019",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "Consecutive Streak #3 (April 2019)",
    "metricHighlight": "Consecutive Streak #3 · #1 Highest SLA Adherence & Quality Floor-Wide",
    "description": "Acknowledged for achieving the #1 best team performance and highest SLA adherence across all service delivery teams on the operations floor for April 2019.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-best-tl-mar-2019",
    "title": "The Best Operations Team Lead Award (March 2019)",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Frontline Service Operations",
    "year": "March 2019",
    "shortDate": "Mar 2019",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "Consecutive Streak #2 (March 2019)",
    "metricHighlight": "Consecutive Streak #2 · Highest Monthly Delivery Velocity & Queue Clearing",
    "description": "Recognized for leading the operations team to top monthly performance, driving queue optimization, and meeting all service quality targets for March 2019.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-best-tl-feb-2019",
    "title": "The Best Operations Team Lead Award (February 2019)",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Frontline Service Operations",
    "year": "February 2019",
    "shortDate": "Feb 2019",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "Consecutive Streak #1 (February 2019)",
    "metricHighlight": "Consecutive Streak #1 · 100% Shift Schedule Adherence & Resolution Velocity",
    "description": "Awarded for consistently driving the highest team performance, schedule adherence, and resolution velocity across rotational shifts for February 2019.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  {
    "id": "award-accenture-best-people",
    "title": "The Best People Award (Team Lead) — Quarterly Business Review (QBR)",
    "issuer": "Accenture",
    "organization": "Accenture",
    "organizationLogoId": "accenture",
    "departmentOrScope": "Quarterly Business Review (QBR)",
    "year": "September 2018",
    "shortDate": "Sep 2018",
    "tier": "corporate",
    "category": "enterprise",
    "isMarqueeMilestone": false,
    "highlightBadge": "QBR Best People Award · <5% Attrition",
    "metricHighlight": "<5% Annualized Attrition · Frontline Morale & Retention Champion",
    "description": "Honored with the prestigious Best People Award during the Quarterly Business Review (QBR) for excellence in people management, frontline coaching, and maintaining annualized team attrition below 5%.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  },
  // 04. Academic Student Governance & Representation
  {
    "id": "award-uum-mpp-exco",
    "title": "First International Student Elected to Student Representative Council (SRC) & President of IBMS",
    "issuer": "Universiti Utara Malaysia (UUM) / Majlis Perwakilan Pelajar (SRC)",
    "organization": "Universiti Utara Malaysia (UUM)",
    "organizationLogoId": "uum",
    "departmentOrScope": "Majlis Perwakilan Pelajar (SRC) & IBMS",
    "year": "2014 – 2017",
    "shortDate": "2014 – 2017",
    "tier": "academic",
    "category": "academic",
    "isMarqueeMilestone": false,
    "highlightBadge": "1st International Student SRC & IBMS President",
    "metricHighlight": "1st International SRC Member · SOIS Bus Stop · RM1,500 Fee Debt Reform",
    "description": "First international student elected to the Student Representative Council (SRC / MPP UUM) for International Affairs (Kerusi Hal Ehwal Antarabangsa) and served as President of IBMS. Spearheaded 8 cross-border international delegations (4 Indonesia, 2 Thailand, 1 South Korea, 1 Philippines). Delivered landmark manifesto commitments: constructed the permanent bus stop at SOIS (School of International Studies) with name engraved as contributor, and lowered international student bonds while expanding outstanding tuition fee debt allowance from RM150 to RM1,500.",
    "verificationUrl": "https://www.linkedin.com/in/aliakhmadf/details/honors/"
  }
];

export const LINKEDIN_TESTIMONIALS: LinkedInTestimonial[] = [
  {
    id: "test-accenture-sdl",
    name: "Service Delivery Lead (SDL)",
    role: "Service Delivery Leader & Senior Operations Manager",
    company: "Accenture",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "All our leadership recognized Ali's exceptional talent in operational innovation. He was consistently a benchmark top performer on the floor, and I continually encouraged him to join our Business Excellence (BE) team because of his unique ability to automate operational friction and elevate quality metrics across every shift.",
    scope: "Floor Innovation, Business Excellence (BE) & Top Operational Performance",
    date: "Nov 2022",
    badge: "Accenture SDL · Business Excellence"
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
      content: `Before stepping into enterprise solution architecture, I spent four years on the operations floor at Accenture and Concentrix. I started in August 2017 writing PL/SQL queries and forecasting queues as a frontline Data Analyst. Over four merit promotions, I moved from frontline analytics to Junior Team Lead, Team Lead, and Senior Team Lead at Accenture, followed by serving as Operations Team Manager (QA, Policy & Training) at Concentrix directing cross-functional customer support and trust-and-safety delivery across seven APAC markets.

Floor management taught me how systems actually fail. At Concentrix, we scaled a multilingual operations pod from 9 to 34 agents handling seven international jurisdictions. When queue spikes hit, our biggest friction was not agent motivation—it was tooling blindness. Due to a strict zero-phone policy on the production floor, Team Leaders were not allowed mobile phones at their desks; to check if a missing agent had sent a sick leave notice or tardiness update via WhatsApp, Team Leaders were forced to continuously walk back and forth to the locker room. This caused severe response delays, fragmented attendance logs, and hours burned manually compiling spreadsheets instead of coaching queues. During customer triage, agents toggled between four disconnected browser tabs, bleeding 110 seconds of pure navigation latency on every single ticket.

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

This same operational discipline reinforced team leadership on the frontline. At Accenture, when a major regional platform outage triggered an 800% ticket surge across Southeast Asian e-commerce queues, I commanded real-time queue recovery, stabilizing operations and restoring full contractual SLA adherence within 48 hours without associate burnout—an achievement recognized with the prestigious Hang Tuah Distinction and the Accenture Diamond Award. Later at Concentrix, the internal tools I built—PulseTrack (centralized Forms + Power Automate + SharePoint + Power BI agent status system with Teams threshold alerting) and SmartFlow (parallel-processing M365 automation engine dispatching Operations, Finance, Recruitment, and Training payloads simultaneously)—slashed manual reporting by 90%, achieved 98% status accuracy, cut TL admin workload by 60–80% by eliminating locker trips, and eliminated 110 seconds of tab-switching latency per ticket. My operations squad maintained a 98%+ contractual SLA compliance record while scaling 380% across seven countries, holding annualized staff attrition below 5%.

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
      dimension: "Frontline Operations & Resource Workflows",
      before: "2–3 hrs/shift compiling agent status from WhatsApp; sequential email coordination across Ops/Finance/HR causing delayed go-lives",
      after: "Centralized M365 Forms + Power Automate parallel dispatch + SharePoint + Power BI + Teams Alerts (PulseTrack & SmartFlow)",
      delta: "90% manual reporting drop; 80% admin overhead cut; 100% real-time transparency; zero-defect billing"
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



