# SEO Strategy

## Primary Keywords

### Brand Keywords (Highest Priority — should rank #1)
- `Fariz Achmad Faizal` — personal name; visitors searching this should land directly on portfolio
- `Fariz Achmad Faizal engineer` — career researcher queries

### Professional Keywords (High Priority)
- `IoT engineer Indonesia` / `IoT engineer Makassar`
- `embedded systems engineer Indonesia`
- `airport electronic systems engineer` / `airport QA engineer Indonesia`
- `startup CTO Indonesia`
- `Electrical engineer control systems Indonesia`
- `SCADA engineer Indonesia`
- `ESP32 developer` / `Arduino developer Indonesia`

### Technical Keywords (Medium Priority — drives developer/peer traffic)
- `Aquanotes IoT aquaculture monitoring`
- `SLAM robot ROS Kinect`
- `FastAPI Node.js IoT backend`
- `Docker Nginx Linux IoT server`
- `PLC SCADA baggage handling system`

### Long-tail Keywords (Lower volume, higher intent)
- `IoT shrimp pond monitoring system Indonesia`
- `airport electronic systems commissioning Indonesia`
- `PKM research Indonesia engineering`
- `Universitas Hasanuddin electrical engineering graduate`

---

## Meta Tags Strategy

### Homepage (`/`)
```html
<title>Fariz Achmad Faizal — IoT Engineer & Airport Systems Specialist | Makassar, Indonesia</title>
<meta name="description" content="Electrical Engineer specializing in IoT, Control Systems, and Industrial Automation. CTO at Aerasea (PT Media Teknologi Celebes) and Electronic QA Officer at Sultan Hasanuddin International Airport. Based in Makassar, Indonesia.">
```

### About Page (`/about`)
```html
<title>About Fariz Achmad Faizal — Engineer, Researcher, CTO</title>
<meta name="description" content="GPA 3.79 Electrical Engineering graduate from Universitas Hasanuddin. 2× National PKM Research Grant recipient. Co-founder of Aerasea technology startup. Electronic Quality Assurance Officer for Sultan Hasanuddin Airport expansion.">
```

### Projects Page (`/projects`)
```html
<title>Projects — Fariz Achmad Faizal | IoT, Robotics, and Aviation Systems</title>
<meta name="description" content="Portfolio of 10+ engineering projects spanning IoT aquaculture monitoring, SLAM robotics, airport systems quality assurance, ergonomic measurement devices, and web platforms.">
```

### Research Page (`/research`)
```html
<title>Research & Publications — Fariz Achmad Faizal</title>
<meta name="description" content="Academic research in SLAM mobile robotics, IoT sensor systems, and AI-based ergonomic devices. Published in JITET, funded by Indonesian Ministry of Education's PKM program.">
```

### Contact Page (`/contact`)
```html
<title>Contact Fariz Achmad Faizal — IoT & Embedded Systems Engineer</title>
<meta name="description" content="Reach out for engineering collaboration, consulting in IoT and industrial automation, or technical recruitment inquiries.">
```

---

## Open Graph / Social Tags (per page)

All pages should include:
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://[domain]/[page]" />
<meta property="og:title" content="[Page Title]" />
<meta property="og:description" content="[Page Description]" />
<meta property="og:image" content="https://[domain]/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
```

**OG Image:** Create a branded 1200×630px image with: name, title, a tech-aesthetic background, and URL.

---

## Link Building Strategy

### Internal Linking
- Homepage → All major project pages (featured cards)
- Every project page → `/projects` index (breadcrumb)
- Research page → individual paper pages (if added later)
- About page → Certifications (with Dicoding verification links)

### External Backlinks (Outreach)
1. **SINTA Profile** — Add portfolio URL to SINTA profile (existing academic authority)
2. **LinkedIn Profile** — Featured section linking to portfolio
3. **GitHub Profile** — Bio URL pointing to portfolio
4. **Aerasea.id** — "About Our Team" page links to Fariz's portfolio
5. **Dicoding Profile** — Portfolio URL in Dicoding profile bio
6. **Universitas Hasanuddin** — If there is a faculty alumni or student spotlight section, request listing

### Content-Based Link Building (Future)
- Publish technical articles (Medium, dev.to, Hashnode) with canonical links back to portfolio
- Submit SLAM paper to more indexing platforms (ResearchGate, Academia.edu) with portfolio link

---

## Technical SEO Checklist

- [x] Next.js SSG/SSR for fast page loads (target FCP < 1.5s)
- [x] Semantic HTML5 structure: `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`
- [x] Single `<h1>` per page, proper heading hierarchy (H1 → H2 → H3)
- [x] All images: descriptive `alt` attributes, WebP format, `next/image` optimization
- [x] robots.txt — allow all bots
- [x] sitemap.xml — auto-generated, submitted to Google Search Console and Bing
- [x] Mobile responsive — tested on iOS Safari and Android Chrome
- [x] HTTPS — via Vercel (auto-managed)
- [x] Structured Data — JSON-LD for `Person` schema on about page
- [x] Canonical URLs — set for all pages
- [x] Fast loading — image optimization, code splitting, layout stability (CLS < 0.1)
- [x] No broken internal links
- [x] Google Analytics 4 — page view tracking
- [x] Google Search Console — property verified, sitemap submitted

### Structured Data (JSON-LD) for Person Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Fariz Achmad Faizal",
  "jobTitle": "Electrical Engineer / IoT Specialist / CTO",
  "worksFor": [
    { "@type": "Organization", "name": "PT Angkasa Pura I" },
    { "@type": "Organization", "name": "PT Media Teknologi Celebes" }
  ],
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "Universitas Hasanuddin" },
  "address": { "@type": "PostalAddress", "addressLocality": "Makassar", "addressCountry": "ID" },
  "url": "https://[portfolio-domain]",
  "sameAs": [
    "https://linkedin.com/in/fariz-ac",
    "https://github.com/frey210",
    "https://sinta.kemdiktisaintek.go.id/authors/profile/6887503/"
  ]
}
```
