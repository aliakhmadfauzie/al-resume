import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  X, 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  ArrowUpRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="contact-modal-container"
        className="relative w-full max-w-2xl bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden my-6 shadow-2xl"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#2997ff]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight">Connect with Solution Architect</h2>
              <p className="text-[11px] text-neutral-400 font-mono">Available for Enterprise Modernization &amp; Architecture</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-white/[0.06] border border-white/10 rounded-full flex items-center justify-center mx-auto text-[#30d158]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Message Dispatched</h3>
              <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span className="text-white font-semibold">{name || 'there'}</span>. Ali will review your inquiry regarding <span className="text-[#2997ff]">{inquiryType}</span> and reply promptly at <span className="text-white">{email}</span>.
              </p>
              <div className="pt-2 flex justify-center space-x-2">
                <button
                  onClick={resetForm}
                  className="apple-btn-primary text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl apple-card hover:border-white/20 transition-all cursor-pointer group flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/[0.06] text-[#2997ff] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">Direct Email</p>
                      <p className="text-xs font-semibold text-white group-hover:text-[#2997ff] font-mono">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href="https://calendly.com/aliakhmadfauzie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl apple-card hover:border-white/20 transition-all cursor-pointer group flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/[0.06] text-[#bf5af2] flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">Schedule Call</p>
                      <p className="text-xs font-semibold text-white group-hover:text-[#bf5af2] font-mono">calendly.com/aliakhmadfauzie</p>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">Work / Contact Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-300">Subject / Inquiry Scope</label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/10 text-xs text-white focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="Enterprise Migration / Architecture">Lotus Domino / Legacy System Migration (365+ DB scale)</option>
                    <option value="Full-Time / Contract Solution Architect">Full-Time Solution Architect Opportunity</option>
                    <option value="Power Apps & Custom PCF Development">Power Apps &amp; Custom React PCF Development</option>
                    <option value="AI Builder & Workflow Automation">AI Builder &amp; Process Automation Design</option>
                    <option value="Technical Interview / Consultation">Technical Interview &amp; Architecture Briefing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-300">Project Scope or Details</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe migration scope, current infrastructure, team requirements, or scheduling preference..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-[11px] text-neutral-400 flex items-center space-x-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" />
                    <span>Response within 4–12 hours</span>
                  </p>
                  <button
                    type="submit"
                    className="apple-btn-primary text-xs !py-2 !px-4 flex items-center space-x-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
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
