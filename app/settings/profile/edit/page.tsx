"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Upload, User, Calendar, MapPin, Save } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    birthDate: "1992-03-15",
    birthPlace: "Mumbai, Maharashtra, India",
    profilePicture: "/woman-profile.png",
  })

  const handleSave = () => {
    // Save profile logic here
    console.log("Saving profile:", profile)
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
            <h1 className="text-2xl font-bold text-foreground">Edit Profile</h1>
          </div>
          <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profile.profilePicture || "/placeholder.svg"} />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Change Photo
              </Button>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center">
                <User className="h-4 w-4 mr-2 text-primary" />
                Full Name
              </Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="bg-background border-border"
              />
            </div>

            {/* Birth Date */}
            <div className="space-y-2">
              <Label htmlFor="birthDate" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-accent" />
                Date of Birth
              </Label>
              <Input
                id="birthDate"
                type="date"
                value={profile.birthDate}
                onChange={(e) => setProfile({ ...profile, birthDate: e.target.value })}
                className="bg-background border-border"
              />
            </div>

            {/* Birth Place */}
            <div className="space-y-2">
              <Label htmlFor="birthPlace" className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                Place of Birth
              </Label>
              <Input
                id="birthPlace"
                value={profile.birthPlace}
                onChange={(e) => setProfile({ ...profile, birthPlace: e.target.value })}
                className="bg-background border-border"
                placeholder="City, State, Country"
              />
            </div>

            {/* Profile Summary */}
            <Card className="bg-card/50 border-border">
              <CardContent className="pt-4">
                <h3 className="font-semibold text-foreground mb-2">Profile Summary</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Name: {profile.name}</p>
                  <p>Born: {new Date(profile.birthDate).toLocaleDateString()}</p>
                  <p>Place: {profile.birthPlace}</p>
                  <p>Timezone: Asia/Kolkata (GMT+5:30)</p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
