import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { HowItWorks } from "@/components/how-it-works"
import { ProductCards } from "@/components/product-cards"
import { UseCases } from "@/components/use-cases"
import { TrustPillars } from "@/components/trust-pillars"
import { SecurityTeaser } from "@/components/security-teaser"
import { Testimonials } from "@/components/testimonials"
import { DashboardPreview } from "@/components/dashboard-preview"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <ProductCards />
      <UseCases />
      <TrustPillars />
      <SecurityTeaser />
      <Testimonials />
      <DashboardPreview />
      <CTASection />
    </>
  )
}
