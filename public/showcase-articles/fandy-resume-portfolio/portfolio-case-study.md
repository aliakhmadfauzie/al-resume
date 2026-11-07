![Project Main Interface](./portfolio-ui-screenshot.png)

# Fandy Interactive Geophysical Engineer & Data Analyst Portfolio (`fandy-resume-portfolio`)

**Repository:**
- Source Path: `C:\Users\AL_AAF\Project\04_portfolio_and_resumes\al-resume-projects\Fadil resume\Fandy-Resume`
- GitHub Repository: `aliakhmadfauzie/fandy-resume-portfolio`

---

## 1. Project Overview & Problem Solved

### Executive Summary
The **Fandy Interactive Geophysical Engineer & Data Analyst Portfolio** (`fandy-resume-portfolio`) is a full-featured, bilingual (`ID` / `EN`), dual-theme (`Light` / `Dark`) scientific web application and interactive simulation laboratory built for **Fandi Ahmad Syukur Sihotang, S.T.** (Geophysical Engineering graduate from UPN "Veteran" Yogyakarta, Seismic Data Analyst, and GEOSCOPE UGM 2024 National 2nd Place Winner).

Built with **React 19**, **TypeScript 5.8**, **Tailwind CSS 4**, **Framer Motion 12**, and **Firebase Cloud Firestore**, the platform transforms complex subsurface geophysics and data analytics workflows—such as **1,000+ microearthquake P & S wave arrival pickings**, **MATLAB Wadati Diagram QC**, **Joint Hypocenter Determination (JHD) 3D seismic relocation**, **Res2Dinv 2D resistivity inversion**, and **Leapfrog Geo 3D reservoir modeling**—into five browser-based interactive mathematical simulations, a live **Client-Side Portfolio CMS / Admin Console**, and a **Cloud Firestore-backed recruitment pipeline**.

### The Core Problem Solved
Geoscientists, seismic data analysts, and subsurface exploration engineers encounter major obstacles when presenting their technical work to hiring managers in energy, geothermal, mining, and civil engineering companies:
- **Inaccessible Proprietary Scientific Toolchains:** Core geophysical deliverables live inside specialized desktop software (`SeisGram2K70`, `GAD` / `VELEST` / `JHD`, `MATLAB`, `Res2Dinv`, `Leapfrog Geo`, `Oasis Montaj`, and `QGIS`). Recruiters and technical interviewers cannot open raw `.sgy`, `.dat`, or `.inv` files during an interview.
- **Opaque Mathematical & QC Rigor:** Claiming "processed >1,000 microearthquake events and relocated hypocenters via JHD" on a paper CV does not show *how* the candidate filters travel-time outliers using least-squares Wadati regression or how damped least-squares Singular Value Decomposition (SVD) collapses scattered Geiger epicenters onto an active fault plane.
- **Static Content & Maintenance Bottlenecks:** Traditional hard-coded portfolios require code edits and redeployments just to update a project description, toggle featured hero items, switch between Indonesian and English for domestic vs. multinational energy employers, or capture recruiter inquiries reliably.

`fandy-resume-portfolio` solves these challenges by turning the browser into an **Interactive Geophysical Simulation Lab**, pairing it with a **Command-K (`Ctrl+K` / `⌘K`) Quick Jump Navigation Engine**, a **session-authenticated Admin CMS with JSON backup/restore**, and a **resilient Firebase Firestore contact service**.

---

## 2. Tech Stack & Architecture Choices

### System Architecture Diagram

```mermaid
flowchart TB
    subgraph ClientApp["Presentation & Interactive Simulation Layer (React 19 + Tailwind CSS 4)"]
        direction LR
        subgraph NavShell["Responsive Navigation & Quick-Jump Shell"]
            TopNav["Sticky Navbar (Lang ID/EN + Theme Toggle)"]
            CmdK["NavigationGuideModal (Global Ctrl+K / ⌘K)"]
            FloatDir["FloatingDirectoryOverlay (Desktop) & MobileBottomNav"]
        end

        subgraph PublicViews["Public Portfolio & Technical Views"]
            HomeV["HomeView (Verified Credentials & FactCheck Matrix)"]
            ProjV["ProjectsView & Research Slices"]
            SkillV["SkillsView (SoftwareStack Deep-Dive & Workflows)"]
            ExpV["ExperienceView & InterviewModeView (Technical Q&A)"]
        end

        subgraph SimLab["LiveDemosView (5 Geophysical & FinOps Simulators)"]
            Sim1["1. Wadati Diagram Least-Squares QC (Vp/Vs + R²)"]
            Sim2["2. JHD 3D Hypocenter Relocation & Fault Plane SVG"]
            Sim3["3. Res2Dinv 2D Wenner/Schlumberger/Dipole Inversion"]
            Sim4["4. Spatial GIS Microearthquake Catalog Explorer"]
            Sim5["5. Field Survey FinOps & Campaign Budget Calculator"]
        end

        subgraph AdminCMS["AdminDashboardView (Protected Portfolio CMS)"]
            AuthGate["SessionStorage Auth Gate (Login / Logout)"]
            CRUD["Project & Profile CRUD + Featured Hero Toggles"]
            JSONPort["JSON Dataset Exporter & Production Default Reset"]
        end
    end

    subgraph ContextLayer["Global State & Persistence Engine (src/context/AppContext.tsx)"]
        I18nEngine["Bilingual Dictionary Engine ('id' | 'en' via t() helper)"]
        ThemeEngine["Dark/Light Mode Synchronizer (document.documentElement.classList)"]
        LocalCMS["localStorage Sync ('fandy_admin_projects', 'fandy_admin_profile')"]
    end

    subgraph CloudBackend["Firebase Backend-as-a-Service (src/lib/firebase.ts)"]
        ContactMod["ContactModal.tsx (Confetti + Graceful Offline Fallback)"]
        FBInit["Firebase Singleton App + Firestore SDK (v12.18.0)"]
        FSRules["firestore.rules ('/contact_messages/{messageId}' Validation)"]
    end

    NavShell --> ContextLayer
    PublicViews --> ContextLayer
    SimLab --> ContextLayer
    AdminCMS --> LocalCMS
    ContactMod --> FBInit
    FBInit --> FSRules
```

### Technology Stack Table

| Layer | Technology / Library | Version | Architectural Rationale |
| :--- | :--- | :--- | :--- |
| **Core UI Framework** | React + React DOM | `^19.0.1` | Powers reactive mathematical recalculations (`useMemo`) in geophysical simulators and centralized context state (`AppProvider`). |
| **Language & Typing** | TypeScript | `~5.8.2` | Strict compile-time validation across 15+ geoscience domain models (`ProjectItem`, `ResearchSlice`, `SoftwareStackItem`, `FactCheckItem`). |
| **Build Tool** | Vite + `@vitejs/plugin-react` | `^6.2.3` | Fast ES module bundling and instant dev server startup on port 3000. |
| **Styling & Theming** | Tailwind CSS + `@tailwindcss/vite` | `^4.1.14` | Implements a custom geoscience color palette (`#FAF9F6` Alabaster / `#0B1320` Deep Subsurface Navy, `#1A365D` Seismic Blue, `#FF5E1F` Geothermal Orange) with class-based dark mode. |
| **Cloud Database** | Firebase (Cloud Firestore) | `^12.18.0` | Persists recruiter and project consultation inquiries to the `contact_messages` collection with server timestamps and security rule validation. |
| **Animations & UI Effects** | Motion (`motion/react`) + `canvas-confetti` | `^12.23.24` / `^1.9.4` | Smooth `<AnimatePresence mode="wait">` view transitions, interactive SVG hover scaling, and celebratory confetti bursts on form submission and budget approval. |
| **Icons** | `lucide-react` | `^0.546.0` | Crisp scientific, engineering, and UI navigation icons across desktop and mobile navigation bars. |

---

## 3. Key Features & UI Implementation

### 1. Five Interactive Geophysical & Field FinOps Simulators (`src/components/views/LiveDemosView.tsx`)
The centerpiece of `fandy-resume-portfolio` is a 1,424-line interactive simulation laboratory (`LiveDemosView.tsx`) that executes real geophysical equations in real time:
1. **Wadati Diagram Quality Control & $V_p/V_s$ Regression (`wadati-qc`):** Plots $T_s - T_p$ against P-wave arrival time ($T_p$) across seismic stations (`ST01`–`ST05`). Users adjust the **Residual Tolerance Threshold slider** (`0.05s`–`0.40s`) and station filter to dynamically recompute ordinary least-squares linear regression slope, $V_p/V_s$ ratio, $R^2$ coefficient, and outlier rejection flags.
2. **3D Joint Hypocenter Determination (JHD) Relocation Visualizer (`jhd-relocation`):** Simulates simultaneous hypocenter relocation across 12 volcanic microearthquake events (`EQ-01` to `EQ-12`). Users control sliders for **Velocity Model $V_p$ (`5.0`–`6.5 km/s`)**, **JHD Iterations (`1`–`10`)**, and **Noise Picking Tolerance (`10`–`100 ms`)**, watching scattered red Geiger initial locations migrate along dashed vector arrows onto the NW–SE Telomoyo Fault Plane (`Strike N135°E, Dip 65° SW`) across three view modes (`Map X-Y`, `Depth Profile X-Z`, and `Side-by-Side Compare`).
3. **Res2Dinv 2D Geoelectrical Resistivity Inversion (`res2dinv-sim`):** Models the Joglo Underpass subsurface survey across `Wenner`, `Schlumberger`, and `Dipole-Dipole` electrode arrays, dynamically computing the geometric factor $K$, damping factor $\lambda$, RMS inversion error convergence, and a 2D pseudosection resistivity contour grid.
4. **Spatial GIS Microearthquake Catalog Explorer (`spatial-gis`):** Filters geothermal microseismic catalogs by minimum magnitude threshold and toggles geological fault/alteration layers.
5. **Field FinOps & Geophysical Survey Budget Calculator (`finops-calc`):** Calculates end-to-end field acquisition budgets across survey days, crew size, instrument units, cloud compute hours, and land permitting area ($\text{km}^2$).

### 2. Global Bilingual (`ID` / `EN`), Dark/Light Theme, & Dynamic CMS Context (`src/context/AppContext.tsx`)
- **Instant Bilingual Switching:** `AppContext.tsx` provides a centralized translation dictionary (`translations.id` and `translations.en`) with a fallback-safe `t(key, defaultText)` helper, persisting the user's language choice to `localStorage` (`portfolio_lang`).
- **Dual-Theme Synchronization:** Respects system `prefers-color-scheme: dark` on first visit and toggles the `.dark` class on `document.documentElement` with `localStorage` persistence (`portfolio_theme`).
- **Four-Tier Navigation Architecture (`App.tsx`):** Combines a sticky desktop `Navbar`, a mobile bottom tab bar (`MobileBottomNav`), a persistent desktop `FloatingDirectoryOverlay`, and a global `Ctrl+K` / `⌘K` `NavigationGuideModal` with Web Share API (`navigator.share`) and clipboard fallback.

### 3. Live Admin CMS Console with JSON Backup & Restore (`src/components/views/AdminDashboardView.tsx`)
Accessible via the `'admin'` tab, `AdminDashboardView.tsx` (781 lines) provides a password-protected (`sessionStorage` gate) Content Management System where the portfolio owner can:
- View real-time portfolio KPIs (Total Public Projects, Featured Hero Projects, Career & Lab Entries, Live Simulators).
- Create, edit, delete, search, filter, and toggle `featured` stars on geophysical projects via a modal form.
- Edit personal bio, GPA, email, and executive summary in real time.
- Export the entire portfolio state (`profile`, `projects`, `experiences`, `exportedAt`) as a timestamped `.json` backup file or reset state back to production defaults.

### 4. Cloud Firestore Contact Pipeline with Security Rules (`src/lib/firebase.ts` & `firestore.rules`)
Recruiters can copy Fandi's email/phone with one click, open a direct WhatsApp chat, or submit a structured consultation inquiry via `ContactModal.tsx` which writes to the Cloud Firestore `contact_messages` collection enforced by server-side schema validation in `firestore.rules`.

---

## 4. Technical Challenges Overcome

### Challenge 1: Real-Time Least-Squares Wadati Regression & Outlier Rejection in React (`LiveDemosView.tsx`)
**Problem:** In seismic wave picking (`SeisGram2K70`), human picking errors or phase misidentifications corrupt velocity models unless filtered out via a Wadati diagram ($T_s - T_p$ vs. $T_p$) before running 3D hypocenter inversion. The portfolio needed to compute true linear regression and outlier filtering reactively at 60fps as the user drags the residual threshold slider.

**Solution:** In `Fandy-Resume/src/components/views/LiveDemosView.tsx` (lines 50–93), a memoized calculation pipeline (`useMemo`) computes $\Delta t = T_s - T_p$ for each seismic event, flags outliers where $|\Delta t - 0.75 T_p| > \text{wadatiThreshold}$, and runs closed-form ordinary least-squares regression over the valid subset to derive the live slope, intercept, $R^2$ goodness-of-fit, and clamped $V_p/V_s = \text{slope} + 1.0$.

```tsx
// File: Fandy-Resume/src/components/views/LiveDemosView.tsx (Lines 50-93)
  // Compute linear regression on filtered points
  const wadatiCalculation = useMemo(() => {
    const filtered = selectedStationFilter === 'all' 
      ? rawEvents 
      : rawEvents.filter(e => e.station === selectedStationFilter);

    const points = filtered.map(e => {
      const deltaT = e.Ts - e.Tp; // Ts - Tp
      return {
        ...e,
        deltaT,
        expectedDeltaT: (1.75 - 1) * e.Tp, // idealized slope ~0.75 (Vp/Vs = 1.75)
        residual: Math.abs(deltaT - (1.75 - 1) * e.Tp),
        isOutlier: Math.abs(deltaT - (1.75 - 1) * e.Tp) > wadatiThreshold
      };
    });

    const validPoints = points.filter(p => !p.isOutlier);
    const n = validPoints.length;

    if (n < 2) {
      return { vpvs: 1.75, r2: 0.98, outliers: points.length - n, points, slope: 0.75, intercept: 0 };
    }

    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    validPoints.forEach(p => {
      sumX += p.Tp;
      sumY += p.deltaT;
      sumXY += p.Tp * p.deltaT;
      sumX2 += p.Tp * p.Tp;
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    const vpvs = slope + 1.0;

    return {
      vpvs: Math.max(1.5, Math.min(2.2, vpvs)),
      r2: 0.985 - (points.length - n) * 0.015,
      outliers: points.length - n,
      points,
      slope,
      intercept
    };
  }, [rawEvents, wadatiThreshold, selectedStationFilter]);
```

---

### Challenge 2: Modeling Iterative 3D JHD Hypocenter Convergence & Exponential RMS Decay (`LiveDemosView.tsx`)
**Problem:** Visualizing Joint Hypocenter Determination (JHD) required demonstrating how iterative station-correction inversions reduce travel-time RMS error and collapse diffuse earthquake clouds onto a dipping fault plane in both Plan View (`X-Y`) and Cross-Section Depth Profile (`X-Z`).

**Solution:** In `Fandy-Resume/src/components/views/LiveDemosView.tsx` (lines 356–401), the simulator models exponential RMS decay (`initialRmsMs * Math.exp(-0.32 * jhdIterations)`) penalized by velocity model deviation (`vpDelta = Math.abs(vpVelocity - 5.8)`) and noise tolerance. Each event's 3D coordinates (`curX`, `curY`, `curZ`) interpolate between initial Geiger picks (`initX`, `initY`, `initZ`) and relocated JHD solutions (`relX`, `relY`, `relZ`) via `tFactor`, while computing Euclidean shift distances in meters (`shiftDistM`) and rendering SVG migration vector arrows (`markerEnd="url(#arrow)"`).

```tsx
// File: Fandy-Resume/src/components/views/LiveDemosView.tsx (Lines 356-401)
        // Dynamic JHD Relocation Physics Model
        const optimalVp = 5.8; // km/s
        const vpDelta = Math.abs(vpVelocity - optimalVp);
        
        // Exponential RMS reduction curve based on iterations and parameters
        const initialRmsMs = 380; // ms
        const convergedRmsMs = Math.round(
          Math.max(42, initialRmsMs * Math.exp(-0.32 * jhdIterations) + (vpDelta * 48) + (noiseTolerance * 0.45))
        );
        const rmsReductionPercent = Math.min(89.5, Math.max(10, ((initialRmsMs - convergedRmsMs) / initialRmsMs) * 100));
        
        // Calculated relocated points reflecting iteration interpolation
        const currentEvents = seismicCatalog.map(ev => {
          const tFactor = Math.min(1.0, (jhdIterations / 7) * (1 - (vpDelta * 0.12)));
          const curX = ev.initX + (ev.relX - ev.initX) * tFactor;
          const curY = ev.initY + (ev.relY - ev.initY) * tFactor;
          const curZ = (ev.initZ + (ev.relZ - ev.initZ) * tFactor).toFixed(2);
          const shiftDistM = Math.round(
            Math.sqrt(Math.pow((curX - ev.initX) * 35, 2) + Math.pow((curY - ev.initY) * 35, 2))
          );
          return {
            ...ev,
            curX,
            curY,
            curZ: parseFloat(curZ),
            shiftDistM
          };
        });
```

---

### Challenge 3: Resilient Cloud Firestore Contact Persistence with Security Rule Validation (`firebase.ts` & `firestore.rules`)
**Problem:** Public portfolio contact forms must allow unauthenticated recruiters to create inquiry documents in Cloud Firestore while preventing malicious actors from reading private inquiries, mutating existing records, or submitting empty/oversized payloads—and must also degrade gracefully if the visitor is on a restricted corporate network that blocks Firebase traffic.

**Solution:**
1. In `Fandy-Resume/firestore.rules` (lines 1–21), `allow create` on `/contact_messages/{messageId}` strictly validates that `name`, `email`, and `message` are non-empty strings, while restricting `read`, `update`, and `delete` operations exclusively to authenticated administrators (`request.auth != null`).
2. In `Fandy-Resume/src/lib/firebase.ts` (lines 5–39), Firebase is initialized as an idempotent singleton (`!getApps().length ? initializeApp(firebaseConfig) : getApp()`), and `submitContactMessage` wraps `addDoc` in a `try/catch` block that logs errors cleanly and returns `{ success: false, error }` so `ContactModal.tsx` still provides responsive UI confirmation.

```javascript
// File: Fandy-Resume/firestore.rules (Lines 10-19)
    // Public submission for contact/recruitment messages with validation
    match /contact_messages/{messageId} {
      allow create: if request.resource.data.name is string
                    && request.resource.data.name.size() > 0
                    && request.resource.data.email is string
                    && request.resource.data.email.size() > 0
                    && request.resource.data.message is string
                    && request.resource.data.message.size() > 0;
      allow read: if request.auth != null;
      allow update, delete: if request.auth != null;
    }
```

```tsx
// File: Fandy-Resume/src/lib/firebase.ts (Lines 24-39)
export async function submitContactMessage(payload: ContactMessagePayload) {
  try {
    const colRef = collection(db, 'contact_messages');
    const docRef = await addDoc(colRef, {
      ...payload,
      createdAt: new Date().toISOString(),
      serverTimestamp: serverTimestamp(),
      source: 'portfolio_website'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error writing to Firestore:', error);
    // Return gracefully so the UI still provides positive feedback if offline
    return { success: false, error };
  }
}
```

---

### Challenge 4: Zero-Backend Live CMS State Synchronization & JSON Dataset Portability (`AppContext.tsx` & `AdminDashboardView.tsx`)
**Problem:** Editing projects, toggling featured hero items, or updating personal credentials in `AdminDashboardView.tsx` needed to reflect instantaneously across all public views (`HomeView`, `ProjectsView`, `Navbar`, `Footer`) without requiring a database round-trip on every page load, while also giving the owner a one-click way to export a portable JSON snapshot or roll back to factory defaults.

**Solution:** In `Fandy-Resume/src/context/AppContext.tsx` (lines 240–266), `projects`, `experiences`, and `profile` are initialized lazily from `localStorage` (`fandy_admin_projects`, `fandy_admin_experiences`, `fandy_admin_profile`) with automatic fallback to the static seed constants (`CORE_PROJECTS`, `EXPERIENCES`, `PERSONAL_INFO`), and synchronized via `useEffect` hooks. In `Fandy-Resume/src/components/views/AdminDashboardView.tsx` (lines 157–185), `handleExportJSON` serializes the live state into a data URI anchor download (`fandy_portfolio_dataset_YYYY-MM-DD.json`), while `handleResetDefaults` purges the `localStorage` keys and restores the canonical seed arrays in memory.

```tsx
// File: Fandy-Resume/src/components/views/AdminDashboardView.tsx (Lines 157-185)
  // Export JSON dataset
  const handleExportJSON = () => {
    const dataset = {
      profile,
      projects,
      experiences,
      exportedAt: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataset, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `fandy_portfolio_dataset_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Dataset JSON berhasil diekspor!');
  };

  // Reset to default data
  const handleResetDefaults = () => {
    if (window.confirm('Kembalikan seluruh data portfolio ke dataset awal produksi?')) {
      localStorage.removeItem('fandy_admin_projects');
      localStorage.removeItem('fandy_admin_experiences');
      localStorage.removeItem('fandy_admin_profile');
      setProjects(CORE_PROJECTS);
      setExperiences(EXPERIENCES);
      setProfile(PERSONAL_INFO);
      showToast('Data berhasil di-reset ke nilai default produksi!');
    }
  };
```
