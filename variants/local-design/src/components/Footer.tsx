import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavTab } from '../types';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenResume, onOpenContact }) => {
  return (
    <footer className="w-full bg-black border-t border-white/[0.08] text-neutral-400 pt-16 pb-12 mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Col 1 & 2: Bio & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center font-mono text-xs shadow-md">
                AF
              </div>
              <div>
                <h3 className="text-white font-bold text-base tracking-tight">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-[#2997ff] font-mono">Enterprise Modernization Architect</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-neutral-400 max-w-md">
              Helping enterprises retire legacy platforms, modernize business processes, and deploy AI-powered operating models using Microsoft 365, Power Platform, and Azure.
            </p>

            <div className="flex items-center space-x-2 pt-2">
              <a
                id="footer-link-linkedin"
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white hover:text-black text-neutral-300 flex items-center justify-center transition-all duration-200 border border-white/10"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-link-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white hover:text-black text-neutral-300 flex items-center justify-center transition-all duration-200 border border-white/10"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                id="footer-btn-email"
                onClick={onOpenContact}
                className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white hover:text-black text-neutral-300 flex items-center justify-center transition-all duration-200 border border-white/10"
                title="Send Message"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 3: Architecture & Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#2997ff] font-semibold">Case Studies</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('articles')} className="hover:text-white transition-colors flex items-center space-x-1.5 text-left">
                  <span>IOI Domino-to-M365 Platform</span>
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('articles')} className="hover:text-white transition-colors text-left">
                  SaltDistribute B2B Logistics
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('articles')} className="hover:text-white transition-colors text-left">
                  ResumeForge ATS Dynamic Engine
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('articles')} className="hover:text-white transition-colors text-left">
                  AI Job Application Pipeline
                </button>
              </li>
              <li className="pt-1">
                <a href="/showcase-articles/index.html" target="_blank" rel="noopener noreferrer" className="text-[#2997ff] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold">
                  <span>Explore All 24 Showcases</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Interactive Demos */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#30d158] font-semibold">Interactive Demos</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>FinOps Spend Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Industrial Nexus (ITSM)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Warehouse Central Hub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Rebate Formula Simulator</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>AI SOP Classification</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#bf5af2] font-semibold">Contact &amp; Location</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#2997ff] shrink-0 mt-0.5" />
                <span>Kuala Lumpur, MY / Bandung, ID</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-[#30d158] shrink-0" />
                <a href="mailto:aliakhmadfauzie@gmail.com" className="hover:text-white truncate">aliakhmadfauzie@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-[#bf5af2] shrink-0" />
                <span className="font-mono text-[11px]">+62 851-1055-2118</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                id="footer-btn-schedule"
                href="https://calendly.com/aliakhmadfauzie"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-primary w-full text-xs justify-center"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                <span>Schedule a Call</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Ali Akhmad Fauzie. Enterprise Modernization Portfolio.</p>
          <div className="flex items-center space-x-4 mt-3 sm:mt-0">
            <button onClick={onOpenResume} className="hover:text-white transition-colors">Resume</button>
            <span>•</span>
            <button onClick={() => onSelectTab('briefing')} className="hover:text-white transition-colors">Executive Briefing</button>
            <span>•</span>
            <button onClick={onOpenContact} className="hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
