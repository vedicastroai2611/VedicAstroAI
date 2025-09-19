"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"
import {
  Home,
  Heart,
  MessageCircle,
  Users,
  Crown,
  Briefcase,
  Scale,
  Shield,
  Compass,
  Trophy,
  Star,
  Bed,
} from "lucide-react"

export default function HousesPage() {
  const houses = [
    {
      number: 1,
      name: "Ascendant",
      sign: "Virgo",
      lord: "Mercury",
      planets: ["Mercury"],
      icon: <Crown className="h-5 w-5" />,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      description: "Self, personality, physical appearance, and overall life approach.",
    },
    {
      number: 2,
      name: "Wealth",
      sign: "Libra",
      lord: "Venus",
      planets: ["Venus"],
      icon: <Trophy className="h-5 w-5" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      description: "Money, possessions, family values, and speech.",
    },
    {
      number: 3,
      name: "Communication",
      sign: "Scorpio",
      lord: "Mars",
      planets: [],
      icon: <MessageCircle className="h-5 w-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: "Siblings, short journeys, communication, and courage.",
    },
    {
      number: 4,
      name: "Home",
      sign: "Sagittarius",
      lord: "Jupiter",
      planets: ["Ketu"],
      icon: <Home className="h-5 w-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      description: "Mother, home, property, emotional foundation, and education.",
    },
    {
      number: 5,
      name: "Creativity",
      sign: "Capricorn",
      lord: "Saturn",
      planets: [],
      icon: <Star className="h-5 w-5" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Children, creativity, romance, and intelligence.",
    },
    {
      number: 6,
      name: "Service",
      sign: "Aquarius",
      lord: "Saturn",
      planets: ["Saturn"],
      icon: <Shield className="h-5 w-5" />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      description: "Health, service, daily routine, and obstacles.",
    },
    {
      number: 7,
      name: "Partnership",
      sign: "Pisces",
      lord: "Jupiter",
      planets: [],
      icon: <Heart className="h-5 w-5" />,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      description: "Marriage, partnerships, business relationships, and open enemies.",
    },
    {
      number: 8,
      name: "Transformation",
      sign: "Aries",
      lord: "Mars",
      planets: ["Mars"],
      icon: <Compass className="h-5 w-5" />,
      color: "text-red-600",
      bgColor: "bg-red-600/10",
      description: "Transformation, occult, inheritance, and longevity.",
    },
    {
      number: 9,
      name: "Wisdom",
      sign: "Taurus",
      lord: "Venus",
      planets: ["Jupiter"],
      icon: <Briefcase className="h-5 w-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      description: "Higher learning, philosophy, religion, and long journeys.",
    },
    {
      number: 10,
      name: "Career",
      sign: "Gemini",
      lord: "Mercury",
      planets: ["Rahu"],
      icon: <Scale className="h-5 w-5" />,
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
      description: "Career, reputation, social status, and father.",
    },
    {
      number: 11,
      name: "Gains",
      sign: "Cancer",
      lord: "Moon",
      planets: ["Moon"],
      icon: <Users className="h-5 w-5" />,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      description: "Friends, gains, hopes, wishes, and elder siblings.",
    },
    {
      number: 12,
      name: "Liberation",
      sign: "Leo",
      lord: "Sun",
      planets: ["Sun"],
      icon: <Bed className="h-5 w-5" />,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      description: "Spirituality, losses, foreign lands, and liberation.",
    },
  ]

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Houses Overview</h1>
            <p className="text-muted-foreground">Complete analysis of all 12 houses in your birth chart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houses.map((house) => (
              <Card
                key={house.number}
                className={`${house.bgColor} border-2 border-border hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`${house.color} p-2 rounded-lg bg-background/50`}>{house.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{house.number}th House</CardTitle>
                        <p className="text-sm text-muted-foreground">{house.name}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Sign</p>
                      <p className="font-semibold">{house.sign}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Lord</p>
                      <p className="font-semibold">{house.lord}</p>
                    </div>
                  </div>

                  {house.planets.length > 0 && (
                    <div>
                      <p className="text-muted-foreground text-sm mb-2">Planets</p>
                      <div className="flex flex-wrap gap-1">
                        {house.planets.map((planet) => (
                          <Badge key={planet} variant="secondary" className="text-xs">
                            {planet}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{house.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
