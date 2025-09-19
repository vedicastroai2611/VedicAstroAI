import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import birthChartReducer from "./slices/birthChartSlice"
import planetaryReducer from "./slices/planetarySlice"
import dashaReducer from "./slices/dashaSlice"
import predictionReducer from "./slices/predictionSlice"
import chatReducer from "./slices/chatSlice"
import settingsReducer from "./slices/settingsSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    birthChart: birthChartReducer,
    planetary: planetaryReducer,
    dasha: dashaReducer,
    prediction: predictionReducer,
    chat: chatReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
