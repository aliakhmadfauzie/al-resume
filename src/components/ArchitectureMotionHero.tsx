import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MIGRATION_SLICES, CORE_PROJECTS } from '../data/portfolioData';
import { MigrationSlice, ProjectItem } from '../types';
import { MonitorPlay, ArrowUpRight } from 'lucide-react';

interface ArchitectureMotionHeroProps {
  onSelectSlice: (slice: MigrationSlice) => void;
  onSelectProject: (project: ProjectItem) => void;
  onLaunchDemo: (demoId: string) => void;
}

interface CodeTab {
  id: string;
  filename: string;
  projectId: string;
  demoId: string;
  demoLabel: string;
  terminalCmd: string;
  terminalLine1: string;
  terminalLine2: string;
  terminalLine3: string;
  lines: { num: number; content: React.ReactNode }[];
}

const CODE_TABS: CodeTab[] = [
  {
    id: 'domino',
    filename: 'MainDB_Router.ts',
    projectId: 'ioi-acidchem-she-platform',
    demoId: 'she-matrix',
    demoLabel: 'Simulate IOI Plant Platform',
    terminalCmd: '> python3 _validate_pa.py --slices A-F',
    terminalLine1: 'Consolidating 365+ Lotus Domino DBs across 28 BUs',
    terminalLine2: 'Connected to SharePoint MainDB & Dataverse',
    terminalLine3: 'All 878 Canvas YAML screens operational ($960K/yr saved)',
    lines: [
      {
        num: 1,
        content: (
          <>
            <span className="text-[#fb923c]">const</span>{' '}
            <span className="text-[#f8fafc]">powerPlatform</span> ={' '}
            <span className="text-[#fbbf24]">require</span>(
            <span className="text-[#4ade80]">&apos;@m365/maindb-engine&apos;</span>);
          </>
        )
      },
      {
        num: 2,
        content: (
          <>
            <span className="text-[#fb923c]">const</span>{' '}
            <span className="text-[#f8fafc]">estate</span> ={' '}
            <span className="text-[#fbbf24]">initCutover</span>({'{ '}
            <span className="text-[#cbd5e1]">dbs:</span>{' '}
            <span className="text-[#fb923c]">365</span>,{' '}
            <span className="text-[#cbd5e1]">bus:</span>{' '}
            <span className="text-[#fb923c]">28</span> {'}'});
          </>
        )
      },
      { num: 3, content: <></> },
      {
        num: 4,
        content: (
          <>
            <span className="text-[#f8fafc]">estate</span>.
            <span className="text-[#fbbf24]">use</span>(
            <span className="text-[#f8fafc]">powerPlatform</span>.
            <span className="text-[#fbbf24]">standardConnectorGuard</span>());
          </>
        )
      },
      { num: 5, content: <></> },
      {
        num: 6,
        content: (
          <>
            <span className="text-[#f8fafc]">estate</span>.
            <span className="text-[#fbbf24]">post</span>(
            <span className="text-[#4ade80]">&apos;/api/cutover/maindb&apos;</span>,{' '}
            <span className="text-[#fb923c]">async</span> (
            <span className="text-[#cbd5e1]">req, res</span>) =&gt; {'{'}
          </>
        )
      },
      {
        num: 7,
        content: (
          <>
            {'  '}
            <span className="text-[#fb923c]">const</span>{' '}
            <span className="text-[#f8fafc]">audit</span> ={' '}
            <span className="text-[#fb923c]">await</span>{' '}
            <span className="text-[#fbbf24]">verifyYamlAst</span>(
            <span className="text-[#fb923c]">878</span>);
          </>
        )
      },
      {
        num: 8,
        content: (
          <>
            {'  '}
            <span className="text-[#f8fafc]">res</span>.
            <span className="text-[#fbbf24]">json</span>({'{ '}
            <span className="text-[#cbd5e1]">zeroDowntime:</span>{' '}
            <span className="text-[#fb923c]">true</span>,{' '}
            <span className="text-[#cbd5e1]">saved:</span>{' '}
            <span className="text-[#4ade80]">&apos;$960K/yr&apos;</span> {'}'});
          </>
        )
      },
      {
        num: 9,
        content: <>{'});'}</>
      },
      { num: 10, content: <></> },
      {
        num: 11,
        content: (
          <>
            <span className="text-[#f8fafc]">estate</span>.
            <span className="text-[#fbbf24]">listen</span>(
            <span className="text-[#4ade80]">&apos;Slices_A_to_F&apos;</span>, () =&gt; {'{'}
          </>
        )
      },
      {
        num: 12,
        content: (
          <>
            {'  '}
            <span className="text-[#f8fafc]">console</span>.
            <span className="text-[#fbbf24]">log</span>(
            <span className="text-[#4ade80]">&apos;100% Audit Continuity Verified&apos;</span>);
          </>
        )
      },
      {
        num: 13,
        content: <>{'});'}</>
      }
    ]
  },
  {
    id: 'ai-gate',
    filename: 'ai_gateway.py',
    projectId: 'ats-automation',
    demoId: 'ats-automation',
    demoLabel: 'Test Q1–Q10 AI Gate',
    terminalCmd: '> python3 verify_pdfs.py --ssot-firewall',
    terminalLine1: 'Tri-Engine Router: Gemini · Groq Llama-3.3 · OpenCode',
    terminalLine2: 'SSOT Regex Firewall: 0% metric hallucination drift',
    terminalLine3: 'Q1-Q10 Gates Passed · Playwright v6.0 Ready',
    lines: [
      {
        num: 1,
        content: (
          <>
            <span className="text-[#fb923c]">from</span>{' '}
            <span className="text-[#f8fafc]">tri_engine</span>{' '}
            <span className="text-[#fb923c]">import</span>{' '}
            <span className="text-[#fbbf24]">route_llm, verify_ssot</span>
          </>
        )
      },
      {
        num: 2,
        content: (
          <>
            <span className="text-[#fb923c]">import</span>{' '}
            <span className="text-[#f8fafc]">fcntl, hashlib</span>
          </>
        )
      },
      { num: 3, content: <></> },
      {
        num: 4,
        content: (
          <>
            <span className="text-[#fb923c]">def</span>{' '}
            <span className="text-[#fbbf24]">execute_governed_pipeline</span>(
            <span className="text-[#cbd5e1]">payload</span>):
          </>
        )
      },
      {
        num: 5,
        content: (
          <>
            {'  '}
            <span className="text-[#fb923c]">with</span>{' '}
            <span className="text-[#fbbf24]">open</span>(
            <span className="text-[#4ade80]">&apos;.usage_stats.lock&apos;</span>) <span className="text-[#fb923c]">as</span> lock:
          </>
        )
      },
      {
        num: 6,
        content: (
          <>
            {'    '}
            <span className="text-[#f8fafc]">fcntl</span>.
            <span className="text-[#fbbf24]">flock</span>(lock,{' '}
            <span className="text-[#fb923c]">fcntl.LOCK_EX</span>)
          </>
        )
      },
      {
        num: 7,
        content: (
          <>
            {'    '}
            <span className="text-[#f8fafc]">draft</span> ={' '}
            <span className="text-[#fbbf24]">route_llm</span>(
            <span className="text-[#4ade80]">&apos;gemini-2.5-pro&apos;</span>, payload)
          </>
        )
      },
      {
        num: 8,
        content: (
          <>
            {'    '}
            <span className="text-[#fb923c]">assert</span>{' '}
            <span className="text-[#fbbf24]">verify_ssot</span>(draft,{' '}
            <span className="text-[#4ade80]">&apos;Q1_TO_Q10&apos;</span>)
          </>
        )
      },
      {
        num: 9,
        content: (
          <>
            {'    '}
            <span className="text-[#fb923c]">return</span> {'{ '}
            <span className="text-[#4ade80]">&apos;status&apos;</span>:{' '}
            <span className="text-[#4ade80]">&apos;VERIFIED&apos;</span>,{' '}
            <span className="text-[#4ade80]">&apos;drift&apos;</span>:{' '}
            <span className="text-[#fb923c]">0.0</span> {'}'}
          </>
        )
      }
    ]
  },
  {
    id: 'finops',
    filename: 'rebate_engine.ts',
    projectId: 'putri-garmenthub-erp',
    demoId: 'rebate',
    demoLabel: 'Run Rebate & ERP Simulator',
    terminalCmd: '> npm run verify:finops-governance',
    terminalLine1: 'Tasek Statutory Ceiling: RM 0.20/tonne enforced',
    terminalLine2: 'Putri GarmentHub 4-Pocket Cash Sharding synced',
    terminalLine3: 'Approval cycle reduced from 14 Days -> 15 Minutes',
    lines: [
      {
        num: 1,
        content: (
          <>
            <span className="text-[#fb923c]">export const</span>{' '}
            <span className="text-[#fbbf24]">evaluateRebate</span> = (
            <span className="text-[#cbd5e1]">rate: number, tonnes: number</span>) =&gt; {'{'}
          </>
        )
      },
      {
        num: 2,
        content: (
          <>
            {'  '}
            <span className="text-[#fb923c]">const</span>{' '}
            <span className="text-[#f8fafc]">STATUTORY_CAP</span> ={' '}
            <span className="text-[#fb923c]">0.20</span>;
          </>
        )
      },
      {
        num: 3,
        content: (
          <>
            {'  '}
            <span className="text-[#fb923c]">const</span>{' '}
            <span className="text-[#f8fafc]">cappedRate</span> ={' '}
            <span className="text-[#f8fafc]">Math</span>.
            <span className="text-[#fbbf24]">min</span>(rate, STATUTORY_CAP);
          </>
        )
      },
      {
        num: 4,
        content: (
          <>
            {'  '}
            <span className="text-[#fb923c]">return</span> {'{'}
          </>
        )
      },
      {
        num: 5,
        content: (
          <>
            {'    '}
            <span className="text-[#cbd5e1]">payoutRM:</span> cappedRate * tonnes,
          </>
        )
      },
      {
        num: 6,
        content: (
          <>
            {'    '}
            <span className="text-[#cbd5e1]">turnaround:</span>{' '}
            <span className="text-[#4ade80]">&apos;15 mins&apos;</span>,
          </>
        )
      },
      {
        num: 7,
        content: (
          <>
            {'    '}
            <span className="text-[#cbd5e1]">dataverseIsolated:</span>{' '}
            <span className="text-[#fb923c]">true</span>
          </>
        )
      },
      {
        num: 8,
        content: <>{'  };'}</>
      },
      {
        num: 9,
        content: <>{'};'}</>
      }
    ]
  },
  {
    id: 'ops-lead',
    filename: 'team_sla_governance.ts',
    projectId: 'concentrix-team-lead',
    demoId: 'sla-telemetry',
    demoLabel: 'Review BPO SLA Governance',
    terminalCmd: '> node _audit_team_kpi.js --headcount 34 --pods 7',
    terminalLine1: 'Operation Team Manager: 34 direct reports across 7 language pods',
    terminalLine2: 'Pods: Indonesian, CN Mainland, Korean, Japanese, English, Thai, Vietnamese',
    terminalLine3: 'Contractual SLA: >98% sustained compliance | AHT: -25% via DMAIC',
    lines: [
      {
        num: 1,
        content: (
          <>
            <span className="text-[#fb923c]">export interface</span>{' '}
            <span className="text-[#fbbf24]">OperationsManagerKPI</span> {'{'}
          </>
        )
      },
      {
        num: 2,
        content: (
          <>
            {'  '}
            <span className="text-[#cbd5e1]">directReports:</span>{' '}
            <span className="text-[#fb923c]">34</span>; <span className="text-[#64748b]">// Scaled 380% (9 to 34)</span>
          </>
        )
      },
      {
        num: 3,
        content: (
          <>
            {'  '}
            <span className="text-[#cbd5e1]">languagePodsHandled:</span>{' '}
            <span className="text-[#fb923c]">7</span>; <span className="text-[#64748b]">// Indo, CN Mainland, KR, JP, EN, TH, VN</span>
          </>
        )
      },
      {
        num: 4,
        content: (
          <>
            {'  '}
            <span className="text-[#cbd5e1]">contractualSLA:</span>{' '}
            <span className="text-[#4ade80]">&apos;&gt;98% Sustained&apos;</span>;
          </>
        )
      },
      {
        num: 5,
        content: (
          <>
            {'  '}
            <span className="text-[#cbd5e1]">sixSigmaOptimization:</span>{' '}
            <span className="text-[#4ade80]">&apos;DMAIC -25% AHT&apos;</span>;
          </>
        )
      },
      {
        num: 6,
        content: (
          <>
            {'  '}
            <span className="text-[#cbd5e1]">leadershipHonors:</span> [
            <span className="text-[#4ade80]">&apos;Hang Tuah Award&apos;</span>,{' '}
            <span className="text-[#4ade80]">&apos;Accenture Diamond&apos;</span>];
          </>
        )
      },
      {
        num: 7,
        content: <>{'}'}</>
      }
    ]
  }
];

/**
 * Replicates the right-hand multi-widget developer bento cluster from the Adrian Knox reference:
 * 1. Top-Left: Syntax-Highlighted Code Window with macOS dots & interactive tabs
 * 2. Bottom-Left: Overlapping Live Terminal Window (`> _validate_pa.py`) + Slice A-F quick triggers
 * 3. Top-Right: `System Overview` Live Telemetry card with 3 copper-orange area sparklines
 * 4. Bottom-Right: Circular SVG Donut Gauge (`98%` Standard Connector License Efficiency)
 */
export const ArchitectureMotionHero: React.FC<ArchitectureMotionHeroProps> = ({
  onSelectSlice,
  onSelectProject,
  onLaunchDemo
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('ops-lead');
  const [telemetryMode, setTelemetryMode] = useState<'operations' | 'architecture'>('operations');
  const currentTab = CODE_TABS.find((t) => t.id === activeTabId) || CODE_TABS[0];

  const handleOpenLinkedProject = () => {
    const found = CORE_PROJECTS.find((p) => p.id === currentTab.projectId);
    if (found) onSelectProject(found);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between gap-4">
      {/* Subtle Circuit Board Traces & Glowing Copper Nodes Behind Widgets */}
      <div className="pointer-events-none absolute -inset-4 z-0 overflow-hidden opacity-60">
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none">
          <path
            d="M20 80 H140 L170 110 H260"
            stroke="rgba(249, 115, 22, 0.22)"
            strokeWidth="1"
          />
          <circle cx="20" cy="80" r="3" fill="#f97316" />
          <circle cx="170" cy="110" r="2.5" fill="#fb923c" />
          <path
            d="M40 310 H120 L150 280 H230"
            stroke="rgba(249, 115, 22, 0.18)"
            strokeWidth="1"
          />
          <circle cx="40" cy="310" r="2.5" fill="#f97316" />
          <path
            d="M580 60 H480 L450 90 H390"
            stroke="rgba(249, 115, 22, 0.2)"
            strokeWidth="1"
          />
          <circle cx="580" cy="60" r="3" fill="#fb923c" />
        </svg>
      </div>

      {/* Main 12-Column Asymmetric Widget Cluster */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
        {/* LEFT 7 COLUMNS: Code Editor Window + Overlapping Terminal */}
        <div className="sm:col-span-7 flex flex-col gap-3">
          {/* Code Editor Window */}
          <div className="rounded-[var(--radius-md)] bg-[#101218]/95 border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] shadow-2xl overflow-hidden transition-colors">
            {/* Window Top Bar */}
            <div className="px-3.5 py-2.5 border-b border-[var(--border-subtle)] bg-[#15171f] flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80" />
                <span className="text-[11px] font-mono text-[var(--text-secondary)] ml-2">
                  {currentTab.filename}
                </span>
              </div>

              {/* Interactive File Switcher with Badges */}
              <div className="flex items-center gap-1">
                {CODE_TABS.map((tab) => {
                  const isOps = tab.id === 'ops-lead';
                  const isSelected = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTabId(tab.id);
                        if (isOps) setTelemetryMode('operations');
                      }}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer flex items-center space-x-1 ${
                        isSelected
                          ? isOps
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold shadow-[0_0_8px_rgba(34,197,94,0.2)]'
                            : 'bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)] font-bold'
                          : isOps
                          ? 'text-emerald-400/80 hover:text-emerald-300 border border-emerald-500/20 bg-emerald-500/5'
                          : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {isOps && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                      <span>{isOps ? 'operations.ts' : tab.id}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Code Lines Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.14 }}
                className="p-4 font-mono text-[11px] leading-[1.65] overflow-x-auto select-none"
              >
                {currentTab.lines.map((line) => (
                  <div key={line.num} className="flex items-pre whitespace-pre">
                    <span className="w-6 text-[var(--text-tertiary)]/60 text-right pr-3 select-none">
                      {line.num}
                    </span>
                    <span className="text-[var(--text-primary)]">{line.content}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Quick Action Bar Inside Code Editor */}
            <div className="px-4 py-2 border-t border-[var(--border-subtle)] bg-[#13151c] flex items-center justify-between text-[11px] font-mono">
              <button
                type="button"
                onClick={handleOpenLinkedProject}
                className="text-[var(--text-secondary)] hover:text-[var(--text-accent)] inline-flex items-center space-x-1 transition-colors cursor-pointer"
              >
                <span>Inspect Case Study</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--text-accent)]" />
              </button>
              <button
                type="button"
                onClick={() => onLaunchDemo(currentTab.demoId)}
                className="text-[var(--text-accent)] hover:underline inline-flex items-center space-x-1 font-semibold cursor-pointer"
              >
                <MonitorPlay className="w-3 h-3" />
                <span>{currentTab.demoLabel}</span>
              </button>
            </div>
          </div>

          {/* Bottom Overlapping Terminal Window (`> npm run dev` equivalent) */}
          <div className="sm:ml-6 rounded-[var(--radius-md)] bg-[#0c0d12]/95 border border-[var(--border-subtle)] p-4 shadow-2xl font-mono text-[11px] space-y-1.5">
            <div className="text-[var(--text-tertiary)]">{currentTab.terminalCmd}</div>
            <div className="text-[var(--text-primary)] font-medium">
              {currentTab.terminalLine1}
            </div>
            <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span className="text-[#4ade80]">✓</span>
              <span>{currentTab.terminalLine2}</span>
            </div>
            <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span className="text-[#4ade80]">✓</span>
              <span>{currentTab.terminalLine3}</span>
            </div>

            {/* Interactive Domain Slice Quick-Triggers inside Terminal Prompt */}
            <div className="pt-2 mt-2 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] text-[var(--text-accent)] mr-1">&gt; slices:</span>
              {MIGRATION_SLICES.map((slice) => (
                <button
                  key={slice.id}
                  type="button"
                  onClick={() => onSelectSlice(slice)}
                  className="px-2 py-0.5 rounded bg-[var(--bg-surface)] hover:bg-[var(--interactive-subtle-bg)] text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-accent)] border border-[var(--border-subtle)] hover:border-[var(--interactive-subtle-border)] transition-colors cursor-pointer"
                  title={`${slice.title} (${slice.appCount} Rebuilt Apps)`}
                >
                  Slice {slice.letter} ({slice.appCount})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT 5 COLUMNS: System Overview Sparklines + Donut Efficiency Gauge */}
        <div className="sm:col-span-5 flex flex-col gap-4">
          {/* Top-Right Widget: System Overview Card */}
          <div className="rounded-[var(--radius-md)] bg-[#12141b]/95 border border-[var(--border-subtle)] p-4 shadow-2xl space-y-3.5">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
              <span className="text-xs font-semibold text-[var(--text-primary)]">
                System Overview
              </span>
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-[#4ade80]">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span>Live</span>
              </span>
            </div>

            {/* Sparkline Row 1: MIGRATED APPS */}
            <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)]/60 pb-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                  MIGRATED APPS
                </div>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <span className="text-lg font-bold font-mono text-[var(--text-primary)]">
                    365+
                  </span>
                  <span className="text-[10px] font-mono text-[#4ade80]">+28 BUs</span>
                </div>
              </div>
              <svg className="w-24 h-8 overflow-visible" viewBox="0 0 100 32">
                <defs>
                  <linearGradient id="spark1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 26 L18 22 L35 25 L52 15 L70 18 L85 8 L100 4 L100 32 L0 32 Z"
                  fill="url(#spark1)"
                />
                <path
                  d="M0 26 L18 22 L35 25 L52 15 L70 18 L85 8 L100 4"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Sparkline Row 2: APPROVAL TURNAROUND */}
            <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)]/60 pb-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                  APPROVAL CYCLE
                </div>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <span className="text-lg font-bold font-mono text-[var(--text-primary)]">
                    15m
                  </span>
                  <span className="text-[10px] font-mono text-[#4ade80]">-98.9%</span>
                </div>
              </div>
              <svg className="w-24 h-8 overflow-visible" viewBox="0 0 100 32">
                <path
                  d="M0 24 L20 20 L40 22 L60 14 L80 16 L100 6 L100 32 L0 32 Z"
                  fill="url(#spark1)"
                />
                <path
                  d="M0 24 L20 20 L40 22 L60 14 L80 16 L100 6"
                  fill="none"
                  stroke="#fb923c"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Sparkline Row 3: SLA & AUDIT COMPLIANCE */}
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                  AUDIT &amp; SLA
                </div>
                <div className="flex items-baseline space-x-1.5 mt-0.5">
                  <span className="text-lg font-bold font-mono text-[var(--text-primary)]">
                    &gt;98%
                  </span>
                  <span className="text-[10px] font-mono text-[#4ade80]">Sustained SLA</span>
                </div>
              </div>
              <svg className="w-24 h-8 overflow-visible" viewBox="0 0 100 32">
                <path
                  d="M0 22 L22 18 L42 20 L64 11 L82 13 L100 5 L100 32 L0 32 Z"
                  fill="url(#spark1)"
                />
                <path
                  d="M0 22 L22 18 L42 20 L64 11 L82 13 L100 5"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Bottom-Right Widget: Circular Donut Gauge (Replicating CPU USAGE 42% widget) */}
          <div className="rounded-[var(--radius-md)] bg-[#12141b]/95 border border-[var(--border-subtle)] p-4 shadow-2xl flex flex-col items-center justify-center relative">
            <div className="w-full flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] mb-2">
              <span>STANDARD CONNECTOR EFFICIENCY</span>
              <span className="text-[var(--text-accent)]">$960K/YR</span>
            </div>

            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#232632"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="url(#gaugeGrad)"
                  strokeWidth="8"
                  strokeDasharray="238.76"
                  strokeDashoffset="38"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-bold font-mono text-[var(--text-primary)]">
                  98%
                </span>
                <span className="text-[9px] font-mono text-[var(--text-tertiary)]">
                  878 Screens
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureMotionHero;
