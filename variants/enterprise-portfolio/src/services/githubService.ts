import { Result, success, failure } from '../types/utils';

// ============================================================
// Types
// ============================================================
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  created_at: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

// ============================================================
// Language Color Map
// ============================================================
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  CSharp: '#178600',
  'C#': '#178600',
  HTML: '#E34F26',
  CSS: '#563D7C',
  PowerShell: '#012456',
  Shell: '#89E051',
  Go: '#00ADD8',
  Rust: '#DEA584',
  Java: '#B07219',
  Ruby: '#701516',
  PHP: '#4F5D95',
};

// ============================================================
// Service (Singleton)
// ============================================================
class GitHubService {
  private static instance: GitHubService;
  private baseUrl = 'https://api.github.com';
  private username: string;

  private constructor(username: string) {
    this.username = username;
  }

  public static getInstance(username: string): GitHubService {
    if (!GitHubService.instance || GitHubService.instance.username !== username) {
      GitHubService.instance = new GitHubService(username);
    }
    return GitHubService.instance;
  }

  public async getUser(): Promise<Result<GitHubUser>> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${this.username}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return success(await response.json());
    } catch (error) {
      return failure(error instanceof Error ? error : new Error('Unknown error'));
    }
  }

  public async getRepos(limit: number = 6): Promise<Result<GitHubRepo[]>> {
    try {
      const response = await fetch(
        `${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=${limit}`,
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return success(await response.json());
    } catch (error) {
      return failure(error instanceof Error ? error : new Error('Unknown error'));
    }
  }

  public async getRepoLanguages(repoName: string): Promise<Result<Record<string, number>>> {
    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${this.username}/${repoName}/languages`,
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return success(await response.json());
    } catch (error) {
      return failure(error instanceof Error ? error : new Error('Unknown error'));
    }
  }

  public static getLanguageColor(lang: string | null): string {
    if (!lang) return '#8B949E';
    return LANGUAGE_COLORS[lang] || '#8B949E';
  }
}

export default GitHubService;
