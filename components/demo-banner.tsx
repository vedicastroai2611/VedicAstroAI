"use client"

import { Info, X } from "lucide-react"
import { useState } from "react"

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Info className="h-4 w-4" />
          <span className="text-sm font-medium">
            🌟 Demo Mode: This app is displaying sample data for demonstration purposes
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close demo banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}