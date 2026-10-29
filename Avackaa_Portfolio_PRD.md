# Product Requirements Document (PRD)
## Personal Developer Portfolio — Avackaa Micheal A. Jr.

**Version:** 1.1  
**Prepared:** 29 October 2026  
**Status:** Ready for implementation  
**Primary visual reference:** https://www.aahil-khan.xyz/ — closely reproduce the reference site’s primary portfolio page layout and visual treatment. Replace its personal content with Avackaa’s CV-backed content. Omit the animation-heavy effects and separate playful canvas experience.

---

## 1. Product overview

Build a polished, responsive, single-page personal portfolio for **Avackaa Micheal A. Jr.**, a full-stack developer with a backend focus in Python (FastAPI) and PHP (Laravel), based in Jos, Plateau State, Nigeria. The website should help hiring managers, engineering leads, founders, and potential collaborators quickly understand what Avackaa builds, how he works, and how to contact him.

The main portfolio should closely resemble the reference site in its static visual presentation: page structure, section order, navigation placement, type scale, content widths, spacing, alignment, dividers, cards, metadata, and overall dark editorial feel. This is an intentional close visual recreation, not a loose inspiration exercise. Use Avackaa’s own content and identity. Leave out animations and the separate playful canvas/game experience.

### Primary value proposition

> I build reliable web applications and REST APIs with Python (FastAPI) and PHP (Laravel), with a focus on backend systems, data modelling, and practical software engineering.

### Main conversion goals

1. Get visitors to explore the selected projects.
2. Make the visitor understand Avackaa's technical focus and professional experience.
3. Make it easy to email Avackaa, visit GitHub or LinkedIn, and download the résumé.

## 2. Goals and non-goals

### Goals

- Communicate Avackaa's professional identity within the first screen.
- Make **Student_Cloud**, **BookIT**, and the **Secure User Authentication & Account Management System** the main portfolio pieces.
- Present the two Axia Technology & Innovation Hub roles without hiding the instructor/mentor experience.
- Group skills by practical use rather than showing an unstructured wall of logos.
- Work well on phones, tablets, laptops, and wide desktop screens.
- Keep content easy to update from one central data/configuration file.
- Provide accessible navigation, useful metadata, and a direct path to contact and résumé.

### Non-goals for the first release

- No user accounts, database, admin dashboard, or custom backend.
- No fabricated project metrics, client testimonials, awards, certifications, publication history, or claims of commercial deployment.
- No non-functional contact form. Use a real email link unless a working form backend is intentionally added later.
- Do not build the reference site's separate playful canvas/game experience as part of this release.
- Do not add animations: no scroll reveals, parallax, typewriter effect, animated cursor, project-card movement, animated transitions, or decorative motion. Keep interactions immediate.
- Use Avackaa's own biography, work history, projects, and contact details instead of the reference author's personal copy. The reference's visual layout and styling are explicitly in scope; its source code, personal branding, photos, and original artwork are not assets to reuse.

## 3. Target visitors

- **Recruiters and hiring managers:** need to quickly evaluate technical focus, work history, projects, and contact details.
- **Engineering leads and founders:** want evidence of practical backend/API skills and an understanding of databases, security, and delivery.
- **Potential clients and collaborators:** want to see the kinds of web applications and integrations Avackaa can work on.
- **Learners and developers:** may be interested in Avackaa's PHP, MySQL, and Laravel teaching experience.

## 4. Product and design direction — close visual recreation required

**Treat https://www.aahil-khan.xyz/ as the primary design specification.** Before coding, open the live reference and study the main portfolio page at desktop and mobile widths. Reproduce its visible composition as closely as practical. Do not reinterpret it into a generic portfolio template or introduce a separate visual style. The goal is for a visitor who knows the reference to recognise the same layout and design language, with Avackaa's own content substituted.

### Reference patterns to match closely

- **Header/navigation:** a compact brand monogram at the left, horizontally arranged section links, and a clearly visible résumé/download action at the right on desktop. Use an `AM` or `AMJ` monogram rather than the reference author's `AK`. Preserve the compact spacing and alignment. On smaller screens, adapt the same hierarchy without letting navigation dominate the viewport.
- **Hero:** location as a small metadata label, a large name heading, one concise role/value statement, and compact calls to action. Match the relative scale, line breaks, alignment, content width, and vertical spacing visible in the reference. Use `See the work` and `Get in touch` for the main actions. Do not add a portrait unless Avackaa supplies one; use a restrained monogram or omit the image slot rather than using stock imagery.
- **About:** a small section label and a prominent short heading in the reference's editorial style, with the profile content arranged and spaced similarly. Keep Avackaa's copy concise and factual.
- **Toolbox / Skills:** reproduce the reference's grouped skill categories, compact technology icon-and-label treatment, and visual rhythm. Use only skills supported by the CV. Use genuine technology marks where practical; avoid percentage bars or made-up proficiency ratings.
- **Experience:** match the reference's numbered/ordered experience selector and the associated detail panel. Show the role, organisation, dates, short summary, bullet points, and relevant technology labels. The selector must work, but opening and closing content should be immediate, with no animation.
- **Selected work:** match the reference's small section eyebrow, large heading, introductory line, numbered project entries, compact project metadata, project title, short description, highlight/callout where supported, technology labels, and right-facing detail-link treatment. There are three CV-backed projects, so show three entries rather than inventing a fourth. Since no project URLs are provided, create real internal project-detail views or immediate expandable details; never point a control to a placeholder or a fabricated external destination.
- **Education / credentials:** reproduce the reference's compact “rest of it” information grouping and typographic hierarchy, adapted to the verified education credentials in the CV. Do not display empty Awards or Writing categories. The B.Sc. and WASSCE may appear as compact entries.
- **Contact/footer:** match the reference's final invitation, email-first contact treatment, compact GitHub/LinkedIn/résumé links, location/credit line, and back-to-top affordance. Use Avackaa's correct details.
- **Section rhythm:** match the reference's content width, left alignment, section spacing, paragraph lengths, dividers, borders, line heights, heading scale, muted metadata and restrained accent usage. Avoid adding decorative rounded cards, gradients, glass effects, or new UI patterns not present in the reference.

### Visual matching workflow

1. Inspect the live page rather than relying on this written summary alone. Identify its actual background/text/accent colours, typefaces and weights, heading sizes, container width, margins, line heights, border treatment, icon style, link treatment, and navigation spacing.
2. Implement the page with CSS variables/design tokens that reproduce those observed values as closely as possible. Do not choose a new accent colour or font based only on personal preference.
3. Compare screenshots of the implementation and reference side by side at a desktop viewport (approximately 1440 × 900) and a mobile viewport (approximately 390 × 844). Adjust until the static composition is a close match.
4. Keep the same overall page information architecture, adapting labels and content only where Avackaa's CV differs. Do not copy the reference author's personal biography, project descriptions, images, logo, or other original assets.

### Motion and interaction policy

- **No animations.** Do not implement scroll reveals, smooth-scroll animation, parallax, typing effects, animated cursors, moving cards, entrance effects, or animated expand/collapse transitions.
- Interactive elements such as navigation links, experience selection, project details, résumé download, and back-to-top must still work. State changes should happen immediately.
- Static hover/focus styling is acceptable when it matches the reference. Keep keyboard focus clearly visible and respect `prefers-reduced-motion` as an additional safeguard.

### Responsive behaviour

Keep the same visual hierarchy on desktop, tablet, and mobile. Adapt columns and navigation only as needed for usability; don't replace the design with a completely different mobile aesthetic. Prevent horizontal overflow and ensure tap targets remain comfortable.

## 5. Information architecture

Build the primary reading portfolio as one page, in this order, following the reference site's section sequence:

1. Compact header/navigation and résumé action
2. Location label and hero
3. About
4. Toolbox / Skills
5. Experience selector and details
6. Selected work / project entries
7. Compact education and credentials area
8. Contact invitation and footer

The header should remain available while scrolling in a way that matches the reference. Main navigation links should target the corresponding section. The reference site's separate canvas/game experience is outside this release's scope.

## 6. Content specification and approved copy

Use the content below as the starting copy. Copy may be lightly edited for clarity, but preserve the meaning and do not add unsupported claims.

### 6.1 Header and hero

**Location label:** `Jos, Plateau State, Nigeria`

**Name:** `Avackaa Micheal Jr.`

**Role statement:**

> Full-stack developer building reliable web applications and REST APIs with Python (FastAPI) and PHP (Laravel).

**Supporting line:**

> Focused on backend systems, relational data, integrations, and clean, maintainable software. I also teach PHP, MySQL, and Laravel.

**Primary CTA:** `See the work` — targets the selected-work section, matching the reference label and placement.

**Secondary CTA:** `Get in touch` — targets Contact or opens an email draft, matching the reference’s compact CTA treatment.

**Résumé action:** `Download résumé` — downloads the supplied CV PDF from the site's assets folder.

Do not add claims such as “10x engineer”, “industry-leading”, or years of experience unless the owner explicitly provides and approves them.

### 6.2 About

**Section eyebrow/heading:** `About` / `Hi there!` — match the reference’s label-plus-heading hierarchy.

**Suggested copy:**

> I'm Avackaa, a full-stack developer who works across backend engineering and responsive web interfaces. I build applications and REST APIs with Python/FastAPI and PHP/Laravel, and work with relational databases, migrations, authentication, and third-party integrations.
>
> Alongside development, I teach PHP, MySQL, and Laravel at Axia Technology & Innovation Hub, helping learners understand the fundamentals and apply them in practical projects. My academic background in Biochemistry has also shaped an analytical approach to solving problems.

Use short paragraphs and keep the text scannable. A profile photo is optional and must only be used if the owner supplies one.

### 6.3 Skills / toolbox

Section eyebrow/heading: `Toolbox` / `What I build with`. Use the reference’s compact grouped toolbox layout with technology icon-and-label items, category labels, and closely matched spacing. Do not use percentage proficiency bars or imply verified skill levels that are not in the CV.

**Languages and web fundamentals**

- Python
- PHP
- JavaScript (ES6+)
- HTML5
- CSS3
- Responsive design
- DOM manipulation

**Backend and architecture**

- FastAPI
- Laravel
- RESTful API design
- MVC architecture
- Object-oriented programming (OOP)
- Asynchronous programming

**Databases and data access**

- PostgreSQL
- MySQL
- SQLite
- SQLAlchemy
- Alembic
- Eloquent ORM
- Relational schema design and migrations
- JSON data schemas

**Frontend styling**

- Tailwind CSS
- Bootstrap

**Integrations and delivery**

- Paystack
- Monnify
- Webhooks
- Application deployment
- CI/CD pipelines

**Tools and practices**

- Git and GitHub
- Postman
- Linux environment
- Unit testing
- Agile/Scrum workflow
- System debugging
- Technical instruction and mentoring

Do not add languages or frameworks that are absent from the CV simply to make the portfolio appear more current.

### 6.4 Experience

Section heading: `Experience` / `Where I've been`. Follow the reference’s numbered experience selector paired with a detail panel rather than substituting a generic timeline. Each role should show the organisation, role title, dates, concise summary, responsibilities, and relevant technology labels. Selection must work with mouse, keyboard, and touch, and switch immediately without animation.

**Role 1**

- **Organisation:** Axia Technology & Innovation Hub
- **Title:** Full-Stack & Backend Developer Intern
- **Dates:** Dec 2025 – Present
- **Focus:** Software engineering, API integration, and web application development
- **Details:**
  - Engineer server-side applications and microservices using Python (FastAPI) and PHP (Laravel).
  - Develop responsive, mobile-first interfaces using HTML5, CSS3, Tailwind CSS, and Bootstrap.
  - Design relational database schemas and work on query performance across PostgreSQL and MySQL.
  - Build and document REST API endpoints for internal operational tools and member dashboards.
  - Troubleshoot bugs, review code, and participate in sprint planning.

**Role 2**

- **Organisation:** Axia Technology & Innovation Hub
- **Title:** Backend Instructor (PHP, MySQL & Laravel)
- **Dates:** Dec 2024 – Present
- **Focus:** Technical instruction, curriculum delivery, and developer mentorship
- **Details:**
  - Teach PHP fundamentals, object-oriented programming, and the Laravel MVC framework through practical lessons.
  - Train students in relational database modelling, normalization, indexing, and SQL querying with MySQL and Eloquent ORM.
  - Guide learners in building REST APIs, implementing authentication, and using database migrations.
  - Conduct code reviews, assess projects, and mentor learners in software engineering practices and Git collaboration.

Display both roles as separate positions at the same organisation. Their date ranges overlap in the CV; do not “correct” or merge the dates.

### 6.5 Selected projects

Section label: `Selected work`. Main heading: `Three things worth opening`. Use the reference’s numbered editorial work-entry treatment rather than generic rounded cards. Each entry should include compact category metadata, project title, one-line purpose, relevant highlight when supported, stack labels, and a `Read the write-up`-style detail action. Use three entries because the CV verifies three featured projects. The detail view can be an accessible internal case-study page or immediate disclosure panel. If screenshots, demos, or repository URLs are later supplied, include them; until then, never generate fake external links.

#### Project A — Student_Cloud

**Display name:** `Student_Cloud`

**Subtitle:** `School Management System`

**Stack:** Laravel (PHP), MySQL, Blade, Bootstrap / Tailwind CSS

**Summary:**

> A full-stack school management web application designed to streamline student administration, enrollment records, and academic tracking.

**Engineering highlights:**

- Uses Laravel's MVC pattern.
- Includes normalized MySQL schemas and Eloquent ORM relationships across courses, classes, and students.
- Implements authentication, session management, and role-based access for administrators, teachers, and students.

**Detail view sections:** Overview, key functionality, engineering highlights, technology stack, links (only when supplied).

#### Project B — BookIT

**Display name:** `BookIT`

**Subtitle:** `Asynchronous Booking & Reservation API`

**Stack:** FastAPI, Python, PostgreSQL / SQLite, SQLAlchemy, Alembic, Pydantic, Postman

**Summary:**

> An asynchronous REST API for appointments, resource scheduling, and booking reservations.

**Engineering highlights:**

- Uses asynchronous API routes for booking and scheduling workflows.
- Uses SQLAlchemy ORM for relational data models.
- Uses Pydantic for request validation and serialization.
- Uses Alembic for schema versioning and database migrations.

Do not add unsupported claims about throughput, traffic, users, uptime, or measured performance.

#### Project C — Secure User Authentication & Account Management System

**Subtitle:** `Custom PHP authentication and account management`

**Stack:** PHP, MySQL, HTML5, CSS3, JavaScript

**Summary:**

> A custom authentication and access-control module built with native PHP and MySQL, without a backend framework.

**Engineering highlights:**

- Password hashing with bcrypt.
- Session security protections.
- CSRF token validation.
- SQL injection prevention with PDO prepared statements.
- Responsive sign-in, registration, and account-recovery interfaces.

Avoid implying that this project has undergone a formal security audit unless that is independently confirmed.

### 6.6 Education and credentials

Section heading: `The rest of it`; subsection: `Education`. Use the compact grouped information treatment from the reference's “The rest of it” section. Keep the content short and factual, and do not create empty Awards or Writing columns.

**Education**

- **Bachelor of Science (B.Sc.) in Biochemistry** — University of Jos, Plateau State, Nigeria · 2012 · Second Class Division
- **West African Senior School Certificate (WASSCE)** — Emmanuel International College, Plateau State, Nigeria · 2006

The downloadable résumé remains the full source document.

### 6.7 Contact and footer

**Section heading:** `Let's build something.`

**Suggested copy:**

> Have a project, a backend challenge, or an opportunity to collaborate? Send me a message.

**Contact links:**

- Email: `avackaamicheal@gmail.com` — `mailto:avackaamicheal@gmail.com`
- GitHub: `https://github.com/avackaamicheal`
- LinkedIn: `https://linkedin.com/in/michealavackaa`
- Location: `Jos, Plateau State, Nigeria`

The phone number is on the résumé. Do not prominently expose it in the public website UI by default; make public display an optional configuration choice.

Footer: `© [current year] Avackaa Micheal Jr.` plus a small `Back to top` link. The year should be generated dynamically.

## 7. Functional requirements

### P0 — Required for launch

- **Navigation:** all section links target the correct section. Match the reference navigation behaviour but use immediate movement, with no animated smooth scrolling.
- **Navigation states:** replicate the reference’s selected/hover/focus link treatment where visible, without transitions or animation.
- **Résumé download:** a real PDF file is available at a clearly documented asset path, such as `/assets/avackaa-micheal-cv.pdf`. The action must not point to a missing file.
- **Contact:** email link opens the visitor's default email application. GitHub and LinkedIn open the correct profiles in a new tab where appropriate.
- **Experience selector:** the role selector and detail panel work by pointer, touch, and keyboard; content changes immediately and exposes the active state accessibly.
- **Project details:** all three project entries open a real internal detail view or immediate expandable panel; no fake or unavailable URLs.
- **Responsive layout:** no horizontal page overflow at common phone widths.
- **Centralised content:** profile copy, skills, experience, projects, and links should be easy to update without editing layout markup in multiple places.

### P1 — Recommended

- `Back to top` control styled and positioned like the reference.
- Static hover states and visible keyboard focus states; no motion or transitions.
- Open Graph/social sharing metadata.
- A favicon using the `AM`/`AMJ` monogram or an owner-supplied brand mark.

### Explicitly excluded from MVP

- The reference site's separate playful canvas/game experience.
- All decorative and interface animations. The primary page should remain visually faithful without reproducing motion effects.

## 8. Technical implementation guidance for the coding agent

1. Inspect the existing repository before choosing or changing a framework. Reuse the current stack and project conventions when practical.
2. If this is a greenfield project, choose a lightweight, well-supported frontend setup suitable for deployment as a static site. A modern HTML/CSS/JavaScript build will be acceptable if it achieves the same quality.
3. No application backend, database, authentication, or server-rendered content is required for the first release.
4. Keep content data separated from presentation—for example, a single profile/content module or JSON file.
5. Use semantic HTML elements, reusable components, and consistent spacing/type tokens.
6. Keep dependencies lean. Do not install animation libraries; animations are out of scope. Use CSS and component behaviour to match the reference statically.
7. Use the provided CV PDF as the résumé asset, if it is available in the build workspace. Do not create a replacement résumé or change its facts.
8. Add clear configuration points for project links and optional phone display. If a link is absent, hide the link control rather than linking to `#`, a placeholder, or a made-up URL.
9. Provide concise setup and deployment instructions in a README, including how to update the content and replace the résumé PDF.
10. Do not claim that deployment, testing, or third-party integrations succeeded unless they were actually run and verified.

## 9. Accessibility, SEO, and quality

### Accessibility

- Use semantic landmarks and a logical heading hierarchy.
- Ensure every interactive control is reachable by keyboard and has a visible focus state.
- Use sufficient text/background contrast.
- Give icon-only links accessible names.
- Make project details and experience disclosures keyboard operable.
- Respect `prefers-reduced-motion`.
- Do not use colour as the only means of communicating state.

### SEO and sharing

Suggested page title:

`Avackaa Micheal Jr. | Full-Stack Developer — FastAPI & Laravel`

Suggested meta description:

`Portfolio of Avackaa Micheal Jr., a full-stack developer working with Python, FastAPI, PHP, Laravel, relational databases, REST APIs, and technical instruction.`

Add Open Graph title, description, and preview image metadata. If no custom preview image is supplied, create a simple typographic graphic from the site's own design system instead of using stock imagery. Include a canonical URL only after the final domain is known. Add a Person structured-data block only with accurate, publicly approved details.

### Performance and reliability

- Optimise assets, fonts, media, and dependencies for a fast first render and minimal layout shift.
- Test mobile and desktop layouts; check links, assets, and the browser console.
- Aim for strong Lighthouse accessibility, best-practices, SEO, and performance results; fix measured regressions rather than promising a score in advance.

## 10. Acceptance criteria

The build is ready for review when all of the following are true:

- [ ] The hero makes Avackaa's role and technical focus clear, and the page includes About, Skills, Experience, Work, Education, and Contact.
- [ ] Both Axia roles and CV date ranges are accurate.
- [ ] All three projects have meaningful summaries and detail views; no invented metrics, awards, testimonials, clients, or deployment claims appear.
- [ ] The résumé action opens/downloads the actual supplied PDF.
- [ ] Email, GitHub, and LinkedIn links work.
- [ ] Navigation, project details, and experience selection work with keyboard and touch/mouse; focus is visible, state changes are immediate, and no animations are present.
- [ ] The page works at mobile, tablet, laptop, and desktop widths without horizontal overflow. Desktop and mobile screenshots have been compared against the live reference and adjusted for close static visual similarity.
- [ ] Metadata, favicon, and footer are present; the footer year updates automatically.
- [ ] The README explains setup, build, deployment, and content updates; the implementation has been run and checked for missing assets, broken links, and console errors.

## 11. Suggested build sequence

1. Inspect the repository and assets, then inspect the live reference at desktop and mobile sizes. Record its design tokens and section geometry before coding.
2. Build the header, hero, About, Skills, Experience, Work, credentials, and Contact sections to closely match the reference's static layout.
3. Add Avackaa's approved content, real résumé asset, contact links, metadata, favicon, and footer.
4. Implement experience selection and project details without animation; test keyboard access, responsiveness, links, and assets.
5. Compare desktop and mobile screenshots side by side against the reference, fix visual discrepancies, run the production build, and document setup, deployment, and content updates.

