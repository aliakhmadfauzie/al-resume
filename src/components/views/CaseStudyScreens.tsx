import React, { useState } from 'react';
import { ChevronRight, Database, FileCheck2, GitBranch, Layers3, ShieldCheck } from 'lucide-react';
import type { ProjectItem } from '../../types';

/**
 * Illustrated portfolio screens, intentionally rebuilt from published-safe facts.
 * These are conceptual walkthroughs — never screenshots of a client's production UI.
 */
type Screen = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  steps: string[];
  records: { name: string; detail: string; status: string }[];
  notes: string[];
};

const SCREEN_SETS: Record<string, Screen[]> = {
  'e-procurement-uat': [
    {
      label: 'Request workspace', eyebrow: '01 / REQUEST INTAKE', title: 'Purchase request review',
      description: 'Illustrative Power Apps request list with mapped descriptions and traceable review states.',
      steps: ['Capture', 'Validate', 'Supplier review', 'UAT'],
      records: [
        { name: 'Purchase request details', detail: 'Mapped item description', status: 'Reviewed' },
        { name: 'Editable request fields', detail: 'Direct PR behavior', status: 'Documented' },
        { name: 'Supplier quotations', detail: 'Vendor details', status: 'UAT' }
      ],
      notes: ['Uses sample labels, not client data', 'UAT findings documented; no production claim']
    },
    {
      label: 'Vendor selection', eyebrow: '02 / VENDOR RULES', title: 'Supplier award validation',
      description: 'Illustrative supplier-selection and price-refresh logic based on documented UAT changes.',
      steps: ['Choose supplier', 'Clear stale rates', 'Verify fields', 'Submit'],
      records: [
        { name: 'Supplier selection', detail: 'Change event', status: 'Validated' },
        { name: 'Price reset', detail: 'Remove stale value on vendor change', status: 'Reviewed' },
        { name: 'Price comparison', detail: 'Outstanding feature in UAT record', status: 'In progress' }
      ],
      notes: ['Illustrates intended control behavior', 'Price comparison was not confirmed complete']
    }
  ],
  'lark-document-integration': [
    {
      label: 'Document intake', eyebrow: '01 / DOCUMENT API', title: 'Comment extraction queue',
      description: 'Conceptual document processing workspace reflecting the Python and Lark API workflow.',
      steps: ['Select document', 'Fetch comments', 'Normalize context', 'Export'],
      records: [
        { name: 'Document metadata', detail: 'Source and title', status: 'Mapped' },
        { name: 'Comment threads', detail: 'Replies and quote context', status: 'Extracted' },
        { name: 'Local index', detail: 'File and export references', status: 'Designed' }
      ],
      notes: ['No private document content included', 'Illustration is not a live connected service']
    },
    {
      label: 'Export pipeline', eyebrow: '02 / STRUCTURED OUTPUT', title: 'Portable document exports',
      description: 'Illustrative routing for converting structured comments into reusable document artifacts.',
      steps: ['Normalize', 'Review', 'Markdown / Word', 'Archive'],
      records: [
        { name: 'Comment index', detail: 'Structured thread metadata', status: 'Prepared' },
        { name: 'Markdown export', detail: 'Searchable plain-text report', status: 'Documented' },
        { name: 'Word output', detail: 'Portable review artifact', status: 'Documented' }
      ],
      notes: ['Based on codebase and README descriptions', 'Production usage has not been independently established']
    }
  ],
  'ioi-migration-governance': [
    {
      label: 'Discovery tracker', eyebrow: '01 / FORM INVENTORY', title: 'Migration discovery overview',
      description: 'Milestone-specific inventory summary from April 2026 planning records.',
      steps: ['Discover', 'Analyze', 'Design', 'Build'],
      records: [
        { name: 'Documented specifications', detail: '116 forms in April tracker', status: 'Recorded' },
        { name: 'Mapped fields', detail: '3,155 columns in April tracker', status: 'Recorded' },
        { name: 'Build phase', detail: 'Pending at the cited milestone', status: 'Pending' }
      ],
      notes: ['Counts are time-specific planning figures', 'Not a production deployment dashboard']
    },
    {
      label: 'DQ gate', eyebrow: '02 / QUALIFICATION', title: 'Design qualification workbench',
      description: 'Illustrative stage gate for reviews, blueprint coverage and controlled handoff.',
      steps: ['Blueprint', 'DQ draft', 'Audit', 'Approval'],
      records: [
        { name: 'Blueprint coverage', detail: 'Required before DQ completion', status: 'Gate' },
        { name: 'Mandatory columns', detail: 'Mapped field checks', status: 'Gate' },
        { name: 'Owner and role mapping', detail: 'Review and sign-off readiness', status: 'Gate' }
      ],
      notes: ['Records may be blocked or awaiting review', 'Do not infer completed migration']
    }
  ],
  'tasek-cement-rebate': [
    {
      label: 'Rebate workbench', eyebrow: '01 / REBATE MODEL', title: 'PO-level rebate preparation',
      description: 'Conceptual screen based on the documented six-component rebate model.',
      steps: ['Select PO', 'Compare rates', 'Validate', 'Route'],
      records: [
        { name: 'Rebate components', detail: 'Six specified calculation elements', status: 'Designed' },
        { name: 'Previous rate lookup', detail: 'Rate comparison', status: 'Documented' },
        { name: 'Approval limit', detail: 'Rule requires further UAT reconciliation', status: 'Review' }
      ],
      notes: ['No live calculations or customer amounts', 'Some acceptance-test examples conflict with stated caps']
    },
    {
      label: 'Data architecture', eyebrow: '02 / DATAVERSE DESIGN', title: 'Structured approval records',
      description: 'Illustrative data and approval architecture from the technical specification.',
      steps: ['Request', 'Review', 'Approve', 'History'],
      records: [
        { name: 'Dataverse tables', detail: '11 defined in schema', status: 'Specified' },
        { name: 'Mapped columns', detail: '145 documented fields', status: 'Specified' },
        { name: 'Multi-level review', detail: 'Role-based routing', status: 'Designed' }
      ],
      notes: ['Schema design does not prove deployment', 'ERP integration described as architecture']
    }
  ]
};

interface Props { project: ProjectItem; }

export const CaseStudyScreens: React.FC<Props> = ({ project }) => {
  const screens = SCREEN_SETS[project.id];
  const [selected, setSelected] = useState(0);
  if (!screens) return null;
  const active = screens[Math.min(selected, screens.length - 1)];
  return (
    <section className="space-y-4" aria-label={`Illustrative screens for ${project.title}`}>
      <div className="flex flex-wrap justify-between gap-3 items-end">
        <div>
          <p className="text-xs font-mono text-[var(--text-accent)]">INTERACTIVE CASE STUDY</p>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-1">Screen walkthrough</h3>
        </div>
        <span className="text-[11px] font-mono text-[var(--text-tertiary)]">Conceptual UI · Sample data only</span>
      </div>
      <div role="tablist" aria-label="Case study screen" className="flex flex-wrap gap-2">
        {screens.map((screen, index) => (
          <button key={screen.label} type="button" role="tab"
            id={`case-screen-${project.id}-${index}`}
            aria-selected={index === selected}
            aria-controls={`case-panel-${project.id}`}
            onClick={() => setSelected(index)}
            className={`px-3 py-2 rounded-[var(--radius-sm)] border text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] ${index === selected ? 'bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border-[var(--border-focus)]' : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'}`}>
            {screen.label}
          </button>
        ))}
      </div>
      <div id={`case-panel-${project.id}`} role="tabpanel"
        aria-labelledby={`case-screen-${project.id}-${selected}`}
        className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers3 className="w-4 h-4 text-[var(--text-accent)]" aria-hidden="true" />
            <span className="font-mono text-[11px] text-[var(--text-accent)]">{active.eyebrow}</span>
          </div>
          <span className="text-[10px] text-[var(--text-tertiary)] font-mono">WIREFRAME / NOT LIVE</span>
        </div>
        <div className="px-4 sm:px-6 py-6 space-y-5">
          <div className="space-y-2">
            <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">{active.title}</h4>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{active.description}</p>
          </div>
          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2" aria-label="Workflow stages">
            {active.steps.map((step, index) => (
              <li key={step} className="flex items-center gap-2 min-w-0 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] px-3 py-3">
                <span className="text-xs font-mono text-[var(--text-accent)]">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-xs text-[var(--text-primary)] break-words">{step}</span>
                {index < active.steps.length - 1 && <ChevronRight aria-hidden="true" className="w-3 h-3 ml-auto shrink-0 text-[var(--text-tertiary)]"/>}
              </li>
            ))}
          </ol>
          <div className="border border-[var(--border-subtle)] rounded-[var(--radius-md)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <Database className="w-4 h-4 text-[var(--text-accent)]" aria-hidden="true"/>
              <span className="text-xs font-semibold text-[var(--text-primary)]">Illustrative records &amp; rules</span>
            </div>
            <div className="divide-y divide-[var(--border-subtle)]">
              {active.records.map((record) => (
                <div key={record.name} className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm text-[var(--text-primary)]">{record.name}</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{record.detail}</p>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-accent)] sm:text-right">{record.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {active.notes.map((note, index) => (
              <p key={note} className="flex gap-2 items-start text-xs leading-relaxed text-[var(--text-secondary)]">
                {index === 0 ? <ShieldCheck aria-hidden="true" className="w-4 h-4 shrink-0 text-[var(--text-accent)]"/> : <FileCheck2 aria-hidden="true" className="w-4 h-4 shrink-0 text-[var(--text-accent)]"/>}
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
        <GitBranch aria-hidden="true" className="w-3.5 h-3.5 shrink-0" />
        Screens are representative diagrams reconstructed from project documentation, not production screenshots.
      </div>
    </section>
  );
};

export const hasCaseStudyScreens = (id: string): boolean => Object.prototype.hasOwnProperty.call(SCREEN_SETS, id);
