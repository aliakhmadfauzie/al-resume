import React from 'react';
import { ProjectItem, ProfileMode } from '../types';
import { ArchitectureArtifact } from './ArchitectureArtifact';
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

interface FlagshipShowcaseProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  currentMode?: ProfileMode;
}

export const FlagshipShowcase: React.FC<FlagshipShowcaseProps> = ({
  projects,
  onSelectProject,
  currentMode = 'full',
}) => {
  if (!projects || projects.length === 0) return null;

  const isArch = currentMode === 'architecture' || currentMode === 'architect';
  const isOps = currentMode === 'operations';

  const getSectionTitle = () => {
    if (isArch) return 'Anchor Case Studies • Enterprise Modernization & Dataverse Architecture';
    if (isOps) return 'Anchor Case Studies • High-Volume BPO Telemetry & Lark Workflow Automation';
    return 'Anchor Case Studies • Enterprise Modernization & BPO Architecture';
  };

  return (
    <div className="space-y-12 mb-16">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#e0e0d8]">
        <div className="flex items-center gap-2">
          <Sparkles className={`w-4 h-4 ${isOps ? 'text-[#0f766e]' : 'text-[#1d4ed8]'}`} />
          <span className="font-mono-code text-xs uppercase tracking-wider text-[#121212] font-semibold">
            {getSectionTitle()}
          </span>
        </div>
        <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
          {projects.length} Deep-Dive {projects.length === 1 ? 'Engagement' : 'Engagements'}
        </span>
      </div>

      {projects.map((project, idx) => (
        <div
          key={project.id}
          id={`flagship-case-study-${project.id}`}
          className="bg-[#fdfdfc] border border-[#121212] p-6 sm:p-10 relative overflow-hidden transition-all shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        >
          {/* Top Flagship Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#e0e0d8]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#121212] text-[#fdfdfc] text-[0.65rem] font-mono-code uppercase px-2.5 py-1 tracking-wider font-semibold">
                Flagship Case #{idx + 1}
              </span>
              <span className="bg-[#f7f7f0] border border-[#e0e0d8] text-[#121212] text-[0.65rem] font-mono-code uppercase px-2 py-0.5 tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono-code text-[#6b6b63]">
                {project.timeline}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 font-mono-code text-xs">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`flagship-demo-btn-${project.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="min-h-[40px] sm:min-h-[36px] px-3.5 py-2 inline-flex items-center gap-1.5 bg-[#f7f7f0] hover:bg-[#e0e0d8] border border-[#e0e0d8] text-[#121212] font-semibold uppercase text-[0.68rem] tracking-wider transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`flagship-repo-btn-${project.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="min-h-[40px] sm:min-h-[36px] px-3.5 py-2 inline-flex items-center gap-1.5 bg-[#f7f7f0] hover:bg-[#e0e0d8] border border-[#e0e0d8] text-[#444440] hover:text-[#121212] font-semibold uppercase text-[0.68rem] tracking-wider transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Repo</span>
                </a>
              )}
            </div>
          </div>

          {/* Main Grid: Description & High-Contrast Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-7">
              <h3 className="font-serif-display italic text-3xl sm:text-4xl lg:text-5xl font-light text-[#121212] tracking-tight mb-2">
                {project.title}
              </h3>
              <p className={`font-mono-code text-xs uppercase tracking-wider font-semibold mb-4 ${
                (project.category as string) === 'operations' || project.cardColor === '#0f766e' ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
              }`}>
                {project.subtitle}
              </p>
              <p className="text-sm sm:text-base font-light text-[#444440] leading-relaxed mb-6">
                {project.fullOverview || project.description}
              </p>

              {/* Tag Grouping: Business Domain vs Technical Stack */}
              <div className="space-y-3 pt-2">
                {project.domainTags && project.domainTags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] w-20 shrink-0">
                      Domain:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.domainTags.map((dTag) => (
                        <span
                          key={dTag}
                          className="px-2.5 py-0.5 text-[0.68rem] font-mono-code uppercase tracking-wider bg-[#ebebe2] text-[#121212] border border-[#d8d8ce] font-medium"
                        >
                          {dTag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] w-20 shrink-0">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(project.techTags || project.tags).map((tTag) => (
                      <span
                        key={tTag}
                        className="px-2.5 py-0.5 text-[0.68rem] font-mono-code uppercase tracking-wider bg-[#fdfdfc] text-[#121212] border border-[#121212]/30"
                      >
                        {tTag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Contrast Business Impact Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-5 sm:p-6 mb-4">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#e0e0d8]">
                  <TrendingUp className={`w-3.5 h-3.5 ${
                    (project.category as string) === 'operations' || project.cardColor === '#0f766e' ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
                  }`} />
                  <span className="label-mono text-[#121212] font-semibold">
                    Verified Business & Operational ROI
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {project.metrics.map((m, mIdx) => {
                    const combined = `${project.category} ${project.cardColor} ${project.domainTags?.join(' ') || ''} ${m.label} ${m.value}`.toLowerCase();
                    const isTeal =
                      (project.category as string) === 'operations' ||
                      project.cardColor === '#0f766e' ||
                      project.id === 'pulsetrack' ||
                      project.id === 'cs-resolver' ||
                      project.id === 'aht-optimization' ||
                      combined.includes('fte') ||
                      combined.includes('sla') ||
                      combined.includes('bpo') ||
                      combined.includes('aht') ||
                      combined.includes('attrition') ||
                      combined.includes('agent') ||
                      combined.includes('coach') ||
                      combined.includes('csat') ||
                      combined.includes('report') ||
                      combined.includes('scaling');

                    return (
                      <div
                        key={mIdx}
                        className="bg-[#fdfdfc] p-3 sm:p-4 border border-[#e0e0d8]"
                      >
                        <div className={`font-serif-display italic text-2xl sm:text-3xl font-light leading-none mb-1 ${
                          isTeal ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
                        }`}>
                          {m.value}
                        </div>
                        <div className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#444440] font-medium">
                          {m.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Trigger to open deep-dive breakdown modal */}
              <button
                onClick={() => onSelectProject(project)}
                id={`explore-deep-dive-${project.id}`}
                className="w-full min-h-[44px] py-3.5 px-6 bg-[#121212] hover:bg-[#262626] text-[#fdfdfc] font-mono-code text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all group cursor-pointer shadow-xs"
              >
                <span>Explore Architectural Blueprint & Code</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Embedded Architecture Diagram Preview */}
          {project.diagramType && (
            <div className="mt-6 pt-6 border-t border-[#e0e0d8]">
              <ArchitectureArtifact
                type={project.diagramType}
                title={`${project.title} — Topology Breakdown`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
