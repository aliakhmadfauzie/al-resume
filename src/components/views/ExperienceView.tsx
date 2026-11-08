import React, { useState } from 'react';
import {
  WORK_EXPERIENCE,
  PERSONAL_INFO,
  LINKEDIN_CERTIFICATIONS,
  LINKEDIN_HONORS_AWARDS
} from '../../data/portfolioData';
import {
  Briefcase,
  MapPin,
  Filter,
  ShieldCheck,
  Trophy,
  ExternalLink,
  Download,
  Award,
  Sparkles
} from 'lucide-react';
import { DualCareerBranchVisualizer } from '../career/DualCareerBranchVisualizer';
import { OrganizationLogo } from '../OrganizationLogo';

function formatBulletText(text: string) {
  const colonIndex = text.indexOf(':');
  if (colonIndex > 0 && colonIndex < 65) {
    const label = text.slice(0, colonIndex);
    const rest = text.slice(colonIndex + 1);
    return (
      <>
        <strong className="text-[var(--text-primary)] font-semibold">{label}:</strong>
        {rest}
      </>
    );
  }
  return text;
}

export const ExperienceView: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [visibleCertCount, setVisibleCertCount] = useState<number>(6);

  const allTags = [
    'all',
    'Promotions',
    'QA Department & Auditing',
    'Policy Creation',
    'Training Delivery',
    'Trust & Safety',
    'Ads Review',
    'Live Chat & Email',
    'BPO Operations',
    'Pre-Sales',
    'Data Analytics',
    'Leadership',
    'React',
    'TypeScript',
    'Dataverse',
    'Power Platform',
    'SLA Governance',
    'Six Sigma DMAIC'
  ];

  const filteredExperience =
    selectedTag === 'all'
      ? WORK_EXPERIENCE
      : WORK_EXPERIENCE.filter((exp) =>
          exp.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
        );

  return (
    <div className="space-y-12 py-6">
      {/* LinkedIn Profile Identity Header */}
      <div className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[var(--shadow-card)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--interactive-primary)] shadow-[0_0_24px_rgba(249,115,22,0.28)] shrink-0">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider">
                // LINKEDIN VERIFIED DOSSIER
              </span>
              <span className="px-2 py-0.5 rounded bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] text-[10px] font-mono text-[var(--text-accent)]">
                in/aliakhmadf
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-accent)]">
              {PERSONAL_INFO.linkedInHeadline}
            </p>
            <p className="text-sm text-[var(--text-secondary)] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--interactive-primary)] shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-[var(--radius-sm)] bg-gradient-to-r from-[#f97316] to-[#fb923c] text-[#090a0d] text-xs font-bold shadow-[0_4px_18px_rgba(249,115,22,0.3)] transition-all"
          >
            <span>Open LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="/assets/profile/LinkedIn_Profile.pdf"
            download="Ali_Akhmad_Fauzie_LinkedIn_Profile.pdf"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-[var(--radius-sm)] bg-[#0f1117] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] text-xs font-medium border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[var(--text-accent)]" />
            <span>LinkedIn PDF</span>
          </a>
        </div>
      </div>

      {/* Executive Pedigree & Progression Rail (The 6-Second Recruiter Triage) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">CAREER TENURE</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-accent)] font-mono">9+ Years</p>
          <p className="text-xs text-[var(--text-secondary)]">Modernization &amp; Ops Leadership</p>
        </div>
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">MERIT ADVANCEMENT</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-mono">4 Promotions</p>
          <p className="text-xs text-[var(--text-secondary)]">Analyst → Sr. Lead &amp; Ops Manager</p>
        </div>
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">CROSS-BORDER SCALE</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-accent)] font-mono">380% Growth</p>
          <p className="text-xs text-[var(--text-secondary)]">9 to 34 Agents · 7 APAC Markets</p>
        </div>
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">CRISIS RECOGNITION</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-mono">Diamond Award</p>
          <p className="text-xs text-[var(--text-secondary)]">Hang Tuah Distinction · 800% Surge</p>
        </div>
      </div>

      {/* Interactive Dual-Track Root-and-Branch Career Map */}
      <DualCareerBranchVisualizer />

      {/* Chronological Employment Records */}
      <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="text-xs font-mono text-[var(--text-accent)] font-semibold uppercase">
              01 · Chronological Employment History
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
              Employment Records &amp; Role Milestones
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-tertiary)]">
            Total {WORK_EXPERIENCE.length} Key Tenures
          </span>
        </div>

        {/* Tag Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <span className="text-xs font-mono text-[var(--text-tertiary)] shrink-0 flex items-center space-x-1.5">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter Competency:</span>
        </span>
        <div className="flex items-center space-x-1.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              aria-pressed={selectedTag === tag}
              className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {tag === 'all' ? `All Roles (${WORK_EXPERIENCE.length})` : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Section with Ambient Laser Conduit & Synapses */}
      <div className="relative pl-6 md:pl-16 space-y-8">
        <div className="timeline-track overflow-hidden">
          {/* Animated Photon Laser Sweep along the Timeline */}
          <div className="timeline-laser-sweep absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-80 pointer-events-none" />
        </div>

        {filteredExperience.map((item) => (
          <div key={item.id} className="relative group">
            {/* Horizontal Synapse Conduit connecting Track Node to Card (Desktop) */}
            <div className="hidden md:block absolute -left-[14px] top-6 w-[14px] h-[2px] bg-gradient-to-r from-orange-500/40 via-orange-500/20 to-transparent group-hover:from-orange-500 group-hover:via-orange-400/60 group-hover:w-[16px] transition-all duration-300" />

            {/* Timeline Node Icon with Active Radar Pulse */}
            <div className="absolute -left-[30px] md:-left-[54px] top-1.5 w-10 h-10 rounded-[var(--radius-sm)] bg-[#0c0e15] border border-[var(--border-focus)] p-1 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500/70 group-hover:shadow-[0_0_16px_rgba(249,115,22,0.35)] overflow-hidden shadow-inner">
              {item.companyLogoId ? (
                <OrganizationLogo logoId={item.companyLogoId} orgName={item.company} size="sm" />
              ) : (
                <Briefcase className="w-4 h-4 text-[var(--text-accent)] transition-transform duration-300 group-hover:rotate-6" />
              )}
              {item.isCurrent && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_#22c55e]" />
                </span>
              )}
            </div>

            {/* Experience Card with Smooth Kinetic Hover */}
            <div className="glass-card p-6 sm:p-8 space-y-4 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6),0_0_20px_-4px_rgba(249,115,22,0.12)]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] tracking-tight">
                      {item.role}
                    </h3>
                    {item.isCurrent && (
                      <span className="px-2 py-0.5 rounded bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] text-[10px] font-mono text-[var(--text-accent)] font-semibold">
                        Active Role
                      </span>
                    )}
                    {item.promotionBadge && (
                      <span className="px-2 py-0.5 rounded bg-[#22c55e]/15 border border-[#22c55e]/30 text-[10px] font-mono text-[#22c55e] font-semibold">
                        {item.promotionBadge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.companyLogoId && item.companyLogoId !== 'general' && (
                      <div className="w-5 h-5 rounded bg-[#10121a] border border-[var(--border-subtle)] flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
                        <OrganizationLogo logoId={item.companyLogoId} orgName={item.company} size="xs" />
                      </div>
                    )}
                    <p className="text-sm font-medium text-[var(--text-accent)]">{item.company}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end space-y-1 font-mono text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--text-primary)] font-medium">{item.period}</span>
                  {item.location && (
                    <span className="flex items-center space-x-1 text-[11px] text-[var(--text-tertiary)]">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Enterprise Freelance Clients Showcase */}
              {item.clients && item.clients.length > 0 && (
                <div className="rounded-[var(--radius-md)] bg-[#0d0f17] border border-[var(--border-subtle)] p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--interactive-primary)]" />
                      <span>Enterprise Freelance Clients</span>
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                      Direct Client Engagements
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                    {item.clients.map((client) => (
                      <div
                        key={client.id}
                        className="rounded-[var(--radius-sm)] bg-[#121520] border border-[var(--border-subtle)] hover:border-orange-500/40 p-3 flex flex-col justify-between space-y-2 transition-colors group/client"
                      >
                        <div className="flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded bg-white/95 p-1 flex items-center justify-center shrink-0 shadow-inner">
                            <OrganizationLogo logoId={client.logoId} orgName={client.name} size="sm" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-[var(--text-primary)] group-hover/client:text-[var(--text-accent)] transition-colors truncate">
                              {client.name}
                            </h4>
                            <p className="text-[10px] font-mono text-[var(--text-tertiary)] truncate">
                              {client.industry}
                            </p>
                          </div>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)] leading-snug line-clamp-2">
                          {client.scope}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.bulletPoints.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-2.5">
                    <span className="text-[var(--text-accent)] mt-1 shrink-0 font-mono">·</span>
                    <span>{formatBulletText(bullet)}</span>
                  </li>
                ))}
              </ul>

              {/* Metadata Tags */}
              <div className="pt-3 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-tertiary)]">
                {item.tags.join(' · ')}
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>

      {/* LinkedIn Licenses & Certifications Section */}
      <div className="space-y-5 pt-4 border-t border-[var(--border-subtle)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="text-xs font-mono text-[var(--text-accent)] font-semibold uppercase">
              02 · Licenses &amp; Certifications (LinkedIn Verified)
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
              {LINKEDIN_CERTIFICATIONS.length} Professional Credentials &amp; Accreditations
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-tertiary)]">
            Microsoft · LinkedIn Learning · Lark · Six Sigma
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LINKEDIN_CERTIFICATIONS.slice(0, visibleCertCount).map((cert) => (
            <div
              key={cert.id}
              className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] p-5 flex flex-col justify-between space-y-3 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-accent)]">
                    <OrganizationLogo
                      logoId={cert.organizationLogoId}
                      orgName={cert.organization || cert.issuer}
                      size="xs"
                    />
                    <span>{cert.category}</span>
                  </span>
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">
                    {cert.issueDate}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                  {cert.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  <OrganizationLogo
                    logoId={cert.organizationLogoId}
                    orgName={cert.organization || cert.issuer}
                    size="xs"
                  />
                  <p className="text-sm text-[var(--text-secondary)] font-mono font-medium truncate">
                    {cert.organization || cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[var(--text-tertiary)] truncate pr-2">
                  {cert.skills.join(' · ')}
                </span>
                <span className="text-[#22c55e] shrink-0">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Progressive Disclosure Controls: Prioritizing Top Important Credentials First */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
          <div className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>
              Showing <strong className="text-[var(--text-primary)] font-bold">{Math.min(visibleCertCount, LINKEDIN_CERTIFICATIONS.length)}</strong> of <strong className="text-[var(--text-primary)] font-bold">{LINKEDIN_CERTIFICATIONS.length}</strong> credentials
              {visibleCertCount < LINKEDIN_CERTIFICATIONS.length ? ' (Top Priority Curated)' : ' (Full Archive)'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {visibleCertCount < LINKEDIN_CERTIFICATIONS.length ? (
              <>
                <button
                  type="button"
                  onClick={() => setVisibleCertCount((prev) => Math.min(prev + 6, LINKEDIN_CERTIFICATIONS.length))}
                  className="px-3.5 py-2 rounded-lg bg-[var(--interactive-subtle-bg)] hover:bg-[var(--interactive-subtle-border)] border border-[var(--interactive-subtle-border)] text-xs font-semibold text-[var(--text-accent)] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles size={13} className="text-orange-400" />
                  <span>Show More (+{Math.min(6, LINKEDIN_CERTIFICATIONS.length - visibleCertCount)})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVisibleCertCount(LINKEDIN_CERTIFICATIONS.length)}
                  className="px-3.5 py-2 rounded-lg bg-[var(--bg-canvas)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] transition-all cursor-pointer"
                >
                  Show All ({LINKEDIN_CERTIFICATIONS.length})
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setVisibleCertCount(6)}
                className="px-3.5 py-2 rounded-lg bg-[var(--bg-canvas)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] transition-all cursor-pointer"
              >
                Collapse to Top 6
              </button>
            )}

            <a
              href="#/certifications"
              className="px-3.5 py-2 rounded-lg bg-[var(--interactive-primary)] hover:opacity-90 text-black text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Certifications Hub</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* LinkedIn Honors & Awards Section */}
      <div className="space-y-5 pt-4 border-t border-[var(--border-subtle)]">
        <div>
          <p className="text-xs font-mono text-[var(--text-accent)] font-semibold uppercase">
            03 · Honors &amp; Academic Awards
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
            Corporate &amp; Institutional Recognition ({LINKEDIN_HONORS_AWARDS.length} Honors)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LINKEDIN_HONORS_AWARDS.map((award) => (
            <div
              key={award.id}
              className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[#1b1613] border border-[var(--interactive-subtle-border)] flex items-center justify-center shrink-0 p-1.5 shadow-inner">
                <OrganizationLogo
                  logoId={award.organizationLogoId}
                  orgName={award.organization || award.issuer}
                  size="sm"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">
                    {award.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--text-accent)] shrink-0">
                    {award.year}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)]">
                  <OrganizationLogo
                    logoId={award.organizationLogoId}
                    orgName={award.organization || award.issuer}
                    size="xs"
                  />
                  <span className="font-semibold text-[var(--text-primary)]">
                    {award.organization || award.issuer}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                  {award.description}
                </p>

                {award.certificatePdfUrl && (
                  <div className="pt-2">
                    <a
                      href={award.certificatePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-[var(--text-accent)] hover:underline"
                    >
                      <ExternalLink className="w-3 h-3 text-[var(--interactive-primary)]" />
                      <span>View Credential Document</span>
                    </a>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

