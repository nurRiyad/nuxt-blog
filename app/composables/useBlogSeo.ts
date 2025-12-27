import type { BlogPost } from '@/types/blog'
import { navbarData, seoData } from '~/data'

export const useBlogSeo = (data: ComputedRef<BlogPost>, path: string) => {
  useHead({
    title: data.value.title || '',
    meta: [
      { name: 'description', content: data.value.description },
      {
        name: 'description',
        content: data.value.description,
      },
      // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
      { property: 'og:site_name', content: navbarData.homeTitle },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: `${seoData.mySite}/${path}`,
      },
      {
        property: 'og:title',
        content: data.value.title,
      },
      {
        property: 'og:description',
        content: data.value.description,
      },
      {
        property: 'og:image',
        content: data.value.ogImage || data.value.image,
      },
      // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
      { name: 'twitter:site', content: '@qdnvubp' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:url',
        content: `${seoData.mySite}/${path}`,
      },
      {
        name: 'twitter:title',
        content: data.value.title,
      },
      {
        name: 'twitter:description',
        content: data.value.description,
      },
      {
        name: 'twitter:image',
        content: data.value.ogImage || data.value.image,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `${seoData.mySite}/${path}`,
      },
    ],
  })
}
