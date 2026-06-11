import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0B1120",
        primary: "#2563EB",
        secondary: "#06B6D4",
        accent: "#10B981",
        text: "#F8FAFC",
        muted: "#94A3B8",
        border: "#1E293B"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(6, 182, 212, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 50% 0%, rgba(37,99,235,.24), transparent 34%), linear-gradient(rgba(148,163,184,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
