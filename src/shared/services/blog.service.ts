import { RootService } from "./root.service"

class Blog extends RootService {
  // async getAllCategories(options?: AxiosRequestConfig) {
  //   return this.http.get("/blog-categories", options)
  // }
  // async getCategory(slug: string, options?: AxiosRequestConfig) {
  //   return this.http.get("/blog-categories/" + slug + "/?with_popular=2", options)
  // }
  // async getArticlesList(params = "", options?: AxiosRequestConfig) {
  //   return this.http.get("/blog-articles/" + params, options)
  // }
  async getArticlesList(params = "", options?: RequestInit) {
    return this.request<any>("/blog-articles/" + params, options)
  }
  // async getArticlesListPopular(options?: AxiosRequestConfig) {
  //   return this.http.get("/blog-articles?is_popular=1", options)
  // }
  // async getArticlesByCategory(slug: string, params = "", options?: AxiosRequestConfig) {
  //   return this.http.get("/blog-articles?category=" + slug + params, options)
  // }
  // async getArticle(slug: string, options?: AxiosRequestConfig) {
  //   return this.http.get("/blog-articles/" + slug, options)
  // }
}

export const BlogService: Blog = new Blog()
