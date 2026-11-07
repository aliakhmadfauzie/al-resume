import React, { useState } from 'react';
import { skillCategories, languagesData } from '../data/resumeData';
import { ProfileMode } from '../types';
import {
  Cpu,
  Code2,
  Sparkles,
  Users,
  Terminal,
  Globe,
  Search,
  Check,
  Star,
} from 'lucide-react';

interface SkillsSectionProps {
  currentMode?: ProfileMode;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentMode = 'full' }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const isArch = currentMode === 'architecture' || currentMode === 'architect';
  const isOps = currentMode === 'operations';

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#121212]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#121212]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#121212]" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#121212]" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-[#121212]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#121212]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="label-mono mb-4 block">
              07 — Technical & Operational Stack
            </span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Skills & Core Competencies
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              Bridging low-code enterprise velocity with pro-code engineering, AI workflow orchestration, and high-scale operational leadership.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-80 relative font-mono-code">
            <Search className="w-3.5 h-3.5 text-[#6b6b63] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full bg-[#f7f7f0] border border-[#e0e0d8] pl-9 pr-3 py-2 text-xs text-[#121212] placeholder-[#6b6b63] focus:outline-none focus:border-[#121212]"
            />
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => {
            const filteredSkills = category.skills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (s.yearsOrScope && s.yearsOrScope.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            const isTrackPrimary =
              (isArch && (category.iconName === 'Cpu' || category.iconName === 'Code2' || category.iconName === 'Terminal')) ||
              (isOps && (category.iconName === 'Users' || category.iconName === 'Sparkles'));

            return (
              <div
                key={category.title}
                className={`bg-[#fdfdfc] border p-6 transition-all flex flex-col justify-between ${
                  isTrackPrimary
                    ? isArch
                      ? 'border-[#1d4ed8] shadow-[0_2px_12px_rgba(29,78,216,0.06)]'
                      : 'border-[#0f766e] shadow-[0_2px_12px_rgba(15,118,110,0.06)]'
                    : 'border-[#e0e0d8] hover:border-[#121212]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e0e0d8]">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#f7f7f0] border border-[#e0e0d8]">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <div>
                        <h3 className="font-serif-display italic text-2xl font-light text-[#121212]">
                          {category.title}
                        </h3>
                        <p className="label-mono text-[#6b6b63]">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    {isTrackPrimary && (
                      <span className={`text-[0.6rem] font-mono-code uppercase px-2 py-0.5 font-semibold shrink-0 ${
                        isArch ? 'bg-blue-100 text-[#1d4ed8]' : 'bg-teal-100 text-[#0f766e]'
                      }`}>
                        Track Focus
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    {filteredSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 p-2 bg-[#f7f7f0] border border-[#e0e0d8] text-xs"
                      >
                        <div className="flex items-start gap-2 shrink-0 min-w-0 max-w-full">
                          {skill.highlight ? (
                            <Star className="w-3 h-3 text-[#121212] fill-[#121212] shrink-0 mt-0.5" />
                          ) : (
                            <Check className="w-3 h-3 text-[#6b6b63] shrink-0 mt-0.5" />
                          )}
                          <span className="font-normal text-[#121212] leading-snug min-w-0 break-words">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center justify-end gap-1.5 shrink-0 font-mono-code text-[0.65rem] uppercase tracking-wider">
                          {skill.yearsOrScope && (
                            <span className="px-1.5 py-0.5 bg-[#fdfdfc] text-[#6b6b63] border border-[#e0e0d8]">
                              {skill.yearsOrScope}
                            </span>
                          )}
                          <span className="px-1.5 py-0.5 bg-[#121212] text-[#fdfdfc]">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Strip */}
        <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#121212]" />
              <h3 className="font-serif-display italic text-2xl font-light text-[#121212]">
                Multilingual Operations & Global Communication
              </h3>
            </div>
            <span className="label-mono text-[#6b6b63]">
              7 Regional Markets Covered
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languagesData.map((lang) => (
              <div
                key={lang.language}
                className="bg-[#fdfdfc] p-4 border border-[#e0e0d8] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{lang.flag}</span>
                  <div>
                    <span className="block text-sm font-medium text-[#121212]">
                      {lang.language}
                    </span>
                    <span className="block font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
                      {lang.proficiency}
                    </span>
                  </div>
                </div>
                <span className="font-mono-code text-[0.65rem] text-[#121212]">VERIFIED</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

