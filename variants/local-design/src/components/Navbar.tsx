import React, { useState } from 'react';
import { NavTab } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Layers, 
  Terminal, 
  Briefcase, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Zap
} from 'lucide-react';
import { useAppMode } from '../context/AppModeContext';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSkimMode, toggleSkimMode } = useAppMode();

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Overview', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: 'articles', label: 'Case Studies', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'skills', label: 'Skills', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'experience', label: 'Experience', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { id: 'demos', label: 'Demos', icon: <MonitorPlay className="w-3.5 h-3.5" /> },
    { id: 'briefing', label: 'Briefing', icon: <Sparkles className="w-3.5 h-3.5" /> }
  ];

  return (
    <header className="w-full border-b border-white/[0.08] bg-black/65 backdrop-blur-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-14 sm:h-16">

          {/* Zone 1 — Left: Apple-Style Brand Mark */}
          <div
            id="nav-brand-logo"
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0 min-w-0"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white via-[#a3c9ff] to-[#0078d4] p-[1px] shrink-0 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#05070a] rounded-[7px] flex items-center justify-center font-mono font-bold text-[11px] text-white">
                AF
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-xs sm:text-sm tracking-tight text-white group-hover:text-white transition-colors whitespace-nowrap truncate">
                {PERSONAL_INFO.name}
              </div>
              <p className="hidden xl:block text-[10px] text-[#86868b] font-mono tracking-wider whitespace-nowrap truncate uppercase">
                Modernization Architect
              </p>
            </div>
          </div>

          {/* Zone 2 — Center: Apple Segmented Pill Navigation */}
          <nav 
            className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-xl" 
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.12] border border-white/[0.15] shadow-[0_1px_8px_rgba(0,0,0,0.5)]'
                      : 'text-[#86868b] border border-transparent hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3 — Right: Actions & Fast-Track Skim Mode Toggle */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Recruiter Skim Mode Switch */}
            <button
              id="nav-btn-skim-mode"
              onClick={toggleSkimMode}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                isSkimMode
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_14px_rgba(251,191,36,0.35)]'
                  : 'text-neutral-400 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20'
              }`}
              title="Toggle Fast-Track Skim Mode: disables 3D motion and surfaces dense factsheet for time-poor recruiters"
              aria-pressed={isSkimMode}
            >
              <Zap className={`w-3.5 h-3.5 ${isSkimMode ? 'fill-black text-black' : 'text-amber-400'}`} />
              <span>{isSkimMode ? 'Skim Mode: ON' : '3D Keynote'}</span>
            </button>

            <button
              id="nav-btn-resume"
              onClick={onOpenResume}
              className="apple-btn-secondary !py-1.5 !px-3.5 !text-xs"
            >
              <FileText className="w-3.5 h-3.5 text-white/70" aria-hidden="true" />
              <span>Resume</span>
            </button>
            <a
              id="nav-btn-contact"
              href="https://calendly.com/aliakhmadfauzie"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary !py-1.5 !px-4 !text-xs"
            >
              <span>Schedule Call</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={toggleSkimMode}
              className={`p-1.5 rounded-lg border text-xs font-mono transition-all ${
                isSkimMode
                  ? 'bg-amber-400 text-black border-amber-400 font-bold'
                  : 'bg-white/[0.04] text-neutral-400 border-white/10'
              }`}
              title="Toggle Fast-Track Skim Mode"
              aria-label="Toggle Fast-Track Skim Mode"
            >
              <Zap className={`w-3.5 h-3.5 ${isSkimMode ? 'fill-black' : 'text-amber-400'}`} />
            </button>
            <a
              id="nav-btn-mobile-contact"
              href="https://calendly.com/aliakhmadfauzie"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary !py-1.5 !px-3 !text-xs"
            >
              Schedule
            </a>
            <button
              id="nav-btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white/[0.05] text-[#86868b] hover:text-white border border-white/[0.08] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-black/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium tracking-tight transition-colors ${
                    isActive
                      ? 'text-white bg-white/[0.1] border border-white/[0.15]'
                      : 'text-[#86868b] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-[#86868b]'}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2 border-t border-white/[0.08] pt-3">
            <button
              id="mobile-nav-resume"
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="apple-btn-secondary !w-full !py-2 !text-xs justify-center"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a
              id="mobile-nav-contact"
              href="https://calendly.com/aliakhmadfauzie"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="apple-btn-primary !w-full !py-2 !text-xs justify-center"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Schedule</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
