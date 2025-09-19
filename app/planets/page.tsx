"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"
import { Sun, Moon } from "lucide-react"

export default function PlanetsPage() {
  const planets = [
    {
      name: "Sun",
      sanskrit: "Surya",
      sign: "Leo",
      degree: "23°15'",
      house: "12th House",
      strength: "Strong",
      icon: <Sun className="h-6 w-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      description: "Represents soul, ego, and vitality. Currently in own sign Leo.",
    },
    {
      name: "Moon",
      sanskrit: "Chandra",
      sign: "Cancer",
      degree: "7°42'",
      house: "11th House",
      strength: "Excellent",
      icon: <Moon className="h-6 w-6" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30",
      description: "Represents mind and emotions. Exalted in own sign Cancer.",
    },
    {
      name: "Mars",
      sanskrit: "Mangal",
      sign: "Aries",
      degree: "15°28'",
      house: "8th House",
      strength: "Strong",
      icon: (
        <div className="h-6 w-6 bg-red-500 rounded flex items-center justify-center">
          <span className="text-xs text-white font-bold">♂</span>
        </div>
      ),
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      description: "Represents energy and action. In own sign Aries.",
    },
    {
      name: "Mercury",
      sanskrit: "Budh",
      sign: "Virgo",
      degree: "2°33'",
      house: "1st House",
      strength: "Excellent",
      icon: (
        <div className="h-6 w-6 bg-green-500 rounded flex items-center justify-center">
          <span className="text-xs text-white font-bold">☿</span>
        </div>
      ),
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      description: "Represents communication and intellect. Exalted in Virgo.",
    },
    {
      name: "Jupiter",
      sanskrit: "Guru",
      sign: "Taurus",
      degree: "18°47'",
      house: "9th House",
      strength: "Good",
      icon: (
        <div className="h-6 w-6 bg-yellow-500 rounded flex items-center justify-center">
          <span className="text-xs text-white font-bold">♃</span>
        </div>
      ),
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      description: "Represents wisdom and expansion. Stable in Taurus.",
    },
    {
      name: "Venus",
      sanskrit: "Shukra",
      sign: "Libra",
      degree: "11°19'",
      house: "2nd House",
      strength: "Excellent",
      icon: (
        <div className="h-6 w-6 bg-pink-500 rounded flex items-center justify-center">
          <span className="text-xs text-white font-bold">♀</span>
        </div>
      ),
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      description: "Represents love and beauty. Exalted in own sign Libra.",
    },
    {
      name: "Saturn",
      sanskrit: "Shani",
      sign: "Aquarius",
      degree: "25°52'",
      house: "6th House",
      strength: "Strong",
      icon: (
        <div className="h-6 w-6 bg-purple-500 rounded flex items-center justify-center">
          <span className="text-xs text-white font-bold">♄</span>
        </div>
      ),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "Represents discipline and karma. In own sign Aquarius.",
    },
    {
      name: "Rahu",
      sanskrit: "North Node",
      sign: "Gemini",
      degree: "14°36'",
      house: "10th House",
      strength: "Moderate",
      icon: (
        <div className="h-6 w-6 bg-gray-600 rounded flex items-center justify-center">
          <span className="text-xs text-white font-bold">☊</span>
        </div>
      ),
      color: "text-gray-600",
      bgColor: "bg-gray-600/10",
      borderColor: "border-gray-600/30",
      description: "Represents desires and material pursuits. In Gemini.",
    },
    {
      name: "Ketu",
      sanskrit: "South Node",
      sign: "Sagittarius",
      degree: "14°36'",
      house: "4th House",
      strength: "Moderate",
      icon: (
        <div className="h-6 w-6 bg-gray-500 rounded flex items-center justify-center">
          <span className="text-xs text-white font-bold">☋</span>
        </div>
      ),
      color: "text-gray-500",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      description: "Represents spirituality and detachment. In Sagittarius.",
    },
  ]

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Planetary Positions</h1>
            <p className="text-muted-foreground">Current positions of all planets in your birth chart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planets.map((planet) => (
              <Card key={planet.name} className={`${planet.borderColor} border-2 ${planet.bgColor}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={planet.color}>{planet.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{planet.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{planet.sanskrit}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className={`${planet.color} bg-transparent`}>
                      {planet.strength}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Sign</p>
                      <p className="font-semibold">{planet.sign}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Degree</p>
                      <p className="font-semibold">{planet.degree}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">House</p>
                    <p className="font-semibold">{planet.house}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{planet.description}</p>
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
