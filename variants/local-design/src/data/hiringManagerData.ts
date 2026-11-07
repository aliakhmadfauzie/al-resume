import {
  CareerJourneyRole,
  DeliveryCaseStudy,
  MethodologyPhase,
  OperatingCadenceItem,
  TeamManagementItem,
  DecisionFrameworkItem,
  AIWorkforceStack,
  AIUseCase,
  NinetyDayPhase,
  AskAliPrompt,
  GuidedSectionMeta
} from '../types';

// ─── Landing ──────────────────────────────────────────────────

export const HIRING_MANAGER_INTRO = {
  greeting: "Hi, I'm Ali Akhmad Fauzie.",
  positioning:
    'Technology & Operations Leader specializing in Enterprise Transformation, Power Platform, Dynamics 365, AI, and Digital Operations.',
  purpose:
    'This experience is designed specifically for hiring managers and interview panels — in about 10 minutes, you will understand who I am, how I think, how I deliver results, and how I lead teams.',
  duration: '10 Minutes',
  sectionCount: '7 Sections'
};

export const HIRING_MANAGER_METRICS = [
  { label: 'Forms Catalogued', value: '361' },
  { label: 'Production Apps Delivered', value: '16' },
  { label: 'Departments Modernized', value: '28+' },
  { label: 'Annual Cost Avoidance', value: 'RM4.2M' },
  { label: 'Enterprise Experience', value: '10+ Yrs' }
];

export const GUIDED_SECTIONS: GuidedSectionMeta[] = [
  { id: 'journey', title: 'My Journey', kicker: 'Section 01 · Career Progression' },
  { id: 'portfolio', title: 'Enterprise Delivery Portfolio', kicker: 'Section 02 · Flagship Projects' },
  { id: 'methodology', title: 'How I Design Solutions', kicker: 'Section 03 · Architect Methodology' },
  { id: 'leadership', title: 'How I Lead Teams', kicker: 'Section 04 · Leadership Operating System' },
  { id: 'ai-stack', title: 'My AI & Automation Stack', kicker: 'Section 05 · AI Workforce' },
  { id: 'ninety-days', title: 'How I Would Approach Your Company', kicker: 'Section 06 · First 90 Days' },
  { id: 'ask-ali', title: 'Ask Ali', kicker: 'Section 07 · Ask Ali AI' }
];

// ─── Section 1: My Journey ────────────────────────────────────

export const CAREER_JOURNEY: CareerJourneyRole[] = [
  {
    id: 'developer',
    stage: 'Developer',
    title: 'Data Analyst',
    company: 'Deloitte → Accenture',
    period: 'Feb 2017 – May 2018',
    responsibility:
      'Conducted rigorous KPI analysis for enterprise service delivery metrics across multiple customer accounts, building the analytical foundation for everything that followed.',
    achievement:
      'Identified critical operational bottlenecks that directly informed strategic pivot plans and the first automation opportunities.',
    skillsGained: ['SQL / PL-SQL', 'KPI Analysis', 'Process Bottleneck Discovery', 'Enterprise Reporting']
  },
  {
    id: 'consultant',
    stage: 'Consultant',
    title: 'Operations Analyst',
    company: 'Accenture',
    period: '2018 – 2020',
    responsibility:
      'Delivered service analytics and process improvement engagements, translating operational data into actionable recommendations for account leadership.',
    achievement:
      'Automated recurring reporting workflows and standardized KPI visibility across global accounts — the pattern behind every automation I ship today.',
    skillsGained: ['Process Mapping', 'Reporting Automation', 'Stakeholder Communication', 'Root-Cause Analysis']
  },
  {
    id: 'senior-consultant',
    stage: 'Senior Consultant',
    title: 'Senior Team Lead / Operations Team Lead',
    company: 'Accenture',
    period: '2020 – Nov 2022',
    responsibility:
      'Directed a cross-functional team of 25–34 direct reports across 7 global markets, consistently exceeding 98% Service Level Agreement compliance.',
    achievement:
      'Architected a new incident response protocol that reduced triage time by 60%, and built a talent pipeline with a structured career progression framework.',
    skillsGained: ['Cross-Market Leadership', 'Incident Management', 'SQL Reporting', 'Talent Development']
  },
  {
    id: 'solution-architect',
    stage: 'Solution Architect',
    title: 'Power Platform Solution Architect',
    company: 'Concentrix / Enterprise Program',
    period: '2023 – 2025',
    responsibility:
      'Designed and delivered enterprise Power Platform solutions — PulseTrack, SmartFlow, CS Resolver — while embedding governance, security, and ALM into every build.',
    achievement:
      'Architected the IOI Domino → Dataverse program: 361 legacy forms catalogued across 6 functional slices with zero-downtime cutover.',
    skillsGained: ['Dataverse Architecture', 'Power Apps / Automate', 'AI Builder', 'Solution Governance']
  },
  {
    id: 'operations-leader',
    stage: 'Operations Leader',
    title: 'Operations Team Leader & Process Automation Lead',
    company: 'Concentrix CVG',
    period: 'May 2023 – Apr 2025',
    responsibility:
      'Managed and mentored a 34-member multilingual operations team across 7 international markets, owning SLA, quality, and attrition outcomes.',
    achievement:
      'Scaled team capacity by 380% in 18 months (9 → 34 agents) while holding 98%+ SLA compliance — and built the tools that eliminated 90% of manual reporting.',
    skillsGained: ['Team Scaling', 'SLA & KPI Management', 'Automation Strategy', 'Coaching & Mentoring']
  },
  {
    id: 'ceo',
    stage: 'CEO',
    title: 'Independent Enterprise Consultant & Delivery Lead',
    company: 'Independent',
    period: 'May 2025 – Present',
    responsibility:
      'Run my own enterprise delivery practice end-to-end: proposals, signed Statements of Work, solution architecture, delivery teams, and client outcomes.',
    achievement:
      'Delivered the isolated Rebate Approval System, 50+ AI agents across 12 pipelines (70% faster form migration), and 16 production Power Apps.',
    skillsGained: ['Commercial Ownership', 'AI Workforce Design', 'Statement of Work Delivery', 'Client Partnership']
  }
];

// ─── Section 2: Enterprise Delivery Portfolio ─────────────────

export const DELIVERY_CASE_STUDIES: DeliveryCaseStudy[] = [
  {
    id: 'pulsetrack',
    projectId: 'pulsetrack',
    tagline: 'Real-time workforce status automation',
    situation:
      'Agent status was captured via WhatsApp, requiring heavy manual roll-up for team leads — slow, error-prone, and consuming leadership time on reporting instead of coaching.',
    approach: [
      'Ran a process audit with team leads to map the manual roll-up chain and define a single source of truth',
      'Designed a real-time status logging app with role-based views for agents, leads, and regional squads',
      'Automated aggregation with scheduled and webhook-triggered Power Automate flows',
      'Delivered Adaptive Cards into the Microsoft Teams leadership channel for zero-friction consumption'
    ],
    architecture: [
      'SharePoint Online schema optimized for concurrent agent logging',
      'Power Automate schedule & webhook triggers for instantaneous roll-up',
      'Adaptive Cards delivered directly to the Teams leadership channel',
      'Power BI dashboards for cross-squad visibility',
      'Role-based access ensuring data privacy across regional squads'
    ],
    outcome: [
      { label: 'Manual Reporting', value: '-90%' },
      { label: 'Status Accuracy', value: '98%' },
      { label: 'Manager Workload', value: '-70%' }
    ],
    lessonsLearned: [
      'Design for concurrent writes first — the logging schema, not the dashboard, is the product',
      'Deliver insights where leaders already work (Teams) to drive adoption without mandate',
      'Privacy boundaries between regional squads must be a first-class requirement, not an afterthought'
    ]
  },
  {
    id: 'smartflow',
    projectId: 'smartflow',
    tagline: 'Intelligent business request routing & approval',
    situation:
      'Requests and approvals moved through email threads and spreadsheets — no visibility, no tracking, and no accountability on turnaround times.',
    approach: [
      'Mapped the request taxonomy and approval matrix with department heads',
      'Built a responsive canvas front-end with dynamic form validation',
      'Automated multi-stage sequential & parallel approval chains with timeout escalations',
      'Embedded Power BI telemetry in Teams and enabled one-click Outlook approvals'
    ],
    architecture: [
      'Dataverse-backed schema with typed columns (90% data accuracy)',
      'Multi-stage Power Automate approval chains with timeout escalation paths',
      'Interactive Power BI telemetry embedded inside Microsoft Teams',
      'Outlook actionable messages for one-click inbox approvals'
    ],
    outcome: [
      { label: 'Manual Task Reduction', value: '-80%' },
      { label: 'Data Accuracy', value: '90%' },
      { label: 'Real-Time Tracking', value: '100%' }
    ],
    lessonsLearned: [
      'Typed data at the point of entry eliminates downstream reporting debt',
      'Escalation paths must be designed in from day one — approvals stall without timeouts',
      'One-click inbox actions remove the biggest adoption barrier: context switching'
    ]
  },
  {
    id: 'cs-resolver',
    projectId: 'cs-resolver',
    tagline: 'AI-powered customer service classification',
    situation:
      'Agents manually searched complex Standard Operating Procedures to classify and route customer issues — inconsistent handling, long resolution times, and no measurement.',
    approach: [
      'Trained a custom AI Builder text classification model on 120+ Standard Operating Procedure categories',
      'Built automated extraction of sentiment and entity metadata from ticket payloads',
      'Added dynamic hyperlink generation routing agents to the exact Standard Operating Procedure chapter',
      'Implemented an 85% confidence gate with human-in-the-loop supervisor fallback'
    ],
    architecture: [
      'AI Builder Natural Language Processing classification model on Dataverse',
      'Power Automate flow querying the prediction API with confidence scoring',
      'Typed Choice columns replacing free-text categorization',
      'Feedback loop capturing agent corrections to retrain the model'
    ],
    outcome: [
      { label: 'Classification Boost', value: '+50%' },
      { label: 'Handling Time', value: '-65%' },
      { label: 'SOP Categories', value: '120+' }
    ],
    lessonsLearned: [
      'AI without a confidence gate is a liability — human-in-the-loop is a feature, not a fallback',
      'Recommendations must link to the exact SOP chapter, not just a category label',
      'A feedback loop turns a static model into a compounding asset'
    ]
  }
];

// ─── Section 3: How I Design Solutions ────────────────────────

export const METHODOLOGY_PHASES: MethodologyPhase[] = [
  {
    id: 'discovery',
    phase: 'Discovery',
    summary: 'I start with the operating reality — not the requirements document.',
    activities: [
      {
        title: 'Stakeholder Workshops',
        detail: 'Structured sessions with business leads, IT admins, and end users to surface hidden dependencies and political realities.'
      },
      {
        title: 'Process Mapping',
        detail: 'Current-state → future-state flows that capture the manual steps automation will replace — and the exceptions.'
      },
      {
        title: 'Requirements Gathering',
        detail: 'Functional, non-functional, and compliance requirements captured as testable acceptance criteria.'
      }
    ]
  },
  {
    id: 'design',
    phase: 'Design',
    summary: 'Architecture before screens — every design decision is defensible.',
    activities: [
      {
        title: 'Solution Blueprint',
        detail: 'Dataverse-first entity model, component architecture, and integration contracts defined before a single screen is built.'
      },
      {
        title: 'Security Model',
        detail: 'Business Units, security roles, field-level security, and Data Loss Prevention policies designed into the blueprint — not bolted on.'
      },
      {
        title: 'Governance',
        detail: 'Environment strategy, Application Lifecycle Management topology, and Center of Excellence standards that keep delivery sustainable.'
      }
    ]
  },
  {
    id: 'delivery',
    phase: 'Delivery',
    summary: 'Sliced, parallel, and change-aware — no big-bang replatforming.',
    activities: [
      {
        title: 'Agile Implementation',
        detail: 'Domain-triage slicing with parallel run phases — 361 Domino forms became 6 functional slices with zero business interruption.'
      },
      {
        title: 'Change Management',
        detail: 'Adoption comms, training staging, and briefing acknowledgment built into every release — not left to a memo.'
      },
      {
        title: 'Adoption Strategy',
        detail: 'Value delivered into tools people already use (Teams, Outlook) drives uptake without mandate.'
      }
    ]
  },
  {
    id: 'optimization',
    phase: 'Optimization',
    summary: 'Ship, measure, compound — improvement is continuous, not an afterthought.',
    activities: [
      {
        title: 'KPIs',
        detail: 'SLA-driven dashboards that tie technical output to executive business goals and operational performance.'
      },
      {
        title: 'Continuous Improvement',
        detail: 'Feedback loops and Kaizen registers that compound gains after go-live — 2,000+ Continuous Improvement records indexed.'
      },
      {
        title: 'AI Enhancements',
        detail: 'Retrieval-Augmented Generation pipelines and AI agents layered onto stabilized processes for compounding leverage.'
      }
    ]
  }
];

// ─── Section 4: How I Lead Teams ──────────────────────────────

export const OPERATING_CADENCE: OperatingCadenceItem[] = [
  {
    day: 'Monday',
    focus: 'Leadership Review',
    detail: 'Priorities, blockers, and resource allocation for the week ahead. A 30-minute, exec-aligned sync that sets the tempo.'
  },
  {
    day: 'Wednesday',
    focus: 'Project Health Check',
    detail: 'Mid-week risk and progress review across delivery streams — escalation decisions made while there is still time to act.'
  },
  {
    day: 'Friday',
    focus: 'Priority Planning',
    detail: 'Retrospective, KPI review, and next-week planning to protect team focus time and celebrate wins.'
  }
];

export const TEAM_MANAGEMENT: TeamManagementItem[] = [
  {
    title: 'Team Structure',
    points: [
      'Clear reporting lines with squads aligned to business domains',
      'Cross-functional pairing: engineers, Quality Assurance, and business leads per slice'
    ]
  },
  {
    title: 'Delegation Framework',
    points: [
      'RACI-aligned ownership for every deliverable',
      'Decision rights pushed to the lowest competent level'
    ]
  },
  {
    title: 'Escalation Process',
    points: [
      'Time-boxed escalation timers (7/14/30 days) built into workflows',
      'Standardized root-cause escalation paths across 7 global markets'
    ]
  },
  {
    title: 'Performance Tracking',
    points: [
      'SLA-driven dashboards (98%+ compliance) visible to the whole team',
      'Weekly 1:1s focused on growth and blockers — not status theater'
    ]
  }
];

export const DECISION_FRAMEWORK: DecisionFrameworkItem[] = [
  {
    question: 'How I prioritize initiatives',
    approach:
      'Value vs. effort scoring with compliance items weighted first — quick wins fund the platform plays, and anything touching audit integrity jumps the queue.'
  },
  {
    question: 'How I manage risks',
    approach:
      'Risk registers with named owners and dates; technical debt tracked as backlog items with story points — not conversation topics.'
  },
  {
    question: 'How I allocate resources',
    approach:
      'Capacity planning against the sliced delivery model with explicit buffer for production support and escalations — the buffer is planned, not borrowed.'
  }
];

// ─── Section 5: My AI & Automation Stack ──────────────────────

export const AI_WORKFORCE_STACKS: AIWorkforceStack[] = [
  {
    id: 'research-stack',
    category: 'Research Stack',
    description: 'How I learn, benchmark, and stay current.',
    tools: [
      { name: 'Firecrawl', detail: 'Web research, competitive scanning, and documentation ingestion at scale' },
      { name: 'AI Search', detail: 'Semantic retrieval across internal knowledge and vendor documentation' },
      { name: 'Knowledge Management', detail: 'Structured notes and playbooks that compound into reusable assets' }
    ]
  },
  {
    id: 'development-stack',
    category: 'Development Stack',
    description: 'How I ship faster with AI pair-programming.',
    tools: [
      { name: 'Cursor', detail: 'AI pair-programming with repository-wide context' },
      { name: 'Claude Code', detail: 'Agentic coding workflows for boilerplate, refactors, and test generation' },
      { name: 'Windsurf', detail: 'Collaborative AI development for complex feature builds' }
    ]
  },
  {
    id: 'enterprise-stack',
    category: 'Enterprise Stack',
    description: 'How I bring AI into the enterprise — safely and governed.',
    tools: [
      { name: 'Microsoft Copilot', detail: 'Everyday productivity embedded across M365 workloads' },
      { name: 'Power Platform AI', detail: 'AI Builder classification, Copilot Studio agents, and canvas AI' },
      { name: 'Azure AI', detail: 'Azure OpenAI GPT-4o with Retrieval-Augmented Generation grounded in enterprise data' }
    ]
  }
];

export const AI_USE_CASES: AIUseCase[] = [
  {
    title: 'Documentation Generation',
    detail: 'Migration blueprints and Standard Operating Procedures generated from structured inputs',
    metric: '70% Faster'
  },
  {
    title: 'Code Review',
    detail: 'AI-assisted review catching anti-patterns before merge — Solution Checker on every Pull Request',
    metric: 'Every PR'
  },
  {
    title: 'Requirements Analysis',
    detail: 'Requirements decomposed into user stories, acceptance criteria, and effort estimates',
    metric: '12 Pipelines'
  },
  {
    title: 'Proposal Creation',
    detail: 'Statements of Work and Proof of Concept scopes drafted from discovery notes',
    metric: 'Signed SOWs'
  },
  {
    title: 'Knowledge Search',
    detail: '5,000+ operational documents indexed with security-trimmed semantic search',
    metric: '99% Accuracy'
  }
];

// ─── Section 6: How I Would Approach Your Company ─────────────

export const FIRST_90_DAYS: NinetyDayPhase[] = [
  {
    id: 'assess',
    window: 'Days 1 – 30',
    phase: 'Assess',
    summary: 'Listen, map, and earn trust before proposing change.',
    focusAreas: [
      {
        title: 'People',
        points: [
          'Stakeholder interviews across business leads, IT admins, and end users',
          'Map decision-makers, champions, and skeptics — and their incentives'
        ]
      },
      {
        title: 'Process',
        points: [
          'Current-state process mapping of manual steps and approval chains',
          'Quantify time, error rates, and the cost of the status quo'
        ]
      },
      {
        title: 'Technology',
        points: [
          'Architecture review of existing systems, licenses, and data models',
          'Integration landscape and security posture assessment'
        ]
      }
    ]
  },
  {
    id: 'prioritize',
    window: 'Days 31 – 60',
    phase: 'Prioritize',
    summary: 'Turn findings into a scored, defensible roadmap.',
    focusAreas: [
      {
        title: 'Quick Wins',
        points: [
          'High-value, low-effort automations that build momentum and trust',
          'Ship at least one visible win by day 60'
        ]
      },
      {
        title: 'Technical Debt',
        points: [
          'Legacy constraints and risks catalogued with mitigation options',
          'Cost each item so leadership can make trade-off decisions'
        ]
      },
      {
        title: 'Governance',
        points: [
          'Environment strategy, security model, and delivery standards proposed',
          'Application Lifecycle Management and Data Loss Prevention guardrails defined'
        ]
      }
    ]
  },
  {
    id: 'execute',
    window: 'Days 61 – 90',
    phase: 'Execute',
    summary: 'Ship the first visible wins and instrument everything.',
    focusAreas: [
      {
        title: 'Transformation Roadmap',
        points: [
          'Phased modernization plan with slices, owners, and dates',
          'Dependencies and risks made explicit for executive sign-off'
        ]
      },
      {
        title: 'KPI Dashboard',
        points: [
          'Baseline-to-target metrics so leadership sees progress weekly',
          'Automated reporting replaces status meetings'
        ]
      },
      {
        title: 'Automation Opportunities',
        points: [
          'Pipeline of automation candidates ranked by ROI and effort',
          'A running backlog that keeps compounding after the 90 days'
        ]
      }
    ]
  }
];

// ─── Section 7: Ask Ali ───────────────────────────────────────

export const ASK_ALI_PROMPTS: AskAliPrompt[] = [
  {
    id: 'power-platform-projects',
    label: 'Show Power Platform projects',
    keywords: ['power platform', 'power apps', 'power automate', 'project', 'projects', 'portfolio'],
    answer:
      'My flagship delivery is the IOI Domino → Dataverse program: 361 legacy forms catalogued across 6 functional slices, with 16 production Power Apps live and zero-downtime cutover.\n\nPulseTrack cut manual reporting by 90%, SmartFlow reduced manual tasks by 80% with typed Dataverse columns, and CS Resolver cut handling time 65% with AI classification.\n\nThe Tasek Rebate system shows depth: Business Unit isolation, C# plugins, and immutable audit trails for financial compliance.',
    sectionId: 'portfolio',
    sectionLabel: 'See the delivery portfolio'
  },
  {
    id: 'dynamics-365',
    label: 'Show Dynamics 365 experience',
    keywords: ['dynamics', 'd365', 'dynamics 365', 'crm', 'dataverse'],
    answer:
      'I architect on the full Dataverse platform — the data engine behind Dynamics 365.\n\nI build C# plugins on the pre/post-operation pipeline, Power Platform Component Framework controls in TypeScript/React, Business Unit hierarchies with security-role inheritance, and bidirectional ERP syncs via custom connectors.\n\nMy ALM practice treats D365 solutions as code: Power Platform CLI, source control, and staged promotion from Dev to Production with Solution Checker gates.',
    sectionId: 'portfolio',
    sectionLabel: 'See the technical deep-dives'
  },
  {
    id: 'leadership',
    label: 'Show leadership examples',
    keywords: ['leadership', 'lead', 'team', 'manage', 'management'],
    answer:
      'I scaled a multilingual operations team by 380% — from 9 to 34 agents across 7 international markets — while holding 98%+ Service Level Agreement compliance.\n\nI run a weekly operating cadence: Monday leadership review, Wednesday project health check, Friday priority planning.\n\nAt Accenture I built the incident protocol that cut triage time 60% and a talent pipeline with structured career progression.',
    sectionId: 'leadership',
    sectionLabel: 'See how I lead teams'
  },
  {
    id: 'ai-experience',
    label: 'Show AI implementation experience',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'automation', 'ai builder', 'openai'],
    answer:
      "I've built 50+ specialized AI agents across 12 automated workflow pipelines using Azure OpenAI GPT-4o with Retrieval-Augmented Generation — a 70% reduction in form migration effort.\n\nOn the platform side, AI Builder classification with an 85% confidence gate cut customer-service handling time by 65%, and DocFinder delivers 99% accurate recommendations across 5,000+ indexed documents.\n\nEvery deployment runs with Data Loss Prevention guardrails and human-in-the-loop gating.",
    sectionId: 'ai-stack',
    sectionLabel: 'See my AI & automation stack'
  },
  {
    id: 'cost-optimization',
    label: 'Show cost optimization projects',
    keywords: ['cost', 'optimization', 'budget', 'license', 'saving', 'savings', 'roi'],
    answer:
      'My Dataverse-first staging architecture avoided RM4.2M/year in premium licensing during the Domino migration — SharePoint Online as an interim layer, with a documented migration blueprint to Dataverse as the production target.\n\nThe Tasek Rebate system removed a 2–3 day manual approval cycle down to 15 minutes.\n\nMy philosophy: cost optimization is an architecture decision, not a procurement one.',
    sectionId: 'portfolio',
    sectionLabel: 'See the case studies'
  },
  {
    id: 'architecture-approach',
    label: 'Show architecture approach',
    keywords: ['architecture', 'architect', 'design', 'methodology', 'approach', 'solution'],
    answer:
      'I run a four-phase methodology:\n\n• Discovery — stakeholder workshops, process mapping, and requirements as testable acceptance criteria\n• Design — Dataverse-first solution blueprint with security model and governance designed in\n• Delivery — sliced agile implementation with parallel runs and built-in change management\n• Optimization — KPI dashboards, continuous improvement loops, and AI enhancements after go-live',
    sectionId: 'methodology',
    sectionLabel: 'See how I design solutions'
  },
  {
    id: 'team-management',
    label: 'Show team management style',
    keywords: ['team management', 'team lead', 'style', 'culture', 'delegation', 'escalation'],
    answer:
      'Clear ownership through RACI-aligned delegation, escalation timers built into workflows (7/14/30 days), and SLA-driven dashboards the whole team can see.\n\nI protect team focus with a weekly cadence — Monday priorities, Wednesday health checks, Friday planning — and invest in growth through structured 1:1s.\n\nDecision rights sit at the lowest competent level; my job is to remove blockers, not gate decisions.',
    sectionId: 'leadership',
    sectionLabel: 'See the leadership system'
  }
];
