# Build Instructions

## Environment setup
- Use **Next.js 14+** with App Router.
- Prefer **Tailwind CSS** for styling.
- Use **Lucide React** for icons.
- Ensure **TypeScript** is strict.

## Data Integration
- Source all static content from the `docs/` and `projects/` markdown files.
- Ideally, create a markdown parser to dynamically generate project pages instead of hardcoding content.
- Use `prompts/master-context.md` as the global context for any AI-assisted component generation.

## Component Strategy
- Build a robust **Design System** first based on `docs/design-system.md` and `prompts/ui-guidelines.md`.
- Components should be modular, accessible, and responsive.
- Prioritize performance: use Next.js Image optimization and minimize heavy client-side JS.

## SEO & Metadata
- Implement the JSON-LD schema defined in `docs/seo-strategy.md`.
- Ensure each page has unique meta titles and descriptions sourced from the content inventory.
