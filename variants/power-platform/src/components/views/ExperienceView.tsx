import React, { useState } from 'react';
import { WORK_EXPERIENCE, PERSONAL_INFO } from '../../data/portfolioData';
import { 
  ShieldCheck, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Award, 
  TrendingUp, 
  CheckCircle2,
  Filter,
  Layers,
  Sparkles
} from 'lucide-react';

export const ExperienceView: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', 'Six Sigma Green Belt', 'Dataverse', 'Power Apps', 'Power BI', 'SLA Management', 'ALM Pipelines'];

  const filteredExperience = selectedTag === 'all'
    ? WORK_EXPERIENCE
    : WORK_EXPERIENCE.filter(exp => exp.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase()));

  return (
    <div className="space-y-12 py-6 animate-in fade-in duration-300">
      
      {/* Header matching Image 7 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>Track Record &amp; Leadership</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional Experience &amp; Leadership History
        </h1>
        <p className="text-xs sm:text-sm text-[#c0c7d4] max-w-3xl leading-relaxed">
          Over 9 years driving enterprise modernizations, managing international cross-functional squads across 7 global markets, and architecting mission-critical digital workflows.
        </p>
      </div>

      {/* Tag Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <span className="text-xs font-mono text-[#c0c7d4] uppercase tracking-wider shrink-0 flex items-center space-x-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter Focus:</span>
        </span>
        <div className="flex items-center space-x-1.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-[#0078d4] text-white shadow-sm'
                  : 'bg-[#1a1c20] text-[#c0c7d4] hover:text-white border border-[#282a2e]'
              }`}
            >
              {tag === 'all' ? 'All Roles' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Section matching Image 7 */}
      <div className="relative pl-6 md:pl-16 space-y-10">
        <div className="timeline-track"></div>

        {filteredExperience.map((item, idx) => (
          <div key={item.id} className="relative group">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[30px] md:-left-[54px] top-1.5 w-10 h-10 rounded-xl bg-[#1e2024] border-2 border-[#0078d4] p-1 flex items-center justify-center shadow-lg shadow-[#0078d4]/20 group-hover:scale-110 transition-transform">
              <img
                src={item.iconUrl}
                alt={item.company}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
                className="w-full h-full object-contain rounded-lg"
              />
              <Briefcase className="w-4 h-4 text-[#a3c9ff] hidden fallback-icon" />
            </div>

            {/* Experience Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#282a2e] pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{item.role}</h3>
                    {item.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-[#00dbe7]/20 text-[#00dbe7] border border-[#00dbe7]/40 text-[10px] font-mono font-bold uppercase">
                        Current Role
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-[#a3c9ff]">{item.company}</p>
                </div>

                <div className="flex flex-col sm:items-end space-y-1 font-mono text-xs text-[#c0c7d4]">
                  <span className="bg-[#111318] px-3 py-1 rounded-full border border-[#282a2e] font-bold text-white">
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="flex items-center space-x-1 text-[11px] text-[#c0c7d4]">
                      <MapPin className="w-3 h-3 text-[#dab9ff]" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#c0c7d4] leading-relaxed">
                {item.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-2.5">
                    <span className="text-[#00dbe7] mt-1 shrink-0 font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="pt-3 border-t border-[#282a2e] flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-[#111318] text-[#c0c7d4] border border-[#282a2e] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
