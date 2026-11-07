import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Cpu,
  Users,
  Bot,
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
  TrendingUp,
  Layers,
} from 'lucide-react';

export interface CapabilitySlide {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string; // e.g. '#1d4ed8' | '#0f766e' | '#b45309' | '#4338ca' | '#0284c7'
  bgGradient: string;
  metrics: { label: string; value: string }[];
  keyHighlights: string[];
  techTags: string[];
  targetSection: string;
}

export const capabilitySlides: CapabilitySlide[] = [
  {
    id: 1,
    category: "01 — Solution Architecture & Power Platform",
    title: "Enterprise Systems Modernization & Dataverse Relational Modeling",
    subtitle: "Sunset 361 Lotus Domino DBs • MYR 360,000/yr Recurring Cost Avoided",
    description: "Architected conglomerate-wide migration of 361 legacy Lotus Domino databases & forms to Dataverse relational models, C# plugin execution pipelines, and Power Apps serving 2,000+ enterprise users across Malaysia.",
    icon: <Cpu className="w-6 h-6 text-[#1d4ed8]" />,
    accentColor: "#1d4ed8",
    bgGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    metrics: [
      { label: "Cost Avoided", value: "MYR 360K/yr" },
      { label: "Forms Modernized", value: "361 DBs" },
      { label: "User Footprint", value: "2,000+ Users" },
      { label: "Plugin Security", value: "C# Pipeline" },
    ],
    keyHighlights: [
      "Custom C# plugins for high-performance business rule validation & audit logging.",
      "Dataverse entity relationships with strict role-based security & GxP compliance.",
      "Zero downtime lotus domino sunset roadmap with 100% data integrity.",
    ],
    techTags: ["Dataverse", "C# Plugins", "Power Apps", "Azure", "Lotus Domino", "SQL"],
    targetSection: "projects",
  },
  {
    id: 2,
    category: "02 — Operations Leadership & BPO Scaling",
    title: "Multilingual Contact Center Operations & High-Volume Telemetry",
    subtitle: "34 FTE Squads • 7 Regional APAC Markets • >98% SLA Benchmark",
    description: "Led and scaled 34-member multilingual BPO support squads across 7 APAC markets (English, Mandarin, Japanese, Korean, Malay, Indonesian, Vietnamese) at Concentrix, consistently enforcing >98% SLA compliance and CSAT metrics.",
    icon: <Users className="w-6 h-6 text-[#0f766e]" />,
    accentColor: "#0f766e",
    bgGradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
    metrics: [
      { label: "Squad Scale", value: "34 FTEs" },
      { label: "APAC Markets", value: "7 Countries" },
      { label: "SLA Benchmark", value: ">98% Compliance" },
      { label: "Languages", value: "5 Multilingual" },
    ],
    keyHighlights: [
      "Orchestrated real-time telemetry dashboards for AHT, CSAT, and queue distribution.",
      "Implemented structured coaching loops & QA rubrics elevating first-contact resolution.",
      "Managed crisis escalation workflows for regional enterprise clients.",
    ],
    techTags: ["BPO Leadership", "WFM Telemetry", "SLA Governance", "APAC Markets", "CSAT Optimization"],
    targetSection: "timeline",
  },
  {
    id: 3,
    category: "03 — Intelligent Workflow Automation",
    title: "Lark Open Platform Bots & Webhook Microservices",
    subtitle: "Ask Lark Bot • LeaveSync • PulseTrack Attendance Automation",
    description: "Built automated Lark bot ecosystems integrating Lark Open API webhooks with C# / Node.js microservices to streamline shift attendance, automated leave synchronization, instant IT ticket resolutions, and squad messaging.",
    icon: <Bot className="w-6 h-6 text-[#b45309]" />,
    accentColor: "#b45309",
    bgGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    metrics: [
      { label: "Bot Ecosystem", value: "4 Production Bots" },
      { label: "Auto Resolution", value: "65% Tickets" },
      { label: "Time Saved", value: "120 hrs/mo" },
      { label: "Integration", value: "Lark Webhooks" },
    ],
    keyHighlights: [
      "Certified Lark Open Platform Developer building production-grade bot microservices.",
      "Automated shift handovers & attendance validation eliminating manual tracking errors.",
      "Real-time Lark card notifications with interactive button callbacks.",
    ],
    techTags: ["Lark Open Platform", "Webhooks", "Node.js", "Express", "Bot Automation", "C#"],
    targetSection: "projects",
  },
  {
    id: 4,
    category: "04 — Cross-Platform Mobile Engineering",
    title: "Native & Hybrid Mobile Applications (iOS & Android)",
    subtitle: "Swift (iOS) • Kotlin (Android) • React Native Production Apps",
    description: "Engineered production-grade mobile applications across iOS and Android platforms, prioritizing smooth 60fps UI animations, offline SQLite caching, RESTful synchronization, and secure biometric authentication.",
    icon: <Smartphone className="w-6 h-6 text-[#4338ca]" />,
    accentColor: "#4338ca",
    bgGradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    metrics: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Languages", value: "Swift & Kotlin" },
      { label: "Framework", value: "React Native" },
      { label: "Frame Rate", value: "60 FPS Smooth" },
    ],
    keyHighlights: [
      "Offline-first architecture with SQLite & Dataverse sync pipelines.",
      "Native iOS Swift & Android Kotlin plugins for custom hardware access.",
      "Published enterprise mobile utilities serving field engineers & operations.",
    ],
    techTags: ["React Native", "Swift", "Kotlin", "TypeScript", "iOS", "Android", "Mobile Security"],
    targetSection: "skills",
  },
  {
    id: 5,
    category: "05 — GenAI & AI Copilot Integrations",
    title: "AI Copilot Agents, @google/genai & Automated Resume Pipelines",
    subtitle: "PowerFx AI Copilots • Gemini API • ATS Resume Engine",
    description: "Integrated generative AI models and Copilot capabilities into business applications: leveraging Gemini 2.5 API for automated article generation, PowerFx AI Builder prompts, and smart resume tailoring engines.",
    icon: <Sparkles className="w-6 h-6 text-[#0284c7]" />,
    accentColor: "#0284c7",
    bgGradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    metrics: [
      { label: "AI SDK", value: "@google/genai" },
      { label: "Copilot Engine", value: "PowerFx AI" },
      { label: "Tailoring Speed", value: "< 2 seconds" },
      { label: "ATS Standard", value: "100% Compliant" },
    ],
    keyHighlights: [
      "Built live AI article creator powered by Google GenAI SDK with Markdown formatting.",
      "Integrated AI Builder prompts inside Power Apps for document classification.",
      "Developed ATS-compliant physical/digital resume export engines.",
    ],
    techTags: ["@google/genai", "AI Copilot", "PowerFx", "Express API", "React 19", "ATS Resume Engine"],
    targetSection: "articles",
  },
];

interface CapabilitiesSlideshowProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const CapabilitiesSlideshow: React.FC<CapabilitiesSlideshowProps> = ({
  isOpen,
  onClose,
  onNavigateToSection,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const activeSlide = capabilitySlides[currentIndex];

  // Auto-play timer (changes slide every 6 seconds)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % capabilitySlides.length);
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [isOpen, isPlaying, currentIndex]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % capabilitySlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + capabilitySlides.length) % capabilitySlides.length);
  };

  const handleJumpToSection = () => {
    onClose();
    if (onNavigateToSection) {
      onNavigateToSection(activeSlide.targetSection);
    } else {
      const elem = document.getElementById(activeSlide.targetSection);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/75 backdrop-blur-md overflow-y-auto no-print"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="glass-modal border-2 border-[#121212] w-full max-w-4xl shadow-2xl overflow-hidden relative my-auto rounded-none flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-5 sm:p-6 border-b border-[#e0e0d8] bg-[#f7f7f0]/90 backdrop-blur-sm flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white border border-[#e0e0d8] rounded shadow-2xs">
              {activeSlide.icon}
            </div>
            <div>
              <span className="label-mono font-semibold block text-[#121212]">
                {activeSlide.category}
              </span>
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Screen {currentIndex + 1} of {capabilitySlides.length} • Interactive Showcase
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono-code text-xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-1.5 border text-[0.65rem] uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                isPlaying
                  ? 'bg-[#121212] text-white border-[#121212]'
                  : 'bg-[#f7f7f0] text-[#444440] border-[#e0e0d8] hover:text-[#121212]'
              }`}
            >
              {isPlaying ? <Pause className="w-3 h-3 text-amber-300" /> : <Play className="w-3 h-3" />}
              <span>{isPlaying ? 'Autoplay On' : 'Play'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 bg-white border border-[#e0e0d8] hover:bg-[#e0e0d8] text-[#121212] transition-colors cursor-pointer"
              aria-label="Close Slideshow"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Content Area with AnimatePresence */}
        <div className="p-6 sm:p-10 flex-1 overflow-y-auto relative bg-[#fdfdfc]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Slide Title & Subtitle */}
              <div>
                <h3 className="font-serif-display italic text-3xl sm:text-4xl lg:text-5xl font-light text-[#121212] leading-tight tracking-tight mb-2">
                  {activeSlide.title}
                </h3>
                <p
                  className="font-mono-code text-xs sm:text-sm uppercase tracking-wider font-semibold"
                  style={{ color: activeSlide.accentColor }}
                >
                  {activeSlide.subtitle}
                </p>
              </div>

              {/* Main Description */}
              <p className="text-sm sm:text-base font-light text-[#444440] leading-relaxed max-w-3xl">
                {activeSlide.description}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#f7f7f0]/80 border border-[#e0e0d8]">
                {activeSlide.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-left">
                    <div
                      className="font-serif-display italic text-xl sm:text-2xl font-normal leading-tight"
                      style={{ color: activeSlide.accentColor }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] font-medium mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Architectural Highlights List */}
              <div className="space-y-2 pt-2">
                <div className="label-mono mb-1 text-[#6b6b63]">Key Architecture &amp; Delivery Highlights</div>
                <div className="space-y-2">
                  {activeSlide.keyHighlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#121212] font-light">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div className="pt-2">
                <div className="label-mono mb-2 text-[#6b6b63]">Technical Stack &amp; Governance Tags</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeSlide.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#eaeae2] text-[#121212] border border-[#d0d0c6] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Controls Bar */}
        <div className="p-4 sm:p-5 border-t border-[#e0e0d8] bg-[#f7f7f0] flex flex-wrap items-center justify-between gap-4 shrink-0">
          {/* Slide Dots Indicator */}
          <div className="flex items-center gap-2">
            {capabilitySlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-8 bg-[#121212] rounded-full'
                    : 'w-2 bg-[#d0d0c6] hover:bg-[#6b6b63] rounded-full'
                }`}
                title={`Jump to Screen ${slide.id}: ${slide.title}`}
              />
            ))}
          </div>

          {/* Controls & CTA Button */}
          <div className="flex items-center gap-2 font-mono-code text-xs">
            <button
              onClick={handlePrev}
              className="p-2 bg-white border border-[#e0e0d8] hover:bg-[#e0e0d8] text-[#121212] transition-colors cursor-pointer flex items-center gap-1 text-[0.68rem] uppercase tracking-wider"
              title="Previous Screen (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <button
              onClick={handleJumpToSection}
              className="px-4 py-2 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] font-semibold text-[0.68rem] uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Explore Section</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleNext}
              className="p-2 bg-white border border-[#e0e0d8] hover:bg-[#e0e0d8] text-[#121212] transition-colors cursor-pointer flex items-center gap-1 text-[0.68rem] uppercase tracking-wider"
              title="Next Screen (Right Arrow)"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
