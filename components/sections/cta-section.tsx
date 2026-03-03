import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="pt-20 pb-16 border-t border-border">
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
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-widest bg-foreground text-background transition-all duration-200 hover:bg-accent"
          >
            Request Introduction
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium uppercase tracking-widest border border-border/60 text-foreground/80 transition-all duration-200 hover:border-foreground hover:text-foreground"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
