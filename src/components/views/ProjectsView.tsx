import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_PROJECTS, MIGRATION_OVERVIEW } from '../../data/portfolioData';
import { ProjectCardGalleryPreview } from '../ProjectGallery';
import { DepartmentalAppsShowcase } from './DepartmentalAppsShowcase';
import {
  Search,
  Database,
  TrendingUp,
  ArrowRight,
  MonitorPlay,
  AlertTriangle,
  FolderGit2,
  Layers
} from 'lucide-react';

interface ProjectsViewProps {
  onLaunchDemo: (demoId: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onLaunchDemo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [projectTechFilter, setProjectTechFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');


  const filteredProjects = useMemo(() => {
    return CORE_PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;

      let matchesTech = true;
      if (projectTechFilter !== 'all') {
        matchesTech = proj.tools.some((t) =>
          t.toLowerCase().includes(projectTechFilter.toLowerCase())
        );
      }

      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, projectTechFilter, searchQuery]);



  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <p className="text-xs font-mono text-[var(--text-accent)] font-medium">
          01 · Enterprise Case Studies &amp; Cutover Architecture
        </p>
        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          Enterprise Projects &amp; Migration Architecture
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Standardized architectural documentation covering end-to-end Power Platform systems, legacy Lotus Domino modernizations, financial approval engines, and AI workflow integrations.
        </p>
      </div>

      {/* Flagship Banner: IOI Oleo Domino Migration */}
      <section id="section-migration-hero" className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4 sm:p-6 md:p-8 space-y-6 shadow-[var(--shadow-card)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-xs font-mono text-[var(--text-accent)] font-medium">
              <Database className="w-3.5 h-3.5" />
              <span>Flagship Enterprise Migration · 365+ Applications</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
              {MIGRATION_OVERVIEW.title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-mono">
              {MIGRATION_OVERVIEW.period} · {MIGRATION_OVERVIEW.role}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 shrink-0 font-mono tabular-nums">
            <div className="bg-[var(--bg-primary)] p-3 sm:p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
              <span className="text-lg sm:text-2xl font-bold text-[var(--text-accent)]">$960K/yr</span>
              <p className="text-[10px] sm:text-[11px] text-[var(--text-tertiary)] mt-0.5 font-sans">Licensing Avoided</p>
            </div>
            <div className="bg-[var(--bg-primary)] p-3 sm:p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
              <span className="text-lg sm:text-2xl font-bold text-[var(--text-primary)]">365+</span>
              <p className="text-[10px] sm:text-[11px] text-[var(--text-tertiary)] mt-0.5 font-sans">DBs Retired (0h Downtime)</p>
            </div>
            <div className="bg-[var(--bg-primary)] p-3 sm:p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
              <span className="text-lg sm:text-2xl font-bold text-[var(--text-primary)]">7,878</span>
              <p className="text-[10px] sm:text-[11px] text-[var(--text-tertiary)] mt-0.5 font-sans">YAML Screens in CI</p>
            </div>
            <div className="bg-[var(--bg-primary)] p-3 sm:p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
              <span className="text-lg sm:text-2xl font-bold text-[var(--text-accent)]">-73%</span>
              <p className="text-[10px] sm:text-[11px] text-[var(--text-tertiary)] mt-0.5 font-sans">CAPA Investigation Time</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {MIGRATION_OVERVIEW.scope} {MIGRATION_OVERVIEW.sliceDelivery} {MIGRATION_OVERVIEW.evidence}
        </p>

        {/* Consolidation Strategy Section */}
        {MIGRATION_OVERVIEW.consolidationStats && (
          <div id="section-consolidation" className="pt-2 space-y-4">
            <h3 className="text-xs font-mono text-[var(--text-primary)] font-medium flex items-center space-x-2">
              <FolderGit2 className="w-4 h-4 text-[var(--text-accent)]" />
              <span>Consolidation &amp; Schema Modernization Telemetry</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono tabular-nums">
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-2xl font-semibold text-[var(--text-primary)]">
                  {MIGRATION_OVERVIEW.consolidationStats.uniqueGroups}
                </span>
                <p className="text-sm text-[var(--text-secondary)] mt-1 font-sans">
                  Unique App Groups Analyzed
                </p>
              </div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-2xl font-semibold text-[var(--text-accent)]">
                  {MIGRATION_OVERVIEW.consolidationStats.sharedCrossDepartment}
                </span>
                <p className="text-sm text-[var(--text-secondary)] mt-1 font-sans">
                  Cross-Dept Shared Apps Merged
                </p>
              </div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-2xl font-semibold text-[var(--text-primary)]">
                  {MIGRATION_OVERVIEW.consolidationStats.sameDepartmentVariants}
                </span>
                <p className="text-sm text-[var(--text-secondary)] mt-1 font-sans">
                  Same-Dept Variants Unified
                </p>
              </div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-2xl font-semibold text-[var(--text-accent)]">
                  {MIGRATION_OVERVIEW.consolidationStats.routingDifferencesResolved}
                </span>
                <p className="text-sm text-[var(--text-secondary)] mt-1 font-sans">
                  Routing Conflicts Resolved
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MIGRATION_OVERVIEW.highlightedConsolidations?.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      {highlight.name}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-tertiary)] shrink-0">
                      {highlight.type}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {highlight.resolution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Production Modernization Output Callout */}
        <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-primary)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[var(--text-accent)] font-semibold uppercase">
              Production Modernization Deliverables
            </span>
            <h4 className="text-base font-semibold text-[var(--text-primary)]">
              13 Departmental Power Apps Suite &amp; 52 Production 1080p Screens
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              The direct operational output of retiring the 365+ Lotus Domino databases: 52 client-ready Canvas screens following the 4-Screen Quadruplet Standard and 13 modern cloud workflows replacing legacy Domino forms across 7 operating departments.
            </p>
          </div>
          <a
            href="#departmental-apps-showcase"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-[var(--radius-sm)] bg-[var(--interactive-primary)] text-[#090a0d] hover:bg-orange-400 font-semibold text-xs transition-colors shrink-0 whitespace-nowrap self-start sm:self-center"
          >
            <span>Explore 13 Apps &amp; 52 Screens</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Modernization Catalog: 13 Departmental Applications & Automated Workflows */}
      <div id="departmental-apps-showcase">
        <DepartmentalAppsShowcase />
      </div>

      {/* Filter and Search Bar for Standalone & Core Projects */}
      <section id="section-case-studies" className="space-y-6 pt-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 bg-[var(--bg-surface)] p-3.5 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: `All Case Studies (${CORE_PROJECTS.length})` },
              {
                id: 'core',
                label: `Core & AI Systems (${CORE_PROJECTS.filter((p) => p.category === 'core').length})`
              },
              {
                id: 'standalone',
                label: `Full-Stack & SaaS (${CORE_PROJECTS.filter((p) => p.category === 'standalone').length})`
              },
              {
                id: 'security',
                label: `IT Security & Governance (${CORE_PROJECTS.filter((p) => p.category === 'security').length})`
              }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={selectedCategory === cat.id}
                className={`min-h-[44px] px-3.5 py-2 rounded-[var(--radius-sm)] text-xs font-medium transition-all whitespace-nowrap active:scale-95 touch-manipulation cursor-pointer flex items-center justify-center ${
                  selectedCategory === cat.id
                    ? 'bg-[var(--accent-blue)] text-[#090a0d] font-semibold'
                    : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-[var(--text-tertiary)] absolute left-3 top-1/2 -translate-y-1/2" />
            <label htmlFor="project-search" className="sr-only">Search projects by keyword, tool, or problem</label>
            <input
              id="project-search"
              type="search"
              inputMode="search"
              placeholder="Filter by keyword, tool, problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[48px] pl-9 pr-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] focus:outline-none text-base text-[var(--text-primary)] placeholder-[var(--text-tertiary)] transition-colors touch-manipulation"
            />
          </div>
        </div>

        {/* Project Cards Grid with Subtle Executive Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                whileHover={{ y: -2.5 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                key={proj.id}
                className="h-full"
              >
                <div
                  className="relative h-full glass-card p-4 sm:p-6 space-y-4 sm:space-y-5 flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5),0_0_24px_-4px_rgba(249,115,22,0.1)] transition-all duration-200"
                >
                  <div className="space-y-3.5">
                    {/* Project Architectural Thumbnail Header */}
                    <div className="p-3.5 rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] group-hover:border-orange-500/30 group-hover:bg-[#141620] transition-all duration-200 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] group-hover:border-orange-500/30 flex items-center justify-center text-[var(--text-accent)] transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase">
                            {proj.category} · {proj.date}
                          </div>
                          <div className="text-xs font-mono text-[var(--text-accent)] font-medium">
                            {proj.impactMetrics?.[0]
                              ? `${proj.impactMetrics[0].value} ${proj.impactMetrics[0].label}`
                              : 'Verified Architecture'}
                          </div>
                        </div>
                      </div>
                      <TrendingUp className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-accent)] transition-colors" />
                    </div>

                    {/* Project Gallery Preview Strip */}
                    <ProjectCardGalleryPreview item={proj} />

                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[var(--text-accent)] transition-colors">
                        {proj.title}
                      </h3>
                      {proj.subtitle && (
                        <p className="text-xs text-[var(--text-accent)] font-medium mt-0.5">{proj.subtitle}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase">Challenge</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                        {proj.problem}
                      </p>
                    </div>

                    {/* Quantified Verifiable Outcome (Spotted Scanning Anchor) */}
                    <div className="p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-accent)] font-semibold uppercase">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Verifiable Outcome</span>
                      </div>
                      <p className="text-xs text-[var(--text-primary)] leading-relaxed font-medium">
                        {proj.impact}
                      </p>
                    </div>

                    {/* Categorized Tools Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                      {proj.tools.length > 4 && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-tertiary)] font-mono">
                          +{proj.tools.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex items-center space-x-1">
                      <a href={`#/projects/${encodeURIComponent(proj.id)}`} className="case-study-link" aria-label={`View case study: ${proj.title}`}>View case study</a>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>

                    {proj.liveDemoId && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onLaunchDemo(proj.liveDemoId!);
                        }}
                        className="relative z-10 inline-flex items-center space-x-1.5 min-h-11 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface-elevated)] hover:border-[var(--border-focus)] text-[var(--text-primary)] text-xs font-medium border border-[var(--border-subtle)] transition-colors whitespace-nowrap"
                      >
                        <MonitorPlay className="w-3.5 h-3.5 text-[var(--text-accent)]" />
                        <span>Run Simulation</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-[var(--bg-surface)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-3">
            <AlertTriangle className="w-7 h-7 text-[var(--text-accent)] mx-auto" />
            <p className="text-sm font-medium text-[var(--text-primary)]">
              No projects found matching filter criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setProjectTechFilter('all');
                setSearchQuery('');
              }}
              className="text-xs text-[var(--text-accent)] underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
