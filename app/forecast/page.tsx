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
      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="bg-black border-b border-purple-500/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-white">Forecast</h1>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Bell className="h-4 w-4" />
              </Button>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-white/20 rounded-lg p-1 max-w-md mx-auto">
              <button
                onClick={() => setActiveTab("daily")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "daily" ? "bg-white text-purple-600" : "text-white hover:bg-white/10"
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => setActiveTab("weekly")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "weekly" ? "bg-white text-purple-600" : "text-white hover:bg-white/10"
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
              <Card className="bg-black border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">Today's Forecast</h2>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      {dailyForecast.status}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-6">{dailyForecast.message}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Lucky Number</p>
                      <p className="text-2xl font-bold text-purple-400">{dailyForecast.luckyNumber}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Lucky Color</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <p className="font-semibold text-white">{dailyForecast.luckyColor}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Moon Phase</p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <p className="font-semibold text-white">{dailyForecast.moonPhase}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Forecast Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dailyForecast.categories.map((category) => (
                  <Card key={category.name} className="bg-black border-purple-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{category.icon}</div>
                          <div>
                            <h3 className="font-semibold text-white">{category.name}</h3>
                            <p className="text-sm text-gray-400">{category.description}</p>
                          </div>
                        </div>
                        <Badge className={`${category.color} border-0`}>{category.status}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quote */}
              <Card className="border-2 border-pink-500 bg-black/90 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl opacity-80">🕉️</div>
                    <div>
                      <blockquote className="text-lg mb-2">"{dailyForecast.quote.text}"</blockquote>
                      <cite className="text-sm opacity-80">- {dailyForecast.quote.source}</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Today's Planetary Influence */}
              <Card className="bg-black border-purple-500/30">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-white">Today's Planetary Influence</h2>
                  <div className="space-y-4">
                    {dailyForecast.planetaryInfluence.map((influence) => (
                      <div
                        key={influence.planet}
                        className="flex items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-purple-500/20"
                      >
                        <div>
                          <h3 className="font-semibold text-white">{influence.planet}</h3>
                          <p className="text-sm text-gray-400">{influence.description}</p>
                        </div>
                        <Badge className={influence.color}>{influence.strength}</Badge>
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
