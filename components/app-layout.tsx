import type React from "react"
import { MainNav } from "@/components/main-nav"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main>{children}</main>
    </div>
  )
}
