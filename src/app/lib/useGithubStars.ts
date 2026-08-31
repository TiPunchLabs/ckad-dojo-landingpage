import { useEffect, useState } from 'react';
import { GITHUB_REPO, GITHUB_STARS } from './site';

const API_URL = GITHUB_REPO.replace('https://github.com/', 'https://api.github.com/repos/');
const CACHE_KEY = 'github-stars';

/** Module-level promise so simultaneous consumers (Header + FinalCta) share one request. */
let pending: Promise<number | null> | null = null;

function fetchStars(): Promise<number | null> {
  pending ??= fetch(API_URL)
    .then((res) => (res.ok ? res.json() : null))
    .then((data: { stargazers_count?: number } | null) =>
      typeof data?.stargazers_count === 'number' ? data.stargazers_count : null,
    )
    .catch(() => null);
  return pending;
}

function readCache(): number | null {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached && /^\d+$/.test(cached)) return Number(cached);
  } catch {
    /* storage unavailable */
  }
  return null;
}

/**
 * Live star count of the GitHub repo, fetched once per session.
 * Shows the hardcoded GITHUB_STARS immediately and keeps it as fallback
 * when the API is unreachable or rate-limited.
 */
export function useGithubStars(): number {
  const [stars, setStars] = useState<number>(() => readCache() ?? GITHUB_STARS);

  useEffect(() => {
    if (readCache() !== null) return;
    let mounted = true;
    void fetchStars().then((count) => {
      if (count === null) return;
      if (mounted) setStars(count);
      try {
        sessionStorage.setItem(CACHE_KEY, String(count));
      } catch {
        /* storage unavailable */
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return stars;
}
