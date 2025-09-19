"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Palette, Globe, Type, Eye, Volume2, Accessibility } from "lucide-react"
import Link from "next/link"

export default function AppPreferencesPage() {
  const [preferences, setPreferences] = useState({
    theme: "dark",
    language: "en",
    fontSize: [16],
    highContrast: false,
    reducedMotion: false,
    soundEffects: true,
    hapticFeedback: true,
    autoSave: true,
    compactMode: false,
  })

  const languages = [
    { code: "en", name: "English (US)", flag: "🇺🇸" },
    { code: "hi", name: "हिन्दी (Hindi)", flag: "🇮🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
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
            <h1 className="text-2xl font-bold text-foreground">App Preferences</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          {/* Theme Settings */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Palette className="h-5 w-5 mr-2 text-primary" />
                Theme Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">App Theme</Label>
                <Select
                  value={preferences.theme}
                  onValueChange={(value) => setPreferences({ ...preferences, theme: value })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light Mode</SelectItem>
                    <SelectItem value="dark">Dark Mode</SelectItem>
                    <SelectItem value="auto">Auto (System)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="high-contrast" className="flex items-center text-foreground">
                    <Eye className="h-4 w-4 mr-2" />
                    High contrast mode
                  </Label>
                  <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                </div>
                <Switch
                  id="high-contrast"
                  checked={preferences.highContrast}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, highContrast: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="reduced-motion" className="text-foreground">
                    Reduce motion
                  </Label>
                  <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                </div>
                <Switch
                  id="reduced-motion"
                  checked={preferences.reducedMotion}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, reducedMotion: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Globe className="h-5 w-5 mr-2 text-accent" />
                Language Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">App Language</Label>
                <Select
                  value={preferences.language}
                  onValueChange={(value) => setPreferences({ ...preferences, language: value })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <span className="flex items-center space-x-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-muted-foreground">Restart required for language changes to take full effect</p>
            </CardContent>
          </Card>

          {/* Typography & Accessibility */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Type className="h-5 w-5 mr-2 text-primary" />
                Typography & Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label className="text-foreground">Font Size</Label>
                <div className="px-3">
                  <Slider
                    value={preferences.fontSize}
                    onValueChange={(value) => setPreferences({ ...preferences, fontSize: value })}
                    max={24}
                    min={12}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Small (12px)</span>
                    <span>Current: {preferences.fontSize[0]}px</span>
                    <span>Large (24px)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg bg-card/50">
                <p className="text-foreground" style={{ fontSize: `${preferences.fontSize[0]}px` }}>
                  Sample text: Your daily prediction shows favorable planetary alignments for new beginnings.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="compact-mode" className="text-foreground">
                    Compact mode
                  </Label>
                  <p className="text-sm text-muted-foreground">Reduce spacing for more content</p>
                </div>
                <Switch
                  id="compact-mode"
                  checked={preferences.compactMode}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, compactMode: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Audio & Haptics */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Volume2 className="h-5 w-5 mr-2 text-accent" />
                Audio & Haptics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="sound-effects" className="text-foreground">
                    Sound effects
                  </Label>
                  <p className="text-sm text-muted-foreground">Play sounds for interactions</p>
                </div>
                <Switch
                  id="sound-effects"
                  checked={preferences.soundEffects}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, soundEffects: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="haptic-feedback" className="text-foreground">
                    Haptic feedback
                  </Label>
                  <p className="text-sm text-muted-foreground">Vibrate on touch interactions</p>
                </div>
                <Switch
                  id="haptic-feedback"
                  checked={preferences.hapticFeedback}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, hapticFeedback: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* General Preferences */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Accessibility className="h-5 w-5 mr-2 text-primary" />
                General Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="auto-save" className="text-foreground">
                    Auto-save conversations
                  </Label>
                  <p className="text-sm text-muted-foreground">Automatically save chat history</p>
                </div>
                <Switch
                  id="auto-save"
                  checked={preferences.autoSave}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, autoSave: checked })}
                />
              </div>
            </CardContent>
          </Card>

          <Button className="w-full bg-primary hover:bg-primary/90">Save Preferences</Button>
        </div>
      </div>
    </div>
  )
}
