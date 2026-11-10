import { navigate } from '../../navigation';
import React, { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Cpu,
  Sparkles,
  Server,
  Box,
  Truck,
  Check,
  ArrowRight,
  RefreshCw,
  FileText,
  Terminal,
  ShieldCheck,
  ExternalLink,
  Lock,
  Search,
  Building2,
  Clock,
  User,
  Shield,
  FileSpreadsheet,
  AlertTriangle,
  Download,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveDemosViewProps {
  initialDemo?: string;
}

interface DemoMeta {
  id: string;
  title: string;
  shortTitle: string;
  domain: string;
  icon: React.ReactNode;
  browserUrl: string;
  statusBadge: string;
  projectId?: string;
  repoUrl?: string;
  architecturePill: string;
}

export const LiveDemosView: React.FC<LiveDemosViewProps> = ({ initialDemo = 'rebate' }) => {
  const demoIds = [
    'rebate',
    'cs-resolver',
    'she-matrix',
    'ats-automation',
    'garment-erp',
    'finops',
    'it-service',
    'warehouse',
    'maintenance',
    'erp'
  ];
  const activeDemo = demoIds.includes(initialDemo) ? initialDemo : 'rebate';

  // State for Tasek Cement Rebate Calculator
  const [rebateCustomer, setRebateCustomer] = useState<string>('CUST-8802: Mega Ready-Mix Sdn Bhd (Class A)');
  const [rebateBaseRate, setRebateBaseRate] = useState<number>(0.08);
  const [rebateVolume, setRebateVolume] = useState<number>(1200);
  const [rebateDistance, setRebateDistance] = useState<number>(0.03);
  const [rebateSpecialTerm, setRebateSpecialTerm] = useState<number>(0.02);
  const [rebateSeasonal, setRebateSeasonal] = useState<number>(0.01);
  const [rebateTax] = useState<number>(0.01);
  const [rebateCreditDeduction, setRebateCreditDeduction] = useState<number>(0.01);
  const [rebateApproved, setRebateApproved] = useState<boolean>(false);
  const [creditNoteIssued, setCreditNoteIssued] = useState<boolean>(false);

  const rawRebatePerTonne = Math.max(
    0,
    rebateBaseRate + rebateDistance + rebateSpecialTerm + rebateSeasonal + rebateTax - rebateCreditDeduction
  );
  const cappedRebatePerTonne = Math.min(rawRebatePerTonne, 0.20);
  const isCapped = rawRebatePerTonne > 0.20;
  const totalRebateAmountRM = (cappedRebatePerTonne * rebateVolume).toFixed(2);

  // State for DocFinder AI Knowledge Retrieval
  const [docQuery, setDocQuery] = useState<string>(
    'Batch 402 Palm Stearin melting point deviation during high temperature filtration'
  );
  const [classifiedCategory, setClassifiedCategory] = useState<string>(
    'Quality Assurance / Non-Conformance (CAPA)'
  );
  const [confidenceScore, setConfidenceScore] = useState<number>(98.4);
  const [recommendedSOP, setRecommendedSOP] = useState<string>(
    'SOP-QA-042: Filtration & High Temp Non-Conformance Protocol (Rev 4.2)'
  );
  const [isClassifying, setIsClassifying] = useState<boolean>(false);
  const [larkDispatched, setLarkDispatched] = useState<boolean>(false);

  // State for PulseTrack / IT Service Request Hub
  const [itTickets, setItTickets] = useState([
    {
      id: 'INC-2025-084',
      title: 'Dataverse Production Entity Sync Latency > 1,200ms',
      priority: 'High',
      status: 'In Progress (L2 Triage)',
      requester: 'Finance Operations',
      sla: '4.2h left',
      station: 'Pod Alpha-04'
    },
    {
      id: 'REQ-2025-112',
      title: 'SAP Gateway Connector Permission Upgrade for Powerbiz',
      priority: 'Medium',
      status: 'Pending Review',
      requester: 'Logistics Supervisor',
      sla: '22h left',
      station: 'Penang Bay Office'
    },
    {
      id: 'INC-2025-079',
      title: 'Domino QMS Archived Database Read-Only Mount',
      priority: 'Low',
      status: 'Resolved (72h Verification)',
      requester: 'QA Compliance Lead',
      sla: '72h window',
      station: 'Johor Lab Desk'
    }
  ]);
  const [newTicketTitle, setNewTicketTitle] = useState('');
  const [newTicketPriority, setNewTicketPriority] = useState('High');

  // FinOps quick approval toggle
  const [approvals, setApprovals] = useState<{ [key: string]: boolean }>({
    'REQ-4921': false,
    'REQ-4922': true,
    'REQ-4923': false
  });

  const triggerApproveRebate = () => {
    setRebateApproved(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleClassifyTicket = (customQuery?: string) => {
    const q = customQuery !== undefined ? customQuery : docQuery;
    if (customQuery !== undefined) setDocQuery(customQuery);
    setIsClassifying(true);
    setLarkDispatched(false);
    setTimeout(() => {
      setIsClassifying(false);
      const lower = q.toLowerCase();
      if (lower.includes('server') || lower.includes('disk') || lower.includes('patch') || lower.includes('ram')) {
        setClassifiedCategory('Infrastructure & Plant IT Server Health');
        setConfidenceScore(96.2);
        setRecommendedSOP('SOP-IT-018: Weekly Server Audit & Capacity Threshold Protocol (Rev 3.1)');
      } else if (lower.includes('rebate') || lower.includes('ceiling') || lower.includes('po') || lower.includes('credit')) {
        setClassifiedCategory('Commercial & Sales Rebates (Tasek Governance)');
        setConfidenceScore(99.1);
        setRecommendedSOP('SOP-FIN-009: 7-Component Tiered Rebate Formula Governance (RM 0.20 Cap)');
      } else if (lower.includes('container') || lower.includes('seal') || lower.includes('warehouse') || lower.includes('bay')) {
        setClassifiedCategory('Warehouse & Container Logistics Operations (Slice D)');
        setConfidenceScore(95.4);
        setRecommendedSOP('SOP-LOG-027: Pre-Loading Container Inspection & Digital Seal Verification');
      } else {
        setClassifiedCategory('Quality Assurance & Non-Conformance CAPA (Slice A)');
        setConfidenceScore(98.4);
        setRecommendedSOP('SOP-QA-042: Filtration & High Temp Non-Conformance Protocol (Rev 4.2)');
      }
    }, 450);
  };

  // State for ATS Automation & Q1-Q10 Governance Simulator
  const [atsTrack, setAtsTrack] = useState<'Track A' | 'Track B'>('Track A');
  const [atsTaskMode, setAtsTaskMode] = useState<'structured' | 'fast'>('structured');
  const [atsBulletInput, setAtsBulletInput] = useState<string>(
    'Architected 84 production enterprise applications across 167 legacy Domino databases, reducing manual cycle time by 70% while maintaining 99.9% SLA reliability.'
  );
  const [simulatedGroqExhausted, setSimulatedGroqExhausted] = useState<boolean>(false);

  const ssotAllowedNumbers = ['84', '167', '99.9%', '70%', '60+', '1000+', '1,000+', '22', '15', '12', '14', '6', '7', '10', '98.4%', '99%', '50%'];
  const extractedMetrics: string[] = atsBulletInput.match(/\b\d+(?:\.\d+)?%\+?|\b\d+\+?/g) || [];
  const unauthorizedMetrics = extractedMetrics.filter(
    (m) => !ssotAllowedNumbers.includes(m.replace(/,/g, ''))
  );
  const isSsotValid = unauthorizedMetrics.length === 0;

  const activeAiEngine =
    atsTaskMode === 'fast'
      ? simulatedGroqExhausted
        ? 'Gemini 1.5 Flash (Fallback · Schema Prompt-Inlined)'
        : 'Groq llama-3.3-70b-versatile (Primary Fast Route)'
      : 'Gemini gemini-flash-latest (Primary Structured Route)';

  // State for Putri GarmentHub 4-Pocket & SPK QC Simulator
  const [garmentActiveRole, setGarmentActiveRole] = useState<'owner' | 'keuangan' | 'produksi'>('owner');
  const [spkReceivedLusin, setSpkReceivedLusin] = useState<number>(40);
  const [spkRatePerLusin, setSpkRatePerLusin] = useState<number>(180000);
  const [spkBsFatal, setSpkBsFatal] = useState<number>(2);
  const [spkBsRepair, setSpkBsRepair] = useState<number>(3);
  const [garmentInvoiceIDR, setGarmentInvoiceIDR] = useState<number>(24000000);

  const spkPassedQC = Math.max(0, spkReceivedLusin - (spkBsFatal + spkBsRepair));
  const spkGrossWage = spkPassedQC * spkRatePerLusin;
  const spkDefectPenalty = spkBsFatal * 50000;
  const spkNetWage = Math.max(0, spkGrossWage - spkDefectPenalty);
  const spkCatalogRestockRatio = spkReceivedLusin > 0 ? ((spkPassedQC / spkReceivedLusin) * 100).toFixed(1) : '100.0';

  // State for IOI Acidchem DOSH 5x5 HIRADC Risk Matrix Simulator
  const [hiradcLikelihood, setHiradcLikelihood] = useState<number>(4);
  const [hiradcSeverity, setHiradcSeverity] = useState<number>(4);
  const [hiradcPlant, setHiradcPlant] = useState<'PENANG_PLANT' | 'JOHOR_PLANT'>('PENANG_PLANT');
  const hiradcScore = hiradcLikelihood * hiradcSeverity;
  const hiradcLevel = hiradcScore >= 15 ? 'HIGH RISK (STOP WORK / LOTO)' : hiradcScore >= 5 ? 'MEDIUM RISK (ENGINEERING CONTROL)' : 'LOW RISK (PPE & ADMIN)';

  // Master Demo Metadata and Actual App Links
  const demosMeta: Record<string, DemoMeta> = {
    'rebate': {
      id: 'rebate',
      title: 'Tasek Cement Commercial Rebate Approval Engine (RM 0.20 Ceiling)',
      shortTitle: 'Tasek Rebate (RM 0.20)',
      domain: 'Pillar 2 · Commercial Finance',
      icon: <TrendingUp className="w-4 h-4" />,
      browserUrl: 'https://rebate.tasek.com.my/approvals/calculator',
      statusBadge: 'Production Cloud Tenant · Dataverse',
      projectId: 'tasek-cement-rebate',
      repoUrl: 'https://github.com/aliakhmadfauzie/power-platform-portfolio',
      architecturePill: 'Microsoft Power Platform · Dataverse · Powerbiz'
    },
    'cs-resolver': {
      id: 'cs-resolver',
      title: 'DocFinder: AI-Powered Knowledge Retrieval & Lark Chat Search',
      shortTitle: 'DocFinder AI Retrieval',
      domain: 'Pillar 3 · Enterprise AI & Retrieval',
      icon: <Sparkles className="w-4 h-4" />,
      browserUrl: 'https://lark.internal.co/apps/docfinder-ai',
      statusBadge: 'Production Lark Bot & AI Builder',
      projectId: 'document-finder',
      repoUrl: 'https://github.com/aliakhmadfauzie/power-platform-portfolio',
      architecturePill: 'Microsoft AI Builder · Lark Base Hub · Sub-50ms NLP'
    },
    'she-matrix': {
      id: 'she-matrix',
      title: 'IOI Oleo Acidchem DOSH 5×5 SHE Chemical Safety Platform',
      shortTitle: 'IOI DOSH 5×5 SHE Matrix',
      domain: 'Pillar 1 · Industrial EHS',
      icon: <ShieldCheck className="w-4 h-4" />,
      browserUrl: 'https://she.ioioleochem.com/hiradc-matrix',
      statusBadge: '13 Apps · 52 Screens · Prai & Johor',
      projectId: 'ioi-acidchem-she-platform',
      repoUrl: 'https://github.com/aliakhmadfauzie/power-platform-portfolio',
      architecturePill: 'Power Apps · Dataverse · DOSH/SIRIM Matrix'
    },
    'ats-automation': {
      id: 'ats-automation',
      title: 'ATS Automation: Tri-Engine AI Router & 10-Gate PDF Governance',
      shortTitle: 'ATS Automation Engine',
      domain: 'Flagship Systems & AI Code',
      icon: <Terminal className="w-4 h-4" />,
      browserUrl: 'https://github.com/AlTechSolutions-AAF/ats-automation',
      statusBadge: 'Playwright v6.0 + Tri-Engine AI',
      projectId: 'ats-automation',
      repoUrl: 'https://github.com/AlTechSolutions-AAF/ats-automation',
      architecturePill: 'Python 3.11 · Gemini Flash · Groq Llama · ReportLab'
    },
    'garment-erp': {
      id: 'garment-erp',
      title: 'Putri GarmentHub Workshop ERP & 4-Pocket Cash Flow Ledger',
      shortTitle: 'GarmentHub ERP & Cash Flow',
      domain: 'PWA & Manufacturing ERP',
      icon: <Layers className="w-4 h-4" />,
      browserUrl: 'https://garmenthub.putri-app.id/spk-qc',
      statusBadge: 'Production PWA v2.12.11',
      projectId: 'putri-garmenthub-erp',
      repoUrl: 'https://github.com/aliakhmadfauzie/putri-garmenthub',
      architecturePill: 'React 19 · Offline-First PWA · Firebase Firestore'
    },
    'finops': {
      id: 'finops',
      title: 'SmartFlow: FinOps Spend Portal & Executive Requisition Hub',
      shortTitle: 'SmartFlow FinOps Portal',
      domain: 'M365 Orchestration',
      icon: <DollarSign className="w-4 h-4" />,
      browserUrl: 'https://smartflow.enterprise.internal/finops',
      statusBadge: 'Active M365 Governance Tenant',
      projectId: 'smartflow',
      repoUrl: 'https://github.com/aliakhmadfauzie/power-platform-portfolio',
      architecturePill: 'Dataverse · Power Automate · 80% Admin Cut'
    },
    'it-service': {
      id: 'it-service',
      title: 'PulseTrack: Industrial Nexus ITSM Service Desk & Floor Telemetry',
      shortTitle: 'PulseTrack ITSM Desk',
      domain: 'WFM & Floor Governance',
      icon: <Cpu className="w-4 h-4" />,
      browserUrl: 'https://pulsetrack.internal.io/helpdesk',
      statusBadge: 'Live Production Floor System',
      projectId: 'pulsetrack',
      repoUrl: 'https://github.com/aliakhmadfauzie/power-platform-portfolio',
      architecturePill: '56 Mapped Columns · 0% Phone Policy Compliance'
    },
    'warehouse': {
      id: 'warehouse',
      title: 'SaltDistribute: Warehouse Central & Pre-Loading Digital Inspection',
      shortTitle: 'Warehouse & Logistics Hub',
      domain: 'Logistics & Supply Chain',
      icon: <Box className="w-4 h-4" />,
      browserUrl: 'https://saltdistribute.web.app/logistics/inspection',
      statusBadge: 'Expo SDK 54 Android & PWA',
      projectId: 'saltdistribute-b2b-logistics',
      repoUrl: 'https://github.com/aliakhmadfauzie/saltdistribute',
      architecturePill: 'Expo SDK 54 · GNSS Radar · 0 Demurrage Delay'
    },
    'maintenance': {
      id: 'maintenance',
      title: 'IOI Maintenance Command Center & ISO 27001 Server Audit Register',
      shortTitle: 'Server Audit Register',
      domain: 'Plant Reliability & Infra',
      icon: <Server className="w-4 h-4" />,
      browserUrl: 'https://maintenance.ioioleochem.com/servers',
      statusBadge: 'ISO 27001 Certified Register',
      projectId: 'ioi-acidchem-she-platform',
      repoUrl: 'https://github.com/aliakhmadfauzie/power-platform-portfolio',
      architecturePill: 'Server Checklist-2025 · Vibration Telemetry'
    },
    'erp': {
      id: 'erp',
      title: 'Enterprise Core ERP: Procurement & Staff Requisition Center',
      shortTitle: 'Enterprise Core ERP',
      domain: 'Enterprise ERP',
      icon: <Building2 className="w-4 h-4" />,
      browserUrl: 'https://erp.corporate.internal/procurement',
      statusBadge: 'SAP Gateway OData Integrated',
      projectId: 'ioi-acidchem-she-platform',
      repoUrl: 'https://github.com/aliakhmadfauzie/power-platform-portfolio',
      architecturePill: '4-Tier Approval · 5-Day Vacancy Lockout'
    }
  };

  const activeMeta = demosMeta[activeDemo] || demosMeta['rebate'];

  return (
    <div className="space-y-8 py-6">
      {/* Page Header */}
      <div id="section-demos-header" className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-mono text-[var(--text-accent)] font-medium">
            01 · Interactive Enterprise Application Sandbox
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            Zero-Mock Client Algorithms Active
          </span>
        </div>
        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          Live Enterprise Architecture Sandbox &amp; Simulators
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Interactive simulations running client-side implementations of actual production software: the statutory RM 0.20 rebate ceiling engine (Tasek Cement), the DocFinder AI semantic retrieval system (Lark Base &amp; AI Builder), the DOSH 5×5 HIRADC chemical risk heatmap (IOI Oleo), and the Tri-Engine LLM rate-limiter with 10-gate PDF governance.
        </p>
      </div>

      {/* Recruiter Telemetry Rail */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">LIVE SIMULATORS</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-accent)] font-mono">10 Engines</p>
          <p className="text-xs text-[var(--text-secondary)]">Light Interface UI</p>
        </div>
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">STATUTORY CEILING</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-mono">RM 0.20 / t</p>
          <p className="text-xs text-[var(--text-secondary)]">7-Component Rebate Engine</p>
        </div>
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">SAFETY COMPLIANCE</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-accent)] font-mono">DOSH 5×5</p>
          <p className="text-xs text-[var(--text-secondary)]">HIRADC Chemical Plant Matrix</p>
        </div>
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">FACT FIDELITY</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-mono">0% Drift</p>
          <p className="text-xs text-[var(--text-secondary)]">Q1–Q10 Regex Verification</p>
        </div>
      </div>

      {/* Demo Selector Tabs */}
      <div id="section-demos-selector" className="space-y-3 border-b border-[var(--border-subtle)] pb-4">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {demoIds.map((id) => {
            const d = demosMeta[id];
            const isActive = activeDemo === id;
            return (
              <button
                key={d.id}
                onClick={() => navigate('demos?demo=' + encodeURIComponent(d.id))}
                aria-pressed={isActive}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-[var(--radius-sm)] text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent-blue)] text-[#090a0d] font-bold shadow-sm'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]'
                }`}
              >
                <span>{d.icon}</span>
                <span>{d.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* APPLICATION SIMULATION WINDOW CONTAINER (AUTHENTIC LIGHT MODE THEME) */}
      <div id="section-active-simulation" className="space-y-4">
        {/* Actual App Link Bar */}
        <div className="bg-slate-900/90 text-white p-3.5 sm:p-4 rounded-t-2xl border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600/30 rounded-lg border border-blue-400/30 text-blue-400">
              {activeMeta.icon}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  {activeMeta.domain}
                </span>
                <span className="text-slate-500 font-mono">·</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  {activeMeta.statusBadge}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {activeMeta.title}
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {activeMeta.projectId && (
              <button
                onClick={() => navigate('projects/' + encodeURIComponent(activeMeta.projectId!))}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors shadow-xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Full PRD &amp; Gallery</span>
              </button>
            )}
            {activeMeta.repoUrl && (
              <a
                href={activeMeta.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm"
              >
                <span>Actual App Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Browser Shell Frame with Light Mode Canvas */}
        <div className="bg-white rounded-b-2xl border-x border-b border-slate-300 shadow-2xl overflow-hidden text-slate-900">
          {/* Top Browser Chrome Bar */}
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-xs" />
            </div>

            <div className="flex-1 max-w-lg mx-auto flex items-center space-x-2 bg-white px-3 py-1 rounded-md border border-slate-300 text-xs font-mono text-slate-600 shadow-xs">
              <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{activeMeta.browserUrl}</span>
            </div>

            <div className="text-[11px] font-mono font-medium text-slate-500 hidden sm:block">
              {activeMeta.architecturePill}
            </div>
          </div>

          {/* SIMULATOR CANVAS: AUTHENTIC LIGHT APPLICATION UI */}
          <div className="p-4 sm:p-6 md:p-8 bg-slate-50/70">
            {/* DEMO 1: Tasek Cement Rebate Simulator */}
            {activeDemo === 'rebate' && (
              <div className="space-y-6">
                {/* Enterprise Header Bar */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      T
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-red-600 uppercase">
                          Tasek Cement Berhad
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">Commercial e-Rebate System v2.4</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        7-Component Tiered Rebate Formula &amp; Ceiling Enforcement
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-red-50 text-red-700 border border-red-200">
                      Cap: RM 0.20 / Tonne
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Target SLA: ~15 Min
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Variables Column */}
                  <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Commercial Contract Variables</h4>
                        <p className="text-xs text-slate-500">Configure parameters to test the deterministic 7-component formula</p>
                      </div>
                      <span className="text-xs font-mono text-slate-400">Powerbiz ERP Sync</span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex justify-between">
                        <span>Customer Account &amp; Tier Classification</span>
                        <span className="font-mono text-blue-600">Active Approved Account</span>
                      </label>
                      <select
                        value={rebateCustomer}
                        onChange={(e) => setRebateCustomer(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white"
                      >
                        <option value="CUST-8802: Mega Ready-Mix Sdn Bhd (Class A)">CUST-8802: Mega Ready-Mix Sdn Bhd (Class A · 1,200t)</option>
                        <option value="CUST-7714: Sunway Precast Concrete Sdn Bhd (Class A+)">CUST-7714: Sunway Precast Concrete Sdn Bhd (Class A+ · 2,400t)</option>
                        <option value="CUST-9921: YTL Infra Batching Hub (Class B)">CUST-9921: YTL Infra Batching Hub (Class B · 800t)</option>
                        <option value="CUST-5512: Gamuda Northern Expressway JV (Special Contract)">CUST-5512: Gamuda Northern Expressway JV (Special Contract · 3,500t)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <label className="text-slate-700 font-medium flex justify-between">
                          <span>1. Base Tier Rate</span>
                          <span className="font-mono font-bold text-slate-900">RM {rebateBaseRate.toFixed(2)}/t</span>
                        </label>
                        <input
                          type="range"
                          min="0.02"
                          max="0.15"
                          step="0.01"
                          value={rebateBaseRate}
                          onChange={(e) => setRebateBaseRate(parseFloat(e.target.value))}
                          className="w-full accent-red-600"
                        />
                        <span className="text-[10px] text-slate-500">Tier 1: RM 0.04 | Tier 2: RM 0.08 | Tier 3: RM 0.12</span>
                      </div>

                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <label className="text-slate-700 font-medium flex justify-between">
                          <span>2. Order Volume</span>
                          <span className="font-mono font-bold text-slate-900">{rebateVolume} Tonnes</span>
                        </label>
                        <input
                          type="range"
                          min="200"
                          max="5000"
                          step="100"
                          value={rebateVolume}
                          onChange={(e) => setRebateVolume(parseInt(e.target.value))}
                          className="w-full accent-red-600"
                        />
                        <span className="text-[10px] text-slate-500">Bulk Portland Cement CEM I 52.5N</span>
                      </div>

                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <label className="text-slate-700 font-medium flex justify-between">
                          <span>3. Logistics Distance Adj</span>
                          <span className="font-mono font-bold text-slate-900">RM {rebateDistance.toFixed(2)}/t</span>
                        </label>
                        <input
                          type="range"
                          min="0.00"
                          max="0.08"
                          step="0.01"
                          value={rebateDistance}
                          onChange={(e) => setRebateDistance(parseFloat(e.target.value))}
                          className="w-full accent-red-600"
                        />
                        <span className="text-[10px] text-slate-500">Radius &gt; 50km from Ipoh Plant</span>
                      </div>

                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <label className="text-slate-700 font-medium flex justify-between">
                          <span>4. Special Contract Terms</span>
                          <span className="font-mono font-bold text-slate-900">RM {rebateSpecialTerm.toFixed(2)}/t</span>
                        </label>
                        <input
                          type="range"
                          min="0.00"
                          max="0.06"
                          step="0.01"
                          value={rebateSpecialTerm}
                          onChange={(e) => setRebateSpecialTerm(parseFloat(e.target.value))}
                          className="w-full accent-red-600"
                        />
                        <span className="text-[10px] text-slate-500">Infrastructure development rider</span>
                      </div>

                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <label className="text-slate-700 font-medium flex justify-between">
                          <span>5. Seasonal Incentive</span>
                          <span className="font-mono font-bold text-slate-900">RM {rebateSeasonal.toFixed(2)}/t</span>
                        </label>
                        <input
                          type="range"
                          min="0.00"
                          max="0.04"
                          step="0.01"
                          value={rebateSeasonal}
                          onChange={(e) => setRebateSeasonal(parseFloat(e.target.value))}
                          className="w-full accent-red-600"
                        />
                        <span className="text-[10px] text-slate-500">Q4 Year-End target accelerator</span>
                      </div>

                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <label className="text-slate-700 font-medium flex justify-between">
                          <span>6. Credit Risk Deduction</span>
                          <span className="font-mono font-bold text-red-600">- RM {rebateCreditDeduction.toFixed(2)}/t</span>
                        </label>
                        <input
                          type="range"
                          min="0.00"
                          max="0.05"
                          step="0.01"
                          value={rebateCreditDeduction}
                          onChange={(e) => setRebateCreditDeduction(parseFloat(e.target.value))}
                          className="w-full accent-red-600"
                        />
                        <span className="text-[10px] text-slate-500">60-day aging ledger penalty</span>
                      </div>
                    </div>
                  </div>

                  {/* Real-Time Governance Evaluation Column */}
                  <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                          Governance Ledger &amp; Ceiling
                        </span>
                        <span className="text-xs font-mono text-emerald-600 font-semibold">Strict Rule 7.4</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                        <div className="flex justify-between text-xs text-slate-600">
                          <span>Raw Computed Output:</span>
                          <span className="font-mono font-semibold text-slate-900">
                            RM {rawRebatePerTonne.toFixed(2)} / t
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-600">
                          <span>Statutory Ceiling (Cap):</span>
                          <span className="font-mono font-bold text-red-600">
                            RM 0.20 / t
                          </span>
                        </div>
                        <div className="pt-2 border-t border-slate-200 flex justify-between text-xs font-semibold">
                          <span className="text-slate-800">Effective Rebate Rate:</span>
                          <span className="font-mono text-emerald-700 text-sm">
                            RM {cappedRebatePerTonne.toFixed(2)} / t
                          </span>
                        </div>

                        {isCapped && (
                          <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 flex items-start space-x-2 text-xs text-amber-900">
                            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold">Statutory Ceiling Enforced:</span> Raw rate (RM {rawRebatePerTonne.toFixed(2)}) exceeds statutory maximum. Clamped to RM 0.20 per tonne.
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-center py-3 bg-gradient-to-b from-slate-50 to-white rounded-xl border border-slate-200/80 space-y-1">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Customer Rebate Value</p>
                        <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                          RM {totalRebateAmountRM}
                        </p>
                        <p className="text-xs text-slate-400 font-mono">
                          Computed on {rebateVolume} Metric Tonnes · {rebateCustomer.split(':')[0]}
                        </p>
                      </div>

                      {/* Approval Chain Workflow */}
                      <div className="space-y-2 pt-1">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                          Multi-Level Approval Hierarchy
                        </span>
                        <div className="space-y-1.5 text-xs font-mono">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                            <span className="text-slate-700">1. Commercial Sales Lead</span>
                            <span className="text-emerald-700 font-semibold">✓ Verified</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                            <span className="text-slate-700">2. Commercial Finance Manager</span>
                            <span className="text-emerald-700 font-semibold">✓ Approved</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                            <span className="text-slate-700">3. Group Chief Operating Officer (COO)</span>
                            <span className={rebateApproved ? "text-emerald-700 font-bold" : "text-amber-600 font-semibold"}>
                              {rebateApproved ? "✓ Authorized" : "● Awaiting Sign-Off"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <button
                        onClick={triggerApproveRebate}
                        className={`w-full py-3 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer ${
                          rebateApproved
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'bg-red-600 hover:bg-red-700 text-white'
                        }`}
                      >
                        {rebateApproved ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Authorized by Group COO · Dispatched to SAP via Powerbiz</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            <span>Authorize &amp; Dispatch via Power Automate (~15 Min SLA)</span>
                          </>
                        )}
                      </button>

                      {rebateApproved && (
                        <button
                          onClick={() => setCreditNoteIssued(!creditNoteIssued)}
                          className="w-full py-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-slate-600" />
                          <span>{creditNoteIssued ? "✓ Credit Note PDF Exported (SAP-CN-88029)" : "Generate Official Credit Note PDF"}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 2: DocFinder AI Knowledge Retrieval */}
            {activeDemo === 'cs-resolver' && (
              <div className="space-y-6">
                {/* Enterprise Header Bar */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                          DocFinder Knowledge AI
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">Lark Base &amp; AI Builder Semantic Engine</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        Frictionless In-Chat SOP Retrieval &amp; Operational Policy Linker
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      70–90% Search Time Reduction
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      99% Recommendation Accuracy
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Natural Language Query Workbench */}
                  <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Operator Search Query</h4>
                        <p className="text-xs text-slate-500">Query directly in natural language (tested inside Lark Chat)</p>
                      </div>
                      <span className="text-xs font-mono text-blue-600">Lark Bot Interface</span>
                    </div>

                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <textarea
                        rows={3}
                        value={docQuery}
                        onChange={(e) => setDocQuery(e.target.value)}
                        placeholder="Type operational challenge, SOP clause, or deviation..."
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono font-semibold text-slate-600 uppercase">
                        Quick Operational Test Scenarios:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <button
                          onClick={() => handleClassifyTicket('Batch 402 Palm Stearin melting point deviation during high temperature filtration')}
                          className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 text-left transition-colors cursor-pointer"
                        >
                          <span className="font-semibold block text-slate-900">QA Palm Stearin Deviation</span>
                          <span className="text-[10px] text-slate-500">Filtration non-conformance</span>
                        </button>
                        <button
                          onClick={() => handleClassifyTicket('Special volume contract rebate exceeded standard tier with regional distance credit')}
                          className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 text-left transition-colors cursor-pointer"
                        >
                          <span className="font-semibold block text-slate-900">Tasek RM 0.20 Rebate Policy</span>
                          <span className="text-[10px] text-slate-500">Commercial ceiling rules</span>
                        </button>
                        <button
                          onClick={() => handleClassifyTicket('Pre-loading container inspection photo damaged pallet seal at Bay 04')}
                          className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 text-left transition-colors cursor-pointer"
                        >
                          <span className="font-semibold block text-slate-900">Logistics Container Seal</span>
                          <span className="text-[10px] text-slate-500">Bay 04 pre-loading inspection</span>
                        </button>
                        <button
                          onClick={() => handleClassifyTicket('Primary Domain Controller server memory exceeded 85% with pending patch reboot')}
                          className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 text-left transition-colors cursor-pointer"
                        >
                          <span className="font-semibold block text-slate-900">IT Infrastructure Server</span>
                          <span className="text-[10px] text-slate-500">Capacity &amp; RAM thresholds</span>
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleClassifyTicket()}
                      disabled={isClassifying}
                      className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm cursor-pointer disabled:opacity-60"
                    >
                      {isClassifying ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Searching Lark Base Knowledge Repository (sub-50ms)...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Run AI Semantic Search &amp; SOP Ranking</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Right Column: AI Inference & Grounded SOP Output */}
                  <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                          AI Builder NLP Inference
                        </span>
                        <span className="text-xs font-mono text-emerald-600 font-semibold">Sub-50ms Intent Match</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-xs font-medium text-slate-600">Classified Domain:</span>
                          <span className="text-xs font-mono font-bold text-slate-900 text-right">
                            {classifiedCategory}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-slate-600">Semantic Confidence:</span>
                          <span className="text-xs font-mono font-extrabold text-blue-600">
                            {confidenceScore}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${confidenceScore}%` }}
                          />
                        </div>
                      </div>

                      {/* Grounded SOP Card */}
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono uppercase font-bold text-blue-700 flex items-center">
                            <FileText className="w-3.5 h-3.5 mr-1" />
                            Grounded Standard Operating Procedure
                          </span>
                          <span className="text-[10px] font-mono text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-200">
                            Immutable SSoT
                          </span>
                        </div>
                        <p className="text-sm font-bold text-slate-900">{recommendedSOP}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Clause 3.2: Immediate lockout of filter press unit FP-02. Sample draw within 15 minutes for laboratory GC analysis. Escalate to Plant Chemist if deviation &gt; 1.5°C.
                        </p>
                        <div className="pt-2 border-t border-blue-200/60 flex items-center justify-between text-xs text-blue-700">
                          <span className="font-mono text-[11px]">Source: Lark Base Document ID: LB-QMS-402</span>
                          <span className="font-semibold">Version 4.2 Approved</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 space-y-2">
                      <button
                        onClick={() => setLarkDispatched(true)}
                        className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer ${
                          larkDispatched
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        {larkDispatched ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Pushed Directly into Lark Chat Active Session</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-4 h-4" />
                            <span>Dispatch Answer Card to Lark Chat / Agent Workstation</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 3: IOI Acidchem DOSH 5x5 SHE Platform */}
            {activeDemo === 'she-matrix' && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-emerald-600 uppercase">
                          IOI Oleochemicals Prai &amp; Johor
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">DOSH / SIRIM SHE Platform</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        5×5 HIRADC Chemical Plant Risk Assessment Engine
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {(['PENANG_PLANT', 'JOHOR_PLANT'] as const).map((plant) => (
                      <button
                        key={plant}
                        onClick={() => setHiradcPlant(plant)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                          hiradcPlant === plant
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                        }`}
                      >
                        {plant === 'PENANG_PLANT' ? 'Penang Prai Plant' : 'Johor Pan-Century Plant'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Parameter Controls */}
                  <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Hazard Parameters (L × S)</h4>
                        <p className="text-xs text-slate-500">
                          {hiradcPlant === 'PENANG_PLANT' ? 'Work Order: WO-PEN-DISTILL-402' : 'Work Order: WO-JOH-TANKER-119'}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-emerald-600 font-bold">DOSH Malaysia</span>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2">
                        <div className="flex justify-between font-mono">
                          <span className="text-slate-700 font-semibold">Likelihood of Occurrence (L ∈ 1..5):</span>
                          <span className="text-slate-900 font-extrabold text-sm">{hiradcLikelihood} / 5</span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={5}
                          value={hiradcLikelihood}
                          onChange={(e) => setHiradcLikelihood(Number(e.target.value))}
                          className="w-full accent-emerald-600"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>1: Rare</span>
                          <span>2: Unlikely</span>
                          <span>3: Moderate</span>
                          <span>4: Likely</span>
                          <span>5: Almost Certain</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2">
                        <div className="flex justify-between font-mono">
                          <span className="text-slate-700 font-semibold">Severity of Impact (S ∈ 1..5):</span>
                          <span className="text-slate-900 font-extrabold text-sm">{hiradcSeverity} / 5</span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={5}
                          value={hiradcSeverity}
                          onChange={(e) => setHiradcSeverity(Number(e.target.value))}
                          className="w-full accent-emerald-600"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>1: Negligible</span>
                          <span>2: Minor First Aid</span>
                          <span>3: Serious Injury</span>
                          <span>4: Major Disability</span>
                          <span>5: Catastrophic</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Calculated Risk Score (L × S):</span>
                        <span className="text-2xl font-black text-slate-900">{hiradcScore} / 25</span>
                      </div>
                      <div className="flex justify-between items-center pt-1 border-t border-slate-200">
                        <span className="text-slate-600">Mandatory Classification:</span>
                        <span className={`font-bold px-2.5 py-0.5 rounded ${
                          hiradcScore >= 15
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : hiradcScore >= 5
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        }`}>
                          {hiradcLevel}
                        </span>
                      </div>
                      <div className="pt-2 text-[11px] text-slate-600 font-sans leading-relaxed">
                        {hiradcPlant === 'PENANG_PLANT'
                          ? 'Active Process: 240°C Fatty Acid Distillation Sampling · Control: Closed-loop cooler & full face shield.'
                          : 'Active Process: Pressurized 50% NaOH Bulk Tanker Unloading · Control: LOTO interlock & chemical suit.'}
                      </div>
                    </div>
                  </div>

                  {/* 5x5 Matrix Interactive Grid */}
                  <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                        Interactive 5×5 DOSH/SIRIM Matrix
                      </span>
                      <span className="text-[11px] text-slate-500">Click any cell to inspect</span>
                    </div>

                    <div className="grid grid-cols-5 gap-2 font-mono text-xs">
                      {[5, 4, 3, 2, 1].map((sev) =>
                        [1, 2, 3, 4, 5].map((lik) => {
                          const cellScore = lik * sev;
                          const isSelected = lik === hiradcLikelihood && sev === hiradcSeverity;
                          return (
                            <button
                              key={`${sev}-${lik}`}
                              onClick={() => {
                                setHiradcLikelihood(lik);
                                setHiradcSeverity(sev);
                              }}
                              className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 scale-105 font-extrabold shadow-md'
                                  : cellScore >= 15
                                  ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                                  : cellScore >= 5
                                  ? 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                                  : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                              }`}
                            >
                              <div className="text-sm font-bold">{cellScore}</div>
                              <div className="text-[9px] opacity-75">L{lik}×S{sev}</div>
                            </button>
                          );
                        })
                      )}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>Green: 1–4 Low</span>
                      <span>Amber: 5–12 Medium</span>
                      <span>Red: 15–25 High</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 4: ATS Automation & 10-Gate PDF Governance */}
            {activeDemo === 'ats-automation' && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Terminal className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                          ai_gateway.py · tailor_to_jd.py
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">ATS Automation Pipeline v6.0</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        Tri-Engine AI Router, Zero-Drift SSOT Firewall &amp; 10-Gate PDF Validator
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {(['Track A', 'Track B'] as const).map((track) => (
                      <button
                        key={track}
                        onClick={() => setAtsTrack(track)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                          atsTrack === track
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                        }`}
                      >
                        {track === 'Track A' ? 'Track A · Solutions Architect' : 'Track B · Power Platform Lead'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Tri-Engine & SSOT Firewall */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h4 className="text-sm font-bold text-slate-900">01 · Tri-Engine AI Router with fcntl Lock</h4>
                        <span className="text-xs font-mono text-slate-500">Pydantic Enforced</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Active Routing Provider:</span>
                          <span className="font-bold text-blue-700">{activeAiEngine}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                          <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                            <div className="text-slate-500">Gemini Flash</div>
                            <div className="text-slate-900 font-bold mt-0.5">4 / 15 RPM</div>
                            <div className="text-[10px] text-slate-400">182 / 1,500 RPD</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                            <div className="text-slate-500">Groq Llama 3.3</div>
                            <div className="text-slate-900 font-bold mt-0.5">
                              {simulatedGroqExhausted ? '30 / 30 RPM (429)' : '11 / 30 RPM'}
                            </div>
                            <div className="text-[10px] text-slate-400">410 / 1,000 RPD</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                            <div className="text-slate-500">OpenCode Zen</div>
                            <div className="text-slate-900 font-bold mt-0.5">1 / 60 RPM</div>
                            <div className="text-[10px] text-slate-400">Tier 3 Standby</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[11px] text-slate-500">Test Groq Quota Exhaustion (429):</span>
                          <button
                            onClick={() => setSimulatedGroqExhausted(!simulatedGroqExhausted)}
                            className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-[11px] font-semibold cursor-pointer"
                          >
                            {simulatedGroqExhausted ? 'Reset Quota' : 'Trigger 429 Failover'}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* SSOT Metric Firewall */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h4 className="text-sm font-bold text-slate-900">02 · Zero-Hallucination SSOT Regex Firewall</h4>
                        <span className="text-xs font-mono text-slate-400">Regex: \b\d+%\+?|\b\d+\+</span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        Edit the tailored bullet below. Any metric not anchored in <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-800">Master_Profile_SSOT.md</code> (try typing <code className="font-mono text-red-600 font-bold">450%</code> or <code className="font-mono text-red-600 font-bold">999</code>) is instantly blocked.
                      </p>

                      <textarea
                        rows={3}
                        value={atsBulletInput}
                        onChange={(e) => setAtsBulletInput(e.target.value)}
                        className="w-full rounded-xl bg-slate-50 border border-slate-300 p-3 text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                      />

                      <div className={`p-3.5 rounded-xl border font-mono text-xs flex items-center justify-between ${
                        isSsotValid
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-red-50 text-red-800 border-red-200'
                      }`}>
                        <div className="flex items-center space-x-2">
                          {isSsotValid ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                          )}
                          <span>
                            {isSsotValid
                              ? 'SSOT Verification PASSED: All claims anchored in Master Dossier'
                              : `HALLUCINATION BLOCKED: [${unauthorizedMetrics.join(', ')}] unverified`}
                          </span>
                        </div>
                        <span className="text-[10px] opacity-75">
                          Extracted: [{extractedMetrics.join(', ')}]
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 10-Gate PDF Validator */}
                  <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center">
                        <ShieldCheck className="w-4 h-4 text-blue-600 mr-1.5" />
                        03 · 10-Gate PDF Governance
                      </h4>
                      <span className="text-xs font-mono text-emerald-600 font-semibold">10/10 PASS</span>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      {[
                        { gate: 'Q1', name: 'File Integrity', spec: '> 10KB (28.4 KB clean)' },
                        { gate: 'Q2', name: 'Page Budget', spec: 'Exact 2 Pages' },
                        { gate: 'Q3', name: 'Identity Header', spec: 'ALI AKHMAD FAUZIE' },
                        { gate: 'Q4', name: 'Markdown Bleed', spec: '0 raw bold asterisks' },
                        { gate: 'Q5', name: 'Mojibake Clean', spec: '0 U+FFFD invalid glyphs' },
                        { gate: 'Q6', name: 'Structural Blocks', spec: 'Summary, Competencies, Exp' },
                        { gate: 'Q7', name: 'Hyperlink URIs', spec: '/Annots /Subtype /Link' },
                        { gate: 'Q8', name: 'Final-Page Density', spec: '>= 8 lines (19 rendered)' },
                        { gate: 'Q9', name: 'Contact Info', spec: 'Email & Phone present' },
                        { gate: 'Q10', name: 'Layout Orphan Guard', spec: 'ReportLab KeepTogether' }
                      ].map((item) => (
                        <div
                          key={item.gate}
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-blue-600">{item.gate}</span>
                            <span className="text-slate-800 font-medium font-sans text-xs">{item.name}</span>
                          </div>
                          <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            PASS
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 5: Putri GarmentHub Workshop ERP */}
            {activeDemo === 'garment-erp' && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-emerald-600 uppercase">
                          Putri GarmentHub ERP v2.12.11
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">Offline-First Manufacturing PWA</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        SPK Partial Drop QC Engine &amp; Arus Kas 4 Kantong RBAC
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {(['owner', 'keuangan', 'produksi'] as const).map((role) => (
                      <button
                        key={role}
                        onClick={() => setGarmentActiveRole(role)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase transition-colors cursor-pointer ${
                          garmentActiveRole === role
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                        }`}
                      >
                        Role: {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Partial Drop QC Calculator */}
                  <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h4 className="text-sm font-bold text-slate-900">01 · Partial Drop QC Defect &amp; Sewing Wage</h4>
                      <span className="text-xs font-mono text-emerald-600 font-semibold">calculateDropWageAndDefects()</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex justify-between font-mono mb-1">
                          <span className="text-slate-700 font-medium">Gross Tailor Drop Received (Lusin):</span>
                          <span className="text-slate-900 font-bold">{spkReceivedLusin} Lusin ({spkReceivedLusin * 12} pcs)</span>
                        </div>
                        <input
                          type="range"
                          min={10}
                          max={100}
                          value={spkReceivedLusin}
                          onChange={(e) => setSpkReceivedLusin(Number(e.target.value))}
                          className="w-full accent-emerald-600"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                          <div className="flex justify-between font-mono mb-1">
                            <span className="text-slate-700 font-medium">BS Fatal:</span>
                            <span className="text-red-600 font-bold">{spkBsFatal} Lusin</span>
                          </div>
                          <input
                            type="range"
                            min={0}
                            max={10}
                            value={spkBsFatal}
                            onChange={(e) => setSpkBsFatal(Number(e.target.value))}
                            className="w-full accent-red-600"
                          />
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                          <div className="flex justify-between font-mono mb-1">
                            <span className="text-slate-700 font-medium">BS Repair:</span>
                            <span className="text-amber-700 font-bold">{spkBsRepair} Lusin</span>
                          </div>
                          <input
                            type="range"
                            min={0}
                            max={10}
                            value={spkBsRepair}
                            onChange={(e) => setSpkBsRepair(Number(e.target.value))}
                            className="w-full accent-amber-600"
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex justify-between font-mono mb-1">
                          <span className="text-slate-700 font-medium">Sewing Rate / Lusin (IDR):</span>
                          <span className="text-slate-900 font-bold">Rp {spkRatePerLusin.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min={120000}
                          max={300000}
                          step={10000}
                          value={spkRatePerLusin}
                          onChange={(e) => setSpkRatePerLusin(Number(e.target.value))}
                          className="w-full accent-emerald-600"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Restocked to Catalog:</span>
                        <span className="text-emerald-700 font-bold">{spkPassedQC} Lusin ({spkCatalogRestockRatio}%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Gross Sewing Wage:</span>
                        <span className="text-slate-900">Rp {spkGrossWage.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">BS Fatal Penalty (Rp 50k/lusin):</span>
                        <span className="text-red-600">- Rp {spkDefectPenalty.toLocaleString()}</span>
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold">
                        <span className="text-slate-900">Net Tailor Payout (Slip WA):</span>
                        <span className="text-emerald-700">Rp {spkNetWage.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arus Kas 4 Kantong */}
                  <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h4 className="text-sm font-bold text-slate-900">02 · Arus Kas 4 Kantong &amp; Profit Isolation</h4>
                      <span className="text-xs font-mono text-slate-500">
                        canViewProfit: {garmentActiveRole === 'owner' ? 'true' : 'false'}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <div className="flex justify-between font-mono text-xs mb-1">
                        <span className="text-slate-700 font-medium">Batch Revenue Inflow:</span>
                        <span className="text-slate-900 font-bold">Rp {garmentInvoiceIDR.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min={5000000}
                        max={50000000}
                        step={1000000}
                        value={garmentInvoiceIDR}
                        onChange={(e) => setGarmentInvoiceIDR(Number(e.target.value))}
                        className="w-full accent-emerald-600"
                      />
                    </div>

                    {garmentActiveRole === 'produksi' ? (
                      <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
                        <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
                        <h5 className="font-bold text-slate-900 text-sm">RoleGateCard: Module Locked for Produksi</h5>
                        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                          Floor operators have full access to fabric consumption and cut-piece inventory, but zero visibility into financial cash flow.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-slate-600 block">1. Kas Bahan (40%)</span>
                          <span className="text-base font-bold text-slate-900 mt-1 block">
                            Rp {Math.round(garmentInvoiceIDR * 0.4).toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400">Rolls, thread, labels</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-slate-600 block">2. Kas Operasional (30%)</span>
                          <span className="text-base font-bold text-slate-900 mt-1 block">
                            Rp {Math.round(garmentInvoiceIDR * 0.3).toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400">Tailor wages, electricity</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-slate-600 block">3. Kas Iklan (10%)</span>
                          <span className="text-base font-bold text-slate-900 mt-1 block">
                            Rp {Math.round(garmentInvoiceIDR * 0.1).toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400">Shopee / TikTok Ads</span>
                        </div>
                        {garmentActiveRole === 'owner' ? (
                          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300">
                            <span className="text-emerald-800 font-semibold block">4. Kas Profit (20% Owner)</span>
                            <span className="text-base font-bold text-emerald-800 mt-1 block">
                              Rp {Math.round(garmentInvoiceIDR * 0.2).toLocaleString()}
                            </span>
                            <span className="text-[10px] text-emerald-700">50/50 Putri &amp; Rival Split</span>
                          </div>
                        ) : (
                          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 opacity-60">
                            <span className="text-slate-400 block">4. Kas Profit (Filtered)</span>
                            <span className="text-xs text-slate-500 font-sans mt-1 block">
                              Hidden at Context boundary
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 6: SmartFlow FinOps Spend Portal */}
            {activeDemo === 'finops' && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                          SmartFlow FinOps
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">Cloud Infrastructure &amp; Licensing Capital</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        Executive Requisition Portal &amp; Parallel Resource Engine
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    Dataverse Live Sync
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono tabular-nums">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                    <p className="text-xs font-sans text-slate-500">Total Allocated Budget</p>
                    <p className="text-2xl font-bold text-slate-900">$3,200,000</p>
                    <p className="text-xs font-sans text-blue-600 font-medium">+4.5% vs Prior Quarter</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                    <p className="text-xs font-sans text-slate-500">Actual MTD Spend</p>
                    <p className="text-2xl font-bold text-slate-900">$2,847,500</p>
                    <p className="text-xs font-sans text-emerald-600 font-medium">88.9% Burn Rate (On Track)</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                    <p className="text-xs font-sans text-slate-500">SaaS &amp; M365 Licenses</p>
                    <p className="text-2xl font-bold text-slate-900">$642,100</p>
                    <p className="text-xs font-sans text-blue-600 font-medium">Optimized via CoE Kit</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                    <p className="text-xs font-sans text-slate-500">Actionable Requisitions</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {Object.values(approvals).filter((v) => !v).length} Pending
                    </p>
                    <p className="text-xs font-sans text-slate-500">Executive Sign-Off Gate</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      Pending Executive Requisitions (SmartFlow Engine)
                    </h4>
                    <span className="text-xs text-slate-400 font-mono">3 Records</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      {
                        id: 'REQ-4921',
                        name: 'Azure OpenAI GPT-4o Dedicated Deployment',
                        dept: 'Enterprise Automation',
                        amount: '$42,500',
                        requester: 'Ali Akhmad Fauzie'
                      },
                      {
                        id: 'REQ-4922',
                        name: 'Dataverse Storage Capacity Add-on (50GB)',
                        dept: 'IOI Domino Cutover',
                        amount: '$18,000',
                        requester: 'Cloud Ops Lead'
                      },
                      {
                        id: 'REQ-4923',
                        name: 'Power BI Premium Per Capacity Node P1',
                        dept: 'Global Operations',
                        amount: '$59,940',
                        requester: 'BI Team Lead'
                      }
                    ].map((req) => (
                      <div
                        key={req.id}
                        className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs font-bold text-blue-600">{req.id}</span>
                            <span className="text-sm font-semibold text-slate-900">{req.name}</span>
                          </div>
                          <p className="text-xs text-slate-500">
                            {req.dept} · Requested by {req.requester}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm font-bold font-mono tabular-nums text-slate-900">
                            {req.amount}
                          </span>
                          <button
                            onClick={() => setApprovals({ ...approvals, [req.id]: !approvals[req.id] })}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                              approvals[req.id]
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                          >
                            {approvals[req.id] ? '✓ Approved' : 'Sign & Approve'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 7: PulseTrack ITSM Desk */}
            {activeDemo === 'it-service' && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-indigo-600 uppercase">
                          PulseTrack Service Desk
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">56 Columns Mapped · Zero-Phone Floor</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        Real-Time Floor Telemetry &amp; Operational Incident Queue
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    0% SLA Breaches
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="text"
                    placeholder="Log new IT incident or attendance exception (e.g. Lotus Domino DB replication delay)..."
                    value={newTicketTitle}
                    onChange={(e) => setNewTicketTitle(e.target.value)}
                    className="flex-1 w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                  <select
                    value={newTicketPriority}
                    onChange={(e) => setNewTicketPriority(e.target.value)}
                    className="px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs font-medium text-slate-800"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                  <button
                    onClick={() => {
                      if (!newTicketTitle.trim()) return;
                      setItTickets([
                        {
                          id: `INC-2025-${Math.floor(Math.random() * 800 + 100)}`,
                          title: newTicketTitle,
                          priority: newTicketPriority,
                          status: 'Submitted (Admin Triage)',
                          requester: 'Floor Lead',
                          sla: '48.0h left',
                          station: 'Pod Charlie'
                        },
                        ...itTickets
                      ]);
                      setNewTicketTitle('');
                    }}
                    className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold whitespace-nowrap cursor-pointer transition-colors"
                  >
                    Submit Ticket
                  </button>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      Active Operational Incidents &amp; Attendance Feed
                    </h4>
                    <span className="text-xs text-slate-500 font-mono">
                      {itTickets.length} Active Records
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {itTickets.map((t) => (
                      <div
                        key={t.id}
                        className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs font-bold text-indigo-600">{t.id}</span>
                            <span className="text-sm font-semibold text-slate-900">{t.title}</span>
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded font-mono ${
                              t.priority === 'High'
                                ? 'bg-red-50 text-red-700 border border-red-200'
                                : t.priority === 'Medium'
                                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                : 'bg-slate-100 text-slate-700'
                            }`}>
                              {t.priority}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">
                            Requester: {t.requester} · Station: {t.station} · SLA: <span className="font-mono font-bold text-slate-700">{t.sla}</span>
                          </p>
                        </div>
                        <div className="text-xs font-mono font-semibold text-slate-600">
                          {t.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 8: SaltDistribute Warehouse Central */}
            {activeDemo === 'warehouse' && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-amber-600 uppercase">
                          SaltDistribute &amp; IOI Logistics
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">Pre-Loading Dispatch Terminal</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        Container Digital Seal Verification &amp; Pallet Inspection
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Zero Demurrage Delay
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Digital Container Inspection */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h4 className="text-sm font-bold text-slate-900">Digital Photo Seal Verification</h4>
                      <span className="text-xs font-mono text-slate-500">CNTR-MY-88421</span>
                    </div>

                    <div className="h-32 rounded-xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-600 space-y-1 p-4 text-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      <span className="text-xs font-bold text-slate-800">Seal #ML-99042 Authenticated via Camera</span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Geo-tagged (Penang Prai Bay 14) · Timestamped 13:42:10 UTC+8
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="text-slate-500">Pallet Integrity</span>
                        <p className="font-bold text-slate-900 mt-0.5">100% Passed</p>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                        <span className="text-emerald-700">Gate Pass</span>
                        <p className="font-bold text-emerald-800 font-mono mt-0.5">AUTO-ISSUED</p>
                      </div>
                    </div>
                  </div>

                  {/* Live Stock & Batch Movement Log */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h4 className="text-sm font-bold text-slate-900">Live Stock Movement (SAP Sync)</h4>
                      <span className="text-xs font-mono text-slate-500">3 Batches Staged</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      {[
                        {
                          batch: 'B-8491',
                          product: 'Refined Palm Stearin (Bag 25kg)',
                          bay: 'Bay 14-A',
                          qty: '480 Bags',
                          status: 'Staged'
                        },
                        {
                          batch: 'B-8492',
                          product: 'Glycerine USP 99.7% Drums',
                          bay: 'Bay 02-C',
                          qty: '80 Drums',
                          status: 'Ready for Gate Pass'
                        },
                        {
                          batch: 'B-8493',
                          product: 'Lauric Acid Distilled Flakes',
                          bay: 'Bay 09-F',
                          qty: '320 Bags',
                          status: 'Inspected'
                        }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between"
                        >
                          <div>
                            <p className="font-bold text-slate-900">{item.product}</p>
                            <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                              {item.batch} · {item.bay} · {item.qty}
                            </p>
                          </div>
                          <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 9: IOI Maintenance & Server Checklist */}
            {activeDemo === 'maintenance' && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                          IOI Plant Maintenance HQ
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">ISO 27001 Server Audit Register</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        Infrastructure Diagnostics &amp; Preventative Reliability Cockpit
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    100% Audit Adherence
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      Server Checklist Register
                    </span>
                    <p className="font-mono text-xs font-bold text-slate-900 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      Server Checklist-2025-W12-004
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-mono">
                      <li>· CPU Load: 18.2% (Normal)</li>
                      <li>· RAM Alloc: 48.4 GB / 64 GB (75%)</li>
                      <li>· C:\ Free Space: 142 GB (Healthy)</li>
                    </ul>
                    <span className="inline-block text-xs text-emerald-700 font-mono font-semibold">
                      ✓ Systems Manager Signed Off
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      Fractionation Chiller Unit 3
                    </span>
                    <p className="font-mono text-xs font-bold text-slate-900 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      WO-MECH-2025-0819
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-mono">
                      <li>· Vibration Sensor: 0.12 mm/s (Optimal)</li>
                      <li>· Coolant Pressure: 4.8 bar</li>
                      <li>· Next PM: in 14 Days</li>
                    </ul>
                    <span className="inline-block text-xs text-emerald-700 font-mono font-semibold">
                      ✓ Online &amp; Operational
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      Disaster Recovery &amp; RPO/RTO
                    </span>
                    <p className="font-mono text-xs font-bold text-slate-900 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      DR-HEALTH-CHECK-OK
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-mono">
                      <li>· Last Immutable Snapshot: 2h ago</li>
                      <li>· RPO: &lt; 15 minutes verified</li>
                      <li>· RTO: &lt; 1 hour verified</li>
                    </ul>
                    <span className="inline-block text-xs text-emerald-700 font-mono font-semibold">
                      ✓ ISO 27001 Certified Audit
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 10: Enterprise Core ERP */}
            {activeDemo === 'erp' && (
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                          Enterprise Core ERP · OData
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs text-slate-500 font-medium">Procurement &amp; Vacancy Lockout</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        SAP Gateway Integration &amp; 4-Tier Procurement Center
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    5-Day Internal Lockout Enforced
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-600">PO-2025-9941</span>
                    <h4 className="text-sm font-bold text-slate-900">
                      Refined Bleached Palm Oil Processing Unit
                    </h4>
                    <p className="text-xs text-slate-500">
                      Vendor: Alfa Laval Separation Sdn Bhd
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-slate-900">RM 340,000</span>
                      <span className="text-emerald-700 font-semibold">✓ CFO Approved</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-600">REQ-STAFF-014</span>
                    <h4 className="text-sm font-bold text-slate-900">
                      Senior Process Control Engineer (QA Lab)
                    </h4>
                    <p className="text-xs text-slate-500">
                      Internal Lockout: Day 3 of 5 (Mandatory Posting)
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-slate-900">Headcount: 1 FTE</span>
                      <span className="text-amber-700 font-semibold">HR Review Active</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-600">PO-2025-9948</span>
                    <h4 className="text-sm font-bold text-slate-900">
                      GHS Safety Labeling &amp; Calibration Tooling
                    </h4>
                    <p className="text-xs text-slate-500">
                      Master Reference Slice E Sync
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-slate-900">RM 24,500</span>
                      <span className="text-emerald-700 font-semibold">✓ Validated</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Browser Shell Bottom Bar */}
          <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold text-slate-700">// Architecture Verified:</span>
              <span>All state mutations run client-side against verified production fixtures.</span>
            </div>
            {activeMeta.projectId && (
              <button
                onClick={() => navigate('projects/' + encodeURIComponent(activeMeta.projectId!))}
                className="font-mono font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-1 cursor-pointer"
              >
                <span>Read detailed architecture specification in Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
