import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0a0f1e",
        primary: "#0ea5e9",
        secondary: "#06B6D4",
        accent: "#39ff14",
        neon: "#00fff5",
        magenta: "#ff00ea",
        text: "#f0f0f0",
        muted: "#64748b",
        border: "#0f1a2e"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "sans-serif"],
        pixel: ["var(--font-pixel)", "'Press Start 2P'", "monospace"],
        mono: ["'JetBrains Mono'", "monospace"]
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,255,245,0.3), 0 0 60px rgba(0,255,245,0.1)",
        "neon-sm": "0 0 10px rgba(0,255,245,0.2)",
        "neon-magenta": "0 0 20px rgba(255,0,234,0.3)",
        panel: "0 24px 80px rgba(0,0,0,0.5)"
      },
      backgroundImage: {
        "pixel-grid": "linear-gradient(rgba(0,255,245,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,245,.04) 1px, transparent 1px)"
      },
      backgroundSize: {
        "grid-24": "24px 24px"
      }
    }
  },
  plugins: []
};

export default config;
