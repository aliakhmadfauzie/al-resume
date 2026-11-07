import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE, DEV_STACK, GOVERNANCE_ITEMS } from '../../data/portfolioData';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Award,
  Layers,
  Terminal,
  Cpu,
  ShieldCheck,
  CheckCircle2
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
    
    // Focus trap implementation
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
    
    // Auto-focus first element when opened
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
        className="relative w-full max-w-4xl bg-[#161b22] border-t sm:border border-[#282a2e] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col h-[90vh] max-h-[90vh] animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-8 duration-300"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#282a2e] bg-[#111318] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#0078d4]/20 border border-[#0078d4]/40 flex items-center justify-center text-[#a3c9ff]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-sm font-bold text-white tracking-tight">Executive Resume & Credentials</h2>
              <p className="text-[11px] text-[#c0c7d4] font-mono">Curriculum Vitae • Ali Akhmad Fauzie</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4 sm:mt-0">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-[#111318] p-1 rounded-lg border border-[#282a2e] text-xs shadow-inner">
              <button
                onClick={() => setLayoutMode('standard')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                  layoutMode === 'standard' 
                    ? 'bg-[#1e2024] text-white shadow-sm border border-[#282a2e]' 
                    : 'text-[#e2e2e8] hover:text-white border border-transparent'
                }`}
              >
                Standard Layout
              </button>
              <button
                onClick={() => setLayoutMode('skills')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                  layoutMode === 'skills' 
                    ? 'bg-[#1e2024] text-white shadow-sm border border-[#282a2e]' 
                    : 'text-[#e2e2e8] hover:text-white border border-transparent'
                }`}
              >
                Skills Summary
              </button>
            </div>

            <button
              id="resume-btn-copy"
              onClick={handleCopyLink}
              aria-label="Copy link to resume"
              className="p-2.5 sm:p-2 rounded-lg bg-[#1e2024] hover:bg-[#282a2e] text-[#e2e2e8] hover:text-white border border-[#282a2e] transition-all focus:outline-none focus:ring-2 focus:ring-[#00dbe7]"
              title="Copy link to resume"
            >
              {copied ? <Check className="w-4 h-4 text-[#00dbe7]" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              id="resume-btn-print"
              onClick={handlePrint}
              className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#00dbe7] hover:bg-[#a3c9ff] text-[#111318] text-xs font-bold shadow-[0_0_15px_rgba(0,219,231,0.3)] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              id="resume-btn-close"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2.5 sm:p-2 rounded-lg bg-[#1e2024] hover:bg-[#282a2e] text-[#e2e2e8] hover:text-white border border-[#282a2e] transition-all focus:outline-none focus:ring-2 focus:ring-[#00dbe7]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#111318]/50 print:bg-white print:text-black">
          
          {/* Header Identity Block */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#282a2e]">
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-sm font-semibold text-[#00dbe7] font-mono">{PERSONAL_INFO.title}</p>
              <p className="text-sm text-[#e2e2e8] max-w-xl leading-relaxed pt-1">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-[#e2e2e8] shrink-0 font-mono bg-[#1a1c20] p-4 rounded-xl border border-[#282a2e]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#0078d4]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#00dbe7]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#dab9ff]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="pt-2 flex items-center space-x-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full py-1 px-2.5 rounded bg-[#0078d4]/20 hover:bg-[#0078d4]/40 text-[#a3c9ff] border border-[#0078d4]/40 text-center font-semibold transition-all"
                >
                  Contact Candidate
                </button>
              </div>
            </div>
          </div>

          {/* Key Competencies Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>Core Technical Architecture</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#1a1c20] p-3 rounded-xl border border-[#282a2e]">
                <p className="text-[11px] font-bold text-white mb-1">Power Platform</p>
                <p className="text-xs text-[#e2e2e8] leading-tight">Power Apps, Automate, Dataverse, Power BI, Copilot</p>
              </div>
              <div className="bg-[#1a1c20] p-3 rounded-xl border border-[#282a2e]">
                <p className="text-[11px] font-bold text-white mb-1">Engineering Stack</p>
                <p className="text-xs text-[#e2e2e8] leading-tight">React PCF, TypeScript, REST & Graph APIs, T-SQL</p>
              </div>
              <div className="bg-[#1a1c20] p-3 rounded-xl border border-[#282a2e]">
                <p className="text-[11px] font-bold text-white mb-1">ALM & DevOps</p>
                <p className="text-xs text-[#e2e2e8] leading-tight">PAC CLI, Azure Pipelines, GitHub Actions, CoE Starter Kit</p>
              </div>
              <div className="bg-[#1a1c20] p-3 rounded-xl border border-[#282a2e]">
                <p className="text-[11px] font-bold text-white mb-1">Operations & Lean</p>
                <p className="text-xs text-[#e2e2e8] leading-tight">Six Sigma Green Belt, SLA Management, ISO 9001/27001</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l border-[#282a2e] space-y-2">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#0078d4] border-2 border-[#111318]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                      <p className="text-xs text-[#a3c9ff] font-medium">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-[#e2e2e8] bg-[#1a1c20] px-2.5 py-0.5 rounded-full border border-[#282a2e] self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#e2e2e8] pt-1">
                    {exp.bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                        <span className="text-[#00dbe7] mt-1 shrink-0">•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#111318] p-3 mt-4 rounded-xl border border-[#282a2e]">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10.5px] px-2.5 py-1 rounded-md bg-[#1e2024] text-[#e2e2e8] border border-[#282a2e] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Education & Certifications</span>
            </h3>
            <div className="bg-[#1a1c20] p-4 rounded-xl border border-[#282a2e] space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Universiti Utara Malaysia (UUM)</h4>
                  <p className="text-xs text-[#e2e2e8] mt-1">Bachelor of International Business Management (Honours) • Minor in Logistics & Transportation</p>
                </div>
                <span className="text-xs font-mono text-[#e2e2e8]">2013 – 2016</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[#00dbe7] pt-1">
                <span>★ UUM International Scheme Scholarship</span>
                <span>•</span>
                <span>★ 3x Dean's Academic Award</span>
                <span>•</span>
                <span>★ Lean Six Sigma Green Belt Certified</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-5 border-t border-[#282a2e] bg-[#111318] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sticky bottom-0 z-10">
          <span className="hidden sm:block text-xs text-[#e2e2e8] font-mono">Ali Akhmad Fauzie • Last Updated 2025</span>
          <div className="flex flex-col-reverse sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-3.5 sm:py-2.5 rounded-xl sm:rounded-lg text-[15px] sm:text-xs font-semibold text-[#e2e2e8] hover:text-white bg-[#1e2024] border border-[#282a2e] focus:outline-none focus:ring-2 focus:ring-[#00dbe7]"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="w-full sm:w-auto flex justify-center items-center space-x-2 px-5 py-3.5 sm:py-2.5 rounded-xl sm:rounded-lg text-[15px] sm:text-xs font-bold bg-[#00dbe7] text-[#111318] hover:bg-[#a3c9ff] shadow-lg shadow-[#00dbe7]/20 focus:outline-none focus:ring-2 focus:ring-white transition-all"
            >
              <Download className="w-5 h-5 sm:w-3.5 sm:h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
