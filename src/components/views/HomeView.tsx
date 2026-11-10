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
  Activity,
  Briefcase,
  ShieldAlert,
  Gamepad2,
  Scale,
  HeartHandshake,
  AlertTriangle,
  DoorOpen
} from 'lucide-react';
import {
  CORE_PROJECTS,
  PERSONAL_INFO,
  WORK_EXPERIENCE,
  LINKEDIN_CERTIFICATIONS,
  LINKEDIN_TESTIMONIALS,
  KEY_METRICS
} from '../../data/portfolioData';
import type { ProjectItem, MigrationSlice, ExperienceItem } from '../../types';
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
  onOpenDoorGate?: () => void;
}

export function HomeView({
  onOpenProjectDetail,
  onOpenResume,
  onLaunchDemo,
  activePersona = 'both',
  onPersonaChange,
  onOpenDoorGate,
}: HomeViewProps) {
  const [architectureOpen, setArchitectureOpen] = useState(false);

  // Dynamic curated flagship projects reordered based on active persona
  const featuredProjectIds = useMemo(() => {
    if (activePersona === 'operations') {
      return ['document-finder', 'tasek-cement-rebate', 'pulsetrack'];
    }
    if (activePersona === 'software') {
      return ['ioi-acidchem-she-platform', 'tasek-cement-rebate', 'document-finder'];
    }
    // Hybrid (Both Tracks): Top 3 Biggest Impact Flagships (Enterprise Architecture, FinOps & AI Operations)
    return ['ioi-acidchem-she-platform', 'tasek-cement-rebate', 'document-finder'];
  }, [activePersona]);

  // Dynamic empirical metrics based on active persona
  const activeMetrics = useMemo(() => {
    if (activePersona === 'operations') {
      return [
        { label: "CONTRACTUAL SLA", value: "98%+", subtext: "24/7 Multi-Shift Rotational Floor" },
        { label: "POLICY & QA ACCURACY", value: "96–99%", subtext: "Customer Service, Content & Ads Review" },
        { label: "AHT REDUCTION", value: "-25%", subtext: "Lean Six Sigma DMAIC Controls" },
        { label: "SQUAD SCALING", value: "34 Agents", subtext: "Malaysia · Indonesia · China · Korea · Japan · Thailand · Vietnam (<5% Attrition)" }
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
    // Hybrid (Both Tracks): 50% Enterprise Architecture + 50% Operations Leadership
    return [
      { label: "LICENSE AVOIDED", value: "$960K/yr", subtext: "Single MainDB Partitioning (Track 1)" },
      { label: "DATABASES RETIRED", value: "365+", subtext: "28 BUs · 7,878 Screens in CI (Track 1)" },
      { label: "CONTRACTUAL SLA", value: "98%+", subtext: "34 Multilingual Agents · 7 APAC Pods (Track 2)" },
      { label: "AHT REDUCTION", value: "-25%", subtext: "PulseTrack Telemetry · DMAIC Controls (Track 2)" }
    ];
  }, [activePersona]);

  const featuredProjects = featuredProjectIds
    .map(id => CORE_PROJECTS.find(p => p.id === id))
    .filter((p): p is ProjectItem => Boolean(p));

  // Fallback to top items if any specific ID is missing
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : CORE_PROJECTS.slice(0, 3);

  // Dynamic career experience cards reordered based on active persona
  const featuredExperiences = useMemo(() => {
    if (activePersona === 'operations') {
      return WORK_EXPERIENCE.filter(exp => exp.id !== 'exp-self-employed').slice(0, 3);
    }
    if (activePersona === 'both') {
      // Symmetrically prioritize Enterprise Solution Architect (IOI) + Operations Team Manager (Concentrix) + Senior Team Lead (Accenture)
      const hybridOrder = ['exp-ioi', 'exp-concentrix', 'exp-accenture-sr-lead'];
      const picked = hybridOrder.map(id => WORK_EXPERIENCE.find(e => e.id === id)).filter((e): e is ExperienceItem => Boolean(e));
      return picked.length === 3 ? picked : WORK_EXPERIENCE.slice(0, 3);
    }
    return WORK_EXPERIENCE.slice(0, 3);
  }, [activePersona]);

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-12">
      {/* =========================================================================
          SECTION 1: HERO & ABOVE-THE-FOLD REAL ESTATE (6-SECOND RECRUITER GATE)
          ========================================================================= */}
      <section 
        id="section-hero"
        aria-labelledby="home-title" 
        className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-start rounded-3xl p-4 sm:p-8 -mx-4 sm:-mx-8 overflow-hidden"
      >
        {/* Subtle Ambient Background Portrait Merge with Low Opacity & Seamless Dark Vignette */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 -left-16 sm:-left-8 lg:-left-28 w-[105%] lg:w-[85%] h-full">
            <img
              src="/assets/profile/hero-bg.webp"
              alt=""
              className="w-full h-full object-cover object-[10%_top] sm:object-[15%_top] lg:object-[18%_top] opacity-18 filter grayscale contrast-125 mix-blend-luminosity scale-105"
            />
          </div>
          {/* Multi-layered gradient & radial masks for seamless dark canvas color merging */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-canvas)]/50 via-[var(--bg-canvas)]/70 to-[var(--bg-canvas)] lg:from-transparent lg:via-[var(--bg-canvas)]/60 lg:to-[var(--bg-canvas)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-canvas)] via-transparent to-[var(--bg-canvas)]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,transparent_25%,var(--bg-canvas)_85%)]" />
        </div>
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
                  <span>Operations Leadership · 8+ Years BPO &amp; Contact Center · Customer Service, Content Moderation, Trust &amp; Safety, Ads &amp; Game Review</span>
                </>
              ) : (
                <>
                  <Sparkles size={14} className="text-purple-400 animate-pulse" />
                  <span>Dual-Track Executive: Enterprise Systems Architecture &amp; Operations Team Leadership</span>
                </>
              )}
            </div>

            {/* In-Page Quick Perspective Switcher */}
            {onPersonaChange && (
              <div
                className="inline-flex items-center p-1 rounded-full bg-[#0d1017]/90 border border-white/10 text-xs font-mono backdrop-blur-md shadow-sm touch-manipulation"
                role="group"
                aria-label="Tailor portfolio perspective"
              >
                <button
                  type="button"
                  onClick={() => onPersonaChange('software')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full min-h-[36px] transition-all cursor-pointer active:scale-95 touch-manipulation ${
                    activePersona === 'software'
                      ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Software Developer view"
                >
                  <Cpu size={13} />
                  <span>Developer</span>
                </button>

                <button
                  type="button"
                  onClick={() => onPersonaChange('operations')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full min-h-[36px] transition-all cursor-pointer active:scale-95 touch-manipulation ${
                    activePersona === 'operations'
                      ? 'bg-orange-500/25 text-orange-300 font-bold border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.3)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Operations Team Manager view"
                >
                  <Users size={13} />
                  <span>Operations</span>
                </button>

                <button
                  type="button"
                  onClick={() => onPersonaChange('both')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full min-h-[36px] transition-all cursor-pointer active:scale-95 touch-manipulation ${
                    activePersona === 'both'
                      ? 'bg-purple-500/25 text-purple-300 font-bold border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Unified Hybrid view"
                >
                  <Sparkles size={13} />
                  <span>All</span>
                </button>

                {onOpenDoorGate && (
                  <>
                    <span className="w-px h-3.5 bg-white/10 mx-0.5" />
                    <button
                      type="button"
                      onClick={onOpenDoorGate}
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
                      title="Experience 3D Cinematic Door Entrance Gate"
                    >
                      <DoorOpen size={12} className="text-amber-400" />
                      <span className="text-[11px] font-mono">Door Gate</span>
                    </button>
                  </>
                )}
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
              Architecting Mission-Critical Enterprise Systems &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-orange-400">
                Commanding High-Velocity Operations
              </span>{' '}
              Delivering $960K Savings &amp; 98%+ SLA.
            </h1>
          )}

          {/* Inverted Pyramid Value Proposition (Dynamic based on selected persona) */}
          {activePersona === 'software' ? (
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
              <strong className="text-[var(--text-primary)]">Enterprise Solutions Architect &amp; Full-Stack Engineer</strong> developing modern software systems since <strong className="text-cyan-400">2022</strong> across{' '}
              <strong className="text-[var(--text-primary)]">React 19</strong>,{' '}
              <strong className="text-[var(--text-primary)]">TypeScript</strong>,{' '}
              <strong className="text-[var(--text-primary)]">Power Platform</strong>, and{' '}
              <strong className="text-[var(--text-primary)]">Cloud Architecture</strong>. Built zero-downtime microservices,
              automated distributed ETL pipelines, and validated{' '}
              <strong className="text-cyan-400">7,878 resilient interfaces</strong> with sub-second latencies.
            </p>
          ) : activePersona === 'operations' ? (
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
              <strong className="text-[var(--text-primary)]">8+ years</strong> of BPO and contact center operations leadership, specializing in{' '}
              <strong className="text-orange-400">Customer Service</strong>,{' '}
              <strong className="text-orange-400">Content Moderation</strong>,{' '}
              <strong className="text-orange-400">Trust &amp; Safety</strong>,{' '}
              <strong className="text-orange-400">Ads Review</strong>, and{' '}
              <strong className="text-orange-400">Game Review</strong> across{' '}
              <strong className="text-[var(--text-primary)]">Concentrix CVG</strong> and{' '}
              <strong className="text-[var(--text-primary)]">Accenture</strong>. Scaled frontline squads from{' '}
              <strong className="text-[var(--text-primary)]">9 to 34 agents</strong> across 7 international markets, maintained{' '}
              <strong className="text-orange-400">98%+ contractual SLA adherence</strong>, saved{' '}
              <strong className="text-orange-400">120+ leadership hours weekly</strong> via PulseTrack &amp; SmartFlow telemetry, and executed Lean Six Sigma DMAIC frameworks to reduce AHT by 25% with &lt;5% staff attrition.
            </p>
          ) : (
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
              <strong className="text-[var(--text-primary)]">9+ years</strong> of total professional excellence (Operations Leadership since 2017 &amp; Software Engineering since <strong className="text-cyan-400">2022</strong>) across{' '}
              <strong className="text-[var(--text-primary)]">IOI Corporation</strong>,{' '}
              <strong className="text-[var(--text-primary)]">Concentrix CVG</strong>, and{' '}
              <strong className="text-[var(--text-primary)]">Accenture</strong>. Architected migrations retiring{' '}
              <strong className="text-cyan-400">365+ legacy databases</strong> saving{' '}
              <strong className="text-cyan-400">$960,000/year</strong> with 7,878 validated YAML screens under GAMP 5 compliance, while commanding{' '}
              <strong className="text-orange-400">34 direct reports</strong> across 7 APAC language pods in Trust &amp; Safety, Content Moderation, and Customer Support—sustaining{' '}
              <strong className="text-orange-400">&gt;98% contractual SLA adherence</strong> and cutting AHT by 25% via Six Sigma DMAIC.
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

          {/* Dual-Discipline Tools & Key Certifications Table (Bridging Operations & Software Engineering) */}
          <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-accent)] flex items-center gap-1.5">
                <Sparkles size={13} className="text-orange-400" />
                <span>Tool Stack &amp; Verified Certifications</span>
              </span>
              <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase">
                Unified: Operations &amp; Engineering
              </span>
            </div>

            {/* Clean Structured Table Format (Fluid Mobile Stacking & Desktop Tabular) */}
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-sm divide-y divide-[var(--border-subtle)]">
              {/* Row 1: Power Platform & Cloud */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="py-2.5 px-3.5 font-mono font-semibold text-xs text-orange-400 bg-orange-500/5 sm:w-44 shrink-0 sm:self-stretch flex items-center">
                  Power Platform &amp; Cloud
                </div>
                <div className="py-2.5 px-3.5 text-[var(--text-secondary)] flex-1">
                  <ul className="grid sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      <span><strong>Power Apps &amp; Automate:</strong> Canvas apps, flows &amp; RPA</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      <span><strong>Power BI &amp; Dataverse:</strong> DAX, KPI modeling &amp; telemetry</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      <span><strong>SharePoint Online:</strong> MainDB architecture &amp; lists</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      <span><strong>AI Builder:</strong> NLP SOPs &amp; automated routing</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Row 2: Pro-Code & Ops Telemetry */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="py-2.5 px-3.5 font-mono font-semibold text-xs text-cyan-400 bg-cyan-500/5 sm:w-44 shrink-0 sm:self-stretch flex items-center">
                  Pro-Code &amp; Ops Telemetry
                </div>
                <div className="py-2.5 px-3.5 text-[var(--text-secondary)] flex-1">
                  <ul className="grid sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span><strong>React 19 &amp; TypeScript:</strong> High-performance modern web</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span><strong>PulseTrack &amp; SmartFlow:</strong> Real-time queue telemetry</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span><strong>Python &amp; SQL / PL-SQL:</strong> Queue analytics &amp; scripts</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span><strong>Lark Open Platform:</strong> Webhook bots &amp; automation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Row 3: Verified Certifications */}
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="py-2.5 px-3.5 font-mono font-semibold text-xs text-emerald-400 bg-emerald-500/5 sm:w-44 shrink-0 sm:self-stretch flex items-center">
                  Verified Certifications
                </div>
                <div className="py-2.5 px-3.5 text-[var(--text-secondary)] flex-1">
                  <ul className="grid sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span><strong>Microsoft Certified:</strong> Power Platform &amp; Power BI</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span><strong>Lean Six Sigma:</strong> DMAIC Process Controls</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span><strong>2× Innovation Winner:</strong> Enterprise Competition</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span><strong>Accenture Diamond Award</strong> &amp; Hang Tuah Distinction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
              <p className="font-bold text-lg text-[var(--text-primary)]">{PERSONAL_INFO.name}</p>
              <p className="text-xs font-semibold text-[var(--text-accent)] uppercase tracking-wider mt-0.5">
                {activePersona === 'operations'
                  ? 'Operations Leader & Team Manager'
                  : activePersona === 'software'
                  ? 'Principal Solutions Architect'
                  : 'Enterprise Solution Architect & Operations Team Manager'}
              </p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">
                {activePersona === 'operations'
                  ? 'BPO Operations · Trust & Safety · Content Moderation'
                  : activePersona === 'software'
                  ? 'Full-Stack, Cloud & AI Architecture'
                  : 'Dual-Track: Enterprise Architecture & Frontline Operations Command'}
              </p>
              {activePersona === 'operations' && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                    Content Moderation
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                    Trust &amp; Safety
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                    Ads Review
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                    Game Review
                  </span>
                </div>
              )}
              {activePersona === 'both' && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                    M365 &amp; Power Platform
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                    React 19 &amp; TypeScript
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                    Operations Team Manager
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                    34 Agents · 7 APAC Pods
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                    Trust &amp; Safety / QA
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Dual / Quad Metric Anchor */}
          {activePersona === 'operations' ? (
            <dl className="grid grid-cols-2 gap-3 py-4 border-y border-[var(--border-subtle)]">
              <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-tertiary)] font-mono">
                  Squad Scaling
                </dt>
                <dd className="text-2xl font-extrabold text-orange-400 font-mono mt-0.5">
                  34 Agents
                </dd>
                <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                  Malaysia, Indonesia, China, Korea, Japan, Thailand, Vietnam (&lt;5% attrition)
                </p>
              </div>
              <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-tertiary)] font-mono">
                  SLA Delivery
                </dt>
                <dd className="text-2xl font-extrabold text-orange-400 font-mono mt-0.5">
                  &gt;98%
                </dd>
                <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                  24/7 rotational multi-shift floor
                </p>
              </div>
              <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-tertiary)] font-mono">
                  Policy QA Accuracy
                </dt>
                <dd className="text-2xl font-extrabold text-orange-400 font-mono mt-0.5">
                  96–99%
                </dd>
                <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                  Content, Ads &amp; Game review
                </p>
              </div>
              <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-tertiary)] font-mono">
                  AHT Reduction
                </dt>
                <dd className="text-2xl font-extrabold text-orange-400 font-mono mt-0.5">
                  -25%
                </dd>
                <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                  Lean Six Sigma DMAIC controls
                </p>
              </div>
            </dl>
          ) : activePersona === 'software' ? (
            <dl className="grid grid-cols-2 gap-4 py-4 border-y border-[var(--border-subtle)]">
              <div className="bg-[var(--bg-surface)] p-3.5 rounded-xl border border-[var(--border-subtle)]">
                <dt className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">
                  Databases Retired
                </dt>
                <dd className="text-3xl font-extrabold text-cyan-400 font-mono mt-1">
                  365+
                </dd>
                <p className="text-xs text-[var(--text-tertiary)] mt-1">
                  28 BUs (0h downtime)
                </p>
              </div>
              <div className="bg-[var(--bg-surface)] p-3.5 rounded-xl border border-[var(--border-subtle)]">
                <dt className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">
                  License Avoidance
                </dt>
                <dd className="text-3xl font-extrabold text-cyan-400 font-mono mt-1">
                  $960K/yr
                </dd>
                <p className="text-xs text-[var(--text-tertiary)] mt-1">
                  Single MainDB Architecture
                </p>
              </div>
            </dl>
          ) : (
            /* HYBRID BALANCED 4-METRIC GRID (2 Software Architecture + 2 Operations Leadership) */
            <dl className="grid grid-cols-2 gap-3 py-4 border-y border-[var(--border-subtle)]">
              <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-cyan-500/25">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-cyan-400 font-mono">
                  Track 01 · Software
                </dt>
                <dd className="text-2xl font-extrabold text-cyan-300 font-mono mt-0.5">
                  $960K/yr
                </dd>
                <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                  License Avoided (365+ DBs)
                </p>
              </div>
              <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-cyan-500/25">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-cyan-400 font-mono">
                  Track 01 · Systems
                </dt>
                <dd className="text-2xl font-extrabold text-cyan-300 font-mono mt-0.5">
                  7,878
                </dd>
                <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                  Screens in CI (GAMP 5)
                </p>
              </div>
              <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-orange-500/25">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-orange-400 font-mono">
                  Track 02 · Operations
                </dt>
                <dd className="text-2xl font-extrabold text-orange-400 font-mono mt-0.5">
                  34 Agents
                </dd>
                <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                  7 APAC Language Pods
                </p>
              </div>
              <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-orange-500/25">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-orange-400 font-mono">
                  Track 02 · Delivery
                </dt>
                <dd className="text-2xl font-extrabold text-orange-400 font-mono mt-0.5">
                  &gt;98%
                </dd>
                <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">
                  Contractual SLA Adherence
                </p>
              </div>
            </dl>
          )}

          {/* Main Roles & Responsibilities Section in Hero Aside */}
          {activePersona === 'operations' ? (
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-orange-500/25 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 font-mono">
                <Briefcase size={14} />
                <span>Main Roles &amp; Responsibilities</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Client WBR Quality Lead:</strong> Primary Weekly Business Review (WBR) representative for Quality directly with client executives, leading calibrations &amp; defect analysis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Innovation Team &amp; Tooling:</strong> Core member of the Innovation Team; Winner of the Enterprise Innovation Competition for 2 consecutive years respectively.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Floor &amp; Capacity Command:</strong> 24/7 queue telemetry, 90–95% schedule adherence, shrinkage control, and Sev-1 incident command.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Trust &amp; Safety Governance:</strong> Content moderation, commercial ads review, game community safety, and PII safeguarding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Tier-2 Escalations &amp; DoA:</strong> TikTok public-to-private de-escalation, 3-strike abuse enforcement, and $100–$150 DoA concessions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>People Leadership &amp; Coaching:</strong> Skill vs. Will silent shadowing, 14–30d SMART remediation plans, and weekly GROW 1-on-1s.</span>
                </li>
              </ul>
            </div>
          ) : activePersona === 'both' ? (
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-purple-500/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-purple-300 font-mono">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-purple-400" />
                  <span>Dual-Track Executive Architecture</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  Equal Focus
                </span>
              </div>
              <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                <div className="p-2.5 rounded-lg bg-[#0c121e] border border-cyan-500/20 space-y-1">
                  <p className="font-bold text-cyan-300 flex items-center gap-1.5 font-mono text-[11px]">
                    <Cpu size={12} />
                    <span>Track 1: Enterprise Architecture &amp; Modernization</span>
                  </p>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Architect of 365+ Domino migrations, $960K/yr license avoidance, GAMP 5 &amp; 21 CFR Part 11 ALCOA+ audit trails, and 7,878 Power Apps YAML screens in CI.
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#140c08] border border-orange-500/20 space-y-1">
                  <p className="font-bold text-orange-300 flex items-center gap-1.5 font-mono text-[11px]">
                    <Users size={12} />
                    <span>Track 2: Operations Management &amp; SLA Governance</span>
                  </p>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Operations Team Manager commanding 34 agents across 7 APAC language pods; QA Department lead, Trust &amp; Safety / Ads Review, and 2× Innovation Winner.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* Industry Accolades Badge (Tailored to Active Persona) */}
          <div className="p-4 rounded-xl bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-accent)]">
              <Award size={16} />
              <span>
                {activePersona === 'operations'
                  ? 'Operational Distinctions & Incident Command'
                  : activePersona === 'software'
                  ? 'Engineering Distinctions & Innovation Honors'
                  : 'Distinctions, Innovation & Incident Governance'}
              </span>
            </div>

            {activePersona === 'operations' ? (
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Recipient of the <strong>Hang Tuah Distinction</strong> and <strong>Accenture Diamond Award</strong> for
                stabilizing an <strong>800% queue surge in 48 hours</strong> during a regional platform crisis with zero associate burnout.
              </p>
            ) : activePersona === 'software' ? (
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Architect of <strong>365+ production database cutovers</strong> securing <strong>$960K/yr license avoidance</strong> with 0h downtime across 28 BUs; Winner of the <strong>Enterprise Innovation Award (2 Years Respectively)</strong> for automated workflow telemetry.
              </p>
            ) : (
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Recipient of the <strong>Hang Tuah Distinction</strong>, <strong>Accenture Diamond Award</strong>, and <strong>2× Enterprise Innovation Competition Winner</strong> across cloud telemetry and crisis incident stabilization.
              </p>
            )}

            {activePersona === 'operations' && (
              <div className="pt-2 border-t border-[var(--border-subtle)] space-y-1.5 text-xs text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <Sparkles size={14} className="text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Innovation Competition Winner (2 Years Respectively):</strong> Crowned consecutive back-to-back winner on the operational Innovation Team for automating frontline queue telemetry &amp; PulseTrack.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Weekly Business Review (WBR) Quality Representative:</strong> Trusted client-facing lead presenting calibration panels, QA variance triage, and contractual SLA health.</span>
                </div>
              </div>
            )}

            {activePersona === 'software' && (
              <div className="pt-2 border-t border-[var(--border-subtle)] space-y-1.5 text-xs text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Microsoft Official Certified:</strong> Power Platform Solution Architect &amp; Power BI Data Analyst Professional credentials.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>CI/CD AST Verification:</strong> Validated 7,878 Power Apps YAML screens with zero automated regression defects.</span>
                </div>
              </div>
            )}
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
        id="section-metrics"
        aria-labelledby="proof-ticker-title"
        className="glass-card p-4 sm:p-6 md:p-8 border border-[var(--border-subtle)] relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <p className="section-eyebrow">
              {activePersona === 'operations' ? 'Operational Performance & Delivery' : 'Empirical Track Record'}
            </p>
            <h2 id="proof-ticker-title" className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
              {activePersona === 'operations'
                ? 'Contact Center, Trust & Safety and Operational Metrics'
                : activePersona === 'software'
                ? 'Engineered Business & Architectural Impact'
                : 'Dual-Track Empirical Business & Operational Impact'}
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-accent)] bg-[var(--interactive-subtle-bg)] px-3 py-1.5 rounded-lg border border-[var(--interactive-subtle-border)] self-start sm:self-auto">
            100% Verifiable Deliverables
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-6">
          {activeMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="space-y-1.5 p-3.5 sm:p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] transition-colors"
            >
              <p className="text-xs font-mono font-medium tracking-wider uppercase text-[var(--text-tertiary)] truncate">
                {metric.label}
              </p>
              <p className="text-2xl sm:text-4xl font-black text-[var(--text-accent)] font-mono tracking-tight tabular-nums truncate">
                {metric.value}
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-snug line-clamp-2">{metric.subtext}</p>
            </div>
          ))}
        </div>

        {/* Operational Specialization Scope Matrix */}
        {activePersona === 'operations' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[var(--border-subtle)] mt-6">
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-orange-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 font-mono uppercase">
                <ShieldAlert size={15} />
                <span>Content Moderation</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                High-risk queue governance across hate speech, violence, NSFW, self-harm, and TikTok public-to-private de-escalation protocols.
              </p>
              <div className="text-[10px] font-mono text-orange-300 pt-1 border-t border-[var(--border-subtle)]">
                96–99% Policy Accuracy · Zero PII Leaks
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-orange-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 font-mono uppercase">
                <ShieldCheck size={15} />
                <span>Trust &amp; Safety &amp; Ads</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Commercial ad policy enforcement, advertiser fraud detection, deceptive claims review, and brand protection compliance.
              </p>
              <div className="text-[10px] font-mono text-orange-300 pt-1 border-t border-[var(--border-subtle)]">
                Sub-Second Decision SLA · &lt;1% Disputes
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-orange-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 font-mono uppercase">
                <Gamepad2 size={15} />
                <span>Game Review Safety</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In-game player conduct moderation, anti-cheat policy compliance, toxic behavior mitigation, and player community guidelines.
              </p>
              <div className="text-[10px] font-mono text-orange-300 pt-1 border-t border-[var(--border-subtle)]">
                Multi-Language APAC Pods · 24/7 Coverage
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-orange-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 font-mono uppercase">
                <Activity size={15} />
                <span>Client WBR &amp; Innovation</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Primary client-facing Weekly Business Review (WBR) Quality lead. Winner of the Enterprise Innovation Competition for 2 consecutive years respectively.
              </p>
              <div className="text-[10px] font-mono text-orange-300 pt-1 border-t border-[var(--border-subtle)]">
                2x Innovation Winner · WBR Governance
              </div>
            </div>
          </div>
        ) : activePersona === 'both' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[var(--border-subtle)] mt-6">
            {/* 1. Track 1 Enterprise Modernization */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-cyan-500/25 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 font-mono uppercase">
                    <ShieldCheck size={15} className="text-cyan-400 shrink-0" />
                    <span>Enterprise Modernization</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Track 1
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Retiring 365+ legacy Lotus Domino DBs into M365 without premium connector fees. GAMP 5 Cat 4 &amp; 21 CFR Part 11 ALCOA+ audit trails.
                </p>
              </div>
              <div className="text-[10px] font-mono text-cyan-300 pt-1 border-t border-[var(--border-subtle)]">
                $960K/yr Avoided · 0h Downtime
              </div>
            </div>

            {/* 2. Track 1 Full-Stack & AI Systems */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-cyan-500/25 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 font-mono uppercase">
                    <Cpu size={15} className="text-cyan-400 shrink-0" />
                    <span>Full-Stack &amp; AI Systems</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Track 1
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  React 19, TypeScript, and offline-first architectures. 0ms synchronous local hydration and automated multi-agent LLM reasoning gateways.
                </p>
              </div>
              <div className="text-[10px] font-mono text-cyan-300 pt-1 border-t border-[var(--border-subtle)]">
                Sub-Second Latency · 0% Hallucination
              </div>
            </div>

            {/* 3. Track 2 Operations Leadership & Floor Command */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-orange-500/25 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-300 font-mono uppercase">
                    <Users size={15} className="text-orange-400 shrink-0" />
                    <span>Floor Ops &amp; Squad Scale</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-300 border border-orange-500/30">
                    Track 2
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Commanding 34 direct reports across 7 APAC language pods. 24/7 rotational floor management, shrinkage control, and Sev-1 incident command.
                </p>
              </div>
              <div className="text-[10px] font-mono text-orange-300 pt-1 border-t border-[var(--border-subtle)]">
                &gt;98% Contractual SLA · &lt;5% Attrition
              </div>
            </div>

            {/* 4. Track 2 QA Department, Trust & Safety & WBR */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-orange-500/25 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-300 font-mono uppercase">
                    <Activity size={15} className="text-orange-400 shrink-0" />
                    <span>QA &amp; Trust &amp; Safety</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-300 border border-orange-500/30">
                    Track 2
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Hands-on QA Department auditing, client Weekly Business Reviews (WBRs), policy creation, and 2× Enterprise Innovation Winner.
                </p>
              </div>
              <div className="text-[10px] font-mono text-orange-300 pt-1 border-t border-[var(--border-subtle)]">
                96–99% Quality · 2× Innovation Winner
              </div>
            </div>
          </div>
        ) : null}
      </section>

      {/* =========================================================================
          SECTION 3: CORE COMPETENCY ARCHITECTURE (LAYER-CAKE STRUCTURE)
          Descriptive structural headers allowing recruiters to scan domain depth.
          ========================================================================= */}
      <section id="section-services" aria-labelledby="competency-architecture-title" className="space-y-8">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <p className="section-eyebrow">
              {activePersona === 'operations' ? 'Operational Methodology & Domain Mastery' : 'Core Competencies'}
            </p>
            <h2 id="competency-architecture-title" className="section-title">
              {activePersona === 'operations'
                ? 'The 4 Operational Pillars of High-Performance Leadership.'
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
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6 border border-orange-500/25 hover:border-orange-500/60 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Activity size={26} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400/80 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    Pillar 01
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Real-Time Floor Operations &amp; Capacity Command</h3>
                  <p className="text-xs text-orange-400 font-mono mt-0.5">Queue Telemetry · Shrinkage Control · Incident Triage</p>
                </div>

                {/* Sub-block 1: Main Roles and Responsibilities */}
                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                    <Briefcase size={12} />
                    <span>Main Roles &amp; Responsibilities</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Command 24/7 multi-shift rotational floor operations across 7 APAC language pods.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Govern real-time queue capacity, 90–95% schedule adherence, and shrinkage balancing.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Serve as Incident Commander during Sev-1/P1 platform outages and queue surges.</span>
                    </li>
                  </ul>
                </div>

                {/* Sub-block 2: Performance & Deliverables */}
                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                    <Award size={12} />
                    <span>Performance &amp; Empirical Results</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>98%+ Contractual SLA</strong> sustained across multi-shift rotational schedules.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>800% Queue Crisis Surge Recovered in 48 Hours</strong> without associate burnout (Diamond Award).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>120+ Leadership Hours Saved/wk</strong> &amp; 90% reduction in manual queue reporting via PulseTrack.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sub-block 3: Skills Applied (Indicate Skill After Performance) */}
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                  Skills &amp; Methodologies Applied:
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono text-orange-300">
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Real-Time Queue Telemetry</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">WFM Capacity Planning</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Schedule Adherence (90-95%)</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Shrinkage Balancing</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Sev-1 Incident Command</span>
                </div>
              </div>
            </div>

            {/* Operational Pillar 2 */}
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6 border border-orange-500/25 hover:border-orange-500/60 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <ShieldCheck size={26} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400/80 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    Pillar 02
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Customer Service, Content Moderation, Trust &amp; Safety, Ads &amp; Game Review</h3>
                  <p className="text-xs text-orange-400 font-mono mt-0.5">Policy Governance · PII De-escalation · Commercial DoA</p>
                </div>

                {/* Sub-block 1: Main Roles and Responsibilities */}
                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                    <Briefcase size={12} />
                    <span>Main Roles &amp; Responsibilities</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Govern high-volume Trust &amp; Safety queues: Customer Service, Content Moderation, commercial Ads review &amp; Game review safety.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Serve as primary Weekly Business Review (WBR) representative for Quality directly with client executives.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Command Tier-2 escalations: convert public TikTok comments into private DMs to protect customer PII.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Enforce strict 3-strike abuse boundaries and execute commercial resolutions ($100–$150 DoA).</span>
                    </li>
                  </ul>
                </div>

                {/* Sub-block 2: Performance & Deliverables */}
                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                    <Award size={12} />
                    <span>Performance &amp; Empirical Results</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>96–99% Policy &amp; QA Accuracy</strong> across Content Moderation, Ads &amp; Game Review.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>100% Client WBR Quality Alignment</strong> with zero escalation spills or SLA breaches.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>100% PII Confidentiality Compliance</strong> with zero viral PR spills during TikTok escalations.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>30–50% Faster Resolution</strong> and 40–60% less misclassification via AI Builder SOP routing.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sub-block 3: Skills Applied (Indicate Skill After Performance) */}
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                  Skills &amp; Methodologies Applied:
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono text-orange-300">
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Weekly Business Review (WBR)</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Client Quality Calibration</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Content Moderation</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Trust &amp; Safety Policy</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Ads Review &amp; Monetization</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Game Community Safety</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">PII Privacy Protocol</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Commercial DoA ($100-$150)</span>
                </div>
              </div>
            </div>

            {/* Operational Pillar 3 */}
            <div className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6 border border-orange-500/25 hover:border-orange-500/60 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Users size={26} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400/80 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    Pillar 03
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">People Leadership, Coaching &amp; Innovation Team</h3>
                  <p className="text-xs text-orange-400 font-mono mt-0.5">GROW Coaching · Innovation Competition Winner · DMAIC</p>
                </div>

                {/* Sub-block 1: Main Roles and Responsibilities */}
                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                    <Briefcase size={12} />
                    <span>Main Roles &amp; Responsibilities</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Scale frontline multilingual associates (scaled 9 to 34 agents across 7 APAC language pods).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Core member of the Innovation Team, driving internal tooling hackathons and automated queue telemetry.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Conduct silent side-by-side screen-shadowing to diagnose root causes: <strong>Skill vs. Will</strong>.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                      <span>Design 14–30d SMART action plans, weekly GROW 1-on-1s, and weekly cross-pod QA calibrations.</span>
                    </li>
                  </ul>
                </div>

                {/* Sub-block 2: Performance & Deliverables */}
                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                    <Award size={12} />
                    <span>Performance &amp; Empirical Results</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>Winner of Innovation Competition (2 Years Respectively)</strong> as part of the core Innovation Team.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>&lt;5% Annualized Attrition</strong> maintained across 34 associates (vs. 30%+ BPO average).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>90-Day Competency Raised from 78% to 94%</strong> through structured Nesting Academies.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>25% AHT Cut</strong> via Lean Six Sigma DMAIC workspace optimizations and macro libraries.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sub-block 3: Skills Applied (Indicate Skill After Performance) */}
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                  Skills &amp; Methodologies Applied:
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono text-orange-300">
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Innovation Team Leadership</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">PulseTrack Telemetry</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">GROW Coaching Framework</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Skill vs. Will Diagnostics</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">QA Calibration Variance Control</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Nesting Academy Design</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Lean Six Sigma DMAIC</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Associate Retention Strategy</span>
                </div>
              </div>
            </div>

            {/* =========================================================================
                Operational Pillar 4: The Standard · Policy Governance, Compliance & Platform Integrity
                (Alternative Operational Title: Trust, Safety & Regulatory Standards)
                Spans full 3 columns below Pillars 1, 2, and 3
                ========================================================================= */}
            <div className="md:col-span-3 glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-orange-500/35 hover:border-orange-500/60 transition-colors shadow-xl">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/35 flex items-center justify-center text-orange-400 shrink-0">
                      <Scale size={26} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30">
                          Pillar 04 · Specialized Domain
                        </span>
                        <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                          Trust, Safety &amp; Regulatory Standards
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        The Standard: Policy Governance, Compliance &amp; Platform Integrity
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-orange-400/90 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    Zero-Tolerance Quality · Risk Prevention
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-4xl">
                  Anchoring technical compliance, zero-tolerance quality gates, and brand risk prevention demanded across 
                  high-velocity Ads Review, Content Moderation, and Gaming Community ecosystems.
                </p>

                {/* 4 Specialized Pillar Components Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* 1. Policy Drift Control & Edge-Case Adjudication */}
                  <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-orange-500/25 space-y-2.5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-orange-300 font-mono uppercase">
                        <FileText size={15} className="text-orange-400 shrink-0" />
                        <span>1. Policy Drift &amp; Adjudication</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-white">Operational Reality:</strong> Guidelines evolve weekly (elections, local market legislation, scam vectors). Frontline reviewers develop inconsistent &ldquo;policy drift.&rdquo;
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-orange-300">Leadership Role:</strong> Chaired weekly calibrations with Legal &amp; QA. Acted as final floor adjudicator on gray-area cases, codifying precedent into living SOPs.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-orange-400/90 font-medium">
                      Zero Policy Divergence · Binding Precedent
                    </div>
                  </div>

                  {/* 2. Ads Integrity & Regulatory Compliance (Zero-Tolerance) */}
                  <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-orange-500/25 space-y-2.5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-orange-300 font-mono uppercase">
                        <ShieldAlert size={15} className="text-orange-400 shrink-0" />
                        <span>2. Ads Integrity &amp; Compliance</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-white">Operational Reality:</strong> Approving prohibited creatives (counterfeit goods, financial scams, predatory lending, illicit pharma) triggers regulatory sanctions &amp; chargebacks.
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-orange-300">Leadership Role:</strong> Enforced zero-tolerance thresholds on Fatal Compliance Errors. Audited high-risk ad verticals pre-flight with 100% verification before delivery.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-orange-400/90 font-medium">
                      Zero Fatal Errors · Regulatory Guardrails
                    </div>
                  </div>

                  {/* 3. Fraud Detection & Bad-Actor Evasion Tracking */}
                  <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-orange-500/25 space-y-2.5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-orange-300 font-mono uppercase">
                        <AlertTriangle size={15} className="text-orange-400 shrink-0" />
                        <span>3. Fraud &amp; Evasion Tracking</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-white">Operational Reality:</strong> Syndicated bad actors probe platform loopholes via URL cloaking, deliberate typography obfuscation, and stealth frame-switching.
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-orange-300">Leadership Role:</strong> Served as frontline escalation filter diagnosing exploit patterns; fed tactical telemetry directly to Product &amp; Engineering to harden automated filters.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-orange-400/90 font-medium">
                      Exploit Loop Closure · AI Filter Hardening
                    </div>
                  </div>

                  {/* 4. Reviewer Wellness & Psychological Safety */}
                  <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-orange-500/25 space-y-2.5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-orange-300 font-mono uppercase">
                        <HeartHandshake size={15} className="text-orange-400 shrink-0" />
                        <span>4. Reviewer Wellness &amp; Safety</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-white">Operational Reality:</strong> Continuous exposure to graphic/sensitive content causes cognitive fatigue and secondary trauma, directly correlating with review slips.
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-orange-300">Leadership Role:</strong> Capped graphic queue exposure to 2–4 hours/shift; instituted proactive 1-on-1 resilience checks and protected counseling aux codes with zero penalty.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-orange-400/90 font-medium">
                      &lt;5% Attrition · Shift Queue Rotation Caps
                    </div>
                  </div>
                </div>

                {/* Executive Operational Interview Narrative Quote Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/30 flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 shrink-0 mt-0.5">
                    <Award size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-orange-300 font-bold">
                      Executive Operational Leadership Philosophy
                    </p>
                    <blockquote className="text-xs sm:text-sm italic text-slate-200 leading-relaxed">
                      &ldquo;In Operations, managing SLA and AHT is only half the battle. If your team hits 100% SLA but approves fraudulent ads or violates platform safety guidelines, the operational cost is catastrophic. My fourth pillar is The Standard: building zero-tolerance policy adherence into the daily floor rhythm while actively protecting reviewer psychological safety from burnout.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Pillar 4 Skills & Methodologies Applied */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                  Skills &amp; Methodologies Applied:
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono text-orange-300">
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Policy Drift Calibration</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Fatal Compliance Auditing</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Trust &amp; Safety Governance</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Anti-Fraud Pattern Recognition</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">SOP Precedent Codification</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Gray-Area Adjudication</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Reviewer Wellness Protocols</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Secondary Trauma Mitigation</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Legal &amp; QA Calibration Syncs</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Zero-Tolerance Quality Gates</span>
                </div>
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
        {(activePersona === 'operations' || activePersona === 'both') && (
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
      <section id="section-work" aria-labelledby="selected-work-title" className="space-y-8">
        <div className="flex flex-wrap gap-4 justify-between items-end">
          <div>
            <p className="section-eyebrow">
              {activePersona === 'operations'
                ? 'Operational Solutions &amp; Telemetry'
                : activePersona === 'software'
                ? 'Curated Engineering Work'
                : 'Dual-Track Curated Flagship Work'}
            </p>
            <h2 id="selected-work-title" className="section-title">
              {activePersona === 'operations'
                ? 'Flagship Operational Solutions &amp; Floor Systems.'
                : activePersona === 'software'
                ? 'Problems Solved. Systems Delivered With Verifiable Impact.'
                : 'Highest-Impact Deliverables: Enterprise Architecture, FinOps & AI Operations.'}
            </h2>
          </div>
          <a href="#/projects" className="action-secondary">
            View all case studies &amp; slices <ArrowRight size={17} />
          </a>
        </div>

        {activePersona === 'both' && (
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-cyan-300 font-bold">Pillar 01 (Architecture):</span>
              <span className="text-[var(--text-secondary)]">IOI Oleo ($960K/yr Saved · 365+ DBs Decommissioned)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-emerald-300 font-bold">Pillar 02 (FinOps):</span>
              <span className="text-[var(--text-secondary)]">Tasek Cement (99% Faster · RM 0.20/t Cap &amp; ERP Sync)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span className="font-mono text-purple-300 font-bold">Pillar 03 (AI Operations):</span>
              <span className="text-[var(--text-secondary)]">DocFinder (70–90% Search Drop · 99% Accuracy)</span>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayProjects.map(project => (
            <article
              key={project.id}
              className="glass-card p-4 sm:p-6 flex flex-col justify-between gap-5 border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] transition-all duration-200"
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
                className="action-primary text-sm min-h-[44px] py-2 px-3.5 flex-1 text-center justify-center touch-manipulation"
                aria-label={`View case study: ${project.title}`}
              >
                <span>Case Study</span>
                <ArrowRight size={15} />
              </a>
              {project.liveDemoId && (
                <button
                  type="button"
                  onClick={() => onLaunchDemo(project.liveDemoId!)}
                  className="action-secondary text-sm min-h-[44px] py-2 px-3 inline-flex items-center gap-1.5 touch-manipulation"
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
            <p className="section-eyebrow">
              {activePersona === 'operations' ? 'Operations Leadership Pedigree' : 'Career Momentum'}
            </p>
            <h2 id="career-summary-title" className="section-title">
              {activePersona === 'operations'
                ? 'Operations Leadership & BPO Delivery Track Record.'
                : activePersona === 'software'
                ? 'Enterprise Software Engineering & Architecture Track.'
                : 'Dual-Track Execution: Technical Architecture & Team Leadership.'}
            </h2>
          </div>
          <a href="#/experience" className="action-secondary">
            Full career progression <ArrowRight size={17} />
          </a>
        </div>

        {activePersona === 'operations' ? (
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            A battle-tested Operations Leader and Team Manager with 8+ years directing high-volume BPO and contact center operations across Concentrix CVG and Accenture. Proven track record commanding multilingual squads up to 34 agents across 7 APAC markets, sustaining &gt;98% contractual SLA compliance, enforcing zero-tolerance Customer Service, Trust &amp; Safety, Content Moderation, and Ads Review policy standards, and pioneering automated queue telemetry that reduced AHT by 25% with &lt;5% annual attrition.
          </p>
        ) : activePersona === 'software' ? (
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            A results-driven Enterprise Solutions Architect and Full-Stack Engineer specializing in modernizing mission-critical legacy architectures to modern cloud platforms (React 19, TypeScript, Cloud Functions, Power Platform). Proven track record delivering zero-downtime cutovers across 365+ production applications, automated CI/CD code verification pipelines, and AI-driven automation workflows.
          </p>
        ) : (
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            A battle-tested Enterprise Solutions Architect and Operations Leader with 9+ years of professional delivery—commanding high-volume BPO operations since 2017 and engineering modern software architectures since 2022 across IOI Corporation, Concentrix CVG, and Accenture. Proven track record retiring 365+ legacy databases saving $960,000/year under GAMP 5 compliance, while commanding 34 direct reports across 7 APAC language pods in Trust &amp; Safety, Content Moderation, and Customer Support—sustaining &gt;98% contractual SLA compliance, leading the QA Department, and cutting AHT by 25% via Six Sigma DMAIC.
          </p>
        )}

        <ol className="grid md:grid-cols-3 gap-6">
          {featuredExperiences.map(experience => (
            <li
              key={experience.id}
              className="p-4 sm:p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--interactive-subtle-border)] transition-colors space-y-3"
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
      <section id="section-credentials" aria-labelledby="credentials-title" className="space-y-8">
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
        <section id="section-testimonials" aria-labelledby="testimonials-title" className="space-y-8">
          <div>
            <p className="section-eyebrow">Social Proof</p>
            <h2 id="testimonials-title" className="section-title">
              What Senior Leaders &amp; Stakeholders Say.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LINKEDIN_TESTIMONIALS.slice(0, 3).map(person => (
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
              {activePersona === 'operations'
                ? 'Let’s Discuss Your Operations Delivery &amp; Floor Leadership Needs.'
                : activePersona === 'software'
                ? 'Let’s Discuss Your Modernization &amp; Enterprise Systems Roadmap.'
                : 'Let’s Discuss Your Enterprise Architecture &amp; Operations Delivery Needs.'}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1.5 max-w-2xl">
              {activePersona === 'operations'
                ? 'Currently open to Operations Team Manager, BPO Operations Lead, and Service Delivery Director opportunities across Kuala Lumpur, Singapore, and regional APAC.'
                : activePersona === 'software'
                ? 'Currently open to Principal Solution Architect, Modernization Lead, and Technical Engineering Director opportunities in Kuala Lumpur, Singapore, and remote across APAC.'
                : 'Currently open to Enterprise Solution Architect, Operations Team Manager, and Director of Solutions &amp; Service Delivery opportunities in Kuala Lumpur, Singapore, and remote across APAC.'}
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
