import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WORK_EXPERIENCE } from '../../data/portfolioData';
import { 
  ShieldCheck, 
  Briefcase, 
  MapPin, 
  Filter 
} from 'lucide-react';
import { AppleCard3D } from '../canvas/AppleCard3D';
import { Section3D } from '../canvas/Section3D';

export const ExperienceView: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', 'Six Sigma Green Belt', 'Dataverse', 'Power Apps', 'Power BI', 'SLA Management', 'ALM Pipelines'];

  const filteredExperience = selectedTag === 'all'
    ? WORK_EXPERIENCE
    : WORK_EXPERIENCE.filter(exp => exp.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase()));

  return (
    <div className="space-y-12 py-6">
      
      {/* Keynote Header */}
      <Section3D initialRotateX={4} initialY={20} className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-medium text-neutral-300">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2997ff]" />
          <span>TRANSFORMATION LEADERSHIP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter apple-text-gradient leading-[1.08]">
          Leadership &amp; Program Delivery Track Record
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl">
          Over 9 years leading enterprise modernizations, managing international cross-functional teams across 7 global markets, and owning multi-year transformation programs from executive buy-in to operational cutover.
        </p>
      </Section3D>

      {/* Leadership Credibility Strip (Keynote Bento with 3D Tilt) */}
      <Section3D delay={0.05} className="relative overflow-hidden rounded-3xl apple-card p-6 sm:p-10 space-y-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold">Program &amp; Team Leadership Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AppleCard3D maxTilt={7} className="apple-card bg-white/[0.02] p-6 rounded-2xl space-y-1 h-full">
            <p className="text-3xl sm:text-4xl font-bold text-white font-mono">34</p>
            <p className="text-xs font-semibold text-neutral-200 mt-2">Direct Reports Led</p>
            <p className="text-[11px] text-neutral-400 font-mono">7 international markets</p>
          </AppleCard3D>
          <AppleCard3D maxTilt={7} className="apple-card bg-white/[0.02] p-6 rounded-2xl space-y-1 h-full">
            <p className="text-3xl sm:text-4xl font-bold text-[#2997ff] font-mono">380%</p>
            <p className="text-xs font-semibold text-neutral-200 mt-2">Capacity Growth</p>
            <p className="text-[11px] text-neutral-400 font-mono">9 → 34 agents with 98%+ SLA</p>
          </AppleCard3D>
          <AppleCard3D maxTilt={7} className="apple-card bg-white/[0.02] p-6 rounded-2xl space-y-1 h-full">
            <p className="text-3xl sm:text-4xl font-bold text-[#bf5af2] font-mono">28+</p>
            <p className="text-xs font-semibold text-neutral-200 mt-2">Stakeholder Units</p>
            <p className="text-[11px] text-neutral-400 font-mono">Multi-year migration program</p>
          </AppleCard3D>
          <AppleCard3D maxTilt={7} className="apple-card bg-white/[0.02] p-6 rounded-2xl space-y-1 h-full">
            <p className="text-3xl sm:text-4xl font-bold text-[#30d158] font-mono">98%+</p>
            <p className="text-xs font-semibold text-neutral-200 mt-2">SLA Compliance</p>
            <p className="text-[11px] text-neutral-400 font-mono">361 forms, 2,000+ users</p>
          </AppleCard3D>
        </div>
      </Section3D>

      {/* Tag Filters (Segmented Pill) */}
      <Section3D delay={0.05} className="flex items-center gap-2 overflow-x-auto p-1.5 bg-neutral-900/60 backdrop-blur-2xl rounded-full border border-white/10 w-fit scrollbar-none">
        <Filter className="w-4 h-4 text-neutral-400 shrink-0 ml-2 mr-1" />
        <div className="flex items-center gap-1.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {tag === 'all' ? 'All Roles' : tag}
            </button>
          ))}
        </div>
      </Section3D>

      {/* Timeline Section with 3D Card Tilt */}
      <div className="relative pl-6 md:pl-10 space-y-8 border-l border-white/10 ml-4 md:ml-6">
        {filteredExperience.map((item, idx) => (
          <Section3D key={item.id} delay={idx * 0.04} className="relative group">
            {/* Timeline Node Indicator */}
            <div className="absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full bg-black border-2 border-[#2997ff] shadow-[0_0_12px_rgba(41,151,255,0.4)] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            {/* Experience Card with 3D Tilt */}
            <AppleCard3D maxTilt={6} className="apple-card p-6 sm:p-8 rounded-3xl space-y-4 hover:border-white/20 transition-all">
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/[0.08] pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{item.role}</h3>
                    {item.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#30d158]/15 text-[#30d158] border border-[#30d158]/30 text-[10px] font-mono font-bold uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[#2997ff]">{item.company}</p>
                </div>

                <div className="flex flex-col sm:items-end space-y-1 font-mono text-xs text-neutral-400">
                  <span className="bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 font-bold text-white">
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="flex items-center space-x-1 text-[11px] text-neutral-400">
                      <MapPin className="w-3 h-3 text-[#bf5af2]" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {item.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-2.5">
                    <span className="text-[#2997ff] mt-1 shrink-0 font-bold text-xs">◆</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </AppleCard3D>
          </Section3D>
        ))}
      </div>

    </div>
  );
};
