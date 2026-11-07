import React from 'react';
import {
  ClipboardCheck,
  ListChecks,
  Rocket,
  CalendarRange,
  CheckCircle2
} from 'lucide-react';
import { FIRST_90_DAYS } from '../../../data/hiringManagerData';
import { SectionShell } from './SectionShell';

const PHASE_ICONS = [ClipboardCheck, ListChecks, Rocket];

export const NinetyDaysSection: React.FC = () => (
  <SectionShell
    id="hm-section-ninety-days"
    step="06"
    kicker="First 90 Days"
    title="How I Would Approach Your Company"
    description="A concrete, phase-by-phase plan — because 'I'd hit the ground running' is not a plan. This helps you visualize hiring me."
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {FIRST_90_DAYS.map((phase, idx) => {
        const Icon = PHASE_ICONS[idx % PHASE_ICONS.length];
        return (
          <div key={phase.id} className="glass-card rounded-3xl p-5 sm:p-6 space-y-4 relative overflow-hidden">
            {/* connector arrow for desktop */}
            {idx < FIRST_90_DAYS.length - 1 && (
              <div className="hidden lg:flex absolute top-8 -right-3 z-10 w-6 h-6 rounded-full bg-[#0078d4] border-2 border-[#111318] items-center justify-center">
                <span className="text-[10px] font-bold text-white">→</span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#0078d4]/15 border border-[#0078d4]/40 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#a3c9ff]" />
              </span>
              <div className="space-y-0.5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#00dbe7] font-bold flex items-center gap-1">
                  <CalendarRange className="w-3 h-3" />
                  {phase.window}
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">{phase.phase}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#c0c7d4] leading-relaxed italic border-l-2 border-[#00dbe7] pl-3">
              {phase.summary}
            </p>

            <div className="space-y-2.5">
              {phase.focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-3.5 rounded-xl bg-[#111318] border border-[#282a2e] space-y-1.5"
                >
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe7] shrink-0" />
                    {area.title}
                  </div>
                  <ul className="space-y-1 pl-5">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className="text-[11px] sm:text-xs text-[#c0c7d4] leading-relaxed list-disc marker:text-[#00dbe7]/60"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </SectionShell>
);
