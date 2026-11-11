import React, { useState } from 'react';
import { INTERVIEW_TOPICS, EXECUTIVE_CAREER_NARRATIVE } from '../../data/portfolioData';
import { Layers, Sparkles, CheckCircle2, Code2, BookOpen, ShieldCheck, Flame, ArrowRight, Table, Presentation } from 'lucide-react';
import { ExecutiveInterviewDeck } from '../interview/ExecutiveInterviewDeck';

interface InterviewModeViewProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
  onLaunchDemo?: (demoId: string) => void;
}

export const InterviewModeView: React.FC<InterviewModeViewProps> = ({
  onOpenResume,
  onOpenContact,
  onLaunchDemo
}) => {
  const [activeViewMode, setActiveViewMode] = useState<'pitch-deck' | 'narrative' | 'scenarios'>('pitch-deck');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(INTERVIEW_TOPICS[0].id);

  const currentTopic =
    INTERVIEW_TOPICS.find((t) => t.id === selectedTopicId) || INTERVIEW_TOPICS[0];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div id="section-interview-header" className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-mono text-[var(--text-accent)] font-medium">
            01 · Interview Presentation &amp; Architecture Decisions
          </p>
          
          {/* View Mode Switcher */}
          <div className="inline-flex rounded-lg bg-[var(--bg-surface)] p-1 border border-[var(--border-subtle)]">
            <button
              onClick={() => setActiveViewMode('pitch-deck')}
              aria-pressed={activeViewMode === 'pitch-deck'}
              className={`flex items-center space-x-2 px-3.5 py-2 min-h-[44px] rounded-md text-xs font-mono transition-all cursor-pointer active:scale-95 touch-manipulation ${
                activeViewMode === 'pitch-deck'
                  ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Interview Pitch Deck</span>
            </button>
            <button
              onClick={() => setActiveViewMode('narrative')}
              aria-pressed={activeViewMode === 'narrative'}
              className={`flex items-center space-x-2 px-3.5 py-2 min-h-[44px] rounded-md text-xs font-mono transition-all cursor-pointer active:scale-95 touch-manipulation ${
                activeViewMode === 'narrative'
                  ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Career Story</span>
            </button>
            <button
              onClick={() => setActiveViewMode('scenarios')}
              aria-pressed={activeViewMode === 'scenarios'}
              className={`flex items-center space-x-2 px-3.5 py-2 min-h-[44px] rounded-md text-xs font-mono transition-all cursor-pointer active:scale-95 touch-manipulation ${
                activeViewMode === 'scenarios'
                  ? 'bg-[var(--interactive-primary)] text-[#090a0d] font-bold shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture Scenarios</span>
            </button>
          </div>
        </div>

        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          {activeViewMode === 'pitch-deck'
            ? 'Executive Introduction & Interview Pitch Deck'
            : activeViewMode === 'narrative'
            ? 'Career Story & Architecture Decisions'
            : 'Architecture Decisions & Tradeoffs'}
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          {activeViewMode === 'pitch-deck'
            ? 'Interactive introduction slides prepared for Hiring Managers & Operations Managers evaluating Team Leader roles in Content Moderation (Trust & Safety) and Customer Service Operations.'
            : activeViewMode === 'narrative'
            ? 'A story-driven career narrative following the Career story: from frontline BPO operations and crisis response to $960K/yr Domino-to-M365 enterprise modernization and GAMP 5 / GxP compliance.'
            : 'Structured answers to enterprise modernization scenarios, real-world technical tradeoffs, Domino-to-Dataverse cutovers, and pro-code ALM deployment strategies.'}
        </p>
      </div>

      {/* VIEW 1: EXECUTIVE INTERVIEW PITCH DECK (SLIDES) */}
      {activeViewMode === 'pitch-deck' && (
        <div id="section-interview-deck">
          <ExecutiveInterviewDeck
            onOpenResume={onOpenResume}
            onOpenContact={onOpenContact}
            onLaunchDemo={onLaunchDemo}
          />
        </div>
      )}

      {/* VIEW 2: EXECUTIVE CAREER NARRATIVE (FOUR-BEAT ARC) */}
      {activeViewMode === 'narrative' && (
        <div id="section-career-narrative" className="space-y-10">
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

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {beat.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: ARCHITECTURAL SCENARIOS & TRADEOFFS */}
      {activeViewMode === 'scenarios' && (
        <div id="section-architectural-scenarios" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation: Scenario List */}
          <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24">
            <h2 className="text-xs font-mono text-[var(--text-accent)] uppercase tracking-wider font-semibold px-2 mb-3">
              // Technical Scenarios ({INTERVIEW_TOPICS.length})
            </h2>
            <div className="space-y-1.5">
              {INTERVIEW_TOPICS.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    aria-pressed={selectedTopicId === topic.id}
                    className={`w-full text-left p-4 rounded-[var(--radius-md)] transition-all border cursor-pointer active:scale-[0.99] touch-manipulation min-h-[44px] ${
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
