# Project Showcase Gallery & Interface Architecture Catalog

> **Standards Alignment:** Product Portfolio Architect Protocol — Stage 4 Visual Showcase Specifications  
> **Ergonomic Standards:** Minimum 48x48dp touch targets, WCAG 2.2 AA color contrast ratios, safe-area hardware insets, deterministic zero-layout-shift (CLS ≤ 0.1).  
> **Visual Assets:** 
> - 🎨 **Interactive Lightbox Viewer:** [**`IMAGE_GALLERY.html`**](./IMAGE_GALLERY.html) (Filterable UI, Modal Lightbox, Zoom/Pan)
> - 🖼️ **Markdown Screenshot Catalog:** [**`IMAGE_GALLERY.md`**](./IMAGE_GALLERY.md) (All 55 High-Definition 4:3 screenshots across 11 applications with technical context and 5 mandatory core screens)

---

## 1. Flagship Application Interface Specifications

### 📱 1. SaltDistribute — B2B Wholesale Salt Logistics Engine
- **Target Form Factor:** Dual Responsive (Mobile Viewport: 390×844 dp with Edge-to-Edge Material 3 Insets | Desktop: 1440×900 dp)
- **Primary Color Tokens:** Emerald Green (`#006C4C`), Deep Forest Accent (`#003825`), Surface Light (`#F7FAF8`), High-Contrast Dark (`#121513`)
- **Key Ergonomic Implementations:** Floating Action Button (FAB) clearance above native navigation bar; 48dp minimum tap targets for tier quantity steppers.

| Screen Viewport | Architectural Context & User Job | Key Interaction & Ergonomic Standards |
| :--- | :--- | :--- |
| **1. Value Proposition & Buyer Portal Hero** | Direct visual categorization of bulk salt grades (Refined Iodized, Solar Industrial, Agriculture). Communicates real-time price tiers and bulk tonnage thresholds in < 3 seconds. | Primary CTA (`"Pesan Sekarang"`) positioned in upper viewport thumb zone; badge indicators for official factory certification. |
| **2. Dynamic Tier Calculation & Checkout** | Step-by-step tonnage ordering flow with automatic tier discounts (1–5 tons, 5–20 tons, 20+ tons). | Numeric steppers with haptic feedback (`expo-haptics`); zero layout shifts when calculating regional freight delivery tariffs. |
| **3. Seller Pipeline & Kanban Telemetry** | High-density administrative dashboard for dispatch managers tracking active truck shipments, GPS driver proximity, and order states (`Menunggu`, `Diproses`, `Terkirim`). | Information-dense tabular views; color-coded status badges with WCAG AA compliant text contrast; zero-polling reactive Firestore stream updates. |
| **4. Proof Upload & Offline Recovery State** | Graceful handling of network drops during proof-of-payment image submission in remote coastal warehouse zones. | Automated client-side canvas downsampling (< 500KB); persistent offline queue in AsyncStorage with visual offline banner and retry lease. |

---

### 📱 2. Jastip Cross-Border Manager — International Sourcing PWA
- **Target Form Factor:** Mobile-First (390×844 dp, optimized for single-hand store aisle operation)
- **Primary Color Tokens:** Deep Teal (`#005C55`), Sky Cyan (`#0284C7`), Amber Warning (`#D97706`), Dark Background (`#0F172A`)
- **Key Ergonomic Implementations:** Bottom navigation with thumb-accessible 5-tab switcher; camera scanner overlay with auto-torch toggle.

| Screen Viewport | Architectural Context & User Job | Key Interaction & Ergonomic Standards |
| :--- | :--- | :--- |
| **1. Active Trip Operational Cockpit** | Live overview of current overseas shopping trip (e.g., Bangkok Nov 2026). Displays real-time currency conversion rate, luggage gauge, and total triaged item count. | Instant comprehension of luggage weight allowance (`baggageUsedKg` vs `baggageTotalKg`) via an animated SVG gauge; 1-tap currency switcher. |
| **2. High-Speed Store Aisle Triage** | In-store item checklist grouped by retailer and aisle. Allows instant 1-tap state transition (`Dibeli`, `Menunggu`, `Habis`, `Konfirmasi`). | 4-color high-contrast swipe actions; integrated continuous barcode scanner (`html5-qrcode`) with acoustic and haptic confirmation. |
| **3. Cuan Analytics & Arbitrage Telemetry** | Real-time financial dashboard displaying gross sales, foreign currency expenditures, locked exchange margins, and net profit (`Cuan Bersih`). | Interactive Sparkline charts; breakdown of domestic vs international shipping overhead; zero hidden currency calculation gaps. |
| **4. Web Bluetooth Thermal Print Console** | Hotel-room shipping label generator connecting directly to battery-powered 58mm ESC/POS mini thermal printers. | Zero-driver wireless printing via Web Bluetooth API; pre-rendered 384-dot ESC/POS bitmap preview; bulk batch print stepper. |

---

### 📱 3. PelatihKu PRO — Athletic Coaching Operating System
- **Target Form Factor:** Mobile-First (390×844 dp, gym-floor single-handed touch)
- **Primary Color Tokens:** Pitch Obsidian (`#080808`), Matte Charcoal (`#1C1C1E`), Electric Volt-Lime (`#D4FF00`), Crimson Alert (`#FF453A`)
- **Key Ergonomic Implementations:** High-contrast OLED dark mode for halogen gym lighting; 52dp oversized numeric steppers for sweaty hands.

| Screen Viewport | Architectural Context & User Job | Key Interaction & Ergonomic Standards |
| :--- | :--- | :--- |
| **1. Executive Coach Roster & KPI Bento** | Dashboard displaying active athlete count, session quotas remaining, daily scheduled bookings, and ACWR fatigue alerts. | Quick biometric unlock (< 1.5s); Bento-grid card layout with high visual hierarchy; zero horizontal scroll clipping. |
| **2. Rapid Workout Logger (< 45s Rest Interval)** | Live exercise set recorder during client rest intervals (Squat, Bench, Deadlift: Load kg, Reps, RPE 1–10). | Fast stepper buttons (`+1kg`, `+5kg`, `+1 rep`); automatic 1RM calculation via Brzycki formula displayed inline without modal popups. |
| **3. Periodization & Body Composition Telemetry** | Multi-week tracking of lean muscle mass, body fat percentage, visceral fat rating, and volume load progression curves. | Interactive SVG trend lines with interactive scrubbers; movement screening post-injury comparison charts. |
| **4. Medical Clearance & PAR-Q Empty State** | Zero-data empty state guiding the coach to complete initial PAR-Q health screening and baseline nutrition onboarding for new members. | Actionable CTA with guided wizard steps; clear medical restriction warning chips that persist across all subsequent workout sessions. |

---

### 📱 4. Lewi House Syariah — Hospitality Property Management System
- **Target Form Factor:** Dual Responsive (Mobile Viewport: 390×844 dp for Housekeeping | Desktop: 1440×900 dp for Front Desk)
- **Primary Color Tokens:** Emerald Slate (`#064E3B`), Sand Gold (`#D97706`), Warm Ivory (`#FDFBF7`), Dark Surface (`#111827`)
- **Key Ergonomic Implementations:** Edge-to-edge Capacitor Android window insets; color-coded room status grid.

| Screen Viewport | Architectural Context & User Job | Key Interaction & Ergonomic Standards |
| :--- | :--- | :--- |
| **1. Front Desk Room Occupancy Matrix** | Real-time visual room grid across all floors showing room status (Available, Occupied, Cleaning, Out of Service). | Color-coded status tiles; 1-click room assignment; instant guest check-in modal with guest count validation. |
| **2. Mobile Housekeeping Task Stepper** | Native Android screen for cleaning staff receiving live room turnover assignments upon guest checkout. | Large checkmark toggle buttons (56x56dp); automated camera capture for room cleanliness verification before releasing room to front desk. |
| **3. Financial Audit & Night Audit Telemetry** | Daily revenue reconciliation, occupancy rate calculation, and payment breakdown (Cash, QRIS, Bank Transfer). | Tabular daily audit ledger; automated PDF receipt generation; role-gated managerial overrides. |
| **4. Network Recovery & Session Timeout State** | Reconnects seamlessly when staff move into ground-floor concrete dead zones without dropping active form state. | Offline banner with local caching in Capacitor storage; automatic background sync upon re-establishing Wi-Fi connectivity. |

---

### 💻 5. IOI Group — Enterprise Microsoft 365 Migration Architecture
- **Target Form Factor:** Desktop-First (1440×900 dp & 1920×1080 dp dual displays)
- **Primary Color Tokens:** Microsoft Fluent Navy (`#0078D4`), Dark Charcoal (`#201F1E`), Clean White (`#FFFFFF`), Border Neutral (`#EDEBE9`)
- **Key Ergonomic Implementations:** High-density data grids; keyboard shortcut navigation; automated SharePoint list schema binding.

| Screen Viewport | Architectural Context & User Job | Key Interaction & Ergonomic Standards |
| :--- | :--- | :--- |
| **1. Enterprise Portal & Department Hub** | Landing dashboard providing single sign-on (SSO) access to 361 migrated departmental workflows across 28+ business units. | Global search with typeahead filtering; categorized department cards (Finance, HR, Plantation, Engineering, Mills). |
| **2. Multi-Tier Approval Workflow Screen** | Standardized Canvas App approval form displaying original Lotus Domino form fields, approval history, and digital signature boxes. | Multi-tier state stepper (Draft ➔ HOD Review ➔ Plant Manager Sign-Off ➔ Approved); automated email and Teams notification triggers. |
| **3. Administrative Migration Telemetry Console** | Central engineering dashboard tracking conversion status, schema validation errors, and AST script run metrics across 7,878 screens. | Real-time status cards; automated error log drill-down; PAC CLI build trigger status. |
| **4. Offline & Permission Boundary Guard** | Gracefully handles non-authorized users attempting access to restricted executive salary or plantation audit records. | Clear enterprise access request flow; immutable audit logging recording user identity, timestamp, and requested resource. |

---

### 🛍️ 6. DLAB Night Match — Haute Parfumerie & Olfactory Diagnostic Platform
- **Target Form Factor:** Mobile-First (390×844 dp with full-bleed luxury imagery | Desktop: 1440×900 dp)
- **Primary Color Tokens:** Obsidian Black (`#0F0E0D`), Atelier Pale Gold (`#D4AF37`), Deep Warm Amber (`#B45309`), High-Contrast Chalk (`#F5F5F4`)
- **Key Ergonomic Implementations:** Full-bleed dark aesthetic; 10-second interactive diagnostic elimination stream.

| Screen Viewport | Architectural Context & User Job | Key Interaction & Ergonomic Standards |
| :--- | :--- | :--- |
| **1. Editorial Noir Hero & 18+ Age Gate** | High-impact luxury landing state communicating 35% concentration nocturnal Extraits de Parfum. | Seamless age-gate verification with instant bypass token; high-contrast typography rhythm; gold accent call-to-actions. |
| **2. 10-Second Olfactory Elimination Quiz** | Algorithmic scent matcher guiding patrons through atmosphere, note accords, and sillage preference. | Fast interactive card swipe gestures with floating flacon animation; zero layout shift; immediate in-stock SKU ranking. |
| **3. 93-SKU Catalog & Sillage Telemetry** | High-density grid displaying fragrance profiles, maceration aging metrics, sillage projection gauges, and multi-currency pricing. | Dynamic currency switcher (`USD`, `EUR`, `GBP`, `JPY`); 1-click monogramming input (`+$20`) with live visual preview. |
| **4. Commissioned Concierge WhatsApp Checkout** | Formulates a structured multi-item invoice with free shipping threshold calculation, routing to official atelier WhatsApp. | Automatically persisted order document in Cloud Firestore; direct deep links to regional marketplaces (Shopee MY, Lazada MY). |

---

## 2. Design System Tokens & Accessibility Matrix

| Platform / App | Color System Standard | Target Contrast Ratio | Touch Target Baseline | Insets & Safe-Area Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **SaltDistribute** | Google Material Design 3 (Emerald Green) | 7.1:1 (AAA on Primary Text) | ≥ 48×48 dp | Dynamic Android Navigation & Status Bar insets via `react-native-safe-area-context` |
| **Jastip Cross-Border** | Tailored High-Contrast Field PWA (Deep Teal/Cyan) | 6.5:1 (AA+ on Field Surfaces) | ≥ 48×48 dp | PWA safe-area CSS environment variables (`env(safe-area-inset-bottom)`) |
| **PelatihKu PRO** | Pitch Obsidian OLED Dark Mode (Volt-Lime / Charcoal) | 12:1 (Extreme Contrast for Gym Floor) | ≥ 52×52 dp | 1-handed bottom navigation bar anchor with full bottom safe-area padding |
| **Lewi House PMS** | Material & Radix Neutral Tokens (Emerald Slate) | 4.8:1 (AA Standard) | ≥ 48×48 dp | Capacitor Android status bar overlays with native translucent background |
| **IOI Group M365** | Microsoft Fluent UI 2.0 (Navy / Neutral) | 5.2:1 (AA Corporate Enterprise) | ≥ 44×44 dp | Fixed enterprise header with responsive container fluid constraints |
| **DLAB Night Match** | Obsidian & Gold Atelier Luxury System | 8.5:1 (Gold on Obsidian Black) | ≥ 48×48 dp | Full-bleed viewport with fixed bottom cart drawer anchor |
