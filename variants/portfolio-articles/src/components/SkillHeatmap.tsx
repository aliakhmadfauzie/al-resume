import React, { useState, useMemo } from 'react';
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
  Star,
  Check,
} from 'lucide-react';

interface SkillHeatmapProps {
  currentMode?: ProfileMode;
}

// Map level strings to a 1–5 proficiency bar
function levelToScore(level: string): number {
  const l = level.toLowerCase();
  if (l.includes('expert') || l.includes('principal')) return 5;
  if (l.includes('production') || l.includes('advanced') || l.includes('lead')) return 4;
  if (l.includes('proficient') || l.includes('intermediate') || l.includes('experienced'))
    return 3;
  if (l.includes('familiar') || l.includes('working') || l.includes('practitioner'))
    return 2;
  return 2;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-4 h-4" />,
  Code2: <Code2 className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
  Terminal: <Terminal className="w-4 h-4" />,
};

const CATEGORY_ACCENT: Record<string, string> = {
  Cpu: '#1d4ed8',
  Code2: '#b45309',
  Sparkles: '#7c3aed',
  Users: '#0f766e',
  Terminal: '#121212',
};

/**
 * Skill Heatmap
 *
 * Horizontal bar heatmap of technical & operational skills. 1–5 dot
 * proficiency indicator, scope/year badge, and category color coding.
 * Search filterable. Replaces the dense skill card list in SkillsSection.
 */
export const SkillHeatmap: React.FC<SkillHeatmapProps> = ({ currentMode = 'full' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const isArch = currentMode === 'architecture' || currentMode === 'architect';
  const isOps = currentMode === 'operations';

  // Flatten all skills with category metadata for the heatmap
  const flatSkills = useMemo(() => {
    return skillCategories.flatMap((cat) =>
      cat.skills.map((s) => ({
        ...s,
        categoryTitle: cat.title,
        categoryIcon: cat.iconName,
        categorySubtitle: cat.subtitle,
      }))
    );
  }, []);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return flatSkills;
    const q = searchQuery.toLowerCase();
    return flatSkills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.level.toLowerCase().includes(q) ||
        (s.yearsOrScope && s.yearsOrScope.toLowerCase().includes(q)) ||
        s.categoryTitle.toLowerCase().includes(q)
    );
  }, [flatSkills, searchQuery]);

  // Group by category for rendering
  const grouped = useMemo(() => {
    const map = new Map<
      string,
      {
        title: string;
        subtitle: string;
        iconName: string;
        skills: typeof flatSkills;
      }
    >();
    for (const s of filtered) {
      const k = s.categoryTitle;
      if (!map.has(k)) {
        map.set(k, {
          title: s.categoryTitle,
          subtitle: s.categorySubtitle,
          iconName: s.categoryIcon,
          skills: [],
        });
      }
      map.get(k)!.skills.push(s);
    }
    return Array.from(map.entries());
  }, [filtered]);

  // Track focus highlight
  const isCategoryFocused = (iconName: string) => {
    if (isArch)
      return iconName === 'Cpu' || iconName === 'Code2' || iconName === 'Terminal';
    if (isOps) return iconName === 'Users' || iconName === 'Sparkles';
    return false;
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="label-mono mb-4 block">07 — Technical & Operational Stack</span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Skills &amp; Core Competencies
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              A heatmap of proficiencies across mobile, web, low-code, AI, and operations disciplines.
              5-dot rating = expert; 4 = production-grade.
            </p>
          </div>

          {/* Search */}
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

        {/* Heatmap grouped by category */}
        <div className="space-y-8">
          {grouped.map(([key, group]) => {
            const accent = CATEGORY_ACCENT[group.iconName] ?? '#121212';
            const focused = isCategoryFocused(group.iconName);
            return (
              <div
                key={key}
                className={`bg-[#fdfdfc] border p-5 sm:p-6 transition-colors ${
                  focused
                    ? isArch
                      ? 'border-[#1d4ed8]'
                      : 'border-[#0f766e]'
                    : 'border-[#e0e0d8]'
                }`}
              >
                {/* Category header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#e0e0d8]">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 border"
                      style={{ borderColor: accent, color: accent }}
                    >
                      {CATEGORY_ICONS[group.iconName] ?? <Cpu className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="font-serif-display italic text-xl sm:text-2xl font-light text-[#121212]">
                        {group.title}
                      </h3>
                      <p className="label-mono text-[#6b6b63]">{group.subtitle}</p>
                    </div>
                  </div>
                  {focused && (
                    <span
                      className={`text-[0.6rem] font-mono-code uppercase px-2 py-0.5 font-semibold shrink-0 ${
                        isArch
                          ? 'bg-blue-100 text-[#1d4ed8]'
                          : 'bg-teal-100 text-[#0f766e]'
                      }`}
                    >
                      Track Focus
                    </span>
                  )}
                </div>

                {/* Skills as horizontal heatmap rows */}
                <ul className="space-y-1.5">
                  {group.skills.map((s) => {
                    const score = levelToScore(s.level);
                    return (
                      <li
                        key={`${key}-${s.name}`}
                        className="grid grid-cols-12 gap-2 sm:gap-3 items-center py-1.5 px-2 hover:bg-[#f7f7f0] transition-colors"
                      >
                        {/* Name + highlight star */}
                        <div className="col-span-12 sm:col-span-5 flex items-center gap-2 min-w-0">
                          {s.highlight ? (
                            <Star
                              className="w-3 h-3 shrink-0"
                              style={{ color: accent, fill: accent }}
                            />
                          ) : (
                            <Check className="w-3 h-3 text-[#6b6b63] shrink-0" />
                          )}
                          <span className="text-xs sm:text-sm text-[#121212] truncate">
                            {s.name}
                          </span>
                        </div>

                        {/* Heatmap dots (5) */}
                        <div className="col-span-7 sm:col-span-4 flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className="h-2 flex-1 transition-all"
                              style={{
                                background:
                                  dot <= score ? accent : '#fdfdfc',
                                border: `1px solid ${dot <= score ? accent : '#e0e0d8'}`,
                              }}
                            />
                          ))}
                        </div>

                        {/* Scope + level badges */}
                        <div className="col-span-5 sm:col-span-3 flex items-center justify-end gap-1.5 font-mono-code text-[0.6rem] sm:text-[0.65rem] uppercase tracking-wider">
                          {s.yearsOrScope && (
                            <span className="px-1.5 py-0.5 bg-[#fdfdfc] text-[#6b6b63] border border-[#e0e0d8] truncate max-w-[90px]">
                              {s.yearsOrScope}
                            </span>
                          )}
                          <span
                            className="px-1.5 py-0.5 text-white"
                            style={{ background: accent }}
                          >
                            {s.level}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {grouped.length === 0 && (
          <div className="text-center py-12 text-sm font-mono-code text-[#6b6b63] uppercase tracking-wider">
            No skills match &quot;{searchQuery}&quot;
          </div>
        )}

        {/* Languages Strip */}
        <div className="mt-10 bg-[#f7f7f0] border border-[#e0e0d8] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#121212]" />
              <h3 className="font-serif-display italic text-2xl font-light text-[#121212]">
                Multilingual Operations &amp; Global Communication
              </h3>
            </div>
            <span className="label-mono text-[#6b6b63]">7 Regional Markets Covered</span>
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
