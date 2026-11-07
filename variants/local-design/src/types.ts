export type NavTab = 'home' | 'projects' | 'articles' | 'skills' | 'experience' | 'demos' | 'briefing';


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

// ─── Hiring Manager Experience ───────────────────────────────

export interface CareerJourneyRole {
  id: string;
  stage: string;
  title: string;
  company: string;
  period: string;
  responsibility: string;
  achievement: string;
  skillsGained: string[];
}

export interface CaseStudyOutcome {
  label: string;
  value: string;
}

export interface DeliveryCaseStudy {
  id: string;
  projectId: string;
  tagline: string;
  situation: string;
  approach: string[];
  architecture: string[];
  outcome: CaseStudyOutcome[];
  lessonsLearned: string[];
}

export interface MethodologyActivity {
  title: string;
  detail: string;
}

export interface MethodologyPhase {
  id: string;
  phase: string;
  summary: string;
  activities: MethodologyActivity[];
}

export interface OperatingCadenceItem {
  day: string;
  focus: string;
  detail: string;
}

export interface TeamManagementItem {
  title: string;
  points: string[];
}

export interface DecisionFrameworkItem {
  question: string;
  approach: string;
}

export interface AIStackTool {
  name: string;
  detail: string;
}

export interface AIWorkforceStack {
  id: string;
  category: string;
  description: string;
  tools: AIStackTool[];
}

export interface AIUseCase {
  title: string;
  detail: string;
  metric?: string;
}

export interface NinetyDayFocusArea {
  title: string;
  points: string[];
}

export interface NinetyDayPhase {
  id: string;
  window: string;
  phase: string;
  summary: string;
  focusAreas: NinetyDayFocusArea[];
}

export interface AskAliPrompt {
  id: string;
  label: string;
  keywords: string[];
  answer: string;
  sectionId: string;
  sectionLabel: string;
}

export interface ChatMessage {
  id: number;
  role: 'user' | 'ali';
  text: string;
  sectionId?: string;
  sectionLabel?: string;
}

export interface GuidedSectionMeta {
  id: string;
  title: string;
  kicker: string;
}
