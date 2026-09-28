# Repository guidance

## Project overview

This repository is a Nuxt 4 personal blog using Vue 3, Nuxt Content 3, TypeScript, and Tailwind CSS. Blog posts are Markdown files rendered by Nuxt Content.

## Project layout

- `app/pages/`: Nuxt routes and page-level data fetching.
- `app/components/`: reusable Vue components, grouped by feature.
- `app/composables/`: shared Vue/Nuxt logic.
- `app/data/index.ts`: site identity, page copy, SEO, and social links.
- `app/types/` and `app/utils/`: shared TypeScript types and utilities.
- `content/blogs/`: Markdown blog posts.
- `public/`: static assets addressed from the site root, such as `/blogs-img/blog1.jpg`.
- `server/routes/`: Nitro server routes, including the RSS feed.
- `nuxt.config.ts` and `content.config.ts`: Nuxt and content configuration.

Nuxt generates `.nuxt/` and `.output/`; do not edit generated output. Keep new Vue UI in the existing `app/` structure and follow nearby code style. Prettier uses single quotes, no semicolons, and a 130 character print width.

## Commands

Use Node.js `v22.14.0` (the version in `.nvmrc`) and npm (the repository has `package-lock.json`).

```sh
npm ci
npm run dev
npm run lint
npm run format
npm run build
```

Run `npm run lint` and `npm run format` after code changes. Run `npm run build` when changing application code, Nuxt/content configuration, or dependencies. For Markdown-only edits, review the frontmatter and links; run the build if the change affects content structure or rendering. Do not add tests unless requested, as this repository does not currently define a test script.

## Content conventions

Add each blog post as a Markdown file under `content/blogs/`. Use a descriptive, URL-friendly filename; its filename becomes part of the URL. Keep agent and repository documentation outside `content/`, which is indexed as site content.

Every post should preserve these frontmatter fields:

| Field         | Purpose                                                   | Example                                |
| ------------- | --------------------------------------------------------- | -------------------------------------- |
| `title`       | Post title shown in the archive and post page             | `A practical Nuxt guide`               |
| `date`        | Publication date; existing posts use human-readable dates | `27th Sep 2026`                        |
| `description` | Short summary used in listings and metadata               | `A concise introduction to the topic.` |
| `image`       | Main post image URL                                       | `/blogs-img/nuxt-guide.jpg`            |
| `alt`         | Accessible description of the main image                  | `Nuxt logo on a dark background`       |
| `ogImage`     | Social sharing image URL                                  | `/blogs-img/nuxt-guide.jpg`            |
| `tags`        | YAML list of category/tag names                           | `[nuxt, vue, typescript]`              |
| `published`   | Whether the post is published                             | `true`                                 |

Use this template:

```md
---
title: A practical Nuxt guide
date: 27th Sep 2026
description: A concise introduction to the topic.
image: /blogs-img/nuxt-guide.jpg
alt: Nuxt logo on a dark background
ogImage: /blogs-img/nuxt-guide.jpg
tags: [nuxt, vue, typescript]
published: true
---

Write the post content here in Markdown.
```

Use `published: false` for a draft. Keep descriptions complete and on one line. Ensure image URLs point to files in `public/`, use root-relative URLs, and provide meaningful `alt` text. Keep post dates in the existing human-readable format unless the date handling is updated.

For Nuxt-specific changes, follow [`skills/nuxt-development/SKILL.md`](skills/nuxt-development/SKILL.md). Check the installed dependency versions and Nuxt 4 documentation before choosing framework APIs.

## Change practices

- Keep changes focused and preserve the current site behavior unless the task asks for a behavior change.
- Reuse existing components and composables before adding another abstraction.
- Keep site metadata consistent with `app/data/index.ts`; the RSS route currently has a separately configured base URL in `server/routes/rss.xml.ts`.
- When touching post dates or publication filtering, inspect the archive, category pages, navigation, and RSS route because they all consume content metadata.
- Report the commands run and any checks that could not be completed.
