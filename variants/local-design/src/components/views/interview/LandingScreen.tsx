import React from 'react';
import {
  Sparkles,
  PlayCircle,
  Compass,
  Clock,
  LayoutGrid,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  MessageSquareQuote
} from 'lucide-react';
import { HIRING_MANAGER_INTRO, HIRING_MANAGER_METRICS } from '../../../data/hiringManagerData';

interface LandingScreenProps {
  onStartGuided: () => void;
  onExplore: () => void;
}

const METRIC_ICONS = [Sparkles, PlayCircle, Users, DollarSign, Award];

export const LandingScreen: React.FC<LandingScreenProps> = ({ onStartGuided, onExplore }) => (
  <div className="space-y-10 py-4">
    {/* Hero */}
    <div className="relative overflow-hidden rounded-3xl glass-card p-6 sm:p-12">
      <div className="glow-circle w-72 h-72 bg-[#0078d4]/25 -top-24 -right-24" />
      <div className="glow-circle w-72 h-72 bg-[#00dbe7]/15 -bottom-32 -left-24" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold">
          <MessageSquareQuote className="w-4 h-4" />
          <span>Hiring Manager Experience</span>
          <span className="text-[#3a3e47]">•</span>
          <span className="text-[#a3c9ff] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {HIRING_MANAGER_INTRO.duration}
          </span>
          <span className="text-[#3a3e47]">•</span>
          <span className="text-[#a3c9ff] flex items-center gap-1">
            <LayoutGrid className="w-3.5 h-3.5" />
            {HIRING_MANAGER_INTRO.sectionCount}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {HIRING_MANAGER_INTRO.greeting}
        </h1>

        <p className="text-sm sm:text-lg text-[#e2e8f0] font-medium max-w-3xl leading-relaxed">
          {HIRING_MANAGER_INTRO.positioning}
        </p>

        <p className="text-xs sm:text-sm text-[#c0c7d4] max-w-3xl leading-relaxed">
          {HIRING_MANAGER_INTRO.purpose}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onStartGuided}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] transition-colors shadow-[0_8px_24px_rgba(0,219,231,0.18)]"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Start Guided Interview</span>
          </button>
          <button
            onClick={onExplore}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#e2e8f0] border border-white/[0.14] bg-transparent hover:bg-white/[0.06] hover:border-white/[0.25] transition-colors"
          >
            <Compass className="w-4 h-4 text-[#a3c9ff]" />
            <span>Explore Freely</span>
          </button>
        </div>
      </div>
    </div>

    {/* Key metrics */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {HIRING_MANAGER_METRICS.map((metric, idx) => {
        const Icon = METRIC_ICONS[idx % METRIC_ICONS.length];
        return (
          <div
            key={metric.label}
            className="glass-card rounded-2xl p-4 sm:p-5 text-center space-y-1.5"
          >
            <Icon className="w-4 h-4 text-[#00dbe7] mx-auto" />
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {metric.value}
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#a3c9ff] font-semibold leading-snug">
              {metric.label}
            </div>
          </div>
        );
      })}
    </div>

    {/* What you'll get */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {[
        {
          icon: Users,
          title: 'Who I Am',
          detail: 'Career journey from analyst to CEO-led delivery practice.'
        },
        {
          icon: TrendingUp,
          title: 'How I Deliver',
          detail: 'Flagship projects, architecture methodology, and measurable outcomes.'
        },
        {
          icon: LayoutGrid,
          title: 'How I Lead',
          detail: 'Operating cadence, team systems, and a concrete first-90-days plan.'
        }
      ].map((item) => (
        <div key={item.title} className="glass-card rounded-2xl p-5 space-y-2">
          <item.icon className="w-5 h-5 text-[#dab9ff]" />
          <div className="text-sm font-bold text-white">{item.title}</div>
          <p className="text-xs text-[#c0c7d4] leading-relaxed">{item.detail}</p>
        </div>
      ))}
    </div>
  </div>
);
