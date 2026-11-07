import { useState, useEffect, useCallback } from "react";
import type {
  Project,
  Skill,
  SkillCategory,
  TimelineEvent,
  StatMetric,
} from "../types/design-system";
import DataService from "../services/dataService";

// ============================================================
// Types
// ============================================================
export interface DeveloperInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  status: string;
  bio: string;
  avatar: string;
}

export interface PortfolioData {
  developer: DeveloperInfo;
  metrics: StatMetric[];
  skills: Skill[];
  projects: Project[];
  methodology?: {
    title: string;
    description: string;
    standards: { name: string; icon: string; description?: string }[];
    artifacts: { label: string; value: string }[];
  };
  timeline: TimelineEvent[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    youtube?: string;
  };
}

type LoadingState = "idle" | "loading" | "success" | "error";

export interface UsePortfolioReturn {
  data: PortfolioData | null;
  loading: LoadingState;
  error: Error | null;
  refetch: () => Promise<void>;
  updateProject: (
    projectId: string | number,
    updates: Partial<Project>,
  ) => void;
  filterSkills: (category?: SkillCategory) => Skill[];
  getTopProjects: (limit?: number) => Project[];
}

// ============================================================
// Hook
// ============================================================
export const usePortfolio = (dataSource?: string): UsePortfolioReturn => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState<LoadingState>("idle");
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading("loading");
    setError(null);

    try {
      const service = DataService.getInstance({ dataUrl: dataSource });
      const portfolioData = await service.fetchPortfolioData();
      setData(portfolioData);
      setLoading("success");
    } catch (err) {
      const error =
        err instanceof Error
          ? err
          : new Error("Unknown error loading portfolio data");
      setError(error);
      setLoading("error");
    }
  }, [dataSource]);

  const updateProject = useCallback(
    (projectId: string | number, updates: Partial<Project>) => {
      if (!data) return;
      setData((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          projects: prev.projects.map((project) =>
            project.id === projectId ? { ...project, ...updates } : project,
          ),
        };
      });
    },
    [data],
  );

  const filterSkills = useCallback(
    (category?: SkillCategory) => {
      if (!data) return [];
      return category
        ? data.skills.filter((skill) => skill.category === category)
        : data.skills;
    },
    [data],
  );

  const getTopProjects = useCallback(
    (limit: number = 3) => {
      if (!data) return [];
      return data.projects.slice(0, limit);
    },
    [data],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    updateProject,
    filterSkills,
    getTopProjects,
  };
};
