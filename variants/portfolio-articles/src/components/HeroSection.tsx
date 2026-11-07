import React, { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/resumeData';
import { ProfileMode } from '../types';
import { motion } from 'motion/react';
import { MatrixRain } from './MatrixRain';
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
} from 'lucide-react';

interface HeroSectionProps {
  currentMode: ProfileMode;
  onSelectMode: (mode: ProfileMode) => void;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentMode,
  onSelectMode,
  onOpenResumeModal,
  onOpenContactModal,
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

  const getActiveTitle = () => {
    switch (currentMode) {
      case 'architecture':
      case 'architect':
        return personalInfo.titles.architect;
      case 'operations':
        return personalInfo.titles.operations;
      default:
        return personalInfo.titles.hybrid;
    }
  };

  const getDynamicSubtitle = () => {
    if (currentMode === 'architecture' || currentMode === 'architect') {
      return "Enterprise Solution Architecture & Systems Engineering. Specializing in Power Platform, Dataverse relational modeling, C# plugin pipelines, and cross-platform mobile engineering across iOS & Android.";
    }
    if (currentMode === 'operations') {
      return "Operations Leadership & BPO Scaling. Scaling 34-FTE multilingual teams across 7 APAC markets, enforcing >98% SLA benchmarks, and orchestrating intelligent Lark bot workflow automations.";
    }
    return "Architecting the digital shift. Specializing in enterprise-scale modernization, mobile engineering across iOS & Android, and high-impact Lark bot automations.";
  };

  return (
    <section id="home" className="relative pt-10 sm:pt-14 pb-24 sm:pb-28 border-b border-[#e0e0d8] overflow-hidden">
      <MatrixRain className="absolute inset-0 z-0" opacity={0.12} />
      <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-[#e0e0d8]">
        
        {/* Left Column: Hero & Key Statements */}
        <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-12 xl:p-16 pb-14 sm:pb-16 lg:border-r border-[#e0e0d8] flex flex-col justify-center">
          
          {/* Top Label & Perspective Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <span className="label-mono">
              Fullstack Engineer & Architect
            </span>
            <div className="flex items-center gap-1.5 font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Enterprise Engagements</span>
            </div>
          </div>

          {/* Secondary Headline / Intro Greeting with exact spelling */}
          <div className="pt-2">
            <span className="inline-block font-mono-code text-[0.72rem] sm:text-xs uppercase tracking-[0.15em] text-[#121212] font-semibold bg-[#f7f7f0] px-2.5 py-1 border border-[#e0e0d8]">
              HI I AM ALI AKHMAD FAUZIE
            </span>
          </div>

          {/* Large Serif Headline */}
          <motion.h1
            id="hero-name-heading"
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-serif-display italic text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.8rem] font-light leading-[0.88] tracking-[-0.04em] text-[#121212] my-4 sm:my-6"
          >
            Ali Akhmad<br />
            <span className="text-[#121212]">Fauzie</span>
          </motion.h1>

          {/* Subtitle / Focus */}
          <motion.p
            key={`hero-sub-${currentMode}`}
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl font-light text-[#444440] leading-relaxed max-w-2xl mt-2 mb-6"
          >
            {getDynamicSubtitle()}
          </motion.p>

          {/* Dynamic Highlight Banner Based on Active Track */}
          <motion.div
            key={`hero-banner-${currentMode}`}
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            className="mb-8 p-3.5 sm:p-4 rounded-none bg-[#f7f7f0] border border-[#e0e0d8] flex items-center gap-3 text-xs sm:text-sm text-[#121212]"
          >
            <Sparkles className="w-4 h-4 text-[#121212] flex-shrink-0" />
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#444440]">
              {currentMode === 'operations' ? (
                <>
                  <strong className="text-[#0f766e]">Operations Track:</strong> Scaled 34-FTE multilingual BPO squads across 7 APAC markets with &gt;98% SLA and custom Lark bot automations.
                </>
              ) : currentMode === 'architecture' || currentMode === 'architect' ? (
                <>
                  <strong className="text-[#1d4ed8]">Architecture Track:</strong> Modernized 361 legacy Lotus Domino DBs to Dataverse &amp; Power Apps saving MYR 360,000/yr in recurring licensing.
                </>
              ) : (
                <>
                  <strong className="text-[#121212]">Executive Overview:</strong> Enterprise Architecture, Power Platform &amp; Dataverse modernization paired with 34-FTE operational leadership.
                </>
              )}
            </span>
          </motion.div>

          {/* Profile Photo & Developer Accreditations Row */}
          <div className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-[#e0e0d8]">
            {/* Interactive Photo Avatar */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative group cursor-pointer flex items-center gap-4"
              title="Click to change or upload photo"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#e0e0d8] p-1 bg-[#fdfdfc] overflow-hidden relative group-hover:border-[#121212] transition-colors">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#f7f7f0] relative">
                  {!imageLoadError && profilePhoto ? (
                    <img
                      src={profilePhoto}
                      alt="Ali Akhmad Fauzie"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={() => setImageLoadError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono-code text-sm font-bold">
                      {personalInfo.initials}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#121212]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#121212] font-semibold">
                  Ali A. Fauzie
                </span>
                <span className="text-[11px] text-[#6b6b63] font-mono-code">
                  Kuala Lumpur & Bandung
                </span>
                <button
                  type="button"
                  className="text-[10px] font-mono-code text-[#121212] underline mt-1 text-left"
                >
                  Change Photo
                </button>
              </div>
            </div>

            {/* Developer Ecosystem Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono-code text-[0.65rem] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#e0e0d8] bg-[#f7f7f0] text-[#121212]">
                Google Dev (Android/Cloud)
              </span>
              <span className="font-mono-code text-[0.65rem] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#e0e0d8] bg-[#f7f7f0] text-[#121212]">
                Certified Lark Developer
              </span>
              <span className="font-mono-code text-[0.65rem] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#e0e0d8] bg-[#f7f7f0] text-[#121212]">
                Microsoft Power Platform
              </span>
            </div>
          </div>

          {/* Experience Statistics Bar - Hard Business ROI Figures */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 p-5 bg-[#f7f7f0] border border-[#e0e0d8]">
            <div className="stat-item">
              <span className="label-mono block mb-1 text-[#6b6b63]">Licensing ROI</span>
              <h4 className="font-serif-display italic text-2xl sm:text-3xl text-[#1d4ed8] font-normal leading-tight">
                MYR 360K<span className="text-xs font-mono-code text-[#444440]">/yr</span>
              </h4>
              <span className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] block mt-0.5">
                Cost Avoided
              </span>
            </div>

            <div className="stat-item">
              <span className="label-mono block mb-1 text-[#6b6b63]">Scale</span>
              <h4 className="font-serif-display italic text-2xl sm:text-3xl text-[#1d4ed8] font-normal leading-tight">
                361 Forms
              </h4>
              <span className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] block mt-0.5">
                Modernized DBs
              </span>
            </div>

            <div className="stat-item">
              <span className="label-mono block mb-1 text-[#6b6b63]">Leadership</span>
              <h4 className="font-serif-display italic text-2xl sm:text-3xl text-[#0f766e] font-normal leading-tight">
                34 FTE
              </h4>
              <span className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] block mt-0.5">
                &gt;98% SLA Compliance
              </span>
            </div>

            <div className="stat-item">
              <span className="label-mono block mb-1 text-[#6b6b63]">Delivered</span>
              <h4 className="font-serif-display italic text-2xl sm:text-3xl text-[#121212] font-normal leading-tight">
                16+ Apps
              </h4>
              <span className="text-[0.62rem] font-mono-code uppercase tracking-wider text-[#444440] block mt-0.5">
                In Production
              </span>
            </div>
          </div>

          {/* Featured Case Study Rows */}
          <div className="project-list">
            <div className="flex items-center justify-between mb-3">
              <div className="label-mono">Featured Executive Case Studies</div>
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Technical Depth & Leadership Scale
              </span>
            </div>
            
            {/* Case 01 */}
            <a
              href="#projects"
              className="grid grid-cols-12 py-5 border-t border-[#e0e0d8] items-start group hover:bg-[#f7f7f0]/50 transition-colors"
            >
              <div className="col-span-3 sm:col-span-2 label-mono pt-1 text-[#1d4ed8] font-semibold group-hover:text-[#121212]">
                CASE 01
              </div>
              <div className="col-span-6 sm:col-span-7 pr-4">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-light italic text-[#121212] group-hover:translate-x-1 transition-transform">
                  IOI Modernization
                </h3>
                <p className="text-xs sm:text-sm text-[#444440] mt-1 font-light leading-relaxed">
                  Modernizing 361 legacy forms & apps for 2,000+ users via Dataverse & Power Platform. Saved <strong className="font-semibold text-[#1d4ed8]">MYR 360K/yr</strong>.
                </p>
              </div>
              <div className="col-span-3 text-right label-mono pt-1 text-[#121212] font-semibold">
                Solution Arch →
              </div>
            </a>

            {/* Case 02 */}
            <a
              href="#projects"
              className="grid grid-cols-12 py-5 border-t border-b border-[#e0e0d8] items-start group hover:bg-[#f7f7f0]/50 transition-colors"
            >
              <div className="col-span-3 sm:col-span-2 label-mono pt-1 text-[#0f766e] font-semibold group-hover:text-[#121212]">
                CASE 02
              </div>
              <div className="col-span-6 sm:col-span-7 pr-4">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-light italic text-[#121212] group-hover:translate-x-1 transition-transform">
                  Concentrix Scaling
                </h3>
                <p className="text-xs sm:text-sm text-[#444440] mt-1 font-light leading-relaxed">
                  Scaled 34-member multilingual BPO support across 7 regional markets via Lark bot automation with <strong className="font-semibold text-[#0f766e]">&gt;98% SLA</strong>.
                </p>
              </div>
              <div className="col-span-3 text-right label-mono pt-1 text-[#121212] font-semibold">
                BPO Strategy →
              </div>
            </a>
          </div>

        </div>

        {/* Right Column: Details & Interaction Hub */}
        <div className="lg:col-span-5 xl:col-span-4 grid grid-rows-2 bg-[#fdfdfc]">
          
          {/* Detail Block 01: Perspective Selector & Expertise Hub */}
          <div className="p-6 sm:p-10 border-b border-[#e0e0d8] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="label-mono">01 — Candidate Perspective</span>
                <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                  Interactive View Filter
                </span>
              </div>

              {/* Clean Segmented Tab Controller */}
              <div className="space-y-2 mb-6">
                <button
                  onClick={() => onSelectMode('full')}
                  id="hero-perspective-full"
                  className={`w-full p-3 text-left border font-mono-code text-xs transition-all flex items-center justify-between cursor-pointer ${
                    currentMode === 'full' || currentMode === 'hybrid'
                      ? 'bg-[#121212] text-[#fdfdfc] border-[#121212] shadow-sm'
                      : 'bg-[#f7f7f0] text-[#444440] border-[#e0e0d8] hover:border-[#121212] hover:bg-[#ebebe2]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold uppercase tracking-wider text-[0.74rem]">Full Profile</div>
                      <div className={`text-[0.62rem] normal-case font-light ${currentMode === 'full' || currentMode === 'hybrid' ? 'text-[#dcdccb]' : 'text-[#6b6b63]'}`}>
                        Comprehensive Pro-Code, Architecture &amp; Leadership Overview
                      </div>
                    </div>
                  </div>
                  <span className={`text-[0.6rem] font-mono-code uppercase tracking-wider px-2 py-0.5 border ${
                    currentMode === 'full' || currentMode === 'hybrid' ? 'border-[#fdfdfc]/40 text-[#fdfdfc] font-semibold' : 'border-[#e0e0d8] text-[#6b6b63]'
                  }`}>
                    {currentMode === 'full' || currentMode === 'hybrid' ? 'Active' : 'Select'}
                  </span>
                </button>

                <button
                  onClick={() => onSelectMode('architecture')}
                  id="hero-perspective-arch"
                  className={`w-full p-3 text-left border font-mono-code text-xs transition-all flex items-center justify-between cursor-pointer ${
                    currentMode === 'architecture' || currentMode === 'architect'
                      ? 'bg-[#1d4ed8] text-[#fdfdfc] border-[#1d4ed8] shadow-sm'
                      : 'bg-[#f7f7f0] text-[#444440] border-[#e0e0d8] hover:border-[#1d4ed8] hover:bg-[#ebebe2]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold uppercase tracking-wider text-[0.74rem]">Architecture &amp; Solution Engineering</div>
                      <div className={`text-[0.62rem] normal-case font-light ${currentMode === 'architecture' || currentMode === 'architect' ? 'text-blue-100' : 'text-[#6b6b63]'}`}>
                        Dataverse, C# Plugins, Power Platform &amp; Mobile App Engineering
                      </div>
                    </div>
                  </div>
                  <span className={`text-[0.6rem] font-mono-code uppercase tracking-wider px-2 py-0.5 border ${
                    currentMode === 'architecture' || currentMode === 'architect' ? 'border-[#fdfdfc]/40 text-[#fdfdfc] font-semibold' : 'border-[#e0e0d8] text-[#6b6b63]'
                  }`}>
                    {currentMode === 'architecture' || currentMode === 'architect' ? 'Active' : 'Select'}
                  </span>
                </button>

                <button
                  onClick={() => onSelectMode('operations')}
                  id="hero-perspective-ops"
                  className={`w-full p-3 text-left border font-mono-code text-xs transition-all flex items-center justify-between cursor-pointer ${
                    currentMode === 'operations'
                      ? 'bg-[#0f766e] text-[#fdfdfc] border-[#0f766e] shadow-sm'
                      : 'bg-[#f7f7f0] text-[#444440] border-[#e0e0d8] hover:border-[#0f766e] hover:bg-[#ebebe2]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold uppercase tracking-wider text-[0.74rem]">Operations &amp; Leadership</div>
                      <div className={`text-[0.62rem] normal-case font-light ${currentMode === 'operations' ? 'text-teal-100' : 'text-[#6b6b63]'}`}>
                        34-FTE Multilingual BPO, SLA &gt;98%, Lark Bot Automation
                      </div>
                    </div>
                  </div>
                  <span className={`text-[0.6rem] font-mono-code uppercase tracking-wider px-2 py-0.5 border ${
                    currentMode === 'operations' ? 'border-[#fdfdfc]/40 text-[#fdfdfc] font-semibold' : 'border-[#e0e0d8] text-[#6b6b63]'
                  }`}>
                    {currentMode === 'operations' ? 'Active' : 'Select'}
                  </span>
                </button>
              </div>

              <div>
                <span className="label-mono block mb-2 text-[#121212]">
                  Core Tech &amp; Platforms
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Power Platform', 'Dataverse', 'C# Plugins', 'TypeScript', 'React Native', 'Kotlin', 'Swift', 'Azure DevOps', 'Six Sigma'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-[#e0e0d8] text-[0.68rem] font-mono-code text-[#444440] bg-[#f7f7f0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#e0e0d8] text-[0.68rem] font-mono-code text-[#6b6b63] flex items-center justify-between">
              <span>Active Track:</span>
              <strong className="text-[#121212] uppercase font-semibold">
                {currentMode === 'architecture' || currentMode === 'architect'
                  ? 'Architecture & Solution Engineering'
                  : currentMode === 'operations'
                  ? 'Operations & Leadership'
                  : 'Full Profile'}
              </strong>
            </div>
          </div>

          {/* Detail Block 02: Executive Direct Actions */}
          <div className="p-6 sm:p-10 pb-20 sm:pb-24 lg:pb-10 bg-[#f7f7f0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="label-mono">02 — Direct Engagement</span>
                <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-emerald-700 font-medium">
                  Open for Senior Roles
                </span>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-[#444440] leading-relaxed font-light">
                Available for Enterprise Solution Architecture, Power Platform & M365 Modernization programs, and Operations/Delivery Leadership.
              </p>

              {/* High-Contrast Action Buttons for Hiring Managers */}
              <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#contact"
                  id="hero-cta-get-in-touch"
                  className="inline-flex items-center justify-center gap-2 bg-[#121212] text-[#fdfdfc] px-5 py-3.5 font-mono-code text-xs uppercase tracking-[0.12em] font-semibold hover:bg-[#2c2c2c] transition-colors shadow-sm"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenResumeModal}
                  id="hero-cta-cv-direct"
                  className="inline-flex items-center justify-center gap-2 bg-[#fdfdfc] text-[#121212] border-2 border-[#121212] px-5 py-3.5 font-mono-code text-xs uppercase tracking-[0.12em] font-bold hover:bg-[#121212] hover:text-[#fdfdfc] transition-all cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Executive CV</span>
                </button>
              </div>

              {/* Direct Channels Bar */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono-code text-[#444440] pt-4 border-t border-[#e0e0d8]">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#121212] underline font-medium"
                >
                  LinkedIn Profile
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-[#121212] underline cursor-pointer"
                >
                  {copiedEmail ? '✓ Copied' : 'Copy Email'}
                </button>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#121212] underline"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${personalInfo.phoneMY.replace(/\s+/g, '')}`}
                  className="hover:text-[#121212] underline"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Quick Executive Reference */}
            <div className="mt-4 pt-4 border-t border-[#e0e0d8] flex items-center justify-between text-[0.68rem] font-mono-code text-[#6b6b63]">
              <span>Location: KL, Malaysia (Open to Remote / Relo)</span>
              <span className="text-[#121212] font-semibold">Verified Track Record</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

