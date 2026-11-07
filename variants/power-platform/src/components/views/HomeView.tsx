import React from 'react';
import { PERSONAL_INFO, KEY_METRICS, CORE_PROJECTS, MIGRATION_OVERVIEW, MIGRATION_SLICES } from '../../data/portfolioData';
import { NavTab, ProjectItem, MigrationSlice } from '../../types';
import { 
  ArrowRight, 
  Layers, 
  Terminal, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Database, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  Workflow,
  Zap,
  ArrowUpRight,
  MonitorPlay,
  Share2
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
  onOpenContact,
  onLaunchDemo
}) => {
  return (
    <div className="space-y-16 py-6 animate-in fade-in duration-300">
      
      {/* Hero Section matching Image 1: Architecting Enterprise Modernization */}
      <section className="relative rounded-[2rem] overflow-hidden border border-[#282a2e]/60 bg-[#121419] p-8 sm:p-12 lg:p-16 shadow-2xl">
        {/* Massive background shape */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[120%] bg-[#0e2133] rounded-r-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col space-y-10 max-w-4xl">
          
          {/* Top Status Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-transparent border border-[#00dbe7]/30">
              <span className="w-2 h-2 rounded-full bg-[#00dbe7]"></span>
              <span className="text-xs font-mono font-medium text-[#00dbe7] tracking-wide uppercase">
                AVAILABLE FOR ARCHITECTURE & TRANSFORMATION ROLES
              </span>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-[#1e2024]/80 text-[#c0c7d4] border border-[#282a2e]">Kuala Lumpur / Bandung</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#0078d4]/20 text-[#a3c9ff] border border-[#0078d4]/30 font-bold">9+ Yrs Exp</span>
            </div>
          </div>

          {/* Main Headline & Identity */}
          <div className="space-y-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#00dbe7] font-bold flex items-center space-x-2.5">
              <Cpu className="w-5 h-5 text-[#00dbe7]" />
              <span>ALI AKHMAD FAUZIE • SOLUTION ARCHITECT PORTFOLIO</span>
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00dbe7] tracking-tight leading-[1.05]">
              Architecting Enterprise Modernization &amp; Scalable Automation
            </h1>

            <p className="text-base sm:text-lg text-white leading-relaxed max-w-3xl">
              Specialized in executing complex legacy migrations (Lotus Domino to Microsoft 365 / Dataverse) and engineering high-impact Power Platform solutions with enterprise-grade ALM, security governance, and AI workflows.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-btn-explore-projects"
              onClick={() => onSelectTab('projects')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0078d4] text-white text-sm font-bold shadow-[0_0_20px_rgba(0,120,212,0.4)] hover:bg-[#0086ea] transition-all"
            >
              <span>Explore 365+ App Migration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              id="hero-btn-live-demos"
              onClick={() => onSelectTab('demos')}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#1e2024] text-white text-sm font-bold border border-[#282a2e] hover:border-[#00dbe7]/40 transition-all"
            >
              <MonitorPlay className="w-4 h-4 text-[#00dbe7]" />
              <span>Launch Live Enterprise Demos</span>
            </button>

            <button
              id="hero-btn-interview-mode"
              onClick={() => onSelectTab('interview')}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#2a1744]/40 text-white text-sm font-bold border border-[#5c2d91]/50 hover:bg-[#2a1744]/60 transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#dab9ff]" />
              <span>Architect Q&amp;A</span>
            </button>
          </div>

          {/* High-Contrast Hero Stat-Callout Grid */}
          <div className="pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 w-full max-w-5xl">
              
              {KEY_METRICS.map((metric, idx) => {
                const borderColors = ['border-[#00dbe7]/30', 'border-[#0078d4]/30', 'border-[#5c2d91]/30', 'border-[#a3c9ff]/30'];
                const gradientColors = [
                  'from-white to-[#00dbe7]', 
                  'from-white to-[#a3c9ff]', 
                  'from-white to-[#dab9ff]',
                  'from-white to-[#00dbe7]'
                ];
                
                return (
                  <div key={idx} className={`bg-[#161b22]/80 backdrop-blur-sm border ${borderColors[idx]} p-5 rounded-2xl flex flex-col justify-center shadow-lg transition-transform hover:-translate-y-1`}>
                    <div className={`text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${gradientColors[idx]} font-mono tracking-tighter`}>
                      {metric.value}
                    </div>
                    <div className="text-xs font-bold text-white mt-3 uppercase tracking-wider">{metric.label}</div>
                    <p className="text-[11px] text-[#c0c7d4] mt-1.5 font-medium leading-relaxed">{metric.subtext}</p>
                  </div>
                )
              })}

            </div>
          </div>

        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold">Core Engineering Capabilities</h3>
            <h2 className="text-2xl font-bold text-white tracking-tight">The Modernization Blueprint</h2>
          </div>
          <button
            onClick={() => onSelectTab('skills')}
            className="text-xs font-semibold text-[#a3c9ff] hover:text-white flex items-center space-x-1"
          >
            <span>View Full Competency Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="executive-card p-8 rounded-3xl space-y-5 hover:border-[#0078d4]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#0078d4]/20 border border-[#0078d4]/40 flex items-center justify-center text-[#a3c9ff]">
              <Database className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Legacy Domino Cutover</h4>
              <p className="text-xs text-[#00dbe7] font-mono font-bold">365+ Databases • 28 Business Units</p>
            </div>
            <p className="text-sm text-[#e2e2e8] leading-relaxed">
              Systematic triage and replacement of complex Lotus Notes agents, access control lists (ACLs), and view indices with modern Dataverse tables, SharePoint Online schemas, and Power Automate cloud flows.
            </p>
            <ul className="space-y-2 text-sm text-white pt-4 border-t border-[#282a2e]">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0078d4]" />
                <span><strong>Zero lost audit records</strong> or document revision history</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0078d4]" />
                <span><strong>6 Domain Slices</strong> (QMS, CAPA, Supply Chain, Logistics)</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="executive-card p-8 rounded-3xl space-y-5 hover:border-[#5c2d91]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#5c2d91]/20 border border-[#5c2d91]/40 flex items-center justify-center text-[#dab9ff]">
              <Workflow className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Enterprise Workflow Engine</h4>
              <p className="text-xs text-[#dab9ff] font-mono font-bold">Multi-Tier Approvals • ERP Sync</p>
            </div>
            <p className="text-sm text-[#e2e2e8] leading-relaxed">
              Engineering rigorous financial approval matrices, headcount requisition gates, and purchase order synchronization (e.g. Tasek Cement <strong>RM 0.20/t rebate ceiling</strong> with <strong>15-minute cycle time</strong>).
            </p>
            <ul className="space-y-2 text-sm text-white pt-4 border-t border-[#282a2e]">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#5c2d91]" />
                <span><strong>99% cycle time reduction</strong> on high-volume transactions</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#5c2d91]" />
                <span>Dataverse database isolation for <strong>financial audit compliance</strong></span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="executive-card p-8 rounded-3xl space-y-5 hover:border-[#00dbe7]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#00dbe7]/20 border border-[#00dbe7]/40 flex items-center justify-center text-[#00dbe7]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">AI-Assisted Intelligence</h4>
              <p className="text-xs text-[#00dbe7] font-mono font-bold">AI Builder • Copilot Studio • NLP</p>
            </div>
            <p className="text-sm text-[#e2e2e8] leading-relaxed">
              Deploying custom NLP classification models and ranked semantic search algorithms across <strong>120+ SOP categories</strong>, slashing customer support ticket handling times by <strong>50-80%</strong>.
            </p>
            <ul className="space-y-2 text-sm text-white pt-4 border-t border-[#282a2e]">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#00dbe7]" />
                <span>Dynamic procedure link generation &amp; confidence gating</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#00dbe7]" />
                <span><strong>99% document recommendation accuracy</strong></span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Featured Migration Deep Dive Banner */}
      <section className="bg-[#161b22] border border-[#282a2e] rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 relative overflow-hidden">
        <div className="glow-circle w-72 h-72 bg-[#0078d4]/10 right-0 top-0"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0078d4]/20 border border-[#0078d4]/40 text-xs font-mono text-[#a3c9ff] font-semibold">
              <span>FEATURED FLAGSHIP ARCHITECTURE</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {MIGRATION_OVERVIEW.title}
            </h3>
            <p className="text-sm sm:text-base text-white leading-relaxed">
              <strong>{MIGRATION_OVERVIEW.scope}</strong> {MIGRATION_OVERVIEW.sliceDelivery}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('projects')}
              className="px-5 py-3 rounded-xl bg-[#0078d4] hover:bg-[#0086ea] text-white text-xs font-bold shadow-md shadow-[#0078d4]/30 text-center"
            >
              Explore 6 Migration Slices
            </button>
            <button
              onClick={() => onLaunchDemo('warehouse')}
              className="px-5 py-3 rounded-xl bg-[#1e2024] hover:bg-[#282a2e] text-white text-xs font-bold border border-[#282a2e] text-center flex items-center justify-center space-x-2"
            >
              <MonitorPlay className="w-4 h-4 text-[#00dbe7]" />
              <span>Simulate Rebuilt App</span>
            </button>
          </div>
        </div>

        {/* 6 Slice Mini Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6 border-t border-[#282a2e]">
          {MIGRATION_SLICES.map((slice) => (
            <div
              key={slice.id}
              onClick={() => onOpenProjectDetail(slice)}
              className="bg-[#1a1c20] hover:bg-[#1e2024] p-5 rounded-2xl border border-[#282a2e] hover:border-[#0078d4]/50 transition-all cursor-pointer group shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-[#0078d4]/20 text-[#a3c9ff] font-mono font-bold text-sm flex items-center justify-center">
                  {slice.letter}
                </span>
                <span className="text-xs font-mono font-bold text-[#00dbe7]">{slice.appCount} Apps</span>
              </div>
              <p className="text-sm font-bold text-white mt-3 line-clamp-2 group-hover:text-[#a3c9ff] transition-colors">
                {slice.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold">Production Deliveries</h3>
            <h2 className="text-2xl font-bold text-white tracking-tight">Core Automation &amp; Standalone Solutions</h2>
          </div>
          <button
            onClick={() => onSelectTab('projects')}
            className="text-xs font-semibold text-[#a3c9ff] hover:text-white flex items-center space-x-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_PROJECTS.slice(0, 6).map((proj) => (
            <div
              key={proj.id}
              className="glass-card p-8 rounded-3xl space-y-5 flex flex-col justify-between hover:border-[#0078d4]/50 transition-all cursor-pointer shadow-lg"
              onClick={() => onOpenProjectDetail(proj)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#0078d4]/20 text-[#a3c9ff] border border-[#0078d4]/30 font-bold">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#c0c7d4] font-medium">{proj.date}</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#00dbe7] transition-colors">{proj.title}</h4>
                  {proj.subtitle && (
                    <p className="text-sm text-[#00dbe7] font-bold mt-1">{proj.subtitle}</p>
                  )}
                </div>

                <p className="text-sm text-[#e2e2e8] leading-relaxed line-clamp-3">
                  {proj.problem}
                </p>

                {/* Impact Highlight */}
                <div className="p-3 rounded-xl bg-[#111318] border border-[#282a2e] flex items-center space-x-2.5">
                  <TrendingUp className="w-5 h-5 text-[#00dbe7] shrink-0" />
                  <span className="text-sm text-white font-bold leading-snug line-clamp-2">{proj.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tools.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#1a1c20] text-[#c0c7d4] border border-[#282a2e]">
                      {t}
                    </span>
                  ))}
                  {proj.tools.length > 3 && (
                    <span className="text-[11px] font-bold px-2 py-1 rounded-md bg-[#1a1c20] text-[#a3c9ff]">
                      +{proj.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-5 border-t border-[#282a2e] flex items-center justify-between">
                <button
                  className="text-xs font-bold text-white hover:text-[#a3c9ff] flex items-center space-x-1"
                >
                  <span>Read Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {proj.liveDemoId && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onLaunchDemo(proj.liveDemoId!);
                    }}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0078d4]/20 hover:bg-[#0078d4]/40 text-[#a3c9ff] text-xs font-bold border border-[#0078d4]/30 transition-colors"
                  >
                    <MonitorPlay className="w-3.5 h-3.5" />
                    <span>Run Demo</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="rounded-3xl border border-[#282a2e] bg-gradient-to-r from-[#161b22] via-[#1a1c20] to-[#161b22] p-8 sm:p-10 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ready to Modernize Your Enterprise Workflows?
          </h3>
          <p className="text-xs sm:text-sm text-[#c0c7d4] leading-relaxed">
            Whether migrating complex legacy Lotus Notes databases or building intelligent Power Platform solutions from scratch, let's connect to discuss your transformation requirements.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0078d4] to-[#5c2d91] hover:from-[#0086ea] hover:to-[#6b35a8] text-white text-xs font-bold shadow-lg shadow-[#0078d4]/30"
          >
            Start Conversation
          </button>
          <button
            onClick={onOpenResume}
            className="px-6 py-3 rounded-xl bg-[#1e2024] hover:bg-[#282a2e] text-white text-xs font-bold border border-[#282a2e]"
          >
            View Official Resume
          </button>
        </div>
      </section>

    </div>
  );
};
