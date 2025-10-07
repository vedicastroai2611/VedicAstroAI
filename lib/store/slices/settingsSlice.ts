import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface NotificationSettings {
  dailyHoroscope: boolean
  weeklyForecast: boolean
  dashaTransitions: boolean
  planetaryTransits: boolean
  specialEvents: boolean
  emailNotifications: boolean
  pushNotifications: boolean
}

export interface PrivacySettings {
  profileVisibility: "public" | "private" | "friends"
  shareReadings: boolean
  dataCollection: boolean
  analyticsTracking: boolean
  marketingEmails: boolean
}

export interface DisplaySettings {
  theme: "light" | "dark" | "auto"
  language: "en" | "hi" | "sa" // English, Hindi, Sanskrit
  dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD"
  timeFormat: "12h" | "24h"
  showSanskritNames: boolean
  showDegreeMinutes: boolean
  chartStyle: "north" | "south" | "western"
}

export interface AstrologySettings {
  calculationSystem: "lahiri" | "krishnamurti" | "raman"
  houseSystem: "placidus" | "koch" | "equal" | "whole"
  orb: number // in degrees
  showRetrogradePlanets: boolean
  showNakshatras: boolean
  showNavamsa: boolean
  defaultDashaSystem: "vimshottari" | "ashtottari" | "yogini"
}

interface SettingsState {
  notifications: NotificationSettings
  privacy: PrivacySettings
  display: DisplaySettings
  astrology: AstrologySettings
  loading: boolean
  error: string | null
  lastSaved: string | null
}

const initialState: SettingsState = {
  notifications: {
    dailyHoroscope: true,
    weeklyForecast: true,
    dashaTransitions: true,
    planetaryTransits: false,
    specialEvents: true,
    emailNotifications: true,
    pushNotifications: false,
  },
  privacy: {
    profileVisibility: "private",
    shareReadings: false,
    dataCollection: true,
    analyticsTracking: true,
    marketingEmails: false,
  },
  display: {
    theme: "dark",
    language: "en",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "12h",
    showSanskritNames: true,
    showDegreeMinutes: true,
    chartStyle: "north",
  },
  astrology: {
    calculationSystem: "lahiri",
    houseSystem: "placidus",
    orb: 8,
    showRetrogradePlanets: true,
    showNakshatras: true,
    showNavamsa: false,
    defaultDashaSystem: "vimshottari",
  },
  loading: false,
  error: null,
  lastSaved: null,
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateNotificationSettings: (state, action: PayloadAction<Partial<NotificationSettings>>) => {
      state.notifications = { ...state.notifications, ...action.payload }
      state.lastSaved = new Date().toISOString()
    },
    updatePrivacySettings: (state, action: PayloadAction<Partial<PrivacySettings>>) => {
      state.privacy = { ...state.privacy, ...action.payload }
      state.lastSaved = new Date().toISOString()
    },
    updateDisplaySettings: (state, action: PayloadAction<Partial<DisplaySettings>>) => {
      state.display = { ...state.display, ...action.payload }
      state.lastSaved = new Date().toISOString()
    },
    updateAstrologySettings: (state, action: PayloadAction<Partial<AstrologySettings>>) => {
      state.astrology = { ...state.astrology, ...action.payload }
      state.lastSaved = new Date().toISOString()
    },
    resetToDefaults: (state, action: PayloadAction<"notifications" | "privacy" | "display" | "astrology">) => {
      switch (action.payload) {
        case "notifications":
          state.notifications = initialState.notifications
          break
        case "privacy":
          state.privacy = initialState.privacy
          break
        case "display":
          state.display = initialState.display
          break
        case "astrology":
          state.astrology = initialState.astrology
          break
      }
      state.lastSaved = new Date().toISOString()
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
  updateNotificationSettings,
  updatePrivacySettings,
  updateDisplaySettings,
  updateAstrologySettings,
  resetToDefaults,
  setLoading,
  setError,
} = settingsSlice.actions

export default settingsSlice.reducer
