"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, Cloud, Eye, Download, Trash2, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function PrivacySettingsPage() {
  const [privacySettings, setPrivacySettings] = useState({
    dataSharing: false,
    cloudStorage: true,
    analytics: true,
    personalizedPredictions: true,
    thirdPartyIntegrations: false,
    marketingEmails: false,
  })

  const handleDownloadData = () => {
    console.log("Downloading all user data...")
  }

  const handleDeleteData = () => {
    console.log("Initiating data deletion...")
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
            <h1 className="text-2xl font-bold text-foreground">Privacy Settings</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          {/* Data Usage */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Data Usage Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="data-sharing" className="text-foreground">
                    Share data with third parties
                  </Label>
                  <p className="text-sm text-muted-foreground">Allow sharing anonymized data for research</p>
                </div>
                <Switch
                  id="data-sharing"
                  checked={privacySettings.dataSharing}
                  onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, dataSharing: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="cloud-storage" className="flex items-center text-foreground">
                    <Cloud className="h-4 w-4 mr-2" />
                    Store birth data in cloud
                  </Label>
                  <p className="text-sm text-muted-foreground">Sync data across devices securely</p>
                </div>
                <Switch
                  id="cloud-storage"
                  checked={privacySettings.cloudStorage}
                  onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, cloudStorage: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="analytics" className="flex items-center text-foreground">
                    <Eye className="h-4 w-4 mr-2" />
                    Analytics & usage data
                  </Label>
                  <p className="text-sm text-muted-foreground">Help improve the app experience</p>
                </div>
                <Switch
                  id="analytics"
                  checked={privacySettings.analytics}
                  onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, analytics: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="personalized" className="text-foreground">
                    Personalized predictions
                  </Label>
                  <p className="text-sm text-muted-foreground">Use your data for tailored insights</p>
                </div>
                <Switch
                  id="personalized"
                  checked={privacySettings.personalizedPredictions}
                  onCheckedChange={(checked) =>
                    setPrivacySettings({ ...privacySettings, personalizedPredictions: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Marketing & Communications */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Marketing & Communications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="third-party" className="text-foreground">
                    Third-party integrations
                  </Label>
                  <p className="text-sm text-muted-foreground">Connect with external astrology services</p>
                </div>
                <Switch
                  id="third-party"
                  checked={privacySettings.thirdPartyIntegrations}
                  onCheckedChange={(checked) =>
                    setPrivacySettings({ ...privacySettings, thirdPartyIntegrations: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="marketing" className="text-foreground">
                    Marketing emails
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive updates and promotional content</p>
                </div>
                <Switch
                  id="marketing"
                  checked={privacySettings.marketingEmails}
                  onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, marketingEmails: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* GDPR/CCPA Compliance */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Data Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Under GDPR and CCPA regulations, you have the right to access, download, and delete your personal data.
              </p>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleDownloadData}>
                  <Download className="h-4 w-4 mr-2 text-primary" />
                  Download All My Data
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent text-destructive hover:text-destructive"
                  onClick={handleDeleteData}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete All My Data
                </Button>
              </div>

              <Alert className="border-amber-500/50 bg-amber-500/10">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <AlertDescription className="text-amber-200">
                  Data deletion is permanent and cannot be undone. You will lose all your consultation history,
                  predictions, and profile information.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Button className="w-full bg-primary hover:bg-primary/90">Save Privacy Settings</Button>
        </div>
      </div>
    </div>
  )
}
