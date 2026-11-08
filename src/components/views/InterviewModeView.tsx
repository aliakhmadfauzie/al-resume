import React, { useState } from 'react';
import { INTERVIEW_TOPICS, EXECUTIVE_CAREER_NARRATIVE } from '../../data/portfolioData';
import { Layers, Sparkles, CheckCircle2, Code2, BookOpen, ShieldCheck, Flame, ArrowRight, Table } from 'lucide-react';

export const InterviewModeView: React.FC = () => {
  const [activeViewMode, setActiveViewMode] = useState<'narrative' | 'scenarios'>('narrative');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(INTERVIEW_TOPICS[0].id);

  const currentTopic =
    INTERVIEW_TOPICS.find((t) => t.id === selectedTopicId) || INTERVIEW_TOPICS[0];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-mono text-[var(--text-accent)] font-medium">
            01 · Career story &amp; architecture decisions
          </p>
          
          {/* View Mode Switcher */}
          <div className="inline-flex rounded-lg bg-[var(--bg-surface)] p-1 border border-[var(--border-subtle)]">
            <button
              onClick={() => setActiveViewMode('narrative')}
              aria-pressed={activeViewMode === 'narrative'}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-md text-xs font-mono transition-all ${
                activeViewMode === 'narrative'
                  ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Career story</span>
            </button>
            <button
              onClick={() => setActiveViewMode('scenarios')}
              aria-pressed={activeViewMode === 'scenarios'}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-md text-xs font-mono transition-all ${
                activeViewMode === 'scenarios'
                  ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Scenarios</span>
            </button>
          </div>
        </div>

        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          {activeViewMode === 'narrative'
            ? 'Career story & architecture decisions'
            : 'Architecture decisions & tradeoffs'}
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          {activeViewMode === 'narrative'
            ? 'A story-driven career narrative following the Career story: from frontline BPO operations and crisis response to $960K/yr Domino-to-M365 enterprise modernization and GAMP 5 / GxP compliance.'
            : 'Structured answers to enterprise modernization scenarios, real-world technical tradeoffs, Domino-to-Dataverse cutovers, and pro-code ALM deployment strategies.'}
        </p>
      </div>

      {/* VIEW 1: EXECUTIVE CAREER NARRATIVE (FOUR-BEAT ARC) */}
      {activeViewMode === 'narrative' ? (
        <div className="space-y-10">
          {/* The Hook */}
          <div className="rounded-[var(--radius-lg)] bg-gradient-to-br from-[#1a130b] via-[var(--bg-surface)] to-[var(--bg-surface)] border border-[#f97316]/30 p-6 sm:p-8 space-y-3 relative overflow-hidden shadow-lg">
            <div className="flex items-center space-x-2 text-[#f97316] text-xs font-mono font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>The Hook · High-Stakes Operational Problem Statement</span>
            </div>
            <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed font-serif italic">
              "{EXECUTIVE_CAREER_NARRATIVE.hook}"
            </p>
          </div>

          {/* Four Narrative Beats */}
          <div className="space-y-6">
            <h2 className="text-sm font-mono text-[var(--text-accent)] uppercase tracking-wider font-semibold">
              // The Career story
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {EXECUTIVE_CAREER_NARRATIVE.beats.map((beat) => (
                <div
                  key={beat.beatNumber}
                  className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-4 hover:border-[var(--border-focus)] transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-7 h-7 rounded-full bg-[var(--interactive-subtle-bg)] text-[var(--text-accent)] border border-[var(--interactive-subtle-border)] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        0{beat.beatNumber}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                          {beat.title}
                        </h3>
                        <p className="text-xs font-mono text-[var(--text-secondary)]">
                          {beat.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line space-y-3">
                    {beat.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Delta Table */}
          <div className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-4">
            <div className="flex items-center space-x-2 text-[var(--text-accent)] text-xs font-mono font-semibold uppercase tracking-wider">
              <Table className="w-4 h-4" />
              <span>The Impact Delta · Before vs. After Transformation</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] text-[var(--text-secondary)] font-mono">
                    <th className="py-3 px-3 font-semibold">Dimension</th>
                    <th className="py-3 px-3 font-semibold">Broken Status Quo (Before)</th>
                    <th className="py-3 px-3 font-semibold">Engineered Transformation (After)</th>
                    <th className="py-3 px-3 font-semibold text-[var(--text-accent)]">Verifiable Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)]">
                  {EXECUTIVE_CAREER_NARRATIVE.impactDelta.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[var(--bg-surface-elevated)] transition-colors">
                      <td className="py-3 px-3 font-medium text-[var(--text-primary)] whitespace-nowrap">
                        {row.dimension}
                      </td>
                      <td className="py-3 px-3 text-[var(--text-secondary)]">
                        {row.before}
                      </td>
                      <td className="py-3 px-3 text-[var(--text-secondary)]">
                        {row.after}
                      </td>
                      <td className="py-3 px-3 font-semibold text-[var(--text-accent)]">
                        {row.delta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Locked Context Flags */}
          <div className="rounded-[var(--radius-lg)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 space-y-4">
            <div className="flex items-center space-x-2 text-[var(--text-accent)] text-xs font-mono font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Locked Context Flags · 11 Production Parameters Verified</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {EXECUTIVE_CAREER_NARRATIVE.lockedFlags.map((flag) => (
                <div
                  key={flag.id}
                  className="p-3 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[var(--text-accent)] font-semibold text-[11px]">
                      {flag.id}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono uppercase font-bold">
                      ✓ Verified
                    </span>
                  </div>
                  <p className="font-medium text-[var(--text-primary)]">
                    {flag.name}
                  </p>
                  <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                    {flag.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* VIEW 2: ARCHITECTURAL SCENARIOS */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar: Questions List */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-xs font-mono text-[var(--text-secondary)] font-medium px-1">
              Architecture Scenarios
            </h2>

            <div className="space-y-2">
              {INTERVIEW_TOPICS.map((topic) => {
                const isSelected = topic.id === selectedTopicId;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    aria-pressed={selectedTopicId === topic.id}
                    className={`w-full text-left p-4 rounded-[var(--radius-md)] transition-colors border ${
                      isSelected
                        ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border-[var(--border-focus)]'
                        : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)]'
                    }`}
                  >
                    <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                      {topic.category}
                    </span>
                    <p className="text-sm font-medium text-[var(--text-primary)] mt-1 leading-snug">
                      {topic.question}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content: Deep Dive Architecture Response */}
          <div className="lg:col-span-8 glass-card p-6 sm:p-8 space-y-6">
            <div className="space-y-2 border-b border-[var(--border-subtle)] pb-4">
              <span className="text-xs font-mono text-[var(--text-accent)] font-medium">
                {currentTopic.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
                {currentTopic.question}
              </h2>
            </div>

            {/* Executive Summary */}
            <div className="p-5 rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2">
              <h3 className="text-xs font-mono text-[var(--text-accent)] font-medium flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Architectural Summary</span>
              </h3>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                {currentTopic.executiveSummary}
              </p>
            </div>

            {/* Deep Dive Architecture Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-[var(--text-secondary)] font-medium flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-[var(--text-accent)]" />
                <span>Technical Implementation Strategy</span>
              </h3>
              <div className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line bg-[var(--bg-primary)] p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                {currentTopic.deepDiveArchitecture}
              </div>
            </div>

            {/* Code / Command Snippet if available */}
            {currentTopic.codeOrFlowSnippet && (
              <div className="space-y-2">
                <h3 className="text-xs font-mono text-[var(--text-secondary)] font-medium flex items-center space-x-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[var(--text-accent)]" />
                  <span>PAC CLI / Flow Architecture Blueprint</span>
                </h3>
                <pre className="p-4 rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] overflow-x-auto leading-relaxed">
                  <code>{currentTopic.codeOrFlowSnippet}</code>
                </pre>
              </div>
            )}

            {/* Key Deliverables & Artifacts */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono text-[var(--text-secondary)] font-medium">
                Verified Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentTopic.keyArtifacts.map((art, idx) => (
                  <div
                    key={idx}
                    className="text-xs font-medium px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-subtle)] flex items-center space-x-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--text-accent)] shrink-0" />
                    <span>{art}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
