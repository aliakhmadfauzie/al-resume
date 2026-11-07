import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_PROJECTS, MIGRATION_OVERVIEW, MIGRATION_SLICES } from '../../data/portfolioData';
import { ProjectItem, MigrationSlice } from '../../types';
import { 
  Briefcase, 
  Search, 
  Database, 
  TrendingUp, 
  ArrowRight, 
  MonitorPlay,
  AlertTriangle,
  FolderGit2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { AppleCard3D } from '../canvas/AppleCard3D';
import { Section3D } from '../canvas/Section3D';

interface ProjectsViewProps {
  onOpenProjectDetail: (item: ProjectItem | MigrationSlice) => void;
  onLaunchDemo: (demoId: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onOpenProjectDetail,
  onLaunchDemo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sliceCategoryFilter, setSliceCategoryFilter] = useState<string>('all');
  const [sliceTechFilter, setSliceTechFilter] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    return CORE_PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
      const matchesSearch = 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
    <div className="space-y-12 py-6">
      
      {/* Keynote Header */}
      <Section3D initialRotateX={4} initialY={20} className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-medium text-neutral-300">
          <Briefcase className="w-3.5 h-3.5 text-[#2997ff]" />
          <span>PORTFOLIO &amp; ARCHITECTURE LEDGER</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter apple-text-gradient leading-[1.08]">
          Enterprise Modernization &amp; Architecture Projects
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl">
          Structured Problem → Strategy → Result ledgers detailing legacy modernization, cross-department consolidation, financial automation, and enterprise governance.
        </p>
      </Section3D>

      {/* Flagship Banner: IOI Oleo Domino Migration */}
      <Section3D delay={0.05} className="relative overflow-hidden rounded-3xl apple-card p-6 sm:p-10 space-y-8">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#2997ff]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2997ff]/10 border border-[#2997ff]/20 text-xs font-mono text-[#2997ff] font-semibold">
              <Database className="w-3.5 h-3.5" />
              <span>MAJOR ENTERPRISE MIGRATION • 365+ APPLICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{MIGRATION_OVERVIEW.title}</h2>
            <p className="text-xs text-neutral-400 font-mono">{MIGRATION_OVERVIEW.period} • {MIGRATION_OVERVIEW.role}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 font-mono">
            <div className="apple-card bg-white/[0.02] p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold text-[#2997ff]">24</span>
              <p className="text-[10px] text-neutral-400 uppercase tracking-wider mt-1">High Complexity</p>
            </div>
            <div className="apple-card bg-white/[0.02] p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold text-[#30d158]">28</span>
              <p className="text-[10px] text-neutral-400 uppercase tracking-wider mt-1">Med Complexity</p>
            </div>
            <div className="apple-card bg-white/[0.02] p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold text-[#bf5af2]">12</span>
              <p className="text-[10px] text-neutral-400 uppercase tracking-wider mt-1">Low Complexity</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed max-w-4xl">
          {MIGRATION_OVERVIEW.scope} {MIGRATION_OVERVIEW.sliceDelivery} {MIGRATION_OVERVIEW.evidence}
        </p>

        {/* Consolidation Strategy Section */}
        {MIGRATION_OVERVIEW.consolidationStats && (
          <div className="pt-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold flex items-center space-x-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Consolidation &amp; Modernization Strategy</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
              <div className="apple-card bg-white/[0.02] p-4 rounded-2xl flex flex-col justify-between">
                <span className="text-2xl font-bold text-white">{MIGRATION_OVERVIEW.consolidationStats.uniqueGroups}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider mt-1.5">Unique Groups Analyzed</span>
              </div>
              <div className="apple-card bg-white/[0.02] p-4 rounded-2xl flex flex-col justify-between">
                <span className="text-2xl font-bold text-[#2997ff]">{MIGRATION_OVERVIEW.consolidationStats.sharedCrossDepartment}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider mt-1.5">Shared Apps Merged</span>
              </div>
              <div className="apple-card bg-white/[0.02] p-4 rounded-2xl flex flex-col justify-between">
                <span className="text-2xl font-bold text-[#30d158]">{MIGRATION_OVERVIEW.consolidationStats.sameDepartmentVariants}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider mt-1.5">Variants Unified</span>
              </div>
              <div className="apple-card bg-white/[0.02] p-4 rounded-2xl flex flex-col justify-between">
                <span className="text-2xl font-bold text-[#bf5af2]">{MIGRATION_OVERVIEW.consolidationStats.routingDifferencesResolved}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider mt-1.5">Routing Conflicts Fixed</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {MIGRATION_OVERVIEW.highlightedConsolidations?.map((highlight, idx) => (
                <div key={idx} className="apple-card bg-white/[0.02] p-4 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white tracking-tight">{highlight.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-[#2997ff] border border-white/10">{highlight.type}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{highlight.resolution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6 Migration Slices Grid */}
        <div className="space-y-4 pt-4 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold">
              Migration Slices (Interactive Architecture Breakdown)
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {/* Business Unit Filter Tabs */}
              <div className="flex flex-wrap gap-1 p-1 rounded-full bg-neutral-900/60 backdrop-blur-xl border border-white/10 items-center">
                <span className="text-[10px] text-neutral-400 font-mono px-2 uppercase">BU</span>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'quality', label: 'Quality' },
                  { id: 'operations', label: 'Ops' },
                  { id: 'governance', label: 'Gov' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSliceCategoryFilter(filter.id)}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-medium transition-all ${
                      sliceCategoryFilter === filter.id
                        ? 'bg-white text-black font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Tech Stack Filter Tabs */}
              <div className="flex flex-wrap gap-1 p-1 rounded-full bg-neutral-900/60 backdrop-blur-xl border border-white/10 items-center">
                <span className="text-[10px] text-neutral-400 font-mono px-2 uppercase">Tech</span>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'power apps', label: 'Power Apps' },
                  { id: 'dataverse', label: 'Dataverse' },
                  { id: 'sap', label: 'SAP' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSliceTechFilter(filter.id)}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-medium transition-all ${
                      sliceTechFilter === filter.id
                        ? 'bg-[#bf5af2] text-white font-semibold'
                        : 'text-neutral-400 hover:text-white'
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
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  key={slice.id}
                  onClick={() => onOpenProjectDetail(slice)}
                  className="apple-card p-5 rounded-2xl space-y-3 cursor-pointer group flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 text-[#2997ff] font-mono font-bold text-xs flex items-center justify-center">
                        {slice.letter}
                      </span>
                      <span className="text-xs font-mono text-white font-semibold bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10">
                        {slice.appCount} Apps
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-[#2997ff] transition-colors leading-snug tracking-tight">
                      {slice.title}
                    </h4>

                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                      {slice.problem}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] space-y-2">
                    <div className="flex items-center space-x-1.5 text-xs text-[#30d158] font-mono font-medium">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{slice.impact}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                      <span>View Rebuild Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section3D>

      {/* Filter and Search Bar */}
      <Section3D delay={0.08} className="space-y-6 pt-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs Segmented Pill */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-neutral-900/60 backdrop-blur-2xl rounded-full border border-white/10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'core', label: 'Core Automation' },
              { id: 'standalone', label: 'Financial & Standalone' },
              { id: 'security', label: 'IT Security & Governance' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword, tool, problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-neutral-900/60 backdrop-blur-2xl border border-white/10 focus:border-white/30 focus:outline-none text-xs text-white placeholder-neutral-500 transition-all font-sans"
            />
          </div>
        </div>

        {/* Project Cards Grid with 3D Tilt */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <AppleCard3D
                key={proj.id}
                maxTilt={7}
                className="apple-card p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-white/20 transition-all cursor-pointer group h-full"
                onClick={() => onOpenProjectDetail(proj)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#2997ff] border border-white/10 font-semibold">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">{proj.date}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#2997ff] transition-colors leading-snug tracking-tight">
                      {proj.title}
                    </h3>
                    {proj.subtitle && (
                      <p className="text-xs text-neutral-400 font-mono mt-1">{proj.subtitle}</p>
                    )}
                  </div>

                  {/* Problem snippet */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase text-neutral-400 font-bold flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      <span>The Challenge</span>
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                      {proj.problem}
                    </p>
                  </div>

                  {/* Solution snippet */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase text-[#2997ff] font-bold flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]"></span>
                      <span>The Strategy</span>
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                      {proj.solution}
                    </p>
                  </div>

                  {/* Impact Highlight */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase text-[#30d158] font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Business Results</span>
                    </div>
                    <p className="text-xs text-white font-medium leading-snug">{proj.impact}</p>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tools.map((tool, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    className="text-xs font-semibold text-neutral-300 group-hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {proj.liveDemoId && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLaunchDemo(proj.liveDemoId!);
                      }}
                      className="apple-btn-secondary text-[11px] !py-1 !px-3 flex items-center space-x-1.5"
                    >
                      <MonitorPlay className="w-3 h-3 text-[#2997ff]" />
                      <span>Run Simulation</span>
                    </button>
                  )}
                </div>
              </AppleCard3D>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 apple-card rounded-2xl space-y-2 max-w-md mx-auto">
            <AlertTriangle className="w-8 h-8 text-neutral-400 mx-auto" />
            <p className="text-sm font-semibold text-white">No projects found matching criteria</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#2997ff] hover:underline font-mono"
            >
              Clear filters
            </button>
          </div>
        )}
      </Section3D>

    </div>
  );
};
