import Cookies from "js-cookie"

export abstract class RootService {
  app_domain_api = process.env.NEXT_PUBLIC_DOMAIN_API + "/api"

  AUTH_TOKEN: string | undefined = this.getCookie("auth_token")

  defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(this.AUTH_TOKEN ? { Authorization: `Bearer ${this.AUTH_TOKEN}` } : {}),
  }

  setCookie(name: string, value: string, options?: Cookies.CookieAttributes): void {
    if (typeof window === "undefined") {
      return
    }

    Cookies.set(name, value, options)
  }

  getCookie(name: string): string | undefined {
    if (typeof window === "undefined") {
      return ""
    }

    const token: string | undefined = Cookies.get(name)

    return token ? token : ""
  }

  removeCookie(name: string, options?: Cookies.CookieAttributes): string | undefined {
    if (typeof window === "undefined") {
      return ""
    }

    Cookies.remove(name, options)
  }

  protected async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.app_domain_api}${endpoint}`

    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...(options.headers || {}),
      },
      credentials: "include",
    })

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "")
      throw new Error(`Request failed: ${response.status} ${response.statusText} - ${errorBody}`)
    }

    return response.json() as Promise<T>
  }
}
