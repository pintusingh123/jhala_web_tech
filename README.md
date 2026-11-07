# JhalaWebTech — Web & Mobile App Development Agency

Production web and mobile software development studio based in Rajasthan, India, engineered with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS v4**.

- **Live URL:** [https://jhalawebtech.vercel.app/](https://jhalawebtech.vercel.app/)
- **Repository:** [https://github.com/pintusingh123/jhala_soft_agency.git](https://github.com/pintusingh123/jhala_soft_agency.git)
- **Design System:** Deep Ink (`#0B0D12`) + Signal Orange (`#FF6B2C`) with instant Light Mode (`#FAF8F5`) toggle.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 15.4 (App Router, Turbopack, Server Components, Static Site Generation)
- **Core Library:** React 19.2
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` with CSS Custom Properties tokens
- **Typography:** `Space Grotesk` (Headings), `Inter` (Body), and `JetBrains Mono` (Code & badges) via `next/font/google`
- **Icons:** `lucide-react` (1.5px stroke weight, 0 emoji icons)
- **Smooth Scroll:** `lenis` (desktop-accelerated smooth scrolling)
- **API Backend:** Serverless API route (`/api/contact`) with spam honeypot validation
- **Content Separation:** 100% of website copy, pricing tiers, FAQs, testimonials, and case studies are cleanly abstracted into `/src/content/*.js` for instant non-technical updates.

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/pintusingh123/jhala_soft_agency.git
cd service
npm install
```

### 2. Development Server
Start the Next.js Turbopack local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
Verify static pre-rendering and build production assets:
```bash
npm run build
```

### 4. Code Quality & Linting
Run ESLint:
```bash
npm run lint
```

---

## 📂 Project Directory Structure

```
├── public/                 # Static assets (favicon, manifest, robots, sitemap, images)
├── src/
│   ├── app/                # Next.js 15 App Router pages & serverless APIs
│   │   ├── api/contact/    # Serverless Contact API route (POST /api/contact)
│   │   ├── services/       # Services Bento Grid & capabilities (/services)
│   │   ├── work/           # Selected Work & case studies (/work)
│   │   ├── process/        # 5-step delivery timeline (/process)
│   │   ├── pricing/        # Transparent tiers & App Estimator (/pricing)
│   │   ├── about/          # Agency manifesto & engineering principles (/about)
│   │   ├── blog/           # Engineering articles & performance deep dives (/blog)
│   │   ├── contact/        # 1-click quote & WhatsApp routing (/contact)
│   │   ├── privacy/        # Privacy policy & data governance (/privacy)
│   │   ├── terms/          # Terms of service & code IP handover (/terms)
│   │   ├── styleguide/     # Design system token documentation (/styleguide)
│   │   ├── layout.jsx      # Root HTML layout, SEO metadata, JSON-LD schema
│   │   ├── globals.css     # Design tokens & universal focus styles
│   │   └── page.jsx        # Landing homepage
│   ├── components/         # Reusable presentation & client components
│   │   ├── ui/             # Core primitives (Button, Card, Badge, Container, etc.)
│   │   ├── Navbar.jsx      # Sticky navbar with mobile drawer navigation
│   │   ├── Footer.jsx      # 4-column corporate footer
│   │   └── Logo.jsx        # Custom SVG brand mark & wordmark
│   ├── content/            # All editable business copy & structured data
│   │   ├── company.js      # Contact info, phone numbers, WhatsApp, coordinates
│   │   ├── services.js     # 6 primary service offerings & tags
│   │   ├── projects.js     # Selected real case studies with metrics
│   │   ├── pricing.js      # Transparent package pricing (INR & USD)
│   │   ├── process.js      # 5-step milestone delivery timeline
│   │   ├── faq.js          # Frequently asked client questions & answers
│   │   └── testimonials.js # Verified client reviews & ratings
│   └── views/              # Page view components
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS & Tailwind v4 plugin config
└── package.json            # Pruned, minimal dependencies
```

---

## 🔒 Security & Performance

- **Zero-Flash Theme Loading:** Inline script in `<head>` sets `data-theme` before paint based on `localStorage` or `prefers-color-scheme`.
- **Pre-Rendered Static Pages:** All 13 core pages pre-render statically on compile for optimal LCP, zero CLS, and instant TTFB.
- **Accessible WCAG 2.2 AA:** Touch targets $\ge 44\text{px}$, visible focus rings with `outline: 2px solid var(--accent)`.
- **Spam Trap:** Contact API implements a silent honeypot trap to eliminate bot submissions.

---

## 📄 License

Proprietary software &copy; 2026 JhalaWebTech. All rights reserved.
