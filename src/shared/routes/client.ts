export const ClientRoutes = {
  home: "/",
  about: "/about",

  /**
   * Get  the path to a specific task route.
   * */
  project: (id: string) => {
    return `/project/${id}`
  },
}
