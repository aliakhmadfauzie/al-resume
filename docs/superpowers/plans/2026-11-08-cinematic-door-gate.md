# Cinematic 3D Doorway Entrance Gate Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a cinematic 3D double-door entrance overlay that cracks open 34% on initial visit, prompts the visitor to select either "Software Developer" or "Operations Team Manager", swings 100% open upon selection, and tailors the Home view accordingly with session persistence.

**Architecture:** 
A standalone React 19 component (`CinematicDoorGate.tsx`) mounted conditionally in `App.tsx` with a top-level z-index (`z-[99999]`). CSS 3D transforms (`perspective: 1200px`, `rotateY`) and Motion (`motion/react`) manage the 34% crack, glassmorphic HUD prompt, and 100% full opening swing. State is managed at the top level and persisted in `sessionStorage`, passing the chosen persona to `HomeView.tsx` to dynamically tailor the hero headline, value proposition, featured projects, and provide an in-page track switcher.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Motion (`motion/react`), Lucide React icons, Vite.

**Spec:** [`docs/superpowers/specs/2026-11-08-cinematic-door-gate-design.md`](file:///C:/Users/AL_AAF/Project/04_portfolio_and_resumes/Al-resume%20v2/docs/superpowers/specs/2026-11-08-cinematic-door-gate-design.md)

---

## Global Constraints

- **Exact Persona Titles:** Must display `"Software Developer"` and `"Operations Team Manager"` (with an `"Explore Both (Hybrid)"` option).
- **Exact Door Crack Angle:** Left leaf rotates Y to `-32deg` and Right leaf to `+32deg` (optically 34% door crack).
- **Exact Door Swing Angle:** Left leaf rotates Y to `-95deg` and Right leaf to `+95deg` (100% wide open).
- **Fast-Path Skip:** Clicking `"Skip / Enter Portfolio →"` must bypass spring physics and unmount in `<= 150ms`.
- **Session Persistence Key:** Store preference in `sessionStorage.getItem('portfolio-persona')` and `sessionStorage.getItem('door-gate-dismissed')`.
- **Deep-Link Bypass:** Direct navigation to sub-routes (e.g., project details, `/demos`, `/#experience`) must bypass the door gate immediately.
- **Strict Reduced Motion:** If `prefers-reduced-motion` or the in-app motion toggle is paused, bypass 3D rotation and use an immediate fade transition.
- **Zero Build Errors:** `npm run lint` (`tsc --noEmit`) and `npm run build` must pass cleanly without warnings or errors.

---

## Review Focus

1. **Small Mobile Viewports (< 380px):** Selection cards must stack vertically and remain fully legible without horizontal scroll or text truncation.
2. **Session Storage Disabled / Private Browsing:** `sessionStorage` access must be wrapped in safe `try/catch` blocks so private browsing modes never throw runtime crashes.
3. **Double-Click Race Conditions:** Rapid clicking on persona cards must not trigger multiple simultaneous exit transitions.
4. **Keyboard & Accessibility Navigation:** The modal must support keyboard Tab focus and `aria-label` tags for screen readers.
5. **Navbar Switcher Sync:** Toggling persona in the Hero or Navbar must immediately reflect in `HomeView` without needing a reload.

---

## Tasks

### Task 1: Create `CinematicDoorGate` Component & 3D CSS Animation

**Files:**
- Create: `src/components/gate/CinematicDoorGate.tsx`
- Test: Verification via TypeScript check `npm run lint` and component smoke test

**Interfaces:**
- Produces:
  ```typescript
  export type PersonaType = 'software' | 'operations' | 'both';

  export interface CinematicDoorGateProps {
    onSelectPersona: (persona: PersonaType) => void;
    onSkip: () => void;
    isMotionActive?: boolean;
  }
  ```

- [ ] **Step 1: Create the directory structure**
  Create `src/components/gate/` directory.

- [ ] **Step 2: Implement `CinematicDoorGate.tsx`**
  - Implement full-screen container with `perspective: 1200px` and `z-[99999]`.
  - Left door leaf: dark titanium gradient, cyan accent border (`#06b6d4`), `transformOrigin: 'left center'`.
  - Right door leaf: dark titanium gradient, orange accent border (`#f97316`), `transformOrigin: 'right center'`.
  - State machine: `'closed' -> 'cracked' -> 'opening' -> 'unmounted'`.
  - Centered glassmorphic selection HUD:
    - Card 1: 💻 **Software Developer** (Cyan theme, subtext: React 19, TypeScript, Cloud, AI Architecture).
    - Card 2: ⚙️ **Operations Team Manager** (Orange theme, subtext: Lean Ops, SOPs, ERP Migrations).
    - Link: *"Explore Both Tracks (Hybrid) →"*.
    - Top-right / bottom: *"Skip to Overview →"* (triggers instant `onSkip()`).
  - Mobile responsiveness: cards stack vertically on `< 640px` screens.
  - Safe animation timings: cracked after 400ms; full swing on click takes 750ms before triggering `onSelectPersona`.

- [ ] **Step 3: Run TypeScript verification**
  Run: `npm run lint`
  Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/gate/CinematicDoorGate.tsx
  git commit -m "feat: add CinematicDoorGate component with 3D split-door animation"
  ```

---

### Task 2: Integrate Door Gate & Session Persistence into `App.tsx`

**Files:**
- Modify: `src/App.tsx:38-120`

**Interfaces:**
- Consumes: `CinematicDoorGate`, `PersonaType` from `src/components/gate/CinematicDoorGate`
- Produces: Top-level `activePersona` state and `handlePersonaSelect` handler passed to `HomeView`

- [ ] **Step 1: Add persona state and safe `sessionStorage` helpers**
  - Read initial `activePersona` from `sessionStorage.getItem('portfolio-persona')` (fallback to `'both'`).
  - Determine `showGate`: true only when `!sessionStorage.getItem('door-gate-dismissed') && route.tab === 'home' && !route.projectId`.
  - Wrap storage writes in `try/catch`.

- [ ] **Step 2: Mount `CinematicDoorGate` above views**
  - Render `<CinematicDoorGate />` when `showGate` is true.
  - Wire `onSelectPersona={(persona) => handlePersonaSelect(persona)}`.
  - Wire `onSkip={() => handleSkipGate()}`.

- [ ] **Step 3: Run TypeScript verification**
  Run: `npm run lint`
  Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**
  ```bash
  git add src/App.tsx
  git commit -m "feat(app): integrate CinematicDoorGate with session persistence and deep-link bypass"
  ```

---

### Task 3: Tailor `HomeView.tsx` with Dynamic Persona Content & Hero Switcher

**Files:**
- Modify: `src/components/views/HomeView.tsx:30-100`

**Interfaces:**
- Consumes:
  ```typescript
  interface HomeViewProps {
    onOpenProjectDetail: (item: ProjectItem | MigrationSlice) => void;
    onOpenResume: () => void;
    onLaunchDemo: (demoId: string) => void;
    activePersona?: 'software' | 'operations' | 'both';
    onPersonaChange?: (persona: 'software' | 'operations' | 'both') => void;
  }
  ```

- [ ] **Step 1: Update `HomeViewProps` interface**
  Add optional `activePersona` and `onPersonaChange` props.

- [ ] **Step 2: Add dynamic hero headline and eyebrow badge**
  - **When `'software'`:**
    - Eyebrow: `Full-Stack Architecture · React 19 & TypeScript · Cloud & AI Platforms`
    - Headline: `Architecting Scalable Cloud Systems & AI Platforms That Cut Complexity.`
  - **When `'operations'`:**
    - Eyebrow: `Process Leadership · Lean Six Sigma · ERP Migrations & Operations`
    - Headline: `Optimizing Enterprise Operations, Slashing Waste & Leading High-Impact Teams.`
  - **When `'both'`:**
    - Keep current flagship headline and eyebrow.

- [ ] **Step 3: Dynamic Featured Projects Reordering**
  - If `activePersona === 'operations'`, feature `['ioi-acidchem-she-platform', 'putri-garmenthub-erp', 'ats-automation']`.
  - If `activePersona === 'software'`, feature `['ats-automation', 'ioi-acidchem-she-platform', 'putri-garmenthub-erp']`.

- [ ] **Step 4: Add Hero Persona Switcher Pill**
  Add a sleek segmented switcher in the hero below the headline:
  `[💻 Software Developer | ⚙️ Operations Team Manager | 🌐 Both]`
  Allowing the user to toggle personas dynamically on the Home page.

- [ ] **Step 5: Run TypeScript verification & Vite build**
  Run: `npm run lint && npm run build`
  Expected: PASS with 0 errors and successful bundle creation.

- [ ] **Step 6: Commit**
  ```bash
  git add src/components/views/HomeView.tsx src/App.tsx
  git commit -m "feat(home): dynamic persona headline, project curation, and hero track toggle"
  ```

---

### Task 4: Polish, Accessibility & Build Verification

**Files:**
- Test all viewport sizes, keyboard navigation, and production build

- [ ] **Step 1: Verify reduced motion handling**
  Confirm that when `prefers-reduced-motion` is active or motion is disabled, the door gate skips 3D rotation and uses standard opacity fade.

- [ ] **Step 2: Clean up brainstorm server session**
  Stop the background brainstorm server task.

- [ ] **Step 3: Full production build & lint verification**
  Run: `npm run lint && npm run build`
  Expected: Clean build output.

- [ ] **Step 4: Final commit and branch verification**
  ```bash
  git status
  ```
