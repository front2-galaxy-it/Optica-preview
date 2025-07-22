export abstract class RootService {
  app_domain_api = process.env.NEXT_PUBLIC_DOMAIN_API + "/api"

  defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
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
