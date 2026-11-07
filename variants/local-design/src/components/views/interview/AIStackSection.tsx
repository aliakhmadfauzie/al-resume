import React from 'react';
import { FlaskConical, Code2, Building2, Sparkles, Bot } from 'lucide-react';
import { AI_WORKFORCE_STACKS, AI_USE_CASES } from '../../../data/hiringManagerData';
import { SectionShell } from './SectionShell';

const STACK_ICONS = [FlaskConical, Code2, Building2];
const STACK_ACCENTS = ['#dab9ff', '#00dbe7', '#a3c9ff'];

export const AIStackSection: React.FC = () => (
  <SectionShell
    id="hm-section-ai-stack"
    step="05"
    kicker="AI Workforce"
    title="My AI & Automation Stack"
    description="AI is not a demo for me — it is a workforce. I run three stacks in parallel: research, development, and enterprise-grade delivery."
  >
    <div className="space-y-8">
      {/* Three stacks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {AI_WORKFORCE_STACKS.map((stack, idx) => {
          const Icon = STACK_ICONS[idx % STACK_ICONS.length];
          const accent = STACK_ACCENTS[idx % STACK_ACCENTS.length];
          return (
            <div key={stack.id} className="glass-card rounded-3xl p-5 sm:p-6 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" style={{ color: accent }} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: accent }}>
                    {stack.category}
                  </span>
                </div>
                <p className="text-xs text-[#c0c7d4] leading-relaxed">{stack.description}</p>
              </div>
              <div className="space-y-2.5">
                {stack.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3.5 rounded-xl bg-[#111318] border border-[#282a2e] space-y-1"
                  >
                    <div className="text-xs sm:text-sm font-bold text-white">{tool.name}</div>
                    <p className="text-[11px] sm:text-xs text-[#c0c7d4] leading-relaxed">
                      {tool.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Use cases */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Bot className="w-4 h-4 text-[#00dbe7]" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold">
            Proven Use Cases in Delivery
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {AI_USE_CASES.map((useCase) => (
            <div key={useCase.title} className="glass-card rounded-2xl p-5 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Sparkles className="w-4 h-4 text-[#dab9ff] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">{useCase.title}</span>
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-[#c0c7d4] leading-relaxed">
                {useCase.detail}
              </p>
              {useCase.metric && (
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-bold text-[#001013] bg-[#00dbe7] rounded-md px-2 py-1">
                  {useCase.metric}
                </span>
              )}
            </div>
          ))}

          {/* 50+ agents highlight */}
          <div className="rounded-2xl p-5 border border-[#0078d4]/50 bg-[#0078d4]/10 space-y-2">
            <div className="text-2xl font-extrabold text-white">50+ AI Agents</div>
            <p className="text-xs text-[#c0c7d4] leading-relaxed">
              Specialized agents across 12 automated workflow pipelines — Azure OpenAI GPT-4o with
              Retrieval-Augmented Generation, guarded by Data Loss Prevention policies.
            </p>
            <div className="text-sm font-bold text-[#a3c9ff]">-70% form migration effort</div>
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
);
