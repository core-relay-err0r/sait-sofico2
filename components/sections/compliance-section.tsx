import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"

export function ComplianceSection() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow text-center">
        <div className="gsap-fade-up">
          <Shield className="h-12 w-12 text-accent mx-auto" strokeWidth={1} />
        </div>
        <span className="eyebrow mt-10 block gsap-fade-up">Compliance</span>
        <h2 className="heading-section mt-6 gsap-fade-up">
          Built on Integrity
        </h2>
        <div className="divider-accent mt-10 gsap-line-grow" />
        <p className="body-large mt-10 gsap-fade-up">
          Our operations are structured with regulatory awareness and compliance 
          at their foundation. We maintain clear boundaries regarding our 
          operational scope and regulatory positioning.
        </p>
        <div className="mt-14 gsap-fade-up">
          <Link href="/compliance" className="btn-outline">
            View Compliance Information
            <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
