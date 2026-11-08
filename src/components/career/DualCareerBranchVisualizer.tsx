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
  GraduationCap,
  Zap,
  Activity
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
  metrics: { label: string; value: string; color?: string }[];
  tags: string[];
  category?: 'software' | 'operations' | 'root';
}

/**
 * Lightweight SVG Circular Metric Gauge from /interactive-visualization skill
 * Displays a radial progress arc with stroke-dashoffset animation
 */
const CircularMetricGauge: React.FC<{
  label: string;
  value: string;
  color?: string;
}> = ({ label, value, color = '#f97316' }) => {
  // Derive visual percentage arc from label or value
  let percent = 78;
  const numMatch = value.match(/\d+/);
  if (numMatch) {
    const n = parseInt(numMatch[0], 10);
    if (value.includes('%')) {
      percent = Math.min(100, Math.max(20, n));
    } else if (n >= 300) {
      percent = 96;
    } else if (n >= 70) {
      percent = 88;
    } else if (n >= 20) {
      percent = 82;
    } else {
      percent = Math.min(95, Math.max(30, n * 3));
    }
  }

  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex items-center space-x-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-xl p-2.5 transition-all group">
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="3.5"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="3.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span className="absolute text-[9px] font-mono font-bold text-white group-hover:scale-105 transition-transform">
          {percent}%
        </span>
      </div>
      <div className="min-w-0 pr-1">
        <div className="text-xs sm:text-sm font-bold text-white font-mono truncate" title={value}>
          {value}
        </div>
        <div className="text-[10px] font-mono text-neutral-400 truncate" title={label}>
          {label}
        </div>
      </div>
    </div>
  );
};

export const DualCareerBranchVisualizer: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<CareerBranchType>('both');
  const [selectedMilestone, setSelectedMilestone] = useState<string>('software-current');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const softwareMilestones: Record<string, MilestoneDetail> = {
    'software-current': {
      period: 'Feb 2025 – Present',
      role: 'Enterprise Solutions Architect & Pre-Sales Lead',
      company: 'Self-Employed / Modernization Contractor',
      headline: 'Commercial Pre-Sales, Architecture Roadmapping & Pod Leadership',
      category: 'software',
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
        { label: 'SOWs Closed', value: 'RM 70k+', color: '#00dbe7' },
        { label: 'Apps Modernized', value: '365+', color: '#38bdf8' },
        { label: 'POC Turnaround', value: '72 Hours', color: '#22c55e' },
        { label: 'Account Expansion', value: '+35%', color: '#f59e0b' }
      ],
      tags: ['Pre-Sales Lead', 'SOW Negotiation', 'React 19', 'TypeScript', 'Dataverse', 'AI Orchestration']
    },
    'software-fullstack': {
      period: '2023 – 2025',
      role: 'Lead Full-Stack Web & Mobile Engineer',
      company: 'Independent Commercial Tooling',
      headline: 'High-Impact Logistics, E-Commerce & Business Platforms',
      category: 'software',
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
        { label: 'Platforms Built', value: '5 Live PWAs', color: '#00dbe7' },
        { label: 'Sync Polling', value: 'Zero (Push)', color: '#22c55e' },
        { label: 'Lighthouse Score', value: '98/100', color: '#38bdf8' }
      ],
      tags: ['React Native', 'Expo SDK 54', 'Firebase', 'State Machines', 'Product Ownership']
    },
    'software-initiator': {
      period: '2021 – 2022',
      role: 'Floor Automation & Power Platform Pioneer',
      company: 'Accenture',
      headline: 'Grassroots Engineering & Citizen Developer Catalyst',
      category: 'software',
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
        { label: 'Triage Time', value: '-60%', color: '#22c55e' },
        { label: 'Floor Efficiency', value: '+15%', color: '#00dbe7' }
      ],
      tags: ['Power Apps', 'Power Automate', 'Power BI', 'SQL Analytics', 'Innovation Champion']
    }
  };

  const operationsMilestones: Record<string, MilestoneDetail> = {
    'ops-concentrix': {
      period: 'May 2023 – Apr 2025',
      role: 'Operations Team Leader (QA, Policy & Training)',
      company: 'Concentrix CVG',
      headline: 'Hands-on QA DPR Auditing, Policy Creation, Conducting Training & 34 Reports Across 7 Language Pods',
      category: 'operations',
      promotionBadge: '★ Enterprise Scale Leader',
      leadershipSalesHighlights: [
        'QA DPR & Transaction Auditing: Personally managed and adjudicated QA DPR (Dispute Performance Reports / Daily Performance Reviews), conducted deep-dive transaction audits across live chat and email cases, and led weekly calibration sessions to ensure grading consistency.',
        'Policy Creation & Formulation: Authored and created operational policy documentation, SOPs, and edge-case decision trees for Trust & Safety (content moderation) and Advertising Integrity (Ads Review), converting complex client guidelines into clear frontline action rules.',
        'Direct Training Delivery: Personally conducted new-hire classroom training, nesting phase coaching, and upskilling clinics, preparing incoming specialists across 7 language pods (Indonesian, Chinese, Korean, Japanese, English, Thai, Vietnamese) and elevating 90-day competency from 78% to 94%.',
        'BPO Floor Operations & Team Scale: Commanded 24/7 floor operations scaling headcount by 380% (9 to 34 multilingual associates) in Trust & Safety, Ads Review, and Live Chat/Email, maintaining >98%+ contractual SLA adherence and <5% attrition.',
        'Executive Governance: Presented SLA telemetry, QA compliance ratings, and Six Sigma DMAIC variance analyses during Weekly and Quarterly Business Reviews (WBRs/QBRs) with multinational stakeholders.'
      ],
      techOrOpsHighlights: [
        'Executed Six Sigma DMAIC process controls to reduce Average Handling Time (AHT) by 25%.',
        'Built PulseTrack real-time productivity tracker, eliminating 90% of manual administrative reporting.',
        'Engineered SmartFlow automated intake, reducing manual ticket triage steps by 80% with 90% data accuracy.'
      ],
      metrics: [
        { label: 'Direct Reports', value: '34 Agents', color: '#f59e0b' },
        { label: 'Team Scale', value: '380%', color: '#fb923c' },
        { label: 'SLA Adherence', value: '98%+', color: '#22c55e' },
        { label: 'AHT Reduction', value: '-25%', color: '#eab308' }
      ],
      tags: ['QA DPR & Auditing', 'Policy Creation', 'Training Delivery', 'Trust & Safety', 'Ads Review', 'Live Chat & Email', 'BPO Operations', 'Six Sigma DMAIC']
    },
    'ops-accenture-sr-lead': {
      period: 'Jan 2021 – Nov 2022',
      role: 'Senior Team Lead / Service Delivery Lead',
      company: 'Accenture',
      headline: 'Promoted to Senior Team Lead: Trust & Safety, Ads Integrity, QA/Policy Alignment & Diamond Award',
      category: 'operations',
      promotionBadge: '★ Promoted to Senior Team Lead',
      leadershipSalesHighlights: [
        'Promoted to Senior Team Lead directing cross-functional BPO operations across Trust & Safety, advertising integrity, and multilingual customer support for 25–34 direct reports across 7 global APAC markets.',
        'Partnered cross-functionally with QA auditors, Policy specialists, and SMEs to standardize edge-case resolutions, eliminate quality blind spots, and run structured calibration sessions.',
        'Delivered frontline training modules and nesting mentorship for incoming cohorts, driving first-contact resolution (FCR) improvements and holding team attrition below 5%.',
        'Received the prestigious Hang Tuah Award (July 2021) as top-performing Team Lead and the Accenture Diamond Award for sustained client delivery excellence.'
      ],
      techOrOpsHighlights: [
        'Pioneered Power Platform adoption across the operations floor in 2021 (Power Apps, Power Automate, Power BI), cutting handling costs by 15%.',
        'Cut critical incident triage time by 60% through standardized escalation protocols and data-driven triage tooling.',
        'Led Weekly Business Reviews (WBRs) with multinational stakeholders to eliminate defect outliers.'
      ],
      metrics: [
        { label: 'Team Size', value: '25–34 Reports', color: '#f59e0b' },
        { label: 'Markets Led', value: '7 APAC/Global', color: '#fbbf24' },
        { label: 'Team Retention', value: '<5% Attrition', color: '#22c55e' },
        { label: 'Recognition', value: 'Diamond Award', color: '#38bdf8' }
      ],
      tags: ['Promoted Senior Lead', 'BPO Operations', 'Trust & Safety', 'Ads Review', 'QA Calibration', 'Policy & SME', 'Training Delivery', 'Diamond Award']
    },
    'ops-accenture-lead': {
      period: 'Jun 2019 – Dec 2020',
      role: 'Operations Team Lead',
      company: 'Accenture',
      headline: 'Promoted to Team Lead: High-Stakes Queue Incident Command & SLA Excellence',
      category: 'operations',
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
        { label: 'Direct Reports', value: '20–25 Agents', color: '#f59e0b' },
        { label: 'SLA Compliance', value: '>90%', color: '#22c55e' },
        { label: 'Triage Speed', value: '-60%', color: '#38bdf8' }
      ],
      tags: ['Promoted Team Lead', 'Incident Command', '20–25 Reports', 'WBR Reviews', 'Crisis Governance']
    },
    'ops-accenture-jr-lead': {
      period: 'May 2018 – May 2019',
      role: 'Junior Team Lead (Operations)',
      company: 'Accenture',
      headline: 'Promoted from Analyst: Frontline Floor Management & Rostering Pod Lead',
      category: 'operations',
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
        { label: 'Pod Size', value: '10–15 Agents', color: '#f59e0b' },
        { label: 'FCR Improvement', value: '+18%', color: '#22c55e' },
        { label: 'Promotion Path', value: '9 Months', color: '#38bdf8' }
      ],
      tags: ['Promoted Jr Lead', 'Pod Leadership', 'Rostering', 'FCR +18%', 'Floor Coaching']
    },
    'ops-accenture-analyst': {
      period: 'Aug 2017 – May 2018',
      role: 'Data Analyst — Operations',
      company: 'Accenture',
      headline: 'Ground-Level Analytics: KPI Performance Modeling & Operational Bottleneck Triage',
      category: 'root',
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
        { label: 'Data Tooling', value: 'PL/SQL & Excel', color: '#6366f1' },
        { label: 'Queue Velocity', value: 'Analyzed', color: '#38bdf8' },
        { label: 'Promotion Result', value: 'To Jr Team Lead', color: '#22c55e' }
      ],
      tags: ['Data Analyst', 'PL/SQL', 'KPI Modeling', 'Bottleneck Triage', 'Queue Analytics']
    },
    'ops-thelorry': {
      period: 'Feb 2017 – Aug 2017',
      role: 'Digital Marketing Specialist',
      company: 'TheLorry',
      headline: 'E-Logistics Growth Marketing, Campaign Analytics & Acquisition Funnels',
      category: 'root',
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
        { label: 'Industry', value: 'On-Demand Logistics', color: '#38bdf8' },
        { label: 'Focus', value: 'Funnel Optimization', color: '#f59e0b' },
        { label: 'Foundation', value: 'UUM Honors', color: '#6366f1' }
      ],
      tags: ['Digital Marketing', 'TheLorry', 'Funnel Analytics', 'E-Logistics', 'Growth Strategy']
    },
    'trunk-uum': {
      period: '2013 – 2017',
      role: 'B.Sc. International Business Management (Honours)',
      company: 'Universiti Utara Malaysia (UUM)',
      headline: "5× Dean's List Academic Honors, SRC for International Affairs & President of IBMS",
      category: 'root',
      promotionBadge: '★ Full Academic Scholar',
      leadershipSalesHighlights: [
        'Awarded full academic scholarship based on premier matriculation entrance standing.',
        'Elected to student council leadership committees, organizing cross-campus commercial symposia.',
        'Maintained top academic standing across all 8 semesters, graduating with Second Class Upper Honours (CGPA 3.48).'
      ],
      techOrOpsHighlights: [
        'Minor in International Logistics, supply chain network simulation, and statistical business decision modeling.',
        'Formulated econometrics models, operations research linear programming, and quantitative trade research.',
        'Synthesized foundational analytical discipline directly applied across high-growth startups and enterprise client delivery.'
      ],
      metrics: [
        { label: 'Academic Standing', value: 'CGPA 3.48', color: '#6366f1' },
        { label: 'Dean’s Honors', value: '5x Recipient', color: '#38bdf8' },
        { label: 'Scholarship', value: 'Full Merit', color: '#22c55e' },
        { label: 'Specialization', value: 'Intl Logistics', color: '#f59e0b' }
      ],
      tags: ['UUM Scholar', 'Logistics Minor', 'CGPA 3.48', 'Quantitative Modeling', 'Analytical Foundation']
    }
  };

  const sharedRoot = {
    period: '2013 – 2018',
    role: 'Scholastic & Analytical Foundation (The Common Trunk)',
    institution: 'Universiti Utara Malaysia · TheLorry · Accenture Data Analytics',
    summary: 'The dual-career trunk combines rigorous scholastic training in International Business & Logistics with high-growth startup marketing and enterprise ground-level data analytics.',
    anchors: [
      {
        id: 'trunk-uum',
        title: 'B.Sc. International Business Management (Honours)',
        detail: "Universiti Utara Malaysia (CGPA 3.48, Second Upper Class Honours, Minor in Logistics) · 5× Dean's List Recipient · SRC for International Affairs · President of IBMS · Full RM10k/sem Scholarship (Feb 2014)"
      },
      {
        id: 'ops-thelorry',
        title: 'TheLorry E-Logistics Growth Marketing (2017)',
        detail: 'Commercial digital marketing, customer acquisition funnel optimization, and conversion analytics for Southeast Asia\'s leading logistics tech platform.'
      },
      {
        id: 'ops-accenture-analyst',
        title: 'Enterprise Data Analyst (Accenture & Deloitte)',
        detail: 'PL/SQL data mining, frontline bottleneck analysis, and KPI modeling that earned rapid promotion into leadership within 9 months.'
      }
    ]
  };

  const currentDetail =
    softwareMilestones[selectedMilestone] ||
    operationsMilestones[selectedMilestone] ||
    softwareMilestones['software-current'];

  // SVG Coordinates for the bifurcation nodes
  const nodeCoords: Record<string, { x: number; y: number; label: string; year: string; branch: 'software' | 'operations' | 'root'; color: string }> = {
    'software-current': { x: 170, y: 45, label: 'Enterprise Architect & Pre-Sales', year: '2025–Pres', branch: 'software', color: '#00dbe7' },
    'software-fullstack': { x: 250, y: 110, label: 'Full-Stack Commercial PWAs', year: '2023–25', branch: 'software', color: '#00dbe7' },
    'software-initiator': { x: 340, y: 165, label: 'Power Platform Pioneer', year: '2021–22', branch: 'software', color: '#00dbe7' },
    'ops-concentrix': { x: 770, y: 45, label: 'Operations Team Mgr (34 Reports)', year: '2023–25', branch: 'operations', color: '#f59e0b' },
    'ops-accenture-sr-lead': { x: 680, y: 110, label: 'Senior Team Lead (7 Markets)', year: '2021–22', branch: 'operations', color: '#f59e0b' },
    'ops-accenture-lead': { x: 600, y: 165, label: 'Operations Team Lead', year: '2019–20', branch: 'operations', color: '#f59e0b' },
    'ops-accenture-jr-lead': { x: 520, y: 205, label: 'Junior Team Lead', year: '2018–19', branch: 'operations', color: '#f59e0b' },
    'ops-accenture-analyst': { x: 470, y: 250, label: 'Data Analyst (Accenture)', year: '2017–18', branch: 'root', color: '#6366f1' },
    'ops-thelorry': { x: 470, y: 285, label: 'Growth Marketing (TheLorry)', year: '2017', branch: 'root', color: '#6366f1' },
    'trunk-uum': { x: 470, y: 325, label: 'UUM Logistics (CGPA 3.48)', year: '2013–17', branch: 'root', color: '#6366f1' }
  };

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
      <div className="relative overflow-hidden rounded-2xl bg-[#07090e] border border-[var(--border-subtle)] p-5 sm:p-7 space-y-6">
        
        {/* Branch Overview Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
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
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00dbe7]/10 text-[#00dbe7] border border-[#00dbe7]/20 shrink-0">
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
                  <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-wider">BRANCH 02 · OPERATIONS, QA, POLICY &amp; TRAINING</span>
                  <h3 className="text-sm font-bold text-white">Operations Leadership, QA DPR, Policy &amp; Training</h3>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 shrink-0">
                QA DPR · Policy · Training · 34 Reports
              </span>
            </div>
            <p className="text-xs text-neutral-300 mt-2.5 leading-relaxed">
              Comprehensive BPO leadership not only managing floor operations, but directly handling QA DPR &amp; transaction auditing, authoring operational policies/SOPs, conducting new-hire training academies, and directing Trust &amp; Safety and Ads Review across 7 markets.
            </p>
          </div>
        </div>

        {/* ── Interactive Masterpiece SVG Conduit Tree ── */}
        <div className="relative rounded-xl bg-[#090b10] border border-white/10 p-2 sm:p-4 overflow-x-auto">
          {/* Legend Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-2 text-[11px] font-mono text-neutral-400 border-b border-white/5">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#00dbe7]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00dbe7] inline-block shadow-[0_0_8px_#00dbe7]" />
                <span>Software &amp; Pre-Sales Conduit</span>
              </span>
              <span className="flex items-center gap-1.5 text-[#f59e0b]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] inline-block shadow-[0_0_8px_#f59e0b]" />
                <span>Operations &amp; Leadership Conduit</span>
              </span>
              <span className="flex items-center gap-1.5 text-indigo-400">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
                <span>Analytical Trunk Origin</span>
              </span>
            </div>
            <span className="text-[10px] text-neutral-400">
              💡 Click any node on the tree to inspect evidence telemetry
            </span>
          </div>

          <svg
            className="w-full h-auto min-w-[760px] select-none"
            viewBox="0 0 940 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="trunkConduitGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#4338ca" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#4f46e5" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="softwareConduitGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
                <stop offset="40%" stopColor="#0284c7" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#00dbe7" stopOpacity="1" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="operationsConduitGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
                <stop offset="40%" stopColor="#d97706" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#f59e0b" stopOpacity="1" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="synapseBridgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00dbe7" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
              </linearGradient>

              {/* Glow Filters */}
              <filter id="treeGlowCyan" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="treeGlowAmber" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Horizontal Timeline Grid Horizon Guides */}
            <g opacity="0.18">
              <line x1="60" y1="45" x2="880" y2="45" stroke="#ffffff" strokeDasharray="3 4" strokeWidth="1" />
              <text x="65" y="40" fill="#94a3b8" fontSize="9" fontFamily="monospace">2025 — ACTIVE EXECUTIVE FRONTIER</text>

              <line x1="60" y1="110" x2="880" y2="110" stroke="#ffffff" strokeDasharray="3 4" strokeWidth="1" />
              <text x="65" y="105" fill="#94a3b8" fontSize="9" fontFamily="monospace">2023 — SCALING &amp; COMMERCIAL PRODUCTS</text>

              <line x1="60" y1="165" x2="880" y2="165" stroke="#ffffff" strokeDasharray="3 4" strokeWidth="1" />
              <text x="65" y="160" fill="#94a3b8" fontSize="9" fontFamily="monospace">2021 — FLOOR AUTOMATION &amp; SQUAD COMMAND</text>

              <line x1="60" y1="230" x2="880" y2="230" stroke="#ffffff" strokeDasharray="3 4" strokeWidth="1" />
              <text x="65" y="225" fill="#94a3b8" fontSize="9" fontFamily="monospace">2019 — BIFURCATION POINT (DUAL EXPANSION)</text>

              <line x1="60" y1="325" x2="880" y2="325" stroke="#ffffff" strokeDasharray="3 4" strokeWidth="1" />
              <text x="65" y="320" fill="#94a3b8" fontSize="9" fontFamily="monospace">2013–2018 — SCHOLASTIC &amp; DATA TRUNK</text>
            </g>

            {/* 1. Base Conduit: Central Root Trunk (2013-2018) */}
            <path
              d="M 470 335 L 470 230"
              stroke="url(#trunkConduitGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* 2. Left Branch: Software Architecture & Pre-Sales */}
            <path
              d="M 470 230 C 470 195, 360 185, 340 165 C 300 140, 270 125, 250 110 C 220 85, 190 65, 170 45"
              stroke="url(#softwareConduitGrad)"
              strokeWidth={activeBranch === 'software' || activeBranch === 'both' ? '4.5' : '2'}
              strokeOpacity={activeBranch === 'operations' ? '0.25' : '1'}
              strokeLinecap="round"
            />
            {/* Animated Energy Flow on Software Branch */}
            {(activeBranch === 'software' || activeBranch === 'both') && (
              <path
                d="M 470 230 C 470 195, 360 185, 340 165 C 300 140, 270 125, 250 110 C 220 85, 190 65, 170 45"
                stroke="#00dbe7"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="circuit-energy-flow-cyan"
              />
            )}

            {/* 3. Right Branch: Operations Leadership & Scale */}
            <path
              d="M 470 230 C 475 220, 500 215, 520 205 C 560 190, 580 180, 600 165 C 630 145, 660 130, 680 110 C 715 85, 745 65, 770 45"
              stroke="url(#operationsConduitGrad)"
              strokeWidth={activeBranch === 'operations' || activeBranch === 'both' ? '4.5' : '2'}
              strokeOpacity={activeBranch === 'software' ? '0.25' : '1'}
              strokeLinecap="round"
            />
            {/* Animated Energy Flow on Operations Branch */}
            {(activeBranch === 'operations' || activeBranch === 'both') && (
              <path
                d="M 470 230 C 475 220, 500 215, 520 205 C 560 190, 580 180, 600 165 C 630 145, 660 130, 680 110 C 715 85, 745 65, 770 45"
                stroke="#fbbf24"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="circuit-energy-flow-amber"
              />
            )}

            {/* 4. Cross-Pollination Synapse Bridge (2021 Synergy) */}
            <g opacity={activeBranch === 'both' ? 0.9 : 0.4}>
              <path
                d="M 340 165 C 430 140, 510 140, 600 165"
                stroke="url(#synapseBridgeGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
              <rect x="420" y="134" width="100" height="18" rx="4" fill="#090d16" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
              <text x="470" y="146" fill="#c084fc" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                ⚡ 2021 Synergy Synapse
              </text>
            </g>

            {/* 5. Bifurcation Convergence Hub */}
            <g transform="translate(470, 230)">
              <circle r="12" fill="#090d16" stroke="#3b82f6" strokeWidth="2.5" />
              <circle r="6" fill="#60a5fa" />
            </g>

            {/* 6. Interactive Milestone Nodes */}
            {Object.entries(nodeCoords).map(([key, node]) => {
              const isSelected = selectedMilestone === key;
              const isHovered = hoveredNode === key;
              const isDimmed =
                (activeBranch === 'software' && node.branch === 'operations') ||
                (activeBranch === 'operations' && node.branch === 'software');

              return (
                <g
                  key={key}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer transition-transform"
                  onClick={() => setSelectedMilestone(key)}
                  onMouseEnter={() => setHoveredNode(key)}
                  onMouseLeave={() => setHoveredNode(null)}
                  opacity={isDimmed ? 0.35 : 1}
                >
                  {/* Invisible Hit Target */}
                  <circle r="22" fill="transparent" />

                  {/* Pulsing Beacon for Active Roles */}
                  {(key === 'software-current' || key === 'ops-concentrix') && (
                    <circle
                      r="16"
                      fill={node.color}
                      opacity="0.25"
                      className="animate-ping"
                    />
                  )}

                  {/* Outer Glow Halo on Selection or Hover */}
                  {(isSelected || isHovered) && (
                    <circle
                      r="15"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="2"
                      opacity="0.8"
                      filter={node.branch === 'software' ? 'url(#treeGlowCyan)' : 'url(#treeGlowAmber)'}
                    />
                  )}

                  {/* Main Node Disc */}
                  <circle
                    r={isSelected ? 9 : 7}
                    fill={isSelected ? node.color : '#090d16'}
                    stroke={node.color}
                    strokeWidth={isSelected ? 3 : 2}
                    className="transition-all duration-200"
                  />

                  {/* Inner Node Core */}
                  <circle
                    r={isSelected ? 4 : 2.5}
                    fill={isSelected ? '#090d16' : node.color}
                  />

                  {/* Node Label Text */}
                  <g
                    transform={
                      node.x < 450
                        ? 'translate(-16, -14)' // Left branch: text anchored to right of label
                        : node.x > 490
                        ? 'translate(16, -14)' // Right branch: text anchored to left of label
                        : 'translate(14, 4)'   // Center trunk
                    }
                    textAnchor={node.x < 450 ? 'end' : 'start'}
                  >
                    <text
                      x="0"
                      y="0"
                      fill={isSelected ? '#ffffff' : '#94a3b8'}
                      fontSize="10"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fontFamily="monospace"
                    >
                      {node.year}
                    </text>
                    <text
                      x="0"
                      y="12"
                      fill={isSelected ? node.color : '#cbd5e1'}
                      fontSize="9"
                      fontWeight="bold"
                    >
                      {node.label}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* ── Stepper Node Selection Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* ── Left Column: Software & Pre-Sales Milestones ── */}
          <div className={`space-y-3 ${activeBranch === 'operations' ? 'hidden md:block opacity-35' : ''}`}>
            <div className="flex items-center justify-between text-xs font-mono text-[#00dbe7] px-1 font-semibold">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Software &amp; Pre-Sales Timeline</span>
              </span>
              <span className="text-[10px] bg-[#00dbe7]/10 px-2 py-0.5 rounded border border-[#00dbe7]/20">Active Track</span>
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
                    <span className="text-xs font-mono font-semibold text-[#00dbe7] shrink-0">
                      {isSelected ? '● Inspected' : '○ View'}
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
              <span className="text-[10px] bg-[#f59e0b]/10 px-2 py-0.5 rounded border border-[#f59e0b]/20">Active Track</span>
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
                    <span className="text-xs font-mono font-semibold text-[#f59e0b] shrink-0">
                      {isSelected ? '● Inspected' : '○ View'}
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

        {/* ── Active Milestone Deep-Dive Inspection Panel with Interactive Telemetry Gauges ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMilestone}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-[#0c0f17] border border-white/15 p-6 sm:p-7 space-y-6 shadow-2xl relative overflow-hidden"
          >
            {/* Top ambient glint bar */}
            <div
              className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${
                currentDetail.category === 'software'
                  ? 'from-transparent via-[#00dbe7] to-transparent'
                  : currentDetail.category === 'operations'
                  ? 'from-transparent via-[#f59e0b] to-transparent'
                  : 'from-transparent via-indigo-500 to-transparent'
              }`}
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-accent)] font-bold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[var(--interactive-primary)]" />
                  <span>// DEEP DIVE CREDENTIALS &amp; EVIDENCE TELEMETRY</span>
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {currentDetail.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
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

              {/* Interactive Telemetry Gauges Bento */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {currentDetail.metrics.map((m, idx) => (
                  <CircularMetricGauge
                    key={idx}
                    label={m.label}
                    value={m.value}
                    color={m.color || (currentDetail.category === 'software' ? '#00dbe7' : '#f59e0b')}
                  />
                ))}
              </div>
            </div>

            {/* Evidence Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Leadership & Pre-Sales Achievements */}
              <div className="space-y-3 bg-white/[0.015] border border-white/5 rounded-xl p-4">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#f59e0b] uppercase">
                  <Handshake className="w-4 h-4 text-[#f59e0b]" />
                  <span>Leadership, Commercial &amp; Pre-Sales Impact</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {(currentDetail.leadershipSalesHighlights || []).map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <span className="text-[#f59e0b] mt-0.5 shrink-0 font-bold">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Architecture & Operational Engineering */}
              <div className="space-y-3 bg-white/[0.015] border border-white/5 rounded-xl p-4">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#00dbe7] uppercase">
                  <Workflow className="w-4 h-4 text-[#00dbe7]" />
                  <span>Technical Execution &amp; Systems Architecture</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {currentDetail.techOrOpsHighlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
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
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10 hover:border-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── The Common Academic & Analytical Root (Bottom Anchor) ── */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/20 via-indigo-950/20 to-neutral-900/40 border border-blue-500/20 p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>The Shared Trunk &amp; Analytical Origin (2013–2018)</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">
              UUM Full Scholar · TheLorry · Accenture Analytics
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {sharedRoot.anchors.map((anchor) => (
              <div
                key={anchor.id}
                onClick={() => setSelectedMilestone(anchor.id)}
                className={`bg-black/40 rounded-xl p-3.5 border transition-all cursor-pointer ${
                  selectedMilestone === anchor.id
                    ? 'border-indigo-400 shadow-[0_0_16px_rgba(99,102,241,0.25)]'
                    : 'border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-white">{anchor.title}</h5>
                  <span className="text-[10px] font-mono text-indigo-400 shrink-0 ml-1">
                    {selectedMilestone === anchor.id ? '● Inspected' : '○'}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed mt-1">{anchor.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
