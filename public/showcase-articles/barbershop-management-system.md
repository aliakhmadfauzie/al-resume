# Barbershop Management System: A Low-Code Operations Platform

A Power Platform solution that runs a full barbershop operation — from customer booking to staff scheduling and reporting — built as **Microsoft Forms → Power Automate → SharePoint → Power Apps (Canvas) → Power BI**.

> **AL**
> **Ali Akhmad Fauzie** — Fullstack & Enterprise Solution Architect

---

## The Architecture

Rather than a bespoke build, the system is assembled from native Microsoft 365 building blocks:

```
Microsoft Forms → Power Automate → SharePoint Lists → Power Apps (Canvas) → Power BI
```

- **SharePoint** is the relational data store (6 lists with Lookup relationships).
- **Power Automate** runs the request/confirm flow and notifications.
- **Power Apps (Canvas)** is the staff-facing front end.
- **Power BI** provides quality-check and reporting dashboards.

## SharePoint Data Model

Six SharePoint lists form the relational core. Key entities include:

- **Customers** — profile, contact, lifetime visit/spend, `IsVIP`, preferred staff (Lookup), and notes. Primary key is a friendly ID like `CUS-0001`.
- **Staff** — role (`Barber`, `Senior Barber`, `Master Barber`, `Apprentice`, `Receptionist`, `Manager`), specialties, `CommissionRate`, `MaxDailyBookings`, and a `ColorCode` used for calendar display. Referenced by `Appointments.Staff`.

Lookup columns link customers to their preferred staff, appointments to staff, and services to staff — giving relational integrity out of the box.

## Power Automate "Request & Confirm" Flow

- Triggered on item create/modify.
- Routes the request through confirmation and notification steps.
- Emails confirmations to customers and notifies the relevant staff.

## Staff Canvas App

The app exposes the day-to-day screens: scheduling, appointment management, customer lookup, and staff visibility — driven by the SharePoint lists and the flow.

## Quality Check & Reporting

Power BI dashboards surface operational KPIs — visit counts, revenue, VIP cohorts, and staff commission — to support decision-making.

## Developer Enablement

The project also ships VS Code + Power Platform CLI setup and an **OData query reference** so queries against the SharePoint lists are delegation-safe and predictable.

---

> **Reference**: Evidence sourced from the `Barbershop Project` repository (`Barbershop-Management-System-Specification.md`, `flows/`, `canvas-app/`, `powerbi/`, `solutions/`).
