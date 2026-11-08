import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GitBranch,
  Code2,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Handshake,
  DollarSign,
  Workflow,
  GraduationCap
} from 'lucide-react';

export type CareerBranchType = 'both' | 'software' | 'operations';

interface MilestoneDetail {
  period: string;
  role: string;
  company: string;
  headline: string;
  promotionBadge?: string;
  leadershipSalesHighlights?: string[];
  techOrOpsHighlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export const DualCareerBranchVisualizer: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<CareerBranchType>('both');
  const [selectedMilestone, setSelectedMilestone] = useState<string>('software-current');

  const softwareMilestones: Record<string, MilestoneDetail> = {
    'software-current': {
      period: 'Feb 2025 – Present',
      role: 'Enterprise Solutions Architect & Pre-Sales Lead',
      company: 'Self-Employed / Modernization Contractor',
      headline: 'Commercial Pre-Sales, Architecture Roadmapping & Pod Leadership',
      leadershipSalesHighlights: [
        'Closed RM 70,000+ in signed Statements of Work (SOW) by pitching rapid interactive prototypes to executive buyers.',
        'Led a 3-person specialized engineering pod; owned sprint milestones, billable burn rates, and QA delivery.',
        'Accelerated enterprise sales velocity by delivering production-grade POCs in 72 hours, reducing sales cycles by 2 weeks.',
        'Expanded account contract value by 35% through continuous workflow integration and retainer automation support.'
      ],
      techOrOpsHighlights: [
        'Architected 365+ legacy Lotus Domino form cutovers into Dataverse, SharePoint, and React 19 apps across 28 BUs.',
        'Engineered an orchestration pipeline with 50+ specialized AI agents and 12 CI/CD automation pipelines.',
        'Enforced zero-trust Dataverse security roles, polymorphic lookups, and Field-Level Security.'
      ],
      metrics: [
        { label: 'SOWs Closed', value: 'RM 70k+' },
        { label: 'Apps Modernized', value: '365+' },
        { label: 'POC Turnaround', value: '72 Hours' },
        { label: 'Account Expansion', value: '+35%' }
      ],
      tags: ['Pre-Sales Lead', 'SOW Negotiation', 'React 19', 'TypeScript', 'Dataverse', 'AI Orchestration']
    },
    'software-fullstack': {
      period: '2023 – 2025',
      role: 'Lead Full-Stack Web & Mobile Engineer',
      company: 'Independent Commercial Tooling',
      headline: 'High-Impact Logistics, E-Commerce & Business Platforms',
      leadershipSalesHighlights: [
        'Direct client stakeholder alignment for wholesale merchants, retail salons, and regional Jastip operators.',
        'Conducted user research, pricing model validation, and commercial MVP scoping.'
      ],
      techOrOpsHighlights: [
        'SaltDistribute: Built dual-platform wholesale logistics system (React Native Expo 54 + PWA) with Firestore zero-polling sync.',
        'Warung Dewasa: Architected headless E-Commerce PWA with compositor-threaded 60fps animations and Nominatim COD geocoding.',
        'Jastip CRM: Engineered state-machine order flow, multi-currency expense ledger, and Gemini multimodal receipt OCR.'
      ],
      metrics: [
        { label: 'Platforms Built', value: '5 Live PWAs' },
        { label: 'Sync Polling', value: 'Zero (Push)' },
        { label: 'Lighthouse Score', value: '98/100' }
      ],
      tags: ['React Native', 'Expo SDK 54', 'Firebase', 'State Machines', 'Product Ownership']
    },
    'software-initiator': {
      period: '2021 – 2022',
      role: 'Floor Automation & Power Platform Pioneer',
      company: 'Accenture',
      headline: 'Grassroots Engineering & Citizen Developer Catalyst',
      leadershipSalesHighlights: [
        'Championed no-code/low-code innovation to senior service delivery directors, proving 15% immediate operational gain.',
        'Trained junior team members to adopt automated triage tools, establishing internal engineering champion network.'
      ],
      techOrOpsHighlights: [
        'Pioneered Power Platform adoption across the operations floor in 2021.',
        'Engineered SharePoint-backed incident logs, Power Automate escalation flows, and live Power BI executive dashboards.',
        'Cut incident triage duration by 60% through structured automated routing.'
      ],
      metrics: [
        { label: 'Triage Time', value: '-60%' },
        { label: 'Floor Efficiency', value: '+15%' }
      ],
      tags: ['Power Apps', 'Power Automate', 'Power BI', 'SQL Analytics', 'Innovation Champion']
    }
  };

  const operationsMilestones: Record<string, MilestoneDetail> = {
    'ops-concentrix': {
      period: 'May 2023 – Apr 2025',
      role: 'Operations Team Leader',
      company: 'Concentrix CVG',
      headline: 'Team Scaling (9→34 Multilingual Agents), Shift Rostering & 98%+ Contractual SLA',
      promotionBadge: '★ Enterprise Scale Leader',
      leadershipSalesHighlights: [
        'Owned end-to-end people management, coaching, rotational rostering, and career development for 34 direct reports across 7 international markets.',
        'Scaled operational team headcount by 380% within 18 months while maintaining low attrition and high CSAT.',
        'Presented weekly operational telemetry and SLA performance in Client Business Reviews (QBRs).'
      ],
      techOrOpsHighlights: [
        'Executed Six Sigma DMAIC process controls to reduce Average Handling Time (AHT) by 25%.',
        'Built PulseTrack real-time productivity tracker, eliminating 90% of manual administrative reporting.',
        'Engineered SmartFlow automated intake, reducing manual ticket triage steps by 80% with 90% data accuracy.'
      ],
      metrics: [
        { label: 'Direct Reports', value: '34 Agents' },
        { label: 'Team Scale', value: '380%' },
        { label: 'SLA Adherence', value: '98%+' },
        { label: 'AHT Reduction', value: '-25%' }
      ],
      tags: ['Operations Lead', '34 Direct Reports', 'Six Sigma DMAIC', 'Team Scaling', 'SLA Governance']
    },
    'ops-accenture-sr-lead': {
      period: 'Jan 2021 – Nov 2022',
      role: 'Senior Team Lead / Service Delivery Lead',
      company: 'Accenture',
      headline: 'Promoted to Senior Team Lead: 25–34 Members, Power Platform Adoption & Diamond Award',
      promotionBadge: '★ Promoted to Senior Team Lead',
      leadershipSalesHighlights: [
        'Promoted to Senior Team Lead; directed customer support and service delivery operations across 7 global APAC markets.',
        'Maintained annualized team attrition below 5% through structured 1-on-1 coaching, QA audit loops, and career progression ladders.',
        'Received the prestigious Hang Tuah Award (July 2021) as top-performing Team Lead and the Accenture Diamond Award for sustained client delivery excellence.'
      ],
      techOrOpsHighlights: [
        'Pioneered Power Platform adoption across the operations floor in 2021 (Power Apps, Power Automate, Power BI), cutting handling costs by 15%.',
        'Cut critical incident triage time by 60% through standardized escalation protocols and data-driven triage tooling.',
        'Led Weekly Business Reviews (WBRs) with multinational stakeholders to eliminate defect outliers.'
      ],
      metrics: [
        { label: 'Team Size', value: '25–34 Reports' },
        { label: 'Markets Led', value: '7 APAC/Global' },
        { label: 'Team Retention', value: '<5% Attrition' },
        { label: 'Recognition', value: 'Diamond Award' }
      ],
      tags: ['Promoted Senior Lead', 'Power Platform', 'Incident Command', 'Diamond Award', '7 Markets']
    },
    'ops-accenture-lead': {
      period: 'Jun 2019 – Dec 2020',
      role: 'Operations Team Lead',
      company: 'Accenture',
      headline: 'Promoted to Team Lead: High-Stakes Queue Incident Command & SLA Excellence',
      promotionBadge: '★ Promoted to Team Lead',
      leadershipSalesHighlights: [
        'Promoted from Junior Team Lead to full Operations Team Lead, managing 20–25 direct reports handling high-stakes escalations.',
        'Commanded high-stakes incident management during major queue disruptions, establishing rapid root-cause escalation paths.',
        'Won 3× consecutive Best Operations Team Lead Awards (Feb, Mar, Apr 2019) for top monthly performance across all floor squads.',
        'Owned client SLA targets, achieving consistent >90% compliance across international queues.'
      ],
      techOrOpsHighlights: [
        'Reduced queue triage time by 60% through structured escalation playbooks.',
        'Led root-cause problem solving and quality calibration sessions with frontline associates.',
        'Managed shift handover governance and rotational capacity planning.'
      ],
      metrics: [
        { label: 'Direct Reports', value: '20–25 Agents' },
        { label: 'SLA Compliance', value: '>90%' },
        { label: 'Triage Speed', value: '-60%' }
      ],
      tags: ['Promoted Team Lead', 'Incident Command', '20–25 Reports', 'WBR Reviews', 'Crisis Governance']
    },
    'ops-accenture-jr-lead': {
      period: 'May 2018 – May 2019',
      role: 'Junior Team Lead (Operations)',
      company: 'Accenture',
      headline: 'Promoted from Analyst: Frontline Floor Management & Rostering Pod Lead',
      promotionBadge: '★ Promoted from Data Analyst',
      leadershipSalesHighlights: [
        'Earned accelerated merit promotion from Data Analyst to Junior Team Lead within 9 months.',
        'Managed frontline operations and rotational shift rostering for a pod of 10–15 customer support specialists.',
        'Supervised real-time schedule adherence and break rotations to prevent queue abandonment during peak volume spikes.',
        'Awarded the Best People Award during the September 2018 Quarterly Business Review (QBR) for excellence in team mentoring and morale.'
      ],
      techOrOpsHighlights: [
        'Conducted weekly 1-on-1 coaching sessions and quality audits, improving first-contact resolution (FCR) by 18%.',
        'Trained newly onboarded support specialists on standard operating procedures (SOPs).',
        'Tracked daily agent utilization and resolution velocity metrics.'
      ],
      metrics: [
        { label: 'Pod Size', value: '10–15 Agents' },
        { label: 'FCR Improvement', value: '+18%' },
        { label: 'Promotion Path', value: '9 Months' }
      ],
      tags: ['Promoted Jr Lead', 'Pod Leadership', 'Rostering', 'FCR +18%', 'Floor Coaching']
    },
    'ops-accenture-analyst': {
      period: 'Aug 2017 – May 2018',
      role: 'Data Analyst — Operations',
      company: 'Accenture',
      headline: 'Ground-Level Analytics: KPI Performance Modeling & Operational Bottleneck Triage',
      promotionBadge: '★ Operations Analytics',
      leadershipSalesHighlights: [
        'Collaborated directly with service delivery leads and account directors to translate raw queue data into actionable operational insights.',
        'Identified critical frontline bottlenecks and presented data-driven recommendations during internal governance meetings.'
      ],
      techOrOpsHighlights: [
        'Constructed daily, weekly, and monthly operational performance models analyzing customer support KPIs with PL/SQL and Excel.',
        'Modeled resolution velocity, agent utilization, and queue arrival patterns to improve capacity forecasting.',
        'Demonstrated high-velocity execution and analytical leadership that directly secured promotion to Junior Team Lead.'
      ],
      metrics: [
        { label: 'Data Tooling', value: 'PL/SQL & Excel' },
        { label: 'Queue Velocity', value: 'Analyzed' },
        { label: 'Promotion Result', value: 'To Jr Team Lead' }
      ],
      tags: ['Data Analyst', 'PL/SQL', 'KPI Modeling', 'Bottleneck Triage', 'Queue Analytics']
    },
    'ops-thelorry': {
      period: 'Feb 2017 – Aug 2017',
      role: 'Digital Marketing Specialist',
      company: 'TheLorry',
      headline: 'E-Logistics Growth Marketing, Campaign Analytics & Acquisition Funnels',
      promotionBadge: '★ Career Launch (Post-Grad)',
      leadershipSalesHighlights: [
        'Spearheaded digital marketing campaigns and cross-functional acquisition strategies for Malaysia’s premier on-demand logistics platform.',
        'Collaborated with regional operations, product teams, and driver-partner acquisition leads to optimize growth campaigns.'
      ],
      techOrOpsHighlights: [
        'Analyzed customer acquisition funnels, channel conversion rates, and paid ad spend to optimize customer acquisition cost (CAC).',
        'Tracked driver-partner signups and logistics customer booking retention cohorts using web analytics.',
        'Applied university background in International Business & Logistics to digital commercialization.'
      ],
      metrics: [
        { label: 'Industry', value: 'On-Demand Logistics' },
        { label: 'Focus', value: 'Funnel Optimization' },
        { label: 'Foundation', value: 'UUM Honors' }
      ],
      tags: ['Digital Marketing', 'TheLorry', 'Funnel Analytics', 'E-Logistics', 'Growth Strategy']
    }
  };

  const sharedRoot = {
    period: '2013 – 2018',
    role: 'Scholastic & Analytical Foundation (The Common Trunk)',
    institution: 'Universiti Utara Malaysia · TheLorry · Accenture Data Analytics',
    summary: 'The dual-career trunk combines rigorous scholastic training in International Business & Logistics with high-growth startup marketing and enterprise ground-level data analytics.',
    anchors: [
      {
        title: 'B.Sc. International Business Management (Honours)',
        detail: 'Universiti Utara Malaysia (CGPA 3.48, Second Upper Class Honours, Minor in Logistics) · Full UUM Scholarship Recipient · 5x Dean\'s Academic Honors Award.'
      },
      {
        title: 'TheLorry E-Logistics Growth Marketing (2017)',
        detail: 'Commercial digital marketing, customer acquisition funnel optimization, and conversion analytics for Southeast Asia\'s leading logistics tech platform.'
      },
      {
        title: 'Enterprise Data Analyst (Accenture & Deloitte)',
        detail: 'PL/SQL data mining, frontline bottleneck analysis, and KPI modeling that earned rapid promotion into leadership within 9 months.'
      }
    ]
  };

  const currentDetail =
    softwareMilestones[selectedMilestone] ||
    operationsMilestones[selectedMilestone] ||
    softwareMilestones['software-current'];

  return (
    <div className="space-y-8 rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 shadow-[var(--shadow-card)]">
      
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--interactive-subtle-bg)] border border-[var(--interactive-subtle-border)] text-xs font-mono text-[var(--text-accent)] font-semibold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5 text-[var(--interactive-primary)]" />
            <span>Dual-Track Career Evolution Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Two Distinct Pillars, One Unified Solution Leader
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Unlike traditional developers who lack commercial acumen or managers who cannot code, my career grew from a shared analytical root into two powerful specialized branches.
          </p>
        </div>

        {/* Interactive Track Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-[var(--radius-sm)] bg-[#090a0d] border border-[var(--border-subtle)] shrink-0 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveBranch('both')}
            className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono font-medium transition-all cursor-pointer ${
              activeBranch === 'both'
                ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-md'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            🌳 Synchronized View
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveBranch('software');
              if (!selectedMilestone.startsWith('software')) setSelectedMilestone('software-current');
            }}
            className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono font-medium transition-all cursor-pointer ${
              activeBranch === 'software'
                ? 'bg-[#00dbe7] text-[#090a0d] font-bold shadow-md'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            ⚡ Software &amp; Pre-Sales
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveBranch('operations');
              if (!selectedMilestone.startsWith('ops')) setSelectedMilestone('ops-concentrix');
            }}
            className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono font-medium transition-all cursor-pointer ${
              activeBranch === 'operations'
                ? 'bg-[#f59e0b] text-[#090a0d] font-bold shadow-md'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            👥 Operations &amp; Team Lead
          </button>
        </div>
      </div>

      {/* ── Interactive SVG Bifurcation Tree Visualization ── */}
      <div className="relative overflow-hidden rounded-2xl bg-[#07090e] border border-[var(--border-subtle)] p-6 sm:p-8">
        
        {/* Branch Overview Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
          {/* Branch A Header Card */}
          <div
            onClick={() => {
              setActiveBranch('software');
              setSelectedMilestone('software-current');
            }}
            className={`rounded-xl p-4 border transition-all cursor-pointer ${
              activeBranch === 'software' || activeBranch === 'both'
                ? 'bg-gradient-to-br from-[#00dbe7]/10 via-transparent to-transparent border-[#00dbe7]/40 shadow-[0_0_24px_rgba(0,219,231,0.12)]'
                : 'bg-white/[0.01] border-white/5 opacity-40 hover:opacity-80'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#00dbe7]/15 border border-[#00dbe7]/30 flex items-center justify-center text-[#00dbe7]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#00dbe7] uppercase tracking-wider">BRANCH 01 · TECH &amp; COMMERCIAL</span>
                  <h3 className="text-sm font-bold text-white">Software Architecture, Delivery &amp; Pre-Sales</h3>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00dbe7]/10 text-[#00dbe7] border border-[#00dbe7]/20">
                RM70k+ SOWs · 365+ Apps
              </span>
            </div>
            <p className="text-xs text-neutral-300 mt-2.5 leading-relaxed">
              Full-stack React 19/TypeScript engineering, Dataverse security architecture, and AI-enabled delivery, anchored by commercial client discovery, scoping, and rapid 72-hour POCs.
            </p>
          </div>

          {/* Branch B Header Card */}
          <div
            onClick={() => {
              setActiveBranch('operations');
              setSelectedMilestone('ops-concentrix');
            }}
            className={`rounded-xl p-4 border transition-all cursor-pointer ${
              activeBranch === 'operations' || activeBranch === 'both'
                ? 'bg-gradient-to-br from-[#f59e0b]/10 via-transparent to-transparent border-[#f59e0b]/40 shadow-[0_0_24px_rgba(245,158,11,0.12)]'
                : 'bg-white/[0.01] border-white/5 opacity-40 hover:opacity-80'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-wider">BRANCH 02 · LEADERSHIP &amp; SCALE</span>
                  <h3 className="text-sm font-bold text-white">Operations Leadership &amp; BPO Scaling</h3>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                34 Reports · 380% Growth
              </span>
            </div>
            <p className="text-xs text-neutral-300 mt-2.5 leading-relaxed">
              Leading high-velocity international teams across 7 global markets, managing capacity from 9 to 34 agents, ensuring 98%+ SLA compliance, and driving Six Sigma DMAIC continuous improvement.
            </p>
          </div>
        </div>

        {/* Dynamic Branch Diagram (Interactive SVG Conduit) */}
        <div className="relative py-4">
          <svg
            className="w-full h-28 hidden sm:block pointer-events-none"
            viewBox="0 0 800 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="branchSoftGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#00dbe7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <linearGradient id="branchOpsGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
              <radialGradient id="rootPulse" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Central Root Trunk */}
            <path
              d="M 400 115 L 400 70"
              stroke="#3b82f6"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Left Branch: Software Architecture */}
            <path
              d="M 400 70 C 400 40, 200 45, 200 10"
              stroke="url(#branchSoftGrad)"
              strokeWidth={activeBranch === 'software' || activeBranch === 'both' ? '4' : '2'}
              strokeDasharray={activeBranch === 'operations' ? '4 4' : 'none'}
              strokeLinecap="round"
            />
            {/* Right Branch: Operations Leadership */}
            <path
              d="M 400 70 C 400 40, 600 45, 600 10"
              stroke="url(#branchOpsGrad)"
              strokeWidth={activeBranch === 'operations' || activeBranch === 'both' ? '4' : '2'}
              strokeDasharray={activeBranch === 'software' ? '4 4' : 'none'}
              strokeLinecap="round"
            />

            {/* Root Hub Node */}
            <circle cx="400" cy="115" r="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
            <circle cx="400" cy="70" r="7" fill="#2563eb" />

            {/* Branch Tip Nodes */}
            <circle cx="200" cy="10" r="7" fill="#00dbe7" className="animate-pulse" />
            <circle cx="600" cy="10" r="7" fill="#f59e0b" className="animate-pulse" />
          </svg>

          {/* Stepper Node Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* ── Left Column: Software & Pre-Sales Milestones ── */}
            <div className={`space-y-3 ${activeBranch === 'operations' ? 'hidden md:block opacity-35' : ''}`}>
              <div className="flex items-center justify-between text-xs font-mono text-[#00dbe7] px-1 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Software &amp; Pre-Sales Timeline</span>
                </span>
                <span>Active Track</span>
              </div>

              {Object.entries(softwareMilestones).map(([key, item]) => {
                const isSelected = selectedMilestone === key;
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedMilestone(key)}
                    className={`rounded-xl p-4 border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#00dbe7]/10 border-[#00dbe7] shadow-[0_0_20px_rgba(0,219,231,0.2)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#00dbe7] bg-[#00dbe7]/10 px-2 py-0.5 rounded">
                            {item.period}
                          </span>
                          <span className="text-xs font-semibold text-neutral-300">{item.company}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white mt-1">{item.role}</h4>
                        {item.promotionBadge && (
                          <span className="inline-block px-1.5 py-0.5 mt-1 rounded text-[10px] font-mono font-semibold bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
                            {item.promotionBadge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#00dbe7]">
                        {isSelected ? '● Selected' : '○ View'}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-snug">
                      {item.headline}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* ── Right Column: Operations Leadership Milestones ── */}
            <div className={`space-y-3 ${activeBranch === 'software' ? 'hidden md:block opacity-35' : ''}`}>
              <div className="flex items-center justify-between text-xs font-mono text-[#f59e0b] px-1 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Operations &amp; Leadership Timeline</span>
                </span>
                <span>Active Track</span>
              </div>

              {Object.entries(operationsMilestones).map(([key, item]) => {
                const isSelected = selectedMilestone === key;
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedMilestone(key)}
                    className={`rounded-xl p-4 border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#f59e0b]/10 border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-0.5 rounded">
                            {item.period}
                          </span>
                          <span className="text-xs font-semibold text-neutral-300">{item.company}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white mt-1">{item.role}</h4>
                        {item.promotionBadge && (
                          <span className="inline-block px-1.5 py-0.5 mt-1 rounded text-[10px] font-mono font-semibold bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
                            {item.promotionBadge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#f59e0b]">
                        {isSelected ? '● Selected' : '○ View'}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-snug">
                      {item.headline}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ── Active Milestone Deep-Dive Inspection Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMilestone}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-6 rounded-2xl bg-[#0c0f17] border border-white/15 p-6 space-y-6 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-accent)] font-bold">
                  // DEEP DIVE CREDENTIALS &amp; EVIDENCE
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {currentDetail.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <p className="text-xs text-[#00dbe7] font-mono">
                    {currentDetail.company} · {currentDetail.period}
                  </p>
                  {currentDetail.promotionBadge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
                      {currentDetail.promotionBadge}
                    </span>
                  )}
                </div>
              </div>

              {/* Metric Counters Bento */}
              <div className="flex flex-wrap items-center gap-2">
                {currentDetail.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-lg px-3 py-1.5 text-center">
                    <p className="text-xs sm:text-sm font-bold text-white font-mono">{m.value}</p>
                    <p className="text-[10px] font-mono text-neutral-400">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Leadership & Pre-Sales Achievements (Guaranteed display across all roles) */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#f59e0b] uppercase">
                  <Handshake className="w-4 h-4" />
                  <span>Leadership, Commercial &amp; Pre-Sales Impact</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {(currentDetail.leadershipSalesHighlights || []).map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#f59e0b] mt-0.5 shrink-0 font-bold">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Architecture & Operational Engineering */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#00dbe7] uppercase">
                  <Workflow className="w-4 h-4" />
                  <span>Technical Execution &amp; Systems Architecture</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {currentDetail.techOrOpsHighlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#00dbe7] mt-0.5 shrink-0 font-bold">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Tag Pills */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              {currentDetail.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── The Common Academic & Analytical Root (Bottom Anchor) ── */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-950/20 via-indigo-950/20 to-neutral-900/40 border border-blue-500/20 p-5 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>The Shared Trunk &amp; Analytical Origin</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {sharedRoot.anchors.map((anchor, aIdx) => (
              <div key={aIdx} className="bg-black/40 rounded-xl p-3 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white">{anchor.title}</h5>
                <p className="text-[11px] text-neutral-400 leading-relaxed">{anchor.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
