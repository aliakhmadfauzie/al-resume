import React, { useState } from 'react';
import { 
  MonitorPlay, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  DollarSign, 
  Cpu, 
  Server, 
  Box, 
  Truck, 
  Check, 
  ArrowRight,
  RefreshCw,
  FileText,
  Building2,
  Target,
  Briefcase,
  BadgeCheck,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Section3D } from '../canvas/Section3D';

interface LiveDemosViewProps {
  initialDemo?: string;
}

// ─── Enterprise Transformation Framework — strategic layers ───
const TRANSFORMATION_LAYERS = [
  {
    label: 'Business Transformation Domains',
    items: ['Finance', 'Operations', 'Compliance', 'Warehousing', 'Service Management', 'AI'],
    icon: Building2
  },
  {
    label: 'Transformation Challenges Solved',
    items: ['Cost Control', 'Governance', 'Process Efficiency', 'Legacy Modernization'],
    icon: Target
  },
  {
    label: 'Interactive Enterprise Demonstrations',
    items: ['FinOps', 'ITSM', 'ERP', 'Warehouse', 'Compliance'],
    icon: MonitorPlay
  },
  {
    label: 'Technology Foundation',
    items: ['Microsoft 365', 'Dataverse', 'Power Platform', 'AI'],
    icon: Layers
  }
];

// ─── Architecture Strategy per demonstration (Challenge → Approach → Result) ───
const DEMO_STRATEGIES: Record<string, { challenge: string; approach: string; result: string; benefits: string[] }> = {
  finops: {
    challenge: 'Disparate cloud purchases created fragmented oversight and licensing inefficiencies.',
    approach: 'Designed a centralized governance framework integrating procurement workflows, approval chains, spending analytics, and executive reporting.',
    result: 'Enabled transparent spending management and stronger operational governance.',
    benefits: ['Reduced approval delays', 'Improved policy compliance', 'Increased visibility into operational costs', 'Faster reporting cycles', 'Stronger audit readiness']
  },
  'it-service': {
    challenge: 'Service requests were tracked across fragmented tools, creating SLA risk and limited operational visibility.',
    approach: 'Consolidated incident, request, and governance workflows into a single service operations platform with SLA monitoring and governed acceptance windows.',
    result: 'Zero SLA breaches with a governed 72-hour acceptance window across mapped operational processes.',
    benefits: ['Reduced service downtime', 'Faster incident resolution', 'Improved IT governance', 'Clearer operational accountability']
  },
  erp: {
    challenge: 'Procurement and staff requisitions relied on manual approval chains with limited audit trails.',
    approach: 'Automated a four-tier approval flow with mandatory internal lockouts, ERP synchronization, and policy enforcement.',
    result: 'Accelerated procurement cycles while preserving compliance and audit integrity.',
    benefits: ['Faster procurement cycles', 'Stronger audit trails', 'Consistent policy enforcement', 'Reduced manual reconciliation']
  },
  warehouse: {
    challenge: 'Pre-loading inspections and stock movements were paper-based, creating demurrage risk and compliance gaps.',
    approach: 'Deployed mobile Power Apps with geo-tagged photographic seal capture and automated gate passes connected to SAP inventory.',
    result: 'Zero demurrage delays and fully digitized chain of custody.',
    benefits: ['Real-time batch tracking', 'Paperless gate pass issuance', 'Elimination of demurrage fines', 'Instant photo audit trail']
  },
  maintenance: {
    challenge: 'Plant asset checklists were decentralized, delaying preventive maintenance and increasing unplanned downtime.',
    approach: 'Centralized server and industrial machine audit checklists into Dataverse with automated threshold telemetry.',
    result: 'Sustained 78.4% OEE with automated SLA dispatch to technicians.',
    benefits: ['Proactive equipment servicing', 'Standardized server audits', 'Automated technician dispatch', 'Audit compliance']
  },
  rebate: {
    challenge: 'Sales rebate calculations involved 7 distinct variables and were subject to human error and policy disputes.',
    approach: 'Engineered a real-time rebate simulator enforcing statutory maximum caps and tier-based rules with multi-level approval routing.',
    result: 'Reduced rebate validation cycles from days to 15 minutes with zero policy overages.',
    benefits: ['Guaranteed policy compliance', 'Instant payout modeling', 'Automated executive approval', 'Transparent customer auditing']
  },
  'cs-resolver': {
    challenge: 'Support agents spent excessive time manually classifying incoming customer tickets and looking up SOP documents.',
    approach: 'Trained an AI Builder NLP classification model across 120+ categories with instant SOP link routing in Microsoft Teams.',
    result: 'Reduced ticket handling time by 50–80% with 95%+ classification confidence.',
    benefits: ['Instant SOP retrieval', 'Consistent categorization', 'Faster first-response times', 'Reduced agent onboarding time']
  }
};

const StrategyBlock: React.FC<{ demoId: string }> = ({ demoId }) => {
  const strategy = DEMO_STRATEGIES[demoId];
  if (!strategy) return null;

  return (
    <div className="apple-card p-6 rounded-2xl space-y-4">
      <div className="flex items-center space-x-2">
        <Target className="w-4 h-4 text-[#2997ff]" />
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">Architecture &amp; Strategy Blueprint</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
          <p className="text-[10px] font-mono uppercase text-amber-400 font-bold flex items-center space-x-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Business Challenge</span>
          </p>
          <p className="text-xs text-neutral-300 leading-relaxed">{strategy.challenge}</p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
          <p className="text-[10px] font-mono uppercase text-[#2997ff] font-bold flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Transformation Approach</span>
          </p>
          <p className="text-xs text-neutral-300 leading-relaxed">{strategy.approach}</p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
          <p className="text-[10px] font-mono uppercase text-[#30d158] font-bold flex items-center space-x-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Business Result</span>
          </p>
          <p className="text-xs text-neutral-300 leading-relaxed">{strategy.result}</p>
        </div>
      </div>

      <div className="space-y-2 pt-1">
        <p className="text-[10px] font-mono uppercase tracking-widest text-[#2997ff] font-semibold">Key Enterprise Benefits</p>
        <div className="flex flex-wrap gap-1.5">
          {strategy.benefits.map((benefit) => (
            <span key={benefit} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#30d158]/10 border border-[#30d158]/20 text-[#30d158] flex items-center space-x-1">
              <Check className="w-3 h-3" />
              <span>{benefit}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LiveDemosView: React.FC<LiveDemosViewProps> = ({ initialDemo = 'finops' }) => {
  const [activeDemo, setActiveDemo] = useState<string>(initialDemo);

  // State for Rebate Calculator
  const [rebateBaseRate, setRebateBaseRate] = useState<number>(0.08);
  const [rebateVolume, setRebateVolume] = useState<number>(1200);
  const [rebateDistance, setRebateDistance] = useState<number>(0.03);
  const [rebateSpecialTerm, setRebateSpecialTerm] = useState<number>(0.02);
  const [rebateSeasonal, setRebateSeasonal] = useState<number>(0.01);
  const [rebateTax, setRebateTax] = useState<number>(0.01);
  const [rebateCreditDeduction, setRebateCreditDeduction] = useState<number>(0.01);
  const [rebateApproved, setRebateApproved] = useState<boolean>(false);

  // Rebate calculations
  const rawRebatePerTonne = Math.max(0, rebateBaseRate + rebateDistance + rebateSpecialTerm + rebateSeasonal + rebateTax - rebateCreditDeduction);
  const cappedRebatePerTonne = Math.min(rawRebatePerTonne, 0.20);
  const isCapped = rawRebatePerTonne > 0.20;
  const totalRebateAmountRM = (cappedRebatePerTonne * rebateVolume).toFixed(2);

  // State for AI SOP Classifier
  const [ticketSubject, setTicketSubject] = useState<string>('Batch 402 Palm Stearin melting point deviation during high temperature filtration');
  const [classifiedCategory, setClassifiedCategory] = useState<string>('Quality Assurance / Non-Conformance (CAPA)');
  const [confidenceScore, setConfidenceScore] = useState<number>(94.8);
  const [recommendedSOP, setRecommendedSOP] = useState<string>('SOP-QA-042: Filtration & High Temp Non-Conformance Protocol');
  const [isClassifying, setIsClassifying] = useState<boolean>(false);

  // State for IT Service Request Hub
  const [itTickets, setItTickets] = useState([
    { id: 'INC-2025-084', title: 'Dataverse Production Entity Sync Timeout', priority: 'High', status: 'In Progress', requester: 'Finance Ops', sla: '4.2h left' },
    { id: 'REQ-2025-112', title: 'SAP Gateway Connector Permission Upgrade', priority: 'Medium', status: 'Pending Review', requester: 'Logistics Lead', sla: '22h left' },
    { id: 'INC-2025-079', title: 'Domino QMS Archived Database Read-Only Mount', priority: 'Low', status: 'Resolved (Accepting)', requester: 'QA Audit', sla: '72h rating window' }
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
      particleCount: 50,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  const handleClassifyTicket = () => {
    setIsClassifying(true);
    setTimeout(() => {
      setIsClassifying(false);
      if (ticketSubject.toLowerCase().includes('server') || ticketSubject.toLowerCase().includes('disk') || ticketSubject.toLowerCase().includes('patch')) {
        setClassifiedCategory('Infrastructure & IT Server Health');
        setConfidenceScore(96.2);
        setRecommendedSOP('SOP-IT-018: Weekly Server Audit & Capacity Threshold Protocol');
      } else if (ticketSubject.toLowerCase().includes('rebate') || ticketSubject.toLowerCase().includes('po') || ticketSubject.toLowerCase().includes('invoice')) {
        setClassifiedCategory('Commercial & Sales Rebates (Tasek Engine)');
        setConfidenceScore(98.4);
        setRecommendedSOP('SOP-FIN-009: 7-Component Tiered Rebate Formula Governance');
      } else if (ticketSubject.toLowerCase().includes('container') || ticketSubject.toLowerCase().includes('warehouse') || ticketSubject.toLowerCase().includes('pallet')) {
        setClassifiedCategory('Warehouse & Logistics Operations (Slice D)');
        setConfidenceScore(93.5);
        setRecommendedSOP('SOP-LOG-027: Pre-Loading Container Inspection & Seal Verification');
      } else {
        setClassifiedCategory('Quality Management & Documentation Control (Slice A)');
        setConfidenceScore(95.1);
        setRecommendedSOP('SOP-QA-042: Filtration & High Temp Non-Conformance Protocol');
      }
    }, 400);
  };

  const demosList = [
    { id: 'finops', title: 'Cloud Cost Governance', icon: <DollarSign className="w-3.5 h-3.5" />, badge: 'FinOps' },
    { id: 'it-service', title: 'Enterprise Service Operations', icon: <Cpu className="w-3.5 h-3.5" />, badge: 'ITSM' },
    { id: 'erp', title: 'Financial Process Automation', icon: <Layers className="w-3.5 h-3.5" />, badge: 'ERP' },
    { id: 'warehouse', title: 'Warehouse Compliance', icon: <Box className="w-3.5 h-3.5" />, badge: 'Logistics' },
    { id: 'maintenance', title: 'Asset Reliability', icon: <Server className="w-3.5 h-3.5" />, badge: 'Reliability' },
    { id: 'rebate', title: 'Commercial Pricing', icon: <TrendingUp className="w-3.5 h-3.5" />, badge: 'Capped' },
    { id: 'cs-resolver', title: 'AI Decision Support', icon: <Sparkles className="w-3.5 h-3.5" />, badge: 'AI' }
  ];

  return (
    <div className="space-y-10 py-6">
      
      {/* Keynote Header */}
      <Section3D initialRotateX={4} initialY={20} className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-medium text-neutral-300">
          <MonitorPlay className="w-3.5 h-3.5 text-[#2997ff]" />
          <span>INTERACTIVE ARCHITECTURAL SIMULATORS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter apple-text-gradient leading-[1.08]">
          Enterprise Systems in Action
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl">
          Functional operational platforms built using Microsoft 365, Power Platform, Dataverse, SharePoint Online, and AI services demonstrating production modernization patterns.
        </p>
      </Section3D>

      {/* Trust & Provenance Pill + Enterprise Transformation Framework */}
      <Section3D delay={0.04} className="space-y-4">
        <div className="flex items-start space-x-3 apple-card rounded-2xl p-4 bg-white/[0.02]">
          <BadgeCheck className="w-5 h-5 text-[#2997ff] mt-0.5 shrink-0" />
          <p className="text-xs text-neutral-300 leading-relaxed">
            Derived from <strong className="text-white">production patterns and enterprise transformation initiatives</strong> delivered across manufacturing, operations, and governance. Sensitive business data anonymized.
          </p>
        </div>

        <div className="apple-card p-6 sm:p-8 rounded-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <Briefcase className="w-4 h-4 text-[#2997ff]" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Transformation Blueprint</h3>
          </div>
          <div className="space-y-2">
            {TRANSFORMATION_LAYERS.map((layer, idx) => {
              const LayerIcon = layer.icon;
              return (
                <div key={layer.label}>
                  <div className="flex items-start space-x-3.5 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4">
                    <LayerIcon className="w-4 h-4 text-[#2997ff] mt-0.5 shrink-0" />
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">{layer.label}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {layer.items.map((item) => (
                          <span key={item} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-200 border border-white/10">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {idx < TRANSFORMATION_LAYERS.length - 1 && (
                    <div className="flex justify-center py-1 text-neutral-500">
                      <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section3D>

      {/* Demo Selector Segmented Pill Tabs */}
      <Section3D delay={0.06}>
        <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 bg-neutral-900/60 backdrop-blur-2xl rounded-full border border-white/10 scrollbar-none">
          {demosList.map((d) => {
            const isActive = activeDemo === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDemo(d.id)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>{d.icon}</span>
                <span>{d.title}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-black/15 text-black font-bold' : 'bg-white/10 text-neutral-400'
                }`}>
                  {d.badge}
                </span>
              </button>
            );
          })}
        </div>
      </Section3D>

      {/* Active Simulator Container with 3D Depth Transition on Tab Change */}
      <Section3D key={activeDemo} delay={0.08} initialRotateX={3} initialY={16} className="space-y-4">
        {/* DEMO 1: FinOps Spend Portal */}
        {activeDemo === 'finops' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#11141c] p-4 rounded-md border border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">Executive FinOps Dashboard</span>
              <h2 className="text-base font-bold text-white">FinOps Governance Platform</h2>
              <p className="text-[11px] text-[#8b93a3] mt-0.5 max-w-xl leading-relaxed">
                Centralized visibility into cloud spending, licensing investment, procurement approvals, and operational accountability.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="text-[#8b93a3]">Period: <strong className="text-white">FY2025-Q1</strong></span>
              <span className="px-2 py-0.5 rounded-sm bg-[#0078d4]/15 text-[#a3c9ff] border border-[#0078d4]/30 font-bold">Live Sync</span>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-0.5">
              <p className="text-xs text-[#8b93a3]">Total Allocated Budget</p>
              <p className="text-xl font-bold text-white font-mono">$3,200,000</p>
              <p className="text-[10px] text-[#00dbe7] font-mono">+4.5% vs Prior Quarter</p>
            </div>
            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-0.5">
              <p className="text-xs text-[#8b93a3]">Actual MTD Spend</p>
              <p className="text-xl font-bold text-[#a3c9ff] font-mono">$2,847,500</p>
              <p className="text-[10px] text-[#8b93a3] font-mono">88.9% Burn Rate (On Track)</p>
            </div>
            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-0.5">
              <p className="text-xs text-[#8b93a3]">SaaS &amp; M365 Licenses</p>
              <p className="text-xl font-bold text-[#dab9ff] font-mono">$642,100</p>
              <p className="text-[10px] text-[#00dbe7] font-mono">Optimized via CoE Kit</p>
            </div>
            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-0.5">
              <p className="text-xs text-[#8b93a3]">Actionable Requisitions</p>
              <p className="text-xl font-bold text-amber-400 font-mono">3 Pending</p>
              <p className="text-[10px] text-amber-400 font-mono">Requires Executive Signature</p>
            </div>
          </div>

          {/* Pending Approvals Table */}
          <div className="bg-[#11141c] rounded-md border border-white/[0.08] overflow-hidden">
            <div className="px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
              <h3 className="text-xs font-bold text-white">Pending Executive Requisitions (SmartFlow Engine)</h3>
              <span className="text-xs text-[#8b93a3] font-mono">3 Records</span>
            </div>
            <div className="divide-y divide-white/[0.06]">
              {[
                { id: 'REQ-4921', name: 'Azure OpenAI GPT-4o Dedicated Deployment', dept: 'Enterprise Automation', amount: '$42,500', requester: 'Ali Akhmad Fauzie' },
                { id: 'REQ-4922', name: 'Dataverse Storage Capacity Add-on (50GB)', dept: 'IOI Domino Cutover', amount: '$18,000', requester: 'Cloud Ops Lead' },
                { id: 'REQ-4923', name: 'Power BI Premium Per Capacity Node P1', dept: 'Global Operations', amount: '$59,940', requester: 'BI Team Lead' }
              ].map((req) => (
                <div key={req.id} className="p-3.5 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-[#141822] transition-colors">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-[#a3c9ff]">{req.id}</span>
                      <span className="text-xs font-bold text-white">{req.name}</span>
                    </div>
                    <p className="text-[11px] text-[#8b93a3]">{req.dept} • Requested by <span className="text-white">{req.requester}</span></p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold font-mono text-white">{req.amount}</span>
                    <button
                      onClick={() => setApprovals({ ...approvals, [req.id]: !approvals[req.id] })}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                        approvals[req.id]
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-[#0078d4] text-white hover:bg-[#0086ea]'
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
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#11141c] p-4 rounded-md border border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">ITSM Operations • 56 Mapped Columns</span>
              <h2 className="text-base font-bold text-white">Industrial Nexus Service Desk</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-0.5 rounded-sm border border-emerald-500/30">
                ● 0% SLA Breaches
              </span>
              <span className="text-xs text-[#a3c9ff] font-mono bg-[#0078d4]/15 px-2.5 py-0.5 rounded-sm border border-[#0078d4]/30">
                72h Accept Window
              </span>
            </div>
          </div>

          {/* Quick Ticket Submission */}
          <div className="bg-[#141822] p-3 rounded-md border border-white/[0.08] flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              placeholder="Log new IT incident or service request..."
              value={newTicketTitle}
              onChange={(e) => setNewTicketTitle(e.target.value)}
              className="flex-1 w-full px-3 py-1.5 rounded-md bg-[#11141c] border border-white/[0.08] focus:border-[#0078d4] focus:outline-none text-xs text-white placeholder-[#8b93a3] font-mono"
            />
            <button
              onClick={() => {
                if (!newTicketTitle.trim()) return;
                setItTickets([
                  { id: `INC-2025-${Math.floor(Math.random() * 800 + 100)}`, title: newTicketTitle, priority: 'High', status: 'Submitted (Triage)', requester: 'Local Station', sla: '48.0h left' },
                  ...itTickets
                ]);
                setNewTicketTitle('');
              }}
              className="px-4 py-1.5 rounded-md bg-[#0078d4] hover:bg-[#0086ea] text-white text-xs font-semibold whitespace-nowrap"
            >
              + Submit Ticket
            </button>
          </div>

          {/* Ticket Queue */}
          <div className="bg-[#11141c] rounded-md border border-white/[0.08] overflow-hidden">
            <div className="px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
              <h3 className="text-xs font-bold text-white">Active Incidents &amp; Governance Queue</h3>
              <span className="text-xs text-[#8b93a3] font-mono">{itTickets.length} Tickets</span>
            </div>
            <div className="divide-y divide-white/[0.06]">
              {itTickets.map((t) => (
                <div key={t.id} className="p-3.5 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-[#141822] transition-colors">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-[#00dbe7]">{t.id}</span>
                      <span className="text-xs font-bold text-white">{t.title}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-red-500/15 text-red-400 font-mono font-bold">
                        {t.priority}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8b93a3]">Requester: <span className="text-white">{t.requester}</span> • SLA: <span className="text-amber-400 font-mono">{t.sla}</span></p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-sm bg-[#141822] text-[#a3c9ff] border border-white/[0.08]">
                      {t.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DEMO 3: Enterprise Core ERP */}
      {activeDemo === 'erp' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="bg-[#11141c] p-4 rounded-md border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#dab9ff] font-semibold">Enterprise Core ERP • Purchase Orders &amp; Staff Requisitions</span>
              <h2 className="text-base font-bold text-white">Procurement &amp; Governance Center</h2>
            </div>
            <span className="text-xs font-mono bg-[#141822] px-2.5 py-1 rounded-sm border border-white/[0.08] text-[#8b93a3]">
              4-Tier Approval Flow • 5-Day Lockout
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-1.5">
              <span className="text-xs font-mono text-[#a3c9ff]">PO-2025-9941</span>
              <h4 className="text-xs font-bold text-white">Refined Bleached Palm Oil Unit</h4>
              <p className="text-[11px] text-[#8b93a3]">Vendor: Alfa Laval Separation Sdn Bhd</p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-white">RM 340,000</span>
                <span className="text-emerald-400 font-mono text-[11px]">✓ CFO Approved</span>
              </div>
            </div>

            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-1.5">
              <span className="text-xs font-mono text-[#00dbe7]">REQ-STAFF-014</span>
              <h4 className="text-xs font-bold text-white">Senior Process Control Engineer</h4>
              <p className="text-[11px] text-[#8b93a3]">Internal Lockout: Day 3 of 5</p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-white">Headcount: 1 FTE</span>
                <span className="text-amber-400 font-mono text-[11px]">HR Review Active</span>
              </div>
            </div>

            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-1.5">
              <span className="text-xs font-mono text-[#dab9ff]">PO-2025-9948</span>
              <h4 className="text-xs font-bold text-white">GHS Safety Labeling &amp; Tooling</h4>
              <p className="text-[11px] text-[#8b93a3]">Master Reference Slice E Sync</p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-white">RM 24,500</span>
                <span className="text-emerald-400 font-mono text-[11px]">✓ Validated</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 4: Warehouse Central */}
      {activeDemo === 'warehouse' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="bg-[#11141c] p-4 rounded-md border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">Slice D Logistics Operations</span>
              <h2 className="text-base font-bold text-white">Warehouse Central &amp; Pre-Loading Inspection Hub</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-sm border border-emerald-500/30">Zero Demurrage Delay</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Container Pre-Loading Inspection Simulator */}
            <div className="glass-card p-4 rounded-md space-y-3 border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white flex items-center space-x-2">
                  <Truck className="w-3.5 h-3.5 text-[#00dbe7]" />
                  <span>Container Pre-Loading Inspection</span>
                </h3>
                <span className="text-xs font-mono text-[#a3c9ff]">CNTR-MY-88421</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-md bg-[#141822] border border-white/[0.08] space-y-1.5">
                  <p className="font-semibold text-white">Digital Photo Seal Verification</p>
                  <div className="h-24 rounded-md bg-[#161a24] border border-dashed border-white/[0.1] flex flex-col items-center justify-center text-[#8b93a3] space-y-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00dbe7]" />
                    <span className="text-[11px]">Seal #ML-99042 captured</span>
                    <span className="text-[10px] text-[#00dbe7] font-mono">Geo-tagged &amp; Timestamped</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-md bg-[#141822] border border-white/[0.08]">
                    <span className="text-[#8b93a3]">Pallet Integrity:</span>
                    <p className="font-bold text-emerald-400 font-mono">100% Passed</p>
                  </div>
                  <div className="p-2 rounded-md bg-[#141822] border border-white/[0.08]">
                    <span className="text-[#8b93a3]">Gate Pass:</span>
                    <p className="font-bold text-[#a3c9ff] font-mono">AUTO-ISSUED</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Live Stock Movements */}
            <div className="glass-card p-4 rounded-md space-y-3 border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white flex items-center space-x-2">
                  <Box className="w-3.5 h-3.5 text-[#dab9ff]" />
                  <span>Live Stock &amp; Batch Movement Log</span>
                </h3>
                <span className="text-xs font-mono text-[#dab9ff]">SAP Synchronized</span>
              </div>

              <div className="space-y-1.5 text-xs">
                {[
                  { batch: 'B-8491', product: 'Refined Palm Stearin (Bag 25kg)', bay: 'Bay 14-A', qty: '480 Bags', status: 'Staged' },
                  { batch: 'B-8492', product: 'Glycerine USP 99.7% Drums', bay: 'Bay 02-C', qty: '80 Drums', status: 'Gate Pass Ready' },
                  { batch: 'B-8493', product: 'Lauric Acid Distilled Flakes', bay: 'Bay 09-F', qty: '320 Bags', status: 'Inspected' }
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-md bg-[#141822] border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-xs">{item.product}</p>
                      <p className="text-[10px] text-[#8b93a3] font-mono">{item.batch} • {item.bay} • {item.qty}</p>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-[#0078d4]/15 text-[#a3c9ff] border border-[#0078d4]/30">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 5: Maintenance HQ */}
      {activeDemo === 'maintenance' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#11141c] p-4 rounded-md border border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">IT Security &amp; Plant Reliability</span>
              <h2 className="text-base font-bold text-white">Maintenance HQ &amp; Server Audit Register</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="text-white">OEE: <strong className="text-emerald-400">78.4%</strong></span>
              <span className="px-2 py-0.5 rounded-sm bg-[#0078d4]/15 text-[#a3c9ff] border border-[#0078d4]/30">Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#a3c9ff] font-semibold">Server Checklist Log</span>
              <p className="font-mono text-xs font-bold text-white bg-[#11141c] p-2 rounded-sm border border-white/[0.08]">
                Server Checklist-2025-W12-004
              </p>
              <ul className="space-y-0.5 text-[11px] text-[#8b93a3] font-mono">
                <li>• CPU Load: 18.2%</li>
                <li>• RAM: 48.4 GB / 64 GB</li>
                <li>• Disk: 142 GB Free</li>
              </ul>
              <span className="inline-block text-[10px] text-emerald-400 font-mono">✓ Signed Off</span>
            </div>

            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">Fractionation Chiller Unit 3</span>
              <p className="font-mono text-xs font-bold text-white bg-[#11141c] p-2 rounded-sm border border-white/[0.08]">
                WO-MECH-2025-0819
              </p>
              <ul className="space-y-0.5 text-[11px] text-[#8b93a3] font-mono">
                <li>• Vibration: 0.12 mm/s</li>
                <li>• Pressure: 4.8 bar</li>
                <li>• Next PM: 14 Days</li>
              </ul>
              <span className="inline-block text-[10px] text-emerald-400 font-mono">✓ Online</span>
            </div>

            <div className="bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#dab9ff] font-semibold">Dataverse Disaster Recovery</span>
              <p className="font-mono text-xs font-bold text-white bg-[#11141c] p-2 rounded-sm border border-white/[0.08]">
                DR-HEALTH-CHECK-OK
              </p>
              <ul className="space-y-0.5 text-[11px] text-[#8b93a3] font-mono">
                <li>• Snapshot: 2 hours ago</li>
                <li>• RPO: &lt; 15 mins</li>
                <li>• RTO: &lt; 1 hour</li>
              </ul>
              <span className="inline-block text-[10px] text-[#00dbe7] font-mono">✓ ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 6: Rebate Calculator */}
      {activeDemo === 'rebate' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="bg-[#11141c] p-4 rounded-md border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">Tasek Cement Commercial Approval Engine</span>
              <h2 className="text-base font-bold text-white">7-Component Dynamic Rebate Formula Simulator</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded-sm bg-[#0078d4]/15 text-[#a3c9ff] border border-[#0078d4]/30 font-bold">
                Cap Limit: RM 0.20 / t
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                Cycle: ~15 Min
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold">
                Formula Variables Configuration
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="text-[#8b93a3] flex justify-between font-mono">
                    <span>Base Tier (RM/t)</span>
                    <span className="text-white">RM {rebateBaseRate.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.02"
                    max="0.15"
                    step="0.01"
                    value={rebateBaseRate}
                    onChange={(e) => setRebateBaseRate(parseFloat(e.target.value))}
                    className="w-full accent-[#0078d4]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#8b93a3] flex justify-between font-mono">
                    <span>Order Volume (t)</span>
                    <span className="text-white">{rebateVolume} tonnes</span>
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="5000"
                    step="100"
                    value={rebateVolume}
                    onChange={(e) => setRebateVolume(parseInt(e.target.value))}
                    className="w-full accent-[#0078d4]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#8b93a3] flex justify-between font-mono">
                    <span>Distance Adj (RM/t)</span>
                    <span className="text-white">RM {rebateDistance.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.08"
                    step="0.01"
                    value={rebateDistance}
                    onChange={(e) => setRebateDistance(parseFloat(e.target.value))}
                    className="w-full accent-[#00dbe7]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#8b93a3] flex justify-between font-mono">
                    <span>Special Terms (RM/t)</span>
                    <span className="text-white">RM {rebateSpecialTerm.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.06"
                    step="0.01"
                    value={rebateSpecialTerm}
                    onChange={(e) => setRebateSpecialTerm(parseFloat(e.target.value))}
                    className="w-full accent-[#dab9ff]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#8b93a3] flex justify-between font-mono">
                    <span>Seasonal Incentive</span>
                    <span className="text-white">RM {rebateSeasonal.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.04"
                    step="0.01"
                    value={rebateSeasonal}
                    onChange={(e) => setRebateSeasonal(parseFloat(e.target.value))}
                    className="w-full accent-[#a3c9ff]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#8b93a3] flex justify-between font-mono">
                    <span>Credit Deduction</span>
                    <span className="text-red-400">- RM {rebateCreditDeduction.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.05"
                    step="0.01"
                    value={rebateCreditDeduction}
                    onChange={(e) => setRebateCreditDeduction(parseFloat(e.target.value))}
                    className="w-full accent-red-400"
                  />
                </div>
              </div>
            </div>

            {/* Calculation Output Card */}
            <div className="lg:col-span-5 glass-card p-4 rounded-md space-y-3 flex flex-col justify-between border border-white/[0.08]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">
                  Governance Evaluation
                </span>

                <div className="p-3 rounded-md bg-[#11141c] border border-white/[0.08] space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-[#8b93a3]">
                    <span>Raw Output:</span>
                    <span className="text-white">RM {rawRebatePerTonne.toFixed(2)} / t</span>
                  </div>
                  <div className="flex justify-between text-[#8b93a3]">
                    <span>Capped Rate:</span>
                    <span className="font-bold text-[#a3c9ff]">RM {cappedRebatePerTonne.toFixed(2)} / t</span>
                  </div>
                  {isCapped && (
                    <div className="text-[10px] text-amber-400 bg-amber-500/10 p-1.5 rounded-sm border border-amber-500/20 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>Capped at RM 0.20 ceiling</span>
                    </div>
                  )}
                </div>

                <div className="text-center py-1 space-y-0.5">
                  <p className="text-[11px] text-[#8b93a3]">Total Customer Rebate Value</p>
                  <p className="text-2xl font-bold text-white font-mono">
                    RM {totalRebateAmountRM}
                  </p>
                  <p className="text-[10px] text-[#8b93a3] font-mono">{rebateVolume} Metric Tonnes</p>
                </div>
              </div>

              <div>
                <button
                  onClick={triggerApproveRebate}
                  className={`w-full py-2 rounded-md text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 ${
                    rebateApproved
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#0078d4] hover:bg-[#0086ea] text-white'
                  }`}
                >
                  {rebateApproved ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Authorized by COO (15-Min Sched)</span>
                    </>
                  ) : (
                    <span>Submit Multi-Level Rebate Approval</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 7: AI Builder SOP Classifier */}
      {activeDemo === 'cs-resolver' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#11141c] p-4 rounded-md border border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">AI Builder NLP Model • 120+ SOP Categories</span>
              <h2 className="text-base font-bold text-white">Customer Service Resolver &amp; SOP Engine</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded-sm bg-[#5c2d91]/15 text-[#dab9ff] border border-[#5c2d91]/30 font-bold">
                50–80% Handling Reduction
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Input Inquiry */}
            <div className="lg:col-span-6 bg-[#141822] p-4 rounded-md border border-white/[0.08] space-y-3">
              <div className="space-y-0.5">
                <label className="text-xs font-bold text-white">Inbound Description</label>
                <p className="text-[11px] text-[#8b93a3]">Type or select any scenario for NLP classification</p>
              </div>

              <textarea
                rows={3}
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-[#11141c] border border-white/[0.08] focus:border-[#0078d4] focus:outline-none text-xs text-white placeholder-[#8b93a3] resize-none font-mono"
              />

              {/* Sample Scenario Buttons */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#8b93a3]">Sample Scenarios:</span>
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setTicketSubject('Batch 402 Palm Stearin melting point deviation during high temperature filtration')}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#11141c] text-[#a3c9ff] border border-white/[0.08] hover:border-[#a3c9ff]"
                  >
                    QA Deviation (Slice B)
                  </button>
                  <button
                    onClick={() => setTicketSubject('Primary Domain Controller server memory exceeded 85% with pending patch reboot')}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#11141c] text-[#00dbe7] border border-white/[0.08] hover:border-[#00dbe7]"
                  >
                    IT Server Checklist
                  </button>
                  <button
                    onClick={() => setTicketSubject('Special volume contract rebate exceeded standard tier with regional distance credit')}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#11141c] text-[#dab9ff] border border-white/[0.08] hover:border-[#dab9ff]"
                  >
                    Tasek Rebate
                  </button>
                  <button
                    onClick={() => setTicketSubject('Pre-loading container inspection photo damaged pallet seal at Bay 04')}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#11141c] text-white border border-white/[0.08] hover:border-white"
                  >
                    Logistics Slice D
                  </button>
                </div>
              </div>

              <button
                onClick={handleClassifyTicket}
                disabled={isClassifying}
                className="w-full py-2 rounded-md bg-[#0078d4] hover:bg-[#0086ea] text-white text-xs font-semibold flex items-center justify-center space-x-1.5"
              >
                {isClassifying ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Querying Model...</span>
                  </>
                ) : (
                  <span>Run AI Classification &amp; SOP Linker</span>
                )}
              </button>
            </div>

            {/* AI Output Card */}
            <div className="lg:col-span-6 glass-card p-4 rounded-md space-y-3 border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">
                Model Inference Output
              </span>

              <div className="space-y-2.5">
                <div className="p-3 rounded-md bg-[#11141c] border border-white/[0.08] space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8b93a3]">Category:</span>
                    <span className="font-mono font-bold text-white">{classifiedCategory}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8b93a3]">Confidence Score:</span>
                    <span className="font-mono font-bold text-emerald-400">{confidenceScore}%</span>
                  </div>
                  <div className="w-full bg-[#161a24] h-1.5 rounded-sm overflow-hidden">
                    <div className="bg-emerald-400 h-full" style={{ width: `${confidenceScore}%` }}></div>
                  </div>
                </div>

                <div className="p-3 rounded-md bg-[#0078d4]/10 border border-[#0078d4]/30 space-y-1">
                  <p className="text-xs font-bold text-[#a3c9ff] flex items-center space-x-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#00dbe7]" />
                    <span>Recommended SOP</span>
                  </p>
                  <p className="text-xs font-mono text-white font-medium">{recommendedSOP}</p>
                  <div className="pt-1 flex items-center space-x-1.5 text-[10px] text-[#00dbe7] font-mono">
                    <ArrowRight className="w-3 h-3" />
                    <span>Deep-link routed to agent workspace in Teams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </Section3D>

      {/* Architecture Strategy Blueprint & Enterprise Coverage with 3D Depth */}
      <Section3D delay={0.06} className="space-y-6">
        <StrategyBlock demoId={activeDemo} />

        {/* Enterprise Capability Coverage */}
        <div className="glass-card p-4 sm:p-5 rounded-md border border-white/[0.08] space-y-3">
          <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-[#00dbe7]" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Capability Coverage</h3>
          </div>
          <p className="text-xs text-[#8b93a3] leading-relaxed max-w-3xl">
            The showcased systems represent common enterprise transformation domains. Together they demonstrate how modern Microsoft platforms replace fragmented legacy systems with governed, scalable operating models.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {[
              { label: 'Finance & FinOps', icon: DollarSign },
              { label: 'Governance & Compliance', icon: ShieldCheck },
              { label: 'IT Service Management', icon: Cpu },
              { label: 'ERP Integration', icon: Layers },
              { label: 'Warehouse Operations', icon: Box },
              { label: 'Asset Management', icon: Server },
              { label: 'AI Decision Support', icon: Sparkles }
            ].map((domain) => {
              const DomainIcon = domain.icon;
              return (
                <div key={domain.label} className="p-2.5 rounded-md bg-[#141822] border border-white/[0.08] flex items-center space-x-2 hover:border-[#0078d4]/40 transition-colors">
                  <DomainIcon className="w-3.5 h-3.5 text-[#00dbe7] shrink-0" />
                  <span className="text-xs text-white font-semibold">{domain.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Section3D>

    </div>
  );
};
