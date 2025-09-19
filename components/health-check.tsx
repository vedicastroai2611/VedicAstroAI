"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { apiClient } from "@/lib/api/client"

interface HealthData {
  status: string
  timestamp: string
  version: string
  environment: string
  services: Record<string, string>
  server: {
    status: string
    timestamp: string
  }
  uptime?: number
  memory?: {
    used: number
    total: number
  }
}

export function HealthCheck() {
  const [healthData, setHealthData] = useState<HealthData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const checkHealth = async () => {
    setLoading(true)
    setError(null)

    try {
      console.log("[v0] Checking API health...")
      const data = await apiClient.get<HealthData>("/health")
      setHealthData(data)
      console.log("[v0] Health check successful:", data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error"
      setError(errorMessage)
      console.error("[v0] Health check failed:", errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Backend Health Check
          <Button onClick={checkHealth} disabled={loading} size="sm">
            {loading ? "Checking..." : "Check Health"}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && <div className="text-red-500 mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">Error: {error}</div>}

        {healthData && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant={healthData.status === "healthy" ? "default" : "destructive"}>{healthData.status}</Badge>
              <span className="text-sm text-gray-500">v{healthData.version}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Environment:</strong> {healthData.environment}
              </div>
              <div>
                <strong>Server:</strong> {healthData.server.status}
              </div>
              {healthData.memory && (
                <div>
                  <strong>Memory:</strong> {healthData.memory.used}MB / {healthData.memory.total}MB
                </div>
              )}
              {healthData.uptime && (
                <div>
                  <strong>Uptime:</strong> {Math.round(healthData.uptime)}s
                </div>
              )}
              <div>
                <strong>Timestamp:</strong> {new Date(healthData.timestamp).toLocaleTimeString()}
              </div>
            </div>

            <div>
              <strong>Services:</strong>
              <div className="mt-2 space-y-1">
                {Object.entries(healthData.services).map(([service, status]) => (
                  <div key={service} className="flex justify-between items-center">
                    <span className="capitalize">{service.replace("_", " ")}:</span>
                    <Badge variant={status === "ready" ? "default" : "secondary"} size="sm">
                      {status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
