import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { ArchitectureArtifact, CodeSnippetViewer } from './ArchitectureArtifact';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Calendar,
  ExternalLink,
  Code2,
  TrendingUp,
  Tag,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#fdfdfc] border border-[#121212] w-full max-w-4xl shadow-2xl overflow-hidden relative my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#e0e0d8] relative bg-[#f7f7f0] shrink-0">
          <button
            onClick={onClose}
            id="close-project-modal-btn"
            className="absolute top-6 right-6 p-2 bg-[#fdfdfc] border border-[#e0e0d8] text-[#121212] hover:bg-[#e0e0d8] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="label-mono bg-[#121212] text-[#fdfdfc] px-2.5 py-0.5">
              {project.category}
            </span>
            {project.isFlagship && (
              <span className="label-mono bg-[#b45309] text-[#fdfdfc] px-2 py-0.5">
                Flagship Case Study
              </span>
            )}
            <span className="text-xs font-mono-code text-[#6b6b63] flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{project.timeline}</span>
            </span>
          </div>

          <h2 className="font-serif-display italic text-3xl sm:text-4xl font-light text-[#121212] mb-2 tracking-tight">
            {project.title}
          </h2>
          <p className={`text-xs font-mono-code uppercase tracking-wider font-semibold mb-4 ${
            (project.category as string) === 'operations' || project.cardColor === '#0f766e' ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
          }`}>
            {project.subtitle}
          </p>

          {/* Action Links: Live Demo & Repository */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono-code text-xs">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                id={`modal-demo-btn-${project.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] uppercase tracking-wider transition-colors"
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
                id={`modal-repo-btn-${project.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fdfdfc] hover:bg-[#e0e0d8] text-[#121212] border border-[#e0e0d8] uppercase tracking-wider transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-[#121212]" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-[#121212] flex-1">
          {/* Key Metrics Grid */}
          <div>
            <div className="flex items-center gap-2 label-mono mb-3">
              <TrendingUp className={`w-3.5 h-3.5 ${
                (project.category as string) === 'operations' || project.cardColor === '#0f766e' ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
              }`} />
              <span>Performance Indicators & Business Impact</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {project.metrics.map((m, idx) => {
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
                    key={idx}
                    className="bg-[#f7f7f0] p-4 border border-[#e0e0d8] text-center"
                  >
                    <div className={`font-serif-display italic text-2xl sm:text-3xl font-light ${
                      isTeal ? 'text-[var(--accent-teal)]' : 'text-[var(--accent-exec)]'
                    }`}>
                      {m.value}
                    </div>
                    <div className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#444440] mt-1">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Architecture Topology Diagram if present */}
          {project.diagramType && (
            <div>
              <div className="label-mono mb-2">
                System Topology & Pipeline Blueprint
              </div>
              <ArchitectureArtifact
                type={project.diagramType}
                title={`${project.title} — System Architecture`}
              />
            </div>
          )}

          {/* Detailed Overview */}
          <div>
            <div className="label-mono mb-2">
              Architecture & Executive Overview
            </div>
            <p className="text-sm sm:text-base font-light text-[#444440] leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenge && (
              <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-5">
                <div className="flex items-center gap-2 text-[#121212] font-medium text-xs font-mono-code uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-[#6b6b63]" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-5">
                <div className="flex items-center gap-2 text-[#121212] font-medium text-xs font-mono-code uppercase tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4 text-[#121212]" />
                  <span>Architectural Solution</span>
                </div>
                <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Code Snippet if present */}
          {project.codeSnippet && (
            <div>
              <div className="label-mono mb-1 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Production Code Implementation</span>
              </div>
              <CodeSnippetViewer
                language={project.codeSnippet.language}
                filename={project.codeSnippet.filename}
                code={project.codeSnippet.code}
                caption={project.codeSnippet.caption}
              />
            </div>
          )}

          {/* Results Checklist */}
          {project.results && project.results.length > 0 && (
            <div>
              <div className="label-mono mb-3">
                Key Deliverables & Measured Outcomes
              </div>
              <div className="space-y-2">
                {project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-[#444440]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#121212] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Specifications */}
          {project.architecturePoints && project.architecturePoints.length > 0 && (
            <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-5">
              <div className="label-mono text-[#121212] mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Technical Specifications & Standards</span>
              </div>
              <ul className="space-y-1.5 text-xs font-light text-[#444440] list-disc list-inside">
                {project.architecturePoints.map((pt, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Grouped Tags: Domain vs Tech */}
          <div className="space-y-3 pt-2 border-t border-[#e0e0d8]">
            {project.domainTags && project.domainTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] w-24 shrink-0">
                  Domain Tags:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.domainTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#ebebe2] text-[#121212] border border-[#d8d8ce] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] w-24 shrink-0">
                Tech Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(project.techTags || project.tags).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#fdfdfc] text-[#444440] border border-[#e0e0d8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#f7f7f0] border-t border-[#e0e0d8] flex items-center justify-between font-mono-code text-xs shrink-0">
          <span className="text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
            System Ref: {project.id}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] text-xs uppercase tracking-wider transition-colors cursor-pointer font-medium"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};


