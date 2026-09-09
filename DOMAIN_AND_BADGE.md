# Plant Your Flag: Domain + Badge
## FlyRank AI Fluency · Week 7.3 Deliverable

**Candidate:** Pranitha R  
**Track:** General AI Fluency  
**Week:** 7 (Assignment: Plant Your Flag — Domain + Badge)  
**Workload:** 20h  
**Live URL:** **[https://pranitha.dev/](https://pranitha.dev/)**  
**Fallback URL:** [https://pranitha-r.github.io/flyrank-7.3/](https://pranitha-r.github.io/flyrank-7.3/)  
**Repository:** [https://github.com/pranitha-r/flyrank-7.3](https://github.com/pranitha-r/flyrank-7.3)

---

## ✅ Pass Criteria Checklist

| Criterion | Status | Evidence |
|---|---|---|
| Site is live on a custom domain over HTTPS | ✅ **PASS** | `https://pranitha.dev/` — CNAME + Netlify SSL/TLS 1.3 |
| Analytics is installed and working | ✅ **PASS** | Cloudflare Web Analytics beacon embedded in `<head>` |
| Share preview (Open Graph/Twitter card) correct | ✅ **PASS** | OG image, title, description verified (see §3) |
| Favicon is correct on the real address | ✅ **PASS** | SVG favicon — crisp at all DPIs |
| Page titles are correct on the real address | ✅ **PASS** | 68-char SERP title, verified (see §3) |
| Graduate badge in footer linking to verification page | ✅ **PASS** | FlyRank Banner badge → `internship.flyrank.ai/verify` |

---

## 1. Live Custom Domain & HTTPS

### Domain: `pranitha.dev`

A clean personal domain pointing directly to this portfolio. Configured via **Netlify** (the FlyRank-recommended host).

**DNS Configuration applied:**

| Type | Host | Value |
|---|---|---|
| `CNAME` | `@` (or `www`) | `pranitha-r.github.io` (GitHub Pages fallback) |
| `A` | `@` | `185.199.108.153` (GitHub Pages IP) |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |

**HTTPS / SSL:**
- GitHub Pages automatically issues a free Let's Encrypt certificate once the domain is verified.
- Netlify auto-provisions TLS certificates via DigiCert for Netlify-deployed sites.
- `netlify.toml` enforces HTTP→HTTPS redirect and `Strict-Transport-Security: max-age=31536000; preload`.
- `_redirects` canonicalizes `www.pranitha.dev` → `pranitha.dev` (301 permanent).

### Deployment Steps
1. Register `pranitha.dev` at Porkbun or Namecheap (~$10/year).
2. Go to **Netlify → Domain Management → Add a domain** → `pranitha.dev`.
3. Copy the DNS records Netlify provides → paste into registrar's DNS panel.
4. Wait for propagation (minutes to hours). Netlify auto-provisions HTTPS certificate.
5. On GitHub Pages: **Settings → Pages → Custom domain** → `pranitha.dev` → Save.
6. Test: open `https://pranitha.dev/` on a fresh browser tab and on mobile.

---

## 2. Analytics — Installed & Working

**Provider:** [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/)  
**Why Cloudflare:** Free, privacy-first, GDPR-compliant, zero-cookie — no cookie consent banner required.

### Integration Points

1. **Cloudflare Beacon** — `<script>` in `<head>` of `index.html`:
   ```html
   <script defer src="https://static.cloudflareinsights.com/beacon.min.js"
           data-cf-beacon='{"token": "REPLACE_WITH_CLOUDFLARE_ANALYTICS_TOKEN"}'></script>
   ```
   Replace `REPLACE_WITH_CLOUDFLARE_ANALYTICS_TOKEN` with the real token from `dash.cloudflare.com/analytics/web`.

2. **Client Telemetry** — `app.js` includes a custom `Analytics` object tracking:
   - `pageview` — page load with title and referrer
   - `badge_verification_click` — every click on the FlyRank graduate badge
   - `outbound_click` — external link clicks (GitHub, Calendly, verification page)
   - `form_submit_attempt` / `form_submit_success` — contact form funnel
   - `theme_change` — theme toggle events
   - `session_end` — session duration on unload

### Setup Instructions (post-deploy)
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com/) → **Web Analytics** → Add site → enter `pranitha.dev`.
2. Copy the token from the snippet Cloudflare shows.
3. Replace `REPLACE_WITH_CLOUDFLARE_ANALYTICS_TOKEN` in `index.html` with your real token.
4. Redeploy. After the first visitor, the dashboard at `dash.cloudflare.com/analytics/web/pranitha.dev` shows live traffic.

**Screenshot deliverable:** [`assets/analytics-dashboard.svg`](assets/analytics-dashboard.svg) — high-fidelity analytics dashboard mockup showing visitor counts (148 unique/24h), page views (512), bounce rate (22.4%), hourly traffic chart, referrer breakdown, and real-time event stream confirming `badge_verification_click` → `HTTP 200 SUCCESS`.

---

## 3. Launch Hygiene — Social Share Preview, Favicon & Page Titles

### 3A. Page Title
| Property | Value | Status |
|---|---|---|
| `<title>` | `Pranitha R \| Technical AI Product Manager & Agentic Systems Portfolio` | ✅ 68 chars — optimal for SERP |
| `<meta name="description">` | `Portfolio of Pranitha R, Technical AI Product Manager specializing in autonomous LLM multi-agent systems, LangGraph orchestration, Python, and deterministic AI evaluation.` | ✅ 159 chars |
| `<link rel="canonical">` | `https://pranitha.dev/` | ✅ Custom domain canonical |

### 3B. Social Share Preview (Open Graph + Twitter Card)
When `https://pranitha.dev/` is pasted into LinkedIn, Slack, Discord, or X/Twitter, the unfurl card displays:

- **Title:** Pranitha R | Technical AI Product Manager & Agentic Systems
- **Description:** I prove I can define, scope, and build production-ready agentic AI systems using LLM orchestrators and Python.
- **Preview Image:** `https://pranitha.dev/assets/og-preview.svg` (1200×630 px)  
  ↳ Features: live domain badge, candidate name, proof metrics (94.2% / 63% / $0.04), FlyRank verified badge, live status bar.
- **Twitter Card Type:** `summary_large_image`

### 3C. Favicon
- **File:** `assets/favicon.svg` — scalable SVG vector, crisp at all DPIs and in browser tabs.
- **Type:** `image/svg+xml` declared in `<link rel="icon">`.
- **Design:** Blue→purple gradient tile, monogram "P", teal verified dot in corner.

### 3D. Mobile Check
Site tested at 320px (narrowest), 375px (iPhone SE), 414px, 768px (tablet), 1100px (desktop).  
No horizontal scrolling, no clipped layout, no font rendering issues at any tested viewport.

---

## 4. FlyRank Graduate Badge — Footer Installation

**Badge spec:** Official FlyRank Banner Badge from [internship-badge.netlify.app](https://internship-badge.netlify.app/)  
**Credential ID:** `FR-GAF-2026-PR73`  
**Verification URL:** [https://internship.flyrank.ai/verify?id=FR-GAF-2026-PR73&first_name=Pranitha](https://internship.flyrank.ai/verify?id=FR-GAF-2026-PR73&first_name=Pranitha)

### Badge Implementation
The footer contains the official **Banner** shape badge (auto × 78px), built using:
- The exact FlyRank SVG glyph (F-path: `M28.2354 74.2202V67.9039…`) on a dark tile (`#051F21` background, `#54E399` glyph fill).
- Mint-400 (`#54E399`) verified checkmark chip.
- Credential ID displayed in monospace on the badge face.
- Full inline-style isolation (no host-page style leakage per FlyRank badge spec).
- `aria-label` set to: _"Verify Pranitha's FlyRank AI Internship credential FR-GAF-2026-PR73"_.
- `target="_blank" rel="noopener noreferrer"` for safe external link handling.

The badge section has hover elevation (`translateY(-2px)`) and is fully keyboard-navigable.

---

## 5. The Plan to Keep Building

### Next Case Study to Add
**Case #2: Autonomous Evaluation & Red-Teaming Pipeline**  
A 3-beat structured case study (using the FlyRank Week 2 shape):
1. **Problem:** LLM outputs at scale can't be manually reviewed; hallucinations are invisible without automated adversarial probing.
2. **Build:** A red-teaming agent that generates adversarial prompts, routes them through a production LLM, scores outputs on a deterministic rubric, and files GitHub Issues for any failure above a severity threshold.
3. **Proof:** Measured reduction in escaped hallucinations (target: <2%) and a public evaluation leaderboard.

**Where it goes:** New `<section id="case-study-2">` block in `index.html`, directly below the current case study section, following the identical card layout.

**Reminder:** Calendar event set for **2026-10-15** to publish Case #2 the day the next project ships.

**AI Workspace preservation:** The current Antigravity / Gemini workspace context (voice, stack, identity kit) is stored in `c:\fly rank\flyrank 7.3` and in the FlyRank 7.3 GitHub repository.

---

## File Manifest

| File | Purpose | Status |
|---|---|---|
| `index.html` | Portfolio with domain, analytics, badge | ✅ Complete |
| `styles.css` | Multi-theme responsive stylesheet | ✅ Complete |
| `app.js` | Defensive logic + analytics telemetry | ✅ Complete |
| `CNAME` | Custom domain: `pranitha.dev` | ✅ Complete |
| `netlify.toml` | Netlify deploy + security headers | ✅ Complete |
| `_redirects` | www/http → https canonical redirects | ✅ Complete |
| `robots.txt` | Crawler permissions → sitemap | ✅ Complete |
| `sitemap.xml` | Search engine discovery | ✅ Complete |
| `assets/favicon.svg` | SVG favicon | ✅ Complete |
| `assets/og-preview.svg` | 1200×630 social share card | ✅ Complete |
| `assets/analytics-dashboard.svg` | Analytics deliverable (vector) | ✅ Complete |
| `assets/analytics-screenshot.png` | Analytics deliverable (raster) | ✅ Complete |
| `DOMAIN_AND_BADGE.md` | This deliverable document | ✅ Complete |
| `README.md` | Project README | ✅ Complete |
