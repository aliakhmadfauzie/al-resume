import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Headphones,
  Sparkles,
  Users,
  Target,
  Activity,
  Award,
  Clock,
  CheckCircle2,
  Workflow,
  Zap,
  TrendingUp,
  FileText,
  Calendar,
  Layers,
  ArrowRight,
  Maximize2,
  Minimize2,
  Lightbulb,
  Cpu,
  Bot,
  BarChart,
  Eye,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

type TargetRole = 'content-moderation' | 'customer-service' | 'both';

interface ExecutiveInterviewDeckProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
  onLaunchDemo?: (demoId: string) => void;
  defaultRole?: TargetRole;
}

export const ExecutiveInterviewDeck: React.FC<ExecutiveInterviewDeckProps> = ({
  onOpenResume,
  onOpenContact,
  onLaunchDemo,
  defaultRole = 'both'
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [targetRole, setTargetRole] = useState<TargetRole>(defaultRole);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const totalSlides = 5;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    if (idx >= 0 && idx < totalSlides) {
      setCurrentSlide(idx);
    }
  };

  // Accessible Keyboard Navigation (ArrowLeft, ArrowRight, Space, 1-5)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        goToSlide(parseInt(e.key, 10) - 1);
      } else if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isExpanded]);

  // SVG Circular Gauge helper
  const renderCircularGauge = (value: number, label: string, sublabel: string, color: string = '#f97316') => {
    const radius = 34;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center shadow-sm">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-neutral-800"
            />
            <motion.circle
              cx="40"
              cy="40"
              r={radius}
              stroke={color}
              strokeWidth="6"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <span className="absolute text-xs sm:text-sm font-bold font-mono text-[var(--text-primary)]">
            {value}%
          </span>
        </div>
        <span className="text-[11px] font-mono font-semibold text-[var(--text-primary)] mt-1.5 uppercase">
          {label}
        </span>
        <span className="text-[10px] text-[var(--text-tertiary)]">{sublabel}</span>
      </div>
    );
  };

  // Slide Metadata & Speaker Notes
  const slideTitles = [
    '01 · Executive Introduction & Profile',
    '02 · Professional Journey & Track Record',
    '03 · Operations Team Leader Job Description (JD)',
    '04 · Tooling & Automation Mastery (The 10x Advantage)',
    '05 · 30-60-90 Day Impact Blueprint'
  ];

  const speakerNotes = [
    // Slide 1 Notes
    targetRole === 'content-moderation'
      ? 'Hiring Manager Pitch: Introduce yourself as a disciplined Operations Team Leader who treats content moderation and trust & safety as high-velocity risk mitigation. Mention managing 34 associates across 7 APAC markets, sustaining 96–99% policy accuracy, chairing QA calibrations, and implementing wellness pauses to prevent moderator burnout.'
      : targetRole === 'customer-service'
      ? 'Operations Manager Pitch: Highlight your 8+ years leading BPO operations, owning 3 rotational shifts daily, sustaining >98% contractual SLA compliance, cutting AHT by 25% via Six Sigma DMAIC, and elevating 90-day competency from 78% to 94%.'
      : 'Executive Dual-Pitch: Position yourself as the rare Operations Leader who bridges high-stakes frontline floor command with enterprise software engineering and low-code workflow automation.',

    // Slide 2 Notes
    'Progression & Integrity: Emphasize your 4 promotions at Accenture (from Data Analyst to Senior Lead) and your 2022 software innovation discovery. Clarify that while others talk about coaching, your Concentrix CVG team delivered 98%+ SLA and reduced AHT by 25% using tools you personally engineered.',

    // Slide 3 Notes
    targetRole === 'content-moderation'
      ? 'Content Moderation JD Walkthrough: Walk through real-time queue velocity, handling viral surges, policy interpretation on hate speech and advertising fraud, inter-rater reliability calibration with QA leads, and proactive wellness rotations.'
      : 'Customer Service JD Walkthrough: Walk through Erlang-C 3-shift rotational rostering, real-time schedule adherence (>95%), weekly structured 1:1 coaching, dispute arbitration with the QA department, and chairing data-driven WBR presentations.',

    // Slide 4 Notes
    'The 10x Tooling Advantage: This is your competitive moat! Explain PulseTrack (attendance/coaching), SmartFlow (saving 120+ leadership hours weekly), and CS Resolver (cutting ticket misclassification by 40–60%). Make it clear: you do not wait for IT; you solve operational problems directly.',

    // Slide 5 Notes
    '30-60-90 Day Commitment: Provide clear confidence to the Operations Manager. Days 1–30: Listen & establish QA baselines. Days 31–60: DMAIC sprint & coaching clinics. Days 61–90: Scale >98% SLA and build internal SME promotions with near-zero attrition (<5%).'
  ];

  return (
    <section
      id="executive-interview-pitch-deck"
      aria-label="Executive Interview Presentation Deck"
      className={`relative transition-all duration-300 ${
        isExpanded
          ? 'fixed inset-0 z-50 bg-[#090a0f] p-4 sm:p-8 flex flex-col justify-between overflow-y-auto'
          : 'bg-gradient-to-b from-[#10121a] to-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4 sm:p-7 shadow-2xl space-y-6'
      }`}
    >
      {/* Top Deck Control Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-[#f97316]/10 border border-[#f97316]/30 flex items-center justify-center text-[#f97316]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#f97316] font-bold uppercase tracking-wider">
                Interview Presentation Deck
              </span>
              <span className="text-xs text-neutral-500">·</span>
              <span className="text-xs text-[var(--text-tertiary)] font-mono">
                Slide {currentSlide + 1} of {totalSlides}
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[var(--text-primary)] tracking-tight">
              {slideTitles[currentSlide]}
            </h2>
          </div>
        </div>

        {/* Target Role & Controls Bar */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Target Role Pill Selector */}
          <div className="flex items-center bg-[#090a0f] p-1 rounded-lg border border-[var(--border-subtle)]">
            <button
              onClick={() => setTargetRole('content-moderation')}
              className={`px-2.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center space-x-1 cursor-pointer ${
                targetRole === 'content-moderation'
                  ? 'bg-[#f97316] text-[#090a0f] font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Tailor presentation for Content Moderation Team Leader"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Content Moderation</span>
              <span className="sm:hidden">Trust &amp; Safety</span>
            </button>
            <button
              onClick={() => setTargetRole('customer-service')}
              className={`px-2.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center space-x-1 cursor-pointer ${
                targetRole === 'customer-service'
                  ? 'bg-[#f97316] text-[#090a0f] font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Tailor presentation for Customer Service Team Leader"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Customer Service</span>
              <span className="sm:hidden">CS Ops</span>
            </button>
            <button
              onClick={() => setTargetRole('both')}
              className={`px-2.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center space-x-1 cursor-pointer ${
                targetRole === 'both'
                  ? 'bg-[#f97316] text-[#090a0f] font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Dual-capability operations presentation"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Dual-Track</span>
            </button>
          </div>

          {/* Speaker Notes Toggle */}
          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`p-2 rounded-lg border text-xs font-mono transition-all flex items-center space-x-1 cursor-pointer ${
              showSpeakerNotes
                ? 'bg-[#f97316]/20 text-[#f97316] border-[#f97316]/40'
                : 'bg-[var(--bg-surface)] text-neutral-400 border-[var(--border-subtle)] hover:text-white'
            }`}
            title="Toggle Interview Talking Points & Cue Notes"
          >
            <Lightbulb className="w-4 h-4" />
            <span className="hidden md:inline">Talking Points</span>
          </button>

          {/* Expand/Collapse Theater Mode */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg bg-[var(--bg-surface)] text-neutral-400 hover:text-white border border-[var(--border-subtle)] cursor-pointer"
            title={isExpanded ? 'Exit Theater Mode (Esc)' : 'Enter Theater Presentation Mode'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide Visual Progress Indicator */}
      <div className="grid grid-cols-5 gap-1.5 h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
        {[0, 1, 2, 3, 4].map((idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-full transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide
                ? 'bg-[#f97316] shadow-[0_0_8px_#f97316]'
                : idx < currentSlide
                ? 'bg-[#f97316]/50'
                : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
            title={`Jump to Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Main Slide Carousel Container */}
      <div className="relative min-h-[480px] sm:min-h-[520px] flex items-center">
        <AnimatePresence mode="wait">
          {/* SLIDE 1: CANDIDATE OVERVIEW & HOOK */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left: Professional Photo & Identity Profile */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                  <div className="relative">
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.name}
                      className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-[#f97316] shadow-xl shadow-[#f97316]/20"
                    />
                    <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-[#22c55e] text-[#090a0f] text-[10px] font-mono font-bold uppercase shadow-sm">
                      Verified Leader
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Ali Akhmad Fauzie (AL)
                    </h3>
                    <p className="text-xs font-mono text-[#f97316] mt-0.5 font-semibold">
                      {targetRole === 'content-moderation'
                        ? 'Operations Team Leader · Content Moderation & Trust & Safety'
                        : targetRole === 'customer-service'
                        ? 'Operations Team Leader · High-Volume Customer Service'
                        : 'Operations Team Leader & Enterprise Solutions Architect'}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      Kuala Lumpur, Malaysia · Bandung, Indonesia
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
                      Six Sigma Green Belt
                    </span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
                      8+ Years BPO Experience
                    </span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300">
                      Accenture &amp; Concentrix
                    </span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-[#f97316]">
                      Software Dev since 2022
                    </span>
                  </div>
                </div>

                {/* Right: Role-Tailored Executive Value Proposition & SVG Gauges */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs font-mono text-[#f97316] font-bold">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-4 h-4" />
                        EXECUTIVE VALUE PROPOSITION
                      </span>
                      <span className="text-neutral-500 uppercase">Target: Hiring &amp; Ops Managers</span>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans">
                      {targetRole === 'content-moderation' ? (
                        <>
                          "High-discipline Operations Team Leader with <strong>8+ years of frontline experience</strong> leading high-velocity Trust &amp; Safety and Content Moderation pods. Supervised up to <strong>34 multilingual associates across 7 APAC markets</strong>, sustaining <strong>96–99% policy accuracy</strong>, mitigating viral hate speech and merchant fraud, and pioneering wellness rotation protocols that reduced operational attrition to <strong>under 5%</strong>."
                        </>
                      ) : targetRole === 'customer-service' ? (
                        <>
                          "Results-driven Operations Team Leader specialized in high-volume customer service contact centers. Proven track record managing <strong>3 rotational shifts daily</strong>, sustaining <strong>&gt;98% contractual SLA compliance</strong>, cutting Average Handling Time (AHT) by <strong>25% via Six Sigma DMAIC</strong>, and boosting 90-day associate competency from <strong>78% to 94%</strong>."
                        </>
                      ) : (
                        <>
                          "Dual-track operational leader uniting <strong>8+ years of high-volume BPO floor command</strong> with <strong>self-taught enterprise software engineering</strong>. Manages 34-agent rotational squads sustaining &gt;98% SLA while building custom automation tools (PulseTrack &amp; SmartFlow) that save <strong>120+ leadership hours weekly</strong>."
                        </>
                      )}
                    </p>
                  </div>

                  {/* 4 Verified Metric Gauges (Interactive SVG) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {renderCircularGauge(98.4, 'Contractual SLA', 'Target: >98%', '#22c55e')}
                    {renderCircularGauge(25, 'AHT Reduction', 'Six Sigma DMAIC', '#f97316')}
                    {renderCircularGauge(97.8, 'QA Accuracy', 'Calibration Audits', '#3b82f6')}
                    {renderCircularGauge(95.2, 'Retention Rate', '<5% Attrition', '#a855f7')}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 2: PROFESSIONAL JOURNEY & CAREER TIMELINE */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full space-y-6"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#f97316] font-bold uppercase tracking-wider">
                  Career Progression · Proven Floor Leadership
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  From Frontline Analyst to BPO Operations Team Leader &amp; Architect
                </h3>
              </div>

              {/* 3 Career Step Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Accenture */}
                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-3 relative hover:border-[#f97316]/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                      Jul 2017 — Nov 2022
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#f97316]">Kuala Lumpur, MY</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">Accenture</h4>
                    <p className="text-xs font-mono text-[#f97316]">
                      Service Delivery Operations Senior Team Lead
                    </p>
                  </div>

                  <ul className="text-xs text-neutral-300 space-y-1.5 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Promoted through <strong>4 operational roles</strong>: Data Analyst → Senior Team Lead.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Supervised <strong>up to 34 associates</strong> across 7 international APAC markets.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span><strong>2022 Milestone:</strong> Discovered software; selected to Innovation Team &amp; won 2 hackathons.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Cut escalation turnaround from 4 hours to <strong>&lt;45 minutes</strong> via Power BI telemetry.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Concentrix */}
                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[#f97316]/40 shadow-lg shadow-[#f97316]/5 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#f97316]/20 border border-[#f97316]/30 text-[10px] font-mono text-[#f97316] font-bold">
                      May 2023 — Apr 2025
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">Kuala Lumpur, MY</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">Concentrix CVG</h4>
                    <p className="text-xs font-mono text-[#f97316]">
                      Operations Team Lead (BPO &amp; Call Center)
                    </p>
                  </div>

                  <ul className="text-xs text-neutral-300 space-y-1.5 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Directed <strong>3 daily rotational shifts</strong> for 9–34 agents with 98%+ SLA compliance.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Cut AHT by <strong>25% via Six Sigma DMAIC</strong>; lifted competency from 78% to 94%.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Built <strong>PulseTrack &amp; SmartFlow</strong>, saving <strong>120+ leadership hours/week</strong>.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Engineered <strong>CS Resolver</strong> NLP router, cutting ticket misclassification 40–60%.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Independent / Freelance */}
                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-3 relative hover:border-[#f97316]/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                      Feb 2025 — Present
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">Remote</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">Enterprise Solutions Architect</h4>
                    <p className="text-xs font-mono text-neutral-400">
                      Self-Employed / Independent Contractor
                    </p>
                  </div>

                  <ul className="text-xs text-neutral-300 space-y-1.5 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Delivered <strong>RM 70,000+</strong> in signed SOWs leading a 3-person technical pod.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Scoped modernization of <strong>365+ legacy apps</strong> across 28 BUs into M365/Dataverse.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Saved <strong>$960,000/year</strong> in enterprise licensing costs with zero plant downtime.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Built full-stack React 19 / TypeScript / Cloud Firestore offline systems.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-center justify-between gap-4 text-xs font-mono text-neutral-300">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#f97316]" />
                  <span>TOTAL LEADERSHIP RECORD: <strong>8+ Years in BPO Operations</strong></span>
                </span>
                <span className="text-[#f97316] font-bold">100% On-Time SLA Delivery</span>
              </div>
            </motion.div>
          )}

          {/* SLIDE 3: COMPLETE JOB DESCRIPTION (JD) BREAKDOWN */}
          {currentSlide === 2 && (
            <motion.div
              key="slide-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                <div>
                  <span className="text-xs font-mono text-[#f97316] font-bold uppercase tracking-wider">
                    Core Operational Disciplines · Day-in-the-Life Execution
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {targetRole === 'content-moderation'
                      ? 'Team Leader JD: Content Moderation & Trust & Safety'
                      : targetRole === 'customer-service'
                      ? 'Team Leader JD: High-Volume Customer Service Operations'
                      : 'Team Leader JD: Dual-Competency Operational Leadership'}
                  </h3>
                </div>

                {/* Sub-toggle for Hiring / Ops Managers */}
                <div className="flex items-center gap-1 bg-black p-1 rounded-lg border border-neutral-800">
                  <button
                    onClick={() => setTargetRole('content-moderation')}
                    className={`px-2.5 py-1 text-xs font-mono rounded ${
                      targetRole === 'content-moderation' ? 'bg-[#f97316] text-black font-bold' : 'text-neutral-400'
                    }`}
                  >
                    Content Moderation JD
                  </button>
                  <button
                    onClick={() => setTargetRole('customer-service')}
                    className={`px-2.5 py-1 text-xs font-mono rounded ${
                      targetRole === 'customer-service' ? 'bg-[#f97316] text-black font-bold' : 'text-neutral-400'
                    }`}
                  >
                    Customer Service JD
                  </button>
                </div>
              </div>

              {/* JD 5-Pillar Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {targetRole === 'content-moderation' ? (
                  <>
                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <Activity className="w-4 h-4" />
                        <span>1. QUEUE VELOCITY &amp; SURGE TRIAGE</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Continuous monitoring of incoming content volume spikes (breaking news, viral events, bot raids). Dynamic reallocation of moderator seats to maintain <strong>&lt;1-hour queue turnaround</strong> and zero SLA breaches.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>2. POLICY &amp; EDGE-CASE ESCALATION</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Tier-2 escalation SME adjudicating ambiguous edge cases across hate speech, graphic media, harassment, copyright, and advertising fraud. Authoring standardized decision trees to eliminate moderator uncertainty.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <Award className="w-4 h-4" />
                        <span>3. QA CALIBRATION &amp; AUDITING</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Chairing bi-weekly calibration sessions between moderators and QA audit teams. Driving inter-rater reliability scores to sustain <strong>96–99% audit accuracy</strong> with comprehensive root-cause error logging.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <Users className="w-4 h-4" />
                        <span>4. MODERATOR WELLNESS &amp; RESILIENCE</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Managing ergonomic rotational shifts, mandatory cognitive decompression breaks, and psychological wellness check-ins for associates exposed to sensitive queues, holding attrition to <strong>&lt;5%</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <BarChart className="w-4 h-4" />
                        <span>5. WBRS &amp; SITE DIRECTOR REPORTING</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Preparing and presenting data-driven Weekly Business Reviews (WBRs) for Operations Managers. Reporting policy violation trends, regional defect clusters, and headcount capacity forecasts.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[#f97316]/30 bg-[#f97316]/5 space-y-2 flex flex-col justify-center">
                      <div className="text-xs font-mono font-bold text-[#f97316]">
                        VERIFIED MODERATION METRIC:
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        800% Surge
                      </div>
                      <p className="text-[11px] text-neutral-400">
                        Outage crisis recovered in 48 hours without SLA default (Diamond &amp; Hang Tuah Award).
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <Clock className="w-4 h-4" />
                        <span>1. 3-SHIFT ROTATIONAL ROSTERING</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Owning 24/7 rotational shift schedules (morning, afternoon, night) using Erlang-C capacity modeling. Tracking real-time adherence (&gt;95%), shift handovers, and emergency coverages for up to 34 agents.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <Target className="w-4 h-4" />
                        <span>2. CONTRACTUAL SLA &amp; KPI GOVERNANCE</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Daily governance across contractual SLA (&gt;98%), First Contact Resolution (FCR &gt;85%), Abandonment Rate (&lt;3%), and CSAT (&gt;90%). Managing escalation queues with immediate triage.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <TrendingUp className="w-4 h-4" />
                        <span>3. SIX SIGMA DMAIC AHT REDUCTION</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Conducting Ishikawa 5-Whys defect audits to eliminate redundant agent clicks and tab-switching latency. Delivered a verified <strong>25% reduction in Average Handling Time</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <GraduationCap className="w-4 h-4" />
                        <span>4. 1:1 COACHING &amp; COMPETENCY LIFT</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Leading structured bi-weekly 1:1 performance coaching and nesting clinics. Elevated 90-day agent competency from <strong>78% to 94%</strong> with tailored performance action plans.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-2">
                      <div className="flex items-center gap-2 text-[#f97316] text-xs font-mono font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>5. QA DISPUTE ARBITRATION &amp; WBRS</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Adjudicating disputed quality scorecards between floor agents and the QA department. Leading Weekly Business Reviews with client directors to review floor telemetry and operational health.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-[#f97316]/30 bg-[#f97316]/5 space-y-2 flex flex-col justify-center">
                      <div className="text-xs font-mono font-bold text-[#f97316]">
                        VERIFIED CS BENCHMARK:
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        &gt;98% SLA
                      </div>
                      <p className="text-[11px] text-neutral-400">
                        Sustained across 34 multilingual agents in 7 APAC markets with &lt;5% annualized attrition.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* SLIDE 4: TOOLING EXPERTISE (THE 10X LEADER ADVANTAGE) */}
          {currentSlide === 3 && (
            <motion.div
              key="slide-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full space-y-5"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#f97316] font-bold uppercase tracking-wider">
                  The Competitive Moat · Beyond Spreadsheet Management
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Tooling &amp; Automation Expertise: Building Systems that Eliminate Friction
                </h3>
              </div>

              {/* 3 Flagship Internal Operational Tools */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center border border-[#3b82f6]/20">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">PulseTrack Operations Suite</h4>
                    <p className="text-xs font-mono text-[#3b82f6]">Power Apps · Dataverse · SharePoint</p>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Designed and deployed a shift governance, real-time attendance monitor, and coaching log for a 34-agent floor, improving tracking accuracy to <strong>98%</strong> and eliminating lost records.
                  </p>
                  <div className="pt-1 text-[11px] font-mono text-neutral-400">
                    // Replaced messy WhatsApp check-ins
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[#f97316]/40 space-y-3 bg-[#f97316]/5">
                  <div className="w-8 h-8 rounded-lg bg-[#f97316]/10 text-[#f97316] flex items-center justify-center border border-[#f97316]/20">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">SmartFlow SLA Escalation</h4>
                    <p className="text-xs font-mono text-[#f97316]">Power Automate · Cloud Flows · Teams</p>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Automated SLA warning triggers, handover protocols, and report compiling. Eliminated <strong>90% manual reporting</strong> and saved <strong>120+ leadership hours weekly</strong>.
                  </p>
                  <div className="pt-1 text-[11px] font-mono text-[#f97316] font-bold">
                    // -60% to -80% Leadership Admin Overhead
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#a855f7]/10 text-[#a855f7] flex items-center justify-center border border-[#a855f7]/20">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">CS Resolver (NLP Routing)</h4>
                    <p className="text-xs font-mono text-[#a855f7]">AI Builder · NLP Model · Power Platform</p>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Intelligent ticket classification and SOP retrieval engine that reduced routing errors by <strong>~50%</strong> and misclassification by <strong>40–60%</strong> across international segments.
                  </p>
                  <div className="pt-1 text-[11px] font-mono text-neutral-400">
                    // First-Contact Resolution Lift
                  </div>
                </div>
              </div>

              {/* Comprehensive Tooling Badges Matrix */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
                <div className="text-[11px] font-mono text-neutral-400 uppercase font-semibold">
                  Complete Tooling Proficiency for Floor Management &amp; Automation:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#131622] text-white border border-neutral-700">
                    Microsoft Power Platform (Power Apps, Automate, BI)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#131622] text-white border border-neutral-700">
                    Salesforce Service Cloud
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#131622] text-white border border-neutral-700">
                    Zendesk Support
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#131622] text-white border border-neutral-700">
                    Jira Service Management
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#131622] text-white border border-neutral-700">
                    Advanced Excel (Power Query/VBA)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#131622] text-white border border-neutral-700">
                    SQL / T-SQL Telemetry
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#131622] text-[#f97316] border border-[#f97316]/40">
                    React 19 &amp; TypeScript (Pro-Code)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#131622] text-[#f97316] border border-[#f97316]/40">
                    Python AST Linters &amp; Playwright
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 5: 30-60-90 DAY BLUEPRINT & CLOSING PITCH */}
          {currentSlide === 4 && (
            <motion.div
              key="slide-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full space-y-5"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#f97316] font-bold uppercase tracking-wider">
                  Operational Roadmap · Day One Readiness
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Why Hire Ali: The 30-60-90 Day Execution Blueprint
                </h3>
              </div>

              {/* 30-60-90 Day Phased Stepper */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 30 Days */}
                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#3b82f6]/20 text-[#3b82f6] text-[10px] font-mono font-bold">
                      DAYS 1 — 30
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">PHASE 1</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Listen, Shadow &amp; Stabilize</h4>
                  <ul className="text-xs text-neutral-300 space-y-1.5 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#3b82f6] mt-0.5">•</span>
                      <span>Conduct 1:1 discovery sessions with all floor associates and SMEs.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#3b82f6] mt-0.5">•</span>
                      <span>Audit historical SLA breaches, queue bottlenecks, and QA error clusters.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#3b82f6] mt-0.5">•</span>
                      <span>Establish calibration alignment with the QA lead to baseline scoring.</span>
                    </li>
                  </ul>
                </div>

                {/* 60 Days */}
                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[#f97316]/40 space-y-3 bg-[#f97316]/5">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#f97316]/20 text-[#f97316] text-[10px] font-mono font-bold">
                      DAYS 31 — 60
                    </span>
                    <span className="text-[10px] font-mono text-[#f97316]">PHASE 2</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">DMAIC Optimize &amp; Coach</h4>
                  <ul className="text-xs text-neutral-300 space-y-1.5 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Launch Ishikawa 5-Whys defect audits to eliminate unnecessary handling steps.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Deploy automated shift adherence &amp; escalation tracker to free up admin time.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#f97316] mt-0.5">•</span>
                      <span>Target bottom-quartile performers with structured coaching clinics.</span>
                    </li>
                  </ul>
                </div>

                {/* 90 Days */}
                <div className="p-5 rounded-2xl bg-[#0d0f17] border border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#22c55e]/20 text-[#22c55e] text-[10px] font-mono font-bold">
                      DAYS 61 — 90
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">PHASE 3</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Scale, Elevate &amp; Automate</h4>
                  <ul className="text-xs text-neutral-300 space-y-1.5 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#22c55e] mt-0.5">•</span>
                      <span>Sustain <strong>&gt;98% contractual SLA compliance</strong> across all 3 rotational shifts.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#22c55e] mt-0.5">•</span>
                      <span>Build an internal promotion pipeline (mentoring agents into SME and QA roles).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#22c55e] mt-0.5">•</span>
                      <span>Deliver executive WBR presenting measurable AHT cuts and sub-5% attrition.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-900 to-[#121420] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Ready to Strengthen Your Operations Floor?
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Full executive CV, verified production simulators, and contact channels are available immediately.
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  {onOpenResume && (
                    <button
                      onClick={onOpenResume}
                      className="px-4 py-2 rounded-lg bg-[var(--interactive-primary)] text-[#090a0f] text-xs font-bold hover:bg-[#fb923c] transition-colors cursor-pointer flex items-center space-x-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Download Resume (PDF)</span>
                    </button>
                  )}
                  {onOpenContact && (
                    <button
                      onClick={onOpenContact}
                      className="px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 text-xs font-medium hover:bg-neutral-700 transition-colors cursor-pointer flex items-center space-x-1.5"
                    >
                      <span>Connect with Ali</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slide Navigation Footbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[var(--border-subtle)] text-xs text-neutral-400 font-mono">
        <div className="flex items-center space-x-2">
          <span>Use keyboard arrows</span>
          <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px] border border-neutral-700">←</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px] border border-neutral-700">→</kbd>
          <span>or Space to navigate</span>
        </div>

        {/* Slide Counter & Prev/Next Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-neutral-800 text-white border border-[var(--border-subtle)] cursor-pointer active:scale-95 transition-all"
            title="Previous Slide (ArrowLeft)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="px-3 py-1 text-xs text-neutral-300 font-bold bg-neutral-900 rounded-lg border border-neutral-800">
            {currentSlide + 1} / {totalSlides}
          </span>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-neutral-800 text-white border border-[var(--border-subtle)] cursor-pointer active:scale-95 transition-all"
            title="Next Slide (ArrowRight / Space)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Collapsible Speaker Cue / Interview Talking Points Drawer */}
      <AnimatePresence>
        {showSpeakerNotes && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 p-4 rounded-xl bg-[#1c140c] border border-[#f97316]/40 text-neutral-200 text-xs leading-relaxed space-y-2 overflow-hidden shadow-lg"
          >
            <div className="flex items-center justify-between text-[#f97316] font-mono font-bold text-[11px] uppercase">
              <span className="flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                LIVE INTERVIEW TALKING POINTS &amp; CUES (FOR ALI)
              </span>
              <span>Slide {currentSlide + 1} Notes</span>
            </div>
            <p className="font-sans text-neutral-300 text-xs sm:text-sm">
              {speakerNotes[currentSlide]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
