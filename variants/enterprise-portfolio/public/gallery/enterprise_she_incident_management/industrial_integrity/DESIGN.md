---
name: Industrial Integrity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001d32'
  on-tertiary-container: '#3d89c3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#94ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004b74'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  max-width-content: 1440px
---

## Brand & Style
The design system is engineered for high-stakes enterprise environments where clarity, speed of data ingestion, and perceived authority are paramount. The "Industrial Professional" aesthetic balances corporate reliability with the rugged precision of safety engineering.

The UI utilizes a **Corporate / Modern** foundation with **Minimalist** efficiency. It prioritizes information density over white space, ensuring that safety officers and environmental auditors can scan complex reports without excessive scrolling. The emotional response is one of controlled urgency—stable, dependable, and meticulously organized.

Key attributes include:
- **High Density:** Compact scaling for data-heavy views.
- **Authoritative:** Structured grid systems and clear hierarchical signaling.
- **Safety-First:** Visual cues borrowed from industrial signage to indicate status and risk.

## Colors
The palette is rooted in deep "Command Blue" to establish authority, complemented by functional safety colors for immediate recognition of risk levels.

- **Primary (#0F172A):** Used for navigation, headers, and primary actions. Represents stability and depth.
- **Secondary / Safety Amber (#F59E0B):** Reserved for warnings, caution states, and mid-level incident severity.
- **Tertiary / Informational Blue (#0369A1):** Used for links, secondary buttons, and technical highlights.
- **Status Red (#B91C1C):** Critical incidents and immediate danger.
- **Status Green (#15803D):** Compliance met and safe conditions.
- **Neutral/Surface:** A range of cool greys from `#F8FAFC` (background) to `#1E293B` (text) to ensure maximum contrast and legibility.

## Typography
The typography system uses a tiered approach to balance readability with technical precision.

- **Headlines:** **Hanken Grotesk** provides a sharp, contemporary, and authoritative feel for page titles and section headers.
- **Body Content:** **Inter** is the workhorse for all data entries, reports, and long-form text, chosen for its exceptional legibility at small sizes.
- **Technical Labels:** **JetBrains Mono** is used sparingly for ID numbers, timestamps, and sensor data to provide a "technical/log" aesthetic that differentiates static data from interactive text.

Avoid all decorative or serif fonts. Maintain high contrast (minimum 4.5:1) for all body text.

## Layout & Spacing
This design system utilizes a **Fixed-Fluid Hybrid Grid** to ensure data density is maintained across enterprise displays.

- **Desktop (1440px+):** 12-column grid, 24px margins, 16px gutters. Large dashboards may use a 24-column grid for complex widget layouts.
- **Tablet (768px - 1439px):** 8-column grid, 16px margins, 16px gutters.
- **Mobile (< 767px):** 4-column grid, 12px margins, 12px gutters.

The spacing rhythm is based on a **4px baseline**. Components should favor tighter vertical padding to maximize the "above the fold" visibility of incident logs and audit trails.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows, maintaining a professional, flat-industrial feel.

- **Level 0 (Background):** `#F8FAFC` - The base canvas.
- **Level 1 (Cards/Sections):** White surface with a 1px border of `#E2E8F0`. No shadow.
- **Level 2 (Interactive/Floating):** White surface with a 1px border of `#CBD5E1` and a very subtle ambient shadow (4px blur, 5% opacity black).
- **Active State:** Elements use a 2px "Focus Ring" using the Tertiary Blue to indicate keyboard or mouse focus.

Avoid glassmorphism or heavy blurs, as these conflict with the industrial, high-performance requirement.

## Shapes
The shape language is "Soft-Industrial." Components use a minimal **0.25rem (4px)** corner radius to feel precise and modern without the "consumer-grade" softness of fully rounded corners.

- **Small Components (Inputs, Buttons, Chips):** 4px radius.
- **Large Components (Cards, Modals):** 8px radius.
- **Status Indicators:** Square or circular depending on the icon type, but always maintaining sharp, clean containment.

## Components
Consistent component behavior is vital for reducing cognitive load during emergency reporting.

- **Buttons:** 
  - *Primary:* Solid Primary Blue, white text, 4px radius. 
  - *Critical:* Solid Status Red for "Delete" or "Report Emergency."
- **Data Tables:** High-density rows (32px-40px height). Alternate row striping using `#F1F5F9`. Headers should be uppercase **JetBrains Mono** labels.
- **Status Chips:** 
  - Use a "Traffic Light" system: Background tint (10% opacity of status color) with high-contrast text and a leading 6px circle icon.
- **Input Fields:** 1px `#CBD5E1` border that thickens to 2px Primary Blue on focus. Labels are always positioned above the field for clarity.
- **Incident Indicators:** A specialized component using a vertical color-coded bar (6px width) on the left side of a card or list item to immediately signal severity (Low/Medium/High/Critical).
- **Audit Timeline:** A vertical line component with "nodes" representing investigation stages, using Tertiary Blue for completed steps and Safety Amber for pending actions.