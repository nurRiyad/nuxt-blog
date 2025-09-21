export const navbarData = {
  homeTitle: "Riyad's Blog",
}

export const footerData = {
  author: 'Al Asad Nur Riyad',
  aboutAuthor:
    'Hi! I am Riyad, a Tech enthusiast, problem solver and software engineer. Currently working at FieldNation LLC.',
  authorInterest:
    "I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let's connect.",
  aboutTheSite:
    "This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it's deployed in Vercel.",
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    'Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
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
  title: 'Al Asad Nur Riyad',
  description: 'Software Engineer, Problem Solver, Web Enthusiast.',
  aboutMe:
    "Hello, fellow human! I'm a software wizard who spends most of his day crafting code spells at @FieldNation in the Workplace Operation team. When I'm not crafting code, you can find me summoning solutions to problems on online judges. Just don't ask me to cast any love spells, my magic only works on machines!",
}

export const seoData = {
  title: `Riyad's Blog | Riyads Blog`,
  ogTitle: `Let's learn Javascript, Typescript, Vue, Nuxt, & Problem Solving - Riyads Blog | Riyad's Blog`,
  description: `Hi I am Riyad. A Software Engineer at FieldNation, with over 3.5+ years experience in software development. - Riyads Blog | Riyad's Blog`,
  twitterDescription: `Riyad's Blog, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc - Riyads Blog | Riyad's Blog`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '@qdnvubp',
  mailAddress: 'asadnurriyad@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/nurRiyad',
  linkedinLink: 'https://www.linkedin.com/in/nur-riyad/',
  twitterLink: 'https://twitter.com/qdnvubp',
  stackoverflowLink: 'https://stackoverflow.com/users/16781395/nur-riyad',
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
