"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Clock, MapPin, Save } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function UpdateBirthInfoPage() {
  const [birthData, setBirthData] = useState({
    date: "1992-03-15",
    time: "14:30",
    place: "Mumbai",
    country: "India",
    timezone: "Asia/Kolkata",
  })

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
            <h1 className="text-2xl font-bold text-foreground">Update Birth Information</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Birth Details
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Accurate birth information is essential for precise astrological calculations.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Birth Date */}
            <div className="space-y-2">
              <Label htmlFor="birth-date" className="text-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-accent" />
                Birth Date
              </Label>
              <Input
                id="birth-date"
                type="date"
                value={birthData.date}
                onChange={(e) => setBirthData({ ...birthData, date: e.target.value })}
                className="bg-background border-border text-foreground"
              />
            </div>

            {/* Birth Time */}
            <div className="space-y-2">
              <Label htmlFor="birth-time" className="text-foreground flex items-center">
                <Clock className="h-4 w-4 mr-2 text-accent" />
                Birth Time
              </Label>
              <Input
                id="birth-time"
                type="time"
                value={birthData.time}
                onChange={(e) => setBirthData({ ...birthData, time: e.target.value })}
                className="bg-background border-border text-foreground"
              />
              <p className="text-xs text-muted-foreground">
                Use 24-hour format. If exact time is unknown, use 12:00 PM.
              </p>
            </div>

            {/* Birth Place */}
            <div className="space-y-2">
              <Label htmlFor="birth-place" className="text-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                Birth Place
              </Label>
              <Input
                id="birth-place"
                type="text"
                placeholder="City, State/Province"
                value={birthData.place}
                onChange={(e) => setBirthData({ ...birthData, place: e.target.value })}
                className="bg-background border-border text-foreground"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country" className="text-foreground">
                Country
              </Label>
              <Select
                value={birthData.country}
                onValueChange={(value) => setBirthData({ ...birthData, country: value })}
              >
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Japan">Japan</SelectItem>
                  <SelectItem value="China">China</SelectItem>
                  <SelectItem value="Brazil">Brazil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Timezone */}
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-foreground">
                Timezone
              </Label>
              <Select
                value={birthData.timezone}
                onValueChange={(value) => setBirthData({ ...birthData, timezone: value })}
              >
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                  <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                  <SelectItem value="America/Los_Angeles">America/Los_Angeles (PST)</SelectItem>
                  <SelectItem value="Europe/London">Europe/London (GMT)</SelectItem>
                  <SelectItem value="Europe/Paris">Europe/Paris (CET)</SelectItem>
                  <SelectItem value="Asia/Tokyo">Asia/Tokyo (JST)</SelectItem>
                  <SelectItem value="Australia/Sydney">Australia/Sydney (AEST)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Current Information Display */}
            <div className="bg-muted/20 p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Current Information</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  <strong>Date:</strong> March 15, 1992
                </p>
                <p>
                  <strong>Time:</strong> 2:30 PM
                </p>
                <p>
                  <strong>Place:</strong> Mumbai, India
                </p>
                <p>
                  <strong>Timezone:</strong> Asia/Kolkata
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
              <Link href="/settings" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Cancel
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
