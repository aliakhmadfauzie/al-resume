import React, { useState } from 'react';
import {
  Database,
  Server,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  GitMerge,
  Bot,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  Code2,
} from 'lucide-react';

interface ArchitectureArtifactProps {
  type: 'dataverse-relational' | 'lark-bot-pipeline' | 'plugin-audit-security' | 'generic-pipeline';
  title?: string;
  caption?: string;
}

export const ArchitectureArtifact: React.FC<ArchitectureArtifactProps> = ({
  type,
  title,
  caption,
}) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  if (type === 'dataverse-relational') {
    return (
      <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-5 sm:p-6 overflow-hidden">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e0e0d8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#121212]" />
            <span className="font-mono-code text-[0.7rem] uppercase tracking-wider text-[#121212] font-semibold">
              {title || 'Modernization Blueprint: Domino → Staging → Dataverse'}
            </span>
          </div>
          <span className="font-mono-code text-[0.6rem] uppercase tracking-widest text-[#6b6b63]">
            Topology Ref: IOI-ENT-361
          </span>
        </div>

        {/* Visual Architectural Topology Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative my-2">
          {/* Node 1: Legacy Staging */}
          <div
            onMouseEnter={() => setActiveNode('legacy')}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-4 border transition-all cursor-pointer bg-[#fdfdfc] ${
              activeNode === 'legacy'
                ? 'border-[#121212] shadow-sm'
                : 'border-[#e0e0d8]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Phase 1 • Interim
              </span>
              <Database className="w-3.5 h-3.5 text-[#6b6b63]" />
            </div>
            <div className="font-serif-display italic text-lg text-[#121212] font-normal mb-1">
              SharePoint Staging Store
            </div>
            <p className="text-[0.72rem] text-[#444440] leading-relaxed mb-3">
              16 rapid production apps deployed to bypass RM4.2M/yr licensing during zero-downtime migration.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
                16 Canvas Apps
              </span>
              <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
                56 Mapped Cols
              </span>
            </div>
          </div>

          {/* Node 2: Pipeline Core & Plugins */}
          <div
            onMouseEnter={() => setActiveNode('pipeline')}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-4 border transition-all cursor-pointer bg-[#fdfdfc] ${
              activeNode === 'pipeline'
                ? 'border-[#121212] shadow-sm'
                : 'border-[#e0e0d8]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                ALM & Logic Pipeline
              </span>
              <Cpu className="w-3.5 h-3.5 text-[#121212]" />
            </div>
            <div className="font-serif-display italic text-lg text-[#121212] font-normal mb-1">
              C# Plugins & PAC CLI
            </div>
            <p className="text-[0.72rem] text-[#444440] leading-relaxed mb-3">
              Pre/Post-Operation stage plugin validation with GitHub Actions automated solution packaging.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
                12+ C# Plugins
              </span>
              <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
                Managed Solutions
              </span>
            </div>
          </div>

          {/* Node 3: Target Production */}
          <div
            onMouseEnter={() => setActiveNode('dataverse')}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-4 border transition-all cursor-pointer bg-[#fdfdfc] ${
              activeNode === 'dataverse'
                ? 'border-[#121212] shadow-sm'
                : 'border-[#e0e0d8]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Phase 2 • Target Architecture
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#121212]" />
            </div>
            <div className="font-serif-display italic text-lg text-[#121212] font-normal mb-1">
              Dataverse Relational Hub
            </div>
            <p className="text-[0.72rem] text-[#444440] leading-relaxed mb-3">
              28+ tables, polymorphic lookups, Business Unit hierarchy, and Field Security Profiles.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
                28+ Relational Tables
              </span>
              <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
                Oracle ERP Sync
              </span>
            </div>
          </div>
        </div>

        {/* Architecture Specs Footnote */}
        <div className="mt-3 pt-3 border-t border-[#e0e0d8] flex flex-wrap items-center justify-between gap-2 text-[0.65rem] font-mono-code text-[#444440]">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#121212]" />
            <span>Dual-phase staging blueprint eliminated RM4.2M/yr in licensing penalties</span>
          </span>
          <span className="text-[#6b6b63]">IOI Corporation Berhad</span>
        </div>
      </div>
    );
  }

  if (type === 'lark-bot-pipeline') {
    return (
      <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-5 sm:p-6 overflow-hidden">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e0e0d8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#121212]" />
            <span className="font-mono-code text-[0.7rem] uppercase tracking-wider text-[#121212] font-semibold">
              {title || 'Concentrix Lark Bot Engine & Realtime Telemetry Architecture'}
            </span>
          </div>
          <span className="font-mono-code text-[0.6rem] uppercase tracking-widest text-[#6b6b63]">
            Orchestration: CNX-OPS-V4
          </span>
        </div>

        {/* 3-Step Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
          <div className="p-4 bg-[#fdfdfc] border border-[#e0e0d8]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Ingestion Layer
              </span>
              <Bot className="w-3.5 h-3.5 text-[#121212]" />
            </div>
            <div className="font-serif-display italic text-lg text-[#121212] font-normal mb-1">
              Lark Open Platform Webhooks
            </div>
            <p className="text-[0.72rem] text-[#444440] leading-relaxed mb-3">
              Webhook event bus capturing multilingual tickets across 7 APAC regional markets with sub-second ingress.
            </p>
            <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
              7 Regional Markets
            </span>
          </div>

          <div className="p-4 bg-[#fdfdfc] border border-[#e0e0d8]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Intelligence Core
              </span>
              <Zap className="w-3.5 h-3.5 text-[#121212]" />
            </div>
            <div className="font-serif-display italic text-lg text-[#121212] font-normal mb-1">
              AI Builder & Decision Rules
            </div>
            <p className="text-[0.72rem] text-[#444440] leading-relaxed mb-3">
              Auto-classification across 120+ SOP categories, routing queries to 34 agents with direct documentation links.
            </p>
            <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
              -65% Handling Time
            </span>
          </div>

          <div className="p-4 bg-[#fdfdfc] border border-[#e0e0d8]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Executive Telemetry
              </span>
              <Server className="w-3.5 h-3.5 text-[#121212]" />
            </div>
            <div className="font-serif-display italic text-lg text-[#121212] font-normal mb-1">
              Lark Base & Power BI
            </div>
            <p className="text-[0.72rem] text-[#444440] leading-relaxed mb-3">
              Automated aggregation replacing 90% of manual queue spreadsheets with real-time leadership dashboards.
            </p>
            <span className="px-1.5 py-0.5 bg-[#f7f7f0] border border-[#e0e0d8] font-mono-code text-[0.6rem] text-[#121212]">
              -90% Manual Reporting
            </span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-[#e0e0d8] flex flex-wrap items-center justify-between gap-2 text-[0.65rem] font-mono-code text-[#444440]">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#121212]" />
            <span>Certified Lark Developer architecture scaling operations across 34 multilingual specialists</span>
          </span>
          <span className="text-[#6b6b63]">Concentrix Operations</span>
        </div>
      </div>
    );
  }

  if (type === 'plugin-audit-security') {
    return (
      <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-5 sm:p-6 overflow-hidden">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e0e0d8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#121212]" />
            <span className="font-mono-code text-[0.7rem] uppercase tracking-wider text-[#121212] font-semibold">
              {title || 'Tasek Cement GxP Approval Pipeline & Plugin Stage Gateways'}
            </span>
          </div>
          <span className="font-mono-code text-[0.6rem] uppercase tracking-widest text-[#6b6b63]">
            Audit Spec: TSK-RB-2025
          </span>
        </div>

        {/* 4 Pipeline Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 my-2">
          <div className="p-3 bg-[#fdfdfc] border border-[#e0e0d8]">
            <div className="text-[0.6rem] font-mono-code text-[#6b6b63] mb-1">Stage 10 • Pre-Validation</div>
            <div className="font-serif-display italic text-base text-[#121212] mb-1">C# Role Check</div>
            <p className="text-[0.7rem] text-[#444440] leading-snug">
              Ensures requester cannot approve self-submitted rebates; throws InvalidPluginExecutionException on breach.
            </p>
          </div>

          <div className="p-3 bg-[#fdfdfc] border border-[#e0e0d8]">
            <div className="text-[0.6rem] font-mono-code text-[#6b6b63] mb-1">Stage 20 • Pre-Operation</div>
            <div className="font-serif-display italic text-base text-[#121212] mb-1">Threshold Matrix</div>
            <p className="text-[0.7rem] text-[#444440] leading-snug">
              Calculates cumulative tier rebates, enforces 5-tier signing limits, and validates SAP ledger codes.
            </p>
          </div>

          <div className="p-3 bg-[#fdfdfc] border border-[#e0e0d8]">
            <div className="text-[0.6rem] font-mono-code text-[#6b6b63] mb-1">Stage 30 • Core Operation</div>
            <div className="font-serif-display italic text-base text-[#121212] mb-1">Dataverse Transaction</div>
            <p className="text-[0.7rem] text-[#444440] leading-snug">
              Atomic database commit with immutable audit logging and Field Security Profile encryption.
            </p>
          </div>

          <div className="p-3 bg-[#fdfdfc] border border-[#e0e0d8]">
            <div className="text-[0.6rem] font-mono-code text-[#6b6b63] mb-1">Stage 40 • Post-Operation</div>
            <div className="font-serif-display italic text-base text-[#121212] mb-1">Actionable Approvals</div>
            <p className="text-[0.7rem] text-[#444440] leading-snug">
              Dispatches Outlook actionable cards for instant 1-click approvals, cutting cycle from 3 days to 15 mins.
            </p>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-[#e0e0d8] flex flex-wrap items-center justify-between gap-2 text-[0.65rem] font-mono-code text-[#444440]">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#121212]" />
            <span>Zero-drift statutory compliance with 100% audit trail adherence</span>
          </span>
          <span className="text-[#6b6b63]">Tasek Cement / IOI Building Materials</span>
        </div>
      </div>
    );
  }

  return null;
};

interface CodeSnippetViewerProps {
  language: string;
  filename: string;
  code: string;
  caption?: string;
}

export const CodeSnippetViewer: React.FC<CodeSnippetViewerProps> = ({
  language,
  filename,
  code,
  caption,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#121212] text-[#fdfdfc] border border-[#121212] overflow-hidden my-3">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e1e1e] border-b border-[#2e2e2e]">
        <div className="flex items-center gap-2">
          <Code2 className="w-3.5 h-3.5 text-[#6b6b63]" />
          <span className="font-mono-code text-xs text-[#e0e0d8]">{filename}</span>
          <span className="text-[0.6rem] font-mono-code uppercase px-1.5 py-0.2 bg-[#2e2e2e] text-[#6b6b63]">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[0.65rem] font-mono-code text-[#6b6b63] hover:text-[#fdfdfc] transition-colors cursor-pointer"
          title="Copy code snippet"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <pre className="p-4 text-[0.72rem] font-mono-code leading-relaxed overflow-x-auto text-[#d4d4d0] selection:bg-[#333333]">
        <code>{code}</code>
      </pre>

      {caption && (
        <div className="px-4 py-2 bg-[#181818] border-t border-[#262626] text-[0.65rem] font-mono-code text-[#6b6b63]">
          {caption}
        </div>
      )}
    </div>
  );
};
