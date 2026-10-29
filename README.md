# Personal Developer Portfolio — Avackaa Micheal A. Jr.

A high-performance, single-page personal developer portfolio built for **Avackaa Micheal A. Jr.**, a full-stack developer focusing on backend architectures in Python (FastAPI) and PHP (Laravel), based in Jos, Plateau State, Nigeria.

The design faithfully recreates the static visual layout, typography scale, spacing, dividers, and editorial presentation of [aahil-khan.xyz](https://www.aahil-khan.xyz/) using verified content from Avackaa's authenticated curriculum vitae.

---

## Key Features

- **Pixel-Level Editorial Layout:** Space Grotesk typography, 88px background grid lines, high-contrast cream/dark palettes, hard-bordered pill badges, and numbered project entries (01, 02, 03).
- **Zero Motion / Animation Overhead:** State changes (theme toggle, experience selector, case study disclosures, mobile drawer, back-to-top) occur immediately with zero scroll-locks, zero layout shifts, and zero lag.
- **Strictly Verified CV Data:**
  - **Two Axia Roles:** Full-Stack & Backend Developer Intern (Dec 2025 – Present) and Backend Instructor in PHP, MySQL & Laravel (Dec 2024 – Present).
  - **Three Verified Projects:** `Student_Cloud` (School Management System), `BookIT` (Asynchronous Booking & Reservation API), and `Secure User Authentication & Account Management System` (Custom native PHP security module).
  - **Credentials:** B.Sc. in Biochemistry (University of Jos, 2012) and WASSCE (Emmanuel International College, 2006).
- **Working Assets & Links:** Authentic CV PDF download (`/assets/avackaa-micheal-cv.pdf`), real GitHub, LinkedIn, and direct `mailto` contact links. Invented URLs and dead `#` links are strictly eliminated.
- **Complete Accessibility:** Fully navigable via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`, `ArrowUp`/`ArrowDown` for experience selector, `Esc` for modal closure), visible focus outlines, and semantic HTML5 landmarks.
- **Theme Switcher:** Instant toggle between Cream and Dark themes with `localStorage` persistence.

---

## Technology Stack

- **Core:** Semantic HTML5, Vanilla JavaScript (ES Modules).
- **Styling:** Vanilla CSS (Custom properties/tokens, CSS Grid, Flexbox, responsive clamp scales).
- **Tooling & Build:** [Vite](https://vitejs.dev/) for sub-second development and production builds.
- **Assets:** Scalable SVG icons and authentic PDF document delivery.

---

## Project Structure

```
Portfolio/
├── public/
│   ├── assets/
│   │   └── avackaa-micheal-cv.pdf    # Authenticated CV PDF
│   └── favicon.svg                   # Monogram SVG brand mark (AM)
├── src/
│   ├── data/
│   │   └── portfolioData.js          # Single source of truth for all content
│   ├── main.js                       # Interactive logic & dynamic DOM rendering
│   └── style.css                     # Design tokens, layouts, and responsive styles
├── scripts/
│   └── test_portfolio.mjs            # Automated verification & screenshot test suite
├── index.html                        # Semantic HTML5 base entry
├── package.json                      # Project scripts and dependencies
└── README.md                         # Documentation and operational manual
```

---

## Getting Started

### Prerequisites

- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### Installation

Clone or open the repository directory and install dependencies:

```bash
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Production Build & Deployment

### Build

Compile and bundle static assets for production:

```bash
npm run build
```

The production output will be generated inside the `dist/` directory:
- Optimized HTML (`dist/index.html`)
- Minified CSS (`dist/assets/index-*.css`)
- Bundled JavaScript (`dist/assets/index-*.js`)
- Static assets (`dist/assets/avackaa-micheal-cv.pdf`, `dist/favicon.svg`)

### Preview Production Build

To locally preview the production build on port 4173:

```bash
npm run preview
```

Open `http://localhost:4173` to test the production bundle.

### Static Deployment

The contents of `dist/` can be deployed directly to any static web hosting platform (e.g. Vercel, Netlify, Cloudflare Pages, GitHub Pages, AWS S3, or Nginx).

---

## Content Updates

All content is decoupled from presentation and stored in a single centralized module: [`src/data/portfolioData.js`](file:///home/avatar/Documents/Workspace/Portfolio/src/data/portfolioData.js).

### 1. Updating Profile & Hero Information
Edit the `profile` and `hero` objects:
```javascript
export const portfolioData = {
  profile: {
    name: "Avackaa Micheal Jr.",
    location: "Jos, Plateau State, Nigeria",
    email: "avackaamicheal@gmail.com",
    githubUrl: "https://github.com/avackaamicheal",
    linkedinUrl: "https://linkedin.com/in/michealavackaa",
    showPhonePublicly: false, // Set to true if phone should be displayed
    ...
  }
};
```

### 2. Updating Skills
Add, remove, or modify items within the `skills` array. Each item supports `type: "core"` (displays technology badge) or `type: "text"` (displays pill tag).

### 3. Updating Experience Roles
Roles in `portfolioData.experience` populate both the left-hand role selector tabs and the right-hand detail panels. Add or update roles by modifying:
- `organization`: Company or institution name
- `role`: Official job title
- `period`: Duration string (e.g., `Dec 2025 – Present`)
- `focus`: Subheading focus area
- `bullets`: List of key responsibilities and achievements
- `chips`: Technology stack tags

### 4. Updating Projects & Case Studies
Projects in `portfolioData.projects` generate the numbered work list (`01`, `02`, `03`) and the interactive write-up dialog:
- `num`: Entry number (`01`, `02`, etc.)
- `title`: Project name
- `subtitle`: Descriptive tag
- `lede`: One-line summary
- `highlights`: Key engineering highlights
- `details`: Architectural overview, key features, and engineering notes

### 5. Replacing the Résumé PDF
1. Replace the file at [`public/assets/avackaa-micheal-cv.pdf`](file:///home/avatar/Documents/Workspace/Portfolio/public/assets/avackaa-micheal-cv.pdf) with the updated PDF.
2. Re-run `npm run build` to copy the asset into the production bundle.

---

## Automated Verification

An automated verification test script is included in [`scripts/test_portfolio.mjs`](file:///home/avatar/Documents/Workspace/Portfolio/scripts/test_portfolio.mjs). It uses headless Chrome to validate:
- Desktop (1440 × 900) and mobile (390 × 844) layouts
- Experience tab switching and keyboard accessibility
- Project case study dialog opening, rendering, and dismissal
- Theme toggle functionality
- Zero browser console errors and clean network delivery

To run:
```bash
node scripts/test_portfolio.mjs
```

---

## License

Personal copyright &copy; 2026 Avackaa Micheal A. Jr. All rights reserved.
