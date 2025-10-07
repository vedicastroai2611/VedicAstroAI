import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface DailyPrediction {
  date: string
  overall: {
    score: number
    description: string
    luckyColor: string
    luckyNumber: number
    luckyDirection: string
    luckyTime: string
  }
  categories: {
    career: {
      score: number
      description: string
      advice: string
    }
    love: {
      score: number
      description: string
      advice: string
    }
    health: {
      score: number
      description: string
      advice: string
    }
    finance: {
      score: number
      description: string
      advice: string
    }
  }
  planetaryInfluences: {
    planet: string
    influence: "positive" | "negative" | "neutral"
    strength: number
    description: string
  }[]
  remedies: string[]
  spiritualQuote: {
    text: string
    source: string
  }
}

export interface WeeklyForecast {
  weekStart: string
  weekEnd: string
  bestDays: string[]
  challengingDays: string[]
  overallTheme: string
  keyEvents: {
    date: string
    event: string
    significance: string
  }[]
  weeklyAdvice: string
}

export interface MonthlyInsight {
  month: string
  year: number
  majorTransits: {
    planet: string
    fromSign: string
    toSign: string
    date: string
    effects: string[]
  }[]
  keyThemes: string[]
  opportunities: string[]
  challenges: string[]
  recommendations: string[]
}

interface PredictionState {
  dailyPrediction: DailyPrediction | null
  weeklyForecast: WeeklyForecast | null
  monthlyInsight: MonthlyInsight | null
  predictionHistory: DailyPrediction[]
  loading: boolean
  error: string | null
  lastUpdated: string | null
}

const initialState: PredictionState = {
  dailyPrediction: null,
  weeklyForecast: null,
  monthlyInsight: null,
  predictionHistory: [],
  loading: false,
  error: null,
  lastUpdated: null,
}

const predictionSlice = createSlice({
  name: "prediction",
  initialState,
  reducers: {
    setDailyPrediction: (state, action: PayloadAction<DailyPrediction>) => {
      state.dailyPrediction = action.payload
      state.lastUpdated = new Date().toISOString()
    },
    setWeeklyForecast: (state, action: PayloadAction<WeeklyForecast>) => {
      state.weeklyForecast = action.payload
    },
    setMonthlyInsight: (state, action: PayloadAction<MonthlyInsight>) => {
      state.monthlyInsight = action.payload
    },
    addToPredictionHistory: (state, action: PayloadAction<DailyPrediction>) => {
      state.predictionHistory.unshift(action.payload)
      // Keep only last 30 days
      if (state.predictionHistory.length > 30) {
        state.predictionHistory = state.predictionHistory.slice(0, 30)
      }
    },
    updateCategoryScore: (
      state,
      action: PayloadAction<{ category: keyof DailyPrediction["categories"]; score: number }>,
    ) => {
      if (state.dailyPrediction) {
        state.dailyPrediction.categories[action.payload.category].score = action.payload.score
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
  setDailyPrediction,
  setWeeklyForecast,
  setMonthlyInsight,
  addToPredictionHistory,
  updateCategoryScore,
  setLoading,
  setError,
} = predictionSlice.actions

export default predictionSlice.reducer
