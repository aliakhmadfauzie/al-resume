import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  DEV_STACK,
  GOVERNANCE_ITEMS,
  BUSINESS_COMPETENCIES,
  ADDITIONAL_COMPETENCIES,
  CORE_PROJECTS,
  MIGRATION_SLICES,
  KEY_METRICS
} from '../../data/portfolioData';
import {
  Terminal,
  Layers,
  ShieldCheck,
  Workflow,
  Database,
  Sparkles,
  Code2,
  GitBranch,
  BarChart,
  Target,
  Briefcase,
  FileText,
  MonitorPlay,
  Globe,
  Sliders,
  Users,
  Activity,
  CheckCircle2,
  Gauge,
  MessageSquare,
  Video,
  PieChart,
  AlertTriangle,
  TrendingUp,
  UserCheck,
  Award
} from 'lucide-react';

export const SkillsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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

  // Icon-led badge resolver for tools and competencies
  const getCompetencyBadgeMeta = (category: string, skill: string) => {
    const lc = skill.toLowerCase();

    // Support Tools & Platforms
    if (lc.includes('salesforce')) {
      return {
        icon: <Database className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'CRM'
      };
    }
    if (lc.includes('jira')) {
      return {
        icon: <Layers className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Agile / Issue'
      };
    }
    if (lc.includes('zendesk')) {
      return {
        icon: <MessageSquare className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Ticketing'
      };
    }
    if (lc.includes('tableau')) {
      return {
        icon: <PieChart className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Visual BI'
      };
    }
    if (lc.includes('power bi')) {
      return {
        icon: <BarChart className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Analytics'
      };
    }
    if (lc.includes('excel')) {
      return {
        icon: <FileText className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Data Modeling'
      };
    }
    if (lc.includes('teams')) {
      return {
        icon: <MonitorPlay className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'M365 Collab'
      };
    }
    if (lc.includes('slack')) {
      return {
        icon: <Terminal className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Ops Comms'
      };
    }
    if (lc.includes('zoom')) {
      return {
        icon: <Video className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Conferencing'
      };
    }

    // Customer Service Management
    if (lc.includes('sla') || lc.includes('kpi')) {
      return {
        icon: <Gauge className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: '>98% Target'
      };
    }
    if (lc.includes('escalation')) {
      return {
        icon: <AlertTriangle className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Triage'
      };
    }
    if (lc.includes('quality assurance')) {
      return {
        icon: <ShieldCheck className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'ISO / QA'
      };
    }

    // Team Leadership & Development
    if (category === 'Team Leadership & Development') {
      if (lc.includes('hiring') || lc.includes('attrition')) {
        return {
          icon: <UserCheck className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
          tag: 'Retention'
        };
      }
      return {
        icon: <Users className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Leadership'
      };
    }

    // Process Automation & Analytics
    if (category === 'Process Automation & Analytics') {
      if (lc.includes('dashboard')) {
        return {
          icon: <Activity className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
          tag: 'Live Telemetry'
        };
      }
      return {
        icon: <Sliders className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: 'Automation'
      };
    }

    // Languages
    if (category === 'Languages') {
      return {
        icon: <Globe className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
        tag: lc.includes('native') ? 'Native' : 'Fluent'
      };
    }

    return {
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />,
      tag: 'Core'
    };
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Customer Service Management':
        return <ShieldCheck className="w-4 h-4 text-[var(--text-accent)]" />;
      case 'Team Leadership & Development':
        return <Users className="w-4 h-4 text-[var(--text-accent)]" />;
      case 'Support Tools & Platforms':
        return <Terminal className="w-4 h-4 text-[var(--text-accent)]" />;
      case 'Process Automation & Analytics':
        return <Workflow className="w-4 h-4 text-[var(--text-accent)]" />;
      case 'Languages':
        return <Globe className="w-4 h-4 text-[var(--text-accent)]" />;
      default:
        return <Briefcase className="w-4 h-4 text-[var(--text-accent)]" />;
    }
  };

  const competencyGroups = useMemo(
    () => [
      {
        id: 'core-competencies',
        index: '01',
        label: 'Core Competencies',
        subtitle: 'Service delivery governance, SLA & KPI management, contact center operations, and cross-functional team leadership.',
        categories: ADDITIONAL_COMPETENCIES.filter((c) =>
          ['Customer Service Management', 'Team Leadership & Development'].includes(c.category)
        )
      },
      {
        id: 'platform-tools',
        index: '02',
        label: 'Platform Tools',
        subtitle: 'Enterprise CRM, issue tracking, business intelligence, and collaborative communication platforms.',
        categories: ADDITIONAL_COMPETENCIES.filter((c) =>
          ['Support Tools & Platforms'].includes(c.category)
        )
      },
      {
        id: 'methodologies',
        index: '03',
        label: 'Methodologies',
        subtitle: 'Workflow automation, incident command, escalation triage, process optimization, and regional language capabilities.',
        categories: ADDITIONAL_COMPETENCIES.filter((c) =>
          ['Process Automation & Analytics', 'Languages'].includes(c.category)
        )
      }
    ],
    []
  );

  const visibleGroups = useMemo(() => {
    if (selectedCategory === 'all') return competencyGroups;
    return competencyGroups.filter((g) => g.id === selectedCategory);
  }, [selectedCategory, competencyGroups]);

  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <p className="text-xs font-mono text-[var(--text-accent)] font-medium">
          01 · Technical Architecture &amp; Operational Competencies
        </p>
        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          Technical Mastery &amp; Core Competencies
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Structured F-pattern competency matrix organized by Core Competencies, Platform Tools, and Methodologies for rapid recruiter evaluation.
        </p>
      </div>

      {/* SECTION 1: Categorized Competency Grids (Core Competencies, Platform Tools, Methodologies) */}
      <section className="space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div className="space-y-1">
            <h2
              className="font-medium text-[var(--text-primary)] tracking-tight"
              style={{ fontSize: 'var(--text-h2)', lineHeight: 1.25 }}
            >
              Competency &amp; Tooling Architecture
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Segmented into clear domain groups on an 8-pixel (`0.5rem`) grid layout with tactile icon-led badges.
            </p>
          </div>

          {/* Interactive Group Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'core-competencies', label: 'Core Competencies' },
              { id: 'platform-tools', label: 'Platform Tools' },
              { id: 'methodologies', label: 'Methodologies' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === tab.id
                    ? 'bg-[var(--accent-blue)] text-white'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Header Labels & Grid Sections */}
        <div className="space-y-10">
          {visibleGroups.map((group) => (
            <div key={group.id} className="space-y-4">
              {/* Categorized Header Label Above Grid Section */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[var(--text-accent)] font-semibold">
                      {group.index}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-tertiary)]">·</span>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] tracking-tight">
                      {group.label}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{group.subtitle}</p>
                </div>
                <span className="text-xs font-mono text-[var(--text-secondary)] tabular-nums shrink-0">
                  {group.categories.reduce((acc, c) => acc + c.skills.length, 0)} Verified Items
                </span>
              </div>

              {/* Grid Section under the Categorized Header */}
              <div
                className={`grid gap-4 ${
                  group.categories.length === 1
                    ? 'grid-cols-1'
                    : 'grid-cols-1 lg:grid-cols-2'
                }`}
              >
                {group.categories.map((category) => (
                  <div
                    key={category.category}
                    className="bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors space-y-4 shadow-[var(--shadow-card)]"
                  >
                    {/* Sub-Category Header */}
                    <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center">
                          {getCategoryIcon(category.category)}
                        </div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
                          {category.category}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-[var(--text-tertiary)] tabular-nums">
                        {category.skills.length} items
                      </span>
                    </div>

                    {/* 8px-Spaced Grid (gap-2 = 8px) for F-Pattern Scanning */}
                    <div
                      className={`grid gap-2 ${
                        group.categories.length === 1
                          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                          : 'grid-cols-1 sm:grid-cols-2'
                      }`}
                    >
                      {category.skills.map((skill, sIdx) => {
                        const badgeMeta = getCompetencyBadgeMeta(category.category, skill);
                        return (
                          <motion.div
                            key={sIdx}
                            whileHover={{ scale: 1.025 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                            className="px-3 py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] flex items-center justify-between gap-2 transition-colors group cursor-default"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {badgeMeta.icon}
                              <span className="text-xs font-medium text-[var(--text-primary)] truncate">
                                {skill}
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] shrink-0">
                              {badgeMeta.tag}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Power Platform Architecture Suite */}
      <section className="space-y-4">
        <div className="border-b border-[var(--border-subtle)] pb-3">
          <p className="text-xs font-mono text-[var(--text-accent)] font-medium">02 · Core Platform Stack</p>
          <h2
            className="font-medium text-[var(--text-primary)] tracking-tight mt-1"
            style={{ fontSize: 'var(--text-h2)', lineHeight: 1.25 }}
          >
            Power Platform Architecture Suite
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-accent)]">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">Power Apps</h3>
                <p className="text-xs text-[var(--text-tertiary)] font-mono mt-0.5">Canvas · Model-Driven</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Responsive, accessible canvas applications and complex model-driven architectures with custom business process flows (BPFs) and role-tailored forms.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-tertiary)] font-mono">
              Responsive UI · Offline Sync · PCF Controls
            </div>
          </div>

          <div className="glass-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-accent)]">
                <Workflow className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">Power Automate</h3>
                <p className="text-xs text-[var(--text-tertiary)] font-mono mt-0.5">Cloud Flows · Desktop RPA</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Automated multi-stage approval matrices, scheduled Domino agent replacements, exception handlers, REST API webhooks, and desktop RPA.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-tertiary)] font-mono">
              Error Tracing · Adaptive Cards · OData
            </div>
          </div>

          <div className="glass-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-accent)]">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">Microsoft Dataverse</h3>
                <p className="text-xs text-[var(--text-tertiary)] font-mono mt-0.5">Relational Enterprise Data</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Enterprise relational data modeling, custom tables, 1:N &amp; N:N relationships, business rules, field-level security, and database isolation.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-tertiary)] font-mono">
              Security Roles · Audit Trails · Isolation
            </div>
          </div>

          <div className="glass-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-accent)]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">AI Builder &amp; Copilot</h3>
                <p className="text-xs text-[var(--text-tertiary)] font-mono mt-0.5">Intelligent Automation</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Custom prompt engineering, document processing, NLP classification across 120+ SOP categories, semantic search ranking, and Copilot Studio agents.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-tertiary)] font-mono">
              NLP Classifier · SOP Extraction · RAG
            </div>
          </div>
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
        <div className="bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
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
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {gov.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Business Competencies */}
        <div className="bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
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
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
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
            className={`flex-1 py-2 text-xs font-medium rounded-[4px] transition-colors whitespace-nowrap ${
              mobileTab === 'tools'
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Tools &amp; Platforms
          </button>
          <button
            onClick={() => setMobileTab('impact')}
            className={`flex-1 py-2 text-xs font-medium rounded-[4px] transition-colors whitespace-nowrap ${
              mobileTab === 'impact'
                ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Business Impact
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tech Stack Distribution (8px gap-2 grid) */}
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

          {/* Key Measurable Impacts (8px gap-2 grid) */}
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
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">{metric.subtext}</p>
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
