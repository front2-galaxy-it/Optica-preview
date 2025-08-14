import { RootService } from "./root.service"

class Reviews extends RootService {
  async getData(options?: RequestInit) {
    return this.request<any>("/reviews", options)
  }
}

export const ReviewsService = new Reviews()
