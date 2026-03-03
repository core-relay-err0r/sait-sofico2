import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ComplianceSection } from "@/components/sections/compliance-section"
import { VendorsSection } from "@/components/sections/vendors-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ComplianceSection />
      <VendorsSection />
      <CTASection />
    </div>
  )
}
