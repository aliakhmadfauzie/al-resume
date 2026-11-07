import React, { useState, useEffect } from 'react';
import { FileText, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { ProfileMode } from '../types';

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
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside
      aria-label="Executive Quick Actions Dock"
      className={"fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] sm:max-w-max transition-all duration-300 " + (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none')}
    >
      <div className="flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-2 bg-[#121212]/95 text-[#fdfdfc] border border-[#2a2a2a] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
        {/* Status Indicator */}
        <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-[#2e2e2e]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#a0a098]">
            Available for Senior Roles
          </span>
        </div>

        {/* Action 1: Resume Trigger */}
        <button
          onClick={onOpenResumeModal}
          id="dock-resume-btn"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#fdfdfc] text-[#121212] hover:bg-[#e0e0d8] text-[0.68rem] font-mono-code uppercase tracking-wider font-semibold transition-colors cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-[#121212]" />
          <span>Executive CV</span>
        </button>

        {/* Action 2: Contact Trigger */}
        <button
          onClick={onOpenContactModal}
          id="dock-contact-btn"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#222222] hover:bg-[#333333] text-[#fdfdfc] border border-[#3a3a3a] text-[0.68rem] font-mono-code uppercase tracking-wider transition-colors cursor-pointer"
        >
          <Send className="w-3 h-3 text-[#fdfdfc]" />
          <span>Contact Ali</span>
        </button>
      </div>
    </aside>
  );
};
