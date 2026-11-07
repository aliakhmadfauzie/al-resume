---
name: Precision Quality Standard
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
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
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
  tertiary-container: '#002114'
  on-tertiary-container: '#069669'
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
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  table-header:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
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
  grid-margin: 24px
  grid-gutter: 16px
  container-max-width: 1440px
  table-cell-padding: 12px 16px
---

## Brand & Style

The design system is engineered for the high-stakes environment of enterprise manufacturing quality management. It prioritizes clarity, regulatory compliance, and high-velocity data processing. The brand personality is authoritative and meticulous, evoking the feeling of a precision instrument.

The design style is **Corporate / Modern** with a lean toward **Functional Minimalism**. It utilizes a strict grid-aligned structure to facilitate the scanning of dense technical documentation and audit trails. Visual flair is intentionally restrained to ensure that critical alerts and status indicators remain the focal point of the user experience.

## Colors

The palette is anchored by a deep navy (`#0F172A`) to establish authority and trust. Slate blues serve as secondary tones for navigational elements and supporting UI, creating a calm, focused environment. 

Functional signaling is strictly enforced:
- **Primary:** Deep navy for headers, primary buttons, and structural navigation.
- **Success/Compliant:** Emerald green is reserved for passing audits and compliant states.
- **Warning/Pending:** Amber is used for Non-Conformance Reports (NCR) under review or pending actions.
- **Error/Alert:** A precise red marks immediate risks, failed inspections, or critical safety alerts.
- **Neutral:** A range of cool grays (Slate) provides a foundation for high-density data tables without causing visual fatigue.

## Typography

This design system utilizes **Inter** for its exceptional legibility in data-dense interfaces and its neutral, professional tone. For technical strings, serial numbers, and audit IDs, **JetBrains Mono** is introduced to ensure character distinction (e.g., distinguishing '0' from 'O').

Typography scales are optimized for density:
- **Headlines:** Use tight letter-spacing and bold weights to define clear section boundaries.
- **Data Tables:** Use `body-sm` for primary cell content and `table-header` for column descriptors to maximize information density per screen.
- **Labels:** Technical identifiers use the monospaced font to maintain fixed widths in list views.

## Layout & Spacing

A **12-column fixed grid** is used for desktop views to maintain alignment across complex dashboards. The layout shifts to a fluid model for tablet use-cases (e.g., floor inspections). 

A strict **4px baseline grid** governs all spatial relationships. In data-heavy views, vertical padding is compressed to `8px` or `12px` to allow more rows to be visible above the fold. 

**Breakpoints:**
- **Desktop:** 1440px+ (Center-aligned fixed container).
- **Tablet:** 768px - 1439px (Fluid with 24px margins).
- **Mobile:** <767px (Single column with 16px margins; primarily for alert notifications and quick approvals).

## Elevation & Depth

To maintain a "grid-aligned" and professional feel, this design system avoids heavy shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines** to define hierarchy.

- **Level 0 (Background):** Slate-50 or White.
- **Level 1 (Cards/Tables):** White background with a 1px border in Slate-200. No shadow.
- **Level 2 (Overlays/Modals):** White background with a subtle, 15% opacity Slate-900 shadow (4px blur) to provide minimal lift without breaking the flat aesthetic.
- **Active State:** Primary actions may use a subtle inset shadow to indicate a "pressed" state, reinforcing the tactile nature of a control panel.

## Shapes

The shape language is structured and architectural. A **Soft (4px)** corner radius is applied to buttons, input fields, and containers. This provides just enough visual comfort to prevent the UI from feeling aggressive, while maintaining a precise, "engineered" look. 

Status badges (Chips) use the same 4px radius rather than a pill shape to maintain consistency with the modular grid.

## Components

### Data Tables
Tables are the core of the system. Headers must remain sticky. Rows use an alternating zebra-stripe (Slate-50) or a 1px bottom border. Hover states should highlight the entire row in a very pale blue.

### Status Badges
Used for compliance states. They feature a light background tint of the status color with high-contrast text and a left-aligned dot indicator for quick scanning.

### Progress Steppers
Workflows (e.g., CAPA - Corrective and Preventive Actions) use a vertical or horizontal stepper with "Completed," "In Progress," and "Locked" states. "In Progress" steps use the Primary Navy color.

### Action Cards
Dashboard summaries should be flat containers with a subtle top-border accent in the status color (e.g., a Red top-border for "Overdue Audits").

### Form Fields
Inputs must have clear, persistent labels. Validation states (Error/Success) must be indicated by both a border color change and a supporting icon to ensure accessibility.