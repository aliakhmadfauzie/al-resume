import React, { useState } from 'react';
import { ArticleItem } from '../types';
import {
  BookOpen,
  Calendar,
  Clock,
  Search,
  ArrowRight,
  PenLine,
} from 'lucide-react';

interface ArticlesSectionProps {
  articles: ArticleItem[];
  onSelectArticle: (article: ArticleItem) => void;
  onOpenCreateModal: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  articles,
  onSelectArticle,
  onOpenCreateModal,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      filterCategory === 'all' || article.category === filterCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <section id="articles" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="label-mono mb-4 block">
              03 — Technical Writings & Research
            </span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Articles & Architectural Notes
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              Deep dives on Microsoft Power Platform architecture, enterprise modernization, AI workflows, and large-scale operations delivery.
            </p>
          </div>

          {/* Action: Create Article Button */}
          <button
            onClick={onOpenCreateModal}
            id="open-create-article-btn"
            aria-label="Write and publish a new technical article"
            className="min-h-[44px] self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 bg-[#121212] text-[#fdfdfc] text-xs font-mono-code uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
          >
            <PenLine className="w-4 h-4" />
            <span>Write New Article</span>
          </button>
        </div>

        {/* Featured Hero Article Banner */}
        {!searchQuery && filterCategory === 'all' && featuredArticle && (
          <div
            id="featured-article-hero"
            onClick={() => onSelectArticle(featuredArticle)}
            role="article"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectArticle(featuredArticle);
              }
            }}
            aria-label={`Featured insight: ${featuredArticle.title}`}
            className="group mb-12 p-8 sm:p-12 bg-[#f7f7f0] border border-[#e0e0d8] hover:border-[#121212] cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#121212]"
          >
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-4 font-mono-code text-[0.7rem] uppercase tracking-wider text-[#6b6b63]">
                <span className="px-2 py-0.5 bg-[#121212] text-[#fdfdfc] font-semibold">
                  Featured Insight
                </span>
                <span className="text-[#121212] font-medium">
                  {featuredArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{featuredArticle.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{featuredArticle.readTime}</span>
                </span>
              </div>

              <h3 className="font-serif-display italic text-3xl sm:text-4xl md:text-5xl font-light text-[#121212] mb-4 leading-tight group-hover:translate-x-1 transition-transform">
                {featuredArticle.title}
              </h3>

              <p className="text-sm sm:text-base font-light text-[#444440] leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e0e0d8]">
                <div className="flex flex-wrap gap-1.5">
                  {featuredArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#fdfdfc] text-[#444440] border border-[#e0e0d8]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 font-mono-code text-xs uppercase tracking-wider text-[#121212] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#f7f7f0] p-3 sm:p-4 border border-[#e0e0d8]">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-3.5 h-3.5 text-[#6b6b63] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="search-articles-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title or tag..."
              aria-label="Search articles by title or tag"
              className="w-full min-h-[44px] bg-[#fdfdfc] text-[#121212] text-xs font-mono-code pl-9 pr-3 py-2 border border-[#e0e0d8] focus:outline-none focus:border-[#121212] placeholder-[#6b6b63] transition-colors"
            />
          </div>

          {/* Category Filter Pills with 44px Touch Targets and Dynamic Counts */}
          <div 
            className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto overflow-x-auto py-1"
            role="toolbar"
            aria-label="Filter articles by topic"
          >
            {[
              { id: 'all', label: `All (${articles.length})` },
              { id: 'architecture', label: `Architecture (${articles.filter((a) => a.category === 'architecture').length})` },
              { id: 'ai', label: `AI & Automation (${articles.filter((a) => a.category === 'ai').length})` },
              { id: 'powerplatform', label: `Power Platform (${articles.filter((a) => a.category === 'powerplatform').length})` },
              { id: 'devops', label: `DevOps & ALM (${articles.filter((a) => a.category === 'devops').length})` },
              { id: 'operations', label: `Operations (${articles.filter((a) => a.category === 'operations').length})` },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`article-filter-${cat.id}`}
                onClick={() => setFilterCategory(cat.id)}
                aria-pressed={filterCategory === cat.id}
                className={`min-h-[44px] px-3.5 py-2 text-[0.72rem] font-mono-code uppercase tracking-wider transition-all inline-flex items-center justify-center cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#121212] text-[#fdfdfc] font-semibold shadow-xs'
                    : 'bg-[#fdfdfc] text-[#444440] hover:text-[#121212] border border-[#e0e0d8] hover:border-[#121212]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-State Handling: Actionable Empty State */}
        {filteredArticles.length === 0 && (
          <div 
            className="text-center py-16 px-6 bg-[#f7f7f0] border border-[#e0e0d8] my-6 flex flex-col items-center justify-center min-h-[300px]"
            role="status"
            aria-live="polite"
          >
            <div className="w-12 h-12 rounded-full bg-[#e0e0d8] flex items-center justify-center mb-4 text-[#6b6b63]">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="font-serif-display italic text-2xl font-light text-[#121212] mb-2">
              No Articles Found
            </h4>
            <p className="text-xs sm:text-sm font-mono-code text-[#6b6b63] max-w-md mb-6 leading-relaxed">
              {searchQuery
                ? `No published insights matched "${searchQuery}". Try a different keyword or reset filters.`
                : 'No articles currently found in this category.'}
            </p>
            <button
              onClick={() => {
                setFilterCategory('all');
                setSearchQuery('');
              }}
              className="min-h-[48px] px-6 py-3 bg-[#121212] text-[#fdfdfc] hover:bg-[#2c2c2c] font-mono-code text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
              aria-label="Clear all article search and category filters"
            >
              <span>Reset Filters &amp; View All</span>
            </button>
          </div>
        )}

        {/* Articles Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              id={`article-card-${article.id}`}
              onClick={() => onSelectArticle(article)}
              className="group p-6 sm:p-7 bg-[#fdfdfc] border border-[#e0e0d8] hover:border-[#121212] cursor-pointer flex flex-col justify-between transition-colors"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#e0e0d8]">
                  <span className="label-mono text-[#6b6b63]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-display italic text-2xl font-light text-[#121212] mb-3 leading-snug group-hover:translate-x-1 transition-transform line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#f7f7f0] text-[#444440] border border-[#e0e0d8]"
                    >
                      #{tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="text-[10px] font-mono-code text-[#6b6b63] self-center">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#e0e0d8] flex items-center justify-between text-xs font-mono-code uppercase tracking-wider text-[#121212] font-semibold">
                <span>Read Full Post</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

