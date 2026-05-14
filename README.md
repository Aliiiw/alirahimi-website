# Ali Rahimi Portfolio

Personal portfolio website for Ali Rahimi, a Senior Android Engineer focused on Kotlin, Jetpack Compose, Clean Architecture, Kotlin Multiplatform readiness, and high-performance mobile applications.

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
