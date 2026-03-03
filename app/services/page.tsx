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
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            What We Offer
          </span>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
            Our Services
          </h1>
          <div className="mt-8 h-px w-16 bg-accent mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive operational coordination services for B2B trade activities.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`py-12 md:py-16 ${
                index !== services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                <div className="lg:col-span-1">
                  <span className="text-4xl lg:text-5xl font-serif text-accent/60">{service.id}</span>
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
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Not a licensed bank. Not a financial institution. No custody of client funds. 
            Services are limited to operational coordination and documentation support. 
            SoFiCo Services Limited does not provide payment processing, financial advisory, 
            or regulated financial services of any kind.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Ready to Get Started?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider bg-foreground text-background transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Request Introduction
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/how-we-work" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground transition-all duration-200 hover:border-foreground"
            >
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
