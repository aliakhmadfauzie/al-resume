import React, { useState } from 'react';
import { NavTab } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Layers, 
  Terminal, 
  Briefcase, 
  Sparkles, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  MonitorPlay,
  MessageSquareQuote,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenResume,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Executive Overview', icon: <Layers className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects & Migration', icon: <Briefcase className="w-4 h-4" />, badge: '365+ Apps' },
    { id: 'skills', label: 'Technical Mastery', icon: <Terminal className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'demos', label: 'Live Enterprise Demos', icon: <MonitorPlay className="w-4 h-4" />, badge: '7 Demos' },
    { id: 'interview', label: 'Interview Mode', icon: <MessageSquareQuote className="w-4 h-4" />, badge: 'Architect Q&A' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#282a2e] bg-[#111318]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand / Logo */}
          <div 
            id="nav-brand-logo"
            onClick={() => onSelectTab('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00dbe7] via-[#0078d4] to-[#0078d4] p-[2px] shadow-lg shadow-[#0078d4]/20">
                <div className="w-full h-full bg-[#111318] rounded-[10px] flex items-center justify-center p-1.5">
                  <div className="w-full h-full bg-gradient-to-br from-[#00dbe7] to-[#0078d4] rounded-[4px]"></div>
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#00dbe7] border-[2.5px] border-[#111318] rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <span className="font-bold text-base tracking-tight text-white group-hover:text-[#a3c9ff] transition-colors">{PERSONAL_INFO.name}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0078d4]/20 text-[#a3c9ff] border border-[#0078d4]/30 font-medium">Architect</span>
              </div>
              <p className="text-[11px] text-[#c0c7d4] font-medium hidden sm:block">Power Platform & M365 Modernization</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-[#a3c9ff] bg-[#0078d4]/15 border border-[#0078d4]/40 shadow-sm shadow-[#0078d4]/20'
                      : 'text-[#c0c7d4] hover:text-white hover:bg-[#1a1c20]'
                  }`}
                >
                  <span className={isActive ? 'text-[#a3c9ff]' : 'text-[#c0c7d4]'}>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono uppercase font-bold ${
                      isActive 
                        ? 'bg-[#0078d4] text-white' 
                        : 'bg-[#282a2e] text-[#c0c7d4]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="nav-btn-resume"
              onClick={onOpenResume}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold text-[#c0c7d4] bg-transparent hover:text-white hover:bg-[#1a1c20] border border-[#282a2e] hover:border-[#555962] transition-all shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
            <button
              id="nav-btn-contact"
              onClick={onOpenContact}
              className="flex items-center space-x-2 px-5 py-2 rounded-lg text-sm font-bold text-[#111318] bg-[#00dbe7] hover:bg-[#a3c9ff] shadow-[0_0_20px_rgba(0,219,231,0.4)] hover:shadow-[0_0_25px_rgba(163,201,255,0.6)] transition-all border border-transparent"
            >
              <Mail className="w-4 h-4" />
              <span>Schedule Interview</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-3 ml-3">
            <button
              id="nav-btn-mobile-contact"
              onClick={onOpenContact}
              className="p-2.5 rounded-lg bg-[#1a1c20]/80 text-[#c0c7d4] hover:text-white border border-[#282a2e]"
              aria-label="Contact"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              id="nav-btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#1a1c20]/80 text-[#c0c7d4] hover:text-white border border-[#282a2e]"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#282a2e] bg-[#111318] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1.5 pt-2">
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
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'text-[#a3c9ff] bg-[#0078d4]/20 border border-[#0078d4]/40'
                      : 'text-[#c0c7d4] hover:bg-[#1a1c20]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#282a2e] text-[#a3c9ff] font-mono">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 grid grid-cols-2 gap-2 border-t border-[#282a2e]">
            <button
              id="mobile-nav-resume"
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg text-xs font-semibold bg-[#1a1c20] text-white border border-[#282a2e]"
            >
              <FileText className="w-4 h-4 text-[#00dbe7]" />
              <span>Resume</span>
            </button>
            <button
              id="mobile-nav-contact"
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0078d4]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
