import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { ASK_ALI_PROMPTS } from '../../../data/hiringManagerData';
import { ChatMessage } from '../../../types';
import { SectionShell } from './SectionShell';

interface AskAliSectionProps {
  messages: ChatMessage[];
  isTyping: boolean;
  onAsk: (text: string) => void;
  onJumpToSection: (sectionId: string) => void;
}

export const AskAliSection: React.FC<AskAliSectionProps> = ({
  messages,
  isTyping,
  onAsk,
  onJumpToSection
}) => {
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || isTyping) return;
    setInput('');
    onAsk(text);
  };

  return (
    <SectionShell
      id="hm-section-ask-ali"
      step="07"
      kicker="Ask Ali AI"
      title="Ask Ali"
      description="Ask me anything — about my projects, architecture, leadership, or AI experience. Suggested prompts below to get started."
    >
      <div className="glass-card rounded-3xl overflow-hidden">
        {/* Chat window */}
        <div
          ref={scrollRef}
          className="h-[420px] sm:h-[480px] overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#111318]/60"
        >
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-3 px-4">
              <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00dbe7] to-[#0078d4] flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </span>
              <div className="text-sm font-bold text-white">Ask Ali — your interview shortcut</div>
              <p className="text-xs text-[#c0c7d4] max-w-md leading-relaxed">
                I can walk you through my Power Platform projects, Dynamics 365 depth, leadership
                style, AI implementations, cost optimization wins, architecture approach, and team
                management philosophy.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {ASK_ALI_PROMPTS.slice(0, 3).map((prompt) => (
                  <button
                    key={prompt.id}
                    onClick={() => onAsk(prompt.label)}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-[#1a1c20] text-[#a3c9ff] border border-[#282a2e] hover:border-[#0078d4]/60 hover:text-white transition-colors"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 space-y-2 ${
                  msg.role === 'user'
                    ? 'bg-[#0078d4]/25 border border-[#0078d4]/50 rounded-br-md'
                    : 'bg-[#1a1c20] border border-[#282a2e] rounded-bl-md'
                }`}
              >
                {msg.role === 'ali' && (
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#00dbe7] to-[#0078d4] flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
                      Ali
                    </span>
                  </div>
                )}
                <p className="text-xs sm:text-sm text-[#e2e2e8] leading-relaxed whitespace-pre-line">
                  {msg.text}
                </p>
                {msg.sectionId && msg.sectionLabel && (
                  <button
                    onClick={() => onJumpToSection(msg.sectionId!)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] rounded-lg px-3 py-1.5 transition-colors"
                  >
                    {msg.sectionLabel}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-2xl rounded-bl-md bg-[#1a1c20] border border-[#282a2e] px-4 py-3">
                <Bot className="w-4 h-4 text-[#00dbe7]" />
                <Loader2 className="w-4 h-4 text-[#a3c9ff] animate-spin" />
                <span className="text-xs text-[#c0c7d4]">Ali is typing…</span>
              </div>
            </div>
          )}
        </div>

        {/* Prompt chips */}
        <div className="border-t border-[#282a2e] p-3 sm:p-4 bg-[#161b22]">
          <div className="flex items-center gap-1.5 pb-2 px-1">
            <Sparkles className="w-3.5 h-3.5 text-[#dab9ff]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#3a3e47] font-bold">
              Suggested Prompts
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ASK_ALI_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => onAsk(prompt.label)}
                disabled={isTyping}
                className="text-[11px] font-medium px-2.5 py-1.5 rounded-lg bg-[#1a1c20] text-[#a3c9ff] border border-[#282a2e] hover:border-[#0078d4]/60 hover:text-white disabled:opacity-40 transition-colors"
              >
                {prompt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-[#282a2e] p-3 sm:p-4 bg-[#161b22]">
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Ask Ali anything…"
              className="flex-1 bg-[#111318] border border-[#282a2e] focus:border-[#0078d4] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6b7280]"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
          <div className="flex items-center gap-2 pt-2 px-1">
            <RotateCcw className="w-3 h-3 text-[#3a3e47]" />
            <span className="text-[10px] text-[#6b7280]">
              Ask Ali answers from my verified portfolio — no hallucinated experience.
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
