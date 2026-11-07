# Lewi House Syariah: A Brand-First Hospitality Booking Platform

A modern booking and browsing experience for **Lewi House Syariah** — built on Firebase with a rigorous design system and AI-assisted image enhancement.

> **AL**
> **Ali Akhmad Fauzie** — Fullstack & Enterprise Solution Architect

![Lewi House Syariah gallery](https://raw.githubusercontent.com/gradiuzz2009/Lewi-House-Web/main/public/gallery/gallery-01.webp)

---

## The Design System

The product is built on **Modern Minimalism** with a touch of **Corporate Professionalism**, tuned for a Syariah hospitality brand that emphasizes trust, cleanliness, and value.

- **Primary — Deep Corporate Blue** (`#1A365D`): navigation, headers, structural elements, secondary actions.
- **Accent — Booking Orange** (`#FF5E1F`): reserved exclusively for booking CTAs ("Check Availability", "Book Now"), creating clear conversion urgency.
- **Typography**: Montserrat for headings, Inter for body — hierarchy driven by weight, not just size.
- **Layout**: a fixed 1200px grid on desktop and fluid 4-column on mobile.

### Design Tokens

Tokens are defined once in CSS (`@theme`) and reused across the app, ensuring consistency:

| Token | Value | Role |
|---|---|---|
| `--color-primary` | `#1A365D` | Nav, headers, secondary buttons |
| `--color-accent` | `#FF5E1F` | Booking CTAs, badges |
| `--color-sand` | `#FAF9F6` | Page background |
| `--color-surface` | `#FFFFFF` | Cards & containers |

Third-party OTA brand colors (Booking.com, Agoda, Trip.com) are deliberately **excluded** from the token system and hardcoded in the booking modal — respecting third-party brand identity.

## Backend & Platform

- **Firebase Hosting**, **Firestore**, and **Firestore rules** for data and security.
- **Firebase Functions** for server-side logic.
- **CodeFormer image enhancement** (`CodeFormer/` + `convert_enhanced_to_webp.py`) to upscale and clean room imagery into optimized WebP assets.

## Scope

The app covers the full browsing and booking journey — room inventory, amenities, filtering, availability, and a booking modal that combines the OTA brand colors with the site's own conversion design.

---

> **Reference**: Evidence sourced from the `lEWIHOUSEWEB` repository (`DESIGN.md`, `firestore.rules`, `functions/`, `CodeFormer/`, `src/`).
