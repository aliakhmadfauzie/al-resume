export interface ResumeExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  bulletPoints: string[];
}

export interface ResumeProjectItem {
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface ResumePersonaData {
  id: 'software' | 'operations' | 'both';
  label: string;
  pdfFilename: string;
  pdfDownloadUrl: string;
  nameLine: string;
  headline: string;
  contactLine: string;
  linkedInUrl: string;
  summary: string;
  skillsHeader: string;
  skillsColumn1: string[];
  skillsColumn2: string[];
  experiences: ResumeExperienceItem[];
  projectsHeader: string;
  projects: ResumeProjectItem[];
  languages: string[];
  education: {
    period: string;
    degree: string;
    school: string;
    location: string;
    highlights: string[];
  };
  certifications: string[];
}

// INVARIANT FREELANCE EXPERIENCE: 100% UNTOUCHED ORIGINAL ACROSS ALL 3 PROFILES
const INVARIANT_FREELANCE_EXPERIENCE: ResumeExperienceItem = {
  period: "Feb 2025 — Present",
  role: "Enterprise Solutions Architect & Pre-Sales Lead",
  company: "Self-Employed / Independent Contractor",
  location: "Remote",
  bulletPoints: [
    "Closed RM 70,000+ in signed SOWs by converting discovery sessions into delivery contracts using rapid React/TypeScript prototypes and Dataverse architectures.",
    "Led a 3-person technical pod; managed sprint milestones, billable capacity, and QA to deliver client solutions on schedule with no scope overruns.",
    "Scoped and secured executive sign-off for modernization of 365+ legacy applications across 28 business units to Microsoft 365/SharePoint/Dataverse, defining a phased commercial roadmap.",
    "Expanded account value by 35% through workflow optimization and cross-selling integrations and ongoing automation support while sustaining 30–35% project margins.",
    "Accelerated sales velocity by delivering working POCs within 72 hours, shortening enterprise sales cycles by ~2 weeks."
  ]
};

const COMMON_EDUCATION = {
  period: "2013 — 2017",
  degree: "Bachelor of International Business Management (Honours)",
  school: "Universiti Utara Malaysia",
  location: "Sintok, Kedah, Malaysia",
  highlights: [
    "Full Merit International Scholarship Recipient",
    "3-Time Dean's Academic List Award",
    "Special Leadership Award"
  ]
};

const COMMON_LANGUAGES = [
  "Bahasa Indonesia (Native)",
  "Bahasa Melayu (Fluent)",
  "English (Professional Working)"
];

const COMMON_CERTIFICATIONS = [
  "Six Sigma: Green Belt (DMAIC)",
  "Microsoft Certified: Power Platform Functional Architecture (PL-200)",
  "Microsoft Certified: PL-600 Solution Architect Candidate",
  "Project & Portfolio Management Foundations",
  "Career Essentials in Generative AI (Microsoft & LinkedIn)",
  "Generative AI for Business Leaders"
];

export const RESUME_PERSONA_DATA: Record<'software' | 'operations' | 'both', ResumePersonaData> = {
  // 1. OPERATIONS TEAM LEADER PROFILE (Matches attached PDF format, Managerial Skills First)
  operations: {
    id: 'operations',
    label: 'Operations Team Leader',
    pdfFilename: 'Ali_Akhmad_Fauzie_Operations_Team_Leader_Resume.pdf',
    pdfDownloadUrl: '/assets/profile/Ali_Akhmad_Fauzie_Operations_Team_Leader_Resume.pdf',
    nameLine: 'Ali Akhmad Fauzie',
    headline: 'Team Leader - Operations | BPO Call Center Supervision, SLA Governance & Workflow Automation',
    contactLine: 'Bandung, Indonesia, +62 851-1055-2118, aliakhmadfauzie@gmail.com',
    linkedInUrl: 'https://linkedin.com/in/aliakhmadf',
    summary:
      'As an Operations Team Leader and Lean Six Sigma Green Belt, I bring over 8 years of experience in leading BPO and high-volume call center operations. My career includes progressive leadership roles at Concentrix and Accenture, where I successfully coached and developed teams of up to 34 associates across rotational shifts. I have a proven track record of sustaining 98%+ contractual SLA compliance, reducing Average Handling Time by 25%, and enhancing 90-day competency from 78% to 94%. My expertise in process optimization and automation, particularly with the Microsoft Power Platform, has led to the creation of tools that save over 120 leadership hours weekly and significantly reduce routing errors. I am adept at managing customer service operations, ensuring service performance meets targets, and leading teams with strong operational skills. Fluent in English and experienced in working within a 3-shift rotation schedule, I am committed to driving efficiency and excellence in BPO environments.',
    skillsHeader: 'CORE COMPETENCIES & TECHNICAL SKILLS',
    // Managerial skills highlighted FIRST, followed by tooling skills
    skillsColumn1: [
      'BPO Industry Experience',
      'Operational Leadership & Floor Command',
      'Rotational Shift Management (3 Shifts)',
      'Customer Service Operations',
      'Team Management & Mentoring',
      'Performance Coaching & 1:1 Reviews',
      'Lean Six Sigma Green Belt (DMAIC)',
      'Contractual SLA Governance (>98%)'
    ],
    skillsColumn2: [
      'Average Handling Time (-25% AHT)',
      'QA Calibration & Dispute Adjudication',
      'Weekly Business Reviews (WBRs)',
      'Talent Retention (<5% Attrition)',
      'English Proficiency (Professional Working)',
      'Microsoft Power Platform (Power Apps, Automate, BI)',
      'PulseTrack & SmartFlow Telemetry',
      'CS Resolver & AI Builder Knowledge Routing'
    ],
    experiences: [
      INVARIANT_FREELANCE_EXPERIENCE,
      {
        period: "May 2023 — Apr 2025",
        role: "Operations Team Lead",
        company: "Concentrix CVG",
        location: "Kuala Lumpur, Malaysia",
        bulletPoints: [
          "Led daily floor operations for a BPO team of 9 to 34 associates across rotational shifts, owning rostering, real-time adherence, and shift handovers to sustain 98%+ contractual SLA compliance and keep abandonment below target.",
          "Reduced Average Handling Time (AHT) by 25% through Six Sigma DMAIC controls and targeted coaching; improved 90-day competency from 78% to 94% via structured 1:1s and performance action plans.",
          "Built PulseTrack & SmartFlow (Power Apps, Power Automate) to automate reporting and SLA escalations, eliminating ~90% of manual reporting friction, cutting admin workload by 60–80%, and saving 120+ leadership hours weekly.",
          "Served as a tier-2 escalation SME and implemented CS Resolver (NLP routing), reducing routing errors by ~50%, cutting misclassification 40–60%, and accelerating resolution by 30–50%.",
          "Coached agents through data-driven QA calibration, improving audit pass rates and creating internal promotion pipelines to SME and QA analyst roles."
        ]
      },
      {
        period: "Jul 2017 — Nov 2022",
        role: "Service Delivery Operations Senior Team Lead",
        company: "Accenture",
        location: "Kuala Lumpur, Malaysia",
        bulletPoints: [
          "Progressed through four operational roles from Data Analyst to Senior Team Lead, supervising up to 34 associates across 7 global markets.",
          "Partnered with site leadership to analyze attrition root causes and execute career development initiatives, achieving top-quartile associate retention and engagement scores.",
          "Provided SME support for escalated cases and deployed Power BI shift telemetry dashboards, cutting SLA escalation turnaround from 4 hours to under 45 minutes and lifting throughput by 15%.",
          "Chaired Weekly Business Reviews (WBRs) using Six Sigma DMAIC root-cause analysis to remediate performance issues and exceed contractual KPIs.",
          "Selected to Innovation Team in 2022 after discovering software development with Power Apps and Power Automate; 2-Time Innovation Competition Winner."
        ]
      }
    ],
    projectsHeader: 'KEY AUTOMATION & OPERATIONS PROJECTS',
    projects: [
      {
        title: "PulseTrack & SmartFlow Operations Suite | Concentrix CVG",
        subtitle: "Power Apps, Power Automate, Power BI, SharePoint, Dataverse Telemetry",
        bullets: [
          "Designed and deployed a shift governance, real-time attendance monitor, and coaching tracker for a 34-associate call center, improving tracking accuracy to 98%.",
          "Automated SLA escalation triggers, handoffs, and reporting; eliminated >90% of manual reporting friction, cut administrative workload by 60–80%, and saved 120+ leadership hours weekly.",
          "Delivered telemetry dashboards that supported 98%+ contractual SLA compliance and reduced Average Handling Time by 25% through Six Sigma DMAIC controls."
        ]
      },
      {
        title: "CS Resolver — Intelligent Escalation & NLP Routing | Concentrix CVG",
        subtitle: "AI Builder, NLP classification, Power Automate, SOP knowledge routing",
        bullets: [
          "Built an intelligent ticket categorization and SOP retrieval engine to assist associates with complex escalations.",
          "Reduced initial routing errors by ~50% and misclassification by 40–60%, accelerating issue resolution by 30–50% across global segments.",
          "Scaled automation and knowledge routing practices that lowered escalation turnaround times and improved first-contact resolution."
        ]
      }
    ],
    languages: COMMON_LANGUAGES,
    education: COMMON_EDUCATION,
    certifications: COMMON_CERTIFICATIONS
  },

  // 2. SOFTWARE DEVELOPER PROFILE (Technical Mastery First)
  software: {
    id: 'software',
    label: 'Software Developer',
    pdfFilename: 'Ali_Akhmad_Fauzie_Software_Developer_Resume.pdf',
    pdfDownloadUrl: '/assets/profile/Ali_Akhmad_Fauzie_Software_Developer_Resume.pdf',
    nameLine: 'Ali Akhmad Fauzie',
    headline: 'Software Developer & Solutions Architect | Full-Stack React 19, TypeScript & Power Platform',
    contactLine: 'Bandung, Indonesia, +62 851-1055-2118, aliakhmadfauzie@gmail.com',
    linkedInUrl: 'https://linkedin.com/in/aliakhmadf',
    summary:
      'Enterprise Software Developer and Solutions Architect specializing in full-stack web applications, low-code to high-code enterprise modernization, and resilient offline-first systems. Discovered programming at Accenture in 2022 (2-Time Innovation Competition Winner with Power Apps & Automate), progressing into full-stack engineering across React 19, TypeScript, Node.js, and Cloud Firestore. Architected the modernization of 365+ legacy enterprise Lotus Domino applications to Microsoft 365/Power Platform across 28 business units, eliminating $960,000/year in licensing overhead. Built custom Python AST validation linters in CI for 7,878 YAML screens, developed zero-downtime offline-first synchronization engines, and engineered Tri-Engine AI task routers with sub-second latencies. Passionate about eliminating technical debt and engineering rock-solid software systems.',
    skillsHeader: 'CORE COMPETENCIES & TECHNICAL SKILLS',
    skillsColumn1: [
      'React 19, Next.js & Modern Web',
      'TypeScript 5.8 & JavaScript (ESNext)',
      'Cloud Firestore & Firebase Architecture',
      'Microsoft Power Platform (YAML v3, PCF)',
      'Power Automate & Microsoft Dataverse',
      'Python 3.11+ (AST Verification Linters)',
      'Playwright E2E Browser Automation'
    ],
    skillsColumn2: [
      'Tailwind CSS v4 & OKLCH Tokens',
      'Tri-Engine AI Routing (Groq & Gemini)',
      'RESTful APIs, Graph API & ERP Integration',
      'T-SQL / PL-SQL / Relational Schemas',
      'Offline-First PWA Synchronization',
      'GAMP 5 Category 4 & 21 CFR Part 11',
      'Azure DevOps CI/CD & Git Versioning'
    ],
    experiences: [
      INVARIANT_FREELANCE_EXPERIENCE,
      {
        period: "May 2023 — Apr 2025",
        role: "Systems Automation & Technical Lead",
        company: "Concentrix CVG",
        location: "Kuala Lumpur, Malaysia",
        bulletPoints: [
          "Architected PulseTrack & SmartFlow (Power Apps, Power Automate, Dataverse) to automate reporting and SLA escalations, eliminating ~90% of manual reporting friction, cutting admin workload by 60–80%, and saving 120+ leadership hours weekly.",
          "Engineered CS Resolver (NLP routing using AI Builder), reducing routing errors by ~50%, cutting ticket misclassification by 40–60%, and accelerating issue resolution by 30–50%.",
          "Built real-time operational telemetry dashboards and automated shift adherence pipelines sustaining 98%+ contractual SLA compliance across 34-agent squads.",
          "Authored reusable Power Apps Component Framework (PCF) controls and automated data cleansing pipelines across SharePoint and Dataverse backend repositories.",
          "Conducted technical coaching and structured code reviews for citizen developers, enforcing solution architecture and ALM packaging standards."
        ]
      },
      {
        period: "Jul 2017 — Nov 2022",
        role: "Enterprise Workflow Specialist & Data Analyst",
        company: "Accenture",
        location: "Kuala Lumpur, Malaysia",
        bulletPoints: [
          "Discovered software development in 2022; selected to Accenture Innovation Team and won 2 consecutive internal innovation hackathons/competitions building custom Power Apps and automated Power Automate workflows.",
          "Progressed through four technical and operational roles from Data Analyst to Senior Lead, developing high-impact analytics dashboards and automated reporting workflows for global operations across 7 markets.",
          "Engineered Power BI shift telemetry and ticket distribution models, cutting SLA escalation turnaround from 4 hours to under 45 minutes and lifting throughput by 15%.",
          "Chaired Weekly Business Reviews (WBRs) using Six Sigma DMAIC root-cause analysis to remediate performance issues and exceed contractual KPIs."
        ]
      }
    ],
    projectsHeader: 'KEY ARCHITECTURAL & SOFTWARE PROJECTS',
    projects: [
      {
        title: "IOI Corporation SHE Enterprise Modernization | Lead Solutions Architect",
        subtitle: "Power Apps Canvas YAML v3, Power Automate, Dataverse, SharePoint Online, Python AST",
        bullets: [
          "Modernized 365+ legacy Lotus Domino DBs across 28 business units to Microsoft 365/Power Platform, saving $960,000/yr in licensing fees with zero factory downtime.",
          "Built custom Python AST linter validating 7,878 YAML screen definitions in CI, ensuring 100% syntax compliance and zero production regressions."
        ]
      },
      {
        title: "Tasek Cement E-Rebate & E-Procurement Systems | Enterprise Developer",
        subtitle: "Power Platform, Oracle 19c ERP, OData APIs, Multi-Tier Power Automate Approval Flows",
        bullets: [
          "Engineered automated 7-tier financial rebate calculation engine with statutory RM 0.20/tonne caps, eliminating manual audit discrepancies.",
          "Automated procurement approval state machine, cutting cycle times from 3 days to under 15 minutes."
        ]
      },
      {
        title: "Putri GarmentHub ERP & Jastip OMS | Full-Stack Software Engineer",
        subtitle: "React 19, TypeScript, Tailwind CSS v4, Cloud Firestore, Offline-First Synchronization PWA",
        bullets: [
          "Engineered 0ms synchronous local hydration engine, eliminating 6,070ms mobile TBT over industrial Wi-Fi with atomic 4-pocket financial ledger isolation."
        ]
      }
    ],
    languages: COMMON_LANGUAGES,
    education: COMMON_EDUCATION,
    certifications: COMMON_CERTIFICATIONS
  },

  // 3. BOTH / HYBRID PROFILE (Balanced Dual-Track Leadership & Engineering)
  both: {
    id: 'both',
    label: 'Both (Hybrid)',
    pdfFilename: 'Ali_Akhmad_Fauzie_Hybrid_Resume.pdf',
    pdfDownloadUrl: '/assets/profile/Ali_Akhmad_Fauzie_Hybrid_Resume.pdf',
    nameLine: 'Ali Akhmad Fauzie',
    headline: 'Operations Team Leader & Enterprise Solutions Architect | Dual-Track Leadership',
    contactLine: 'Bandung, Indonesia, +62 851-1055-2118, aliakhmadfauzie@gmail.com',
    linkedInUrl: 'https://linkedin.com/in/aliakhmadf',
    summary:
      'Dual-track professional bridging high-performance Operations Leadership (8+ years directing BPO squads, rotational shifts, and Six Sigma DMAIC optimization) with hands-on Enterprise Software Engineering & Solutions Architecture. Successfully transitioned from operations management to building full-stack software and Power Platform systems after discovering programming at Accenture in 2022 (2-Time Innovation Competition Winner). Directs high-stakes operational pods of up to 34 agents sustaining 98%+ contractual SLA compliance while simultaneously architecting enterprise solutions that retired 365+ legacy databases, validated 7,878 YAML screens in CI, and eliminated $960,000/yr in software licenses. Fluent in English and skilled in uniting frontline operations with modern cloud software engineering.',
    skillsHeader: 'CORE COMPETENCIES & TECHNICAL SKILLS',
    skillsColumn1: [
      'BPO Operations & Team Leadership',
      'Rotational Shift Management (3 Shifts)',
      'Six Sigma Green Belt (DMAIC Controls)',
      'Contractual SLA Governance (>98%)',
      'Average Handling Time (-25% AHT)',
      'QA Scorecards & Calibration Governance',
      'Talent Coaching & Retention (<5% Attrition)'
    ],
    skillsColumn2: [
      'Microsoft Power Platform (YAML v3, PCF)',
      'React 19, TypeScript & Cloud Firestore',
      'Power Automate & Microsoft Dataverse',
      'SharePoint Online & Microsoft 365',
      'Python 3.11+ (AST Verification, Playwright)',
      'PulseTrack & CS Resolver NLP Routing',
      'GAMP 5 Category 4 & 21 CFR Part 11'
    ],
    experiences: [
      INVARIANT_FREELANCE_EXPERIENCE,
      {
        period: "May 2023 — Apr 2025",
        role: "Operations Team Lead & Systems Automation Architect",
        company: "Concentrix CVG",
        location: "Kuala Lumpur, Malaysia",
        bulletPoints: [
          "Led daily floor operations for a BPO team of 9 to 34 associates across rotational shifts, owning rostering, real-time adherence, and shift handovers to sustain 98%+ contractual SLA compliance.",
          "Reduced Average Handling Time (AHT) by 25% through Six Sigma DMAIC controls and targeted coaching; improved 90-day competency from 78% to 94% via structured 1:1s and action plans.",
          "Built PulseTrack & SmartFlow (Power Apps, Power Automate) to automate reporting and SLA escalations, eliminating ~90% of manual reporting friction, cutting admin workload by 60–80%, and saving 120+ leadership hours weekly.",
          "Served as a tier-2 escalation SME and implemented CS Resolver (NLP routing), reducing routing errors by ~50%, cutting misclassification 40–60%, and accelerating resolution by 30–50%.",
          "Coached agents through data-driven QA calibration, improving audit pass rates and creating internal promotion pipelines to SME and QA analyst roles."
        ]
      },
      {
        period: "Jul 2017 — Nov 2022",
        role: "Service Delivery Operations Senior Team Lead & Enterprise Workflow Lead",
        company: "Accenture",
        location: "Kuala Lumpur, Malaysia",
        bulletPoints: [
          "Progressed through four operational roles from Data Analyst to Senior Team Lead, supervising up to 34 associates across 7 global markets.",
          "Discovered software development in 2022; selected to Accenture Innovation Team and won 2 consecutive internal innovation hackathons/competitions building custom Power Apps and automated Power Automate workflows.",
          "Provided SME support for escalated cases and deployed Power BI shift telemetry dashboards, cutting SLA escalation turnaround from 4 hours to under 45 minutes and lifting throughput by 15%.",
          "Chaired Weekly Business Reviews (WBRs) using Six Sigma DMAIC root-cause analysis to remediate performance issues and exceed contractual KPIs.",
          "Partnered with site leadership to analyze attrition root causes and execute career development initiatives, achieving top-quartile associate retention and engagement scores."
        ]
      }
    ],
    projectsHeader: 'KEY ENTERPRISE & OPERATIONS PROJECTS',
    projects: [
      {
        title: "IOI Corporation SHE Enterprise Modernization | Lead Solutions Architect",
        subtitle: "Power Apps Canvas YAML v3, Power Automate, Dataverse, SharePoint Online, Python AST",
        bullets: [
          "Modernized 365+ legacy Lotus Domino DBs across 28 business units to M365, saving $960,000/yr in licensing fees with zero factory downtime and 7,878 screens validated in CI."
        ]
      },
      {
        title: "PulseTrack & SmartFlow Operations Suite | Concentrix CVG",
        subtitle: "Power Apps, Power Automate, Power BI, SharePoint, Dataverse Telemetry",
        bullets: [
          "Automated shift governance, real-time attendance, and coaching tracking for 34-agent floor, saving 120+ leadership hours weekly and sustaining 98%+ contractual SLA."
        ]
      },
      {
        title: "CS Resolver — Intelligent Escalation & NLP Routing | Concentrix CVG",
        subtitle: "AI Builder, NLP classification, Power Automate, SOP Knowledge Routing",
        bullets: [
          "Engineered intelligent ticket categorization engine, reducing misclassification by 40–60% and cutting routing latency by ~50%."
        ]
      }
    ],
    languages: COMMON_LANGUAGES,
    education: COMMON_EDUCATION,
    certifications: COMMON_CERTIFICATIONS
  }
};
