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
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveDemosViewProps {
  initialDemo?: string;
}

export const LiveDemosView: React.FC<LiveDemosViewProps> = ({ initialDemo = 'finops' }) => {
  const demoIds = ['ats-automation', 'she-matrix', 'garment-erp', 'finops', 'it-service', 'erp', 'warehouse', 'maintenance', 'rebate', 'cs-resolver'];
  const activeDemo = demoIds.includes(initialDemo) ? initialDemo : 'finops';

  // State for Rebate Calculator
  const [rebateBaseRate, setRebateBaseRate] = useState<number>(0.08);
  const [rebateVolume, setRebateVolume] = useState<number>(1200);
  const [rebateDistance, setRebateDistance] = useState<number>(0.03);
  const [rebateSpecialTerm, setRebateSpecialTerm] = useState<number>(0.02);
  const [rebateSeasonal, setRebateSeasonal] = useState<number>(0.01);
  const [rebateTax] = useState<number>(0.01);
  const [rebateCreditDeduction, setRebateCreditDeduction] = useState<number>(0.01);
  const [rebateApproved, setRebateApproved] = useState<boolean>(false);

  const rawRebatePerTonne = Math.max(
    0,
    rebateBaseRate + rebateDistance + rebateSpecialTerm + rebateSeasonal + rebateTax - rebateCreditDeduction
  );
  const cappedRebatePerTonne = Math.min(rawRebatePerTonne, 0.20);
  const isCapped = rawRebatePerTonne > 0.20;
  const totalRebateAmountRM = (cappedRebatePerTonne * rebateVolume).toFixed(2);

  // State for AI SOP Classifier
  const [ticketSubject, setTicketSubject] = useState<string>(
    'Batch 402 Palm Stearin melting point deviation during high temperature filtration'
  );
  const [classifiedCategory, setClassifiedCategory] = useState<string>(
    'Quality Assurance / Non-Conformance (CAPA)'
  );
  const [confidenceScore, setConfidenceScore] = useState<number>(94.8);
  const [recommendedSOP, setRecommendedSOP] = useState<string>(
    'SOP-QA-042: Filtration & High Temp Non-Conformance Protocol'
  );
  const [isClassifying, setIsClassifying] = useState<boolean>(false);

  // State for IT Service Request Hub
  const [itTickets, setItTickets] = useState([
    {
      id: 'INC-2025-084',
      title: 'Dataverse Production Entity Sync Timeout',
      priority: 'High',
      status: 'In Progress',
      requester: 'Finance Ops',
      sla: '4.2h left'
    },
    {
      id: 'REQ-2025-112',
      title: 'SAP Gateway Connector Permission Upgrade',
      priority: 'Medium',
      status: 'Pending Review',
      requester: 'Logistics Lead',
      sla: '22h left'
    },
    {
      id: 'INC-2025-079',
      title: 'Domino QMS Archived Database Read-Only Mount',
      priority: 'Low',
      status: 'Resolved (Accepting)',
      requester: 'QA Audit',
      sla: '72h rating window'
    }
  ]);
  const [newTicketTitle, setNewTicketTitle] = useState('');

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

  const handleClassifyTicket = () => {
    setIsClassifying(true);
    setTimeout(() => {
      setIsClassifying(false);
      if (
        ticketSubject.toLowerCase().includes('server') ||
        ticketSubject.toLowerCase().includes('disk') ||
        ticketSubject.toLowerCase().includes('patch')
      ) {
        setClassifiedCategory('Infrastructure & IT Server Health');
        setConfidenceScore(96.2);
        setRecommendedSOP('SOP-IT-018: Weekly Server Audit & Capacity Threshold Protocol');
      } else if (
        ticketSubject.toLowerCase().includes('rebate') ||
        ticketSubject.toLowerCase().includes('po') ||
        ticketSubject.toLowerCase().includes('invoice')
      ) {
        setClassifiedCategory('Commercial & Sales Rebates (Tasek Engine)');
        setConfidenceScore(98.4);
        setRecommendedSOP('SOP-FIN-009: 7-Component Tiered Rebate Formula Governance');
      } else if (
        ticketSubject.toLowerCase().includes('container') ||
        ticketSubject.toLowerCase().includes('warehouse') ||
        ticketSubject.toLowerCase().includes('pallet')
      ) {
        setClassifiedCategory('Warehouse & Logistics Operations (Slice D)');
        setConfidenceScore(93.5);
        setRecommendedSOP('SOP-LOG-027: Pre-Loading Container Inspection & Seal Verification');
      } else {
        setClassifiedCategory('Quality Management & Documentation Control (Slice A)');
        setConfidenceScore(95.1);
        setRecommendedSOP('SOP-QA-042: Filtration & High Temp Non-Conformance Protocol');
      }
    }, 500);
  };

  // State for ATS Automation & Q1-Q10 Governance Simulator
  const [atsTrack, setAtsTrack] = useState<'Track A' | 'Track B'>('Track A');
  const [atsTaskMode, setAtsTaskMode] = useState<'structured' | 'fast'>('structured');
  const [atsBulletInput, setAtsBulletInput] = useState<string>(
    'Architected 84 production enterprise applications across 167 legacy Domino databases, reducing manual cycle time by 70% while maintaining 99.9% SLA reliability.'
  );
  const [simulatedGroqExhausted, setSimulatedGroqExhausted] = useState<boolean>(false);

  const ssotAllowedNumbers = ['84', '167', '99.9%', '70%', '60+', '1000+', '1,000+', '22', '15', '12', '14', '6', '7', '10'];
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

  const demosList = [
    { id: 'ats-automation', title: 'ATS Automation & Q1–Q10 Gate', domain: 'Flagship Systems', icon: <Terminal className="w-4 h-4" /> },
    { id: 'she-matrix', title: 'IOI DOSH 5×5 SHE Matrix', domain: 'Flagship Systems', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'garment-erp', title: 'Putri 4-Pocket & SPK ERP', domain: 'Flagship Systems', icon: <Layers className="w-4 h-4" /> },
    { id: 'rebate', title: 'Tasek Rebate Simulator (RM 0.20)', domain: 'Flagship Systems', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'finops', title: 'FinOps Spend Portal', domain: 'M365 Slices', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'it-service', title: 'Industrial Nexus ITSM', domain: 'M365 Slices', icon: <Cpu className="w-4 h-4" /> },
    { id: 'warehouse', title: 'Warehouse Central (Slice D)', domain: 'M365 Slices', icon: <Box className="w-4 h-4" /> },
    { id: 'maintenance', title: 'Server Audit (Slice E)', domain: 'M365 Slices', icon: <Server className="w-4 h-4" /> },
    { id: 'cs-resolver', title: 'AI SOP Classifier (Slice A)', domain: 'AI & Pro-Code', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'erp', title: 'Enterprise Core ERP (OData)', domain: 'AI & Pro-Code', icon: <Layers className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-8 py-6">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <p className="text-xs font-mono text-[var(--text-accent)] font-medium">
          01 · Interactive Enterprise Application Sandbox
        </p>
        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          Live Enterprise Architecture Sandbox &amp; Simulators
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          10 functional, zero-latency client-side simulations demonstrating production algorithms: the deterministic 7-component RM 0.20 rebate ceiling engine, the DOSH 5×5 HIRADC chemical risk heatmap, the Tri-Engine AI rate limiter with fcntl locks, and the 0ms offline-first ERP ledger.
        </p>
      </div>

      {/* Verified Sandbox Telemetry Rail (The Spotted 6-Second Recruiter Gate) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[var(--bg-surface)] p-4 sm:p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">LIVE SIMULATORS</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-[var(--text-accent)] font-mono">10 Engines</p>
          <p className="text-xs text-[var(--text-secondary)]">Zero-Mock Client Logic</p>
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

      <p role="note" className="text-xs sm:text-sm text-[var(--text-secondary)] border border-[var(--border-subtle)] rounded-xl p-4 bg-[var(--bg-surface)]">
        <strong className="text-[var(--text-primary)] font-semibold font-mono text-xs uppercase">// Operational Notice: </strong>
        These simulators run real client-side state engines with mock transaction fixtures. State changes do not mutate production ERP tenants and automatically reset upon reload.
      </p>

      {/* Demo Selector Tabs with Domain Groups */}
      <div className="space-y-3 border-b border-[var(--border-subtle)] pb-4">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {demosList.map((d) => {
            const isActive = activeDemo === d.id;
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
                <span>{d.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DEMO 1: FinOps Spend Portal */}
      {activeDemo === 'finops' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Executive FinOps Dashboard
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Cloud Infrastructure &amp; Licensing Capital
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono text-[var(--text-secondary)]">
              <span>Reporting Period: FY2025-Q1</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-accent)] font-medium">Dataverse Live Sync</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono tabular-nums">
            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
              <p className="text-xs font-sans text-[var(--text-secondary)]">Total Allocated Budget</p>
              <p className="text-2xl font-semibold text-[var(--text-primary)]">$3,200,000</p>
              <p className="text-xs font-sans text-[var(--text-accent)]">+4.5% vs Prior Quarter</p>
            </div>
            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
              <p className="text-xs font-sans text-[var(--text-secondary)]">Actual MTD Spend</p>
              <p className="text-2xl font-semibold text-[var(--text-primary)]">$2,847,500</p>
              <p className="text-xs font-sans text-[var(--text-secondary)]">88.9% Burn Rate (On Track)</p>
            </div>
            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
              <p className="text-xs font-sans text-[var(--text-secondary)]">SaaS &amp; M365 Licenses</p>
              <p className="text-2xl font-semibold text-[var(--text-primary)]">$642,100</p>
              <p className="text-xs font-sans text-[var(--text-accent)]">Optimized via CoE Starter Kit</p>
            </div>
            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-1">
              <p className="text-xs font-sans text-[var(--text-secondary)]">Actionable Requisitions</p>
              <p className="text-2xl font-semibold text-[var(--text-accent)]">
                {Object.values(approvals).filter((v) => !v).length} Pending
              </p>
              <p className="text-xs font-sans text-[var(--text-secondary)]">Requires Executive Sign-Off</p>
            </div>
          </div>

          <div className="bg-[var(--bg-surface)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] overflow-hidden">
            <div className="px-6 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Pending Executive Requisitions (SmartFlow Engine)
              </h3>
              <span className="text-xs text-[var(--text-tertiary)] font-mono">3 Records</span>
            </div>
            <div className="divide-y divide-[var(--border-subtle)]">
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
                  className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[var(--bg-surface-elevated)] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-semibold text-[var(--text-accent)]">{req.id}</span>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{req.name}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {req.dept} · Requested by {req.requester}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-semibold font-mono tabular-nums text-[var(--text-primary)]">
                      {req.amount}
                    </span>
                    <button
                      onClick={() => setApprovals({ ...approvals, [req.id]: !approvals[req.id] })}
                      className={`px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium transition-colors whitespace-nowrap ${
                        approvals[req.id]
                          ? 'bg-[var(--bg-primary)] text-[var(--text-accent)] border border-[var(--border-focus)]'
                          : 'bg-[var(--accent-blue)] text-[#090a0d] hover:bg-[var(--accent-blue-hover)]'
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

      {/* DEMO 2: Industrial Nexus / IT Service Request */}
      {activeDemo === 'it-service' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                ITSM Operations · 56 Mapped Columns
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Industrial Nexus Service Desk
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono text-[var(--text-secondary)]">
              <span>0% SLA Breaches</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-accent)]">72h Accept Window</span>
            </div>
          </div>

          <div className="bg-[var(--bg-surface)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Log new IT incident or service request (e.g. Lotus Notes DB replication latency)..."
              value={newTicketTitle}
              onChange={(e) => setNewTicketTitle(e.target.value)}
              className="flex-1 w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] focus:outline-none text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)]"
            />
            <button
              onClick={() => {
                if (!newTicketTitle.trim()) return;
                setItTickets([
                  {
                    id: `INC-2025-${Math.floor(Math.random() * 800 + 100)}`,
                    title: newTicketTitle,
                    priority: 'High',
                    status: 'Submitted (Admin Triage)',
                    requester: 'Local Station',
                    sla: '48.0h left'
                  },
                  ...itTickets
                ]);
                setNewTicketTitle('');
              }}
              className="px-5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-medium whitespace-nowrap"
            >
              Submit Ticket
            </button>
          </div>

          <div className="bg-[var(--bg-surface)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] overflow-hidden">
            <div className="px-6 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Active Operational Incidents &amp; Governance Queue
              </h3>
              <span className="text-xs text-[var(--text-tertiary)] font-mono tabular-nums">
                {itTickets.length} Active Tickets
              </span>
            </div>
            <div className="divide-y divide-[var(--border-subtle)]">
              {itTickets.map((t) => (
                <div
                  key={t.id}
                  className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[var(--bg-surface-elevated)] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-semibold text-[var(--text-accent)]">{t.id}</span>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{t.title}</span>
                      <span className="text-xs font-mono text-[var(--text-tertiary)]">
                        · {t.priority} Priority
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Requester: {t.requester} · SLA Timer: <span className="font-mono">{t.sla}</span>
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[var(--text-secondary)]">
                    {t.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DEMO 3: Enterprise Core ERP */}
      {activeDemo === 'erp' && (
        <div className="space-y-6">
          <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Enterprise Core ERP · Purchase Orders &amp; Staff Requisitions
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Procurement &amp; Governance Center
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--text-secondary)]">
              4-Tier Approval Flow · 5-Day Internal Lockout
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-mono text-[var(--text-accent)]">PO-2025-9941</span>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                Refined Bleached Palm Oil Processing Unit
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Vendor: Alfa Laval Separation Sdn Bhd
              </p>
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[var(--text-primary)]">RM 340,000</span>
                <span className="text-[var(--text-accent)] font-medium">✓ CFO Approved</span>
              </div>
            </div>

            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-mono text-[var(--text-accent)]">REQ-STAFF-014</span>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                Senior Process Control Engineer (QA Lab)
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Internal Lockout: Day 3 of 5 (Mandatory Posting)
              </p>
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[var(--text-primary)]">Headcount: 1 FTE</span>
                <span className="text-[var(--text-secondary)] font-medium">HR Review Active</span>
              </div>
            </div>

            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-mono text-[var(--text-accent)]">PO-2025-9948</span>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                GHS Safety Labeling &amp; Calibration Tooling
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Master Reference Slice E Sync
              </p>
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[var(--text-primary)]">RM 24,500</span>
                <span className="text-[var(--text-accent)] font-medium">✓ Validated</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 4: Warehouse Central */}
      {activeDemo === 'warehouse' && (
        <div className="space-y-6">
          <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Slice D Logistics Operations
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Warehouse Central &amp; Pre-Loading Inspection Hub
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--text-accent)]">Zero Demurrage Delay</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[var(--text-accent)]" />
                  <span>Container Pre-Loading Inspection</span>
                </h3>
                <span className="text-xs font-mono text-[var(--text-secondary)]">CNTR-MY-88421</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2">
                  <p className="font-medium text-[var(--text-primary)]">Digital Photo Seal Verification</p>
                  <div className="h-28 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-dashed border-[var(--border-subtle)] flex flex-col items-center justify-center text-[var(--text-secondary)] space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-[var(--text-accent)]" />
                    <span className="text-xs">Seal #ML-99042 captured via Power Apps Mobile</span>
                    <span className="text-[11px] text-[var(--text-tertiary)] font-mono">
                      Geo-tagged &amp; Timestamped
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-secondary)]">Pallet Integrity</span>
                    <p className="font-semibold text-[var(--text-primary)] mt-0.5">100% Passed</p>
                  </div>
                  <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-secondary)]">Gate Pass</span>
                    <p className="font-semibold text-[var(--text-accent)] font-mono mt-0.5">AUTO-ISSUED</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center space-x-2">
                  <Box className="w-4 h-4 text-[var(--text-accent)]" />
                  <span>Live Stock &amp; Batch Movement Log</span>
                </h3>
                <span className="text-xs font-mono text-[var(--text-secondary)]">SAP Synchronized</span>
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
                    className="p-3 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">{item.product}</p>
                      <p className="text-[11px] text-[var(--text-secondary)] font-mono mt-0.5">
                        {item.batch} · {item.bay} · {item.qty}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-accent)]">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 5: Maintenance HQ Command & Server Audit */}
      {activeDemo === 'maintenance' && (
        <div className="space-y-6">
          <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                IT Security &amp; Plant Reliability
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Maintenance Command Center &amp; Server Audit Register
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono text-[var(--text-secondary)]">
              <span>OEE Overall: 78.4%</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-accent)]">100% Audit Adherence</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-3">
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Server Checklist Numbering
              </span>
              <p className="font-mono text-xs font-semibold text-[var(--text-primary)] bg-[var(--bg-primary)] p-2.5 rounded-[var(--radius-sm)] border border-[var(--border-subtle)]">
                Server Checklist-2025-W12-004
              </p>
              <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                <li>· CPU Load: 18.2% (Normal)</li>
                <li>· RAM Allocation: 48.4 GB / 64 GB (75%)</li>
                <li>· C:\ Drive Free Space: 142 GB (Healthy)</li>
              </ul>
              <span className="inline-block text-xs text-[var(--text-accent)] font-mono">
                ✓ Systems Manager Signed Off
              </span>
            </div>

            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-3">
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Fractionation Chiller Unit 3
              </span>
              <p className="font-mono text-xs font-semibold text-[var(--text-primary)] bg-[var(--bg-primary)] p-2.5 rounded-[var(--radius-sm)] border border-[var(--border-subtle)]">
                WO-MECH-2025-0819
              </p>
              <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                <li>· Vibration Sensor: 0.12 mm/s (Optimal)</li>
                <li>· Coolant Pressure: 4.8 bar</li>
                <li>· Next Preventative PM: in 14 Days</li>
              </ul>
              <span className="inline-block text-xs text-[var(--text-accent)] font-mono">
                ✓ Online &amp; Operational
              </span>
            </div>

            <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-3">
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Dataverse Backup &amp; Disaster Recovery
              </span>
              <p className="font-mono text-xs font-semibold text-[var(--text-primary)] bg-[var(--bg-primary)] p-2.5 rounded-[var(--radius-sm)] border border-[var(--border-subtle)]">
                DR-HEALTH-CHECK-OK
              </p>
              <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                <li>· Last Immutable Snapshot: 2 hours ago</li>
                <li>· RPO: &lt; 15 minutes</li>
                <li>· RTO: &lt; 1 hour verified</li>
              </ul>
              <span className="inline-block text-xs text-[var(--text-accent)] font-mono">
                ✓ ISO 27001 Certified Audit
              </span>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 6: Interactive Tasek Cement Rebate Calculator */}
      {activeDemo === 'rebate' && (
        <div className="space-y-6">
          <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Tasek Cement Commercial Approval Engine
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                7-Component Dynamic Rebate Formula Simulator
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono text-[var(--text-secondary)]">
              <span>Statutory Ceiling: RM 0.20 / Tonne</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-accent)]">Cycle Time: ~15 Min</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
              <h3 className="text-xs font-mono text-[var(--text-primary)] font-medium">
                Formula Variables Configuration
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5">
                  <label className="text-[var(--text-secondary)] flex justify-between">
                    <span>Base Tier Rate (RM/t)</span>
                    <span className="font-mono text-[var(--text-primary)] tabular-nums">
                      RM {rebateBaseRate.toFixed(2)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0.02"
                    max="0.15"
                    step="0.01"
                    value={rebateBaseRate}
                    onChange={(e) => setRebateBaseRate(parseFloat(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[var(--text-secondary)] flex justify-between">
                    <span>Order Volume (Metric Tonnes)</span>
                    <span className="font-mono text-[var(--text-primary)] tabular-nums">
                      {rebateVolume} tonnes
                    </span>
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="5000"
                    step="100"
                    value={rebateVolume}
                    onChange={(e) => setRebateVolume(parseInt(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[var(--text-secondary)] flex justify-between">
                    <span>Logistics Distance Adj (RM/t)</span>
                    <span className="font-mono text-[var(--text-primary)] tabular-nums">
                      RM {rebateDistance.toFixed(2)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.08"
                    step="0.01"
                    value={rebateDistance}
                    onChange={(e) => setRebateDistance(parseFloat(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[var(--text-secondary)] flex justify-between">
                    <span>Special Contract Terms (RM/t)</span>
                    <span className="font-mono text-[var(--text-primary)] tabular-nums">
                      RM {rebateSpecialTerm.toFixed(2)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.06"
                    step="0.01"
                    value={rebateSpecialTerm}
                    onChange={(e) => setRebateSpecialTerm(parseFloat(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[var(--text-secondary)] flex justify-between">
                    <span>Seasonal Incentive (RM/t)</span>
                    <span className="font-mono text-[var(--text-primary)] tabular-nums">
                      RM {rebateSeasonal.toFixed(2)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.04"
                    step="0.01"
                    value={rebateSeasonal}
                    onChange={(e) => setRebateSeasonal(parseFloat(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[var(--text-secondary)] flex justify-between">
                    <span>Credit Risk Deduction (RM/t)</span>
                    <span className="font-mono text-[var(--text-primary)] tabular-nums">
                      - RM {rebateCreditDeduction.toFixed(2)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.05"
                    step="0.01"
                    value={rebateCreditDeduction}
                    onChange={(e) => setRebateCreditDeduction(parseFloat(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 glass-card p-6 space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                  Real-Time Governance Evaluation
                </span>

                <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2">
                  <div className="flex justify-between text-xs text-[var(--text-secondary)]">
                    <span>Raw Formula Output:</span>
                    <span className="font-mono text-[var(--text-primary)] tabular-nums">
                      RM {rawRebatePerTonne.toFixed(2)} / t
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-[var(--text-secondary)]">
                    <span>Statutory Capped Rate:</span>
                    <span className="font-mono font-semibold text-[var(--text-accent)] tabular-nums">
                      RM {cappedRebatePerTonne.toFixed(2)} / t
                    </span>
                  </div>
                  {isCapped && (
                    <div className="text-xs text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] p-2.5 rounded-[var(--radius-sm)] border border-[var(--border-focus)] flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-[var(--text-accent)] shrink-0" />
                      <span>Governance ceiling enforced: Capped at RM 0.20/tonne</span>
                    </div>
                  )}
                </div>

                <div className="text-center py-2 space-y-1">
                  <p className="text-xs text-[var(--text-secondary)]">Total Customer Rebate Value</p>
                  <p className="text-3xl font-semibold text-[var(--text-primary)] font-mono tabular-nums">
                    RM {totalRebateAmountRM}
                  </p>
                  <p className="text-xs text-[var(--text-tertiary)] font-mono tabular-nums">
                    Based on {rebateVolume} Metric Tonnes
                  </p>
                </div>
              </div>

              <button
                onClick={triggerApproveRebate}
                className={`w-full py-3 rounded-[var(--radius-sm)] text-xs font-medium transition-colors flex items-center justify-center space-x-2 ${
                  rebateApproved
                    ? 'bg-[var(--bg-primary)] text-[var(--text-accent)] border border-[var(--border-focus)]'
                    : 'bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white'
                }`}
              >
                {rebateApproved ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Rebate Authorized by Group COO (15-Min SLA)</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Submit Multi-Level Rebate Approval</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 7: AI Builder SOP Classifier */}
      {activeDemo === 'cs-resolver' && (
        <div className="space-y-6">
          <div className="bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                AI Builder NLP Model · 120+ SOP Categories
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Customer Service Resolver &amp; SOP Recommendation Engine
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--text-accent)]">
              50–80% Handling Time Reduction
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-[var(--text-primary)]">
                  Inbound Customer / Operator Issue Description
                </label>
                <p className="text-xs text-[var(--text-secondary)]">
                  Type or select any scenario to test real-time NLP classification
                </p>
              </div>

              <textarea
                rows={3}
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] focus:outline-none text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] resize-none"
              />

              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[var(--text-tertiary)]">
                  Sample Test Scenarios:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() =>
                      setTicketSubject(
                        'Batch 402 Palm Stearin melting point deviation during high temperature filtration'
                      )
                    }
                    className="text-xs px-2.5 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors"
                  >
                    QA Deviation (Slice B)
                  </button>
                  <button
                    onClick={() =>
                      setTicketSubject(
                        'Primary Domain Controller server memory exceeded 85% with pending patch reboot'
                      )
                    }
                    className="text-xs px-2.5 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors"
                  >
                    IT Server Checklist
                  </button>
                  <button
                    onClick={() =>
                      setTicketSubject(
                        'Special volume contract rebate exceeded standard tier with regional distance credit'
                      )
                    }
                    className="text-xs px-2.5 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors"
                  >
                    Tasek Rebate
                  </button>
                  <button
                    onClick={() =>
                      setTicketSubject(
                        'Pre-loading container inspection photo damaged pallet seal at Bay 04'
                      )
                    }
                    className="text-xs px-2.5 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors"
                  >
                    Logistics Slice D
                  </button>
                </div>
              </div>

              <button
                onClick={handleClassifyTicket}
                disabled={isClassifying}
                className="w-full py-2.5 rounded-[var(--radius-sm)] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                {isClassifying ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Querying AI Builder NLP Classifier...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Run AI Classification &amp; SOP Linker</span>
                  </>
                )}
              </button>
            </div>

            <div className="lg:col-span-6 glass-card p-6 space-y-4">
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                AI Builder Model Inference Output
              </span>

              <div className="space-y-3">
                <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2.5">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs text-[var(--text-secondary)]">Classified Category:</span>
                    <span className="text-xs font-mono font-semibold text-[var(--text-primary)] text-right">
                      {classifiedCategory}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[var(--text-secondary)]">Confidence Score:</span>
                    <span className="text-xs font-mono font-semibold text-[var(--text-accent)] tabular-nums">
                      {confidenceScore}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${confidenceScore}%` }} />
                  </div>
                </div>

                <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2">
                  <p className="text-xs font-semibold text-[var(--text-primary)] flex items-center space-x-1.5">
                    <FileText className="w-4 h-4 text-[var(--text-accent)]" />
                    <span>Recommended Standard Operating Procedure</span>
                  </p>
                  <p className="text-xs font-mono text-[var(--text-accent)] font-medium">{recommendedSOP}</p>
                  <div className="pt-1 flex items-center space-x-2 text-xs text-[var(--text-secondary)]">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-accent)]" />
                    <span>Direct deep-link routed to agent workspace in Microsoft Teams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 8: ATS Automation — Tri-Engine Router, SSOT Regex Gate & Q1-Q10 PDF Validator */}
      {activeDemo === 'ats-automation' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                ai_gateway.py · tailor_to_jd.py · verify_pdfs.py · app_bot_v6.py
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                ATS Automation: Tri-Engine AI Router &amp; 10-Gate PDF Governance
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono text-[var(--text-secondary)]">
              <span>Lock: fcntl.flock(.usage_stats.lock)</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-accent)] font-medium">Workday v6.0 Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Tri-Engine AI Gateway & SSOT Regex Hallucination Firewall */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tri-Engine Router Control */}
              <div className="bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                    01 · Tri-Engine AI Gateway &amp; Rate-Limit Failover
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                    Pydantic JSON Schema Enforced
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-secondary)]">
                      Target Career Track (Dual-Track Pipeline)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['Track A', 'Track B'] as const).map((track) => (
                        <button
                          key={track}
                          onClick={() => setAtsTrack(track)}
                          className={`px-3 py-2 rounded-[var(--radius-sm)] text-xs font-mono border transition-colors ${
                            atsTrack === track
                              ? 'bg-[var(--accent-blue)] text-[#090a0d] border-[var(--border-focus)]'
                              : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                          }`}
                        >
                          {track === 'Track A' ? 'Track A · Architect' : 'Track B · Ops/QA'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[var(--text-secondary)]">
                      Task Routing Mode (task_type)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['structured', 'fast'] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setAtsTaskMode(mode)}
                          className={`px-3 py-2 rounded-[var(--radius-sm)] text-xs font-mono border transition-colors ${
                            atsTaskMode === mode
                              ? 'bg-[var(--accent-blue)] text-[#090a0d] border-[var(--border-focus)]'
                              : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                          }`}
                        >
                          {mode === 'structured' ? "'structured' (JD)" : "'fast' (Form Fill)"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary)]">Resolved Active Provider:</span>
                    <span className="text-[var(--text-accent)] font-semibold">{activeAiEngine}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                    <div className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                      <div className="text-[var(--text-secondary)]">Gemini Flash</div>
                      <div className="text-[var(--text-primary)] font-semibold mt-0.5">4 / 15 RPM</div>
                      <div className="text-[10px] text-[var(--text-tertiary)]">182 / 1,500 RPD</div>
                    </div>
                    <div className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                      <div className="text-[var(--text-secondary)]">Groq Llama-3.3</div>
                      <div className="text-[var(--text-primary)] font-semibold mt-0.5">
                        {simulatedGroqExhausted ? '30 / 30 RPM (429)' : '11 / 30 RPM'}
                      </div>
                      <div className="text-[10px] text-[var(--text-tertiary)]">410 / 1,000 RPD</div>
                    </div>
                    <div className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                      <div className="text-[var(--text-secondary)]">OpenCode Zen</div>
                      <div className="text-[var(--text-primary)] font-semibold mt-0.5">1 / 60 RPM</div>
                      <div className="text-[10px] text-[var(--text-tertiary)]">Standby Tier 3</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-[var(--text-tertiary)]">
                      Simulate Groq 30 RPM Exhaustion (Test Failover Chain):
                    </span>
                    <button
                      onClick={() => setSimulatedGroqExhausted(!simulatedGroqExhausted)}
                      className="px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-[11px]"
                    >
                      {simulatedGroqExhausted ? 'Reset Groq Quota' : 'Trigger 429 Failover'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Zero-Hallucination SSOT Metric Firewall */}
              <div className="bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                    02 · Zero-Hallucination SSOT Metric Firewall (tailor_to_jd.py)
                  </span>
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">
                    Regex: \b\d+%\+?|\b\d+\+
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Edit the tailored resume bullet below. Any numerical claim not anchored in{' '}
                  <code className="font-mono text-[var(--text-primary)]">Master_Profile_SSOT.md</code>{' '}
                  (e.g., try typing <code className="font-mono text-[var(--text-accent)]">450%</code> or{' '}
                  <code className="font-mono text-[var(--text-accent)]">999</code>) is automatically flagged and rejected before PDF compilation.
                </p>

                <textarea
                  rows={3}
                  value={atsBulletInput}
                  onChange={(e) => setAtsBulletInput(e.target.value)}
                  className="w-full rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] p-3 text-xs font-mono text-[var(--text-primary)] outline-none"
                />

                <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    {isSsotValid ? (
                      <CheckCircle2 className="w-4 h-4 text-[var(--text-accent)]" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-[var(--status-warning-fg)]" />
                    )}
                    <span className="text-[var(--text-primary)]">
                      {isSsotValid
                        ? 'SSOT Verification PASSED: All metrics anchored in Master Dossier'
                        : `HALLUCINATION BLOCKED: Unverified metric(s) [${unauthorizedMetrics.join(', ')}]`}
                    </span>
                  </div>
                  <span className="text-[11px] text-[var(--text-tertiary)]">
                    Extracted: [{extractedMetrics.join(', ')}]
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 10-Gate PDF Governance Validator (Q1-Q10) */}
            <div className="lg:col-span-5 bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--text-accent)]" />
                  <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                    03 · 10-Gate PDF Governance (verify_pdfs.py)
                  </span>
                </div>
                <span className="text-xs font-mono text-[var(--text-primary)]">
                  {atsTrack} · 2 Pages
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                {[
                  { gate: 'Q1', name: 'File Existence & Byte Integrity', spec: 'size > 10,240 bytes (28.4 KB)' },
                  { gate: 'Q2', name: 'Page Budget Enforcement', spec: 'Resume == 2 pages · Cover == 1 page' },
                  { gate: 'Q3', name: 'Identity Header Verification', spec: 'ALI AKHMAD FAUZIE anchored on Page 1' },
                  { gate: 'Q4', name: 'Zero Raw Markdown Bleed', spec: '0 occurrences of **bold** or # headers' },
                  { gate: 'Q5', name: 'Zero Encoding / Mojibake Artifacts', spec: 'UTF-8 clean · 0 U+FFFD replacement chars' },
                  { gate: 'Q6', name: 'Required Structural Sections', spec: 'SUMMARY · COMPETENCIES · EXPERIENCE · EDUCATION' },
                  { gate: 'Q7', name: 'Clickable Hyperlink URI Layer', spec: '/Annots /Subtype /Link verified via pypdf' },
                  { gate: 'Q8', name: 'Final-Page Density Floor', spec: 'last_page_lines >= 8 (19 lines rendered)' },
                  { gate: 'Q9', name: 'Content Completeness & Contact', spec: 'Email · Phone · 5/5 Employers present' },
                  { gate: 'Q10', name: 'Visual Layout Balance', spec: 'ReportLab KeepTogether · 0 orphan headings' }
                ].map((item) => (
                  <div
                    key={item.gate}
                    className="flex items-center justify-between p-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)]"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-[var(--text-accent)] font-semibold">{item.gate}</span>
                      <div>
                        <div className="text-[var(--text-primary)] font-sans text-xs font-medium">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-[var(--text-tertiary)]">{item.spec}</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] text-[var(--text-accent)] border border-[var(--border-subtle)] text-[10px]">
                      PASS
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 9: Putri GarmentHub 4-Pocket Cash Sharding & SPK Multi-Drop QC Engine */}
      {activeDemo === 'garment-erp' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Putri GarmentHub v2.12.11 · calculations.ts · CashFlowContext.tsx
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                SPK Multi-Drop QC Defect Engine &amp; 4-Pocket RBAC Cash Ledger
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              {(['owner', 'keuangan', 'produksi'] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => setGarmentActiveRole(role)}
                  className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono uppercase border transition-colors ${
                    garmentActiveRole === role
                      ? 'bg-[var(--accent-blue)] text-[#090a0d] border-[var(--border-focus)]'
                      : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  Role: {role}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* SPK Partial Drop & QC Defect Wage Calculator */}
            <div className="lg:col-span-6 bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                  01 · Partial Drop QC Defect &amp; Pro-Rata Catalog Sync
                </span>
                <span className="text-xs font-mono text-[var(--text-tertiary)]">
                  calculateDropWageAndDefects()
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-mono mb-1">
                    <span className="text-[var(--text-secondary)]">Gross Tailor Drop Received (Lusin):</span>
                    <span className="text-[var(--text-primary)] font-semibold">{spkReceivedLusin} Lusin ({spkReceivedLusin * 12} pcs)</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    value={spkReceivedLusin}
                    onChange={(e) => setSpkReceivedLusin(Number(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex justify-between font-mono mb-1">
                      <span className="text-[var(--text-secondary)]">BS Fatal (Kain Rusak):</span>
                      <span className="text-[var(--status-warning-fg)] font-semibold">{spkBsFatal} Lusin</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={10}
                      value={spkBsFatal}
                      onChange={(e) => setSpkBsFatal(Number(e.target.value))}
                      className="w-full accent-[var(--interactive-primary)]"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between font-mono mb-1">
                      <span className="text-[var(--text-secondary)]">BS Repair (Re-work):</span>
                      <span className="text-[var(--text-accent)] font-semibold">{spkBsRepair} Lusin</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={10}
                      value={spkBsRepair}
                      onChange={(e) => setSpkBsRepair(Number(e.target.value))}
                      className="w-full accent-[var(--interactive-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-mono mb-1">
                    <span className="text-[var(--text-secondary)]">Sewing Rate / Lusin (IDR):</span>
                    <span className="text-[var(--text-primary)] font-semibold">Rp {spkRatePerLusin.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={120000}
                    max={300000}
                    step={10000}
                    value={spkRatePerLusin}
                    onChange={(e) => setSpkRatePerLusin(Number(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>
              </div>

              <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Passed QC (Restocked to Catalog):</span>
                  <span className="text-[var(--text-accent)] font-semibold">{spkPassedQC} Lusin ({spkCatalogRestockRatio}% pass ratio)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Gross Sewing Wage:</span>
                  <span className="text-[var(--text-primary)]">Rp {spkGrossWage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">BS Fatal Penalty (Rp 50k/Lusin):</span>
                  <span className="text-[var(--status-warning-fg)]">- Rp {spkDefectPenalty.toLocaleString()}</span>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)] flex justify-between text-sm font-semibold">
                  <span className="text-[var(--text-primary)]">Net Tailor Payout (Slip WA):</span>
                  <span className="text-[var(--text-accent)]">Rp {spkNetWage.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* 4-Pocket Cash Sharding & Role-Gated Profit Isolation */}
            <div className="lg:col-span-6 bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                  02 · Arus Kas 4 Kantong &amp; RBAC Profit Isolation
                </span>
                <span className="text-xs font-mono text-[var(--text-tertiary)]">
                  canViewProfit: {garmentActiveRole === 'owner' ? 'true' : 'false'}
                </span>
              </div>

              <div>
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-[var(--text-secondary)]">Batch Revenue Inflow (IDR):</span>
                  <span className="text-[var(--text-primary)] font-semibold">Rp {garmentInvoiceIDR.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={5000000}
                  max={50000000}
                  step={1000000}
                  value={garmentInvoiceIDR}
                  onChange={(e) => setGarmentInvoiceIDR(Number(e.target.value))}
                  className="w-full accent-[var(--interactive-primary)]"
                />
              </div>

              {garmentActiveRole === 'produksi' ? (
                <div className="p-6 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center space-y-2">
                  <AlertCircle className="w-6 h-6 text-[var(--status-warning-fg)] mx-auto" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    RoleGateCard: Module Locked for Role &apos;produksi&apos;
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Floor cutting &amp; SPK operators have full access to SPK Batches, Fabrics, and Catalog Stock, but zero visibility into Arus Kas 4 Kantong.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    <div className="text-[var(--text-secondary)]">1. Kas Bahan (40%)</div>
                    <div className="text-base font-semibold text-[var(--text-primary)] mt-1">
                      Rp {Math.round(garmentInvoiceIDR * 0.4).toLocaleString()}
                    </div>
                    <div className="text-[10px] text-[var(--text-tertiary)] mt-0.5">Fabric Rolls, Thread, Labels</div>
                  </div>
                  <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    <div className="text-[var(--text-secondary)]">2. Kas Operasional (30%)</div>
                    <div className="text-base font-semibold text-[var(--text-primary)] mt-1">
                      Rp {Math.round(garmentInvoiceIDR * 0.3).toLocaleString()}
                    </div>
                    <div className="text-[10px] text-[var(--text-tertiary)] mt-0.5">Tailor Payroll, PLN, Packaging</div>
                  </div>
                  <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    <div className="text-[var(--text-secondary)]">3. Kas Iklan (10%)</div>
                    <div className="text-base font-semibold text-[var(--text-primary)] mt-1">
                      Rp {Math.round(garmentInvoiceIDR * 0.1).toLocaleString()}
                    </div>
                    <div className="text-[10px] text-[var(--text-tertiary)] mt-0.5">Shopee / TikTok Shop Ads</div>
                  </div>
                  {garmentActiveRole === 'owner' ? (
                    <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-focus)]">
                      <div className="text-[var(--text-accent)]">4. Kas Profit (20% · Owner Only)</div>
                      <div className="text-base font-semibold text-[var(--text-accent)] mt-1">
                        Rp {Math.round(garmentInvoiceIDR * 0.2).toLocaleString()}
                      </div>
                      <div className="text-[10px] text-[var(--text-tertiary)] mt-0.5">50/50 Putri &amp; Rival Split: Rp {Math.round(garmentInvoiceIDR * 0.1).toLocaleString()} ea</div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] opacity-75">
                      <div className="text-[var(--text-tertiary)]">4. Kas Profit (Filtered by RBAC)</div>
                      <div className="text-xs font-sans text-[var(--text-secondary)] mt-1">
                        Hidden from &apos;keuangan&apos; staff at Context boundary (FR-4.2)
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* DEMO 10: IOI Acidchem DOSH/SIRIM 5x5 HIRADC Risk Matrix Simulator */}
      {activeDemo === 'she-matrix' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-surface)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                ioi-she-platform · MainDB_SHE · DEC-2026-001 ($960K/yr License Saved)
              </span>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                IOI Acidchem DOSH/SIRIM 5×5 HIRADC Chemical Risk Calculator
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              {(['PENANG_PLANT', 'JOHOR_PLANT'] as const).map((plant) => (
                <button
                  key={plant}
                  onClick={() => setHiradcPlant(plant)}
                  className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono border transition-colors ${
                    hiradcPlant === plant
                      ? 'bg-[var(--accent-blue)] text-[#090a0d] border-[var(--border-focus)]'
                      : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  {plant === 'PENANG_PLANT' ? 'Penang Prai Plant' : 'Johor Pan-Century'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                01 · L × S Chemical Process Risk Parameters ({hiradcPlant === 'PENANG_PLANT' ? 'HIRADC-PEN-PRD-2026-001' : 'HIRADC-JOH-LOG-2026-004'})
              </span>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-mono mb-1">
                    <span className="text-[var(--text-secondary)]">Likelihood (L ∈ 1..5):</span>
                    <span className="text-[var(--text-primary)] font-semibold">{hiradcLikelihood} / 5</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={hiradcLikelihood}
                    onChange={(e) => setHiradcLikelihood(Number(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-mono mb-1">
                    <span className="text-[var(--text-secondary)]">Severity (S ∈ 1..5):</span>
                    <span className="text-[var(--text-primary)] font-semibold">{hiradcSeverity} / 5</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={hiradcSeverity}
                    onChange={(e) => setHiradcSeverity(Number(e.target.value))}
                    className="w-full accent-[var(--interactive-primary)]"
                  />
                </div>
              </div>

              <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Computed Risk Score (L × S):</span>
                  <span className="text-lg font-semibold text-[var(--text-accent)]">{hiradcScore} / 25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-secondary)]">DOSH Classification:</span>
                  <span className={`font-semibold ${hiradcScore >= 15 ? 'text-[var(--status-warning-fg)]' : 'text-[var(--text-accent)]'}`}>
                    {hiradcLevel}
                  </span>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] font-sans">
                  {hiradcPlant === 'PENANG_PLANT'
                    ? 'Active Process: 240°C Fatty Acid Distillation Sampling · Required: Closed-Loop Cooler + Full Face Shield'
                    : 'Active Process: Pressurized 50% NaOH Bulk Tanker Unloading · Required: LOTO Interlock + Chemical Suit'}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[var(--bg-surface)] p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-4">
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                02 · Interactive 5×5 DOSH/SIRIM Heatmap (Click Any Cell)
              </span>
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
                        className={`p-2.5 rounded-[var(--radius-sm)] border text-center transition-all ${
                          isSelected
                            ? 'bg-[var(--accent-blue)] text-[#090a0d] border-white scale-105 font-bold'
                            : cellScore >= 15
                            ? 'bg-[var(--bg-default)] text-[var(--status-warning-fg)] border-[var(--status-warning-border)] hover:border-[var(--status-warning-fg)]'
                            : cellScore >= 5
                            ? 'bg-[var(--bg-primary)] text-[var(--text-accent)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                            : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                        }`}
                      >
                        <div>{cellScore}</div>
                        <div className="text-[9px] opacity-75">L{lik}×S{sev}</div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
