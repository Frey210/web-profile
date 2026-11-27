import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080d14",
        surface: "#101b25",
        "surface-hover": "#1c1c1c",
        primary: "#fafafa",
        accent: "#ff527d",
        "accent-hover": "#ff91ad",
        "accent-dim": "rgba(255, 82, 125, 0.12)",
        indigo: { 200: "#c4f5f6", 300: "#87e9ed", 400: "#ff6b91", 500: "#ff3b70", 600: "#d72b59" },
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
        glow: "0 0 40px rgba(129, 140, 248, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
