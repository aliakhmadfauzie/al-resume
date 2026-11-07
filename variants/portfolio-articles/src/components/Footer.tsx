import React from 'react';
import { personalInfo } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateHome?: (sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const scrollToTop = () => {
    if (onNavigateHome) {
      onNavigateHome('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href.replace('#', ''));
    }
  };

  return (
    <footer className="py-16 bg-[#fdfdfc] text-xs font-mono-code text-[#6b6b63] no-print">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#e0e0d8]">
          {/* Copyright & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="text-[#121212] font-medium">
              © 2017–2026 {personalInfo.name}
            </span>
            <span className="hidden sm:inline text-[#e0e0d8]">•</span>
            <span className="text-[#6b6b63] uppercase tracking-wider text-[0.7rem]">
              Enterprise Solution Architecture & Operations
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 uppercase tracking-wider text-[0.7rem]">
            <a href="#home" onClick={(e) => handleLinkClick('#home', e)} className="text-[#444440] hover:text-[#121212] transition-colors">
              Index
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick('#projects', e)} className="text-[#444440] hover:text-[#121212] transition-colors">
              Works
            </a>
            <a href="#articles" onClick={(e) => handleLinkClick('#articles', e)} className="text-[#444440] hover:text-[#121212] transition-colors">
              Articles
            </a>
            <a href="#timeline" onClick={(e) => handleLinkClick('#timeline', e)} className="text-[#444440] hover:text-[#121212] transition-colors">
              Trajectory
            </a>
            <a href="#architecture" onClick={(e) => handleLinkClick('#architecture', e)} className="text-[#444440] hover:text-[#121212] transition-colors">
              DevOps
            </a>
            <a href="#skills" onClick={(e) => handleLinkClick('#skills', e)} className="text-[#444440] hover:text-[#121212] transition-colors">
              Stack
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick('#contact', e)} className="text-[#444440] hover:text-[#121212] transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1.5 text-[#121212] hover:underline uppercase tracking-wider text-[0.7rem] cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
          <div>
            Built with React 19, TypeScript & Tailwind CSS • Editorial Grid
          </div>
          <div>
            Kuala Lumpur, Malaysia (MYT UTC+8)
          </div>
        </div>
      </div>
    </footer>
  );
};

