import React, { useEffect, useState } from 'react';
import type { GitHubRepo, GitHubUser } from '../../services/githubService';
import GitHubService from '../../services/githubService';
import { useTheme } from '../../styles/theme';

// ============================================================
// Types
// ============================================================
export interface GitHubSectionProps {
  username: string;
  title?: string;
  limit?: number;
}

// ============================================================
// Repo Card
// ============================================================
const GitHubRepoCard: React.FC<{ repo: GitHubRepo }> = ({ repo }) => {
  const { theme } = useTheme();

  const containerStyle: React.CSSProperties = {
    backgroundColor: theme.colors.bg.secondary,
    border: `1px solid ${theme.colors.border.default}`,
    borderRadius: theme.borderRadius.md,
    padding: '16px',
    transition: theme.transitions.base,
    textDecoration: 'none',
    display: 'block',
    color: 'inherit',
  };

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      style={containerStyle}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span style={{ color: theme.colors.accent.blue, fontWeight: 600, fontSize: '0.9rem' }}>
          📁 {repo.name}
        </span>
        <span
          style={{
            fontSize: '0.65rem',
            padding: '1px 8px',
            borderRadius: theme.borderRadius.full,
            border: `1px solid ${theme.colors.border.default}`,
            color: theme.colors.text.muted,
          }}
        >
          Public
        </span>
      </div>

      {repo.description && (
        <p style={{ fontSize: '0.8rem', color: theme.colors.text.secondary, marginBottom: '12px', lineHeight: 1.6 }}>
          {repo.description.length > 120 ? repo.description.slice(0, 120) + '...' : repo.description}
        </p>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.75rem', color: theme.colors.text.secondary }}>
        {repo.language && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: GitHubService.getLanguageColor(repo.language),
                display: 'inline-block',
              }}
            />
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🔀 {repo.forks_count}</span>
        <span style={{ marginLeft: 'auto' }}>
          {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>
    </a>
  );
};

// ============================================================
// Main Section
// ============================================================
export const GitHubSection: React.FC<GitHubSectionProps> = ({
  username,
  title = 'GitHub Projects',
  limit = 6,
}) => {
  const { theme } = useTheme();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const service = GitHubService.getInstance(username);

      const [userResult, reposResult] = await Promise.all([
        service.getUser(),
        service.getRepos(limit),
      ]);

      if (cancelled) return;

      if (userResult.success) {
        setUser(userResult.data);
      } else {
        setError(userResult.error.message);
      }

      if (reposResult.success) {
        setRepos(reposResult.data);
      } else if (!error) {
        setError(prev => prev || reposResult.error.message);
      }

      setLoading(false);
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [username, limit]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: theme.colors.text.secondary }}>
        Loading GitHub data...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: theme.colors.accent.red }}>
        Could not load GitHub data: {error}
      </div>
    );
  }

  return (
    <div>
      {user && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px',
            backgroundColor: theme.colors.bg.secondary,
            border: `1px solid ${theme.colors.border.default}`,
            borderRadius: theme.borderRadius.lg,
            marginBottom: '20px',
          }}
        >
          <img
            src={user.avatar_url}
            alt={`${user.name || user.login}'s avatar`}
            style={{
              width: '64px',
              height: '64px',
              borderRadius: theme.borderRadius.full,
              border: `2px solid ${theme.colors.border.default}`,
            }}
            loading="lazy"
          />
          <div>
            <h3 style={{ margin: '0 0 4px 0', color: theme.colors.text.primary, fontSize: '1.1rem' }}>
              {user.name || user.login}
            </h3>
            <p style={{ margin: '0 0 8px 0', color: theme.colors.text.secondary, fontSize: '0.85rem' }}>
              {user.bio}
            </p>
            <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: theme.colors.text.secondary }}>
              <span>📁 {user.public_repos} repos</span>
              <span>👥 {user.followers} followers</span>
              <span>👤 {user.following} following</span>
            </div>
          </div>
        </div>
      )}

      <h3 style={{ color: theme.colors.text.primary, fontSize: '1.1rem', marginBottom: '16px' }}>
        {title}
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '12px',
        }}
      >
        {repos.map(repo => (
          <GitHubRepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};
