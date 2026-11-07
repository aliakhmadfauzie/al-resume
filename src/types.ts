export type NavTab =
  | 'home'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'certifications'
  | 'demos'
  | 'interview';

export interface ProjectGalleryItem {
  id: string;
  title: string;
  caption: string;
  imageUrl?: string;
  expectedPath: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'core' | 'migration' | 'standalone' | 'security';
  date: string;
  role: string;
  tools: string[];
  problem: string;
  solution: string;
  impact: string;
  impactMetrics?: { label: string; value: string }[];
  technicalDetails?: string[];
  systemDesign?: string;
  repoUrl?: string;
  codeSnippet?: string;
  gallery?: ProjectGalleryItem[];
  liveDemoId?:
    | 'finops'
    | 'it-service'
    | 'erp'
    | 'warehouse'
    | 'maintenance'
    | 'rebate'
    | 'cs-resolver'
    | 'ats-automation'
    | 'garment-erp'
    | 'she-matrix';
  featured?: boolean;
}

export interface MigrationSlice {
  id: string;
  letter: string;
  title: string;
  appCount: number;
  role: string;
  tools: string[];
  problem: string;
  solution: string;
  impact: string;
  examples: string[];
  keyHighlights: string[];
  gallery?: ProjectGalleryItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  tags: string[];
  bulletPoints: string[];
  iconUrl: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description?: string;
  skills: {
    name: string;
    level?: string;
    percentage?: number;
    description: string;
    badges?: string[];
  }[];
}

export interface DevStackItem {
  code: string;
  name: string;
  percentage: number;
  color: string;
}

export interface GovernanceItem {
  icon: string;
  name: string;
  description: string;
}

export interface BusinessCompetency {
  icon: string;
  title: string;
  description: string;
}

export interface InterviewTopic {
  id: string;
  category: string;
  question: string;
  executiveSummary: string;
  deepDiveArchitecture: string;
  codeOrFlowSnippet?: string;
  keyArtifacts: string[];
}

export interface ImpactMetric {
  label: string;
  value: string;
  description: string;
}

export interface EnterprisePortfolio {
  totalAppsModernized: number;
  totalProductionApps: number;
  totalCanvasScreens: number;
  totalComponents: number;
  totalAIAgents: number;
  description: string;
  departments: { name: string; appCount: number }[];
}

export interface ArchitectureGovernanceSection {
  icon: string;
  title: string;
  points: string[];
}

export interface ArchitectureGovernance {
  dataverseModel: ArchitectureGovernanceSection;
  securityCompliance: ArchitectureGovernanceSection;
  almGovernance: ArchitectureGovernanceSection;
  proCodeExtensions: ArchitectureGovernanceSection;
}

export interface SkillProficiency {
  name: string;
  level: string;
}

export interface TransformationMetric {
  label: string;
  baseline: string;
  result: string;
  description: string;
}

export interface TrustSignal {
  icon: string;
  title: string;
  detail: string;
  category: 'certification' | 'leadership' | 'award' | 'program';
}

export interface ThoughtLeadershipItem {
  icon: string;
  title: string;
  summary: string;
  points: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  category: 'Power Platform' | 'AI & Copilot' | 'Data & Analytics' | 'Project & Process' | 'Enterprise Automation';
  credentialType?: string;
  skills: string[];
  verified: boolean;
  credentialUrl?: string;
  credentialId?: string;
  summary?: string;
  productionApplication?: string;
  verificationMethod?: string;
  hoursOrModules?: string;
  expiryDate?: string;
  pdfUrl?: string;
}

export interface HonorAwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  certificatePdfUrl?: string;
}

export interface LinkedInTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  scope: string;
  date: string;
  badge: string;
}

