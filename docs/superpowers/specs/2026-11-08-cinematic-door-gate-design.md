# Design Document: Cinematic 3D Doorway Entrance Gate

**Date:** 2026-11-08  
**Author:** Ali Akhmad Fauzie / Antigravity  
**Status:** In Review  
**Topic:** Dual-Perspective Career Entrance (Software Developer vs. Operations Team Manager)

---

## 1. Intent & Context

Ali has a distinctive dual-track career:
1. **Software Developer / Cloud Architect:** React 19, TypeScript, Cloud Functions, AI logic, and enterprise platforms.
2. **Operations Team Manager / Process Management Leader:** Standard Operating Procedures (SOPs), Lean Six Sigma, ERP systems, cross-functional team leadership, and cost governance.

When different audiences visit the portfolio—such as engineering managers looking for code depth vs. operational directors looking for transformation and ERP leadership—a single generic hero doesn't immediately speak to their specific priority.

The **Cinematic 3D Doorway Entrance Gate** introduces visitors to this dual identity immediately through an interactive split-door metaphor: the doors crack open 34% on landing, present a choice between **"Software Developer"** and **"Operations Team Manager"**, and then swing fully 100% open to reveal the portfolio tailored to that track.

---

## 2. Goals, Non-Goals & Anti-Goals

### Goals
- **Theatrical 3D Entrance:** On initial load, a full-screen cinematic overlay with two door leaves (`door-left` and `door-right`) rendered in CSS 3D perspective (`perspective: 1200px`) smoothly cracks open to **34%**.
- **Clear Two-Track Prompt:** The 34% gap reveals a clean, high-contrast HUD asking the visitor to choose:
  - **Software Developer** (Cyan accent, code & architecture focus)
  - **Operations Team Manager** (Orange accent, operational leadership & ERP focus)
  - A discreet **"Explore Both / View All"** option for visitors wanting the complete hybrid picture.
- **100% Door Swing on Selection:** Upon choosing an option, the selection UI dissolves and the doors swing wide open (`rotateY(-92deg)` / `rotateY(92deg)`), transitioning seamlessly into the tailored Home view.
- **Tailored Experience:** Selecting a track sets the active perspective (`software`, `operations`, or `both`), which tailors hero value-proposition copy and prioritizes relevant flagship projects in `HomeView`.
- **Session Persistence:** Remembers the choice in `sessionStorage` so refreshing or navigating between views does not trap or re-prompt the user during the same session.
- **In-Page Persona Switcher:** Visitors can switch perspectives at any time via a quick toggle in the Navbar / Hero without having to reload or re-trigger the door.
- **Accessibility & Motion Preference:** Respects `prefers-reduced-motion` and the existing site-wide motion toggle; if motion is disabled, the door gate transitions instantly without 3D rotation.

### Non-Goals
- **No Route Forking:** This does not create two separate websites or isolated URL structures. It is a single unified React application where track selection filters and prioritizes content.
- **No Hard Content Concealment:** Deep links (e.g. `/#projects`, `/#experience`) or direct navigation to specific projects bypass the door gate immediately so recruiters arriving from LinkedIn or direct resumes aren't blocked.

### Anti-Goals
- **Never Trap Recruiters:** A busy recruiter spending 6 seconds must never be held hostage by an unskippable animation. A visible "Skip / Enter Portfolio" button will always be present immediately.

---

## 3. Approaches Considered

| Approach | Description | Pros | Cons | Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Option A: Full-Screen Cinematic Gate (Selected)** | Full-screen futuristic doors crack 34%, user picks Software Developer vs. Operations Team Manager, doors swing 100% wide. | Highest visual impact, memorably communicates dual-domain strength, fulfills user's exact creative vision. | Must include a skip option to prevent recruiter bounce. | **Selected by User** |
| **Option B: Non-Blocking Hero Chamber** | Interactive 3D cracked doors embedded directly in the Hero section of the homepage. | Zero friction on initial load; content visible immediately. | Less dramatic and cinematic than a full-screen gateway. | Rejected |
| **Option C: Splash Transition Auto-Crack** | Upgrades existing 750ms brand splash; doors crack for 1.2s then auto-open if unclicked. | Safe and low friction. | Doesn't create an intentional, deliberate choice moment. | Rejected |

---

## 4. Architectural & Component Design

### 4.1 New Component: `CinematicDoorGate.tsx`
Located at `src/components/gate/CinematicDoorGate.tsx`:
- Rendered conditionally in `src/App.tsx` at `z-[99999]`.
- States:
  - `'closed'`: Doors at `0deg` rotation.
  - `'cracking'`: Left leaf animates to `-32deg` (`34%` visual gap), Right leaf animates to `+32deg` with a subtle backlight glow.
  - `'prompt'`: Selection HUD fades in between the cracked doors (`opacity: 1`, `scale: 1`).
  - `'opening'`: On user click, HUD fades out (`opacity: 0`), doors animate to `-95deg` and `+95deg`.
  - `'unmounted'`: Component unmounts, revealing the underlying portfolio.

### 4.2 Door Styling & Aesthetics
- **Dark Titanium / Obsidian Sheen:** Deep `#090a0f` to `#0d1117` gradient with subtle edge bevels.
- **Circuit Seam Accents:** Left door edge carries a cyan neon highlight (`#06b6d4`); Right door edge carries a radiant orange highlight (`#f97316`).
- **Depth & Atmosphere:** Outer perspective (`perspective: 1200px`), soft radial lighting bleeding through the center gap, and drop shadows (`box-shadow: 0 0 50px rgba(0,0,0,0.8)`).

### 4.3 State Management & Integration
- In `src/App.tsx`:
  ```typescript
  const [activePersona, setActivePersona] = useState<'software' | 'operations' | 'both'>(() => {
    return (sessionStorage.getItem('portfolio-persona') as any) || 'both';
  });
  const [showGate, setShowGate] = useState(() => {
    // Only show on root home path ('home' tab) and if not already dismissed in this session
    return !sessionStorage.getItem('door-gate-dismissed') && route.tab === 'home' && !route.projectId;
  });
  ```
- Selecting a track calls:
  ```typescript
  handlePersonaSelect(persona: 'software' | 'operations' | 'both') {
    setActivePersona(persona);
    sessionStorage.setItem('portfolio-persona', persona);
    sessionStorage.setItem('door-gate-dismissed', 'true');
  }
  ```
- In `HomeView.tsx`:
  - `activePersona` adjusts the hero headline, eyebrow tag, and reorders featured projects (Software prioritizes Cloud/AI/Web platforms; Operations prioritizes ERP/Process/SOP migrations).
  - An inline track pill in the hero allows instant switching at any time.

### 4.4 Spatial Layering & Mobile Responsiveness (Builder Call)
- **HUD Layering:** The selection HUD is rendered as a floating glassmorphic modal at `z-20` (in front of the 3D door panels at `z-10`). This ensures the cards, typography, and badges remain 100% legible, centered, and touch-friendly on all viewports without being squished into the 34% gap on small mobile screens.
- **Mobile Viewport Optimization:** On mobile screens (`< 640px`), the door leaves crack outward with a slightly wider angle (`-42deg` / `+42deg`) and the selection cards stack vertically for comfortable tap targets (minimum 48px height).

### 4.5 "Skip" Action Fast-Path (Builder Call)
- To strictly enforce the Anti-Goal ("never hold recruiters hostage"), clicking **"Skip / Enter Portfolio"** immediately triggers an instant 150ms crossfade unmount (`skip -> unmounted`), bypassing the 1.2s spring rotation swing and applying the default `'both'` persona.

### 4.6 Persona Tailoring Scope (Decided by User: Option 1)
- **Home Dashboard Focus:** The chosen persona specifically customizes the `HomeView` experience:
  - **Headline & Eyebrow Tag:** Aligned with either Software Development / Cloud Engineering or Operations Leadership / Process Optimization.
  - **Flagship Projects Curation:** Top 3 featured project cards are reordered to highlight projects relevant to that persona (e.g. Acidchem SHE & GarmentHub ERP for Operations; ATS Automation & AI architecture for Software).
  - **Dual-Branch Visualizer:** Initializes the milestone roadmap focused on that persona branch.
  - **Hero Persona Switcher:** A prominent toggle in the hero allows visitors to seamlessly switch between Software, Operations, and Both without reloading.
- **Other Tabs Remain Unrestricted:** The `Projects`, `Skills`, `Experience`, `Certifications`, and `Demos` views remain complete and open so visitors can appreciate the full scope of Ali's hybrid leadership.

---

## 5. What's Left to the Builder
- Fine-tuning the exact spring stiffness and damping curves in `motion/react` for the door rotation to feel weighty and physical.
- Exact styling details of the skip button (`Skip to Overview →`).
- Ensuring smooth fallback if the browser doesn't support 3D CSS transforms.
