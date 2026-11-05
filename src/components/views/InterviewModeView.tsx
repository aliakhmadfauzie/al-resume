import React, { useState } from 'react';
import { INTERVIEW_TOPICS } from '../../data/portfolioData';
import { Layers, Sparkles, CheckCircle2, Code2 } from 'lucide-react';

export const InterviewModeView: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(INTERVIEW_TOPICS[0].id);

  const currentTopic =
    INTERVIEW_TOPICS.find((t) => t.id === selectedTopicId) || INTERVIEW_TOPICS[0];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <p className="text-xs font-mono text-[#3b82f6] font-medium">
          01 · Hiring Manager &amp; Technical Interview Console
        </p>
        <h1
          className="font-semibold text-[var(--text-primary)] tracking-tight"
          style={{ fontSize: 'var(--text-h1)', lineHeight: 1.2 }}
        >
          Architectural Deep Dives &amp; Technical Defense
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Structured answers to enterprise modernization scenarios, real-world technical tradeoffs, Domino-to-Dataverse cutovers, and pro-code ALM deployment strategies.
        </p>
      </div>

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
                  className={`w-full text-left p-4 rounded-[var(--radius-md)] transition-colors border ${
                    isSelected
                      ? 'bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border-[var(--border-focus)]'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)]'
                  }`}
                >
                  <span className="text-xs font-mono text-[#3b82f6] font-medium">
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
            <span className="text-xs font-mono text-[#3b82f6] font-medium">
              {currentTopic.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
              {currentTopic.question}
            </h2>
          </div>

          {/* Executive Summary */}
          <div className="p-5 rounded-[var(--radius-md)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2">
            <h3 className="text-xs font-mono text-[#3b82f6] font-medium flex items-center space-x-1.5">
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
              <Layers className="w-3.5 h-3.5 text-[#3b82f6]" />
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
                <Code2 className="w-3.5 h-3.5 text-[#3b82f6]" />
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
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                  <span>{art}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
