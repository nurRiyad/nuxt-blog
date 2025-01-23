export const navbarData = {
  homeTitle: '会飞的一棵树',
}

export const footerData = {
  author: '飞树',
  aboutAuthor: 'Hi! 我是飞树，一个有点意思的程序猿.',
  authorInterest: '喜欢各种有意思的东西',
  aboutTheSite: '记录有点意思的代码日常',
}

export const homePage = {
  title: '会飞的一棵树',
  description: '记录有点意思的代码日常',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: '飞树',
  description: '一个有点意思的程序猿.',
  aboutMe: '目前在主要在写前端',
}

export const seoData = {
  title: `会飞的一棵树的博客`,
  ogTitle: `记录有点意思的代码日常`,
  description: `一个有点意思的程序猿 | 会飞的一棵树`,
  twitterDescription: `x | 会飞的一棵树`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '',
  mailAddress: 'mashirodever@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/mashiro-cat',
  // linkedinLink: 'https://www.linkedin.com/in/nur-riyad/',
  // twitterLink: 'https://twitter.com/qdnvubp',
  // stackoverflowLink: 'https://stackoverflow.com/users/16781395/nur-riyad',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
