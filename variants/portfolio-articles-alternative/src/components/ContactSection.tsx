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
            <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-6 space-y-2 font-mono-code text-xs">
              <div className="flex items-center justify-between py-2 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">Email</span>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="min-h-[44px] px-2 text-[#121212] hover:underline flex items-center gap-1.5 cursor-pointer"
                  title="Click to copy email"
                  aria-label="Copy email to clipboard"
                >
                  <span>{personalInfo.email}</span>
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-[#121212]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#6b6b63]" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">WhatsApp (MY)</span>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp conversation in Malaysia"
                  className="min-h-[44px] px-2 inline-flex items-center text-[#121212] hover:underline"
                >
                  <span>{personalInfo.phoneMY}</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">Phone (ID)</span>
                <a
                  href={`tel:${personalInfo.phoneID.replace(/\s+/g, '')}`}
                  aria-label="Call Indonesia phone number"
                  className="min-h-[44px] px-2 inline-flex items-center text-[#121212] hover:underline"
                >
                  <span>{personalInfo.phoneID}</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">LinkedIn</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile in new tab"
                  className="min-h-[44px] px-2 inline-flex items-center text-[#121212] hover:underline"
                >
                  <span>linkedin.com/in/aliakhmadf</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#e0e0d8]">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">Portfolio</span>
                <a
                  href={personalInfo.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open personal portfolio site"
                  className="min-h-[44px] px-2 inline-flex items-center text-[#121212] hover:underline"
                >
                  <span>altechsolutionportofilo.vercel.app</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-[#6b6b63] uppercase tracking-wider text-[0.65rem]">Availability</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Immediate / 30 Days</span>
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#fdfdfc] border border-[#e0e0d8] flex items-center justify-between text-[0.68rem] font-mono-code text-[#6b6b63]">
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
                <div 
                  className="p-8 bg-[#f7f7f0] border border-[#e0e0d8] text-center space-y-3"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#121212] mx-auto" />
                  <h4 className="font-serif-display italic text-2xl font-light text-[#121212]">
                    Message Prepared &amp; Client Opened
                  </h4>
                  <p className="text-xs text-[#444440] font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. If your email client did not automatically trigger, please write directly to{' '}
                    <span className="font-mono-code text-[#121212] font-semibold">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Power Platform / Operations Inquiry', message: '' });
                    }}
                    className="mt-4 min-h-[44px] px-6 py-2.5 bg-[#121212] text-[#fdfdfc] text-xs font-mono-code uppercase tracking-wider font-semibold cursor-pointer shadow-xs"
                    aria-label="Reset form and send another message"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-form-name" className="block text-[0.68rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        id="contact-form-name"
                        name="name"
                        type="text"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full min-h-[44px] bg-[#f7f7f0] border border-[#e0e0d8] px-3.5 py-2.5 text-xs text-[#121212] placeholder-[#6b6b63] focus:outline-none focus:border-[#121212] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-form-email" className="block text-[0.68rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5 font-semibold">
                        Email Address *
                      </label>
                      <input
                        id="contact-form-email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full min-h-[44px] bg-[#f7f7f0] border border-[#e0e0d8] px-3.5 py-2.5 text-xs text-[#121212] placeholder-[#6b6b63] focus:outline-none focus:border-[#121212] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-form-subject" className="block text-[0.68rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5 font-semibold">
                      Subject / Engagement Scope
                    </label>
                    <select
                      id="contact-form-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full min-h-[44px] bg-[#f7f7f0] border border-[#e0e0d8] px-3.5 py-2.5 text-xs text-[#121212] focus:outline-none focus:border-[#121212] transition-colors cursor-pointer"
                    >
                      <option value="Power Platform / Operations Inquiry">Power Platform &amp; Solution Architecture</option>
                      <option value="Legacy Lotus Domino / M365 Migration">Lotus Domino to M365 / Dataverse Migration</option>
                      <option value="Operational Leadership & Contact Center Consulting">Contact Center &amp; Operations Leadership</option>
                      <option value="AI Builder & Copilot Studio Automation">AI &amp; Workflow Automation Consultation</option>
                      <option value="General Recruitment / Executive Role">Full-Time / Contract Role Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-form-message" className="block text-[0.68rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5 font-semibold">
                      Project Details or Message *
                    </label>
                    <textarea
                      id="contact-form-message"
                      name="message"
                      required
                      aria-required="true"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your architecture requirements, team goals, or timeline..."
                      className="w-full bg-[#f7f7f0] border border-[#e0e0d8] p-3.5 text-xs text-[#121212] placeholder-[#6b6b63] focus:outline-none focus:border-[#121212] resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full min-h-[48px] py-3.5 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] font-mono-code text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs active:bg-[#2c2c2c]"
                  >
                    <Send className="w-4 h-4" />
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

