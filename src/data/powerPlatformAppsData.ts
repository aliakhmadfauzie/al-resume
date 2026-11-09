export interface DepartmentalAppScreen {
  id: string;
  name: string;
  imagePath: string;
}

export interface DepartmentalAppWorkflow {
  flowName: string;
  trigger: string;
  integrations: string[];
  screenshot: string;
  keySteps: string[];
}

export interface DepartmentalAppItem {
  code: string;
  name: string;
  department: 'IT' | 'HR' | 'Finance' | 'SHE' | 'Maintenance' | 'QA' | 'QC' | 'Logistics';
  departmentFullName: string;
  tagline: string;
  dataSource: string;
  targetSLA: string;
  status: 'Production Ready' | 'Active Deployed';
  screensCount: number;
  capabilities: string[];
  screens: DepartmentalAppScreen[];
  workflow: DepartmentalAppWorkflow;
  yamlSnippet: string;
}

export const DEPARTMENTAL_APPS: DepartmentalAppItem[] = [
  {
    code: 'ITSSR',
    name: 'IT Support & Service Request',
    department: 'IT',
    departmentFullName: 'Information Technology',
    tagline: 'Enterprise IT ticketing, plant automation support, and hardware provisioning',
    dataSource: 'SharePoint Online (MainDB_IT_Ext_Support)',
    targetSLA: 'Critical (P1) < 4h · Normal < 24h',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      '4-tier SLA urgency routing with automated engineer assignment',
      'Industrial SCADA / DCS hardware classification and plant telemetry tags',
      'Integrated SAP PM breakdown maintenance reservation HTTP trigger',
      'Dual-tier digital sign-off (Engineering HOD & Plant General Manager)'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/itssr/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/itssr/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/itssr/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/itssr/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'ITSSR-Autotask-Routing-SLA-Approval-Engine',
      trigger: 'When an item is created or modified (V2) on MainDB_IT_Ext_Support',
      integrations: ['Approvals v2', 'Microsoft Teams', 'SAP ERP REST'],
      screenshot: '/assets/power-apps/workflows/itssr-flow-designer.png',
      keySteps: [
        'Get submitter profile and manager via Office 365 Users',
        'addHours(utcNow(), if(equals(Priority, "URGENT"), 4, 24)) SLA deadline calculation',
        'Start and wait for an approval (V2) - HOD & Plant GM',
        'Update item status to Approved_Pending_Dispatch',
        'HTTP POST to SAP PM gateway and Teams adaptive card broadcast'
      ]
    },
    yamlSnippet: `ITSSR_EditScreen As Screen:
    Properties:
        Fill: RGBA(250, 249, 248, 1)
        OnVisible: |-
            =Set(varCurrentRecord, Defaults(MainDB_IT_Ext_Support));
            Set(varSelectedCategory, "Plant Automation & SCADA");
    Children:
        - conHeader As groupContainer.horizontalAutoLayoutContainer:
            Properties:
                Fill: RGBA(0, 108, 76, 1)
                Height: 64
                LayoutAlignItems: LayoutAlignItems.Center
                LayoutDirection: LayoutDirection.Horizontal
                LayoutJustifyContent: LayoutJustifyContent.SpaceBetween`
  },
  {
    code: 'EAF',
    name: 'External Access Form',
    department: 'IT',
    departmentFullName: 'Information Technology',
    tagline: 'Security clearance, VPN provisioning, and third-party contractor access management',
    dataSource: 'SharePoint Online (MainDB_IT_Ext_Access)',
    targetSLA: 'Contractor Clearance < 48h',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'Contractor VPN intake with ISO 27001 non-disclosure agreement tracking',
      'Automated Microsoft Entra ID Guest invitation and restricted group mapping',
      'Dual-stage authorization: Department Sponsor -> CISO Security Head',
      'Auto-expiring credentials with automated revocation fail-safe'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/eaf/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/eaf/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/eaf/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/eaf/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'EAF-Contractor-Access-Provisioning-Lifecycle',
      trigger: 'When an item is created (V2) on MainDB_IT_Ext_Access',
      integrations: ['Approvals v2', 'Microsoft Entra ID', 'Outlook'],
      screenshot: '/assets/power-apps/workflows/eaf-flow-designer.png',
      keySteps: [
        'Check attached NDA validity in ISO compliance repository',
        'Sequential approval: Department Head -> CISO clearance',
        'Azure AD action: Invite Guest User and add to VPN-Contractors-Restricted',
        'Send encrypted credentials email with expiring OTP'
      ]
    },
    yamlSnippet: `EAF_DetailsScreen As Screen:
    Properties:
        Fill: RGBA(250, 249, 248, 1)
    Children:
        - conSecurityDossier As groupContainer.verticalAutoLayoutContainer:
            Properties:
                Width: Parent.Width * 0.65
                Fill: RGBA(255, 255, 255, 1)
                DropShadow: DropShadow.Light`
  },
  {
    code: 'LVE',
    name: 'Leave Management System',
    department: 'HR',
    departmentFullName: 'Human Resources',
    tagline: 'Plant shift leave application with automated balance calculation and shift coverage guards',
    dataSource: 'SharePoint Online (HR_LeaveRecords)',
    targetSLA: 'Supervisor Approval < 24h',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'Real-time statutory entitlement accrual and annual balance checks',
      'Plant shift roster clash detection ensuring minimum operating staff',
      'Line supervisor endorsement with relief handover confirmation',
      'Automated Outlook shared shift calendar event blocking'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/lve/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/lve/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/lve/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/lve/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'LVE-Leave-Validation-ShiftClash-Approval',
      trigger: 'When an item is created or modified (V2) on HR_LeaveRecords',
      integrations: ['Approvals v2', 'Outlook Calendar', 'SharePoint'],
      screenshot: '/assets/power-apps/workflows/lve-flow-designer.png',
      keySteps: [
        'Query Plant_ShiftRosters for conflicting shift allocations',
        'Start and wait for an approval (V2) - Shift Lead',
        'Update item: Deduct days from HR_LeaveBalances',
        'Create event (V4) on Operations Shift Shared Calendar'
      ]
    },
    yamlSnippet: `LVE_BrowseScreen As Screen:
    Properties:
        Fill: RGBA(250, 249, 248, 1)
    Children:
        - galLeaveLedger As gallery.galleryVertical:
            Properties:
                Items: |-
                    =Filter(HR_LeaveRecords, EmployeeEmail = User().Email)`
  },
  {
    code: 'MCL',
    name: 'Medical Claims & Healthcare Benefits',
    department: 'HR',
    departmentFullName: 'Human Resources',
    tagline: 'Employee outpatient, dental, and optical reimbursement with AI Builder OCR and SAP payroll export',
    dataSource: 'SharePoint Online (HR_MedicalClaims)',
    targetSLA: 'HR Verification < 48h · Monthly SAP Cutoff',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'AI Builder mobile camera receipt OCR extracting merchant, total, and tax ID',
      'Real-time annual outpatient/dental quota decrement and ceiling validation',
      'Panel vs non-panel clinic co-pay rate enforcement',
      'Batch payroll export mapping to SAP HCM Wage Type 2010'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/mcl/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/mcl/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/mcl/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/mcl/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'MCL-Outpatient-Claim-Quota-SAP-Batch-Export',
      trigger: 'When a claim item is created (V2) on HR_MedicalClaims',
      integrations: ['AI Builder', 'Approvals v2', 'SAP ERP REST'],
      screenshot: '/assets/power-apps/workflows/mcl-flow-designer.png',
      keySteps: [
        'AI Builder Receipt Processing model extraction',
        'Check YTD claim total against annual ceiling',
        'Tiered approval: Auto-approve if < RM150 with panel clinic',
        'HTTP POST export to SAP HCM payroll wage batch'
      ]
    },
    yamlSnippet: `MCL_EditScreen As Screen:
    Children:
        - conReceiptUpload As groupContainer.verticalAutoLayoutContainer:
            Properties:
                Fill: RGBA(243, 242, 241, 1)
                BorderColor: RGBA(0, 120, 212, 1)
                BorderStyle: BorderStyle.Dashed`
  },
  {
    code: 'CAR',
    name: 'Capital Appropriation Request',
    department: 'Finance',
    departmentFullName: 'Finance and Credit',
    tagline: 'Multi-million dollar CAPEX approval engine with financial ROI/NPV metrics and executive sign-off chain',
    dataSource: 'SharePoint Online (FIN_CAR_Master)',
    targetSLA: 'Tier 1 < 3 Days · Board Escalation < 14 Days',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'CAPEX financial feasibility modeling with automated NPV, IRR, and payback calculations',
      'Sequential 3-tier authorization chain: Plant GM -> Financial Controller -> Managing Director',
      'Automated creation of SAP WBS Element and Capital Budget Internal Order',
      'SHA-256 cryptographic audit seal timestamping executive board sign-offs'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/car/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/car/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/car/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/car/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'CAR-Capex-MultiTier-Executive-Authorization',
      trigger: 'When an item is created or modified (V2) on FIN_CAR_Master',
      integrations: ['Approvals v2', 'Microsoft Teams', 'SAP ERP REST'],
      screenshot: '/assets/power-apps/workflows/car-flow-designer.png',
      keySteps: [
        'Validate NPV and IRR financial thresholds meet Group Treasury rules',
        'Sequential Approvals: Plant GM -> Financial Controller -> MD',
        'HTTP POST creating SAP Internal Order (WBS element)',
        'Update item with SHA-256 cryptographic sign-off seal'
      ]
    },
    yamlSnippet: `CAR_DetailsScreen As Screen:
    Children:
        - conFinancialKPIs As groupContainer.horizontalAutoLayoutContainer:
            Properties:
                Height: 90
                Fill: RGBA(239, 246, 252, 1)
                BorderColor: RGBA(199, 224, 244, 1)`
  },
  {
    code: 'CMF',
    name: 'Credit Management Form',
    department: 'Finance',
    departmentFullName: 'Finance and Credit',
    tagline: 'Commercial buyer credit assessment, Dun & Bradstreet risk scoring, and limit authorization',
    dataSource: 'SharePoint Online (FIN_CMF_Master)',
    targetSLA: 'Credit Committee Review < 48h',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'Dun & Bradstreet / CTOS REST API credit score integration with financial statement ratios',
      'Commercial buyer credit grading (A through D) and bank guarantee validation',
      'Direct PATCH integration updating customer master credit limits in SAP SD',
      'Automated credit facility approval letter generation in PDF format'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/cmf/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/cmf/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/cmf/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/cmf/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'CMF-Commercial-Credit-Risk-Rating-Approval',
      trigger: 'When a credit review is submitted on FIN_CMF_Master',
      integrations: ['Approvals v2', 'Outlook', 'SAP ERP REST'],
      screenshot: '/assets/power-apps/workflows/cmf-flow-designer.png',
      keySteps: [
        'HTTP POST to Commercial Credit Bureau API (D&B / CTOS)',
        'Parse credit score and bankruptcy risk index',
        'Start approval for Commercial Head & Finance Director',
        'PATCH SAP SD customer credit limit and dispatch facility letter'
      ]
    },
    yamlSnippet: `CMF_BrowseScreen As Screen:
    Children:
        - conRiskExposureFilter As groupContainer.horizontalAutoLayoutContainer:
            Properties:
                Height: 52
                Fill: RGBA(255, 255, 255, 1)`
  },
  {
    code: 'SHEINCIACCI',
    name: 'Incident & Accident Reporting',
    department: 'SHE',
    departmentFullName: 'Safety and Health (SHE)',
    tagline: 'Statutory DOSH/JKKP 24-hr incident reporting, 5-Whys root cause analysis, and LTA tracking',
    dataSource: 'SharePoint Online (SHE_IncidentMaster)',
    targetSLA: 'Statutory DOSH Notification < 24h',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'Statutory DOSH/JKKP 24-hr emergency alert countdown timer',
      'Interactive 5-Whys root cause failure analysis (RCFA) causal chain builder',
      'Automated drafting of DOSH Statutory JKKP 6/8 PDF report',
      'Emergency broadcast to Plant Safety Response Channel and Legal Counsel'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/sheinciacci/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/sheinciacci/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/sheinciacci/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/sheinciacci/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'SHE-Incident-Statutory-DOSH-Escalation-CAPA',
      trigger: 'When an incident is logged (V2) on SHE_IncidentMaster',
      integrations: ['Approvals v2', 'Microsoft Teams', 'SharePoint'],
      screenshot: '/assets/power-apps/workflows/sheinciacci-flow-designer.png',
      keySteps: [
        'Calculate statutory 24-hr DOSH deadline timestamp',
        'Post high-priority Adaptive Card in Teams Safety Emergency Channel',
        'Draft DOSH JKKP 6/8 statutory form PDF scaffold',
        'Start approval for SHE Manager & Plant Operations Head'
      ]
    },
    yamlSnippet: `SHEINCIACCI_EditScreen As Screen:
    Children:
        - con5WhysMatrix As groupContainer.verticalAutoLayoutContainer:
            Properties:
                Fill: RGBA(255, 253, 251, 1)
                BorderColor: RGBA(216, 59, 1, 1)`
  },
  {
    code: 'PPEREQU',
    name: 'PPE Requisition & Issuance',
    department: 'SHE',
    departmentFullName: 'Safety and Health (SHE)',
    tagline: 'Hazard-zone safety gear entitlement matrix, replacement frequency checks, and store issuance',
    dataSource: 'SharePoint Online (SHE_PPERequests)',
    targetSLA: 'Safety Officer Review < 12h · Same-Day Issue',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'Hazard zone safety equipment entitlement matrix (Level B chemical suits, respirators)',
      'Statutory wear-and-tear replacement interval enforcement (e.g., 6-month cartridge rules)',
      'Real-time warehouse inventory decrement in SHE_PPE_Inventory with safety stock alerts',
      'Storekeeper digital dispatch with employee badge QR code verification'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/pperequ/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/pperequ/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/pperequ/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/pperequ/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'PPEREQU-Hazard-Zone-Quota-Stock-Issuance',
      trigger: 'When a PPE requisition is created on SHE_PPERequests',
      integrations: ['Approvals v2', 'Microsoft Teams', 'SharePoint'],
      screenshot: '/assets/power-apps/workflows/pperequ-flow-designer.png',
      keySteps: [
        'Query hazard zone PPE matrix and replacement quota history',
        'Safety Officer endorsement for corrosive atmosphere gear',
        'Decrement stock in SHE_PPE_Inventory list',
        'Post pick-and-pack alert to Central Storekeeper Teams channel'
      ]
    },
    yamlSnippet: `PPEREQU_DetailsScreen As Screen:
    Children:
        - conHazardZoneBadge As groupContainer.horizontalAutoLayoutContainer:
            Properties:
                Fill: RGBA(253, 243, 235, 1)
                BorderColor: RGBA(249, 217, 195, 1)`
  },
  {
    code: 'FAR',
    name: 'Equipment Failure Analysis Report',
    department: 'Maintenance',
    departmentFullName: 'Plant Maintenance',
    tagline: 'Root Cause Failure Analysis (RCFA) for boilers, turbines, and centrifuges; MTBF/MTTR telemetry',
    dataSource: 'SharePoint Online (MTN_FailureReports)',
    targetSLA: 'RCFA Charter Sign-off < 72h',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'Class A critical asset failure triage with downtime hour tracking',
      'Automated creation of SAP PM Maintenance Breakdown Orders (Notification M1)',
      'MTBF (Mean Time Between Failures) and MTTR streaming telemetry to Power BI',
      'Metallurgical and lubrication laboratory analysis attachment repository'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/far/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/far/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/far/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/far/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'FAR-RCFA-Critical-Asset-SAP-PM-Sync',
      trigger: 'When a failure report is logged (V2) on MTN_FailureReports',
      integrations: ['Approvals v2', 'SAP ERP REST', 'Power BI'],
      screenshot: '/assets/power-apps/workflows/far-flow-designer.png',
      keySteps: [
        'Evaluate asset criticality class (Class A boiler vs Class B/C pump)',
        'HTTP POST creating SAP PM Breakdown Notification M1',
        'Approval: Reliability Engineer & Maintenance Superintendent',
        'Stream MTBF/MTTR telemetry to Power BI Executive Dashboard'
      ]
    },
    yamlSnippet: `FAR_EditScreen As Screen:
    Children:
        - conAssetTelemetry As groupContainer.horizontalAutoLayoutContainer:
            Properties:
                Height: 78
                Fill: RGBA(255, 255, 255, 1)`
  },
  {
    code: 'MTP',
    name: 'Turnaround & Overhaul Planning',
    department: 'Maintenance',
    departmentFullName: 'Plant Maintenance',
    tagline: 'Statutory annual boiler overhauls, shutdown Gantt scheduling, work permits, and production handover',
    dataSource: 'SharePoint Online (MTN_TurnaroundPlans)',
    targetSLA: 'Turnaround Safety Gate < 24h',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'Plant shutdown Work Breakdown Structure (WBS) with critical path milestones',
      'Lock-Out/Tag-Out (LOTO) isolation verification for physical blind flanges and electrical breakers',
      'Tri-discipline parallel safety gate: Operations Head + Maintenance Head + Safety Manager',
      'Cryptographic token generation for digital Permit-To-Work (PTW) release'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/mtp/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/mtp/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/mtp/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/mtp/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'MTP-Shutdown-Turnaround-Permit-Milestone-Sync',
      trigger: 'When a turnaround milestone is updated on MTN_TurnaroundPlans',
      integrations: ['Approvals v2', 'Microsoft Teams', 'SharePoint'],
      screenshot: '/assets/power-apps/workflows/mtp-flow-designer.png',
      keySteps: [
        'Verify 100% of LOTO physical blind flanges are tagged',
        'Parallel approval: Operations Head + Maintenance Head + SHE Head',
        'Update item: Release digital hot work / confined space PTW',
        'Post daily shutdown Gantt milestone broadcast to Teams'
      ]
    },
    yamlSnippet: `MTP_DetailsScreen As Screen:
    Children:
        - conLOTOVerification As groupContainer.verticalAutoLayoutContainer:
            Properties:
                Fill: RGBA(248, 247, 246, 1)
                BorderColor: RGBA(237, 235, 233, 1)`
  },
  {
    code: 'NCRINTEAUDI',
    name: 'Internal Audit Non-Conformance',
    department: 'QA',
    departmentFullName: 'Quality Assurance (QA)',
    tagline: 'ISO 9001 / FSSC 22000 non-conformance tracking, 48-hr containment, and CAPA resolution',
    dataSource: 'SharePoint Online (QA_AuditNCR_Master)',
    targetSLA: 'Containment Action < 48h · CAPA Closure < 30 Days',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'ISO 9001:2015 Clause 8.7 & FSSC 22000 audit finding clause categorization',
      'Mandatory 48-hr containment countdown timer alerting auditee section managers',
      'Lead Auditor review and sign-off on 5-Whys fishbone corrective action plans',
      'Automated scheduling of 30-day post-implementation verification audits'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/ncrinteaudi/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/ncrinteaudi/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/ncrinteaudi/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/ncrinteaudi/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'NCR-ISO-Audit-Containment-CAPA-Signoff',
      trigger: 'When an audit NCR is opened (V2) on QA_AuditNCR_Master',
      integrations: ['Approvals v2', 'Microsoft Teams', 'SharePoint'],
      screenshot: '/assets/power-apps/workflows/ncrinteaudi-flow-designer.png',
      keySteps: [
        'Calculate addHours(Created, 48) containment deadline',
        'Post Adaptive Card to Auditee Section Manager with countdown',
        'Approval: Lead Auditor validation of systemic corrective actions',
        'Schedule 30-day post-implementation follow-up audit task'
      ]
    },
    yamlSnippet: `NCR_EditScreen As Screen:
    Children:
        - conISOClauseSelector As groupContainer.horizontalAutoLayoutContainer:
            Properties:
                Fill: RGBA(255, 255, 255, 1)`
  },
  {
    code: 'OOS',
    name: 'Laboratory Out-of-Specification',
    department: 'QC',
    departmentFullName: 'Quality Control (QC)',
    tagline: 'Chemical test variance flagging, automated plant quality hold, and chemist disposition review',
    dataSource: 'SharePoint Online (QC_OOS_Master)',
    targetSLA: 'Quarantine Lock < 5s · Disposition < 4h',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      'Automated quarantine locking storage tanks in SAP ERP upon test parameter breach',
      'Chief Chemist and QC Manager formal disposition review (down-blend, re-fractionate, downgrade)',
      'Product Quality Corrective Action Request (PQCAR) linkage and batch genealogy tracking',
      'Failsafe quality lock retention preventing accidental tanker loading during investigation'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/oos/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/oos/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/oos/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/oos/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'OOS-Lab-Chemical-Quarantine-Disposition-Flow',
      trigger: 'When an OOS variance is detected on QC_OOS_Master',
      integrations: ['Approvals v2', 'SAP ERP REST', 'Outlook'],
      screenshot: '/assets/power-apps/workflows/oos-flow-designer.png',
      keySteps: [
        'HTTP PUT instantly locking storage tank status in SAP ERP',
        'Send urgent SMS / Push alert to Refinery Superintendent',
        'Start approval: Chief Chemist disposition decision',
        'Conditional unlock of SAP QM inspection lot with certificate'
      ]
    },
    yamlSnippet: `OOS_DetailsScreen As Screen:
    Children:
        - conQuarantineBanner As groupContainer.horizontalAutoLayoutContainer:
            Properties:
                Fill: RGBA(253, 243, 235, 1)
                BorderColor: RGBA(216, 59, 1, 1)`
  },
  {
    code: 'CSD',
    name: 'Container Shipment & Tankers',
    department: 'Logistics',
    departmentFullName: 'Logistics and Supply Chain',
    tagline: '18-point bulk liquid tanker inspection, previous cargo validation, tare weight, and gate release',
    dataSource: 'SharePoint Online (LOG_ShipmentDispatch)',
    targetSLA: 'Inspection Clearance < 20m per Tanker',
    status: 'Production Ready',
    screensCount: 4,
    capabilities: [
      '18-point liquid chemical road tanker safety and food-grade cleanliness inspection',
      'Prior cargo chemical compatibility matrix validation (preventing product contamination)',
      'Automated weighbridge REST API integration capturing real-time vehicle tare weight',
      'Digital QR code loading clearance gate pass issued directly to driver mobile device'
    ],
    screens: [
      { id: 'login', name: 'Login Screen', imagePath: '/assets/power-apps/apps/csd/01-loginscreen.png' },
      { id: 'browse', name: 'Browse Screen', imagePath: '/assets/power-apps/apps/csd/02-browsescreen.png' },
      { id: 'details', name: 'Details Screen', imagePath: '/assets/power-apps/apps/csd/03-detailsscreen.png' },
      { id: 'edit', name: 'Edit Screen', imagePath: '/assets/power-apps/apps/csd/04-editscreen.png' }
    ],
    workflow: {
      flowName: 'CSD-Bulk-Tanker-Inspection-Weighbridge-Release',
      trigger: 'When a tanker inspection is completed (V2) on LOG_ShipmentDispatch',
      integrations: ['Approvals v2', 'Outlook', 'Weighbridge REST API'],
      screenshot: '/assets/power-apps/workflows/csd-flow-designer.png',
      keySteps: [
        'Evaluate 18-point inspection checklist and prior cargo compatibility',
        'HTTP GET capture tare weight from automated weighbridge sensor',
        'Approval: Loading Bay Master authorization',
        'Generate digital QR loading clearance gate pass file'
      ]
    },
    yamlSnippet: `CSD_EditScreen As Screen:
    Children:
        - con18PointInspection As groupContainer.verticalAutoLayoutContainer:
            Properties:
                Fill: RGBA(255, 255, 255, 1)
                BorderColor: RGBA(237, 235, 233, 1)`
  }
];
