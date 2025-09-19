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
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Profile & Current Period */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="pt-6 text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="h-20 w-20 border-4 border-background">
                      <AvatarImage src="/woman-profile.png" />
                      <AvatarFallback className="text-2xl">PS</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 h-6 w-6 bg-accent rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-accent-foreground" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">Priya Sharma</h2>
                  <p className="text-muted-foreground mb-2">Born: 15 Aug 1990, 14:30, Mumbai</p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <Badge variant="secondary">Virgo Ascendant</Badge>
                    <Badge variant="secondary">Moon in Cancer</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Current Dasha Period */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Clock className="h-5 w-5 mr-2 text-accent" />
                    Current Dasha Period
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-accent">Venus Mahadasha</span>
                      <span className="text-sm text-muted-foreground">2019 - 2039</span>
                    </div>
                    <Progress value={35} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>7 years completed</span>
                      <span>13 years remaining</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Mercury Antardasha</span>
                      <span className="text-xs text-muted-foreground">Till Mar 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Middle Column - Planetary Positions & Houses */}
            <div className="lg:col-span-1 space-y-6">
              {/* Planetary Positions */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Sun className="h-5 w-5 mr-2 text-accent" />
                    Planetary Positions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/10">
                      <Sun className="h-6 w-6 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">Leo 23°</p>
                        <p className="text-xs text-muted-foreground">12th House</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/10">
                      <Moon className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Cancer 7°</p>
                        <p className="text-xs text-muted-foreground">11th House</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-destructive/10">
                      <div className="h-6 w-6 bg-destructive rounded flex items-center justify-center">
                        <span className="text-xs text-destructive-foreground font-bold">♂</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Aries 15°</p>
                        <p className="text-xs text-muted-foreground">8th House</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/10">
                      <div className="h-6 w-6 bg-green-500 rounded flex items-center justify-center">
                        <span className="text-xs text-white font-bold">☿</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Virgo 2°</p>
                        <p className="text-xs text-muted-foreground">1st House</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/planets">
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      View All Planets
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Houses Overview */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <div className="h-5 w-5 mr-2 bg-primary rounded flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">#</span>
                    </div>
                    Houses Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground mb-1">1st House</p>
                      <p className="font-semibold text-foreground">Virgo</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground mb-1">2nd House</p>
                      <p className="font-semibold text-foreground">Libra</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <p className="text-xs text-muted-foreground mb-1">3rd House</p>
                      <p className="font-semibold text-foreground">Scorpio</p>
                    </div>
                  </div>
                  <Link href="/houses">
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      View Complete Chart
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Key Insights */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                    Key Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Career Focus */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent">
                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-accent mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Career Focus</h4>
                        <p className="text-sm text-muted-foreground">
                          Venus Mahadasha brings opportunities in creative fields and partnerships
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Relationships */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary">
                    <div className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Relationships</h4>
                        <p className="text-sm text-muted-foreground">
                          Strong Moon in 11th house indicates supportive friendships
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Health */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-green-500/5 border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-green-500 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Health</h4>
                        <p className="text-sm text-muted-foreground">
                          Mercury in ascendant promotes mental clarity and communication
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/chat">
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Ask AI Astrologer
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/forecast">
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Daily Predictions
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/history">
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Session History
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/settings">
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Manage Profiles
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
