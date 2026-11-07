import React from 'react';
import { certificationsData } from '../data/resumeData';
import { Award, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="label-mono mb-4 block">
              08 — Verified Credentials
            </span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Certifications & Executive Education
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              Continuous professional mastery in Six Sigma, AI Engineering, and Enterprise Business Automation.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#fdfdfc] border border-[#e0e0d8] p-6 hover:border-[#121212] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#e0e0d8]">
                  <div className="w-8 h-8 bg-[#f7f7f0] border border-[#e0e0d8] flex items-center justify-center text-[#121212]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="label-mono text-[#121212]">
                    {cert.status}
                  </span>
                </div>

                <h3 className="font-serif-display italic text-xl font-light text-[#121212] mb-2 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs text-[#444440] font-light">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#e0e0d8] flex items-center justify-between text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                <span>{cert.year}</span>
                <span className="text-[#121212]">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

