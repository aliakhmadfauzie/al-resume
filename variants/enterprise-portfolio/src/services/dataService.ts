import type { PortfolioData } from "../hooks/usePortfolio";
import { portfolioData as staticData } from "../data/portfolio";

// ============================================================
// Types
// ============================================================
export interface DataServiceConfig {
  dataUrl?: string;
  fallbackToStatic?: boolean;
  cacheEnabled?: boolean;
  cacheDuration?: number;
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

// ============================================================
// Type Guard
// ============================================================
export const isPortfolioData = (data: unknown): data is PortfolioData => {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    "developer" in d &&
    typeof d.developer === "object" &&
    "skills" in d &&
    Array.isArray(d.skills) &&
    "projects" in d &&
    Array.isArray(d.projects)
  );
};

// ============================================================
// Data Service (Singleton)
// ============================================================
class DataService {
  private static instance: DataService;
  private cache: Map<string, CacheEntry<unknown>> = new Map();
  private config: Required<DataServiceConfig>;

  private constructor(config: DataServiceConfig = {}) {
    this.config = {
      dataUrl:
        config.dataUrl || `${import.meta.env.BASE_URL}data/portfolio.json`,
      fallbackToStatic: config.fallbackToStatic ?? true,
      cacheEnabled: config.cacheEnabled ?? true,
      cacheDuration: config.cacheDuration ?? 300_000, // 5 minutes
    };
  }

  /** Get the singleton instance */
  public static getInstance(config: DataServiceConfig = {}): DataService {
    const normalizedConfig = {
      dataUrl:
        config.dataUrl || `${import.meta.env.BASE_URL}data/portfolio.json`,
      fallbackToStatic: config.fallbackToStatic ?? true,
      cacheEnabled: config.cacheEnabled ?? true,
      cacheDuration: config.cacheDuration ?? 300_000,
    };

    if (
      !DataService.instance ||
      JSON.stringify(DataService.instance.config) !==
        JSON.stringify(normalizedConfig)
    ) {
      DataService.instance = new DataService(config);
    }

    return DataService.instance;
  }

  /** Fetch portfolio data from the configured source */
  public async fetchPortfolioData(): Promise<PortfolioData> {
    const cacheKey = "portfolio-data";

    // Check cache
    if (this.config.cacheEnabled) {
      const cached = this.cache.get(cacheKey) as
        | CacheEntry<PortfolioData>
        | undefined;
      if (cached && Date.now() - cached.timestamp < this.config.cacheDuration) {
        return cached.data;
      }
    }

    if (!this.config.dataUrl) {
      if (this.config.fallbackToStatic) {
        return staticData;
      }
      throw new Error("No data URL configured");
    }

    try {
      const response = await fetch(this.config.dataUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: unknown = await response.json();

      if (!isPortfolioData(data)) {
        throw new Error("Invalid portfolio data structure received");
      }

      // Cache the data
      if (this.config.cacheEnabled) {
        this.cache.set(cacheKey, {
          data,
          timestamp: Date.now(),
        });
      }

      return data;
    } catch (error) {
      console.error("[DataService] Failed to fetch portfolio data:", error);

      if (this.config.fallbackToStatic) {
        console.warn("[DataService] Falling back to static portfolio data");
        return staticData;
      }

      throw error;
    }
  }

  /** Update portfolio data (in cache; future: POST to API) */
  public async updatePortfolioData(data: PortfolioData): Promise<void> {
    const cacheKey = "portfolio-data";
    if (this.config.cacheEnabled) {
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now(),
      });
    }
    // In production, this would POST to an API endpoint
    // e.g., await fetch('/api/portfolio', { method: 'POST', body: JSON.stringify(data) });
  }

  /** Clear the entire cache */
  public clearCache(): void {
    this.cache.clear();
  }

  /** Invalidate one cache entry or all */
  public invalidateCache(key?: string): void {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }
}

export default DataService;
