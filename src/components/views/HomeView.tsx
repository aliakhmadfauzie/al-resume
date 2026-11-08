import React, { lazy, Suspense, useState, useMemo } from 'react';
import {
  ArrowRight,
  Download,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Users,
  Award,
  Play,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Sparkles,
  Activity
} from 'lucide-react';
import {
  CORE_PROJECTS,
  PERSONAL_INFO,
  WORK_EXPERIENCE,
  LINKEDIN_CERTIFICATIONS,
  LINKEDIN_TESTIMONIALS,
  KEY_METRICS
} from '../../data/portfolioData';
import type { ProjectItem, MigrationSlice } from '../../types';
import { ContactActions } from '../ContactActions';
import { ProjectCardGalleryPreview } from '../ProjectGallery';

const ArchitectureMotionHero = lazy(() =>
  import('../ArchitectureMotionHero').then(module => ({ default: module.ArchitectureMotionHero }))
);

interface HomeViewProps {
  onOpenProjectDetail: (item: ProjectItem | MigrationSlice) => void;
  onOpenResume: () => void;
  onLaunchDemo: (demoId: string) => void;
  activePersona?: 'software' | 'operations' | 'both';
  onPersonaChange?: (persona: 'software' | 'operations' | 'both') => void;
}

export function HomeView({
  onOpenProjectDetail,
  onOpenResume,
  onLaunchDemo,
  activePersona = 'both',
  onPersonaChange,
}: HomeViewProps) {
  const [architectureOpen, setArchitectureOpen] = useState(false);

  // Dynamic curated flagship projects reordered based on active persona
  const featuredProjectIds = useMemo(() => {
    if (activePersona === 'operations') {
      return ['pulsetrack', 'smartflow', 'cs-resolver'];
    }
    if (activePersona === 'software') {
      return ['ats-automation', 'ioi-acidchem-she-platform', 'putri-garmenthub-erp'];
    }
    return ['ioi-acidchem-she-platform', 'ats-automation', 'putri-garmenthub-erp'];
  }, [activePersona]);

  // Dynamic empirical metrics based on active persona
  const activeMetrics = useMemo(() => {
    if (activePersona === 'operations') {
      return [
        { label: "CONTRACTUAL SLA", value: "98%+", subtext: "Concentrix & Accenture Floor" },
        { label: "AHT REDUCTION", value: "-25%", subtext: "Lean Six Sigma DMAIC" },
        { label: "LEADERSHIP HRS SAVED", value: "120+h/wk", subtext: "PulseTrack & SmartFlow" },
        { label: "SQUAD SCALING", value: "34 Agents", subtext: "7 APAC Pods (<5% Attrition)" }
      ];
    }
    if (activePersona === 'software') {
      return [
        { label: "LICENSE AVOIDED", value: "$960K/yr", subtext: "Single MainDB Partitioning" },
        { label: "DATABASES RETIRED", value: "365+", subtext: "28 BUs (0h Unplanned Downtime)" },
        { label: "SCREENS IN CI", value: "7,878", subtext: "Power Apps YAML AST Verified" },
        { label: "LATENCY REDUCTION", value: "sub-1s", subtext: "React 19 & Cloud Platforms" }
      ];
    }
    return KEY_METRICS;
  }, [activePersona]);

  const featuredProjects = featuredProjectIds
    .map(id => CORE_PROJECTS.find(p => p.id === id))
    .filter((p): p is ProjectItem => Boolean(p));

  // Fallback to top items if any specific ID is missing
  const displayProjects = featuredProjects.length === 3 ? featuredProjects : CORE_PROJECTS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-12">
      {/* =========================================================================
          SECTION 1: HERO & ABOVE-THE-FOLD REAL ESTATE (6-SECOND RECRUITER GATE)
          ========================================================================= */}
      <section aria-labelledby="home-title" className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow Badge & Hero Persona Switcher Row */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] text-xs sm:text-sm font-semibold tracking-wide text-[var(--text-accent)] uppercase">
              {activePersona === 'software' ? (
                <>
                  <Cpu size={14} className="text-cyan-400 animate-pulse" />
                  <span>Full-Stack Architecture · React 19 &amp; TypeScript · Cloud &amp; AI</span>
                </>
              ) : activePersona === 'operations' ? (
                <>
                  <Users size={14} className="text-orange-400 animate-pulse" />
                  <span>Operations Leadership · Contact Center &amp; BPO · 98%+ SLA &amp; Lean Six Sigma</span>
                </>
              ) : (
                <>
                  <Sparkles size={14} className="text-[var(--text-accent)] animate-pulse" />
                  <span>Enterprise Modernization · Power Platform · Full-Stack &amp; AI</span>
                </>
              )}
            </div>

            {/* In-Page Quick Perspective Switcher */}
            {onPersonaChange && (
              <div
                className="inline-flex items-center p-0.5 rounded-full bg-[#0d1017]/85 border border-white/10 text-xs font-mono backdrop-blur-md shadow-sm"
                role="group"
                aria-label="Tailor portfolio perspective"
              >
                <button
                  type="button"
                  onClick={() => onPersonaChange('software')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    activePersona === 'software'
                      ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Software Developer view"
                >
                  <Cpu size={11} />
                  <span>Developer</span>
                </button>

                <button
                  type="button"
                  onClick={() => onPersonaChange('operations')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    activePersona === 'operations'
                      ? 'bg-orange-500/25 text-orange-300 font-bold border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.3)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Operations Team Manager view"
                >
                  <Users size={11} />
                  <span>Operations</span>
                </button>

                <button
                  type="button"
                  onClick={() => onPersonaChange('both')}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full transition-all cursor-pointer ${
                    activePersona === 'both'
                      ? 'bg-purple-500/25 text-purple-300 font-bold border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Unified Hybrid view"
                >
                  <Sparkles size={11} />
                  <span>All</span>
                </button>
              </div>
            )}
          </div>

          {/* Primary Headline (Dynamic based on selected persona) */}
          {activePersona === 'software' ? (
            <h1
              id="home-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[var(--text-primary)]"
            >
              Architecting Scalable Cloud Systems &amp; AI Platforms That{' '}
              <span className="text-cyan-400">Eliminate Technical Debt</span> &amp; Cut Engineering Complexity.
            </h1>
          ) : activePersona === 'operations' ? (
            <h1
              id="home-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[var(--text-primary)]"
            >
              Scaling High-Performance Operations Squads,{' '}
              <span className="text-orange-400">Sustaining 98%+ SLA</span> &amp; Cutting AHT by 25%.
            </h1>
          ) : (
            <h1
              id="home-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[var(--text-primary)]"
            >
              Architecting Resilient Enterprise Systems That{' '}
              <span className="text-[var(--text-accent)]">Eliminate Technical Debt</span> &amp; Slash Millions in Licensing.
            </h1>
          )}

          {/* Inverted Pyramid Value Proposition (Dynamic based on selected persona) */}
          {activePersona === 'software' ? (
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
              <strong className="text-[var(--text-primary)]">9+ years</strong> of full-stack engineering expertise across{' '}
              <strong className="text-[var(--text-primary)]">React 19</strong>,{' '}
              <strong className="text-[var(--text-primary)]">TypeScript</strong>, and{' '}
              <strong className="text-[var(--text-primary)]">Cloud Architecture</strong>. Built zero-downtime microservices,
              automated distributed ETL pipelines, and validated{' '}
              <strong className="text-cyan-400">7,878 resilient interfaces</strong> with sub-second latencies.
            </p>
          ) : activePersona === 'operations' ? (
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
              <strong className="text-[var(--text-primary)]">8+ years</strong> of BPO and contact center operations leadership across{' '}
              <strong className="text-[var(--text-primary)]">Concentrix CVG</strong> and{' '}
              <strong className="text-[var(--text-primary)]">Accenture</strong>. Scaled frontline squads from{' '}
              <strong className="text-[var(--text-primary)]">9 to 34 agents</strong> across 7 international markets, maintained{' '}
              <strong className="text-orange-400">98%+ contractual SLA adherence</strong>, saved{' '}
              <strong className="text-orange-400">120+ leadership hours weekly</strong> via PulseTrack &amp; SmartFlow telemetry, and executed Lean Six Sigma DMAIC frameworks to reduce AHT by 25% with &lt;5% staff attrition.
            </p>
          ) : (
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
              <strong className="text-[var(--text-primary)]">9+ years</strong> of cross-border engineering leadership across{' '}
              <strong className="text-[var(--text-primary)]">IOI Corporation</strong>,{' '}
              <strong className="text-[var(--text-primary)]">Concentrix</strong>, and{' '}
              <strong className="text-[var(--text-primary)]">Accenture</strong>. Retired{' '}
              <strong className="text-[var(--text-primary)]">365+ legacy databases</strong>, avoided{' '}
              <strong className="text-[var(--text-accent)]">$960,000/year</strong> in recurring software costs, and validated{' '}
              <strong className="text-[var(--text-primary)]">7,878 Power Apps screens</strong> under GAMP 5 &amp; 21 CFR Part 11 compliance.
            </p>
          )}

          {/* Split CTAs (Primary Download + Secondary Sandbox Explorer) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              id="hero-btn-download-cv"
              href="/assets/profile/Resume.pdf"
              download="Ali_Akhmad_Fauzie_Resume.pdf"
              className="action-primary text-base font-semibold px-6 py-3.5 rounded-xl min-h-[48px] inline-flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(249,115,22,0.35)]"
            >
              <Download size={19} />
              <span>Download Executive CV (PDF)</span>
            </a>
            <a
              id="hero-btn-view-demos"
              href="#/demos"
              className="action-secondary text-base font-semibold px-6 py-3.5 rounded-xl min-h-[48px] inline-flex items-center justify-center gap-2.5"
            >
              <Play size={18} className="text-[var(--text-accent)]" />
              <span>Launch Architecture Sandbox</span>
            </a>
          </div>

          {/* Quick-Access Secondary Interactive Viewer Link */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-tertiary)] pt-1">
            <button
              type="button"
              onClick={onOpenResume}
              className="min-h-11 text-sm font-medium text-[var(--text-accent)] hover:text-[var(--interactive-primary-hover)] underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileText size={16} />
              <span>Read complete resume online in modal viewer</span>
            </button>
          </div>

          {/* Frictionless Recruiter Contact Fast-Row */}
          <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[var(--text-tertiary)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-[var(--text-accent)]" />
              <span>Kuala Lumpur, MY &amp; Bandung, ID</span>
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-accent)] transition-colors"
            >
              <Mail size={14} className="text-[var(--text-accent)]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-accent)] transition-colors"
            >
              <ExternalLink size={14} className="text-[var(--text-accent)]" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Aside Card: Verified Pedigree & Operational Impact */}
        <aside
          aria-label="Verified leadership & architectural pedigree"
          className="lg:col-span-5 glass-card p-6 sm:p-8 space-y-6 border border-[var(--border-subtle)] relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt="Ali Akhmad Fauzie"
                width="80"
                height="80"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[var(--interactive-subtle-border)] shadow-md"
              />
              <span
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[var(--bg-surface)]"
                title="Available for Solution Architect & Engineering Leadership roles"
              />
            </div>
            <div>
              <p className="font-bold text-lg text-[var(--text-primary)]">Ali Akhmad Fauzie</p>
              <p className="text-xs font-semibold text-[var(--text-accent)] uppercase tracking-wider mt-0.5">
                {activePersona === 'operations'
                  ? 'Operations Leader & Team Manager'
                  : activePersona === 'software'
                  ? 'Principal Solutions Architect'
                  : 'Operations Leader & Solutions Architect'}
              </p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">
                {activePersona === 'operations'
                  ? 'BPO & Contact Center Floor Operations'
                  : activePersona === 'software'
                  ? 'Full-Stack, Cloud & AI Architecture'
                  : 'Dual-Track: Enterprise & Full-Stack AI'}
              </p>
            </div>
          </div>

          {/* Quick Dual-Metric Anchor */}
          <dl className="grid grid-cols-2 gap-4 py-4 border-y border-[var(--border-subtle)]">
            <div className="bg-[var(--bg-surface)] p-3.5 rounded-xl border border-[var(--border-subtle)]">
              <dt className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">
                {activePersona === 'operations' ? 'Squad Scaling' : 'Databases Retired'}
              </dt>
              <dd className="text-3xl font-extrabold text-[var(--text-accent)] font-mono mt-1">
                {activePersona === 'operations' ? '34 Agents' : '365+'}
              </dd>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">
                {activePersona === 'operations' ? '7 APAC jurisdictions' : '28 BUs (0h downtime)'}
              </p>
            </div>
            <div className="bg-[var(--bg-surface)] p-3.5 rounded-xl border border-[var(--border-subtle)]">
              <dt className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">
                {activePersona === 'operations' ? 'SLA Governance' : 'License Avoidance'}
              </dt>
              <dd className="text-3xl font-extrabold text-[var(--text-accent)] font-mono mt-1">
                {activePersona === 'operations' ? '>98%' : '$960K/yr'}
              </dd>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">
                {activePersona === 'operations' ? 'Six Sigma DMAIC control' : 'Single MainDB Architecture'}
              </p>
            </div>
          </dl>

          {/* Industry Accolades Badge */}
          <div className="p-4 rounded-xl bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-accent)]">
              <Award size={16} />
              <span>Distinctions &amp; Incident Command</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Recipient of the <strong>Hang Tuah Distinction</strong> and <strong>Accenture Diamond Award</strong> for
              stabilizing an <strong>800% queue surge in 48 hours</strong> during a regional platform crisis.
            </p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <a
              href="#/experience"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-accent)] hover:underline"
            >
              <span>Explore career trajectory</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#/certifications"
              className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Credentials &amp; Awards →
            </a>
          </div>
        </aside>
      </section>

      {/* =========================================================================
          SECTION 2: PROOF & IMPACT TICKER (THE SPOTTED SCANNING RAIL)
          Eliminates false floors; anchors eyes to numerals, currency, and percentages.
          ========================================================================= */}
      <section
        aria-labelledby="proof-ticker-title"
        className="glass-card p-6 sm:p-8 border border-[var(--border-subtle)] relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <p className="section-eyebrow">
              {activePersona === 'operations' ? 'Operational Performance' : 'Empirical Track Record'}
            </p>
            <h2 id="proof-ticker-title" className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
              {activePersona === 'operations'
                ? 'Contact Center & Operational Impact Metrics'
                : 'Engineered Business & Architectural Impact'}
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-accent)] bg-[var(--interactive-subtle-bg)] px-3 py-1.5 rounded-lg border border-[var(--interactive-subtle-border)] self-start sm:self-auto">
            100% Verifiable Deliverables
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {activeMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="space-y-1.5 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] transition-colors"
            >
              <p className="text-xs font-mono font-medium tracking-wider uppercase text-[var(--text-tertiary)]">
                {metric.label}
              </p>
              <p className="text-2xl sm:text-4xl font-black text-[var(--text-accent)] font-mono tracking-tight">
                {metric.value}
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-snug">{metric.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE COMPETENCY ARCHITECTURE (LAYER-CAKE STRUCTURE)
          Descriptive structural headers allowing recruiters to scan domain depth.
          ========================================================================= */}
      <section id="section-services" aria-labelledby="competency-architecture-title" className="space-y-8">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <p className="section-eyebrow">
              {activePersona === 'operations' ? 'Operational Methodology' : 'Core Competencies'}
            </p>
            <h2 id="competency-architecture-title" className="section-title">
              {activePersona === 'operations'
                ? 'The 3 Daily Operational Pillars of Floor Leadership.'
                : 'Three Pillars of Enterprise Architecture & Delivery.'}
            </h2>
          </div>
          <a href="#/skills" className="action-secondary">
            Explore complete skill inventory <ArrowRight size={17} />
          </a>
        </div>

        {activePersona === 'operations' ? (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Operational Pillar 1 */}
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-orange-500/25 hover:border-orange-500/60 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Activity size={26} />
                </div>
                <h3 className="text-xl font-bold text-white">Pillar 1: Real-Time Floor Operations &amp; Capacity</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Live queue capacity governance, tracking 90–95% schedule adherence, balancing planned &amp; unplanned shrinkage, and incident command during Sev-1 platform crises.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>90–95% schedule adherence across multi-shift rotational schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>Dynamic shrinkage balancing &amp; shift-handover telemetry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>Incident command during Sev-1/P1 outages (stabilized 800% surge in 48h)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5 text-xs font-mono text-orange-300">
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Floor Adherence</span>
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Shrinkage</span>
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Sev-1 Command</span>
              </div>
            </div>

            {/* Operational Pillar 2 */}
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-orange-500/25 hover:border-orange-500/60 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="text-xl font-bold text-white">Pillar 2: Escalations &amp; Brand Protection</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Serving as Tier-2 escalation point, converting high-visibility TikTok complaints from public comments to private DMs to safeguard PII, and executing bounded DoA resolutions.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>TikTok public-to-private de-escalation protocol safeguarding PII</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>Strict 3-strike policy boundary enforcement against customer abuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>Bounded Commercial Decisions within pre-approved $100–$150 DoA threshold</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5 text-xs font-mono text-orange-300">
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">TikTok DMs</span>
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">3-Strike Boundary</span>
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">DoA Concessions</span>
              </div>
            </div>

            {/* Operational Pillar 3 */}
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-orange-500/25 hover:border-orange-500/60 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Users size={26} />
                </div>
                <h3 className="text-xl font-bold text-white">Pillar 3: People Leadership &amp; Quality Coaching</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Diagnosing Skill vs. Will root causes via silent screen-shadowing, executing 14- to 30-day SMART action plans, conducting weekly GROW 1-on-1s, and QA calibrations.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>Skill vs. Will diagnostic framework with silent side-by-side shadowing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>Structured 14- to 30-day SMART performance remediation plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>Weekly GROW 1-on-1 coaching &amp; multilingual QA calibrations (&lt;5% attrition)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5 text-xs font-mono text-orange-300">
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">GROW Coaching</span>
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Skill vs Will</span>
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">QA Calibrations</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1: Enterprise Modernization */}
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] flex items-center justify-center text-[var(--text-accent)]">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Enterprise Modernization &amp; Governance</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Architecting single-table partitioned schemas that retire legacy Lotus Notes into Microsoft 365, avoiding
                  costly premium connectors while enforcing regulatory compliance.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Power Apps YAML v3 AST code verification &amp; CI linters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>GAMP 5 Category 4 &amp; 21 CFR Part 11 ALCOA+ audit trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>SAP S/4HANA &amp; Oracle 19c read-only OData ERP staging</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {['Power Apps YAML', 'SharePoint MainDB', 'GAMP 5', '21 CFR Part 11', 'Power Automate'].map(tool => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-tertiary)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 2: Full-Stack & AI Systems */}
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] flex items-center justify-center text-[var(--text-accent)]">
                  <Cpu size={26} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Modern Full-Stack &amp; AI Automation</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Engineering reactive web applications and high-fidelity AI automation gateways with deterministic quality
                  gates, zero metric hallucination, and local-first offline resilience.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>React 19, TypeScript 5.8 &amp; Tailwind CSS v4 systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Tri-Engine AI Gateway (Groq + Gemini) with fcntl locks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>0ms synchronous local hydration eliminating 6,070ms TBT</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {['React 19', 'TypeScript', 'Playwright', 'Gemini API', 'Firebase Firestore', 'Vite 6'].map(tool => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-tertiary)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 3: Operations Leadership */}
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] flex items-center justify-center text-[var(--text-accent)]">
                  <Users size={26} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Mission-Critical Operations Leadership</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Directing multilingual service squads across 7 APAC countries, commanding crisis incident response, and
                  deploying Six Sigma DMAIC frameworks that eliminate operational friction.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Scaled squad 380% (9 to 34 agents) holding &lt;5% attrition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>800% queue crisis surge recovered in 48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>90% manual reporting reduction via unified tooling</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {['Six Sigma DMAIC', 'Crisis Incident Command', 'ISO 9001/27001', 'APAC Scaling'].map(tool => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-tertiary)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            CANVA INTERACTIVE WEB PROFILE & INTERVIEW DOSSIER ACCESS BANNER
            ========================================================================= */}
        {activePersona === 'operations' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#170e08] via-[#0d0a08] to-[#120f18] border border-orange-500/30 shadow-[0_10px_30px_rgba(249,115,22,0.15)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mt-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-xs font-mono text-orange-300 uppercase">
                <Sparkles size={12} className="text-orange-400 animate-pulse" />
                <span>Verified Interview Portfolio &amp; Canva Interactive Web Doc</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Operations Leadership &amp; Interview Preparation Dossier
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Modern responsive web layout generated in Canva—covering the 3 operational pillars, real-time queue telemetry, TikTok brand protection, and squad scalability.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.canva.com/d/1D6yVSNnT4myGGE"
                target="_blank"
                rel="noreferrer"
                className="action-primary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <ExternalLink size={15} />
                <span>Open in Canva</span>
              </a>

              <a
                href="https://www.canva.com/d/b5YaW_6Byz1f4RI"
                target="_blank"
                rel="noreferrer"
                className="action-secondary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <Play size={15} className="text-orange-400" />
                <span>Interactive View</span>
              </a>

              <a
                href="https://export-download.canva.com/_hnTQ/DAHZ70_hnTQ/-1/0-1700629962503652562.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261104T001211Z&X-Amz-Expires=32875&X-Amz-Signature=2de35a3bbce7ccee26d0beeea7ac8e9fa01ca76e404023cf22fd10d0be3074af&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2004%20Nov%202026%2009%3A20%3A06%20GMT"
                target="_blank"
                rel="noreferrer"
                className="action-secondary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl inline-flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer"
                title="Download High-Resolution Web Portfolio PDF"
              >
                <Download size={15} />
                <span>PDF Export</span>
              </a>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 4: CURATED PROJECT HIGHLIGHTS (STAR / XYZ FRAMEWORK)
          Front-loaded impact verbs and bolded numerical anchors.
          ========================================================================= */}
      <section aria-labelledby="selected-work-title" className="space-y-8">
        <div className="flex flex-wrap gap-4 justify-between items-end">
          <div>
            <p className="section-eyebrow">
              {activePersona === 'operations' ? 'Operational Solutions &amp; Telemetry' : 'Curated Flagship Work'}
            </p>
            <h2 id="selected-work-title" className="section-title">
              {activePersona === 'operations'
                ? 'Flagship Operational Solutions &amp; Floor Systems.'
                : 'Problems Solved. Systems Delivered With Verifiable Impact.'}
            </h2>
          </div>
          <a href="#/projects" className="action-secondary">
            View all case studies &amp; slices <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayProjects.map(project => (
            <article
              key={project.id}
              className="glass-card p-5 sm:p-6 flex flex-col justify-between gap-5 border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] transition-all duration-200"
            >
              <div className="space-y-4">
                <ProjectCardGalleryPreview item={project} />
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-medium text-[var(--text-tertiary)]">{project.date}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)] uppercase">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug mt-2 text-[var(--text-primary)]">{project.title}</h3>
                  <p className="text-xs font-medium text-[var(--text-accent)] mt-1.5">{project.role}</p>
                </div>

                {/* Problem & Action (Inverted Pyramid) */}
                <div className="space-y-3">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    <strong className="text-[var(--text-primary)]">Problem: </strong>
                    {project.problem}
                  </p>

                  {/* Quantified Outcome Box */}
                  <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-accent)]">
                      Engineered Outcome:
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Categorized Tools */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tools.slice(0, 5).map(tool => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-tertiary)]"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 5 && (
                    <span className="text-xs px-2 py-1 text-[var(--text-tertiary)] font-mono">
                      +{project.tools.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-subtle)]">
                <a
                  href={`#/projects/${encodeURIComponent(project.id)}`}
                  className="action-primary text-sm py-2 px-3.5 flex-1 text-center justify-center"
                  aria-label={`View case study: ${project.title}`}
                >
                  <span>Case Study</span>
                  <ArrowRight size={15} />
                </a>
                {project.liveDemoId && (
                  <button
                    type="button"
                    onClick={() => onLaunchDemo(project.liveDemoId!)}
                    className="action-secondary text-sm py-2 px-3 inline-flex items-center gap-1.5"
                    title="Launch live interactive simulator"
                  >
                    <Play size={14} className="text-[var(--text-accent)]" />
                    <span>Demo</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CAREER TRAJECTORY & PROVEN PEDIGREE
          TheLadders proof: Recruiters scrutinize employer progression and stability.
          ========================================================================= */}
      <section id="section-about" aria-labelledby="career-summary-title" className="space-y-8">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <p className="section-eyebrow">Career Momentum</p>
            <h2 id="career-summary-title" className="section-title">
              Dual-Track Execution: Technical Architecture &amp; Team Leadership.
            </h2>
          </div>
          <a href="#/experience" className="action-secondary">
            Full career progression <ArrowRight size={17} />
          </a>
        </div>

        <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {PERSONAL_INFO.summary}
        </p>

        <ol className="grid md:grid-cols-3 gap-6">
          {WORK_EXPERIENCE.slice(0, 3).map(experience => (
            <li
              key={experience.id}
              className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--interactive-subtle-border)] transition-colors space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-[var(--text-tertiary)]">{experience.period}</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)]">
                  {experience.company}
                </span>
              </div>
              <h3 className="font-bold text-lg text-[var(--text-primary)]">{experience.role}</h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {experience.bulletPoints[0]}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* =========================================================================
          SECTION 6: SELECTED CREDENTIALS & INDUSTRY ACCREDITATIONS
          ========================================================================= */}
      <section aria-labelledby="credentials-title" className="space-y-8">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <p className="section-eyebrow">Professional Rigor</p>
            <h2 id="credentials-title" className="section-title">
              Verified Certifications &amp; Accreditations.
            </h2>
          </div>
          <a href="#/certifications" className="action-secondary">
            All credentials &amp; awards <ArrowRight size={17} />
          </a>
        </div>

        <ul className="grid md:grid-cols-3 gap-6">
          {LINKEDIN_CERTIFICATIONS.slice(0, 3).map(cert => (
            <li
              key={cert.id}
              className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2 hover:border-[var(--border-focus)] transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-[var(--text-tertiary)] font-mono">
                <span>{cert.issuer}</span>
                <span>{cert.issueDate}</span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">{cert.name}</h3>
              {cert.credentialId && (
                <p className="text-xs font-mono text-[var(--text-accent)] truncate">ID: {cert.credentialId}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* =========================================================================
          SECTION 7: SOCIAL PROOF & TESTIMONIALS
          ========================================================================= */}
      {LINKEDIN_TESTIMONIALS.length > 0 && (
        <section aria-labelledby="testimonials-title" className="space-y-8">
          <div>
            <p className="section-eyebrow">Social Proof</p>
            <h2 id="testimonials-title" className="section-title">
              What Senior Leaders &amp; Stakeholders Say.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {LINKEDIN_TESTIMONIALS.slice(0, 2).map(person => (
              <figure key={person.id} className="glass-card p-6 sm:p-8 space-y-5 border border-[var(--border-subtle)]">
                <blockquote className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] italic">
                  “{person.quote}”
                </blockquote>
                <figcaption className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-[var(--text-primary)] block">{person.name}</span>
                    <span className="text-[var(--text-tertiary)] block mt-0.5">
                      {person.role} · {person.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-accent)] px-2.5 py-1 rounded bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)]">
                    Verified
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 8: COLLAPSIBLE ARCHITECTURE MOTION SANDBOX
          ========================================================================= */}
      <details
        className="glass-card p-6 sm:p-8 border border-[var(--border-subtle)] transition-all"
        onToggle={event => setArchitectureOpen(event.currentTarget.open)}
      >
        <summary className="cursor-pointer text-lg font-bold min-h-11 flex items-center justify-between select-none">
          <span className="inline-flex items-center gap-2">
            <Play size={18} className="text-[var(--text-accent)]" />
            <span>Explore the Interactive Enterprise Architecture Sandbox (7 Live Simulators)</span>
          </span>
          <span className="text-xs font-mono text-[var(--text-accent)] uppercase">
            {architectureOpen ? 'Collapse [-]' : 'Expand [+]'}
          </span>
        </summary>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 mb-6 leading-relaxed">
          Interactive operational sandbox featuring live client-side simulators: 7-component statutory rebate ceiling
          engine (RM 0.20 cap), DOSH 5×5 HIRADC risk matrix, and 6-slice Domino-to-M365 migration telemetry.
        </p>
        {architectureOpen && (
          <Suspense fallback={<p role="status" className="text-sm font-mono text-[var(--text-accent)]">Loading architecture sandbox…</p>}>
            <ArchitectureMotionHero
              onSelectSlice={onOpenProjectDetail}
              onSelectProject={onOpenProjectDetail}
              onLaunchDemo={onLaunchDemo}
            />
          </Suspense>
        )}
      </details>

      {/* =========================================================================
          SECTION 9: CONVERSION & FRICTIONLESS CONTACT
          ========================================================================= */}
      <section
        id="section-contact"
        aria-labelledby="home-contact-title"
        className="glass-card p-6 sm:p-10 space-y-6 border border-[var(--interactive-subtle-border)] bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-canvas)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="section-eyebrow">Next Steps</p>
            <h2 id="home-contact-title" className="section-title">
              Let’s Discuss Your Modernization or Systems Roadmap.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1.5 max-w-2xl">
              Currently open to Principal Solution Architect, Modernization Lead, and Technical Engineering Director
              opportunities in Kuala Lumpur, Singapore, and remote across APAC.
            </p>
          </div>
          <a
            href="/assets/profile/Resume.pdf"
            download="Ali_Akhmad_Fauzie_Resume.pdf"
            className="action-secondary self-start sm:self-center shrink-0 text-sm font-semibold inline-flex items-center gap-2"
          >
            <Download size={16} />
            <span>Download CV (PDF)</span>
          </a>
        </div>
        <ContactActions />
      </section>
    </div>
  );
}
