import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Get Started
        </span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          Ready to Begin?
        </h2>
        <div className="mt-8 h-px w-16 bg-accent mx-auto" />
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Request a business introduction to discuss your operational 
          coordination requirements.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider bg-foreground text-background transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            Request Introduction
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground transition-all duration-200 hover:border-foreground"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
