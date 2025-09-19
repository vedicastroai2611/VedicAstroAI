"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, CheckCircle, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ProfileCardProps {
  profile: {
    id: string
    name: string
    birthDate: string
    birthPlace: string
    avatar?: string
    isPrimary?: boolean
    isActive?: boolean
  }
  onSwitch?: (id: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

export function ProfileCard({ profile, onSwitch, onEdit, onDelete }: ProfileCardProps) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="border-border hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            {profile.avatar ? <AvatarImage src={profile.avatar || "/placeholder.svg"} /> : null}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-lg font-semibold text-foreground">{profile.name}</h3>
              {profile.isPrimary && <Badge className="bg-primary text-primary-foreground">Primary</Badge>}
            </div>
            <p className="text-sm text-muted-foreground mb-2">Born: {profile.birthDate}</p>
            <p className="text-sm text-muted-foreground">{profile.birthPlace}</p>
          </div>
          <div className="flex items-center space-x-2">
            {profile.isActive ? (
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-foreground">Active</span>
              </div>
            ) : (
              <Button variant="outline" size="sm" className="bg-transparent" onClick={() => onSwitch?.(profile.id)}>
                Switch
              </Button>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onEdit?.(profile.id)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onDelete?.(profile.id)} className="text-destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Profile
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
