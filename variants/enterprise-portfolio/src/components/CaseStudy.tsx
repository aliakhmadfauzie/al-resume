import { useEffect, useRef, useState } from "react";
import { project } from "../data/portfolio";

// ============================================================
// Interactive Architecture Layers
// ============================================================
interface ArchLayer {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  details: string[];
  techTags: string[];
}

const ARCH_LAYERS: ArchLayer[] = [
  {
    id: "dataverse-erd",
    title: "Dataverse Target Architecture (Primary)",
    icon: "🏛️",
    color: "#f0883e",
    description:
      "Enterprise-grade Dataverse as the production data layer: MainDB parent tables with FormCode discriminator, polymorphic child lookups, Business Unit hierarchy for departmental isolation, Security Role inheritance with 5-tier approval matrices, Field Security Profiles for PII/financial data, and alternate keys for Oracle ERP bidirectional sync.",
    details: [
      "MainDB_{Dept} parent tables with FormCode discriminator — 28 department sites",
      "Polymorphic child tables: Tasks, Comments, Attachments with cascade delete",
      "Business Unit hierarchy mapped to departmental data isolation",
      "Security Role inheritance: Requestor → Line Manager → Finance → Compliance → Executive",
      "Field Security Profiles on amounts, PO numbers, PII columns",
      "Alternate keys for Oracle ERP bidirectional sync (CIPBudgetCode, PO numbers)",
      "Dataverse Auditing: column-level immutable audit trails for GxP compliance",
    ],
    techTags: [
      "Dataverse",
      "Business Units",
      "Security Roles",
      "Field Security",
      "Polymorphic Lookups",
      "Alternate Keys",
    ],
  },
  {
    id: "presentation",
    title: "Presentation Layer",
    icon: "🖥️",
    color: "#58a6ff",
    description:
      "Dual-track delivery: React 19 TypeScript code-first app for complex functionality, plus 16 Canvas Apps (Power Fx + PA YAML v3.0) for per-department business forms. Model-Driven Apps recommended for data-heavy back-office processes.",
    details: [
      "React 19 with Vite, shadcn/ui, Jotai state management, and TanStack Query",
      "16 Canvas Apps with reusable component definitions in PA YAML v3.0",
      "Model-Driven Apps for data-heavy processes with Business Process Flows",
      "HTML Text/HtmlViewer for rich read-only visual areas matching UI designs 1:1",
      "PCF Controls (TypeScript/React) extending Model-Driven App capabilities",
    ],
    techTags: [
      "React 19",
      "TypeScript 5.9",
      "Power Fx",
      "PA YAML",
      "PCF Controls",
      "Model-Driven Apps",
    ],
  },
  {
    id: "data",
    title: "Interim Data Layer (SharePoint Online)",
    icon: "💾",
    color: "#bc8cff",
    description:
      "SharePoint Online as an interim cost-optimization staging layer — NOT the target production architecture. Deployed during Phase 1 to avoid $960K/yr in premium licensing. Dataverse Migration Blueprint defines the enterprise-grade target.",
    details: [
      "Phase 1 staging layer: Single MainDB_{Dept} list per SharePoint site with FormCode discriminator",
      "Cost optimization: Avoided $960K/yr in premium connector licensing for 2,000+ users",
      "Accepts SPO constraints: 5,000-item threshold, no relational integrity, no row/field-level security",
      "Documented migration path: SharePoint list → Dataverse table with column mapping",
      "Data accuracy improved from 70% (free-text) to 98% (typed columns) as interim improvement",
      "Indexed columns for delegation-safe queries during Phase 1",
    ],
    techTags: [
      "SharePoint Online",
      "Interim Staging",
      "Cost Optimization",
      "FormCode",
      "Migration Path",
    ],
  },
  {
    id: "integration",
    title: "Integration & Workflow",
    icon: "⚡",
    color: "#3fb950",
    description:
      "Power Automate cloud flows for approvals, notifications, and routing. Custom Connectors with REST APIs for bidirectional ERP synchronization. Multi-level approval flows with Dataverse as the data layer.",
    details: [
      "Multi-level approval flows — up to 5 tiers routing through department head → division head → COO → ED",
      "Standard connectors: SharePoint, Office 365 Outlook, Approvals, Teams",
      "Custom Connectors for ERP: real-time bidirectional sync for PR, PO, GRN, and invoice",
      "C# Dataverse Plugins on Pre/Post-Operation pipeline for business rule enforcement",
      "Email notifications with deep links back to Power Apps for instant form access",
    ],
    techTags: [
      "Power Automate",
      "Approvals",
      "C# Plugins",
      "Custom Connectors",
      "REST APIs",
      "ERP Sync",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Security & Compliance",
    icon: "🏢",
    color: "#ffa657",
    description:
      "Microsoft Entra ID with Conditional Access, MFA, and SSO. Dataverse Security Role inheritance with row-level and field-level security. GxP compliance with immutable audit trails. OWASP Top 10 and WCAG 2.2 AA standards.",
    details: [
      "Microsoft Entra ID: Conditional Access, MFA, SSO (SAML 2.0 / OIDC)",
      "Dataverse Security Roles: 5-tier approval matrix with role inheritance",
      "Row-Level Security: users see only their department's records",
      "Field Security Profiles: PII/financial columns restricted to authorized roles",
      "GxP Compliance: immutable audit trails via Dataverse Auditing (column-level)",
      "WCAG 2.2 AA: 38+ accessibility anti-patterns resolved",
      "OWASP Top 10: 55+ security anti-patterns with detection regex",
    ],
    techTags: [
      "Entra ID",
      "MFA",
      "SSO",
      "Security Roles",
      "GxP",
      "WCAG 2.2",
      "OWASP",
    ],
  },
  {
    id: "devops",
    title: "Enterprise ALM & AI Governance",
    icon: "🤖",
    color: "#f85149",
    description:
      "Solution Segmentation with managed/unmanaged boundaries. PAC CLI automation. GitHub Actions + Azure DevOps CI/CD with Solution Checker. AI-assisted development with DLP policies, content filtering, and prompt evaluation frameworks.",
    details: [
      "Solution Segmentation: Holding → Core Entities → Business Logic → UI Layer (managed)",
      "PAC CLI: solution clone, pack/unpack, auth, code generate, canvas pack",
      "Deployment Settings Files: per-environment connection references and environment variables",
      "Staged promotion: Dev (unmanaged) → Build (managed export) → Test (import + validate) → Prod",
      "Solution Checker on every PR — schema, formula, naming, accessibility compliance",
      "AI-assisted pipelines with DLP policies, RAG-grounded Azure OpenAI, content filtering",
      "PnP PowerShell: idempotent provisioning across 28+ department sites",
    ],
    techTags: [
      "Solution Segmentation",
      "PAC CLI",
      "GitHub Actions",
      "Azure DevOps",
      "Solution Checker",
      "AI Governance",
      "DLP",
    ],
  },
];

// ============================================================
// Database Model Code Snippets
// ============================================================
const DB_MODEL_SNIPPET = `-- Dataverse Target Architecture (Primary Production Layer)
-- MainDB parent tables with FormCode discriminator
-- 361 legacy forms catalogued, 16 production apps deployed

MainDB_IT (Parent Table)
├── MainDBID (Primary Key, GUID)
├── Title (Text)
├── FormCode (Choice) — discriminates ITSSR, ITHDP, ITRFQ, etc.
├── Category (Choice) — Hardware, Software, Network, Security
├── Status (Choice) — Draft, Submitted, In Progress, Approved, Rejected, Closed
├── Priority (Choice) — Low, Medium, High, Critical
├── Requestor (Lookup → SystemUser)
├── Department (Lookup → Department)
├── CreatedOn (DateTime — immutable)
└── ModifiedOn (DateTime — immutable)

-- Security: Business Unit → Department hierarchy
-- Security Roles: 5-tier approval matrix
-- Field Security: Requestor, Amount, PII columns

MainDB_IT_Tasks (Child Table)
├── TaskID (Primary Key, GUID)
├── ParentRequestID (Polymorphic Lookup → MainDB_IT)
├── TaskDescription (Multiple lines of text)
├── AssignedTo (Lookup → SystemUser)
├── DueDate (Date and Time)
├── Status (Choice) — Pending, In Progress, Completed
└── CompletedDate (Date and Time)

-- E-Procurement (Dataverse, isolated Business Unit)
PurchaseRequest (Parent)
├── PurchaseRequestID (Primary Key, GUID)
├── Requestor (Lookup → SystemUser)
├── Department (Lookup → Department)
├── TotalAmount (Currency — Field Security Profile)
├── Status (Choice) — Draft, Pending LOA, Approved, Rejected
├── CIPBudgetCode (Text — Alternate Key for ERP sync)
└── ERPSyncStatus (Choice) — Pending, Synced, Failed

-- SharePoint Online (Interim Staging Layer — NOT production)
MainDB_IT_SPO (Interim List)
├── Same columns as Dataverse, synced during Phase 1
└── Migration path documented: SPO → Dataverse table mapping

PurchaseOrder (Child)
├── PurchaseOrderID (Primary Key)
├── PurchaseRequestID (Lookup → PurchaseRequest)
├── VendorID (Lookup → Vendor)
├── POAmount (Currency)
├── PODate (Date)
└── ERPSyncStatus (Choice) — Pending, Synced, Failed`;

const POWER_FX_SNIPPET = `// Power Fx — Canvas Screen Logic Patterns (Dataverse-First)
// Source: scrIT_ITSSR_New.pa.yaml (IT Service Request — New Submission)

// ── Screen OnVisible: Initialize form context ──
Set(gblActiveFormCode, "ITSSR");
Set(gblActiveDept, "IT");
Set(gblIsNewForm, true);
Set(gblCurrentUser, User());

// ── Gallery Items: Filter Dataverse table by FormCode ──
Filter(
    MainDB_IT,
    FormCode.Value = "ITSSR" && Status.Value <> "Closed"
)

// ── Dropdown Items: Dataverse Choice column ──
Choices(MainDB_IT.Category)

// ── People Picker: Office 365 Users (Entra ID backed) ──
Office365Users.SearchUser({searchTerm: txtSearch.Text})

// ── Submit: Patch to Dataverse ──
Patch(
    MainDB_IT,
    Defaults(MainDB_IT),
    {
        Title: txtTitle.Text,
        FormCode: {Value: "ITSSR"},
        Category: ddlCategory.Selected,
        Priority: ddlPriority.Selected,
        Requestor: {
            '@odata.type': "Microsoft.Dynamics.CRM.systemuser",
            systemuserid: Office365Users.MyProfile().Id
        },
        Status: {Value: "Submitted"}
    }
);
Notify("Request submitted successfully!", NotificationType.Success);
Navigate(scrIT_ITSSR_Detail, ScreenTransition.Fade);

// ── Role Visibility: Dataverse Security Role check ──
btnApprove.Visible =
    gblCurrentUserRole = "approver" &&
    galRequests.Selected.Status.Value = "Pending Approval";

// ── Error Handling ──
If(
    IsEmpty(Errors(MainDB_IT)),
    Notify("Saved", NotificationType.Success),
    Notify(First(Errors(MainDB_IT)).Message, NotificationType.Error)
)`;

const ARCH_DECISIONS = [
  {
    title: "DEC-2026-001: Dataverse as Primary Production Data Layer",
    problem:
      "361 legacy applications need enterprise-grade data integrity, row-level security, and managed solution ALM — none achievable with SharePoint Online as a final data store.",
    decision:
      "Dataverse as the primary production data layer with MainDB parent tables (FormCode discriminator), polymorphic child lookups, Business Unit hierarchy, Security Role inheritance, and Field Security Profiles.",
    tradeoff:
      "Requires premium licensing for production use, but provides enterprise-grade relational integrity, security, and ALM that SharePoint Online cannot match.",
    impact:
      "Full relational data modeling, row-level security, field-level security for PII, immutable audit trails, and managed solution ALM — enterprise-grade from day one.",
  },
  {
    title: "DEC-2026-002: SharePoint Online as Interim Cost Optimization",
    problem:
      "Rapid migration of 361 forms requires immediate deployment, but premium licensing for 2,000+ users would cost $960K/year.",
    decision:
      "Deploy Phase 1 on SharePoint Online as an interim staging layer to avoid $960K/yr in premium licensing. Accept SPO constraints (5,000-item threshold, no relational integrity, no row/field-level security) with documented Dataverse migration path.",
    tradeoff:
      "Accepts SPO limitations as Phase 1 trade-offs. SharePoint Online is explicitly NOT the target production architecture.",
    impact:
      "$960K/year licensing cost avoided during rapid migration. Documented migration path to Dataverse ensures zero long-term architectural compromise.",
  },
  {
    title: "DEC-2026-003: Dual-Track Architecture",
    problem:
      "Complex cross-department views needed React flexibility; simple departmental forms needed citizen-developer accessibility; data-heavy back-office processes needed Model-Driven Apps.",
    decision:
      "React 19 code-first app for complex/shared functionality + 16 Canvas Apps for per-department business forms + Model-Driven Apps for data-heavy processes.",
    tradeoff:
      "Three delivery tracks, but each optimizes for its user persona. Shared Dataverse data layer ensures consistency.",
    impact:
      "Developers get TypeScript/React power. Business users get Power Fx simplicity. Data-heavy processes get Model-Driven App capabilities. All read/write the same Dataverse tables.",
  },
  {
    title: "DEC-2026-004: C# Plugins for Business Rule Enforcement",
    problem:
      "Business rules enforced in Canvas App Power Fx create maintenance nightmares — different entry points (Canvas, Model-Driven, Power Automate) can bypass validation.",
    decision:
      "C# Dataverse Plugins registered on Pre/Post-Operation execution pipeline stages enforce business rules at the data layer, not in the UI.",
    tradeoff:
      "Requires C# development expertise and plugin registration, but ensures consistent validation regardless of entry point.",
    impact:
      "Business rules enforced consistently across Canvas Apps, Model-Driven Apps, and Power Automate flows. Application Insights telemetry for performance monitoring.",
  },
  {
    title: "DEC-2026-005: Solution Segmentation for Enterprise ALM",
    problem:
      "Monolithic solutions create deployment risk — a bug in one component can block the entire release.",
    decision:
      "Solution Segmentation: Holding solution (shared components) → Target managed solutions (Core Entities, Business Logic, UI Layer). Deployment Settings Files with per-environment configuration.",
    tradeoff:
      "More complex solution management, but enables independent deployment of components and reduced blast radius.",
    impact:
      "Independent deployment cycles per component. Reduced deployment risk. Staged Dev→Build→Test→Prod promotion with Solution Checker on every PR.",
  },
];

const MERMAID_DIAGRAM = `graph TB
    subgraph PRESENTATION["Presentation"]
        REACT["React 19 Code-First App"]:::pres
        CANVAS["16 Canvas Apps"]:::pres
        MDA["Model-Driven Apps"]:::pres
    end
    subgraph INTEGRATION["Integration & Security"]
        PA["Power Automate Flows"]:::inte
        CC["Custom Connectors"]:::inte
        PLUGINS["C# Dataverse Plugins"]:::inte
        PCF["PCF Controls"]:::inte
    end
    subgraph DATA_LAYER["Dataverse Target (Primary)"]
        DV["Dataverse Tables"]:::data
        BU["Business Units"]:::data
        SR["Security Roles"]:::data
        FSP["Field Security Profiles"]:::data
    end
    subgraph INTERIM["SharePoint Online (Interim)"]
        SP["MainDB_{Dept} Lists"]:::interim
    end
    subgraph ENTERPRISE["Enterprise Systems"]
        ERP["Oracle PowerBiz ERP"]:::ent
        ENTRA["Microsoft Entra ID"]:::ent
        M365["Microsoft 365"]:::ent
    end
    subgraph DEVOPS["Enterprise ALM & AI"]
        AI["AI-Assisted Pipelines"]:::dev
        CICD["GitHub Actions CI/CD"]:::dev
        PAC["PAC CLI"]:::dev
    end
    REACT --> DV
    CANVAS --> DV
    MDA --> DV
    DV --> PA
    DV --> CC
    DV --> PLUGINS
    MDA --> PCF
    PA --> M365
    CC <--> ERP
    PLUGINS --> DV
    ENTRA --> DV
    SP -.-> DV
    PA --> SP
    AI -.-> CICD
    CICD -.-> PAC
    PAC -.-> DV
    classDef pres fill:#0d1117,stroke:#58a6ff,stroke-width:2px,color:#e6edf3
    classDef inte fill:#0d1117,stroke:#3fb950,stroke-width:2px,color:#e6edf3
    classDef data fill:#0d1117,stroke:#f0883e,stroke-width:2px,color:#e6edf3
    classDef interim fill:#0d1117,stroke:#bc8cff,stroke-width:2px,color:#e6edf3,stroke-dasharray:5 5
    classDef ent fill:#0d1117,stroke:#ffa657,stroke-width:2px,color:#e6edf3
    classDef dev fill:#0d1117,stroke:#f85149,stroke-width:2px,color:#e6edf3`;

export default function CaseStudy() {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [expandedDecision, setExpandedDecision] = useState<number | null>(null);
  const [activeDeepDive, setActiveDeepDive] = useState<string | null>(null);

  useEffect(() => {
    const loadMermaid = async () => {
      if (!mermaidRef.current) return;
      try {
        const resp = await fetch(
          "https://mermaid.ink/svg/" +
            btoa(unescape(encodeURIComponent(MERMAID_DIAGRAM))),
        );
        if (resp.ok) {
          const svgText = await resp.text();
          const modified = svgText.replace(
            /<g class="node default (pres|inte|data|ent|dev)">/g,
            (_, cls) => {
              const layerMap: Record<string, string> = {
                pres: "presentation",
                inte: "integration",
                data: "data",
                ent: "enterprise",
                dev: "devops",
              };
              return `<g class="node default ${cls}" style="cursor:pointer" data-layer="${layerMap[cls] || ""}" `;
            },
          );
          mermaidRef.current!.innerHTML = modified;
          setTimeout(() => {
            const nodes = mermaidRef.current?.querySelectorAll("[data-layer]");
            nodes?.forEach((node) => {
              node.addEventListener("click", (e) => {
                const layer = (e.currentTarget as HTMLElement).getAttribute(
                  "data-layer",
                );
                if (layer) setActiveLayer(layer === activeLayer ? null : layer);
              });
            });
          }, 100);
        }
      } catch {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = `<pre class="mermaid-fallback">${MERMAID_DIAGRAM}</pre>`;
        }
      }
    };
    loadMermaid();
  }, [activeLayer]);

  const activeLayerData = ARCH_LAYERS.find((l) => l.id === activeLayer);

  return (
    <section id="case-study">
      <div className="container">
        <span className="section-label">Featured Project</span>
        <h2 className="section-title">{project.title}</h2>
        <p className="section-subtitle">{project.subtitle}</p>

        <div className="case-study-meta">
          <div className="meta-item">
            <span className="meta-label">Client</span>
            <span className="meta-value">{project.client}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Scale</span>
            <span className="meta-value">{project.scale}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="case-study-section">
          <h3>Overview</h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
            }}
          >
            {project.overview}
          </p>
        </div>

        {/* Challenge */}
        <div className="case-study-section">
          <h3>The Challenge</h3>
          <ul className="challenge-list">
            {project.challenge.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Approach */}
        <div className="case-study-section">
          <h3>The Approach</h3>
          {project.approach.map((phase) => (
            <div key={phase.phase} className="card phase-card">
              <h4>{phase.phase}</h4>
              <p>{phase.detail}</p>
            </div>
          ))}
        </div>

        {/* Interactive Architecture */}
        <div className="case-study-section">
          <h3>🏗️ Interactive System Architecture</h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              marginBottom: 16,
            }}
          >
            {project.architecture.description}{" "}
            <em>Click any layer to see its details.</em>
          </p>

          <div className="arch-layer-selector">
            {ARCH_LAYERS.map((layer) => (
              <button
                key={layer.id}
                className={`arch-layer-btn ${activeLayer === layer.id ? "active" : ""}`}
                style={{ "--layer-color": layer.color } as React.CSSProperties}
                onClick={() =>
                  setActiveLayer(activeLayer === layer.id ? null : layer.id)
                }
              >
                <span className="arch-layer-icon">{layer.icon}</span>
                <span className="arch-layer-label">{layer.title}</span>
              </button>
            ))}
          </div>

          {activeLayerData && (
            <div
              className="arch-layer-detail"
              style={{ borderColor: activeLayerData.color }}
            >
              <div
                className="arch-layer-detail-header"
                style={{ background: `${activeLayerData.color}15` }}
              >
                <span style={{ fontSize: "1.5rem" }}>
                  {activeLayerData.icon}
                </span>
                <div>
                  <h4
                    style={{
                      color: activeLayerData.color,
                      margin: 0,
                      fontSize: "1rem",
                    }}
                  >
                    {activeLayerData.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-secondary)",
                      margin: "4px 0 0",
                    }}
                  >
                    {activeLayerData.description}
                  </p>
                </div>
              </div>
              <ul className="arch-layer-bullets">
                {activeLayerData.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div className="arch-layer-tags">
                {activeLayerData.techTags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mermaid-container" ref={mermaidRef}>
            <div className="mermaid-loading">
              Loading architecture diagram...
            </div>
          </div>
          <div className="diagram-legend">
            {ARCH_LAYERS.map((l) => (
              <span
                key={l.id}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setActiveLayer(l.id === activeLayer ? null : l.id)
                }
              >
                <span
                  className="legend-dot"
                  style={{ background: l.color }}
                ></span>{" "}
                {l.title}
              </span>
            ))}
          </div>
        </div>

        {/* Try it Live */}
        <div className="case-study-section">
          <h3>🛠️ Try It Live</h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              marginBottom: 16,
            }}
          >
            Explore the technology stack in interactive sandbox environments.
          </p>
          <div className="demo-buttons">
            <a
              href="https://stackblitz.com/github/altechsolution123/portfolio?file=src%2Fdata%2Fportfolio.ts"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn stackblitz-btn"
            >
              <span className="demo-btn-icon">⚡</span>
              <span>
                <strong>Open in StackBlitz</strong>
                <small>Explore TypeScript components</small>
              </span>
            </a>
            <a
              href="https://codesandbox.io/s/github/altechsolution123/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn codesandbox-btn"
            >
              <span className="demo-btn-icon">📦</span>
              <span>
                <strong>Open in CodeSandbox</strong>
                <small>Inspect React 19 + Vite setup</small>
              </span>
            </a>
            <a
              href="https://github.com/altechsolution123"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn github-btn"
            >
              <span className="demo-btn-icon">🐙</span>
              <span>
                <strong>View on GitHub</strong>
                <small>Full source code & documentation</small>
              </span>
            </a>
          </div>
        </div>

        {/* Technical Deep Dives */}
        <div className="case-study-section">
          <h3>🔍 Technical Deep Dives</h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-text-secondary)",
              marginBottom: 16,
            }}
          >
            Click any section below to explore database models, Power Fx
            patterns, and architecture decisions.
          </p>

          {/* DB Modeling */}
          <div
            className={`deep-dive-card ${activeDeepDive === "db" ? "expanded" : ""}`}
          >
            <div
              className="deep-dive-header"
              onClick={() =>
                setActiveDeepDive(activeDeepDive === "db" ? null : "db")
              }
            >
              <span>🗄️</span>
              <span>Database Modeling Strategy</span>
              <span className="deep-dive-chevron">
                {activeDeepDive === "db" ? "▾" : "▸"}
              </span>
            </div>
            {activeDeepDive === "db" && (
              <div className="deep-dive-body">
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    marginBottom: 12,
                  }}
                >
                  Every department gets one SharePoint site. Each site has one{" "}
                  <code>MainDB_{"{Dept}"}</code> list — not one list per form. A{" "}
                  <code>FormCode</code> Choice column discriminates form types.
                  Child lists handle repeating data linked via Lookup columns.
                  Dataverse is reserved for compliance-grade modules
                  (E-Procurement, Rebate Approval) requiring relational
                  integrity and audit trails.
                </p>
                <div className="code-snippet-card">
                  <div className="code-snippet-header">
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#FF5F56" }}
                    />
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#FFBD2E" }}
                    />
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#27C93F" }}
                    />
                    <span className="code-snippet-filename">
                      SharePoint List Schema — MainDB + Child Lists
                    </span>
                  </div>
                  <pre className="code-snippet-body">{DB_MODEL_SNIPPET}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Power Fx */}
          <div
            className={`deep-dive-card ${activeDeepDive === "pfx" ? "expanded" : ""}`}
            style={{ marginTop: 12 }}
          >
            <div
              className="deep-dive-header"
              onClick={() =>
                setActiveDeepDive(activeDeepDive === "pfx" ? null : "pfx")
              }
            >
              <span>⚡</span>
              <span>Power Fx Logic Patterns</span>
              <span className="deep-dive-chevron">
                {activeDeepDive === "pfx" ? "▾" : "▸"}
              </span>
            </div>
            {activeDeepDive === "pfx" && (
              <div className="deep-dive-body">
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    marginBottom: 12,
                  }}
                >
                  Every screen follows a strict pattern: <code>OnVisible</code>{" "}
                  sets global context variables, galleries filter by{" "}
                  <code>FormCode</code> and <code>Status</code>, dropdowns use{" "}
                  <code>Choices()</code> for SharePoint choice columns,{" "}
                  <code>Patch()</code> writes to SharePoint with typed property
                  bags, and role visibility formulas hide/show action buttons.
                  All without a single premium connector.
                </p>
                <div className="code-snippet-card">
                  <div className="code-snippet-header">
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#FF5F56" }}
                    />
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#FFBD2E" }}
                    />
                    <span
                      className="code-snippet-dot"
                      style={{ backgroundColor: "#27C93F" }}
                    />
                    <span className="code-snippet-filename">
                      scrIT_ITSSR_New.pa.yaml — Power Fx Logic
                    </span>
                  </div>
                  <pre className="code-snippet-body">{POWER_FX_SNIPPET}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Architecture Decisions */}
          <div
            className={`deep-dive-card ${activeDeepDive === "arch" ? "expanded" : ""}`}
            style={{ marginTop: 12 }}
          >
            <div
              className="deep-dive-header"
              onClick={() =>
                setActiveDeepDive(activeDeepDive === "arch" ? null : "arch")
              }
            >
              <span>🏛️</span>
              <span>Key Architectural Decisions</span>
              <span className="deep-dive-chevron">
                {activeDeepDive === "arch" ? "▾" : "▸"}
              </span>
            </div>
            {activeDeepDive === "arch" && (
              <div className="deep-dive-body">
                <div className="arch-decisions-grid">
                  {ARCH_DECISIONS.map((dec, i) => (
                    <div
                      key={dec.title}
                      className={`arch-decision-card ${expandedDecision === i ? "expanded" : ""}`}
                      onClick={() =>
                        setExpandedDecision(expandedDecision === i ? null : i)
                      }
                    >
                      <div className="arch-decision-header">
                        <strong
                          style={{ fontSize: "0.85rem", color: "#58a6ff" }}
                        >
                          {dec.title}
                        </strong>
                        <span className="deep-dive-chevron">
                          {expandedDecision === i ? "▾" : "▸"}
                        </span>
                      </div>
                      {expandedDecision === i && (
                        <div style={{ marginTop: 10 }}>
                          <div className="arch-decision-row">
                            <strong>Problem:</strong> <span>{dec.problem}</span>
                          </div>
                          <div className="arch-decision-row">
                            <strong>Decision:</strong>{" "}
                            <span>{dec.decision}</span>
                          </div>
                          <div className="arch-decision-row">
                            <strong>Trade-off:</strong>{" "}
                            <span>{dec.tradeoff}</span>
                          </div>
                          <div className="arch-decision-row">
                            <strong>Impact:</strong> <span>{dec.impact}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="case-study-section">
          <h3>Results & Impact</h3>
          <div className="results-grid">
            {project.results.map((result) => (
              <div key={result.metric} className="card result-card">
                <div className="result-value">{result.value}</div>
                <div className="result-label">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="case-study-section">
          <h3>Technology Stack</h3>
          <div className="tech-stack">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
