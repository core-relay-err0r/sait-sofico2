import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            About Us
          </span>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
            Who We Are
          </h1>
          <div className="mt-8 h-px w-16 bg-accent mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SoFiCo Services Limited provides operational coordination and structured 
            support services for B2B companies engaged in international trade activities.
          </p>
        </div>
      </section>

      {/* Corporate Positioning */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="text-center lg:text-left">
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Overview
              </span>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-normal text-foreground">
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
                to trade coordination.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Focus
              </span>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-normal text-foreground">
                Operational Focus
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our operational model centers on coordination activities rather than 
                direct commercial execution. We provide support services that help 
                businesses navigate the operational aspects of international trade.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                This includes documentation sequencing, vendor alignment, specification 
                coordination, and operational workflow support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination Model */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Approach
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Coordination Model
          </h2>
        </div>
        <div className="mx-auto max-w-6xl px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="bg-background p-10 md:p-12 text-center"
              >
                <h3 className="text-xl font-serif text-foreground">
                  {feature.title}
                </h3>
                <div className="mt-6 h-px w-12 bg-border mx-auto" />
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Responsibility */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Responsibility
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Risk & Responsibility
          </h2>
          <div className="mt-12 p-10 md:p-12 bg-background border border-border text-left">
            <p className="text-muted-foreground leading-relaxed">
              SoFiCo Services Limited is not a licensed financial institution and 
              does not provide banking, payment, or custody services. Our operational 
              activities are limited to coordination and documentation support services. 
              We do not hold client funds, process payments, or engage in activities 
              that would constitute regulated financial services.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Clients are responsible for their own regulatory compliance, due diligence, 
              and commercial decisions. Our coordination services are provided on a 
              non-advisory basis, and we do not provide legal, financial, or regulatory advice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Ready to Learn More?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider bg-foreground text-background transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground transition-all duration-200 hover:border-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
