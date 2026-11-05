import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../../data/portfolioData';
import { Briefcase, MapPin, Filter } from 'lucide-react';

export const ExperienceView: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = [
    'all',
    'Six Sigma Green Belt',
    'Dataverse',
    'Power Apps',
    'Power BI',
    'SLA Management',
    'ALM Pipelines'
  ];

  const filteredExperience =
    selectedTag === 'all'
      ? WORK_EXPERIENCE
      : WORK_EXPERIENCE.filter((exp) =>
          exp.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
        );

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <p className="text-xs font-mono text-[#60a5fa] font-medium">
          01 · Track Record &amp; Operations Leadership
        </p>
        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          Professional Experience &amp; Leadership History
        </h1>
        <p className="text-base text-[#cbd5e1] max-w-3xl leading-relaxed">
          Over 9 years driving enterprise modernizations, managing international cross-functional squads across 7 global markets, and architecting mission-critical digital workflows.
        </p>
      </div>

      {/* Tag Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <span className="text-xs font-mono text-[var(--text-tertiary)] shrink-0 flex items-center space-x-1.5">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter Competency:</span>
        </span>
        <div className="flex items-center space-x-1.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium whitespace-nowrap transition-colors ${
                selectedTag === tag
                  ? 'bg-[var(--accent-blue)] text-white'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {tag === 'all' ? 'All Roles' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative pl-6 md:pl-16 space-y-8">
        <div className="timeline-track" />

        {filteredExperience.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[30px] md:-left-[54px] top-1.5 w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-focus)] p-1.5 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-[#3b82f6]" />
            </div>

            {/* Experience Card */}
            <div className="glass-card p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] tracking-tight">
                      {item.role}
                    </h3>
                    {item.isCurrent && (
                      <span className="text-xs font-mono text-[#60a5fa] font-medium">
                        · Active Role
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-[#60a5fa]">{item.company}</p>
                </div>

                <div className="flex flex-col sm:items-end space-y-1 font-mono text-xs text-[var(--text-secondary)]">
                  <span className="text-[var(--text-primary)] font-medium">{item.period}</span>
                  {item.location && (
                    <span className="flex items-center space-x-1 text-[11px] text-[var(--text-tertiary)]">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-2.5">
                    <span className="text-[#3b82f6] mt-1 shrink-0 font-mono">·</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Unboxed Metadata Tags */}
              <div className="pt-3 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-tertiary)]">
                {item.tags.join(' · ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
