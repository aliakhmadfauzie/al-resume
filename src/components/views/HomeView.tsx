import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  CORE_PROJECTS,
  MIGRATION_SLICES,
  PERSONAL_INFO,
  LINKEDIN_CERTIFICATIONS,
  LINKEDIN_HONORS_AWARDS,
  LINKEDIN_TESTIMONIALS
} from '../../data/portfolioData';
import { NavTab, ProjectItem, MigrationSlice } from '../../types';
import { ProjectCardGalleryPreview } from '../ProjectGallery';
import { ArchitectureMotionHero } from '../ArchitectureMotionHero';
import {
  ArrowRight,
  Download,
  Database,
  Workflow,
  Sparkles,
  Layers,
  Terminal,
  Gauge,
  Rocket,
  Code2,
  Users,
  Trophy,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Briefcase,
  ShieldCheck,
  Zap,
  MonitorPlay,
  Award,
  ExternalLink,
  Linkedin
} from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenProjectDetail: (item: ProjectItem | MigrationSlice) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onLaunchDemo: (demoId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenProjectDetail,
  onOpenResume,
  onLaunchDemo
}) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);
  const [certCategory, setCertCategory] = useState<string>('All');
  const [testimonialPage, setTestimonialPage] = useState<number>(0);

  const handleInlineContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    confetti({
      particleCount: 65,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  // Top 3 flagship projects matching the 3-card Featured Projects layout in the reference design
  const featuredProjects = CORE_PROJECTS.slice(0, 3);

  const certCategories = [
    'All',
    'Power Platform',
    'AI & Copilot',
    'Data & Analytics',
    'Project & Process',
    'Enterprise Automation'
  ];

  const filteredCerts =
    certCategory === 'All'
      ? LINKEDIN_CERTIFICATIONS
      : LINKEDIN_CERTIFICATIONS.filter((c) => c.category === certCategory);

  const visibleTestimonials = LINKEDIN_TESTIMONIALS.slice(
    testimonialPage * 3,
    testimonialPage * 3 + 3
  );

  return (
    <div className="space-y-10 py-4">
      {/* ====================================================================
          1. HERO SECTION (Left Developer Identity + Right Telemetry Bento)
         ==================================================================== */}
      <section className="relative pt-2 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (5 cols): Editorial Developer Identity */}
          <div className="lg:col-span-5 space-y-6">
            {/* Kicker with Copper-Orange Line & Dot */}
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-accent)] font-semibold">
                ENTERPRISE SOLUTION ARCHITECT
              </span>
              <span className="h-[1px] w-12 bg-[var(--interactive-primary)]/60 relative flex items-center justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--interactive-primary)] shadow-[0_0_8px_#f97316]" />
              </span>
            </div>

            {/* Stacked Two-Line Display Name with Trailing Underscore */}
            <h1 className="font-extrabold tracking-tight leading-[0.98] uppercase select-none">
              <span className="block text-4xl sm:text-5xl xl:text-6xl text-[var(--text-primary)]">
                ALI AKHMAD
              </span>
              <span className="block text-4xl sm:text-5xl xl:text-6xl bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b] bg-clip-text text-transparent mt-1">
                FAUZIE_
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-md">
              I build scalable enterprise modernizations, governed Power Platform ecosystems, and deterministic AI systems with clean architecture.
            </p>

            {/* Outlined Tech Stack Boxes */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                'Power Platform',
                'Dataverse',
                'SharePoint MainDB',
                'TypeScript',
                'React 19',
                'Python AI'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-[var(--radius-sm)] bg-[#13151c] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.button
                id="hero-btn-view-work"
                type="button"
                onClick={() => onSelectTab('projects')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-[var(--radius-sm)] bg-gradient-to-r from-[#f97316] to-[#fb923c] hover:from-[#fb923c] hover:to-[#f97316] text-[#090a0d] text-xs sm:text-sm font-bold shadow-[0_6px_24px_rgba(249,115,22,0.35)] transition-all whitespace-nowrap cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                id="hero-btn-download-cv"
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-[var(--radius-sm)] bg-[#13151c] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] text-xs sm:text-sm font-medium border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 text-[var(--text-accent)]" />
              </motion.button>
            </div>

            {/* Green Availability Status Line + LinkedIn Handle */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[var(--text-tertiary)] pt-1">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
                <span>Available for enterprise architecture &amp; full-time opportunities</span>
              </div>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 font-mono text-[var(--text-accent)] hover:underline"
              >
                <span>in/aliakhmadf</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): Code Editor, Terminal, System Overview & Donut Gauge */}
          <div className="lg:col-span-7">
            <ArchitectureMotionHero
              onSelectSlice={(slice) => onOpenProjectDetail(slice)}
              onSelectProject={(proj) => onOpenProjectDetail(proj)}
              onLaunchDemo={onLaunchDemo}
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. BENTO ROW: // ABOUT ME (Symmetrical Executive Layout) + // SERVICES
         ==================================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT CARD: // ABOUT ME */}
        <div
          id="section-about"
          className="lg:col-span-12 xl:col-span-6 rounded-2xl surface-glass-1 border border-white/10 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Ambient Studio Glow in Corner */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Bar */}
          <div className="flex items-center justify-between relative z-10 border-b border-white/[0.06] pb-3.5">
            <div className="flex items-center space-x-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500 shadow-[0_0_8px_#f97316]" />
              </span>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">
                // ABOUT ME
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-[10px] font-mono font-semibold text-orange-400">
              Enterprise Solutions Architect
            </span>
          </div>

          {/* Main Content Area: Studio Portrait + Bio */}
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center relative z-10">
            {/* Studio Portrait Frame */}
            <div className="relative w-28 h-36 sm:w-36 sm:h-44 shrink-0 rounded-xl bg-[#0c0d12] border border-orange-500/30 overflow-hidden shadow-xl group/frame">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-center group-hover/frame:scale-105 transition-transform duration-500"
              />
              {/* Studio Copper-Orange Rim Light & Bottom Vignette Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(12,13,18,0.2) 0%, rgba(12,13,18,0.1) 45%, rgba(12,13,18,0.85) 100%), radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.28) 0%, transparent 60%)'
                }}
              />
              {/* Top Status Tag with Radar Pulse */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono text-white z-10">
                <span className="px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300">
                  in/aliakhmadf
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
                </span>
              </div>
              {/* Bottom Label */}
              <div className="absolute bottom-2 left-2 right-2 p-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-center z-10">
                <div className="text-[10px] font-bold text-white leading-tight">Ali Akhmad Fauzie</div>
                <div className="text-[8px] font-mono text-orange-400">Pre-Sales &amp; Architect</div>
              </div>
            </div>

            {/* Headline & Bio */}
            <div className="space-y-2 flex-1">
              <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                Architecting Enterprise Systems That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                  Scale.
                </span>
              </h2>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                I&apos;m Ali Akhmad Fauzie, an Enterprise Solutions Architect &amp; Pre-Sales Lead and former Operations Team Leader (Concentrix &amp; Accenture). I specialize in zero-downtime legacy Lotus Domino migrations to Microsoft 365, Dataverse enterprise architectures, and deterministic AI automation.
              </p>
            </div>
          </div>

          {/* 4 Strategic Capability Chips (2x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 relative z-10">
            <div className="p-2.5 rounded-lg bg-[#11131c]/80 border border-white/[0.07] hover:border-orange-500/30 transition-colors flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.12)]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">9+ Years Leadership</div>
                <div className="text-[10px] text-zinc-400 font-mono">Enterprise &amp; BPO Operations</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#11131c]/80 border border-white/[0.07] hover:border-emerald-500/30 transition-colors flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.12)]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">365+ DBs Modernized</div>
                <div className="text-[10px] text-zinc-400 font-mono">Lotus Domino to M365</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#11131c]/80 border border-white/[0.07] hover:border-amber-500/30 transition-colors flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.12)]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">12 Verified Credentials</div>
                <div className="text-[10px] text-zinc-400 font-mono">Microsoft, Lark &amp; Six Sigma</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#11131c]/80 border border-white/[0.07] hover:border-orange-500/30 transition-colors flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.12)]">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">$960K+/yr Saved</div>
                <div className="text-[10px] text-zinc-400 font-mono">Standard M365 Sharding</div>
              </div>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="pt-2 flex flex-wrap items-center gap-3 relative z-10 border-t border-white/[0.06]">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTab('experience')}
              className="inline-flex items-center space-x-2 px-5 py-2.5 min-h-[42px] rounded-lg bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#fb923c] hover:to-[#f97316] text-[#090a0d] text-xs font-bold shadow-[0_4px_18px_rgba(249,115,22,0.32)] transition-all cursor-pointer group"
            >
              <span>Explore Career Track</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 px-4 py-2.5 min-h-[42px] rounded-lg bg-[#12141d]/90 hover:bg-[#1a1d2b] text-xs font-medium text-zinc-200 hover:text-orange-400 border border-white/10 hover:border-orange-500/30 transition-colors shadow-sm"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </motion.a>
          </div>
        </div>

        {/* RIGHT CARD: // SERVICES (Balanced 6-Card Grid) */}
        <div
          id="section-services"
          className="lg:col-span-12 xl:col-span-6 rounded-2xl surface-glass-1 border border-white/10 p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Bar */}
          <div className="flex items-center justify-between relative z-10 border-b border-white/[0.06] pb-3.5">
            <div className="flex items-center space-x-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500 shadow-[0_0_8px_#f97316]" />
              </span>
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">
                // ARCHITECTURE &amp; DELIVERY SERVICES
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">
              6 Core Disciplines
            </span>
          </div>

          {/* 6 Services Grid: 2 rows of 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 flex-1 relative z-10">
            {[
              {
                icon: <Database className="w-4 h-4 text-orange-400" />,
                badge: '365+ DBs',
                title: 'Legacy Domino Migration',
                desc: 'Zero-downtime retirement of 365+ Lotus Notes DBs into governed M365 & SharePoint MainDB.'
              },
              {
                icon: <Layers className="w-4 h-4 text-orange-400" />,
                badge: '878+ Screens',
                title: 'Power Platform Apps',
                desc: '878+ Canvas YAML screens & Model-Driven apps with custom React PCF extensions.'
              },
              {
                icon: <Workflow className="w-4 h-4 text-orange-400" />,
                badge: 'Enterprise ERP',
                title: 'Dataverse & ERP Design',
                desc: 'Isolated financial approval schemas, statutory rebate engines, and 4-pocket ledgers.'
              },
              {
                icon: <Sparkles className="w-4 h-4 text-orange-400" />,
                badge: 'Tri-Engine',
                title: 'Deterministic AI & NLP',
                desc: 'Tri-Engine AI routers (Gemini, Groq, AI Builder) with regex SSOT firewalls.'
              },
              {
                icon: <Terminal className="w-4 h-4 text-orange-400" />,
                badge: 'CI/CD ALM',
                title: 'ALM & DevOps Pipelines',
                desc: 'PAC CLI automation, Python AST YAML linters, Docker, and GitHub Actions CI/CD.'
              },
              {
                icon: <Gauge className="w-4 h-4 text-orange-400" />,
                badge: '$960K Saved',
                title: 'FinOps & Optimization',
                desc: 'Standard-connector sharding saving $960K+/yr and cutting 14d cycles to 15 mins.'
              }
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="service-card rounded-xl p-3.5 flex flex-col justify-between group cursor-default relative overflow-hidden bg-[#10121a]/90 border border-white/[0.07] hover:border-orange-500/40 hover:bg-[#161824] transition-all shadow-sm"
              >
                {/* Ambient hover sheen */}
                <div className="absolute -top-12 -right-12 w-20 h-20 bg-orange-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.12)] group-hover:scale-105 group-hover:border-orange-500/40 transition-all">
                      {srv.icon}
                    </div>
                    <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#1b1d28]/90 text-orange-400 border border-white/10 group-hover:border-orange-500/30 transition-colors">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition-colors tracking-tight leading-snug mb-1">
                    {srv.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[11px] text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors line-clamp-3 mt-1">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. // TECH STACK (5-Column Categorized Icon Showcase)
         ==================================================================== */}
      <section
        id="section-stack"
        className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 space-y-5 shadow-[var(--shadow-card)]"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-[var(--text-accent)] font-semibold tracking-wider uppercase">
            // TECH STACK
          </p>
          <button
            type="button"
            onClick={() => onSelectTab('skills')}
            className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-accent)] inline-flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <span>Full Competency Matrix</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:divide-x lg:divide-[var(--border-subtle)]">
          {[
            {
              category: 'Power Platform',
              items: [
                { badge: 'PA', color: '#f97316', name: 'Power Apps' },
                { badge: 'FL', color: '#38bdf8', name: 'Automate' },
                { badge: 'DV', color: '#4ade80', name: 'Dataverse' },
                { badge: 'AI', color: '#c084fc', name: 'AI Builder' }
              ]
            },
            {
              category: 'Frontend',
              items: [
                { badge: 'TS', color: '#3b82f6', name: 'TypeScript' },
                { badge: '⚛', color: '#22d3ee', name: 'React 19' },
                { badge: 'NX', color: '#f8fafc', name: 'Next.js' },
                { badge: 'TW', color: '#38bdf8', name: 'Tailwind' }
              ]
            },
            {
              category: 'Backend & AI',
              items: [
                { badge: 'PY', color: '#fbbf24', name: 'Python 3' },
                { badge: 'FA', color: '#34d399', name: 'FastAPI' },
                { badge: 'ND', color: '#4ade80', name: 'Node.js' },
                { badge: 'GM', color: '#fb923c', name: 'Gemini / Groq' }
              ]
            },
            {
              category: 'Database & ERP',
              items: [
                { badge: 'SP', color: '#38bdf8', name: 'MainDB Lists' },
                { badge: 'PG', color: '#60a5fa', name: 'PostgreSQL' },
                { badge: 'FS', color: '#fbbf24', name: 'Firestore' },
                { badge: 'SAP', color: '#fb923c', name: 'SAP / Domino' }
              ]
            },
            {
              category: 'Tools & DevOps',
              items: [
                { badge: 'GIT', color: '#f97316', name: 'Git / CI-CD' },
                { badge: 'DK', color: '#38bdf8', name: 'Docker' },
                { badge: 'PW', color: '#4ade80', name: 'Playwright' },
                { badge: 'PAC', color: '#fb923c', name: 'PAC CLI' }
              ]
            }
          ].map((col, idx) => (
            <div key={col.category} className={idx > 0 ? 'lg:pl-6 space-y-3' : 'space-y-3'}>
              <h3 className="text-xs font-medium text-[var(--text-secondary)]">
                {col.category}
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {col.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center text-center space-y-1.5 group"
                  >
                    <div
                      className="w-10 h-10 rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)] group-hover:border-[var(--interactive-subtle-border)] flex items-center justify-center font-mono text-xs font-bold transition-colors"
                      style={{ color: tech.color }}
                    >
                      {tech.badge}
                    </div>
                    <span className="text-[10px] text-[var(--text-secondary)] truncate w-full">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          4. // FEATURED PROJECTS (3-Column Showcase + 6 Migration Slices Strip)
         ==================================================================== */}
      <section className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 space-y-6 shadow-[var(--shadow-card)]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-mono text-[var(--text-accent)] font-semibold tracking-wider uppercase">
            // FEATURED PROJECTS
          </p>
          <button
            type="button"
            onClick={() => onSelectTab('projects')}
            className="text-xs font-semibold text-[var(--text-accent)] hover:underline inline-flex items-center space-x-1 cursor-pointer"
          >
            <span>View All {CORE_PROJECTS.length} Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3-Column Featured Case Studies Matching Reference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.16 }}
              onClick={() => onOpenProjectDetail(proj)}
              className="rounded-[var(--radius-md)] bg-[#0f1117] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] overflow-hidden flex flex-col justify-between cursor-pointer group transition-colors"
            >
              <div className="p-4 space-y-4">
                {/* Browser Frame Preview */}
                <ProjectCardGalleryPreview item={proj} />

                {/* Title + Right Orange Pill Tag */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--text-accent)] transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] text-[10px] font-mono text-[var(--text-accent)] shrink-0">
                    {proj.impactMetrics?.[0]
                      ? `${proj.impactMetrics[0].value} ${proj.impactMetrics[0].label}`
                      : proj.category}
                  </span>
                </div>

                {/* Concise Problem/Solution Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  {proj.problem}
                </p>

                {/* Outlined Tech Stack Boxes */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-[#161822] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-secondary)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: View Case Study + Run Simulator */}
              <div className="px-4 py-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--text-accent)] inline-flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                {proj.liveDemoId && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onLaunchDemo(proj.liveDemoId!);
                    }}
                    className="inline-flex items-center space-x-1 text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-accent)] cursor-pointer"
                  >
                    <MonitorPlay className="w-3.5 h-3.5 text-[var(--text-accent)]" />
                    <span>Simulator</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6 IOI Domino-to-Dataverse Migration Slices Sub-Bar */}
        <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-[var(--text-secondary)]">
              // FLAGSHIP 365+ DOMINO CUTOVER SLICES (CLICK ANY SLICE TO INSPECT SPEC)
            </span>
            <span className="text-[var(--text-accent)]">878 Canvas Screens · $960K/yr Saved</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {MIGRATION_SLICES.map((slice) => (
              <button
                key={slice.id}
                type="button"
                onClick={() => onOpenProjectDetail(slice)}
                className="p-3 rounded-[var(--radius-sm)] bg-[#0f1117] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[var(--text-accent)] font-bold">
                    Slice {slice.letter}
                  </span>
                  <span className="text-[var(--text-tertiary)]">{slice.appCount} Apps</span>
                </div>
                <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-accent)] line-clamp-2 leading-snug mt-1">
                  {slice.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. FULL-WIDTH COPPER-ORANGE BORDERED KPI BANNER (4 Columns)
         ==================================================================== */}
      <section className="rounded-[var(--radius-lg)] bg-gradient-to-r from-[#161311] via-[#13151c] to-[#161311] border border-[var(--interactive-subtle-border)] shadow-[0_0_30px_rgba(249,115,22,0.12)] p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-[var(--border-subtle)]">
          {[
            {
              icon: <Rocket className="w-6 h-6 text-[var(--interactive-primary)]" />,
              value: '365+',
              label: 'Legacy Apps Modernized'
            },
            {
              icon: <Code2 className="w-6 h-6 text-[var(--interactive-primary)]" />,
              value: '9+',
              label: 'Years Experience'
            },
            {
              icon: <Award className="w-6 h-6 text-[var(--interactive-primary)]" />,
              value: '12',
              label: 'LinkedIn & MS Certifications'
            },
            {
              icon: <Trophy className="w-6 h-6 text-[var(--interactive-primary)]" />,
              value: '98%+',
              label: 'SLA & Audit Compliance'
            }
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-center justify-center space-x-4 ${
                idx > 0 ? 'lg:pl-6' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[#1b1613] border border-[var(--interactive-subtle-border)] flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-accent)]">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          5B. // LICENSES, CERTIFICATIONS & HONORS (From LinkedIn in/aliakhmadf)
         ==================================================================== */}
      <section
        id="section-certifications"
        className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 space-y-6 shadow-[var(--shadow-card)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div className="space-y-1">
            <p className="text-xs font-mono text-[var(--text-accent)] font-semibold tracking-wider uppercase">
              // LICENSES, CERTIFICATIONS &amp; HONORS
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
              Verified LinkedIn Credentials &amp; Executive Awards
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => onSelectTab('certifications')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-[var(--radius-sm)] bg-gradient-to-r from-[#f97316] to-[#fb923c] text-[#090a0d] text-xs font-bold shadow-[0_4px_16px_rgba(249,115,22,0.25)] transition-all cursor-pointer"
            >
              <span>Open Masonry Credential Vault</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-[var(--radius-sm)] bg-[#0f1117] hover:bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] text-xs font-mono text-[var(--text-accent)] transition-colors"
            >
              <span>Verify on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {certCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCertCategory(cat)}
              className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono transition-colors cursor-pointer ${
                certCategory === cat
                  ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold'
                  : 'bg-[#0f1117] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {cat === 'All' ? `All (${LINKEDIN_CERTIFICATIONS.length})` : cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-[var(--radius-md)] bg-[#0f1117] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] p-4 flex flex-col justify-between space-y-3 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[#1b1613] border border-[var(--interactive-subtle-border)] flex items-center justify-center text-[var(--interactive-primary)] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#161822] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-accent)]">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-snug">
                  {cert.name}
                </h3>
                <p className="text-[11px] text-[var(--text-secondary)] font-mono">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[var(--text-tertiary)] truncate pr-2">
                  {cert.skills.slice(0, 2).join(' · ')}
                </span>
                <span className="text-[#22c55e] shrink-0">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honors & Awards Sub-Row */}
        <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-secondary)] uppercase">
              // HONORS &amp; ACADEMIC AWARDS (LINKEDIN VERIFIED)
            </span>
            <span className="text-xs font-mono text-[var(--text-accent)]">
              Accenture &amp; Universiti Utara Malaysia (UUM)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {LINKEDIN_HONORS_AWARDS.map((award) => (
              <div
                key={award.id}
                className="rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)] p-3.5 space-y-1.5"
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[var(--text-accent)] font-bold flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-[var(--interactive-primary)]" />
                    <span>{award.issuer}</span>
                  </span>
                  <span className="text-[var(--text-tertiary)]">{award.year}</span>
                </div>
                <div className="text-xs font-bold text-[var(--text-primary)] leading-snug">
                  {award.title}
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. // CLIENTS & STAKEHOLDERS SAY (Real LinkedIn & Executive Testimonials)
         ==================================================================== */}
      <section className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 space-y-6 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-[var(--text-accent)] font-semibold tracking-wider uppercase">
            // CLIENTS &amp; STAKEHOLDERS SAY
          </p>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setTestimonialPage(0)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                testimonialPage === 0
                  ? 'bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)]'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
              }`}
            >
              01
            </button>
            <button
              type="button"
              onClick={() => setTestimonialPage(1)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                testimonialPage === 1
                  ? 'bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)]'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
              }`}
            >
              02
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-[var(--radius-md)] bg-[#0f1117] border border-[var(--border-subtle)] p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-[var(--interactive-primary)] leading-none block">
                    &ldquo;
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#161822] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-accent)]">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-[var(--border-subtle)]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-9 h-9 rounded-full object-cover border border-[var(--interactive-subtle-border)] shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[var(--text-primary)] truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[var(--text-tertiary)] truncate">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Carousel Indicator Dots Matching Reference */}
        <div className="flex items-center justify-center space-x-2 pt-1">
          {[0, 1].map((pageIdx) => (
            <button
              key={pageIdx}
              type="button"
              aria-label={`Show testimonial page ${pageIdx + 1}`}
              onClick={() => setTestimonialPage(pageIdx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                testimonialPage === pageIdx
                  ? 'w-6 bg-[var(--interactive-primary)]'
                  : 'w-2 bg-[var(--border-subtle)] hover:bg-[var(--text-tertiary)]'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ====================================================================
          7. // LET'S BUILD SOMETHING GREAT (Inline Contact + 3D Wireframe Cube)
         ==================================================================== */}
      <section
        id="section-contact"
        className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 shadow-[var(--shadow-card)] relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (4 cols): Contact Copy & Direct Channels */}
          <div className="lg:col-span-4 space-y-5">
            <p className="text-xs font-mono text-[var(--text-accent)] font-semibold tracking-wider uppercase">
              // LET&apos;S BUILD SOMETHING GREAT
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight">
              Have a project in mind? Let&apos;s bring your ideas to life.
            </h2>

            <div className="space-y-3 pt-2 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[var(--interactive-primary)] shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-[var(--text-accent)] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[var(--interactive-primary)] shrink-0" />
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[var(--interactive-primary)] shrink-0" />
                <span>Kuala Lumpur, MY · Bandung, ID</span>
              </div>
            </div>
          </div>

          {/* Center Column (5 cols): Inline Contact Form */}
          <div className="lg:col-span-5">
            {contactSent ? (
              <div className="p-6 rounded-[var(--radius-md)] bg-[#0f1117] border border-[var(--interactive-subtle-border)] text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[var(--interactive-primary)] mx-auto" />
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  Message Dispatched
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Thank you, {contactName || 'partner'}. Ali will respond to your inquiry within 4–12 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactSent(false);
                    setContactName('');
                    setContactEmail('');
                    setContactSubject('');
                    setContactMessage('');
                  }}
                  className="px-4 py-2 rounded-[var(--radius-sm)] bg-[var(--interactive-subtle-bg)] text-xs font-mono text-[var(--text-accent)] border border-[var(--interactive-subtle-border)]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleInlineContactSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Name"
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none"
                  />
                </div>
                <input
                  type="text"
                  required
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  placeholder="Subject (e.g. Domino Migration, Power Platform Architecture, AI Pipeline)"
                  className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none"
                />
                <textarea
                  rows={4}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Message"
                  className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-[var(--radius-sm)] bg-[#1b1613] hover:bg-[var(--interactive-primary)] text-[var(--text-accent)] hover:text-[#090a0d] text-xs font-semibold border border-[var(--interactive-subtle-border)] shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column (3 cols): Isometric Glowing Copper 3D Wireframe Cube with < /> */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-48 h-48 flex items-center justify-center"
            >
              <div
                className="absolute inset-0 rounded-full blur-2xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(249, 115, 22, 0.24) 0%, transparent 70%)'
                }}
              />
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                {/* Outer Isometric Hexagon Cube */}
                <polygon
                  points="100,20 170,60 170,140 100,180 30,140 30,60"
                  stroke="#f97316"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                  fill="rgba(249, 115, 22, 0.04)"
                />
                {/* Internal Isometric Cube Edges */}
                <line x1="100" y1="20" x2="100" y2="100" stroke="#fb923c" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="100" y1="100" x2="170" y2="60" stroke="#f97316" strokeOpacity="0.6" strokeWidth="1.2" />
                <line x1="100" y1="100" x2="30" y2="60" stroke="#f97316" strokeOpacity="0.6" strokeWidth="1.2" />
                <line x1="100" y1="100" x2="100" y2="180" stroke="#f97316" strokeOpacity="0.6" strokeWidth="1.2" />
                <line x1="30" y1="140" x2="100" y2="100" stroke="#fb923c" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="170" y1="140" x2="100" y2="100" stroke="#fb923c" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" />

                {/* Corner Glowing Nodes */}
                <circle cx="100" cy="20" r="3" fill="#fb923c" />
                <circle cx="170" cy="60" r="3" fill="#f97316" />
                <circle cx="170" cy="140" r="3" fill="#fb923c" />
                <circle cx="100" cy="180" r="3" fill="#f97316" />
                <circle cx="30" cy="140" r="3" fill="#fb923c" />
                <circle cx="30" cy="60" r="3" fill="#f97316" />
              </svg>
              <span className="absolute font-mono font-extrabold text-2xl text-[var(--interactive-primary)] drop-shadow-[0_0_12px_rgba(249,115,22,0.8)] select-none">
                &lt;/&gt;
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
