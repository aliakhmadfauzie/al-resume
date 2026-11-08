import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavTab } from '../types';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenResume,
  onOpenContact
}) => {
  const scrollToHomeAnchor = (anchorId: string) => {
    onSelectTab('home');
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <footer className="w-full bg-[#0a0b0e] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] pt-10 pb-8 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[var(--border-subtle)] items-start">
          {/* Left: < /> Identity Lockup */}
          <div className="md:col-span-4 flex items-center gap-3">
            <span className="text-[var(--interactive-primary)] font-mono font-bold text-2xl tracking-tighter">
              &lt;/&gt;
            </span>
            <div>
              <h3 className="text-base font-bold tracking-wider text-[var(--text-primary)] uppercase">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-[10px] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mt-0.5">
                ENTERPRISE SOLUTION ARCHITECT
              </p>
            </div>
          </div>

          {/* Center: Quick Links (3 Sub-Columns Matching Reference) */}
          <div className="md:col-span-5 space-y-2.5">
            <h4 className="text-xs font-semibold text-[var(--text-primary)]">
              Quick Links
            </h4>
            <div className="grid grid-cols-3 gap-4 text-xs text-[var(--text-tertiary)]">
              <ul className="space-y-1.5">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToHomeAnchor('section-about')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToHomeAnchor('section-services')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('projects')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
              </ul>

              <ul className="space-y-1.5">
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('skills')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    Tech Stack
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('demos')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    Simulators
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('experience')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    Experience
                  </button>
                </li>
              </ul>

              <ul className="space-y-1.5">
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('interview')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    Architecture Q&amp;A
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer"
                  >
                    Executive CV
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Let's Connect Social Icons */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-semibold text-[var(--text-primary)]">
              Let&apos;s Connect
            </h4>
            <div className="flex items-center space-x-2.5">
              <a
                id="footer-link-github"
                aria-label="Ali Akhmad Fauzie GitHub Profile"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[var(--radius-sm)] bg-[#13151c] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-secondary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-colors border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)]"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-link-linkedin"
                aria-label="Ali Akhmad Fauzie LinkedIn Profile"
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[var(--radius-sm)] bg-[#13151c] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-secondary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-colors border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)]"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                id="footer-btn-resume"
                aria-label="Open Executive Resume Modal"
                type="button"
                onClick={onOpenResume}
                className="w-8 h-8 rounded-[var(--radius-sm)] bg-[#13151c] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-secondary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-colors border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] cursor-pointer"
                title="Executive Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                id="footer-btn-email"
                aria-label="Open Contact Message Modal"
                type="button"
                onClick={onOpenContact}
                className="w-8 h-8 rounded-[var(--radius-sm)] bg-[#13151c] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-secondary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-colors border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] cursor-pointer"
                title="Send Message"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--text-tertiary)] gap-2">
          <p>© {new Date().getFullYear()} Ali Akhmad Fauzie. All rights reserved.</p>
          <p className="font-mono">Built with passion. Deployed with precision.</p>
        </div>
      </div>
    </footer>
  );
};
