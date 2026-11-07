---
name: Nexus Enterprise
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
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style
The design system is engineered for high-stakes financial operations, prioritizing clarity, trust, and cognitive efficiency. It follows a **Corporate / Modern** aesthetic with a lean toward **Minimalism**, ensuring that dense P2P data (invoices, purchase orders, and ledger entries) remains legible and actionable. 

The emotional response should be one of "controlled precision"—the interface feels stable, responsive, and authoritative. Visual noise is minimized to allow multi-step workflows and audit trails to take center stage, blending the reliability of legacy ERPs with the fluid performance of modern FinTech.

## Colors
The palette is rooted in **Deep Slate (#0F172A)** and **Navy**, providing a "heavy" anchor for primary navigation and high-priority actions. Backgrounds utilize a tiered system of subtle greys to separate content areas without the use of aggressive borders.

- **Primary Slate:** Used for headers, sidebar navigation, and primary "Commit" actions.
- **Surface Neutrals:** A range of cool greys (#F1F5F9 to #F8FAFC) defines the workspace, reducing eye strain during long periods of data entry.
- **Semantic Indicators:** Strictly reserved for status signaling. **Emerald Green** denotes approvals and completed reconciliations; **Amber** indicates pending items or manual intervention needed; **Ruby Red** is used exclusively for budget overages or system errors.

## Typography
This design system employs a dual-font strategy to balance professional branding with technical utility. 

1. **Hanken Grotesk** is used for high-level headings and page titles to provide a modern, sharp executive feel.
2. **Inter** handles the bulk of the interface, chosen for its exceptional legibility in dense forms and UI controls. 
3. **JetBrains Mono** is introduced for specific data roles: SKU numbers, currency amounts, and transaction IDs. This ensures characters like '0' and 'O' or '1' and 'l' are never confused during financial audits.

**Scale Strategy:** Font sizes are slightly smaller than consumer apps (14px base) to maximize information density while maintaining a comfortable line height for multi-row data tables.

## Layout & Spacing
The system utilizes a **12-column Fluid Grid** with fixed maximum widths for detail views to prevent line-length issues. 

- **Density:** High density is the default. Gutters are kept at 16px to allow more columns in data tables.
- **Sidebar:** A collapsed/expanded sidebar (64px to 240px) anchors the left, using the primary dark slate color.
- **Workspaces:** Content is housed in a "Main Stage" with a 24px margin. When multiple workflows are active, the system uses a split-pane layout to show a list of POs alongside a selected detail view.
- **Mobile/Tablet:** On smaller viewports, the sidebar moves to a bottom tray or hamburger menu, and tables transition to stacked card layouts.

## Elevation & Depth
The system uses **Tonal Layers** rather than heavy shadows to establish hierarchy, reflecting a clean, digital-first financial environment.

- **Level 0 (Background):** #F8FAFC - The base canvas.
- **Level 1 (Cards/Sheets):** White (#FFFFFF) with a 1px border in #E2E8F0. No shadow.
- **Level 2 (Dropdowns/Modals):** White with a soft, 8% opacity slate shadow (0px 4px 12px) to provide focus over the background.
- **Interactions:** Hover states on table rows use a subtle tint (#F1F5F9) to indicate selectability without shifting layout.

## Shapes
A **Soft (0.25rem)** roundedness is applied throughout the system. This subtly softens the "industrial" feel of the ERP without appearing too playful or consumer-oriented. 

- **Inputs & Buttons:** 4px (0.25rem) radius.
- **Status Tags:** Fully rounded (pill) to distinguish them from interactive buttons.
- **Large Containers:** 8px (0.5rem) radius for major dashboard widgets.

## Components
- **Data Tables:** The core of the system. Use "Sticky Headers" and "Zebra Stripping" (alternating #F8FAFC). Row heights are fixed at 40px for standard density.
- **Buttons:**
    - *Primary:* Solid #0F172A with white text.
    - *Secondary:* Ghost style with #334155 border and text.
    - *Destructive:* Solid #DC2626 for "Void" or "Delete" actions.
- **Input Fields:** Use a 1px #CBD5E1 border. Focus state moves to a 2px #2563EB (Blue) outline. Labels are always persistent (not floating) to ensure context during data entry.
- **Status Chips:** Small, uppercase labels with a low-opacity background of their semantic color (e.g., Success = Light green bg + Dark green text).
- **Steppers:** Vertical steppers are used for P2P workflows (Requisition → PO → Receipt → Invoice → Payment) to show progress and current ownership of the task.
- **Oracle Sync Indicator:** A specific "System Status" component in the top utility bar showing the last successful sync time with Oracle ERP.