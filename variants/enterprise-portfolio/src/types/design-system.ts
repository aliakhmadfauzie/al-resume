// ============================================================
// Design System Component Prop Types
// ============================================================

/** Base props shared by all components */
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  testId?: string;
}

/** Extends a component with a variant prop */
export interface WithVariant<T extends string> {
  variant?: T;
}

/** Extends a component with a size prop */
export interface WithSize<T extends string> {
  size?: T;
}

/** Extends a component with a status prop */
export interface WithStatus<T extends string> {
  status?: T;
}

/** Props for interactive elements */
export interface InteractiveElement extends BaseComponentProps {
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

// ============================================================
// Status Bar
// ============================================================
export type StatusBarStatus = "online" | "away" | "busy" | "offline";

export interface StatusBarProps extends BaseComponentProps {
  status: StatusBarStatus;
  branch: string;
  message: string;
  lastUpdated?: Date;
}

// ============================================================
// Navigation
// ============================================================
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
  active?: boolean;
}

export interface NavigationProps extends BaseComponentProps {
  items: NavItem[];
  activePath?: string;
  onNavigate?: (path: string) => void;
}

// ============================================================
// Projects
// ============================================================
export interface Metric {
  label: string;
  value: string;
}

export type ProjectStatus = "open" | "merged" | "closed";
export type StatusColor =
  | "green"
  | "purple"
  | "orange"
  | "red"
  | "blue"
  | "gray";

export interface Project {
  id: string | number;
  title: string;
  status: ProjectStatus;
  statusColor?: StatusColor;
  description: string;
  metrics: Metric[];
  tech: string[];
  impact: string;
  commits: number;
  filesChanged: number;
  mergedDate: string;
  section?: "Power Platform" | "Lark Ecosystem" | "Operational History" | "Cross-Platform";
  image?: string;
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
}

export interface ProjectCardProps extends BaseComponentProps {
  project: Project;
  expanded?: boolean;
  onExpand?: (id: string | number) => void;
}

// ============================================================
// Skills
// ============================================================
export type SkillLevel = 1 | 2 | 3 | 4 | 5;
export type SkillCategory =
  | "platform"
  | "language"
  | "tool"
  | "framework"
  | "cloud"
  | "leadership";

export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon?: string;
  description?: string;
  secondary?: boolean;
}

export interface ContributionGridProps extends BaseComponentProps {
  skills: Skill[];
  columns?: number;
  cellSize?: "sm" | "md" | "lg";
  showLabels?: boolean;
  onSkillHover?: (skill: Skill) => void;
}

// ============================================================
// Timeline
// ============================================================
export interface TimelineEvent {
  date: string;
  emoji: string;
  title: string;
  description?: string;
  highlights?: string[];
}

export interface TimelineProps extends BaseComponentProps {
  events: TimelineEvent[];
  orientation?: "vertical" | "horizontal";
  animation?: "fade" | "slide" | "none";
}

// ============================================================
// Stats / Metrics
// ============================================================
export interface StatMetric {
  label: string;
  value: number;
  icon: string;
  suffix?: string;
  prefix?: string;
  animationDuration?: number;
}

export interface StatsSectionProps extends BaseComponentProps {
  metrics: StatMetric[];
  animate?: boolean;
  gridColumns?: 2 | 3 | 4;
}

// ============================================================
// Stack Data Types
// ============================================================

/** Generic stack group with label and items */
export interface StackGroup {
  label: string;
  items: string[];
}

/** Architecture & Design Patterns Stack */
export interface ArchitectureStack {
  patterns: string[];
  designSystems: string[];
  dataPatterns: string[];
}

/** AI & Copilot Stack */
export interface AIStack {
  agents: {
    total: number;
    categories: string[];
    pipelines: number;
  };
  tools: string[];
  automation: string[];
}

/** Integration Stack */
export interface IntegrationStack {
  apis: string[];
  thirdParty: string[];
  protocols: string[];
  middleware: string[];
}

/** Testing & Quality Stack */
export interface QualityStack {
  testing: string[];
  codeQuality: string[];
  standards: string[];
}

/** Security Stack */
export interface SecurityStack {
  authentication: string[];
  authorization: string[];
  security: string[];
}

/** Monitoring & Observability Stack */
export interface MonitoringStack {
  observability: string[];
  dashboards: string[];
  alerts: string[];
  metrics: string[];
}

/** Development Environment Stack */
export interface DevEnvironmentStack {
  ides: string[];
  extensions: string[];
  packageManagers: string[];
  buildTools: string[];
}

/** Database & Storage Stack */
export interface DatabaseStack {
  storage: string[];
  dataSources: string[];
  caching: string[];
  backup: string[];
}

/** UX/UI Stack */
export interface UXStack {
  frameworks: string[];
  icons: string[];
  animations: string[];
  prototyping: string[];
}

/** Business Intelligence Stack */
export interface BIStack {
  analytics: string[];
  reporting: string[];
  dataModeling: string[];
}

/** Technology Radar */
export interface TechnologyRadar {
  adopt: string[];
  trial: string[];
  assess: string[];
  hold: string[];
}

/** Enhanced skill with category grouping */
export interface EnhancedSkillGroup {
  skills: Skill[];
}

/** Combined stacks export */
export interface AllStacks {
  architecture: ArchitectureStack;
  ai: AIStack;
  integrations: IntegrationStack;
  quality: QualityStack;
  security: SecurityStack;
  monitoring: MonitoringStack;
  devEnvironment: DevEnvironmentStack;
  database: DatabaseStack;
  ux: UXStack;
  businessIntelligence: BIStack;
  technologyRadar: TechnologyRadar;
}
