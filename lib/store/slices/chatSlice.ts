import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface ChatMessage {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: string
  reactions?: ("like" | "dislike" | "bookmark")[]
  isBookmarked?: boolean
  category?: "general" | "career" | "relationships" | "health" | "finance" | "spiritual"
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: string
  updatedAt: string
  category: string
  rating?: number
  duration?: number // in minutes
  isActive: boolean
}

interface ChatState {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  isTyping: boolean
  loading: boolean
  error: string | null
  quickSuggestions: string[]
  bookmarkedMessages: ChatMessage[]
}

const initialState: ChatState = {
  currentSession: null,
  sessions: [],
  isTyping: false,
  loading: false,
  error: null,
  quickSuggestions: [
    "What does my birth chart say about my career?",
    "How will this week be for relationships?",
    "What are my current planetary influences?",
    "Tell me about my current Dasha period",
    "What remedies do you suggest for me?",
    "How can I improve my health according to astrology?",
  ],
  bookmarkedMessages: [],
}

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    createNewSession: (state, action: PayloadAction<{ title?: string; category?: string }>) => {
      const newSession: ChatSession = {
        id: Date.now().toString(),
        title: action.payload.title || "New Chat",
        messages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        category: action.payload.category || "general",
        isActive: true,
      }

      // Set previous session as inactive
      if (state.currentSession) {
        state.currentSession.isActive = false
      }

      state.currentSession = newSession
      state.sessions.unshift(newSession)
    },
    setCurrentSession: (state, action: PayloadAction<string>) => {
      const session = state.sessions.find((s) => s.id === action.payload)
      if (session) {
        // Set all sessions as inactive
        state.sessions.forEach((s) => (s.isActive = false))
        session.isActive = true
        state.currentSession = session
      }
    },
    addMessage: (state, action: PayloadAction<Omit<ChatMessage, "id" | "timestamp">>) => {
      if (state.currentSession) {
        const message: ChatMessage = {
          ...action.payload,
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
        }
        state.currentSession.messages.push(message)
        state.currentSession.updatedAt = new Date().toISOString()

        // Update session title if it's the first user message
        if (message.role === "user" && state.currentSession.messages.length === 1) {
          state.currentSession.title = message.content.slice(0, 50) + (message.content.length > 50 ? "..." : "")
        }
      }
    },
    updateMessage: (state, action: PayloadAction<{ messageId: string; updates: Partial<ChatMessage> }>) => {
      if (state.currentSession) {
        const messageIndex = state.currentSession.messages.findIndex((m) => m.id === action.payload.messageId)
        if (messageIndex !== -1) {
          state.currentSession.messages[messageIndex] = {
            ...state.currentSession.messages[messageIndex],
            ...action.payload.updates,
          }
        }
      }
    },
    toggleBookmark: (state, action: PayloadAction<string>) => {
      if (state.currentSession) {
        const message = state.currentSession.messages.find((m) => m.id === action.payload)
        if (message) {
          message.isBookmarked = !message.isBookmarked
          if (message.isBookmarked) {
            state.bookmarkedMessages.push(message)
          } else {
            state.bookmarkedMessages = state.bookmarkedMessages.filter((m) => m.id !== action.payload)
          }
        }
      }
    },
    rateSession: (state, action: PayloadAction<{ sessionId: string; rating: number }>) => {
      const session = state.sessions.find((s) => s.id === action.payload.sessionId)
      if (session) {
        session.rating = action.payload.rating
      }
    },
    deleteSession: (state, action: PayloadAction<string>) => {
      state.sessions = state.sessions.filter((s) => s.id !== action.payload)
      if (state.currentSession?.id === action.payload) {
        state.currentSession = null
      }
    },
    setIsTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload
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
  createNewSession,
  setCurrentSession,
  addMessage,
  updateMessage,
  toggleBookmark,
  rateSession,
  deleteSession,
  setIsTyping,
  setLoading,
  setError,
} = chatSlice.actions

export default chatSlice.reducer
