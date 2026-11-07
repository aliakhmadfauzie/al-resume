import React, { useState } from 'react';
import {
  Lightbulb,
  GitBranch,
  Boxes,
  TrendingUp,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  Code2,
  Layers,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { DELIVERY_CASE_STUDIES } from '../../../data/hiringManagerData';
import { INTERVIEW_TOPICS, CORE_PROJECTS } from '../../../data/portfolioData';
import { SectionShell } from './SectionShell';

const TOPIC_ICONS = [Layers, ShieldCheck, Code2, Cpu];

export const PortfolioSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(DELIVERY_CASE_STUDIES[0].id);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const activeCase =
    DELIVERY_CASE_STUDIES.find((c) => c.id === activeCaseId) || DELIVERY_CASE_STUDIES[0];
  const activeProject = CORE_PROJECTS.find((p) => p.id === activeCase.projectId);

  return (
    <SectionShell
      id="hm-section-portfolio"
      step="02"
      kicker="Flagship Delivery"
      title="Enterprise Delivery Portfolio"
      description="Each project follows Situation → Approach → Architecture → Outcome → Lessons Learned. This is how senior-level delivery is documented — not just shipped."
    >
      <div className="space-y-6">
        {/* Case study tabs */}
        <div className="flex flex-wrap gap-2">
          {DELIVERY_CASE_STUDIES.map((study) => {
            const project = CORE_PROJECTS.find((p) => p.id === study.projectId);
            const isActive = study.id === activeCaseId;
            return (
              <button
                key={study.id}
                onClick={() => setActiveCaseId(study.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                  isActive
                    ? 'bg-[#0078d4]/20 text-white border-[#0078d4]/60 shadow-lg shadow-[#0078d4]/10'
                    : 'bg-[#161b22] text-[#c0c7d4] border-[#282a2e] hover:bg-[#1a1c20] hover:text-white'
                }`}
              >
                {project?.title || study.id}
              </button>
            );
          })}
        </div>

        {/* Active case study */}
        <div className="glass-card rounded-3xl p-5 sm:p-8 space-y-6">
          <div className="space-y-1 border-b border-[#282a2e] pb-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
              {activeProject?.subtitle || activeCase.tagline}
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {(activeProject?.tools || []).map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] font-mono uppercase tracking-wide px-2.5 py-1 rounded-md bg-[#111318] text-[#a3c9ff] border border-[#282a2e] font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Situation */}
            <div className="space-y-2 p-4 rounded-2xl bg-[#111318] border border-[#282a2e] lg:col-span-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                Situation
              </div>
              <p className="text-xs sm:text-sm text-[#c0c7d4] leading-relaxed">{activeCase.situation}</p>
            </div>

            {/* Approach */}
            <div className="space-y-2 p-4 rounded-2xl bg-[#111318] border border-[#282a2e]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5" />
                Approach
              </div>
              <ul className="space-y-2">
                {activeCase.approach.map((step, idx) => (
                  <li key={idx} className="flex gap-2 text-xs sm:text-sm text-[#c0c7d4] leading-relaxed">
                    <span className="font-mono text-[10px] text-[#00dbe7] font-bold pt-0.5 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div className="space-y-2 p-4 rounded-2xl bg-[#111318] border border-[#282a2e]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold flex items-center gap-1.5">
                <Boxes className="w-3.5 h-3.5" />
                Architecture
              </div>
              <ul className="space-y-2">
                {activeCase.architecture.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-xs sm:text-sm text-[#c0c7d4] leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe7] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="space-y-2 p-4 rounded-2xl bg-[#111318] border border-[#282a2e]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Outcome
              </div>
              <div className="grid grid-cols-3 gap-2">
                {activeCase.outcome.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl bg-[#1a1c20] border border-[#282a2e] p-3 text-center space-y-1"
                  >
                    <div className="text-base sm:text-lg font-extrabold text-white">
                      {metric.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wide text-[#a3c9ff] leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons learned */}
            <div className="space-y-2 p-4 rounded-2xl bg-[#111318] border border-[#282a2e]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Lessons Learned
              </div>
              <ul className="space-y-2">
                {activeCase.lessonsLearned.map((lesson, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-xs sm:text-sm text-[#c0c7d4] leading-relaxed"
                  >
                    <span className="text-[#dab9ff] font-bold shrink-0">→</span>
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technical defense Q&A */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <Code2 className="w-4 h-4 text-[#00dbe7]" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold">
              Technical Defense Q&amp;A
            </h3>
          </div>

          <div className="space-y-2">
            {INTERVIEW_TOPICS.map((topic, idx) => {
              const Icon = TOPIC_ICONS[idx % TOPIC_ICONS.length];
              const isExpanded = expandedTopic === topic.id;
              return (
                <div
                  key={topic.id}
                  className="rounded-2xl border border-[#282a2e] bg-[#161b22] overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                    className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-[#1a1c20] transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className="w-4 h-4 text-[#00dbe7] shrink-0" />
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#00dbe7] font-semibold">
                          {topic.category}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {topic.question}
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#a3c9ff] shrink-0 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-5 space-y-4 border-t border-[#282a2e]">
                      <div className="p-4 rounded-xl bg-[#0078d4]/10 border border-[#0078d4]/30">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#a3c9ff] font-bold mb-1.5">
                          Executive Summary
                        </div>
                        <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                          {topic.executiveSummary}
                        </p>
                      </div>

                      <div className="text-xs sm:text-sm text-[#c0c7d4] leading-relaxed whitespace-pre-line bg-[#111318] p-4 rounded-xl border border-[#282a2e]">
                        {topic.deepDiveArchitecture}
                      </div>

                      {topic.codeOrFlowSnippet && (
                        <pre className="p-4 rounded-xl bg-[#0c0e12] border border-[#282a2e] text-[11px] font-mono text-[#a3c9ff] overflow-x-auto leading-relaxed">
                          <code>{topic.codeOrFlowSnippet}</code>
                        </pre>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {topic.keyArtifacts.map((artifact) => (
                          <span
                            key={artifact}
                            className="text-xs font-medium px-3 py-1 rounded-lg bg-[#1a1c20] text-white border border-[#282a2e] flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe7]" />
                            {artifact}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
