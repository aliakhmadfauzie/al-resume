import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE, ADDITIONAL_COMPETENCIES } from '../../data/portfolioData';
import {
  X,
  Download,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden bg-black/80 backdrop-blur-sm">
      <div
        ref={modalRef}
        id="resume-modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        className="relative w-full max-w-4xl bg-[var(--bg-surface)] border-t sm:border border-[var(--border-subtle)] rounded-t-[var(--radius-lg)] sm:rounded-[var(--radius-lg)] shadow-2xl flex flex-col h-[90vh] max-h-[90vh]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] shrink-0">
          <div>
            <h2 id="resume-modal-title" className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
              Executive Resume &amp; Credentials
            </h2>
            <p className="text-xs text-[var(--text-tertiary)] font-mono">
              Curriculum Vitae · Ali Akhmad Fauzie (AL)
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
              {copied ? <Check className="w-4 h-4 text-[#3b82f6]" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              id="resume-btn-print"
              onClick={handlePrint}
              className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-[var(--radius-sm)] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
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
          {/* Header Identity Block */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
                {PERSONAL_INFO.name} (AL)
              </h1>
              <p className="text-sm font-medium text-[#3b82f6] font-mono">{PERSONAL_INFO.title}</p>
              <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed pt-1">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="space-y-2 text-xs text-[var(--text-secondary)] shrink-0 font-mono bg-[var(--bg-primary)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full py-1.5 px-3 rounded-[var(--radius-sm)] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-center font-sans font-medium transition-colors"
                >
                  Contact Candidate
                </button>
              </div>
            </div>
          </div>

          {/* Technical Skills & Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[#3b82f6] font-medium">
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

          {/* Experience Section */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono text-[#3b82f6] font-medium">
              02 · Professional Experience
            </h3>

            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l border-[var(--border-subtle)] space-y-2">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#2563eb]" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)]">{exp.role}</h4>
                      <p className="text-xs text-[#3b82f6] font-medium">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-tertiary)]">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] pt-1">
                    {exp.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                        <span className="text-[#3b82f6] mt-0.5 shrink-0 font-mono">·</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] flex items-center justify-between">
          <span className="text-xs text-[var(--text-tertiary)] font-mono">
            Ali Akhmad Fauzie (AL) · Solution Architect Dossier
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-[var(--radius-sm)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-5 py-2 rounded-[var(--radius-sm)] text-xs font-medium bg-[var(--accent-blue)] text-white hover:bg-[var(--accent-blue-hover)] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
