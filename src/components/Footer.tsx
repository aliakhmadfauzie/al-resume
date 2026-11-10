import { navigate } from '../navigation';
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
    navigate(`home/${anchorId.replace('section-', '')}`);
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

          {/* Center: Quick Links (Responsive Sub-Columns) */}
          <div className="md:col-span-5 space-y-2.5">
            <h4 className="text-xs font-semibold text-[var(--text-primary)]">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[var(--text-tertiary)]">
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToHomeAnchor('section-about')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToHomeAnchor('section-services')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('projects')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
                  >
                    Projects
                  </button>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('skills')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
                  >
                    Tech Stack
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('demos')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
                  >
                    Simulators
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('experience')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
                  >
                    Experience
                  </button>
                </li>
              </ul>

              <ul className="space-y-2 col-span-2 sm:col-span-1">
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectTab('interview')}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
                  >
                    Architecture Q&amp;A
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="hover:text-[var(--text-accent)] transition-colors cursor-pointer py-1 block text-left"
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
            <div className="flex items-center space-x-2">
              <a
                id="footer-link-github"
                aria-label="Ali Akhmad Fauzie GitHub Profile"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#13151c] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-secondary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] active:scale-95 touch-manipulation"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                id="footer-link-linkedin"
                aria-label="Ali Akhmad Fauzie LinkedIn Profile"
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#13151c] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-secondary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] active:scale-95 touch-manipulation"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                id="footer-btn-resume"
                aria-label="Open Executive Resume Modal"
                type="button"
                onClick={onOpenResume}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#13151c] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-secondary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] cursor-pointer active:scale-95 touch-manipulation"
                title="Executive Resume"
              >
                <FileText className="w-5 h-5" />
              </button>
              <button
                id="footer-btn-email"
                aria-label="Open Contact Message Modal"
                type="button"
                onClick={onOpenContact}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#13151c] hover:bg-[var(--interactive-subtle-bg)] text-[var(--text-secondary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] cursor-pointer active:scale-95 touch-manipulation"
                title="Send Message"
              >
                <Mail className="w-5 h-5" />
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
