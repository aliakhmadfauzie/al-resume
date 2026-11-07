import React from 'react';
import { ProfileMode } from '../types';
import {
  Cpu,
  Users,
  Code2,
  Globe,
  Briefcase,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ExecutiveSummaryProps {
  currentMode?: ProfileMode;
}

interface SummaryCard {
  icon: React.ReactNode;
  label: string;
  headline: string;
  detail: string;
  accent: string;
  trackLabel: string;
}

/**
 * Executive Summary
 *
 * Four-card TL;DR for hiring managers. 30-second read: who he is, what
 * he ships, how he leads, and where he's based. Renders above the
 * Impact Dashboard and adjusts tone per active track.
 */
export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  currentMode = 'full',
}) => {
  const isArch = currentMode === 'architecture' || currentMode === 'architect';
  const isOps = currentMode === 'operations';

  const cards: SummaryCard[] = [
    {
      icon: <Cpu className="w-4 h-4" />,
      label: 'WHO',
      headline: 'Fullstack Engineer &amp; Mobile Architect',
      detail:
        '9+ years across Android, iOS, and enterprise web. Ships code-first, low-code, and AI workflows end-to-end.',
      accent: '#1d4ed8',
      trackLabel: 'Architecture',
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      label: 'WHAT',
      headline: '16+ Production Apps · 19 Engagements',
      detail:
        'Lotus Domino sunset, C# plugin pipelines, AI Builder copilots, mobile (Swift/Kotlin/RN), and 120+ Power Automate flows.',
      accent: '#b45309',
      trackLabel: 'Delivery',
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: 'LEAD',
      headline: '34-FTE Multilingual Squads · 7 Markets',
      detail:
        'Scaled Concentrix BPO teams to 98% SLA, engineered Lark bot automations that cut manual reporting 90%.',
      accent: '#0f766e',
      trackLabel: 'Operations',
    },
    {
      icon: <Globe className="w-4 h-4" />,
      label: 'WHERE',
      headline: 'Kuala Lumpur · Open to Global',
      detail:
        'Currently based in MY. Hybrid across APAC. Available for enterprise engagements, fractional leadership, and architecture reviews.',
      accent: '#7c3aed',
      trackLabel: 'Logistics',
    },
  ];

  const activeCardIndex = isArch ? 0 : isOps ? 2 : -1;

  return (
    <section
      id="summary"
      className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        {/* Section Header */}
        <div className="mb-10">
          <span className="label-mono mb-4 block">
            00 — Executive Snapshot
          </span>
          <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
            Read this in 30 seconds
          </h2>
          <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
            Four cards. The full story. Hiring managers should walk away knowing
            exactly who Ali is, what he ships, how he leads, and where to find him.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => {
            const isActive = activeCardIndex === i;
            return (
              <div
                key={c.label}
                className={`relative bg-[#fdfdfc] border p-5 sm:p-6 flex flex-col transition-all group ${
                  isActive
                    ? 'shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                    : 'border-[#e0e0d8] hover:border-[#121212]'
                }`}
                style={
                  isActive
                    ? { borderColor: c.accent, borderWidth: 2 }
                    : undefined
                }
              >
                {/* Top label + icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 border"
                      style={{ borderColor: c.accent, color: c.accent }}
                    >
                      {c.icon}
                    </span>
                    <span
                      className="font-mono-code text-[10px] uppercase tracking-[0.2em] font-semibold"
                      style={{ color: c.accent }}
                    >
                      {c.label}
                    </span>
                  </div>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-[#6b6b63] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Headline */}
                <h3
                  className="font-serif-display italic text-xl sm:text-2xl font-light leading-tight mb-3"
                  style={{ color: c.accent }}
                  dangerouslySetInnerHTML={{ __html: c.headline }}
                />

                {/* Detail */}
                <p className="text-xs sm:text-sm text-[#444440] leading-relaxed flex-1">
                  {c.detail}
                </p>

                {/* Track label footer */}
                <div className="mt-4 pt-3 border-t border-[#e0e0d8] font-mono-code text-[0.6rem] uppercase tracking-wider text-[#6b6b63] flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: c.accent }}
                  />
                  <span>{c.trackLabel}</span>
                  {isActive && (
                    <>
                      <span className="text-[#6b6b63]">·</span>
                      <span className="font-semibold" style={{ color: c.accent }}>
                        Active Track
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified badges row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs font-mono-code uppercase tracking-wider text-[#444440]">
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="w-3 h-3 text-[#0f766e]" />
            <span>9+ Years Enterprise</span>
          </span>
          <span className="text-[#e0e0d8]">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Award className="w-3 h-3 text-[#b45309]" />
            <span>15 Verified Credentials</span>
          </span>
          <span className="text-[#e0e0d8]">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#7c3aed]" />
            <span>5-Star Testimonials</span>
          </span>
          <span className="text-[#e0e0d8]">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#1d4ed8]" />
            <span>Open to Global Roles</span>
          </span>
        </div>
      </div>
    </section>
  );
};
