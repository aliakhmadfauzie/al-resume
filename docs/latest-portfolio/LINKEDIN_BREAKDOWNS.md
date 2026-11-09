# Technical LinkedIn Engineering Breakdown Posts

> **Target Audience:** Staff / Principal Engineers, Engineering Managers, Technical Founders  
> **Editorial Tone:** Engineering-first, failure-mode analysis, systems architecture, zero marketing buzzwords.

---

## Post 1: Real-Time Currency Arbitrage & Bluetooth Thermal Printing in a PWA

```text
Most developers think Progressive Web Apps (PWAs) are just responsive websites with an install banner.

Until you try running one in the crowded aisles of Don Quijote Shinjuku or Big C Bangkok, managing 50 cross-border client orders on spotty roaming cellular data, with zero room for exchange rate mistakes.

When we audited the operational workflow of professional personal shoppers (jastipers), we discovered two silent profit killers:
1. The "Boncos Kurs" Trap: Shoppers calculate prices on naive spot rates, but card issuers hit them with 2.5% Dynamic Currency Conversion (DCC) and ATM foreign transaction fees, causing them to lose 5–12% net margin per trip without realizing it until the credit card statement arrives.
2. The Hotel Room Packing Nightmare: Packing 80 parcels at 2:00 AM meant hand-writing courier waybills or manually copy-pasting tracking numbers on a laptop keyboard.

To eliminate this friction without forcing users to carry laptops or bulky desktop printers, we engineered Jastip Cross-Border Manager:

1. Dynamic Exchange Arbitrage Locking: We decoupled spot rates from transactional COGS. The system enforces a trip-level `rateSpreadMargin` buffer that locks the exact profit margin per SKU at the moment the item is triaged in the store aisle.
2. Direct Browser Web Bluetooth to 58mm Thermal Printers: Instead of routing documents through a cloud print spooler or operating system print dialog, we utilized the Web Bluetooth API to stream raw ESC/POS byte commands directly from mobile Chrome memory to pocket 58mm battery-powered mini printers. One tap prints crisp courier labels in 1.4 seconds.
3. Offline-First Reactive Triage: An aisle-grouped store catalog backed by a 4-state finite state machine (`Dibeli`, `Menunggu`, `Habis`, `Konfirmasi`) with local state persistence, ensuring zero dropped inputs when deep inside concrete shopping basements.

The production outcomes:
- 100% of recorded transactions preserved positive unit economics with zero unhedged forex slippage.
- Hotel-room label packing speed accelerated by over 60%, reducing shipping label generation time from 90s to under 15s per parcel.
- Zero data loss guarantee: lapsed subscriptions transition into a permanent read-only mode with full CSV export rather than locking business owners out.

Key takeaway for engineering teams: Mobile hardware APIs (Web Bluetooth, Web NFC, Camera Barcode Stream) have matured. For field operations, a lean, resilient PWA can outperform heavy native applications without app-store approval delays.

#WebDev #PWA #SystemDesign #React #TypeScript #WebBluetooth #Architecture
```

---

## Post 2: Taming Real-Time Firestore State Across Android and PWA Without Bankrupting Free Quotas

```text
Most teams assume building a multi-platform ordering system means maintaining one giant React Native Web codebase or duplicating code across two separate native apps.

When building SaltDistribute—an industrial B2B bulk salt distribution platform handling tons of raw salt orders between coastal producers and industrial buyers—we faced two real-world architectural realities:
- Industrial buyers in remote coastal distribution hubs needed native Android APKs with hardware GPS tracking and edge-to-edge Material Design 3.
- Corporate procurement desks needed a fast, zero-install PWA with desktop keyboard shortcuts and instant URL access.

The naive approach: Slap periodic HTTP polling on a shared database.
The production catastrophe: High read-operation billing spikes on Google Cloud Firestore and constant out-of-sync race conditions between concurrent buyer checkout orders.

Here is what was actually happening under the hood:
- Naive `setInterval` polling across hundreds of active client tabs burned through Firebase free-tier read quotas within days.
- In-flight inventory reservations weren't leased atomically, resulting in duplicate allocations of the same batch tonnage during peak harvest sales.

To solve this, we decoupled the architecture into two dedicated, production-hardened repositories sharing a unified contract:
1. Zero-Polling Reactive Snapshot Subscriptions: We replaced polling with targeted Firestore `onSnapshot` listeners combined with deterministic `unsubscribe()` lifecycle cleanup in React context providers. Components only re-render when specific collection documents mutate.
2. Pessimistic Inventory Lease Reservations: When a buyer begins checkout, an atomic Firestore transaction reserves the tonnage under a short-lived lease TTL, rolling back cleanly if payment proof is not attached within the window.
3. Platform-Optimized Packaging:
   - For Android: React Native 0.81 + Expo 54 with EAS Build pipeline, Hermes engine, and native Android window insets.
   - For Web/PWA: Service Worker precaching, install banners, and client-side canvas downsampling for payment slip uploads before transmission to Firebase Storage.

The verified outcomes:
- Zero duplicate tonnage reservation anomalies across high-concurrency buyer simulations.
- Database read operations plummeted by ~80% compared to equivalent polling architectures.
- Sub-second cold starts (<1.2s) across low-spec field Android devices.

Key takeaway for engineering teams: Multi-platform does not mean "one-size-fits-all." Decoupling mobile-specific native capabilities from browser-specific PWA lifecycles while enforcing strict atomic boundaries at the database layer is the secret to bulletproof B2B software.

#SystemDesign #ReactNative #Expo #Firebase #Architecture #MobileDev #PWA
```

---

## Post 3: Designing for 45-Second Gym Floor Touch Ergonomics in PelatihKu PRO

```text
Software built for air-conditioned offices fails miserably on the gym floor.

When we set out to build PelatihKu PRO—an Athletic Coaching OS for master personal trainers managing 20+ clients in commercial fitness centers—we shadow-audited master trainers during live workouts.

What we saw was chaotic:
- Trainers have chalk on their hands and sweat on their phones.
- They have exactly 45 to 90 seconds between a client's working sets (squats, bench press, deadlifts) to log load, reps, and RPE before spotting the next set.
- Overhead gym stadium lighting washes out low-contrast UI, causing missed taps and aborted data entry.

If your workout logger takes 4 taps and a modal dropdown to record a set, trainers will simply abandon the app and go back to wrinkled paper notebooks.

Here is how we re-architected the system for raw physical ergonomics:

1. Pitch Obsidian OLED Dark Mode: We built an ultra-high contrast visual hierarchy (#080808 background, #1C1C1E card elevations, #D4FF00 Electric Volt-Lime accents) providing maximum readability under glaring halogen gym lights while minimizing OLED battery drain.
2. One-Handed Gym Floor Ergonomics: Every primary button and numeric stepper strictly honors a 48x48dp minimum touch target. Stepper buttons (`+1kg`, `+5kg`, `+1 rep`) allow single-thumb adjustment in under 5 seconds without keyboard focus.
3. NSCA/ACSM Sports Science Engine: Rather than just recording raw weights, client-side algorithms compute 1RM progression (Brzycki & Epley formulas), fatigue index, and Acute-to-Chronic Workload Ratio (ACWR) in real time to alert the coach if an athlete enters the overtraining injury zone.
4. Frictionless Auth: Gym floor access is secured via biometric Face/Touch ID and 6-digit PIN fallback, letting coaches unlock their active roster in < 2 seconds.

The verified outcomes:
- Set logging completed in < 45 seconds during live rest intervals.
- Zero UI occlusion on mobile viewports with comprehensive safe-area padding.
- 100% calculation parity verified across hundreds of automated Vitest unit tests.

Key takeaway for engineering teams: User experience is defined by the physical environment of your user, not just your Figma canvas. Design for the worst lighting, the shortest attention span, and the most exhausted hands.

#ProductEngineering #SportsTech #React19 #TypeScript #UXDesign #MobileFirst
```

---

## Post 4: Modernizing 361 Legacy Lotus Domino Business Forms to Microsoft 365 at Conglomerate Scale

```text
Migrating legacy enterprise software is rarely a technical greenfield. It is an archaeological expedition.

At IOI Corporation Berhad—one of Southeast Asia's largest conglomerates—we spearheaded the enterprise-wide modernization of 361 Lotus Domino forms across 28+ operating departments into the modern Microsoft 365 cloud ecosystem.

The scale of the legacy system:
- Hundreds of deeply nested DXL forms with complex conditional Hide-When formulas, multi-tier plant manager approval hierarchies, and legacy attachments dating back two decades.
- Attempting to rebuild 361 complex multi-step forms by hand in Power Apps Studio would have required an army of developers and years of manual drag-and-drop effort.

We engineered a Dual-Track Migration Architecture powered by automated code generation:

Track 1: Low-Code Enterprise Track (Power Apps Canvas & Power Automate)
- We built automated Python and PAC CLI tooling to parse Domino DXL form schemas and synthesize standard Power Apps YAML screens (`.pa.yaml`).
- Over 7,878 Canvas screens and 16 production `.msapp` application packages were generated with automated Power Fx formula synthesis, connecting directly to governed SharePoint Online list architectures.

Track 2: Code-First Mirror Track (React 19 + TypeScript + Vite)
- For high-volume administrative dashboards requiring complex data virtualization, we built a modern React 19 web platform mirroring Power Apps schemas with atomic state management and strict TypeScript contracts.

CI/CD and Validation Governance:
- Over 1,800 automation scripts ran automated syntax validation, verifying control bindings, formula safety, and accessibility tokens before any `.msapp` artifact was published.

The verified outcomes:
- 361 legacy forms successfully mapped and modernized across 28+ business departments.
- Over 70% reduction in form migration cycle time compared to manual Power Apps development.
- Zero downtime migration path for critical agricultural, mill, and manufacturing operations.

Key takeaway for engineering teams: When legacy migration reaches hundreds of complex workflows, don't throw more developers at manual rebuilds. Build compilers and AST generators that transform legacy schemas into governed, modern architectures automatically.

#EnterpriseArchitecture #PowerPlatform #DigitalTransformation #CloudMigration #TypeScript #SoftwareEngineering
```
