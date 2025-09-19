"use client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, MessageCircle, Settings, User, LogOut, Home, BarChart3, Calendar, History } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/forecast", label: "Forecast", icon: Calendar },
    { href: "/chat", label: "AI Chat", icon: MessageCircle },
    { href: "/history", label: "History", icon: History },
    { href: "/insights", label: "Insights", icon: BarChart3 },
  ]

  return (
    <header className="border-b border-border bg-black/80 backdrop-blur-sm sticky top-0 z-50 mystical-glow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/dashboard" className="flex items-center space-x-3 group">
            <Moon className="h-6 w-6 text-primary group-hover:text-accent transition-colors mystical-glow" />
            <span className="text-xl font-bold text-foreground text-glow">VedicAstro AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center space-x-2 px-3 py-2 transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-primary/20 mystical-glow border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/settings">
            <Button
              variant="ghost"
              size="sm"
              className={`p-2 transition-all duration-300 ${
                pathname === "/settings"
                  ? "text-primary bg-primary/20 mystical-glow border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
              }`}
            >
              <Settings className="h-4 w-4" />
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full mystical-glow">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/woman-profile.png" />
                  <AvatarFallback className="bg-primary/20 text-primary">PS</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black/95 border-primary/30 card-glow" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium text-foreground">Priya Sharma</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">priya.sharma@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
