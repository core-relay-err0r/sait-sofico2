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
    <section className="section-spacing border-t border-border">
      <div className="container-medium text-center">
        <span className="eyebrow gsap-fade-up">What We Do</span>
        <h2 className="heading-section mt-6 gsap-fade-up">
          Services
        </h2>
        <p className="body-large mt-8 gsap-fade-up">
          Comprehensive operational coordination for B2B trade activities.
        </p>
      </div>
      
      <div className="container-wide mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border gsap-stagger">
          {services.map((service) => (
            <div key={service.title} className="bg-background p-10 md:p-14 text-center gsap-stagger-item">
              <h3 className="text-xl md:text-2xl font-serif text-foreground">{service.title}</h3>
              <div className="divider-short mt-8" />
              <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center gsap-fade-up">
          <Link href="/services" className="btn-outline">
            View All Services
            <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
