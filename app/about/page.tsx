import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About | SoFiCo Services Limited",
  description: "Learn about SoFiCo Services Limited and our operational coordination model for B2B trade.",
}

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              About SoFiCo Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              SoFiCo Services Limited provides operational coordination and structured 
              support services for B2B companies engaged in international trade activities.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Positioning */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Corporate Positioning
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
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
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Operational Focus
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
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

      {/* Structured Coordination Model */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Structured Coordination Model
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="border border-border rounded-2xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground">
                Documentation Support
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Coordination of documentation workflows for trade activities, including 
                specification alignment and document sequencing.
              </p>
            </div>
            <div className="border border-border rounded-2xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground">
                Vendor Coordination
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Alignment of vendor requirements with operational specifications and 
                coordination of multi-party interactions.
              </p>
            </div>
            <div className="border border-border rounded-2xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground">
                Process Structuring
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Development of structured operational processes for trade coordination 
                and workflow optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Responsibility */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-foreground">
              Risk & Responsibility
            </h2>
            <div className="mt-6 border border-border rounded-2xl p-6 bg-card">
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
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="rounded-xl">
              <Link href="/services">
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
