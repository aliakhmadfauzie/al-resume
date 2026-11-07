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
  ArrowUpRight, 
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenResume, onOpenContact }) => {
  return (
    <footer className="w-full bg-[#0c0e12] border-t border-[#282a2e] text-[#c0c7d4] pt-14 pb-12 mt-20 relative overflow-hidden">
      <div className="glow-circle w-96 h-96 bg-[#0078d4]/10 top-0 left-1/4 -translate-y-1/2"></div>
      <div className="glow-circle w-96 h-96 bg-[#5c2d91]/10 bottom-0 right-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#282a2e]">
          
          {/* Col 1 & 2: Bio & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0078d4] to-[#00dbe7] p-[1.5px]">
                <div className="w-full h-full bg-[#111318] rounded-[10px] flex items-center justify-center font-mono font-bold text-[#a3c9ff]">
                  AF
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-base tracking-tight">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-[#00dbe7] font-mono">Solution Architect & Enterprise Modernization</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#c0c7d4] max-w-md">
              Specializing in architecting large-scale migrations from legacy systems (Lotus Domino) to Microsoft 365, Power Platform, and Dataverse with robust ALM, security governance, and AI automation.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                id="footer-link-linkedin"
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1e2024] hover:bg-[#0078d4] text-white flex items-center justify-center transition-all border border-[#282a2e]"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-link-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1e2024] hover:bg-[#282a2e] text-white flex items-center justify-center transition-all border border-[#282a2e]"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                id="footer-btn-email"
                onClick={onOpenContact}
                className="w-8 h-8 rounded-lg bg-[#1e2024] hover:bg-[#5c2d91] text-white flex items-center justify-center transition-all border border-[#282a2e]"
                title="Send Message"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 3: Architecture & Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-semibold">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('projects')} className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span>IOI Domino Migration (365+ DBs)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('projects')} className="hover:text-white transition-colors">
                  PulseTrack Ops Orchestrator
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('projects')} className="hover:text-white transition-colors">
                  SmartFlow Request Flow
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('projects')} className="hover:text-white transition-colors">
                  Tasek Cement Rebate Engine
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('projects')} className="hover:text-white transition-colors">
                  InfoSec & IT Server Register
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Interactive Demos */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">Interactive Demos</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>FinOps Spend Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#00dbe7]" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Industrial Nexus (ITSM)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#00dbe7]" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Warehouse Central Hub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#00dbe7]" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Rebate Formula Simulator</span>
                  <ArrowUpRight className="w-3 h-3 text-[#00dbe7]" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('demos')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>AI SOP Classification</span>
                  <ArrowUpRight className="w-3 h-3 text-[#00dbe7]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#dab9ff] font-semibold">Contact & Location</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2 text-[#c0c7d4]">
                <MapPin className="w-3.5 h-3.5 text-[#a3c9ff] shrink-0 mt-0.5" />
                <span>Kuala Lumpur, MY / Bandung, ID</span>
              </div>
              <div className="flex items-center space-x-2 text-[#c0c7d4]">
                <Mail className="w-3.5 h-3.5 text-[#00dbe7] shrink-0" />
                <a href="mailto:aliakhmadfauzie@gmail.com" className="hover:text-white truncate">aliakhmadfauzie@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2 text-[#c0c7d4]">
                <Phone className="w-3.5 h-3.5 text-[#dab9ff] shrink-0" />
                <span className="font-mono text-[11px]">+62 851-1055-2118</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-btn-schedule"
                onClick={onOpenContact}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-[#1e2024] hover:bg-[#0078d4] text-white border border-[#282a2e] transition-all flex items-center justify-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00dbe7]" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#c0c7d4]">
          <p>© {new Date().getFullYear()} Ali Akhmad Fauzie. All Rights Reserved. Built with React & TypeScript.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <button onClick={onOpenResume} className="hover:text-white transition-colors">Resume</button>
            <span>•</span>
            <button onClick={() => onSelectTab('interview')} className="hover:text-white transition-colors">Architect Interview Q&A</button>
            <span>•</span>
            <button onClick={onOpenContact} className="hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
