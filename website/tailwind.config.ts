import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#141414",
        "surface-hover": "#1c1c1c",
        primary: "#fafafa",
        accent: "#38bdf8",
        "accent-hover": "#7dd3fc",
        "accent-dim": "rgba(56, 189, 248, 0.1)",
        text: "#fafafa",
        secondary: "#a0a0a0",
        muted: "#666666",
        border: "#222222",
        "border-hover": "#333333"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        glow: "0 0 40px rgba(56, 189, 248, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
