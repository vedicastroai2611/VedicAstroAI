import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Terms and Conditions</h1>
          <p className="text-muted-foreground mt-2">VedicAstroAI</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Effective Date: January 1, 2024</p>
              <p className="text-foreground">
                Welcome to VedicAstroAI ("we", "our", "us"). By accessing or using our app, you agree to the following
                Terms and Conditions. Please read them carefully.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Eligibility</h2>
              <p className="text-foreground">
                You must be at least 18 years old to use our app. If you are under 18, you may only use the app with
                parental or guardian supervision.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Nature of Services</h2>
              <p className="text-foreground">
                VedicAstroAI provides astrological insights, predictions, and guidance using AI algorithms and Vedic
                astrology principles. These services are for informational and entertainment purposes only. They should
                not be considered a substitute for professional advice in medical, legal, financial, or psychological
                matters.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">User Responsibilities</h2>
              <p className="text-foreground">
                You agree to provide accurate information such as name, date of birth, time, and place to generate
                predictions. You agree not to misuse the app for fraudulent, unlawful, or harmful purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
              <p className="text-foreground">
                All content, including text, graphics, algorithms, and software, is owned by or licensed to
                VedicAstroAI. You may not copy, reproduce, or distribute any part of the app without prior written
                permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p className="text-foreground">
                We do not guarantee the accuracy, completeness, or reliability of predictions. VedicAstroAI is not
                liable for any decisions or actions you take based on our insights. Use of the app is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Payments and Subscriptions</h2>
              <p className="text-foreground">
                Some features may require payment or subscription. All payments are final and non-refundable unless
                otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Termination</h2>
              <p className="text-foreground">
                We may suspend or terminate your account if you violate these Terms. You may delete your account at any
                time in the app settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
              <p className="text-foreground">
                We reserve the right to update these Terms at any time. Continued use of the app after changes are made
                means you accept the updated Terms.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
