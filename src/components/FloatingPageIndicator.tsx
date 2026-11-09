import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavTab } from '../types';
import {
  Compass,
  ArrowUp,
  Pin,
  PinOff,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export interface PageSectionItem {
  id: string;
  index: string;
  title: string;
  shortLabel: string;
  badge?: string;
}

export const PAGE_SECTIONS_REGISTRY: Record<NavTab, PageSectionItem[]> = {
  home: [
    { id: 'section-hero', index: '01', title: 'Executive Overview', shortLabel: 'Overview', badge: 'Hero' },
    { id: 'section-metrics', index: '02', title: 'Empirical Telemetry', shortLabel: 'Telemetry', badge: 'Metrics' },
    { id: 'section-services', index: '03', title: 'Core Architectural Pillars', shortLabel: 'Pillars', badge: 'Architecture' },
    { id: 'section-work', index: '04', title: 'Flagship Case Studies', shortLabel: 'Case Studies', badge: 'Flagships' },
    { id: 'section-about', index: '05', title: 'Career Trajectory & Pedigree', shortLabel: 'Trajectory', badge: 'Track Record' },
    { id: 'section-credentials', index: '06', title: 'Verified Credentials & Honors', shortLabel: 'Credentials', badge: 'Verified' },
    { id: 'section-testimonials', index: '07', title: 'Leadership Endorsements', shortLabel: 'Endorsements', badge: 'Quotes' },
    { id: 'section-contact', index: '08', title: 'Direct Executive Contact', shortLabel: 'Contact', badge: 'Connect' }
  ],
  projects: [
    { id: 'section-migration-hero', index: '01', title: 'Flagship Domino Cutover', shortLabel: 'Migration Banner', badge: '365+ DBs' },
    { id: 'section-consolidation', index: '02', title: 'Consolidation Telemetry', shortLabel: 'Consolidation', badge: '314 Groups' },
    { id: 'departmental-apps-showcase', index: '03', title: '13 Departmental Power Apps', shortLabel: '13 Apps Suite', badge: '52 Screens' },
    { id: 'section-case-studies', index: '04', title: 'Production Case Studies Grid', shortLabel: 'Case Studies', badge: 'Simulators' }
  ],
  skills: [
    { id: 'section-skills-ledger', index: '01', title: 'Technical Competency Ledger', shortLabel: 'Competency Ledger', badge: 'Ledger' },
    { id: 'section-arch-suite', index: '02', title: '5-Tier Power Platform Architecture', shortLabel: 'Architecture Stack', badge: '5 Layers' },
    { id: 'section-procode-stack', index: '03', title: 'Pro-Code Stack & PCF Controls', shortLabel: 'Pro-Code Stack', badge: 'React / TS' },
    { id: 'section-alm-governance', index: '04', title: 'ALM & Enterprise Governance', shortLabel: 'ALM Governance', badge: 'CI/CD & DLP' }
  ],
  experience: [
    { id: 'section-experience-header', index: '01', title: 'Executive Dossier & Identity', shortLabel: 'Dossier', badge: 'Profile' },
    { id: 'section-career-branches', index: '02', title: 'Dual-Track Career Specialization', shortLabel: 'Dual Track', badge: 'Specialization' },
    { id: 'section-timeline', index: '03', title: 'Enterprise Leadership Timeline', shortLabel: 'Timeline', badge: 'Experience' },
    { id: 'section-recognition', index: '04', title: 'Corporate Recognition & Awards', shortLabel: 'Awards & Honors', badge: 'Distinctions' }
  ],
  certifications: [
    { id: 'section-certifications-header', index: '01', title: 'Credentials Overview & Telemetry', shortLabel: 'Overview', badge: 'Summary' },
    { id: 'section-credentials-grid', index: '02', title: 'Verified Licensures & Accreditations', shortLabel: 'Licensures', badge: 'Verified' },
    { id: 'section-recognition', index: '03', title: 'Corporate Recognition & Distinctions', shortLabel: 'Recognition', badge: 'Honors' }
  ],
  demos: [
    { id: 'section-demos-header', index: '01', title: 'Enterprise Sandbox Telemetry', shortLabel: 'Telemetry Rail', badge: '10 Engines' },
    { id: 'section-demos-selector', index: '02', title: 'Simulators Catalog & Domains', shortLabel: 'Simulators', badge: 'Catalog' },
    { id: 'section-active-simulation', index: '03', title: 'Operational Simulation Sandbox', shortLabel: 'Live Sandbox', badge: 'Interactive' }
  ],
  interview: [
    { id: 'section-interview-header', index: '01', title: 'Architect Defense Console Header', shortLabel: 'Console', badge: 'Overview' },
    { id: 'section-career-narrative', index: '02', title: 'Four-Beat Career Story Arc', shortLabel: 'Career Story', badge: 'Narrative' },
    { id: 'section-defense-topics', index: '03', title: 'Architectural Defense Blueprints', shortLabel: 'Tradeoffs & Q&A', badge: 'Technical' }
  ]
};

interface FloatingPageIndicatorProps {
  currentTab: NavTab;
}

export const FloatingPageIndicator: React.FC<FloatingPageIndicatorProps> = ({ currentTab }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPinned, setIsPinned] = useState<boolean>(() => {
    try {
      return localStorage.getItem('portfolio-indicator-pinned') === 'true';
    } catch {
      return false;
    }
  });
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const isExpanded = isHovered || isPinned;

  const rawSections = useMemo(() => {
    return PAGE_SECTIONS_REGISTRY[currentTab] || [];
  }, [currentTab]);

  // Filter sections dynamically to only those that currently exist in the DOM
  const [availableSections, setAvailableSections] = useState<PageSectionItem[]>(rawSections);

  useEffect(() => {
    // Delay slightly to let the tab view finish mounting into the DOM
    const timer = setTimeout(() => {
      const filtered = rawSections.filter((sec) => document.getElementById(sec.id) !== null);
      setAvailableSections(filtered.length > 0 ? filtered : rawSections);
      if (filtered.length > 0) {
        setActiveSectionId(filtered[0].id);
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [currentTab, rawSections]);

  // Persist pin preference
  const togglePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !isPinned;
    setIsPinned(next);
    try {
      localStorage.setItem('portfolio-indicator-pinned', next ? 'true' : 'false');
    } catch {
      /* Safe in private mode */
    }
  };

  // Scroll Progress and IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / scrollHeight) * 100)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver to accurately track the reading section
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-15% 0px -65% 0px',
      threshold: 0
    });

    availableSections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [availableSections]);

  // Accurate Jump Function: accounts for sticky navbar height (90px)
  const handleJumpToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    const navOffset = 90;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setActiveSectionId(sectionId);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't render if the current page has fewer than 2 registered sections
  if (availableSections.length < 2) return null;

  return (
    <nav
      aria-label="Page section navigation shortcuts"
      className="fixed right-3 xl:right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end pointer-events-none"
    >
      <motion.div
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredItemId(null);
        }}
        className={`pointer-events-auto relative rounded-2xl bg-[#0c0d14]/85 hover:bg-[#0c0d14]/95 backdrop-blur-xl border border-white/[0.09] hover:border-orange-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_24px_rgba(249,115,22,0.06)] p-2 transition-all duration-300 ${
          isExpanded ? 'w-64 sm:w-72' : 'w-11'
        }`}
      >
        {/* Rail Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-2 px-1">
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center space-x-1.5 text-[10px] font-mono font-semibold text-[var(--text-accent)] uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 animate-spin-slow text-orange-400" />
                <span>Page Outline</span>
              </div>
              <button
                type="button"
                onClick={togglePin}
                className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                title={isPinned ? 'Unpin outline sidebar' : 'Pin outline sidebar expanded'}
                aria-label={isPinned ? 'Unpin outline' : 'Pin outline'}
              >
                {isPinned ? <PinOff className="w-3 h-3 text-orange-400" /> : <Pin className="w-3 h-3" />}
              </button>
            </motion.div>
          ) : (
            <div className="w-full flex justify-center py-0.5" title="Page Outline Navigation">
              <Compass className="w-4 h-4 text-orange-400/80" />
            </div>
          )}
        </div>

        {/* Vertical Rail Progress Line */}
        <div className="relative flex flex-col space-y-1.5">
          {/* Subtle connecting track line behind the dots */}
          {!isExpanded && (
            <div
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[1.5px] bg-white/[0.06] -z-0"
            />
          )}

          {availableSections.map((section) => {
            const isActive = activeSectionId === section.id;
            const isItemHovered = hoveredItemId === section.id;

            return (
              <div
                key={section.id}
                className="relative"
                onMouseEnter={() => setHoveredItemId(section.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                <button
                  type="button"
                  onClick={() => handleJumpToSection(section.id)}
                  aria-label={`Jump to section ${section.index}: ${section.title}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`w-full group relative flex items-center transition-all duration-200 cursor-pointer text-left rounded-lg ${
                    isExpanded
                      ? `p-1.5 space-x-2.5 ${
                          isActive
                            ? 'bg-orange-500/15 border border-orange-500/40 text-white'
                            : 'hover:bg-white/[0.05] border border-transparent text-zinc-400 hover:text-zinc-200'
                        }`
                      : `h-8 justify-center ${
                          isActive
                            ? 'text-orange-400'
                            : 'text-zinc-500 hover:text-zinc-300'
                        }`
                  }`}
                >
                  {/* Collapsed Mode: Clean Numeric Marker / Glow Pill */}
                  {!isExpanded && (
                    <div
                      className={`relative flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-mono transition-all duration-200 ${
                        isActive
                          ? 'bg-orange-500 text-[#090a0d] font-bold shadow-[0_0_12px_rgba(249,115,22,0.8)] scale-110'
                          : 'bg-[#181a24] border border-white/[0.1] hover:border-orange-500/40 hover:text-white'
                      }`}
                    >
                      <span>{section.index}</span>
                    </div>
                  )}

                  {/* Expanded Mode: Full Section Label & Badge */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between w-full min-w-0"
                    >
                      <div className="flex items-center space-x-2 min-w-0">
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            isActive
                              ? 'bg-orange-500 text-[#090a0d]'
                              : 'bg-white/[0.08] text-zinc-400 group-hover:text-zinc-200'
                          }`}
                        >
                          {section.index}
                        </span>
                        <span className="text-xs font-medium truncate">
                          {section.shortLabel}
                        </span>
                      </div>

                      {section.badge && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-400 shrink-0 ml-1">
                          {section.badge}
                        </span>
                      )}
                    </motion.div>
                  )}
                </button>

                {/* Collapsed Mode Hover Tooltip: pops out to the left */}
                {!isExpanded && isItemHovered && (
                  <div
                    role="tooltip"
                    className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1.5 rounded-md bg-[#12141c]/95 border border-white/[0.15] text-xs shadow-xl flex items-center space-x-2 animate-in fade-in slide-in-from-right-1 duration-150 z-50 pointer-events-none"
                  >
                    <span className="text-[10px] font-mono text-orange-400 font-bold">{section.index}</span>
                    <span className="text-white font-medium">{section.title}</span>
                    {section.badge && (
                      <span className="text-[9px] font-mono text-zinc-400 uppercase bg-white/[0.08] px-1 py-0.2 rounded">
                        {section.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Rail Footer: Scroll to Top & Overall Progress Percentage */}
        <div className="pt-2 mt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono px-1">
          <button
            type="button"
            onClick={handleScrollToTop}
            className="flex items-center space-x-1 text-zinc-400 hover:text-orange-400 transition-colors p-1 rounded hover:bg-white/[0.06]"
            title="Scroll smoothly back to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3 h-3" />
            {isExpanded && <span>Top</span>}
          </button>
          <span className="text-zinc-500 font-semibold tabular-nums">
            {scrollProgress}%
          </span>
        </div>
      </motion.div>
    </nav>
  );
};
