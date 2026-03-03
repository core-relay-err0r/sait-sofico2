"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { GSAPWrapper } from "@/components/gsap-provider"

const features = [
  {
    title: "Documentation Support",
    description: "Coordination of documentation workflows for trade activities, including specification alignment and document sequencing.",
  },
  {
    title: "Vendor Coordination", 
    description: "Alignment of vendor requirements with operational specifications and coordination of multi-party interactions.",
  },
  {
    title: "Process Structuring",
    description: "Development of structured operational processes for trade coordination and workflow optimization.",
  },
]

export default function AboutPage() {
  return (
    <GSAPWrapper>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="max-w-3xl gsap-fade-up">
              <span className="eyebrow">About Us</span>
              <h1 className="section-heading mt-6 text-balance">
                About SoFiCo Services
              </h1>
              <p className="section-subheading mt-8">
                SoFiCo Services Limited provides operational coordination and structured 
                support services for B2B companies engaged in international trade activities.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Positioning */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="gsap-fade-up">
                <span className="eyebrow">Overview</span>
                <h2 className="text-2xl font-semibold text-foreground mt-4 lg:text-3xl">
                  Corporate Positioning
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Our company operates as an operational coordination entity, providing 
                  structured support services for businesses involved in cross-border 
                  trade. We focus on documentation coordination, supplier alignment, 
                  and process structuring.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We work with established businesses that require systematic approaches 
                  to trade coordination. Our services are designed to complement existing 
                  corporate structures and operational frameworks.
                </p>
              </div>
              <div className="gsap-fade-up">
                <span className="eyebrow">Focus</span>
                <h2 className="text-2xl font-semibold text-foreground mt-4 lg:text-3xl">
                  Operational Focus
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Our operational model centers on coordination activities rather than 
                  direct commercial execution. We provide support services that help 
                  businesses navigate the operational aspects of international trade.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This includes documentation sequencing, vendor alignment, specification 
                  coordination, and operational workflow support. We maintain clear 
                  boundaries regarding the scope of our activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coordination Model */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="gsap-fade-up">
              <span className="eyebrow">Approach</span>
              <h2 className="text-2xl font-semibold text-foreground mt-4 lg:text-3xl">
                Structured Coordination Model
              </h2>
            </div>
            <div className="mt-12 gsap-stagger-container">
              <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
                {features.map((feature) => (
                  <div 
                    key={feature.title} 
                    className="gsap-stagger-item p-8 bg-card border border-border/50"
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Risk & Responsibility */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container-wide">
            <div className="max-w-3xl gsap-fade-up">
              <span className="eyebrow">Responsibility</span>
              <h2 className="text-2xl font-semibold text-foreground mt-4 lg:text-3xl">
                Risk & Responsibility
              </h2>
              <div className="mt-8 p-8 bg-background border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  SoFiCo Services Limited is not a licensed financial institution and 
                  does not provide banking, payment, or custody services. Our operational 
                  activities are limited to coordination and documentation support services. 
                  We do not hold client funds, process payments, or engage in activities 
                  that would constitute regulated financial services.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Clients are responsible for their own regulatory compliance, due diligence, 
                  and commercial decisions. Our coordination services are provided on a 
                  non-advisory basis, and we do not provide legal, financial, or regulatory advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="container-wide">
            <div className="flex flex-col sm:flex-row gap-4 gsap-fade-up">
              <Button asChild size="lg" className="h-12 px-8 rounded-md text-base font-medium">
                <Link href="/services">
                  View Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 rounded-md text-base font-medium border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </GSAPWrapper>
  )
}
