"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
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
import { useAppSelector, useAppDispatch } from "@/lib/hooks/useRedux"
import React, { useEffect, ReactNode } from "react"
import { updatePlanetaryPositions } from "@/lib/store/slices/planetarySlice"
import { updateCurrentDasha } from "@/lib/store/slices/dashaSlice"
import { MainNav } from "@/components/main-nav"
import { setUserProfile } from "@/lib/store/slices/userSlice"

export default function DashboardPage() {
  const dispatch = useAppDispatch()
  const { profile } = useAppSelector((state) => state.user)
  const { planets } = useAppSelector((state) => state.planetary)
  const dasha = useAppSelector((state) => state.dasha)
  const mahadasha = dasha.mahadasha
  const antardasha = dasha.antardasha

  // Set up refresh interval for real-time data
  const [refreshInterval, setRefreshInterval] = React.useState(60000); // Default: 1 minute
  const [lastRefreshed, setLastRefreshed] = React.useState(new Date());

  // Fetch planetary positions from API with real-time data
  const fetchPlanetaryPositions = async () => {
    try {
      // Use current timestamp to ensure we get real-time data
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/planets?timestamp=${timestamp}`);
      if (!response.ok) {
        throw new Error('Failed to fetch planetary positions');
      }
      const data = await response.json();
      
      // Update the store with real-time planetary data
      if (data && data.planets && Array.isArray(data.planets)) {
        dispatch(updatePlanetaryPositions(data.planets));
        setLastRefreshed(new Date());
      } else {
        throw new Error('Invalid planetary data format');
      }
    } catch (error) {
      console.error('Error fetching planetary positions:', error);
      // Fallback to default data if API fails
      dispatch(
        updatePlanetaryPositions([
          {
            id: "sun",
            name: "Sun",
            sign: "Aries",
            degree: 15.5,
            isRetrograde: false,
            house: 10,
            aspectingPlanets: ["Jupiter", "Saturn"],
          },
          {
            id: "moon",
            name: "Moon",
            sign: "Cancer",
            degree: 8.2,
            isRetrograde: false,
            house: 1,
            aspectingPlanets: ["Mars"],
          },
          {
            id: "mars",
            name: "Mars",
            sign: "Capricorn",
            degree: 22.7,
            isRetrograde: false,
            house: 7,
            aspectingPlanets: ["Venus", "Mercury"],
          },
          {
            id: "mercury",
            name: "Mercury",
            sign: "Pisces",
            degree: 3.1,
            isRetrograde: true,
            house: 9,
            aspectingPlanets: ["Jupiter"],
          },
          {
            id: "jupiter",
            name: "Jupiter",
            sign: "Sagittarius",
            degree: 17.9,
            isRetrograde: false,
            house: 6,
            aspectingPlanets: ["Sun", "Mercury"],
          },
          {
            id: "venus",
            name: "Venus",
            sign: "Taurus",
            degree: 5.4,
            isRetrograde: false,
            house: 11,
            aspectingPlanets: ["Mars"],
          },
          {
            id: "saturn",
            name: "Saturn",
            sign: "Libra",
            degree: 29.8,
            isRetrograde: true,
            house: 4,
            aspectingPlanets: ["Sun"],
          },
          {
            id: "rahu",
            name: "Rahu",
            sign: "Gemini",
            degree: 12.3,
            isRetrograde: false,
            house: 12,
            aspectingPlanets: [],
          },
          {
            id: "ketu",
            name: "Ketu",
            sign: "Sagittarius",
            degree: 12.3,
            isRetrograde: false,
            house: 6,
            aspectingPlanets: [],
          },
        ])
      );
    }
  };

  useEffect(() => {
    // Fetch user profile
    dispatch(
      setUserProfile({
        id: "user-1",
        name: "Arjun Sharma",
        email: "arjun@example.com",
        birthDate: "1985-04-12T14:30:00Z",
        birthPlace: "New Delhi, India",
        profileImage: "/avatars/arjun.jpg",
      })
    );
    
    // Initial fetch
    fetchPlanetaryPositions();

    // Set up interval for periodic refreshes
    const refreshTimer = setInterval(() => {
      fetchPlanetaryPositions();
    }, refreshInterval);

    // Clean up interval on component unmount
    return () => {
      clearInterval(refreshTimer);
    };
  }, [dispatch, refreshInterval]);
  
  // Helper function to get planet icon
  const getPlanetIcon = (planetId: string): ReactNode => {
    switch (planetId.toLowerCase()) {
      case "sun":
        return <Sun className="h-7 w-7 text-yellow-500" />
      case "moon":
        return <Moon className="h-7 w-7 text-blue-500" />
      case "mars":
        return (
          <div className="h-7 w-7 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">♂</span>
          </div>
        )
      case "mercury":
        return (
          <div className="h-7 w-7 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">☿</span>
          </div>
        )
      case "jupiter":
        return (
          <div className="h-7 w-7 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">♃</span>
          </div>
        )
      case "venus":
        return (
          <div className="h-7 w-7 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">♀</span>
          </div>
        )
      case "saturn":
        return (
          <div className="h-7 w-7 bg-gray-500 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">♄</span>
          </div>
        )
      case "rahu":
        return (
          <div className="h-7 w-7 bg-purple-500/80 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">☊</span>
          </div>
        )
      case "ketu":
        return (
          <div className="h-7 w-7 bg-teal-500/80 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">☋</span>
          </div>
        )
      default:
        return <Star className="h-7 w-7 text-gray-500" />
    }
  }

  // Add useEffect for initial data fetching and interval setup
  React.useEffect(() => {
    // Initial fetch
    fetchPlanetaryPositions();

    // Set up interval for periodic refreshes
    const refreshTimer = setInterval(() => {
      fetchPlanetaryPositions();
    }, refreshInterval);

    // Simulate fetching dasha periods
    dispatch(
      updateCurrentDasha({
        mahadasha: {
          planet: "Jupiter",
          startDate: "2019-06-15",
          endDate: "2035-06-15",
          totalYears: 16,
          completedYears: 4,
          remainingYears: 12,
        },
        antardasha: {
          planet: "Venus",
          startDate: "2023-09-01",
          endDate: "2025-03-01",
          totalMonths: 14,
          completedMonths: 10,
          remainingMonths: 4
        },
      })
    );

    // Clean up interval on component unmount
    return () => {
      clearInterval(refreshTimer);
    };
  }, [dispatch, refreshInterval])

  

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-gradient-to-r from-background to-muted/20">
          <div className="container mx-auto px-6 py-8 max-w-7xl">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {profile?.name || "User"}</h1>
                <p className="text-muted-foreground">Your cosmic journey continues today</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Today's Energy</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    Positive
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                    Creative
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* Current Dasha Period */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-foreground text-lg">Current Dasha Period</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mahadasha */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {mahadasha && getPlanetIcon(mahadasha.planet)}
                          <div>
                            <p className="font-medium text-foreground">{mahadasha?.planet} Mahadasha</p>
                            <p className="text-xs text-muted-foreground">
                              {mahadasha?.startDate} to {mahadasha?.endDate}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {mahadasha?.totalYears} Years
                        </Badge>
                      </div>
                      <Progress value={(mahadasha?.completedYears / mahadasha?.totalYears) * 100} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>
                          {mahadasha?.completedYears} year{mahadasha?.completedYears !== 1 ? "s" : ""} completed
                        </span>
                        <span>
                          {mahadasha?.remainingYears} year{mahadasha?.remainingYears !== 1 ? "s" : ""} remaining
                        </span>
                      </div>
                    </div>

                    {/* Antardasha */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {antardasha && getPlanetIcon(antardasha.planet)}
                          <div>
                            <p className="font-medium text-foreground">{antardasha?.planet} Antardasha</p>
                            <p className="text-xs text-muted-foreground">
                              {antardasha?.startDate} to {antardasha?.endDate}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                          {antardasha?.totalMonths} Months
                        </Badge>
                      </div>
                      <Progress value={(antardasha?.completedMonths / antardasha?.totalMonths) * 100} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>
                          {antardasha?.completedMonths} month{antardasha?.completedMonths !== 1 ? "s" : ""} completed
                        </span>
                        <span>
                          {antardasha?.remainingMonths} month{antardasha?.remainingMonths !== 1 ? "s" : ""} remaining
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Planetary Positions */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-foreground text-lg">Current Planetary Positions</CardTitle>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">
                        Last updated: {lastRefreshed.toLocaleTimeString()}
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => fetchPlanetaryPositions()}
                        className="h-8 w-8 p-0"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
                        <span className="sr-only">Refresh</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {planets.map((planet) => (
                      <div key={planet.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border">
                        <div className="mt-1">{getPlanetIcon(planet.name)}</div>
                        <div>
                          <p className="font-medium text-foreground">{planet.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {planet.sign} {planet.degree.toFixed(1)}°
                          </p>
                          <div className="flex items-center mt-1">
                            <Badge
                              variant="outline"
                              className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                            >
                              House {planet.house}
                            </Badge>
                            {planet.isRetrograde && (
                              <Badge
                                variant="outline"
                                className="ml-1 text-xs bg-destructive/10 text-destructive border-destructive/20"
                              >
                                R
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Life Areas */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-foreground text-lg">Life Areas Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 rounded-lg border border-border text-center">
                      <Heart className="h-8 w-8 text-pink-500 mb-2" />
                      <h3 className="font-medium text-foreground">Relationships</h3>
                      <div className="flex items-center mt-2 space-x-1">
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Favorable connections</p>
                    </div>

                    <div className="flex flex-col items-center p-4 rounded-lg border border-border text-center">
                      <Briefcase className="h-8 w-8 text-blue-500 mb-2" />
                      <h3 className="font-medium text-foreground">Career</h3>
                      <div className="flex items-center mt-2 space-x-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Growth opportunities</p>
                    </div>

                    <div className="flex flex-col items-center p-4 rounded-lg border border-border text-center">
                      <Brain className="h-8 w-8 text-purple-500 mb-2" />
                      <h3 className="font-medium text-foreground">Mental Health</h3>
                      <div className="flex items-center mt-2 space-x-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Needs attention</p>
                    </div>

                    <div className="flex flex-col items-center p-4 rounded-lg border border-border text-center">
                      <Activity className="h-8 w-8 text-green-500 mb-2" />
                      <h3 className="font-medium text-foreground">Health</h3>
                      <div className="flex items-center mt-2 space-x-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Stable energy</p>
                    </div>

                    <div className="flex flex-col items-center p-4 rounded-lg border border-border text-center">
                      <TrendingUp className="h-8 w-8 text-amber-500 mb-2" />
                      <h3 className="font-medium text-foreground">Finances</h3>
                      <div className="flex items-center mt-2 space-x-1">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Excellent prospects</p>
                    </div>

                    <div className="flex flex-col items-center p-4 rounded-lg border border-border text-center">
                      <Target className="h-8 w-8 text-red-500 mb-2" />
                      <h3 className="font-medium text-foreground">Goals</h3>
                      <div className="flex items-center mt-2 space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Good progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Profile Card */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-20 w-20 mb-4">
                      <AvatarImage src={profile?.profileImage} alt={profile?.name} />
                      <AvatarFallback>{profile?.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-medium text-foreground">{profile?.name || "User"}</h3>
                    <p className="text-sm text-muted-foreground">{profile?.email}</p>
                    <div className="flex items-center mt-2 space-x-1">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Taurus Ascendant
                      </Badge>
                      <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                        Moon in Cancer
                      </Badge>
                    </div>
                    <div className="w-full mt-4">
                      <Button variant="outline" className="w-full">
                        View Full Chart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Energy Levels */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-foreground text-lg">Energy Levels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Physical</span>
                      <span className="text-foreground font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Mental</span>
                      <span className="text-foreground font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Emotional</span>
                      <span className="text-foreground font-medium">82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Spiritual</span>
                      <span className="text-foreground font-medium">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
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

              {/* Spiritual Guidance */}
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
                        className="h-2 w-2 bg-pink-500 rounded-full animate-pulse"
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
    </div>
  )
}
