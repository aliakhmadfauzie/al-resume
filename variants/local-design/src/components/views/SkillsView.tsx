import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { DEV_STACK, GOVERNANCE_ITEMS, BUSINESS_COMPETENCIES, CORE_PROJECTS, MIGRATION_SLICES, KEY_METRICS } from '../../data/portfolioData';
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
  Target 
} from 'lucide-react';
import { AppleCard3D } from '../canvas/AppleCard3D';
import { Section3D } from '../canvas/Section3D';

export const SkillsView: React.FC = () => {
  // Aggregate technology usage from all projects and migration slices
  const techUsage = useMemo(() => {
    const counts: Record<string, number> = {};
    const processTools = (tools: string[]) => {
      tools.forEach(t => {
        counts[t] = (counts[t] || 0) + 1;
      });
    };

    CORE_PROJECTS.forEach(p => processTools(p.tools));
    MIGRATION_SLICES.forEach(m => processTools(m.tools));

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, []);

  return (
    <div className="space-y-12 py-6">
      
      {/* Keynote Header */}
      <Section3D initialRotateX={4} initialY={20} className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-medium text-neutral-300">
          <Terminal className="w-3.5 h-3.5 text-[#2997ff]" />
          <span>TECHNICAL ARCHITECTURE &amp; GOVERNANCE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter apple-text-gradient leading-[1.08]">
          Competency Matrix &amp; Technology Distribution
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl">
          Comprehensive breakdown of Power Platform architecture, pro-dev extensions (React PCF, TypeScript), automated CI/CD ALM pipelines, and enterprise service delivery leadership.
        </p>
      </Section3D>

      {/* Technology Utilization Dashboard */}
      <Section3D delay={0.05} className="relative overflow-hidden rounded-3xl apple-card p-6 sm:p-10 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
            <BarChart className="w-5 h-5 text-[#2997ff]" />
            <span>Technology Stack Distribution</span>
          </h2>
          <p className="text-xs text-neutral-400 font-mono">Empirical frequency analysis across 16+ production architectures.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tech Stack Distribution */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold">Tools &amp; Platforms Deployed</h3>
            <div className="grid grid-cols-2 gap-3">
              {techUsage.slice(0, 10).map(([tech, count]) => (
                <AppleCard3D key={tech} maxTilt={6} className="apple-card bg-white/[0.02] p-3 rounded-2xl flex items-center justify-between group hover:border-white/20 transition-colors">
                  <span className="text-xs font-medium text-neutral-200 truncate max-w-[70%] group-hover:text-white transition-colors">{tech}</span>
                  <span className="text-[10px] font-mono bg-white/[0.06] text-[#2997ff] px-2.5 py-1 rounded-full border border-white/10 font-semibold">
                    {count} {count === 1 ? 'App' : 'Apps'}
                  </span>
                </AppleCard3D>
              ))}
            </div>
          </div>

          {/* Key Measurable Impacts */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#bf5af2] font-semibold">Quantifiable Business Impact</h3>
            <div className="space-y-3">
              {KEY_METRICS.map((metric, idx) => (
                <AppleCard3D key={idx} maxTilt={6} className="apple-card bg-white/[0.02] p-4 rounded-2xl flex items-center space-x-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Target className="w-4 h-4 text-[#bf5af2]" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2.5">
                      <span className="text-lg font-bold text-white font-mono">{metric.value}</span>
                      <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">{metric.label}</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">{metric.subtext}</p>
                  </div>
                </AppleCard3D>
              ))}
            </div>
          </div>

        </div>
      </Section3D>

      {/* Section 1: Power Platform Architecture Suite */}
      <Section3D delay={0.05} className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold flex items-center space-x-2">
          <Layers className="w-4 h-4" />
          <span>Power Platform Architecture</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Power Apps */}
          <AppleCard3D maxTilt={8} className="apple-card p-6 rounded-3xl space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#bf5af2]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Power Apps</h3>
                <p className="text-xs text-[#bf5af2] font-mono mt-0.5">Canvas &amp; Model-Driven</p>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Design of responsive, accessible canvas applications and complex model-driven architectures with custom business process flows (BPFs) and role-tailored forms.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">Responsive UI</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">Offline Sync</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">PCF Controls</span>
            </div>
          </AppleCard3D>

          {/* Card 2: Power Automate */}
          <AppleCard3D maxTilt={8} className="apple-card p-6 rounded-3xl space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#2997ff]">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Power Automate</h3>
                <p className="text-xs text-[#2997ff] font-mono mt-0.5">Cloud &amp; Desktop RPA</p>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Automated multi-stage approval matrices, scheduled agent replacements, exception handlers, REST API webhooks, and desktop robotic process automation.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">Error Tracing</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">Adaptive Cards</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">OData Filters</span>
            </div>
          </AppleCard3D>

          {/* Card 3: Dataverse */}
          <AppleCard3D maxTilt={8} className="apple-card p-6 rounded-3xl space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#30d158]">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Microsoft Dataverse</h3>
                <p className="text-xs text-[#30d158] font-mono mt-0.5">Relational Data &amp; Security</p>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Enterprise relational data modeling, custom tables, 1:N &amp; N:N relationships, business rules, field-level encryption, environment isolation, and role-based access.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">Security Roles</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">Audit Trails</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">Elastic Tables</span>
            </div>
          </AppleCard3D>

          {/* Card 4: AI Builder */}
          <AppleCard3D maxTilt={8} className="apple-card p-6 rounded-3xl space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#ffd60a]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">AI Builder &amp; Copilot</h3>
                <p className="text-xs text-[#ffd60a] font-mono mt-0.5">Intelligent Automation</p>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Custom prompt engineering, document processing, text classification, semantic search ranking, sentiment analysis, and Copilot Studio conversational agents.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">NLP Classifier</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">SOP Extraction</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">RAG Search</span>
            </div>
          </AppleCard3D>

        </div>
      </Section3D>

      {/* Section 2: Development Stack with Apple Percentage Gauges */}
      <Section3D delay={0.05} className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold flex items-center space-x-2">
          <Code2 className="w-4 h-4" />
          <span>Development Stack &amp; Pro-Code Extensions</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEV_STACK.map((item, idx) => (
            <AppleCard3D key={idx} maxTilt={6} className="apple-card p-5 rounded-2xl space-y-3 bg-white/[0.02]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-8 h-8 rounded-full bg-white/[0.06] text-xs font-mono font-bold flex items-center justify-center border border-white/10" style={{ color: item.color }}>
                    {item.code}
                  </span>
                  <span className="text-xs font-bold text-white">{item.name}</span>
                </div>
                <span className="text-xs font-mono font-bold" style={{ color: item.color }}>{item.percentage}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                ></div>
              </div>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

      {/* Section 3: ALM & Enterprise Governance */}
      <Section3D delay={0.05} className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#bf5af2] font-semibold flex items-center space-x-2">
          <GitBranch className="w-4 h-4" />
          <span>ALM &amp; Enterprise Governance</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GOVERNANCE_ITEMS.map((gov, idx) => (
            <AppleCard3D key={idx} maxTilt={6} className="apple-card p-5 rounded-2xl space-y-3 hover:border-white/20 transition-all h-full">
              <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#2997ff]">
                <span className="material-symbols-outlined text-lg">{gov.icon}</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-tight">{gov.name}</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{gov.description}</p>
              </div>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

      {/* Section 4: Core Business Competencies */}
      <Section3D delay={0.05} className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#30d158] font-semibold flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Core Business Competencies</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BUSINESS_COMPETENCIES.map((comp, idx) => (
            <AppleCard3D key={idx} maxTilt={6} className="apple-card p-5 rounded-2xl space-y-3 hover:border-white/20 transition-all h-full">
              <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#30d158]">
                <span className="material-symbols-outlined text-lg">{comp.icon}</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-tight uppercase">{comp.title}</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{comp.description}</p>
              </div>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

    </div>
  );
};
