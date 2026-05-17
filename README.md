# Ali Rahimi Portfolio

Personal portfolio website for Ali Rahimi, a Senior Android Engineer focused on Kotlin, Jetpack Compose, Clean Architecture, Kotlin Multiplatform readiness, and high-performance mobile applications.

The site is built as a static Next.js portfolio with an animated homepage, content-driven sections, a Markdown blog, downloadable CV, contact form, dark/light theme support, and GitHub Pages-friendly output.

## Features

- Animated hero section with profile image, typewriter text, location, and call-to-action buttons.
- Professional journey, technical expertise, featured projects, blog preview, contact, and footer sections.
- Content-first structure under `src/content/` for easier portfolio updates.
- Markdown-powered blog with frontmatter, reading-time calculation, category/tag metadata, and static blog routes.
- Dark/light theme provider with localStorage persistence and system-theme fallback.
- Framer Motion animation variants, scroll progress UI, and reusable micro components.
- Formspree-based contact form with reCAPTCHA token support.
- Static export configuration for GitHub Pages or other static hosting providers.
- Jest and React Testing Library coverage for pages, components, hooks, content, and utilities.

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Markdown via `gray-matter` and `marked`
- Formspree contact handling
- Jest, ts-jest, and React Testing Library
- GitHub Pages/static hosting support

## Project Structure

```text
src/app/
  page.tsx                # Homepage route
  blog/page.tsx           # Blog listing route
  blog/[slug]/page.tsx    # Static blog post route
  thank-you/page.tsx
src/components/
  sections/               # Homepage and layout sections
  micro/                  # Reusable UI primitives
  blog/                   # Blog cards, filters, post pages, navigation
src/content/
  hero.ts
  projects.ts
  professional-journey.ts
  technical-expertise.ts
  contact.ts
  footer.ts
  posts/                  # Markdown blog posts
src/lib/
  blog-data.ts            # Blog loading, caching, filtering, related posts
  markdown-parser.ts
  animation-variants.ts
  hooks/
  theme/
public/
  avatar.jpg
  AliRahimiCV.pdf
  icons/
docs/
  planning notes, phase docs, and screenshots
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` to view the site locally.

## Useful Scripts

```bash
npm run dev
npm run build
npm run test
npm run test:watch
npm run test:coverage
```

`npm run build` creates a static export because `next.config.js` uses `output: 'export'` and unoptimized images for static hosting compatibility.

## Content Updates

Most portfolio copy is stored in TypeScript content modules:

- `src/content/hero.ts`
- `src/content/projects.ts`
- `src/content/professional-journey.ts`
- `src/content/technical-expertise.ts`
- `src/content/contact.ts`
- `src/content/footer.ts`

The downloadable resume is served from `public/AliRahimiCV.pdf`. Profile images are stored in `public/avatar.jpg` and `public/avatar.png`.

## Adding Blog Posts

Blog posts live in `src/content/posts/` as Markdown files. Use a kebab-case filename, for example:

```txt
src/content/posts/my-new-android-post.md
```

Each post should start with YAML frontmatter:

```md
---
title: "My New Android Post"
date: 2026-05-15T10:00:00+02:00
excerpt: "A short summary that appears on the blog list and homepage preview."
tags: ["android", "kotlin", "jetpack-compose"]
category: "Android"
published: true
---

# My New Android Post

Write the post content here.
```

The blog loader reads Markdown files from `src/content/posts`, parses frontmatter, generates reading time, filters unpublished posts, and creates static params for published slugs.

## Deployment

The project is configured for static deployment:

```bash
npm run build
```

Optional environment variables:

- `NEXT_PUBLIC_BASE_PATH` - sets a base path for repository-style deployments.
- `NEXT_DIST_DIR` - changes the Next.js build output directory.

The repository also includes `CNAME` files for custom-domain GitHub Pages deployment.

## Attribution

This portfolio is forked and adapted from [attarchi/attarchi.github.io](https://github.com/attarchi/attarchi.github.io).

All credit for the original structure, design direction, and foundation goes to the original author. I customized the content, resume, photo, skills, projects, blog posts, tests, and deployment setup for my own portfolio.
