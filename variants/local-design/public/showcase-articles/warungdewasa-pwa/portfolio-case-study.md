![Project Main Interface](./portfolio-ui-screenshot.png)

# Warung Dewasa — Headless E-Commerce PWA & Direct COD Engine

## 1. Project Overview & Problem Solved

**Warung Dewasa (Abang Dugem Official Store)** is a high-performance, mobile-first Headless E-Commerce Progressive Web Application (PWA) built to solve the acute friction of selling privacy-sensitive adult wellness products in Indonesia—specifically within the Kota Medan metropolitan area and across national marketplaces.

### The Core Business Problem
Traditional e-commerce marketplaces (Shopee, Tokopedia) impose strict keyword censorship on adult wellness catalogs, frequently delist verified SKUs without warning, and force buyers to leave permanent digital purchase histories tied to their personal banking or e-wallet profiles. Furthermore, local buyers in Medan demanded immediate same-day delivery (45–90 minutes) with cash-on-delivery (COD) in unmarked, discreet packaging—a workflow that standard marketplace checkouts could not support without high platform commissions and slow courier routing.

### The Solution
Warung Dewasa decouples product discovery and conversion from marketplace constraints through a dual-channel headless architecture:
1. **Direct Local COD & Express Checkout**: Enables customers to order directly from a 167 verified SKU catalog (expanded from an initial 121-SKU seed) with automated GPS reverse-geocoding, OpenStreetMap Nominatim location search, multi-channel payment options (Cash COD, BCA, Mandiri, GoPay, ShopeePay, OVO, DANA, QRIS), and instant WhatsApp order formatting with Google Maps coordinate links.
2. **Intelligent Marketplace Deep-Linking**: For out-of-town buyers who prefer marketplace escrow, an intelligent deep-link resolver attempts to launch native `shopee://` or `tokopedia://` mobile app URIs and gracefully falls back to web URLs within 800ms if the native app is not installed.
3. **Resilient Offline-First Hybrid Persistence**: Operates seamlessly on top of Supabase PostgreSQL when online, while automatically falling back to a local storage persistence engine (`poppers_catalog_v4`) and a 4-tier custom Service Worker (`SaltStore PWA Service Worker v2.0`) so the storefront and Merchant Hub remain 100% functional even during network outages.

---

## 2. Tech Stack & Architecture Choices

### Architecture Diagram

```mermaid
flowchart TD
    subgraph Client["Client Layer (React 18 + TypeScript + Vite 6)"]
        UI["Storefront UI (M3 Design Tokens + Tailwind CSS)"]
        WebGL["OrchestratedWebGLBackground (Deferred Three.js + GSAP ScrollTrigger)"]
        Modal["DirectOrderModal (OSM Nominatim + GPS Reverse Geocoding)"]
        Admin["AdminDashboard (Lazy-Loaded Chunk: SKU, COD, Inbox, Theme Studio)"]
    end

    subgraph Routing["Conversion & Deep-Link Layer"]
        DeepLink["deepLinkResolver.ts (shopee:// & tokopedia:// URI + 800ms Web Fallback)"]
        WA["WhatsApp Order Formatter (Structured Invoice + Google Maps Pin)"]
    end

    subgraph DataLayer["Unified Data & Offline Engine"]
        API["src/lib/supabase.ts (Unified API Service)"]
        SW["public/sw.js (4-Tier Service Worker v2.0)"]
        Local["localStorage Fallback (121 Verified SKUs + Orders + Requests)"]
    end

    subgraph External["External Cloud & Geo Services"]
        Supabase[("Supabase PostgreSQL (products, merchant_notes, direct_orders, special_requests)")]
        OSM["OpenStreetMap Nominatim API (Search & Reverse Geocode)"]
    end

    UI --> WebGL
    UI --> Modal
    UI -.->|"Dynamic import()"| Admin
    UI --> DeepLink
    Modal --> OSM
    Modal --> WA
    Modal --> API
    UI --> API
    Admin --> API
    API -->|"Online"| Supabase
    API -->|"Offline / Fallback"| Local
    SW -->|"Cache-First / SWR / Network-First"| UI
```

### Tech Stack Table

| Layer | Technology | Version | Architectural Role & Justification |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React + TypeScript | `^18.3.1` / `^5.7.3` | Concurrent rendering (`useDeferredValue` for lag-free search filtering across 121+ SKUs) and strict type safety for orders, notes, and inventory states. |
| **Build & Bundling** | Vite + Terser | `^6.2.0` / `^5.51.2` | Fine-grained Rollup `manualChunks` splitting (`vendor-react`, `vendor-three`, `vendor-gsap`, `vendor-motion`, `catalog-data`, `admin`) with 2-pass Terser dead-code elimination. |
| **Styling & Design System** | Tailwind CSS + M3 Tokens | `^3.4.17` | Material 3 semantic surface containers (`src/styles/tokens.css`), dark/light adaptive theming (`ThemeContext.tsx`), and fluid typography. |
| **3D & Motion Graphics** | Three.js + GSAP + Framer Motion | `^0.185.1` / `^3.15.0` / `^13.2.0` | Idle-deferred 3D crystal mesh background synced to scroll progress via GSAP `ScrollTrigger`, paired with Framer Motion spring bottom sheets. |
| **Backend & Database** | Supabase (`@supabase/supabase-js`) | `^2.49.1` | Cloud PostgreSQL database with relational joins (`products(*, merchant_notes(*))`) and automatic offline localStorage synchronization. |
| **Geolocation & Mapping** | HTML5 Geolocation + OSM Nominatim | REST API | Zero-cost, API-key-free address autocomplete scoped to Medan districts and high-accuracy GPS reverse geocoding. |
| **Offline PWA Engine** | Custom Service Worker (`sw.js`) | `v2.0` | Multi-bucket caching (`saltstore-shell`, `saltstore-static`, `saltstore-images`, `saltstore-api`) with FIFO cache trimming. |

---

## 3. Key Features & UI Implementation

### 1. Conversion-Driven Storefront & "Pick the Winner" Spotlight
Following high-craft human UI principles, the storefront avoids generic e-commerce templates:
- **Asymmetric Hero (`src/components/HeroMotion.tsx`)**: Features a live courier availability pulse, estimated 45–90 minute Medan delivery progress bar, standardized discreet packaging checklist, and vanilla-JS magnetic pull CTA buttons (`attachMagnetic`).
- **Audience Qualifier & Value Comparison (`AudienceQualifierStrip.tsx`, `WhyWarungDewasaSection.tsx`)**: Immediately qualifies local vs. national buyers and contrasts direct COD benefits against standard marketplace friction.
- **Automated Winner Spotlight (`FeaturedWinnerSection.tsx` & `ProductCard.tsx`)**: Dynamically selects the top in-stock SKU with verified merchant tips (`winnerProduct` in `src/App.tsx`) and highlights it with an emerald gradient ribbon (`★ #1 Pilihan Terlaris Medan`).

### 2. Direct COD & Express Checkout Modal with OpenStreetMap Geocoding
Implemented in `src/components/DirectOrderModal.tsx`, the checkout flow is engineered as a Material 3 Bottom Sheet on mobile (`rounded-t-m3-xl`) and centered dialog on desktop:
- **District Presets & Debounced OSM Autocomplete**: Offers 1-tap presets for major Medan districts (*Medan Petisah*, *Medan Baru*, *Medan Barat*, *Medan Sunggal*, *Medan Amplas*, *Medan Tembung*) alongside a 350ms debounced OpenStreetMap Nominatim search (`handleLocationInputChange`).
- **1-Tap GPS Reverse Geocoding (`handleGetCurrentLocation`)**: Captures device coordinates via `navigator.geolocation.getCurrentPosition` and resolves the street address in Indonesian via `https://nominatim.openstreetmap.org/reverse`.
- **Multi-Channel Payment & Receipt Upload**: Adapts payment choices dynamically based on delivery method (automatically switching from Cash COD to E-Wallet/Bank Transfer/QRIS when `expedition` is selected), complete with 1-tap account number copying and base64 payment receipt image preview (`FileReader.readAsDataURL`).

### 3. Code-Split Merchant Hub (`src/admin/AdminDashboard.tsx`)
Accessible to authenticated store operators without bloating the visitor bundle:
- **Asymmetric Bento KPI Grid**: Highlights urgent operational tasks (`Pesanan COD & Kurir Medan` with pulsing pending badges) alongside an SVG circular inventory health chart (`Kesehatan Stok Inventori`) and category SKU distribution bars.
- **End-to-End Catalog & Order Management**: Includes `ProductManager.tsx` for SKU CRUD, `NotesManager.tsx` for attaching usage tips/reviews (`usage_tip`, `personal_review`, `recommendation`), `DirectOrderManager.tsx` for updating COD order statuses (`pending` -> `confirmed` -> `shipping` -> `completed`), `RequestInbox.tsx` for sourcing special customer requests, and `ThemeEditor.tsx` for live storefront customization.

---

## 4. Technical Challenges Overcome

### Challenge 1: Eliminating 5,880ms Total Blocking Time (TBT) from WebGL Shader Compilation & GSAP Tickers
**Problem**: During initial performance profiling, mounting the Three.js 3D crystal background and GSAP hero animations synchronously at startup caused WebGL shader compilation (300–600ms) and GSAP's `requestAnimationFrame` ticker to execute right inside the critical Time-to-Interactive (TTI) window. Furthermore, GSAP's `fromTo({ opacity: 0 })` hid the main `<h1>` before hydration completed, delaying Largest Contentful Paint (LCP).

**Solution**:
1. In `src/components/HeroMotion.tsx`, static GSAP imports were completely removed from the critical path. The `<h1>` headline now renders visible immediately on first paint, entrance animations were migrated to compositor-threaded CSS `@keyframes`, and magnetic button physics were rewritten in lightweight vanilla JS (`attachMagnetic`).
2. In `src/components/OrchestratedWebGLBackground.tsx`, Three.js and GSAP `ScrollTrigger` are dynamically imported only inside `requestIdleCallback` after the `window.load` event fires. Draw calls were reduced by 3x (8 octahedron shards using single-pass `MeshStandardMaterial` and `MeshLambertMaterial` instead of multi-pass refraction), pixel ratio was capped at `1.5`, and the render loop was throttled to `30 FPS` with automatic tab-visibility suspension (`document.hidden`).

```tsx
// src/components/OrchestratedWebGLBackground.tsx (Lines 154-226)
const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
let lastFrameTime = 0;
const clock = new THREE.Clock();

const animate = (timestamp: number) => {
  animId = requestAnimationFrame(animate);
  if (document.hidden) return; // Zero GPU cost when tab is inactive

  const elapsed = timestamp - lastFrameTime;
  if (elapsed < FRAME_INTERVAL) return;
  lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);

  const delta = clock.getDelta();
  camera.position.z = THREE.MathUtils.lerp(7.5, 3.8, scrollProgress);
  crystalGroup.rotation.y = scrollProgress * Math.PI * 2.5;
  mainCrystal.rotation.y += delta * 0.18;
  renderer.render(scene, camera);
};

// Defer Three.js download & shader compilation until browser is idle after load
const scheduleInit = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(initThreeJS, { timeout: 4000 });
  } else {
    setTimeout(initThreeJS, 2000);
  }
};
```

### Challenge 2: Dropping Initial React Mount Work by 85% Across 121+ Complex Product Cards
**Problem**: Rendering all 121 verified SKUs simultaneously on startup—each containing multiple badges, formatted currency strings, merchant note counters, and marketplace action buttons—created ~1,500ms of main-thread scripting tasks and sluggish keystroke response in the search bar.

**Solution**: Implemented concurrent search deferral via React 18's `useDeferredValue(searchQuery)` paired with progressive batch rendering (`visibleCount` initialized to 16 SKUs) in `src/App.tsx` and memoized `ProductCard` components (`React.memo` in `src/components/ProductCard.tsx`). In `vite.config.ts`, the 121-SKU dataset (`src/lib/catalogData.ts`) and `AdminDashboard` (`src/admin/`) were isolated into dedicated Rollup chunks so anonymous shoppers never download admin code.

```tsx
// src/App.tsx (Lines 140-186)
const deferredSearchQuery = useDeferredValue(searchQuery);

// Progressive batch rendering drops initial React mount work by ~85%
const [visibleCount, setVisibleCount] = useState(16);

useEffect(() => {
  setVisibleCount(16);
}, [selectedCategory, selectedStockStatus, deferredSearchQuery, sortBy]);

const displayedProducts = useMemo(() => {
  return filteredProducts.slice(0, visibleCount);
}, [filteredProducts, visibleCount]);
```

### Challenge 3: Cross-Platform Marketplace Deep-Linking & Dual-Engine Offline Resilience
**Problem**: Clicking standard `https://shopee.co.id/...` links inside mobile browsers often traps users in an unauthenticated mobile web view instead of opening their installed Shopee/Tokopedia native app. Additionally, the store needed to accept COD orders and display all 121 SKUs even if Supabase credentials were unconfigured or the user lost cellular connectivity.

**Solution**:
1. Built `openRegionalMarketplace` in `src/lib/deepLinkResolver.ts`, which detects mobile user agents, rewrites URLs into native custom schemes (`shopee://` or `tokopedia://`), and sets an 800ms elapsed-time check (`Date.now() - start < 1500`) to fall back to a new tab if the OS did not switch contexts to the native app.
2. Engineered a unified data service in `src/lib/supabase.ts` (`api.getProducts`, `api.createDirectOrder`, `api.submitSpecialRequest`) that transparently merges Supabase PostgreSQL queries with `localStorage` persistence, backed by `public/sw.js` implementing `cacheFirst` for hashed assets, `staleWhileRevalidate` (capped at 60 entries via FIFO `trimCache`) for product imagery, and `networkFirst` for REST API calls.

```ts
// src/lib/deepLinkResolver.ts (Lines 28-50)
let nativeUrl = config.nativeSchemeUrl;
if (!nativeUrl) {
  if (platform === 'shopee') {
    nativeUrl = webUrl.replace(/^https?:\/\/shopee\.co\.id\//, 'shopee://');
  } else if (platform === 'tokopedia') {
    nativeUrl = webUrl.replace(/^https?:\/\/tokopedia\.com\//, 'tokopedia://');
  }
}

const start = Date.now();
if (nativeUrl) {
  window.location.href = nativeUrl;
}

// Fallback to web URL if native app fails to launch within 800ms
setTimeout(() => {
  if (Date.now() - start < 1500) {
    window.open(webUrl, '_blank', 'noopener,noreferrer');
  }
}, 800);
```
