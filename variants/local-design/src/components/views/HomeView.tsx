import React from 'react';
import { motion } from 'motion/react';
import { KEY_METRICS, CORE_PROJECTS, MIGRATION_OVERVIEW, MIGRATION_SLICES, POSITIONING_STATEMENT, TRANSFORMATION_METRICS, TRUST_SIGNALS, THOUGHT_LEADERSHIP } from '../../data/portfolioData';
import { NavTab, ProjectItem, MigrationSlice } from '../../types';
import { 
  ArrowRight, 
  Cpu, 
  Database, 
  CheckCircle2, 
  Workflow, 
  Sparkles, 
  TrendingUp, 
  MonitorPlay, 
  Award, 
  Users, 
  GraduationCap, 
  BadgeCheck, 
  Building2, 
  Lightbulb, 
  Compass, 
  Landmark, 
  ArrowUpRight,
  ChevronRight,
  Zap
} from 'lucide-react';
import { AppleCard3D } from '../canvas/AppleCard3D';
import { TectonicLedgerCard } from '../canvas/TectonicLedgerCard';
import { SpatialCore3D } from '../canvas/SpatialCore3D';
import { Section3D } from '../canvas/Section3D';
import { useAppMode } from '../../context/AppModeContext';

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
  onOpenContact,
  onLaunchDemo
}) => {
  const { isSkimMode } = useAppMode();

  return (
    <div className="space-y-16 py-4">

      {/* ── Executive Fast-Track Skim Factsheet (Surfaces immediately for time-poor recruiters) ── */}
      {isSkimMode && (
        <div className="rounded-3xl border border-amber-400/40 bg-amber-950/20 p-6 sm:p-8 backdrop-blur-2xl space-y-6 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-400/20 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 fill-amber-300" />
                <span>Executive Fast-Track Factsheet · 30-Second Recruiter Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ali Akhmad Fauzie — Modernization Architect Ledger
              </h2>
              <p className="text-xs text-neutral-300 max-w-2xl leading-relaxed">
                Direct evidence ledger synthesized for enterprise leadership, hiring panels, and executive recruiters.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={onOpenResume}
                className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shadow-lg"
              >
                Download Resume (PDF)
              </button>
              <button
                onClick={() => onSelectTab('briefing')}
                className="px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-xs border border-white/20 hover:bg-white/20 transition-colors"
              >
                10-Min Briefing
              </button>
            </div>
          </div>

          {/* Hard Metric Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-amber-300">361</span>
              <p className="text-xs font-semibold text-white uppercase">Forms Catalogued</p>
              <p className="text-[10px] text-neutral-400">28+ Business Units modernized</p>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-[#30d158]">RM4.2M</span>
              <p className="text-xs font-semibold text-white uppercase">Cost Avoidance / Yr</p>
              <p className="text-[10px] text-neutral-400">Interim staging vs premium licenses</p>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-[#2997ff]">98%+</span>
              <p className="text-xs font-semibold text-white uppercase">SLA Compliance</p>
              <p className="text-[10px] text-neutral-400">Zero data loss across cutover</p>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-[#bf5af2]">34</span>
              <p className="text-xs font-semibold text-white uppercase">Engineers Managed</p>
              <p className="text-[10px] text-neutral-400">Across 7 international markets</p>
            </div>
          </div>

          {/* Verified Transformation Proof Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">Flagship Transformation</span>
              <p className="text-xs font-bold text-white">Lotus Domino → Dataverse Rebuild</p>
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                Catalogued 361 forms into 6 functional modernization slices with C# plugins, typed Dataverse schemas, and SAP inventory synchronization.
              </p>
              <button
                onClick={() => onSelectTab('projects')}
                className="text-xs text-[#2997ff] hover:underline font-mono inline-flex items-center gap-1"
              >
                Inspect 6-Slice Ledger <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#30d158] font-bold">Operational Telemetry</span>
              <p className="text-xs font-bold text-white">PulseTrack Workforce Automation</p>
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                Eliminated WhatsApp manual status tracking. Cut team lead reporting workload by 60–80% with real-time Teams Adaptive Cards and Power BI telemetry.
              </p>
              <button
                onClick={() => onLaunchDemo('it-service')}
                className="text-xs text-[#30d158] hover:underline font-mono inline-flex items-center gap-1"
              >
                Launch Interactive Simulator <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#bf5af2] font-bold">AI Operationalization</span>
              <p className="text-xs font-bold text-white">AI Builder SOP Auto-Classifier</p>
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                Trained NLP model across 120+ SOP categories to automate customer service ticket triage with 95%+ confidence, cutting triage latency by 70%.
              </p>
              <button
                onClick={() => onLaunchDemo('cs-resolver')}
                className="text-xs text-[#bf5af2] hover:underline font-mono inline-flex items-center gap-1"
              >
                Test AI Classifier Live <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* ── Section 1: Kinetic Architectural Ledger Flagship Hero Showcase ── */}
      <Section3D initialRotateX={3} initialY={20} className="relative rounded-3xl apple-card p-6 sm:p-10 lg:p-14 overflow-hidden border border-white/[0.1] bg-[#090a0f]/90">
        {/* Subtle top specular sheen & hairline ruler */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
        
        {/* Blueprint watermark indexing in background */}
        <div className="pointer-events-none absolute -right-6 -bottom-8 font-mono text-[140px] font-black text-white/[0.015] select-none leading-none">
          ARCH_26
        </div>

        <div className="relative z-10 space-y-10">
          
          {/* Top Architectural Telemetry Ribbon & Status HUD */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="ledger-pill ledger-pill-active">
                <span className="w-2 h-2 rounded-full bg-[#00E575] animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-white font-semibold uppercase">
                  SYS_ID: ARCH-2026 // LIVE OPERATIONAL
                </span>
              </div>
              <span className="hidden sm:inline-block font-mono text-[11px] text-neutral-500">·</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-neutral-400">
                <span className="text-[9px] text-neutral-600">LOC:</span>
                <span>Kuala Lumpur / Bandung</span>
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
              <span className="ledger-hud-chip text-white/90">9+ Yrs Modernization Architect</span>
              <span className="ledger-hud-chip text-[#00E575] font-semibold">98%+ SLA SLA</span>
            </div>
          </div>

          {/* Keynote Split: Kinetic Left Narrative / Right 3D Spatial Core */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (7 Cols): Headline, Value Prop & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                <span className="text-[#FF3B30]">//</span>
                <span className="text-white">ALI AKHMAD FAUZIE</span>
                <span className="text-neutral-600">•</span>
                <span className="text-[#FF3B30]">MODERNIZATION ARCHITECT</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                <span className="block text-white hover:text-[#FF3B30] transition-colors duration-300">
                  RM4.2M Saved.
                </span>
                <span className="block text-neutral-300 hover:text-[#00E575] transition-colors duration-300">
                  361 Forms Modernized.
                </span>
                <span className="block text-neutral-400">
                  28 Units Transformed.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl tracking-tight">
                Enterprise Modernization Architect specializing in <strong className="text-white font-medium">Microsoft 365, Power Platform, Dataverse</strong>, and AI operating models — trusted by executive leadership to systematically eliminate technical debt and architect zero-data-loss cutovers across hundreds of mission-critical business platforms.
              </p>

              {/* Architectural Telemetry Proof Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono">
                {[
                  { label: '361 Forms Modernized', code: '01' },
                  { label: '28 Business Units', code: '02' },
                  { label: 'Zero Lost Audit History', code: '03' },
                  { label: '98%+ Cutover SLA', code: '04' }
                ].map((proof, idx) => (
                  <span 
                    key={idx} 
                    className="ledger-hud-chip text-white/90 flex items-center space-x-1.5 hover:border-white/20 transition-colors"
                  >
                    <span className="text-[9px] text-[#FF3B30] font-semibold">{proof.code}</span>
                    <span>{proof.label}</span>
                  </span>
                ))}
              </div>

              {/* High-Contrast Conversion Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  id="hero-btn-discuss-transformation"
                  href="https://calendly.com/aliakhmadfauzie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ledger-btn-primary"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                
                <button
                  id="hero-btn-case-studies"
                  onClick={() => onSelectTab('articles')}
                  className="apple-btn-secondary"
                >
                  <MonitorPlay className="w-3.5 h-3.5 text-[#00dbe7]" />
                  <span>Inspect Case Studies (24)</span>
                </button>

                <button
                  id="hero-btn-resume"
                  onClick={onOpenResume}
                  className="ledger-btn-accent"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
                  <span>Executive Resume Ledger</span>
                </button>
              </div>
            </div>

            {/* Right Column (5 Cols): Interactive 3D Spatial Core Frame */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center py-4 relative">
              <div className="w-full max-w-[340px] relative">
                {/* Telemetry frame border & coordinate tags */}
                <div className="absolute -top-3 -left-3 font-mono text-[9px] text-neutral-600">// GIMBAL_3D</div>
                <div className="absolute -top-3 -right-3 font-mono text-[9px] text-neutral-600">STATE: LIVE</div>
                <SpatialCore3D size={320} className="w-full" />
              </div>
            </div>

          </div>

          {/* ── Keynote Bento Stat Grid using Tectonic Ledger Cards ── */}
          <div className="pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {KEY_METRICS.map((metric, idx) => {
                const metricAccents = ['#FF3B30', '#00E575', '#2997ff', '#bf5af2'];
                return (
                  <TectonicLedgerCard
                    key={idx}
                    indexCode={`[METRIC // 0${idx + 1}]`}
                    statusBadge="AUDIT_VERIFIED"
                    accentColor={metricAccents[idx % metricAccents.length]}
                    maxTilt={8}
                    className="p-5 sm:p-6 flex flex-col justify-between h-full bg-[#0d0e14]/90"
                  >
                    <div>
                      <div className="text-3xl sm:text-5xl font-bold font-mono tracking-tighter text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-white/90 mt-2.5 uppercase tracking-wider font-mono">
                        {metric.label}
                      </div>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-2 font-mono leading-relaxed border-t border-white/[0.06] pt-2">
                      {metric.subtext}
                    </p>
                  </TectonicLedgerCard>
                );
              })}
            </div>
          </div>

        </div>
      </Section3D>

      {/* ── Section 2: Executive Positioning Statement ── */}
      <Section3D delay={0.05} className="rounded-3xl apple-card p-8 sm:p-10 space-y-6 border border-white/[0.08]">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-semibold">
          <Landmark className="w-4 h-4" />
          <span>Executive Leadership</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
          {POSITIONING_STATEMENT.headline}
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl">
          {POSITIONING_STATEMENT.statement}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {POSITIONING_STATEMENT.highlights.map((highlight, idx) => (
            <AppleCard3D key={idx} maxTilt={8} className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.06] flex items-start space-x-2.5">
              <BadgeCheck className="w-4 h-4 text-[#00dbe7] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-white/90 leading-snug">{highlight}</span>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

      {/* ── Section 3: Core Architectural Pillars with 3D Tilt ── */}
      <Section3D delay={0.05} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">Strategic Pillars</h3>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Transformation Outcomes at Enterprise Scale</h2>
          </div>
          <button
            onClick={() => onSelectTab('skills')}
            className="text-xs font-medium text-[#a3c9ff] hover:text-white flex items-center space-x-1 tracking-tight transition-colors"
          >
            <span>View Full Competency Matrix</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <AppleCard3D maxTilt={8} className="apple-card p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0078d4]/15 border border-[#0078d4]/30 flex items-center justify-center text-[#a3c9ff]">
                <Database className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white tracking-tight">Enterprise Modernization at Scale</h4>
                <p className="text-xs text-[#00dbe7] font-mono font-medium">361 Forms • 28 Business Units</p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Led the modernization of mission-critical legacy platforms, eliminating technical debt while preserving audit integrity and operational continuity across 28 business units.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-white/90 pt-4 border-t border-white/[0.08]">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0078d4] shrink-0" />
                <span><strong>Zero lost audit records</strong> or revision history</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0078d4] shrink-0" />
                <span>Consolidated <strong>361 legacy forms</strong> into Dataverse</span>
              </li>
            </ul>
          </AppleCard3D>

          {/* Pillar 2 */}
          <AppleCard3D maxTilt={8} className="apple-card p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#5c2d91]/20 border border-[#5c2d91]/40 flex items-center justify-center text-[#dab9ff]">
                <Workflow className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white tracking-tight">Financial Process Automation</h4>
                <p className="text-xs text-[#dab9ff] font-mono font-medium">Days → Minutes • Audit-Ready</p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Architected centralized workflow platform integrating multi-tier approvals, ERP synchronization, audit controls, and policy enforcement across functions.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-white/90 pt-4 border-t border-white/[0.08]">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5c2d91] shrink-0" />
                <span>Turnaround reduced <strong>from days to minutes</strong></span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5c2d91] shrink-0" />
                <span>Compliance visibility with <strong>immutable audit trails</strong></span>
              </li>
            </ul>
          </AppleCard3D>

          {/* Pillar 3 */}
          <AppleCard3D maxTilt={8} className="apple-card p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#00dbe7]/15 border border-[#00dbe7]/30 flex items-center justify-center text-[#00dbe7]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white tracking-tight">AI-Enabled Knowledge Operations</h4>
                <p className="text-xs text-[#00dbe7] font-mono font-medium">Faster Decisions • Lower Support Load</p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Built AI-enabled knowledge systems that reduce support effort, improve discovery, and accelerate decision-making across complex operational environments.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-white/90 pt-4 border-t border-white/[0.08]">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe7] shrink-0" />
                <span><strong>120+ SOP categories</strong> classified automatically</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe7] shrink-0" />
                <span><strong>99% recommendation accuracy</strong> on 5,000+ files</span>
              </li>
            </ul>
          </AppleCard3D>

        </div>
      </Section3D>

      {/* ── Section 4: Transformation Metrics: Baseline → Result with 3D Tilt ── */}
      <Section3D delay={0.05} className="space-y-6">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-semibold">Proven Results</h3>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Transformation Metrics: Baseline → Result</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRANSFORMATION_METRICS.map((metric, idx) => (
            <AppleCard3D 
              key={idx}
              maxTilt={7}
              className="apple-card p-6 rounded-2xl space-y-3 bg-white/[0.02]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-white/90 font-semibold">{metric.label}</span>
                <TrendingUp className="w-4 h-4 text-[#00dbe7]" />
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 space-y-0.5">
                  <p className="text-[10px] font-mono uppercase text-[#86868b] font-medium">Before</p>
                  <p className="text-xs text-[#86868b] line-through font-mono">{metric.baseline}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#00dbe7] shrink-0" />
                <div className="flex-1 space-y-0.5">
                  <p className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">After</p>
                  <p className="text-base font-bold text-white font-mono leading-snug">{metric.result}</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pt-2 border-t border-white/[0.06]">{metric.description}</p>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

      {/* ── Section 5: Flagship Migration Deep Dive Banner ── */}
      <Section3D delay={0.05} className="apple-card rounded-3xl p-6 sm:p-10 space-y-6 border border-white/[0.1]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0078d4]/15 border border-[#0078d4]/30 text-xs font-mono text-[#a3c9ff] font-medium">
              <span>FLAGSHIP TRANSFORMATION PROGRAM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {MIGRATION_OVERVIEW.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              <strong className="text-white font-medium">Led a multi-year modernization program involving business stakeholders across 28 business units</strong> — {MIGRATION_OVERVIEW.sliceDelivery}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('articles')}
              className="apple-btn-primary !text-xs"
            >
              <span>Explore Case Studies</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onLaunchDemo('warehouse')}
              className="apple-btn-secondary !text-xs"
            >
              <MonitorPlay className="w-3.5 h-3.5 text-[#00dbe7]" />
              <span>Simulate Rebuilt App</span>
            </button>
          </div>
        </div>

        {/* 6 Slice Mini Cards with 3D Tilt */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 border-t border-white/[0.08]">
          {MIGRATION_SLICES.map((slice) => (
            <AppleCard3D
              key={slice.id}
              maxTilt={10}
              onClick={() => onOpenProjectDetail(slice)}
              className="bg-white/[0.03] hover:bg-white/[0.06] p-4 rounded-2xl border border-white/[0.08] cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-full bg-[#0078d4]/20 text-[#a3c9ff] font-mono font-bold text-xs flex items-center justify-center">
                  {slice.letter}
                </span>
                <span className="text-xs font-mono font-bold text-[#00dbe7]">{slice.appCount} Apps</span>
              </div>
              <p className="text-xs font-semibold text-white/90 mt-3 line-clamp-2 group-hover:text-white transition-colors">
                {slice.title}
              </p>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

      {/* ── Section 6: Featured Projects Grid with 3D Tilt ── */}
      <Section3D delay={0.05} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-semibold">Case Studies</h3>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Business Challenges Solved</h2>
          </div>
          <button
            onClick={() => onSelectTab('articles')}
            className="text-xs font-medium text-[#a3c9ff] hover:text-white flex items-center space-x-1 tracking-tight transition-colors"
          >
            <span>View All Case Studies</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_PROJECTS.slice(0, 6).map((proj, idx) => {
            const cardAccents = ['#FF3B30', '#00E575', '#2997ff'];
            const cardAccent = cardAccents[idx % cardAccents.length];
            return (
              <TectonicLedgerCard
                key={proj.id}
                indexCode={`[SYS_0${proj.id} // ${proj.category.toUpperCase()}]`}
                statusBadge={proj.liveDemoId ? "LIVE_SIMULATOR" : "VERIFIED_DOSSIER"}
                accentColor={cardAccent}
                maxTilt={7}
                className="p-6 space-y-4 flex flex-col justify-between cursor-pointer group h-full"
                onClick={() => onOpenProjectDetail(proj)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/[0.05] text-white/90 border border-white/[0.1] font-semibold">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">{proj.date}</span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#FF3B30] transition-colors duration-200 leading-snug tracking-tight">
                      {proj.title}
                    </h4>
                    {proj.subtitle && (
                      <p className="text-xs text-neutral-400 font-mono font-medium mt-0.5">
                        {proj.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {proj.problem}
                  </p>

                  {/* Impact Ledger Callout */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] flex items-center space-x-2.5">
                    <TrendingUp className="w-4 h-4 text-[#00E575] shrink-0" />
                    <span className="text-xs text-white/95 font-mono font-medium leading-snug line-clamp-2">
                      {proj.impact}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tools.slice(0, 3).map((t, toolIdx) => (
                      <span key={toolIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-400 border border-white/[0.07]">
                        {t}
                      </span>
                    ))}
                    {proj.tools.length > 3 && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.03] text-neutral-300 border border-white/[0.07]">
                        +{proj.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-neutral-300 group-hover:text-white flex items-center space-x-1.5">
                    <span>Inspect Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-[#FF3B30] transition-transform" />
                  </span>

                  {proj.liveDemoId && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLaunchDemo(proj.liveDemoId!);
                      }}
                      className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-mono font-semibold border border-white/[0.12] transition-colors"
                    >
                      <MonitorPlay className="w-3 h-3 text-[#00E575]" />
                      <span>Simulate</span>
                    </button>
                  )}
                </div>
              </TectonicLedgerCard>
            );
          })}
        </div>
      </Section3D>

      {/* ── Section 7: Testimonials Section with 3D Tilt ── */}
      <Section3D delay={0.05} className="space-y-4">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">Feedback</h3>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Verified Leadership Feedback</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppleCard3D maxTilt={6} className="apple-card p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex items-center space-x-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5 text-[#00dbe7]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
              "Ali delivered our 361-form migration on time and under budget. His Dataverse-first architecture eliminated the technical debt that had stalled us for two years."
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0078d4] to-[#00dbe7] flex items-center justify-center text-white font-bold text-xs">
                RJ
              </div>
              <div>
                <p className="text-xs font-bold text-white">Regional IT Director</p>
                <p className="text-[11px] text-[#86868b]">Multinational Manufacturing, APAC</p>
              </div>
            </div>
          </AppleCard3D>

          <AppleCard3D maxTilt={6} className="apple-card p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex items-center space-x-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5 text-[#00dbe7]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
              "The AI SOP classifier Ali built reduced our support ticket resolution time by 65%. His ability to translate business pain into working systems is rare."
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5c2d91] to-[#cda2ff] flex items-center justify-center text-white font-bold text-xs">
                SK
              </div>
              <div>
                <p className="text-xs font-bold text-white">Head of Customer Operations</p>
                <p className="text-[11px] text-[#86868b]">Enterprise B2B Services</p>
              </div>
            </div>
          </AppleCard3D>
        </div>
      </Section3D>

      {/* ── Section 8: Trust & Validation Signals ── */}
      <Section3D delay={0.05} className="space-y-4">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">Validation</h3>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Credentials &amp; Track Record</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TRUST_SIGNALS.map((signal, idx) => {
            const IconComponent = 
              signal.icon === 'award' ? Award :
              signal.icon === 'groups' ? Users :
              signal.icon === 'school' ? GraduationCap :
              BadgeCheck;
            return (
              <AppleCard3D key={idx} maxTilt={6} className="apple-card p-5 rounded-2xl space-y-2">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{signal.title}</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">{signal.detail}</p>
                </div>
              </AppleCard3D>
            );
          })}
        </div>
      </Section3D>

      {/* ── Section 9: Thought Leadership with 3D Tilt ── */}
      <Section3D delay={0.05} className="space-y-4">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-semibold">Perspectives</h3>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Thought Leadership</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THOUGHT_LEADERSHIP.map((item, idx) => {
            const IconComponent = item.icon === 'route' ? Compass : item.icon === 'account_tree' ? Building2 : Lightbulb;
            return (
              <AppleCard3D key={idx} maxTilt={7} className="apple-card p-6 sm:p-8 rounded-3xl space-y-4 h-full">
                <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">{item.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.summary}</p>
                <ul className="space-y-2 text-xs text-neutral-300 pt-3 border-t border-white/[0.08]">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#00dbe7] mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </AppleCard3D>
            );
          })}
        </div>
      </Section3D>

      {/* ── Section 10: Apple Cinematic CTA Finale ── */}
      <Section3D delay={0.05} className="rounded-3xl apple-card p-8 sm:p-14 text-center space-y-5 border border-white/[0.1] relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3 relative z-10">
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight apple-text-gradient">
            Ready to Modernize Your Enterprise?
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Whether retiring legacy systems, automating business-critical workflows, or deploying AI-enabled operating models — let's review your architectural roadmap.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-3 relative z-10">
          <a
            href="https://calendly.com/aliakhmadfauzie"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-primary"
          >
            <span>Schedule a Call</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => onSelectTab('articles')}
            className="apple-btn-secondary"
          >
            View Case Studies
          </button>
          <button
            onClick={onOpenResume}
            className="apple-btn-secondary"
          >
            Download Resume
          </button>
        </div>
      </Section3D>

    </div>
  );
};
