import { Dialog } from '../Dialog';
import React, { useState } from 'react';
import {
  PERSONAL_INFO,
  WORK_EXPERIENCE,
  ADDITIONAL_COMPETENCIES,
  LINKEDIN_CERTIFICATIONS,
  LINKEDIN_HONORS_AWARDS
} from '../../data/portfolioData';
import {
  X,
  Download,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { OrganizationLogo } from '../OrganizationLogo';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      const url = new URL(window.location.href);
      url.hash = '/resume';
      await navigator.clipboard.writeText(url.href);
      setCopied(true);
      setCopyStatus('Resume link copied.');
    } catch { setCopyStatus('Could not copy. Open the Resume PDF link to share the file directly.'); }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog onClose={onClose} labelledBy="resume-modal-title" className="resume-dialog w-[calc(100%-1rem)] max-w-4xl p-0 border-0 bg-transparent text-[var(--text-primary)]">
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-[var(--bg-surface)] border-t sm:border border-[var(--border-subtle)] rounded-t-[var(--radius-lg)] sm:rounded-[var(--radius-lg)] shadow-2xl flex flex-col h-[90vh] max-h-[90vh]"
      >
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] shrink-0">
          <div>
            <h2 id="resume-modal-title" className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
              Executive Resume &amp; LinkedIn Credentials
            </h2>
            <p className="text-xs text-[var(--text-tertiary)] font-mono">
              Curriculum Vitae · {PERSONAL_INFO.name} (in/aliakhmadf)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-btn-copy"
              onClick={handleCopyLink}
              aria-label="Copy link to resume"
              className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
              title="Copy link to resume"
            >
              {copied ? <Check className="w-4 h-4 text-[var(--text-accent)]" /> : <Copy className="w-4 h-4" />}
            </button>

            <a
              href="/assets/profile/Resume.pdf"
              download="Ali_Akhmad_Fauzie_Resume.pdf"
              className="hidden sm:flex items-center space-x-1.5 px-3.5 py-2 rounded-[var(--radius-sm)] bg-[#14161f] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)] text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <button
              id="resume-btn-print"
              onClick={handlePrint}
              className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-[var(--radius-sm)] bg-[var(--interactive-primary)] hover:bg-[var(--interactive-primary-hover)] text-[#090a0d] text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-btn-close"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[var(--bg-surface)] print:bg-white print:text-black">
          <p role="status" aria-live="polite" className="text-sm">{copyStatus}</p>
          {/* Header Identity Block with Real LinkedIn Photo */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[var(--interactive-primary)] shrink-0"
              />
              <div className="space-y-1.5">
                <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
                  {PERSONAL_INFO.name} (AL)
                </h1>
                <p className="text-xs sm:text-sm font-medium text-[var(--text-accent)] font-mono">
                  {PERSONAL_INFO.linkedInHeadline}
                </p>
                <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed pt-1">
                  {PERSONAL_INFO.summary}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[var(--text-secondary)] shrink-0 font-mono bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
                <span>Kuala Lumpur, MY / Bandung, ID</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-accent)] hover:underline"
                >
                  {PERSONAL_INFO.linkedInHandle}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full py-1.5 px-3 rounded-[var(--radius-sm)] bg-[var(--interactive-primary)] hover:bg-[var(--interactive-primary-hover)] text-[#090a0d] text-center font-sans font-bold transition-colors"
                >
                  Contact Candidate
                </button>
              </div>
            </div>
          </div>

          {/* 01 · Technical Skills & Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[var(--text-accent)] font-medium">
              01 · Technical Skills &amp; Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADDITIONAL_COMPETENCIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1.5"
                >
                  <p className="text-xs font-semibold text-[var(--text-primary)]">{cat.category}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {cat.skills.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 02 · Professional Experience */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono text-[var(--text-accent)] font-medium">
              02 · Professional Experience
            </h3>

            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l border-[var(--border-subtle)] space-y-2">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--interactive-primary)]" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-semibold text-[var(--text-primary)]">{exp.role}</h4>
                        {exp.promotionBadge && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
                            {exp.promotionBadge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        {exp.companyLogoId && exp.companyLogoId !== 'general' && (
                          <div className="w-4 h-4 rounded bg-[#10121a] border border-[var(--border-subtle)] flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
                            <OrganizationLogo logoId={exp.companyLogoId} orgName={exp.company} size="xs" />
                          </div>
                        )}
                        <p className="text-xs text-[var(--text-accent)] font-medium">
                          {exp.company} · {exp.location}
                        </p>
                      </div>

                      {exp.clients && exp.clients.length > 0 && (
                        <div className="flex items-center gap-1.5 pt-1 flex-wrap">
                          <span className="text-[10px] font-mono text-[var(--text-tertiary)]">Enterprise Clients:</span>
                          {exp.clients.map((c) => (
                            <span key={c.id} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#131520] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-primary)]">
                              <OrganizationLogo logoId={c.logoId} orgName={c.name} size="xs" />
                              <span>{c.name}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-xs font-mono text-[var(--text-tertiary)]">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] pt-1">
                    {exp.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                        <span className="text-[var(--text-accent)] mt-0.5 shrink-0 font-mono">·</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 03 · LinkedIn Licenses & Certifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[var(--text-accent)] font-medium">
              03 · Licenses &amp; Certifications (LinkedIn Verified)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LINKEDIN_CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[var(--bg-primary)] p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] flex items-start justify-between gap-3"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <OrganizationLogo
                        logoId={cert.organizationLogoId}
                        orgName={cert.organization || cert.issuer}
                        size="xs"
                      />
                      <p className="text-xs font-semibold text-[var(--text-primary)] truncate">{cert.name}</p>
                    </div>
                    <div className="flex items-center gap-1.5 pl-5">
                      <p className="text-[11px] font-mono text-[var(--text-secondary)] truncate">
                        {cert.organization || cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-accent)] shrink-0">
                    {cert.issueDate}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 04 · Honors & Academic Awards */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[var(--text-accent)] font-medium">
              04 · Honors &amp; Academic Awards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LINKEDIN_HONORS_AWARDS.map((award) => (
                <div
                  key={award.id}
                  className="bg-[var(--bg-primary)] p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <OrganizationLogo
                        logoId={award.organizationLogoId}
                        orgName={award.organization || award.issuer}
                        size="xs"
                      />
                      <p className="text-xs font-semibold text-[var(--text-primary)] truncate">{award.title}</p>
                    </div>
                    <span className="text-[11px] font-mono text-[var(--text-accent)] shrink-0">
                      {award.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 pl-5">
                    <p className="text-[11px] font-mono text-[var(--text-tertiary)] truncate">
                      {award.organization || award.issuer}
                    </p>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-wrap gap-3 items-center justify-between">
          <span className="text-xs text-[var(--text-tertiary)] font-mono">
            {PERSONAL_INFO.name} (AL) · linkedin.com/in/aliakhmadf
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-[var(--radius-sm)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
            >
              Close
            </button>
            <a
              href="/assets/profile/LinkedIn_Profile.pdf"
              download="Ali_Akhmad_Fauzie_LinkedIn_Profile.pdf"
              className="px-4 py-2 rounded-[var(--radius-sm)] text-xs font-mono text-[var(--text-accent)] bg-[#14161f] border border-[var(--interactive-subtle-border)] hover:bg-[var(--interactive-subtle-bg)]"
            >
              LinkedIn PDF
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-5 py-2 rounded-[var(--radius-sm)] text-xs font-bold bg-[var(--interactive-primary)] text-[#090a0d] hover:bg-[var(--interactive-primary-hover)] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

