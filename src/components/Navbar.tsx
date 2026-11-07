import React, { useState } from 'react';
import { NavTab } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab, anchorId?: string) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
    }
  };

  const navItems: { id: string; label: string; tab: NavTab; anchor?: string }[] = [
    { id: 'home', label: 'Home', tab: 'home' },
    { id: 'about', label: 'About', tab: 'home', anchor: 'section-about' },
    { id: 'services', label: 'Services', tab: 'home', anchor: 'section-services' },
    { id: 'certs', label: 'Certifications', tab: 'certifications' },
    { id: 'stack', label: 'Stack', tab: 'skills' },
    { id: 'projects', label: 'Projects', tab: 'projects' },
    { id: 'demos', label: 'Simulators', tab: 'demos' },
    { id: 'experience', label: 'Experience', tab: 'experience' },
    { id: 'interview', label: 'Architecture Q&A', tab: 'interview' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--nav-border)] bg-[var(--nav-surface)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: < /> Code Icon + Two-Line Developer Identity */}
          <button
            id="nav-brand-logo"
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer shrink-0"
          >
            <span className="text-[var(--interactive-primary)] font-mono font-bold text-xl tracking-tighter group-hover:scale-105 transition-transform">
              &lt;/&gt;
            </span>
            <div className="leading-none">
              <div className="text-sm sm:text-base font-bold tracking-wider text-[var(--text-primary)] uppercase">
                ALI AKHMAD FAUZIE
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mt-1">
                SOLUTION ARCHITECT
              </div>
            </div>
          </button>

          {/* Zone 2: Horizontal Navigation Links with Active Orange Underline */}
          <nav
            className="hidden lg:flex items-center gap-6 text-xs font-medium"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const isActive =
                currentTab === item.tab &&
                (!item.anchor || item.id === 'home');
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  type="button"
                  onClick={() => handleNavClick(item.tab, item.anchor)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-[var(--interactive-primary)] shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Outlined Copper-Orange "Let's Build" Action Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              id="nav-btn-contact"
              type="button"
              onClick={onOpenContact}
              className="px-4 py-2 rounded-[var(--radius-sm)] text-xs font-semibold text-[var(--text-accent)] bg-[var(--interactive-subtle-bg)] hover:bg-[var(--interactive-primary)] hover:text-white border border-[var(--interactive-subtle-border)] shadow-[0_0_16px_rgba(249,115,22,0.15)] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Let&apos;s Build
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2.5 shrink-0">
            <button
              id="nav-btn-mobile-contact"
              type="button"
              onClick={onOpenContact}
              className="px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold text-[var(--text-accent)] bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] whitespace-nowrap shrink-0"
            >
              Let&apos;s Build
            </button>
            <button
              id="nav-btn-mobile-menu"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[var(--radius-sm)] bg-[var(--btn-secondary-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--btn-secondary-border)] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--nav-border)] bg-[var(--bg-default)] px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.tab && !item.anchor;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  type="button"
                  onClick={() => handleNavClick(item.tab, item.anchor)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-left px-3 py-2.5 rounded-[var(--radius-sm)] text-xs font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] border border-[var(--border-focus)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
