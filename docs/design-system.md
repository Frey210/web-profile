# Design System

## Color Palette

### Primary Colors
- **Background (Base):** `#0A0E1A` — Near-black navy; the main background color for all pages
- **Surface / Card:** `#111827` — Slightly lighter dark surface for cards, panels, navigation
- **Border / Divider:** `#1E2D3D` — Subtle dark blue-grey for section dividers and borders

### Primary Brand Colors
- **Primary:** `#0EA5E9` — Electric sky blue (sky-500 equivalent); main interactive color
- **Primary Dark:** `#0284C7` — Hover state for primary elements
- **Primary Light:** `#38BDF8` — Lighter variant for subtle accents

### Accent Colors
- **Accent / Highlight:** `#06B6D4` — Cyan teal; used for code elements, skill badges, subtle glows
- **Success:** `#10B981` — Emerald green; for "deployed", "live", "success" indicators
- **Warning:** `#F59E0B` — Amber; for "in progress" or caution indicators
- **Error:** `#EF4444` — Red; for alerts and error states (minimal use)

### Text Colors
- **Text Primary:** `#F1F5F9` — Near-white for primary headings and body text
- **Text Secondary:** `#94A3B8` — Slate grey for descriptions, subtitles, metadata
- **Text Muted:** `#475569` — Dark slate for timestamps, placeholders, disabled states
- **Text Accent:** `#0EA5E9` — Blue for links and interactive text

### Semantic Color Tokens
```css
--color-bg-base: #0A0E1A;
--color-bg-surface: #111827;
--color-bg-border: #1E2D3D;
--color-primary: #0EA5E9;
--color-primary-hover: #0284C7;
--color-accent: #06B6D4;
--color-text-primary: #F1F5F9;
--color-text-secondary: #94A3B8;
--color-text-muted: #475569;
```

---

## Typography

### Primary Font (Headings): **Space Grotesk**
- Source: Google Fonts (`https://fonts.google.com/specimen/Space+Grotesk`)
- Weight variants: 400, 500, 600, 700
- Usage: All H1–H4 headings, navigation labels, project titles
- Personality: Technical, modern, slightly geometric — feels engineered

### Secondary Font (Body): **Inter**
- Source: Google Fonts (`https://fonts.google.com/specimen/Inter`)
- Weight variants: 400, 500
- Usage: Body text, descriptions, paragraphs, form labels, captions
- Personality: Highly readable, neutral, professional — industry standard

### Monospace Font (Code): **JetBrains Mono** or **Fira Code**
- Source: Google Fonts
- Usage: Code snippets, terminal animations, tech tags, certificate IDs
- Personality: Developer-native, precise

### Type Scale
| Element | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| H1 (Hero) | Space Grotesk | 3.5rem–5rem | 700 | 1.1 |
| H2 (Section) | Space Grotesk | 2rem–2.5rem | 600 | 1.2 |
| H3 (Subsection) | Space Grotesk | 1.25rem–1.5rem | 600 | 1.3 |
| Body | Inter | 1rem | 400 | 1.6 |
| Small | Inter | 0.875rem | 400 | 1.5 |
| Code | JetBrains Mono | 0.875rem | 400 | 1.4 |

---

## UI Components

### Cards (Project Cards)
- Background: `var(--color-bg-surface)` with `1px solid var(--color-bg-border)`
- Border Radius: `12px`
- Hover: Subtle `box-shadow: 0 0 20px rgba(14, 165, 233, 0.1)` glow + `translateY(-4px)` lift
- Transition: `all 0.2s ease`
- Content: Image/icon, Project Name (H3), Year, Category badge, 1-line description, Tech tags, CTA link

### Buttons
- **Primary Button:** Background `var(--color-primary)`, Text white, border-radius `8px`, padding `12px 24px`
  - Hover: Background `var(--color-primary-hover)` + subtle glow
- **Secondary Button:** Transparent background, border `1px solid var(--color-primary)`, text `var(--color-primary)`
  - Hover: Background `rgba(14, 165, 233, 0.1)`
- **Ghost Button / Link Button:** No border, underline on hover only
- Transition: `all 0.15s ease`

### Tech Stack Badges
- Background: `rgba(14, 165, 233, 0.1)` (primary tint)
- Border: `1px solid rgba(14, 165, 233, 0.3)`
- Text: `var(--color-primary)`, font: `JetBrains Mono`, size `0.75rem`
- Border radius: `4px`, padding: `2px 8px`

### Skill Tags
- Similar to tech badges but with category-specific color tinting:
  - IoT/Embedded: Cyan
  - Backend: Emerald
  - Infrastructure: Amber
  - Aviation: Slate blue
  - Robotics: Purple

### Navigation
- Sticky top navigation bar
- Background: `var(--color-bg-surface)` with `backdrop-filter: blur(10px)` and subtle bottom border
- Active link: Underline with `var(--color-primary)` glow
- Mobile: Hamburger menu → slide-in drawer

### Input Fields / Forms
- Background: `var(--color-bg-surface)`
- Border: `1px solid var(--color-bg-border)`
- Focus border: `var(--color-primary)` with subtle glow
- Border radius: `8px`

---

## Iconography

- **Icon Library:** Lucide Icons (https://lucide.dev) — Thin, clean, consistent outline icons
- **Icon Style:** Outline (stroke, no fill) — aligns with high-tech minimal aesthetic
- **Usage:** Navigation icons, skill category icons, social link icons, section header accents
- **Size Standard:** 
  - Navigation: 20px
  - Section headers: 24px
  - Social links: 22px
  - Feature icons: 32px

### Domain Icons (for tech stack tags / project categories):
- IoT: wifi, cpu, radio
- Backend: server, database, code-2
- Embedded: cpu, zap, circuit-board (or custom SVG)
- Aviation: navigation, shield, alert-triangle
- Robotics: bot, minimize-2
- Cloud: cloud, upload-cloud, layers

---

## Motion & Animation

- **Philosophy:** Animations enhance understanding; they never distract.
- **Page Load:** Staggered fade-in for hero section (150ms delay per element)
- **Scroll Animations:** Section elements fade up on enter using IntersectionObserver (threshold: 0.1)
- **Hover Transitions:** All interactive elements: `transition: all 0.2s ease`
- **Hero Typing Effect:** Animated typewriter for secondary tagline ("IoT Engineer · CTO · Airport Systems")
- **Background:** Very subtle animated dot grid or circuit trace pattern on homepage hero (CSS only, low opacity)
- **Navigation:** Scroll-triggered opacity/blur transition for sticky nav
