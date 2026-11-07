import React, { useState } from 'react';
import { personalInfo, timelineData, skillCategories, certificationsData, projectsData, languagesData } from '../data/resumeData';
import { ProfileMode } from '../types';
import {
  Printer,
  Download,
  Copy,
  Check,
  X,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Award,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: ProfileMode;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'hybrid',
}) => {
  const [selectedFocus, setSelectedFocus] = useState<ProfileMode>(initialMode);
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const isArch = selectedFocus === 'architecture' || selectedFocus === 'architect';
    const isOps = selectedFocus === 'operations';
    const plainText = `
ALI AKHMAD FAUZIE
${isArch ? personalInfo.titles.architect : isOps ? personalInfo.titles.operations : personalInfo.titles.hybrid}
Location: ${personalInfo.location}
Email: ${personalInfo.email} | Phone: ${personalInfo.phoneMY} / ${personalInfo.phoneID}
LinkedIn: ${personalInfo.linkedin} | Portfolio: ${personalInfo.portfolioUrl}

--------------------------------------------------
PROFESSIONAL SUMMARY
${personalInfo.bio}
${personalInfo.aboutParagraphs.join('\n\n')}

--------------------------------------------------
CORE TECHNICAL & OPERATIONAL COMPETENCIES
${skillCategories.map((cat) => `* ${cat.title}: ${cat.skills.map((s) => s.name).join(', ')}`).join('\n')}

--------------------------------------------------
PROFESSIONAL EXPERIENCE
${timelineData.filter(t => t.type === 'experience').map((item) => `
${item.role} | ${item.company}
${item.period} | ${item.location}
${item.description.map((d) => `• ${d}`).join('\n')}
`).join('\n')}

--------------------------------------------------
KEY PROJECTS & OPERATIONAL INNOVATIONS
${projectsData.map((p) => `
• ${p.title} (${p.timeline})
  ${p.description}
  Key Results: ${p.results ? p.results.join('; ') : ''}
`).join('\n')}

--------------------------------------------------
EDUCATION & CERTIFICATIONS
• Bachelor of International Business Management (Honours) - Universiti Utara Malaysia (2013-2016)
  Minor in Logistics & Transportation | UUM International Scholarship | 3x Dean's List
${certificationsData.map((c) => `• ${c.name} - ${c.issuer} (${c.status})`).join('\n')}

--------------------------------------------------
LANGUAGES
${languagesData.map((l) => `• ${l.language}: ${l.proficiency}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleDownloadVCard = () => {
    const isArch = selectedFocus === 'architecture' || selectedFocus === 'architect';
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Fauzie;Ali;Akhmad;;
FN:Ali Akhmad Fauzie
ORG:Enterprise Architecture & Operations
TITLE:${isArch ? personalInfo.titles.architect : personalInfo.titles.operations}
TEL;TYPE=CELL,VOICE:${personalInfo.phoneMY}
TEL;TYPE=CELL,VOICE:${personalInfo.phoneID}
EMAIL;TYPE=INTERNET,PREF:${personalInfo.email}
URL:${personalInfo.portfolioUrl}
URL;TYPE=LinkedIn:${personalInfo.linkedin}
ADR;TYPE=WORK:;;Kuala Lumpur;Federal Territory;Malaysia
NOTE:Power Platform Architect & Operations Leader. 365+ DBs migrated, 34-member team scaled.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ali_Akhmad_Fauzie.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#fdfdfc] border border-[#121212] w-full max-w-4xl shadow-2xl overflow-hidden my-6 relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="p-4 sm:p-5 bg-[#f7f7f0] border-b border-[#e0e0d8] flex flex-wrap items-center justify-between gap-3 no-print font-mono-code text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#fdfdfc] border border-[#e0e0d8] text-[#121212]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-display italic text-lg font-light text-[#121212] leading-tight">
                Curriculum Vitae & Verified Credentials
              </h2>
              <p className="text-[0.65rem] text-[#6b6b63] uppercase tracking-wider">
                Print-ready document • Formatted for ATS & Executive Review
              </p>
            </div>
          </div>

          {/* Profile Focus Filter Pills */}
          <div className="flex items-center bg-[#fdfdfc] p-1 border border-[#e0e0d8] text-xs">
            <button
              onClick={() => setSelectedFocus('full')}
              className={`px-3 py-1 transition-all text-[0.7rem] uppercase tracking-wider cursor-pointer ${
                selectedFocus === 'full' || selectedFocus === 'hybrid'
                  ? 'bg-[#121212] text-[#fdfdfc] font-semibold'
                  : 'text-[#444440] hover:text-[#121212]'
              }`}
            >
              Full Profile
            </button>
            <button
              onClick={() => setSelectedFocus('architecture')}
              className={`px-3 py-1 transition-all text-[0.7rem] uppercase tracking-wider cursor-pointer ${
                selectedFocus === 'architecture' || selectedFocus === 'architect'
                  ? 'bg-[#1d4ed8] text-[#fdfdfc] font-semibold'
                  : 'text-[#444440] hover:text-[#121212]'
              }`}
            >
              Architecture &amp; Solution Engineering
            </button>
            <button
              onClick={() => setSelectedFocus('operations')}
              className={`px-3 py-1 transition-all text-[0.7rem] uppercase tracking-wider cursor-pointer ${
                selectedFocus === 'operations'
                  ? 'bg-[#0f766e] text-[#fdfdfc] font-semibold'
                  : 'text-[#444440] hover:text-[#121212]'
              }`}
            >
              Operations &amp; Leadership
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="cv-print-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs bg-[#121212] hover:bg-[#2c2c2c] text-[#fdfdfc] font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              title="Print directly or save as clean PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Download PDF / Print</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              id="cv-copy-plain-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-[#fdfdfc] hover:bg-[#e0e0d8] text-[#121212] border border-[#121212] uppercase tracking-wider font-medium transition-colors cursor-pointer"
              title="Copy plain-text version for ATS application forms"
            >
              {copiedText ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#444440]" />
              )}
              <span>{copiedText ? 'Copied ATS Text' : 'Copy Plain Text (ATS)'}</span>
            </button>

            <button
              onClick={handleDownloadVCard}
              id="cv-vcard-btn"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-[#fdfdfc] hover:bg-[#e0e0d8] text-[#121212] border border-[#e0e0d8] uppercase tracking-wider transition-colors cursor-pointer"
              title="Download Contact vCard"
            >
              <Download className="w-3.5 h-3.5 text-[#121212]" />
              <span>.vcf</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-[#fdfdfc] border border-[#e0e0d8] text-[#121212] hover:bg-[#e0e0d8] transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas / Paper Simulation */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#ecece4]">
          <div
            id="printable-resume"
            className="print-page max-w-[800px] mx-auto bg-white text-[#111827] p-8 sm:p-12 shadow-xl font-sans"
            style={{ minHeight: '1000px' }}
          >
            {/* Resume Header */}
            <div className="border-b-2 border-neutral-900 pb-5 mb-6 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-1">
                {personalInfo.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#006491] mb-3">
                {selectedFocus === 'architecture' || selectedFocus === 'architect'
                  ? personalInfo.titles.architect
                  : selectedFocus === 'operations'
                  ? personalInfo.titles.operations
                  : personalInfo.titles.hybrid}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-700 font-mono-code mb-2">
                <span>{personalInfo.location}</span>
                <span>•</span>
                <span>{personalInfo.phoneMY}</span>
                <span>•</span>
                <span className="font-semibold text-neutral-900">{personalInfo.email}</span>
                <span>•</span>
                <span>{personalInfo.linkedinHandle}</span>
              </div>

              {/* Developer Ecosystem Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                  Google Developer (Android & Cloud)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D6B9]" />
                  Lark Developer (Certified • Open Platform)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-800 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A4EF]" />
                  Microsoft Developer (Power Platform & ALM)
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                {selectedFocus === 'architect'
                  ? "Fullstack Engineer, Mobile App Developer (Android/iOS), and Enterprise Power Platform Architect with 9+ years of hands-on experience designing, developing, and deploying enterprise-grade native mobile, web, and low-code/pro-code hybrid solutions. Proven track record of modernizing legacy infrastructures (migrating 361 Lotus Domino legacy databases to Microsoft 365, SharePoint Online, and Dataverse) and delivering 16+ production apps. Expert in React Native, Flutter, Swift, Kotlin, TypeScript, React 19, Dataverse modeling, C# Plugins, and AI Builder integrations to eliminate manual reporting and streamline complex business operations while avoiding MYR 360K/yr in licensing costs."
                  : selectedFocus === 'operations'
                  ? "Results-driven Operations Leader and Service Delivery Manager with over 8 years of progressive experience leading high-performing, multilingual service delivery teams across global markets. Proven track record of managing end-to-end operations (up to 34 direct reports), driving customer satisfaction, and consistently exceeding strict SLA benchmarks (>98% compliance). Adept at leveraging process automation, real-time analytics, and workforce efficiency frameworks to streamline customer support workflows, reduce handle times, and elevate overall customer experience."
                  : "Fullstack Engineer, Mobile App Developer (Android & iOS), Solution Architect, and Operations Leader with 9+ years of blended technical and leadership excellence. Experienced in building cross-platform & native mobile apps, modern fullstack web platforms, migrating 361 legacy databases to modern Microsoft 365/Dataverse architectures (saving MYR 360K/yr in licensing), and scaling multilingual service operations teams from 9 to 34 agents across 7 international markets with >98% SLA compliance and Six Sigma Green Belt precision."}
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Core Technical & Operational Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-neutral-800">
                <div>
                  <span className="font-bold text-neutral-900">Mobile & Fullstack Stack:</span>{' '}
                  Android (Kotlin/Java), iOS (Swift), React Native & Expo, Flutter, TypeScript, React 19, Next.js, Node.js, Express, REST & GraphQL APIs.
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Power Platform & Dataverse:</span>{' '}
                  Power Apps (Canvas & Model-Driven, PCF), Dataverse Modeling, Power Automate (Cloud & Desktop Flows), C# Plugins, Power BI, SharePoint Online.
                </div>
                <div>
                  <span className="font-bold text-neutral-900">AI & Intelligent Automation:</span>{' '}
                  AI Builder, Copilot Studio, Azure OpenAI Integration, LLM Prompt Engineering, Lark Automation & Bots.
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Leadership & Operations:</span>{' '}
                  SLA & KPI Management (&gt;98%), Team Leadership (up to 34 FTE), Incident Command, Escalation Triage, Six Sigma Green Belt, Salesforce CRM, Zendesk, Jira.
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {timelineData
                  .filter((t) => t.type === 'experience')
                  .map((item) => (
                    <div key={item.id} className="text-xs text-neutral-800">
                      <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                        <span className="font-bold text-neutral-900 text-sm">
                          {item.role}
                        </span>
                        <span className="font-mono-code text-[11px] font-semibold text-neutral-600">
                          {item.period}
                        </span>
                      </div>
                      <div className="text-[11px] text-neutral-600 mb-1.5 font-medium">
                        {item.company} — {item.location}
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-neutral-800 leading-relaxed">
                        {item.description.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>

            {/* Featured Technical Projects */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                Featured Technical Projects & Operational Innovations
              </h2>
              <div className="space-y-3 text-xs text-neutral-800">
                {projectsData.slice(0, 4).map((p) => (
                  <div key={p.id}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-bold text-neutral-900">
                        {p.title}
                      </span>
                      <span className="font-mono-code text-[11px] text-neutral-600">
                        {p.timeline}
                      </span>
                    </div>
                    <p className="text-neutral-700 mt-0.5 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Education & Certifications
              </h2>
              <div className="space-y-2 text-xs text-neutral-800">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-neutral-900">
                      Bachelor of International Business Management (Honours)
                    </span>
                    <span className="font-mono-code text-[11px]">Feb 2013 — Dec 2016</span>
                  </div>
                  <div className="text-neutral-700">
                    Universiti Utara Malaysia (UUM) • Minor in Logistics & Transportation • UUM International Scheme Scholarship Recipient • 3x Dean’s Academic Award
                  </div>
                </div>

                <div className="pt-2">
                  <span className="font-bold text-neutral-900 block mb-1">
                    Professional Certifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-neutral-700">
                    {certificationsData.map((c, idx) => (
                      <div key={idx}>
                        • <span className="font-semibold text-neutral-900">{c.name}</span> ({c.issuer})
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                Languages
              </h2>
              <div className="flex flex-wrap gap-4 text-xs text-neutral-800">
                {languagesData.map((l) => (
                  <span key={l.language}>
                    <span className="font-bold text-neutral-900">{l.language}:</span> {l.proficiency}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
