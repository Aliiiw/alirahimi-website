# Ali Rahimi Portfolio

Personal portfolio website for Ali Rahimi, a Senior Android Engineer focused on Kotlin, Jetpack Compose, Clean Architecture, Kotlin Multiplatform readiness, and high-performance mobile applications.

## Attribution

This portfolio is forked and adapted from [attarchi/attarchi.github.io](https://github.com/attarchi/attarchi.github.io).

All credit for the original structure, design direction, and foundation goes to the original author. I mainly customized the content, resume, photo, skills, projects, blog posts, and deployment setup for my own portfolio.

Huge thanks to the original project and its author for making it available.

## Tech Stack

- Next.js 14 with static export
- TypeScript
- Tailwind CSS
- Framer Motion
- Markdown-powered blog posts
- GitHub Pages friendly output

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site locally.

## Production Build

```bash
npm run build
```

The project uses `output: 'export'`, so Next.js generates a static site that can be deployed through GitHub Pages or another static hosting provider.

## Content

Main portfolio content lives in:

- `src/content/hero.ts`
- `src/content/projects.ts`
- `src/content/professional-journey.ts`
- `src/content/technical-expertise.ts`
- `src/content/contact.ts`
- `src/content/footer.ts`
- `src/content/posts/`

The downloadable CV is served from `public/AliRahimiCV.pdf`.

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

After adding a post, run `npm run build`, then commit and push to deploy through GitHub Actions.
