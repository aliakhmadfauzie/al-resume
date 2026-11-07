import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_PROJECTS, MIGRATION_OVERVIEW, MIGRATION_SLICES } from '../../data/portfolioData';
import { ProjectItem, MigrationSlice } from '../../types';
import { 
  Briefcase, 
  Search, 
  Filter, 
  Layers, 
  Database, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  MonitorPlay,
  FileSpreadsheet,
  AlertTriangle,
  FolderGit2
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
        matchesTech = proj.tools.some(t => t.toLowerCase().includes(projectTechFilter.toLowerCase()));
      }

      const matchesSearch = 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        
      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, projectTechFilter, searchQuery]);

  const filteredSlices = useMemo(() => {
    return MIGRATION_SLICES.filter(slice => {
      let matchesCat = true;
      if (sliceCategoryFilter === 'quality') matchesCat = ['A', 'B'].includes(slice.letter);
      else if (sliceCategoryFilter === 'operations') matchesCat = ['C', 'D'].includes(slice.letter);
      else if (sliceCategoryFilter === 'governance') matchesCat = ['E', 'F'].includes(slice.letter);

      let matchesTech = true;
      if (sliceTechFilter !== 'all') {
        matchesTech = slice.tools.some(t => t.toLowerCase().includes(sliceTechFilter.toLowerCase()));
      }

      return matchesCat && matchesTech;
    });
  }, [sliceCategoryFilter, sliceTechFilter]);

  return (
    <div className="space-y-12 py-6 animate-in fade-in duration-300">
      
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
          <Briefcase className="w-4 h-4" />
          <span>Project Portfolio: Power Platform &amp; Automation Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Enterprise Projects &amp; Migration Architecture
        </h1>
        <p className="text-xs sm:text-sm text-[#c0c7d4] max-w-3xl leading-relaxed">
          Standardized project documentation covering end-to-end Power Platform architectures, legacy Lotus Domino modernizations, financial approval engines, and AI workflow integrations.
        </p>
      </div>

      {/* Flagship Banner: IOI Oleo Domino Migration */}
      <section className="bg-gradient-to-br from-[#161b22] via-[#1a1c20] to-[#111318] border border-[#282a2e] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#282a2e] pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#0078d4]/20 border border-[#0078d4]/40 text-xs font-mono text-[#a3c9ff] font-semibold">
              <Database className="w-3.5 h-3.5" />
              <span>MAJOR ENTERPRISE MIGRATION • 365+ APPLICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{MIGRATION_OVERVIEW.title}</h2>
            <p className="text-xs text-[#00dbe7] font-mono">{MIGRATION_OVERVIEW.period} • {MIGRATION_OVERVIEW.role}</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 shrink-0 font-mono">
            <div className="bg-[#111318] p-3 rounded-xl border border-[#282a2e] text-center">
              <span className="text-lg sm:text-xl font-bold text-[#a3c9ff]">24</span>
              <p className="text-[10px] text-[#c0c7d4]">High Complexity</p>
            </div>
            <div className="bg-[#111318] p-3 rounded-xl border border-[#282a2e] text-center">
              <span className="text-lg sm:text-xl font-bold text-[#00dbe7]">28</span>
              <p className="text-[10px] text-[#c0c7d4]">Medium Complexity</p>
            </div>
            <div className="bg-[#111318] p-3 rounded-xl border border-[#282a2e] text-center">
              <span className="text-lg sm:text-xl font-bold text-[#dab9ff]">12</span>
              <p className="text-[10px] text-[#c0c7d4]">Low Complexity</p>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#c0c7d4] leading-relaxed">
          {MIGRATION_OVERVIEW.scope} {MIGRATION_OVERVIEW.sliceDelivery} {MIGRATION_OVERVIEW.evidence}
        </p>

        {/* Consolidation Strategy Section */}
        {MIGRATION_OVERVIEW.consolidationStats && (
          <div className="pt-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold flex items-center space-x-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Consolidation & Modernization Strategy</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
              <div className="bg-[#111318] p-4 rounded-xl border border-[#282a2e] flex flex-col justify-between">
                <span className="text-2xl font-extrabold text-white">{MIGRATION_OVERVIEW.consolidationStats.uniqueGroups}</span>
                <span className="text-[10px] text-[#c0c7d4] uppercase mt-1">Unique App Groups Analyzed</span>
              </div>
              <div className="bg-[#111318] p-4 rounded-xl border border-[#282a2e] flex flex-col justify-between">
                <span className="text-2xl font-extrabold text-[#a3c9ff]">{MIGRATION_OVERVIEW.consolidationStats.sharedCrossDepartment}</span>
                <span className="text-[10px] text-[#c0c7d4] uppercase mt-1">Cross-Dept Shared Apps Merged</span>
              </div>
              <div className="bg-[#111318] p-4 rounded-xl border border-[#282a2e] flex flex-col justify-between">
                <span className="text-2xl font-extrabold text-[#00dbe7]">{MIGRATION_OVERVIEW.consolidationStats.sameDepartmentVariants}</span>
                <span className="text-[10px] text-[#c0c7d4] uppercase mt-1">Same-Dept Variants Unified</span>
              </div>
              <div className="bg-[#111318] p-4 rounded-xl border border-[#282a2e] flex flex-col justify-between">
                <span className="text-2xl font-extrabold text-[#dab9ff]">{MIGRATION_OVERVIEW.consolidationStats.routingDifferencesResolved}</span>
                <span className="text-[10px] text-[#c0c7d4] uppercase mt-1">Routing Conflicts Resolved</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {MIGRATION_OVERVIEW.highlightedConsolidations?.map((highlight, idx) => (
                <div key={idx} className="bg-[#1a1c20] p-4 rounded-xl border border-[#282a2e] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{highlight.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e2024] text-[#a3c9ff] border border-[#282a2e]">{highlight.type}</span>
                  </div>
                  <p className="text-[11px] text-[#e2e2e8] leading-relaxed">{highlight.resolution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6 Migration Slices Grid */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold">
              Migration Slices (Interactive Breakdown)
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Business Unit Filter Tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#111318] border border-[#282a2e] items-center">
                <span className="text-[10px] text-[#555962] font-mono px-2 uppercase">Business Unit</span>
                {[
                  { id: 'all', label: 'All BUs' },
                  { id: 'quality', label: 'Quality & QA' },
                  { id: 'operations', label: 'Operations & IT' },
                  { id: 'governance', label: 'Finance & HR' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSliceCategoryFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all ${
                      sliceCategoryFilter === filter.id
                        ? 'bg-[#0078d4] text-white shadow-md'
                        : 'text-[#c0c7d4] hover:text-white hover:bg-[#1a1c20]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Tech Stack Filter Tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#111318] border border-[#282a2e] items-center">
                <span className="text-[10px] text-[#555962] font-mono px-2 uppercase">Tech Stack</span>
                {[
                  { id: 'all', label: 'All Tech' },
                  { id: 'power apps', label: 'Power Apps' },
                  { id: 'dataverse', label: 'Dataverse' },
                  { id: 'sap', label: 'SAP' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSliceTechFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all ${
                      sliceTechFilter === filter.id
                        ? 'bg-[#5c2d91] text-white shadow-md'
                        : 'text-[#c0c7d4] hover:text-white hover:bg-[#1a1c20]'
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
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  key={slice.id}
                  onClick={() => onOpenProjectDetail(slice)}
                  className="glass-card p-5 rounded-2xl space-y-3 cursor-pointer group flex flex-col justify-between"
                >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-lg bg-[#0078d4]/20 border border-[#0078d4]/40 text-[#a3c9ff] font-mono font-bold text-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,120,212,0.3)]">
                      {slice.letter}
                    </span>
                    <span className="text-xs font-mono text-[#00dbe7] font-bold bg-[#111318] px-3 py-1.5 rounded-full border border-[#282a2e]">
                      {slice.appCount} Apps
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#a3c9ff] transition-colors leading-snug">
                    {slice.title}
                  </h4>

                  <p className="text-sm text-[#e2e2e8] line-clamp-3 leading-relaxed">
                    {slice.problem}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#282a2e] space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs text-[#00dbe7] font-bold">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span className="truncate">{slice.impact}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-[#a3c9ff]">
                    <span>View Rebuild Slice Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 bg-[#161b22] p-5 rounded-2xl border border-[#282a2e]">
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            {/* Category Tabs */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-mono text-[#555962] font-bold">Domain Category</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'core', label: 'Core Automation' },
                  { id: 'standalone', label: 'Financial & Standalone' },
                  { id: 'security', label: 'IT Security & Governance' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-[#0078d4] text-white shadow-sm'
                        : 'bg-[#1e2024] text-[#c0c7d4] hover:text-white border border-[#282a2e] hover:border-[#555962]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Stack Tabs */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-mono text-[#555962] font-bold">Core Technology</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Tech' },
                  { id: 'power apps', label: 'Power Apps' },
                  { id: 'power automate', label: 'Power Automate' },
                  { id: 'ai builder', label: 'AI Builder' },
                  { id: 'sharepoint', label: 'SharePoint' },
                  { id: 'power bi', label: 'Power BI' }
                ].map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setProjectTechFilter(tech.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      projectTechFilter === tech.id
                        ? 'bg-[#5c2d91] text-white shadow-sm'
                        : 'bg-[#1e2024] text-[#c0c7d4] hover:text-white border border-[#282a2e] hover:border-[#555962]'
                    }`}
                  >
                    {tech.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-[280px] shrink-0 mt-2 md:mt-0">
            <Search className="w-4 h-4 text-[#c0c7d4] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword, tool, problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#111318] border border-[#282a2e] focus:border-[#0078d4] focus:outline-none text-xs text-white placeholder-[#555962] transition-colors"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                key={proj.id}
                className="glass-card p-8 rounded-3xl space-y-5 flex flex-col justify-between hover:border-[#0078d4]/50 transition-all cursor-pointer shadow-lg"
                onClick={() => onOpenProjectDetail(proj)}
              >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#1e2024] text-[#a3c9ff] border border-[#282a2e] font-bold">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#c0c7d4] font-medium">{proj.date}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00dbe7] transition-colors leading-snug">{proj.title}</h3>
                  {proj.subtitle && (
                    <p className="text-sm text-[#00dbe7] font-bold mt-1">{proj.subtitle}</p>
                  )}
                </div>

                {/* Problem snippet */}
                <div className="space-y-1.5">
                  <p className="text-[10px] font-mono uppercase text-[#e2e2e8] font-bold flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span>The Problem</span>
                  </p>
                  <p className="text-sm text-[#e2e2e8] leading-relaxed line-clamp-2">
                    {proj.problem}
                  </p>
                </div>

                {/* Solution snippet */}
                <div className="space-y-1.5">
                  <p className="text-[10px] font-mono uppercase text-[#a3c9ff] font-bold flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0078d4]"></span>
                    <span>The Solution</span>
                  </p>
                  <p className="text-sm text-[#e2e2e8] leading-relaxed line-clamp-2">
                    {proj.solution}
                  </p>
                </div>

                {/* Impact Highlight */}
                <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2e] space-y-2">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase text-[#00dbe7] font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>Impact &amp; Results</span>
                  </div>
                  <p className="text-sm text-white font-bold leading-snug">{proj.impact}</p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tools.map((tool, idx) => (
                    <span key={idx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#1a1c20] text-[#c0c7d4] border border-[#282a2e]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-5 border-t border-[#282a2e] flex items-center justify-between">
                <button
                  className="text-xs font-bold text-white hover:text-[#a3c9ff] flex items-center space-x-1"
                >
                  <span>Detailed Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {proj.liveDemoId && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onLaunchDemo(proj.liveDemoId!);
                    }}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0078d4]/20 hover:bg-[#0078d4]/40 text-[#a3c9ff] text-xs font-bold border border-[#0078d4]/30 transition-colors"
                  >
                    <MonitorPlay className="w-4 h-4" />
                    <span>Run Simulation</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-[#161b22] rounded-2xl border border-[#282a2e] space-y-3">
            <AlertTriangle className="w-8 h-8 text-[#00dbe7] mx-auto" />
            <p className="text-sm font-semibold text-white">No projects found matching criteria</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#a3c9ff] underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

    </div>
  );
};
