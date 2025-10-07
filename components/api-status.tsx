'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, CheckCircle, Clock, RefreshCw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ApiStatus {
  status: 'checking' | 'healthy' | 'unhealthy' | 'unknown'
  message: string
  lastChecked: Date
  responseTime?: number
}

export function ApiStatusCard() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>({
    status: 'unknown',
    message: 'API status not checked yet',
    lastChecked: new Date()
  })

  const checkApiHealth = async () => {
    setApiStatus(prev => ({ ...prev, status: 'checking', message: 'Checking API health...' }))
    
    try {
      const startTime = Date.now()
      const response = await fetch('https://vedicastro-84kc.onrender.com/', {
        method: 'GET',
        signal: AbortSignal.timeout(10000)
      })
      
      const responseTime = Date.now() - startTime
      
      if (response.ok) {
        const data = await response.json()
        setApiStatus({
          status: 'healthy',
          message: data.message || 'API is responding normally',
          lastChecked: new Date(),
          responseTime
        })
      } else {
        setApiStatus({
          status: 'unhealthy',
          message: `API returned ${response.status} ${response.statusText}`,
          lastChecked: new Date(),
          responseTime
        })
      }
    } catch (error) {
      setApiStatus({
        status: 'unhealthy',
        message: error instanceof Error ? error.message : 'API is not accessible',
        lastChecked: new Date()
      })
    }
  }

  useEffect(() => {
    checkApiHealth()
  }, [])

  const getStatusIcon = () => {
    switch (apiStatus.status) {
      case 'healthy':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'unhealthy':
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case 'checking':
        return <Clock className="h-5 w-5 text-yellow-500 animate-spin" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    switch (apiStatus.status) {
      case 'healthy': return 'bg-green-500/10 text-green-600 border-green-500/20'
      case 'unhealthy': return 'bg-red-500/10 text-red-600 border-red-500/20'
      case 'checking': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-3 text-lg">
          {getStatusIcon()}
          <span>VedicAstro API Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Badge className={getStatusColor()} variant="outline">
            {apiStatus.status === 'healthy' && 'Online'}
            {apiStatus.status === 'unhealthy' && 'Offline'}
            {apiStatus.status === 'checking' && 'Checking...'}
            {apiStatus.status === 'unknown' && 'Unknown'}
          </Badge>
          
          <p className="text-sm text-muted-foreground">
            {apiStatus.message}
          </p>
          
          {apiStatus.responseTime && (
            <p className="text-xs text-muted-foreground">
              Response time: {apiStatus.responseTime}ms
            </p>
          )}
          
          <p className="text-xs text-muted-foreground">
            Last checked: {apiStatus.lastChecked.toLocaleTimeString()}
          </p>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={checkApiHealth}
          disabled={apiStatus.status === 'checking'}
          className="w-full"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${apiStatus.status === 'checking' ? 'animate-spin' : ''}`} />
          {apiStatus.status === 'checking' ? 'Checking...' : 'Refresh Status'}
        </Button>
        
        {apiStatus.status === 'unhealthy' && (
          <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-3">
            <h4 className="text-sm font-medium text-red-400 mb-2">API Service Issue</h4>
            <p className="text-xs text-red-300/80">
              The VedicAstro FastAPI backend is experiencing server errors (500 Internal Server Error). 
              This is a backend server issue that needs to be resolved by the API provider.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}