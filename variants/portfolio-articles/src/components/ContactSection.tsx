import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Key,
} from 'lucide-react';

interface ContactSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Power Platform / Operations Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link as fallback/action
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Set local submitted state
    setIsSubmitted(true);

    // Open mail client
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="label-mono mb-4 block">
                09 — Consultation & Inquiries
              </span>
              <h2 className="font-serif-display italic text-4xl sm:text-5xl font-light text-[#121212] tracking-tight mb-3">
                Let's Discuss Architecture & Scaling
              </h2>
              <p className="text-sm sm:text-base font-light text-[#444440] leading-relaxed">
                Available for enterprise solution architecture consulting, Power Platform migrations, and operational leadership advisory.
              </p>
            </div>

            {/* Contact Information List */}
            <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-6 space-y-3 font-mono-code text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">Email</span>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="text-[#121212] hover:underline flex items-center gap-1.5"
                  title="Click to copy email"
                >
                  <span>{personalInfo.email}</span>
                  {copiedField === 'email' ? (
                    <Check className="w-3 h-3 text-[#121212]" />
                  ) : (
                    <Copy className="w-3 h-3 text-[#6b6b63]" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">WhatsApp (MY)</span>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#121212] hover:underline"
                >
                  <span>{personalInfo.phoneMY}</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">Phone (ID)</span>
                <a
                  href={`tel:${personalInfo.phoneID.replace(/\s+/g, '')}`}
                  className="text-[#121212] hover:underline"
                >
                  <span>{personalInfo.phoneID}</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">LinkedIn</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#121212] hover:underline"
                >
                  <span>linkedin.com/in/aliakhmadf</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">Portfolio</span>
                <a
                  href={personalInfo.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#121212] hover:underline"
                >
                  <span>altechsolutionportofilo.vercel.app</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1.5">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">Availability</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Immediate / 1-Month Notice</span>
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#fdfdfc] border border-[#e0e0d8] font-mono-code text-[0.65rem] uppercase tracking-wider text-[#6b6b63] flex items-center justify-between">
              <span>Base: Kuala Lumpur (MYT UTC+8)</span>
              <span className="text-[#121212] font-semibold">Open to Hybrid / Remote</span>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#fdfdfc] border border-[#e0e0d8] p-6 sm:p-8">
              <h3 className="font-serif-display italic text-2xl sm:text-3xl font-light text-[#121212] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#6b6b63] font-mono-code uppercase tracking-wider mb-6">
                Consultation • Migration Advisory • Leadership Inquiries
              </p>

              {isSubmitted ? (
                <div className="p-8 bg-[#f7f7f0] border border-[#e0e0d8] text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-[#121212] mx-auto" />
                  <h4 className="font-serif-display italic text-2xl font-light text-[#121212]">
                    Message Prepared & Client Opened
                  </h4>
                  <p className="text-xs text-[#444440] font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. If your email client did not automatically trigger, please write directly to{' '}
                    <span className="font-mono-code text-[#121212]">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Power Platform / Operations Inquiry', message: '' });
                    }}
                    className="mt-4 px-4 py-2 bg-[#121212] text-[#fdfdfc] text-xs font-mono-code uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] placeholder-[#6b6b63] focus:outline-none focus:border-[#121212]"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] placeholder-[#6b6b63] focus:outline-none focus:border-[#121212]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                      Subject / Engagement Scope
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] focus:outline-none focus:border-[#121212]"
                    >
                      <option value="Power Platform / Operations Inquiry">Power Platform & Solution Architecture</option>
                      <option value="Legacy Lotus Domino / M365 Migration">Lotus Domino to M365 / Dataverse Migration</option>
                      <option value="Operational Leadership & Contact Center Consulting">Contact Center & Operations Leadership</option>
                      <option value="AI Builder & Copilot Studio Automation">AI & Workflow Automation Consultation</option>
                      <option value="General Recruitment / Executive Role">Full-Time / Contract Role Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                      Project Details or Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your architecture requirements, team goals, or timeline..."
                      className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] placeholder-[#6b6b63] focus:outline-none focus:border-[#121212] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-3 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] font-mono-code text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Ali</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

