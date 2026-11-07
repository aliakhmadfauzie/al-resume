import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  ExternalLink, 
  Sparkles, 
  X, 
  Maximize2,
  Eye,
  Workflow,
  ArrowUpRight
} from 'lucide-react';
import { SHOWCASE_ARTICLES, SHOWCASE_CATEGORIES, ShowcaseItem } from '../../data/showcaseArticlesData';
import { NavTab } from '../../types';
import { AppleCard3D } from '../canvas/AppleCard3D';
import { Section3D } from '../canvas/Section3D';

interface ArticlesViewProps {
  onSelectTab: (tab: NavTab) => void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ onSelectTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ShowcaseItem | null>(null);

  const filteredArticles = useMemo(() => {
    return SHOWCASE_ARTICLES.filter((item) => {
      let matchesCat = true;
      if (selectedCategory === 'articles') {
        matchesCat = item.isStandaloneArticle === true;
      } else if (selectedCategory !== 'all') {
        matchesCat = item.category === selectedCategory;
      }

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCat;

      const matchesSearch = 
        item.title.toLowerCase().includes(query) ||
        (item.headline && item.headline.toLowerCase().includes(query)) ||
        item.summary.toLowerCase().includes(query) ||
        item.tech.some(t => t.toLowerCase().includes(query)) ||
        (item.domain && item.domain.toLowerCase().includes(query));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-10 py-6">
      
      {/* Apple Keynote Showcase Hero */}
      <Section3D initialRotateX={4} initialY={24} className="relative overflow-hidden rounded-3xl apple-card p-8 sm:p-12">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2997ff]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#9d4edd]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-medium text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" />
            <span>CASE STUDIES & TECHNICAL SPECIFICATIONS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter apple-text-gradient leading-[1.08]">
            Enterprise Modernization &amp; Architecture Showcase
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl">
            A curated library of 15 production-grade case studies and 9 technical deep-dives detailing legacy Lotus Domino to Microsoft 365 migrations, AI automation pipelines, and industrial software systems authored by <strong className="text-white font-semibold">Ali Akhmad Fauzie</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              id="btn-open-master-showcase"
              href="/showcase-articles/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary"
            >
              <span>Launch Fullscreen Showcase App</span>
              <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </a>

            <button
              onClick={() => onSelectTab('briefing')}
              className="apple-btn-secondary"
            >
              <Workflow className="w-4 h-4 text-[#2997ff]" />
              <span>Hiring Manager Briefing</span>
            </button>
          </div>

          {/* Keynote Metrics Ledger Bento with 3D Tilt */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/[0.08]">
            <AppleCard3D maxTilt={7} className="apple-card rounded-2xl p-4 bg-white/[0.02]">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">15</div>
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-1">Case Studies</div>
            </AppleCard3D>
            <AppleCard3D maxTilt={7} className="apple-card rounded-2xl p-4 bg-white/[0.02]">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2997ff] font-mono">9</div>
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-1">Technical Articles</div>
            </AppleCard3D>
            <AppleCard3D maxTilt={7} className="apple-card rounded-2xl p-4 bg-white/[0.02]">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#30d158] font-mono">361+</div>
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-1">Forms Catalogued</div>
            </AppleCard3D>
            <AppleCard3D maxTilt={7} className="apple-card rounded-2xl p-4 bg-white/[0.02]">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#bf5af2] font-mono">$960K/yr</div>
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-1">Cost Avoidance</div>
            </AppleCard3D>
          </div>
        </div>
      </Section3D>

      {/* Apple-style Segmented Filter & Search Controls */}
      <Section3D delay={0.05} className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Category Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 bg-neutral-900/60 backdrop-blur-2xl rounded-full border border-white/10 scrollbar-none">
          <Filter className="w-4 h-4 text-neutral-400 shrink-0 ml-2 mr-1" />
          {SHOWCASE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-lg shadow-white/10'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-black/15 text-black font-bold' : 'bg-white/10 text-neutral-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search architecture, tech, metrics..."
            className="w-full pl-11 pr-10 py-2.5 bg-neutral-900/60 backdrop-blur-2xl border border-white/10 rounded-full text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </Section3D>

      {/* Case Studies & Articles Grid with 3D Interactive Tilt */}
      <Section3D delay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <AppleCard3D
            key={article.id}
            maxTilt={7}
            className="group relative flex flex-col justify-between apple-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 h-full"
          >
            {/* Top Image Preview if available */}
            {article.screenshotUrl ? (
              <div 
                className="relative h-44 w-full bg-neutral-950 overflow-hidden cursor-pointer"
                onClick={() => setActiveArticle(article)}
              >
                <img
                  src={article.screenshotUrl}
                  alt={article.title}
                  className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#2997ff] border border-white/10">
                    {article.categoryLabel}
                  </span>
                  {article.num && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/10 backdrop-blur-md text-white">
                      #{article.num}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-5 pb-0">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/[0.06] text-[#2997ff] border border-white/10">
                    {article.categoryLabel}
                  </span>
                  {article.num && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/10 text-neutral-300">
                      #{article.num}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 
                  onClick={() => setActiveArticle(article)}
                  className="text-base font-bold text-white group-hover:text-[#2997ff] transition-colors leading-snug cursor-pointer line-clamp-2 tracking-tight"
                >
                  {article.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mt-2">
                  {article.summary}
                </p>
              </div>

              {/* KPIs & Highlights */}
              {article.kpis && article.kpis.length > 0 && (
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/[0.08]">
                  {article.kpis.slice(0, 2).map((kpi, idx) => (
                    <div key={idx} className="bg-white/[0.03] rounded-xl px-3 py-2 border border-white/[0.06]">
                      <div className="text-[10px] font-mono text-neutral-400 truncate">{kpi.label}</div>
                      <div className="text-xs font-bold text-white font-mono truncate mt-0.5">{kpi.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {article.tech.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-neutral-300 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
                {article.tech.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono text-neutral-500">
                    +{article.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2997ff] hover:text-white transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Read Spec</span>
                </button>

                {article.interactiveUrl && (
                  <a
                    href={article.interactiveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-400 hover:text-white transition-colors"
                    title="Open standalone interactive view"
                  >
                    <span>Interactive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </AppleCard3D>
        ))}
      </Section3D>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16 apple-card rounded-2xl p-8 max-w-md mx-auto">
          <BookOpen className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white tracking-tight">No articles found</h3>
          <p className="text-xs text-neutral-400 mt-1">Try another search keyword or clear filters.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-4 apple-btn-secondary text-xs"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Apple-grade Interactive Reader Drawer / Sheet */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl h-full bg-black/90 backdrop-blur-2xl border-l border-white/10 flex flex-col z-10 shadow-2xl"
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#2997ff] shrink-0 font-mono font-bold">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#2997ff] font-semibold">
                      {activeArticle.categoryLabel} {activeArticle.num ? `• #${activeArticle.num}` : ''}
                    </span>
                    <h2 className="text-base font-bold text-white tracking-tight truncate">
                      {activeArticle.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {activeArticle.interactiveUrl && (
                    <a
                      href={activeArticle.interactiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-colors"
                      title="Open in fullscreen showcase"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
                
                {/* Full Screenshot Preview if available */}
                {activeArticle.screenshotUrl && (
                  <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/60 shadow-lg">
                    <img
                      src={activeArticle.screenshotUrl}
                      alt={activeArticle.title}
                      className="w-full max-h-[380px] object-cover object-top"
                    />
                  </div>
                )}

                {/* Title & Summary */}
                <div className="space-y-2">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                    {activeArticle.headline || activeArticle.title}
                  </h1>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {activeArticle.summary}
                  </p>
                </div>

                {/* KPIs & Metrics Banner */}
                {activeArticle.kpis && activeArticle.kpis.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4">
                    {activeArticle.kpis.map((kpi, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">{kpi.label}</div>
                        <div className="text-base font-bold text-white font-mono mt-0.5">{kpi.value}</div>
                        {kpi.sub && <div className="text-[10px] text-[#2997ff] truncate mt-0.5">{kpi.sub}</div>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Technology Architecture</span>
                  <div className="flex flex-wrap gap-2">
                    {activeArticle.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-medium text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Markdown Content (Article Text) */}
                {activeArticle.markdown && (
                  <div className="border-t border-white/[0.08] pt-5 space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#2997ff] font-semibold">
                      Technical Architecture Blueprint
                    </h3>
                    <div className="text-xs text-neutral-300 leading-relaxed whitespace-pre-wrap font-sans bg-white/[0.02] border border-white/[0.06] p-5 rounded-2xl overflow-x-auto">
                      {activeArticle.markdown}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">
                  Author: Ali Akhmad Fauzie
                </span>
                <div className="flex items-center gap-3">
                  {activeArticle.interactiveUrl && (
                    <a
                      href={activeArticle.interactiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-btn-primary text-xs !py-2 !px-4"
                    >
                      <span>Fullscreen Showcase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="apple-btn-secondary text-xs !py-2 !px-4"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
