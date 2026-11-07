import React, { useState } from 'react';
import { timelineData } from '../data/resumeData';
import { ProfileMode } from '../types';
import {
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

interface TimelineSectionProps {
  currentMode: ProfileMode;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ currentMode }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'education'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('independent-consultant-2025');

  const filteredItems = timelineData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  const getNodeIcon = (type: string, category: string) => {
    if (type === 'education') {
      return <GraduationCap className="w-3.5 h-3.5 text-[#121212]" />;
    }
    return <Briefcase className="w-3.5 h-3.5 text-[#121212]" />;
  };

  return (
    <section id="timeline" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="label-mono mb-4 block">
              04 — Chronological Career Narrative
            </span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Career Trajectory & Milestones
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              Professional trajectory across Enterprise Architecture, Multilingual Contact Center Leadership, and Academic Foundations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#f7f7f0] p-1.5 border border-[#e0e0d8] self-start md:self-auto font-mono-code text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-[0.7rem] uppercase tracking-wider transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#121212] text-[#fdfdfc] font-medium'
                  : 'text-[#444440] hover:text-[#121212]'
              }`}
            >
              All ({timelineData.length})
            </button>
            <button
              onClick={() => setActiveFilter('experience')}
              className={`px-3 py-1.5 text-[0.7rem] uppercase tracking-wider transition-all ${
                activeFilter === 'experience'
                  ? 'bg-[#121212] text-[#fdfdfc] font-medium'
                  : 'text-[#444440] hover:text-[#121212]'
              }`}
            >
              Experience (6)
            </button>
            <button
              onClick={() => setActiveFilter('education')}
              className={`px-3 py-1.5 text-[0.7rem] uppercase tracking-wider transition-all ${
                activeFilter === 'education'
                  ? 'bg-[#121212] text-[#fdfdfc] font-medium'
                  : 'text-[#444440] hover:text-[#121212]'
              }`}
            >
              Education (1)
            </button>
          </div>
        </div>

        {/* Timeline Items List */}
        <div className="space-y-6">
          {filteredItems.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#fdfdfc] border border-[#e0e0d8] p-6 sm:p-8 hover:border-[#121212] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 mb-4 border-b border-[#e0e0d8]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-[#f7f7f0] border border-[#e0e0d8] flex items-center justify-center">
                        {getNodeIcon(item.type, item.category)}
                      </div>
                      <span className="label-mono text-[#6b6b63]">
                        {item.company}
                      </span>
                      <span className="text-[#6b6b63] text-xs">•</span>
                      <span className="flex items-center gap-1 font-mono-code text-[0.65rem] text-[#6b6b63] uppercase tracking-wider">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-display italic text-2xl sm:text-3xl font-light text-[#121212]">
                      {item.role}
                    </h3>
                  </div>

                  <div className="font-mono-code text-xs uppercase tracking-wider text-[#121212] bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-1.5 self-start md:self-auto">
                    {item.period}
                  </div>
                </div>

                {/* Metrics strip */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-3 bg-[#f7f7f0] border border-[#e0e0d8]">
                    {item.metrics.map((metric, idx) => {
                      const text = `${metric.label} ${metric.value}`.toLowerCase();
                      const isTeal = text.includes('fte') || text.includes('sla') || text.includes('agent') || text.includes('attrition') || text.includes('csat') || text.includes('scale');
                      return (
                        <div key={idx}>
                          <span className={`block font-mono-code text-base font-semibold ${isTeal ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'}`}>
                            {metric.value}
                          </span>
                          <span className="block font-mono-code text-[10px] uppercase tracking-wider text-[#444440] font-medium">
                            {metric.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Description Bullets */}
                <div className="space-y-2 mb-4">
                  {(isExpanded ? item.description : item.description.slice(0, 2)).map(
                    (bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-[#444440] leading-relaxed">
                        <span className="font-mono-code text-[#6b6b63] select-none mt-0.5">—</span>
                        <span>{bullet}</span>
                      </div>
                    )
                  )}
                </div>

                {item.description.length > 2 && (
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="text-[0.7rem] font-mono-code uppercase tracking-wider text-[#121212] hover:underline flex items-center gap-1 mb-4"
                  >
                    <span>{isExpanded ? 'Show less' : `Show all (${item.description.length}) details`}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#e0e0d8]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#f7f7f0] text-[#444440] border border-[#e0e0d8]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-xs font-mono-code text-[#6b6b63] uppercase tracking-wider">
          Complete professional timeline • verified with references & project documentation
        </div>
      </div>
    </section>
  );
};

