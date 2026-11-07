import React from 'react';

interface SectionShellProps {
  id?: string;
  step: string;
  kicker: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  step,
  kicker,
  title,
  description,
  children
}) => (
  <section id={id} className="scroll-mt-28">
    <div className="flex items-start gap-4">
      <div className="hidden sm:flex shrink-0 flex-col items-center pt-1">
        <span className="font-mono text-xs font-bold text-[#a3c9ff] bg-[#0078d4]/10 border border-[#0078d4]/40 rounded-lg px-2.5 py-1.5 whitespace-nowrap">
          {step}
        </span>
      </div>
      <div className="space-y-1.5 min-w-0">
        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
          {kicker}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{title}</h2>
        {description && (
          <p className="text-xs sm:text-sm text-[#c0c7d4] max-w-3xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
    <div className="mt-6 sm:mt-8">{children}</div>
  </section>
);
