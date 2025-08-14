import { RootService } from "./root.service"

class Faq extends RootService {
  async getData(options?: RequestInit) {
    return this.request<any>("/faqs", options)
  }
}

export const FaqService = new Faq()
