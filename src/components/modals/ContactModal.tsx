import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import {
  X,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { useAccessibleDialog } from '../../hooks/useAccessibleDialog';
import { openContactDraft } from '../../utils/contactDraft';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Enterprise Migration / Architecture');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const dialogRef = useAccessibleDialog(isOpen, onClose);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openContactDraft(PERSONAL_INFO.email, inquiryType, [`From: ${name}`, `Reply to: ${email}`, '', message].join('\n'));
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        id="contact-modal-container"
        className="relative w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] shadow-2xl overflow-hidden my-8"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
          <div>
            <h2 id="contact-modal-title" className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
              Connect with Ali Akhmad Fauzie (AL)
            </h2>
            <p className="text-xs text-[var(--text-tertiary)] font-mono">
              Enterprise Power Platform Solution Architect &amp; Operations Leader
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
            aria-label="Close contact modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-12 h-12 bg-[var(--bg-primary)] border border-[var(--border-focus)] rounded-full flex items-center justify-center mx-auto text-[var(--text-accent)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Email Draft Prepared</h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span className="text-[var(--text-primary)] font-medium">{name || 'there'}</span>. Your email app should open with a draft regarding <span className="text-[var(--text-accent)]">{inquiryType}</span> and the reply address <span className="text-[var(--text-primary)]">{email}</span>. Please press Send in your email app. This site has not delivered your message.
              </p>
              <div className="pt-4 flex justify-center">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-[var(--radius-sm)] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-3.5 rounded-[var(--radius-md)] bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[var(--text-accent)] shrink-0" />
                    <div>
                      <p className="text-[11px] text-[var(--text-tertiary)] font-mono">Direct Email</p>
                      <p className="text-xs font-medium text-[var(--text-primary)]">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {copiedEmail ? <Check className="w-4 h-4 text-[var(--text-accent)]" /> : <Copy className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => copyToClipboard('+6285110552118', 'phone')}
                  className="p-3.5 rounded-[var(--radius-md)] bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-colors flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[var(--text-accent)] shrink-0" />
                    <div>
                      <p className="text-[11px] text-[var(--text-tertiary)] font-mono">Direct Phone / WhatsApp</p>
                      <p className="text-xs font-medium text-[var(--text-primary)]">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {copiedPhone ? <Check className="w-4 h-4 text-[var(--text-accent)]" /> : <Copy className="w-3.5 h-3.5" />}
                  </span>
                </button>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-full-name" className="text-xs font-medium text-[var(--text-secondary)]">Your Full Name</label>
                    <input
                      id="contact-full-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] focus:outline-none text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-[var(--text-secondary)]">Work / Contact Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] focus:outline-none text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-inquiry-type" className="text-xs font-medium text-[var(--text-secondary)]">Subject / Inquiry Scope</label>
                  <select
                    id="contact-inquiry-type"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] focus:outline-none text-xs text-[var(--text-primary)]"
                  >
                    <option value="Enterprise Migration / Architecture">
                      Lotus Domino / Legacy System Migration (365+ DB scale)
                    </option>
                    <option value="Full-Time / Contract Solution Architect">
                      Full-Time Solution Architect Opportunity
                    </option>
                    <option value="Power Apps & Custom PCF Development">
                      Power Apps &amp; Custom React PCF Development
                    </option>
                    <option value="AI Builder & Workflow Automation">
                      AI Builder &amp; Process Automation Design
                    </option>
                    <option value="Technical Interview / Consultation">
                      Technical Interview &amp; Architecture Briefing
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-[var(--text-secondary)]">
                    Project Details or Questions
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your migration scope, current infrastructure, team requirements, or scheduling preference..."
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-[var(--border-focus)] focus:outline-none text-xs text-[var(--text-primary)] placeholder-[var(--text-tertiary)] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-xs text-[var(--text-tertiary)] font-mono">
                    Opens your email app; press Send there
                  </p>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-medium transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Prepare Email</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
