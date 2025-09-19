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
  setCurrentPratyantardasha,
  setUpcomingDashas,
  setDashaHistory,
  updateDashaProgress,
  setLoading,
  setError,
} = dashaSlice.actions

export default dashaSlice.reducer
