import { RootService } from "./root.service"

class Blog extends RootService {
  async getAllCategories(options?: RequestInit) {
    return this.request<any>("/blog-categories", options)
  }
  async getCategory(slug: string, options?: RequestInit) {
    return this.request<any>("/blog-categories/" + slug, options)
  }
  async getArticlesList(params = "", options?: RequestInit) {
    return this.request<any>("/blog-articles/" + params, options)
  }
  // async getArticlesListPopular(options?: AxiosRequestConfig) {
  //   return this.http.get("/blog-articles?is_popular=1", options)
  // }
  // async getArticlesByCategory(slug: string, params = "", options?: AxiosRequestConfig) {
  //   return this.http.get("/blog-articles?category=" + slug + params, options)
  // }
  async getArticle(slug: string, options?: RequestInit) {
    return this.request<any>("/blog-articles/" + slug, options)
  }
}

export const BlogService: Blog = new Blog()
