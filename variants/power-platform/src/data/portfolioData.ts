import { ProjectItem, MigrationSlice, ExperienceItem, DevStackItem, GovernanceItem, BusinessCompetency, InterviewTopic } from '../types';

export const PERSONAL_INFO = {
  name: "Ali Akhmad Fauzie",
  title: "Power Platform Solution Architect & Enterprise Modernization Specialist",
  tagline: "Power Platform Developer | Solution Architect | Driving digital transformation through scalable, intelligent automation.",
  location: "West Java 40111, Indonesia / Kuala Lumpur, Malaysia",
  email: "aliakhmadfauzie@gmail.com",
  phone: "+62 851-1055-2118 / +60 13-295 7406",
  linkedIn: "https://linkedin.com/in/aliakhmadfauzie",
  github: "https://github.com/aliakhmadfauzie",
  yearsExperience: "9+ Years",
  summary: "A results-driven Power Platform solution architect specializing in migrating legacy systems (Lotus Notes) to modern Microsoft 365 ecosystems. Proven track record in designing end-to-end automation workflows, AI-enhanced processes, and robust governance frameworks that deliver significant reductions in manual workload and operational cycle times. Expert in bridging functional silos across Quality, Warehouse, HR, and IT."
};

export const KEY_METRICS = [
  { label: "DATABASES MIGRATED", value: "365+", subtext: "Across 28+ Business Units" },
  { label: "BUS TRANSFORMED", value: "28+", subtext: "Quality, Supply Chain, IT, HR" },
  { label: "APPS DELIVERED", value: "16+", subtext: "Production Power Apps (Slice) & 23 Enterprise" },
  { label: "AUTOMATION IMPACT", value: "90%", subtext: "Manual Reporting Reduction" }
];

export const CORE_PROJECTS: ProjectItem[] = [
  {
    id: "pulsetrack",
    title: "PulseTrack",
    subtitle: "Real-time Operations & Agent Status Automation",
    category: "core",
    date: "Oct 2024",
    role: "Power Platform solution delivery & automation design",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Microsoft Forms"],
    problem: "Agent status was captured via WhatsApp, requiring heavy manual roll-up for team leads, leading to delays and inaccuracies.",
    solution: "Implemented a structured status capture system on SharePoint with an automated reporting workflow, providing real-time visibility.",
    impact: "90% less manual reporting; 98% status accuracy; 60–80% reduction in team-lead workload.",
    impactMetrics: [
      { label: "Manual Reporting", value: "-90%" },
      { label: "Status Accuracy", value: "98%" },
      { label: "Team Lead Workload", value: "-70%" }
    ],
    technicalDetails: [
      "SharePoint Online schema optimized for concurrent agent logging",
      "Automated Power Automate schedule & webhook trigger for instantaneous roll-up",
      "Adaptive Cards delivered directly to Microsoft Teams leadership channel",
      "Role-based access ensuring data privacy across regional squads"
    ],
    liveDemoId: "it-service",
    featured: true
  },
  {
    id: "smartflow",
    title: "SmartFlow",
    subtitle: "End-to-End Enterprise Request & Approval Orchestrator",
    category: "core",
    date: "Nov 2024",
    role: "End-to-end request/approval system design",
    tools: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Teams", "Outlook"],
    problem: "Requests and approvals were routed via email and spreadsheets, resulting in delayed visibility and poor tracking.",
    solution: "Developed an integrated request + approval flow with a Power BI dashboard for live tracking, centralizing all requests.",
    impact: "90% data accuracy; 80% less manual work; 100% real-time tracking.",
    impactMetrics: [
      { label: "Data Accuracy", value: "90%" },
      { label: "Manual Work", value: "-80%" },
      { label: "Real-Time Tracking", value: "100%" }
    ],
    technicalDetails: [
      "Responsive Power Apps Canvas front-end with dynamic form validations",
      "Multi-stage sequential & parallel Power Automate approval chains with timeout escalations",
      "Interactive Power BI telemetry embedded inside Microsoft Teams",
      "Automatic Outlook actionable messages allowing one-click approvals from inbox"
    ],
    liveDemoId: "finops",
    featured: true
  },
  {
    id: "cs-resolver",
    title: "Customer Service Resolver",
    subtitle: "AI-Assisted Classification & Procedure Recommendation",
    category: "core",
    date: "Nov 2024",
    role: "AI-assisted classification & procedure recommendation",
    tools: ["AI Builder", "Lark Automation", "NLP Classification"],
    problem: "Agents manually searched through complex SOPs to classify and route customer issues, leading to inconsistent handling and high resolution times.",
    solution: "Deployed an AI model to automatically classify the issue and recommend the appropriate SOP procedure with direct links for the agent.",
    impact: "30–50% faster resolution; 40–60% better classification accuracy; 50–80% less handling time.",
    impactMetrics: [
      { label: "Resolution Speed", value: "+40%" },
      { label: "Classification Accuracy", value: "+50%" },
      { label: "Handling Time", value: "-65%" }
    ],
    technicalDetails: [
      "Custom AI Builder text classification model trained on 120+ standard operating procedures",
      "Automated extraction of key sentiment and entity metadata from ticket payloads",
      "Dynamic hyperlink generation routing agents directly to corresponding SOP chapters",
      "Confidence score thresholding triggering manual supervisor fallback when below 85%"
    ],
    liveDemoId: "cs-resolver",
    featured: true
  },
  {
    id: "document-finder",
    title: "Document Finder",
    subtitle: "Intelligent Semantic Search & Recommendation Engine",
    category: "core",
    date: "Nov 2024",
    role: "AI search & ranking architecture",
    tools: ["AI Builder", "Power Apps", "SharePoint", "Dataverse"],
    problem: "Staff searched for documents by memory and keyword browsing, which was inefficient and frequently missed relevant compliance files.",
    solution: "Implemented a ranked keyword search with built-in recommendation logic, surfacing the most relevant documents first.",
    impact: "70–90% faster search; 99% recommendation accuracy.",
    impactMetrics: [
      { label: "Search Speed", value: "+80%" },
      { label: "Recommendation Accuracy", value: "99%" },
      { label: "Missing Files", value: "0%" }
    ],
    technicalDetails: [
      "Vector/keyword weighted scoring algorithm for enterprise documentation",
      "Dynamic document tagging with taxonomy extraction upon upload",
      "Security trimming ensuring users only discover files permitted by their Azure AD group",
      "Instant preview viewer with highlighted keyword occurrences"
    ],
    liveDemoId: "erp"
  },
  {
    id: "tasek-cement-rebate",
    title: "Tasek Cement Rebate Approval System",
    subtitle: "Formula-Driven High-Volume Financial Approval Engine",
    category: "standalone",
    date: "Nov–Dec 2023",
    role: "Rebate calculation + multi-level approval workflow",
    tools: ["Power Apps", "Power Automate", "Powerbiz", "Dataverse"],
    problem: "Rebate approvals took 2–3 days via email and manual checks, creating cashflow friction and human error.",
    solution: "Reduced to a ~15-minute workflow with a multi-level Sales → Group COO approval path. Implemented a seven-component rebate formula with a cap of 0.20 RM/metric tonne. Synchronized with purchase orders without creating POs inside the app.",
    impact: "Major cycle-time reduction from 3 days to 15 minutes (99% faster); zero audit non-compliances.",
    impactMetrics: [
      { label: "Cycle Time", value: "15 min" },
      { label: "Speed Gain", value: "99% Faster" },
      { label: "Formula Cap", value: "0.20 RM/t" }
    ],
    technicalDetails: [
      "7-component dynamic calculation engine: Base Rate + Volume Tier + Distance + Special Terms + Seasonal Adj + Tax - Credit Deductions",
      "Hard validation enforcing statutory RM 0.20/metric tonne ceiling",
      "Integration with ERP purchase order ledgers for balance validation",
      "Delegated signature authorization matrix matching corporate governance"
    ],
    liveDemoId: "rebate",
    featured: true
  },
  {
    id: "staff-requisition",
    title: "Staff Requisition Form & Vacancy Control",
    subtitle: "Four-Tier Headcount Governance & Interview Enforcement",
    category: "standalone",
    date: "Nov–Dec 2023",
    role: "Vacancy control & interview logging enforcement",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Vacancies could be advertised without a completed four-tier requisition and interview log, causing unauthorized budget commitments.",
    solution: "Enforced that no vacancy is advertised without an approved requisition. Added an optional CFO gate for new headcount and a mandatory five-working-day internal advertisement lockout.",
    impact: "Stronger hiring governance, 100% compliant headcount budget, and zero unapproved postings.",
    impactMetrics: [
      { label: "Hiring Compliance", value: "100%" },
      { label: "Internal Lockout", value: "5 Days" },
      { label: "Audit Readiness", value: "100%" }
    ],
    technicalDetails: [
      "Strict state-machine workflow: Draft → Line Manager → HR Head → CFO (if new headcount) → Published",
      "Automated 5-working-day lock preventing external posting before internal employee visibility",
      "Interview candidate evaluation scorecard with digital signatures"
    ],
    liveDemoId: "erp"
  },
  {
    id: "ask-lark",
    title: "Ask Lark Knowledge Base",
    subtitle: "Query Tracking & De-Duplication System",
    category: "standalone",
    date: "Nov 2024",
    role: "Knowledge query tracking & de-duplication",
    tools: ["Lark Automation", "Lark Base", "AI Webhooks"],
    problem: "Repeated questions across operations teams and unstructured QA answers cluttered operational channels.",
    solution: "Implemented an automated query tracking and de-duplication system to manage enterprise FAQs with automatic answer matching.",
    impact: "50–70% faster responses; 40–60% fewer repeat inquiries.",
    impactMetrics: [
      { label: "Response Speed", value: "+60%" },
      { label: "Repeat Questions", value: "-50%" },
      { label: "Knowledge Base Size", value: "500+ FAQs" }
    ],
    technicalDetails: [
      "Similarity matching against indexed questions in Lark Base",
      "Auto-tagging by department and severity",
      "Analytics dashboard on unresolved query trends"
    ]
  },
  {
    id: "it-support-service-request",
    title: "IT Support & Service Request Framework",
    subtitle: "Enterprise ITSM Ticket Lifecycle & Automated SLAs",
    category: "security",
    date: "2025",
    role: "Service request lifecycle & routing framework",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
    problem: "Lotus Notes service tickets had hidden site routing and no structured requestor close-out, leading to poor closure rates and ticket hoarding.",
    solution: "Designed a Submit → Admin Triage → Assign → Resolve → Requestor Accept & Rate → Close lifecycle. Added a 72-hour accept window and 30-day automatic close.",
    impact: "56 mapped columns; 5 flows; 5 screens; 95% on-time resolution; automated audit trail.",
    impactMetrics: [
      { label: "Mapped Columns", value: "56" },
      { label: "Accept Window", value: "72 Hours" },
      { label: "Auto Close", value: "30 Days" }
    ],
    technicalDetails: [
      "5 custom Power Apps screens covering Ticket Entry, Dispatcher Triage, Tech Workbench, Requester Review, and Metrics",
      "Automated timer flow monitoring 72-hour customer satisfaction rating countdown",
      "Escalation notification triggered at 80% SLA elapsed time"
    ],
    liveDemoId: "it-service",
    featured: true
  },
  {
    id: "infosec-doc-register",
    title: "Information Security Group Documentation Register",
    subtitle: "Publication Control & Reader Permissions Governance",
    category: "security",
    date: "2025",
    role: "Publication control & reader permissions governance",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Document metadata and reader permissions were maintained with weak publication control and zero audit history on Lotus Notes.",
    solution: "Implemented an Author Submit → Owner Review → Publish with Reader Permissions workflow.",
    impact: "100% controlled, auditable publishing across all information security policies.",
    impactMetrics: [
      { label: "Security Governance", value: "100%" },
      { label: "Audit Compliance", value: "ISO 27001" },
      { label: "Permission Drifts", value: "0" }
    ],
    technicalDetails: [
      "Dynamic SharePoint item-level permission inheritance breaking on publication",
      "Automated reader group assignment based on classification tier (Public, Internal, Confidential, Restricted)",
      "Periodic access certification reminder flows"
    ]
  },
  {
    id: "it-server-checklist",
    title: "IT Server Health & Audit Checklist",
    subtitle: "Standardized Weekly Server Audit & Hardware Diagnostics",
    category: "security",
    date: "2025",
    role: "Standard weekly audit checklist + review workflow",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Weekly server health notes were captured outside a numbered audit register, resulting in overlooked disk space warnings and unpatched servers.",
    solution: "Standardized a weekly audit with numbering: `Server Checklist-[year]-[week]-[sequence]`. Captures processor, memory, drives, and OS patch updates. Follows a Technician Submit → Systems Manager Review workflow.",
    impact: "5 screens; 100% weekly audit adherence; proactive hardware failure prevention.",
    impactMetrics: [
      { label: "Audit Adherence", value: "100%" },
      { label: "Failure Warning", value: "Proactive" },
      { label: "Audit Traceability", value: "Standardized" }
    ],
    technicalDetails: [
      "Auto-numbering formula: Server Checklist-[YYYY]-[WW]-[####]",
      "Dynamic thresholds highlighting memory/disk capacity over 85% in red",
      "Manager sign-off notification with one-click approval summary"
    ],
    liveDemoId: "maintenance"
  }
];

export const MIGRATION_OVERVIEW = {
  title: "IOI Oleo Lotus Domino → Microsoft 365 Enterprise Migration",
  period: "2023 – 2025",
  role: "Lead Solution Architect & Power Apps Rebuild Slice Delivery",
  scope: "Architected the enterprise migration of 365+ Lotus Domino applications across 28+ business units to Microsoft 365, SharePoint Online, OneDrive, Teams, and Dataverse.",
  sliceDelivery: "Spearheaded the rebuild and deployment of 16-23 production Canvas & Model-Driven Power Apps, 878 Canvas screens, and 400+ custom React/TypeScript components as a live operational slice.",
  complexityTiers: {
    high: 24,
    medium: 28,
    low: 12
  },
  evidence: "Documented the Quality / Warehouse / Master Data slice by analyzing 54 system reports covering 6 critical domains.",
  consolidationStats: {
    uniqueGroups: 314,
    sharedCrossDepartment: 7,
    sameDepartmentVariants: 8,
    routingDifferencesResolved: 8
  },
  highlightedConsolidations: [
    {
      name: "Customer Requirement Review & EnMS",
      type: "Cross-Department & Multi-Site",
      resolution: "Unified disparate Johor/Penang routing behaviors and QA/Marketing approval paths into single Dataverse-backed architectures."
    },
    {
      name: "Yearly Database Silos (e.g. CCCAR 2026, Sampling)",
      type: "Same-Department Variants",
      resolution: "Merged scattered, year-based Domino databases into continuous, scalable cloud data schemas with automated routing."
    }
  ]
};

export const MIGRATION_SLICES: MigrationSlice[] = [
  {
    id: "slice-a",
    letter: "A",
    title: "Quality Management System & Documentation Control",
    appCount: 23,
    role: "Lifecycle standardization & approval workflow automation",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
    problem: "Drafts, SOPs, work instructions, and test methods were stored across multiple Lotus Notes DBs with inconsistent approvers.",
    solution: "Built a controlled lifecycle: Draft → Submitted → Approved → Briefing/Distribution → Complete. Replaced legacy pending-approval and pending-briefing agents with automated cloud workflows.",
    impact: "Consistent process control, ISO 9001 audit compliance, and significantly reduced administrative overhead.",
    examples: ["SOP Requisition Portal", "Work Instruction Approver", "Laboratory Test Method Registry", "Controlled Copy Distribution Manager"],
    keyHighlights: ["Zero lost revision histories", "Automated distribution briefings with read-acknowledgment", "Multi-stage QA Head sign-off"]
  },
  {
    id: "slice-b",
    letter: "B",
    title: "Quality Event & Corrective Action (CAPA)",
    appCount: 12,
    role: "End-to-end corrective action cycle automation",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Nonconformance, customer complaints, and deviations were scattered across silos, with overdue chasing done via scheduled Notes agents.",
    solution: "Implemented a unified cycle: Identify → Investigate → Propose → Approve → Implement → Verify Effectiveness. Automated overdue reminders replaced multiple chase agents.",
    impact: "Faster closure times, improved cross-department accountability, and zero overdue CAPAs.",
    examples: ["NCR Deviation Tracker", "Customer Complaint Resolution Hub", "CAPA Root Cause Matrix", "Audit Finding Action Register"],
    keyHighlights: ["Automated 5-Why & Fishbone analysis forms", "SLA escalation timers at 7, 14, and 30 days", "Effectiveness verification signoff"]
  },
  {
    id: "slice-c",
    letter: "C",
    title: "Customer & Supply Chain Integration",
    appCount: 5,
    role: "Alignment workflow across functional departments",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Customer specifications, packaging questionnaires, and audit actions lived in disconnected silos across sales, quality, and logistics.",
    solution: "Aligned a review sequence: Production → QC → HOD → Marketing. Integrated customer questionnaires, country master requirements, and audit actions to ensure pre-dispatch readiness.",
    impact: "Reduced rework, eliminated customs holds, and achieved 100% pre-dispatch readiness.",
    examples: ["Customer Spec Matrix", "Country Regulatory Compliance Registry", "Packaging Questionnaire Approval", "Pre-Dispatch Sign-off"],
    keyHighlights: ["Country-specific ingredient rules checking", "Multi-initiator departmental sign-off", "Automated CoA generation"]
  },
  {
    id: "slice-d",
    letter: "D",
    title: "Warehouse & Logistics Operations",
    appCount: 10,
    role: "Connected warehouse data & approval & reminder workflows",
    tools: ["Power Apps", "Power Automate", "SharePoint", "SAP Data Patterns"],
    problem: "Warehouse notices and vendor agreements were handled via separate Lotus Notes forms with scheduled mail agents, resulting in delayed container turnaround.",
    solution: "Connected data across processes, added approval workflows, scheduled centralized reminders, and enabled sharing of pre-loading container inspection photos directly in Power Apps.",
    impact: "Faster processing, fewer missing inspection artifacts, and reduced demurrage fees.",
    examples: ["Pre-Loading Container Inspection", "Vendor Storage Agreement Hub", "Demurrage & Gate Pass Tracker", "Pallet Movement Log"],
    keyHighlights: ["Mobile photo capture of container seals & pallet integrity", "SAP PO synchronizations", "Automated gate pass issuance"]
  },
  {
    id: "slice-e",
    letter: "E",
    title: "Master Data & Reference Governance",
    appCount: 10,
    role: "Validated master data management with expiry/obsolescence controls",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Independent lists caused missed renewals for critical data like filters, calibrated tooling records, and safety data sheets.",
    solution: "Built validated master lists with automated expiry and obsolescence notifications. Integrated GHS Safety Data Sheets with scheduled re-certification alerts.",
    impact: "Higher governance, zero expired SDS sheets on factory floor, and reduced compliance risk.",
    examples: ["GHS Safety Data Sheet (SDS) Library", "Filter & Tooling Calibration Register", "Approved Vendor Master", "Raw Material Catalog"],
    keyHighlights: ["90/60/30-day proactive expiry notifications", "Automated version obsolescence watermarking", "Centralized search"]
  },
  {
    id: "slice-f",
    letter: "F",
    title: "Training & Continuous Improvement (CI)",
    appCount: 4,
    role: "Training staging & attendance follow-up automation",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Training and briefing records had limited attendance follow-up and paper-based records, leaving CI project visibility low.",
    solution: "Created staged review workflows with automated attendance follow-up and quizzes. The CI project register now actively tracks 2,000+ project documents.",
    impact: "Better training completion tracking, 100% briefing audit trail, and centralized CI ROI visibility.",
    examples: ["Competency & Training Tracker", "Continuous Improvement (Kaizen) Register", "Briefing Signoff Hub", "Quiz Assessment App"],
    keyHighlights: ["2,000+ CI project records indexed", "Digital signature attendance log", "Automated retraining triggers"]
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-freelance",
    role: "Enterprise Power Platform Solution Architect / Freelance",
    company: "Independent Consultant",
    location: "Kuala Lumpur, Malaysia / West Java, Indonesia",
    period: "May 2025 – Present",
    isCurrent: true,
    tags: ["Process Optimization", "Six Sigma Green Belt", "AI Management", "Dataverse", "ALM Pipelines"],
    bulletPoints: [
      "Led the enterprise migration of over 365 Lotus Domino and legacy business applications across more than 28 business units to Microsoft 365 and Dataverse, defining the migration strategy, data mapping, and governance for cutover.",
      "Translated executive requirements into scalable Power Platform roadmaps, establishing governance standards and security controls while supporting POCs, proposals, and signed SOWs.",
      "Architected hybrid applications utilizing React 19, TypeScript, Canvas Apps, and Dataverse, ensuring seamless integrations and modernized enterprise solutions.",
      "Strengthened release quality and deployment efficiency through Azure Pipelines, GitHub Actions, and PAC CLI-based ALM practices, facilitating continuous integration and delivery.",
      "Delivered the Isolated Rebate Approval System with Dataverse database isolation and multi-tier role-based security, ensuring compliance with strict financial audit requirements.",
      "Deployed AI Builder solutions for classification and search, improving ticket resolution times by 30-50%."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLvU986Laj-OuiWRRfw79rRmQ1Af2VbPFVtrPSB72Wo9V88kaO90hM2vSiIyegL0KpNPVaIs5k8pb8GidYMH6PXhA7U04s5hKIZ4-scgVIPhgbAMp-N_6pw-pdhgKxLgkXWXOpIMEfQ9qHOJryAln-fm5PbLUvdCozDpaUF5Wb2pd9j6FecPYaUUtGLRjQD6AmqriWMXqCsgqicT1ZFoRkTNVbVQAD2xFY6rvYgSbibYeYCQlXTZQMWg0P0"
  },
  {
    id: "exp-concentrix",
    role: "Operations Team Leader & Process Automation Lead",
    company: "Concentrix CVG",
    location: "Kuala Lumpur, Malaysia",
    period: "May 2023 – April 2025",
    tags: ["Team Scaling", "SLA Management", "Power Apps", "Power BI", "Workflow Analytics"],
    bulletPoints: [
      "Managed and mentored a 34-member multilingual customer support and operations team across 7 international markets, maintaining over 98% SLA compliance.",
      "Scaled operational team capacity by 380% within 18 months (from 9 to 34 agents) while maintaining operational quality, low attrition, and high customer satisfaction.",
      "Built PulseTrack and SmartFlow analytics tools using Power Apps and Power BI, eliminating 90% of manual reporting and freeing 60-80% of leadership administrative workload.",
      "Implemented automated reporting frameworks in Power BI and QlikView, enhancing operational efficiency by 25% and standardizing KPI visibility across teams.",
      "Engineered real-time data tracking pipelines achieving over 90% data accuracy and reducing average handling time (AHT) by 25%."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLvmmzx9g8QWMTnbVE5HiJ0Irunu5Gtf2ebevSFo95ySGtpMDBWPfFNg_FwzmCyJhHZufYZ9NNx98kiGNdmGVeFPP-GDa4zFBKy0uA8FMmewuUVgDgj4lU9Vl4uHA9cJ9iGSsDweASYMdl1lU9yhk8aaTgN90ntn5_N3xy1Nd4mSUNw1eoVbwjC8DgMT5D9RBEaIQOws3VpHkMu-YxRQL9hvDcNSO_plh7LeeNR3Lx_2iIVUiNU3yV3qvFo"
  },
  {
    id: "exp-accenture-lead",
    role: "Senior Team Lead / Operations Team Lead",
    company: "Accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "July 2017 – November 2022",
    tags: ["Leadership", "Efficiency", "Incident Protocol", "Talent Pipeline", "SQL Reporting"],
    bulletPoints: [
      "Directed a cross-functional team of 25-34 direct reports across 7 global markets, consistently exceeding 98% SLA compliance.",
      "Architected a new incident response protocol, reducing triage time by 60% and standardizing root-cause escalation paths.",
      "Mentored junior analysts, establishing a robust internal talent pipeline and career progression framework.",
      "Developed SQL-backed reporting dashboards using Tableau and QlikView to analyze decision accuracy, critical error rates, and escalation trends."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLuWNX9kpNESeN2LE9ZXEuM9faNOispkbhER3yOGZhkNWsbcKk2R-Sw4nsBnRZNbpQj78ce0zGX38bQWx2w1AHfh9Za1Zd0ap5E6G4Td0TKeDdpHY49etM5UZ_dW416O0p3Za3vVT0eo805LJw2_nzXXeo3IRcEVl6H5BCwszFhZm5eCKXtrGc0r98GFzEyucidiXCF7FQT5TiHAG_pF_EW6Xh6NB-lEFY8vkep7_n_dYdmLmN_f63REMnw"
  },
  {
    id: "exp-accenture-analyst",
    role: "Data Analyst",
    company: "Accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "Aug 2017 – May 2018",
    tags: ["Data Analysis", "KPI Tracking", "PL/SQL", "Process Bottlenecks"],
    bulletPoints: [
      "Conducted rigorous KPI analysis for enterprise service delivery metrics across multiple customer accounts.",
      "Identified critical operational bottlenecks, informing strategic pivot plans and automation opportunities."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLvMeGtVB-hkpzhJr1SmjJO1LGK5TgTd9cNasMmoNHqYRHtjIffVePmeKQcNcwZP2ih7bOE1yOcLFBDpFuHWlhAF--iCWFupocXWOayfV63jiWnEYHIFNVjM4VbVgSxkNHl9jjNWqXneRIJgW5TahbGQ1OVqLjn5tqNr1B2iNDFlm1hkz7jL3U1cBJ2RavDaPfLs-i9A7vUY99HtIsQ7iJl2JE3N-B_5uYzlLL4VVhk0_D1A2rkoqA3dkWE"
  },
  {
    id: "exp-education",
    role: "Academic Foundation",
    company: "Universiti Utara Malaysia (UUM)",
    location: "Sintok, Kedah, Malaysia",
    period: "Feb 2013 – Dec 2016",
    tags: ["Bachelor Degree", "International Business", "Scholarship Recipient", "Dean's Award"],
    bulletPoints: [
      "Bachelor of International Business Management (Honours).",
      "Minor in Logistics & Transportation.",
      "UUM International Scheme Scholarship Recipient.",
      "3x Dean's Academic Award recipient."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLsF2AZQa5UP7hM2UK6rk7VNQgF5ETWXXe-83-WuHc7KnrUO7-ItBHf8EqJ1vsh-G4xiWTEMlrDqIV8EmAzNOMM5kl_cxvL8mU2Qr-BN_n84YztVEEkjQIrEgBCCPX97ph6JEsGrsnc9aPuPlC6vd_E3wsw3_NMt6_4T3r-CqpDhNjSz4xhDbJ6lNTPNI41h2QNfQKIVACPb4MzZaDRHT1m0AoB8HwBxPO1aQraK_nMgrI5u9Vm_rSKlS4c"
  }
];

export const DEV_STACK: DevStackItem[] = [
  { code: "TS", name: "TypeScript / JavaScript", percentage: 85, color: "#a3c9ff" },
  { code: "Re", name: "React (PCF Components)", percentage: 80, color: "#00dbe7" },
  { code: "API", name: "REST APIs & Graph API", percentage: 90, color: "#dab9ff" },
  { code: "Fx", name: "Power Fx & Formulas", percentage: 98, color: "#0078d4" },
  { code: "SQL", name: "T-SQL / PL-SQL", percentage: 88, color: "#74f5ff" },
  { code: "AI", name: "AI Builder & Copilot Studio", percentage: 92, color: "#cda2ff" }
];

export const GOVERNANCE_ITEMS: GovernanceItem[] = [
  {
    icon: "terminal",
    name: "PAC CLI",
    description: "Solution packaging, component compilation, and deployment automation."
  },
  {
    icon: "all_inclusive",
    name: "Azure DevOps & Pipelines",
    description: "Multi-stage CI/CD pipelines for automated solution packing, unpacking, and test deployment."
  },
  {
    icon: "source",
    name: "Git / GitHub Actions",
    description: "Version control, feature branching strategies, and automated PR verification."
  },
  {
    icon: "admin_panel_settings",
    name: "CoE Starter Kit",
    description: "Environment strategy, DLP policy enforcement, tenant hygiene, and compliance governance."
  }
];

export const BUSINESS_COMPETENCIES: BusinessCompetency[] = [
  {
    icon: "speed",
    title: "SLA & KPI MANAGEMENT",
    description: "Designing metrics that align technical output with executive business goals and operational performance."
  },
  {
    icon: "handshake",
    title: "SERVICE DELIVERY",
    description: "End-to-end lifecycle management ensuring high availability, continuous uptime, and swift user adoption."
  },
  {
    icon: "manufacturing",
    title: "OPERATIONAL EFFICIENCY",
    description: "Identifying organizational bottlenecks and implementing intelligent automation to drastically reduce manual overhead."
  },
  {
    icon: "diversity_3",
    title: "CROSS-FUNCTIONAL LEAD",
    description: "Bridging the functional gap between stakeholders, business leads, software engineers, and IT administrators."
  }
];

export const ADDITIONAL_COMPETENCIES = [
  {
    category: "Customer Service Management",
    skills: ["SLA & KPI Management", "Service Delivery", "Operational Efficiency", "Escalation Management", "Quality Assurance (QA)", "Contact Center Operations", "Shift & Capacity Planning"]
  },
  {
    category: "Team Leadership & Development",
    skills: ["Performance Management", "Coaching & Mentoring", "Cross-Functional Leadership", "Change Enablement", "Hiring & Onboarding", "Attrition Reduction"]
  },
  {
    category: "Support Tools & Platforms",
    skills: ["Salesforce CRM", "Jira", "Zendesk", "Tableau", "Power BI", "Advanced MS Excel", "MS Teams", "Slack", "Zoom"]
  },
  {
    category: "Process Automation & Analytics",
    skills: ["Workflow Automation", "Incident Command & Management", "Escalation Triage", "Process Optimization", "Real-Time Dashboards"]
  },
  {
    category: "Languages",
    skills: ["English (Fluent)", "Malay (Fluent)", "Indonesian (Native)"]
  }
];

export const INTERVIEW_TOPICS: InterviewTopic[] = [
  {
    id: "domino-migration-strategy",
    category: "Enterprise Architecture",
    question: "How did you approach migrating 365+ legacy Lotus Domino applications without business interruption?",
    executiveSummary: "Implemented a 6-slice domain triage based on system reports, cataloging 24 High, 28 Medium, and 12 Low complexity applications. Replaced scheduled Domino background agents with event-driven Power Automate cloud flows and centralized Dataverse / SharePoint schemas.",
    deepDiveArchitecture: "1. Discovery & Analysis: Analyzed 54 Domino system reports to map data structures, access control lists (ACLs), and scheduled agent jobs.\n2. Triage & Slicing: Grouped apps into 6 functional slices (QMS, CAPA, Supply Chain, Warehouse, Master Data, CI).\n3. Dual-Track Delivery: Built standard operational apps using Canvas/Model-Driven Power Apps while developing 400+ custom React PCF components for specialized data grids.\n4. Cutover Governance: Implemented parallel run phases, automated data migration scripts via Azure Pipelines, and validated 100% record integrity before decommission.",
    keyArtifacts: ["54 System Reports", "878 Canvas Screens", "16-23 Live Production Power Apps", "Zero Downtime Cutover"]
  },
  {
    id: "dataverse-security-isolation",
    category: "Data Security & Governance",
    question: "How do you handle strict audit compliance, database isolation, and role-based access in Power Platform?",
    executiveSummary: "Utilized Dataverse Business Units, Security Roles, Field-Level Security, and dedicated environment isolation for sensitive financial flows like the Tasek Rebate Approval System.",
    deepDiveArchitecture: "• Isolated Database Environments: Created dedicated production environments with dedicated Dataverse instances to keep financial rebate formulas segregated.\n• Tiered Role-Based Access: Configured hierarchical security with Sales Approvers, Finance Reviewers, and Group COO sign-off.\n• Immutable Audit Trail: Enabled Dataverse auditing on all transactional entities to preserve timestamped modification logs for external financial auditors.\n• DLP Policies: Enforced tenant Data Loss Prevention policies restricting connector access to approved endpoints.",
    keyArtifacts: ["Dataverse Hierarchy", "DLP Policies", "Field-Level Security", "Audit Logging"]
  },
  {
    id: "alm-pac-cli",
    category: "DevOps & ALM",
    question: "What is your Application Lifecycle Management (ALM) workflow for Power Platform solutions?",
    executiveSummary: "Leveraged PAC CLI alongside Azure Pipelines and GitHub Actions to implement source-control driven ALM, converting raw solution zip files into version-controlled unmanaged xml and deploying managed solutions to UAT/Production.",
    deepDiveArchitecture: "1. Developer branches off main in Git.\n2. PAC CLI extracts solutions into unmanaged files (Canvas assets, PCF controls, cloud flow JSON).\n3. Pull Request triggers automated linting and solution checker validation in Azure DevOps.\n4. Build pipeline packages solution as 'Managed' and deploys to staging for QA sign-off.\n5. Release pipeline automates promotion to Production with environment variable configuration and connection reference re-mapping.",
    codeOrFlowSnippet: `# Example PAC CLI solution export & unpack\npac solution export --name "Enterprise_Rebate_Engine" --path "./solutions/Rebate_Managed.zip" --managed\npac solution unpack --zipfile "./solutions/Rebate_Managed.zip" --folder "./src/Solutions/Rebate"`,
    keyArtifacts: ["PAC CLI", "Azure Pipelines YAML", "Managed Solutions", "Solution Checker"]
  },
  {
    id: "ai-builder-integration",
    category: "AI & Intelligent Automation",
    question: "How do you deploy AI Builder models to optimize enterprise ticket triage and document extraction?",
    executiveSummary: "Trained custom NLP classification models on 120+ SOP categories, achieving 40-60% improvement in accuracy and cutting manual handling time by up to 80%.",
    deepDiveArchitecture: "• Model Training: Fine-tuned AI Builder text categorization models on historical customer service inquiries and standard operating procedures.\n• Automated Routing: Flow consumes incoming inquiries, queries AI Builder prediction API, extracts confidence score and recommended SOP.\n• Confidence Gating: If confidence > 85%, auto-suggests SOP link in agent interface; if < 85%, routes to Tier-2 senior lead for human-in-the-loop review.\n• Continuous Feedback: Feedback loop captures agent corrections to retrain models periodically.",
    keyArtifacts: ["120+ SOP Categories", "AI Builder NLP", "85% Confidence Gate", "-65% Handling Time"]
  }
];
