import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_PROJECTS, MIGRATION_OVERVIEW, MIGRATION_SLICES } from '../../data/portfolioData';
import { ProjectItem, MigrationSlice } from '../../types';
import { ImpactTooltip } from '../ImpactTooltip';
import { ProjectCardGalleryPreview } from '../ProjectGallery';
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
  onOpenProjectDetail: (item: ProjectItem | MigrationSlice) => void;
  onLaunchDemo: (demoId: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onOpenProjectDetail,
  onLaunchDemo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [projectTechFilter, setProjectTechFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sliceCategoryFilter, setSliceCategoryFilter] = useState<string>('all');
  const [sliceTechFilter, setSliceTechFilter] = useState<string>('all');

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

  const filteredSlices = useMemo(() => {
    return MIGRATION_SLICES.filter((slice) => {
      let matchesCat = true;
      if (sliceCategoryFilter === 'quality') matchesCat = ['A', 'B'].includes(slice.letter);
      else if (sliceCategoryFilter === 'operations') matchesCat = ['C', 'D'].includes(slice.letter);
      else if (sliceCategoryFilter === 'governance') matchesCat = ['E', 'F'].includes(slice.letter);

      let matchesTech = true;
      if (sliceTechFilter !== 'all') {
        matchesTech = slice.tools.some((t) =>
          t.toLowerCase().includes(sliceTechFilter.toLowerCase())
        );
      }

      return matchesCat && matchesTech;
    });
  }, [sliceCategoryFilter, sliceTechFilter]);

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
      <section className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-6 sm:p-8 space-y-6 shadow-[var(--shadow-card)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-xs font-mono text-[var(--text-accent)] font-medium">
              <Database className="w-3.5 h-3.5" />
              <span>Flagship Enterprise Migration · 365+ Applications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
              {MIGRATION_OVERVIEW.title}
            </h2>
            <p className="text-xs text-[var(--text-secondary)] font-mono">
              {MIGRATION_OVERVIEW.period} · {MIGRATION_OVERVIEW.role}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 shrink-0 font-mono tabular-nums">
            <div className="bg-[var(--bg-primary)] p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
              <span className="text-xl font-semibold text-[var(--text-primary)]">24</span>
              <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">High Complexity</p>
            </div>
            <div className="bg-[var(--bg-primary)] p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
              <span className="text-xl font-semibold text-[var(--text-accent)]">28</span>
              <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">Medium Complexity</p>
            </div>
            <div className="bg-[var(--bg-primary)] p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center">
              <span className="text-xl font-semibold text-[var(--text-secondary)]">12</span>
              <p className="text-[11px] text-[var(--text-tertiary)] mt-0.5">Low Complexity</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {MIGRATION_OVERVIEW.scope} {MIGRATION_OVERVIEW.sliceDelivery} {MIGRATION_OVERVIEW.evidence}
        </p>

        {/* Consolidation Strategy Section */}
        {MIGRATION_OVERVIEW.consolidationStats && (
          <div className="pt-2 space-y-4">
            <h3 className="text-xs font-mono text-[var(--text-primary)] font-medium flex items-center space-x-2">
              <FolderGit2 className="w-4 h-4 text-[var(--text-accent)]" />
              <span>Consolidation &amp; Schema Modernization Telemetry</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono tabular-nums">
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-2xl font-semibold text-[var(--text-primary)]">
                  {MIGRATION_OVERVIEW.consolidationStats.uniqueGroups}
                </span>
                <p className="text-xs text-[var(--text-secondary)] mt-1 font-sans">
                  Unique App Groups Analyzed
                </p>
              </div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-2xl font-semibold text-[var(--text-accent)]">
                  {MIGRATION_OVERVIEW.consolidationStats.sharedCrossDepartment}
                </span>
                <p className="text-xs text-[var(--text-secondary)] mt-1 font-sans">
                  Cross-Dept Shared Apps Merged
                </p>
              </div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-2xl font-semibold text-[var(--text-primary)]">
                  {MIGRATION_OVERVIEW.consolidationStats.sameDepartmentVariants}
                </span>
                <p className="text-xs text-[var(--text-secondary)] mt-1 font-sans">
                  Same-Dept Variants Unified
                </p>
              </div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                <span className="text-2xl font-semibold text-[var(--text-accent)]">
                  {MIGRATION_OVERVIEW.consolidationStats.routingDifferencesResolved}
                </span>
                <p className="text-xs text-[var(--text-secondary)] mt-1 font-sans">
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
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {highlight.resolution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6 Migration Slices Grid */}
        <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Migration Slices (Interactive Domain Breakdown)
            </h3>

            <div className="flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-1 p-1 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] items-center">
                {[
                  { id: 'all', label: 'All BUs' },
                  { id: 'quality', label: 'Quality & QA' },
                  { id: 'operations', label: 'Operations & IT' },
                  { id: 'governance', label: 'Master Data & CI' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSliceCategoryFilter(filter.id)}
                    className={`px-3 py-1 rounded-[4px] text-xs font-medium transition-colors whitespace-nowrap ${
                      sliceCategoryFilter === filter.id
                        ? 'bg-[var(--accent-blue)] text-white'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 p-1 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] items-center">
                {[
                  { id: 'all', label: 'All Tech' },
                  { id: 'power apps', label: 'Power Apps' },
                  { id: 'dataverse', label: 'Dataverse' },
                  { id: 'sap', label: 'SAP' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSliceTechFilter(filter.id)}
                    className={`px-3 py-1 rounded-[4px] text-xs font-medium transition-colors whitespace-nowrap ${
                      sliceTechFilter === filter.id
                        ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-focus)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSlices.map((slice) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.16 }}
                  key={slice.id}
                >
                  <ImpactTooltip impact={slice.impact} className="h-full">
                    <div
                      onClick={() => onOpenProjectDetail(slice)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View details for ${slice.title}`}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          onOpenProjectDetail(slice);
                        }
                      }}
                      className="h-full bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] space-y-3 cursor-pointer group flex flex-col justify-between transition-colors"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-accent)] font-mono font-semibold text-sm flex items-center justify-center">
                            {slice.letter}
                          </span>
                          <span className="text-xs font-mono text-[var(--text-secondary)] tabular-nums">
                            {slice.appCount} Rebuilt Apps
                          </span>
                        </div>

                        <h4 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-accent)] transition-colors">
                          {slice.title}
                        </h4>

                        <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                          {slice.problem}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2">
                        <div className="flex items-start space-x-2 text-xs text-[var(--text-primary)] font-medium">
                          <TrendingUp className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
                          <span className="line-clamp-2 leading-relaxed">{slice.impact}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs font-medium text-[var(--text-accent)]">
                          <span>Inspect Slice Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </ImpactTooltip>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar for Standalone & Core Projects */}
      <section className="space-y-6 pt-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
          <div className="flex flex-wrap gap-2">
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
                className={`px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[var(--accent-blue)] text-white'
                    : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-[var(--text-tertiary)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by keyword, tool, problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] focus:outline-none text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] transition-colors"
            />
          </div>
        </div>

        {/* Project Cards Grid with 3D Perspective Motion */}
        <motion.div
          layout
          style={{ perspective: '1200px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                whileHover={{ y: -4, rotateX: 1.5, rotateY: -1.5 }}
                transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                key={proj.id}
              >
                <ImpactTooltip impact={proj.impact} className="h-full">
                  <div
                    className="h-full glass-card p-6 space-y-5 flex flex-col justify-between cursor-pointer group"
                    onClick={() => onOpenProjectDetail(proj)}
                  >
                    <div className="space-y-3.5">
                      {/* Project Architectural Thumbnail Header */}
                      <div className="p-3.5 rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] group-hover:border-[var(--border-focus)] transition-colors flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-accent)]">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase">
                              {proj.category} · {proj.date}
                            </div>
                            <div className="text-xs font-mono text-[var(--text-accent)] font-medium">
                              {proj.impactMetrics?.[0]
                                ? `${proj.impactMetrics[0].value} ${proj.impactMetrics[0].label}`
                                : 'Hover for Impact Statement'}
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
                        <p className="text-xs font-mono text-[var(--text-tertiary)]">Challenge</p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                          {proj.problem}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs font-mono text-[var(--text-tertiary)]">Architected Solution</p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                          {proj.solution}
                        </p>
                      </div>

                      <div className="pt-1 text-xs font-mono text-[var(--text-tertiary)] truncate">
                        {proj.tools.join(' · ')}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                      <span className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex items-center space-x-1">
                        <span>Detailed Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>

                      {proj.liveDemoId && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onLaunchDemo(proj.liveDemoId!);
                          }}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface-elevated)] hover:border-[var(--border-focus)] text-[var(--text-primary)] text-xs font-medium border border-[var(--border-subtle)] transition-colors whitespace-nowrap"
                        >
                          <MonitorPlay className="w-3.5 h-3.5 text-[var(--text-accent)]" />
                          <span>Run Simulation</span>
                        </button>
                      )}
                    </div>
                  </div>
                </ImpactTooltip>
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
