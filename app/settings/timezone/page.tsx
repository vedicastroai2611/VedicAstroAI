"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Clock, Globe, Search, Save } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const timezones = [
  { value: "Asia/Kolkata", label: "Asia/Kolkata (IST +05:30)", region: "Asia" },
  { value: "America/New_York", label: "America/New_York (EST -05:00)", region: "Americas" },
  { value: "America/Los_Angeles", label: "America/Los_Angeles (PST -08:00)", region: "Americas" },
  { value: "America/Chicago", label: "America/Chicago (CST -06:00)", region: "Americas" },
  { value: "Europe/London", label: "Europe/London (GMT +00:00)", region: "Europe" },
  { value: "Europe/Paris", label: "Europe/Paris (CET +01:00)", region: "Europe" },
  { value: "Europe/Berlin", label: "Europe/Berlin (CET +01:00)", region: "Europe" },
  { value: "Asia/Tokyo", label: "Asia/Tokyo (JST +09:00)", region: "Asia" },
  { value: "Asia/Shanghai", label: "Asia/Shanghai (CST +08:00)", region: "Asia" },
  { value: "Asia/Dubai", label: "Asia/Dubai (GST +04:00)", region: "Asia" },
  { value: "Australia/Sydney", label: "Australia/Sydney (AEST +10:00)", region: "Oceania" },
  { value: "Australia/Melbourne", label: "Australia/Melbourne (AEST +10:00)", region: "Oceania" },
  { value: "Pacific/Auckland", label: "Pacific/Auckland (NZST +12:00)", region: "Oceania" },
]

export default function TimezoneSettingsPage() {
  const [selectedTimezone, setSelectedTimezone] = useState("Asia/Kolkata")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")

  const filteredTimezones = timezones.filter((tz) => {
    const matchesSearch = tz.label.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === "all" || tz.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  const regions = ["all", "Asia", "Americas", "Europe", "Oceania"]

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
            <h1 className="text-2xl font-bold text-foreground">Timezone Settings</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              Current Timezone
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Your timezone affects the accuracy of daily predictions and planetary calculations.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current Timezone Display */}
            <div className="bg-muted/20 p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Asia/Kolkata</h3>
                  <p className="text-sm text-muted-foreground">Indian Standard Time (IST +05:30)</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Current time: {new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })}
                  </p>
                </div>
                <Globe className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Search and Filter */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search" className="text-foreground">
                  Search Timezone
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search by city or timezone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="region" className="text-foreground">
                  Filter by Region
                </Label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="Asia">Asia</SelectItem>
                    <SelectItem value="Americas">Americas</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Oceania">Oceania</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Timezone Selection */}
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-foreground">
                Select New Timezone
              </Label>
              <Select value={selectedTimezone} onValueChange={setSelectedTimezone}>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {filteredTimezones.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Preview */}
            {selectedTimezone !== "Asia/Kolkata" && (
              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">Preview</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-foreground">
                    <strong>New timezone:</strong> {timezones.find((tz) => tz.value === selectedTimezone)?.label}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Current time in new timezone:</strong>{" "}
                    {new Date().toLocaleTimeString("en-US", { timeZone: selectedTimezone })}
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90" disabled={selectedTimezone === "Asia/Kolkata"}>
                <Save className="h-4 w-4 mr-2" />
                Update Timezone
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
