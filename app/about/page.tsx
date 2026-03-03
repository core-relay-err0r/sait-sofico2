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
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-24">
        <div className="container-narrow text-center py-24 lg:py-32">
          <span className="eyebrow gsap-fade-up">About Us</span>
          <h1 className="heading-display mt-8 gsap-fade-up">
            Who We Are
          </h1>
          <div className="divider-accent mt-10 gsap-line-grow" />
          <p className="body-large mt-10 gsap-fade-up">
            SoFiCo Services Limited provides operational coordination and structured 
            support services for B2B companies engaged in international trade activities.
          </p>
        </div>
      </section>

      {/* Corporate Positioning */}
      <section className="section-spacing bg-card">
        <div className="container-medium">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-24">
            <div className="text-center lg:text-left gsap-fade-up">
              <span className="eyebrow">Overview</span>
              <h2 className="heading-subsection mt-6">
                Corporate Positioning
              </h2>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                Our company operates as an operational coordination entity, providing 
                structured support services for businesses involved in cross-border 
                trade. We focus on documentation coordination, supplier alignment, 
                and process structuring.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We work with established businesses that require systematic approaches 
                to trade coordination.
              </p>
            </div>
            <div className="text-center lg:text-left gsap-fade-up">
              <span className="eyebrow">Focus</span>
              <h2 className="heading-subsection mt-6">
                Operational Focus
              </h2>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                Our operational model centers on coordination activities rather than 
                direct commercial execution. We provide support services that help 
                businesses navigate the operational aspects of international trade.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                This includes documentation sequencing, vendor alignment, specification 
                coordination, and operational workflow support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordination Model */}
      <section className="section-spacing border-t border-border">
        <div className="container-medium text-center">
          <span className="eyebrow gsap-fade-up">Approach</span>
          <h2 className="heading-section mt-6 gsap-fade-up">
            Coordination Model
          </h2>
        </div>
        <div className="container-wide mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border gsap-stagger">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="bg-background p-10 md:p-12 text-center gsap-stagger-item"
              >
                <h3 className="text-xl font-serif text-foreground">
                  {feature.title}
                </h3>
                <div className="divider-short mt-6" />
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Responsibility */}
      <section className="section-spacing bg-card">
        <div className="container-narrow text-center">
          <span className="eyebrow gsap-fade-up">Responsibility</span>
          <h2 className="heading-section mt-6 gsap-fade-up">
            Risk & Responsibility
          </h2>
          <div className="mt-12 p-10 md:p-12 bg-background border border-border text-left gsap-fade-up">
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
      <section className="section-spacing border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="heading-section gsap-fade-up">
            Ready to Learn More?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 gsap-fade-up">
            <Link href="/services" className="btn-primary">
              View Our Services
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
