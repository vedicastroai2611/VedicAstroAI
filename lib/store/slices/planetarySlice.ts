import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface PlanetPosition {
  name: string
  sanskritName: string
  sign: string
  house: number
  degree: number
  minutes: number
  seconds: number
  isRetrograde: boolean
  strength: "Excellent" | "Strong" | "Good" | "Moderate" | "Weak"
  strengthPercentage: number
  nakshatra: string
  nakshatraPada: number
}

export interface SimplePlanetPosition {
  sign: string
  degree: number
  house: number
  nakshatra: string
}

export interface PlanetaryPositions {
  sun: SimplePlanetPosition
  moon: SimplePlanetPosition
  mars: SimplePlanetPosition
  mercury: SimplePlanetPosition
  jupiter: SimplePlanetPosition
  venus: SimplePlanetPosition
  saturn: SimplePlanetPosition
  rahu: SimplePlanetPosition
  ketu: SimplePlanetPosition
}

export interface ZodiacSign {
  name: string
  sanskritName: string
  element: "Fire" | "Earth" | "Air" | "Water"
  quality: "Cardinal" | "Fixed" | "Mutable"
  ruler: string
  position: number // 0-11 (Aries = 0, Taurus = 1, etc.)
}

export interface House {
  number: number
  sign: string
  lord: string
  planets: string[]
  strength: number
  significances: string[]
  description: string
}

interface PlanetaryState {
  planets: PlanetPosition[]
  houses: House[]
  currentPositions: PlanetaryPositions
  ascendant: {
    sign: string
    degree: number
    nakshatra: string
  }
  moonSign: string
  sunSign: string
  currentTransits: PlanetPosition[]
  loading: boolean
  error: string | null
  lastUpdated: string | null
}

const initialState: PlanetaryState = {
  planets: [],
  houses: [],
  currentPositions: {
    sun: { sign: "Leo", degree: 23, house: 12, nakshatra: "Purva Phalguni" },
    moon: { sign: "Cancer", degree: 7, house: 11, nakshatra: "Pushya" },
    mars: { sign: "Aries", degree: 15, house: 8, nakshatra: "Bharani" },
    mercury: { sign: "Virgo", degree: 2, house: 1, nakshatra: "Uttara Phalguni" },
    jupiter: { sign: "Taurus", degree: 9, house: 9, nakshatra: "Rohini" },
    venus: { sign: "Libra", degree: 18, house: 2, nakshatra: "Swati" },
    saturn: { sign: "Capricorn", degree: 25, house: 5, nakshatra: "Dhanishta" },
    rahu: { sign: "Gemini", degree: 12, house: 10, nakshatra: "Ardra" },
    ketu: { sign: "Sagittarius", degree: 12, house: 4, nakshatra: "Mula" },
  },
  ascendant: {
    sign: "",
    degree: 0,
    nakshatra: "",
  },
  moonSign: "",
  sunSign: "",
  currentTransits: [],
  loading: false,
  error: null,
  lastUpdated: null,
}

const planetarySlice = createSlice({
  name: "planetary",
  initialState,
  reducers: {
    setPlanets: (state, action: PayloadAction<PlanetPosition[]>) => {
      state.planets = action.payload
      state.lastUpdated = new Date().toISOString()
    },
    setHouses: (state, action: PayloadAction<House[]>) => {
      state.houses = action.payload
    },
    updatePlanetaryPositions: (state, action: PayloadAction<PlanetaryPositions>) => {
      state.currentPositions = action.payload
      state.lastUpdated = new Date().toISOString()
    },
    setAscendant: (state, action: PayloadAction<{ sign: string; degree: number; nakshatra: string }>) => {
      state.ascendant = action.payload
    },
    setMoonSign: (state, action: PayloadAction<string>) => {
      state.moonSign = action.payload
    },
    setSunSign: (state, action: PayloadAction<string>) => {
      state.sunSign = action.payload
    },
    setCurrentTransits: (state, action: PayloadAction<PlanetPosition[]>) => {
      state.currentTransits = action.payload
    },
    updatePlanetStrength: (state, action: PayloadAction<{ planetName: string; strength: number }>) => {
      const planet = state.planets.find((p) => p.name === action.payload.planetName)
      if (planet) {
        planet.strengthPercentage = action.payload.strength
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const {
  setPlanets,
  setHouses,
  updatePlanetaryPositions, // Added to exports
  setAscendant,
  setMoonSign,
  setSunSign,
  setCurrentTransits,
  updatePlanetStrength,
  setLoading,
  setError,
} = planetarySlice.actions

export default planetarySlice.reducer
