import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Operational Coordination",
    description: "Structured coordination of cross-border trade operations with systematic documentation and process alignment.",
  },
  {
    title: "Supplier Alignment",
    description: "Vendor assessment, specification matching, and multi-party communication facilitation for trade activities.",
  },
  {
    title: "Documentation Support",
    description: "Comprehensive documentation workflows including contract structuring and compliance documentation.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="gsap-fade-up inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          What We Do
        </span>
        <h2 className="gsap-fade-up mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          Services
        </h2>
        <p className="gsap-fade-up mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive operational coordination for B2B trade activities.
        </p>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 mt-20">
        <div className="gsap-stagger grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div key={service.title} className="gsap-stagger-item bg-background p-10 md:p-12 text-center">
              <h3 className="text-xl font-serif text-foreground">{service.title}</h3>
              <div className="mt-6 h-px w-12 bg-border mx-auto" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="gsap-fade-up mt-12 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-widest border border-border/60 text-foreground/80 transition-all duration-200 hover:border-foreground hover:text-foreground"
          >
            View All Services
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
