export const ClientRoutes = {
  home: "/",
  delivery: "/delivery",
  payment: "/payment",
  about: "/about",
  net: "/net",
  diagnostic: "/diagnostic",
  reviews: "#",
  faq: "#",
  contacts: "#",

  /**
   * Get  the path to a specific task route.
   * */
  about_category: (id: string) => {
    return `/about/${id}`
  },
  blog_category: (id: string) => {
    return `/blog/${id}`
  },
  article: (id: string) => {
    return `/blog/article/${id}`
  },
  author: (id: string) => {
    return `/authors/author/${id}`
  },
  service: (id: string) => {
    return `/our-services/${id}`
  },
  solution: (id: string) => {
    return `/our-solutions/${id}`
  },
  cases: (id: string) => {
    return `/our-cases/${id}`
  },
}
