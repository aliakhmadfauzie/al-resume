---
name: Core Service Desk
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
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
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
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
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
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
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
The design system is engineered for high-frequency professional environments where clarity, speed of resolution, and institutional trust are paramount. The visual language follows a **Corporate Modern** aesthetic, blending the systematic precision of enterprise software with the approachability of modern SaaS. 

The emotional response should be one of "controlled efficiency." By utilizing generous white space and a structured information hierarchy, the UI reduces the cognitive load on service desk agents and end-users alike. The style avoids unnecessary decoration, favoring functional clarity and a sense of technical reliability.

## Colors
The palette is anchored by deep blues to project authority and stability.
- **Primary:** A deep Slate-Blue (#0F172A) used for navigation, headers, and high-level structural elements.
- **Secondary:** A vibrant Action-Blue (#2563EB) for primary buttons, active states, and links, ensuring key interactions are easily identifiable.
- **Functional/Status:** A strict semantic system is employed for SLA tracking. Green (#10B981) signifies healthy metrics, Amber (#F59E0B) indicates items requiring attention or pending status, and Red (#EF4444) is reserved for breached SLAs or critical outages.
- **Surface:** The background uses a soft off-white/gray (#F8FAFC) to distinguish the canvas from the pure white (#FFFFFF) of interactive cards and containers.

## Typography
This design system utilizes **Inter** for its exceptional legibility and systematic feel. The type scale is optimized for dense data environments.
- **Headlines:** Use semi-bold and bold weights with slight negative letter-spacing to maintain a professional, sturdy appearance.
- **Body Text:** Standardized at 14px for the primary reading experience to allow for high information density without sacrificing readability.
- **Labels:** Small, uppercase labels with increased letter-spacing are used for metadata like "Ticket ID" or "Created Date."
- **Numerical Data:** For ticket counts and timers, enable tabular figures (tnum) to ensure vertical alignment in lists and tables.

## Layout & Spacing
The layout follows a **8px grid system** to ensure mathematical consistency across all components.
- **Grid:** A 12-column fluid grid is used for the main dashboard, collapsing to a single column on mobile devices.
- **Sidebars:** Navigation is fixed at 240px to provide a consistent anchor for the user experience.
- **Density:** In ticket lists, use "Compact" spacing (8px vertical padding) to maximize the number of visible items. In detail views, use "Comfortable" spacing (16px–24px) to improve focus on the content.
- **Breakpoints:** Mobile (<768px), Tablet (768px - 1279px), Desktop (>1280px).

## Elevation & Depth
Hierarchy is established through **Tonal Layers** supplemented by very soft, functional shadows.
- **Level 0 (Background):** #F8FAFC - The base canvas.
- **Level 1 (Cards/Sidebar):** Pure white background with a 1px border (#E2E8F0) and a subtle 4px blur, 2% opacity shadow.
- **Level 2 (Modals/Popovers):** Pure white with a 12px blur, 8% opacity shadow to indicate clear separation from the workspace.
- **Active States:** Subtle inset shadows or 2px colored borders are used instead of heavy glows to maintain a clean, "flat-plus" professional look.

## Shapes
The shape language is **Soft (0.25rem)**, conveying modern precision without feeling overly "playful" or "consumer-grade."
- **Standard Elements:** Inputs, buttons, and small cards use a 4px (0.25rem) radius.
- **Large Containers:** Dashboard widgets or main content areas use 8px (0.5rem).
- **Status Indicators:** Small status dots are circular, while status chips use a 4px radius to match the systematic aesthetic rather than a full pill shape.

## Components
- **Buttons:** Primary buttons use a solid blue fill. Secondary buttons use a light gray ghost style with a subtle border. Tertiary buttons are text-only for low-priority actions.
- **Status Chips:** Small badges with light-tinted backgrounds and dark-tinted text (e.g., light red background with dark red text for "Overdue").
- **Inputs:** Clean, 1px bordered fields that turn blue on focus. Error states use a red border and a small helper text icon.
- **Cards:** The primary container for ticket information. They feature a 1px border and 16px of internal padding.
- **Data Tables:** High-density rows with zebra striping (alternate rows with #F8FAFC) to help the eye track across complex ticket data.
- **SLA Progress Bar:** A thin (4px) horizontal bar that changes color from green to amber to red based on the percentage of time remaining.
- **Activity Feed:** A vertical timeline component using thin lines and small nodes to show ticket history and updates.