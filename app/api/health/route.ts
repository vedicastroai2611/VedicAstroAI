import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const timestamp = new Date().toISOString()

  // Basic health check data
  const healthData = {
    status: "healthy",
    timestamp,
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    services: {
      database: "not_connected", // Will be updated when we add database
      redis: "not_connected", // Will be updated when we add Redis
      astrology_api: "ready", // Our core astrology service
    },
    uptime: process.uptime(),
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
    },
  }

  console.log("[v0] Health check requested at:", timestamp)

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
}

export async function POST(request: NextRequest) {
  // Extended health check with more details
  try {
    const body = await request.json()
    const timestamp = new Date().toISOString()

    console.log("[v0] Extended health check requested:", body)

    const extendedHealthData = {
      status: "healthy",
      timestamp,
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development",
      request_id: body.request_id || "unknown",
      services: {
        database: "not_connected",
        redis: "not_connected",
        astrology_api: "ready",
        planetary_calculations: "ready",
        birth_chart_generator: "ready",
      },
      system: {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        platform: process.platform,
        node_version: process.version,
      },
      features: {
        birth_chart_calculation: true,
        planetary_positions: true,
        dasha_calculations: true,
        predictions: true,
        chat_ai: true,
      },
    }

    return NextResponse.json(extendedHealthData, { status: 200 })
  } catch (error) {
    console.error("[v0] Health check error:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Health check failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
