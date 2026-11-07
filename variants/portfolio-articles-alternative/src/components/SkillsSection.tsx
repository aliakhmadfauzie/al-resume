import React, { useState, useRef, useLayoutEffect } from 'react';
import { skillCategories, languagesData } from '../data/resumeData';
import { ProfileMode } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillsSectionProps {
  currentMode?: ProfileMode;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentMode = 'full' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activePopover, setActivePopover] = useState<{ name: string; info: string } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const isArch = currentMode === 'architecture' || currentMode === 'architect';
  const isOps = currentMode === 'operations';

  const getSkillInfoDetails = (skillName: string): string => {
    switch (skillName.toLowerCase()) {
      case 'microsoft power platform':
      case 'power apps & power automate':
        return 'Architected 361 legacy form migrations to Power Apps canvas & model-driven apps, reducing licensing overhead by MYR 360,000/yr.';
      case 'dataverse relational modeling':
      case 'dataverse':
        return 'Designed enterprise relational schemas with strict role-based security, entity relationships, auditing log triggers, and GxP compliance.';
      case 'c# plugin development':
      case 'c# & azure functions':
        return 'Engineered production C# plugins for Microsoft Dynamics 365 / Dataverse executing synchronous business rules & asynchronous queue syncs.';
      case 'lark open platform':
      case 'lark bot webhooks':
        return 'Certified Lark Open Platform Developer building production bot webhooks for automated attendance, shift handovers, and IT ticketing.';
      case 'bpo squad leadership (34 fte)':
      case 'telemetry & wfm governance':
        return 'Managed 34-member multilingual squads across 7 APAC markets at Concentrix, maintaining >98% SLA benchmarks and real-time WFM queues.';
      case 'react native & swift':
      case 'cross-platform mobile apps':
        return 'Engineered offline-first iOS (Swift) & Android (Kotlin / React Native) mobile apps with SQLite sync engines and 60fps UI performance.';
      case 'generative ai & gemini api':
      case 'ai builder prompts':
        return 'Integrated @google/genai SDK pipelines for automated markdown generation, PowerFx AI Builder prompts, and smart resume engines.';
      default:
        return `Expert proficiency in ${skillName} with verified enterprise delivery across architecture, mobile, and operations.`;
    }
  };

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

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.skill-category-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            y: 40,
            opacity: 0,
            scale: 0.98,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="label-mono mb-4 block">
              07 — Technical &amp; Operational Stack
            </span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Skills &amp; Core Competencies
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              Bridging low-code enterprise velocity with pro-code engineering, AI workflow orchestration, and high-scale operational leadership. Click <span className="font-mono-code text-xs text-[#1d4ed8] font-bold">+ info</span> on any skill for architectural insights.
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
                className={`skill-category-card bg-[#fdfdfc] border p-6 transition-all flex flex-col justify-between will-change-transform ${
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
                        className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 p-2 bg-[#f7f7f0] border border-[#e0e0d8] text-xs hover:border-[#121212] transition-colors group"
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
                          {/* Genially + info trigger button */}
                          <button
                            onClick={() =>
                              setActivePopover({
                                name: skill.name,
                                info: getSkillInfoDetails(skill.name),
                              })
                            }
                            className="px-1.5 py-0.5 bg-[#1d4ed8]/10 text-[#1d4ed8] border border-[#1d4ed8]/30 hover:bg-[#1d4ed8] hover:text-white transition-colors cursor-pointer font-bold"
                            title="Click for Genially deep-dive + info"
                          >
                            + info
                          </button>
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

        {/* Genially-Inspired Interactive Popover Tooltip Modal */}
        {activePopover && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setActivePopover(null)}
          >
            <div
              className="bg-[#fdfdfc] border-2 border-[#121212] p-6 max-w-md w-full shadow-2xl space-y-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#e0e0d8] pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1d4ed8]" />
                  <span className="font-mono-code text-xs uppercase tracking-wider text-[#121212] font-semibold">
                    Skill Deep-Dive • + info
                  </span>
                </div>
                <button
                  onClick={() => setActivePopover(null)}
                  className="px-2 py-0.5 font-mono-code text-xs bg-[#f7f7f0] border border-[#e0e0d8] hover:bg-[#121212] hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div>
                <h4 className="font-serif-display italic text-2xl text-[#121212] font-light mb-2">
                  {activePopover.name}
                </h4>
                <p className="text-sm font-light text-[#444440] leading-relaxed">
                  {activePopover.info}
                </p>
              </div>

              <div className="pt-2 border-t border-[#e0e0d8] flex items-center justify-between text-[0.68rem] font-mono-code uppercase text-[#6b6b63]">
                <span>Verified Competency</span>
                <button
                  onClick={() => setActivePopover(null)}
                  className="text-[#1d4ed8] font-bold underline cursor-pointer"
                >
                  Close Popover
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Languages Strip */}
        <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#121212]" />
              <h3 className="font-serif-display italic text-2xl font-light text-[#121212]">
                Multilingual Operations &amp; Global Communication
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

