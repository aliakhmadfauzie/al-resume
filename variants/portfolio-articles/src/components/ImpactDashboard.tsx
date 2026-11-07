import React, { useState } from 'react';
import {
  TrendingUp,
  Globe,
  Cpu,
  Users,
  Zap,
  Award,
  Briefcase,
  Target,
  Code2,
  Bot,
  Building2,
  GitBranch,
  ArrowUpRight,
  Sparkles,
  Layers,
} from 'lucide-react';

type Track = 'all' | 'architecture' | 'operations';

interface ImpactDashboardProps {
  defaultTrack?: Track;
}

/**
 * At-a-Glance Impact Dashboard
 *
 * A scannable, visual-first summary of the resume. Hiring managers should
 * absorb the headline value in under 10 seconds: 12 KPI tiles, a track mix
 * donut, a horizontal bar chart of "By the Numbers", and a 3-card speed
 * showcase. The component is fully self-contained; no props required.
 */
export const ImpactDashboard: React.FC<ImpactDashboardProps> = ({
  defaultTrack = 'all',
}) => {
  const [track, setTrack] = useState<Track>(defaultTrack);

  // --- Headline KPIs (12 tiles, 3 rows of 4) -----------------------------
  const allKpis = [
    { label: 'Years Enterprise Experience', value: '9+', sub: 'Android • iOS • Web', track: 'all' as Track, icon: <Briefcase className="w-3.5 h-3.5" />, accent: '#121212' },
    { label: 'Production Apps Delivered', value: '16+', sub: 'Native + Cross-Platform', track: 'all' as Track, icon: <Code2 className="w-3.5 h-3.5" />, accent: '#121212' },
    { label: 'Multilingual Agents Scaled', value: '34', sub: 'Across 7 APAC Markets', track: 'operations' as Track, icon: <Users className="w-3.5 h-3.5" />, accent: '#0f766e' },
    { label: 'SLA Compliance', value: '98%', sub: 'BPO Telemetry, 36 months', track: 'operations' as Track, icon: <Target className="w-3.5 h-3.5" />, accent: '#0f766e' },
    { label: 'Lotus Forms Modernized', value: '418+', sub: 'Across 36 Departments', track: 'architecture' as Track, icon: <Layers className="w-3.5 h-3.5" />, accent: '#1d4ed8' },
    { label: 'Dataverse Tables Engineered', value: '60+', sub: 'Relational + Plugin-Backed', track: 'architecture' as Track, icon: <DatabaseIcon />, accent: '#1d4ed8' },
    { label: 'C# Plugins Authored', value: '40+', sub: 'Stage 10/20/40 Pipelines', track: 'architecture' as Track, icon: <GitBranch className="w-3.5 h-3.5" />, accent: '#1d4ed8' },
    { label: 'Power Automate Flows', value: '120+', sub: 'Approval + Notification', track: 'all' as Track, icon: <Zap className="w-3.5 h-3.5" />, accent: '#b45309' },
    { label: 'AI Builder Models', value: '8', sub: 'Classification + Extraction', track: 'architecture' as Track, icon: <Bot className="w-3.5 h-3.5" />, accent: '#7c3aed' },
    { label: 'License Cost Saved', value: 'MYR 360K/yr', sub: 'Standard Connectors Only', track: 'architecture' as Track, icon: <TrendingUp className="w-3.5 h-3.5" />, accent: '#1d4ed8' },
    { label: 'Manual Reporting Cut', value: '-90%', sub: 'Lark Bot Automation', track: 'operations' as Track, icon: <Sparkles className="w-3.5 h-3.5" />, accent: '#0f766e' },
    { label: 'Approval Cycle Time', value: '15 min', sub: 'From 3 Business Days', track: 'all' as Track, icon: <Award className="w-3.5 h-3.5" />, accent: '#b45309' },
  ];

  const visibleKpis = allKpis.filter((k) => k.track === 'all' || k.track === track || track === 'all');

  // --- Track mix donut ---------------------------------------------------
  const trackMix = [
    { label: 'Architecture & Solution Engineering', value: 11, color: '#1d4ed8' },
    { label: 'Operations & BPO Leadership', value: 4, color: '#0f766e' },
    { label: 'Mobile Engineering (iOS / Android)', value: 4, color: '#b45309' },
  ];
  const totalSegments = trackMix.reduce((s, x) => s + x.value, 0);

  // SVG donut parameters
  const RADIUS = 56;
  const STROKE = 18;
  const CIRC = 2 * Math.PI * RADIUS;
  let offsetAcc = 0;
  const donutSegments = trackMix.map((seg) => {
    const len = (seg.value / totalSegments) * CIRC;
    const segObj = (
      <circle
        key={seg.label}
        cx="70"
        cy="70"
        r={RADIUS}
        fill="transparent"
        stroke={seg.color}
        strokeWidth={STROKE}
        strokeDasharray={`${len} ${CIRC - len}`}
        strokeDashoffset={-offsetAcc}
        transform="rotate(-90 70 70)"
        className="transition-all duration-700"
      />
    );
    offsetAcc += len;
    return segObj;
  });

  // --- "By the Numbers" horizontal bar chart -----------------------------
  const byTheNumbers = [
    { label: 'Form Modernization Speed', value: 96, color: '#1d4ed8' },
    { label: 'Operational SLA Uptime', value: 98, color: '#0f766e' },
    { label: 'Audit Compliance', value: 100, color: '#121212' },
    { label: 'Code Coverage on Plugins', value: 92, color: '#7c3aed' },
    { label: 'Multilingual Coverage', value: 88, color: '#b45309' },
  ];

  // --- Speed showcase (3 small case-study chips) ------------------------
  const speedChips = [
    { before: '3 days', after: '15 min', what: 'Rebate Approval', accent: '#dc2626' },
    { before: 'Manual', after: '-90%', what: 'Queue Reporting', accent: '#0f766e' },
    { before: '6 hrs', after: '5 min', what: 'Onboarding New Hire', accent: '#1d4ed8' },
  ];

  return (
    <section
      id="impact"
      className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="label-mono mb-4 block">01 — At a Glance</span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Impact Dashboard
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              The numbers that matter. Toggle tracks to scope the dashboard to architecture or
              operations delivery.
            </p>
          </div>

          {/* Track filter */}
          <div className="flex items-center gap-1.5 bg-[#f7f7f0] p-1.5 border border-[#e0e0d8] self-start md:self-auto font-mono-code text-xs">
            {(['all', 'architecture', 'operations'] as Track[]).map((t) => (
              <button
                key={t}
                onClick={() => setTrack(t)}
                className={`px-3 py-1.5 text-[0.7rem] uppercase tracking-wider transition-all ${
                  track === t
                    ? 'bg-[#121212] text-[#fdfdfc] font-medium'
                    : 'text-[#444440] hover:text-[#121212]'
                }`}
              >
                {t === 'all' ? 'All Tracks' : t === 'architecture' ? 'Architecture' : 'Operations'}
              </button>
            ))}
          </div>
        </div>

        {/* KPI grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {visibleKpis.map((k) => (
            <div
              key={k.label}
              className="relative bg-[#fdfdfc] border border-[#e0e0d8] p-4 sm:p-5 hover:border-[#121212] transition-colors group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 border"
                  style={{ borderColor: k.accent, color: k.accent }}
                >
                  {k.icon}
                </span>
                <ArrowUpRight
                  className="w-3 h-3 text-[#6b6b63] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div
                className="font-serif-display italic text-2xl sm:text-3xl md:text-4xl font-light leading-none mb-1"
                style={{ color: k.accent }}
              >
                {k.value}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-[#121212] leading-tight">
                {k.label}
              </div>
              <div className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-wider text-[#6b6b63] mt-1">
                {k.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Mid-row: Donut + Bar Chart + Speed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Track Mix Donut */}
          <div className="lg:col-span-4 bg-[#f7f7f0] border border-[#e0e0d8] p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4 text-[#121212]" />
              <h3 className="font-serif-display italic text-xl sm:text-2xl font-light text-[#121212]">
                Track Mix
              </h3>
              <span className="ml-auto font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
                {totalSegments} Engagements
              </span>
            </div>

            <div className="flex items-center gap-5">
              <svg
                viewBox="0 0 140 140"
                className="w-32 h-32 sm:w-36 sm:h-36 shrink-0"
                aria-label="Track mix donut chart"
              >
                <circle
                  cx="70"
                  cy="70"
                  r={RADIUS}
                  fill="transparent"
                  stroke="#fdfdfc"
                  strokeWidth={STROKE}
                />
                {donutSegments}
                <text
                  x="70"
                  y="65"
                  textAnchor="middle"
                  className="font-serif-display italic fill-[#121212]"
                  style={{ fontSize: 24 }}
                >
                  19
                </text>
                <text
                  x="70"
                  y="84"
                  textAnchor="middle"
                  className="font-mono-code fill-[#6b6b63]"
                  style={{ fontSize: 9, letterSpacing: 1 }}
                >
                  PROJECTS
                </text>
              </svg>

              <ul className="space-y-2.5 text-xs">
                {trackMix.map((seg) => (
                  <li key={seg.label} className="flex items-start gap-2">
                    <span
                      className="w-2.5 h-2.5 mt-1 shrink-0"
                      style={{ background: seg.color }}
                    />
                    <div>
                      <div className="font-medium text-[#121212] leading-tight">
                        {seg.value} {seg.value === 1 ? 'Project' : 'Projects'}
                      </div>
                      <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                        {seg.label}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* By the Numbers Bar Chart */}
          <div className="lg:col-span-5 bg-[#f7f7f0] border border-[#e0e0d8] p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-4 h-4 text-[#121212]" />
              <h3 className="font-serif-display italic text-xl sm:text-2xl font-light text-[#121212]">
                By the Numbers
              </h3>
            </div>

            <ul className="space-y-3">
              {byTheNumbers.map((b) => (
                <li key={b.label} className="text-xs">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-medium text-[#121212]">{b.label}</span>
                    <span
                      className="font-mono-code font-semibold text-sm"
                      style={{ color: b.color }}
                    >
                      {b.value}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#fdfdfc] border border-[#e0e0d8] overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000"
                      style={{
                        width: `${b.value}%`,
                        background: b.color,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Speed Showcase */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-[#b45309]" />
              <h3 className="font-serif-display italic text-xl sm:text-2xl font-light text-[#121212]">
                Speed Wins
              </h3>
            </div>
            {speedChips.map((c) => (
              <div
                key={c.what}
                className="bg-[#fdfdfc] border border-[#e0e0d8] p-4 flex-1"
              >
                <div className="font-mono-code text-[9px] uppercase tracking-wider text-[#6b6b63] mb-1.5">
                  {c.what}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono-code text-xs line-through text-[#6b6b63]">
                    {c.before}
                  </span>
                  <span className="text-[#6b6b63]">→</span>
                  <span
                    className="font-serif-display italic text-2xl sm:text-3xl font-light leading-none"
                    style={{ color: c.accent }}
                  >
                    {c.after}
                  </span>
                </div>
                <div className="text-[11px] text-[#444440] leading-snug">
                  Cycle compression
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer caption */}
        <div className="mt-6 text-center text-[10px] sm:text-xs font-mono-code text-[#6b6b63] uppercase tracking-wider">
          Verified across 19 enterprise engagements • Independent references available on request
        </div>
      </div>
    </section>
  );
};

// Inline icon helper (Database not in the lucide-react import block)
function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  );
}
