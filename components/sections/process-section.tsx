import Link from "next/link"
import { ArrowRight } from "lucide-react"

const processSteps = [
  { number: "01", title: "Assessment", description: "Comprehensive review of operational requirements and trade objectives." },
  { number: "02", title: "Design", description: "Development of customized coordination frameworks and documentation flows." },
  { number: "03", title: "Execution", description: "Systematic implementation with ongoing alignment and process optimization." },
  { number: "04", title: "Support", description: "Continuous coordination throughout the trade lifecycle." },
]

export function ProcessSection() {
  return (
    <section className="pt-20 pb-16 bg-card">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="gsap-fade-up inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Our Approach
        </span>
        <h2 className="gsap-fade-up mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          How We Work
        </h2>
        <p className="gsap-fade-up mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          A structured methodology designed for clarity and precision.
        </p>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 mt-20">
        <div className="gsap-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="gsap-stagger-item text-center">
              <span className="gsap-counter text-6xl lg:text-7xl font-serif text-accent/60">{step.number}</span>
              <h3 className="mt-4 text-xl font-serif text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="gsap-fade-up mt-20 text-center">
          <Link 
            href="/how-we-work" 
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-widest border border-border/60 text-foreground/80 transition-all duration-200 hover:border-foreground hover:text-foreground"
          >
            Explore Our Process
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
