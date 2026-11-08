import React, { useState } from 'react';
import { Mail, Copy, ExternalLink, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactActions() {
  const [status, setStatus] = useState('');
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setStatus('Email address copied.');
    } catch {
      setStatus('Could not copy automatically. Select and copy the email address below.');
    }
  };
  return (
    <div className="space-y-5">
      <p className="text-base text-[var(--text-secondary)] leading-relaxed">Discuss a role, an enterprise project, or an operations challenge. Email is the best place to start.</p>
      <div className="flex flex-wrap gap-3">
        <a className="action-primary" href={`mailto:${PERSONAL_INFO.email}`}><Mail size={18} /> Open email app</a>
        <button type="button" className="action-secondary" onClick={copyEmail}><Copy size={18} /> Copy email address</button>
      </div>
      <p className="text-sm text-[var(--text-tertiary)]">Your email app opens a draft. Review and send it there.</p>
      <a className="block text-[var(--text-accent)] break-all select-text underline underline-offset-4" href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
      <p role="status" aria-live="polite" className="text-sm text-[var(--text-secondary)] min-h-5">{status}</p>
      <div className="flex flex-wrap gap-4 border-t border-[var(--border-subtle)] pt-4">
        <a className="inline-flex items-center gap-2 min-h-11 text-sm text-[var(--text-secondary)] hover:text-white" href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer"><ExternalLink size={16} /> LinkedIn</a>
        <a className="inline-flex items-center gap-2 min-h-11 text-sm text-[var(--text-secondary)] hover:text-white" href="tel:+6285110552118"><Phone size={16} /> Call +62 851-1055-2118</a>
        <a className="inline-flex items-center gap-2 min-h-11 text-sm text-[var(--text-secondary)] hover:text-white" href="https://wa.me/6285110552118" target="_blank" rel="noreferrer">WhatsApp <ExternalLink size={16} /></a>
      </div>
    </div>
  );
}
