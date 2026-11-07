import React from 'react';
import { ProjectItem, MigrationSlice } from '../../types';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
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
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="project-detail-drawer-container"
        className="relative w-full max-w-2xl h-full bg-black/95 backdrop-blur-2xl border-l border-white/10 overflow-hidden flex flex-col animate-in slide-in-from-right duration-300 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#2997ff] font-mono font-bold text-sm">
              {isMigrationSlice ? (project as MigrationSlice).letter : <Workflow className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#2997ff] font-semibold">
                {isMigrationSlice ? `IOI Domino Migration • Slice ${(project as MigrationSlice).letter}` : 'Enterprise Architecture Case Study'}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight mt-0.5">{itemTitle}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Subtitle / Role */}
          <div className="space-y-2">
            {'subtitle' in project && project.subtitle && (
              <p className="text-xs font-semibold text-[#2997ff] font-mono">{project.subtitle}</p>
            )}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-neutral-300 font-mono bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                <strong className="text-white">Role:</strong> {project.role}
              </span>
              {'date' in project && (
                <span className="text-xs font-mono text-neutral-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                  {project.date}
                </span>
              )}
              {isMigrationSlice && (
                <span className="text-xs font-mono text-[#30d158] bg-[#30d158]/10 px-3 py-1 rounded-full border border-[#30d158]/20 font-semibold">
                  {(project as MigrationSlice).appCount} Applications Rebuilt
                </span>
              )}
            </div>
          </div>

          {/* System Architecture Showcase Box */}
          <div className="w-full h-44 rounded-2xl apple-card bg-white/[0.02] flex flex-col items-center justify-center overflow-hidden relative group">
            <Layers className="w-10 h-10 text-neutral-600 group-hover:text-[#2997ff] transition-colors mb-2 z-10" />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest z-10">System Architecture Blueprint</span>
            <span className="text-xs text-neutral-200 mt-1 font-mono font-medium z-10">{itemTitle}</span>
          </div>

          {/* Tools Grid */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">Technology Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((t, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Challenge - Strategy - Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            
            {/* Before / Challenge */}
            <div className="apple-card p-5 rounded-2xl space-y-2">
              <div className="flex items-center space-x-1.5 text-red-400 font-bold text-xs uppercase tracking-wide font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{problemText}</p>
            </div>

            {/* Strategy / Solution */}
            <div className="apple-card p-5 rounded-2xl space-y-2">
              <div className="flex items-center space-x-1.5 text-[#2997ff] font-bold text-xs uppercase tracking-wide font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]"></span>
                <span>The Strategy</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{solutionText}</p>
            </div>
          </div>

          {/* Business Impact Card */}
          <div className="apple-card p-5 rounded-2xl space-y-2">
            <div className="flex items-center space-x-1.5 text-[#30d158] font-bold text-xs uppercase tracking-wide font-mono">
              <TrendingUp className="w-4 h-4" />
              <span>Measurable Business Results</span>
            </div>
            <p className="text-sm font-semibold text-white leading-relaxed">{impactText}</p>
          </div>

          {/* Additional details if available */}
          {'deliverables' in project && project.deliverables && (
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#2997ff] font-semibold">Key Enterprise Deliverables</h4>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#30d158] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isMigrationSlice && (project as MigrationSlice).keyHighlights && (
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#bf5af2] font-semibold">Key Architectural Highlights</h4>
              <div className="flex flex-wrap gap-1.5">
                {(project as MigrationSlice).keyHighlights.map((kh, idx) => (
                  <span key={idx} className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-neutral-200 border border-white/10">
                    ✓ {kh}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer with Demo Trigger */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="apple-btn-secondary text-xs !py-2 !px-4"
          >
            Back
          </button>

          {'liveDemoId' in project && project.liveDemoId && onLaunchDemo && (
            <button
              onClick={() => {
                onClose();
                onLaunchDemo(project.liveDemoId!);
              }}
              className="apple-btn-primary text-xs !py-2 !px-4 flex items-center space-x-1.5"
            >
              <MonitorPlay className="w-4 h-4" />
              <span>Launch Simulator</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
