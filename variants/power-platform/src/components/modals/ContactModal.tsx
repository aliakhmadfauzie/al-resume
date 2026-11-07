import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Copy, 
  Check, 
  Linkedin,
  MessageSquare
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="contact-modal-container"
        className="relative w-full max-w-2xl bg-[#161b22] border border-[#282a2e] rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#282a2e] bg-[#111318]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#5c2d91]/20 border border-[#5c2d91]/40 flex items-center justify-center text-[#dab9ff]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight">Connect with Solution Architect</h2>
              <p className="text-[11px] text-[#c0c7d4]">Available for Enterprise Modernization & Architecture Roles</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1e2024] hover:bg-[#282a2e] text-[#c0c7d4] hover:text-white border border-[#282a2e] transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-[#0078d4]/20 border border-[#0078d4]/50 rounded-full flex items-center justify-center mx-auto text-[#00dbe7] animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
              <p className="text-xs text-[#c0c7d4] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span className="text-white font-semibold">{name || 'there'}</span>. Ali will review your inquiry regarding <span className="text-[#a3c9ff]">{inquiryType}</span> and reply promptly at <span className="text-white">{email}</span>.
              </p>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-lg bg-[#0078d4] hover:bg-[#0086ea] text-white text-xs font-semibold shadow-lg shadow-[#0078d4]/30"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-3.5 rounded-xl bg-[#1a1c20] hover:bg-[#1e2024] border border-[#282a2e] hover:border-[#0078d4]/50 transition-all cursor-pointer group flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0078d4]/20 text-[#a3c9ff] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#c0c7d4] font-mono uppercase">Direct Email</p>
                      <p className="text-xs font-semibold text-white group-hover:text-[#a3c9ff]">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#c0c7d4]">
                    {copiedEmail ? <Check className="w-4 h-4 text-[#00dbe7]" /> : <Copy className="w-3.5 h-3.5" />}
                  </span>
                </div>

                <div 
                  onClick={() => copyToClipboard("+6285110552118", 'phone')}
                  className="p-3.5 rounded-xl bg-[#1a1c20] hover:bg-[#1e2024] border border-[#282a2e] hover:border-[#5c2d91]/50 transition-all cursor-pointer group flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#5c2d91]/20 text-[#dab9ff] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#c0c7d4] font-mono uppercase">WhatsApp / Direct Call</p>
                      <p className="text-xs font-semibold text-white group-hover:text-[#dab9ff]">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#c0c7d4]">
                    {copiedPhone ? <Check className="w-4 h-4 text-[#00dbe7]" /> : <Copy className="w-3.5 h-3.5" />}
                  </span>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#c0c7d4]">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c20] border border-[#282a2e] focus:border-[#0078d4] focus:outline-none text-xs text-white placeholder-[#555962]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#c0c7d4]">Work / Contact Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c20] border border-[#282a2e] focus:border-[#0078d4] focus:outline-none text-xs text-white placeholder-[#555962]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#c0c7d4]">Subject / Inquiry Scope</label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c20] border border-[#282a2e] focus:border-[#0078d4] focus:outline-none text-xs text-white"
                  >
                    <option value="Enterprise Migration / Architecture">Lotus Domino / Legacy System Migration (365+ DB scale)</option>
                    <option value="Full-Time / Contract Solution Architect">Full-Time Solution Architect Opportunity</option>
                    <option value="Power Apps & Custom PCF Development">Power Apps & Custom React PCF Development</option>
                    <option value="AI Builder & Workflow Automation">AI Builder & Process Automation Design</option>
                    <option value="Technical Interview / Consultation">Technical Interview & Architecture Briefing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#c0c7d4]">Project Details or Questions</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your migration scope, current infrastructure, team requirements, or scheduling preference..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1c20] border border-[#282a2e] focus:border-[#0078d4] focus:outline-none text-xs text-white placeholder-[#555962] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-[11px] text-[#c0c7d4] flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00dbe7]" />
                    <span>Typically responds within 4–12 hours</span>
                  </p>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0078d4] to-[#5c2d91] hover:from-[#0086ea] hover:to-[#6b35a8] text-white text-xs font-semibold shadow-md shadow-[#0078d4]/30 transition-all"
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
