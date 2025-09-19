"use client"

import { useState } from "react"
import { TrendingUp, Calendar, Star, Brain, Heart, Briefcase, Filter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AppLayout } from "@/components/app-layout"

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All Time")

  const filters = ["All Time", "This Month", "This Week", "Career", "Love", "Health"]

  const insights = [
    {
      id: 1,
      title: "Career Growth Pattern",
      category: "Career",
      icon: <Briefcase className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      description: "Your Jupiter Mahadasha shows consistent career advancement",
      trend: "+15%",
      trendColor: "text-green-500",
      details: "Based on 12 career consultations over 6 months",
      date: "Last updated: Today",
    },
    {
      id: 2,
      title: "Relationship Harmony",
      category: "Love",
      icon: <Heart className="h-5 w-5" />,
      color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
      description: "Venus transit indicates improving relationship dynamics",
      trend: "+8%",
      trendColor: "text-green-500",
      details: "Analysis from 8 relationship readings",
      date: "Last updated: Yesterday",
    },
    {
      id: 3,
      title: "Mental Clarity",
      category: "Health",
      icon: <Brain className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      description: "Mercury's position enhances cognitive abilities",
      trend: "+12%",
      trendColor: "text-green-500",
      details: "Tracked through 6 wellness consultations",
      date: "Last updated: 2 days ago",
    },
  ]

  const monthlyStats = {
    totalReadings: 18,
    avgSatisfaction: 4.8,
    topConcern: "Career",
    improvement: "+23%",
  }

  const planetaryInfluences = [
    {
      planet: "Jupiter",
      house: "10th House",
      influence: "Career Success",
      strength: 85,
      color: "bg-yellow-500",
    },
    {
      planet: "Venus",
      house: "7th House",
      influence: "Relationships",
      strength: 72,
      color: "bg-pink-500",
    },
    {
      planet: "Mercury",
      house: "1st House",
      influence: "Communication",
      strength: 68,
      color: "bg-green-500",
    },
  ]

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Insights</h1>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 max-w-6xl">
          {/* Monthly Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{monthlyStats.totalReadings}</div>
                <p className="text-sm text-muted-foreground">Total Readings</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{monthlyStats.avgSatisfaction}</div>
                <p className="text-sm text-muted-foreground">Avg Satisfaction</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{monthlyStats.topConcern}</div>
                <p className="text-sm text-muted-foreground">Top Concern</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{monthlyStats.improvement}</div>
                <p className="text-sm text-muted-foreground">Improvement</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="whitespace-nowrap"
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Key Insights */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                    Key Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {insights.map((insight) => (
                    <div key={insight.id} className={`p-4 rounded-lg border ${insight.color}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {insight.icon}
                          <div>
                            <h3 className="font-semibold">{insight.title}</h3>
                            <Badge variant="secondary" className="text-xs mt-1">
                              {insight.category}
                            </Badge>
                          </div>
                        </div>
                        <div className={`text-sm font-semibold ${insight.trendColor}`}>{insight.trend}</div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{insight.details}</span>
                        <span>{insight.date}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Planetary Influences */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-accent" />
                    Current Influences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {planetaryInfluences.map((influence) => (
                    <div key={influence.planet} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-sm">{influence.planet}</p>
                          <p className="text-xs text-muted-foreground">{influence.house}</p>
                        </div>
                        <span className="text-xs font-medium">{influence.strength}%</span>
                      </div>
                      <Progress value={influence.strength} className="h-2" />
                      <p className="text-xs text-muted-foreground">{influence.influence}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-accent" />
                    Upcoming Transits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-semibold text-sm">Mars Transit</p>
                    <p className="text-xs text-muted-foreground">Entering 6th House - March 15</p>
                    <Badge variant="secondary" className="text-xs mt-1">
                      Health Focus
                    </Badge>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-semibold text-sm">Venus Transit</p>
                    <p className="text-xs text-muted-foreground">Entering 7th House - April 2</p>
                    <Badge variant="secondary" className="text-xs mt-1">
                      Relationships
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
