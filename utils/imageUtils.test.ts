import { Buffer } from 'node:buffer'
import { describe, expect, it, vi } from 'vitest'
import { downloadAndConvertImage, extractImagesAndUpdateContent } from '@/utils/imageUtils'

// Mock axios et sharp en dehors des tests
vi.mock('axios', () => {
  return {
    __esModule: true,
    default: {
      get: vi.fn().mockResolvedValue({ data: Buffer.from('image data') }),
    },
  }
})

vi.mock('sharp', () => {
  return {
    __esModule: true,
    default: () => ({
      webp: vi.fn().mockReturnThis(),
      toBuffer: vi.fn().mockResolvedValue(Buffer.from('webp image data')),
    }),
  }
})

describe('Image Utils', () => {
  it('should download and convert an image to webp format', async () => {
    const imageUrl = 'http://example.com/image.png'
    const imageName = 'test-image'

    const { webpImageName, imageContent } = await downloadAndConvertImage(imageUrl, imageName)

    expect(webpImageName).toBe('image1.webp')
    expect(imageContent).toBe('d2VicHBfaW1hZ2UgZGF0YQ==') // base64 of 'webp image data'
  })

  it('should handle errors during image download and conversion', async () => {
    const imageUrl = 'http://example.com/image.png'
    const imageName = 'test-image'

    // Mock axios to throw an error
    vi.mock('axios', () => {
      return {
        __esModule: true,
        default: {
          get: vi.fn().mockRejectedValue(new Error('Download error')),
        },
      }
    })

    await expect(downloadAndConvertImage(imageUrl, imageName)).rejects.toThrow('Erreur lors du téléchargement de l\'image: Download error')
  })

  it('should extract images from markdown content', async () => {
    const content = '![Alt text](http://example.com/image1.png) Some text ![Another image](http://example.com/image2.png)'

    // Mock axios to return a successful response for the image download
    vi.mock('axios', () => {
      return {
        __esModule: true,
        default: {
          get: vi.fn()
            .mockResolvedValueOnce({ data: Buffer.from('image data 1') }) // First image
            .mockResolvedValueOnce({ data: Buffer.from('image data 2') }), // Second image
        },
      }
    })

    const { updatedContent, imageFiles } = await extractImagesAndUpdateContent(content)

    expect(updatedContent).toContain('![Alt text](image1.webp)')
    expect(imageFiles).toEqual([{ name: 'img1', content: 'image data 1' }, { name: 'img2', content: 'image data 2' }])
  })
})
