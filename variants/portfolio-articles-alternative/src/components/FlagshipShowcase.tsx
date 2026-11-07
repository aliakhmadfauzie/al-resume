import React, { useState } from 'react';
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
  Eye,
  Cpu,
  ChevronDown,
  ChevronUp,
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
  const [expandedDiagrams, setExpandedDiagrams] = useState<Record<string, boolean>>({
    pulsetrack: true,
    'ioi-domino-dataverse': true,
  });

  if (!projects || projects.length === 0) return null;

  const isArch = currentMode === 'architecture' || currentMode === 'architect';
  const isOps = currentMode === 'operations';

  const toggleDiagram = (id: string) => {
    setExpandedDiagrams((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getSectionTitle = () => {
    if (isArch) return 'Flagship Case Studies • Enterprise Modernization & Dataverse Architecture';
    if (isOps) return 'Flagship Case Studies • High-Volume BPO Telemetry & Lark Workflow Automation';
    return 'Flagship Case Studies • Enterprise Modernization & BPO Architecture';
  };

  return (
    <div className="space-y-10 mb-14">
      {/* Section Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#e0e0d8]">
        <div className="flex items-center gap-2">
          <Sparkles className={`w-4 h-4 ${isOps ? 'text-[#0f766e]' : 'text-[#1d4ed8]'}`} />
          <span className="font-mono-code text-xs uppercase tracking-wider text-[#121212] font-semibold">
            {getSectionTitle()}
          </span>
        </div>
        <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
          {projects.length} Flagship Deep-{projects.length === 1 ? 'Dive' : 'Dives'}
        </span>
      </div>

      {projects.map((project, idx) => {
        const isDiagramOpen = expandedDiagrams[project.id] ?? true;

        return (
          <div
            key={project.id}
            id={`flagship-case-study-${project.id}`}
            className="bg-[#fdfdfc] border border-[#121212] p-6 sm:p-9 relative overflow-hidden transition-all shadow-sm hover:shadow-md rounded-none"
          >
            {/* Top Flagship Ribbon Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#e0e0d8]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-[#121212] text-[#fdfdfc] text-[0.65rem] font-mono-code uppercase px-2.5 py-1 tracking-wider font-semibold">
                  Flagship #{idx + 1}
                </span>
                <span className="bg-[#f7f7f0] border border-[#e0e0d8] text-[#121212] text-[0.65rem] font-mono-code uppercase px-2.5 py-1 tracking-wider font-medium">
                  {project.category}
                </span>
                <span className="text-xs font-mono-code text-[#6b6b63] hidden sm:inline">
                  {project.timeline}
                </span>
              </div>

              {/* Action Buttons with 44px Touch Targets */}
              <div className="flex items-center gap-2 font-mono-code text-xs">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    id={`flagship-demo-btn-${project.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="min-h-[44px] px-4 py-2 inline-flex items-center gap-1.5 bg-[#f7f7f0] hover:bg-[#e0e0d8] border border-[#e0e0d8] text-[#121212] font-semibold uppercase text-[0.68rem] tracking-wider transition-colors"
                    aria-label={`Open live demo for ${project.title}`}
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
                    className="min-h-[44px] px-4 py-2 inline-flex items-center gap-1.5 bg-[#f7f7f0] hover:bg-[#e0e0d8] border border-[#e0e0d8] text-[#444440] hover:text-[#121212] font-semibold uppercase text-[0.68rem] tracking-wider transition-colors"
                    aria-label={`Open GitHub repository for ${project.title}`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Bento Grid: Overview & Narrative vs ROI Telemetry Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
              
              {/* Left Column: Title, Subtitle, Description & Badges */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display italic text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-[#121212] tracking-tight mb-2 leading-tight">
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
                </div>

                {/* Domain & Tech Stack Taxonomy Chips */}
                <div className="space-y-3 pt-4 border-t border-[#e0e0d8]/80">
                  {project.domainTags && project.domainTags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] w-20 shrink-0 font-medium">
                        Domain:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.domainTags.map((dTag) => (
                          <span
                            key={dTag}
                            className="px-2.5 py-1 text-[0.68rem] font-mono-code uppercase tracking-wider bg-[#ebebe2] text-[#121212] border border-[#d8d8ce] font-medium"
                          >
                            {dTag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] w-20 shrink-0 font-medium">
                      Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.techTags || project.tags).map((tTag) => (
                        <span
                          key={tTag}
                          className="px-2.5 py-1 text-[0.68rem] font-mono-code uppercase tracking-wider bg-[#fdfdfc] text-[#121212] border border-[#121212]/30"
                        >
                          {tTag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Bento ROI Telemetry & Specs Trigger */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#f7f7f0] border border-[#e0e0d8] p-5 sm:p-6">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#e0e0d8]">
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`w-3.5 h-3.5 ${
                        (project.category as string) === 'operations' || project.cardColor === '#0f766e' ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
                      }`} />
                      <span className="label-mono text-[#121212] font-semibold">
                        Verified Business &amp; Operational ROI
                      </span>
                    </div>
                    <span className="text-[0.62rem] font-mono-code uppercase text-[#6b6b63]">
                      Production Impact
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
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
                          className="bg-[#fdfdfc] p-3.5 border border-[#e0e0d8] hover:border-[#121212]/30 transition-colors"
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

                {/* Primary Action Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  id={`explore-deep-dive-${project.id}`}
                  className="w-full min-h-[46px] py-3.5 px-6 bg-[#121212] hover:bg-[#262626] text-[#fdfdfc] font-mono-code text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all group cursor-pointer shadow-xs font-semibold"
                >
                  <span>Explore Architecture Blueprint &amp; Code</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Embedded Architecture Diagram Preview with Toggle */}
            {project.diagramType && (
              <div className="mt-6 pt-5 border-t border-[#e0e0d8]">
                <div className="flex items-center justify-between mb-3">
                  <button
                    onClick={() => toggleDiagram(project.id)}
                    aria-expanded={isDiagramOpen}
                    aria-controls={`diagram-preview-${project.id}`}
                    className="min-h-[44px] px-2 inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-[#121212] hover:text-[#1d4ed8] font-semibold cursor-pointer rounded-xs"
                  >
                    <Cpu className="w-4 h-4 text-[#1d4ed8]" />
                    <span>Live Architecture Topology Breakdown</span>
                    {isDiagramOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#6b6b63]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#6b6b63]" />
                    )}
                  </button>
                  <span className="text-[0.65rem] font-mono-code text-[#6b6b63] uppercase hidden sm:inline">
                    Interactive Schema
                  </span>
                </div>

                {isDiagramOpen && (
                  <div id={`diagram-preview-${project.id}`} className="pt-2" role="region" aria-label="Architecture Topology Diagram">
                    <ArchitectureArtifact
                      type={project.diagramType}
                      title={`${project.title} — Topology Breakdown`}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

