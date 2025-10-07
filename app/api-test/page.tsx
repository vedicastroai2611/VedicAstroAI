"use client"

import { MainNav } from "@/components/main-nav"
import { DemoBanner } from "@/components/demo-banner"
import { ApiDemo } from "@/components/api-demo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Globe, Code, Zap } from "lucide-react"

export default function ApiTestPage() {
  return (
    <>
      <DemoBanner />
      <div className="min-h-screen bg-background">
        <MainNav />

        <div className="border-b border-border bg-gradient-to-r from-background via-primary/5 to-accent/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2 text-glow">
                VedicAstro FastAPI Integration
              </h1>
              <p className="text-muted-foreground mb-4">
                Test the new FastAPI integration for comprehensive horoscope and horary calculations
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <Database className="h-3 w-3 mr-1" />
                  FastAPI Integration
                </Badge>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  <Globe className="h-3 w-3 mr-1" />
                  RESTful API
                </Badge>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                  <Code className="h-3 w-3 mr-1" />
                  Mock Fallback
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* API Information Cards */}
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Horoscope API</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <p><strong>Endpoint:</strong> <code>/api/horoscope</code></p>
                  <p><strong>Methods:</strong> GET, POST</p>
                  <p><strong>Features:</strong></p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Complete birth chart calculation</li>
                    <li>Planetary positions & houses</li>
                    <li>Dasha periods & aspects</li>
                    <li>Multiple ayanamsa systems</li>
                    <li>Various house systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-accent" />
                  <span>Horary API</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <p><strong>Endpoint:</strong> <code>/api/horary</code></p>
                  <p><strong>Methods:</strong> GET, POST</p>
                  <p><strong>Features:</strong></p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>KP System calculations</li>
                    <li>Significator analysis</li>
                    <li>Cuspal sub lords</li>
                    <li>Ruling planets</li>
                    <li>Timing predictions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-secondary" />
                  <span>Smart Fallback</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <p><strong>Source:</strong> vedicastro-84kc.onrender.com</p>
                  <p><strong>Fallback:</strong> Advanced mock data</p>
                  <p><strong>Benefits:</strong></p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Automatic failover</li>
                    <li>No service interruption</li>
                    <li>Realistic calculations</li>
                    <li>Configurable toggle</li>
                    <li>Development friendly</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* API Demo Component */}
          <ApiDemo />

          {/* API Documentation */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <span>API Documentation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Configuration</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Control API behavior through environment variables:
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <code className="block mb-1">NEXT_PUBLIC_ENABLE_REAL_API=false  # Use mock data</code>
                  <code className="block">NEXT_PUBLIC_ENABLE_REAL_API=true   # Use FastAPI</code>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Response Format</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  All responses include source information for transparency:
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <pre>{`{
  "success": true,
  "data": { /* horoscope/horary data */ },
  "source": "api" | "mock",
  "api_used": "VedicAstro FastAPI" | "Mock Data Generator",
  "timestamp": "2024-10-04T14:10:00Z",
  "input_parameters": { /* request params */ }
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Error Handling</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Robust error handling with automatic fallback to mock data when the FastAPI is unavailable.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}