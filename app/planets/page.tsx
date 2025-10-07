"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AppLayout } from "@/components/app-layout"
import { RefreshCw, Activity, Calendar, Star, Moon, Sun, Zap, Shield, Target, Search, Filter } from "lucide-react"
import { useChartData } from '@/lib/contexts/ChartDataContext'

// Enhanced planet icon component with mystical styling
function PlanetBadge({ symbol, bg, name }: { symbol: string; bg: string; name: string }) {
  return (
    <div className={`h-12 w-12 ${bg} rounded-full flex items-center justify-center mystical-glow float-animation`}>
      <span className="text-lg text-white font-bold">{symbol}</span>
    </div>
  )
}

function getPlanetIcon(planet: string | undefined) {
  switch ((planet || "").toLowerCase()) {
    case "sun":
      return <PlanetBadge symbol="☉" bg="bg-orange-500" name="Sun" />
    case "moon":
      return <PlanetBadge symbol="☽" bg="bg-blue-400" name="Moon" />
    case "mars":
      return <PlanetBadge symbol="♂" bg="bg-red-500" name="Mars" />
    case "mercury":
      return <PlanetBadge symbol="☿" bg="bg-emerald-500" name="Mercury" />
    case "jupiter":
      return <PlanetBadge symbol="♃" bg="bg-yellow-500" name="Jupiter" />
    case "venus":
      return <PlanetBadge symbol="♀" bg="bg-pink-500" name="Venus" />
    case "saturn":
      return <PlanetBadge symbol="♄" bg="bg-gray-500" name="Saturn" />
    case "rahu":
      return <PlanetBadge symbol="☊" bg="bg-purple-500/80" name="Rahu" />
    case "ketu":
      return <PlanetBadge symbol="☋" bg="bg-teal-500/80" name="Ketu" />
    default:
      return <div className="h-12 w-12 bg-muted rounded-full mystical-glow" />
  }
}

// Helper function to get planet color based on name
function getPlanetColor(planetName: string): string {
  switch (planetName.toLowerCase()) {
    case "sun":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20"
    case "moon":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20"
    case "mars":
      return "bg-red-500/10 text-red-400 border-red-500/20"
    case "mercury":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    case "jupiter":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    case "venus":
      return "bg-pink-500/10 text-pink-400 border-pink-500/20"
    case "saturn":
      return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    case "rahu":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20"
    case "ketu":
      return "bg-teal-500/10 text-teal-400 border-teal-500/20"
    default:
      return "bg-muted/10 text-muted-foreground border-muted/20"
  }
}

// Helper function to get planet influence based on name and sign
function getPlanetInfluence(planetName: string, sign: string): string {
  const influences = {
    sun: "Leadership & Vitality",
    moon: "Emotions & Intuition", 
    mars: "Energy & Action",
    mercury: "Communication & Intellect",
    jupiter: "Wisdom & Expansion",
    venus: "Love & Beauty",
    saturn: "Discipline & Structure",
    rahu: "Desire & Materialism",
    ketu: "Spirituality & Detachment"
  }
  return influences[planetName.toLowerCase() as keyof typeof influences] || "Cosmic Influence"
}

// Helper function to get planet strength based on sign and house
function getPlanetStrength(planetName: string, sign: string, house: number): string {
  // Simplified strength calculation
  const strengths = ["Weak", "Moderate", "Strong", "Excellent"]
  const hash = (planetName + sign + house).length
  return strengths[hash % strengths.length]
}

export default function PlanetsPage() {
  const { chartData, hasChart } = useChartData()
  const [planets, setPlanets] = useState<any[]>([])
  const [filteredPlanets, setFilteredPlanets] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [calculationMethod, setCalculationMethod] = useState<string>("")
  const [usingCachedData, setUsingCachedData] = useState(false)

  const fetchPlanetaryPositions = async () => {
    setIsLoading(true)
    try {
      // Try real-time API first
      let response = await fetch('/api/planets/real-time')
      if (!response.ok) {
        // Fallback to basic API
        response = await fetch('/api/planets')
      }
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
      
      const data = await response.json()
      if (data.planets && Array.isArray(data.planets) && data.planets.length > 0) {
        // Enhance the API data with additional properties
        const enhancedPlanets = data.planets.map((planet: any) => ({
          ...planet,
          color: getPlanetColor(planet.name),
          influence: getPlanetInfluence(planet.name, planet.sign),
          strength: getPlanetStrength(planet.name, planet.sign, planet.house || 1),
          nakshatra: planet.nakshatra || 'Calculating...'
        }))
        
        setPlanets(enhancedPlanets)
        setFilteredPlanets(enhancedPlanets)
        setCalculationMethod(data.calculationMethod || 'real-time-api')
        setLastRefreshed(new Date())
      } else {
        throw new Error('No planetary data received from API')
      }
    } catch (error) {
      console.error("Error fetching planetary positions:", error)
      // Set empty state when no data available
      setPlanets([])
      setFilteredPlanets([])
      setCalculationMethod('no-data')
      setLastRefreshed(new Date())
    } finally {
      setIsLoading(false)
    }
  }

  // Filter planets based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPlanets(planets)
    } else {
      const query = searchQuery.toLowerCase().trim()
      const filtered = planets.filter(planet => {
        const name = planet.name?.toLowerCase() || ''
        const sign = planet.sign?.toLowerCase() || ''
        const house = planet.house?.toString() || ''
        const influence = planet.influence?.toLowerCase() || ''
        
        return name.includes(query) ||
               sign.includes(query) ||
               house.includes(query) ||
               influence.includes(query)
      })
      setFilteredPlanets(filtered)
    }
  }, [searchQuery, planets])

  useEffect(() => {
    // Check for cached chart data first
    if (hasChart && chartData?.horoscopeData?.planets) {
      console.log('📦 Using cached chart data for planets')
      
      // Transform cached data to match the component's expected structure
      const cachedPlanets = chartData.horoscopeData.planets.map((planet: any) => ({
        id: planet.name,
        name: planet.name,
        sign: planet.sign,
        degree: planet.degree,
        house: planet.house,
        isRetrograde: planet.isRetrograde || false,
        nakshatra: planet.nakshatra || '',
        color: getPlanetColor(planet.name),
        influence: getPlanetInfluence(planet.name, planet.sign),
        strength: getPlanetStrength(planet.name, planet.sign, planet.house || 1)
      }))
      
      setPlanets(cachedPlanets)
      setFilteredPlanets(cachedPlanets)
      setCalculationMethod('cached-vedicastro-api')
      setLastRefreshed(new Date(chartData.generatedAt))
      setUsingCachedData(true)
    } else {
      // Fetch fresh data if no cached data available
      fetchPlanetaryPositions()
    }
  }, [hasChart, chartData])

  const lastUpdatedText = lastRefreshed ? lastRefreshed.toLocaleTimeString() : "never"

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-primary/30 bg-gradient-to-r from-background via-primary/5 to-accent/5 relative overflow-hidden">
          {/* Mystical background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="text-reveal">
                <h1 className="text-3xl font-bold text-foreground mb-1 text-glow flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center mystical-glow">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <span>Planetary Positions</span>
                </h1>
                <p className="text-muted-foreground">Current positions of all celestial bodies in your birth chart</p>
                {calculationMethod && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Data source: <span className="text-primary">{calculationMethod}</span>
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-reveal animate-delay-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search planets, signs, or houses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full sm:w-80 bg-background/50 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="flex flex-col sm:items-end">
                  <p className="text-sm text-muted-foreground">Last updated: {lastUpdatedText}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 hover-lift" 
                    onClick={fetchPlanetaryPositions}
                    disabled={isLoading}
                  >
                    <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                    Refresh
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 max-w-7xl">
          {/* Loading State */}
          {isLoading && (
            <div className="mb-6 text-center">
              <div className="inline-flex items-center space-x-2 text-muted-foreground">
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Fetching planetary positions...</span>
              </div>
            </div>
          )}

          {/* Search Results Info */}
          {searchQuery && !isLoading && (
            <div className="mb-6 text-reveal">
              <p className="text-muted-foreground">
                {filteredPlanets.length === 0 
                  ? `No planets found matching "${searchQuery}"`
                  : `Found ${filteredPlanets.length} planet${filteredPlanets.length === 1 ? '' : 's'} matching "${searchQuery}"`
                }
              </p>
            </div>
          )}

          {/* Search Results - Only show when searching */}
          {searchQuery && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-foreground text-glow mb-4">Search Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlanets.length > 0 ? (
                  filteredPlanets.map((planet, index) => (
                  <Card 
                    key={planet.name} 
                    className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-4">
                        <div className="float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                          {getPlanetIcon(planet.name)}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-foreground text-lg flex items-center space-x-2">
                            <span>{planet.name}</span>
                            {planet.isRetrograde && (
                              <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/20 mystical-border">
                                R
                              </Badge>
                            )}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {planet.sign} {typeof planet.degree === 'number' ? planet.degree.toFixed(1) : planet.degree}°
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-2 rounded-lg border border-secondary/20 bg-secondary/5">
                          <p className="text-xs text-muted-foreground">House</p>
                          <p className="font-semibold text-foreground">{planet.house || 'N/A'}</p>
                        </div>
                        <div className="text-center p-2 rounded-lg border border-accent/20 bg-accent/5">
                          <p className="text-xs text-muted-foreground">Nakshatra</p>
                          <p className="font-semibold text-foreground text-sm">{planet.nakshatra || 'N/A'}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Influence:</span>
                          <span className="text-sm text-foreground font-medium">{planet.influence || 'Calculating...'}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Strength:</span>
                          <Badge className={`${planet.color || 'bg-muted/10 text-muted-foreground border-muted/20'} mystical-border`}>
                            {planet.strength || 'Unknown'}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  ))
                ) : (
                  <div className="col-span-full">
                    <Card className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal">
                      <CardContent className="p-12 text-center">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="h-16 w-16 bg-muted/20 rounded-full flex items-center justify-center mystical-glow">
                            <Search className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">No planets found</h3>
                            <p className="text-muted-foreground">
                              Try searching for planet names like "Sun", "Moon", "Mars" or zodiac signs like "Aries", "Taurus"
                            </p>
                          </div>
                          <Button 
                            variant="outline" 
                            onClick={() => setSearchQuery("")}
                            className="hover-lift"
                          >
                            Clear Search
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Additional Information Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal animate-delay-400">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <div className="h-8 w-8 bg-accent/20 rounded-lg flex items-center justify-center mystical-glow">
                    <Activity className="h-4 w-4 text-accent" />
                  </div>
                  <span>Current Transits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-primary/20 bg-primary/5">
                    <span className="text-sm text-foreground">Jupiter in Taurus</span>
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20 mystical-border">
                      Favorable
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-orange-500/20 bg-orange-500/5">
                    <span className="text-sm text-foreground">Sun in Aquarius</span>
                    <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 mystical-border">
                      Strong
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal animate-delay-500">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <div className="h-8 w-8 bg-primary/20 rounded-lg flex items-center justify-center mystical-glow">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <span>Retrograde Planets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredPlanets.filter(p => p.isRetrograde).map((planet, index) => (
                    <div key={planet.name} className="flex items-center space-x-3 p-3 rounded-lg border border-destructive/20 bg-destructive/5">
                      <div className="float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                        {getPlanetIcon(planet.name)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{planet.name}</p>
                        <p className="text-xs text-muted-foreground">In {planet.sign}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal animate-delay-600">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <div className="h-8 w-8 bg-accent/20 rounded-lg flex items-center justify-center mystical-glow">
                    <Target className="h-4 w-4 text-accent" />
                  </div>
                  <span>Key Influences</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border border-green-500/20 bg-green-500/5">
                    <p className="text-sm font-medium text-foreground">Career Growth</p>
                    <p className="text-xs text-muted-foreground">Jupiter's influence in 2nd house</p>
                  </div>
                  <div className="p-3 rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <p className="text-sm font-medium text-foreground">Communication</p>
                    <p className="text-xs text-muted-foreground">Moon in 3rd house</p>
                  </div>
                  <div className="p-3 rounded-lg border border-purple-500/20 bg-purple-500/5">
                    <p className="text-sm font-medium text-foreground">Transformation</p>
                    <p className="text-xs text-muted-foreground">Mars retrograde in 8th house</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Planetary Positions Section */}
          {!isLoading && planets.length > 0 && (
            <div className="mt-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground text-glow mb-2">All Planetary Positions</h2>
                <p className="text-muted-foreground">Complete overview of all celestial bodies and their current positions</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {planets.map((planet, index) => (
                  <Card 
                    key={planet.name} 
                    className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal hover-pop-subtle"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="float-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                          {getPlanetIcon(planet.name)}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-foreground text-base flex items-center space-x-2">
                            <span>{planet.name}</span>
                            {planet.isRetrograde && (
                              <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/20 mystical-border">
                                R
                              </Badge>
                            )}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {planet.sign} {typeof planet.degree === 'number' ? planet.degree.toFixed(1) : planet.degree}°
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 rounded-lg border border-secondary/20 bg-secondary/5">
                          <p className="text-xs text-muted-foreground">House</p>
                          <p className="font-semibold text-foreground text-sm">{planet.house || 'N/A'}</p>
                        </div>
                        <div className="text-center p-2 rounded-lg border border-accent/20 bg-accent/5">
                          <p className="text-xs text-muted-foreground">Nakshatra</p>
                          <p className="font-semibold text-foreground text-xs">{planet.nakshatra || 'N/A'}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground mb-1">Influence</p>
                          <p className="text-xs text-foreground font-medium">{planet.influence || 'Calculating...'}</p>
                        </div>
                        <div className="text-center">
                          <Badge className={`${planet.color || 'bg-muted/10 text-muted-foreground border-muted/20'} mystical-border text-xs`}>
                            {planet.strength || 'Unknown'}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Error State */}
          {!isLoading && planets.length === 0 && calculationMethod === 'error' && (
            <div className="mt-12">
              <Card className="border-destructive/30 bg-destructive/5 backdrop-blur-sm card-mystical text-reveal">
                <CardContent className="p-12 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="h-16 w-16 bg-destructive/20 rounded-full flex items-center justify-center mystical-glow">
                      <RefreshCw className="h-8 w-8 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Unable to Load Planetary Data</h3>
                      <p className="text-muted-foreground mb-4">
                        There was an error fetching the current planetary positions. Please try refreshing the page.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={fetchPlanetaryPositions}
                        className="hover-lift"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Try Again
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}