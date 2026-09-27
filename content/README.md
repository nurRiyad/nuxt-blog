# Writing blog posts

Add each post as a Markdown file under `content/blogs/`. The file name becomes part of the URL, so use a descriptive, URL-friendly name. Put images in `public/` (or an existing subdirectory such as `public/blogs-img/`) and reference them with a root-relative URL.

## Required frontmatter

Every post should include these fields:

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

Use `published: false` for a draft. Keep descriptions as complete, single-line summaries because they are displayed in the archive and used in page metadata. Ensure each image URL points to a file that exists in `public/`, and provide meaningful `alt` text.

## Dates and links

Existing posts use human-readable dates such as `18th Sep 2025`; keep that format consistent unless the application is updated to parse a normalized date format. Link to other pages using their site paths and make sure external links point to the intended destination.
