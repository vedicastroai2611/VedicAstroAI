"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"

export default function ForecastPage() {
  const [activeTab, setActiveTab] = useState<"daily" | "weekly">("daily")

  const dailyForecast = {
    status: "Favorable",
    message: "Jupiter's blessing brings opportunities in career matters. Focus on communication and networking today.",
    luckyNumber: 7,
    luckyColor: "Yellow",
    moonPhase: "Waxing",
    categories: [
      {
        name: "Career",
        description: "Professional growth",
        status: "Excellent",
        icon: "💼",
        color: "bg-green-100 text-green-800",
      },
      {
        name: "Love",
        description: "Relationships",
        status: "Moderate",
        icon: "💕",
        color: "bg-yellow-100 text-yellow-800",
      },
      {
        name: "Health",
        description: "Physical wellness",
        status: "Good",
        icon: "💙",
        color: "bg-blue-100 text-blue-800",
      },
      {
        name: "Finance",
        description: "Money matters",
        status: "Cautious",
        icon: "💰",
        color: "bg-red-100 text-red-800",
      },
    ],
    planetaryInfluence: [
      {
        planet: "Sun in Aquarius",
        description: "Innovation & leadership",
        strength: "Strong",
        color: "bg-orange-100 text-orange-800",
      },
      {
        planet: "Moon in Gemini",
        description: "Communication focus",
        strength: "Moderate",
        color: "bg-blue-100 text-blue-800",
      },
      {
        planet: "Jupiter in Taurus",
        description: "Stability & growth",
        strength: "Favorable",
        color: "bg-green-100 text-green-800",
      },
    ],
    quote: {
      text: "The soul is not born, and it does not die. It is not slain when the body is slain.",
      source: "Bhagavad Gita 2.20",
    },
  }

  const weeklyForecast = {
    period: "Feb 5 - 11, 2024",
    overview:
      "A transformative week ahead with Mercury retrograde ending mid-week. Focus on completing pending projects.",
    bestDay: "Thursday",
    challengingDay: "Tuesday",
    dailyBreakdown: [
      {
        day: "Monday",
        status: "Good",
        description: "Start new ventures. Moon favors beginnings.",
        color: "border-l-green-500",
      },
      {
        day: "Tuesday",
        status: "Cautious",
        description: "Avoid major decisions. Mars creates tension.",
        color: "border-l-red-500",
      },
      {
        day: "Wednesday",
        status: "Neutral",
        description: "Focus on routine tasks and planning.",
        color: "border-l-yellow-500",
      },
      {
        day: "Thursday",
        status: "Excellent",
        description: "Jupiter's blessing. Perfect for important meetings.",
        color: "border-l-green-500",
      },
      {
        day: "Friday",
        status: "Creative",
        description: "Venus enhances artistic pursuits and relationships.",
        color: "border-l-blue-500",
      },
    ],
    weekend: {
      description: "Time for meditation and self-reflection.",
      tag: "Spiritual",
    },
    quote: {
      text: "Just as a person sheds worn-out garments and takes other new ones, so does the soul cast off worn-out bodies and take others that are new.",
      source: "Bhagavad Gita 2.22",
    },
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-primary/30 bg-gradient-to-r from-background via-primary/5 to-accent/5 relative overflow-hidden">
          {/* Mystical background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-6 relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-foreground text-glow">Forecast</h1>
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/20 hover-lift">
                <Bell className="h-4 w-4" />
              </Button>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-primary/10 border border-primary/20 rounded-lg p-1 max-w-md mx-auto mystical-border">
              <button
                onClick={() => setActiveTab("daily")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === "daily" 
                    ? "bg-primary text-primary-foreground mystical-glow" 
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/20"
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => setActiveTab("weekly")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === "weekly" 
                    ? "bg-primary text-primary-foreground mystical-glow" 
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/20"
                }`}
              >
                Weekly
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {activeTab === "daily" ? (
            <div className="space-y-6">
              {/* Today's Forecast */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-foreground text-glow">Today's Forecast</h2>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 mystical-border">
                      {dailyForecast.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">{dailyForecast.message}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover-lift">
                      <p className="text-sm text-muted-foreground">Lucky Number</p>
                      <p className="text-2xl font-bold text-primary mystical-glow">{dailyForecast.luckyNumber}</p>
                    </div>
                    <div className="text-center p-4 rounded-lg border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-all duration-300 hover-lift">
                      <p className="text-sm text-muted-foreground">Lucky Color</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full mystical-glow"></div>
                        <p className="font-semibold text-foreground">{dailyForecast.luckyColor}</p>
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-lg border border-secondary/20 bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 hover-lift">
                      <p className="text-sm text-muted-foreground">Moon Phase</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 bg-muted-foreground rounded-full mystical-glow"></div>
                        <p className="font-semibold text-foreground">{dailyForecast.moonPhase}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Forecast Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dailyForecast.categories.map((category, index) => (
                  <Card key={category.name} className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl float-animation" style={{ animationDelay: `${index * 0.2}s` }}>{category.icon}</div>
                          <div>
                            <h3 className="font-semibold text-foreground">{category.name}</h3>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                        <Badge className={`${category.color} border-0 mystical-border`}>{category.status}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quote */}
              <Card className="border-2 border-accent/50 bg-accent/5 backdrop-blur-sm card-mystical text-reveal animate-delay-400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl opacity-80 float-animation">🕉️</div>
                    <div>
                      <blockquote className="text-lg mb-2 text-foreground italic">"{dailyForecast.quote.text}"</blockquote>
                      <cite className="text-sm text-muted-foreground">- {dailyForecast.quote.source}</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Today's Planetary Influence */}
              <Card className="border-primary/30 bg-card/50 backdrop-blur-sm card-mystical text-reveal animate-delay-500">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-foreground text-glow">Today's Planetary Influence</h2>
                  <div className="space-y-4">
                    {dailyForecast.planetaryInfluence.map((influence, index) => (
                      <div
                        key={influence.planet}
                        className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 hover-lift"
                      >
                        <div>
                          <h3 className="font-semibold text-foreground">{influence.planet}</h3>
                          <p className="text-sm text-muted-foreground">{influence.description}</p>
                        </div>
                        <Badge className={`${influence.color} mystical-border`}>{influence.strength}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-6">
              {/* This Week's Forecast */}
              <Card className="bg-black border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">This Week's Forecast</h2>
                    <p className="text-sm text-gray-400">{weeklyForecast.period}</p>
                  </div>
                  <p className="text-gray-300 mb-6">{weeklyForecast.overview}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-black text-white rounded-lg border border-green-500">
                      <p className="text-sm text-gray-300">Best Day</p>
                      <p className="text-lg font-bold text-green-400">{weeklyForecast.bestDay}</p>
                    </div>
                    <div className="text-center p-4 bg-black text-white rounded-lg border border-red-500">
                      <p className="text-sm text-gray-300">Challenging Day</p>
                      <p className="text-lg font-bold text-red-400">{weeklyForecast.challengingDay}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Breakdown */}
              <div className="space-y-4">
                {weeklyForecast.dailyBreakdown.map((day) => (
                  <Card key={day.day} className={`border-l-4 ${day.color} bg-black border-purple-500/30`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-white">{day.day}</h3>
                          <p className="text-sm text-gray-400">{day.description}</p>
                        </div>
                        <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                          {day.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Weekend */}
              <Card className="border-l-4 border-l-purple-500 bg-black border-purple-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">Weekend</h3>
                      <p className="text-sm text-gray-400">{weeklyForecast.weekend.description}</p>
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      {weeklyForecast.weekend.tag}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Quote */}
              <Card className="border-2 border-pink-500 bg-black/90 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl opacity-80">🕉️</div>
                    <div>
                      <blockquote className="text-lg mb-2">"{weeklyForecast.quote.text}"</blockquote>
                      <cite className="text-sm opacity-80">- {weeklyForecast.quote.source}</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
