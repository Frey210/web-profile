# Deployment Instructions

## Hosting Strategy
- **Platform:** Vercel (recommended for Next.js) or Cloudflare Pages.
- **Region:** Singapore or Indonesia (for low latency to Fariz's primary audience).

## CI/CD Workflow
- Connect the GitHub repository to the hosting platform.
- Enable automatic preview deployments for feature branches.
- Production deploys only from the `main` branch after linting and type checks pass.

## Post-Launch
- Configure the custom domain (e.g., `fariz.tech` or `faizalachmad.com`).
- Enable global CDN and SSL.
- Setup basic analytics (Vercel Analytics or Google Analytics 4).
- Submit sitemap to Google Search Console.
