import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  POWER_PLATFORM_ARCH_SUITE,
  DEV_STACK,
  GOVERNANCE_ITEMS,
  BUSINESS_COMPETENCIES,
  CORE_PROJECTS,
  MIGRATION_SLICES,
  KEY_METRICS
} from '../../data/portfolioData';
import {
  Terminal,
  Layers,
  ExternalLink,
  ShieldCheck,
  Workflow,
  Database,
  Sparkles,
  Code2,
  GitBranch,
  BarChart,
  Target,
  Briefcase,
  Users,
  Activity,
  CheckCircle2,
  Gauge,
  TrendingUp,
  Award,
  BookOpen,
  FileCheck2,
  Zap,
  Sliders,
  ChevronRight,
  ShieldAlert,
  GraduationCap,
  Cpu,
  Bot
} from 'lucide-react';

interface CompetencySkillItem {
  title: string;
  scopeTag: string;
  provenance: string;
  provenanceNote?: string;
}

interface CompetencyCategory {
  category: string;
  icon: React.ReactNode;
  skills: CompetencySkillItem[];
}

interface CompetencyDomainPillar {
  id: string;
  index: string;
  label: string;
  shortLabel: string;
  headline: string;
  description: string;
  verifiedMetric: string;
  metricLabel: string;
  provenanceAnchor: string;
  icon: React.ReactNode;
  categories: CompetencyCategory[];
}

export const SkillsView: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('regulatory-gamp');
  const [mobileTab, setMobileTab] = useState<'tools' | 'impact'>('tools');

  // Aggregate technology usage from all projects and migration slices
  const techUsage = useMemo(() => {
    const counts: Record<string, number> = {};
    const processTools = (tools: string[]) => {
      tools.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    };

    CORE_PROJECTS.forEach((p) => processTools(p.tools));
    MIGRATION_SLICES.forEach((m) => processTools(m.tools));

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, []);

  // Split-Pane Executive Ledger Domains: Deepened 5-Pillar Architecture
  const domainPillars: CompetencyDomainPillar[] = useMemo(
    () => [
      {
        id: 'regulatory-gamp',
        index: '01',
        label: 'GAMP 5 Category 4 & 21 CFR Part 11 Regulatory Compliance',
        shortLabel: 'GAMP 5 & 21 CFR Part 11',
        headline: 'URS/FS Verification, ALCOA+ Data Integrity, Dual-Factor E-Signatures & Audit Trails',
        description:
          'Full lifecycle computerized systems validation (CSV) under GAMP 5 Category 4 Configured Software with Good Documentation Practice (GDocP). Engineered ALCOA+ data integrity, Azure AD 2FA electronic signatures, and tamper-proof immutable audit trails across regulated chemical manufacturing complexes.',
        verifiedMetric: '100% GDocP Adherence',
        metricLabel: 'Zero Unapproved SOPs on Floor',
        provenanceAnchor: 'IOI Acidchem & Manufacturing QMS',
        icon: <ShieldCheck className="w-4 h-4 text-[var(--text-accent)]" />,
        categories: [
          {
            category: 'GAMP 5 Cat 4 Validation & ALCOA+ Integrity',
            icon: <FileCheck2 className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: 'GAMP 5 Category 4 CSV Validation Protocols',
                scopeTag: 'URS, FS, IQ/OQ/PQ',
                provenance: 'GAMP 5 Cat 4 CSV Framework'
              },
              {
                title: 'ALCOA+ Data Integrity Lifecycle in Code',
                scopeTag: 'Attributable & Original',
                provenance: 'Immutable Master Records'
              },
              {
                title: 'Controlled Document Canonical Identifier Syntax',
                scopeTag: '[SITE]-[DEPT]-[TYPE]-[REV]',
                provenance: 'Standardized SOP Taxonomy'
              },
              {
                title: 'Programmatic Obsolescence Watermarking',
                scopeTag: 'OBSOLETE - ARCHIVED',
                provenance: 'Zero Unapproved Floor SOPs'
              },
              {
                title: 'Mandatory "Reason for Change" Delta Prompts',
                scopeTag: 'Audit Trail Deltas',
                provenance: 'Field-Level Diff Logging'
              },
              {
                title: 'Defect Taxonomy & Ishikawa 5-Whys Analysis',
                scopeTag: 'Root Cause Analysis',
                provenance: 'Regulatory Inspection Ready'
              }
            ]
          },
          {
            category: '21 CFR Part 11 Electronic Records & E-Signatures',
            icon: <BookOpen className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: 'Azure AD Dual-Factor (2FA) Electronic Signatures',
                scopeTag: '21 CFR Part 11 Intent',
                provenance: 'Preparer / Reviewer / Approver'
              },
              {
                title: 'Immutable Non-Repudiation Audit Logging',
                scopeTag: 'UTC Time, Role, Client IP',
                provenance: 'Azure AD Conditional Access'
              },
              {
                title: 'Automated CAPA Escalation Flows (7, 14, 30-Day)',
                scopeTag: 'SLA Escalations',
                provenance: '-73% Turnaround: 45d → 12d'
              },
              {
                title: '30-Day Post-Implementation Effectiveness Checks',
                scopeTag: '100% Adherence',
                provenance: 'Power Automate QA Sign-Off'
              },
              {
                title: 'ISO 9001, ISO 27001 & DOSH/SIRIM Statutory Audits',
                scopeTag: 'Statutory Readiness',
                provenance: '0 Export Container Holds'
              },
              {
                title: 'Quality Calibration Sessions & Scorecard Governance',
                scopeTag: 'Inter-Rater Reliability',
                provenance: 'Bi-Weekly Pod Calibration'
              }
            ]
          }
        ]
      },
      {
        id: 'react-offline-systems',
        index: '02',
        label: 'Modern React 19, TypeScript & Offline-First Systems',
        shortLabel: 'React 19 & Offline Systems',
        headline: '0ms Synchronous Hydration, 4-Pocket Financial Ledgers & Zero-TBT Architecture',
        description:
          'Engineering high-performance client-side web applications and offline-first PWAs. Eliminating 6,070ms Total Blocking Time (TBT) over unstable industrial plant Wi-Fi through 0ms synchronous local hydration, atomic multi-collection Firestore synchronization, and strict role-based access control.',
        verifiedMetric: '0ms Sync Hydration',
        metricLabel: '-6,070ms Mobile TBT Eliminated',
        provenanceAnchor: 'Putri GarmentHub ERP & Jastip OMS',
        icon: <Cpu className="w-4 h-4 text-[var(--text-accent)]" />,
        categories: [
          {
            category: 'React 19 & High-Performance Web Engineering',
            icon: <Code2 className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: 'React 19 Concurrency & Modern Action Hooks',
                scopeTag: 'useActionState & Suspense',
                provenance: 'Zero-Lag Optimistic UI'
              },
              {
                title: 'Strict TypeScript 5.8 Polymorphism & Discrimination',
                scopeTag: 'Discriminated Unions',
                provenance: 'Zero "any" Type Assertions'
              },
              {
                title: 'Tailwind CSS v4 OKLCH Design Tokens & Dark Mode Physics',
                scopeTag: 'WCAG 2.2 AA / APCA',
                provenance: '60-30-10 Tone Architecture'
              },
              {
                title: 'Rollup Vendor Chunk Splitting & Asset Optimization',
                scopeTag: 'react-vendor & ui-vendor',
                provenance: 'Sub-Second Chunk Compilation'
              },
              {
                title: 'Motion (Framer Motion 12) & 3D Ambient WebGL Acceleration',
                scopeTag: 'GPU-Accelerated Visuals',
                provenance: 'Reduced-Motion Accessible'
              },
              {
                title: 'WCAG Accessible Dialogs & Keyboard Focus Traps',
                scopeTag: 'Tab / Shift+Tab Trap',
                provenance: 'Accessible Modal Primitives'
              }
            ]
          },
          {
            category: 'Offline-First Resilience & Distributed Cloud Storage',
            icon: <Database className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: '0ms Local-First Synchronous Hydration Engine',
                scopeTag: 'storageAdapter.ts',
                provenance: '2,500ms Network Race Wrapper'
              },
              {
                title: 'Offline Mutation Queueing & Conflict Resolution',
                scopeTag: 'updatedAt >= serverTime',
                provenance: 'Chronology Preservation'
              },
              {
                title: 'Atomic 4-Pocket Segregated Financial Ledgers',
                scopeTag: 'writeBatch Commits',
                provenance: 'Kas Profit Isolated at Context'
              },
              {
                title: 'Zero-Polling Firebase Firestore Realtime Listeners',
                scopeTag: 'Snapshot Lifecycle',
                provenance: 'Mandatory Unsubscribe Cleanup'
              },
              {
                title: 'B2B SaaS Multi-Tenant Licensing State Machine',
                scopeTag: 'Active / Grace Period',
                provenance: '14-Day SLA Read-Only Window'
              },
              {
                title: 'Multi-Drop SPK QC Defect & Penalty Mathematics',
                scopeTag: 'Cumulative Intake Math',
                provenance: 'Pro-Rata Inventory Restocking'
              }
            ]
          }
        ]
      },
      {
        id: 'tri-engine-ai-automation',
        index: '03',
        label: 'Tri-Engine AI Gateway & Playwright Automation',
        shortLabel: 'Tri-Engine AI & Automation',
        headline: 'Groq/Gemini Multi-Provider Routers, 10-Gate PDF Quality Suites & SPA Bots',
        description:
          'Building autonomous AI automation backends and browser robots with zero hallucination risk. Tri-Engine AI task routing between ultra-fast inference (Groq Llama-3.3 @ 240ms) and structured reasoning (Google Gemini Flash), 10 deterministic PDF quality gates, and Workday-hardened Playwright wizards.',
        verifiedMetric: '0% Metric Drift',
        metricLabel: 'Q1–Q10 Deterministic Quality Gates',
        provenanceAnchor: 'ATS Automation Command Center',
        icon: <Bot className="w-4 h-4 text-[var(--text-accent)]" />,
        categories: [
          {
            category: 'Tri-Engine AI Routing & Multi-LLM FinOps',
            icon: <Sparkles className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: 'Task-Specific AI Gateway Routing (ai_gateway.py)',
                scopeTag: 'Groq Llama-3.3 vs Gemini',
                provenance: 'Fast vs Structured Splitting'
              },
              {
                title: 'Cross-Process fcntl File Locking & Quota Defense',
                scopeTag: 'Rolling 60s RPM/RPD',
                provenance: 'Zero 429 Drops via Failover'
              },
              {
                title: 'Automatic Tool-Call to JSON-Schema Prompt Inlining',
                scopeTag: 'Structured Output Fallback',
                provenance: 'Guaranteed Pydantic Schemas'
              },
              {
                title: 'Multimodal Receipt OCR Extraction (Gemini 2.5 Flash)',
                scopeTag: 'Type.OBJECT Schema',
                provenance: 'Foreign-Script Thermal Receipts'
              },
              {
                title: 'Multi-Currency FX Arbitrage Spread Mathematics',
                scopeTag: 'Dual-Profit Accounting',
                provenance: '4-Currency Real-Time Ledger'
              },
              {
                title: 'Automated WhatsApp Customer Draft Generation',
                scopeTag: 'html5-qrcode & WebRTC',
                provenance: '1-Tap Substitution Blast'
              }
            ]
          },
          {
            category: 'Deterministic Quality Verification & Browser Automation',
            icon: <Terminal className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: '10-Gate PDF Quality Verification Suite (Q1–Q10)',
                scopeTag: 'ReportLab & PyPDF',
                provenance: 'Zero Fabricated Metrics Blocked'
              },
              {
                title: 'Regex Single Source of Truth Cross-Referencing',
                scopeTag: 'MASTER_SOURCE_OF_TRUTH',
                provenance: 'Metric Fidelity Enforcement'
              },
              {
                title: 'Workday-Hardened Playwright Automation (app_bot_v6.py)',
                scopeTag: 'SHA-256 Response Cache',
                provenance: 'Option-Aware Disk Caching'
              },
              {
                title: 'Hidden File Input Bypass & Resume Parse Detection',
                scopeTag: 'DOM Trap Mitigation',
                provenance: '100% Wizard Completion'
              },
              {
                title: 'ARIA Listbox Traverser & 3.0s Next Button Stability',
                scopeTag: 'Resilient Locators',
                provenance: 'Inert Next Button Resolver'
              },
              {
                title: 'Case-Insensitive Multi-Portal Profile Synchronization',
                scopeTag: 'XPath Locator Engine',
                provenance: 'HITL Pause & Verification'
              }
            ]
          }
        ]
      },
      {
        id: 'enterprise-architecture',
        index: '04',
        label: 'Enterprise Modernization & Power Platform Architecture',
        shortLabel: 'Enterprise Architecture',
        headline: '365+ Domino DBs Retired, $960K/yr License Avoidance & 7,878 YAML Screens',
        description:
          'Enterprise solution architecture retiring 25-year-old on-premise Lotus Domino databases into Microsoft 365. Engineered single-table partitioned schemas on standard M365 connectors, custom Python AST validation linters in CI, and ERP integration boundaries.',
        verifiedMetric: '$960,000 / yr',
        metricLabel: 'Software Licenses Avoided (MainDB)',
        provenanceAnchor: 'IOI Corporation 28 Business Units',
        icon: <Layers className="w-4 h-4 text-[var(--text-accent)]" />,
        categories: [
          {
            category: 'Power Platform YAML v3 & AST Verification',
            icon: <Database className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: 'Power Apps Canvas YAML v3 Code Generation',
                scopeTag: '7,878 Screens across 16 Apps',
                provenance: 'Static Code-First Delivery'
              },
              {
                title: 'Custom Python AST Linter (_validate_pa.py)',
                scopeTag: 'Static Verification in CI',
                provenance: '142 Syntax Regressions Blocked'
              },
              {
                title: 'SharePoint GUID & URL Canonicalizer (audit-power-config)',
                scopeTag: 'CI Hygiene Checks',
                provenance: '19 Placeholder GUID Leaks Blocked'
              },
              {
                title: 'Single-Table Partitioned MainDB_{Dept} Architecture',
                scopeTag: 'Indexed FormCode Filter',
                provenance: '1.4M Historical Records Migrated'
              },
              {
                title: 'Power Apps Component Framework (PCF) React Controls',
                scopeTag: 'Custom Interactive Drawers',
                provenance: '400+ Code-First Mirror'
              },
              {
                title: 'PAC CLI ALM & Managed Solution Automation',
                scopeTag: 'Azure DevOps CI/CD',
                provenance: 'Zero Unplanned Factory Downtime'
              }
            ]
          },
          {
            category: 'ERP Boundaries & Industrial Safety Systems',
            icon: <Workflow className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: 'Enterprise ERP Integration (SAP S/4HANA & Oracle 19c)',
                scopeTag: 'Read-Only OData Endpoints',
                provenance: 'Rebate Staging Interfaces'
              },
              {
                title: 'Deterministic 7-Component Financial Rebate Formula',
                scopeTag: 'RM 0.20/Tonne Statutory Cap',
                provenance: 'Zero Unapproved Commitments'
              },
              {
                title: 'DOSH/SIRIM 5×5 HIRADC Chemical Plant Risk Matrix',
                scopeTag: 'Likelihood × Severity',
                provenance: '99.4% PPE Compliance Adherence'
              },
              {
                title: 'Multi-Tier Plant Approval Workflows (Power Automate)',
                scopeTag: 'Multi-Gate Sign-Offs',
                provenance: 'Approval Cycle: 3d → <15m'
              },
              {
                title: 'Zero-Trust Dataverse Security Roles & DLP Policies',
                scopeTag: 'Field-Level & Row-Level',
                provenance: 'Corporate DLP Enforcement'
              },
              {
                title: 'Historical Excel Migration & Balance Reconciliation',
                scopeTag: 'isHistorical Idempotency',
                provenance: 'Zero Inventory Double-Counting'
              }
            ]
          }
        ]
      },
      {
        id: 'six-sigma-leadership',
        index: '05',
        label: 'Six Sigma DMAIC & Frontline Operations Leadership',
        shortLabel: 'Six Sigma & Operations',
        headline: '380% Pod Scaling across 7 APAC Markets, 800% Surge Recovery & DMAIC Controls',
        description:
          'Directing cross-functional service delivery, customer experience, and quality assurance squads. Scaling from 9 to 34 agents across 7 countries, stabilizing high-severity crisis outages within 48 hours, and eliminating 110 seconds of handling latency.',
        verifiedMetric: '380% Pod Scaling',
        metricLabel: '>98% Contractual SLA Sustained',
        provenanceAnchor: 'Accenture Diamond & Hang Tuah Award',
        icon: <Users className="w-4 h-4 text-[var(--text-accent)]" />,
        categories: [
          {
            category: 'Six Sigma DMAIC & Operational Process Engineering',
            icon: <Activity className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: 'Six Sigma DMAIC Cycle-Time Optimization',
                scopeTag: 'AHT Reduction -25%',
                provenance: 'Ishikawa 5-Whys Root Cause'
              },
              {
                title: 'Single-Pane Operational Tooling (PulseTrack & SmartFlow)',
                scopeTag: 'Tab-Switching Latency',
                provenance: '110s Latency Eliminated'
              },
              {
                title: 'Erlang-C Capacity Forecasting & Shift Rostering',
                scopeTag: 'Rotational Shift Balancing',
                provenance: '3 Daily Factory Shifts'
              },
              {
                title: '90% Manual Reporting Workload Elimination',
                scopeTag: 'SharePoint + Power Automate',
                provenance: 'Replaced WhatsApp Spreadsheets'
              },
              {
                title: 'QA Department Operations & Dispute Adjudication',
                scopeTag: 'Dispute Arbitration',
                provenance: 'Accenture & Concentrix Ops'
              },
              {
                title: 'Omnichannel Governance (Live Chat, Email & T&S Queues)',
                scopeTag: 'Multi-Channel Balancing',
                provenance: 'Contractual SLA >98% Adherence'
              }
            ]
          },
          {
            category: 'Crisis Incident Command & Talent Development',
            icon: <GraduationCap className="w-4 h-4 text-[var(--text-accent)]" />,
            skills: [
              {
                title: '800% Queue Crisis Surge Recovery in 48 Hours',
                scopeTag: 'Platform Outage Command',
                provenance: 'Hang Tuah & Diamond Award'
              },
              {
                title: 'Cross-Border Operational Scaling (9 to 34 Agents)',
                scopeTag: '380% Squad Expansion',
                provenance: '7 APAC International Markets'
              },
              {
                title: 'Talent Retention & Nesting Pod Transition',
                scopeTag: '<5% Annualized Attrition',
                provenance: 'Structured Nesting Academies'
              },
              {
                title: 'Agent Competency Upskilling Framework (78% to 94%)',
                scopeTag: 'Floor Quality Lift',
                provenance: 'Coaching Refresher Clinics'
              },
              {
                title: 'Advertising Integrity & Merchant Fraud Mitigation',
                scopeTag: 'Ads Review Authenticity',
                provenance: 'E-Commerce Trust & Safety'
              },
              {
                title: 'Multi-Tenant Policy Authoring & Escalation Matrices',
                scopeTag: 'Operational Governance',
                provenance: 'Edge-Case Decision Trees'
              }
            ]
          }
        ]
      }
    ],
    []
  );

  const activeDomain = useMemo(() => {
    return (
      domainPillars.find((d) => d.id === selectedDomainId) || domainPillars[0]
    );
  }, [selectedDomainId, domainPillars]);

  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <p className="text-xs font-mono text-[var(--text-accent)] font-medium">
          01 · Executive Competency Ledger &amp; Provenance Matrix
        </p>
        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          Technical Mastery &amp; Operational Governance
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          High-density executive ledger cross-referencing core competencies with verified production evidence, GxP/ALCOA+ standards, and quantifiable enterprise impact.
        </p>
      </div>

      {/* SECTION 1: Split-Pane Executive Ledger (Anti-Slop Zero-Truncation Layout) */}
      <section className="space-y-6">
        {/* Domain Selection Tabs (Industrial Geometry rounded-sm, max 6px radius) */}
        <div className="flex flex-wrap gap-2 border-b border-[var(--border-subtle)] pb-4">
          {domainPillars.map((domain) => {
            const isSelected = domain.id === selectedDomainId;
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainId(domain.id)}
                aria-pressed={isSelected}
                className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-[var(--radius-sm)] text-xs font-mono transition-all border ${
                  isSelected
                    ? 'bg-[var(--accent-blue)] text-[#090a0d] border-[var(--accent-blue)] shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                }`}
              >
                <span className="font-semibold">{domain.index}</span>
                <span className="opacity-40">·</span>
                <span className="font-sans font-medium">{domain.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Split-Pane Grid: Left Rail (Domain Overview) + Right Rail (Dense Spec Ledger) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Rail: Pillar Context & Key Verifications (Sticky on Desktop) */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            <div className="bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-5 shadow-[var(--shadow-card)]">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-[var(--text-accent)] font-semibold">
                    PILLAR {activeDomain.index}
                  </span>
                  <span className="text-xs text-[var(--text-tertiary)]">·</span>
                  <span className="text-xs font-mono text-[var(--text-secondary)]">
                    {activeDomain.categories.reduce((acc, c) => acc + c.skills.length, 0)} Verified Items
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                  {activeDomain.label}
                </h2>
                <p className="text-xs font-mono text-[var(--text-accent)] font-medium leading-relaxed">
                  {activeDomain.headline}
                </p>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] pt-4">
                {activeDomain.description}
              </p>

              {/* Provenance Key Metric Callout */}
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)]">
                  <span>VERIFIED OUTCOME</span>
                  <Target className="w-3.5 h-3.5 text-[var(--text-accent)]" />
                </div>
                <div className="text-xl font-bold text-[var(--text-primary)] font-mono tabular-nums">
                  {activeDomain.verifiedMetric}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
                  {activeDomain.metricLabel}
                </div>
              </div>

              {/* Anchor Project Badge */}
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">PRODUCTION GROUNDING</span>
                <span className="font-mono text-[11px] text-[var(--text-accent)] font-medium">
                  {activeDomain.provenanceAnchor}
                </span>
              </div>
            </div>
          </div>

          {/* Right Rail: Dense Zero-Truncation Competency Spec Ledger */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {activeDomain.categories.map((cat, cIdx) => (
                  <div
                    key={cIdx}
                    className="bg-[var(--bg-surface)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] overflow-hidden shadow-[var(--shadow-card)]"
                  >
                    {/* Category Header Bar */}
                    <div className="px-5 py-3.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                          {cat.icon}
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
                          {cat.category}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-[var(--text-tertiary)] tabular-nums">
                        {cat.skills.length} Capabilities
                      </span>
                    </div>

                    {/* Dense Spec Rows (1px Hairline Dividers, Zero Truncation) */}
                    <div className="divide-y divide-[var(--border-subtle)]">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[var(--bg-surface-elevated)] transition-colors group"
                        >
                          {/* Left: Index & Complete Skill Title (Wrap enabled, Zero '...') */}
                          <div className="flex items-baseline space-x-3 min-w-0 pr-2">
                            <span className="text-[11px] font-mono text-[var(--text-accent)] shrink-0 font-semibold">
                              {String(sIdx + 1).padStart(2, '0')}
                            </span>
                            <span className="text-sm font-medium text-[var(--text-primary)] leading-snug group-hover:text-white transition-colors">
                              {skill.title}
                            </span>
                          </div>

                          {/* Right: Substantive Scope Tag + Provenance Footprint */}
                          <div className="flex items-center space-x-2.5 shrink-0 self-start sm:self-auto pl-7 sm:pl-0">
                            <span className="px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-accent)] font-medium whitespace-nowrap">
                              {skill.scopeTag}
                            </span>
                            <span className="text-[11px] font-mono text-[var(--text-secondary)] whitespace-nowrap">
                              {skill.provenance}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 2: Power Platform Enterprise Architecture Suite (5-Tier Spec) */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] text-xs font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-[var(--interactive-primary)]" />
              <span>02 · Enterprise Architecture Stack</span>
            </div>
            <h2
              className="font-bold text-[var(--text-primary)] tracking-tight"
              style={{ fontSize: 'var(--text-h2)', lineHeight: 1.2 }}
            >
              Power Platform Enterprise Architecture Suite
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1.5 max-w-3xl leading-relaxed">
              5-Tier architectural framework governing enterprise data persistence, application user experience, automated workflow orchestration, real-time analytics/AI, and zero-trust security.
            </p>
          </div>
          <span className="text-xs font-mono text-[var(--text-accent)] bg-[#0f1117] border border-[var(--border-subtle)] px-3 py-1.5 rounded-[var(--radius-sm)] shrink-0 self-start sm:self-auto">
            5 Architectural Layers
          </span>
        </div>

        {/* 5-Layer Stack Cards with Crisp Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POWER_PLATFORM_ARCH_SUITE.map((layer) => {
            const getLayerIcon = (id: string) => {
              switch (id) {
                case 'data-layer':
                  return <Database className="w-4 h-4" />;
                case 'application-layer':
                  return <Layers className="w-4 h-4" />;
                case 'automation-layer':
                  return <Workflow className="w-4 h-4" />;
                case 'analytics-ai-layer':
                  return <BarChart className="w-4 h-4" />;
                case 'security-governance-layer':
                  return <ShieldCheck className="w-4 h-4" />;
                default:
                  return <Sparkles className="w-4 h-4" />;
              }
            };

            return (
              <div
                key={layer.id}
                className="bg-[var(--bg-surface)] p-5 sm:p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors space-y-4 flex flex-col justify-between relative overflow-hidden group shadow-[var(--shadow-card)]"
              >
                {/* Top Accent Line */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-200 opacity-60 group-hover:opacity-100"
                  style={{ backgroundColor: layer.accentColor || '#f97316' }}
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-[var(--radius-sm)] border"
                      style={{
                        color: layer.accentColor || '#f97316',
                        borderColor: (layer.accentColor || '#f97316') + '33',
                        backgroundColor: (layer.accentColor || '#f97316') + '15'
                      }}
                    >
                      {layer.layer}
                    </span>
                    <div
                      className="w-8 h-8 rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)] flex items-center justify-center shrink-0"
                      style={{ color: layer.accentColor || '#f97316' }}
                    >
                      {getLayerIcon(layer.id)}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-white transition-colors">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-[var(--text-accent)] font-mono mt-0.5 font-medium">
                      {layer.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {layer.description}
                  </p>

                  {/* Components Breakdown */}
                  <div className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
                    <p className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase font-semibold">
                      // CORE COMPONENTS:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.components.map((comp, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded-[var(--radius-sm)] text-[10px] font-mono bg-[#11131c] text-neutral-300 border border-white/5"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities Checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
                    <p className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase font-semibold">
                      // ARCHITECTURAL CAPABILITIES:
                    </p>
                    <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                      {layer.capabilities.map((cap, capIdx) => (
                        <li key={capIdx} className="flex items-start space-x-1.5">
                          <span
                            className="mt-0.5 shrink-0 text-[10px] font-bold"
                            style={{ color: layer.accentColor || '#f97316' }}
                          >
                            ✓
                          </span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Documentation Provenance Links */}
                {layer.docLinks && layer.docLinks.length > 0 && (
                  <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1.5">
                    <p className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase font-semibold">
                      // ARCHITECTURAL REFERENCES:
                    </p>
                    <div className="flex flex-col gap-1">
                      {layer.docLinks.map((doc, dIdx) => (
                        <a
                          key={dIdx}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-between text-[11px] font-mono text-[var(--text-accent)] hover:text-white transition-colors py-0.5 px-1.5 rounded-[var(--radius-sm)] hover:bg-white/[0.04]"
                        >
                          <span className="truncate pr-2">{doc.label}</span>
                          <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Pro-Code Extensions & Development Stack */}
      <section className="space-y-4">
        <div className="border-b border-[var(--border-subtle)] pb-3">
          <p className="text-xs font-mono text-[var(--text-accent)] font-medium">03 · Pro-Code Engineering</p>
          <h2
            className="font-medium text-[var(--text-primary)] tracking-tight mt-1"
            style={{ fontSize: 'var(--text-h2)', lineHeight: 1.25 }}
          >
            Development Stack &amp; Custom PCF Extensions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEV_STACK.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-surface-elevated)] text-xs font-mono font-semibold flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-accent)]">
                    {item.code}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">{item.name}</span>
                </div>
                <span className="text-xs font-mono font-semibold text-[var(--text-secondary)] tabular-nums">
                  {item.percentage}%
                </span>
              </div>

              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${item.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: ALM & Enterprise Governance + Core Business Competencies */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ALM & Governance */}
        <div className="bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-[var(--text-accent)]" />
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                ALM &amp; Enterprise Governance
              </h3>
            </div>
            <span className="text-xs font-mono text-[var(--text-tertiary)]">CI/CD &amp; DLP</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {GOVERNANCE_ITEMS.map((gov, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
                  <h4 className="text-xs font-semibold text-[var(--text-primary)]">{gov.name}</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {gov.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Business Competencies */}
        <div className="bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[var(--text-accent)]" />
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Executive Service Delivery Pillars
              </h3>
            </div>
            <span className="text-xs font-mono text-[var(--text-tertiary)]">Operations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {BUSINESS_COMPETENCIES.map((comp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
                  <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                    {comp.title}
                  </h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Technology Utilization Telemetry across Production Apps */}
      <section className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-6 sm:p-8 space-y-6 shadow-[var(--shadow-card)]">
        <div className="space-y-1">
          <p className="text-xs font-mono text-[var(--text-accent)] font-medium">04 · Production Footprint</p>
          <h2 className="text-lg sm:text-xl font-medium text-[var(--text-primary)] tracking-tight">
            Technology Utilization Matrix Across 16+ Rebuilt Systems
          </h2>
        </div>

        {/* Mobile Tabs */}
        <div className="flex lg:hidden bg-[var(--bg-primary)] p-1 rounded-[var(--radius-sm)] border border-[var(--border-subtle)]">
          <button
            onClick={() => setMobileTab('tools')}
            aria-pressed={mobileTab === 'tools'}
            className={`flex-1 py-2 text-xs font-medium rounded-[var(--radius-sm)] transition-colors whitespace-nowrap ${
              mobileTab === 'tools'
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Tools &amp; Platforms
          </button>
          <button
            onClick={() => setMobileTab('impact')}
            aria-pressed={mobileTab === 'impact'}
            className={`flex-1 py-2 text-xs font-medium rounded-[var(--radius-sm)] transition-colors whitespace-nowrap ${
              mobileTab === 'impact'
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Business Impact
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tech Stack Distribution */}
          <div className={`space-y-3 ${mobileTab === 'tools' ? 'block' : 'hidden'} lg:block`}>
            <h3 className="text-xs font-mono text-[var(--text-secondary)] font-medium">
              Deployed Platforms by System Count
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {techUsage.slice(0, 10).map(([tech, count]) => (
                <div
                  key={tech}
                  className="bg-[var(--bg-primary)] px-3.5 py-2.5 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] flex items-center justify-between hover:border-[var(--border-focus)] transition-colors"
                >
                  <span className="text-xs font-medium text-[var(--text-primary)] truncate pr-2">
                    {tech}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-accent)] tabular-nums shrink-0">
                    {count} {count === 1 ? 'App' : 'Apps'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Measurable Impacts */}
          <div className={`space-y-3 ${mobileTab === 'impact' ? 'block' : 'hidden'} lg:block`}>
            <h3 className="text-xs font-mono text-[var(--text-secondary)] font-medium">
              Verified Enterprise KPIs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {KEY_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-2xl font-semibold text-[var(--text-primary)] font-mono tabular-nums">
                      {metric.value}
                    </span>
                    <Target className="w-4 h-4 text-[var(--text-accent)] shrink-0" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[var(--text-primary)]">
                      {metric.label}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">{metric.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
