import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ComplianceSection } from "@/components/sections/compliance-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { VendorsSection } from "@/components/sections/vendors-section"
import { CTASection } from "@/components/sections/cta-section"
import { SectionDivider } from "@/components/section-divider"

export default function HomePage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <ComplianceSection />
      <SectionDivider />
      <WhyUsSection />
      <SectionDivider />
      <VendorsSection />
      <SectionDivider />
      <CTASection />
    </div>
  )
}
