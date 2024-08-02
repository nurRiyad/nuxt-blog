import buffer from 'node:buffer'
import { App } from 'octokit'
import { updatePostStatusInNotion } from '@/server/services/notionService'
import { createFolderName } from '@/utils/stringUtils'
import type { BlogPost } from '@/types/blog'
import { downloadAndConvertImage, extractImagesAndUpdateContent, processAuthorsImages } from '@/utils/imageUtils'
import { generateMarkdownContent } from '@/utils/markdownUtils'
import { GITHUB_APP_ID, GITHUB_BRANCH, GITHUB_OWNER, GITHUB_PRIVATE_KEY, GITHUB_REPO } from '@/server/config/githubConfig'
import type { ImageFile } from '@/types/files'

const app = new App({
  appId: GITHUB_APP_ID,
  privateKey: GITHUB_PRIVATE_KEY,
})

async function getOctokit(appId: number) {
  return await app.getInstallationOctokit(appId)
}

export async function publishPostToGitHub(post: BlogPost) {
  const currentDate = new Date().toISOString().split('T')[0]
  const folderName = createFolderName(currentDate, post.title)
  const folderPath = `content/blogs/${folderName}`
  const assetsFolderPath = `${folderPath}/assets`
  const filePath = `${folderPath}/index.md`

  try {
    const octokit = await getOctokit(52971414)
    const { updatedContent, imageFiles } = await extractImagesAndUpdateContent(post.content)

    if (!post.image)
      throw new Error('Cover image is missing.')

    let updatedPost = await uploadCoverImage(octokit, post, assetsFolderPath)

    const { updatedAuthors, authorImages } = await processAuthorsImages(post.authors)

    await uploadAllImages(octokit, imageFiles, assetsFolderPath)
    await uploadAllImages(octokit, authorImages, assetsFolderPath)

    updatedPost = {
      ...post,
      authors: updatedAuthors,
    }

    await uploadToGitHub(octokit, filePath, `Upload post: ${post.title}`, generateMarkdownContent(updatedPost, updatedContent))

    await updatePostStatusInNotion(post.notionId, 'Published')
  }
  catch (error) {
    console.error(`Error while publishing post "${post.title}" to GitHub:`, error)
    throw error
  }
}

async function uploadCoverImage(octokit: any, post: BlogPost, assetsFolderPath: string): Promise<BlogPost> {
  const { webpImageName, imageContent } = await downloadAndConvertImage(post.image, 'cover-image')
  await uploadToGitHub(octokit, `${assetsFolderPath}/${webpImageName}`, `Upload cover image: ${webpImageName}`, imageContent, true)

  const updatedPost = {
    ...post,
    image: `./assets/${webpImageName}`,
    ogImage: `./assets/${webpImageName}`,
  }

  return updatedPost
}

async function uploadAllImages(octokit: any, imageFiles: ImageFile[], assetsFolderPath: string) {
  for (const imageFile of imageFiles)
    await uploadToGitHub(octokit, `${assetsFolderPath}/${imageFile.name}`, `Upload image: ${imageFile.name}`, imageFile.content, true)
}

async function uploadToGitHub(octokit: any, path: string, message: string, content: string, isBase64: boolean = false): Promise<void> {
  const finalContent = isBase64 ? content : buffer.Buffer.from(content).toString('base64')

  let sha: string | undefined
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path,
      ref: GITHUB_BRANCH,
    })
    sha = data.sha
  }
  catch (error: unknown) {
    if (error instanceof Error && (error as any).status !== 404) {
      console.error('Erreur lors de la récupération du contenu du fichier:', error)
      throw error
    }
  }

  await octokit.rest.repos.createOrUpdateFileContents({
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    path,
    message,
    content: finalContent,
    branch: GITHUB_BRANCH,
    sha,
  })
}
