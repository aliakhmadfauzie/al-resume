import { ProjectItem, MigrationSlice, ExperienceItem, DevStackItem, GovernanceItem, BusinessCompetency, InterviewTopic, ImpactMetric, EnterprisePortfolio, ArchitectureGovernance, SkillProficiency, TransformationMetric, TrustSignal, ThoughtLeadershipItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ali Akhmad Fauzie",
  title: "Power Platform & Dynamics 365 Architect",
  tagline: "Dataverse-first architecture · 16 production Power Apps · C# Plugins & Power Platform Component Framework Controls · Enterprise Application Lifecycle Management · 28+ departments modernized",
  location: "Indonesia / Kuala Lumpur, Malaysia",
  email: "aliakhmadfauzie@gmail.com",
  phone: "+62 851-1055-2118 / +60 13-295 7406",
  linkedIn: "https://linkedin.com/in/aliakhmadf",
  github: "https://github.com/altechsolution123",
  yearsExperience: "9+ Years",
  summary: "Enterprise Power Platform & Dynamics 365 Solution Architect | Dataverse Data Architect | AI & Application Lifecycle Management Lead. I bridge the gap between complex business operations and enterprise-grade Microsoft Power Platform architecture. With 7+ years of service delivery and operations leadership, I bring a unique dual perspective: Dataverse-first data architecture with Business Units, Security Roles, and polymorphic lookups — not SharePoint as a production data store. SharePoint Online was used only as an interim cost-optimization staging layer during rapid migration, with a documented Dataverse Migration Blueprint as the enterprise-grade target."
};

export const KEY_METRICS = [
  { label: "FORMS CATALOGUED", value: "361", subtext: "Across 28+ Business Units" },
  { label: "PRODUCTION APPS", value: "16", subtext: "Live Power Apps in Production" },
  { label: "DEPARTMENTS MODERNIZED", value: "28+", subtext: "Quality, Supply Chain, Information Technology, Human Resources" },
  { label: "LICENSE COST AVOIDED", value: "RM4.2M/yr", subtext: "SharePoint interim vs premium licensing" }
];

export const IMPACT_METRICS = [
  { label: "Annual License Cost Avoided", value: "RM4.2M", description: "SharePoint Online interim deployment eliminated premium connector licensing" },
  { label: "Delivery Time Reduction", value: "70%", description: "AI-assisted pipelines vs manual development cycles" },
  { label: "Service Level Agreement Compliance", value: "98%+", description: "Across 361 migrated business applications and 2,000+ users" },
  { label: "Data Accuracy Achieved", value: "98%", description: "Typed SharePoint/Dataverse columns vs 70% with legacy free-text" }
];

export const CORE_PROJECTS: ProjectItem[] = [
  {
    id: "pulsetrack",
    title: "PulseTrack",
    subtitle: "Workforce Management — Real-time Agent Status Automation",
    category: "core",
    date: "May 2025",
    role: "Power Platform solution delivery & automation design",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Teams"],
    problem: "Agent status was captured via WhatsApp, requiring heavy manual roll-up for team leads, leading to delays and inaccuracies.",
    solution: "Implemented a real-time agent status tracking dashboard eliminating manual reporting, with automated aggregation and Power BI dashboards.",
    impact: "90% less manual reporting; 98% status accuracy; 60–80% reduction in team-lead workload.",
    impactMetrics: [
      { label: "Manual Reporting", value: "-90%" },
      { label: "Status Accuracy", value: "98%" },
      { label: "Manager Workload", value: "-70%" }
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
    subtitle: "Business Request Automation — Intelligent Routing & Approval",
    category: "core",
    date: "Aug 2025",
    role: "End-to-end request/approval system design",
    tools: ["Dataverse", "Power Apps", "Power Automate", "Power BI", "Teams"],
    problem: "Requests and approvals were routed via email and spreadsheets, resulting in delayed visibility and poor tracking.",
    solution: "Automated business request processing with intelligent routing — replaced manual triage with Power Automate approval flows, real-time Power BI dashboards, and Teams notifications.",
    impact: "80% manual task reduction; 90% data accuracy through typed Dataverse columns; 100% real-time tracking.",
    impactMetrics: [
      { label: "Manual Task Reduction", value: "-80%" },
      { label: "Data Accuracy", value: "90%" },
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
    title: "CS Resolver",
    subtitle: "AI-Powered Customer Service — Classification & Standard Operating Procedure Recommendation",
    category: "core",
    date: "Mar 2025",
    role: "AI-assisted classification & procedure recommendation",
    tools: ["Dataverse", "AI Builder", "Power Apps Canvas", "Power Automate"],
    problem: "Agents manually searched through complex Standard Operating Procedures to classify and route customer issues, leading to inconsistent handling and high resolution times.",
    solution: "Deployed an AI model on Dataverse to automatically classify the issue and recommend the appropriate Standard Operating Procedure with direct links for the agent. Typed Choice columns replace free-text categorization.",
    impact: "50% classification accuracy boost; 65% faster handling time; 120+ Standard Operating Procedure categories automated.",
    impactMetrics: [
      { label: "Classification Boost", value: "+50%" },
      { label: "Handling Time", value: "-65%" },
      { label: "Standard Operating Procedure Categories", value: "120+" }
    ],
    technicalDetails: [
      "Custom AI Builder text classification model trained on 120+ standard operating procedures",
      "Automated extraction of key sentiment and entity metadata from ticket payloads",
      "Dynamic hyperlink generation routing agents directly to corresponding Standard Operating Procedure chapters",
      "Confidence score thresholding triggering manual supervisor fallback when below 85%"
    ],
    liveDemoId: "cs-resolver",
    featured: true
  },
  {
    id: "document-finder",
    title: "DocFinder",
    subtitle: "AI Document Search — Intelligent Semantic Search Engine",
    category: "core",
    date: "May 2024",
    role: "AI search & ranking architecture",
    tools: ["AI Builder", "Lark Chat", "Lark Base"],
    problem: "Staff searched for documents by memory and keyword browsing, which was inefficient and frequently missed relevant compliance files.",
    solution: "Implemented an AI-powered operational guidelines search engine using AI Builder for intelligent document classification.",
    impact: "80% faster document search; 99% accuracy in guideline recommendations; 5000+ documents indexed.",
    impactMetrics: [
      { label: "Search Speed", value: "+80%" },
      { label: "Recommendation Accuracy", value: "99%" },
      { label: "Documents Indexed", value: "5000+" }
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
    title: "Rebate Approval — Dataverse Isolated Compliance",
    subtitle: "Standalone corporate approval workflow with complete Business Unit isolation",
    category: "standalone",
    date: "Jan 2025",
    role: "Rebate calculation + multi-level approval workflow",
    tools: ["Dataverse", "C# Plugins", "Power Apps", "Field Security", "Power Automate"],
    problem: "Rebate approvals took 2–3 days via email and manual checks, creating cashflow friction and human error.",
    solution: "Standalone corporate approval workflow on Dataverse with complete Business Unit isolation for security and audit compliance. Multi-tier approval matrix with Field Security Profiles on financial data, immutable audit trails via Dataverse Auditing, and C# Plugins enforcing segregation of duties at the data layer.",
    impact: "5 approval tiers; 100% audit compliance; complete data isolation; cycle time from 3 days to 15 minutes.",
    impactMetrics: [
      { label: "Approval Tiers", value: "5" },
      { label: "Audit Compliance", value: "100%" },
      { label: "Data Isolation", value: "Complete" }
    ],
    technicalDetails: [
      "7-component dynamic calculation engine: Base Rate + Volume Tier + Distance + Special Terms + Seasonal Adj + Tax - Credit Deductions",
      "Hard validation enforcing statutory Malaysian Ringgit 0.20/metric tonne ceiling",
      "C# Plugins enforcing segregation of duties at the data layer",
      "Dataverse Auditing for immutable audit trails on all financial transactions",
      "Field Security Profiles on rebate amounts and vendor financial data"
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
    solution: "Enforced that no vacancy is advertised without an approved requisition. Added an optional Chief Financial Officer gate for new headcount and a mandatory five-working-day internal advertisement lockout.",
    impact: "Stronger hiring governance, 100% compliant headcount budget, and zero unapproved postings.",
    impactMetrics: [
      { label: "Hiring Compliance", value: "100%" },
      { label: "Internal Lockout", value: "5 Days" },
      { label: "Audit Readiness", value: "100%" }
    ],
    technicalDetails: [
      "Strict state-machine workflow: Draft → Line Manager → Human Resources Head → Chief Financial Officer (if new headcount) → Published",
      "Automated 5-working-day lock preventing external posting before internal employee visibility",
      "Interview candidate evaluation scorecard with digital signatures"
    ],
    liveDemoId: "erp"
  },
  {
    id: "ask-lark",
    title: "AskLark",
    subtitle: "Intelligent Query Management — Categorization & Auto-Resolution",
    category: "standalone",
    date: "Jul 2024",
    role: "Knowledge query tracking & de-duplication",
    tools: ["Lark Base", "Lark Automation"],
    problem: "Repeated questions across operations teams and unstructured Quality Assurance answers cluttered operational channels.",
    solution: "Smart query management system that categorizes, routes, and resolves agent questions automatically.",
    impact: "60% faster response times; 50% reduction in repeated queries; 92% agent satisfaction.",
    impactMetrics: [
      { label: "Response Speed", value: "+60%" },
      { label: "Repeat Queries Cut", value: "-50%" },
      { label: "Agent Satisfaction", value: "92%" }
    ],
    technicalDetails: [
      "Similarity matching against indexed questions in Lark Base",
      "Auto-tagging by department and severity",
      "Analytics dashboard on unresolved query trends"
    ]
  },
  {
    id: "it-support-service-request",
    title: "Information Technology Support & Service Request Framework",
    subtitle: "Enterprise Information Technology Service Management Ticket Lifecycle & Automated Service Level Agreements",
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
      "Escalation notification triggered at 80% Service Level Agreement elapsed time"
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
    title: "Information Technology Server Health & Audit Checklist",
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
  },
  {
    id: "ioi-domino-dataverse",
    title: "IOI Domino → Dataverse Enterprise Architecture",
    subtitle: "Enterprise-wide modernization of 361 Lotus Domino forms",
    category: "migration",
    date: "Jun 2026",
    role: "Lead Solution Architect & Power Apps Rebuild Slice Delivery",
    tools: ["Dataverse", "Power Apps", "C# Plugins", "React 19", "TypeScript", "Power Automate", "GitHub Actions"],
    problem: "361 Lotus Domino forms across 28+ departments were end-of-life, with no path forward and massive maintenance overhead.",
    solution: "Designed Dataverse-first architecture with MainDB parent tables, polymorphic child lookups, Business Unit hierarchy, Security Role inheritance, and Field Security Profiles. SharePoint Online deployed as interim staging layer to avoid RM4.2M/yr premium licensing — with documented migration path to Dataverse as production target.",
    impact: "361 forms catalogued; 28+ Dataverse tables; 16 production apps; 12+ C# plugins; 70% faster delivery with AI-assisted development.",
    impactMetrics: [
      { label: "Forms Catalogued", value: "361" },
      { label: "Dataverse Tables", value: "28+" },
      { label: "Production Apps", value: "16" },
      { label: "C# Plugins", value: "12+" }
    ],
    technicalDetails: [
      "MainDB_{Dept} parent tables with FormCode discriminator column",
      "Child task tables with polymorphic lookups for cross-departmental relationships",
      "Business Unit hierarchy enabling departmental data isolation",
      "5-tier Security Role inheritance for approval workflows",
      "Field Security Profiles for Personally Identifiable Information and financial data columns",
      "Alternate keys for Oracle Enterprise Resource Planning bidirectional sync"
    ],
    featured: true
  },
  {
    id: "ai-dev-pipeline",
    title: "AI-Enabled Development Pipeline",
    subtitle: "50+ specialized AI agents across 12 automated workflow pipelines",
    category: "core",
    date: "Apr 2026",
    role: "AI agent architecture & pipeline orchestration",
    tools: ["Azure OpenAI", "GitHub Copilot", "Python", "TypeScript", "Copilot Studio", "Data Loss Prevention Guardrails"],
    problem: "Manual form migration and development cycles were slow and inconsistent across 361 forms.",
    solution: "Built 50+ specialized AI agents organized into 12 automated workflow pipelines — form migration, TypeScript React development, Canvas screen generation, Quality Assurance testing, and governance auditing. Each agent uses Azure OpenAI (GPT-4o) with Retrieval-Augmented Generation architecture grounded in Dataverse schema docs and PA YAML v3.0 reference. Data Loss Prevention policies enforce data classification and prevent Personally Identifiable Information leakage.",
    impact: "70% reduction in form migration effort; 50+ AI agents; 12 automated pipelines.",
    impactMetrics: [
      { label: "AI Agents", value: "50+" },
      { label: "Pipelines", value: "12" },
      { label: "Effort Reduction", value: "70%" }
    ],
    technicalDetails: [
      "Azure OpenAI GPT-4o with Retrieval-Augmented Generation architecture grounded in Dataverse schema documentation",
      "PA YAML v3.0 reference corpus for Canvas screen generation agents",
      "Data Loss Prevention policies enforcing data classification and Personally Identifiable Information leakage prevention",
      "Automated Quality Assurance testing agents validating solution checker compliance on every Pull Request"
    ],
    featured: true
  },
  {
    id: "eprocurement-oracle",
    title: "E-Procurement & Oracle Enterprise Resource Planning Integration",
    subtitle: "End-to-end procurement suite on Dataverse with bidirectional Oracle sync",
    category: "core",
    date: "Nov 2025",
    role: "Procurement architecture & Enterprise Resource Planning integration lead",
    tools: ["Dataverse", "C# Plugins", "Power Apps Canvas", "Custom Connectors", "Oracle Enterprise Resource Planning", "Power Automate"],
    problem: "Procurement processes were manual with no Enterprise Resource Planning integration, causing data entry duplication and budget control gaps.",
    solution: "Built end-to-end procurement suite on Dataverse — Purchase Requisition with Letter of Authority routing, Purchase Orders with multi-vendor splits, Capital in Progress Capex Budget Control, and Supplier Pre-Qualification Questionnaire Supplier Portal. Bidirectional Oracle PowerBiz Enterprise Resource Planning sync via Custom Connectors with C# Dataverse Plugins enforcing business rules at the data layer. Field Security Profiles on Purchase Order amounts and vendor financial data.",
    impact: "5 procurement modules; 100% Enterprise Resource Planning sync rate; 200+ vendor portal users.",
    impactMetrics: [
      { label: "Procurement Modules", value: "5" },
      { label: "Enterprise Resource Planning Sync Rate", value: "100%" },
      { label: "Vendor Portal Users", value: "200+" }
    ],
    technicalDetails: [
      "Custom Connectors for bidirectional Oracle PowerBiz Enterprise Resource Planning synchronization",
      "C# Dataverse Plugins on Pre/Post-Operation pipeline enforcing business rules at data layer",
      "Field Security Profiles on Purchase Order amounts and vendor financial data",
      "Multi-vendor Purchase Order split logic with capex budget control validation"
    ],
    featured: true
  },
  {
    id: "leadflow",
    title: "LeadFlow",
    subtitle: "Task & Progress Management System",
    category: "standalone",
    date: "Nov 2024",
    role: "Task tracking & progress management architecture",
    tools: ["Lark Task", "Lark Automation", "Lark Base", "Power BI"],
    problem: "Task tracking was fragmented across channels with no real-time visibility into team progress.",
    solution: "Built a task tracking and progress management system on the Lark ecosystem with automated progress aggregation and Power BI dashboards.",
    impact: "40% increase in task completion; 100% real-time visibility; 95% team adoption.",
    impactMetrics: [
      { label: "Task Completion", value: "+40%" },
      { label: "Real-Time Tracking", value: "100%" },
      { label: "Team Adoption", value: "95%" }
    ],
    technicalDetails: [
      "Lark Task integration with automated progress roll-up",
      "Lark Base backend with departmental task categorization",
      "Power BI dashboards for real-time team progress visibility"
    ]
  },
  {
    id: "leavesync",
    title: "LeaveSync",
    subtitle: "Smart Leave Management System",
    category: "standalone",
    date: "Sep 2024",
    role: "Leave management & approval workflow design",
    tools: ["Lark Base", "Lark Automation", "Lark Chat"],
    problem: "Leave requests were processed manually with slow approval cycles and poor tracking accuracy.",
    solution: "Automated leave management system with intelligent routing and approval workflows on the Lark ecosystem.",
    impact: "60% faster processing; 60% faster approvals; 90% tracking accuracy.",
    impactMetrics: [
      { label: "Processing Speed", value: "+60%" },
      { label: "Approval Speed", value: "+60%" },
      { label: "Tracking Accuracy", value: "90%" }
    ],
    technicalDetails: [
      "Lark Base leave balance tracking with automatic accrual calculation",
      "Lark Automation approval routing based on department hierarchy",
      "Lark Chat notifications for approval status updates"
    ]
  },
  {
    id: "marketpoint",
    title: "MarketPoint",
    subtitle: "Global Insurance Provider Point of Contact Monitoring System",
    category: "standalone",
    date: "Mar 2024",
    role: "Point of Contact monitoring & issue resolution architecture",
    tools: ["Lark Base", "Lark Automation", "Power BI"],
    problem: "Point-of-contact monitoring for Global Insurance Provider operations was manual with slow issue resolution across markets.",
    solution: "Built a dedicated Point of Contact monitoring system for Global Insurance Provider operations with automated issue tracking and resolution workflows.",
    impact: "40% monitoring efficiency gain; 50% faster issue resolution; 12 markets covered.",
    impactMetrics: [
      { label: "Monitoring Efficiency", value: "+40%" },
      { label: "Issue Resolution", value: "+50%" },
      { label: "Markets Covered", value: "12" }
    ],
    technicalDetails: [
      "Lark Base market-specific Point of Contact tracking with automated escalation",
      "Lark Automation issue routing based on market and severity",
      "Power BI dashboards for cross-market monitoring visibility"
    ]
  },
  {
    id: "gameintel",
    title: "GameIntel",
    subtitle: "Real-Time Event Alert System",
    category: "standalone",
    date: "Jan 2024",
    role: "Event alert & REST API integration architecture",
    tools: ["Game Data REST APIs", "Lark Automation", "Lark Chat"],
    problem: "Game moderators relied on external searches to identify and label events, causing delays and inconsistent accuracy.",
    solution: "Built an instant event alert system for game moderators using REST API integration with automated labeling and Lark Chat delivery.",
    impact: "80% reduction in external searches; 40% labeling accuracy boost; sub-second alert latency.",
    impactMetrics: [
      { label: "External Search Cut", value: "-80%" },
      { label: "Labeling Accuracy", value: "+40%" },
      { label: "Alert Latency", value: "<1s" }
    ],
    technicalDetails: [
      "REST API integration with game data providers for real-time event ingestion",
      "Lark Automation event classification and labeling pipeline",
      "Lark Chat instant alert delivery to moderator channels"
    ]
  },
  {
    id: "worksync",
    title: "WorkSync",
    subtitle: "Productivity & Attendance Tracker",
    category: "standalone",
    date: "Nov 2023",
    role: "Productivity tracking & attendance automation",
    tools: ["Lark Automation", "Lark Base", "Power BI"],
    problem: "Productivity and attendance tracking was manual with no real-time insights for team leads.",
    solution: "Built a smart productivity and attendance tracking platform with automated time tracking and Power BI dashboards.",
    impact: "30% productivity increase; 100% attendance accuracy; 98% team adoption.",
    impactMetrics: [
      { label: "Productivity Increase", value: "+30%" },
      { label: "Attendance Accuracy", value: "100%" },
      { label: "Team Adoption", value: "98%" }
    ],
    technicalDetails: [
      "Lark Automation automated time tracking with shift scheduling",
      "Lark Base attendance records with anomaly detection",
      "Power BI real-time productivity dashboards for team leads"
    ]
  },
  {
    id: "aht-optimization",
    title: "Average Handling Time Optimization Initiative",
    subtitle: "Data-driven Average Handling Time reduction",
    category: "standalone",
    date: "Sep 2023",
    role: "Process optimization & analytics lead",
    tools: ["Power Automate", "Power BI"],
    problem: "Average Handling Time across customer service operations was high with no data-driven optimization strategy.",
    solution: "Data-driven initiative to reduce Average Handling Time through automated workflow optimization, Power BI analytics, and process streamlining across 8 teams.",
    impact: "15% Average Handling Time reduction; 24 processes optimized; 8 teams impacted.",
    impactMetrics: [
      { label: "Average Handling Time Reduction", value: "-15%" },
      { label: "Processes Optimized", value: "24" },
      { label: "Teams Impacted", value: "8" }
    ],
    technicalDetails: [
      "Power BI analytics identifying Average Handling Time bottlenecks by process and team",
      "Power Automate workflow optimization for high-duration processes",
      "Process streamlining with standardized handling procedures across 8 teams"
    ]
  }
];

export const MIGRATION_OVERVIEW = {
  title: "IOI Domino → Dataverse Enterprise Architecture",
  period: "2023 – 2026",
  role: "Lead Solution Architect & Power Apps Rebuild Slice Delivery",
  scope: "Architected the enterprise migration of 361 Lotus Domino forms across 28+ business units to Microsoft 365, SharePoint Online, OneDrive, Teams, and Dataverse.",
  sliceDelivery: "Spearheaded the rebuild and deployment of 16 production Canvas & Model-Driven Power Apps, 7,878 Canvas screens, and 200+ custom React/TypeScript components as a live operational slice.",
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
      name: "Customer Requirement Review & Energy Management System",
      type: "Cross-Department & Multi-Site",
      resolution: "Unified disparate Johor/Penang routing behaviors and Quality Assurance/Marketing approval paths into single Dataverse-backed architectures."
    },
    {
      name: "Yearly Database Silos (e.g. CCCAR 2026, Sampling)",
      type: "Same-Department Variants",
      resolution: "Merged scattered, year-based Domino databases into continuous, scalable cloud data schemas with automated routing."
    }
  ]
};

export const ENTERPRISE_PORTFOLIO = {
  totalAppsModernized: 361,
  totalProductionApps: 16,
  totalCanvasScreens: 7878,
  totalComponents: 400,
  totalAIAgents: 50,
  description: "361 legacy Lotus Domino forms catalogued across 28+ departments. 16 are live in production on Power Apps; remaining are in pipeline — built, verified, or awaiting User Acceptance Testing deployment.",
  departments: [
    { name: "Information Technology & Technical Services", appCount: 8 },
    { name: "Human Resources & People Operations", appCount: 6 },
    { name: "Finance & Procurement", appCount: 4 },
    { name: "Quality Assurance & Quality Control", appCount: 4 },
    { name: "Operations & Supply Chain", appCount: 4 },
    { name: "Engineering & Maintenance", appCount: 2 },
    { name: "Safety Health & Environment", appCount: 1 }
  ]
};

export const ARCHITECTURE_GOVERNANCE = {
  dataverseModel: {
    icon: "account_tree",
    title: "Dataverse Entity-Relationship Model",
    points: [
      "MainDB_{Dept} parent tables with FormCode discriminator",
      "Child task tables with polymorphic lookups",
      "Business Unit hierarchy → departmental isolation",
      "Security Role inheritance (5-tier approval)",
      "Field Security Profiles for Personally Identifiable Information/financial data",
      "Alternate keys for Oracle Enterprise Resource Planning bidirectional sync"
    ]
  },
  securityCompliance: {
    icon: "shield",
    title: "Security & Compliance Architecture",
    points: [
      "Microsoft Entra ID: Conditional Access, Multi-Factor Authentication, Single Sign-On",
      "Dataverse Security Roles with row-level isolation",
      "Field Security Profiles for sensitive columns",
      "Good Practice immutable audit trails (column-level tracking)",
      "Web Content Accessibility Guidelines 2.2 AA accessibility (38+ anti-patterns)",
      "Open Web Application Security Project Top 10 security (55+ anti-patterns)"
    ]
  },
  almGovernance: {
    icon: "sync",
    title: "Application Lifecycle Management & Solution Governance",
    points: [
      "Solution Segmentation: Holding → Feature Area managed solutions",
      "Environment Variables for per-environment configuration",
      "Connection References for data source portability",
      "Power Platform CLI: solution clone, pack/unpack, code generate",
      "Staged promotion: Development → Build → Test → Production",
      "Solution Checker on every Pull Request for compliance gates"
    ]
  },
  proCodeExtensions: {
    icon: "code",
    title: "Pro-Code Extensions",
    points: [
      "C# Dataverse Plugins on Pre/Post-Operation pipeline",
      "Power Platform Component Framework Controls (TypeScript/React) for Model-Driven Apps",
      "Application Insights telemetry for plugin monitoring",
      "Custom workflow activities for complex business logic",
      "Server-side OData filtering for lookup components"
    ]
  }
};

export const MIGRATION_SLICES: MigrationSlice[] = [
  {
    id: "slice-a",
    letter: "A",
    title: "Quality Management System & Documentation Control",
    appCount: 23,
    role: "Lifecycle standardization & approval workflow automation",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
    problem: "Drafts, Standard Operating Procedures, work instructions, and test methods were stored across multiple Lotus Notes databases with inconsistent approvers.",
    solution: "Built a controlled lifecycle: Draft → Submitted → Approved → Briefing/Distribution → Complete. Replaced legacy pending-approval and pending-briefing agents with automated cloud workflows.",
    impact: "Consistent process control, ISO 9001 audit compliance, and significantly reduced administrative overhead.",
    examples: ["Standard Operating Procedure Requisition Portal", "Work Instruction Approver", "Laboratory Test Method Registry", "Controlled Copy Distribution Manager"],
    keyHighlights: ["Zero lost revision histories", "Automated distribution briefings with read-acknowledgment", "Multi-stage Quality Assurance Head sign-off"]
  },
  {
    id: "slice-b",
    letter: "B",
    title: "Quality Event & Corrective and Preventive Action",
    appCount: 12,
    role: "End-to-end corrective action cycle automation",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Nonconformance, customer complaints, and deviations were scattered across silos, with overdue chasing done via scheduled Notes agents.",
    solution: "Implemented a unified cycle: Identify → Investigate → Propose → Approve → Implement → Verify Effectiveness. Automated overdue reminders replaced multiple chase agents.",
    impact: "Faster closure times, improved cross-department accountability, and zero overdue Corrective and Preventive Actions.",
    examples: ["Nonconformance Report Deviation Tracker", "Customer Complaint Resolution Hub", "Corrective and Preventive Action Root Cause Matrix", "Audit Finding Action Register"],
    keyHighlights: ["Automated 5-Why & Fishbone analysis forms", "Service Level Agreement escalation timers at 7, 14, and 30 days", "Effectiveness verification signoff"]
  },
  {
    id: "slice-c",
    letter: "C",
    title: "Customer & Supply Chain Integration",
    appCount: 5,
    role: "Alignment workflow across functional departments",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Customer specifications, packaging questionnaires, and audit actions lived in disconnected silos across sales, quality, and logistics.",
    solution: "Aligned a review sequence: Production → Quality Control → Head of Department → Marketing. Integrated customer questionnaires, country master requirements, and audit actions to ensure pre-dispatch readiness.",
    impact: "Reduced rework, eliminated customs holds, and achieved 100% pre-dispatch readiness.",
    examples: ["Customer Spec Matrix", "Country Regulatory Compliance Registry", "Packaging Questionnaire Approval", "Pre-Dispatch Sign-off"],
    keyHighlights: ["Country-specific ingredient rules checking", "Multi-initiator departmental sign-off", "Automated Certificate of Analysis generation"]
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
    keyHighlights: ["Mobile photo capture of container seals & pallet integrity", "SAP Purchase Order synchronizations", "Automated gate pass issuance"]
  },
  {
    id: "slice-e",
    letter: "E",
    title: "Master Data & Reference Governance",
    appCount: 10,
    role: "Validated master data management with expiry/obsolescence controls",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Independent lists caused missed renewals for critical data like filters, calibrated tooling records, and safety data sheets.",
    solution: "Built validated master lists with automated expiry and obsolescence notifications. Integrated Globally Harmonized System Safety Data Sheets with scheduled re-certification alerts.",
    impact: "Higher governance, zero expired Safety Data Sheet documents on factory floor, and reduced compliance risk.",
    examples: ["Globally Harmonized System Safety Data Sheet Library", "Filter & Tooling Calibration Register", "Approved Vendor Master", "Raw Material Catalog"],
    keyHighlights: ["90/60/30-day proactive expiry notifications", "Automated version obsolescence watermarking", "Centralized search"]
  },
  {
    id: "slice-f",
    letter: "F",
    title: "Training & Continuous Improvement",
    appCount: 4,
    role: "Training staging & attendance follow-up automation",
    tools: ["Power Apps", "Power Automate", "SharePoint"],
    problem: "Training and briefing records had limited attendance follow-up and paper-based records, leaving Continuous Improvement project visibility low.",
    solution: "Created staged review workflows with automated attendance follow-up and quizzes. The Continuous Improvement project register now actively tracks 2,000+ project documents.",
    impact: "Better training completion tracking, 100% briefing audit trail, and centralized Continuous Improvement Return on Investment visibility.",
    examples: ["Competency & Training Tracker", "Continuous Improvement (Kaizen) Register", "Briefing Signoff Hub", "Quiz Assessment App"],
    keyHighlights: ["2,000+ Continuous Improvement project records indexed", "Digital signature attendance log", "Automated retraining triggers"]
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
    tags: ["Process Optimization", "Six Sigma Green Belt", "AI Management", "Dataverse", "Application Lifecycle Management Pipelines"],
    bulletPoints: [
      "Led the enterprise migration of 361 Lotus Domino and legacy business applications across more than 28 business units to Microsoft 365 and Dataverse, defining the migration strategy, data mapping, and governance for cutover.",
      "Translated executive requirements into scalable Power Platform roadmaps, establishing governance standards and security controls while supporting Proof of Concepts, proposals, and signed Statements of Work.",
      "Architected hybrid applications utilizing React 19, TypeScript, Canvas Apps, and Dataverse, ensuring seamless integrations and modernized enterprise solutions.",
      "Strengthened release quality and deployment efficiency through Azure Pipelines, GitHub Actions, and Power Platform CLI-based Application Lifecycle Management practices, facilitating continuous integration and delivery.",
      "Delivered the Isolated Rebate Approval System with Dataverse database isolation and multi-tier role-based security, ensuring compliance with strict financial audit requirements.",
      "Built 50+ specialized AI agents across 12 automated workflow pipelines using Azure OpenAI GPT-4o with Retrieval-Augmented Generation architecture, achieving 70% reduction in form migration effort."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLvU986Laj-OuiWRRfw79rRmQ1Af2VbPFVtrPSB72Wo9V88kaO90hM2vSiIyegL0KpNPVaIs5k8pb8GidYMH6PXhA7U04s5hKIZ4-scgVIPhgbAMp-N_6pw-pdhgKxLgkXWXOpIMEfQ9qHOJryAln-fm5PbLUvdCozDpaUF5Wb2pd9j6FecPYaUUtGLRjQD6AmqriWMXqCsgqicT1ZFoRkTNVbVQAD2xFY6rvYgSbibYeYCQlXTZQMWg0P0"
  },
  {
    id: "exp-concentrix",
    role: "Operations Team Leader & Process Automation Lead",
    company: "Concentrix CVG",
    location: "Kuala Lumpur, Malaysia",
    period: "May 2023 – April 2025",
    tags: ["Team Scaling", "Service Level Agreement Management", "Power Apps", "Power BI", "Workflow Analytics"],
    bulletPoints: [
      "Managed and mentored a 34-member multilingual customer support and operations team across 7 international markets, maintaining over 98% Service Level Agreement compliance.",
      "Scaled operational team capacity by 380% within 18 months (from 9 to 34 agents) while maintaining operational quality, low attrition, and high customer satisfaction.",
      "Built PulseTrack and SmartFlow analytics tools using Power Apps and Power BI, eliminating 90% of manual reporting and freeing 60-80% of leadership administrative workload.",
      "Implemented automated reporting frameworks in Power BI and QlikView, enhancing operational efficiency by 25% and standardizing Key Performance Indicator visibility across teams.",
      "Engineered real-time data tracking pipelines achieving over 90% data accuracy and reducing Average Handling Time by 25%."
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
      "Directed a cross-functional team of 25-34 direct reports across 7 global markets, consistently exceeding 98% Service Level Agreement compliance.",
      "Architected a new incident response protocol, reducing triage time by 60% and standardizing root-cause escalation paths.",
      "Mentored junior analysts, establishing a robust internal talent pipeline and career progression framework.",
      "Developed SQL-backed reporting dashboards using Tableau and QlikView to analyze decision accuracy, critical error rates, and escalation trends."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLuWNX9kpNESeN2LE9ZXEuM9faNOispkbhER3yOGZhkNWsbcKk2R-Sw4nsBnRZNbpQj78ce0zGX38bQWx2w1AHfh9Za1Zd0ap5E6G4Td0TKeDdpHY49etM5UZ_dW416O0p3Za3vVT0eo805LJw2_nzXXeo3IRcEVl6H5BCwszFhZm5eCKXtrGc0r98GFzEyucidiXCF7FQT5TiHAG_pF_EW6Xh6NB-lEFY8vkep7_n_dYdmLmN_f63REMnw"
  },
  {
    id: "exp-accenture-analyst",
    role: "Data Analyst",
    company: "Deloitte (3 months) → Accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "Feb 2017 – May 2018",
    tags: ["Data Analysis", "Key Performance Indicator Tracking", "PL/SQL", "Process Bottlenecks"],
    bulletPoints: [
      "Started with a 3-month stint at Deloitte before transitioning to Accenture as Data Analyst.",
      "Conducted rigorous Key Performance Indicator analysis for enterprise service delivery metrics across multiple customer accounts.",
      "Identified critical operational bottlenecks, informing strategic pivot plans and automation opportunities."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLvMeGtVB-hkpzhJr1SmjJO1LGK5TgTd9cNasMmoNHqYRHtjIffVePmeKQcNcwZP2ih7bOE1yOcLFBDpFuHWlhAF--iCWFupocXWOayfV63jiWnEYHIFNVjM4VbVgSxkNHl9jjNWqXneRIJgW5TahbGQ1OVqLjn5tqNr1B2iNDFlm1hkz7jL3U1cBJ2RavDaPfLs-i9A7vUY99HtIsQ7iJl2JE3N-B_5uYzlLL4VVhk0_D1A2rkoqA3dkWE"
  },
  {
    id: "exp-education",
    role: "Academic Foundation",
    company: "Universiti Utara Malaysia",
    location: "Sintok, Kedah, Malaysia",
    period: "Feb 2013 – Dec 2016",
    tags: ["Bachelor Degree", "International Business", "Scholarship Recipient", "Dean's Award"],
    bulletPoints: [
      "Bachelor of International Business Management (Honours).",
      "Minor in Logistics & Transportation.",
      "Universiti Utara Malaysia International Scheme Scholarship Recipient.",
      "3x Dean's Academic Award recipient."
    ],
    iconUrl: "https://lh3.googleusercontent.com/aida/AP1WRLsF2AZQa5UP7hM2UK6rk7VNQgF5ETWXXe-83-WuHc7KnrUO7-ItBHf8EqJ1vsh-G4xiWTEMlrDqIV8EmAzNOMM5kl_cxvL8mU2Qr-BN_n84YztVEEkjQIrEgBCCPX97ph6JEsGrsnc9aPuPlC6vd_E3wsw3_NMt6_4T3r-CqpDhNjSz4xhDbJ6lNTPNI41h2QNfQKIVACPb4MzZaDRHT1m0AoB8HwBxPO1aQraK_nMgrI5u9Vm_rSKlS4c"
  }
];

export const DEV_STACK: DevStackItem[] = [
  { code: "PP", name: "Power Apps", percentage: 100, color: "#0078d4" },
  { code: "PA", name: "Power Automate", percentage: 100, color: "#00dbe7" },
  { code: "DV", name: "Dataverse", percentage: 95, color: "#a3c9ff" },
  { code: "PG", name: "Power Pages", percentage: 90, color: "#74f5ff" },
  { code: "Fx", name: "Power Fx", percentage: 100, color: "#0078d4" },
  { code: "TS", name: "TypeScript", percentage: 100, color: "#3178c6" },
  { code: "JS", name: "JavaScript", percentage: 95, color: "#f7df1e" },
  { code: "Re", name: "React 19", percentage: 95, color: "#61dafb" },
  { code: "C#", name: "C# Plugins", percentage: 85, color: "#9b4f96" },
  { code: "SQL", name: "SQL / T-SQL", percentage: 85, color: "#cc2927" },
  { code: "Py", name: "Python", percentage: 85, color: "#3776ab" },
  { code: "Az", name: "Azure", percentage: 85, color: "#0078d4" },
  { code: "GH", name: "Git & GitHub Actions", percentage: 95, color: "#a3c9ff" },
  { code: "PAC", name: "Power Platform CLI", percentage: 95, color: "#00dbe7" },
  { code: "D365", name: "Dynamics 365", percentage: 85, color: "#0078d4" },
  { code: "M365", name: "Microsoft 365", percentage: 100, color: "#d83b01" }
];

export const SKILL_PROFICIENCIES = [
  { name: "Power Apps", level: "Master" },
  { name: "Power Automate", level: "Master" },
  { name: "Dataverse", level: "Expert" },
  { name: "Power Pages", level: "Expert" },
  { name: "Power Fx", level: "Master" },
  { name: "TypeScript", level: "Master" },
  { name: "JavaScript", level: "Expert" },
  { name: "HTML/CSS", level: "Expert" },
  { name: "C#", level: "Advanced" },
  { name: "SQL", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "React", level: "Expert" },
  { name: "Vite", level: "Expert" },
  { name: "shadcn/ui", level: "Expert" },
  { name: "Jotai", level: "Advanced" },
  { name: "TanStack Query", level: "Advanced" },
  { name: "Git", level: "Expert" },
  { name: "GitHub Actions", level: "Expert" },
  { name: "Azure Pipelines", level: "Advanced" },
  { name: "Power Platform CLI", level: "Expert" },
  { name: "PnP PowerShell", level: "Expert" },
  { name: "Azure", level: "Advanced" },
  { name: "Microsoft 365", level: "Master" },
  { name: "SharePoint Online", level: "Master" },
  { name: "Microsoft Entra ID", level: "Expert" },
  { name: "Dynamics 365", level: "Advanced" },
  { name: "Enterprise Solution Architecture", level: "Expert" },
  { name: "Power Platform Governance", level: "Expert" },
  { name: "AI-Enabled Delivery & Automation", level: "Expert" },
  { name: "Service Level Agreement & Operations Management (98%+)", level: "Expert" },
  { name: "Team Scaling (9→34+)", level: "Expert" },
  { name: "Stakeholder & Client Engagement", level: "Expert" },
  { name: "Statement of Work & Budget Oversight", level: "Expert" }
];

export const GOVERNANCE_ITEMS: GovernanceItem[] = [
  {
    icon: "terminal",
    name: "Power Platform CLI",
    description: "Solution packaging, component compilation, and deployment automation."
  },
  {
    icon: "all_inclusive",
    name: "Azure DevOps & Pipelines",
    description: "Multi-stage Continuous Integration/Continuous Deployment pipelines for automated solution packing, unpacking, and test deployment."
  },
  {
    icon: "source",
    name: "Git / GitHub Actions",
    description: "Version control, feature branching strategies, and automated Pull Request verification."
  },
  {
    icon: "admin_panel_settings",
    name: "Center of Excellence Starter Kit",
    description: "Environment strategy, Data Loss Prevention policy enforcement, tenant hygiene, and compliance governance."
  }
];

export const BUSINESS_COMPETENCIES: BusinessCompetency[] = [
  {
    icon: "speed",
    title: "SERVICE LEVEL AGREEMENT & KEY PERFORMANCE INDICATOR MANAGEMENT",
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
    description: "Bridging the functional gap between stakeholders, business leads, software engineers, and Information Technology administrators."
  }
];

export const INTERVIEW_TOPICS: InterviewTopic[] = [
  {
    id: "domino-migration-strategy",
    category: "Enterprise Architecture",
    question: "How did you approach migrating 361 legacy Lotus Domino forms without business interruption?",
    executiveSummary: "Implemented a 6-slice domain triage based on system reports, cataloging 24 High, 28 Medium, and 12 Low complexity applications. Replaced scheduled Domino background agents with event-driven Power Automate cloud flows and centralized Dataverse / SharePoint schemas.",
    deepDiveArchitecture: "1. Discovery & Analysis: Analyzed 54 Domino system reports to map data structures, access control lists, and scheduled agent jobs.\n2. Triage & Slicing: Grouped apps into 6 functional slices (Quality Management System, Corrective and Preventive Action, Supply Chain, Warehouse, Master Data, Continuous Improvement).\n3. Dual-Track Delivery: Built standard operational apps using Canvas/Model-Driven Power Apps while developing 400+ custom React Power Platform Component Framework components for specialized data grids.\n4. Cutover Governance: Implemented parallel run phases, automated data migration scripts via Azure Pipelines, and validated 100% record integrity before decommission.",
    keyArtifacts: ["54 System Reports", "7,878 Canvas Screens", "16 Live Production Power Apps", "Zero Downtime Cutover"]
  },
  {
    id: "dataverse-security-isolation",
    category: "Data Security & Governance",
    question: "How do you handle strict audit compliance, database isolation, and role-based access in Power Platform?",
    executiveSummary: "Utilized Dataverse Business Units, Security Roles, Field-Level Security, and dedicated environment isolation for sensitive financial flows like the Tasek Rebate Approval System.",
    deepDiveArchitecture: "• Isolated Database Environments: Created dedicated production environments with dedicated Dataverse instances to keep financial rebate formulas segregated.\n• Tiered Role-Based Access: Configured hierarchical security with Sales Approvers, Finance Reviewers, and Group Chief Operating Officer sign-off.\n• Immutable Audit Trail: Enabled Dataverse auditing on all transactional entities to preserve timestamped modification logs for external financial auditors.\n• Data Loss Prevention Policies: Enforced tenant Data Loss Prevention policies restricting connector access to approved endpoints.",
    keyArtifacts: ["Dataverse Hierarchy", "Data Loss Prevention Policies", "Field-Level Security", "Audit Logging"]
  },
  {
    id: "alm-pac-cli",
    category: "DevOps & Application Lifecycle Management",
    question: "What is your Application Lifecycle Management workflow for Power Platform solutions?",
    executiveSummary: "Leveraged Power Platform CLI alongside Azure Pipelines and GitHub Actions to implement source-control driven Application Lifecycle Management, converting raw solution zip files into version-controlled unmanaged xml and deploying managed solutions to User Acceptance Testing/Production.",
    deepDiveArchitecture: "1. Developer branches off main in Git.\n2. Power Platform CLI extracts solutions into unmanaged files (Canvas assets, Power Platform Component Framework controls, cloud flow JSON).\n3. Pull Request triggers automated linting and solution checker validation in Azure DevOps.\n4. Build pipeline packages solution as 'Managed' and deploys to staging for Quality Assurance sign-off.\n5. Release pipeline automates promotion to Production with environment variable configuration and connection reference re-mapping.",
    codeOrFlowSnippet: `# Example Power Platform CLI solution export & unpack\npac solution export --name "Enterprise_Rebate_Engine" --path "./solutions/Rebate_Managed.zip" --managed\npac solution unpack --zipfile "./solutions/Rebate_Managed.zip" --folder "./src/Solutions/Rebate"`,
    keyArtifacts: ["Power Platform CLI", "Azure Pipelines YAML", "Managed Solutions", "Solution Checker"]
  },
  {
    id: "ai-builder-integration",
    category: "AI & Intelligent Automation",
    question: "How do you deploy AI Builder models to optimize enterprise ticket triage and document extraction?",
    executiveSummary: "Trained custom Natural Language Processing classification models on 120+ Standard Operating Procedure categories, achieving 40-60% improvement in accuracy and cutting manual handling time by up to 80%.",
    deepDiveArchitecture: "• Model Training: Fine-tuned AI Builder text categorization models on historical customer service inquiries and standard operating procedures.\n• Automated Routing: Flow consumes incoming inquiries, queries AI Builder prediction API, extracts confidence score and recommended Standard Operating Procedure.\n• Confidence Gating: If confidence > 85%, auto-suggests Standard Operating Procedure link in agent interface; if < 85%, routes to Tier-2 senior lead for human-in-the-loop review.\n• Continuous Feedback: Feedback loop captures agent corrections to retrain models periodically.",
    keyArtifacts: ["120+ Standard Operating Procedure Categories", "AI Builder Natural Language Processing", "85% Confidence Gate", "-65% Handling Time"]
  }
];

export const POSITIONING_STATEMENT = {
  headline: "Enterprise Modernization, Architected End-to-End",
  statement: "I bridge the gap between complex business operations and enterprise-grade Microsoft Power Platform architecture — combining Dataverse-first data architecture with 9+ years of service delivery and operations leadership to retire legacy systems without losing audit integrity or operational continuity.",
  highlights: [
    "Dataverse-First Data Architecture",
    "361 Legacy Forms Modernized",
    "16 Production Power Apps Live",
    "RM4.2M/Year License Cost Avoided"
  ]
};

export const TRANSFORMATION_METRICS: TransformationMetric[] = [
  { label: "Approval Turnaround", baseline: "2–3 Days", result: "15 Minutes", description: "Tasek Rebate Approval System with multi-tier financial sign-off and immutable audit trails." },
  { label: "Legacy Applications", baseline: "361 Domino Forms", result: "16 Power Apps", description: "Consolidated across 6 functional slices with zero business interruption and 100% record integrity." },
  { label: "Document Retrieval", baseline: "Manual Search", result: "99% Accuracy", description: "AI-powered recommendation engine across 5,000+ indexed operational documents." },
  { label: "SOP Classification", baseline: "Manual Routing", result: "-65% Handling", description: "AI Builder Natural Language Processing across 120+ categories with human-in-the-loop gating." },
  { label: "Delivery Time", baseline: "Manual Cycles", result: "70% Faster", description: "AI-assisted development pipelines versus traditional build cycles." },
  { label: "License Cost", baseline: "Premium Connectors", result: "RM4.2M/yr Saved", description: "SharePoint interim staging layer versus premium licensing during migration." }
];

export const TRUST_SIGNALS: TrustSignal[] = [
  { icon: 'school', title: "Academic Foundation", detail: "Bachelor of International Business Management (Honours) — Dean's Award and scholarship recipient.", category: 'award' },
  { icon: 'groups', title: "Enterprise Leadership", detail: "Led a multi-year modernization program across 28+ business units and 2,000+ users.", category: 'leadership' },
  { icon: 'award', title: "Flagship Program", detail: "361 legacy forms consolidated into 16 production Power Apps with zero downtime cutover.", category: 'program' },
  { icon: 'award', title: "Cost Optimization", detail: "RM4.2M/year license cost avoided through Dataverse-first staging architecture.", category: 'award' }
];

export const THOUGHT_LEADERSHIP: ThoughtLeadershipItem[] = [
  {
    icon: 'account_tree',
    title: "Dataverse-First Architecture",
    summary: "Treat Dataverse as the enterprise system of record — not SharePoint as a production data store.",
    points: [
      "Business Units, Security Roles, and polymorphic lookups for data isolation",
      "SharePoint Online reserved as an interim cost-optimization staging layer",
      "Documented Dataverse Migration Blueprint as the enterprise-grade target"
    ]
  },
  {
    icon: 'route',
    title: "Migration as Sliced Delivery",
    summary: "Replace big-bang replatforming with domain triage and parallel-run cutovers.",
    points: [
      "6-slice functional triage from 54 Domino system reports",
      "Event-driven Power Automate flows replace scheduled background agents",
      "Parallel run phases validate 100% record integrity before decommission"
    ]
  },
  {
    icon: 'lightbulb',
    title: "AI with Human-in-the-Loop",
    summary: "Automate decisions where confidence is high, escalate to experts where it is not.",
    points: [
      "85% confidence gate auto-routes, below it escalates to Tier-2 review",
      "Continuous feedback loop retrains classification models",
      "Audit-ready suggestions keep humans accountable for final decisions"
    ]
  }
];
