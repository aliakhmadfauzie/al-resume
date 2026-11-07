import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  Compass,
  ArrowRight,
  CheckCircle2,
  FileText,
  Briefcase,
  Layers,
  Send,
  Bot,
  Play,
  RotateCcw,
} from 'lucide-react';
import { ProfileMode } from '../types';

export interface TourStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  targetId: string;
  badge: string;
  quickPrompt?: string;
  actionText?: string;
}

interface PortfolioTourGuideProps {
  isOpen: boolean;
  onClose: () => void;
  currentMode: ProfileMode;
  onSelectMode: (mode: ProfileMode) => void;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export const tourSteps: TourStep[] = [
  {
    id: 1,
    title: "Welcome Stage & Candidate Overview",
    subtitle: "Solution Architecture & Operations Leadership",
    description: "Welcome! I'm your AI Portfolio Guide. Ali Akhmad Fauzie is a Solution Architect and Multilingual Operations Leader with proven ROI: MYR 360K/yr saved and 34 FTE squads scaled across 7 APAC markets.",
    targetId: "home",
    badge: "Step 1 of 6 • Welcome",
    quickPrompt: "Tell me about Ali's ROI impact",
    actionText: "Scroll to Hero Overview",
  },
  {
    id: 2,
    title: "Anchor Case Studies & Engineering Works",
    subtitle: "Enterprise Domino Sunset & Concentrix BPO Scaling",
    description: "Here are Ali's flagship deep dives: Case 01 modernizing 361 legacy forms to Dataverse & Power Platform, and Case 02 scaling 34-FTE BPO squads via custom Lark bot automations.",
    targetId: "projects",
    badge: "Step 2 of 6 • Case Studies",
    quickPrompt: "Show IOI Modernization details",
    actionText: "Explore Projects",
  },
  {
    id: 3,
    title: "Technical Insights & Architectural Articles",
    subtitle: "Pro-Code Power Platform, C# Plugins & AI Workflows",
    description: "Explore Ali's published technical articles covering Power Platform plugin security, Dataverse relational modeling, and enterprise AI Copilot integrations.",
    targetId: "articles",
    badge: "Step 3 of 6 • Articles",
    quickPrompt: "Read Power Platform articles",
    actionText: "Read Insights",
  },
  {
    id: 4,
    title: "Chronological Career Trajectory",
    subtitle: "10+ Years Across IT Consulting & Operations",
    description: "Trace Ali's progression from Independent Solutions Consultant to Operations Team Leader at Concentrix, managing multi-market BPO delivery with >98% SLA compliance.",
    targetId: "timeline",
    badge: "Step 4 of 6 • Career Narrative",
    quickPrompt: "View team management scale",
    actionText: "View Timeline",
  },
  {
    id: 5,
    title: "Enterprise Solution Architecture Pipeline",
    subtitle: "Relational Modeling, Security & CI/CD Telemetry",
    description: "Inspect the live architecture flow showing Dataverse entity relationships, C# plugin execution security, and Lark bot webhook automation logic.",
    targetId: "architecture",
    badge: "Step 5 of 6 • Architecture Flow",
    quickPrompt: "Explain C# plugin security",
    actionText: "Inspect Architecture",
  },
  {
    id: 6,
    title: "Recruiter Outreach & ATS Executive Resume",
    subtitle: "Direct Contact & One-Click PDF Export",
    description: "Ready to discuss enterprise engagements or leadership roles? You can send a message directly or open the print-ready ATS executive resume modal.",
    targetId: "contact",
    badge: "Step 6 of 6 • Recruiter Hub",
    quickPrompt: "Open Executive Resume",
    actionText: "Connect with Ali",
  },
];

export const PortfolioTourGuide: React.FC<PortfolioTourGuideProps> = ({
  isOpen,
  onClose,
  currentMode,
  onSelectMode,
  onOpenResumeModal,
  onOpenContactModal,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  const activeStep = tourSteps[currentStepIndex];

  // Scroll to target element smoothly on step change
  useEffect(() => {
    if (isOpen && activeStep) {
      const element = document.getElementById(activeStep.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.classList.add('ring-2', 'ring-[#1d4ed8]', 'ring-offset-4', 'transition-all');
        const timer = setTimeout(() => {
          element.classList.remove('ring-2', 'ring-[#1d4ed8]', 'ring-offset-4');
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, currentStepIndex, activeStep]);

  // Autoplay timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && autoPlay) {
      timer = setTimeout(() => {
        if (currentStepIndex < tourSteps.length - 1) {
          setCurrentStepIndex((prev) => prev + 1);
        } else {
          setAutoPlay(false);
        }
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [isOpen, autoPlay, currentStepIndex]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStepIndex < tourSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
  };

  const handleQuickAction = () => {
    if (activeStep.id === 6) {
      onOpenResumeModal();
    } else {
      const elem = document.getElementById(activeStep.targetId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50 max-w-md w-[92vw] sm:w-[440px] no-print">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="glass-modal border-2 border-[#121212] p-5 sm:p-6 shadow-2xl relative overflow-hidden"
        >
          {/* Top Bar: Progress Badge & Controls */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#e0e0d8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1d4ed8] animate-ping" />
              <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#121212] font-semibold flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-[#1d4ed8]" />
                {activeStep.badge}
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-mono-code text-xs">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className={`p-1.5 rounded text-[0.62rem] uppercase tracking-wider border transition-colors cursor-pointer flex items-center gap-1 ${
                  autoPlay
                    ? 'bg-[#1d4ed8] text-white border-[#1d4ed8]'
                    : 'bg-[#f7f7f0] text-[#6b6b63] border-[#e0e0d8] hover:text-[#121212]'
                }`}
                title={autoPlay ? 'Pause Auto Tour' : 'Autoplay Tour'}
              >
                {autoPlay ? <RotateCcw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
                <span>{autoPlay ? 'Pause' : 'Auto'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-[#6b6b63] hover:text-[#121212] hover:bg-[#e0e0d8] transition-colors rounded cursor-pointer"
                title="Exit Guided Tour"
                aria-label="Exit Guided Tour"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tour Step Title & Subtitle */}
          <div className="mb-3">
            <h4 className="font-serif-display italic text-2xl font-light text-[#121212] leading-tight">
              {activeStep.title}
            </h4>
            <p className="text-[0.68rem] font-mono-code uppercase tracking-wider text-[#1d4ed8] font-semibold mt-0.5">
              {activeStep.subtitle}
            </p>
          </div>

          {/* Step Description */}
          <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed mb-4">
            {activeStep.description}
          </p>

          {/* Progress Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {tourSteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(idx)}
                className={`h-1.5 transition-all duration-300 cursor-pointer ${
                  idx === currentStepIndex
                    ? 'w-6 bg-[#1d4ed8] rounded-full'
                    : 'w-1.5 bg-[#e0e0d8] hover:bg-[#6b6b63] rounded-full'
                }`}
                title={`Jump to Step ${step.id}: ${step.title}`}
              />
            ))}
          </div>

          {/* Action Buttons Row */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#e0e0d8]">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className={`px-3 py-1.5 font-mono-code text-[0.68rem] uppercase tracking-wider border transition-all flex items-center gap-1 cursor-pointer ${
                currentStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-[#f7f7f0] border-[#e0e0d8] text-[#6b6b63]'
                  : 'bg-[#f7f7f0] hover:bg-[#e0e0d8] border-[#e0e0d8] text-[#121212]'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <button
              onClick={handleQuickAction}
              className="px-3 py-1.5 font-mono-code text-[0.68rem] uppercase tracking-wider bg-[#f7f7f0] hover:bg-white border border-[#e0e0d8] text-[#1d4ed8] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>{activeStep.actionText || 'Jump to Section'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-1.5 font-mono-code text-[0.68rem] uppercase tracking-wider bg-[#121212] hover:bg-[#222] text-[#fdfdfc] font-semibold transition-all flex items-center gap-1 cursor-pointer shadow-sm"
            >
              <span>{currentStepIndex === tourSteps.length - 1 ? 'Finish Tour' : 'Next'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
