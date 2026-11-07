import React, { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/resumeData';
import { ProfileMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { MatrixRain } from './MatrixRain';
import { SplitTextReveal } from './SplitTextReveal';
import { ParallaxParticles } from './ParallaxParticles';
import { MagneticButton } from './MagneticButton';
import {
  Linkedin,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Award,
  Download,
  ArrowDown,
  Cpu,
  Users,
  Compass,
  Check,
  Camera,
  Sparkles,
  ArrowRight,
  Send,
  ExternalLink,
  Layers,
  TrendingUp,
  ShieldCheck,
  PlayCircle,
  Briefcase,
} from 'lucide-react';

interface HeroSectionProps {
  currentMode: ProfileMode;
  onSelectMode: (mode: ProfileMode) => void;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
  onStartTour?: () => void;
  onOpenSlideshow?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentMode,
  onSelectMode,
  onOpenResumeModal,
  onOpenContactModal,
  onStartTour,
  onOpenSlideshow,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string>(personalInfo.avatarUrl || '');
  const [imageLoadError, setImageLoadError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('user_profile_photo');
    if (saved) {
      setProfilePhoto(saved);
      setImageLoadError(false);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        if (result) {
          setProfilePhoto(result);
          setImageLoadError(false);
          localStorage.setItem('user_profile_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getDynamicSubtitle = () => {
    if (currentMode === 'architecture' || currentMode === 'architect') {
      return "Enterprise Solution Architecture & Systems Engineering. Specializing in Power Platform, Dataverse relational modeling, C# plugin pipelines, and cross-platform mobile engineering across iOS & Android.";
    }
    if (currentMode === 'operations') {
      return "Operations Leadership & BPO Scaling. Scaling 34-FTE multilingual squads across 7 APAC markets with >98% SLA benchmarks and intelligent Lark bot workflow automations.";
    }
    return "Fullstack Engineer and Enterprise Architect bridging cross-platform mobile apps (iOS/Android), Dataverse relational architectures, and high-velocity Lark bot workflow automations.";
  };

  return (
    <section id="home" className="relative pt-8 sm:pt-12 pb-20 sm:pb-24 border-b border-[#e0e0d8] overflow-hidden bg-[#fdfdfc]">
      <MatrixRain className="absolute inset-0 z-0" opacity={0.08} />
      <ParallaxParticles count={28} />
      
      <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-[#e0e0d8] shadow-xs">
        
        {/* Left Column: Hero Identity, Core Value Proposition & Telemetry Bento */}
        <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-10 xl:p-14 lg:border-r border-[#e0e0d8] flex flex-col justify-between">
          
          <div>
            {/* Top Status & Availability Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#e0e0d8]/80">
              <div className="flex items-center gap-2">
                <span className="label-mono font-bold text-[#121212]">
                  Fullstack Engineer &amp; Solution Architect
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#6b6b63]" />
                <span className="hidden sm:inline-block font-mono-code text-[0.68rem] text-[#6b6b63]">
                  9+ Yrs Enterprise Experience
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 font-mono-code text-[0.68rem] uppercase tracking-wider text-[#0f766e] bg-[#f0fdf4] border border-[#bbf7d0] px-2.5 py-1 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Enterprise Engagements</span>
              </div>
            </div>

            {/* Profile Avatar & Intro Greeting */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-2 mb-3">
              <div className="flex items-center gap-3.5">
                {/* Clickable Profile Photo */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Upload custom profile photo"
                  className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] rounded-full"
                  title="Click to update profile headshot"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                    aria-label="Upload photo file"
                  />
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#121212]/20 p-0.5 bg-[#fdfdfc] overflow-hidden relative group-hover:border-[#1d4ed8] transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#f7f7f0] relative">
                      {!imageLoadError && profilePhoto ? (
                        <img
                          src={profilePhoto}
                          alt="Ali Akhmad Fauzie"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={() => setImageLoadError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-mono-code text-sm font-bold text-[#121212]">
                          {personalInfo.initials}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[#121212]/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Camera className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                </div>

                <div className="flex flex-col">
                  <span className="font-mono-code text-[0.72rem] sm:text-xs uppercase tracking-[0.15em] text-[#121212] font-semibold bg-[#f7f7f0] px-2 py-0.5 border border-[#e0e0d8] inline-block w-max">
                    HI, I AM
                  </span>
                  <span className="text-[11px] font-mono-code text-[#6b6b63] mt-0.5">
                    Kuala Lumpur &amp; Bandung (Hybrid / Remote)
                  </span>
                </div>
              </div>

              {/* Quick Interactive Demo Badges with 44px touch targets */}
              <div className="flex items-center gap-2">
                {onOpenSlideshow && (
                  <button
                    onClick={onOpenSlideshow}
                    id="open-slideshow-btn"
                    className="min-h-[44px] px-3.5 py-2 bg-[#f7f7f0] hover:bg-[#e0e0d8] border border-[#e0e0d8] text-[#121212] font-mono-code text-[0.68rem] uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer rounded-sm hover:border-[#121212]"
                    title="Open Visual Capabilities Slideshow"
                    aria-label="Open visual capabilities deck slideshow"
                  >
                    <PlayCircle className="w-3.5 h-3.5 text-[#1d4ed8]" />
                    <span>Capabilities Deck</span>
                  </button>
                )}

                {onStartTour && (
                  <button
                    onClick={onStartTour}
                    id="start-interactive-tour-btn"
                    className="min-h-[44px] px-3.5 py-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-mono-code text-[0.68rem] uppercase tracking-wider font-semibold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer rounded-sm"
                    title="Start Interactive Guided Tour"
                    aria-label="Start interactive guided tour"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Guided Tour</span>
                  </button>
                )}
              </div>
            </div>

            {/* High-Craft Editorial Hero Name Headline with GSAP Split Text Reveal */}
            <h1
              id="hero-name-heading"
              className="font-serif-display italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.6rem] xl:text-[6.4rem] font-light leading-[0.92] tracking-[-0.03em] text-[#121212] my-2 sm:my-4"
            >
              <SplitTextReveal
                text="Ali Akhmad Fauzie"
                highlightWords={["Fauzie"]}
                highlightClassName="font-normal text-[#121212]"
                delay={0.15}
                stagger={0.06}
              />
            </h1>

            {/* Dynamic Value Pitch / Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`hero-sub-${currentMode}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-base sm:text-lg md:text-xl font-light text-[#444440] leading-relaxed max-w-2xl mt-1 mb-6"
              >
                {getDynamicSubtitle()}
              </motion.p>
            </AnimatePresence>

            {/* Streamlined Primary & Secondary CTA Bar with Magnetic Cursor Attraction */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <MagneticButton
                href="#projects"
                id="hero-primary-work-cta"
                magneticStrength={0.35}
                textStrength={0.2}
                className="min-h-[48px] px-6 py-3.5 bg-[#121212] hover:bg-[#2c2c2c] text-[#fdfdfc] font-mono-code text-xs uppercase tracking-[0.12em] font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                onClick={onOpenResumeModal}
                id="hero-primary-resume-cta"
                magneticStrength={0.25}
                textStrength={0.15}
                className="min-h-[48px] px-5 py-3.5 bg-[#fdfdfc] hover:bg-[#121212] text-[#121212] hover:text-[#fdfdfc] border-2 border-[#121212] font-mono-code text-xs uppercase tracking-[0.12em] font-bold transition-all shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Executive CV</span>
              </MagneticButton>

              <button
                onClick={onOpenContactModal}
                id="hero-primary-contact-cta"
                className="min-h-[48px] px-5 py-3.5 bg-[#f7f7f0] hover:bg-[#e0e0d8] border border-[#e0e0d8] text-[#121212] font-mono-code text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 cursor-pointer hover:border-[#121212]"
              >
                <Send className="w-3.5 h-3.5 text-[#0f766e]" />
                <span>Direct Inquiry</span>
              </button>
            </div>

            {/* Dynamic Contextual Focus Banner */}
            <div className="mb-8 p-3.5 sm:p-4 bg-[#f7f7f0] border border-[#e0e0d8] flex items-center gap-3 text-xs sm:text-sm text-[#121212]">
              <Sparkles className="w-4 h-4 text-[#1d4ed8] flex-shrink-0" />
              <div className="font-mono-code text-xs text-[#444440] leading-normal">
                {currentMode === 'operations' ? (
                  <>
                    <strong className="text-[#0f766e] uppercase font-semibold">Operations Lens:</strong> Scaled 34-FTE multilingual BPO squads across 7 APAC markets with &gt;98% SLA and custom Lark bot automations.
                  </>
                ) : currentMode === 'architecture' || currentMode === 'architect' ? (
                  <>
                    <strong className="text-[#1d4ed8] uppercase font-semibold">Architecture Lens:</strong> Modernized 361 legacy Lotus Domino DBs to Dataverse &amp; Power Apps saving MYR 360,000/yr in recurring licensing.
                  </>
                ) : (
                  <>
                    <strong className="text-[#121212] uppercase font-semibold">Executive Lens:</strong> Enterprise Architecture, Power Platform &amp; Dataverse modernization paired with 34-FTE operational leadership.
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Key Performance Telemetry Bento Grid */}
          <div className="pt-4 border-t border-[#e0e0d8]">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-[#1d4ed8]" />
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#121212] font-semibold">
                  Verified Executive Telemetry &amp; Business ROI
                </span>
              </div>
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Impact Benchmarks
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 bg-[#f7f7f0]/90 backdrop-blur-md border border-[#e0e0d8] shadow-xs">
              <div className="p-2.5 rounded transition-all hover:bg-white/90 border border-transparent hover:border-[#1d4ed8]/20 group">
                <span className="label-mono block mb-1 text-[#6b6b63] group-hover:text-[#121212]">Licensing ROI</span>
                <h4 className="font-serif-display italic text-2xl sm:text-3xl text-[#1d4ed8] font-normal leading-tight">
                  MYR 360K<span className="text-xs font-mono-code text-[#444440]">/yr</span>
                </h4>
                <span className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] block mt-0.5">
                  Cost Avoided
                </span>
              </div>

              <div className="p-2.5 rounded transition-all hover:bg-white/90 border border-transparent hover:border-[#1d4ed8]/20 group">
                <span className="label-mono block mb-1 text-[#6b6b63] group-hover:text-[#121212]">Scale</span>
                <h4 className="font-serif-display italic text-2xl sm:text-3xl text-[#1d4ed8] font-normal leading-tight">
                  361 Forms
                </h4>
                <span className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] block mt-0.5">
                  Modernized DBs
                </span>
              </div>

              <div className="p-2.5 rounded transition-all hover:bg-white/90 border border-transparent hover:border-[#0f766e]/20 group">
                <span className="label-mono block mb-1 text-[#6b6b63] group-hover:text-[#121212]">Leadership</span>
                <h4 className="font-serif-display italic text-2xl sm:text-3xl text-[#0f766e] font-normal leading-tight">
                  34 FTE
                </h4>
                <span className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] block mt-0.5">
                  &gt;98% SLA Compliance
                </span>
              </div>

              <div className="p-2.5 rounded transition-all hover:bg-white/90 border border-transparent hover:border-[#121212]/20 group">
                <span className="label-mono block mb-1 text-[#6b6b63] group-hover:text-[#121212]">Delivered</span>
                <h4 className="font-serif-display italic text-2xl sm:text-3xl text-[#121212] font-normal leading-tight">
                  16+ Apps
                </h4>
                <span className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] block mt-0.5">
                  In Production
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Persona Switcher & Direct Executive Connect Dock */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between bg-[#fdfdfc] divide-y divide-[#e0e0d8]">
          
          {/* Bento Card 1: Interactive Persona Switcher */}
          <div className="p-6 sm:p-8 xl:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="label-mono font-bold text-[#121212]">01 — Interactive Persona Lens</span>
                <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                  Select Track
                </span>
              </div>

              <div 
                className="space-y-2.5 mb-6"
                role="radiogroup"
                aria-label="Profile perspective filter"
              >
                <button
                  onClick={() => onSelectMode('full')}
                  id="hero-perspective-full"
                  role="radio"
                  aria-checked={currentMode === 'full' || currentMode === 'hybrid'}
                  className={`w-full min-h-[44px] p-3.5 text-left border font-mono-code text-xs transition-all flex items-center justify-between cursor-pointer rounded-sm ${
                    currentMode === 'full' || currentMode === 'hybrid'
                      ? 'bg-[#121212] text-[#fdfdfc] border-[#121212] shadow-md'
                      : 'bg-[#f7f7f0] text-[#444440] border-[#e0e0d8] hover:border-[#121212] hover:bg-[#ebebe2]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Compass className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold uppercase tracking-wider text-[0.76rem]">Full Profile</div>
                      <div className={`text-[0.62rem] normal-case font-light ${currentMode === 'full' || currentMode === 'hybrid' ? 'text-[#dcdccb]' : 'text-[#6b6b63]'}`}>
                        Comprehensive Pro-Code, Architecture &amp; Leadership
                      </div>
                    </div>
                  </div>
                  <span className={`text-[0.6rem] font-mono-code uppercase tracking-wider px-2 py-0.5 border rounded-xs ${
                    currentMode === 'full' || currentMode === 'hybrid' ? 'border-[#fdfdfc]/40 text-[#fdfdfc] font-semibold' : 'border-[#e0e0d8] text-[#6b6b63]'
                  }`}>
                    {currentMode === 'full' || currentMode === 'hybrid' ? 'Active' : 'Select'}
                  </span>
                </button>

                <button
                  onClick={() => onSelectMode('architecture')}
                  id="hero-perspective-arch"
                  role="radio"
                  aria-checked={currentMode === 'architecture' || currentMode === 'architect'}
                  className={`w-full min-h-[44px] p-3.5 text-left border font-mono-code text-xs transition-all flex items-center justify-between cursor-pointer rounded-sm ${
                    currentMode === 'architecture' || currentMode === 'architect'
                      ? 'bg-[#1d4ed8] text-[#fdfdfc] border-[#1d4ed8] shadow-md glow-exec'
                      : 'bg-[#f7f7f0] text-[#444440] border-[#e0e0d8] hover:border-[#1d4ed8] hover:bg-[#ebebe2]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold uppercase tracking-wider text-[0.76rem]">Architecture &amp; Solutions</div>
                      <div className={`text-[0.62rem] normal-case font-light ${currentMode === 'architecture' || currentMode === 'architect' ? 'text-blue-100' : 'text-[#6b6b63]'}`}>
                        Dataverse, C# Plugins, Power Platform &amp; Mobile
                      </div>
                    </div>
                  </div>
                  <span className={`text-[0.6rem] font-mono-code uppercase tracking-wider px-2 py-0.5 border rounded-xs ${
                    currentMode === 'architecture' || currentMode === 'architect' ? 'border-[#fdfdfc]/40 text-[#fdfdfc] font-semibold' : 'border-[#e0e0d8] text-[#6b6b63]'
                  }`}>
                    {currentMode === 'architecture' || currentMode === 'architect' ? 'Active' : 'Select'}
                  </span>
                </button>

                <button
                  onClick={() => onSelectMode('operations')}
                  id="hero-perspective-ops"
                  role="radio"
                  aria-checked={currentMode === 'operations'}
                  className={`w-full min-h-[44px] p-3.5 text-left border font-mono-code text-xs transition-all flex items-center justify-between cursor-pointer rounded-sm ${
                    currentMode === 'operations'
                      ? 'bg-[#0f766e] text-[#fdfdfc] border-[#0f766e] shadow-sm glow-teal'
                      : 'bg-[#f7f7f0] text-[#444440] border-[#e0e0d8] hover:border-[#0f766e] hover:bg-[#ebebe2]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold uppercase tracking-wider text-[0.76rem]">Operations &amp; Scale</div>
                      <div className={`text-[0.62rem] normal-case font-light ${currentMode === 'operations' ? 'text-teal-100' : 'text-[#6b6b63]'}`}>
                        34-FTE Multilingual BPO, SLA &gt;98%, Lark Bot Engine
                      </div>
                    </div>
                  </div>
                  <span className={`text-[0.6rem] font-mono-code uppercase tracking-wider px-2 py-0.5 border rounded-xs ${
                    currentMode === 'operations' ? 'border-[#fdfdfc]/40 text-[#fdfdfc] font-semibold' : 'border-[#e0e0d8] text-[#6b6b63]'
                  }`}>
                    {currentMode === 'operations' ? 'Active' : 'Select'}
                  </span>
                </button>
              </div>

              {/* Core Skill Chips */}
              <div>
                <span className="label-mono block mb-2 text-[#121212]">
                  Core Tech &amp; Architectural Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Dataverse', 'C# Plugins', 'Power Platform', 'React Native', 'Kotlin', 'Swift', 'TypeScript', 'Lark Open Platform', 'Azure DevOps'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-[#e0e0d8] text-[0.65rem] font-mono-code text-[#444440] bg-[#f7f7f0] rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#e0e0d8] text-[0.68rem] font-mono-code text-[#6b6b63] flex items-center justify-between">
              <span>Selected Track:</span>
              <strong className="text-[#121212] uppercase font-semibold">
                {currentMode === 'architecture' || currentMode === 'architect'
                  ? 'Architecture & Solutions'
                  : currentMode === 'operations'
                  ? 'Operations & Leadership'
                  : 'Full Profile'}
              </strong>
            </div>
          </div>

          {/* Bento Card 2: Executive Connect & Availability Dock */}
          <div className="p-6 sm:p-8 xl:p-10 bg-[#f7f7f0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="label-mono font-bold text-[#121212]">02 — Direct Engagement</span>
                <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Verified Track Record
                </span>
              </div>
              
              <p className="mt-2 text-xs sm:text-sm text-[#444440] leading-relaxed font-light">
                Available for Enterprise Solution Architecture, Power Platform & M365 Modernization programs, and Operations/Delivery Leadership.
              </p>

              {/* High-Contrast Action Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={onOpenContactModal}
                  id="hero-cta-get-in-touch"
                  className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 bg-[#121212] text-[#fdfdfc] px-4 py-3 font-mono-code text-xs uppercase tracking-[0.12em] font-semibold hover:bg-[#2c2c2c] transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 bg-[#fdfdfc] text-[#121212] border border-[#121212] px-4 py-3 font-mono-code text-xs uppercase tracking-[0.12em] font-bold hover:bg-[#121212] hover:text-[#fdfdfc] transition-all shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Direct Channels Bar with 44px touch targets */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono-code text-[#444440] pt-3 border-t border-[#e0e0d8]">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-2.5 py-1 hover:text-[#121212] hover:bg-[#e0e0d8]/50 rounded-xs underline font-medium inline-flex items-center gap-1.5 transition-colors"
                  aria-label="Open LinkedIn profile in new tab"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                
                <button
                  onClick={handleCopyEmail}
                  className="min-h-[44px] px-2.5 py-1 hover:text-[#121212] hover:bg-[#e0e0d8]/50 rounded-xs underline cursor-pointer inline-flex items-center gap-1.5 transition-colors"
                  aria-label="Copy email address to clipboard"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? '✓ Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`tel:${personalInfo.phoneMY.replace(/\s+/g, '')}`}
                  className="min-h-[44px] px-2.5 py-1 hover:text-[#121212] hover:bg-[#e0e0d8]/50 rounded-xs underline inline-flex items-center gap-1.5 transition-colors"
                  aria-label="Call Malaysia phone number"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call KL</span>
                </a>
              </div>
            </div>

            {/* Quick Location / Readiness Footer */}
            <div className="mt-4 pt-3 border-t border-[#e0e0d8] flex items-center justify-between text-[0.68rem] font-mono-code text-[#6b6b63]">
              <span>Kuala Lumpur, Malaysia</span>
              <span className="text-[#121212] font-semibold">Open to Remote / Relocation</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


