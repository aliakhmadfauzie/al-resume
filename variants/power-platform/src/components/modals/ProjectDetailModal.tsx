import React from 'react';
import { ProjectItem, MigrationSlice } from '../../types';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Code2,
  Workflow,
  MonitorPlay
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | MigrationSlice | null;
  isOpen: boolean;
  onClose: () => void;
  onLaunchDemo?: (demoId: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onLaunchDemo
}) => {
  if (!isOpen || !project) return null;

  const isMigrationSlice = 'letter' in project;
  const itemTitle = project.title;
  const problemText = project.problem;
  const solutionText = project.solution;
  const impactText = project.impact;
  const tools = project.tools;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="project-detail-drawer-container"
        className="relative w-full max-w-2xl h-full bg-[#161b22] border-l border-[#282a2e] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#282a2e] bg-[#111318]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#0078d4]/20 border border-[#0078d4]/40 flex items-center justify-center text-[#a3c9ff] font-mono font-bold shadow-[0_0_15px_rgba(0,120,212,0.2)]">
              {isMigrationSlice ? (project as MigrationSlice).letter : <Workflow className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#00dbe7] font-semibold">
                {isMigrationSlice ? `IOI Domino Migration • Slice ${(project as MigrationSlice).letter}` : 'Enterprise Automation Solution'}
              </span>
              <h2 className="text-lg font-bold text-white tracking-tight leading-tight mt-0.5">{itemTitle}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1e2024] hover:bg-[#282a2e] text-[#c0c7d4] hover:text-white border border-[#282a2e] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#111318]/50">
          
          {/* Subtitle / Role */}
          <div className="space-y-2">
            {'subtitle' in project && project.subtitle && (
              <p className="text-base font-semibold text-[#a3c9ff]">{project.subtitle}</p>
            )}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#c0c7d4] font-medium bg-[#1e2024] px-3 py-1 rounded-lg border border-[#282a2e]">
                <strong className="text-white">Role:</strong> {project.role}
              </span>
              {'date' in project && (
                <span className="text-xs font-mono text-[#c0c7d4] bg-[#1e2024] px-3 py-1 rounded-lg border border-[#282a2e]">
                  {project.date}
                </span>
              )}
              {isMigrationSlice && (
                <span className="text-xs font-mono text-[#00dbe7] bg-[#0078d4]/20 px-3 py-1 rounded-lg border border-[#0078d4]/40 font-bold">
                  {(project as MigrationSlice).appCount} Applications Rebuilt
                </span>
              )}
            </div>
          </div>

          {/* Interactive Mockup Placeholder */}
          <div className="w-full h-48 sm:h-64 rounded-xl bg-[#1a1c20] border border-[#282a2e] flex flex-col items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0078d4]/10 to-[#5c2d91]/10 group-hover:opacity-100 transition-opacity"></div>
            <Layers className="w-12 h-12 text-[#282a2e] group-hover:text-[#0078d4] transition-colors mb-2 z-10" />
            <span className="text-[10px] font-mono text-[#555962] uppercase tracking-widest z-10">Interactive Prototype / System Mockup</span>
            <span className="text-xs text-[#c0c7d4] mt-2 font-medium z-10">{itemTitle} Visual Architecture</span>
          </div>

          {/* Tools Grid */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#c0c7d4] font-semibold">Technology Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((t, idx) => (
                <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1e2024] text-white border border-[#282a2e]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 3-Column Problem - Solution - Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            {/* Before / Problem */}
            <div className="bg-[#1a1c20] p-6 rounded-2xl border border-red-500/20 space-y-4">
              <div className="flex items-center space-x-2 text-red-400 font-bold text-sm uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span>Before: The Challenge</span>
              </div>
              <p className="text-sm text-[#e2e2e8] leading-relaxed">{problemText}</p>
            </div>

            {/* After / Solution */}
            <div className="bg-[#1a1c20] p-6 rounded-2xl border border-[#0078d4]/30 space-y-4 shadow-[0_0_15px_rgba(0,120,212,0.1)]">
              <div className="flex items-center space-x-2 text-[#a3c9ff] font-bold text-sm uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0078d4]"></span>
                <span>After: Architected Solution</span>
              </div>
              <p className="text-sm text-[#e2e2e8] leading-relaxed">{solutionText}</p>
            </div>
          </div>

          <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#00dbe7]/30 space-y-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-[0_0_15px_rgba(0,219,231,0.1)]">
            <div className="flex items-center space-x-2 text-[#00dbe7] font-bold text-sm uppercase tracking-wide shrink-0">
              <TrendingUp className="w-5 h-5" />
              <span>Measurable Impact</span>
            </div>
            <p className="text-sm text-white font-bold leading-relaxed">{impactText}</p>
          </div>

          {/* Metrics if available */}
          {'impactMetrics' in project && project.impactMetrics && (
            <div className="space-y-3 pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">Key Quantified Outcomes</h4>
              <div className="grid grid-cols-3 gap-3">
                {project.impactMetrics.map((m, idx) => (
                  <div key={idx} className="bg-[#1e2024] p-3 rounded-xl border border-[#282a2e] text-center">
                    <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a3c9ff] to-[#00dbe7] font-mono">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-[#c0c7d4] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Details or Examples */}
          {'technicalDetails' in project && project.technicalDetails && (
            <div className="pt-2">
              <details className="group bg-[#1a1c20]/50 rounded-xl border border-[#282a2e] overflow-hidden transition-all hover:bg-[#1a1c20]">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none outline-none">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-[#dab9ff]" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#dab9ff] font-semibold">Deep Technical Specifications</span>
                  </div>
                  <div className="text-[#c0c7d4] group-open:rotate-180 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </summary>
                <div className="p-4 pt-0 border-t border-[#282a2e]/50">
                  <ul className="space-y-2 mt-3">
                    {project.technicalDetails.map((td, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#e2e2e8] bg-[#1e2024] p-3 rounded-lg border border-[#282a2e]">
                        <CheckCircle2 className="w-4 h-4 text-[#0078d4] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{td}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          )}

          {isMigrationSlice && (project as MigrationSlice).examples && (
            <div className="space-y-3 pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#a3c9ff] font-semibold">Representative Applications in Slice</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(project as MigrationSlice).examples.map((ex, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-white bg-[#1a1c20] p-2.5 rounded-lg border border-[#282a2e]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00dbe7]"></div>
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isMigrationSlice && (project as MigrationSlice).keyHighlights && (
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#dab9ff] font-semibold">Key Architectural Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {(project as MigrationSlice).keyHighlights.map((kh, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-[#5c2d91]/20 text-[#dab9ff] border border-[#5c2d91]/40 font-medium">
                    ✓ {kh}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer with Demo Trigger */}
        <div className="px-6 py-4 border-t border-[#282a2e] bg-[#111318] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-[#c0c7d4] hover:text-white bg-[#1a1c20] border border-[#282a2e]"
          >
            Back
          </button>

          {'liveDemoId' in project && project.liveDemoId && onLaunchDemo && (
            <button
              onClick={() => {
                onClose();
                onLaunchDemo(project.liveDemoId!);
              }}
              className="flex items-center space-x-2 px-5 py-2 rounded-lg text-xs font-semibold bg-[#0078d4] text-white hover:bg-[#0086ea] shadow-md shadow-[#0078d4]/30"
            >
              <MonitorPlay className="w-4 h-4" />
              <span>Launch Live Simulation</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
