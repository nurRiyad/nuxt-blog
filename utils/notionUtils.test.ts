import { describe, expect, it, vi } from 'vitest'
import type { Client } from '@notionhq/client'
import { convertBlocksToMarkdown, extractTitleFromPage, getAuthorsInfo, getPageContent, safeGetProperty } from '@/utils/notionUtils'
import type { NotionPage } from '~/types/notion'

describe('notionUtils', () => {
  it('should safely get a property from an object', () => {
    const obj = { a: { b: { c: 42 } } }
    expect(safeGetProperty(obj, ['a', 'b', 'c'])).toBe(42)
    expect(safeGetProperty(obj, ['a', 'b', 'd'], 'default')).toBe('default')
  })

  it('should convert blocks to markdown', () => {
    const blocks = [
      { type: 'paragraph', paragraph: { rich_text: [{ plain_text: 'Hello' }] } },
      { type: 'heading_1', heading_1: { rich_text: [{ plain_text: 'Title' }] } },
      { type: 'image', image: { file: { url: 'http://example.com/image.png' }, caption: [{ plain_text: 'An image' }] } },
    ]
    const { markdownContent, images } = convertBlocksToMarkdown(blocks)
    expect(markdownContent).toContain('Hello\n\n')
    expect(markdownContent).toContain('# Title\n\n')
    expect(images).toEqual([{ url: 'http://example.com/image.png', alt: 'An image' }])
  })

  it('should extract title from a page', () => {
    const page = {
      id: 'page-id',
      properties: {
        Post: {
          title: [{ plain_text: 'Test Title' }],
        },
      },
    }
    expect(extractTitleFromPage(page)).toBe('Test Title')
  })

  it('should retrieve author information correctly', async () => {
    const mockClient: Client = {
      pages: {
        retrieve: vi.fn().mockResolvedValue({
          id: 'author-id',
          properties: {
            Name: { title: [{ plain_text: 'John Doe' }] },
            Avatar: { files: [{ file: { url: 'http://example.com/avatar.png' } }] },
            LinkedIn: { url: 'http://linkedin.com/in/johndoe' },
            X: { url: 'http://x.com/johndoe' },
          },
        }),
      },
    } as unknown as Client

    const authorIds = ['author-id']
    const authors = await getAuthorsInfo(mockClient, authorIds)

    expect(authors).toEqual([
      {
        notionId: 'author-id',
        name: 'John Doe',
        image: 'http://example.com/avatar.png',
        linkedin: 'http://linkedin.com/in/johndoe',
        x: 'http://x.com/johndoe',
      },
    ])
    expect(mockClient.pages.retrieve).toHaveBeenCalledWith({ page_id: 'author-id' })
  })

  it('should get page content', async () => {
    const mockPage = {
      id: 'page-id',
      properties: {
        Post: {
          title: [{ plain_text: 'Test Title' }],
        },
        Authors: {
          id: '%3FW%3CJ',
          type: 'relation',
          relation: [
            { id: '838dec96-f9fc-404f-a302-07719225d785' }, // ID de l'auteur
          ],
          has_more: false,
        },
      },
    }

    // Mocking the notionClient response
    const mockClient = {
      blocks: {
        children: {
          list: async () => ({
            results: [
              { type: 'paragraph', paragraph: { rich_text: [{ plain_text: 'Hello' }] } },
            ],
          }),
        },
      },
      pages: {
        retrieve: async ({ page_id }: { page_id: string }) => {
          // Simuler la récupération d'un auteur à partir de l'ID
          if (page_id === '838dec96-f9fc-404f-a302-07719225d785') {
            return {
              id: page_id,
              properties: {
                Name: {
                  title: [{ plain_text: 'Author Name' }],
                },
                Avatar: {
                  files: [{ file: { url: 'http://example.com/avatar.png' } }],
                },
              },
            }
          }
          throw new Error('Auteur non trouvé')
        },
      },
    } as unknown as Client // Client mock pour les tests

    // Conversion du mockPage en un objet NotionPage compatible
    const notionPage: NotionPage = {
      ...mockPage,
      properties: {
        ...mockPage.properties,
        Authors: {
          ...mockPage.properties.Authors,
          people: mockPage.properties.Authors.relation.map(author => ({
            name: 'Author Name',
            avatar_url: 'http://example.com/avatar.png',
          })),
        },
      },
    }

    const content = await getPageContent(mockClient, notionPage)
    expect(content.notionId).toBe('page-id')
    expect(content.title).toBe('Test Title')
    expect(content.content).toContain('Hello\n\n')
    expect(content.authors[0].name).toEqual('Author Name')
    expect(content.authors[0].image).toEqual('http://example.com/avatar.png')
  })
})
