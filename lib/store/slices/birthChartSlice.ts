import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface ChartData {
  houses: {
    [key: number]: {
      sign: string
      planets: string[]
      lord: string
      strength: number
    }
  }
  planets: {
    [key: string]: {
      house: number
      sign: string
      degree: number
      nakshatra: string
      isRetrograde: boolean
    }
  }
  aspects: {
    planet1: string
    planet2: string
    type: "conjunction" | "opposition" | "trine" | "square" | "sextile"
    orb: number
    strength: "strong" | "moderate" | "weak"
  }[]
}

export interface DivisionalChart {
  name: string
  division: number
  chartData: ChartData
  significance: string[]
}

interface BirthChartState {
  mainChart: ChartData | null
  divisionalCharts: DivisionalChart[]
  yogas: {
    name: string
    sanskritName: string
    description: string
    strength: "strong" | "moderate" | "weak"
    planets: string[]
    effects: string[]
  }[]
  doshas: {
    manglik: {
      present: boolean
      severity: "high" | "medium" | "low" | "none"
      remedies: string[]
    }
    kalSarpa: {
      present: boolean
      type: string
      remedies: string[]
    }
    pitruDosha: {
      present: boolean
      remedies: string[]
    }
  }
  gemstoneRecommendations: {
    primary: string
    alternative: string[]
    metalRecommendation: string
    dayToWear: string
    fingerToWear: string
  }[]
  loading: boolean
  error: string | null
  lastCalculated: string | null
}

const initialState: BirthChartState = {
  mainChart: null,
  divisionalCharts: [],
  yogas: [],
  doshas: {
    manglik: {
      present: false,
      severity: "none",
      remedies: [],
    },
    kalSarpa: {
      present: false,
      type: "",
      remedies: [],
    },
    pitruDosha: {
      present: false,
      remedies: [],
    },
  },
  gemstoneRecommendations: [],
  loading: false,
  error: null,
  lastCalculated: null,
}

const birthChartSlice = createSlice({
  name: "birthChart",
  initialState,
  reducers: {
    setMainChart: (state, action: PayloadAction<ChartData>) => {
      state.mainChart = action.payload
      state.lastCalculated = new Date().toISOString()
    },
    setDivisionalCharts: (state, action: PayloadAction<DivisionalChart[]>) => {
      state.divisionalCharts = action.payload
    },
    setYogas: (state, action: PayloadAction<typeof initialState.yogas>) => {
      state.yogas = action.payload
    },
    setDoshas: (state, action: PayloadAction<typeof initialState.doshas>) => {
      state.doshas = action.payload
    },
    setGemstoneRecommendations: (state, action: PayloadAction<typeof initialState.gemstoneRecommendations>) => {
      state.gemstoneRecommendations = action.payload
    },
    updateHouseStrength: (state, action: PayloadAction<{ house: number; strength: number }>) => {
      if (state.mainChart?.houses[action.payload.house]) {
        state.mainChart.houses[action.payload.house].strength = action.payload.strength
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
  setMainChart,
  setDivisionalCharts,
  setYogas,
  setDoshas,
  setGemstoneRecommendations,
  updateHouseStrength,
  setLoading,
  setError,
} = birthChartSlice.actions

export default birthChartSlice.reducer
