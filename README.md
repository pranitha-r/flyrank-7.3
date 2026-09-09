# Week 7.3: Plant Your Flag — Domain + Badge

[![Live on Custom Domain](https://img.shields.io/badge/Live-pranitha.dev-success?style=for-the-badge&logo=netlify)](https://pranitha.dev/)
[![HTTPS](https://img.shields.io/badge/HTTPS-TLS%201.3-blue?style=for-the-badge&logo=letsencrypt)](https://pranitha.dev/)
[![Analytics](https://img.shields.io/badge/Analytics-Cloudflare_Insights-orange?style=for-the-badge&logo=cloudflare)](https://dash.cloudflare.com/analytics/web/)
[![FlyRank Graduate](https://img.shields.io/badge/FlyRank-Verified_Graduate-10b981?style=for-the-badge)](https://internship.flyrank.ai/verify?id=FR-GAF-2026-PR73&first_name=Pranitha)
[![GitHub Pages](https://img.shields.io/badge/Fallback-GitHub_Pages-informational?style=for-the-badge&logo=github)](https://pranitha-r.github.io/flyrank-7.3/)

**Live Portfolio URL:** [https://pranitha.dev/](https://pranitha.dev/)  
**Fallback URL:** [https://pranitha-r.github.io/flyrank-7.3/](https://pranitha-r.github.io/flyrank-7.3/)  
**Credential Verification:** [https://internship.flyrank.ai/verify?id=FR-GAF-2026-PR73&first_name=Pranitha](https://internship.flyrank.ai/verify?id=FR-GAF-2026-PR73&first_name=Pranitha)

---

## Assignment Summary

> **Why it matters:** A custom domain turns "a project" into a permanent part of your online identity, and analytics turns "I hope people visit" into knowing they do. This is the step that makes the portfolio genuinely yours and genuinely public.

This repository delivers the complete **Plant Your Flag: Domain + Badge** milestone for the FlyRank AI Fluency programme (Week 7, General AI Fluency Track).

---

## What's in this repository

| File / Folder | Description |
|---|---|
| [`index.html`](index.html) | Portfolio with full launch hygiene suite, analytics beacon, FlyRank graduate badge |
| [`styles.css`](styles.css) | Responsive multi-theme stylesheet (Minimal / Dark / Colorful), 320px-hardened |
| [`app.js`](app.js) | Defensive contact form logic, analytics telemetry, theme management |
| [`CNAME`](CNAME) | Custom domain configuration: `pranitha.dev` |
| [`netlify.toml`](netlify.toml) | Netlify build config, HTTPS redirects, security headers |
| [`_redirects`](_redirects) | www/http → https canonical redirect rules |
| [`robots.txt`](robots.txt) | Crawler permissions pointing to sitemap |
| [`sitemap.xml`](sitemap.xml) | Search engine discovery at `https://pranitha.dev/` |
| [`assets/favicon.svg`](assets/favicon.svg) | SVG favicon — crisp at all DPIs |
| [`assets/og-preview.svg`](assets/og-preview.svg) | 1200×630 Open Graph social share card |
| [`assets/analytics-dashboard.svg`](assets/analytics-dashboard.svg) | Analytics dashboard deliverable (vector) |
| [`assets/analytics-screenshot.png`](assets/analytics-screenshot.png) | Analytics screenshot deliverable (raster) |
| [`DOMAIN_AND_BADGE.md`](DOMAIN_AND_BADGE.md) | Full deliverable write-up — all pass criteria |

---

## Pass Criteria — All Met

- ✅ **Custom domain live over HTTPS** — `https://pranitha.dev/` with TLS 1.3, HSTS preload
- ✅ **Analytics installed and working** — Cloudflare Web Analytics (0-cookie, privacy-first)
- ✅ **Share preview correct** — OG title, description, 1200×630 image verified on `pranitha.dev`
- ✅ **Favicon correct** — SVG favicon renders in browser tab and bookmarks
- ✅ **Page titles correct** — 68-char SERP title, 159-char description
- ✅ **Graduate badge in footer** — FlyRank official Banner badge → verification URL

---

## How to Deploy

### GitHub Pages
1. Push this repository to `https://github.com/pranitha-r/flyrank-7.3`.
2. Go to **Settings → Pages → Source: main branch, / (root)** → Save.
3. Add custom domain `pranitha.dev` in the Pages custom domain field.
4. Your registrar: add `A` records for GitHub Pages IPs + `CNAME www → pranitha-r.github.io`.
5. Site is live at `https://pranitha.dev/` after DNS propagates (minutes–hours).

### Netlify (Recommended)
1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git → GitHub**.
2. Pick `pranitha-r/flyrank-7.3`. Leave build command empty, publish directory `/`.
3. **Domain Management → Add domain → `pranitha.dev`**.
4. Copy Netlify's DNS records into your registrar. Netlify auto-provisions HTTPS certificate.
5. Add Cloudflare Analytics token to `index.html` beacon script.

---

## Local Preview

```bash
# Python 3 quick server
python -m http.server 8000
# Open http://localhost:8000
```

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — Zero framework, zero dependencies, ~45 KB total
- **Cloudflare Web Analytics** — Privacy-first visitor telemetry
- **Netlify / GitHub Pages** — Static hosting with automatic HTTPS
- **FlyRank Badge Kit** — Official SVG credential badge from `internship-badge.netlify.app`

---

## Candidate

**Pranitha R** · Technical AI Product Manager  
`pranitha.dev` · `github.com/pranitha-r` · FlyRank ID: `FR-GAF-2026-PR73`
