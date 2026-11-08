import { Dialog } from '../Dialog';
import React from 'react';
import { ProjectItem, MigrationSlice } from '../../types';
import { ProjectGallery } from '../ProjectGallery';
import { getGalleryForItem } from '../../data/projectGalleries';
import {
  X,
  ExternalLink,
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
  const galleryPlaceholders = getGalleryForItem(project);

  return (
    <Dialog onClose={onClose} label={itemTitle} className="w-[calc(100%-1.5rem)] max-w-4xl p-0 border-0 bg-transparent text-[var(--text-primary)]">
      <div
        id="project-detail-modal-container"
        className="relative w-full max-w-3xl sm:max-w-4xl max-h-[92vh] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-accent)] font-mono font-semibold">
              {isMigrationSlice ? (
                (project as MigrationSlice).letter
              ) : (
                <Workflow className="w-5 h-5" />
              )}
            </div>
            <div>
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                {isMigrationSlice
                  ? `IOI Domino Migration · Slice ${(project as MigrationSlice).letter}`
                  : 'Enterprise Architecture Case Study'}
              </span>
              <h2 className="text-lg font-semibold text-[var(--text-primary)] tracking-tight leading-tight mt-0.5">
                {itemTitle}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-subtle)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[var(--bg-surface)]">
          {/* Subtitle & Unboxed Metadata Line (Zero-Pill Discipline) */}
          <div className="space-y-2 border-b border-[var(--border-subtle)] pb-4">
            {'subtitle' in project && project.subtitle && (
              <p className="text-base font-medium text-[var(--text-accent)]">{project.subtitle}</p>
            )}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[var(--text-secondary)]">
              <span>Role: {project.role}</span>
              {'date' in project && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{project.date}</span>
                </>
              )}
              {isMigrationSlice && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-[var(--text-accent)] font-semibold tabular-nums">
                    {(project as MigrationSlice).appCount} Applications Rebuilt
                  </span>
                </>
              )}
              {'repoUrl' in project && project.repoUrl && (
                <>
                  <span aria-hidden="true">·</span>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[var(--text-accent)] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Source Repository</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Interactive ProjectGallery with Image Placeholders, Lightbox Modal & Thumbnail Navigation */}
          <ProjectGallery
            item={project}
            images={galleryPlaceholders}
            projectTitle={itemTitle}
          />

          {/* Unboxed Technology Stack */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono text-[var(--text-tertiary)] font-medium">
              Technology Stack
            </h4>
            <p className="text-xs font-mono text-[var(--text-primary)] leading-relaxed">
              {tools.join(' · ')}
            </p>
          </div>

          {/* Challenge & Strategy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[var(--bg-primary)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-2.5">
              <h4 className="text-xs font-mono text-[var(--text-tertiary)] font-medium">
                01 · Operational Challenge
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{problemText}</p>
            </div>

            <div className="bg-[var(--bg-primary)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-2.5">
              <h4 className="text-xs font-mono text-[var(--text-accent)] font-medium">
                02 · Architected Solution
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{solutionText}</p>
            </div>
          </div>

          {/* Verified Business Results */}
          <div className="bg-[var(--bg-primary)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] space-y-2">
            <div className="flex items-center space-x-2 text-[var(--text-accent)] font-mono text-xs font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>03 · Verified Business Impact</span>
            </div>
            <p className="text-sm text-[var(--text-primary)] font-medium leading-relaxed">
              {impactText}
            </p>
          </div>

          {/* Quantified Outcomes */}
          {'impactMetrics' in project && project.impactMetrics && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Quantified Telemetry
              </h4>
              <div className="grid grid-cols-3 gap-3 font-mono tabular-nums">
                {project.impactMetrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-[var(--bg-primary)] p-3.5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] text-center"
                  >
                    <div className="text-lg font-semibold text-[var(--text-primary)]">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-sans text-[var(--text-secondary)] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deep Technical Specifications */}
          {'technicalDetails' in project && project.technicalDetails && (
            <div>
              <details
                open
                className="group bg-[var(--bg-primary)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none outline-none">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-[var(--text-accent)]" />
                    <span className="text-xs font-mono text-[var(--text-primary)] font-medium">
                      Technical Implementation Specifications
                    </span>
                  </div>
                </summary>
                <div className="p-4 pt-0 border-t border-[var(--border-subtle)]">
                  <ul className="space-y-2 mt-3">
                    {project.technicalDetails.map((td, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2.5 text-sm text-[var(--text-secondary)] bg-[var(--bg-surface)] p-3 rounded-[var(--radius-sm)] border border-[var(--border-subtle)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--text-accent)] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{td}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          )}

          {'codeSnippet' in project && project.codeSnippet && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Verified Implementation Excerpt
              </h4>
              <pre className="p-4 rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-primary)] overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}

          {isMigrationSlice && (project as MigrationSlice).examples && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Representative Applications in Slice
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(project as MigrationSlice).examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="text-xs text-[var(--text-primary)] bg-[var(--bg-primary)] p-3 rounded-[var(--radius-sm)] border border-[var(--border-subtle)]"
                  >
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          )}

          {isMigrationSlice && (project as MigrationSlice).keyHighlights && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[var(--text-accent)] font-medium">
                Key Architectural Highlights
              </h4>
              <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                {(project as MigrationSlice).keyHighlights.join(' · ')}
              </p>
            </div>
          )}
        </div>

        {/* Footer with Demo Trigger */}
        <div className="px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-[var(--radius-sm)] text-xs font-medium text-[var(--text-secondary)] hover:text-white bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
          >
            Close
          </button>

          {'liveDemoId' in project && project.liveDemoId && onLaunchDemo && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onLaunchDemo(project.liveDemoId!);
              }}
              className="flex items-center space-x-2 px-5 py-2 rounded-[var(--radius-sm)] text-xs font-semibold bg-[var(--accent-blue)] text-[#090a0d] hover:bg-[var(--accent-blue-hover)] transition-colors"
            >
              <MonitorPlay className="w-4 h-4" />
              <span>Open simulator</span>
            </button>
          )}
        </div>
      </div>
    </Dialog>
  );
};
