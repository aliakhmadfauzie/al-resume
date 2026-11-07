import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE } from '../../data/portfolioData';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Layers, 
  Terminal, 
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [layoutMode, setLayoutMode] = useState<'standard' | 'skills'>('standard');
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => {
      firstElement?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        ref={modalRef}
        id="resume-modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        className="relative w-full max-w-4xl bg-black/95 backdrop-blur-2xl border border-white/10 rounded-t-3xl sm:rounded-3xl flex flex-col h-[90vh] max-h-[90vh] shadow-2xl animate-in slide-in-from-bottom-8 duration-300"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-white/[0.02] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center font-mono text-xs shadow-md">
              AF
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-sm font-bold text-white tracking-tight">Executive Resume &amp; Credentials</h2>
              <p className="text-[11px] text-neutral-400 font-mono">Curriculum Vitae • Ali Akhmad Fauzie</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-white/[0.06] p-1 rounded-full border border-white/10 text-xs">
              <button
                onClick={() => setLayoutMode('standard')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  layoutMode === 'standard' 
                    ? 'bg-white text-black font-semibold' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setLayoutMode('skills')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  layoutMode === 'skills' 
                    ? 'bg-white text-black font-semibold' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Skills Summary
              </button>
            </div>

            <button
              id="resume-btn-copy"
              onClick={handleCopyLink}
              aria-label="Copy link to resume"
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
              title="Copy link to resume"
            >
              {copied ? <Check className="w-4 h-4 text-[#30d158]" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              id="resume-btn-print"
              onClick={handlePrint}
              className="hidden sm:flex items-center space-x-1.5 apple-btn-primary text-xs !py-1.5 !px-3.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              id="resume-btn-close"
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 print:bg-white print:text-black">
          
          {/* Header Identity Block */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-xs font-semibold text-[#2997ff] font-mono">{PERSONAL_INFO.title}</p>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed pt-1">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="space-y-2 text-xs text-neutral-400 shrink-0 font-mono apple-card p-4 rounded-2xl bg-white/[0.02]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#2997ff]" />
                <span className="text-neutral-300">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#30d158]" />
                <span className="text-neutral-300">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#bf5af2]" />
                <span className="text-neutral-300">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="apple-btn-secondary w-full text-xs !py-1.5 justify-center"
                >
                  Contact Candidate
                </button>
              </div>
            </div>
          </div>

          {/* Key Competencies Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>Core Technical Architecture</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="apple-card p-4 rounded-2xl space-y-1">
                <p className="text-xs font-bold text-white">Power Platform</p>
                <p className="text-[11px] text-neutral-400 leading-tight">Power Apps, Automate, Dataverse, Power BI, Copilot</p>
              </div>
              <div className="apple-card p-4 rounded-2xl space-y-1">
                <p className="text-xs font-bold text-white">Engineering Stack</p>
                <p className="text-[11px] text-neutral-400 leading-tight">React PCF, TypeScript, REST &amp; Graph APIs, T-SQL</p>
              </div>
              <div className="apple-card p-4 rounded-2xl space-y-1">
                <p className="text-xs font-bold text-white">ALM &amp; DevOps</p>
                <p className="text-[11px] text-neutral-400 leading-tight">PAC CLI, Azure Pipelines, GitHub Actions, CoE Kit</p>
              </div>
              <div className="apple-card p-4 rounded-2xl space-y-1">
                <p className="text-xs font-bold text-white">Operations &amp; Lean</p>
                <p className="text-[11px] text-neutral-400 leading-tight">Six Sigma Green Belt, SLA Management, ISO 9001/27001</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#30d158] font-semibold flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l border-white/10 space-y-2">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#2997ff]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">{exp.role}</h4>
                      <p className="text-xs text-[#2997ff]">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10 self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-neutral-300 pt-1">
                    {exp.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                        <span className="text-[#2997ff] shrink-0 font-bold">•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#bf5af2] font-semibold flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Education &amp; Credentials</span>
            </h3>
            <div className="apple-card p-5 rounded-2xl space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Universiti Utara Malaysia (UUM)</h4>
                  <p className="text-xs text-neutral-300 mt-0.5">Bachelor of International Business Management (Honours) • Minor in Logistics</p>
                </div>
                <span className="text-xs font-mono text-neutral-400">2013 – 2016</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#2997ff] pt-1">
                <span>★ International Scheme Scholarship</span>
                <span>•</span>
                <span>★ 3x Dean's Award</span>
                <span>•</span>
                <span>★ Six Sigma Green Belt</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between shrink-0">
          <span className="hidden sm:block text-xs text-neutral-400 font-mono">Ali Akhmad Fauzie • Executive CV</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="apple-btn-secondary text-xs !py-2 !px-4"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="apple-btn-primary text-xs !py-2 !px-4 flex items-center space-x-1.5"
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
