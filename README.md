# Portfolio Fariz - Documentation & Knowledge Management

This repository serves as the central hub for all documentation, assets, and project data for Fariz's professional portfolio. It is designed to be "AI-ready," providing structured context for building a modern, high-impact website.

## Project Purpose
To consolidate professional history, project details, and personal branding into a structured format that can be easily leveraged by AI tools and developers to build and maintain a professional portfolio website.

## Folder Explanation
- **docs/**: Core professional and personal documentation (skills, experience, goals).
- **assets/**: All media files, including photos, logos, certificates, and diagrams.
- **projects/**: Detailed case studies for each major project.
- **references/**: External links and source materials (CV, research, awards).
- **prompts/**: Standardized AI prompts and context for website development and content generation.
- **website/**: The actual Next.js source code for the portfolio website.

## Vercel Deployment
The Next.js application lives inside the `website/` directory. In Vercel project settings, use:

- **Root Directory:** `website`
- **Framework Preset:** Next.js
- **Install Command:** `pnpm install --frozen-lockfile`
- **Build Command:** `pnpm build`
- **Output Directory:** leave empty / default

If Vercel is pointed at the repository root instead of `website/`, the deployment can finish quickly but show `404 NOT_FOUND` because Vercel did not build the Next.js app.

## Workflow for Collecting Assets
1. Identify the asset type (photo, certificate, screenshot).
2. Save the file in the appropriate sub-folder in `assets/` using a descriptive naming convention (e.g., `aquanotes-screenshot-01.png`).
3. If applicable, add a reference to the asset in the relevant project's `results.md` or `overview.md`.

## Workflow for Preparing AI-Ready Project Context
1. Fill out all `.md` files in the specific project folder under `projects/`.
2. Ensure the `README.md` in the project folder contains all necessary links and context.
3. Use the templates in `prompts/` to feed this information to an AI assistant.

## Workflow Before Starting Development
1. Complete the `docs/website-requirements.md` and `docs/design-system.md`.
2. Ensure all project case studies are fully documented.
3. Review `docs/content-strategy.md` to align the website's voice and goals.
4. Prepare the `prompts/master-context.md` with updated information from the `docs/` folder.
