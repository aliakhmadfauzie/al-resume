import React from 'react';
import { Briefcase, Target, Sparkles, ArrowDown } from 'lucide-react';
import { CAREER_JOURNEY } from '../../../data/hiringManagerData';
import { SectionShell } from './SectionShell';

export const JourneySection: React.FC = () => (
  <SectionShell
    id="hm-section-journey"
    step="01"
    kicker="Career Progression"
    title="My Journey"
    description="Six stages, one trajectory: from analyzing data to owning delivery outcomes. Each role compounded the next."
  >
    <div className="relative pl-7 sm:pl-12">
      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#5c2d91] via-[#0078d4] to-[#00dbe7]" />

      <div className="space-y-5">
        {CAREER_JOURNEY.map((role) => (
          <div key={role.id} className="relative">
            <span className="absolute -left-[30px] sm:-left-[50px] top-7 w-3 h-3 rounded-full bg-[#00dbe7] ring-4 ring-[#111318]" />

            <div className="glass-card rounded-2xl p-5 sm:p-6 space-y-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider font-bold text-[#001013] bg-[#00dbe7] rounded-lg px-2.5 py-1">
                    {role.stage}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-bold text-white truncate">{role.title}</div>
                    <div className="text-[11px] sm:text-xs text-[#a3c9ff] font-medium">
                      {role.company} · {role.period}
                    </div>
                  </div>
                </div>
                <span className="hidden md:flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#3a3e47] font-semibold shrink-0">
                  <ArrowDown className="w-3 h-3" />
                  {role.stage}
                </span>
              </div>

              {/* Responsibility & Achievement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2e] space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#a3c9ff] font-bold flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3" />
                    Responsibility
                  </div>
                  <p className="text-xs text-[#c0c7d4] leading-relaxed">{role.responsibility}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2e] space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#dab9ff] font-bold flex items-center gap-1.5">
                    <Target className="w-3 h-3" />
                    Key Achievement
                  </div>
                  <p className="text-xs text-[#c0c7d4] leading-relaxed">{role.achievement}</p>
                </div>
              </div>

              {/* Skills gained */}
              <div className="flex flex-wrap gap-2">
                {role.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-3 py-1 rounded-lg bg-[#1a1c20] text-white border border-[#282a2e] flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3 h-3 text-[#00dbe7]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
);
