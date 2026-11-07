import React, { useState } from 'react';
import {
  GitBranch,
  CheckCircle2,
  Cpu,
  Package,
  Server,
  ArrowRight,
  Terminal,
  Workflow,
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      tag: 'STAGE 01',
      title: 'SOURCE CODE',
      subtitle: 'Version Control & Solution Extraction',
      icon: <GitBranch className="w-5 h-5 text-[#121212]" />,
      summary: 'Power Platform Canvas & Model-Driven apps unpackaged via PAC CLI into Git repo.',
      details: [
        'PAC CLI `pac solution unpack` converts binary .zip into human-readable XML/JSON/YAML.',
        'Feature branching model with mandatory pull request code reviews and Power Fx linting.',
        'Component assets (Canvas JSON, Dataverse customizations, PCF controls) fully tracked in Git.',
      ],
      codeSnippet: `pac solution export --name IOI_Enterprise_Core --path ./export.zip
pac solution unpack --zipfile ./export.zip --folder ./src/solutions/IOI_Enterprise_Core
git commit -m "feat(qc): add automated batch approval flow"`,
    },
    {
      id: 2,
      tag: 'STAGE 02',
      title: 'BUILD & VALIDATION',
      subtitle: 'Static Analysis, Power Fx & Schema Checks',
      icon: <Cpu className="w-5 h-5 text-[#121212]" />,
      summary: 'Automated Solution Checker runs static analysis and security rule verification.',
      details: [
        'Power Apps Solution Checker validates performance, deprecated APIs, and delegation rules.',
        'Automated unit tests for custom PCF React components and Power Automate error fallbacks.',
        'Environment variable tokens replaced for target runtime configuration.',
      ],
      codeSnippet: `pac solution check --solution-path ./dist/IOI_Enterprise_Core.zip
# Validating delegation limits, relational queries & role permissions
Result: 0 Critical Errors, 0 High Severity Warnings. Ready for packing.`,
    },
    {
      id: 3,
      tag: 'STAGE 03',
      title: 'ARTIFACT CREATION',
      subtitle: 'Managed Solution Packaging & Versioning',
      icon: <Package className="w-5 h-5 text-[#121212]" />,
      summary: 'Generates immutable Managed Solutions with strict semantic version tags.',
      details: [
        'Compiles source into production-ready Managed Solution `.zip` artifact.',
        'Auto-increments semantic build tag (e.g. `v2.4.108`) with release changelog generation.',
        'Signs and publishes artifacts to Azure Artifacts & GitHub Releases store.',
      ],
      codeSnippet: `pac solution pack --zipfile ./dist/IOI_Enterprise_Core_managed.zip --folder ./src --managed true
echo "Artifact created: IOI_Enterprise_Core_v2.4.108_managed.zip"`,
    },
    {
      id: 4,
      tag: 'STAGE 04',
      title: 'DEPLOYMENT & RUNTIME',
      subtitle: 'Automated Multi-Environment Rollout',
      icon: <Server className="w-5 h-5 text-[#121212]" />,
      summary: 'Staged automated release to Development, UAT Validation, and Production Dataverse.',
      details: [
        'Zero-downtime deployment into Dataverse with automated connection reference binding.',
        'Automated smoke tests run against live endpoints, verifying AI Builder models & Power BI feeds.',
        'Instant rollback snapshot prepared in case of operational SLA deviation.',
      ],
      codeSnippet: `pac solution import --path ./dist/IOI_Enterprise_Core_managed.zip --activate-plugins true
pac admin assign-user-role --role "Operations Lead" --environment prod-apac
Deployment Status: 100% Succeeded on Production (APAC-Dataverse).`,
    },
  ];

  const current = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section id="architecture" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="label-mono mb-4 block">
              06 — ALM & DevOps Framework
            </span>
            <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
              Enterprise CI/CD & Architecture
            </h2>
            <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
              Interactive pipeline visualizer demonstrating how I manage low-code and pro-code governance, from PAC CLI unpackaging to multi-tier Dataverse production deployment.
            </p>
          </div>
        </div>

        {/* Pipeline Stage Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                id={`arch-step-${step.id}-btn`}
                className={`text-left p-6 transition-all duration-200 border flex flex-col justify-between h-full cursor-pointer ${
                  isSelected
                    ? 'bg-[#f7f7f0] border-[#121212] shadow-sm'
                    : 'bg-[#fdfdfc] border-[#e0e0d8] hover:border-[#121212]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="label-mono text-[#121212]">
                      {step.tag}
                    </span>
                    <div className="p-2 bg-[#fdfdfc] border border-[#e0e0d8]">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-serif-display italic text-xl font-normal text-[#121212] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#444440] font-light line-clamp-2 leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#e0e0d8] flex items-center justify-between text-xs font-mono-code uppercase tracking-wider">
                  <span className={isSelected ? 'text-[#121212] font-semibold' : 'text-[#6b6b63]'}>
                    {isSelected ? '● Selected' : 'Inspect'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#121212] translate-x-0.5' : 'text-[#6b6b63]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Inspector */}
        <div className="bg-[#f7f7f0] border border-[#121212] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="label-mono text-[#121212]">
                  {current.tag} // Stage Details
                </span>
              </div>
              <h3 className="font-serif-display italic text-3xl font-light text-[#121212]">
                {current.title}
              </h3>

              <p className="text-sm font-light text-[#444440] leading-relaxed">
                {current.summary}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#e0e0d8]">
                {current.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-[#444440]">
                    <span className="font-mono-code text-[#121212] select-none mt-0.5">—</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal / Code Inspector */}
            <div className="lg:col-span-6">
              <div className="bg-[#121212] border border-[#121212] text-[#fdfdfc] p-4">
                <div className="pb-3 mb-3 border-b border-[#333333] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6b6b63] inline-block" />
                    <span className="text-[11px] font-mono-code text-[#6b6b63]">
                      pipeline-execution.sh
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono-code text-[#6b6b63]">
                    <Terminal className="w-3 h-3" />
                    <span>PAC CLI 1.34</span>
                  </div>
                </div>
                <pre className="text-xs font-mono-code text-[#fdfdfc] overflow-x-auto leading-relaxed whitespace-pre-wrap">
                  <code>{current.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

