import React, { useState } from 'react';
import { projectsData } from '../data/resumeData';
import { ProjectItem, ProfileMode } from '../types';
import { FlagshipShowcase } from './FlagshipShowcase';
import {
  Database,
  BarChart3,
  Bot,
  GitBranch,
  Layers,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  LayoutGrid,
  List,
  Search,
  TrendingUp,
  X,
  SlidersHorizontal,
} from 'lucide-react';

interface ProjectsSectionProps {
  currentMode: ProfileMode;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  currentMode,
  onSelectProject,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isArchMode = currentMode === 'architecture' || currentMode === 'architect';
  const isOpsMode = currentMode === 'operations';

  // Determine if a project belongs to Architecture & Solution Engineering track
  const isArchProject = (p: ProjectItem) => {
    if (p.category === 'enterprise' || p.category === 'devops' || p.category === 'ai') return true;
    const archTags = [
      'dataverse', 'c#', 'power apps', 'power platform', 'azure', 'typescript',
      'react native', 'swift', 'kotlin', 'solution', 'infrastructure', 'infosec',
      'oracle', 'crm', 'erp', 'domino', 'lotus', 'sharepoint', 'security', 'sql'
    ];
    const isTagMatched = p.tags.some((t) => archTags.some((at) => t.toLowerCase().includes(at))) ||
      (p.techTags && p.techTags.some((t) => archTags.some((at) => t.toLowerCase().includes(at))));
    const isExplicitId = [
      'ioi-domino-dataverse', 'tasek-cement-rebate', 'ai-dev-pipeline',
      'document-finder', 'staff-requisition', 'it-support-service-request',
      'infosec-doc-register', 'it-server-checklist', 'eprocurement-oracle', 'leadflow',
      'ats-automation', 'resumeflow-pipeline', 'resumeforge-engine', 'barbershop-system',
      'power-fx-copilot-agent', 'lewi-house-booking'
    ].includes(p.id);
    return isTagMatched || isExplicitId;
  };

  // Determine if a project belongs to Operations & Leadership track
  const isOpsProject = (p: ProjectItem) => {
    if (p.category === 'workflow' || p.category === 'analytics') return true;
    const opsTags = [
      'lark', 'bpo', 'sla', 'teams', 'operations', 'workflow', 'reporting',
      'process', 'telemetry', 'multilingual', 'wfm', 'csat', 'aht', 'coaching',
      'workforce', 'attendance', 'apac', 'resolution', 'governance'
    ];
    const isTagMatched = p.tags.some((t) => opsTags.some((ot) => t.toLowerCase().includes(ot))) ||
      (p.domainTags && p.domainTags.some((d) => opsTags.some((ot) => d.toLowerCase().includes(ot))));
    const isExplicitId = [
      'pulsetrack', 'smartflow', 'cs-resolver', 'ask-lark', 'leavesync',
      'marketpoint', 'gameintel', 'worksync', 'aht-optimization'
    ].includes(p.id);
    return isTagMatched || isExplicitId;
  };

  const flagshipProjects = projectsData
    .filter((p) => {
      if (!p.isFlagship) return false;
      if (isArchMode) return isArchProject(p);
      if (isOpsMode) return isOpsProject(p);
      return true;
    })
    .sort((a, b) => (a.flagshipOrder || 99) - (b.flagshipOrder || 99));

  // Base list of projects scoped to the active perspective track
  const trackScopedProjects = projectsData.filter((project) => {
    if (isArchMode) return isArchProject(project);
    if (isOpsMode) return isOpsProject(project);
    return true;
  });

  const filteredProjects = trackScopedProjects.filter((project) => {
    const matchesCategory =
      filterCategory === 'all' ||
      filterCategory === 'track' ||
      (filterCategory === 'flagship' && project.isFlagship) ||
      project.category === filterCategory;

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.domainTags && project.domainTags.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  const getMetricAccentClass = (project: ProjectItem, metricLabel: string = '', metricValue: string = '') => {
    const combined = `${project.category} ${project.cardColor} ${project.domainTags?.join(' ') || ''} ${metricLabel} ${metricValue}`.toLowerCase();
    const isTeal =
      project.category === 'operations' ||
      project.cardColor === '#0f766e' ||
      project.id === 'pulsetrack' ||
      project.id === 'cs-resolver' ||
      project.id === 'aht-optimization' ||
      combined.includes('fte') ||
      combined.includes('sla') ||
      combined.includes('bpo') ||
      combined.includes('aht') ||
      combined.includes('attrition') ||
      combined.includes('agent') ||
      combined.includes('coach') ||
      combined.includes('csat') ||
      combined.includes('report') ||
      combined.includes('scaling');

    return isTeal ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]';
  };

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <span className="label-mono font-bold text-[#121212]">
              02 — Selected Works &amp; Engineering Blueprint
            </span>
            <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
              Enterprise Scale • 19 Verified Projects
            </span>
          </div>

          <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
            Engineering &amp; Operational Architecture
          </h2>
          <p className="text-sm sm:text-base font-light text-[#444440] max-w-3xl mt-3 leading-relaxed">
            From conglomerate-wide Lotus Domino sunset programs to AI Builder copilots, C# plugin pipelines, and high-frequency BPO telemetry across 7 regional markets.
          </p>
        </div>

        {/* Top Tier: Rich Anchor Case Studies (Deep-Dives) */}
        {searchQuery.trim() === '' && filterCategory === 'all' && (
          <FlagshipShowcase
            projects={flagshipProjects}
            onSelectProject={onSelectProject}
            currentMode={currentMode}
          />
        )}

        {/* Section Subheader & Controls for the Full Catalog */}
        <div className="pt-8 border-t border-[#e0e0d8]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif-display italic text-2xl sm:text-3xl font-light text-[#121212]">
                Comprehensive Project Repository
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-mono-code uppercase tracking-wider text-[#6b6b63]">
                  Showing {filteredProjects.length} Projects
                </span>
                <span className="text-[#6b6b63]">•</span>
                <span className={`text-[0.68rem] font-mono-code uppercase tracking-wider px-2 py-0.5 border ${
                  isArchMode
                    ? 'border-[#1d4ed8]/30 bg-blue-50/50 text-[#1d4ed8] font-medium'
                    : isOpsMode
                    ? 'border-[#0f766e]/30 bg-teal-50/50 text-[#0f766e] font-medium'
                    : 'border-[#e0e0d8] bg-[#f7f7f0] text-[#444440]'
                }`}>
                  Track: {isArchMode ? 'Architecture & Solution Engineering' : isOpsMode ? 'Operations & Leadership' : 'Full Profile'}
                </span>
              </div>
            </div>

            {/* Controls Bar: Search, Category Filters, and Grid/List view toggle */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Search Input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-[#6b6b63] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  id="search-projects-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search stack, tags, keywords..."
                  aria-label="Search projects by stack, tags, or keywords"
                  className="w-full min-h-[44px] bg-[#f7f7f0] text-[#121212] text-xs font-mono-code pl-9 pr-10 py-2.5 border border-[#e0e0d8] focus:outline-none focus:border-[#121212] placeholder-[#6b6b63] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-1 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#6b6b63] hover:text-[#121212] cursor-pointer"
                    title="Clear search"
                    aria-label="Clear search input"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Grid / List Toggle */}
              <div className="flex items-center gap-1 bg-[#f7f7f0] p-1 border border-[#e0e0d8]">
                <button
                  id="view-grid-btn"
                  onClick={() => setViewMode('grid')}
                  className={`min-h-[44px] min-w-[44px] flex items-center justify-center transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#121212] text-[#fdfdfc]'
                      : 'text-[#6b6b63] hover:text-[#121212]'
                  }`}
                  title="Grid layout"
                  aria-label="Switch to grid layout"
                  aria-pressed={viewMode === 'grid'}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  id="view-list-btn"
                  onClick={() => setViewMode('list')}
                  className={`min-h-[44px] min-w-[44px] flex items-center justify-center transition-all cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-[#121212] text-[#fdfdfc]'
                      : 'text-[#6b6b63] hover:text-[#121212]'
                  }`}
                  title="List layout"
                  aria-label="Switch to list layout"
                  aria-pressed={viewMode === 'list'}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Pills with Track Scoped Counts and WCAG 44px Touch Targets */}
          <div 
            className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto py-1 scrollbar-none"
            role="toolbar"
            aria-label="Filter projects by category"
          >
            {[
              { id: 'all', label: `All Scoped (${trackScopedProjects.length})` },
              { id: 'flagship', label: `★ Flagship (${flagshipProjects.length})` },
              ...(isArchMode
                ? [
                    { id: 'enterprise', label: 'Enterprise & Architecture' },
                    { id: 'devops', label: 'DevOps & ALM' },
                    { id: 'ai', label: 'AI & Copilot Modernization' },
                  ]
                : isOpsMode
                ? [
                    { id: 'workflow', label: 'Operations & Workflows' },
                    { id: 'analytics', label: 'Telemetry & Analytics' },
                  ]
                : [
                    { id: 'enterprise', label: 'Enterprise & Architecture' },
                    { id: 'workflow', label: 'Operations & Workflows' },
                    { id: 'ai', label: 'AI & Automations' },
                    { id: 'analytics', label: 'Analytics & Telemetry' },
                  ]),
            ].map((tab) => (
              <button
                key={tab.id}
                id={`project-filter-${tab.id}`}
                onClick={() => setFilterCategory(tab.id)}
                aria-pressed={filterCategory === tab.id}
                className={`min-h-[44px] px-4 py-2 text-[0.72rem] font-mono-code uppercase tracking-wider transition-all inline-flex items-center justify-center cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-[#121212] text-[#fdfdfc] font-semibold shadow-xs'
                    : 'bg-[#f7f7f0] text-[#444440] hover:text-[#121212] border border-[#e0e0d8] hover:border-[#121212]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 4-State Handling: Actionable Empty State */}
          {filteredProjects.length === 0 ? (
            <div 
              className="p-8 sm:p-12 text-center bg-[#f7f7f0] border border-[#e0e0d8] my-6 flex flex-col items-center justify-center min-h-[320px]"
              role="status"
              aria-live="polite"
            >
              <div className="w-12 h-12 rounded-full bg-[#e0e0d8] flex items-center justify-center mb-4 text-[#6b6b63]">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display italic text-2xl sm:text-3xl font-light text-[#121212] mb-2">
                No Projects Match Your Filter
              </h4>
              <p className="text-xs sm:text-sm font-mono-code text-[#6b6b63] max-w-md mb-6 leading-relaxed">
                {searchQuery
                  ? `No architectural projects found matching "${searchQuery}" in the active track.`
                  : 'No projects found in this category for the current profile perspective.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterCategory('all');
                }}
                className="min-h-[48px] px-6 py-3 bg-[#121212] text-[#fdfdfc] hover:bg-[#2c2c2c] font-mono-code text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
                aria-label="Reset all project filters and search"
              >
                <X className="w-4 h-4" />
                <span>Reset Filters &amp; View All</span>
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="group glass-card p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[460px] relative hover:-translate-y-1 hover:shadow-xl rounded-none border border-[#e0e0d8] hover:border-[#121212]"
                >
                  {/* Top Metadata */}
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e0e0d8]">
                      <div className="flex items-center gap-2">
                        <span className="label-mono text-[#6b6b63] font-semibold">
                          {project.category}
                        </span>
                        {project.isFlagship && (
                          <span className="text-[0.6rem] font-mono-code uppercase px-2 py-0.5 bg-[#1d4ed8] text-[#fdfdfc] font-semibold tracking-wider shadow-2xs">
                            Flagship
                          </span>
                        )}
                      </div>
                      <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
                        {project.timeline}
                      </span>
                    </div>

                    <h3 className="font-serif-display italic text-2xl sm:text-3xl font-light text-[#121212] group-hover:text-[#1d4ed8] transition-colors mb-1.5 leading-snug">
                      {project.title}
                    </h3>
                    <p className={`font-mono-code text-[0.68rem] uppercase tracking-wider mb-3 font-semibold ${
                      project.category === 'operations' || project.cardColor === '#0f766e' ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
                    }`}>
                      {project.subtitle}
                    </p>

                    {/* Standardized 2-3 line description with ellipsis for 15s scan */}
                    <p className="text-xs font-light text-[#444440] leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* High-Contrast Impact Metrics with Dedicated Accent Colors */}
                    <div className="grid grid-cols-2 gap-2 my-4 bg-[#f7f7f0]/90 p-3 border border-[#e0e0d8] rounded-xs group-hover:border-[#121212]/20 transition-colors">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="text-left">
                          <div className={`font-serif-display italic text-lg sm:text-xl font-normal leading-tight ${getMetricAccentClass(project, m.label, m.value)}`}>
                            {m.value}
                          </div>
                          <div className="text-[0.6rem] font-mono-code uppercase tracking-wider text-[#444440] font-medium truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Area: Grouped Tags & Action Trigger */}
                  <div className="pt-4 border-t border-[#e0e0d8] space-y-3">
                    {/* Domain & Stack Tags with High Visual Contrast */}
                    <div className="flex flex-wrap gap-1">
                      {project.domainTags && project.domainTags.slice(0, 2).map((dTag) => (
                        <span
                          key={dTag}
                          className="px-2 py-0.5 text-[0.62rem] font-mono-code uppercase tracking-wider bg-[#eaeae2] text-[#121212] border border-[#d0d0c6] font-medium rounded-2xs"
                        >
                          {dTag}
                        </span>
                      ))}
                      {(project.techTags || project.tags).slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[0.62rem] font-mono-code uppercase tracking-wider bg-[#fdfdfc] text-[#222220] border border-[#d8d8ce] rounded-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar with Mobile Ergonomic Touch Targets */}
                    <div className="flex items-center justify-between pt-2 gap-2">
                      <div
                        className="flex items-center gap-1.5 font-mono-code text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="min-h-[40px] px-3 py-2 inline-flex items-center gap-1 border border-[#e0e0d8] bg-[#f7f7f0] hover:bg-[#e0e0d8] text-[#121212] uppercase text-[0.65rem] tracking-wider font-semibold transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="min-h-[40px] px-3 py-2 inline-flex items-center gap-1 border border-[#e0e0d8] bg-[#f7f7f0] hover:bg-[#e0e0d8] text-[#444440] hover:text-[#121212] uppercase text-[0.65rem] tracking-wider font-semibold transition-colors"
                          >
                            <Code2 className="w-3.5 h-3.5" />
                            <span>Repo</span>
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="min-h-[40px] px-3.5 py-2 inline-flex items-center gap-1 bg-[#121212] text-[#fdfdfc] hover:bg-[#2c2c2c] font-mono-code uppercase text-[0.68rem] tracking-wider font-semibold transition-colors cursor-pointer shadow-xs"
                      >
                        <span>View Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  id={`project-row-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="group p-5 sm:p-6 bg-[#fdfdfc] border border-[#e0e0d8] hover:border-[#121212] transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="label-mono text-[#6b6b63]">
                        {project.category}
                      </span>
                      {project.isFlagship && (
                        <span className="text-[0.6rem] font-mono-code uppercase px-2 py-0.5 bg-[#1d4ed8] text-[#fdfdfc] font-semibold">
                          Flagship Case
                        </span>
                      )}
                      <span className="text-[#6b6b63] text-xs">•</span>
                      <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
                        {project.timeline}
                      </span>
                    </div>

                    <h3 className="font-serif-display italic text-2xl sm:text-3xl font-light text-[#121212] mb-1">
                      {project.title}
                    </h3>
                    <p className={`font-mono-code text-[0.7rem] uppercase tracking-wider mb-2 font-semibold ${
                      project.category === 'operations' ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
                    }`}>
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed max-w-3xl mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.domainTags && project.domainTags.map((dTag) => (
                        <span
                          key={dTag}
                          className="px-2.5 py-1 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#eaeae2] text-[#121212] border border-[#d0d0c6] font-medium"
                        >
                          {dTag}
                        </span>
                      ))}
                      {(project.techTags || project.tags).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#fdfdfc] text-[#222220] border border-[#d8d8ce]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="flex flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-[#e0e0d8] font-mono-code text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Primary Highlight Metric */}
                    {project.metrics[0] && (
                      <div className="text-right hidden md:block">
                        <div className={`font-serif-display italic text-2xl font-semibold ${getMetricAccentClass(project, project.metrics[0].label, project.metrics[0].value)}`}>
                          {project.metrics[0].value}
                        </div>
                        <div className="text-[0.6rem] font-mono-code uppercase text-[#444440] font-medium">
                          {project.metrics[0].label}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="min-h-[40px] px-3.5 py-2 inline-flex items-center gap-1 border border-[#e0e0d8] bg-[#f7f7f0] hover:bg-[#e0e0d8] text-[#121212] uppercase text-[0.68rem] tracking-wider font-semibold transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="min-h-[40px] px-3.5 py-2 inline-flex items-center gap-1 border border-[#e0e0d8] bg-[#f7f7f0] hover:bg-[#e0e0d8] text-[#444440] hover:text-[#121212] uppercase text-[0.68rem] tracking-wider font-semibold transition-colors"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          <span>Repo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="min-h-[40px] px-4 py-2 inline-flex items-center gap-1.5 bg-[#121212] text-[#fdfdfc] hover:bg-[#2c2c2c] uppercase text-[0.7rem] tracking-wider font-semibold transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};



