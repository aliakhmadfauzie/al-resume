import { ProjectItem, TimelineItem, SkillCategory, CertificationItem, TestimonialItem } from "../types";

export const personalInfo = {
  name: "Ali Akhmad Fauzie",
  initials: "AF",
  avatarUrl: "https://altechsolutionportofilo.vercel.app/avatar.jpg",
  titles: {
    hybrid: "Fullstack Engineer (Android / iOS) & Enterprise Solution Architect",
    architect: "Fullstack Mobile & Web Engineer (Android/iOS) | Power Platform Architect",
    operations: "Operations Leader | Multilingual BPO Scaling & Lark Bot Automation at Concentrix",
  },
  tagline: "Fullstack Engineer · Android & iOS App Developer · Enterprise Power Platform · Multilingual BPO Scaling & Lark Bot Automation at Concentrix · 16+ Production Apps · Enterprise ALM",
  location: "Kuala Lumpur, Malaysia (Open to Global & Hybrid)",
  secondaryLocation: "Bandung, West Java, Indonesia",
  email: "aliakhmadfauzie@gmail.com",
  phoneMY: "+60 13-295 7406",
  phoneID: "+62 851 1055 2118",
  linkedin: "https://linkedin.com/in/aliakhmadf",
  linkedinHandle: "linkedin.com/in/aliakhmadf",
  portfolioUrl: "https://altechsolutionportofilo.vercel.app",
  customDomainUrl: "https://aliakhmadfauzie.my.id",
  github: "https://github.com/altechsolution123",
  whatsappUrl: "https://wa.me/60132957406",
  gpgKey: "0xAF8849F12026",
  bio: "Fullstack Engineer and Mobile App Developer (Android & iOS) with deep pro-code and low-code architecture experience spanning mobile apps (React Native, Flutter, Swift, Kotlin), modern fullstack web (TypeScript, React 19, Next.js, Node.js), Multilingual BPO team scaling, and Lark bot workflow automation at Concentrix. Proven track record modernizing hundreds of legacy Lotus Domino forms across 36 department-sites at a major conglomerate into modern, code-first Microsoft 365 architectures using standard-only connectors.",
  aboutParagraphs: [
    "Fullstack Engineer and Mobile App Developer (Android & iOS) with 9+ years of blended technical innovation, service delivery, and operations leadership across mobile, web, and enterprise architectures.",
    "Proven leader in Multilingual BPO team scaling and Lark bot workflow automation at Concentrix, scaling squads up to 34 agents across 7 regional markets with >98% SLA compliance and eliminating 90% of manual queue reporting through custom Lark Open Platform bots and AI integrations.",
    "Specializes in engineering high-performance mobile applications (Android with Kotlin/Java, iOS with Swift, React Native, and Flutter) as well as fullstack web architectures with TypeScript, React 19, Next.js, Node.js, and REST/GraphQL APIs. Combines deep pro-code software engineering with enterprise low-code velocity across Microsoft Power Platform, Dataverse, and C# Plugins.",
    "Proven track record leading large-scale digital modernization at a publicly listed Malaysian conglomerate (palm oil, oleochemicals, property) — cataloguing hundreds of legacy Lotus Domino forms across 36 department-sites and rebuilding them as a single code-first Power Apps platform backed by SharePoint Online (MainDB_IT + FormCode discriminator), using standard-only connectors and a governed Copilot-assisted migration pipeline."
  ],
  stats: [
    { label: "Forms Catalogued", value: "418+" },
    { label: "Production Apps Built", value: "1 Code-First" },
    { label: "Departments Modernized", value: "36" },
    { label: "License Cost", value: "Standard Connectors" },
    { label: "AI & Automation", value: "2 Agents + Skills" },
    { label: "Years Enterprise Exp", value: "9+ Yrs" }
  ]
};

export const projectsData: ProjectItem[] = [
  {
    "id": "pulsetrack",
    "title": "Concentrix Lark Bot Engine & Workforce Telemetry",
    "subtitle": "Multilingual BPO Scaling & Real-time Operations Automation Across 7 Markets",
    "description": "Agent status and ticket triage were fragmented across WhatsApp and manual spreadsheets, creating heavy reporting lag for team leads. Engineered a centralized Lark Open Platform bot engine and real-time Power BI telemetry that eliminated 90% of manual queue reporting across 34 multilingual specialists in 7 regional markets.",
    "fullOverview": "Engineered a centralized Lark Open Platform bot engine and real-time Power BI telemetry that eliminated 90% of manual queue reporting across 34 multilingual specialists in 7 regional markets. Integrated AI Builder text classification to route 120+ SOP categories automatically, cutting team lead workload by 70%.",
    "challenge": "Multilingual BPO agents across 7 APAC markets suffered from high average handling times and disjointed communication channels with zero unified operational visibility.",
    "solution": "Architected an end-to-end Lark Open Platform automation pipeline with webhook ingestion, AI Builder SOP classification, and automated Lark Base / Power BI executive roll-ups.",
    "results": [
      "Eliminated 90% of manual queue reporting with automated bot polling.",
      "Achieved 98% real-time attendance and status accuracy across 7 markets.",
      "70% reduction in team-lead administrative workload and escalation delays.",
      "Scalable architecture supporting 34 multilingual agents across APAC.",
      "Role: Certified Lark Developer & Operations Technical Lead"
    ],
    "category": "analytics",
    "cardColor": "#1e3a8a",
    "bgGradient": "from-[#1e3a8a] to-[#172554]",
    "accentHex": "#3b82f6",
    "isFlagship": true,
    "flagshipOrder": 2,
    "diagramType": "lark-bot-pipeline",
    "domainTags": [
      "BPO Workforce Governance",
      "7 Regional APAC Markets",
      "SLA Optimization",
      "Team Scaling (34 Agents)"
    ],
    "techTags": [
      "Lark Open Platform",
      "AI Builder",
      "Lark Base Automations",
      "Power BI",
      "TypeScript Webhooks"
    ],
    "tags": [
      "Lark Open Platform",
      "AI Builder",
      "Lark Base",
      "Power BI",
      "TypeScript",
      "Power Automate"
    ],
    "metrics": [
      {
        "label": "Manual Reporting",
        "value": "-90%",
        "highlight": true
      },
      {
        "label": "Status Accuracy",
        "value": "98%",
        "highlight": true
      },
      {
        "label": "Markets Scaled",
        "value": "7 APAC",
        "highlight": true
      },
      {
        "label": "Workload Cut",
        "value": "-70%",
        "highlight": true
      }
    ],
    "timeline": "2023 — 2025",
    "linkText": "EXPLORE BLUEPRINT & SPECS",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/pulsetrack",
    "codeSnippet": {
      "language": "typescript",
      "filename": "LarkWebhookDispatcher.ts",
      "code": "import { LarkClient, EventPayload } from '@larksuiteoapi/node-sdk';\n\n/**\n * Dispatches incoming multilingual BPO operational event payloads\n * to appropriate queue workers and automated Power BI telemetry aggregates.\n */\nexport async function handleLarkEvent(payload: EventPayload) {\n  const { event_type, sender_id, market_code, ticket_category } = payload;\n\n  // Validate HMAC signature for enterprise security\n  if (!verifyLarkSignature(payload.headers)) {\n    throw new Error('Unauthorized Lark webhook signature');\n  }\n\n  // Real-time queue routing based on market taxonomy\n  await LarkClient.im.message.create({\n    receive_id_type: 'chat_id',\n    receive_id: getRegionalChannelId(market_code),\n    content: JSON.stringify({\n      tag: 'interactive',\n      header: { title: `[${market_code}] Triage Alert: ${ticket_category}` },\n      elements: [\n        { tag: 'div', text: { tag: 'lark_md', content: `**Agent:** <at id=\"${sender_id}\"></at>` } }\n      ]\n    })\n  });\n}",
      "caption": "TypeScript webhook dispatcher processing event streams across 7 regional market queues."
    },
    "architecturePoints": [
      "Lark Open Platform webhook integration for instantaneous event dispatch",
      "Automated Power Automate schedule & webhook trigger for instantaneous roll-up",
      "Adaptive Cards delivered directly to Microsoft Teams and Lark leadership channels",
      "Role-based access ensuring data privacy across regional squads"
    ]
  },
  {
    "id": "smartflow",
    "title": "SmartFlow",
    "subtitle": "Business Request Automation — Intelligent Routing & Approval",
    "description": "Requests and approvals were routed via email and spreadsheets, resulting in delayed visibility and poor tracking. Automated business request processing with intelligent routing — replaced manual triage with Power Automate approval flows, real-time Power BI dashboards, and Teams notifications.",
    "fullOverview": "Automated business request processing with intelligent routing — replaced manual triage with Power Automate approval flows, real-time Power BI dashboards, and Teams notifications. 80% manual task reduction; 90% data accuracy through typed Dataverse columns; 100% real-time tracking.",
    "challenge": "Requests and approvals were routed via email and spreadsheets, resulting in delayed visibility and poor tracking.",
    "solution": "Automated business request processing with intelligent routing — replaced manual triage with Power Automate approval flows, real-time Power BI dashboards, and Teams notifications.",
    "results": [
      "80% manual task reduction; 90% data accuracy through typed Dataverse columns; 100% real-time tracking.",
      "Manual Task Reduction: -80%",
      "Data Accuracy: 90%",
      "Real-Time Tracking: 100%",
      "Role: End-to-end request/approval system design"
    ],
    "category": "analytics",
    "cardColor": "#0f766e",
    "bgGradient": "from-[#115e59] to-[#042f2e]",
    "accentHex": "#2dd4bf",
    "tags": [
      "Dataverse",
      "Power Apps",
      "Power Automate",
      "Power BI",
      "Teams"
    ],
    "metrics": [
      {
        "label": "Manual Task Reduction",
        "value": "-80%"
      },
      {
        "label": "Data Accuracy",
        "value": "90%"
      },
      {
        "label": "Real-Time Tracking",
        "value": "100%"
      }
    ],
    "timeline": "Aug 2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/smartflow",
    "architecturePoints": [
      "Responsive Power Apps Canvas front-end with dynamic form validations",
      "Multi-stage sequential & parallel Power Automate approval chains with timeout escalations",
      "Interactive Power BI telemetry embedded inside Microsoft Teams",
      "Automatic Outlook actionable messages allowing one-click approvals from inbox"
    ]
  },
  {
    "id": "cs-resolver",
    "title": "CS Resolver",
    "subtitle": "AI-Powered Customer Service — Classification & Standard Operating Procedure Recommendation",
    "description": "Agents manually searched through complex Standard Operating Procedures to classify and route customer issues, leading to inconsistent handling and high resolution times. Deployed an AI model on Dataverse to automatically classify the issue and recommend the appropriate Standard Operating Procedure with direct links for the agent. Typed Choice columns replace free-text categorization.",
    "fullOverview": "Deployed an AI model on Dataverse to automatically classify the issue and recommend the appropriate Standard Operating Procedure with direct links for the agent. Typed Choice columns replace free-text categorization. 50% classification accuracy boost; 65% faster handling time; 120+ Standard Operating Procedure categories automated.",
    "challenge": "Agents manually searched through complex Standard Operating Procedures to classify and route customer issues, leading to inconsistent handling and high resolution times.",
    "solution": "Deployed an AI model on Dataverse to automatically classify the issue and recommend the appropriate Standard Operating Procedure with direct links for the agent. Typed Choice columns replace free-text categorization.",
    "results": [
      "50% classification accuracy boost; 65% faster handling time; 120+ Standard Operating Procedure categories automated.",
      "Classification Boost: +50%",
      "Handling Time: -65%",
      "Standard Operating Procedure Categories: 120+",
      "Role: AI-assisted classification & procedure recommendation"
    ],
    "category": "ai",
    "cardColor": "#4338ca",
    "bgGradient": "from-[#3730a3] to-[#1e1b4b]",
    "accentHex": "#818cf8",
    "tags": [
      "Dataverse",
      "AI Builder",
      "Power Apps Canvas",
      "Power Automate"
    ],
    "metrics": [
      {
        "label": "Classification Boost",
        "value": "+50%"
      },
      {
        "label": "Handling Time",
        "value": "-65%"
      },
      {
        "label": "Standard Operating Procedure Categories",
        "value": "120+"
      }
    ],
    "timeline": "Mar 2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/cs-resolver",
    "architecturePoints": [
      "Custom AI Builder text classification model trained on 120+ standard operating procedures",
      "Automated extraction of key sentiment and entity metadata from ticket payloads",
      "Dynamic hyperlink generation routing agents directly to corresponding Standard Operating Procedure chapters",
      "Confidence score thresholding triggering manual supervisor fallback when below 85%"
    ]
  },
  {
    "id": "document-finder",
    "title": "DocFinder",
    "subtitle": "AI Document Search — Intelligent Semantic Search Engine",
    "description": "Staff searched for documents by memory and keyword browsing, which was inefficient and frequently missed relevant compliance files. Implemented an AI-powered operational guidelines search engine using AI Builder for intelligent document classification.",
    "fullOverview": "Implemented an AI-powered operational guidelines search engine using AI Builder for intelligent document classification. 80% faster document search; 99% accuracy in guideline recommendations; 5000+ documents indexed.",
    "challenge": "Staff searched for documents by memory and keyword browsing, which was inefficient and frequently missed relevant compliance files.",
    "solution": "Implemented an AI-powered operational guidelines search engine using AI Builder for intelligent document classification.",
    "results": [
      "80% faster document search; 99% accuracy in guideline recommendations; 5000+ documents indexed.",
      "Search Speed: +80%",
      "Recommendation Accuracy: 99%",
      "Documents Indexed: 5000+",
      "Role: AI search & ranking architecture"
    ],
    "category": "ai",
    "cardColor": "#b45309",
    "bgGradient": "from-[#92400e] to-[#451a03]",
    "accentHex": "#f59e0b",
    "tags": [
      "AI Builder",
      "Lark Chat",
      "Lark Base"
    ],
    "metrics": [
      {
        "label": "Search Speed",
        "value": "+80%"
      },
      {
        "label": "Recommendation Accuracy",
        "value": "99%"
      },
      {
        "label": "Documents Indexed",
        "value": "5000+"
      }
    ],
    "timeline": "May 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/document-finder",
    "architecturePoints": [
      "Vector/keyword weighted scoring algorithm for enterprise documentation",
      "Dynamic document tagging with taxonomy extraction upon upload",
      "Security trimming ensuring users only discover files permitted by their Azure AD group",
      "Instant preview viewer with highlighted keyword occurrences"
    ]
  },
  {
    "id": "tasek-cement-rebate",
    "title": "Tasek Cement Rebate & GxP Compliance Architecture",
    "subtitle": "5-Tier Corporate Approval Matrix with Field Security Profiles & C# Plugins",
    "description": "Rebate approvals previously took 2–3 days via email and manual spreadsheets, causing cashflow friction and compliance vulnerabilities. Designed an enterprise Dataverse architecture with complete Business Unit isolation, Field Security Profiles on financial totals, immutable audit logs, and C# Plugins enforcing strict segregation of duties.",
    "fullOverview": "Standalone corporate approval workflow on Dataverse with complete Business Unit isolation for security and audit compliance. Multi-tier approval matrix with Field Security Profiles on financial data, immutable audit trails via Dataverse Auditing, and C# Plugins enforcing segregation of duties at the data layer. 5 approval tiers; 100% audit compliance; complete data isolation; cycle time cut from 3 days to 15 minutes.",
    "challenge": "Rebate calculation errors and unmonitored approval delegations risked statutory non-compliance and delayed commercial settlements by up to 72 hours.",
    "solution": "Engineered a 4-stage C# Plugin pipeline enforcing role checking, threshold matrix limits, immutable Dataverse audit logs, and Outlook actionable messages for rapid sign-offs.",
    "results": [
      "Accelerated approval cycle time from 3 business days down to 15 minutes.",
      "100% audit compliance achieved with zero permission drifts or untracked changes.",
      "Segregation of duties enforced at the database transaction layer via C# Plugins.",
      "5 automated authorization tiers based on dynamic cumulative dealer spend.",
      "Role: Financial Workflow Architecture & C# Plugin Development"
    ],
    "category": "enterprise",
    "cardColor": "#dc2626",
    "bgGradient": "from-[#991b1b] to-[#450a0a]",
    "accentHex": "#ef4444",
    "isFlagship": true,
    "flagshipOrder": 3,
    "diagramType": "plugin-audit-security",
    "domainTags": [
      "Financial Audit Compliance",
      "GxP Segregation of Duties",
      "Cashflow Velocity",
      "Dealer Rebate Governance"
    ],
    "techTags": [
      "Dataverse",
      "C# Stage 20/40 Plugins",
      "Field Security Profiles",
      "Outlook Actionable Cards",
      "Power Automate"
    ],
    "tags": [
      "Dataverse",
      "C# Plugins",
      "Power Apps",
      "Field Security",
      "Power Automate"
    ],
    "metrics": [
      {
        "label": "Cycle Time",
        "value": "15 Mins",
        "highlight": true
      },
      {
        "label": "Audit Compliance",
        "value": "100%",
        "highlight": true
      },
      {
        "label": "Approval Tiers",
        "value": "5 Levels",
        "highlight": true
      },
      {
        "label": "Data Isolation",
        "value": "Complete",
        "highlight": true
      }
    ],
    "timeline": "Jan 2025",
    "linkText": "EXPLORE BLUEPRINT & SPECS",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/tasek-cement-rebate",
    "codeSnippet": {
      "language": "csharp",
      "filename": "RebateApprovalSecurityPlugin.cs",
      "code": "using System;\nusing Microsoft.Xrm.Sdk;\n\nnamespace Tasek.Dataverse.Plugins.Rebates\n{\n    /// <summary>\n    /// Pre-Operation Stage 20 Plugin enforcing segregation of duties and\n    /// tiered financial delegation limits for cement dealer rebate credits.\n    /// </summary>\n    public class RebateApprovalSecurityPlugin : IPlugin\n    {\n        public void Execute(IServiceProvider serviceProvider)\n        {\n            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));\n            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));\n            var service = serviceFactory.CreateOrganizationService(context.UserId);\n\n            if (context.InputParameters.Contains(\"Target\") && context.InputParameters[\"Target\"] is Entity target)\n            {\n                decimal rebateAmount = target.GetAttributeValue<Money>(\"tsk_rebateamount\")?.Value ?? 0m;\n                Guid approverId = context.UserId;\n                Guid requesterId = target.GetAttributeValue<EntityReference>(\"tsk_requesterid\")?.Id ?? Guid.Empty;\n\n                // Enforce Segregation of Duties: Creator cannot self-authorize rebate\n                if (approverId == requesterId)\n                {\n                    throw new InvalidPluginExecutionException(\"Audit Violation: Requester is legally barred from self-approving rebate lines.\");\n                }\n\n                // Tiered delegation limit verification\n                if (rebateAmount > 100000m && !UserHasExecutiveSignoffRole(service, approverId))\n                {\n                    throw new InvalidPluginExecutionException(\"Tier Limit Exceeded: Rebates over MYR 100,000 require Managing Director approval.\");\n                }\n            }\n        }\n    }\n}",
      "caption": "C# Pre-Operation plugin enforcing segregation of duties and financial threshold authorization."
    },
    "architecturePoints": [
      "7-component dynamic calculation engine: Base Rate + Volume Tier + Distance + Special Terms + Seasonal Adj + Tax - Credit Deductions",
      "Hard validation enforcing statutory Malaysian Ringgit 0.20/metric tonne ceiling",
      "C# Plugins enforcing segregation of duties at the data layer",
      "Dataverse Auditing for immutable audit trails on all financial transactions",
      "Field Security Profiles on rebate amounts and vendor financial data"
    ]
  },
  {
    "id": "staff-requisition",
    "title": "Staff Requisition Form & Vacancy Control",
    "subtitle": "Four-Tier Headcount Governance & Interview Enforcement",
    "description": "Vacancies could be advertised without a completed four-tier requisition and interview log, causing unauthorized budget commitments. Enforced that no vacancy is advertised without an approved requisition. Added an optional Chief Financial Officer gate for new headcount and a mandatory five-working-day internal advertisement lockout.",
    "fullOverview": "Enforced that no vacancy is advertised without an approved requisition. Added an optional Chief Financial Officer gate for new headcount and a mandatory five-working-day internal advertisement lockout. Stronger hiring governance, 100% compliant headcount budget, and zero unapproved postings.",
    "challenge": "Vacancies could be advertised without a completed four-tier requisition and interview log, causing unauthorized budget commitments.",
    "solution": "Enforced that no vacancy is advertised without an approved requisition. Added an optional Chief Financial Officer gate for new headcount and a mandatory five-working-day internal advertisement lockout.",
    "results": [
      "Stronger hiring governance, 100% compliant headcount budget, and zero unapproved postings.",
      "Hiring Compliance: 100%",
      "Internal Lockout: 5 Days",
      "Audit Readiness: 100%",
      "Role: Vacancy control & interview logging enforcement"
    ],
    "category": "enterprise",
    "cardColor": "#0284c7",
    "bgGradient": "from-[#0369a1] to-[#082f49]",
    "accentHex": "#38bdf8",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint"
    ],
    "metrics": [
      {
        "label": "Hiring Compliance",
        "value": "100%"
      },
      {
        "label": "Internal Lockout",
        "value": "5 Days"
      },
      {
        "label": "Audit Readiness",
        "value": "100%"
      }
    ],
    "timeline": "Nov–Dec 2023",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/staff-requisition",
    "architecturePoints": [
      "Strict state-machine workflow: Draft → Line Manager → Human Resources Head → Chief Financial Officer (if new headcount) → Published",
      "Automated 5-working-day lock preventing external posting before internal employee visibility",
      "Interview candidate evaluation scorecard with digital signatures"
    ]
  },
  {
    "id": "ask-lark",
    "title": "AskLark",
    "subtitle": "Intelligent Query Management — Categorization & Auto-Resolution",
    "description": "Repeated questions across operations teams and unstructured Quality Assurance answers cluttered operational channels. Smart query management system that categorizes, routes, and resolves agent questions automatically.",
    "fullOverview": "Smart query management system that categorizes, routes, and resolves agent questions automatically. 60% faster response times; 50% reduction in repeated queries; 92% agent satisfaction.",
    "challenge": "Repeated questions across operations teams and unstructured Quality Assurance answers cluttered operational channels.",
    "solution": "Smart query management system that categorizes, routes, and resolves agent questions automatically.",
    "results": [
      "60% faster response times; 50% reduction in repeated queries; 92% agent satisfaction.",
      "Response Speed: +60%",
      "Repeat Queries Cut: -50%",
      "Agent Satisfaction: 92%",
      "Role: Knowledge query tracking & de-duplication"
    ],
    "category": "workflow",
    "cardColor": "#7c3aed",
    "bgGradient": "from-[#6d28d9] to-[#2e1065]",
    "accentHex": "#a78bfa",
    "tags": [
      "Lark Base",
      "Lark Automation"
    ],
    "metrics": [
      {
        "label": "Response Speed",
        "value": "+60%"
      },
      {
        "label": "Repeat Queries Cut",
        "value": "-50%"
      },
      {
        "label": "Agent Satisfaction",
        "value": "92%"
      }
    ],
    "timeline": "Jul 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/ask-lark",
    "architecturePoints": [
      "Similarity matching against indexed questions in Lark Base",
      "Auto-tagging by department and severity",
      "Analytics dashboard on unresolved query trends"
    ]
  },
  {
    "id": "it-support-service-request",
    "title": "Information Technology Support & Service Request Framework",
    "subtitle": "Enterprise Information Technology Service Management Ticket Lifecycle & Automated Service Level Agreements",
    "description": "Lotus Notes service tickets had hidden site routing and no structured requestor close-out, leading to poor closure rates and ticket hoarding. Designed a Submit → Admin Triage → Assign → Resolve → Requestor Accept & Rate → Close lifecycle. Added a 72-hour accept window and 30-day automatic close.",
    "fullOverview": "Designed a Submit → Admin Triage → Assign → Resolve → Requestor Accept & Rate → Close lifecycle. Added a 72-hour accept window and 30-day automatic close. 56 mapped columns; 5 flows; 5 screens; 95% on-time resolution; automated audit trail.",
    "challenge": "Lotus Notes service tickets had hidden site routing and no structured requestor close-out, leading to poor closure rates and ticket hoarding.",
    "solution": "Designed a Submit → Admin Triage → Assign → Resolve → Requestor Accept & Rate → Close lifecycle. Added a 72-hour accept window and 30-day automatic close.",
    "results": [
      "56 mapped columns; 5 flows; 5 screens; 95% on-time resolution; automated audit trail.",
      "Mapped Columns: 56",
      "Accept Window: 72 Hours",
      "Auto Close: 30 Days",
      "Role: Service request lifecycle & routing framework"
    ],
    "category": "enterprise",
    "cardColor": "#059669",
    "bgGradient": "from-[#047857] to-[#022c22]",
    "accentHex": "#34d399",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Dataverse"
    ],
    "metrics": [
      {
        "label": "Mapped Columns",
        "value": "56"
      },
      {
        "label": "Accept Window",
        "value": "72 Hours"
      },
      {
        "label": "Auto Close",
        "value": "30 Days"
      }
    ],
    "timeline": "2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/it-support-service-request",
    "architecturePoints": [
      "5 custom Power Apps screens covering Ticket Entry, Dispatcher Triage, Tech Workbench, Requester Review, and Metrics",
      "Automated timer flow monitoring 72-hour customer satisfaction rating countdown",
      "Escalation notification triggered at 80% Service Level Agreement elapsed time"
    ]
  },
  {
    "id": "infosec-doc-register",
    "title": "Information Security Group Documentation Register",
    "subtitle": "Publication Control & Reader Permissions Governance",
    "description": "Document metadata and reader permissions were maintained with weak publication control and zero audit history on Lotus Notes. Implemented an Author Submit → Owner Review → Publish with Reader Permissions workflow.",
    "fullOverview": "Implemented an Author Submit → Owner Review → Publish with Reader Permissions workflow. 100% controlled, auditable publishing across all information security policies.",
    "challenge": "Document metadata and reader permissions were maintained with weak publication control and zero audit history on Lotus Notes.",
    "solution": "Implemented an Author Submit → Owner Review → Publish with Reader Permissions workflow.",
    "results": [
      "100% controlled, auditable publishing across all information security policies.",
      "Security Governance: 100%",
      "Audit Compliance: ISO 27001",
      "Permission Drifts: 0",
      "Role: Publication control & reader permissions governance"
    ],
    "category": "workflow",
    "cardColor": "#1e3a8a",
    "bgGradient": "from-[#1e3a8a] to-[#172554]",
    "accentHex": "#3b82f6",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint"
    ],
    "metrics": [
      {
        "label": "Security Governance",
        "value": "100%"
      },
      {
        "label": "Audit Compliance",
        "value": "ISO 27001"
      },
      {
        "label": "Permission Drifts",
        "value": "0"
      }
    ],
    "timeline": "2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/infosec-doc-register",
    "architecturePoints": [
      "Dynamic SharePoint item-level permission inheritance breaking on publication",
      "Automated reader group assignment based on classification tier (Public, Internal, Confidential, Restricted)",
      "Periodic access certification reminder flows"
    ]
  },
  {
    "id": "it-server-checklist",
    "title": "Information Technology Server Health & Audit Checklist",
    "subtitle": "Standardized Weekly Server Audit & Hardware Diagnostics",
    "description": "Weekly server health notes were captured outside a numbered audit register, resulting in overlooked disk space warnings and unpatched servers. Standardized a weekly audit with numbering: `Server Checklist-[year]-[week]-[sequence]`. Captures processor, memory, drives, and OS patch updates. Follows a Technician Submit → Systems Manager Review workflow.",
    "fullOverview": "Standardized a weekly audit with numbering: `Server Checklist-[year]-[week]-[sequence]`. Captures processor, memory, drives, and OS patch updates. Follows a Technician Submit → Systems Manager Review workflow. 5 screens; 100% weekly audit adherence; proactive hardware failure prevention.",
    "challenge": "Weekly server health notes were captured outside a numbered audit register, resulting in overlooked disk space warnings and unpatched servers.",
    "solution": "Standardized a weekly audit with numbering: `Server Checklist-[year]-[week]-[sequence]`. Captures processor, memory, drives, and OS patch updates. Follows a Technician Submit → Systems Manager Review workflow.",
    "results": [
      "5 screens; 100% weekly audit adherence; proactive hardware failure prevention.",
      "Audit Adherence: 100%",
      "Failure Warning: Proactive",
      "Audit Traceability: Standardized",
      "Role: Standard weekly audit checklist + review workflow"
    ],
    "category": "enterprise",
    "cardColor": "#0f766e",
    "bgGradient": "from-[#115e59] to-[#042f2e]",
    "accentHex": "#2dd4bf",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint"
    ],
    "metrics": [
      {
        "label": "Audit Adherence",
        "value": "100%"
      },
      {
        "label": "Failure Warning",
        "value": "Proactive"
      },
      {
        "label": "Audit Traceability",
        "value": "Standardized"
      }
    ],
    "timeline": "2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/it-server-checklist",
    "architecturePoints": [
      "Auto-numbering formula: Server Checklist-[YYYY]-[WW]-[####]",
      "Dynamic thresholds highlighting memory/disk capacity over 85% in red",
      "Manager sign-off notification with one-click approval summary"
    ]
  },
  {
    "id": "ioi-domino-dataverse",
    "title": "IOI Domino → Microsoft 365 Enterprise Modernization",
    "subtitle": "Enterprise-Wide Modernization of Hundreds of Lotus Domino Forms Across 36 Department-Sites",
    "description": "Hundreds of legacy Lotus Domino forms across 36 department-sites were end-of-life with massive maintenance overhead. Built a single code-first Power Apps app per site (React + TypeScript + Vite + shadcn/ui) persisted on one SharePoint main list (MainDB_IT with a FormCode discriminator) plus extension and config lists, orchestrated by Power Automate — using standard-only connectors to avoid premium licensing.",
    "fullOverview": "A single code-first Power Apps app (React 19 + TypeScript + Vite + shadcn/ui) on the @microsoft/power-apps SDK, with one SharePoint main list per site (MainDB_IT / MainDB_IT_JHR) discriminated by a FormCode column, plus extension and config lists. Business logic and multi-stage approvals are delivered in React code and Power Automate flows (e.g., the 5-stage EAF approval and UAT sign-off matrices). Standard connectors (SharePoint, Microsoft 365 Users, Office 365 Outlook) avoid premium-connector licensing. 24 active IT forms shipped; 28 JSON form schemas; 1,006 fields modelled.",
    "challenge": "Hundreds of legacy Lotus Domino forms across 36 department-sites were end-of-life, with no clear modernization path and severe vendor lock-in.",
    "solution": "Engineered a single code-first app for all departments (decision DEC-2026-003) on a SharePoint-backed data model (DEC-2026-001), with a FormCode discriminator unifying form types into one list per site. Type-safe components, generated models/services/hooks/validators, and Power Automate flows handle routing and approvals. PAC CLI v2.7.4, TypeScript strict compilation, and ESLint gate changes.",
    "results": [
      "Hundreds of legacy forms catalogued across 36 department-sites; ~418+ forms with deep field-level analysis on 23 IT + HR/QA families.",
      "One code-first app serving all departments with 24 active IT forms and centralized form routing.",
      "Standard-only connectors (SharePoint, Microsoft 365 Users, Office 365 Outlook) avoid premium-connector licensing.",
      "Multi-stage approval engines (5-stage EAF, UAT sign-off, conditional section visibility) in code and Power Automate.",
      "Role: Lead Enterprise Solution Architect & Power Platform Modernization"
    ],
    "category": "enterprise",
    "cardColor": "#4338ca",
    "bgGradient": "from-[#3730a3] to-[#1e1b4b]",
    "accentHex": "#818cf8",
    "isFlagship": true,
    "flagshipOrder": 1,
    "diagramType": "dataverse-relational",
    "domainTags": [
      "Conglomerate Modernization",
      "Lotus Notes Sunset",
      "Standard-Connector Licensing",
      "Enterprise ALM Pipeline"
    ],
    "techTags": [
      "React 19",
      "TypeScript",
      "Vite",
      "shadcn/ui",
      "Power Automate",
      "PAC CLI"
    ],
    "tags": [
      "Power Apps Code-First",
      "SharePoint Online",
      "React 19",
      "TypeScript",
      "Power Automate",
      "PAC CLI",
      "GitHub Actions"
    ],
    "metrics": [
      {
        "label": "License Cost",
        "value": "Standard Only",
        "highlight": true
      },
      {
        "label": "Forms Catalogued",
        "value": "418+",
        "highlight": true
      },
      {
        "label": "Production Apps",
        "value": "1 Code-First",
        "highlight": true
      },
      {
        "label": "Active IT Forms",
        "value": "24",
        "highlight": true
      }
    ],
    "timeline": "2024 — 2026",
    "linkText": "EXPLORE BLUEPRINT & SPECS",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/ioi-domino-dataverse",
"codeSnippet": {
      "language": "typescript",
      "filename": "submitFormCode.ts",
      "code": "export async function submitFormCode(formCode: string, payload: Record<string, unknown>) {\n  // One SharePoint main list per site, discriminated by FormCode\n  const item = { FormCode: formCode, CurrentStatus: 'Submitted', ...payload };\n  await sp.web.lists.getByTitle('MainDB_IT').items.add(item);\n  // Power Automate flow drives the multi-stage approval\n}",
      "caption": "TypeScript service submitting a record to the SharePoint MainDB_IT list with the FormCode discriminator."
    },
    "architecturePoints": [
      "MainDB_{Dept} parent tables with FormCode discriminator column",
      "Child task tables with polymorphic lookups for cross-departmental relationships",
      "Single SharePoint main list per site with a per-form FormCode discriminator",
      "Power Automate multi-stage approval flows (e.g., 5-stage EAF external access)",
      "Standard-only connectors limiting data surface (SharePoint, M365 Users, Office 365 Outlook)",
      "Version-controlled form schemas, generated models/services/hooks/validators, and provisioning scripts"
    ]
  },
  {
    "id": "ai-dev-pipeline",
    "title": "AI-Enabled Development Pipeline",
    "subtitle": "Copilot agents & skills within a governed migration pipeline",
    "description": "Manual migration and development cycles were slow and inconsistent. Standardized the Domino → M365 migration with version-controlled Copilot agents, skills, and instruction files, and drove it through a governed Migration Pipeline Controller that selects one task at a time, enforces ordering, and never marks work complete without evidence.",
    "fullOverview": "Two Copilot agents (domino-migration-agent and code-app-architectV2) plus skills (domino-migration, domino-form-reader, add-datasource, add-sharepoint, automate-sharepoint-pnp, create-code-app) and instruction files (domino-migration.instructions.md, copilot-instructions.md) encode the migration playbook. A Migration Pipeline Controller (MIGRATION_PIPELINE_CONTROLLER.md) governs 11 task types (Extraction, Quality Review, Promotion, Schema Generation, Schema Validation, Build, Build Audit, Fix, Re-Audit, Progress Register Update, Human Confirmation Question) with hard blocking rules and evidence-based completion.",
    "challenge": "Manual migration and development cycles were slow and inconsistent, with no gate preventing skipped work or unverified completion.",
    "solution": "Baked the migration playbook into version-controlled Copilot agents and skills, then enforced a rule-based pipeline controller (priority ordering, re-audit before dependent builds, no completion without evidence) plus standard-only connectors and code-as-source governance.",
    "results": [
      "Repeatable, evidence-gated workflow where every task must prove completion before the pipeline advances.",
      "Verifiable build state: TypeScript strict compile and Vite build succeed.",
      "2 Copilot agents, 6 skills, and 11 governed pipeline task types.",
      "Standard-only connector posture on a single code-first app.",
      "Role: AI agent architecture & pipeline orchestration"
    ],
    "category": "ai",
    "cardColor": "#b45309",
    "bgGradient": "from-[#92400e] to-[#451a03]",
    "accentHex": "#f59e0b",
    "tags": [
      "GitHub Copilot",
      "Agents",
      "Skills",
      "TypeScript",
      "Migration Pipeline Controller",
      "BLOCKING_RULES"
    ],
    "metrics": [
      {
        "label": "AI Agents",
        "value": "2 + Skills"
      },
      {
        "label": "Pipeline Tasks",
        "value": "11"
      },
      {
        "label": "Governance Gates",
        "value": "Evidence-Gated"
      }
    ],
    "timeline": "Apr 2026",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/ai-dev-pipeline",
    "architecturePoints": [
      "Version-controlled Copilot agents, skills, and instruction files that agents must read before acting",
      "Migration Pipeline Controller selecting exactly one task at a time with rule-based ordering",
      "Hard blocking rules (BLOCKING_RULES.md) preventing downstream builds on failed re-audits",
      "Standard-only connectors and code-as-source governance, with audit register + fix backlog + UAT folders"
    ]
  },
  {
    "id": "eprocurement-oracle",
    "title": "E-Procurement & Oracle Enterprise Resource Planning Integration",
    "subtitle": "End-to-end procurement suite on Dataverse with bidirectional Oracle sync",
    "description": "Procurement processes were manual with no Enterprise Resource Planning integration, causing data entry duplication and budget control gaps. Built end-to-end procurement suite on Dataverse — Purchase Requisition with Letter of Authority routing, Purchase Orders with multi-vendor splits, Capital in Progress Capex Budget Control, and Supplier Pre-Qualification Questionnaire Supplier Portal. Bidirectional Oracle PowerBiz Enterprise Resource Planning sync via Custom Connectors with C# Dataverse Plugins enforcing business rules at the data layer. Field Security Profiles on Purchase Order amounts and vendor financial data.",
    "fullOverview": "Built end-to-end procurement suite on Dataverse — Purchase Requisition with Letter of Authority routing, Purchase Orders with multi-vendor splits, Capital in Progress Capex Budget Control, and Supplier Pre-Qualification Questionnaire Supplier Portal. Bidirectional Oracle PowerBiz Enterprise Resource Planning sync via Custom Connectors with C# Dataverse Plugins enforcing business rules at the data layer. Field Security Profiles on Purchase Order amounts and vendor financial data. 5 procurement modules; 100% Enterprise Resource Planning sync rate; 200+ vendor portal users.",
    "challenge": "Procurement processes were manual with no Enterprise Resource Planning integration, causing data entry duplication and budget control gaps.",
    "solution": "Built end-to-end procurement suite on Dataverse — Purchase Requisition with Letter of Authority routing, Purchase Orders with multi-vendor splits, Capital in Progress Capex Budget Control, and Supplier Pre-Qualification Questionnaire Supplier Portal. Bidirectional Oracle PowerBiz Enterprise Resource Planning sync via Custom Connectors with C# Dataverse Plugins enforcing business rules at the data layer. Field Security Profiles on Purchase Order amounts and vendor financial data.",
    "results": [
      "5 procurement modules; 100% Enterprise Resource Planning sync rate; 200+ vendor portal users.",
      "Procurement Modules: 5",
      "Enterprise Resource Planning Sync Rate: 100%",
      "Vendor Portal Users: 200+",
      "Role: Procurement architecture & Enterprise Resource Planning integration lead"
    ],
    "category": "enterprise",
    "cardColor": "#dc2626",
    "bgGradient": "from-[#991b1b] to-[#450a0a]",
    "accentHex": "#ef4444",
    "tags": [
      "Dataverse",
      "C# Plugins",
      "Power Apps Canvas",
      "Custom Connectors",
      "Oracle Enterprise Resource Planning",
      "Power Automate"
    ],
    "metrics": [
      {
        "label": "Procurement Modules",
        "value": "5"
      },
      {
        "label": "Enterprise Resource Planning Sync Rate",
        "value": "100%"
      },
      {
        "label": "Vendor Portal Users",
        "value": "200+"
      }
    ],
    "timeline": "Nov 2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/eprocurement-oracle",
    "architecturePoints": [
      "Custom Connectors for bidirectional Oracle PowerBiz Enterprise Resource Planning synchronization",
      "C# Dataverse Plugins on Pre/Post-Operation pipeline enforcing business rules at data layer",
      "Field Security Profiles on Purchase Order amounts and vendor financial data",
      "Multi-vendor Purchase Order split logic with capex budget control validation"
    ]
  },
  {
    "id": "leadflow",
    "title": "LeadFlow",
    "subtitle": "Task & Progress Management System",
    "description": "Task tracking was fragmented across channels with no real-time visibility into team progress. Built a task tracking and progress management system on the Lark ecosystem with automated progress aggregation and Power BI dashboards.",
    "fullOverview": "Built a task tracking and progress management system on the Lark ecosystem with automated progress aggregation and Power BI dashboards. 40% increase in task completion; 100% real-time visibility; 95% team adoption.",
    "challenge": "Task tracking was fragmented across channels with no real-time visibility into team progress.",
    "solution": "Built a task tracking and progress management system on the Lark ecosystem with automated progress aggregation and Power BI dashboards.",
    "results": [
      "40% increase in task completion; 100% real-time visibility; 95% team adoption.",
      "Task Completion: +40%",
      "Real-Time Tracking: 100%",
      "Team Adoption: 95%",
      "Role: Task tracking & progress management architecture"
    ],
    "category": "analytics",
    "cardColor": "#0284c7",
    "bgGradient": "from-[#0369a1] to-[#082f49]",
    "accentHex": "#38bdf8",
    "tags": [
      "Lark Task",
      "Lark Automation",
      "Lark Base",
      "Power BI"
    ],
    "metrics": [
      {
        "label": "Task Completion",
        "value": "+40%"
      },
      {
        "label": "Real-Time Tracking",
        "value": "100%"
      },
      {
        "label": "Team Adoption",
        "value": "95%"
      }
    ],
    "timeline": "Nov 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/leadflow",
    "architecturePoints": [
      "Lark Task integration with automated progress roll-up",
      "Lark Base backend with departmental task categorization",
      "Power BI dashboards for real-time team progress visibility"
    ]
  },
  {
    "id": "leavesync",
    "title": "LeaveSync",
    "subtitle": "Smart Leave Management System",
    "description": "Leave requests were processed manually with slow approval cycles and poor tracking accuracy. Automated leave management system with intelligent routing and approval workflows on the Lark ecosystem.",
    "fullOverview": "Automated leave management system with intelligent routing and approval workflows on the Lark ecosystem. 60% faster processing; 60% faster approvals; 90% tracking accuracy.",
    "challenge": "Leave requests were processed manually with slow approval cycles and poor tracking accuracy.",
    "solution": "Automated leave management system with intelligent routing and approval workflows on the Lark ecosystem.",
    "results": [
      "60% faster processing; 60% faster approvals; 90% tracking accuracy.",
      "Processing Speed: +60%",
      "Approval Speed: +60%",
      "Tracking Accuracy: 90%",
      "Role: Leave management & approval workflow design"
    ],
    "category": "workflow",
    "cardColor": "#7c3aed",
    "bgGradient": "from-[#6d28d9] to-[#2e1065]",
    "accentHex": "#a78bfa",
    "tags": [
      "Lark Base",
      "Lark Automation",
      "Lark Chat"
    ],
    "metrics": [
      {
        "label": "Processing Speed",
        "value": "+60%"
      },
      {
        "label": "Approval Speed",
        "value": "+60%"
      },
      {
        "label": "Tracking Accuracy",
        "value": "90%"
      }
    ],
    "timeline": "Sep 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/leavesync",
    "architecturePoints": [
      "Lark Base leave balance tracking with automatic accrual calculation",
      "Lark Automation approval routing based on department hierarchy",
      "Lark Chat notifications for approval status updates"
    ]
  },
  {
    "id": "marketpoint",
    "title": "MarketPoint",
    "subtitle": "Global Insurance Provider Point of Contact Monitoring System",
    "description": "Point-of-contact monitoring for Global Insurance Provider operations was manual with slow issue resolution across markets. Built a dedicated Point of Contact monitoring system for Global Insurance Provider operations with automated issue tracking and resolution workflows.",
    "fullOverview": "Built a dedicated Point of Contact monitoring system for Global Insurance Provider operations with automated issue tracking and resolution workflows. 40% monitoring efficiency gain; 50% faster issue resolution; 12 markets covered.",
    "challenge": "Point-of-contact monitoring for Global Insurance Provider operations was manual with slow issue resolution across markets.",
    "solution": "Built a dedicated Point of Contact monitoring system for Global Insurance Provider operations with automated issue tracking and resolution workflows.",
    "results": [
      "40% monitoring efficiency gain; 50% faster issue resolution; 12 markets covered.",
      "Monitoring Efficiency: +40%",
      "Issue Resolution: +50%",
      "Markets Covered: 12",
      "Role: Point of Contact monitoring & issue resolution architecture"
    ],
    "category": "analytics",
    "cardColor": "#059669",
    "bgGradient": "from-[#047857] to-[#022c22]",
    "accentHex": "#34d399",
    "tags": [
      "Lark Base",
      "Lark Automation",
      "Power BI"
    ],
    "metrics": [
      {
        "label": "Monitoring Efficiency",
        "value": "+40%"
      },
      {
        "label": "Issue Resolution",
        "value": "+50%"
      },
      {
        "label": "Markets Covered",
        "value": "12"
      }
    ],
    "timeline": "Mar 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/marketpoint",
    "architecturePoints": [
      "Lark Base market-specific Point of Contact tracking with automated escalation",
      "Lark Automation issue routing based on market and severity",
      "Power BI dashboards for cross-market monitoring visibility"
    ]
  },
  {
    "id": "gameintel",
    "title": "GameIntel",
    "subtitle": "Real-Time Event Alert System",
    "description": "Game moderators relied on external searches to identify and label events, causing delays and inconsistent accuracy. Built an instant event alert system for game moderators using REST API integration with automated labeling and Lark Chat delivery.",
    "fullOverview": "Built an instant event alert system for game moderators using REST API integration with automated labeling and Lark Chat delivery. 80% reduction in external searches; 40% labeling accuracy boost; sub-second alert latency.",
    "challenge": "Game moderators relied on external searches to identify and label events, causing delays and inconsistent accuracy.",
    "solution": "Built an instant event alert system for game moderators using REST API integration with automated labeling and Lark Chat delivery.",
    "results": [
      "80% reduction in external searches; 40% labeling accuracy boost; sub-second alert latency.",
      "External Search Cut: -80%",
      "Labeling Accuracy: +40%",
      "Alert Latency: <1s",
      "Role: Event alert & REST API integration architecture"
    ],
    "category": "workflow",
    "cardColor": "#1e3a8a",
    "bgGradient": "from-[#1e3a8a] to-[#172554]",
    "accentHex": "#3b82f6",
    "tags": [
      "Game Data REST APIs",
      "Lark Automation",
      "Lark Chat"
    ],
    "metrics": [
      {
        "label": "External Search Cut",
        "value": "-80%"
      },
      {
        "label": "Labeling Accuracy",
        "value": "+40%"
      },
      {
        "label": "Alert Latency",
        "value": "<1s"
      }
    ],
    "timeline": "Jan 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/gameintel",
    "architecturePoints": [
      "REST API integration with game data providers for real-time event ingestion",
      "Lark Automation event classification and labeling pipeline",
      "Lark Chat instant alert delivery to moderator channels"
    ]
  },
  {
    "id": "worksync",
    "title": "WorkSync",
    "subtitle": "Productivity & Attendance Tracker",
    "description": "Productivity and attendance tracking was manual with no real-time insights for team leads. Built a smart productivity and attendance tracking platform with automated time tracking and Power BI dashboards.",
    "fullOverview": "Built a smart productivity and attendance tracking platform with automated time tracking and Power BI dashboards. 30% productivity increase; 100% attendance accuracy; 98% team adoption.",
    "challenge": "Productivity and attendance tracking was manual with no real-time insights for team leads.",
    "solution": "Built a smart productivity and attendance tracking platform with automated time tracking and Power BI dashboards.",
    "results": [
      "30% productivity increase; 100% attendance accuracy; 98% team adoption.",
      "Productivity Increase: +30%",
      "Attendance Accuracy: 100%",
      "Team Adoption: 98%",
      "Role: Productivity tracking & attendance automation"
    ],
    "category": "analytics",
    "cardColor": "#0f766e",
    "bgGradient": "from-[#115e59] to-[#042f2e]",
    "accentHex": "#2dd4bf",
    "tags": [
      "Lark Automation",
      "Lark Base",
      "Power BI"
    ],
    "metrics": [
      {
        "label": "Productivity Increase",
        "value": "+30%"
      },
      {
        "label": "Attendance Accuracy",
        "value": "100%"
      },
      {
        "label": "Team Adoption",
        "value": "98%"
      }
    ],
    "timeline": "Nov 2023",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/worksync",
    "architecturePoints": [
      "Lark Automation automated time tracking with shift scheduling",
      "Lark Base attendance records with anomaly detection",
      "Power BI real-time productivity dashboards for team leads"
    ]
  },
  {
    "id": "aht-optimization",
    "title": "Average Handling Time Optimization Initiative",
    "subtitle": "Data-driven Average Handling Time reduction",
    "description": "Average Handling Time across customer service operations was high with no data-driven optimization strategy. Data-driven initiative to reduce Average Handling Time through automated workflow optimization, Power BI analytics, and process streamlining across 8 teams.",
    "fullOverview": "Data-driven initiative to reduce Average Handling Time through automated workflow optimization, Power BI analytics, and process streamlining across 8 teams. 15% Average Handling Time reduction; 24 processes optimized; 8 teams impacted.",
    "challenge": "Average Handling Time across customer service operations was high with no data-driven optimization strategy.",
    "solution": "Data-driven initiative to reduce Average Handling Time through automated workflow optimization, Power BI analytics, and process streamlining across 8 teams.",
    "results": [
      "15% Average Handling Time reduction; 24 processes optimized; 8 teams impacted.",
      "Average Handling Time Reduction: -15%",
      "Processes Optimized: 24",
      "Teams Impacted: 8",
      "Role: Process optimization & analytics lead"
    ],
    "category": "analytics",
    "cardColor": "#4338ca",
    "bgGradient": "from-[#3730a3] to-[#1e1b4b]",
    "accentHex": "#818cf8",
    "tags": [
      "Power Automate",
      "Power BI"
    ],
    "metrics": [
      {
        "label": "Average Handling Time Reduction",
        "value": "-15%"
      },
      {
        "label": "Processes Optimized",
        "value": "24"
      },
      {
        "label": "Teams Impacted",
        "value": "8"
      }
    ],
    "timeline": "Sep 2023",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/aht-optimization",
    "architecturePoints": [
      "Power BI analytics identifying Average Handling Time bottlenecks by process and team",
      "Power Automate workflow optimization for high-duration processes",
      "Process streamlining with standardized handling procedures across 8 teams"
    ]
  },
  {
    "id": "ats-automation",
    "title": "AI-Powered ATS Job Application Automation",
    "subtitle": "Deterministic Multi-Portal Application Automation & Dual-Track Tailoring Pipeline",
    "description": "Applying across multiple global platforms resulted in high repetition and formatting inconsistencies. Engineered a Python automation toolkit using Gemini & Groq for JD-tailored resumes, dual-track Tech/Ops PDF generation, Google Drive sync, NotebookLM integration, and automated Workday portal form filling.",
    "fullOverview": "Engineered an ATS automation toolkit that tailors resumes and cover letters to any job description using Gemini & Groq APIs. Generates dual-track (Tech & Ops) standardized PDFs, syncs them to Google Drive, provides a local web command center, interfaces with NotebookLM, and automates form filling on Workday application portals with a governed single source of truth.",
    "challenge": "Applying to dozens of roles caused repetitive document tailoring, inconsistent styling, and zero structured audit tracking across multi-channel job boards.",
    "solution": "Built a deterministic pipeline with AI Gateway abstraction (Gemini/Groq), dual-track PDF generator, Google Drive sync orchestration, profile platform adapters, and Workday ATS automation bot.",
    "results": [
      "Deterministic dual-track (Tech/Ops) PDF generation with strict naming governance.",
      "Automated Workday ATS bot executing multi-page job application workflows.",
      "Real-time Google Drive sync and NotebookLM integration for governed document analysis.",
      "Centralized local web command center for generation, telemetry, and tracking.",
      "Role: ALM & AI Engineering Lead"
    ],
    "category": "ai",
    "cardColor": "#0f766e",
    "bgGradient": "from-[#115e59] to-[#042f2e]",
    "accentHex": "#2dd4bf",
    "domainTags": [
      "Document Governance",
      "Workday ATS Automation",
      "Dual-Track Generation",
      "Profile Synchronization"
    ],
    "techTags": [
      "Python",
      "Gemini API",
      "Groq API",
      "Google Drive API",
      "NotebookLM",
      "Selenium / Bot"
    ],
    "tags": [
      "Python",
      "Gemini API",
      "Groq API",
      "Google Drive API",
      "Automation",
      "Workday Bot"
    ],
    "metrics": [
      {
        "label": "Tailoring Speed",
        "value": "<30s",
        "highlight": true
      },
      {
        "label": "Tracks Generated",
        "value": "Dual (Tech/Ops)",
        "highlight": true
      },
      {
        "label": "ATS Compatibility",
        "value": "100%",
        "highlight": true
      }
    ],
    "timeline": "Jan 2025",
    "linkText": "EXPLORE PIPELINE",
    "demoUrl": "",
    "repoUrl": "https://github.com/AlTechSolutions-AAF/ats-automation",
    "architecturePoints": [
      "AI Gateway abstracting Gemini and Groq model inferences for resilient token routing",
      "Dual-track PDF renderer generating Tech and Operations variants from a single master JSON profile",
      "Google Drive API sync orchestrating automated document storage into hierarchical folders",
      "Workday ATS automation bot handling form population, file uploads, and confirmation tracking"
    ]
  },
  {
    "id": "resumeflow-pipeline",
    "title": "ResumeFlow: LLM Resume & Cover Letter Pipeline",
    "subtitle": "Open-Source Python Package (zlm on PyPI) & ACM Digital Library Published Research",
    "description": "Job seekers rewrite resumes manually for each role, losing consistency and time. Leveraged the open-source ResumeFlow LLM pipeline (from the Ztrimus/job-llm project by ASU researchers) that turns a single master resume into a tailored resume and cover letter for any job URL — available as a Python package, a Streamlit web tool, and an ACM-indexed research paper.",
    "fullOverview": "Integrated the open-source ResumeFlow LLM pipeline (Ztrimus/job-llm — published as PyPI package 'zlm', a Streamlit web tool at resumeflow.streamlit.app, and an ACM/arXiv paper) into the ATS automation workflow for JD-tailored resume and cover-letter generation.",
    "challenge": "Customizing resumes for specific job descriptions is time-intensive and prone to formatting regressions without automated LLM evaluation.",
    "solution": "Wired the `resume_cv_pipeline()` engine (OpenAI / Gemini Pro, PDF or JSON master-resume ingestion, dual delivery modes) into the deterministic ATS automation pipeline.",
    "results": [
      "Published as open-source Python package 'zlm' on PyPI.",
      "Academic paper indexed in ACM Digital Library & arXiv (2402.06221).",
      "Live interactive Streamlit application serving global job seekers.",
      "Multi-provider LLM abstraction layer supporting OpenAI and Gemini Pro.",
      "Role: Adopted & integrated the third-party open-source ResumeFlow (Ztrimus/job-llm) project"
    ],
    "category": "ai",
    "cardColor": "#4338ca",
    "bgGradient": "from-[#3730a3] to-[#1e1b4b]",
    "accentHex": "#818cf8",
    "domainTags": [
      "Open Source Research",
      "ACM Digital Library",
      "arXiv Publication",
      "LLM Engineering"
    ],
    "techTags": [
      "Python",
      "PyPI (zlm)",
      "Gemini Pro",
      "OpenAI",
      "Streamlit",
      "PDF Processing"
    ],
    "tags": [
      "Python",
      "PyPI",
      "Streamlit",
      "Gemini Pro",
      "OpenAI",
      "arXiv"
    ],
    "metrics": [
      {
        "label": "ACM Paper",
        "value": "Published",
        "highlight": true
      },
      {
        "label": "PyPI Package",
        "value": "zlm",
        "highlight": true
      },
      {
        "label": "Providers",
        "value": "Gemini / OpenAI",
        "highlight": true
      }
    ],
    "timeline": "Jan 2025",
    "linkText": "VIEW PACKAGE & PAPER",
    "demoUrl": "https://resumeflow.streamlit.app",
    "repoUrl": "https://github.com/Ztrimus/job-llm",
    "architecturePoints": [
      "Provider-agnostic LLM client abstracting prompt chaining and temperature controls",
      "Master resume ingestion supporting structured JSON profiles and parsed PDF inputs",
      "Streamlit web front-end and standalone CLI interface packaged for PyPI",
      "Evaluation harness validating keyword alignment and semantic relevance against JD embeddings"
    ]
  },
  {
    "id": "resumeforge-engine",
    "title": "ResumeForge ATS-Optimized Tailoring Engine",
    "subtitle": "Next.js 14 App Router, Supabase SSR & Type-Safe Document Diffing Engine",
    "description": "Users need structured, ATS-compliant documents exported in native DOCX format. Architected a Next.js 14 application with Supabase SSR, Radix UI, OpenAI tailoring, and native DOCX generation — complete with Vitest, Playwright e2e, and visual diffing.",
    "fullOverview": "A Next.js 14 App Router application that parses uploaded resumes with pdfjs-dist and mammoth, tailors them against job descriptions via OpenAI, and exports ATS-compliant DOCX documents. Backed by Supabase SSR with generated TypeScript types, visual diff inspection, and comprehensive Vitest/Playwright test suites.",
    "challenge": "Maintaining original layout fidelity while rewriting bullet points for ATS compliance and exporting clean DOCX files.",
    "solution": "Engineered Next.js 14 App Router architecture with client-side drag-and-drop parsing, server-side OpenAI tailoring, Supabase Postgres persistence, and automated DOCX export pipeline.",
    "results": [
      "Type-safe Supabase database access with auto-generated TypeScript schema types.",
      "End-to-end testing coverage with Vitest unit tests and Playwright browser tests.",
      "Visual diff inspector highlighting tailored additions and optimizations.",
      "High-speed client-side parsing for PDF and DOCX uploads with zero server upload bottlenecks.",
      "Role: Fullstack Solution Architect"
    ],
    "category": "enterprise",
    "cardColor": "#1e3a8a",
    "bgGradient": "from-[#1e3a8a] to-[#172554]",
    "accentHex": "#3b82f6",
    "domainTags": [
      "Fullstack Web",
      "ATS Optimization",
      "Document Generation",
      "Automated Testing"
    ],
    "techTags": [
      "Next.js 14",
      "Supabase",
      "TypeScript",
      "OpenAI",
      "docx",
      "Playwright",
      "Vitest"
    ],
    "tags": [
      "Next.js 14",
      "Supabase",
      "TypeScript",
      "OpenAI",
      "Tailwind CSS",
      "Playwright"
    ],
    "metrics": [
      {
        "label": "Test Coverage",
        "value": "Vitest + Playwright",
        "highlight": true
      },
      {
        "label": "Export Formats",
        "value": "DOCX / PDF",
        "highlight": true
      },
      {
        "label": "Framework",
        "value": "Next.js 14",
        "highlight": true
      }
    ],
    "timeline": "Dec 2024",
    "linkText": "EXPLORE NEXT.JS ARCHITECTURE",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/Resume-Buildder",
    "architecturePoints": [
      "Next.js 14 App Router with React Server Components and route handlers",
      "Supabase SSR integration with row-level security and TypeScript type generation",
      "Client-side document parsing via pdfjs-dist and mammoth with dropzone upload",
      "Native DOCX file construction with custom style definitions and margins"
    ]
  },
  {
    "id": "barbershop-system",
    "title": "Barbershop Operations Management Platform",
    "subtitle": "Native Microsoft 365 Architecture — Forms, Power Automate, SharePoint, Canvas Apps & Power BI",
    "description": "A high-traffic barbershop required a unified operations system without expensive third-party SaaS subscriptions. Engineered an end-to-end low-code solution using 6 relational SharePoint lists, request/confirm Power Automate flows, staff Canvas App, and Power BI executive dashboards.",
    "fullOverview": "A complete Power Platform operational solution for salon and barbershop management: Microsoft Forms for booking intake, Power Automate for two-way confirmation and staff notifications, 6 relational SharePoint lists (Customers, Staff, Appointments, Services) with Lookup relationships, staff-facing Canvas App, and Power BI reporting.",
    "challenge": "Client relied on paper ledgers and fragmented WhatsApp messages for appointment bookings, staff commissions, and VIP customer tracking.",
    "solution": "Built a seamless Microsoft 365 architecture linking Forms intake to SharePoint relational lists with automated confirmation emails, staff scheduling screens, and OData-optimized delegation queries.",
    "results": [
      "6 relational SharePoint lists with Lookup integrity and VIP customer tracking.",
      "Automated request-and-confirm Power Automate flow cutting missed bookings by 40%.",
      "Responsive Canvas App for barbers and receptionists with calendar color-coding.",
      "Power BI analytics dashboard tracking daily visit counts, revenue, and staff commissions.",
      "Role: Power Platform Solution Architect"
    ],
    "category": "enterprise",
    "cardColor": "#b45309",
    "bgGradient": "from-[#78350f] to-[#451a03]",
    "accentHex": "#f59e0b",
    "domainTags": [
      "Retail & Service Operations",
      "Appointment Automation",
      "Staff Commission Tracking",
      "VIP Customer Management"
    ],
    "techTags": [
      "Power Apps Canvas",
      "SharePoint Lists",
      "Power Automate",
      "Power BI",
      "Microsoft Forms",
      "Power Platform CLI"
    ],
    "tags": [
      "Power Platform",
      "SharePoint",
      "Power Automate",
      "Power BI",
      "Canvas Apps"
    ],
    "metrics": [
      {
        "label": "Missed Bookings",
        "value": "-40%",
        "highlight": true
      },
      {
        "label": "Data Model",
        "value": "6 Relational Lists",
        "highlight": true
      },
      {
        "label": "SaaS Cost Saved",
        "value": "100% Native",
        "highlight": true
      }
    ],
    "timeline": "Nov 2024",
    "linkText": "VIEW POWER PLATFORM SPEC",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/Barbershop-Project",
    "architecturePoints": [
      "6 relational SharePoint lists with typed Lookup columns (Customers, Staff, Appointments)",
      "Two-way confirmation and notification Power Automate cloud flows",
      "Canvas App calendar with staff color-coding and role-based views",
      "Delegation-safe OData query reference ensuring fast rendering on large customer lists"
    ]
  },
  {
    "id": "power-fx-copilot-agent",
    "title": "Power Fx Troubleshooter: M365 Declarative Copilot Agent",
    "subtitle": "Microsoft 365 Agents Toolkit, Declarative Agent Schema & Copilot CLI Evaluation",
    "description": "Low-code makers encounter delegation warnings and syntax errors that slow down development. Architected a custom Microsoft 365 Declarative Copilot agent grounded in Microsoft Learn docs, CodeInterpreter, and maker SharePoint list schemas with automated `@microsoft/m365-copilot-eval` quality scoring.",
    "fullOverview": "A custom Microsoft 365 Copilot agent that assists Power Apps makers in debugging and optimizing Power Fx formulas directly in Copilot. Built with declarativeAgent.json (v1.7 schema), WebSearch, CodeInterpreter, and OneDrive/SharePoint grounding, accompanied by automated CLI evaluation benchmarks.",
    "challenge": "Formula errors, delegation limits, and schema mismatches cause frequent build bottlenecks for citizen and enterprise makers.",
    "solution": "Packaged deep Power Fx expertise into a declarative Microsoft 365 Copilot agent with prompt instructions, Learn plugins, and automated scoring CLI.",
    "results": [
      "Declarative Copilot Agent definition with v1.7 schema and custom instruction prompt.",
      "Grounded in Microsoft Learn, CodeInterpreter, and SharePoint list schema inspection.",
      "Automated answer quality evaluation via `@microsoft/m365-copilot-eval` CLI.",
      "Curated conversation starters for formula debugging, delegation, and code sample discovery.",
      "Role: ALM & AI Engineering Lead"
    ],
    "category": "devops",
    "cardColor": "#4338ca",
    "bgGradient": "from-[#3730a3] to-[#1e1b4b]",
    "accentHex": "#818cf8",
    "domainTags": [
      "M365 Copilot Extensibility",
      "Maker Productivity",
      "AI Quality Benchmarking",
      "Declarative Agent Architecture"
    ],
    "techTags": [
      "Microsoft 365 Copilot",
      "M365 Agents Toolkit",
      "Power Fx",
      "CodeInterpreter",
      "Copilot Eval CLI"
    ],
    "tags": [
      "Microsoft 365 Copilot",
      "Declarative Agent",
      "Power Fx",
      "AI Evaluation",
      "SharePoint"
    ],
    "metrics": [
      {
        "label": "Agent Type",
        "value": "M365 Declarative",
        "highlight": true
      },
      {
        "label": "Capabilities",
        "value": "Web / Code / Docs",
        "highlight": true
      },
      {
        "label": "Quality Evals",
        "value": "CLI Automated",
        "highlight": true
      }
    ],
    "timeline": "Jan 2025",
    "linkText": "EXPLORE COPILOT SPEC",
    "demoUrl": "",
    "repoUrl": "https://github.com/altechsolution123/Copilot",
    "architecturePoints": [
      "declarativeAgent.json v1.7 definition with fine-tuned system instruction prompt",
      "Integrated learn-plugin.json action for dynamic Microsoft Learn reference retrieval",
      "Grounded in maker OneDrive and SharePoint schema metadata for precise formula generation",
      "Automated evaluation test suite using @microsoft/m365-copilot-eval CLI"
    ]
  },
  {
    "id": "lewi-house-booking",
    "title": "Lewi House Syariah Hospitality Booking Platform",
    "subtitle": "Brand-First Modern Minimalism, Firebase Architecture & CodeFormer AI Image Upscaling",
    "description": "A boutique Syariah hospitality brand required a serene, high-conversion web platform. Built a custom booking experience with a strict design system (Deep Corporate Blue #1A365D & Booking Orange #FF5E1F), Firestore persistence, serverless functions, and CodeFormer AI asset enhancement.",
    "fullOverview": "A modern booking and browsing experience for Lewi House Syariah emphasizing trust, cleanliness, and value. Built on Firebase (Hosting, Firestore, Cloud Functions), responsive 1200px fixed desktop / fluid 4-col mobile grid, comprehensive design tokens, and CodeFormer AI-enhanced WebP room imagery.",
    "challenge": "Budget hotel platforms often feel cluttered and noisy, diminishing customer trust and conversion rates.",
    "solution": "Designed a Modern Minimalist interface with strict CSS theme tokens, clear booking conversion paths, Firestore security rules, and AI-enhanced room photography.",
    "results": [
      "Rigorous design system pairing Deep Corporate Blue (#1A365D) and Booking Orange (#FF5E1F).",
      "Firebase Firestore database with secure security rules and serverless functions.",
      "CodeFormer AI image upscaling converting standard camera photos into crisp WebP assets.",
      "Integrated OTA booking modal respecting third-party brand colors (Booking.com, Agoda).",
      "Role: Fullstack Solution Architect"
    ],
    "category": "enterprise",
    "cardColor": "#1e3a8a",
    "bgGradient": "from-[#1e3a8a] to-[#172554]",
    "accentHex": "#3b82f6",
    "domainTags": [
      "Hospitality & Booking",
      "Design System Engineering",
      "AI Asset Enhancement",
      "Conversion Optimization"
    ],
    "techTags": [
      "React 19",
      "TypeScript",
      "Firebase Firestore",
      "Cloud Functions",
      "CodeFormer AI",
      "Tailwind CSS"
    ],
    "tags": [
      "Firebase",
      "Firestore",
      "Design System",
      "Hospitality",
      "CodeFormer AI",
      "Tailwind CSS"
    ],
    "metrics": [
      {
        "label": "Design Tokens",
        "value": "Modern Minimalist",
        "highlight": true
      },
      {
        "label": "Asset Pipeline",
        "value": "CodeFormer AI",
        "highlight": true
      },
      {
        "label": "Platform",
        "value": "Firebase Serverless",
        "highlight": true
      }
    ],
    "timeline": "Sep 2024",
    "linkText": "VIEW BOOKING PLATFORM",
    "demoUrl": "",
    "repoUrl": "https://github.com/gradiuzz2009/Lewi-House-Web",
    "architecturePoints": [
      "Design token architecture defined in CSS @theme with Montserrat and Inter typography",
      "Firebase Firestore database structure for real-time room availability and amenities",
      "CodeFormer neural network pipeline upscaling low-resolution room imagery to WebP assets",
      "Modular booking drawer and multi-channel OTA direct routing modal"
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "exp-meraki-2025",
    role: "Power Platform Solution Manager & Enterprise Architect",
    company: "Meraki Malaysia / Independent Consulting",
    location: "Kuala Lumpur, Malaysia",
    period: "2025 — Present",
    type: "experience",
    category: "architect",
    featured: true,
    description: [
      "Leading enterprise Power Platform architecture, automation strategy, and digital transformation initiatives across client ecosystems.",
      "Designing scalable Canvas App and Power Automate solutions integrated with SharePoint Online and Dataverse.",
      "Implementing enterprise ALM pipelines (Dev → Build → Test → Prod) with Azure DevOps and GitHub Actions using Power Platform Build Tools (PAC CLI).",
      "Deploying AI-assisted development workflows with domain-specific Copilot agents and DLP governance guardrails."
    ],
    tags: ["Power Platform", "Dataverse", "Enterprise ALM", "Azure DevOps", "Copilot Studio", "C# Plugins"],
    metrics: [
      { label: "ALM Pipelines", value: "12" },
      { label: "Delivery Speedup", value: "+70%" },
      { label: "Target Tables", value: "50+" }
    ]
  },
  {
    id: "exp-ioi-group-2024",
    role: "Enterprise Power Platform & Dynamics 365 Solution Architect",
    company: "IOI Corporation Berhad (Palm Oil, Oleochemicals, Property)",
    location: "Penang & Johor, Malaysia",
    period: "2024 — 2026",
    type: "experience",
    category: "architect",
    featured: true,
    description: [
      "Led the enterprise-wide digital modernization of hundreds of legacy Lotus Domino business applications across 36 department-sites.",
      "Built a single code-first Power Apps app (React 19 + TypeScript + Vite + shadcn/ui) on a SharePoint-backed data model (MainDB_IT + FormCode discriminator) using standard-only connectors to avoid premium licensing.",
      "Engineered Power Automate multi-stage approval engines (5-stage EAF, UAT sign-off matrices) and code-level section-visibility rules, with managed solution ALM and PAC CLI.",
      "Generated TypeScript models, services, hooks, and validators (80+ artifacts) plus 40+ page routes and 70+ reusable UI components.",
      "Architected the E-Procurement suite with bidirectional Oracle ERP integration and the Tasek Cement 5-tier GxP-compliant rebate approval workflow (cutting turnaround from 2–3 days to 15 minutes)."
    ],
    tags: ["Power Apps Code-First", "Lotus Domino Migration", "SharePoint", "Power Automate", "React 19", "TypeScript", "PAC CLI"],
    metrics: [
      { label: "Domino Forms", value: "418+" },
      { label: "Production Apps", value: "1 Code-First" },
      { label: "Connectors", value: "Standard Only" },
      { label: "Turnaround Cut", value: "15 Mins vs 3 Days" }
    ]
  },
  {
    id: "exp-concentrix-2023",
    role: "Team Leader, Operations & Certified Lark Developer",
    company: "Concentrix",
    location: "Kuala Lumpur, Malaysia",
    period: "2023 — 2025",
    type: "experience",
    category: "operations",
    featured: true,
    description: [
      "Drove AI-powered workflow automation, performance management, and team scaling across high-volume customer service operations.",
      "Built 8 Lark ecosystem productivity tools (DocFinder AI search, LeadFlow task tracker, LeaveSync, AskLark query resolver, WorkSync attendance).",
      "Earned Certified Lark Developer credential, building enterprise bots, Base automations, and real-time executive Power BI dashboards.",
      "Implemented CS Resolver AI ticket triage using Microsoft AI Builder, cutting handling times by 65% across 120+ SOP categories."
    ],
    tags: ["Lark Developer", "Power BI", "AI Builder", "Operations Management", "CS Resolver", "Workforce Planning"],
    metrics: [
      { label: "Lark Tools Built", value: "8" },
      { label: "AHT Reduction", value: "-25%" },
      { label: "SOP Categories", value: "120+" }
    ]
  },
  {
    id: "exp-powerplatform-pioneer-2021",
    role: "Power Platform Operations Floor Pioneer",
    company: "BPO Operations",
    location: "Kuala Lumpur, Malaysia",
    period: "2021 — 2023",
    type: "experience",
    category: "architect",
    featured: false,
    description: [
      "Self-taught developer who pioneered internal low-code adoption during COVID-19 on the operations floor.",
      "Built end-to-end operational tools using Power Apps, Power Automate, and SharePoint to manage teams, track KPIs, and automate shift workflows.",
      "Engineered PulseTrack workforce telemetry, replacing manual WhatsApp reporting and saving 70% of manager administrative overhead."
    ],
    tags: ["Power Apps", "Power Automate", "SharePoint Online", "Process Automation", "PulseTrack"],
    metrics: [
      { label: "Reporting Overhead", value: "-90%" },
      { label: "Tracking Accuracy", value: "98%" }
    ]
  },
  {
    id: "exp-accenture-2017",
    role: "Service Delivery Operations Senior Team Lead & Data Analyst",
    company: "Accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "2017 — 2022",
    type: "experience",
    category: "operations",
    featured: true,
    description: [
      "Advanced rapidly from Data Analyst to Senior Team Lead over 5+ years, managing cross-functional service delivery operations for enterprise global accounts.",
      "Scaled and led high-performing multilingual teams of up to 34 members across 7 international markets with sustained >98% SLA compliance.",
      "Applied Six Sigma DMAIC methodologies and statistical analysis to eliminate operational bottlenecks, reduce AHT by 25%, and achieve <5% annualized team attrition.",
      "Awarded the prestigious Accenture Diamond Award for outstanding operational excellence and client delivery impact."
    ],
    tags: ["Accenture Diamond Award", "Six Sigma DMAIC", "SLA Management", "34 FTE Leadership", "Service Delivery", "Global Accounts"],
    metrics: [
      { label: "Direct Reports", value: "34" },
      { label: "SLA Benchmark", value: "98%+" },
      { label: "Markets Handled", value: "7" }
    ]
  },
  {
    id: "exp-early-career-2017",
    role: "Digital Marketing Specialist & Data Analyst",
    company: "TheLorry & Deloitte",
    location: "Kuala Lumpur, Malaysia",
    period: "2017",
    type: "experience",
    category: "academic",
    featured: false,
    description: [
      "Started professional career with a 3-month data analytics stint at Deloitte followed by Digital Marketing Specialist role at TheLorry.",
      "Analyzed service delivery conversion funnels, customer acquisition metrics, and operational performance indicators."
    ],
    tags: ["Data Analytics", "Performance Tracking", "Digital Strategy"],
    metrics: [
      { label: "Conversion Funnels", value: "Analyzed" }
    ]
  },
  {
    id: "edu-uum-2013",
    role: "Bachelor of International Business Management (Honours)",
    company: "Universiti Utara Malaysia (UUM)",
    location: "Sintok, Kedah, Malaysia",
    period: "2013 — 2016",
    type: "education",
    category: "academic",
    featured: true,
    description: [
      "Graduated with Honours in International Business Management, Minor in Logistics & Transportation.",
      "Recipient of the competitive UUM International Scheme Scholarship.",
      "3-time recipient of the Dean’s Academic Award for outstanding scholastic excellence.",
      "Served as Executive for Integration, Community, and International Affairs at UUM Student Representative Council."
    ],
    tags: ["Honours Degree", "Logistics Minor", "Dean’s Award 3x", "International Scholarship", "Student Leadership"],
    metrics: [
      { label: "Dean’s List", value: "3x Award" },
      { label: "Scholarship", value: "Full Merit" }
    ]
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Fullstack & Mobile App Development (Android / iOS)",
    subtitle: "Native & Cross-Platform Mobile, React Native, Swift & Kotlin",
    iconName: "Code2",
    skills: [
      { name: "Android App Development (Kotlin & Java)", level: "Production-Grade", highlight: true, yearsOrScope: "Native Android Apps" },
      { name: "iOS App Development (Swift & SwiftUI/UIKit)", level: "Production-Grade", highlight: true, yearsOrScope: "Native iOS Apps" },
      { name: "React Native & Expo", level: "Expert", highlight: true, yearsOrScope: "Cross-Platform Mobile" },
      { name: "Flutter & Dart", level: "Advanced", highlight: true, yearsOrScope: "Cross-Platform Mobile" },
      { name: "TypeScript & JavaScript (ES6+)", level: "Expert", highlight: true, yearsOrScope: "Strict Type Safety" },
      { name: "React 19 & Next.js", level: "Advanced", highlight: true, yearsOrScope: "Fullstack SPAs & SSR" },
      { name: "Node.js & Express / NestJS", level: "Advanced", yearsOrScope: "Backend REST APIs" },
      { name: "Mobile CI/CD & App Store / Play Store", level: "Advanced", yearsOrScope: "Deployment & Fastlane" }
    ]
  },
  {
    title: "Microsoft Power Platform & Dataverse",
    subtitle: "Enterprise Low-Code, Model-Driven & Data Architecture",
    iconName: "Cpu",
    skills: [
      { name: "Power Apps Code-First (React/TS)", level: "Production-Grade", highlight: true, yearsOrScope: "1 Prod App" },
      { name: "Code-First Power Apps Architecture", level: "Enterprise Architect", highlight: true, yearsOrScope: "SharePoint MainDB_IT" },
      { name: "Power Automate (Cloud & Desktop RPA)", level: "Expert", highlight: true, yearsOrScope: "100+ Workflows" },
      { name: "Power Automate Approval Flows", level: "Expert", highlight: true, yearsOrScope: "Multi-Stage" },
      { name: "Power Apps Component Framework (PCF)", level: "Advanced", yearsOrScope: "TypeScript/React PCF" },
      { name: "Power Fx Expressions", level: "Expert", highlight: true, yearsOrScope: "Delegation-safe" },
      { name: "Power Platform CLI (PAC)", level: "Advanced", yearsOrScope: "ALM Automation" },
      { name: "Center of Excellence (CoE) Starter Kit", level: "Architect", yearsOrScope: "DLP & Governance" },
      { name: "Solution Segmentation & ALM", level: "Expert", highlight: true, yearsOrScope: "Managed Solutions" },
      { name: "Dynamics 365 Customization", level: "Advanced", yearsOrScope: "CRM & Field Security" }
    ]
  },
  {
    title: "Cloud, DevOps & Backend APIs",
    subtitle: "Continuous Integration, Azure, REST & SQL",
    iconName: "Terminal",
    skills: [
      { name: "REST APIs, GraphQL & Custom Connectors", level: "Expert", highlight: true, yearsOrScope: "Oracle/SAP/Custom Sync" },
      { name: "Azure DevOps & Multi-Stage Pipelines", level: "Advanced", highlight: true, yearsOrScope: "CI/CD Deployment" },
      { name: "Git & GitHub Actions", level: "Advanced", highlight: true, yearsOrScope: "Automated Workflows" },
      { name: "SQL, PostgreSQL & Relational DBs", level: "Advanced", yearsOrScope: "Relational Queries" },
      { name: "GxP & 21 CFR Part 11 Compliance", level: "Practitioner", highlight: true, yearsOrScope: "Immutable Audits" },
      { name: "OWASP Top 10 & Mobile App Security", level: "Advanced", yearsOrScope: "App & Tenant Security" },
      { name: "WCAG 2.2 AA Accessibility", level: "Standard", yearsOrScope: "Inclusive UI Design" }
    ]
  },
  {
    title: "AI, Copilots & Intelligent Automation",
    subtitle: "Generative AI, Prompt Architecture & Lark Bots",
    iconName: "Sparkles",
    skills: [
      { name: "Microsoft Copilot Studio", level: "Advanced", highlight: true, yearsOrScope: "Enterprise Agents" },
      { name: "AI Builder NLP & Document Processing", level: "Expert", highlight: true, yearsOrScope: "120+ SOP Models" },
      { name: "Azure OpenAI & Custom Prompt Engineering", level: "Advanced", yearsOrScope: "LLM Orchestration" },
      { name: "Copilot Agent Orchestration", level: "Lead Architect", highlight: true, yearsOrScope: "Governed Pipelines" },
      { name: "Lark Developer Platform & Bots", level: "Certified Developer", highlight: true, yearsOrScope: "8 Enterprise Tools" }
    ]
  },
  {
    title: "Operations, Service Delivery & Leadership",
    subtitle: "High-Volume BPO, SLA Optimization & Six Sigma",
    iconName: "Users",
    skills: [
      { name: "SLA & KPI Management (>98% Benchmark)", level: "Executive Lead", highlight: true, yearsOrScope: "7 Global Markets" },
      { name: "Six Sigma DMAIC Methodology", level: "Green Belt", highlight: true, yearsOrScope: "Root-Cause Triage" },
      { name: "Cross-Functional Team Leadership", level: "Senior Team Lead", highlight: true, yearsOrScope: "34 Direct Reports" },
      { name: "Workforce Management & Capacity Modeling", level: "Expert", yearsOrScope: "Shift Scheduling" },
      { name: "Stakeholder Management & Executive Reporting", level: "Director-Facing", yearsOrScope: "C-Level Reviews" },
      { name: "Process Mining & Bottleneck Resolution", level: "Expert", yearsOrScope: "24+ Processes Optimized" }
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    name: "Certified Lark Developer",
    issuer: "Lark (ByteDance)",
    status: "Verified Credential",
    year: "2024",
    verified: true,
    credentialUrl: "https://open.larksuite.com"
  },
  {
    name: "Accenture Diamond Award — Global Operational Impact",
    issuer: "Accenture",
    status: "Global Award Recipient",
    year: "2021",
    verified: true
  },
  {
    name: "Six Sigma Green Belt (DMAIC Optimization)",
    issuer: "Enterprise Quality Management",
    status: "Certified",
    year: "2022",
    verified: true
  },
  {
    name: "Microsoft Power Platform Solution Architecture & ALM",
    issuer: "Microsoft Certified",
    status: "Enterprise Practitioner",
    year: "2023",
    verified: true
  },
  {
    name: "Bachelor of International Business Management (Honours)",
    issuer: "Universiti Utara Malaysia (UUM)",
    status: "Dean’s Award Recipient (3x) & Scholarship",
    year: "2016",
    verified: true
  }
];

export const skillCategories = skillsCategories;

export const languagesData = [
  { language: "English", proficiency: "Full Professional Working Proficiency", level: "C1 / Advanced", flag: "🇬🇧" },
  { language: "Bahasa Indonesia", proficiency: "Native / Bilingual", level: "Native", flag: "🇮🇩" },
  { language: "Bahasa Melayu / Malay", proficiency: "Professional Working Proficiency", level: "Fluent", flag: "🇲🇾" }
];

export interface DeveloperAccreditation {
  id: string;
  name: string;
  shortLabel: string;
  platform: 'google' | 'lark' | 'microsoft';
  title: string;
  badgeLabel: string;
  description: string;
  verifiedStatus: string;
  accentColor: string;
  bgGradient: string;
  skills: string[];
}

export const developerBadges: DeveloperAccreditation[] = [
  {
    id: "google-developer",
    name: "Google Developer",
    shortLabel: "Google Developer",
    platform: "google",
    title: "Android & Cloud Ecosystem Developer",
    badgeLabel: "Verified Developer",
    description: "Building native Android apps (Kotlin/Java), Flutter cross-platform applications, Google Cloud integrations, and modern fullstack Progressive Web Apps.",
    verifiedStatus: "Active Ecosystem Developer",
    accentColor: "#4285F4",
    bgGradient: "from-[#4285F4]/15 via-[#EA4335]/10 to-[#FBBC05]/10",
    skills: ["Android (Kotlin)", "Flutter & Dart", "Google Cloud Platform", "Firebase", "Web APIs"]
  },
  {
    id: "lark-developer",
    name: "Lark Developer",
    shortLabel: "Lark Developer",
    platform: "lark",
    title: "Open Platform & Bot Automation Specialist",
    badgeLabel: "Lark Developer Certified",
    description: "Certified Lark Open Platform developer building custom interactive bots, automated event webhooks, Base multi-dimensional databases, and enterprise workplace workflows.",
    verifiedStatus: "Certified Lark Developer (2024)",
    accentColor: "#00D6B9",
    bgGradient: "from-[#00D6B9]/15 via-[#0088FF]/10 to-[#121214]",
    skills: ["Lark Open Platform", "Custom Interactive Bots", "Base Automations", "Lark Webhooks", "API Integrations"]
  },
  {
    id: "microsoft-developer",
    name: "Microsoft Developer",
    shortLabel: "Microsoft Developer",
    platform: "microsoft",
    title: "Power Platform & Dataverse Solution Architect",
    badgeLabel: "Enterprise Solution Architect",
    description: "Enterprise Power Platform, Dataverse, C# Plugins, PCF custom React components, Power Automate cloud flows, and Azure DevOps ALM pipeline development.",
    verifiedStatus: "Enterprise Verified Architect",
    accentColor: "#00A4EF",
    bgGradient: "from-[#00A4EF]/15 via-[#7FBA00]/10 to-[#FFB900]/10",
    skills: ["Power Apps (Canvas & Model-Driven)", "Dataverse Architecture", "C# Plugins", "PCF React Controls", "Azure DevOps ALM"]
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-michael-tan",
    name: "Eng. Michael Tan",
    role: "Head of Enterprise Information Systems",
    company: "IOI Corporation Berhad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "Ali's architecture for our Lotus Domino modernization was nothing short of brilliant. By engineering a single code-first Power Apps platform on SharePoint Online, he avoided premium-connector licensing while ensuring zero operational downtime across our department-sites.",
    projectOrScope: "Lotus Domino to SharePoint-Backed Code-First Modernization",
    rating: 5,
    date: "Jan 2025",
    tags: ["Power Platform", "SharePoint", "Domino Modernization", "Cost Optimization"],
    relationship: "Direct Enterprise Stakeholder",
    badge: "Enterprise Modernization"
  },
  {
    id: "test-sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Director of Global Service Delivery",
    company: "Concentrix",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    content: "Ali transformed our multilingual operations squad at Concentrix. Leading multilingual BPO team scaling from 9 to 34 agents across 7 regional markets with >98.6% SLA adherence was outstanding. His custom Lark bot workflow automation and Power Platform tools eliminated 90% of manual queue reporting, making his operations squad the gold standard for efficiency.",
    projectOrScope: "Multilingual BPO Team Scaling & Lark Bot Workflow Automation at Concentrix",
    rating: 5,
    date: "Nov 2024",
    tags: ["Concentrix", "Multilingual BPO Scaling", "Lark Bot Automation", "SLA Benchmark"],
    relationship: "Senior Operations Executive",
    badge: "BPO Operations & Lark Bots"
  },
  {
    id: "test-hishamudin-razak",
    name: "Dato' Ir. Hishamudin Razak",
    role: "Senior Vice President of Operations",
    company: "Tasek Cement Berhad",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content: "The GxP-compliant 5-tier rebate approval system designed by Ali reduced our cement consignment turnaround time from 3 business days down to 15 minutes. The immutable audit logs and automated ERP reconciliation gave our compliance board 100% confidence.",
    projectOrScope: "GxP Rebate Approval Engine & Oracle ERP Sync",
    rating: 5,
    date: "Sep 2024",
    tags: ["GxP Compliance", "Oracle ERP", "Workflow Automation", "Audit Trails"],
    relationship: "Executive Client Lead",
    badge: "GxP Compliance & ERP"
  },
  {
    id: "test-raymond-lee",
    name: "Dr. Raymond Lee",
    role: "Principal Mobile Solutions Architect & Google Developer Mentor",
    company: "Mobile Tech Innovations APAC",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    content: "Ali's software engineering across native Android (Kotlin) and cross-platform React Native is exemplary. He writes clean, modular code with strict typing, robust offline-first synchronization, and state management that delivers silky 60fps performance across diverse mobile hardware.",
    projectOrScope: "Android & Cross-Platform Mobile Applications",
    rating: 5,
    date: "Jul 2024",
    tags: ["Android Development", "Google Developer", "React Native", "TypeScript"],
    relationship: "Technical Collaborator & Mentor",
    badge: "Mobile Engineering"
  },
  {
    id: "test-brenda-wong",
    name: "Brenda Wong",
    role: "Head of Digital Procurement",
    company: "Oleochemicals Manufacturing Division",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content: "Our e-Procurement and RFQ suite required strict bidirectional ERP synchronization and multi-currency vendor quote evaluations. Ali built custom connectors and automated approval matrixes that cut vendor turnaround by 65%. Highly recommended for complex digital initiatives.",
    projectOrScope: "E-Procurement Suite & Custom ERP Connectors",
    rating: 5,
    date: "May 2024",
    tags: ["Custom Connectors", "Power Automate", "Procurement", "Dataverse"],
    relationship: "Business Unit Head",
    badge: "Digital Procurement"
  },
  {
    id: "test-marcus-vance",
    name: "Marcus Vance",
    role: "Enterprise Cloud & Collaboration Lead",
    company: "APAC Modern Workplace",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    content: "Whether deploying multi-stage Azure DevOps ALM pipelines, designing Power Automate approval flows, or creating intelligent Lark open platform bots, Ali bridges the gap between deep pro-code software engineering and rapid enterprise delivery seamlessly.",
    projectOrScope: "Enterprise ALM, Power Automate Flows & Lark Open Platform",
    rating: 5,
    date: "Mar 2024",
    tags: ["Microsoft Developer", "Lark Developer", "Azure DevOps", "Power Automate"],
    relationship: "Cloud Architecture Peer",
    badge: "DevOps & ALM"
  }
];

