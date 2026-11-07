import React, { useState, useEffect } from 'react';
import { FileText, Send, Sparkles, MessageSquare, ArrowUp, Mail } from 'lucide-react';
import { ProfileMode } from '../types';
import { personalInfo } from '../data/resumeData';

interface StickyQuickDockProps {
  currentMode: ProfileMode;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export const StickyQuickDock: React.FC<StickyQuickDockProps> = ({
  currentMode,
  onOpenResumeModal,
  onOpenContactModal,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Executive Quick Actions Dock"
      className={
        'fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] sm:max-w-max transition-all duration-300 ' +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none')
      }
    >
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-[#121212]/95 text-[#fdfdfc] border border-[#2a2a2a] shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-lg rounded-full">
        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2 pr-3 border-r border-[#2e2e2e]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[0.68rem] font-mono-code uppercase tracking-wider text-[#a0a098]">
            Available for Senior Roles
          </span>
        </div>

        {/* Action 1: Resume Trigger */}
        <button
          onClick={onOpenResumeModal}
          id="dock-resume-btn"
          aria-label="Open Executive CV resume modal"
          className="min-h-[44px] flex items-center gap-1.5 px-4 py-2.5 bg-[#fdfdfc] text-[#121212] hover:bg-[#e0e0d8] text-[0.72rem] font-mono-code uppercase tracking-wider font-semibold transition-colors cursor-pointer rounded-full shadow-xs"
        >
          <FileText className="w-4 h-4 text-[#121212]" />
          <span>Executive CV</span>
        </button>

        {/* Action 2: Contact Trigger */}
        <button
          onClick={onOpenContactModal}
          id="dock-contact-btn"
          aria-label="Open contact and direct message modal"
          className="min-h-[44px] flex items-center gap-1.5 px-4 py-2.5 bg-[#222222] hover:bg-[#333333] text-[#fdfdfc] border border-[#3a3a3a] text-[0.72rem] font-mono-code uppercase tracking-wider transition-colors cursor-pointer rounded-full"
        >
          <Send className="w-3.5 h-3.5 text-[#fdfdfc]" />
          <span>Message</span>
        </button>

        {/* Action 3: Quick WhatsApp */}
        <a
          href={personalInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="dock-whatsapp-btn"
          aria-label="Start direct chat on WhatsApp"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center bg-[#0f766e]/30 hover:bg-[#0f766e]/50 text-emerald-400 border border-emerald-500/40 text-[0.7rem] font-mono-code uppercase transition-colors rounded-full"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Action 4: Back to Top */}
        <button
          onClick={scrollToTop}
          id="dock-scroll-top-btn"
          aria-label="Scroll back to top of page"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center bg-[#1c1c1c] hover:bg-[#282828] text-[#a0a098] hover:text-[#fdfdfc] border border-[#2e2e2e] text-[0.7rem] font-mono-code uppercase transition-colors cursor-pointer rounded-full"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};

