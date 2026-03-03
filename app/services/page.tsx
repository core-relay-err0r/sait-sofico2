import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Structured Equipment Sourcing",
    description: "Coordinated approach to equipment procurement with verified supplier networks.",
    details: ["Specification alignment", "Vendor identification", "Quality requirements", "Procurement support"],
  },
  {
    id: "02",
    title: "Supplier Coordination",
    description: "Alignment of supplier requirements and operational specifications.",
    details: ["Multi-party coordination", "Specification documentation", "Communication facilitation", "Workflow alignment"],
  },
  {
    id: "03",
    title: "Commercial Alignment",
    description: "Documentation sequencing and process structuring for commercial alignment.",
    details: ["Documentation sequencing", "Commercial term structuring", "Process documentation", "Workflow support"],
  },
  {
    id: "04",
    title: "International Trade Structuring",
    description: "Operational coordination for cross-border trade documentation.",
    details: ["Cross-border documentation", "Trade flow coordination", "Documentation alignment", "Process structuring"],
  },
  {
    id: "05",
    title: "Cross-Border Coordination",
    description: "Support for structured cross-border documentation workflows.",
    details: ["Documentation support", "Multi-jurisdictional work", "Workflow documentation", "Process sequencing"],
  },
  {
    id: "06",
    title: "Software Development",
    description: "Custom software solutions for trade operations management.",
    details: ["Trade platforms", "Documentation systems", "Workflow automation", "Integration solutions"],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-24">
        <div className="container-narrow text-center py-24 lg:py-32">
          <span className="eyebrow gsap-fade-up">What We Offer</span>
          <h1 className="heading-display mt-8 gsap-fade-up">
            Our Services
          </h1>
          <div className="divider-accent mt-10 gsap-line-grow" />
          <p className="body-large mt-10 gsap-fade-up">
            Comprehensive operational coordination services for B2B trade activities.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-spacing-sm border-t border-border">
        <div className="container-wide">
          <div className="gsap-stagger">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`gsap-stagger-item py-16 md:py-20 ${
                  index !== services.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-5xl font-serif text-accent/60">{service.id}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h2 className="text-2xl md:text-3xl font-serif text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground/70 flex items-center gap-3">
                          <span className="h-px w-3 bg-accent/50" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container-narrow text-center">
          <p className="text-sm text-muted-foreground leading-relaxed gsap-fade-up">
            Not a licensed bank. Not a financial institution. No custody of client funds. 
            Services are limited to operational coordination and documentation support. 
            SoFiCo Services Limited does not provide payment processing, financial advisory, 
            or regulated financial services of any kind.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-narrow text-center">
          <h2 className="heading-section gsap-fade-up">
            Ready to Get Started?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 gsap-fade-up">
            <Link href="/contact" className="btn-primary">
              Request Introduction
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <Link href="/how-we-work" className="btn-outline">
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
