import React from 'react';
import { X } from 'lucide-react';
import { Dialog } from '../Dialog';
import { ContactActions } from '../ContactActions';

interface ContactModalProps { isOpen: boolean; onClose: () => void }

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;
  return (
    <Dialog onClose={onClose} labelledBy="contact-modal-title" className="w-[calc(100%-2rem)] max-w-2xl max-h-[90dvh] rounded-2xl bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] p-6 sm:p-8 overflow-y-auto">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 id="contact-modal-title" className="text-2xl font-bold">Let’s connect</h2>
          <p className="text-sm text-[var(--text-tertiary)] mt-2">Ali Akhmad Fauzie · Technology &amp; operations</p>
        </div>
        <button type="button" onClick={onClose} className="dialog-close" aria-label="Close contact"><X size={20} /></button>
      </div>
      <ContactActions />
    </Dialog>
  );
}
