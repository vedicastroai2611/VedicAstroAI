"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Plus, AlertTriangle, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { ProfileCard } from "@/components/profile-card"

export default function ManageProfilesPage() {
  const profiles = [
    {
      id: "1",
      name: "Arjun Sharma",
      birthDate: "March 15, 1990",
      birthPlace: "Mumbai, Maharashtra",
      avatar: "/man-profile.png",
      isPrimary: true,
      isActive: true,
    },
    {
      id: "2",
      name: "Priya Sharma",
      birthDate: "July 22, 1992",
      birthPlace: "Delhi, Delhi",
      avatar: "/woman-profile.png",
      isPrimary: false,
      isActive: false,
    },
    {
      id: "3",
      name: "Rajesh Sharma",
      birthDate: "December 5, 1965",
      birthPlace: "Pune, Maharashtra",
      avatar: "/older-man-profile.png",
      isPrimary: false,
      isActive: false,
    },
  ]

  const handleSwitch = (id: string) => {
    console.log("Switch to profile:", id)
  }

  const handleEdit = (id: string) => {
    console.log("Edit profile:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Delete profile:", id)
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
            <h1 className="text-2xl font-bold text-foreground">Manage Profiles</h1>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Create New Profile Card */}
          <Card className="border-border bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Create New Profile</h3>
                  <p className="text-muted-foreground">Add another family member or friend</p>
                </div>
                <Link href="/settings/profiles/create">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Plus className="h-5 w-5 mr-2" />
                    Add
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Your Profiles Section */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Your Profiles</h2>
            <Badge variant="secondary">{profiles.length} profiles</Badge>
          </div>

          <div className="grid gap-4">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onSwitch={handleSwitch}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Profile Limit Warning */}
          <Alert className="border-accent bg-accent/10">
            <AlertTriangle className="h-4 w-4 text-accent" />
            <AlertDescription className="text-accent-foreground">
              <strong>Profile Limit</strong>
              <br />
              You can manage up to 5 profiles. Upgrade to Premium for unlimited profiles.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
