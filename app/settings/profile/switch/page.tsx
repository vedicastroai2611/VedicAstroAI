"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Edit, Trash2, Check } from "lucide-react"
import Link from "next/link"

export default function SwitchProfilePage() {
  const [activeProfile, setActiveProfile] = useState("priya")

  const profiles = [
    {
      id: "priya",
      name: "Priya Sharma",
      birthDate: "July 22, 1992",
      birthPlace: "Delhi, Delhi",
      image: "/woman-profile.png",
      isPrimary: false,
    },
    {
      id: "arjun",
      name: "Arjun Sharma",
      birthDate: "March 15, 1990",
      birthPlace: "Mumbai, Maharashtra",
      image: "/man-profile.png",
      isPrimary: true,
    },
    {
      id: "rajesh",
      name: "Rajesh Sharma",
      birthDate: "December 5, 1965",
      birthPlace: "Pune, Maharashtra",
      image: "/older-man-profile.png",
      isPrimary: false,
    },
  ]

  const handleSwitchProfile = (profileId: string) => {
    setActiveProfile(profileId)
    // Switch profile logic here
    console.log("Switching to profile:", profileId)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/settings">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Switch Profile</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-4">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              className={`border-border cursor-pointer transition-all ${
                activeProfile === profile.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={profile.image || "/placeholder.svg"} />
                      <AvatarFallback>
                        {profile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-foreground">{profile.name}</h3>
                        {profile.isPrimary && (
                          <Badge variant="secondary" className="text-xs">
                            Primary
                          </Badge>
                        )}
                        {activeProfile === profile.id && <Badge className="text-xs bg-primary">Active</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">Born: {profile.birthDate}</p>
                      <p className="text-sm text-muted-foreground">{profile.birthPlace}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {activeProfile === profile.id ? (
                      <Button size="sm" disabled className="bg-primary">
                        <Check className="h-4 w-4 mr-2" />
                        Active
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" onClick={() => handleSwitchProfile(profile.id)}>
                        Switch
                      </Button>
                    )}
                    <Button size="sm" variant="ghost">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/settings/profiles/create">
            <Button className="w-full bg-primary hover:bg-primary/90">
              <User className="h-4 w-4 mr-2" />
              Create New Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
