"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { AppLayout } from "@/components/app-layout"
import {
  Star,
  Moon,
  Sun,
  User,
  MessageCircle,
  Calendar,
  Clock,
  TrendingUp,
  Heart,
  Brain,
  Briefcase,
  ChevronRight,
  Zap,
  Shield,
  Target,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-gradient-to-r from-background to-muted/20">
          <div className="container mx-auto px-6 py-8 max-w-7xl">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Priya</h1>
                <p className="text-muted-foreground">Your cosmic journey continues today</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Today's Energy</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Highly Favorable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Column - Profile & Current Period */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="pt-6 text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                      <AvatarImage src="/woman-profile.png" />
                      <AvatarFallback className="text-2xl">PS</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 h-7 w-7 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <Star className="h-4 w-4 text-accent-foreground" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Priya Sharma</h2>
                  <p className="text-muted-foreground mb-3">Born: 15 Aug 1990, 14:30, Mumbai</p>
                  <div className="flex flex-col space-y-2">
                    <Badge variant="secondary" className="justify-center">
                      Virgo Ascendant
                    </Badge>
                    <Badge variant="secondary" className="justify-center">
                      Moon in Cancer
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Current Dasha Period */}
              <Card className="border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-foreground text-lg">
                    <Clock className="h-5 w-5 mr-2 text-accent" />
                    Current Dasha Period
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-accent text-lg">Venus Mahadasha</span>
                      <span className="text-sm text-muted-foreground">2019 - 2039</span>
                    </div>
                    <Progress value={35} className="h-3" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>7 years completed</span>
                      <span>13 years remaining</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Mercury Antardasha</span>
                      <span className="text-xs text-muted-foreground">Till Mar 2025</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-foreground text-lg">
                    <Zap className="h-5 w-5 mr-2 text-accent" />
                    Today's Lucky Elements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-lg bg-green-500/10">
                      <p className="text-xs text-muted-foreground mb-1">Color</p>
                      <p className="font-semibold text-foreground">Green</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-blue-500/10">
                      <p className="text-xs text-muted-foreground mb-1">Number</p>
                      <p className="font-semibold text-foreground">7</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-purple-500/10">
                      <p className="text-xs text-muted-foreground mb-1">Direction</p>
                      <p className="font-semibold text-foreground">North</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-orange-500/10">
                      <p className="text-xs text-muted-foreground mb-1">Time</p>
                      <p className="font-semibold text-foreground">2-4 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Middle Column - Planetary Positions & Houses */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-foreground text-lg">
                    <Sun className="h-5 w-5 mr-2 text-accent" />
                    Current Planetary Positions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <Sun className="h-7 w-7 text-yellow-500" />
                      <div>
                        <p className="font-semibold text-foreground">Sun</p>
                        <p className="text-sm text-muted-foreground">Leo 23°</p>
                        <p className="text-xs text-muted-foreground">12th House</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <Moon className="h-7 w-7 text-blue-500" />
                      <div>
                        <p className="font-semibold text-foreground">Moon</p>
                        <p className="text-sm text-muted-foreground">Cancer 7°</p>
                        <p className="text-xs text-muted-foreground">11th House</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div className="h-7 w-7 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-sm text-white font-bold">♂</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Mars</p>
                        <p className="text-sm text-muted-foreground">Aries 15°</p>
                        <p className="text-xs text-muted-foreground">8th House</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="h-7 w-7 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-sm text-white font-bold">☿</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Mercury</p>
                        <p className="text-sm text-muted-foreground">Virgo 2°</p>
                        <p className="text-xs text-muted-foreground">1st House</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-pink-500/10 border border-pink-500/20">
                      <div className="h-7 w-7 bg-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-sm text-white font-bold">♀</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Venus</p>
                        <p className="text-sm text-muted-foreground">Libra 18°</p>
                        <p className="text-xs text-muted-foreground">2nd House</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                      <div className="h-7 w-7 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-sm text-white font-bold">♃</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Jupiter</p>
                        <p className="text-sm text-muted-foreground">Taurus 9°</p>
                        <p className="text-xs text-muted-foreground">9th House</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/planets">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Complete Planetary Analysis
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-foreground text-lg">
                    <div className="h-5 w-5 mr-2 bg-primary rounded flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">#</span>
                    </div>
                    Birth Chart Houses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { house: "1st", sign: "Virgo", lord: "Mercury", strength: "Strong" },
                      { house: "2nd", sign: "Libra", lord: "Venus", strength: "Good" },
                      { house: "3rd", sign: "Scorpio", lord: "Mars", strength: "Moderate" },
                      { house: "4th", sign: "Sagittarius", lord: "Jupiter", strength: "Strong" },
                      { house: "5th", sign: "Capricorn", lord: "Saturn", strength: "Weak" },
                      { house: "6th", sign: "Aquarius", lord: "Saturn", strength: "Good" },
                      { house: "7th", sign: "Pisces", lord: "Jupiter", strength: "Strong" },
                      { house: "8th", sign: "Aries", lord: "Mars", strength: "Moderate" },
                      { house: "9th", sign: "Taurus", lord: "Venus", strength: "Excellent" },
                      { house: "10th", sign: "Gemini", lord: "Mercury", strength: "Good" },
                      { house: "11th", sign: "Cancer", lord: "Moon", strength: "Strong" },
                      { house: "12th", sign: "Leo", lord: "Sun", strength: "Moderate" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="text-center p-3 rounded-lg bg-muted/30 border border-border hover:bg-muted/50 transition-colors"
                      >
                        <p className="text-xs text-muted-foreground mb-1">{item.house} House</p>
                        <p className="font-semibold text-foreground text-sm">{item.sign}</p>
                        <p className="text-xs text-muted-foreground">{item.lord}</p>
                        <div
                          className={`text-xs px-2 py-1 rounded mt-1 ${
                            item.strength === "Excellent"
                              ? "bg-green-500/20 text-green-600"
                              : item.strength === "Strong"
                                ? "bg-blue-500/20 text-blue-600"
                                : item.strength === "Good"
                                  ? "bg-yellow-500/20 text-yellow-600"
                                  : item.strength === "Moderate"
                                    ? "bg-orange-500/20 text-orange-600"
                                    : "bg-red-500/20 text-red-600"
                          }`}
                        >
                          {item.strength}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/houses">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Interactive Birth Chart
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Key Insights & Actions */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-foreground text-lg">
                    <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                    Today's Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Career Focus */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent">
                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-accent mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Career Focus</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Venus Mahadasha brings opportunities in creative fields and partnerships
                        </p>
                        <div className="flex items-center space-x-1">
                          <Activity className="h-3 w-3 text-accent" />
                          <span className="text-xs text-accent font-medium">85% Favorable</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Relationships */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary">
                    <div className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Relationships</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Strong Moon in 11th house indicates supportive friendships
                        </p>
                        <div className="flex items-center space-x-1">
                          <Activity className="h-3 w-3 text-primary" />
                          <span className="text-xs text-primary font-medium">92% Positive</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Health */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-green-500/5 border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-green-500 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Health & Wellness</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Mercury in ascendant promotes mental clarity and communication
                        </p>
                        <div className="flex items-center space-x-1">
                          <Activity className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-green-500 font-medium">78% Stable</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border-l-4 border-yellow-500">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Finance</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Jupiter in 9th house suggests growth through investments
                        </p>
                        <div className="flex items-center space-x-1">
                          <Activity className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs text-yellow-500 font-medium">70% Growth</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/chat">
                    <Button variant="outline" className="w-full justify-between bg-transparent hover:bg-muted/50 h-12">
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-3" />
                        Ask AI Astrologer
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/forecast">
                    <Button variant="outline" className="w-full justify-between bg-transparent hover:bg-muted/50 h-12">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-3" />
                        Daily Predictions
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/history">
                    <Button variant="outline" className="w-full justify-between bg-transparent hover:bg-muted/50 h-12">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-3" />
                        Session History
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/settings">
                    <Button variant="outline" className="w-full justify-between bg-transparent hover:bg-muted/50 h-12">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-3" />
                        Manage Profiles
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border bg-gradient-to-br from-purple-500/5 to-blue-500/5">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-foreground text-lg">
                    <Shield className="h-5 w-5 mr-2 text-purple-500" />
                    Spiritual Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <p className="text-sm text-muted-foreground italic">
                      "The stars align to guide your path. Trust in the cosmic wisdom that flows through you."
                    </p>
                    <div className="flex justify-center space-x-2">
                      <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <div
                        className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="h-2 w-2 bg-accent rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
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
