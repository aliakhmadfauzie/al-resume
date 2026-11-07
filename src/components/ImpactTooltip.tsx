import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp } from 'lucide-react';

interface ImpactTooltipProps {
  impact: string;
  children: React.ReactNode;
  className?: string;
}

export const ImpactTooltip: React.FC<ImpactTooltipProps> = ({
  impact,
  children,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Ensure a clean 1-sentence impact statement from metadata
  const formattedImpact = impact.endsWith('.') ? impact : `${impact}.`;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {children}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-4 right-4 -top-3 -translate-y-full z-30 rounded-[var(--radius-md)] bg-[var(--tooltip-surface)] border border-[var(--tooltip-border)] p-3.5 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-[var(--radius-sm)] bg-[var(--bg-default)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0 mt-0.5">
                <TrendingUp className="w-3.5 h-3.5 text-[var(--text-accent)]" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-accent)] font-semibold">
                  Impact Statement
                </span>
                <p className="text-xs text-[var(--text-primary)] font-medium leading-snug">
                  {formattedImpact}
                </p>
              </div>
            </div>
            {/* Tooltip Caret */}
            <div className="absolute left-8 -bottom-1.5 w-3 h-3 rotate-45 bg-[var(--tooltip-surface)] border-r border-b border-[var(--tooltip-border)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
