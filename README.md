# Taga Ittehad Pakistan (تگہ اتحاد پاکستان)
> **"Qaum Ka Sahara, Ittehad Hamara"**  
> *(The Nation's Support, Unity Is Our Strength)*

A modern, accessible, and high-performance demonstration web portal built for **Taga Ittehad Pakistan**, an autonomous humanitarian and community welfare organization headquartered in Shorkot City, District Jhang, Punjab, Pakistan.

---

## 🌟 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18, Strict TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with extracted brand theme (Deep Green `#0B6B3A`, Warm Gold `#C9A227`, Warm White `#FAF8F5`)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Animations:** Subtle CSS transitions + Framer Motion (strict `prefers-reduced-motion` compliance)
- **Accessibility:** WCAG 2.2 AA compliant (4.5:1+ contrast ratio, semantic HTML5, skip-to-content, keyboard navigation, focus indicators)
- **Content:** Decoupled TypeScript data layer in `/src/data` ready for CMS/API transition

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd tagaIthadpak

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website.

### Production Build
```bash
# Build production bundle with zero errors
npm run build

# Start production server
npm run start
```

---

## 📁 Project Architecture

```
tagaIthadpak/
├── public/
│   └── images/
│       ├── logo/       # Official crest, emblems, badge
│       ├── office/     # Central office & executive desk photos
│       ├── members/    # Leadership portraits & union presidents
│       └── gallery/    # Newspaper clippings, medical camps, calendars
├── src/
│   ├── app/
│   │   ├── (all 7 required routes + extras)
│   │   ├── page.tsx               # Home
│   │   ├── about/page.tsx         # About
│   │   ├── chairman/page.tsx      # Chairman Profile & Vision
│   │   ├── leadership/page.tsx    # Central Cabinet & Executives
│   │   ├── areas/page.tsx         # Searchable Towns & Area Presidents
│   │   ├── progress/page.tsx      # Timeline & Growth Charts
│   │   ├── welfare/page.tsx       # Welfare Programmes & Support
│   │   ├── news/page.tsx          # News Listing
│   │   ├── news/[slug]/page.tsx   # News Detail
│   │   ├── notifications/page.tsx # Official Gazettes & PDF download
│   │   ├── contact/page.tsx       # Contact & OpenStreetMap
│   │   ├── privacy/page.tsx       # Privacy Policy
│   │   ├── terms/page.tsx         # Terms of Service
│   │   ├── not-found.tsx          # Custom 404
│   │   ├── robots.ts              # SEO Robots.txt
│   │   ├── sitemap.ts             # SEO XML Sitemap
│   │   ├── globals.css            # Tailwind & accessible focus styles
│   │   └── layout.tsx             # Root layout with fonts & semantic landmarks
│   ├── components/
│   │   ├── Header.tsx             # Sticky nav, mobile menu, language pill
│   │   ├── Footer.tsx             # Full organization footer
│   │   ├── PersonCard.tsx         # Accessible profile card
│   │   ├── NewsCard.tsx           # Article card
│   │   ├── NotificationRow.tsx    # Gazette row with downloadable text/PDF
│   │   ├── StatCounter.tsx        # Animated impact counters
│   │   ├── DemoDonationModal.tsx  # Accessible demo donation dialog
│   │   ├── AreaDetailModal.tsx    # Regional detail dialog
│   │   ├── SectionHeading.tsx     # Standard section headings
│   │   ├── DemoBadge.tsx          # Transparent demo badges
│   │   └── SkipLink.tsx           # Accessibility skip-to-content
│   └── data/
│       ├── images.ts              # Registry of all 22 photos & alt text
│       ├── site.ts                # Organization profile & contacts
│       ├── leadership.ts          # Chairman, President, VP, Cabinet
│       ├── areas.ts               # Regional town representatives & dossiers
│       ├── news.ts                # Real news items translated from Urdu
│       ├── notifications.ts       # Official circulars & gazettes
│       ├── welfare.ts             # 5 welfare programmes & projects
│       └── progress.ts            # Milestones timeline & 2027 goals
```

---

## ✍️ How to Edit Content & Replace Placeholders

All content is centralized in `/src/data/`:

1. **Chairman Message & Portrait:**
   - Open `src/data/leadership.ts`
   - Update `chairmanProfile.message` and replace `image` with the confirmed portrait.
2. **Central Education Secretary:**
   - Search for `// TODO: confirm` in `src/data/leadership.ts` and set the confirmed name.
3. **Adding New Leadership or Area Presidents:**
   - Edit `src/data/areas.ts` and append to `areaMembers`.
4. **Publishing New Official Notifications:**
   - Edit `src/data/notifications.ts` and add a new `officialNotifications` object.
5. **Adding News Articles:**
   - Edit `src/data/news.ts` and add your new article with its slug, date, category, and paragraphs.

---

## 🖼️ How to Add or Replace Images

1. Place image in the appropriate directory inside `/public/images/{logo,office,members,gallery}` with a clean lowercase-hyphen name.
2. Update `/src/data/images.ts` with the new file path, purpose, and meaningful English alt text.
3. Reference the path in `/src/data/leadership.ts`, `/src/data/news.ts`, or `/src/data/welfare.ts`.

---

## 🚢 Deployment on Vercel

This Next.js App Router application is optimized for zero-config deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into your Vercel Dashboard.
3. Framework Preset: **Next.js**
4. Root Directory: `./`
5. Click **Deploy**.

---

## ♿ Accessibility & Quality Standards

- **Semantic HTML5:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- **One H1 per page** with logical heading hierarchy
- **WCAG 2.2 AA Contrast:** Primary dark green (`#0B6B3A`) and Slate-900 against white/warm-white exceed 4.5:1 (up to 14:1)
- **Accessible Modals & Menus:** Keyboard `Escape` listener, focus containment, `aria-modal="true"`, body scroll lock
- **Touch Targets:** Minimum 44x44px on all interactive buttons and navigation links
