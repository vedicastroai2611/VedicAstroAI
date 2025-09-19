import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface UserProfile {
  id: string
  name: string
  email: string
  dateOfBirth: string
  timeOfBirth: string
  placeOfBirth: string
  latitude: number
  longitude: number
  timezone: string
  gender: "male" | "female" | "other"
  isVerified: boolean
  subscriptionType: "free" | "premium" | "pro"
  createdAt: string
  lastLoginAt: string
}

interface UserState {
  profile: UserProfile | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  profile: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload
      state.isAuthenticated = true
      state.error = null
    },
    updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload }
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    logout: (state) => {
      state.profile = null
      state.isAuthenticated = false
      state.error = null
    },
  },
})

export const { setUser, updateProfile, setLoading, setError, logout } = userSlice.actions
export default userSlice.reducer
