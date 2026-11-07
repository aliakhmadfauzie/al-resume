import React, { useMemo, useState } from 'react';
import { DEV_STACK, GOVERNANCE_ITEMS, BUSINESS_COMPETENCIES, ADDITIONAL_COMPETENCIES, CORE_PROJECTS, MIGRATION_SLICES, KEY_METRICS } from '../../data/portfolioData';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Workflow, 
  Database, 
  Sparkles, 
  Code2, 
  GitBranch, 
  TrendingUp,
  BarChart,
  Target,
  Briefcase
} from 'lucide-react';

export const SkillsView: React.FC = () => {
  const [mobileTab, setMobileTab] = useState<'tools' | 'impact'>('tools');

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
    <div className="space-y-12 py-6 animate-in fade-in duration-300">
      
      {/* Header matching Image 8 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
          <Terminal className="w-4 h-4" />
          <span>Technical Architecture &amp; Enterprise Governance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Mastery &amp; Core Competencies
        </h1>
        <p className="text-xs sm:text-sm text-[#e2e2e8] max-w-3xl leading-relaxed">
          Comprehensive breakdown of Power Platform architecture, pro-dev extensions (React PCF, TypeScript), automated CI/CD ALM pipelines, and executive service delivery leadership.
        </p>
      </div>

      {/* NEW SECTION: Technology Utilization Dashboard & Key Achievements */}
      <section className="bg-gradient-to-br from-[#161b22] to-[#111318] border border-[#282a2e] rounded-3xl p-6 sm:p-8 space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden mt-8">
        <div className="glow-circle w-96 h-96 bg-[#0078d4]/10 -top-20 -right-20"></div>
        
        <div className="relative z-10 space-y-6 sm:space-y-8">
          <div className="space-y-2 pb-2 sm:pb-0">
            <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight flex items-center space-x-2">
              <BarChart className="w-5 h-5 text-[#00dbe7]" />
              <span>Technology Utilization Dashboard</span>
            </h2>
            <p className="text-xs text-[#c0c7d4]">Real-time analysis of technology stack distribution across the 16+ production architectures.</p>
          </div>

          {/* Mobile Tabs */}
          <div className="flex lg:hidden bg-[#1a1c20] p-1 rounded-lg border border-[#282a2e]">
            <button 
              onClick={() => setMobileTab('tools')}
              className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${mobileTab === 'tools' ? 'bg-[#1e2024] text-white shadow-sm border border-[#282a2e]' : 'text-[#c0c7d4]'}`}
            >
              Tools & Platforms
            </button>
            <button 
              onClick={() => setMobileTab('impact')}
              className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${mobileTab === 'impact' ? 'bg-[#1e2024] text-white shadow-sm border border-[#282a2e]' : 'text-[#c0c7d4]'}`}
            >
              Business Impact
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Tech Stack Distribution */}
            <div className={`space-y-4 ${mobileTab === 'tools' ? 'block' : 'hidden'} lg:block`}>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#a3c9ff] font-bold">Tools &amp; Platforms Deployed</h3>
              <div className="grid grid-cols-2 gap-3">
                {techUsage.slice(0, 10).map(([tech, count], idx) => (
                  <div key={tech} className="bg-[#1a1c20] p-3 rounded-xl border border-[#282a2e] flex items-center justify-between group hover:border-[#0078d4]/50 transition-colors">
                    <span className="text-xs font-semibold text-white truncate max-w-[70%] group-hover:text-[#a3c9ff] transition-colors">{tech}</span>
                    <span className="text-[10px] font-mono bg-[#111318] text-[#00dbe7] px-2 py-0.5 rounded-md border border-[#282a2e]">
                      {count} {count === 1 ? 'App' : 'Apps'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Measurable Impacts */}
            <div className={`space-y-4 ${mobileTab === 'impact' ? 'block' : 'hidden'} lg:block`}>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#dab9ff] font-bold">Quantifiable Business Impact</h3>
              <div className="space-y-3">
                {KEY_METRICS.map((metric, idx) => (
                  <div key={idx} className="bg-[#1a1c20] p-3.5 rounded-xl border border-[#282a2e] flex items-center space-x-4">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-[#5c2d91]/20 border border-[#5c2d91]/40 flex items-center justify-center">
                      <Target className="w-5 h-5 text-[#dab9ff]" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-black text-white font-mono drop-shadow-sm">{metric.value}</span>
                        <span className="text-[11px] font-medium text-[#a3c9ff] uppercase tracking-wide">{metric.label}</span>
                      </div>
                      <p className="text-[11px] text-[#e2e2e8] mt-0.5">{metric.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 1: Power Platform Architecture Suite */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold flex items-center space-x-2">
          <Layers className="w-4 h-4" />
          <span>Power Platform Architecture</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Power Apps */}
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#5c2d91]/20 border border-[#5c2d91]/40 flex items-center justify-center text-[#dab9ff]">
              <Layers className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Power Apps</h3>
              <p className="text-xs text-[#dab9ff] font-mono">Canvas &amp; Model-Driven</p>
            </div>
            <p className="text-xs text-[#c0c7d4] leading-relaxed">
              Design of responsive, accessible canvas applications and complex model-driven architectures with custom business process flows (BPFs) and role-tailored forms.
            </p>
            <div className="pt-2 border-t border-[#282a2e] flex flex-wrap gap-1">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">Responsive UI</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">Offline Sync</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">PCF Controls</span>
            </div>
          </div>

          {/* Card 2: Power Automate */}
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0078d4]/20 border border-[#0078d4]/40 flex items-center justify-center text-[#a3c9ff]">
              <Workflow className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Power Automate</h3>
              <p className="text-xs text-[#a3c9ff] font-mono">Cloud &amp; Desktop RPA</p>
            </div>
            <p className="text-xs text-[#c0c7d4] leading-relaxed">
              Automated multi-stage approval matrices, scheduled agent replacements, exception handlers, REST API webhooks, and desktop robotic process automation.
            </p>
            <div className="pt-2 border-t border-[#282a2e] flex flex-wrap gap-1">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">Error Tracing</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">Adaptive Cards</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">OData Filters</span>
            </div>
          </div>

          {/* Card 3: Dataverse */}
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#00dbe7]/20 border border-[#00dbe7]/40 flex items-center justify-center text-[#00dbe7]">
              <Database className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Microsoft Dataverse</h3>
              <p className="text-xs text-[#00dbe7] font-mono">Relational Enterprise Data</p>
            </div>
            <p className="text-xs text-[#c0c7d4] leading-relaxed">
              Enterprise relational data modeling, custom tables, 1:N &amp; N:N relationships, business rules, field-level encryption, environment isolation, and role-based access.
            </p>
            <div className="pt-2 border-t border-[#282a2e] flex flex-wrap gap-1">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">Security Roles</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">Audit Trails</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">Elastic Tables</span>
            </div>
          </div>

          {/* Card 4: AI Builder */}
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#cda2ff]/20 border border-[#cda2ff]/40 flex items-center justify-center text-[#cda2ff]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">AI Builder &amp; Copilot</h3>
              <p className="text-xs text-[#cda2ff] font-mono">Intelligent Automation</p>
            </div>
            <p className="text-xs text-[#c0c7d4] leading-relaxed">
              Custom prompt engineering, document processing, text classification, semantic search ranking, sentiment analysis, and Copilot Studio conversational agents.
            </p>
            <div className="pt-2 border-t border-[#282a2e] flex flex-wrap gap-1">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">NLP Classifier</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">SOP Extraction</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e2024] text-[#c0c7d4]">RAG Search</span>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Development Stack with Percentage Gauges */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold flex items-center space-x-2">
          <Code2 className="w-4 h-4" />
          <span>Development Stack &amp; Pro-Code Extensions</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEV_STACK.map((item, idx) => (
            <div key={idx} className="bg-[#161b22] p-4 rounded-2xl border border-[#282a2e] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#1e2024] text-xs font-mono font-bold flex items-center justify-center border border-[#282a2e]" style={{ color: item.color }}>
                    {item.code}
                  </span>
                  <span className="text-xs font-bold text-white">{item.name}</span>
                </div>
                <span className="text-xs font-mono font-bold" style={{ color: item.color }}>{item.percentage}%</span>
              </div>

              {/* Progress Bar */}
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: ALM & Enterprise Governance matching Image 8 */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold flex items-center space-x-2">
          <GitBranch className="w-4 h-4" />
          <span>ALM &amp; Enterprise Governance</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GOVERNANCE_ITEMS.map((gov, idx) => (
            <div key={idx} className="bg-[#161b22] p-5 rounded-2xl border border-[#282a2e] space-y-3 hover:border-[#0078d4]/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-[#1e2024] border border-[#282a2e] flex items-center justify-center text-[#a3c9ff]">
                <span className="material-symbols-outlined text-lg">{gov.icon}</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{gov.name}</h3>
                <p className="text-xs text-[#c0c7d4] mt-1 leading-relaxed">{gov.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Core Business Competencies matching Image 8 */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Core Business Competencies</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BUSINESS_COMPETENCIES.map((comp, idx) => (
            <div key={idx} className="bg-[#161b22] p-5 rounded-2xl border border-[#282a2e] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#0078d4]/20 border border-[#0078d4]/40 flex items-center justify-center text-[#a3c9ff]">
                <span className="material-symbols-outlined text-lg">{comp.icon}</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">{comp.title}</h3>
                <p className="text-xs text-[#c0c7d4] mt-1 leading-relaxed">{comp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Extended Technical Skills & Core Competencies */}
      <section className="space-y-4 pt-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold flex items-center space-x-2">
          <Briefcase className="w-4 h-4" />
          <span>Extended Technical Skills &amp; Leadership Capabilities</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ADDITIONAL_COMPETENCIES.map((category, idx) => (
            <div key={idx} className="bg-[#1a1c20] p-6 rounded-2xl border border-[#282a2e] space-y-4 hover:border-[#0078d4]/40 transition-all">
              <h3 className="text-sm font-bold text-white tracking-wide border-b border-[#282a2e] pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2"> {/* gap-2 ensures exact 8px spacing */}
                {category.skills.map((skill, sIdx) => {
                  // Determine specific icons for tools
                  const isTool = category.category === "Support Tools & Platforms";
                  const lcSkill = skill.toLowerCase();
                  let IconMatch = null;
                  
                  if (isTool) {
                    if (lcSkill.includes("salesforce")) IconMatch = <Database className="w-3.5 h-3.5 text-[#00a1e0] mr-1.5 shrink-0" />;
                    else if (lcSkill.includes("jira")) IconMatch = <Layers className="w-3.5 h-3.5 text-[#2684FF] mr-1.5 shrink-0" />;
                    else if (lcSkill.includes("power bi")) IconMatch = <BarChart className="w-3.5 h-3.5 text-[#F2C811] mr-1.5 shrink-0" />;
                    else if (lcSkill.includes("teams")) IconMatch = <MonitorPlay className="w-3.5 h-3.5 text-[#464EB8] mr-1.5 shrink-0" />;
                    else if (lcSkill.includes("excel")) IconMatch = <FileText className="w-3.5 h-3.5 text-[#107C41] mr-1.5 shrink-0" />;
                    else IconMatch = <Terminal className="w-3.5 h-3.5 text-[#a3c9ff] mr-1.5 shrink-0" />;
                  }

                  return (
                    <span 
                      key={sIdx} 
                      className={`text-xs px-2.5 py-1.5 rounded-lg bg-[#111318] text-[#c0c7d4] border border-[#282a2e] flex items-center ${isTool ? 'font-medium' : ''}`}
                    >
                      {IconMatch}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
