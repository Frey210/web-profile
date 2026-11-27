"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { GitBranch, Star, FolderGit2 } from "lucide-react";

const theme = {
  light: ["#161b22", "#312e81", "#4338ca", "#818cf8", "#c7d2fe"],
  dark: ["#141414", "#2e1065", "#4338ca", "#818cf8", "#c7d2fe"],
};

export function GithubActivity({ username = "Frey210" }: { username?: string }) {
  const [selectedYear, setSelectedYear] = useState<number | "last">("last");
  const [years, setYears] = useState<(string | number)[]>([]);
  const [stats, setStats] = useState<{ repos: number; stars: number; forks: number } | null>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const list: (string | number)[] = ["Last Year"];
    for (let i = 0; i < 4; i++) {
      list.push(currentYear - i);
    }
    setYears(list);

    // Fetch user stats from GitHub public API
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => (res.ok ? res.json() : []))
      .then((repos: Array<{ stargazers_count: number; forks_count: number }>) => {
        if (Array.isArray(repos)) {
          const stars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
          const forks = repos.reduce((acc, r) => acc + (r.forks_count || 0), 0);
          setStats({ repos: repos.length, stars, forks });
        }
      })
      .catch(() => {
        setStats({ repos: 15, stars: 12, forks: 4 });
      });
  }, [username]);

  return (
    <div className="rounded-2xl border border-white/8 bg-[#141414] p-6 shadow-2xl">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-white">GitHub Activity</h3>
            <p className="text-xs text-[#a0a0a0]">@{username}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {stats && (
            <>
              <div className="flex items-center gap-1.5 rounded-lg border border-white/6 bg-[#1a1a1a] px-3 py-1.5 text-xs text-[#a0a0a0]">
                <FolderGit2 className="h-3.5 w-3.5 text-indigo-400" />
                <span className="font-semibold text-white">{stats.repos}</span> Repos
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-white/6 bg-[#1a1a1a] px-3 py-1.5 text-xs text-[#a0a0a0]">
                <Star className="h-3.5 w-3.5 text-indigo-400" />
                <span className="font-semibold text-white">{stats.stars}</span> Stars
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-white/6 bg-[#1a1a1a] px-3 py-1.5 text-xs text-[#a0a0a0]">
                <GitBranch className="h-3.5 w-3.5 text-indigo-400" />
                <span className="font-semibold text-white">{stats.forks}</span> Forks
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {years.map((y) => {
          const isSelected = (y === "Last Year" && selectedYear === "last") || selectedYear === y;
          return (
            <button
              key={String(y)}
              onClick={() => setSelectedYear(y === "Last Year" ? "last" : (y as number))}
              className={`rounded-full px-4 py-1 text-xs font-medium transition ${
                isSelected
                  ? "border border-indigo-400/40 bg-indigo-400/10 text-indigo-200"
                  : "border border-white/6 text-[#666666] hover:text-[#a0a0a0]"
              }`}
            >
              {y}
            </button>
          );
        })}
      </div>

      <div className="mt-4 overflow-x-auto pt-2 pb-2">
        {years.length > 0 ? (
          <GitHubCalendar
            username={username}
            year={selectedYear}
            theme={theme}
            fontSize={13}
            blockSize={14}
            blockMargin={4}
          />
        ) : (
          <p className="min-h-36 text-sm text-[#a0a0a0]">Loading contribution calendar…</p>
        )}
      </div>
    </div>
  );
}
