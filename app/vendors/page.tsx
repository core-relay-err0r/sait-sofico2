import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { vendorPlaceholders } from "@/content/vendors"

export default function VendorsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-24">
        <div className="container-narrow text-center py-24 lg:py-32">
          <span className="eyebrow gsap-fade-up">Network</span>
          <h1 className="heading-display mt-8 gsap-fade-up">
            Vendor Network
          </h1>
          <div className="divider-accent mt-10 gsap-line-grow" />
          <p className="body-large mt-10 gsap-fade-up">
            Reference vendors for coordination purposes. Our vendor coordination 
            services help align supplier capabilities with operational requirements.
          </p>
        </div>
      </section>

      {/* Vendor Grid */}
      <section className="section-spacing-sm border-t border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border gsap-stagger">
            {vendorPlaceholders.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-background aspect-[2/1] flex items-center justify-center gsap-stagger-item"
              >
                <div className="h-5 w-16 rounded-sm bg-muted" aria-label={vendor.name} />
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-16 p-8 md:p-10 bg-card border border-border text-center gsap-fade-up">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Vendor list shown for reference purposes only. No authorization or partnership 
              is implied. The inclusion of any vendor in this list does not constitute an 
              endorsement, recommendation, or representation of any commercial relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="section-spacing bg-card">
        <div className="container-medium text-center">
          <span className="eyebrow gsap-fade-up">Services</span>
          <h2 className="heading-section mt-6 gsap-fade-up">
            Vendor Services
          </h2>
        </div>
        
        <div className="container-wide mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border gsap-stagger">
            <div className="bg-background p-10 md:p-12 text-center gsap-stagger-item">
              <h3 className="text-xl font-serif text-foreground">
                Vendor Coordination
              </h3>
              <div className="divider-short mt-6" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Our vendor coordination services help align supplier capabilities with 
                your operational requirements. We facilitate communication and 
                documentation between parties involved in trade activities.
              </p>
            </div>
            <div className="bg-background p-10 md:p-12 text-center gsap-stagger-item">
              <h3 className="text-xl font-serif text-foreground">
                Specification Alignment
              </h3>
              <div className="divider-short mt-6" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                We support the documentation and alignment of technical specifications 
                between your organization and potential vendors. This includes 
                requirement structuring and communication facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="heading-section gsap-fade-up">
            Need Vendor Information?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 gsap-fade-up">
            <Link href="/contact" className="btn-primary">
              Request Information
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-outline">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
