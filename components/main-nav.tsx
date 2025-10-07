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
import { Moon, MessageCircle, Settings, User, LogOut, Home, BarChart3, Calendar, History, Star, Database } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/contexts/AuthContext"
import { toast } from "sonner"

export function MainNav() {
  const pathname = usePathname()
  
  // Add safety check for auth context
  let user, logout, isAuthenticated
  try {
    const auth = useAuth()
    user = auth.user
    logout = auth.logout
    isAuthenticated = auth.isAuthenticated
  } catch (error) {
    // Auth context not available, use defaults
    user = null
    logout = async () => {}
    isAuthenticated = false
  }

  const handleLogout = async () => {
    try {
      await logout()
      toast.success("Logged out successfully")
    } catch (error) {
      toast.error("Failed to logout")
    }
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/planets", label: "Planets", icon: Star },
    { href: "/forecast", label: "Forecast", icon: Calendar },
    { href: "/chat", label: "AI Chat", icon: MessageCircle },
    { href: "/history", label: "History", icon: History },
    { href: "/insights", label: "Insights", icon: BarChart3 },
  ]

  return (
    <header className="border-b border-border bg-black/80 backdrop-blur-sm sticky top-0 z-50 mystical-glow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/dashboard" className="flex items-center space-x-3 group hover-pop-subtle">
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
                    className={`flex items-center space-x-2 px-3 py-2 transition-all duration-300 hover-lift btn-mystical ${
                      isActive
                        ? "text-primary bg-primary/20 mystical-glow border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/15"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                </Link>
              )
            })}
          </nav>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground hover:bg-primary/20 hover-lift"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
        <div className="flex items-center space-x-3">
          {isAuthenticated ? (
            <>
              <Link href="/settings">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-2 transition-all duration-300 hover-lift ${
                    pathname === "/settings"
                      ? "text-primary bg-primary/20 mystical-glow border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/15"
                  }`}
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full mystical-glow hover-pop-subtle">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.profileImage || "/woman-profile.png"} />
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {user ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}` : "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-black/95 border-primary/30 card-glow" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-foreground">
                        {user ? `${user.firstName} ${user.lastName}` : "User"}
                      </p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user?.email || "user@example.com"}
                      </p>
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
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" size="sm" className="hover-lift">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-primary hover:bg-primary/90 hover-lift">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
