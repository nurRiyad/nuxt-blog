import type { BlogPost, Person } from '@/types/blog'

export function generateMarkdownContent(post: BlogPost, content: string): string {
  if (Number.isNaN(new Date(post.date).getTime()))
    throw new Error('Invalid date provided')

  const frontmatter = createFrontmatter(post)
  return `${frontmatter}\n\n${content}`
}

function createFrontmatter(post: BlogPost, assetsFolder: string = './assets'): string {
  const formattedAuthors = formatPersons(post.authors)
  const formattedReviewers = formatPersons(post.reviewers)
  return `---
title: ${post.title}
date: ${post.date}
description: ${post.description}
image: ${assetsFolder}/cover-image.webp
alt: ${post.alt}
ogImage: ${assetsFolder}/cover-image.webp
tags: [${post.tags.map(tag => `'${tag}'`).join(', ')}]
published: ${post.published}
authors:
${formattedAuthors}
reviewers:
${formattedReviewers}
---
`
}

function formatPersons(people: Person[]): string {
  return people.map(person => `  - id: ${person.notionId}
    name: ${person.name}
    image: ${person.image}
    linkedin: ${person.linkedin || ''}
    x: ${person.x || ''}`).join('\n')
}
