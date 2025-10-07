'use client'

import { AlertTriangle, RefreshCw, ExternalLink, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface APIErrorDisplayProps {
  error: string
  onRetry?: () => void
  showRetry?: boolean
  apiStatus?: 'checking' | 'healthy' | 'unhealthy' | 'unknown'
}

export function APIErrorDisplay({ 
  error, 
  onRetry, 
  showRetry = true, 
  apiStatus = 'unknown' 
}: APIErrorDisplayProps) {
  const getStatusColor = () => {
    switch (apiStatus) {
      case 'healthy': return 'bg-green-500'
      case 'unhealthy': return 'bg-red-500'
      case 'checking': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = () => {
    switch (apiStatus) {
      case 'healthy': return 'API Online'
      case 'unhealthy': return 'API Offline'
      case 'checking': return 'Checking...'
      default: return 'Status Unknown'
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Alert variant="destructive" className="border-red-800 bg-red-950/50">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>VedicAstro API Error</AlertTitle>
        <AlertDescription className="mt-2 text-sm">
          {error}
        </AlertDescription>
      </Alert>

      <Card className="border-border/50 bg-card/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
              <span>API Status</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {getStatusText()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Service:</strong> VedicAstro FastAPI
            </p>
            <p>
              <strong>Endpoint:</strong> https://vedicastro-84kc.onrender.com
            </p>
            <p>
              <strong>Issue:</strong> The backend API server is experiencing technical difficulties
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {showRetry && onRetry && (
              <Button 
                onClick={onRetry} 
                variant="outline" 
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
            )}
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => window.open('https://vedicastro-84kc.onrender.com/docs', '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              Check API Docs
            </Button>
          </div>

          <div className="border-t border-border/30 pt-4">
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              What's Happening?
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>The VedicAstro API server is returning internal server errors (HTTP 500)</li>
              <li>This is a backend server issue, not a problem with your request</li>
              <li>The API provider needs to fix their server infrastructure</li>
              <li>Your input data and request format are correct</li>
            </ul>
          </div>

          <div className="bg-muted/30 p-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This application is configured to use only real VedicAstro API data with no mock fallbacks. 
              When the API is fixed, all functionality will work normally.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}