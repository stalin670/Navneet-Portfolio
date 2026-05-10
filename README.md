# Navneet Singh — Portfolio

A bespoke, single-page portfolio site for **Navneet Singh** — a sales mentor and Business Development Leader based in New Delhi, currently working as **Manager at Makunai Global, Noida**.

> **Note:** Navneet is my client. I designed and built this portfolio for him from scratch. All copy, structure, animations and visual direction were tailored around his story across **Makunai Global, American Express, BYJU'S** and **Apple**.

Live look & feel: cinematic editorial — deep ink black, warm cream typography, gold accents, asymmetric layouts, smooth-scrolled section transitions, and a fully animated hero.

---

## ✦ Highlights

- **Single-page experience** — 7 narrative sections (Home, About, Experience, Mentorship, Resume, Education, Contact) with a sticky scroll-spy navbar that highlights and jumps you to any section.
- **Editorial design language** — Fraunces serif for display, Manrope for body, ink/cream/gold palette, paper-grain overlay, dual-layer photo frames, subtle vignettes.
- **Heavily optimised React app** — Vite-bundled, code-split, lazy-loaded below-the-fold sections, memoised components, preloaded hero photo, prefers-reduced-motion respected.
- **Resume integration** — the actual PDF lives in `/public` and is exposed via a dedicated section with **View** and **Download** CTAs plus a Certifications panel.
- **Accessible & responsive** — semantic HTML, keyboard-accessible nav, mobile drawer, fluid typography (`clamp()`), gracefully degrades on reduced motion.

---

## ✦ Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Build tool | **Vite 5** | Instant dev server, esbuild + Rollup, tiny prod bundles |
| UI library | **React 18** | Familiar, vast ecosystem, concurrent features |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`) | Utility-first, design-token driven via `@theme` |
| Animation | **Framer Motion 11** | Declarative motion + `whileInView` for scroll reveals |
| Smooth scroll | **Lenis** | RAF-driven momentum scrolling with anchor-link interception |
| Fonts | **Fraunces** (display) + **Manrope** (body) | Distinctive serif paired with a refined geometric sans |
| Hosting | Static — works on Netlify, Vercel, GitHub Pages, Cloudflare Pages | The build output is plain `dist/` |
| Backend / DB | _None_ | All content is static. (MongoDB was scoped initially but not needed.) |

### Project structure

```
Navneet-Portfolio/
├── public/
│   ├── favicon.svg              # On-brand "N." SVG mark
│   ├── navneet.jpeg             # Hero portrait (preloaded)
│   └── Navneet-Singh-Resume.pdf # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky scroll-spy nav + mobile drawer
│   │   ├── Hero.jsx             # Hero w/ portrait, stats, marquee
│   │   ├── ScrollProgress.jsx   # Top progress bar (scaleX motion)
│   │   ├── CountUp.jsx          # Reusable number count-up on inView
│   │   ├── Section.jsx          # Shared eyebrow + title section primitive
│   │   ├── About.jsx            # Bio, skills, strengths, languages
│   │   ├── Experience.jsx       # Vertical timeline of roles
│   │   ├── Mentorship.jsx       # 4 mentorship pillars + marquee
│   │   ├── Resume.jsx           # PDF CTA + certifications
│   │   ├── Education.jsx        # JNU spotlight + recognitions
│   │   ├── Contact.jsx          # Email / LinkedIn / Phone cards
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useLenis.js          # Smooth scroll + anchor interception
│   │   └── useScrollSpy.js      # IntersectionObserver-based active section
│   ├── App.jsx                  # Layout + Suspense + lazy section loading
│   ├── data.js                  # Single source of truth for all copy
│   ├── index.css                # Tailwind v4 theme + utilities + grain
│   └── main.jsx
├── index.html                   # Preconnect, preload, favicon, theme-color
├── vite.config.js               # React + Tailwind plugin + manual chunks
└── package.json
```

---

## ✦ Special Touches

### Animations & micro-interactions

| Element | Effect |
| --- | --- |
| **Page load (Hero)** | Staggered fade-up of eyebrow → name → tagline → CTAs (`cubic-bezier(0.22, 1, 0.36, 1)`) |
| **Hero portrait** | Triple-layer frame (rotated borders + gold ring), slow `scale(1.04)` on hover |
| **Stats** | Numbers count up from 0 on scroll-into-view via `IntersectionObserver` + `requestAnimationFrame` |
| **Hero marquee** | "Floors I've sold on" — infinite horizontal scroll of company names with edge-fade mask |
| **Scroll progress** | Top gold hairline that grows with scroll using Framer's `useScroll` + `useSpring` |
| **Smooth scrolling** | Lenis interpolates wheel/touch input; anchor clicks animate to target with offset |
| **Scroll-spy navbar** | Active section highlighted with a `layoutId` "pill" that morphs between items |
| **Section reveals** | Each section fades + slides up via `whileInView` (fires once, with viewport margin) |
| **Mentorship marquee** | Slogans loop horizontally — Pipeline / Discovery / Negotiation / Closing / Coaching |
| **Language bars** | Animated width (Hindi 100% → English 85% → Slavic 55%) on scroll-in |
| **Mobile menu** | Animated height + opacity collapse, animated burger icon |
| **Photo focal point** | `object-position` tuned so the hairline isn't cropped on round avatars or hero portrait |

### Design details

- **Paper grain** — SVG fractal-noise overlay applied via `::after` with `mix-blend-mode: overlay` for film-like texture on the hero and contact sections.
- **Vignette gradient** — Soft radial gold/rust glows blended into the ink background.
- **Hairline borders** — A single CSS variable controls the divider opacity across the site.
- **Text rendering** — `font-feature-settings: "ss01", "cv11"`, antialiased, optimizeLegibility, `text-wrap: balance/pretty` for editorial typography.
- **Gold accent** (`#C9A86A`) — used sparingly: numbers, eyebrows, italic name, hover states, scroll progress.

---

## ✦ Performance

- **Code splitting** — Below-fold sections (`About`, `Experience`, `Mentorship`, `Resume`, `Education`, `Contact`, `Footer`) are loaded via `React.lazy` + `Suspense`.
- **Manual chunks** — Framer Motion and Lenis split into their own bundles via `rollupOptions.output.manualChunks`.
- **Memoisation** — Every section component is wrapped in `React.memo` to avoid re-renders on parent updates.
- **Asset preloading** — `<link rel="preload" as="image" href="/navneet.jpeg" fetchpriority="high">` ensures the hero portrait paints early.
- **Fonts** — `<link rel="preconnect">` + `display=swap` so type swaps in without blocking paint.
- **Reduced motion** — `useLenis` checks `prefers-reduced-motion: reduce` and skips smooth scroll setup entirely.

Production bundle (gzipped):

```
index.html       0.57 kB
index.css        6.95 kB
React + app     ~50 kB
Framer Motion   ~43 kB  (separate chunk)
Lenis           ~5  kB  (separate chunk)
Section chunks  ~1 kB each (lazy)
```

---

## ✦ Run it locally

### Prerequisites

- **Node.js 18+** (20+ recommended)
- **npm** (or pnpm / yarn — adapt commands accordingly)
- A modern browser

### 1. Clone or fork

```bash
# Clone
git clone https://github.com/<your-username>/Navneet-Portfolio.git
cd Navneet-Portfolio

# Or fork on GitHub then clone your fork
git clone https://github.com/<your-username>/Navneet-Portfolio.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open `http://localhost:5173` — Vite hot-reloads on every edit.

### 4. Production build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

### 5. Deploy

Drop the `dist/` folder onto any static host:

- **Vercel / Netlify** — connect the GitHub repo, framework preset "Vite", build command `npm run build`, output `dist`.
- **GitHub Pages / Cloudflare Pages** — same build settings.
- **Self-hosted** — serve `dist/` behind any web server (nginx, Caddy, etc.).

---

## ✦ Customising the content

All copy lives in **`src/data.js`** — a single source of truth.

| Constant | Controls |
| --- | --- |
| `profile` | Name, role, taglines, location, email, phone, LinkedIn, resume path, bio |
| `stats` | The 4 hero stats (count-up animated) |
| `experience` | Timeline entries (current role flagged with `current: true`) |
| `education` | Education cards (currently JNU spotlight) |
| `certifications` | Resume-section certification list |
| `languages` | Animated language proficiency bars |
| `strengths` | About-section strength bullets |
| `mentorship` | Intro + 4 pillars (Cold→Closed, Reps that Ramp, Founder Sales, Mindset) |
| `recognitions` | Awards displayed in the Education section |
| `skills` | Pill chips in the About card |
| `sections` | Top-bar nav items (`id` must match section element IDs) |

Replace `public/navneet.jpeg` and `public/Navneet-Singh-Resume.pdf` to swap the photo / resume.

---

## ✦ Fork & contribute

```bash
# 1. Fork the repo on GitHub (top-right "Fork")
# 2. Clone your fork
git clone https://github.com/<you>/Navneet-Portfolio.git
cd Navneet-Portfolio

# 3. Create a feature branch
git checkout -b feat/my-change

# 4. Hack
npm install
npm run dev

# 5. Commit + push
git add .
git commit -m "feat: describe your change"
git push origin feat/my-change

# 6. Open a Pull Request on GitHub
```

If you're adapting this for a different person, **only `src/data.js`, the photo, and the resume file should need editing** — the components are content-agnostic.

---

## ✦ Credits

- **Design + build:** Amit (me) — for my client Navneet Singh.
- **Subject:** Navneet Singh — Sales & Marketing Specialist · Sales Mentor.
- **Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts.
- **Icons & marks:** Hand-rolled SVG (favicon), no third-party icon library.

---

## ✦ License

Personal portfolio — content (text, photo, resume) belongs to **Navneet Singh** and is **not** licensed for reuse. Code structure may be referenced for educational purposes; please don't copy the styling and content verbatim for another person's portfolio.

---

**Reach Navneet:** [navneetsingh275@gmail.com](mailto:navneetsingh275@gmail.com) · [LinkedIn](https://www.linkedin.com/in/singh-navneet-9063391bb/) · +91 93106 50363
