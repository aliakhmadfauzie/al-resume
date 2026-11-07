---
name: Industrial Integrity
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#041528'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a2a3e'
  on-tertiary-container: '#8191a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-executive:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-technical:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-data:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-data-bold:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-mono-style:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter-dense: 8px
  gutter-standard: 16px
  margin-container: 24px
  input-height-sm: 28px
  input-height-md: 36px
---

## Brand & Style
The design system is engineered for heavy-duty enterprise environments, specifically Safety, Health, and Environment (SHE) management. It prioritizes **authoritative precision** and **operational reliability**. 

The aesthetic is **Modern Industrial**, characterized by high information density, structural rigidity, and a utilitarian focus. It draws from technical blueprints and instrumentation panels to evoke a sense of controlled power and absolute accuracy. The interface is designed to reduce cognitive load in high-stress, high-throughput scenarios where data integrity is paramount.

## Colors
This design system uses a restricted palette to maintain high contrast and clarity. The primary palette is grounded in "Industrial Slate" and "Deep Navy" to project stability.

### Departmental Semantics
To navigate massive enterprise suites, specific functional areas are color-coded at the "Top-Rail" or "System-Identifier" level:
- **IT Operations:** Blue (`#2563EB`) – Symbolic of logic and connectivity.
- **Human Resources:** Teal/Green (`#0D9488`) – Suggests growth and safety.
- **Finance:** Emerald (`#059669`) – Traditional indicator of monetary flow.
- **Quality Assurance:** Amber/Orange (`#D97706`) – Attention-grabbing for compliance and risk.
- **Engineering:** Slate (`#475569`) – The core industrial base.

Color usage should be functional, not decorative. Use these colors as 4px top borders on cards, left-hand navigation accents, or "Service Labels" within complex tables to provide immediate environmental context.

## Typography
We utilize **Hanken Grotesk** for its sharp terminals and exceptional legibility at small scales. 

### Hierarchy Strategy
- **Executive Summaries:** Use `display-executive` for high-level KPIs and dashboard totals. This level uses tighter tracking to maintain a modern, "command center" feel.
- **Technical Data:** Use `body-data` for the vast majority of form inputs and table cells. The 13px size is optimized for high-density layouts where seeing 50+ rows is required.
- **Metadata:** Use `label-mono-style` for column headers and ID tags (e.g., Asset IDs, SKU numbers). The uppercase styling and wide tracking differentiate structural labels from editable data.

## Layout & Spacing
The system follows a **4px grid** to accommodate extreme data density. 

### Grid Philosophy
- **Fluid Efficiency:** Main content areas use a fluid 12-column grid to maximize real estate on 27"+ monitors commonly found in operation centers.
- **Sidebar Rigidity:** Left navigation is fixed at 240px; right-hand utility panels (audit trails) are fixed at 320px.
- **Density Modes:** For SAP-style forms, use `gutter-dense` (8px) between input groups. For executive dashboards, use `gutter-standard` (16px).

### Responsive Reflow
On mobile devices, multi-column forms must collapse to a single column. Horizontal scrolling is permitted for data tables only, provided the first column (ID) remains sticky.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Structural Outlines** rather than shadows. 

- **Surface Levels:** 
  - Level 0 (Base): Neutral Slate-50.
  - Level 1 (Cards/Containers): Pure White with a 1px border (`#E2E8F0`).
  - Level 2 (Modals/Popovers): Pure White with a subtle 4px "Industrial Shadow" (0% blur, 2px offset, Slate-200) to mimic a physical layer.
- **High-Contrast Outlines:** Focus states and active workflow stages use a 2px solid border in the department-specific semantic color. 
- **Z-Index Strategy:** Critical alerts (Safety violations) sit at the highest Z-index and utilize a pulsing 1px inset border.

## Shapes
We use a **Soft (0.25rem)** roundedness level to maintain a professional, systematic appearance. 

- **Standard Elements:** Buttons, inputs, and small cards use 4px (`rounded-sm`).
- **Containers:** Larger dashboard widgets and main content panels use 8px (`rounded-lg`).
- **Interactive States:** Avoid "pill" shapes. Even checkboxes and toggles should maintain a squared-off, geometric profile to stay consistent with the "Industrial" narrative.

## Components

### 1. Workflow Visualization
- **Process Steppers:** Horizontal for 3-stage approvals; vertical for 5-stage complex audits. Stages use a "Boxed" state: Completed (Primary color background), Active (1px Primary border, Bold text), and Pending (Grey text, dashed border).
- **Audit Trails:** A vertical timeline component utilizing `body-data` for timestamps and `label-mono-style` for the user ID. Changes are highlighted with a background-tint (Green for additions, Red for deletions).

### 2. High-Density Forms
- **Input Fields:** 28px height for "Dense Mode." Labels are positioned top-left, using `label-mono-style`. Required fields are marked with a primary-colored vertical line on the left border of the input rather than an asterisk.
- **Data Tables:** Zebra-striping is mandatory (Slate-50). Row height is capped at 32px. Actions (Edit/Delete) are hidden until hover to reduce visual noise.

### 3. Command & Control
- **Status Badges:** Square corners. Use departmental semantic colors for "Area" tags and standard Semantic (Success/Warning/Danger) for "System Status."
- **Action Bars:** Sticky footers on long forms containing the primary action (e.g., "Submit Audit") on the right and secondary actions on the left.
- **Departmental Hero-Header:** A 4px horizontal bar at the very top of the screen displaying the active department color, ensuring the user always knows their functional context (e.g., Emerald for Finance).