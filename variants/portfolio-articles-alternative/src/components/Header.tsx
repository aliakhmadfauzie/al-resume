import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/resumeData';
import { ProfileMode } from '../types';
import {
  FileText,
  Mail,
  Menu,
  X,
  Compass,
  Cpu,
  Users,
} from 'lucide-react';

interface HeaderProps {
  currentMode: ProfileMode;
  onSelectMode: (mode: ProfileMode) => void;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
  onNavigateHome?: (sectionId?: string) => void;
  onStartTour?: () => void;
  onOpenSlideshow?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onOpenResumeModal,
  onOpenContactModal,
  onNavigateHome,
  onStartTour,
  onOpenSlideshow,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Insight', href: '#articles' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Systems', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href.replace('#', ''));
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print border-b border-[#e0e0d8] ${
        isScrolled
          ? 'bg-[#fdfdfc]/95 backdrop-blur-md py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#fdfdfc]/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        {/* Brand Logo / Monogram */}
        <a
          href="#home"
          id="logo-brand-link"
          onClick={(e) => handleLinkClick('#home', e)}
          className="flex items-center gap-3 group focus:outline-none shrink-0 whitespace-nowrap"
        >
          <span className="font-mono-code font-bold text-xs uppercase tracking-[0.2em] text-[#121212] group-hover:text-[#6b6b63] transition-colors whitespace-nowrap">
            Ali Fauzie
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#121212] shrink-0" />
          <span className="hidden sm:inline-block font-mono-code text-[0.65rem] uppercase tracking-[0.15em] text-[#6b6b63] whitespace-nowrap">
            Solution Arch
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-[0.75rem] font-mono-code uppercase tracking-[0.12em] text-[#121212] shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link.href, e)}
              className="text-[#121212] hover:text-[#6b6b63] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#121212] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Audience Persona Switcher */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Audience Perspective Segmented Tab Controller */}
          <div className="flex items-center gap-1.5">
            <span className="hidden 2xl:inline text-[0.6rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
              Track:
            </span>
            <div
              className="flex items-center bg-[#f7f7f0] p-1 border border-[#e0e0d8] text-[0.6rem] xl:text-[0.65rem] font-mono-code uppercase tracking-[0.02em]"
              title="Tailor portfolio highlights for Full Profile, Architecture & Solution Engineering, or Operations & Leadership"
            >
              <button
                id="mode-hybrid-btn"
                onClick={() => onSelectMode('full')}
                className={`px-2.5 xl:px-3 py-1 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  currentMode === 'full' || currentMode === 'hybrid'
                    ? 'bg-[#121212] text-[#fdfdfc] font-semibold shadow-xs'
                    : 'text-[#444440] hover:text-[#121212]'
                }`}
                title="Full comprehensive portfolio view"
              >
                <Compass className="w-3 h-3 flex-shrink-0" />
                <span>Full Profile</span>
              </button>
              <button
                id="mode-architect-btn"
                onClick={() => onSelectMode('architecture')}
                className={`px-2.5 xl:px-3 py-1 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  currentMode === 'architecture' || currentMode === 'architect'
                    ? 'bg-[#1d4ed8] text-[#fdfdfc] font-semibold shadow-xs'
                    : 'text-[#444440] hover:text-[#121212]'
                }`}
                title="Focus on Architecture, Solution Engineering, Dataverse & Power Platform"
              >
                <Cpu className="w-3 h-3 flex-shrink-0" />
                <span>Architecture &amp; Solution Engineering</span>
              </button>
              <button
                id="mode-ops-btn"
                onClick={() => onSelectMode('operations')}
                className={`px-2.5 xl:px-3 py-1 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  currentMode === 'operations'
                    ? 'bg-[#0f766e] text-[#fdfdfc] font-semibold shadow-xs'
                    : 'text-[#444440] hover:text-[#121212]'
                }`}
                title="Focus on Operations Leadership, BPO Scaling & Lark Automations"
              >
                <Users className="w-3 h-3 flex-shrink-0" />
                <span>Operations &amp; Leadership</span>
              </button>
            </div>
          </div>

          {/* Capabilities Slideshow CTA */}
          {onOpenSlideshow && (
            <button
              id="nav-slideshow-btn"
              onClick={onOpenSlideshow}
              className="flex items-center gap-1.5 px-3 py-1.5 font-mono-code text-[0.72rem] uppercase tracking-[0.1em] font-semibold text-white bg-[#121212] hover:bg-[#2e2e2e] transition-all cursor-pointer whitespace-nowrap"
              title="Watch Capabilities Showcase Slideshow"
            >
              <Cpu className="w-3 h-3 flex-shrink-0 text-emerald-400" />
              <span>Slideshow</span>
            </button>
          )}

          {/* Interactive Guided Tour CTA */}
          {onStartTour && (
            <button
              id="nav-tour-btn"
              onClick={onStartTour}
              className="flex items-center gap-1.5 px-3 py-1.5 font-mono-code text-[0.72rem] uppercase tracking-[0.1em] font-semibold text-white bg-[#1d4ed8] hover:bg-[#1e40af] transition-all cursor-pointer whitespace-nowrap glow-exec"
              title="Start Interactive Portfolio Tour Guide"
            >
              <Compass className="w-3 h-3 flex-shrink-0 animate-spin text-amber-300" />
              <span>Tour</span>
            </button>
          )}

          {/* Download CV CTA */}
          <button
            id="nav-cv-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 font-mono-code text-[0.72rem] uppercase tracking-[0.1em] font-medium text-[#121212] bg-[#f7f7f0] hover:bg-[#e0e0d8] border border-[#e0e0d8] transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-3 h-3 flex-shrink-0 text-[#121212]" />
            <span>Download CV</span>
          </button>

          {/* Contact CTA */}
          <button
            id="nav-contact-btn"
            onClick={onOpenContactModal}
            className="flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 font-mono-code text-[0.72rem] uppercase tracking-[0.1em] font-medium text-[#fdfdfc] bg-[#121212] hover:bg-[#2e2e2e] transition-all cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-3 h-3 flex-shrink-0" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-cv-quick-btn"
            onClick={onOpenResumeModal}
            aria-label="Open Executive CV resume modal"
            className="min-h-[44px] px-3 rounded bg-[#f7f7f0] text-[#121212] border border-[#e0e0d8] text-xs flex items-center justify-center gap-1.5 font-mono-code cursor-pointer active:bg-[#e0e0d8]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold">CV</span>
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded bg-[#f7f7f0] text-[#121212] border border-[#e0e0d8] cursor-pointer active:bg-[#e0e0d8]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#fdfdfc] border-b border-[#e0e0d8] px-6 py-6 space-y-5 animate-in slide-in-from-top duration-200 shadow-lg"
          role="region"
          aria-label="Mobile navigation drawer"
        >
          <div className="space-y-2">
            <span className="label-mono font-bold text-[#121212]">
              Profile Track
            </span>
            <div 
              className="flex flex-col gap-1.5 pt-1 font-mono-code text-xs"
              role="radiogroup"
              aria-label="Profile track selection"
            >
              <button
                onClick={() => {
                  onSelectMode('full');
                  setMobileMenuOpen(false);
                }}
                role="radio"
                aria-checked={currentMode === 'full' || currentMode === 'hybrid'}
                className={`min-h-[44px] py-2.5 px-3 text-[0.72rem] uppercase tracking-wider text-left border flex items-center justify-between cursor-pointer transition-colors ${
                  currentMode === 'full' || currentMode === 'hybrid'
                    ? 'bg-[#121212] text-[#fdfdfc] border-[#121212] font-semibold'
                    : 'bg-[#f7f7f0] text-[#121212] border-[#e0e0d8]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  <span>Full Profile</span>
                </span>
                {(currentMode === 'full' || currentMode === 'hybrid') && <span className="text-[0.62rem] opacity-75">Active</span>}
              </button>
              <button
                onClick={() => {
                  onSelectMode('architecture');
                  setMobileMenuOpen(false);
                }}
                role="radio"
                aria-checked={currentMode === 'architecture' || currentMode === 'architect'}
                className={`min-h-[44px] py-2.5 px-3 text-[0.72rem] uppercase tracking-wider text-left border flex items-center justify-between cursor-pointer transition-colors ${
                  currentMode === 'architecture' || currentMode === 'architect'
                    ? 'bg-[#1d4ed8] text-[#fdfdfc] border-[#1d4ed8] font-semibold'
                    : 'bg-[#f7f7f0] text-[#121212] border-[#e0e0d8]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Architecture &amp; Solution Engineering</span>
                </span>
                {(currentMode === 'architecture' || currentMode === 'architect') && <span className="text-[0.62rem] opacity-75">Active</span>}
              </button>
              <button
                onClick={() => {
                  onSelectMode('operations');
                  setMobileMenuOpen(false);
                }}
                role="radio"
                aria-checked={currentMode === 'operations'}
                className={`min-h-[44px] py-2.5 px-3 text-[0.72rem] uppercase tracking-wider text-left border flex items-center justify-between cursor-pointer transition-colors ${
                  currentMode === 'operations'
                    ? 'bg-[#0f766e] text-[#fdfdfc] border-[#0f766e] font-semibold'
                    : 'bg-[#f7f7f0] text-[#121212] border-[#e0e0d8]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Operations &amp; Leadership</span>
                </span>
                {currentMode === 'operations' && <span className="text-[0.62rem] opacity-75">Active</span>}
              </button>
            </div>
          </div>

          <div className="border-t border-[#e0e0d8] pt-4 space-y-1 font-mono-code text-[0.78rem] uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(link.href, e);
                  setMobileMenuOpen(false);
                }}
                className="min-h-[44px] flex items-center py-2 text-[#121212] hover:text-[#6b6b63] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenResumeModal();
                setMobileMenuOpen(false);
              }}
              className="w-full min-h-[48px] py-3 font-mono-code text-xs uppercase tracking-[0.15em] text-center bg-[#f7f7f0] border border-[#121212] text-[#121212] font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs active:bg-[#e0e0d8]"
            >
              <FileText className="w-4 h-4" />
              <span>Download Executive CV</span>
            </button>
            <button
              onClick={() => {
                onOpenContactModal();
                setMobileMenuOpen(false);
              }}
              className="w-full min-h-[48px] py-3 font-mono-code text-xs uppercase tracking-[0.15em] text-center bg-[#121212] text-[#fdfdfc] font-medium flex items-center justify-center gap-2 cursor-pointer shadow-sm active:bg-[#2c2c2c]"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch / Schedule Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

