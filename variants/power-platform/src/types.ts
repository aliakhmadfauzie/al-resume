export type NavTab = 'home' | 'projects' | 'skills' | 'experience' | 'demos' | 'interview';

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
  liveDemoId?: 'finops' | 'it-service' | 'erp' | 'warehouse' | 'maintenance' | 'rebate' | 'cs-resolver';
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
