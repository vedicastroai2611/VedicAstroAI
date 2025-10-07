import { LoginForm } from "@/components/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Moon } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Mystical background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-amber-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 mystical-glow float-animation">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2 text-glow">Vedic Astro AI</h1>
            <p className="text-muted-foreground">Unlock the wisdom of the stars</p>
          </div>

          <Card className="border-primary/30 bg-black/50 backdrop-blur-sm card-mystical">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-semibold text-foreground">Welcome back</CardTitle>
              <CardDescription className="text-muted-foreground">Sign in to your cosmic journey</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-primary hover:text-primary/80 hover-lift transition-all">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
