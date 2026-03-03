import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow text-center">
        <span className="eyebrow gsap-fade-up">Get Started</span>
        <h2 className="heading-section mt-6 gsap-fade-up">
          Ready to Begin?
        </h2>
        <div className="divider-accent mt-10 gsap-line-grow" />
        <p className="body-large mt-10 gsap-fade-up">
          Request a business introduction to discuss your operational 
          coordination requirements.
        </p>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 gsap-fade-up">
          <Link href="/contact" className="btn-primary">
            Request Introduction
            <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
          <Link href="/services" className="btn-outline">
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
