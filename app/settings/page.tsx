"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { HealthCheck } from "@/components/health-check"
import {
  ArrowLeft,
  User,
  Users,
  Plus,
  Calendar,
  Clock,
  Bell,
  Star,
  Download,
  Trash2,
  Shield,
  SettingsIcon,
  Globe,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
  Edit,
  Palette,
  Server,
} from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Current Profile */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Current Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <Link href="/settings/profile/edit">
                  <div className="flex items-center space-x-4 cursor-pointer hover:bg-card/50 p-2 rounded-lg transition-colors">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/woman-profile.png" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">Priya Sharma</h3>
                      <p className="text-sm text-muted-foreground">Born: March 15, 1992 • Mumbai</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Profile Management */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Profile Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Manage multiple birth charts and switch between profiles
                  </p>
                </div>
                <Link href="/settings/profiles/create">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center">
                      <Plus className="h-4 w-4 mr-2 text-accent" />
                      Create New Profile
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-xs text-muted-foreground pl-6">Add family members or different birth details</div>
                <Link href="/settings/profile/switch">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      Switch Profile
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-xs text-muted-foreground pl-6">Toggle between saved profiles</div>
              </CardContent>
            </Card>

            {/* Birth Details */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Calendar className="h-5 w-5 mr-2 text-accent" />
                  Birth Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/settings/birth-info">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center">
                      <Edit className="h-4 w-4 mr-2" />
                      Update Birth Information
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-sm text-muted-foreground">Date, time, and place</div>
                <Link href="/settings/timezone">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Timezone Settings
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-sm text-muted-foreground">Current: Asia/Kolkata</div>
              </CardContent>
            </Card>

            {/* Server Health */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Server className="h-5 w-5 mr-2 text-green-500" />
                  Server Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Monitor backend API status and server performance</p>
                  <HealthCheck />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Bell className="h-5 w-5 mr-2 text-accent" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <SettingsIcon className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Daily Predictions</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Morning insights and planetary guidance</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-accent" />
                      <span className="font-medium text-foreground">Transit Alerts</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Important planetary changes and their effects</p>
                  </div>
                  <Switch />
                </div>
                <Link href="/settings/notifications">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center">
                      <SettingsIcon className="h-4 w-4 mr-2" />
                      Advanced Notification Settings
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-xs text-muted-foreground">
                  Customize timing, frequency, and content preferences
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Download className="h-5 w-5 mr-2 text-primary" />
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/settings/data/export">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-2 text-green-500" />
                      Export Insights & Reports
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-sm text-muted-foreground">
                  Download consultation history, birth charts, and personalized reports in PDF format
                </div>
                <Button variant="outline" className="w-full justify-between bg-transparent">
                  <span className="flex items-center">
                    <Trash2 className="h-4 w-4 mr-2 text-destructive" />
                    Clear Chat History
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="text-sm text-muted-foreground">
                  Permanently remove all AI conversations and session data
                </div>
                <Link href="/settings/data/privacy">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Privacy & Data Settings
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="text-sm text-muted-foreground">
                  Control data sharing, analytics, and personalization preferences
                </div>
              </CardContent>
            </Card>

            {/* App Settings */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <SettingsIcon className="h-5 w-5 mr-2 text-primary" />
                  App Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/settings/preferences">
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center">
                      <Palette className="h-4 w-4 mr-2" />
                      App Preferences
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-between bg-transparent">
                  <span className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Language & Region
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">English (US)</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </Button>
                <div className="text-xs text-muted-foreground">
                  Choose from Hindi, Sanskrit, Tamil, Telugu, and more regional languages
                </div>
                <Button variant="outline" className="w-full justify-between bg-transparent">
                  <span className="flex items-center">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help & Support
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="text-xs text-muted-foreground">
                  FAQs, tutorials, contact support, and community forums
                </div>
                <Button variant="outline" className="w-full justify-between bg-transparent">
                  <span className="flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    About VedicAstro AI
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Version 1.0.0</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </Button>
                <div className="text-xs text-muted-foreground">
                  App info, privacy policy, terms of service, and acknowledgments
                </div>
              </CardContent>
            </Card>

            {/* Sign Out */}
            <Card className="border-border">
              <CardContent className="pt-6">
                <Button variant="destructive" className="w-full">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
