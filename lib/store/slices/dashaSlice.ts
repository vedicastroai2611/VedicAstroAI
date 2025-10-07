import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface DashaPeriod {
  planet: string
  sanskritName: string
  startDate: string
  endDate: string
  totalDuration: number // in years
  remainingDuration: number // in years
  progressPercentage: number
  effects: string[]
  remedies: string[]
}

export interface SimpleDashaPeriod {
  planet: string
  startDate: string
  endDate: string
  totalYears: number
  completedYears: number
  remainingYears: number
}

export interface SimpleAntardashaPeriod {
  planet: string
  startDate: string
  endDate: string
  totalMonths: number
  completedMonths: number
  remainingMonths: number
}

export interface AntardashaPeriod {
  planet: string
  sanskritName: string
  startDate: string
  endDate: string
  duration: number // in months
  progressPercentage: number
  effects: string[]
}

export interface PratyantardashaPeriod {
  planet: string
  sanskritName: string
  startDate: string
  endDate: string
  duration: number // in days
  effects: string[]
}

interface DashaState {
  currentMahadasha: DashaPeriod | null
  currentAntardasha: AntardashaPeriod | null
  currentPratyantardasha: PratyantardashaPeriod | null
  upcomingDashas: DashaPeriod[]
  dashaHistory: DashaPeriod[]
  loading: boolean
  error: string | null
  lastCalculated: string | null
}

const initialState: DashaState = {
  currentMahadasha: null,
  currentAntardasha: null,
  currentPratyantardasha: null,
  upcomingDashas: [],
  dashaHistory: [],
  loading: false,
  error: null,
  lastCalculated: null,
}

const dashaSlice = createSlice({
  name: "dasha",
  initialState,
  reducers: {
    setCurrentMahadasha: (state, action: PayloadAction<DashaPeriod>) => {
      state.currentMahadasha = action.payload
      state.lastCalculated = new Date().toISOString()
    },
    setCurrentAntardasha: (state, action: PayloadAction<AntardashaPeriod>) => {
      state.currentAntardasha = action.payload
    },
    updateCurrentDasha: (
      state,
      action: PayloadAction<{ mahadasha: SimpleDashaPeriod; antardasha: SimpleAntardashaPeriod }>,
    ) => {
      // Convert simplified format to full format
      state.currentMahadasha = {
        planet: action.payload.mahadasha.planet,
        sanskritName: action.payload.mahadasha.planet, // Simplified for now
        startDate: action.payload.mahadasha.startDate,
        endDate: action.payload.mahadasha.endDate,
        totalDuration: action.payload.mahadasha.totalYears,
        remainingDuration: action.payload.mahadasha.remainingYears,
        progressPercentage: (action.payload.mahadasha.completedYears / action.payload.mahadasha.totalYears) * 100,
        effects: [],
        remedies: [],
      }

      state.currentAntardasha = {
        planet: action.payload.antardasha.planet,
        sanskritName: action.payload.antardasha.planet, // Simplified for now
        startDate: action.payload.antardasha.startDate,
        endDate: action.payload.antardasha.endDate,
        duration: action.payload.antardasha.totalMonths,
        progressPercentage: (action.payload.antardasha.completedMonths / action.payload.antardasha.totalMonths) * 100,
        effects: [],
      }

      state.lastCalculated = new Date().toISOString()
    },
    setCurrentPratyantardasha: (state, action: PayloadAction<PratyantardashaPeriod>) => {
      state.currentPratyantardasha = action.payload
    },
    setUpcomingDashas: (state, action: PayloadAction<DashaPeriod[]>) => {
      state.upcomingDashas = action.payload
    },
    setDashaHistory: (state, action: PayloadAction<DashaPeriod[]>) => {
      state.dashaHistory = action.payload
    },
    updateDashaProgress: (state, action: PayloadAction<{ type: "mahadasha" | "antardasha"; progress: number }>) => {
      if (action.payload.type === "mahadasha" && state.currentMahadasha) {
        state.currentMahadasha.progressPercentage = action.payload.progress
      } else if (action.payload.type === "antardasha" && state.currentAntardasha) {
        state.currentAntardasha.progressPercentage = action.payload.progress
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
  setCurrentMahadasha,
  setCurrentAntardasha,
  updateCurrentDasha, // Added to exports
  setCurrentPratyantardasha,
  setUpcomingDashas,
  setDashaHistory,
  updateDashaProgress,
  setLoading,
  setError,
} = dashaSlice.actions

export default dashaSlice.reducer
