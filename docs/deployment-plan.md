# Deployment Plan

## Hosting Provider

**Primary: Vercel**
- Rationale: Zero-configuration deployment for Next.js, generous free tier, global CDN, automatic HTTPS, preview deployments on every pull request, and built-in analytics.
- Account: Connect to GitHub account (github.com/Frey210) for automated CI/CD.

**Backup / Alternative: Netlify**
- If Vercel limitations are hit (e.g., serverless function duration), Netlify provides a comparable experience with more generous build minutes on the free tier.

## Domain Strategy

**Primary Domain Recommendation:** `farizachmad.dev` or `farizfaizal.com`

- `.dev` TLD signals a technology professional; high credibility with technical recruiters
- Alternative: `fariz.engineer` for a more domain-specific statement
- Current production infrastructure domains (already active for startup):
  - `inkubasistartupunhas.id` — shared domain for all MTC startup products
  - `aerasea.id` — company domain (separate from personal portfolio)

**DNS Strategy:**
- Register domain via Cloudflare Registrar (pairs natively with Cloudflare CDN and Tunnel for zero-cost TLS and performance)
- Point domain nameservers to Vercel after purchase
- Set up `www.` redirect to apex domain

## CI/CD Workflow

```
Developer (local) → Git commit → GitHub push → Vercel auto-deploy
```

1. All development on `feature/*` branches
2. Pull Request to `main` triggers Vercel preview deployment (unique URL per PR)
3. Merge to `main` triggers production deployment automatically
4. No manual build steps required after initial setup
5. Environment variables (if any, e.g., contact form API keys) stored in Vercel project settings — never committed to repo

**Build Command:** `npm run build`
**Output Directory:** `.next` (auto-detected by Vercel for Next.js)
**Node Version:** 20.x LTS

## Environment Variables

| Variable | Purpose | Source |
|---|---|---|
| `CONTACT_FORM_API_KEY` | Sending contact form emails | EmailJS / Resend.com |
| `GA_MEASUREMENT_ID` | Google Analytics 4 tracking | Google Analytics |

## Post-Launch Checklist

- [ ] Verify all internal links are functional
- [ ] Verify all external links (GitHub, LinkedIn, SINTA, journal URLs) are functional
- [ ] Check mobile responsiveness on iOS Safari and Android Chrome
- [ ] Submit sitemap (`/sitemap.xml`) to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Verify Google Analytics is tracking sessions
- [ ] Test contact form end-to-end (email delivery)
- [ ] Check page speed with PageSpeed Insights (target ≥ 90 mobile)
- [ ] Verify Open Graph meta tags (LinkedIn share preview, Twitter card)
- [ ] Verify `robots.txt` allows all crawlers
- [ ] Check SSL certificate is valid (auto-managed by Vercel)
- [ ] Download and verify CV PDF link works
- [ ] Run Lighthouse audit on all primary pages
- [ ] Confirm SINTA profile link is updated with portfolio URL
- [ ] Add portfolio URL to LinkedIn profile
- [ ] Add portfolio URL to GitHub profile bio
