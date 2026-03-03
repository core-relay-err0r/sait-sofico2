import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"

export function ComplianceSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="gsap-scale-in">
          <Shield className="h-12 w-12 text-accent mx-auto" strokeWidth={1} />
        </div>
        
        <span className="gsap-fade-up mt-8 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Compliance
        </span>
        <h2 className="gsap-fade-up mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          Built on Integrity
        </h2>
        <div className="gsap-line-grow mt-8 h-px w-16 bg-accent mx-auto origin-center" />
        <p className="gsap-fade-up mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Our operations are structured with regulatory awareness and compliance 
          at their foundation. We maintain clear boundaries regarding our 
          operational scope and regulatory positioning.
        </p>
        <div className="gsap-fade-up mt-12">
          <Link 
            href="/compliance" 
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-widest border border-border/60 text-foreground/80 transition-all duration-200 hover:border-foreground hover:text-foreground"
          >
            View Compliance Information
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
