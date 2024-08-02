import axios from 'axios'
import sharp from 'sharp'
import { slugify } from '@/utils/stringUtils'
import type { ImageFile } from '@/types/files'
import type { Person } from '@/types/blog'

export async function downloadAndConvertImage(imageUrl: string, imageName: string): Promise<{ webpImageName: string; imageContent: string }> {
  try {
    if (imageUrl.startsWith('./'))
      throw new Error(`L'URL est un chemin relatif: ${imageUrl}`)

    console.error(`Téléchargement de l'image depuis l'URL: ${imageUrl}`)
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer', maxRedirects: 0 })
    const slugifiedImageName = slugify(imageName)
    const webpImageName = `${slugifiedImageName}.webp`

    const webpBuffer = await sharp(response.data)
      .webp({ quality: 80 })
      .toBuffer()

    return { webpImageName, imageContent: webpBuffer.toString('base64') }
  }
  catch (error) {
    console.error(`Erreur lors du téléchargement ou de la conversion de l'image ${imageUrl}:`, error as Error)
    throw new Error(`Erreur lors du téléchargement de l'image: ${(error as Error).message}`)
  }
}

export async function extractImagesAndUpdateContent(content: string): Promise<{ updatedContent: string; imageFiles: ImageFile[] }> {
  const imageRegex = /!\[.*?\]\((.*?)\)/g
  const imageUrls = content.match(imageRegex)?.map(match => match.match(/\((.*?)\)/)?.[1]) || []
  const imageFiles: ImageFile[] = []
  let updatedContent = content
  let imageCounter = 1

  for (const imageUrl of imageUrls) {
    if (imageUrl) {
      const imageName = `img${imageCounter}`
      const { webpImageName, imageContent } = await downloadAndConvertImage(imageUrl, imageName)
      imageFiles.push({ name: webpImageName, content: imageContent })
      updatedContent = replaceImageLinkInMarkdown(updatedContent, imageUrl, webpImageName)
      imageCounter++
    }
  }
  return { updatedContent, imageFiles }
}

export async function processAuthorsImages(authors: Person[]): Promise<{ updatedAuthors: Person[]; authorImages: ImageFile[] }> {
  const authorImages: ImageFile[] = []
  const updatedAuthors = await Promise.all(authors.map(async (author) => {
    if (author.image && !author.image.startsWith('./assets/')) {
      if (!author.image.startsWith('http://') && !author.image.startsWith('https://')) {
        console.error(`L'image n'est pas une URL absolue: ${author.image}`)
        throw new Error(`L'image n'est pas une URL absolue: ${author.image}`)
      }

      const { webpImageName, imageContent } = await downloadAndConvertImage(author.image, `author-${author.name}`)
      const newImagePath = `./assets/${webpImageName}`
      authorImages.push({ name: webpImageName, content: imageContent })
      return { ...author, image: newImagePath }
    }
    return author
  }))
  return { updatedAuthors, authorImages }
}

function replaceImageLinkInMarkdown(content: string, oldUrl: string, newImageName: string): string {
  return content.replace(oldUrl, `./assets/${newImageName}`)
}
