"use client"

import { useState } from "react"
import { Search, MoreVertical, MessageSquare, Clock, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AppLayout } from "@/components/app-layout"

export default function SessionHistoryPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [expandedSession, setExpandedSession] = useState<string | null>(null)

  const stats = {
    totalSessions: 24,
    totalTime: "8.5h",
    avgRating: 4.8,
  }

  const filters = ["All", "This Week", "This Month", "Career"]

  const sessions = [
    {
      id: "1",
      title: "Career Guidance Session",
      timestamp: "Today, 2:30 PM",
      duration: "45 min",
      preview:
        "What does my 10th house Saturn indicate about my career growth this year? I'm considering a job change...",
      messages: 12,
      rating: 4.9,
      category: "Career",
      icon: "⭐",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "2",
      title: "Love & Relationships",
      timestamp: "Yesterday, 7:45 PM",
      duration: "32 min",
      preview:
        "Venus is in my 7th house. What does this mean for my marriage prospects? When is the right time to get married?",
      messages: 8,
      rating: 4.7,
      category: "Love",
      icon: "💕",
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: "3",
      title: "Financial Consultation",
      timestamp: "Dec 15, 4:20 PM",
      duration: "28 min",
      preview:
        "My Jupiter is in 2nd house. How will this affect my financial situation and property investments this year?",
      messages: 6,
      rating: 4.8,
      category: "Finance",
      icon: "💰",
      color: "bg-green-100 text-green-800",
    },
    {
      id: "4",
      title: "Health & Wellness",
      timestamp: "Dec 12, 11:15 AM",
      duration: "38 min",
      preview: "Mars in my 6th house is concerning me. What precautions should I take for my health this year?",
      messages: 10,
      rating: 4.6,
      category: "Health",
      icon: "💙",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "5",
      title: "Spiritual Guidance",
      timestamp: "Dec 8, 3:00 PM",
      duration: "52 min",
      preview: "I'm going through a difficult Rahu Mahadasha. How can I navigate this period spiritually?",
      messages: 15,
      rating: 4.9,
      category: "Spiritual",
      icon: "🕉️",
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const filteredSessions =
    activeFilter === "All"
      ? sessions
      : sessions.filter((session) =>
          activeFilter === "Career"
            ? session.category === "Career"
            : activeFilter === "This Week"
              ? ["Today", "Yesterday"].some((time) => session.timestamp.includes(time))
              : activeFilter === "This Month"
                ? session.timestamp.includes("Dec")
                : true,
        )

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Session History</h1>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.totalSessions}</div>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stats.totalTime}</div>
                <p className="text-sm text-muted-foreground">Total Time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stats.avgRating}</div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
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

          {/* Sessions List */}
          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <Card key={session.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${session.color}`}>
                      {session.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{session.title}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedSession(expandedSession === session.id ? null : session.id)}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              expandedSession === session.id ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {session.timestamp} • {session.duration}
                      </p>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">"{session.preview}"</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {session.messages} messages
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {session.duration}
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{session.rating}</span>
                        </div>
                      </div>

                      {expandedSession === session.id && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View Full Session
                            </Button>
                            <Button size="sm" variant="outline">
                              Continue Chat
                            </Button>
                            <Button size="sm" variant="outline">
                              Export
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSessions.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="text-muted-foreground mb-4">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No sessions found for the selected filter.</p>
                </div>
                <Button variant="outline" onClick={() => setActiveFilter("All")}>
                  Show All Sessions
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
