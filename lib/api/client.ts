// API client utility for making requests to our backend
export class ApiClient {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || ""
  }

  async get<T>(endpoint: string): Promise<T> {
    const url = this.baseUrl ? `${this.baseUrl}/api${endpoint}` : `/api${endpoint}`

    console.log("[v0] Making GET request to:", url)

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    console.log("[v0] Response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] API Error response:", errorText)
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    const url = this.baseUrl ? `${this.baseUrl}/api${endpoint}` : `/api${endpoint}`

    console.log("[v0] Making POST request to:", url)

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    })

    console.log("[v0] Response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] API Error response:", errorText)
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }
}

export const apiClient = new ApiClient()
