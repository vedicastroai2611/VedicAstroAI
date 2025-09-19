import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Moon, Sun, Sparkles, Users, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { PWAInstall } from "@/components/pwa-install"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <PWAInstall />

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-amber-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-primary/30 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-primary mystical-glow" />
              <span className="text-2xl font-bold text-foreground text-glow">Vedic Astro AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mystical-glow">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance text-glow">
              Unlock the Wisdom of the <span className="text-primary mystical-glow">Stars</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              Discover your cosmic path with personalized astrology readings. Get detailed insights, birth chart
              analysis, and guidance from ancient wisdom combined with modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 mystical-glow w-full sm:w-auto"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 bg-black/50 text-foreground mystical-glow w-full sm:w-auto"
                >
                  <Moon className="h-5 w-5 mr-2" />
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Ancient Wisdom, Modern Intelligence</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Experience the power of Vedic astrology enhanced by artificial intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/30 bg-black/50 hover:shadow-lg transition-all duration-300 card-glow hover:mystical-glow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mystical-glow">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-card-foreground">Personalized Birth Charts</CardTitle>
                  <CardDescription>
                    Get detailed analysis of your birth chart with AI-powered interpretations of planetary positions
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/30 bg-black/50 hover:shadow-lg transition-all duration-300 card-glow hover:mystical-glow">
                <CardHeader>
                  <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mystical-glow">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-card-foreground">Daily Predictions</CardTitle>
                  <CardDescription>
                    Receive personalized daily horoscopes and predictions based on current planetary transits
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/30 bg-black/50 hover:shadow-lg transition-all duration-300 card-glow hover:mystical-glow">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mystical-glow">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-card-foreground">Remedial Guidance</CardTitle>
                  <CardDescription>
                    Get personalized remedies and guidance to enhance positive planetary influences in your life
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
              <p className="text-xl text-muted-foreground">See what our users say about their cosmic journey</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/30 bg-popover">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-popover-foreground mb-4 text-pretty">
                    "The accuracy of the predictions is incredible. Vedic Astro AI has helped me understand my life
                    patterns and make better decisions."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-popover-foreground">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Verified User</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-popover">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-popover-foreground mb-4 text-pretty">
                    "As someone new to astrology, the AI explanations made everything so clear and accessible. Highly
                    recommend!"
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-popover-foreground">Michael R.</p>
                      <p className="text-sm text-muted-foreground">Verified User</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Discover Your Cosmic Path?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Join thousands of users who have unlocked the wisdom of Vedic astrology with AI
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 mystical-glow"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Begin Your Journey Today
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-primary/30 bg-black/50 py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Star className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Vedic Astro AI</span>
              </div>
              <div className="flex space-x-6">
                <Link href="/login" className="text-accent hover:text-accent/80 transition-colors">
                  Sign In
                </Link>
                <Link href="/register" className="text-accent hover:text-accent/80 transition-colors">
                  Register
                </Link>
                <Link href="/privacy" className="text-accent hover:text-accent/80 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-accent hover:text-accent/80 transition-colors">
                  Terms
                </Link>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/30 text-center">
              <p className="text-muted-foreground">
                © 2024 Vedic Astro AI. Unlocking cosmic wisdom through technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
