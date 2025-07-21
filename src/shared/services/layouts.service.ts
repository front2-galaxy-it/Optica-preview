import { RootService } from "./root.service"

class Layouts extends RootService {
  private LAYOUTS_ENDPOINT = "/layouts/"

  async getAllLayouts(options?: RequestInit) {
    return this.request<any>(this.LAYOUTS_ENDPOINT, options)
  }

  async getLayout(layout: string, options?: RequestInit) {
    return this.request<any>(this.LAYOUTS_ENDPOINT + layout + "", options)
  }

  async getMenu(options?: RequestInit) {
    return this.request<any>("/menu", options)
  }
}

export const LayoutsService: Layouts = new Layouts()
