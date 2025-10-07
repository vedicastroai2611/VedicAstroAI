"use client"

import React, { useEffect, useState } from 'react'
import { useChartData } from '@/lib/contexts/ChartDataContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MainNav } from '@/components/main-nav'
import { DemoBanner } from '@/components/demo-banner'
import { BirthChartForm } from '@/components/birth-chart-form'
import { useHoroscope } from '@/lib/hooks/useHoroscope'
import { BirthData } from '@/lib/api/vedic-astro'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  Moon, 
  Sun, 
  Activity,
  Home,
  TrendingUp,
  Eye,
  RefreshCw,
  Download,
  Share2,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

// Planet icon component

// Add collapsible state variables for sections
function PlanetBadge({ symbol, bg, name }: { symbol: string; bg: string; name: string }) {
  return (
    <div className={`h-12 w-12 ${bg} rounded-full flex items-center justify-center mystical-glow float-animation`}>
      <span className="text-lg text-white font-bold">{symbol}</span>
    </div>
  )
}

const planetMap: Record<string, { symbol: string; bg: string }> = {
  'Sun': { symbol: '☉', bg: 'bg-orange-500' },
  'Moon': { symbol: '☽', bg: 'bg-slate-400' },
  'Mercury': { symbol: '☿', bg: 'bg-emerald-500' },
  'Venus': { symbol: '♀', bg: 'bg-pink-500' },
  'Mars': { symbol: '♂', bg: 'bg-red-500' },
  'Jupiter': { symbol: '♃', bg: 'bg-yellow-500' },
  'Saturn': { symbol: '♄', bg: 'bg-gray-700' },
  'Rahu': { symbol: '☊', bg: 'bg-purple-700' },
  'Ketu': { symbol: '☋', bg: 'bg-indigo-700' },
  // Extra points/outer planets for richer UI
  'Ascendant': { symbol: '↑', bg: 'bg-blue-600' },
  'Uranus': { symbol: '⛢', bg: 'bg-cyan-600' },
  'Neptune': { symbol: '♆', bg: 'bg-sky-600' },
  'Pluto': { symbol: '♇', bg: 'bg-fuchsia-600' },
  'Chiron': { symbol: '⚷', bg: 'bg-teal-600' },
  'Syzygy': { symbol: '⚭', bg: 'bg-rose-600' },
  'Part of Fortune': { symbol: '⊗', bg: 'bg-lime-600' },
}

function getPlanetIcon(planet: string | undefined) {
  if (!planet) return null
  
  const planetInfo = planetMap[planet]
  if (!planetInfo) return null
  
  return <PlanetBadge symbol={planetInfo.symbol} bg={planetInfo.bg} name={planet} />
}

function getAspectColor(aspectType: string) {
  const aspectColors: Record<string, string> = {
    'Conjunction': 'bg-blue-500',
    'Opposition': 'bg-red-500',
    'Trine': 'bg-green-500',
    'Square': 'bg-orange-500',
    'Sextile': 'bg-purple-500',
    'Quincunx': 'bg-yellow-500',
    'Semi-Sextile': 'bg-pink-500',
    'Semi-Square': 'bg-indigo-500',
    'Sesquiquadrate': 'bg-cyan-500',
    'Quintile': 'bg-teal-500',
    'Bi-Quintile': 'bg-lime-500',
  }
  
  return aspectColors[aspectType] || 'bg-gray-500'
}

function getHouseColor(houseNumber: number) {
  const houseColors: Record<number, string> = {
    1: 'bg-red-500',
    2: 'bg-green-500',
    3: 'bg-yellow-500',
    4: 'bg-blue-500',
    5: 'bg-purple-500',
    6: 'bg-orange-500',
    7: 'bg-pink-500',
    8: 'bg-indigo-500',
    9: 'bg-teal-500',
    10: 'bg-cyan-500',
    11: 'bg-lime-500',
    12: 'bg-amber-500',
  }
  
  return houseColors[houseNumber] || 'bg-gray-500'
}

function formatNumber(value: unknown, digits: number = 2): string {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value.toFixed(digits)
  }
  if (typeof value === 'string') {
    const numeric = Number(value)
    if (Number.isFinite(numeric)) {
      return numeric.toFixed(digits)
    }
  }
  return ''
}

export default function BirthChartPage() {
  const { chartData, birthData, hasChart, isLoading, updateChartData } = useChartData();
  const { fetchHoroscope } = useHoroscope();
  const [showForm, setShowForm] = useState(false)
  const [showInputModal, setShowInputModal] = useState(false)
  const [birthDate, setBirthDate] = useState('')
  const [birthTime, setBirthTime] = useState('')
  const [birthLat, setBirthLat] = useState('')
  const [birthLng, setBirthLng] = useState('')
  // Hooks must run unconditionally on every render; keep them before any early returns
  const [horoscopeData, setHoroscopeData] = useState<any>(null)
  const [positionsOpen, setPositionsOpen] = useState(true)
  const [housesOpen, setHousesOpen] = useState(true)
  const [aspectsOpen, setAspectsOpen] = useState(true)
  
  // Process chart data in useEffect to avoid state updates during render
  useEffect(() => {
    if (chartData) {
      setHoroscopeData(chartData)
    }
  }, [chartData])
  
  const handleFormSubmit = async (data: BirthData) => {
    try {
      const result = await fetchHoroscope(data)
      if (result.success && result.data) {
        // Update the chart data in the cache
        updateChartData(result.data, data)
      }
    } finally {
      // Always close the form, even if there's an error
      setShowForm(false)
    }
  }
  
  const handleShare = () => {
    // In a real app, this would generate a shareable link
    navigator.clipboard.writeText(window.location.href)
    toast.success('Chart link copied to clipboard!')
  }

  const handleDownload = () => {
    // In a real app, this would generate a PDF or image
    toast.info('Download feature coming soon!')
  }

  if (!hasChart || !chartData || !birthData) {
    return (
      <>
        <DemoBanner />
        <div className="min-h-screen bg-background">
          <MainNav />
          <div className="container mx-auto px-6 py-8 max-w-7xl">
            <div className="text-center py-16 animate-fadeIn">
              <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 mystical-glow float-animation">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4 text-glow">No Birth Chart Generated</h2>
              <p className="text-muted-foreground mb-8">Generate your birth chart to see detailed astrological analysis</p>
              <Button onClick={() => setShowForm(true)} className="bg-primary hover:bg-primary/90 hover-lift transition-all duration-300">
                Generate Birth Chart
              </Button>
            </div>
          </div>
        </div>
        
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Generate Birth Chart</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowForm(false)}
                  >
                    ✕
                  </Button>
                </div>
                <BirthChartForm 
                  onSubmit={handleFormSubmit}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
  
  // If horoscopeData is not yet loaded, show a loading state
  if (!horoscopeData && hasChart) {
    return (
      <>
        <DemoBanner />
        <div className="min-h-screen bg-background">
          <MainNav />
          <div className="container mx-auto px-6 py-8 max-w-7xl">
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <DemoBanner />
      <div className="min-h-screen bg-background">
        <MainNav />
        
        {/* Header */}
        <div className="border-b border-primary/30 bg-gradient-to-r from-background via-primary/5 to-accent/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="text-reveal">
                <div className="flex items-center gap-4 mb-2">
                  <Link href="/dashboard">
                    <Button variant="outline" size="sm" className="hover-lift">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Dashboard
                    </Button>
                  </Link>
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2 text-glow">
                  Complete Birth Chart Analysis
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {birthData.day}/{birthData.month}/{birthData.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {birthData.hour.toString().padStart(2, '0')}:{birthData.minute.toString().padStart(2, '0')}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {birthData.latitude.toFixed(4)}, {birthData.longitude.toFixed(4)}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button onClick={handleShare} variant="outline" size="sm" className="hover-lift">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button onClick={handleDownload} variant="outline" size="sm" className="hover-lift">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button onClick={() => setShowInputModal(true)} variant="outline" size="sm" className="hover-lift">
                  Enter Birth Data
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-6">
            
            {/* Planetary Positions - compact */}
            <Card className="card-mystical animate-fadeIn bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
              <CardHeader className="pb-1 pt-3 px-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Sun className="h-4 w-4 text-primary" />
                  Planetary Positions
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {horoscopeData.planets?.map((planet: any, index: number) => (
                    <div key={index} className="flex items-center gap-3 rounded-md border border-border/50 p-2 min-h-12">
                      <div className="h-10 w-10 flex items-center justify-center shrink-0">
                        <div className="scale-75">{planetMap[planet.name] && getPlanetIcon(planet.name)}</div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-sm leading-tight truncate">{planet.name}</h3>
                          <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">{formatNumber(planet.longitude, 2)}{formatNumber(planet.longitude, 2) !== '' ? '°' : ''}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                          <span className="truncate">{planet.sign} {planet.isRetrograde ? '(R)' : ''}</span>
                          <span className="whitespace-nowrap">H {planet.house}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* House Cusps - compact, dark */}
            <Card className="card-mystical animate-fadeIn bg-black/60 border border-white/5">
              <CardHeader className="pb-1 pt-3 px-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Home className="h-4 w-4 text-primary" />
                  House Cusps
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                    {/* Check if all house longitudes are the same - indicates a data issue */}
                    {horoscopeData.houses && 
                      horoscopeData.houses.every((house: any) => 
                        house.longitude === horoscopeData.houses[0].longitude
                      ) && (
                        <Badge variant="destructive" className="mb-4">
                          Data issue detected
                        </Badge>
                      )
                    }
                    
                    <div className="grid grid-cols-2 gap-2">
                      {horoscopeData.houses?.map((house: any, index: number) => {
                        const houseNumber = index + 1;
                        const bgColor = getHouseColor(houseNumber);
                        const textColorClass = 'text-white';
                        return (
                          <div key={index} className={`p-2 rounded-md bg-black/80 ${textColorClass} border border-white/10`}> 
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium text-sm">House {houseNumber}</h3>
                              <span className="text-xs">{formatNumber(house.longitude, 2) || '0.00'}°</span>
                            </div>
                            <div className="text-xs opacity-90 flex items-center gap-2">
                              <span className={`inline-block h-2.5 w-2.5 rounded-full ${bgColor}`}></span>
                              <span>{house.sign}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
              </CardContent>
            </Card>
            
            {/* Planetary Aspects - compact, grouped */}
            <Card className="card-mystical animate-fadeIn bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
              <CardHeader className="pb-1 pt-3 px-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  Planetary Aspects
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-3">
                <div className="space-y-2">
                  {Object.entries(
                    (horoscopeData.aspects || []).reduce((acc: any, a: any) => {
                      const key = a.type || 'Other'
                      if (!acc[key]) acc[key] = []
                      acc[key].push(a)
                      return acc
                    }, {})
                  ).map(([type, items]: [string, any[]], idx: number) => (
                    <div key={idx}>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={`${getAspectColor(type as string)} py-0.5 px-2 text-[11px]`}>{type}</Badge>
                        <span className="text-[11px] text-muted-foreground">{items.length}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                        {items.map((aspect: any, i: number) => (
                          <div key={i} className="text-[11px] rounded-md border border-white/10 px-2 py-1.5 flex items-center justify-between gap-2 min-h-10 bg-black/30">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="h-8 w-8 flex items-center justify-center"><div className="scale-[0.6]">{getPlanetIcon(aspect.planet1)}</div></div>
                              <span className="truncate">{aspect.planet1}</span>
                            </div>
                            <div className="text-xs opacity-70 whitespace-nowrap">
                              {formatNumber(aspect.angle, 2)}{formatNumber(aspect.angle, 2) !== '' ? '°' : ''}
                            </div>
                            <div className="flex items-center gap-2 justify-end min-w-0">
                              <span className="truncate text-right">{aspect.planet2}</span>
                              <div className="h-8 w-8 flex items-center justify-center"><div className="scale-[0.6]">{getPlanetIcon(aspect.planet2)}</div></div>
                            </div>
                            <div className="text-[10px] text-muted-foreground ml-2 whitespace-nowrap">{formatNumber(aspect.orb, 2)}{formatNumber(aspect.orb, 2) !== '' ? '°' : ''}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Nakshatras - compact grid */}
            <Card className="card-mystical animate-fadeIn bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
              <CardHeader className="pb-1 pt-3 px-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  Nakshatras
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {horoscopeData.planets?.map((planet: any, index: number) => (
                    <div key={index} className="flex items-center gap-3 rounded-md border border-white/10 p-2">
                      <div className="flex-shrink-0">{planetMap[planet.name] && getPlanetIcon(planet.name)}</div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-sm">{planet.name}</h3>
                          <span className="text-xs text-muted-foreground">{planet.nakshatra || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                          <span>Pada: {planet.pada || 'N/A'}</span>
                          <span>Lord: {planet.nakshatraLord || 'N/A'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Birth Data Input Modal */}
        {showInputModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <div className="bg-background rounded-lg w-full max-w-md border border-white/10">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-semibold">Enter Birth Data</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowInputModal(false)}>✕</Button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const payload = {
                    date: birthDate,
                    time: birthTime,
                    latitude: birthLat,
                    longitude: birthLng,
                    timezone: 'Asia/Kolkata'
                  }
                  console.log('🔭 Birth data submitted:', payload)
                  setShowInputModal(false)
                }}
              >
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-muted-foreground">Birth Date</label>
                      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full mt-1 rounded-md bg-black/40 border border-white/10 p-2 text-sm" required />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">Birth Time</label>
                      <input type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} className="w-full mt-1 rounded-md bg-black/40 border border-white/10 p-2 text-sm" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-muted-foreground">Latitude</label>
                      <input type="number" step="0.0001" value={birthLat} onChange={(e) => setBirthLat(e.target.value)} className="w-full mt-1 rounded-md bg-black/40 border border-white/10 p-2 text-sm" placeholder="e.g. 28.6139" required />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">Longitude</label>
                      <input type="number" step="0.0001" value={birthLng} onChange={(e) => setBirthLng(e.target.value)} className="w-full mt-1 rounded-md bg-black/40 border border-white/10 p-2 text-sm" placeholder="e.g. 77.2090" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Timezone</label>
                    <input readOnly value="Asia/Kolkata" className="w-full mt-1 rounded-md bg-black/40 border border-white/10 p-2 text-sm opacity-80" />
                  </div>
                </div>
                <div className="p-4 border-t border-white/10 flex justify-end gap-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => setShowInputModal(false)}>Cancel</Button>
                  <Button type="submit" size="sm">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}