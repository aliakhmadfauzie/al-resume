import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LINKEDIN_CERTIFICATIONS,
  LINKEDIN_HONORS_AWARDS,
  PERSONAL_INFO
} from '../../data/portfolioData';
import { CertificationItem } from '../../types';
import { OrganizationLogo } from '../OrganizationLogo';
import {
  ShieldCheck,
  Award,
  Crown,
  Trophy,
  Search,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Layers,
  BarChart3,
  Briefcase,
  Cpu,
  Clock,
  FileCheck2,
  Eye,
  LayoutGrid,
  Columns3,
  Download
} from 'lucide-react';

export const CertificationsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredCertId, setHoveredCertId] = useState<string | null>(null);
  const [pinnedCertId, setPinnedCertId] = useState<string | null>(null);
  const [expandAllMetadata, setExpandAllMetadata] = useState<boolean>(false);
  const [layoutMode, setLayoutMode] = useState<'masonry' | 'grid'>('masonry');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = useMemo(
    () => [
      'All',
      'Learning Paths',
      'AI & Copilot',
      'Power Platform',
      'Project & Process',
      'Data & Analytics',
      'Enterprise Automation'
    ],
    []
  );

  const filteredCertifications = useMemo(() => {
    return LINKEDIN_CERTIFICATIONS.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'All'
          ? true
          : selectedCategory === 'Learning Paths'
          ? cert.credentialType === 'Learning Path'
          : cert.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        cert.name.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        (cert.organization && cert.organization.toLowerCase().includes(q)) ||
        cert.category.toLowerCase().includes(q) ||
        (cert.credentialId && cert.credentialId.toLowerCase().includes(q)) ||
        (cert.summary && cert.summary.toLowerCase().includes(q)) ||
        (cert.productionApplication &&
          cert.productionApplication.toLowerCase().includes(q)) ||
        (cert.hoursOrModules && cert.hoursOrModules.toLowerCase().includes(q)) ||
        cert.skills.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (category: CertificationItem['category']) => {
    switch (category) {
      case 'Power Platform':
        return <Layers className="w-4 h-4 text-[var(--interactive-primary)]" />;
      case 'AI & Copilot':
        return <Sparkles className="w-4 h-4 text-[var(--interactive-primary)]" />;
      case 'Data & Analytics':
        return <BarChart3 className="w-4 h-4 text-[var(--interactive-primary)]" />;
      case 'Project & Process':
        return <Briefcase className="w-4 h-4 text-[var(--interactive-primary)]" />;
      case 'Enterprise Automation':
        return <Cpu className="w-4 h-4 text-[var(--interactive-primary)]" />;
    }
  };

  const handleCopyCredentialId = (e: React.MouseEvent, cert: CertificationItem) => {
    e.stopPropagation();
    const idToCopy = cert.credentialId || cert.id;
    navigator.clipboard.writeText(idToCopy);
    setCopiedId(cert.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isDetailActive = (certId: string) =>
    expandAllMetadata || pinnedCertId === certId;

  return (
    <div className="space-y-12 py-6">
      {/* ====================================================================
          01. HEADER & CREDENTIAL SUMMARY BAR
         ==================================================================== */}
      <header className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-[var(--shadow-card)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <p className="text-xs font-mono text-[var(--text-accent)] font-semibold tracking-wider uppercase">
              01. Verified Credential Vault &amp; Accreditations
            </p>
            <h1
              className="font-bold text-[var(--text-primary)] tracking-tight"
              style={{ fontSize: 'var(--text-h1)', lineHeight: 1.15 }}
            >
              Professional Certifications &amp; Honors
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Click or expand any masonry card to inspect full credential metadata, verification registry IDs, curriculum hours, and how each certification was applied in production across IOI Group, Meraki Malaysia, Concentrix, and Accenture.
            </p>
          </div>

          {/* Direct Verification & Transcript Actions */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-[var(--radius-sm)] bg-gradient-to-r from-[#f97316] to-[#fb923c] text-[#090a0d] text-xs font-bold shadow-[0_4px_18px_rgba(249,115,22,0.3)] transition-all"
            >
              <span>Verify on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/certificates/ABOUT_ME.pdf"
              download="Ali_Akhmad_Fauzie_Career_Dossier.pdf"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-[var(--radius-sm)] bg-[#0f1117] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] text-xs font-medium border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[var(--text-accent)]" />
              <span>Transcript PDF</span>
            </a>
          </div>
        </div>

        {/* Summary Telemetry Strip (Unboxed Typography Separators) */}
        <div className="pt-5 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="space-y-1">
            <div className="text-2xl font-extrabold font-mono text-[var(--text-accent)] tabular-nums">
              {LINKEDIN_CERTIFICATIONS.length}
            </div>
            <div className="text-xs text-[var(--text-secondary)]">
              Verified Certifications · 100% Active
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold font-mono text-[var(--text-primary)] tabular-nums">
              6
            </div>
            <div className="text-xs text-[var(--text-secondary)]">
              Issuing Authorities · MS / LinkedIn / PMI / Lark / EQM / CNX
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold font-mono text-[var(--text-primary)] tabular-nums">
              250+ Hrs
            </div>
            <div className="text-xs text-[var(--text-secondary)]">
              Assessed Lab &amp; Capstone Curriculum
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold font-mono text-[var(--text-accent)] tabular-nums">
              {LINKEDIN_HONORS_AWARDS.length}
            </div>
            <div className="text-xs text-[var(--text-secondary)]">
              Corporate &amp; Academic Honors
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================================
          02. INTERACTIVE FILTER, SEARCH & MASONRY CONTROLS
         ==================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[var(--bg-surface)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
          {/* Segmented Category Filter Controls */}
          <div
            className="flex flex-wrap items-center gap-1.5"
            role="tablist"
            aria-label="Filter certifications by domain"
          >
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? LINKEDIN_CERTIFICATIONS.length
                  : cat === 'Learning Paths'
                  ? LINKEDIN_CERTIFICATIONS.filter((c) => c.credentialType === 'Learning Path').length
                  : LINKEDIN_CERTIFICATIONS.filter((c) => c.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-[var(--radius-sm)] text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold'
                      : 'bg-[#0f1117] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`ml-1.5 font-mono text-[11px] ${
                      isSelected ? 'text-[#090a0d]/80' : 'text-[var(--text-tertiary)]'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input + Expand Metadata Toggle + Masonry/Grid Switch */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-[var(--text-tertiary)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="cert-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search credential, skill, or ID..."
                aria-label="Search certifications"
                className="w-full pl-8 pr-3 py-2 rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none"
              />
            </div>

            <button
              id="cert-toggle-expand-all"
              type="button"
              onClick={() => setExpandAllMetadata((prev) => !prev)}
              className={`inline-flex items-center space-x-1.5 px-3 py-2 rounded-[var(--radius-sm)] text-xs font-mono border transition-colors cursor-pointer whitespace-nowrap ${
                expandAllMetadata
                  ? 'bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border-[var(--interactive-subtle-border)]'
                  : 'bg-[#0f1117] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)]'
              }`}
              title="Toggle all credential metadata panels"
            >
              <Eye className="w-3.5 h-3.5 text-[var(--text-accent)]" />
              <span>{expandAllMetadata ? 'Collapse Metadata' : 'Inspect All Metadata'}</span>
            </button>

            <div className="hidden sm:flex items-center p-0.5 rounded-[var(--radius-sm)] bg-[#0f1117] border border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={() => setLayoutMode('masonry')}
                aria-label="Masonry layout"
                title="Masonry layout"
                className={`p-1.5 rounded-[4px] transition-colors cursor-pointer ${
                  layoutMode === 'masonry'
                    ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-accent)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('grid')}
                aria-label="Standard grid layout"
                title="Standard grid layout"
                className={`p-1.5 rounded-[4px] transition-colors cursor-pointer ${
                  layoutMode === 'grid'
                    ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-accent)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredCertifications.length === 0 ? (
          <div className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-12 text-center space-y-3">
            <ShieldCheck className="w-8 h-8 text-[var(--text-accent)] mx-auto" />
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              No matching credentials found
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
              No certifications matched &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Reset filters to view all {LINKEDIN_CERTIFICATIONS.length} verified credentials.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-[var(--radius-sm)] bg-[var(--interactive-primary)] text-[#090a0d] text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* ==================================================================
             DYNAMIC MASONRY LAYOUT WITH HOVER-ENABLED CREDENTIAL METADATA CARDS
             ================================================================== */
          <div
            className={
              layoutMode === 'masonry'
                ? 'columns-1 md:columns-2 xl:columns-3 gap-5 space-y-5'
                : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start'
            }
          >
            {filteredCertifications.map((cert, index) => {
              const showDetail = isDetailActive(cert.id);
              const isPinned = pinnedCertId === cert.id;

              return (
                <motion.article
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2.5 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredCertId(cert.id)}
                  onMouseLeave={() => setHoveredCertId(null)}
                  onFocus={() => setHoveredCertId(cert.id)}
                  onBlur={() => setHoveredCertId(null)}
                  onClick={() =>
                    setPinnedCertId((prev) => (prev === cert.id ? null : cert.id))
                  }
                  tabIndex={0}
                  role="button"
                  aria-expanded={showDetail}
                  className={`break-inside-avoid cert-hologram-card group rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border transition-all duration-200 p-6 flex flex-col justify-between cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)] ${
                    showDetail
                      ? 'border-[var(--border-focus)] shadow-[0_12px_34px_rgba(249,115,22,0.16)] bg-[var(--bg-surface-elevated)]'
                      : 'border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-orange-500/40 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5),0_0_24px_-4px_rgba(249,115,22,0.12)]'
                  }`}
                >
                  {/* Top Ambient Hologram Glint Edge */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#f97316]/70 to-[#22c55e]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                  {/* Top Header: Icon + Unboxed Domain Kicker + Issue Date */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center space-x-2.5 min-w-0">
                        <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[#0d0f17] border border-[var(--border-subtle)] group-hover:border-orange-500/40 group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-300 p-1.5 shadow-inner">
                          <OrganizationLogo
                            logoId={cert.organizationLogoId}
                            orgName={cert.organization || cert.issuer}
                            size="sm"
                          />
                        </div>
                        <div className="text-xs font-mono text-[var(--text-secondary)] truncate">
                          <span className="text-[var(--text-accent)] font-semibold">
                            {cert.category}
                          </span>
                          <span aria-hidden="true" className="mx-1.5 text-[var(--text-tertiary)]">
                            ·
                          </span>
                          <span>{cert.issueDate}</span>
                          {cert.hoursOrModules && (
                            <>
                              <span aria-hidden="true" className="mx-1 text-[var(--text-tertiary)]">·</span>
                              <span className="text-amber-400 font-semibold">{cert.hoursOrModules}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-[#22c55e] shrink-0 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_12px_rgba(34,197,94,0.3)] transition-all duration-300">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Primary Credential Title & Issuing Organization with Official Logo */}
                    <div className="space-y-2">
                      <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                        {cert.name}
                      </h2>

                      {/* Official Issuing Organization Badge with Logo */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] bg-[#0d0f17] border border-[var(--border-subtle)] group-hover:border-[var(--border-focus)] transition-colors">
                          <OrganizationLogo
                            logoId={cert.organizationLogoId}
                            orgName={cert.organization || cert.issuer}
                            size="xs"
                          />
                          <span className="text-[11px] font-mono font-bold text-[var(--text-primary)] tracking-tight">
                            {cert.organization || cert.issuer}
                          </span>
                        </div>
                        {cert.credentialType && (
                          <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                            · {cert.credentialType}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Executive Summary (Always Visible, Variable Length for Masonry) */}
                    {cert.summary && (
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {cert.summary}
                      </p>
                    )}

                    {/* Unboxed Competency Metadata List */}
                    <div className="pt-2 border-t border-[var(--border-subtle)]">
                      <div className="text-[11px] font-mono text-[var(--text-tertiary)] leading-relaxed">
                        {cert.skills.join(' · ')}
                      </div>
                    </div>
                  </div>

                  {/* HOVER-ENABLED CREDENTIAL METADATA DRAWER */}
                  <AnimatePresence initial={false}>
                    {showDetail && (
                      <motion.div
                        key="metadata-drawer"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="rounded-[var(--radius-md)] bg-[#0c0d12] border border-[var(--interactive-subtle-border)] p-4 space-y-3.5">
                          {/* Issuing Authority & Credential ID Header */}
                          <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-[var(--border-subtle)]">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="w-8 h-8 rounded bg-[#141622] border border-[var(--border-subtle)] flex items-center justify-center p-1 shrink-0">
                                <OrganizationLogo
                                  logoId={cert.organizationLogoId}
                                  orgName={cert.organization || cert.issuer}
                                  size="xs"
                                />
                              </div>
                              <div className="space-y-0.5 min-w-0">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] block">
                                  Issuing Organization
                                </span>
                                <span className="text-xs font-mono font-bold text-[var(--text-primary)] truncate block">
                                  {cert.organization || cert.issuer}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => handleCopyCredentialId(e, cert)}
                              className="min-h-[36px] sm:min-h-[40px] inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[#14161f] hover:bg-[var(--interactive-subtle-bg)] text-[11px] font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-accent)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all cursor-pointer shrink-0 active:scale-95"
                              title="Copy Credential ID"
                            >
                              {copiedId === cert.id ? (
                                <>
                                  <Check className="w-3 h-3 text-[#22c55e]" />
                                  <span className="text-[#22c55e]">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Copy ID</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Curriculum Scope & Verification Method */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-1">
                                <Clock className="w-3 h-3 text-[var(--interactive-primary)]" />
                                <span>Curriculum Scope</span>
                              </span>
                              <p className="text-[11px] text-[var(--text-primary)] font-medium">
                                {cert.hoursOrModules || 'Verified Assessment'}
                              </p>
                            </div>

                            <div className="space-y-0.5">
                              <span className="text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-1">
                                <FileCheck2 className="w-3 h-3 text-[var(--interactive-primary)]" />
                                <span>Validity Status</span>
                              </span>
                              <p className="text-[11px] text-[var(--text-primary)] font-medium">
                                {cert.expiryDate || 'No Expiration · Active'}
                              </p>
                            </div>
                          </div>

                          {/* Production Architecture Application */}
                          {cert.productionApplication && (
                            <div className="pt-2.5 border-t border-[var(--border-subtle)] space-y-1">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-accent)] block">
                                Production Impact &amp; Enterprise Application
                              </span>
                              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                {cert.productionApplication}
                              </p>
                            </div>
                          )}

                          {/* Verification Authority Footer + Direct Link */}
                          <div className="pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2 text-[11px] font-mono">
                            <span className="text-[var(--text-tertiary)] truncate">
                              {cert.verificationMethod || 'LinkedIn Official Transcript'}
                            </span>
                            <div className="flex items-center space-x-2 shrink-0">
                                {cert.pdfUrl && (
                                  <a
                                    href={cert.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-[var(--interactive-subtle)] hover:bg-[var(--interactive-hover)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)] transition-colors"
                                    title="Open verified certificate PDF"
                                  >
                                    <FileCheck2 className="w-3.5 h-3.5 text-[var(--interactive-primary)]" />
                                    <span>Certificate PDF</span>
                                  </a>
                                )}
                                {cert.credentialUrl && (
                                  <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center space-x-1 text-[var(--text-accent)] hover:underline shrink-0"
                                  >
                                    <span>Verify</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Card Footer Hint */}
                  <div className="pt-3 mt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)]">
                    <span>
                      ID: <strong className="text-[var(--text-secondary)]">{cert.credentialId}</strong>
                    </span>
                    <span className="text-[var(--text-accent)]">
                      {isPinned
                        ? 'Pinned · Click to unpin'
                        : showDetail
                        ? 'Click to pin metadata'
                        : 'Click to inspect metadata →'}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>

      {/* ====================================================================
          03. CORPORATE HONORS & ACADEMIC DISTINCTIONS
         ==================================================================== */}
      <section className="space-y-5 pt-4 border-t border-[var(--border-subtle)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="text-xs font-mono text-[var(--text-accent)] font-semibold uppercase">
              02. Corporate Honors &amp; Academic Distinctions
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
              Global Delivery &amp; University Leadership Recognition
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-secondary)]">
            Accenture · Concentrix · Universiti Utara Malaysia (UUM)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LINKEDIN_HONORS_AWARDS.map((award) => {
            const isPinnacle = award.tier === 'pinnacle';
            const cardStyle = isPinnacle
              ? 'border-amber-500/40 bg-gradient-to-br from-[#1a150e]/90 via-[#10121a]/95 to-[var(--bg-surface)] hover:border-amber-400 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6),0_0_24px_-4px_rgba(245,158,11,0.2)]'
              : 'border-[var(--border-subtle)] hover:border-amber-500/40 bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5),0_0_20px_-4px_rgba(245,158,11,0.12)]';

            return (
              <div
                key={award.id}
                className={`cert-hologram-card group rounded-[var(--radius-lg)] border p-6 flex items-start space-x-4 transition-all duration-300 shadow-[var(--shadow-card)] relative overflow-hidden ${cardStyle}`}
              >
                {isPinnacle && (
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent pointer-events-none" />
                )}

                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[#1b1613] border border-[var(--interactive-subtle-border)] group-hover:border-amber-500/40 group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-300 p-2 overflow-hidden shadow-inner">
                  <OrganizationLogo
                    logoId={award.organizationLogoId}
                    orgName={award.organization || award.issuer}
                    size="md"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {isPinnacle && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                          <Crown className="w-2.5 h-2.5 text-amber-400" />
                          <span>Pinnacle</span>
                        </span>
                      )}
                      <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-white transition-colors">
                        {award.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-accent)] shrink-0 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {award.year}
                    </span>
                  </div>

                  {award.highlightBadge && (
                    <div className="inline-block px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono font-semibold text-amber-300">
                      ★ {award.highlightBadge}
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)]">
                    <OrganizationLogo
                      logoId={award.organizationLogoId}
                      orgName={award.organization || award.issuer}
                      size="xs"
                    />
                    <span className="font-semibold text-[var(--text-primary)]">
                      {award.organization || award.issuer}
                    </span>
                    <span className="text-[var(--text-tertiary)]">· Official Distinction</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                    {award.description}
                  </p>
                  {award.certificatePdfUrl && (
                    <div className="pt-2">
                      <a
                        href={award.certificatePdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-mono text-[var(--text-accent)] hover:underline"
                      >
                        <FileCheck2 className="w-3.5 h-3.5 text-[var(--interactive-primary)]" />
                        <span>View Verification Evidence (PDF) →</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
