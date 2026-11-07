export type ProfileMode = 'full' | 'architecture' | 'operations' | 'hybrid' | 'architect';

export interface TrackMetadata {
  id: ProfileMode;
  label: string;
  shortLabel: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  category: 'enterprise' | 'analytics' | 'ai' | 'workflow' | 'devops' | 'operations';
  cardColor: string; // e.g. '#1e3a8a' | '#dc2626' | '#4338ca' | '#0f766e' | '#b45309' | '#0284c7'
  bgGradient: string;
  accentHex: string;
  tags: string[];
  domainTags?: string[]; // Business / operational domains (e.g. "Conglomerate Modernization", "GxP Compliance", "BPO Scaling")
  techTags?: string[]; // Technical stack badges (e.g. "Dataverse", "C# Plugins", "Power Apps", "Lark Open Platform")
  metrics: { label: string; value: string; highlight?: boolean }[];
  timeline: string;
  linkText?: string;
  architecturePoints?: string[];
  demoUrl?: string;
  repoUrl?: string;
  isFlagship?: boolean;
  flagshipOrder?: number;
  diagramType?: 'dataverse-relational' | 'lark-bot-pipeline' | 'plugin-audit-security' | 'generic-pipeline';
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
    caption?: string;
  };
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: 'architecture' | 'operations' | 'powerplatform' | 'ai' | 'devops';
  excerpt: string;
  content: string;
  tags: string[];
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  featured?: boolean;
  isCustom?: boolean;
}

export interface NewArticleInput {
  title: string;
  date: string;
  category: 'architecture' | 'operations' | 'powerplatform' | 'ai' | 'devops';
  excerpt: string;
  content: string;
  tags: string;
  authorName?: string;
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'experience' | 'education' | 'certification';
  category: 'architect' | 'operations' | 'academic' | 'credential';
  description: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Production-Grade', 'Expert'
    highlight?: boolean;
    yearsOrScope?: string;
  }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: string;
  year?: string;
  verified?: boolean;
  credentialUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  projectOrScope: string;
  rating: number;
  date: string;
  tags: string[];
  relationship?: string;
  badge?: string;
}

export interface MessagePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
