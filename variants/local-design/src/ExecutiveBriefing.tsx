import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Briefcase,
  Presentation,
  Building,
  Database,
  Users,
  Bot,
  BarChart3,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Shield,
  Cpu,
  Target,
  MessageSquareQuote,
  ArrowRight,
  Award,
  Download,
  Linkedin,
  Calendar,
  Mail,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { NavTab } from './types';
import {
  HIRING_MANAGER_INTRO,
  HIRING_MANAGER_METRICS,
  DELIVERY_CASE_STUDIES,
  METHODOLOGY_PHASES,
  OPERATING_CADENCE,
  TEAM_MANAGEMENT,
  DECISION_FRAMEWORK,
  AI_WORKFORCE_STACKS,
  AI_USE_CASES,
  FIRST_90_DAYS,
  ASK_ALI_PROMPTS
} from './data/hiringManagerData';
import { PERSONAL_INFO } from './data/portfolioData';
import { ChatMessage } from './types';
import { AppleCard3D } from './components/canvas/AppleCard3D';
import { Section3D } from './components/canvas/Section3D';

interface ExecutiveBriefingProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSelectTab: (tab: NavTab) => void;
}

const FALLBACK_ANSWER =
  "That's a great question — and one I'd love to walk through live. Here's what I can answer best from my verified portfolio:\n\n• Power Platform & Domino → Dataverse migration projects\n• Dynamics 365 / Dataverse architecture depth\n• Leadership & team scaling examples\n• AI implementations and my AI workforce\n• Cost optimization wins (RM4.2M/yr avoided)\n• My four-phase design methodology\n\nPick any of the suggested prompts below and I'll show you the evidence.";

const ExecutiveBriefing: React.FC<ExecutiveBriefingProps> = ({
  onOpenResume,
  onOpenContact,
  onSelectTab
}) => {
  const [expandedProject, setExpandedProject] = useState<string | null>('pulsetrack');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeAskPrompt, setActiveAskPrompt] = useState<string | null>(null);

  const messageIdRef = useRef(1);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const handleAsk = useCallback((text: string) => {
    const userMessage: ChatMessage = {
      id: messageIdRef.current++,
      role: 'user',
      text
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setActiveAskPrompt(null);

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
    }, 600);
  }, []);

  const handlePromptClick = (promptId: string, label: string) => {
    setActiveAskPrompt(promptId);
    handleAsk(label);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openLinkedIn = () => {
    window.open(PERSONAL_INFO.linkedIn, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-12 py-6">
      
      {/* ── Keynote Hero Section ─────────────────────────────── */}
      <Section3D id="briefing-hero" initialRotateX={4} initialY={24} className="relative overflow-hidden rounded-3xl apple-card p-8 sm:p-12">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2997ff]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-medium text-neutral-300">
            <Presentation className="w-3.5 h-3.5 text-[#2997ff]" />
            <span>EXECUTIVE BRIEFING · {HIRING_MANAGER_INTRO.duration} · {HIRING_MANAGER_INTRO.sectionCount}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter apple-text-gradient leading-[1.08]">
            Technology &amp; Operations Leader Delivering Enterprise Transformation
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
            {HIRING_MANAGER_INTRO.positioning}
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
            {HIRING_MANAGER_INTRO.purpose}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection('briefing-impact')}
              className="apple-btn-primary"
            >
              <TrendingUp className="w-4 h-4 mr-0.5" />
              <span>Business Impact</span>
            </button>
            <button
              onClick={() => scrollToSection('briefing-projects')}
              className="apple-btn-secondary"
            >
              <Briefcase className="w-4 h-4 mr-0.5" />
              <span>Signature Projects</span>
            </button>
          </div>
        </div>
      </Section3D>

      {/* ── Why Hire Ali ─────────────────────────────────────── */}
      <Section3D id="briefing-why" delay={0.04} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Leadership Pillars</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Building className="w-5 h-5" />, title: 'Enterprise Transformation', desc: 'Modernizing legacy architectures and operational models at enterprise scale' },
            { icon: <Database className="w-5 h-5" />, title: 'Solution Architecture', desc: 'Designing resilient, governed, and compliant Microsoft 365 platforms' },
            { icon: <Users className="w-5 h-5" />, title: 'Operational Leadership', desc: 'Managing 34 direct reports across 7 international markets with 98%+ SLA' },
            { icon: <Bot className="w-5 h-5" />, title: 'AI-First Engineering', desc: 'Deploying autonomous agentic pipelines to eliminate repetitive operational toil' }
          ].map((prop) => (
            <AppleCard3D key={prop.title} className="h-full" glareColor="rgba(41, 151, 255, 0.15)">
              <div className="apple-card rounded-2xl p-6 space-y-3 flex flex-col justify-between h-full">
                <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#2997ff]">
                  {prop.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-tight">{prop.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

      {/* ── Business Impact Dashboard ────────────────────────── */}
      <Section3D id="briefing-impact" delay={0.06} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#30d158] font-semibold">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Verified Business Impact</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIRING_MANAGER_METRICS.map((metric) => (
            <AppleCard3D key={metric.label} className="h-full" glareColor="rgba(48, 209, 88, 0.15)">
              <div className="apple-card rounded-2xl p-6 space-y-2 bg-white/[0.02] h-full flex flex-col justify-center">
                <p className="text-3xl font-bold text-white tracking-tight font-mono">{metric.value}</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-mono">{metric.label}</p>
              </div>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

      {/* ── Delivery Methodology ─────────────────────────────── */}
      <Section3D id="briefing-methodology" delay={0.08} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#bf5af2] font-semibold">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Proven Delivery Methodology</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METHODOLOGY_PHASES.map((phase, idx) => (
            <AppleCard3D key={phase.id} className="h-full" glareColor="rgba(191, 90, 242, 0.15)">
              <div className="apple-card rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#2997ff] font-mono">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">{phase.phase}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{phase.phase}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{phase.summary}</p>
                </div>
                <ul className="space-y-1.5 pt-3 border-t border-white/[0.08]">
                  {phase.activities.map((activity) => (
                    <li key={activity.title} className="flex items-start gap-1.5 text-xs text-neutral-300">
                      <span className="text-[#2997ff] mt-0.5">•</span>
                      <span>{activity.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AppleCard3D>
          ))}
        </div>
      </Section3D>

      {/* ── Signature Projects ───────────────────────────────── */}
      <Section3D id="briefing-projects" delay={0.05} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Signature Transformation Case Studies</span>
        </div>
        <div className="space-y-4">
          {DELIVERY_CASE_STUDIES.map((study) => {
            const isExpanded = expandedProject === study.id;
            return (
              <div key={study.id} className="apple-card rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => toggleProject(study.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white capitalize tracking-tight">{study.projectId}</h3>
                    <p className="text-xs text-neutral-400">{study.tagline}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-[#2997ff] bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                      {study.outcome.length} Key Outcomes
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
                  </div>
                </button>
                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 space-y-4 border-t border-white/[0.08] pt-4"
                  >
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">Situation</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">{study.situation}</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#2997ff] font-semibold">Approach</p>
                      <ul className="space-y-1">
                        {study.approach.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-neutral-300">
                            <span className="text-[#2997ff] mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#30d158] font-semibold">Architecture</p>
                      <ul className="space-y-1">
                        {study.architecture.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-neutral-300">
                            <span className="text-[#30d158] mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">Verified Outcomes</p>
                      <div className="flex flex-wrap gap-2">
                        {study.outcome.map((outcome) => (
                          <div key={outcome.label} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 flex items-center space-x-1.5">
                            <span className="text-xs font-bold text-white font-mono">{outcome.value}</span>
                            <span className="text-[11px] text-neutral-400">{outcome.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </Section3D>

      {/* ── How I Lead ───────────────────────────────────────── */}
      <Section3D id="briefing-leadership" delay={0.06} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold">
          <Shield className="w-3.5 h-3.5" />
          <span>Operational Cadence &amp; Governance</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <AppleCard3D className="h-full">
            <div className="apple-card rounded-2xl p-6 space-y-3 h-full">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Operating Cadence</h3>
              <div className="space-y-2">
                {OPERATING_CADENCE.map((item) => (
                  <div key={item.day} className="space-y-0.5">
                    <p className="text-xs font-semibold text-[#2997ff]">{item.day} · {item.focus}</p>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </AppleCard3D>

          <AppleCard3D className="h-full">
            <div className="apple-card rounded-2xl p-6 space-y-3 h-full">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Team Management</h3>
              <div className="space-y-2">
                {TEAM_MANAGEMENT.map((item) => (
                  <div key={item.title} className="space-y-0.5">
                    <p className="text-xs font-semibold text-[#2997ff]">{item.title}</p>
                    <ul className="space-y-1">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-1 text-[11px] text-neutral-400">
                          <span className="text-[#30d158] mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AppleCard3D>

          <AppleCard3D className="h-full">
            <div className="apple-card rounded-2xl p-6 space-y-3 h-full">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Decision Framework</h3>
              <div className="space-y-2">
                {DECISION_FRAMEWORK.map((item) => (
                  <div key={item.question} className="space-y-0.5">
                    <p className="text-xs font-semibold text-[#2997ff]">{item.question}</p>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">{item.approach}</p>
                  </div>
                ))}
              </div>
            </div>
          </AppleCard3D>
        </div>
      </Section3D>

      {/* ── Ask Ali Q&A ──────────────────────────────────────── */}
      <Section3D id="briefing-ask-ali" delay={0.06} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Interactive Q&amp;A Simulator</span>
        </div>
        <div className="apple-card rounded-3xl p-6 sm:p-8 space-y-4">
          <p className="text-xs text-neutral-400 font-mono">Suggested Inquiries:</p>
          <div className="flex flex-wrap gap-2">
            {ASK_ALI_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => handlePromptClick(prompt.id, prompt.label)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeAskPrompt === prompt.id
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/[0.04] text-neutral-300 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Chat messages */}
          <div className="space-y-3 pt-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'bg-white/[0.04] border border-white/10 text-neutral-200'
                  }`}
                >
                  {msg.text}
                  {msg.sectionLabel && (
                    <button
                      onClick={() => scrollToSection(`briefing-${msg.sectionId}`)}
                      className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#2997ff] hover:text-white"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>{msg.sectionLabel}</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#2997ff] animate-ping" />
                <span>Processing answer...</span>
              </div>
            )}
          </div>
        </div>
      </Section3D>

      {/* ── Keynote Grand Finale CTA ─────────────────────────── */}
      <Section3D id="briefing-summary" delay={0.06} className="relative overflow-hidden rounded-3xl apple-card p-8 sm:p-12 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold mx-auto">
          <Award className="w-4 h-4" />
          <span>Executive Availability</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter apple-text-gradient">
          Modernization Leadership Available for Immediate Impact
        </h2>
        <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
          {[
            'Enterprise Transformation',
            'Power Platform / Dataverse',
            'M365 Operating Models',
            'International Delivery',
            'AI Operations'
          ].map((item) => (
            <span key={item} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300">
              {item}
            </span>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Bridging architecture, governance, and operational execution. Open to transformation leadership opportunities.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <button
            onClick={onOpenResume}
            className="apple-btn-primary"
          >
            <Download className="w-4 h-4 mr-0.5" />
            <span>Download Resume</span>
          </button>
          <button
            onClick={openLinkedIn}
            className="apple-btn-secondary"
          >
            <Linkedin className="w-4 h-4 mr-0.5" />
            <span>LinkedIn</span>
          </button>
          <button
            onClick={onOpenContact}
            className="apple-btn-secondary"
          >
            <Calendar className="w-4 h-4 mr-0.5" />
            <span>Schedule Discussion</span>
          </button>
        </div>
      </Section3D>

    </div>
  );
};

export default ExecutiveBriefing;
