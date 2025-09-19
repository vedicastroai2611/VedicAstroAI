import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">VedicAstroAI</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Effective Date: January 1, 2024</p>
              <p className="text-foreground">
                At VedicAstroAI ("we", "our", "us"), your privacy is important to us. This Privacy Policy explains how
                we collect, use, and protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Personal details you provide, such as name, date of birth, time, and place of birth.</li>
                <li>Account information like email and login details.</li>
                <li>Usage data such as app interactions, device type, and preferences.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>To generate astrological insights and predictions.</li>
                <li>To personalize your app experience.</li>
                <li>To improve and maintain our services.</li>
                <li>To send notifications or updates if you choose to receive them.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data Sharing</h2>
              <p className="text-foreground">
                We do not sell your personal data to third parties. Information may only be shared with trusted service
                providers for app functionality, or if required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
              <p className="text-foreground">
                We use industry-standard methods to protect your data. However, no method of transmission or storage is
                completely secure, so we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data Retention</h2>
              <p className="text-foreground">
                We keep your data only as long as necessary to provide services. You can request deletion of your data
                at any time through the app.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">User Rights</h2>
              <p className="text-foreground">
                You have the right to access, update, or delete your personal data. You may also request a copy of your
                stored data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Children's Privacy</h2>
              <p className="text-foreground">
                Our app is not intended for children under 13. We do not knowingly collect personal data from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Privacy Policy</h2>
              <p className="text-foreground">
                We may update this Privacy Policy at any time. Continued use of the app means you accept the updated
                policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
              <p className="text-foreground">
                If you have questions about this Privacy Policy, contact us at: support@vedicastroai.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
