import type { ContentItem } from '@/types/blog'

export const useBlogNavigation = async (currentPath: string) => {
  // Fetch all blog posts
  const { data: allBlogs } = await useAsyncData('all-blogs-for-navigation', () => queryCollection('content').all())

  // Find current post index
  const currentPostIndex = computed(() => {
    const blogs = allBlogs.value as unknown as ContentItem[] | null
    if (!blogs) return -1
    return blogs.findIndex((post: ContentItem) => post.path === currentPath)
  })

  // Get previous post
  const previousPost = computed(() => {
    const blogs = allBlogs.value as unknown as ContentItem[] | null
    if (currentPostIndex.value > 0 && blogs) {
      const post = blogs[currentPostIndex.value - 1]
      if (!post) return null
      return {
        path: post.path,
        title: post.title || 'Previous Post',
      }
    }
    return null
  })

  // Get next post
  const nextPost = computed(() => {
    const blogs = allBlogs.value as unknown as ContentItem[] | null
    if (currentPostIndex.value !== -1 && blogs && currentPostIndex.value < blogs.length - 1) {
      const post = blogs[currentPostIndex.value + 1]
      if (!post) return null
      return {
        path: post.path,
        title: post.title || 'Next Post',
      }
    }
    return null
  })

  return {
    previousPost,
    nextPost,
    allBlogs,
  }
}
