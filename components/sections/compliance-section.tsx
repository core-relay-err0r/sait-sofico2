import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"

export function ComplianceSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Shield className="h-12 w-12 text-accent mx-auto" strokeWidth={1} />
        
        <span className="mt-8 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Compliance
        </span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          Built on Integrity
        </h2>
        <div className="mt-8 h-px w-16 bg-accent mx-auto" />
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Our operations are structured with regulatory awareness and compliance 
          at their foundation. We maintain clear boundaries regarding our 
          operational scope and regulatory positioning.
        </p>
        <div className="mt-12">
          <Link 
            href="/compliance" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground transition-all duration-200 hover:border-foreground"
          >
            View Compliance Information
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
