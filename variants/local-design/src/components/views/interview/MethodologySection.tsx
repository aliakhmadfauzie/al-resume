import React from 'react';
import { Search, PenTool, Rocket, Gauge, CheckCircle2 } from 'lucide-react';
import { METHODOLOGY_PHASES } from '../../../data/hiringManagerData';
import { SectionShell } from './SectionShell';

const PHASE_ICONS = [Search, PenTool, Rocket, Gauge];
const PHASE_COLORS = ['#dab9ff', '#a3c9ff', '#00dbe7', '#74f5ff'];

export const MethodologySection: React.FC = () => (
  <SectionShell
    id="hm-section-methodology"
    step="03"
    kicker="Architect Methodology"
    title="How I Design Solutions"
    description="A repeatable four-phase methodology — the same one that delivered 16 production Power Apps from 361 legacy forms."
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {METHODOLOGY_PHASES.map((phase, idx) => {
        const Icon = PHASE_ICONS[idx % PHASE_ICONS.length];
        const accent = PHASE_COLORS[idx % PHASE_COLORS.length];
        return (
          <div key={phase.id} className="glass-card rounded-3xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${accent}14`,
                  borderColor: `${accent}55`,
                  color: accent
                }}
              >
                <Icon className="w-5 h-5" />
              </span>
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#3a3e47] font-bold">
                  Phase {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">{phase.phase}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#c0c7d4] leading-relaxed italic border-l-2 pl-3" style={{ borderColor: accent }}>
              {phase.summary}
            </p>

            <div className="space-y-2.5">
              {phase.activities.map((activity) => (
                <div
                  key={activity.title}
                  className="p-3.5 rounded-xl bg-[#111318] border border-[#282a2e] space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
                    <span className="text-xs sm:text-sm font-bold text-white">{activity.title}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#c0c7d4] leading-relaxed pl-6">
                    {activity.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </SectionShell>
);
