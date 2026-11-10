import { Dialog } from '../Dialog';
import React, { useState } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  Printer,
  ExternalLink,
  Briefcase,
  Layers,
  Sparkles,
  Users
} from 'lucide-react';
import { RESUME_PERSONA_DATA, ResumePersonaData } from '../../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  activePersona?: 'software' | 'operations' | 'both';
  onPersonaChange?: (persona: 'software' | 'operations' | 'both') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
  activePersona = 'both',
  onPersonaChange
}) => {
  const [selectedPersona, setSelectedPersona] = useState<'software' | 'operations' | 'both'>(activePersona);
  const [copied, setCopied] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  if (!isOpen) return null;

  const currentData: ResumePersonaData = RESUME_PERSONA_DATA[selectedPersona] || RESUME_PERSONA_DATA.both;

  const handleSelectPersona = (p: 'software' | 'operations' | 'both') => {
    setSelectedPersona(p);
    if (onPersonaChange) {
      onPersonaChange(p);
    }
  };

  const handleCopyLink = async () => {
    try {
      const url = new URL(window.location.href);
      url.hash = `/resume?persona=${selectedPersona}`;
      await navigator.clipboard.writeText(url.href);
      setCopied(true);
      setCopyStatus('Resume link copied to clipboard.');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyStatus('Could not copy automatically. You can download the PDF directly.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog
      onClose={onClose}
      labelledBy="resume-modal-title"
      className="resume-dialog w-[calc(100%-1rem)] max-w-5xl p-0 border-0 bg-transparent text-[var(--text-primary)] print:w-full print:max-w-none print:m-0"
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-5xl bg-[var(--bg-surface)] border-t sm:border border-[var(--border-subtle)] rounded-t-[var(--radius-lg)] sm:rounded-[var(--radius-lg)] shadow-2xl flex flex-col h-[94dvh] max-h-[94dvh] print:h-auto print:max-h-none print:bg-white print:border-none print:shadow-none print:rounded-none"
      >
        {/* Top Control Header Bar (Hidden in Print) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] shrink-0 print:hidden">
          <div className="flex items-center space-x-3">
            <div>
              <h2 id="resume-modal-title" className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
                Executive Resume Viewer
              </h2>
              <p className="text-xs text-[var(--text-tertiary)] font-mono">
                Official 2-Page Executive Document Format · Tailored to Profile
              </p>
            </div>
          </div>

          {/* Profile Switcher Pills (Software / Operations / Both) */}
          <div className="flex items-center gap-1.5 bg-[var(--bg-surface)] p-1 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] self-start sm:self-auto">
            <button
              type="button"
              onClick={() => handleSelectPersona('software')}
              className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono transition-all flex items-center space-x-1.5 active:scale-95 touch-manipulation cursor-pointer ${
                selectedPersona === 'software'
                  ? 'bg-[var(--accent-blue)] text-[#090a0d] font-bold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Software</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectPersona('operations')}
              className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono transition-all flex items-center space-x-1.5 active:scale-95 touch-manipulation cursor-pointer ${
                selectedPersona === 'operations'
                  ? 'bg-[var(--accent-blue)] text-[#090a0d] font-bold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Operations Leader</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectPersona('both')}
              className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono transition-all flex items-center space-x-1.5 active:scale-95 touch-manipulation cursor-pointer ${
                selectedPersona === 'both'
                  ? 'bg-[var(--accent-blue)] text-[#090a0d] font-bold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Both (Hybrid)</span>
            </button>
          </div>

          {/* Action Buttons: Copy, Download PDF, Print, Close */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              id="resume-btn-copy"
              onClick={handleCopyLink}
              aria-label="Copy resume link"
              className="min-w-[40px] min-h-[40px] p-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all flex items-center justify-center cursor-pointer active:scale-95 touch-manipulation"
              title="Copy shareable link"
            >
              {copied ? <Check className="w-4 h-4 text-[#22c55e]" /> : <Copy className="w-4 h-4" />}
            </button>

            <a
              id="resume-btn-download-pdf"
              href={currentData.pdfDownloadUrl}
              download={currentData.pdfFilename}
              className="flex items-center space-x-1.5 px-3 py-2 min-h-[40px] rounded-[var(--radius-sm)] bg-[var(--interactive-primary)] hover:bg-[var(--interactive-primary-hover)] text-[#090a0d] text-xs font-bold transition-colors cursor-pointer active:scale-95 touch-manipulation shadow-sm"
              title={`Download ${currentData.label} PDF`}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Download</span>
              <span>PDF</span>
            </a>

            <button
              id="resume-btn-print"
              onClick={handlePrint}
              aria-label="Print or save as PDF"
              className="flex items-center space-x-1.5 px-3 py-2 min-h-[40px] rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-medium transition-colors cursor-pointer active:scale-95 touch-manipulation"
              title="Print document format"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print</span>
            </button>

            <button
              id="resume-btn-close"
              onClick={onClose}
              aria-label="Close modal"
              className="min-w-[40px] min-h-[40px] p-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all flex items-center justify-center cursor-pointer active:scale-95 touch-manipulation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable 2-Page Executive Document Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0b0c10] print:p-0 print:m-0 print:bg-white print:overflow-visible">
          {copyStatus && (
            <p role="status" aria-live="polite" className="text-xs font-mono text-[var(--text-accent)] mb-3 print:hidden">
              {copyStatus}
            </p>
          )}

          {/* Paper Sheet Simulator (White A4 Style matching Attached PDF) */}
          <div className="max-w-[820px] mx-auto bg-white text-[#111111] p-6 sm:p-10 rounded-sm shadow-xl border border-neutral-300 font-serif leading-snug print:shadow-none print:border-none print:p-0 print:max-w-none print:rounded-none">
            {/* 1. HEADER BLOCK */}
            <div className="border-b-[1.5px] border-[#111] pb-2 mb-3">
              <h1 className="text-base sm:text-lg font-bold text-black tracking-tight leading-tight">
                {currentData.nameLine}, {currentData.headline}
              </h1>
              <div className="text-xs sm:text-[13px] text-[#222] mt-1 font-sans">
                {currentData.contactLine}
              </div>
              <div className="flex items-center gap-6 text-xs sm:text-[13px] text-[#222] mt-1 font-sans">
                <span className="font-bold uppercase tracking-wider text-[11px] text-[#111]">LINKS</span>
                <a
                  href={currentData.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline hover:text-blue-700 font-medium"
                >
                  linkedin.com/in/aliakhmadf
                </a>
              </div>
            </div>

            {/* 2. PROFESSIONAL SUMMARY */}
            <div className="border-t border-[#111] pt-3 mt-3 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="w-full sm:w-48 shrink-0 text-xs font-bold uppercase tracking-wider text-[#111] leading-tight">
                PROFESSIONAL SUMMARY
              </div>
              <div className="flex-1 text-xs sm:text-[13px] text-[#111] leading-relaxed text-justify">
                {currentData.summary}
              </div>
            </div>

            {/* 3. CORE COMPETENCIES & TECHNICAL SKILLS */}
            <div className="border-t border-[#111] pt-3 mt-3 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="w-full sm:w-48 shrink-0 text-xs font-bold uppercase tracking-wider text-[#111] leading-tight">
                {currentData.skillsHeader}
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs sm:text-[13px] text-[#111]">
                <ul className="space-y-1 list-none p-0 m-0">
                  {currentData.skillsColumn1.map((skill, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="text-neutral-400 text-[10px]">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1 list-none p-0 m-0">
                  {currentData.skillsColumn2.map((skill, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="text-neutral-400 text-[10px]">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. WORK EXPERIENCE (Freelance strictly original + Concentrix on Page 1) */}
            <div className="border-t border-[#111] pt-3 mt-3 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="w-full sm:w-48 shrink-0 text-xs font-bold uppercase tracking-wider text-[#111] leading-tight">
                WORK EXPERIENCE
              </div>
              <div className="flex-1 space-y-4">
                {currentData.experiences.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                      <div className="flex items-baseline space-x-2">
                        <span className="w-32 shrink-0 font-normal text-neutral-800">{exp.period}</span>
                        <span className="font-bold text-black">{exp.role}, {exp.company}</span>
                      </div>
                      <span className="text-xs text-neutral-700 italic sm:not-italic">{exp.location}</span>
                    </div>
                    <ul className="pl-4 space-y-1 text-xs sm:text-[13px] text-[#111] list-disc leading-relaxed text-justify">
                      {exp.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx}>{bp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. LANGUAGES */}
            <div className="border-t border-[#111] pt-3 mt-3 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="w-full sm:w-48 shrink-0 text-xs font-bold uppercase tracking-wider text-[#111] leading-tight">
                LANGUAGES
              </div>
              <div className="flex-1 flex flex-wrap gap-6 text-xs sm:text-[13px] text-[#111]">
                {currentData.languages.map((lang, idx) => (
                  <span key={idx} className="font-medium">{lang}</span>
                ))}
              </div>
            </div>

            {/* 6. KEY PROJECTS */}
            <div className="border-t border-[#111] pt-3 mt-3 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="w-full sm:w-48 shrink-0 text-xs font-bold uppercase tracking-wider text-[#111] leading-tight">
                {currentData.projectsHeader}
              </div>
              <div className="flex-1 space-y-3">
                {currentData.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-1">
                    <div className="text-xs sm:text-[13px] font-bold text-black">
                      {proj.title}
                    </div>
                    <div className="text-xs italic text-neutral-700">
                      {proj.subtitle}
                    </div>
                    <ul className="pl-4 space-y-1 text-xs sm:text-[13px] text-[#111] list-disc leading-relaxed text-justify">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. EDUCATION */}
            <div className="border-t border-[#111] pt-3 mt-3 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="w-full sm:w-48 shrink-0 text-xs font-bold uppercase tracking-wider text-[#111] leading-tight">
                EDUCATION
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                  <div className="flex items-baseline space-x-2">
                    <span className="w-32 shrink-0 font-normal text-neutral-800">{currentData.education.period}</span>
                    <span className="font-bold text-black">{currentData.education.degree}, {currentData.education.school}</span>
                  </div>
                  <span className="text-xs text-neutral-700">{currentData.education.location}</span>
                </div>
                <ul className="pl-4 space-y-0.5 text-xs sm:text-[13px] text-[#111] list-disc leading-relaxed">
                  {currentData.education.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 8. CERTIFICATIONS */}
            <div className="border-t border-[#111] pt-3 mt-3 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="w-full sm:w-48 shrink-0 text-xs font-bold uppercase tracking-wider text-[#111] leading-tight">
                CERTIFICATIONS
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-xs sm:text-[13px] text-[#111]">
                {currentData.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="flex items-center space-x-1.5">
                    <span className="text-neutral-400 text-[10px]">•</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* End of Sheet */}
          </div>
        </div>

        {/* Footer Actions (Hidden in Print) */}
        <div className="px-4 sm:px-6 py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between shrink-0 print:hidden">
          <span className="text-xs text-[var(--text-tertiary)] font-mono text-center sm:text-left">
            Showing format: <strong className="text-[var(--text-accent)]">{currentData.label}</strong> · PDF 2-page print layout
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 min-h-[40px] rounded-[var(--radius-sm)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] cursor-pointer active:scale-95 touch-manipulation flex items-center justify-center"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex-1 sm:flex-initial px-4 py-2 min-h-[40px] rounded-[var(--radius-sm)] text-xs font-mono text-[var(--text-accent)] bg-[#14161f] border border-[var(--interactive-subtle-border)] hover:bg-[var(--interactive-subtle-bg)] cursor-pointer active:scale-95 touch-manipulation flex items-center justify-center"
            >
              Contact Candidate
            </button>
            <a
              href={currentData.pdfDownloadUrl}
              download={currentData.pdfFilename}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-2 min-h-[40px] rounded-[var(--radius-sm)] text-xs font-bold bg-[var(--interactive-primary)] text-[#090a0d] hover:bg-[var(--interactive-primary-hover)] transition-all cursor-pointer active:scale-95 touch-manipulation shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {currentData.label} PDF</span>
            </a>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
