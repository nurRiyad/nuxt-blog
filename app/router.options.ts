import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    // scroll to hash, useful for using to="#some-id" in NuxtLink
    // ex: <NuxtLink to="#top"> To Top </ NuxtLink>
    if (to.hash) {
      // console.log('to.hash: ', to.hash)
      return {
        el: to.hash,
        top: 100,
        behavior: 'smooth',
      }
    }

    // The remainder is optional but maybe useful as well

    // if link is to same page, scroll to top with smooth behavior
    if (to === from) {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
      }
    }

    // this will use saved scroll position on browser forward/back navigation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          left: savedPosition?.left || 0,
          top: savedPosition?.top || 0,
        })
      }, 500)
    })
  },
}
