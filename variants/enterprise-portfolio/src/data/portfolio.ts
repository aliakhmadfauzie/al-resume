import type { PortfolioData } from "../hooks/usePortfolio";
import type {
  StatMetric,
  Skill,
  SkillCategory,
  SkillLevel,
  Project,
  TimelineEvent,
  ArchitectureStack,
  AIStack,
  IntegrationStack,
  QualityStack,
  SecurityStack,
  MonitoringStack,
  DevEnvironmentStack,
  DatabaseStack,
  UXStack,
  BIStack,
  TechnologyRadar,
} from "../types/design-system";

export const personalInfo = {
  name: "Ali Akhmad Fauzie",
  title:
    "Enterprise Power Platform & Dynamics 365 Solution Architect | Dataverse Data Architect | ALM & AI Engineering Lead",
  tagline:
    "Dataverse-first architecture · 16 production Power Apps · C# Plugins & PCF Controls · Enterprise ALM · 28+ departments modernized",
  bio: `Enterprise Power Platform & Dynamics 365 Solution Architect with 7+ years of service delivery, operations leadership, and dual-track transformation experience spanning low-code Canvas Apps, code-first React/TypeScript platforms, and Dataverse data architecture.

Proven track record leading large-scale digital modernization at a publicly listed Malaysian conglomerate (palm oil, oleochemicals, property) — cataloguing 361 legacy Lotus Domino forms and migrating them into a modern Microsoft 365 environment. The architecture follows a deliberate two-phase strategy: Phase 1 deployed 16 production Canvas Apps using SharePoint Online strictly as an interim staging data store to eliminate $960K/year in premium licensing during rapid migration (28+ department sites), while Phase 2 — the Dataverse Migration Blueprint — defines the enterprise-grade target architecture with full relational data modeling, Business Unit hierarchy, Security Role inheritance, Field Security Profiles, polymorphic lookups, and managed solution ALM. SharePoint Online is explicitly a migration staging layer, not a production data architecture.

Core expertise spans Dataverse solution design with managed/unmanaged solution boundaries, environment strategy (Dev → Build → Test → Prod), connection reference management, environment variables, C# Dataverse Plugins with pre/post-operation execution pipeline stages, PCF Controls (TypeScript/React), and Solution Segmentation for enterprise ALM. Production CI/CD pipelines implemented via GitHub Actions and Azure DevOps with Power Platform Build Tools — see the .github/workflows/ directory for inspectable pipeline definitions. AI-assisted development with domain-specific Copilot agents for code generation, QA testing, and documentation acceleration, governed by DLP policies, content filtering, and Microsoft Copilot Studio architecture. Power Platform governance aligned to WCAG 2.2 AA, OWASP Top 10, and GxP compliance standards, with 98%+ SLA compliance.

Self-taught developer who pioneered Power Platform adoption on the BPO operations floor in 2021, building end-to-end operational tools using Power Apps, Power Automate, and SharePoint to manage teams, track KPIs, and automate workflows.`,
  location: "Indonesia",
  email: "aliakhmadfauzie@gmail.com",
  social: {
    github: "https://github.com/altechsolution123",
    linkedin: "https://linkedin.com/in/aliakhmadf",
  },
};

export const skills = [
  {
    category: "Power Platform & Dynamics 365",
    items: [
      "Power Apps Canvas",
      "Power Automate",
      "Dataverse",
      "Power Fx",
      "Power Pages",
      "Model-Driven Apps",
      "PCF Controls",
      "PA YAML v3.0",
    ],
  },
  {
    category: "Dataverse & Data Architecture",
    items: [
      "Dataverse Table Design",
      "Business Units & Security Roles",
      "Row-Level & Field-Level Security",
      "Polymorphic Lookups",
      "Alternate Keys & Plugins",
      "C# Plugin Development",
      "Custom Workflow Activities",
    ],
  },
  {
    category: "Frontend & Code-First",
    items: [
      "React 19",
      "TypeScript 5.9",
      "Vite",
      "shadcn/ui",
      "Jotai",
      "TanStack Query",
      "Fluent UI v9",
    ],
  },
  {
    category: "ALM & DevOps",
    items: [
      "GitHub Actions",
      "Azure DevOps Pipelines",
      "PAC CLI",
      "Solution Segmentation",
      "Managed vs Unmanaged Solutions",
      "Environment Variables",
      "Connection References",
      "PnP PowerShell",
    ],
  },
  {
    category: "AI & Copilot",
    items: [
      "GitHub Copilot",
      "Copilot Studio",
      "AI Agent Architecture",
      "Azure OpenAI",
      "RAG Architecture",
      "DLP Guardrails",
      "Python",
      "PowerShell",
    ],
  },
  {
    category: "Enterprise Architecture",
    items: [
      "Solution Architecture",
      "Environment Strategy (Dev→Build→Test→Prod)",
      "Dataverse Migration Blueprint",
      "SharePoint-to-Dataverse Roadmap",
      "GxP Compliance",
      "OWASP Top 10",
      "WCAG 2.2 AA",
    ],
  },
  {
    category: "Leadership & Operations",
    items: [
      "Enterprise Solution Delivery",
      "Power Platform Governance",
      "SLA & Operations Management (98%+)",
      "Team Scaling (9 → 34+)",
      "Stakeholder & Client Engagement",
      "SOW Negotiation & Budget Oversight",
    ],
  },
];

export const project = {
  title: "Enterprise Legacy System Modernization",
  subtitle:
    "Enterprise-Wide Digital Transformation for a Publicly Listed Malaysian Conglomerate",
  client: "IOI Corporation Berhad — palm oil, oleochemicals, property",
  scale:
    "361 forms catalogued · 28+ departments · 2 sites (Penang + Johor) · Dataverse Target Architecture",
  overview: `Led the enterprise-wide modernization of 361 legacy Lotus Domino business applications across 28+ departments. The architecture follows a deliberate two-phase strategy: Phase 1 deployed 16 production Power Apps using SharePoint Online strictly as an interim staging data store — leveraging existing M365 E3/E5 licensing to eliminate $960K/year in premium connector costs during rapid migration. Phase 2, the Dataverse Migration Blueprint, defines the enterprise-grade target architecture: full relational data modeling with MainDB parent tables and polymorphic child lookups, Business Unit hierarchy mapped to departmental data isolation, Security Role inheritance with 5-tier approval matrices, Field Security Profiles for PII/financial data, alternate keys for Oracle ERP bidirectional sync, and managed solution ALM with staged environment promotion. SharePoint Online is explicitly positioned as a migration staging layer — the production target is Dataverse.`,
  challenge: [
    "Aging Lotus Domino platform (20+ years) — proprietary technology with no mobile access, no cloud integration, no SSO, no audit trails, and extremely limited developer talent pool",
    "Budget constraints required an interim data store approach: Phase 1 used existing M365 licensing (SharePoint Online) to avoid $960K/year in premium connector costs for 2,000+ users, with explicit acknowledgment of SPO constraints (5,000-item threshold, no relational integrity, no row/field-level security)",
    "Enterprise-grade Dataverse architecture required for production: row-level security, Business Unit isolation, Field Security Profiles for PII, polymorphic lookups, and managed solution ALM — none achievable with SharePoint Online as a final data store",
    "Compliance gaps — no MFA, no audit trails, no data retention policies, no multi-factor authentication — required enterprise security architecture from day one",
    "Manual processes everywhere — email-based approvals, paper forms, disconnected workflows — needed end-to-end automation with Power Automate and approval routing",
    "AI governance required: DLP policies, content filtering, prompt evaluation frameworks, cost governance, and Microsoft Copilot Studio architecture for 12+ domain-specific agents",
  ],
  approach: [
    {
      phase: "Phase 1: Discovery & Enterprise Assessment",
      detail:
        "Catalogued 361 legacy Lotus Domino applications, 1,171 UI screens, all data fields, business workflows, and notification rules. Classified each form by enterprise complexity: simple CRUD (Canvas App), workflow-heavy (Model-Driven + Power Automate), or integration-heavy (React code-first + Custom Connectors). Documented compliance requirements: GxP audit trails, WCAG 2.2 AA accessibility, OWASP Top 10 security.",
    },
    {
      phase: "Phase 2: Dataverse Target Architecture Design",
      detail:
        "Designed the enterprise-grade Dataverse target architecture as the primary production data layer. Entity-Relationship Diagram: MainDB parent tables with FormCode discriminator, child task/comment/attachment tables with polymorphic lookups, Business Unit hierarchy mapped to departmental data isolation, Security Role inheritance model (5-tier approval: Requestor → Line Manager → Finance → Compliance → Executive), Field Security Profiles for sensitive columns (amounts, PO numbers, PII), and alternate keys for Oracle ERP bidirectional sync. Solution Segmentation: separate managed solutions for core entities, business logic, and UI layer. Environment Variables for per-environment configuration. Connection References for data source portability. Deployment Settings Files for Dev → Build → Test → Prod staged promotion.",
    },
    {
      phase:
        "Phase 2b: Interim SharePoint Online Deployment (Cost Optimization)",
      detail:
        "Deployed 16 production Power Apps on SharePoint Online as an interim data store — explicitly to avoid $960K/year in premium licensing during rapid migration. Accepted SPO constraints (5,000-item threshold, no relational integrity, no row/field-level security) as Phase 1 trade-offs with a documented migration path to Dataverse. Single MainDB_{Dept} list per site with FormCode discriminator, indexed columns for delegation-safe queries, and typed SharePoint columns replacing legacy free-text fields. Data accuracy improved from 70% to 98%. This is a staging layer, not the target architecture.",
    },
    {
      phase: "Phase 2c: C# Dataverse Plugins & PCF Controls",
      detail:
        "Built C# Dataverse Plugins registered on Pre/Post-Operation execution pipeline stages with Application Insights telemetry for performance monitoring and error tracking. Developed PCF Controls (TypeScript/React) extending Model-Driven App capabilities: dynamic lookup selectors with server-side OData filtering, multi-level approval tree components, and real-time status indicators with SignalR integration. Plugins enforce business rules at the data layer — not in Canvas App Power Fx — ensuring consistent validation regardless of entry point.",
    },
    {
      phase: "Phase 3: Enterprise ALM & CI/CD Pipeline",
      detail:
        "Implemented enterprise ALM with GitHub Actions + Azure DevOps using Power Platform Build Tools. PAC CLI automation: solution clone, pack/unpack, auth management, code generation for SharePoint services. Solution Segmentation: holding solution (shared components) → target managed solutions (per feature area). Deployment Settings Files with per-environment connection references, environment variables, and dynamic configuration. Staged promotion: Dev (unmanaged) → Build (export + managed packaging) → Test (managed import + automated validation) → Prod (managed import + smoke test). Solution Checker runs on every PR. PnP PowerShell for idempotent SharePoint provisioning across 28+ department sites.",
    },
    {
      phase: "Phase 4: AI-Assisted Development with Governance",
      detail:
        "Deployed domain-specific AI coding assistants across automated pipelines for form migration, TSX development, Canvas screen generation, QA testing, governance auditing, and documentation. Each assistant uses Azure OpenAI (GPT-4o) with RAG architecture — vector-indexed SharePoint schema documentation, PA YAML v3.0 reference, and project-specific business rules ground every response. DLP policies enforce data classification and prevent PII leakage into AI outputs. Copilot Studio declarative agents with topic triggers handle enterprise queries. Content filtering and prompt evaluation frameworks ensure enterprise-grade AI governance.",
    },
    {
      phase: "Phase 5: Quality, Compliance & Delivery",
      detail:
        "Established enterprise-wide standards: WCAG 2.2 AA accessibility (38+ anti-patterns identified and resolved), OWASP Top 10 security (55+ anti-patterns with detection regex), Core Web Vitals performance (LCP < 2.5s, INP < 200ms, CLS < 0.1), GxP compliance with immutable audit trails. Automated testing, code review pipelines, and change management processes. Delivered 16 production applications with 200+ reusable components, 45+ custom data hooks, and 150+ automation scripts — all with modern security (SSO, MFA, audit trails).",
    },
  ],
  results: [
    { metric: "Forms Catalogued", value: "361" },
    { metric: "Departments", value: "28+" },
    { metric: "Production Apps", value: "16" },
    { metric: "Reusable Components", value: "200+" },
    { metric: "Automation Scripts", value: "150+" },
    { metric: "License Cost Avoided", value: "$960K/yr" },
    { metric: "Concurrent Users", value: "2,000+" },
    { metric: "SLA Compliance", value: "98%+" },
  ],
  techStack: [
    "Dataverse",
    "Power Apps",
    "Power Fx",
    "Power Automate",
    "SharePoint Online",
    "React 19",
    "TypeScript 5.9",
    "Vite",
    "shadcn/ui",
    "C# Dataverse Plugins",
    "PCF Controls",
    "GitHub Copilot",
    "GitHub Actions",
    "Azure Pipelines",
    "PAC CLI",
    "PnP PowerShell",
    "Microsoft Entra ID",
  ],
  architecture: {
    title: "Enterprise Solution Architecture",
    description:
      "Dataverse-first architecture with staged SharePoint Online migration. Dataverse target: MainDB parent tables with FormCode discriminator, polymorphic child lookups, Business Unit hierarchy for departmental isolation, Security Role inheritance, Field Security Profiles for PII, and managed solution ALM. Interim SPO deployment as cost-optimization staging layer. C# Plugins on Pre/Post-Operation pipeline with Application Insights telemetry. PCF Controls for custom Model-Driven App UI. ALM: GitHub Actions + Azure DevOps with solution segmentation, deployment settings files, and staged Dev→Build→Test→Prod promotion. AI governance: DLP policies, content filtering, RAG-grounded Azure OpenAI with domain-specific assistants across automated pipelines.",
  },
};

export const highlights = [
  {
    icon: "�️",
    title: "Dataverse-First Enterprise Architecture",
    description:
      "Designed enterprise-grade Dataverse target architecture as the primary production data layer: MainDB parent tables with FormCode discriminator, polymorphic child lookups, Business Unit hierarchy for departmental data isolation, Security Role inheritance (5-tier approval matrices), Field Security Profiles for PII/financial data, and alternate keys for Oracle ERP bidirectional sync. SharePoint Online used only as an interim cost-optimization staging layer — not the target production architecture. Managed solution ALM with solution segmentation ensures enterprise-grade deployment lifecycle.",
  },
  {
    icon: "🔄",
    title: "Enterprise ALM & Solution Governance",
    description:
      "Implemented complete enterprise ALM with GitHub Actions + Azure DevOps using Power Platform Build Tools. Solution Segmentation: holding solution (shared components) → target managed solutions (per feature area). PAC CLI automation for solution clone, pack/unpack, auth management. Deployment Settings Files with per-environment connection references, environment variables, and dynamic configuration. Staged promotion: Dev (unmanaged) → Build (export + managed packaging) → Test (managed import + automated validation) → Prod (managed import + smoke test). Solution Checker runs on every PR. PnP PowerShell for idempotent SharePoint provisioning across 28+ department sites.",
  },
  {
    icon: "⚡",
    title: "C# Dataverse Plugins & PCF Controls",
    description:
      "Built C# Dataverse Plugins registered on Pre/Post-Operation execution pipeline stages — enforcing business rules at the data layer, not in Canvas App Power Fx, ensuring consistent validation regardless of entry point. Application Insights telemetry for plugin performance monitoring and error tracking. PCF Controls (TypeScript/React) extending Model-Driven App capabilities: dynamic lookup selectors with server-side OData filtering, multi-level approval tree components, and real-time status indicators with SignalR integration.",
  },
  {
    icon: "🤖",
    title: "AI-Assisted Development with Enterprise Governance",
    description:
      "Deployed domain-specific AI coding assistants across automated pipelines: form migration, TSX development, Canvas screen generation, QA testing, governance auditing, and documentation. Each assistant uses Azure OpenAI (GPT-4o) with RAG architecture — vector-indexed SharePoint schema documentation, PA YAML v3.0 reference, and project-specific business rules ground every response. DLP policies enforce data classification and prevent PII leakage into AI outputs. Copilot Studio declarative agents with topic triggers handle enterprise queries. Content filtering and prompt evaluation frameworks ensure enterprise-grade AI governance.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security & Compliance Architecture",
    description:
      "Microsoft Entra ID integration with Conditional Access policies, MFA enforcement, and SSO across all applications. Dataverse Security Role inheritance with row-level and field-level security profiles for sensitive data. GxP compliance with immutable audit trails via Dataverse Auditing (column-level tracking). WCAG 2.2 AA accessibility (38+ anti-patterns resolved), OWASP Top 10 security (55+ anti-patterns with detection), and Core Web Vitals performance standards enforced through automated quality gates.",
  },
  {
    icon: "💰",
    title: "ERP Integration & Cost Optimization",
    description:
      "End-to-end e-Procurement with real-time Oracle PowerBiz ERP bidirectional synchronization via Custom Connectors. CIP Capex Budget Control, multi-vendor PO splits, and SPQQ external supplier portal. SharePoint Online interim deployment avoided $960K/year in premium licensing costs — with documented Dataverse migration path ensuring zero long-term architectural compromise.",
  },
  {
    icon: "📊",
    title: "Delivered at Enterprise Scale",
    description:
      "361 legacy forms catalogued across 28+ departments, 16 production Canvas Apps deployed, 200+ reusable components, 150+ automation scripts, and 2,000+ concurrent users — all delivered on schedule with measurable business impact: 70% faster delivery, 98%+ SLA compliance, and data accuracy improved from 70% to 98% through typed column architecture.",
  },
];

// ============================================================
// Typed Portfolio Data (new design system format)
// ============================================================

// NOTE: Type imports are at the top of this file (lines 1-2)

export const developer = {
  name: personalInfo.name,
  title: personalInfo.title,
  email: personalInfo.email,
  phone: "+60 13-295 7406",
  location: personalInfo.location,
  github: "altechsolution123",
  linkedin: "aliakhmadf",
  twitter: "altechsolution123",
  status: "Open to senior architecture & AI leadership roles",
  bio: personalInfo.bio,
  avatar: `${import.meta.env.BASE_URL}avatar.jpg`,
} as const;

// Dataverse Migration Blueprint — Phase 2 Architecture
export const dataverseMigrationBlueprint = {
  title: "Dataverse Migration Blueprint — Phase 2",
  description:
    "Enterprise-grade transition from SharePoint Online to Dataverse with full relational data model, security role inheritance, and managed solution ALM.",
  erd: [
    "Business Units mapped to department hierarchy",
    "MainDB parent tables with FormCode discriminator",
    "Child task tables with polymorphic lookups",
    "Row-level security profiles per department",
    "Field-level security for sensitive columns",
    "Alternate keys for ERP synchronization",
  ],
  securityModel: [
    "Dataverse Security Roles per department",
    "Business Unit hierarchy for data isolation",
    "Row-Level Security Profiles",
    "Field-Level Security for PII/financial data",
    "Audit logging with immutable trails",
  ],
  alm: [
    "Managed vs. Unmanaged solution boundaries",
    "Environment Variables for configuration",
    "Connection References for data source portability",
    "Deployment Settings Files for per-environment config",
    "GitHub Actions CI/CD with Power Platform Build Tools",
    "Staged solution promotion: Dev → Build → Test → Prod",
  ],
};

export const metrics: StatMetric[] = [
  {
    label: "Production Apps",
    value: 16,
    icon: "rocket",
    suffix: "",
  },
  {
    label: "Forms Catalogued",
    value: 361,
    icon: "database",
    suffix: "",
  },
  {
    label: "Departments",
    value: 28,
    icon: "layout",
    suffix: "+",
  },
  {
    label: "Years Experience",
    value: 9,
    icon: "code",
    suffix: "+",
  },
];

export const allSkills: Skill[] = [
  // Platform
  {
    name: "Power Apps",
    level: 5 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Power Automate",
    level: 5 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Dataverse",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Power Pages",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  // Languages
  {
    name: "Power Fx",
    level: 5 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "TypeScript",
    level: 5 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "JavaScript",
    level: 4 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "HTML/CSS",
    level: 4 as SkillLevel,
    category: "language" as SkillCategory,
  },
  { name: "C#", level: 3 as SkillLevel, category: "language" as SkillCategory },
  {
    name: "SQL",
    level: 3 as SkillLevel,
    category: "language" as SkillCategory,
  },
  {
    name: "Python",
    level: 3 as SkillLevel,
    category: "language" as SkillCategory,
  },
  // Frameworks
  {
    name: "React",
    level: 4 as SkillLevel,
    category: "framework" as SkillCategory,
  },
  {
    name: "shadcn/ui",
    level: 4 as SkillLevel,
    category: "framework" as SkillCategory,
  },
  {
    name: "Jotai",
    level: 3 as SkillLevel,
    category: "framework" as SkillCategory,
  },
  {
    name: "TanStack Query",
    level: 3 as SkillLevel,
    category: "framework" as SkillCategory,
  },
  // Tools
  { name: "Vite", level: 4 as SkillLevel, category: "tool" as SkillCategory },
  { name: "Git", level: 4 as SkillLevel, category: "tool" as SkillCategory },
  {
    name: "GitHub Actions",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Azure Pipelines",
    level: 3 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "PAC CLI",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "PnP PowerShell",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  // Cloud
  { name: "Azure", level: 3 as SkillLevel, category: "cloud" as SkillCategory },
  { name: "M365", level: 5 as SkillLevel, category: "cloud" as SkillCategory },
  {
    name: "SharePoint Online",
    level: 5 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Microsoft Entra ID",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Dynamics 365",
    level: 3 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  // Leadership
  {
    name: "Enterprise Solution Architecture",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "Power Platform Governance",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "AI-Enabled Delivery & Automation",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "SLA & Operations Management (98%+)",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "Team Scaling (9→34+)",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "Stakeholder & Client Engagement",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
  {
    name: "SOW & Budget Oversight",
    level: 4 as SkillLevel,
    category: "leadership" as SkillCategory,
  },
];

export const typedProjects: Project[] = [
  {
    section: "Power Platform",
    id: 1,
    title: "IOI Domino → Microsoft 365 Migration",
    status: "merged",
    statusColor: "green",
    description:
      "Dataverse-first enterprise modernization of 361 legacy Lotus Domino applications across 28+ departments. Target architecture: MainDB parent tables with FormCode discriminator, polymorphic child lookups, Business Unit hierarchy (Corporate → Site → Department), Security Role inheritance (5-tier approval matrices), Field Security Profiles for PII/financial data, and alternate keys for Oracle ERP bidirectional sync. C# Dataverse Plugins on Pre/Post-Operation pipeline stages with Application Insights telemetry. PCF Controls (TypeScript/React) for Model-Driven App UI. SharePoint Online deployed as interim staging layer during Phase 1 ($960K/yr cost avoidance) — NOT the production target. Managed Solution ALM with Solution Segmentation, PAC CLI, Deployment Settings Files, and staged Dev→Build→Test→Prod promotion.",
    metrics: [
      { label: "Forms Catalogued", value: "361" },
      { label: "License Cost Avoided", value: "$960K/yr" },
      { label: "Concurrent Users", value: "2,000+" },
      { label: "SLA Compliance", value: "98%+" },
    ],
    tech: [
      "Dataverse",
      "Power Apps",
      "Power Automate",
      "SharePoint Online",
      "React 19",
      "TypeScript",
      "GitHub Copilot",
    ],
    impact:
      "$960K/yr licensing cost avoided, 70% faster delivery, 98%+ SLA compliance",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2026-06-15",
    links: {
      caseStudy: "#case-study",
      github: "https://github.com/altechsolution123",
    },
  },
  {
    section: "Power Platform",
    id: 2,
    title: "AI-Enabled Development Pipeline with Enterprise Governance",
    status: "merged",
    statusColor: "purple",
    description:
      "Domain-specific AI coding assistants deployed across automated pipelines with enterprise governance: DLP policies enforcing data classification, content filtering preventing PII leakage, RAG-grounded Azure OpenAI (GPT-4o) with vector-indexed SharePoint schema and PA YAML v3.0 reference. Copilot Studio declarative agents with topic triggers for enterprise queries. Prompt evaluation frameworks and cost governance. Reduced migration delivery time by 70% while maintaining enterprise compliance.",
    metrics: [
      { label: "Governed Pipelines", value: "12" },
      { label: "Delivery Speed Boost", value: "70%" },
      { label: "Enterprise Compliance", value: "100%" },
    ],
    tech: [
      "GitHub Copilot",
      "Copilot Studio",
      "Azure OpenAI",
      "Python",
      "TypeScript",
      "PowerShell",
    ],
    impact: "70% delivery speed boost with enterprise AI governance",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2026-04-20",
  },
  {
    section: "Power Platform",
    id: 3,
    title: "E-Procurement System & Oracle PowerBiz ERP Integration",
    status: "merged",
    statusColor: "purple",
    description:
      "End-to-end purchasing suite on Dataverse with Purchase Requisition LOA routing, Purchase Orders with multi-vendor splits, CIP Capex Budget Control, and SPQQ Supplier Portal. Bidirectional Oracle PowerBiz ERP sync via Custom Connectors. Managed solution ALM with environment variables and connection references. Dataverse Business Unit isolation for financial data. Pre-operation C# Plugin for validation rules.",
    metrics: [
      { label: "Procurement Modules", value: "5" },
      { label: "ERP Sync Rate", value: "100%" },
      { label: "Vendor Portal Users", value: "200+" },
    ],
    tech: [
      "Dataverse",
      "Power Apps Canvas",
      "Power Automate",
      "Oracle ERP",
      "Custom Connectors",
      "C# Plugins",
      "Managed Solutions",
    ],
    impact: "Real-time bidirectional ERP sync, fully isolated on Dataverse",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2025-11-20",
  },
  {
    section: "Power Platform",
    id: 8,
    title: "Rebate Approval — GxP-Compliant Dataverse Architecture",
    status: "merged",
    statusColor: "purple",
    description:
      "Standalone corporate approval workflow on Dataverse with complete database isolation. Architecture: separate Dataverse Business Unit for financial data, Security Role inheritance with 5-tier approval matrix (Requestor → Line Manager → Finance → Compliance → Executive), Field Security Profiles on amount/PO columns, immutable audit trail via Dataverse Auditing with column-level tracking, and pre-operation C# Plugin for validation rules. Fully isolated for GxP compliance.",
    metrics: [
      { label: "Approval Tiers", value: "5" },
      { label: "Audit Compliance", value: "100%" },
      { label: "Data Isolation", value: "Complete" },
    ],
    tech: [
      "Dataverse",
      "Power Apps",
      "Power Automate",
      "Row-Level Security",
      "Field Security Profiles",
      "C# Plugins",
      "Audit Logs",
    ],
    impact:
      "Fully isolated GxP-compliant approval engine for sensitive financial data",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2025-01-20",
  },
  {
    section: "Power Platform",
    id: 4,
    title: "SmartFlow — Business Request Automation",
    status: "merged",
    statusColor: "green",
    description:
      "Automated business request processing with enterprise architecture: Power Automate flows with conditional branching, parallel approval paths, and error handling via Configure Run After. SharePoint list as queue with indexed columns for delegation-safe filtering. Power BI dashboard with DAX measures for real-time SLA tracking. Teams notification cards via Adaptive Cards.",
    metrics: [
      { label: "Manual Task Reduction", value: "80%" },
      { label: "Data Accuracy", value: "90%" },
      { label: "Real-Time Tracking", value: "100%" },
    ],
    tech: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Teams"],
    impact: "80% manual processing reduction, 90% data accuracy",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2025-08-15",
  },
  {
    section: "Power Platform",
    id: 5,
    title: "PulseTrack — Workforce Management",
    status: "merged",
    statusColor: "purple",
    description:
      "Real-time workforce management: Power Apps Canvas with delegation-compliant queries, Power Automate flows for status aggregation, Power BI semantic model with star-schema data modeling and DAX measures for SLA compliance tracking.",
    metrics: [
      { label: "Manual Reporting Cut", value: "90%" },
      { label: "Status Accuracy", value: "98%" },
      { label: "Manager Workload Saved", value: "70%" },
    ],
    tech: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Teams"],
    impact: "90% reduction in manual reporting, 98% tracking accuracy",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2025-05-10",
  },
  {
    section: "Power Platform",
    id: 6,
    title: "CS Resolver — AI-Powered Customer Service",
    status: "merged",
    statusColor: "purple",
    description:
      "AI-powered case classification: AI Builder text classification model trained on 120+ SOP categories, Power Automate flows with parallel branching for multi-step case routing, SharePoint list with indexed columns and delegation-safe OData filters for case queue management.",
    metrics: [
      { label: "Classification Boost", value: "50%" },
      { label: "Handling Time Cut", value: "65%" },
      { label: "SOP Categories", value: "120+" },
    ],
    tech: ["Power Apps Canvas", "AI Builder", "Power Automate", "SharePoint"],
    impact: "50% classification accuracy boost, 65% faster case resolution",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2025-03-01",
  },
];

export const timeline: TimelineEvent[] = [
  {
    date: "2017",
    emoji: "🚚",
    title: "Digital Marketing Specialist — TheLorry",
    description:
      "Started professional career in digital marketing after university graduation. Gained foundational experience in digital strategy, analytics, and cross-functional team collaboration.",
  },
  {
    date: "2017 – 2022",
    emoji: "🏢",
    title: "Service Delivery Ops Sr Team Lead — Accenture",
    description:
      "Advanced from Data Analyst to Senior Team Lead over 5+ years. Led cross-functional service delivery teams and managed stakeholder relationships across global enterprise accounts.",
    highlights: [
      "Data Analyst → Team Lead → Senior Team Lead",
      "Accenture Diamond Award recipient",
      "Cross-functional service delivery leadership",
    ],
  },
  {
    date: "2021",
    emoji: "💡",
    title: "Started Learning Power Platform",
    description:
      "Self-taught developer who pioneered internal low-code adoption during COVID-19. Built end-to-end operational tools using Power Apps, Power Automate, and SharePoint to keep business processes running during remote work transitions.",
  },
  {
    date: "2023 – 2025",
    emoji: "⚙️",
    title: "Team Leader, Operations — Concentrix",
    description:
      "Drove AI-powered workflow automation and team scaling across customer service operations. Built 8 Lark ecosystem productivity tools. Certified Lark Developer building enterprise bots and real-time executive dashboards.",
    highlights: [
      "CS Resolver — AI-powered case classification",
      "PulseTrack — real-time workforce management",
      "SmartFlow — automated business request handling",
    ],
  },
  {
    date: "2024 – 2026",
    emoji: "📐",
    title:
      "Enterprise Power Platform & Dynamics 365 Solution Architect — IOI Group",
    description:
      "Led enterprise-wide Domino-to-Microsoft 365 migration — modernizing 361 legacy business applications across 28+ departments. Designed dual-track architecture with Phase 1 SharePoint Online staging and Phase 2 Dataverse Migration Blueprint. Implemented CI/CD pipelines with GitHub Actions and Azure DevOps. Deployed AI-assisted development pipelines with enterprise governance.",
    highlights: [
      "16 production Power Apps deployed",
      "Dataverse Migration Blueprint with ERD and Security Roles",
      "E-Procurement system with real-time Oracle ERP sync",
      "Managed Solution ALM with GitHub Actions CI/CD",
      "PCF Controls (TypeScript/React) and C# Dataverse Plugins",
    ],
  },
  {
    date: "2025",
    emoji: "🚀",
    title: "Power Platform Solution Manager — Meraki Malaysia",
    description:
      "Leading enterprise Power Platform architecture, automation strategy, and digital transformation initiatives. Designing scalable Canvas App and Power Automate solutions integrated with SharePoint Online and Dataverse.",
    highlights: [
      "Enterprise-scale Power Platform solutions",
      "Governance frameworks for Power Apps ALM",
      "AI-assisted development methodologies",
    ],
  },
];

export const social = {
  github: "https://github.com/altechsolution123",
  linkedin: "https://linkedin.com/in/aliakhmadf",
  twitter: "https://twitter.com/altechsolution123",
} as const;

export const methodology = {
  title: "Enterprise Governance & ALM Methodology",
  description:
    "Enterprise-grade Dataverse architecture, solution governance, ALM, and compliance standards applied across all projects — including managed solution boundaries, environment strategy, C# Plugins, PCF Controls, and CI/CD pipeline architecture.",
  standards: [
    {
      name: "Dataverse Solution Architecture",
      icon: "🏛️",
      description:
        "MainDB parent tables with FormCode discriminator, polymorphic child lookups, Business Unit hierarchy, Security Role inheritance, Field Security Profiles, and alternate keys for ERP sync",
    },
    {
      name: "Managed Solution ALM & CI/CD",
      icon: "🔄",
      description:
        "Solution Segmentation: holding solution → target managed solutions. PAC CLI automation (clone, pack/unpack, code generate). Deployment Settings Files with per-environment connection references and environment variables. GitHub Actions + Azure DevOps with Power Platform Build Tools",
    },
    {
      name: "Environment Strategy",
      icon: "🌐",
      description:
        "Dev (unmanaged) → Build (export + managed packaging) → Test (managed import + automated validation) → Prod (managed import + smoke test). Solution Checker on every PR. PnP PowerShell for idempotent provisioning",
    },
    {
      name: "C# Plugins & PCF Controls",
      icon: "🔌",
      description:
        "Dataverse Plugins on Pre/Post-Operation pipeline stages with Application Insights telemetry. PCF Controls (TypeScript/React) for custom Model-Driven App UI with server-side OData filtering",
    },
    {
      name: "AI Governance & DLP",
      icon: "🤖",
      description:
        "DLP policies enforcing data classification, content filtering preventing PII leakage, RAG-grounded Azure OpenAI with vector-indexed schema, prompt evaluation frameworks, and cost governance",
    },
    {
      name: "WCAG 2.2 AA & OWASP Top 10",
      icon: "🔒",
      description:
        "38+ accessibility anti-patterns resolved, 55+ security anti-patterns with detection regex, GxP compliance with immutable audit trails, Core Web Vitals performance standards",
    },
  ],
  artifacts: [
    { label: "Dataverse Target Tables", value: "50+" },
    { label: "Managed Solutions", value: "12" },
    { label: "C# Plugins", value: "5" },
    { label: "PCF Controls", value: "4" },
  ],
};

// ============================================================
// Cross-Platform Operational Tools (Lark Ecosystem — pre-Microsoft)
// ============================================================

export const larkProjects: Project[] = [
  {
    section: "Cross-Platform",
    id: 9,
    title: "DocFinder — AI Document Search",
    status: "merged",
    statusColor: "green",
    description:
      "AI-powered operational guidelines search engine. Built on Lark ecosystem (pre-Microsoft stack, 2024). Uses AI Builder for intelligent document classification.",
    metrics: [
      { label: "Search Speed Boost", value: "80%" },
      { label: "Recommendation Accuracy", value: "99%" },
      { label: "Documents Indexed", value: "5000+" },
    ],
    tech: ["AI Builder", "Lark Chat", "Lark Base"],
    impact: "80% faster document search, 99% recommendation accuracy",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2024-05-10",
  },
  {
    section: "Cross-Platform",
    id: 10,
    title: "LeadFlow — Task & Progress Management",
    status: "merged",
    statusColor: "green",
    description:
      "Task tracking and progress management system. Built on Lark ecosystem (pre-Microsoft stack, 2024). Increased task completion rates by 40% with real-time visibility.",
    metrics: [
      { label: "Task Completion Boost", value: "40%" },
      { label: "Real-Time Tracking", value: "100%" },
      { label: "Team Adoption", value: "95%" },
    ],
    tech: ["Lark Task", "Lark Automation", "Lark Base", "Power BI"],
    impact: "40% increase in task completion, 100% real-time visibility",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2024-11-01",
  },
  {
    section: "Cross-Platform",
    id: 11,
    title: "LeaveSync — Smart Leave Management",
    status: "merged",
    statusColor: "green",
    description:
      "Automated leave management system. Built on Lark ecosystem (pre-Microsoft stack, 2024). Cut leave processing time by 60%, accelerated approvals by 60%.",
    metrics: [
      { label: "Processing Speed", value: "60%" },
      { label: "Approval Speed", value: "60%" },
      { label: "Tracking Accuracy", value: "90%" },
    ],
    tech: ["Lark Base", "Lark Automation", "Lark Chat"],
    impact: "60% faster leave processing and approvals",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2024-09-15",
  },
  {
    section: "Cross-Platform",
    id: 12,
    title: "AskLark — Intelligent Query Management",
    status: "merged",
    statusColor: "green",
    description:
      "Smart query management system. Built on Lark ecosystem (pre-Microsoft stack, 2024). Achieved 60% faster response times and 50% reduction in repeated queries.",
    metrics: [
      { label: "Response Speed", value: "60%" },
      { label: "Repeat Queries Cut", value: "50%" },
      { label: "Agent Satisfaction", value: "92%" },
    ],
    tech: ["Lark Base", "Lark Automation"],
    impact: "60% faster responses, 50% fewer repeated queries",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2024-07-20",
  },
  {
    section: "Cross-Platform",
    id: 13,
    title: "MarketPoint — GIP POC Monitoring",
    status: "merged",
    statusColor: "red",
    description:
      "Dedicated point-of-contact monitoring system for GIP operations. Built on Lark ecosystem (pre-Microsoft stack, 2024). Improved monitoring efficiency by 40%.",
    metrics: [
      { label: "Monitoring Efficiency", value: "40%" },
      { label: "Issue Resolution Speed", value: "50%" },
      { label: "Markets Covered", value: "12" },
    ],
    tech: ["Lark Base", "Lark Automation", "Power BI"],
    impact: "40% monitoring efficiency gain, 50% faster issue resolution",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2024-03-01",
  },
  {
    section: "Cross-Platform",
    id: 14,
    title: "GameIntel — Real-Time Event Alerts",
    status: "merged",
    statusColor: "green",
    description:
      "Instant event alert system for game moderators. Built on Lark ecosystem (pre-Microsoft stack, 2024). REST API integration.",
    metrics: [
      { label: "External Search Cut", value: "80%" },
      { label: "Labeling Accuracy", value: "40%" },
      { label: "Alert Latency", value: "<1s" },
    ],
    tech: ["Game Data REST APIs", "Lark Automation", "Lark Chat"],
    impact: "80% reduction in external searches, sub-second alerts",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2024-01-15",
  },
  {
    section: "Cross-Platform",
    id: 15,
    title: "WorkSync — Productivity & Attendance Tracker",
    status: "merged",
    statusColor: "purple",
    description:
      "Smart productivity and attendance tracking platform. Built on Lark ecosystem (pre-Microsoft stack, 2024). Delivered 30% productivity increase with real-time insights.",
    metrics: [
      { label: "Productivity Increase", value: "30%" },
      { label: "Attendance Accuracy", value: "100%" },
      { label: "Team Adoption", value: "98%" },
    ],
    tech: ["Lark Automation", "Lark Base", "Power BI"],
    impact: "30% productivity lift, 100% real-time attendance visibility",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2023-11-01",
  },
  {
    section: "Cross-Platform",
    id: 16,
    title: "AHT Optimization Initiative",
    status: "merged",
    statusColor: "green",
    description:
      "Data-driven initiative to reduce Average Handling Time across customer service operations. Built on Lark ecosystem (pre-Microsoft stack, 2024). Achieved 15% AHT reduction through automated workflow optimization.",
    metrics: [
      { label: "AHT Reduction", value: "15%" },
      { label: "Processes Optimized", value: "24" },
      { label: "Teams Impacted", value: "8" },
    ],
    tech: ["Power Automate", "Power BI"],
    impact: "15% reduction in average handling time across 8 teams",
    commits: 0,
    filesChanged: 0,
    mergedDate: "2023-09-01",
  },
];

// ============================================================
// Utility Functions
// ============================================================

export const projectData = project;

export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return allSkills.filter((skill) => skill.category === category);
};

export const getProjectsBySection = (section: string): Project[] => {
  return typedProjects.filter((project) => project.section === section);
};

export const getLatestProjects = (limit: number = 5): Project[] => {
  return [...typedProjects]
    .sort(
      (a, b) =>
        new Date(b.mergedDate).getTime() - new Date(a.mergedDate).getTime(),
    )
    .slice(0, limit);
};

export const getSkillLevelCounts = (): Record<SkillLevel, number> => {
  const counts: Record<SkillLevel, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  allSkills.forEach((skill) => {
    counts[skill.level] = (counts[skill.level] || 0) + 1;
  });
  return counts;
};

export const getMetricsByIcon = (): Record<string, StatMetric[]> => {
  return metrics.reduce(
    (acc, metric) => {
      const icon = metric.icon || "default";
      if (!acc[icon]) acc[icon] = [];
      acc[icon].push(metric);
      return acc;
    },
    {} as Record<string, StatMetric[]>,
  );
};

export const socialLinks = {
  github: { url: social.github, label: "GitHub", icon: "github" },
  linkedin: { url: social.linkedin, label: "LinkedIn", icon: "linkedin" },
  twitter: { url: social.twitter, label: "Twitter", icon: "twitter" },
} as const;

// ============================================================
// Default Export
// ============================================================

export const portfolioData: PortfolioData = {
  developer,
  metrics,
  skills: allSkills,
  projects: typedProjects,
  methodology,
  timeline,
  social,
};

// All projects including cross-platform (for separate section)
export const allProjects: Project[] = [...typedProjects, ...larkProjects];

export default portfolioData;

// ============================================================
// 1. Architecture & Design Patterns Stack
// ============================================================

export const architectureStack: ArchitectureStack = {
  patterns: [
    "Dual-Track Architecture (Code-First + Low-Code)",
    "Dataverse Entity-Relationship Design",
    "Parent-Child Data Topology with FormCode Discriminator",
    "Event-Driven Architecture",
    "Microservices Integration",
    "Repository Pattern",
    "Factory Pattern",
    "Observer Pattern",
    "Strategy Pattern",
  ],
  designSystems: [
    "Atomic Design",
    "Component-Based Architecture",
    "Fluent UI v9 (Microsoft)",
    "Design Tokens",
    "Power Apps Component Framework",
  ],
  dataPatterns: [
    "FormCode Discriminator Pattern",
    "MainDB Parent-Child Relationships",
    "7-Stage Workflow Orchestration",
    "3-Tier DEV/TEST/PROD Environment",
    "Dataverse Business Unit Isolation",
    "Row-Level & Field-Level Security Profiles",
    "Polymorphic Lookup Relationships",
  ],
};

// ============================================================
// 2. AI & Copilot Stack
// ============================================================

export const aiStack: AIStack = {
  agents: {
    total: 50,
    categories: [
      "Form Migration Agents",
      "TSX Development Agents",
      "Canvas Migration Agents",
      "QA & Testing Agents",
      "Governance & Compliance Agents",
      "Documentation Agents",
      "Code Review Agents",
      "Performance Optimization Agents",
    ],
    pipelines: 12,
  },
  tools: [
    "GitHub Copilot",
    "Copilot Studio (Declarative Agents)",
    "Azure OpenAI (GPT-4o)",
    "AI Builder",
    "Custom AI Agents",
    "RAG Architecture (Vector Store Grounding)",
    "Prompt Engineering",
  ],
  automation: [
    "Workflow Automation",
    "Intelligent Routing",
    "Automated Classification",
    "Predictive Analytics",
    "Natural Language Processing",
    "DLP Guardrails for AI Output",
    "Enterprise Data Loss Prevention",
  ],
};

// ============================================================
// 3. Integration Stack
// ============================================================

export const integrationStack: IntegrationStack = {
  apis: [
    "REST APIs",
    "Custom Connectors (Power Platform)",
    "OData v4",
    "Webhooks",
    "OAuth 2.0",
    "OpenID Connect",
  ],
  thirdParty: [
    "Oracle PowerBiz ERP",
    "SAP Integration (via Custom Connectors)",
  ],
  protocols: ["HTTPS", "WebSocket", "SSO (SAML, OIDC)"],
  middleware: [
    "Azure API Management",
    "Custom Connectors",
    "Logic Apps",
    "Data Gateway",
  ],
};

// ============================================================
// 4. Testing & Quality Stack
// ============================================================

export const qualityStack: QualityStack = {
  testing: [
    "Unit Testing (Jest, Vitest)",
    "Integration Testing",
    "E2E Testing (Playwright, Cypress)",
    "Accessibility Testing (axe-core)",
    "Performance Testing (Lighthouse)",
    "Security Testing (OWASP ZAP)",
    "Visual Regression Testing",
  ],
  codeQuality: [
    "ESLint",
    "Prettier",
    "TypeScript strict mode",
    "SonarQube",
    "Code Coverage (90%+)",
    "Dependabot",
  ],
  standards: [
    "WCAG 2.2 AA",
    "OWASP Top 10",
    "Core Web Vitals",
    "GxP Compliance",
    "GDPR",
    "PA YAML v3.0",
  ],
};

// ============================================================
// 5. Security Stack
// ============================================================

export const securityStack: SecurityStack = {
  authentication: [
    "Microsoft Entra ID (Azure AD)",
    "OAuth 2.0",
    "OpenID Connect",
    "SAML 2.0",
    "MFA/2FA",
    "Conditional Access",
  ],
  authorization: [
    "RBAC (Role-Based Access Control)",
    "Dataverse Security Roles",
    "Dataverse Business Units",
    "Row-Level Security Profiles",
    "Field-Level Security Profiles",
    "SharePoint Permissions",
    "Power Platform DLP Policies",
  ],
  security: [
    "Data Encryption (At Rest + In Transit)",
    "TLS 1.2+",
    "Secrets Management (Azure Key Vault)",
    "Threat Modeling",
    "Vulnerability Scanning",
    "Audit Logging (Immutable Trails)",
    "Dataverse Plugin Telemetry (Application Insights)",
  ],
};

// ============================================================
// 6. Monitoring & Observability Stack
// ============================================================

export const monitoringStack: MonitoringStack = {
  observability: [
    "Application Insights",
    "Azure Monitor",
    "Power Platform Analytics",
    "SharePoint Audit Logs",
  ],
  dashboards: [
    "Power BI",
    "Grafana",
    "Executive Dashboards",
    "Real-Time Performance Metrics",
  ],
  alerts: [
    "Azure Alerts",
    "Power Automate Alerting",
    "Custom Notification Systems",
  ],
  metrics: [
    "SLA Compliance (98%+)",
    "Response Times",
    "Error Rates",
    "User Adoption",
    "System Uptime",
  ],
};

// ============================================================
// 7. Development Environment Stack
// ============================================================

export const devEnvironmentStack: DevEnvironmentStack = {
  ides: [
    "VS Code",
    "Power Apps Studio",
    "Power Pages Designer",
    "GitHub Codespaces",
  ],
  extensions: [
    "Power Platform Tools",
    "GitHub Copilot",
    "ESLint",
    "Prettier",
    "TypeScript",
    "shadcn/ui extensions",
    "GitLens",
  ],
  packageManagers: ["npm", "yarn", "pnpm", "NuGet"],
  buildTools: ["Vite", "Webpack", "PAC CLI", "MSBuild"],
};

// ============================================================
// 8. Database & Storage Stack
// ============================================================

export const databaseStack: DatabaseStack = {
  storage: [
    "SharePoint Online (Lists & Libraries)",
    "Dataverse",
    "Azure SQL Database",
    "Cosmos DB",
    "Azure Blob Storage",
  ],
  dataSources: [
    "REST APIs",
    "OData",
    "GraphQL",
    "Oracle DB (via ERP)",
    "Excel/CSV Imports",
  ],
  caching: [
    "Redis Cache",
    "SharePoint Cache",
    "Browser Cache (Service Workers)",
  ],
  backup: ["Azure Backup", "SharePoint Retention Policies", "Dataverse Backup"],
};

// ============================================================
// 9. UX/UI Stack
// ============================================================

export const uxStack: UXStack = {
  frameworks: [
    "shadcn/ui",
    "Fluent UI (Microsoft)",
    "Tailwind CSS",
    "Material-UI",
    "Ant Design",
  ],
  icons: [
    "Lucide Icons",
    "Font Awesome",
    "Fluent UI Icons",
    "Custom SVG Icons",
  ],
  animations: ["Framer Motion", "CSS Animations", "Lottie", "React Spring"],
  prototyping: ["Figma", "Adobe XD", "Power Apps Creator Kit"],
};

// ============================================================
// 10. Business Intelligence Stack
// ============================================================

export const businessIntelligenceStack: BIStack = {
  analytics: ["Power BI", "D3.js", "Chart.js", "Recharts", "Azure Data Studio"],
  reporting: [
    "Power BI Report Server",
    "Paginated Reports",
    "Executive Dashboards",
    "Real-Time Operational Dashboards",
  ],
  dataModeling: [
    "DAX",
    "Power Query (M Language)",
    "Star Schema",
    "Data Marts",
  ],
};

// ============================================================
// 11. Enhanced Skills (extended categories)
// ============================================================

export const enhancedSkills: Skill[] = [
  // Architecture
  {
    name: "Dual-Track Architecture",
    level: 5 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Event-Driven Design",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "Microservices",
    level: 4 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  {
    name: "CQRS Pattern",
    level: 3 as SkillLevel,
    category: "platform" as SkillCategory,
  },
  // Security
  {
    name: "OWASP Top 10",
    level: 5 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Threat Modeling",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "OAuth 2.0 / OIDC",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  // Testing
  {
    name: "Jest / Vitest",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Playwright",
    level: 3 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Accessibility Testing",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  {
    name: "Lighthouse",
    level: 4 as SkillLevel,
    category: "tool" as SkillCategory,
  },
  // Monitoring
  {
    name: "Azure Monitor",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Application Insights",
    level: 4 as SkillLevel,
    category: "cloud" as SkillCategory,
  },
  {
    name: "Power BI Analytics",
    level: 5 as SkillLevel,
    category: "platform" as SkillCategory,
  },
];

// ============================================================
// 12. Technology Radar
// ============================================================

export const technologyRadar: TechnologyRadar = {
  adopt: [
    "React 19",
    "TypeScript 5.9",
    "Vite",
    "shadcn/ui",
    "GitHub Copilot",
    "Power Apps",
    "Power Automate",
  ],
  trial: ["AI Agents", "Copilot Studio", "GraphQL", "WebAssembly"],
  assess: ["Blazor", "MAUI", "Azure Functions", "Kubernetes"],
  hold: ["jQuery", "Web Forms", "Classic SharePoint"],
};

// ============================================================
// 13. Combined Stacks Export
// ============================================================

export const stacks = {
  architecture: architectureStack,
  ai: aiStack,
  integrations: integrationStack,
  quality: qualityStack,
  security: securityStack,
  monitoring: monitoringStack,
  devEnvironment: devEnvironmentStack,
  database: databaseStack,
  ux: uxStack,
  businessIntelligence: businessIntelligenceStack,
  technologyRadar,
};

/** All-in-one portfolio data including stacks */
export const fullPortfolioData = {
  ...portfolioData,
  stacks,
};

// ============================================================
// 14. Dataverse Target Architecture (ERD & Schema)
// ============================================================

export const dataverseSchema = {
  title: "Dataverse Target Architecture — Entity-Relationship Model",
  description:
    "Enterprise-grade Dataverse schema with MainDB parent tables, polymorphic child lookups, Business Unit hierarchy, Security Role inheritance, and Field Security Profiles.",
  entities: [
    {
      name: "MainDB_{Dept}",
      type: "Parent Table",
      discriminator: "FormCode",
      keyColumns: [
        "MainDBID (Primary Key, GUID)",
        "FormCode (Choice — discriminates ITSSR, ITHDP, ITRFQ, etc.)",
        "Title (Single line of text)",
        "Status (Choice — Draft, Submitted, In Progress, Approved, Rejected, Closed)",
        "Priority (Choice — Low, Medium, High, Critical)",
        "Requestor (Lookup → SystemUser)",
        "Department (Lookup → Department)",
        "CreatedOn (DateTime — immutable)",
        "ModifiedOn (DateTime — immutable)",
      ],
      security: [
        "Business Unit: Mapped to department hierarchy",
        "Security Role: Department-specific with 5-tier approval",
        "Field Security: Requestor, Amount, PII columns",
      ],
    },
    {
      name: "MainDB_{Dept}_Tasks",
      type: "Child Table",
      relationship: "Polymorphic Lookup → MainDB_{Dept}",
      keyColumns: [
        "TaskID (Primary Key, GUID)",
        "ParentRequestID (Lookup → MainDB_{Dept})",
        "TaskDescription (Multiple lines of text)",
        "AssignedTo (Lookup → SystemUser)",
        "DueDate (Date and Time)",
        "Status (Choice — Pending, In Progress, Completed)",
      ],
    },
    {
      name: "MainDB_{Dept}_Attachments",
      type: "Child Table",
      relationship: "Polymorphic Lookup → MainDB_{Dept}",
      keyColumns: [
        "AttachmentID (Primary Key, GUID)",
        "ParentRequestID (Lookup → MainDB_{Dept})",
        "FileName (Text)",
        "FileSize (Integer)",
        "UploadedBy (Lookup → SystemUser)",
        "UploadedOn (DateTime)",
      ],
    },
    {
      name: "PurchaseRequest",
      type: "Parent Table (E-Procurement)",
      keyColumns: [
        "PurchaseRequestID (Primary Key, GUID)",
        "Requestor (Lookup → SystemUser)",
        "Department (Lookup → Department)",
        "TotalAmount (Currency)",
        "Status (Choice — Draft, Pending LOA, Approved, Rejected)",
        "CIPBudgetCode (Text — Alternate Key for ERP sync)",
        "ERPSyncStatus (Choice — Pending, Synced, Failed)",
      ],
      security: [
        "Business Unit: Financial Services (isolated)",
        "Security Role: 5-tier approval matrix",
        "Field Security: TotalAmount, CIPBudgetCode, PO numbers",
        "Audit Logging: Column-level tracking enabled",
      ],
    },
    {
      name: "PurchaseOrder",
      type: "Child Table (E-Procurement)",
      relationship: "Polymorphic Lookup → PurchaseRequest",
      keyColumns: [
        "PurchaseOrderID (Primary Key, GUID)",
        "PurchaseRequestID (Lookup → PurchaseRequest)",
        "VendorID (Lookup → Vendor)",
        "POAmount (Currency)",
        "PODate (Date)",
        "ERPSyncStatus (Choice — Pending, Synced, Failed)",
      ],
    },
    {
      name: "Department",
      type: "Reference Table",
      keyColumns: [
        "DepartmentID (Primary Key, GUID)",
        "DepartmentName (Text)",
        "BusinessUnitID (Lookup → BusinessUnit)",
        "SiteURL (Text — SharePoint site mapping)",
      ],
    },
  ],
  relationships: [
    "MainDB_{Dept} ← MainDB_{Dept}_Tasks (1:N polymorphic)",
    "MainDB_{Dept} ← MainDB_{Dept}_Attachments (1:N polymorphic)",
    "PurchaseRequest ← PurchaseOrder (1:N polymorphic)",
    "Department → BusinessUnit (N:1 lookup)",
    "MainDB_{Dept}.Requestor → SystemUser (N:1 lookup)",
    "MainDB_{Dept}.Department → Department (N:1 lookup)",
  ],
};

// ============================================================
// 15. Security Architecture
// ============================================================

export const securityArchitecture = {
  title: "Enterprise Security Architecture",
  description:
    "Microsoft Entra ID → Dataverse Security Roles → Business Units → Row-Level → Field-Level security, with GxP-compliant audit trails.",
  layers: [
    {
      layer: "Identity & Access",
      icon: "🔐",
      items: [
        "Microsoft Entra ID (Azure AD) — primary identity provider",
        "Conditional Access Policies — device compliance, location-based",
        "Multi-Factor Authentication (MFA) — enforced for all users",
        "Single Sign-On (SSO) — SAML 2.0 / OpenID Connect",
        "Application Users (SPNs) — for automated integrations",
      ],
    },
    {
      layer: "Dataverse Security Model",
      icon: "🛡️",
      items: [
        "Business Unit Hierarchy — mapped to departmental structure",
        "Security Role Inheritance — child roles inherit parent permissions",
        "5-Tier Approval Matrix — Requestor → Line Manager → Finance → Compliance → Executive",
        "Row-Level Security — users see only their department's records",
        "Field-Level Security — PII/financial columns restricted to authorized roles",
      ],
    },
    {
      layer: "Data Protection",
      icon: "🔒",
      items: [
        "Dataverse Auditing — column-level immutable audit trails",
        "Field Security Profiles — for amounts, PO numbers, PII",
        "Data Encryption — at rest (AES-256) and in transit (TLS 1.2+)",
        "Azure Key Vault — secrets management",
        "Power Platform DLP Policies — data classification enforcement",
      ],
    },
    {
      layer: "Compliance",
      icon: "📋",
      items: [
        "GxP Compliance — immutable audit trails, field-level tracking",
        "WCAG 2.2 AA — 38+ accessibility anti-patterns resolved",
        "OWASP Top 10 — 55+ security anti-patterns with detection",
        "GDPR — data retention, right to erasure, consent management",
        "Tenant Isolation — cross-tenant access controls",
      ],
    },
  ],
};

// ============================================================
// 16. ALM Pipeline Architecture
// ============================================================

export const almPipeline = {
  title: "Enterprise ALM Pipeline Architecture",
  description:
    "Solution Segmentation, PAC CLI automation, staged environment promotion, and CI/CD with Quality Gates.",
  stages: [
    {
      name: "Development",
      environment: "Dev",
      solutionType: "Unmanaged",
      description:
        "Developers work in unmanaged solutions. PAC CLI: pac auth create, pac solution clone. Source-controlled via GitHub.",
      tools: ["PAC CLI", "VS Code", "GitHub Copilot", "Power Apps Studio"],
    },
    {
      name: "Build",
      environment: "Build",
      solutionType: "Managed (Exported)",
      description:
        "Automated export + managed packaging. Solution Checker runs. Deployment Settings Files generated with per-environment connection references.",
      tools: [
        "GitHub Actions",
        "Azure DevOps",
        "Power Platform Build Tools",
        "Solution Checker",
      ],
    },
    {
      name: "Test",
      environment: "Test",
      solutionType: "Managed (Imported)",
      description:
        "Managed import + automated validation. Connection references resolved. Environment variables applied. Smoke tests pass.",
      tools: [
        "PAC CLI import",
        "Automated Validation",
        "Playwright E2E",
        "PnP PowerShell",
      ],
    },
    {
      name: "Production",
      environment: "Prod",
      solutionType: "Managed (Imported)",
      description:
        "Managed import + smoke test. Zero-downtime deployment. Monitoring via Application Insights. Rollback capability.",
      tools: [
        "PAC CLI import",
        "Application Insights",
        "Azure Monitor",
        "Power Platform Analytics",
      ],
    },
  ],
  solutionSegmentation: [
    {
      name: "Holding Solution",
      purpose: "Shared components: entities, option sets, global settings",
      managed: false,
    },
    {
      name: "Core Entities",
      purpose: "MainDB tables, child tables, reference data",
      managed: true,
    },
    {
      name: "Business Logic",
      purpose: "C# Plugins, PCF Controls, Cloud Flows",
      managed: true,
    },
    {
      name: "UI Layer",
      purpose: "Canvas Apps, Model-Driven Apps, Dashboards",
      managed: true,
    },
  ],
  pacCliCommands: [
    "pac auth create --kind admin",
    "pac solution clone --name {solution} --outputDirectory ./source",
    "pac canvas pack --msapp {path} --output {path}",
    "pac code generate --skip-update-check",
    "pac org who",
    "pac env list",
  ],
};

// ============================================================
// 17. Dynamics 365 First-Party Awareness
// ============================================================

export const d365Awareness = {
  title: "Dynamics 365 & First-Party App Architecture Awareness",
  description:
    "Architectural awareness of Dynamics 365 first-party modules and when to use them vs. custom Canvas/Model-Driven solutions.",
  modules: [
    {
      name: "Dynamics 365 Sales",
      useCase:
        "Lead-to-opportunity pipeline, quote generation, activity tracking",
      architecture:
        "Entity model: Lead → Opportunity → Quote → Order. Business Process Flows for stage-gated sales processes. Power Automate for approval routing.",
      relevance:
        "E-Procurement RFQ/SPQQ modules align with Sales entity patterns",
    },
    {
      name: "Dynamics 365 Customer Service",
      useCase: "Case management, SLA tracking, knowledge base, omnichannel",
      architecture:
        "Entity model: Case → Activity → Resolution. SLA KPI tracking. Unified Routing for intelligent case assignment.",
      relevance:
        "CS Resolver (AI-powered case classification) aligns with Customer Service patterns",
    },
    {
      name: "Dynamics 365 Finance & Operations",
      useCase:
        "General ledger, accounts payable/receivable, procurement, budgeting",
      architecture:
        "Dual-write with Dataverse. Financial dimensions. Vendor management. Purchase order lifecycle.",
      relevance:
        "E-Procurement system with Oracle PowerBiz ERP sync — future integration path for F&O",
    },
    {
      name: "Model-Driven Apps",
      useCase:
        "Data-heavy back-office processes, complex entity relationships, audit trails",
      architecture:
        "Dataverse-native UI with Business Process Flows, business rules, dashboards, and charts. Extensible via PCF Controls and C# Plugins.",
      relevance:
        "Recommended for departmental processes exceeding Canvas App complexity threshold",
    },
  ],
  architecturalGuidance: [
    {
      decision: "When to use Model-Driven vs Canvas Apps",
      guidance:
        "Model-Driven for data-heavy processes with complex entity relationships, business process flows, and audit requirements. Canvas for specialized UX, mobile-first, or citizen-developer authored screens.",
    },
    {
      decision: "When to use Dynamics 365 vs Custom Solutions",
      guidance:
        "D365 first-party for standard business processes (Sales, Service, Finance). Custom solutions for proprietary workflows, specialized integrations, or processes that don't fit D365 entity models.",
    },
    {
      decision: "Dataverse as the common data layer",
      guidance:
        "Dataverse serves as the unified data platform for both D365 first-party apps and custom solutions. Entity relationships, security, and audit trails are consistent across both.",
    },
  ],
};
