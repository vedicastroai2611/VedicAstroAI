'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { HoroscopeData, BirthData } from '@/lib/types'

interface ChartDataContextType {
  chartData: HoroscopeData | null
  birthData: BirthData | null
  isLoading: boolean
  error: string | null
  hasChart: boolean
  updateChartData: (horoscopeData: HoroscopeData, birthData: BirthData) => void
  clearChartData: () => void
  getFromCache: () => void
}

const ChartDataContext = createContext<ChartDataContextType | undefined>(undefined)

const STORAGE_KEY = 'vedic-astro-chart-data'
const BIRTH_DATA_KEY = 'vedic-astro-birth-data'

interface ChartDataProviderProps {
  children: ReactNode
}

export function ChartDataProvider({ children }: ChartDataProviderProps) {
  const [chartData, setChartData] = useState<HoroscopeData | null>(null)
  const [birthData, setBirthData] = useState<BirthData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load cached data on mount
  useEffect(() => {
    getFromCache()
  }, [])

  const getFromCache = () => {
    try {
      setIsLoading(true)
      
      const cachedChart = localStorage.getItem(STORAGE_KEY)
      const cachedBirth = localStorage.getItem(BIRTH_DATA_KEY)
      
      if (cachedChart && cachedBirth) {
        const parsedChart = JSON.parse(cachedChart)
        const parsedBirth = JSON.parse(cachedBirth)
        
        console.log('📦 Loading cached chart data:', {
          hasChart: !!parsedChart,
          hasBirth: !!parsedBirth,
          planetsCount: parsedChart?.planets?.length || 0,
          birthDate: parsedBirth ? `${parsedBirth.year}-${parsedBirth.month}-${parsedBirth.day}` : 'Unknown'
        })
        
        setChartData(parsedChart)
        setBirthData(parsedBirth)
        setError(null)
      } else {
        console.log('📦 No cached chart data found')
      }
    } catch (error) {
      console.error('❌ Error loading cached data:', error)
      setError('Failed to load cached chart data')
      // Clear invalid cache
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(BIRTH_DATA_KEY)
    } finally {
      setIsLoading(false)
    }
  }

  const updateChartData = (horoscopeData: HoroscopeData, birthInfo: BirthData) => {
    try {
      console.log('💾 Caching new chart data:', {
        planetsCount: horoscopeData.planets?.length || 0,
        housesCount: horoscopeData.houses?.length || 0,
        birthDate: `${birthInfo.year}-${birthInfo.month}-${birthInfo.day}`,
        source: (horoscopeData as any)?._meta?.source || 'unknown'
      })
      
      // Add timestamp to cached data
      const chartWithTimestamp = {
        ...horoscopeData,
        _cached: {
          timestamp: new Date().toISOString(),
          version: '1.0'
        }
      }
      
      // Cache in localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chartWithTimestamp))
      localStorage.setItem(BIRTH_DATA_KEY, JSON.stringify(birthInfo))
      
      // Update state
      setChartData(chartWithTimestamp)
      setBirthData(birthInfo)
      setError(null)
      
      console.log('✅ Chart data cached successfully')
    } catch (error) {
      console.error('❌ Error caching chart data:', error)
      setError('Failed to cache chart data')
    }
  }

  const clearChartData = () => {
    try {
      console.log('🗑️ Clearing cached chart data')
      
      // Clear localStorage
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(BIRTH_DATA_KEY)
      
      // Clear state
      setChartData(null)
      setBirthData(null)
      setError(null)
      
      console.log('✅ Chart data cleared successfully')
    } catch (error) {
      console.error('❌ Error clearing chart data:', error)
      setError('Failed to clear chart data')
    }
  }

  const hasChart = chartData !== null && birthData !== null

  const contextValue: ChartDataContextType = {
    chartData,
    birthData,
    isLoading,
    error,
    hasChart,
    updateChartData,
    clearChartData,
    getFromCache
  }

  return (
    <ChartDataContext.Provider value={contextValue}>
      {children}
    </ChartDataContext.Provider>
  )
}

export function useChartData() {
  const context = useContext(ChartDataContext)
  if (context === undefined) {
    throw new Error('useChartData must be used within a ChartDataProvider')
  }
  return context
}

// Helper hook to check if chart data exists
export function useHasChart() {
  const { hasChart } = useChartData()
  return hasChart
}

// Helper hook to get chart summary
export function useChartSummary() {
  const { chartData, birthData } = useChartData()
  
  if (!chartData || !birthData) {
    return null
  }
  
  return {
    birthDate: `${birthData.day}/${birthData.month}/${birthData.year}`,
    birthTime: `${birthData.hour.toString().padStart(2, '0')}:${birthData.minute.toString().padStart(2, '0')}`,
    location: `${birthData.latitude}, ${birthData.longitude}`,
    planetsCount: chartData.planets?.length || 0,
    ascendant: chartData.planets?.find(p => p.name === 'Ascendant')?.sign || 'Unknown',
    sunSign: chartData.planets?.find(p => p.name === 'Sun')?.sign || 'Unknown',
    moonSign: chartData.planets?.find(p => p.name === 'Moon')?.sign || 'Unknown',
    timestamp: (chartData as any)?._cached?.timestamp || new Date().toISOString()
  }
}