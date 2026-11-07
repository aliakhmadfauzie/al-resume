import React, { useState } from 'react';
import { INTERVIEW_TOPICS } from '../../data/portfolioData';
import { 
  MessageSquareQuote, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  HelpCircle,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const InterviewModeView: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(INTERVIEW_TOPICS[0].id);

  const currentTopic = INTERVIEW_TOPICS.find(t => t.id === selectedTopicId) || INTERVIEW_TOPICS[0];

  return (
    <div className="space-y-10 py-6 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-bold">
          <MessageSquareQuote className="w-4 h-4" />
          <span>Hiring Manager &amp; Technical Interview Console</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Architectural Deep Dives &amp; Technical Defense
        </h1>
        <p className="text-xs sm:text-sm text-[#c0c7d4] max-w-3xl leading-relaxed">
          Explore structured answers to critical enterprise modernization scenarios, real-world technical tradeoffs, Domino-to-Dataverse cutovers, and pro-code ALM deployment strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar: Questions List */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold px-1">
            Interview Scenarios
          </h2>

          <div className="space-y-2">
            {INTERVIEW_TOPICS.map((topic) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-[#1e2024] text-white border-[#0078d4] shadow-lg shadow-[#0078d4]/20'
                      : 'bg-[#161b22] text-[#c0c7d4] hover:bg-[#1a1c20] border-[#282a2e]'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00dbe7] font-semibold">
                    {topic.category}
                  </span>
                  <p className="text-xs font-bold text-white mt-1 leading-snug">
                    {topic.question}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content: Deep Dive Architecture Response */}
        <div className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-3xl space-y-6">
          
          <div className="space-y-2 border-b border-[#282a2e] pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
              {currentTopic.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentTopic.question}
            </h2>
          </div>

          {/* Executive Summary */}
          <div className="p-4 rounded-2xl bg-[#0078d4]/10 border border-[#0078d4]/30 space-y-1.5">
            <h3 className="text-xs font-mono uppercase text-[#a3c9ff] font-bold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00dbe7]" />
              <span>Executive Architectural Summary</span>
            </h3>
            <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
              {currentTopic.executiveSummary}
            </p>
          </div>

          {/* Deep Dive Architecture Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-[#dab9ff] font-bold flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-[#dab9ff]" />
              <span>Technical Implementation Strategy</span>
            </h3>
            <div className="text-xs sm:text-sm text-[#c0c7d4] leading-relaxed whitespace-pre-line bg-[#111318] p-5 rounded-2xl border border-[#282a2e] font-sans">
              {currentTopic.deepDiveArchitecture}
            </div>
          </div>

          {/* Code / Command Snippet if available */}
          {currentTopic.codeOrFlowSnippet && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase text-[#00dbe7] font-bold flex items-center space-x-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#00dbe7]" />
                <span>PAC CLI / Flow Architecture Blueprint</span>
              </h3>
              <pre className="p-4 rounded-xl bg-[#0c0e12] border border-[#282a2e] text-[11px] font-mono text-[#a3c9ff] overflow-x-auto leading-relaxed">
                <code>{currentTopic.codeOrFlowSnippet}</code>
              </pre>
            </div>
          )}

          {/* Key Deliverables & Artifacts */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-mono uppercase text-[#a3c9ff] font-bold">Key Proven Deliverables</h3>
            <div className="flex flex-wrap gap-2">
              {currentTopic.keyArtifacts.map((art, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-3 py-1 rounded-lg bg-[#1a1c20] text-white border border-[#282a2e] flex items-center space-x-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe7]" />
                  <span>{art}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
