"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Bell, Clock, Star, Moon, Sun, Volume2, Vibrate, Mail, Smartphone } from "lucide-react"
import Link from "next/link"

export default function NotificationSettingsPage() {
  const [settings, setSettings] = useState({
    dailyPredictions: true,
    dailyTime: "morning",
    dailyMethod: "push",
    transitAlerts: false,
    transitPlanets: ["moon", "mercury", "venus"],
    transitMethod: "popup",
    muteHours: 0,
    customSound: true,
    vibration: true,
    emailNotifications: false,
    smsNotifications: false,
  })

  const planets = [
    { id: "sun", name: "Sun", icon: Sun },
    { id: "moon", name: "Moon", icon: Moon },
    { id: "mercury", name: "Mercury", icon: Star },
    { id: "venus", name: "Venus", icon: Star },
    { id: "mars", name: "Mars", icon: Star },
    { id: "jupiter", name: "Jupiter", icon: Star },
    { id: "saturn", name: "Saturn", icon: Star },
  ]

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
            <h1 className="text-2xl font-bold text-foreground">Notification Settings</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          {/* Daily Predictions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Bell className="h-5 w-5 mr-2 text-primary" />
                Daily Predictions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="daily-predictions" className="text-foreground">
                  Enable daily predictions
                </Label>
                <Switch
                  id="daily-predictions"
                  checked={settings.dailyPredictions}
                  onCheckedChange={(checked) => setSettings({ ...settings, dailyPredictions: checked })}
                />
              </div>

              {settings.dailyPredictions && (
                <>
                  <div className="space-y-2">
                    <Label className="text-foreground">Delivery Time</Label>
                    <Select
                      value={settings.dailyTime}
                      onValueChange={(value) => setSettings({ ...settings, dailyTime: value })}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM)</SelectItem>
                        <SelectItem value="evening">Evening (6:00 PM)</SelectItem>
                        <SelectItem value="custom">Custom Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-foreground">Notification Method</Label>
                    <Select
                      value={settings.dailyMethod}
                      onValueChange={(value) => setSettings({ ...settings, dailyMethod: value })}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="push">Push Notification</SelectItem>
                        <SelectItem value="inapp">In-App Only</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Transit Alerts */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Star className="h-5 w-5 mr-2 text-accent" />
                Transit Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="transit-alerts" className="text-foreground">
                  Enable transit alerts
                </Label>
                <Switch
                  id="transit-alerts"
                  checked={settings.transitAlerts}
                  onCheckedChange={(checked) => setSettings({ ...settings, transitAlerts: checked })}
                />
              </div>

              {settings.transitAlerts && (
                <>
                  <div className="space-y-3">
                    <Label className="text-foreground">Alert for these planets:</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {planets.map((planet) => {
                        const Icon = planet.icon
                        return (
                          <div key={planet.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={planet.id}
                              checked={settings.transitPlanets.includes(planet.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSettings({
                                    ...settings,
                                    transitPlanets: [...settings.transitPlanets, planet.id],
                                  })
                                } else {
                                  setSettings({
                                    ...settings,
                                    transitPlanets: settings.transitPlanets.filter((p) => p !== planet.id),
                                  })
                                }
                              }}
                            />
                            <Label htmlFor={planet.id} className="flex items-center text-foreground">
                              <Icon className="h-4 w-4 mr-1 text-accent" />
                              {planet.name}
                            </Label>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-foreground">Alert Method</Label>
                    <Select
                      value={settings.transitMethod}
                      onValueChange={(value) => setSettings({ ...settings, transitMethod: value })}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popup">Popup</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="push">Push Notification</SelectItem>
                        <SelectItem value="all">All Methods</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Advanced Settings */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Advanced Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">Mute notifications for</Label>
                <Select
                  value={settings.muteHours.toString()}
                  onValueChange={(value) => setSettings({ ...settings, muteHours: Number.parseInt(value) })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Never</SelectItem>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="4">4 hours</SelectItem>
                    <SelectItem value="24">24 hours</SelectItem>
                    <SelectItem value="168">1 week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="custom-sound" className="flex items-center text-foreground">
                  <Volume2 className="h-4 w-4 mr-2" />
                  Custom notification sound
                </Label>
                <Switch
                  id="custom-sound"
                  checked={settings.customSound}
                  onCheckedChange={(checked) => setSettings({ ...settings, customSound: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="vibration" className="flex items-center text-foreground">
                  <Vibrate className="h-4 w-4 mr-2" />
                  Vibration
                </Label>
                <Switch
                  id="vibration"
                  checked={settings.vibration}
                  onCheckedChange={(checked) => setSettings({ ...settings, vibration: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="flex items-center text-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  Email notifications
                </Label>
                <Switch
                  id="email-notifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications" className="flex items-center text-foreground">
                  <Smartphone className="h-4 w-4 mr-2" />
                  SMS notifications
                </Label>
                <Switch
                  id="sms-notifications"
                  checked={settings.smsNotifications}
                  onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
                />
              </div>
            </CardContent>
          </Card>

          <Button className="w-full bg-primary hover:bg-primary/90">Save Notification Settings</Button>
        </div>
      </div>
    </div>
  )
}
