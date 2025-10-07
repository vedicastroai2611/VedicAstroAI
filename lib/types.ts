'use client'

export interface BirthData {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second?: number
  latitude: number
  longitude: number
}

export interface PlanetData {
  name: string
  sign: string
  degree: number
  house: number
  isRetrograde: boolean
  nakshatra?: string
  nakshatraLord?: string
  pada?: number
}

export interface HoroscopeData {
  planets: PlanetData[]
  houses: Array<{ sign: string; longitude: number }>
  aspects: Array<{ planet1: string; planet2: string; type?: string; angle: number; orb: number }>
  dasha?: any[]
  nakshatra?: any[]
  tithi?: string
  yoga?: string
  sunrise?: string
  sunset?: string
}


