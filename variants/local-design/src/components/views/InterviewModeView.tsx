import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Map,
  MessageSquareQuote,
  Compass
} from 'lucide-react';
import { GUIDED_SECTIONS, ASK_ALI_PROMPTS } from '../../data/hiringManagerData';
import { ChatMessage } from '../../types';
import { LandingScreen } from './interview/LandingScreen';
import { JourneySection } from './interview/JourneySection';
import { PortfolioSection } from './interview/PortfolioSection';
import { MethodologySection } from './interview/MethodologySection';
import { LeadershipSection } from './interview/LeadershipSection';
import { AIStackSection } from './interview/AIStackSection';
import { NinetyDaysSection } from './interview/NinetyDaysSection';
import { AskAliSection } from './interview/AskAliSection';

type Mode = 'landing' | 'guided' | 'explore';

const FALLBACK_ANSWER =
  "That's a great question — and one I'd love to walk through live. Here's what I can answer best from my verified portfolio:\n\n• Power Platform & Domino → Dataverse migration projects\n• Dynamics 365 / Dataverse architecture depth\n• Leadership & team scaling examples\n• AI implementations and my AI workforce\n• Cost optimization wins (RM4.2M/yr avoided)\n• My four-phase design methodology\n\nPick any of the suggested prompts below and I'll show you the evidence.";

export const InterviewModeView: React.FC = () => {
  const [mode, setMode] = useState<Mode>('landing');
  const [stepIndex, setStepIndex] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messageIdRef = useRef(1);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup pending typing timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const currentSection = GUIDED_SECTIONS[stepIndex];

  const startGuided = () => {
    setStepIndex(0);
    setMode('guided');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startExplore = () => {
    setMode('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setMode('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToStep = (index: number) => {
    setStepIndex(Math.max(0, Math.min(GUIDED_SECTIONS.length - 1, index)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = useCallback((sectionId: string) => {
    // Wait a tick so the DOM (explore mode) is rendered before scrolling
    setTimeout(() => {
      const el = document.getElementById(`hm-section-${sectionId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  }, []);

  const jumpToSection = useCallback(
    (sectionId: string) => {
      const index = GUIDED_SECTIONS.findIndex((s) => s.id === sectionId);
      if (mode === 'guided' && index >= 0) {
        goToStep(index);
      } else {
        setMode('explore');
        scrollToSection(sectionId);
      }
    },
    [mode, scrollToSection]
  );

  const handleAsk = useCallback((text: string) => {
    const userMessage: ChatMessage = {
      id: messageIdRef.current++,
      role: 'user',
      text
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    typingTimeoutRef.current = setTimeout(() => {
      const normalized = text.toLowerCase();
      const matched =
        ASK_ALI_PROMPTS.find((prompt) =>
          prompt.keywords.some((keyword) => normalized.includes(keyword))
        ) || ASK_ALI_PROMPTS.find((prompt) => normalized.includes(prompt.label.toLowerCase()));

      const aliMessage: ChatMessage = {
        id: messageIdRef.current++,
        role: 'ali',
        text: matched ? matched.answer : FALLBACK_ANSWER,
        sectionId: matched?.sectionId,
        sectionLabel: matched?.sectionLabel
      };
      setMessages((prev) => [...prev, aliMessage]);
      setIsTyping(false);
    }, 900);
  }, []);

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case 'journey':
        return <JourneySection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'methodology':
        return <MethodologySection />;
      case 'leadership':
        return <LeadershipSection />;
      case 'ai-stack':
        return <AIStackSection />;
      case 'ninety-days':
        return <NinetyDaysSection />;
      case 'ask-ali':
        return (
          <AskAliSection
            messages={messages}
            isTyping={isTyping}
            onAsk={handleAsk}
            onJumpToSection={jumpToSection}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 py-6 animate-in fade-in duration-300">
      {/* ── Landing ─────────────────────────────────────────── */}
      {mode === 'landing' && (
        <LandingScreen onStartGuided={startGuided} onExplore={startExplore} />
      )}

      {/* ── Guided ──────────────────────────────────────────── */}
      {mode === 'guided' && (
        <div className="space-y-6">
          {/* Guided header */}
          <div className="glass-card rounded-3xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold">
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Guided Interview</span>
                  <span className="text-[#3a3e47]">•</span>
                  <span className="text-[#a3c9ff]">
                    Section {stepIndex + 1} of {GUIDED_SECTIONS.length}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {currentSection.title}
                </h1>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={startExplore}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#e2e8f0] border border-white/[0.14] bg-transparent hover:bg-white/[0.06] transition-colors"
                >
                  <Map className="w-3.5 h-3.5 text-[#a3c9ff]" />
                  Explore All
                </button>
                <button
                  onClick={goHome}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#e2e8f0] border border-white/[0.14] bg-transparent hover:bg-white/[0.06] transition-colors"
                >
                  <Home className="w-3.5 h-3.5 text-[#a3c9ff]" />
                  Exit
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="h-1.5 rounded-full bg-[#161b22] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#0078d4] to-[#00dbe7]"
                  initial={false}
                  animate={{ width: `${((stepIndex + 1) / GUIDED_SECTIONS.length) * 100}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {GUIDED_SECTIONS.map((section, idx) => {
                  const isDone = idx < stepIndex;
                  const isCurrent = idx === stepIndex;
                  return (
                    <button
                      key={section.id}
                      onClick={() => goToStep(idx)}
                      className={`px-2.5 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-semibold border transition-colors ${
                        isCurrent
                          ? 'bg-[#0078d4]/25 text-white border-[#0078d4]/60'
                          : isDone
                            ? 'bg-[#1a1c20] text-[#00dbe7] border-[#282a2e]'
                            : 'bg-transparent text-[#6b7280] border-[#282a2e] hover:text-white'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')} · {section.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section content */}
          <motion.div
            key={currentSection.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {renderSection(currentSection.id)}
          </motion.div>

          {/* Prev / Next */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => goToStep(stepIndex - 1)}
              disabled={stepIndex === 0}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#e2e8f0] border border-white/[0.14] bg-transparent hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {stepIndex < GUIDED_SECTIONS.length - 1 ? (
              <button
                onClick={() => goToStep(stepIndex + 1)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] transition-colors shadow-[0_8px_24px_rgba(0,219,231,0.18)]"
              >
                Next Section
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={goHome}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] transition-colors shadow-[0_8px_24px_rgba(0,219,231,0.18)]"
              >
                <Home className="w-4 h-4" />
                Back to Start
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Explore ─────────────────────────────────────────── */}
      {mode === 'explore' && (
        <div className="space-y-12">
          {/* Explore header */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold">
                  <Compass className="w-4 h-4" />
                  <span>Hiring Manager Experience · Explore Freely</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Everything, At Your Own Pace
                </h1>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={startGuided}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] transition-colors"
                >
                  <MessageSquareQuote className="w-3.5 h-3.5" />
                  Guided Interview
                </button>
                <button
                  onClick={goHome}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#e2e8f0] border border-white/[0.14] bg-transparent hover:bg-white/[0.06] transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  Landing
                </button>
              </div>
            </div>

            {/* Section index chips */}
            <div className="flex flex-wrap gap-2">
              {GUIDED_SECTIONS.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[#a3c9ff] bg-[#161b22] border border-[#282a2e] hover:border-[#0078d4]/60 hover:text-white transition-colors"
                >
                  {String(idx + 1).padStart(2, '0')} · {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* All sections */}
          <div className="space-y-14">
            {GUIDED_SECTIONS.map((section) => (
              <div key={section.id}>{renderSection(section.id)}</div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-xl font-extrabold text-white">
              Like what you see? Let's talk.
            </h3>
            <p className="text-xs sm:text-sm text-[#c0c7d4] max-w-2xl mx-auto leading-relaxed">
              I bring the same rigor to your transformation — architecture, delivery, and team
              systems in one leader.
            </p>
            <button
              onClick={goHome}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Overview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
