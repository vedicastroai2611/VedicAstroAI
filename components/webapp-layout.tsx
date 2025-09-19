"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface WebAppLayoutProps {
  children: React.ReactNode
  className?: string
}

export function WebAppLayout({ children, className }: WebAppLayoutProps) {
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Check if app is running in standalone mode (installed as PWA)
    const isStandaloneMode =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes("android-app://")

    setIsStandalone(isStandaloneMode)

    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration)
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError)
        })
    }
  }, [])

  return (
    <div
      className={cn(
        "min-h-screen bg-black text-white",
        isStandalone && "pt-safe-area-inset-top pb-safe-area-inset-bottom",
        className,
      )}
    >
      {children}
    </div>
  )
}
