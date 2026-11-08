import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  Crown,
  Trophy,
  ExternalLink,
  ChevronDown,
  Sparkles,
  GraduationCap,
  Briefcase,
  Zap,
  ShieldCheck,
  Check,
  Info,
  X,
  FileCheck2,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import {
  CONSOLIDATED_HONORS_AWARDS,
  LINKEDIN_HONORS_AWARDS
} from '../../data/portfolioData';
import { HonorAwardItem, DeansListSemesterDetail } from '../../types';
import { OrganizationLogo } from '../OrganizationLogo';

interface CorporateRecognitionSectionProps {
  sectionNumber?: string;
  sectionTitle?: string;
  className?: string;
}

type FilterCategory = 'all' | 'enterprise' | 'academic';

export const CorporateRecognitionSection: React.FC<CorporateRecognitionSectionProps> = ({
  sectionNumber = '03 · Honors & Academic Awards',
  sectionTitle = 'Corporate & Institutional Recognition',
  className = ''
}) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [activeModalAward, setActiveModalAward] = useState<HonorAwardItem | null>(null);
  const [activeSemesterTab, setActiveSemesterTab] = useState<number>(0);
  const [hoveredSemester, setHoveredSemester] = useState<DeansListSemesterDetail | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalAward(null);
      }
    };
    if (activeModalAward) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalAward]);

  // Filter the consolidated awards
  const filteredAwards = useMemo(() => {
    if (selectedFilter === 'all') {
      return CONSOLIDATED_HONORS_AWARDS;
    }
    return CONSOLIDATED_HONORS_AWARDS.filter(
      (award) => award.category === selectedFilter
    );
  }, [selectedFilter]);

  // Counts for tabs
  const enterpriseCount = useMemo(
    () => LINKEDIN_HONORS_AWARDS.filter((a) => a.category === 'enterprise').length,
    []
  );
  const academicCount = useMemo(
    () => LINKEDIN_HONORS_AWARDS.filter((a) => a.category === 'academic').length,
    []
  );
  const totalHonorsCount = LINKEDIN_HONORS_AWARDS.length;

  // Visible sliced awards
  const displayedAwards = useMemo(() => {
    return filteredAwards.slice(0, visibleCount);
  }, [filteredAwards, visibleCount]);

  const hasMore = visibleCount < filteredAwards.length;

  const handleFilterChange = (filter: FilterCategory) => {
    setSelectedFilter(filter);
    setVisibleCount(6); // reset progressive disclosure when switching categories
  };

  const getOrgBrandStyles = (orgId?: string) => {
    switch (orgId) {
      case 'accenture':
        return {
          container: 'bg-[#181024] border-[#a100ff]/35 shadow-[0_0_16px_-4px_rgba(161,0,255,0.25)]',
          badgeText: 'text-[#c084fc]',
          accentGlow: 'hover:border-[#a100ff]/60 hover:shadow-[0_0_24px_-4px_rgba(161,0,255,0.3)]'
        };
      case 'concentrix':
        return {
          container: 'bg-[#042838] border-[#00d9af]/35 shadow-[0_0_16px_-4px_rgba(0,217,175,0.25)]',
          badgeText: 'text-[#00d9af]',
          accentGlow: 'hover:border-[#00d9af]/60 hover:shadow-[0_0_24px_-4px_rgba(0,217,175,0.3)]'
        };
      case 'uum':
        return {
          container: 'bg-[#0a1e3f] border-[#f59e0b]/35 shadow-[0_0_16px_-4px_rgba(245,158,11,0.25)]',
          badgeText: 'text-[#fbbf24]',
          accentGlow: 'hover:border-[#f59e0b]/60 hover:shadow-[0_0_24px_-4px_rgba(245,158,11,0.3)]'
        };
      default:
        return {
          container: 'bg-[#14161f] border-[var(--border-subtle)]',
          badgeText: 'text-[var(--text-accent)]',
          accentGlow: 'hover:border-[var(--border-focus)]'
        };
    }
  };

  return (
    <section className={`space-y-6 pt-6 border-t border-[var(--border-subtle)] ${className}`}>
      {/* ====================================================================
          01. SECTION HEADER & METADATA
         ==================================================================== */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider">
              {sectionNumber}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)]">
              <ShieldCheck className="w-3 h-3 text-[var(--interactive-primary)]" />
              <span>100% Verified Credentials</span>
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
            {sectionTitle} ({totalHonorsCount} Honors)
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
            Distinguished enterprise awards, executive leadership citations, and university scholastic honors across Accenture, Concentrix, and Universiti Utara Malaysia (UUM).
          </p>
        </div>

        {/* Telemetry / Credential Summary Pill */}
        <div className="hidden lg:flex items-center gap-3 bg-[var(--bg-surface)] px-4 py-2 rounded-[var(--radius-md)] border border-[var(--border-subtle)] font-mono text-xs">
          <div className="flex items-center gap-1.5 text-[var(--text-primary)]">
            <Briefcase className="w-3.5 h-3.5 text-[#a100ff]" />
            <span>8 Enterprise</span>
          </div>
          <span className="text-[var(--border-subtle)]">·</span>
          <div className="flex items-center gap-1.5 text-[var(--text-primary)]">
            <GraduationCap className="w-3.5 h-3.5 text-[#0ea5e9]" />
            <span>8 Academic</span>
          </div>
          <span className="text-[var(--border-subtle)]">·</span>
          <div className="flex items-center gap-1.5 text-[var(--text-accent)] font-bold">
            <Trophy className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>12 Curated Cards</span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          02. SEGMENTED FILTER CONTROLS (All / Enterprise / Academic)
         ==================================================================== */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[var(--bg-surface)] p-2.5 sm:p-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
        <div
          className="flex flex-wrap items-center gap-1.5"
          role="tablist"
          aria-label="Filter recognition by category"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === 'all'}
            onClick={() => handleFilterChange('all')}
            className={`px-3.5 py-2 rounded-[var(--radius-sm)] text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              selectedFilter === 'all'
                ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-[0_2px_10px_rgba(249,115,22,0.25)]'
                : 'bg-[#0f1117] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Honors</span>
            <span
              className={`font-mono text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedFilter === 'all' ? 'bg-black/20 text-[#090a0d]' : 'bg-white/5 text-[var(--text-tertiary)]'
              }`}
            >
              {totalHonorsCount}
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === 'enterprise'}
            onClick={() => handleFilterChange('enterprise')}
            className={`px-3.5 py-2 rounded-[var(--radius-sm)] text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              selectedFilter === 'enterprise'
                ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-[0_2px_10px_rgba(249,115,22,0.25)]'
                : 'bg-[#0f1117] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Enterprise &amp; Leadership</span>
            <span
              className={`font-mono text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedFilter === 'enterprise' ? 'bg-black/20 text-[#090a0d]' : 'bg-white/5 text-[var(--text-tertiary)]'
              }`}
            >
              {enterpriseCount}
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === 'academic'}
            onClick={() => handleFilterChange('academic')}
            className={`px-3.5 py-2 rounded-[var(--radius-sm)] text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              selectedFilter === 'academic'
                ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-[0_2px_10px_rgba(249,115,22,0.25)]'
                : 'bg-[#0f1117] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic &amp; Scholastic</span>
            <span
              className={`font-mono text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedFilter === 'academic' ? 'bg-black/20 text-[#090a0d]' : 'bg-white/5 text-[var(--text-tertiary)]'
              }`}
            >
              {academicCount}
            </span>
          </button>
        </div>

        {/* Info hint on Dean's List consolidation */}
        <div className="text-[11px] font-mono text-[var(--text-tertiary)] flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
          <span>5× Dean's List honors consolidated into interactive showcase card</span>
        </div>
      </div>

      {/* ====================================================================
          03. CARDS GRID (EQUAL HEIGHTS, FLEX COLUMN, VISUAL TIERING)
         ==================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {displayedAwards.map((award) => {
          const isMarquee = award.isMarqueeMilestone;
          const isEnterprise = award.category === 'enterprise';
          const isConcentrix = award.organizationLogoId === 'concentrix';
          const isAccenture = award.organizationLogoId === 'accenture';
          const isDeansListShowcase = award.id === 'award-deans-list-consolidated';
          const brandStyle = getOrgBrandStyles(award.organizationLogoId);

          // Visual Tiering: Top enterprise milestones vs Dean's List showcase vs standard cards
          let cardBorderBg =
            'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] hover:border-[var(--border-focus)] shadow-[var(--shadow-card)]';

          if (isMarquee && isEnterprise) {
            if (isConcentrix) {
              cardBorderBg =
                'border-cyan-500/40 bg-gradient-to-br from-[#051c22]/90 via-[#0a141b] to-[var(--bg-surface)] hover:border-cyan-400 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6),0_0_24px_-4px_rgba(6,182,212,0.25)]';
            } else {
              cardBorderBg =
                'border-amber-500/40 bg-gradient-to-br from-[#1a140d]/90 via-[#10131a] to-[var(--bg-surface)] hover:border-amber-400 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6),0_0_24px_-4px_rgba(245,158,11,0.25)]';
            }
          } else if (isDeansListShowcase) {
            cardBorderBg =
              'border-sky-500/40 bg-gradient-to-br from-[#081829]/90 via-[#0d121c] to-[var(--bg-surface)] hover:border-sky-400 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6),0_0_24px_-4px_rgba(14,165,233,0.22)]';
          }

          return (
            <motion.article
              key={award.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className={`group rounded-[var(--radius-lg)] border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-full ${cardBorderBg}`}
            >
              {/* Top Accent Gradient Border for Marquee Milestones */}
              {isMarquee && isEnterprise && (
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent ${
                    isConcentrix ? 'via-cyan-400/90' : 'via-amber-400/90'
                  } to-transparent pointer-events-none`}
                />
              )}
              {isDeansListShowcase && (
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/90 to-transparent pointer-events-none" />
              )}

              {/* CARD TOP SECTION: PROMINENT LOGO + DATE PILL + BADGES */}
              <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  {/* Prominent Issuer Brand Badge (Top-Left Corner) */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-[var(--radius-md)] border flex items-center justify-center shrink-0 p-2 transition-transform duration-300 group-hover:scale-105 ${brandStyle.container}`}
                    >
                      <OrganizationLogo
                        logoId={award.organizationLogoId}
                        orgName={award.organization || award.issuer}
                        size="md"
                      />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                          {award.organization || award.issuer}
                        </span>
                        {isEnterprise ? (
                          <span className="text-[10px] font-mono text-[var(--text-tertiary)] hidden sm:inline">
                            · Corporate
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-[var(--text-tertiary)] hidden sm:inline">
                            · Institutional
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-mono text-[var(--text-secondary)] truncate">
                        {award.departmentOrScope || award.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Standardized Top-Right Pill for Date/Scope */}
                  <div className="shrink-0 flex items-center gap-1.5">
                    <span className="text-xs font-mono text-[var(--text-accent)] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[var(--text-tertiary)]" />
                      <span>{award.shortDate || award.year}</span>
                    </span>
                  </div>
                </div>

                {/* Milestone Ribbon / Highlight Badge */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {isMarquee && isEnterprise && (
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border shadow-sm ${
                        isConcentrix
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/35'
                          : 'bg-amber-500/15 text-amber-300 border-amber-500/35'
                      }`}
                    >
                      <Crown className="w-3 h-3" />
                      <span>Enterprise Milestone</span>
                    </span>
                  )}

                  {isDeansListShowcase && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-500/35">
                      <GraduationCap className="w-3 h-3 text-sky-400" />
                      <span>5× Scholastic Honors</span>
                    </span>
                  )}

                  {award.highlightBadge && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[var(--interactive-subtle-bg)] text-[10px] font-mono font-medium text-[var(--text-accent)] border border-[var(--interactive-subtle-border)]">
                      <span>★ {award.highlightBadge}</span>
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-white transition-colors leading-snug">
                    {award.title}
                  </h3>
                </div>

                {/* Clamped Description with Read More */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {award.description}
                </p>

                {/* ==========================================================
                    SPECIAL GROUPED 5x DEAN'S LIST INTERACTIVE CHIPS & TOOLTIP
                   ========================================================== */}
                {isDeansListShowcase && award.deansListSemesters && (
                  <div className="pt-2 space-y-2 border-t border-sky-500/20">
                    <div className="flex items-center justify-between text-[11px] font-mono text-sky-300 font-semibold">
                      <span>Interactive Semester Badges:</span>
                      <span className="text-[10px] text-[var(--text-tertiary)]">
                        Hover/tap to inspect
                      </span>
                    </div>

                    {/* Chips for Sem 1 .. Sem 5 */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {award.deansListSemesters.map((sem, idx) => {
                        const isHovered = hoveredSemester?.semester === sem.semester;
                        const isSelected = activeSemesterTab === idx;
                        return (
                          <div key={sem.semester} className="relative">
                            <button
                              type="button"
                              onClick={() => setActiveSemesterTab(idx)}
                              onMouseEnter={() => setHoveredSemester(sem)}
                              onMouseLeave={() => setHoveredSemester(null)}
                              className={`px-2.5 py-1 rounded-[var(--radius-sm)] text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1 ${
                                isSelected || isHovered
                                  ? 'bg-sky-400 text-black shadow-[0_0_12px_rgba(56,189,248,0.4)] scale-105'
                                  : 'bg-[#101c2b] text-sky-200 border border-sky-500/30 hover:border-sky-400 hover:text-white'
                              }`}
                              title={`${sem.semester}: ${sem.standing} (${sem.period})`}
                            >
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>{sem.semester}</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Interactive Active/Hovered Semester Callout Drawer */}
                    <div className="bg-[#0b1524] p-3 rounded-[var(--radius-sm)] border border-sky-500/30 text-xs space-y-1 transition-all">
                      {(() => {
                        const targetSem =
                          hoveredSemester || award.deansListSemesters[activeSemesterTab];
                        return (
                          <>
                            <div className="flex items-center justify-between font-mono text-[11px]">
                              <span className="text-sky-300 font-bold flex items-center gap-1">
                                <Check className="w-3 h-3 text-emerald-400" />
                                {targetSem.semester} · {targetSem.session} ({targetSem.period})
                              </span>
                              <span className="text-[10px] text-[var(--text-tertiary)]">
                                {targetSem.school}
                              </span>
                            </div>
                            <p className="text-[11px] text-[var(--text-secondary)] leading-tight">
                              {targetSem.standing} — {targetSem.description}
                            </p>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                )}
              </div>

              {/* CARD BOTTOM SECTION: IMPACT HIGHLIGHT METRIC PILL + FOOTER ACTIONS */}
              <div className="pt-4 mt-3 border-t border-[var(--border-subtle)] space-y-2.5">
                {/* Impact Highlight Callout Metric Pill */}
                {award.metricHighlight && (
                  <div className="flex items-center gap-2 p-2 rounded-[var(--radius-sm)] bg-[#0f1118] border border-white/5 text-[11px] font-mono">
                    <Zap className="w-3.5 h-3.5 text-[var(--interactive-primary)] shrink-0" />
                    <span className="text-[var(--text-primary)] font-semibold truncate">
                      {award.metricHighlight}
                    </span>
                  </div>
                )}

                {/* Footer Controls: Read Full Manifesto & Verification Link */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveModalAward(award)}
                    className="inline-flex items-center gap-1 text-[var(--text-accent)] hover:text-white font-medium hover:underline cursor-pointer"
                  >
                    <span>Read Full Citation</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {award.certificatePdfUrl && (
                      <a
                        href={award.certificatePdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-[var(--text-accent)] hover:underline"
                        title="Open Verified Certificate PDF"
                      >
                        <FileCheck2 className="w-3 h-3 text-[var(--interactive-primary)]" />
                        <span>PDF Evidence</span>
                      </a>
                    )}
                    {award.verificationUrl && (
                      <a
                        href={award.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* ====================================================================
          04. PROGRESSIVE DISCLOSURE BAR (Matches Certifications Section Pattern)
         ==================================================================== */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
        <div className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span>
            Showing <strong className="text-[var(--text-primary)] font-bold">{displayedAwards.length}</strong> of{' '}
            <strong className="text-[var(--text-primary)] font-bold">{filteredAwards.length}</strong> curated cards
            {' · '}(<strong className="text-[var(--text-accent)]">{totalHonorsCount} Verified Honors</strong>)
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {hasMore ? (
            <>
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filteredAwards.length))}
                className="px-3.5 py-2 rounded-lg bg-[var(--interactive-subtle-bg)] hover:bg-[var(--interactive-subtle-border)] border border-[var(--interactive-subtle-border)] text-xs font-semibold text-[var(--text-accent)] transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles size={13} className="text-orange-400" />
                <span>Show More (+{Math.min(6, filteredAwards.length - visibleCount)})</span>
              </button>
              <button
                type="button"
                onClick={() => setVisibleCount(filteredAwards.length)}
                className="px-3.5 py-2 rounded-lg bg-[var(--bg-canvas)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] transition-all cursor-pointer"
              >
                Show All ({filteredAwards.length} Cards)
              </button>
            </>
          ) : (
            filteredAwards.length > 6 && (
              <button
                type="button"
                onClick={() => setVisibleCount(6)}
                className="px-3.5 py-2 rounded-lg bg-[var(--bg-canvas)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] transition-all cursor-pointer"
              >
                Collapse to Top 6
              </button>
            )
          )}
        </div>
      </div>

      {/* ====================================================================
          05. ACCESSIBLE CITATION & MANIFESTO DETAIL MODAL
         ==================================================================== */}
      <AnimatePresence>
        {activeModalAward && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="award-modal-title"
            onClick={() => setActiveModalAward(null)}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[var(--radius-md)] border flex items-center justify-center p-2 bg-[#12141c] border-[var(--border-subtle)]">
                    <OrganizationLogo
                      logoId={activeModalAward.organizationLogoId}
                      orgName={activeModalAward.organization || activeModalAward.issuer}
                      size="lg"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[var(--text-accent)] uppercase">
                      {activeModalAward.organization || activeModalAward.issuer} · {activeModalAward.year}
                    </span>
                    <h2
                      id="award-modal-title"
                      className="text-lg sm:text-xl font-bold text-[var(--text-primary)]"
                    >
                      {activeModalAward.title}
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalAward(null)}
                  className="p-2 rounded-[var(--radius-sm)] bg-[#0f1117] hover:bg-white/10 text-[var(--text-secondary)] hover:text-white border border-[var(--border-subtle)] transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Highlight Pill & Metric */}
              {activeModalAward.metricHighlight && (
                <div className="p-3 rounded-[var(--radius-sm)] bg-[#0f1118] border border-[var(--border-subtle)] flex items-center gap-2.5 text-xs font-mono text-[var(--text-accent)]">
                  <Zap className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="font-semibold text-white">
                    {activeModalAward.metricHighlight}
                  </span>
                </div>
              )}

              {/* Full Description & Manifesto Scope */}
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <h4 className="text-xs font-mono uppercase text-[var(--text-tertiary)] tracking-wider">
                  Executive Citation &amp; Scope
                </h4>
                <p className="text-[var(--text-primary)] whitespace-pre-line">
                  {activeModalAward.description}
                </p>
              </div>

              {/* If Dean's List showcase, list all 5 semesters in full */}
              {activeModalAward.deansListSemesters && (
                <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
                  <h4 className="text-xs font-mono uppercase text-sky-400 font-bold tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>Complete 5-Semester Transcript Breakdown</span>
                  </h4>
                  <div className="space-y-2">
                    {activeModalAward.deansListSemesters.map((sem) => (
                      <div
                        key={sem.semester}
                        className="p-3 rounded-[var(--radius-sm)] bg-[#0c1420] border border-sky-500/20 space-y-1 text-xs"
                      >
                        <div className="flex items-center justify-between font-mono">
                          <span className="text-sky-300 font-bold">
                            {sem.semester} ({sem.session}) · {sem.period}
                          </span>
                          <span className="text-[var(--text-tertiary)]">
                            {sem.standing}
                          </span>
                        </div>
                        <p className="text-[var(--text-secondary)]">{sem.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="text-[var(--text-tertiary)]">
                  Authority: {activeModalAward.issuer}
                </span>

                <div className="flex items-center gap-3">
                  {activeModalAward.certificatePdfUrl && (
                    <a
                      href={activeModalAward.certificatePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)] hover:bg-[var(--interactive-subtle-border)] transition-colors"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-[var(--interactive-primary)]" />
                      <span>View PDF Evidence</span>
                    </a>
                  )}

                  {activeModalAward.verificationUrl && (
                    <a
                      href={activeModalAward.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[var(--radius-sm)] bg-[var(--interactive-primary)] text-[#090a0d] font-bold hover:opacity-90 transition-opacity"
                    >
                      <span>Verify on LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
