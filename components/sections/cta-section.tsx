import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="pt-20 pb-16 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Get Started
        </span>
        <h2 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
          Ready to Begin?
        </h2>
        <div className="mt-6 sm:mt-8 h-px w-16 bg-accent mx-auto" />
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Request a business introduction to discuss your operational 
          coordination requirements.
        </p>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 text-xs font-medium uppercase tracking-widest bg-primary text-primary-foreground transition-all duration-200 hover:bg-accent"
          >
            Request Introduction
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/services" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:py-2.5 text-xs font-medium uppercase tracking-widest border border-border text-foreground transition-all duration-200 hover:border-primary hover:bg-muted"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
