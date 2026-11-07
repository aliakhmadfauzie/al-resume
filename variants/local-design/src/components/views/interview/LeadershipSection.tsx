import React from 'react';
import {
  CalendarDays,
  Users,
  GitBranch,
  AlarmClock,
  BarChart3,
  Scale,
  CheckCircle2
} from 'lucide-react';
import {
  OPERATING_CADENCE,
  TEAM_MANAGEMENT,
  DECISION_FRAMEWORK
} from '../../../data/hiringManagerData';
import { SectionShell } from './SectionShell';

const TEAM_ICONS = [Users, GitBranch, AlarmClock, BarChart3];
const TEAM_COLORS = ['#00dbe7', '#a3c9ff', '#dab9ff', '#74f5ff'];

export const LeadershipSection: React.FC = () => (
  <SectionShell
    id="hm-section-leadership"
    step="04"
    kicker="Leadership Operating System"
    title="How I Lead Teams"
    description="Most candidates show projects. Few show leadership systems. This is mine — the same system that scaled a team 380% while holding 98%+ SLA compliance."
  >
    <div className="space-y-8">
      {/* Operating cadence */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <CalendarDays className="w-4 h-4 text-[#00dbe7]" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold">
            Weekly Operating Cadence
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {OPERATING_CADENCE.map((item) => (
            <div key={item.day} className="glass-card rounded-2xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#00dbe7] bg-[#00dbe7]/10 border border-[#00dbe7]/30 rounded-lg px-2.5 py-1">
                  {item.day}
                </span>
              </div>
              <div className="text-sm font-extrabold text-white">{item.focus}</div>
              <p className="text-xs text-[#c0c7d4] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team management */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Users className="w-4 h-4 text-[#dab9ff]" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold">
            Team Management Systems
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TEAM_MANAGEMENT.map((item, idx) => {
            const Icon = TEAM_ICONS[idx % TEAM_ICONS.length];
            const accent = TEAM_COLORS[idx % TEAM_COLORS.length];
            return (
              <div key={item.title} className="glass-card rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 shrink-0" style={{ color: accent }} />
                  <span className="text-xs sm:text-sm font-bold text-white">{item.title}</span>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[11px] sm:text-xs text-[#c0c7d4] leading-relaxed"
                    >
                      <CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" style={{ color: accent }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decision framework */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Scale className="w-4 h-4 text-[#00dbe7]" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
            Decision Framework
          </h3>
        </div>
        <div className="space-y-3">
          {DECISION_FRAMEWORK.map((item) => (
            <div
              key={item.question}
              className="glass-card rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-3 items-start"
            >
              <div className="text-sm font-bold text-white md:col-span-1">{item.question}</div>
              <p className="text-xs sm:text-sm text-[#c0c7d4] leading-relaxed md:col-span-2">
                {item.approach}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionShell>
);
