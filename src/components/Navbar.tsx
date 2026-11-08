import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { NavTab } from '../types';

interface NavbarProps {
  currentTab: NavTab;
  onOpenResume: () => void;
  onOpenContact: () => void;
}
const primary: { tab: NavTab; label: string }[] = [
  { tab: 'home', label: 'Home' }, { tab: 'projects', label: 'Projects' },
  { tab: 'experience', label: 'Experience' }, { tab: 'skills', label: 'Skills' },
];
const secondary: { tab: NavTab; label: string }[] = [
  { tab: 'certifications', label: 'Credentials' }, { tab: 'demos', label: 'Simulators' },
  { tab: 'interview', label: 'Architecture Q&A' },
];
export function Navbar({ currentTab, onOpenContact, onOpenResume }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef<HTMLDetailsElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    setMobileOpen(false);
    if (moreRef.current) moreRef.current.open = false;
  }, [currentTab]);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMobileOpen(false);
        if (moreRef.current) moreRef.current.open = false;
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);
  const link = (item: typeof primary[number]) => (
    <a key={item.tab} id={`nav-link-${item.tab}`} href={`#/${item.tab}`}
      onClick={() => { setMobileOpen(false); if (moreRef.current) moreRef.current.open = false; if (item.tab === "home" && currentTab === "home") window.scrollTo({ top: 0, behavior: "instant" }); }}
      aria-current={currentTab === item.tab ? 'page' : undefined}
      className={`nav-link ${currentTab === item.tab ? 'nav-link-active' : ''}`}>{item.label}</a>
  );
  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-[var(--nav-border)] bg-[var(--nav-surface)] backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key !== 'Escape') return;
        if (mobileOpen) { setMobileOpen(false); menuRef.current?.focus(); }
        if (moreRef.current?.open) { moreRef.current.open = false; moreRef.current.querySelector('summary')?.focus(); }
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-18 flex items-center justify-between gap-3">
          <a href="#/home" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })} id="nav-brand-logo" aria-label="Ali Akhmad Fauzie, home" className="flex items-center gap-3 min-w-0 py-3">
            <span aria-hidden="true" className="text-[var(--text-accent)] font-mono font-bold text-xl hidden sm:block">&lt;/&gt;</span>
            <span className="min-w-0"><span className="block text-sm sm:text-base font-bold tracking-wide">ALI AKHMAD FAUZIE</span><span className="block mt-1 text-xs text-[var(--text-tertiary)]">Technology &amp; operations</span></span>
          </a>
          <nav aria-label="Primary" className="hidden xl:flex items-center gap-1">
            {primary.map(link)}
            <details ref={moreRef} className="relative">
              <summary className={`nav-link cursor-pointer list-none flex items-center gap-1 ${secondary.some(item => item.tab === currentTab) ? 'nav-link-active' : ''}`}>More <ChevronDown size={15} /></summary>
              <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 shadow-xl flex flex-col">{secondary.map(link)}<button type="button" className="nav-link text-left" onClick={() => { if (moreRef.current) moreRef.current.open = false; onOpenResume(); }}>View resume</button></div>
            </details>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <button id="nav-btn-contact" type="button" className="action-secondary hidden sm:inline-flex" onClick={onOpenContact}>Contact</button>
            <button ref={menuRef} id="nav-btn-mobile-menu" type="button" className="dialog-close xl:hidden" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        {mobileOpen && <nav id="mobile-navigation" aria-label="Mobile primary" className="xl:hidden pb-4 grid grid-cols-2 gap-2">
          {[...primary, ...secondary].map(link)}
          <button type="button" className="nav-link text-left" onClick={() => { setMobileOpen(false); onOpenResume(); }}>View resume</button>
          <button type="button" className="action-primary col-span-2" onClick={() => { setMobileOpen(false); onOpenContact(); }}>Contact Ali</button>
        </nav>}
      </div>
    </header>
  );
}
