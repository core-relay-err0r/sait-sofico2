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
    <section className="section-spacing bg-card">
      <div className="container-medium text-center">
        <span className="eyebrow gsap-fade-up">Our Approach</span>
        <h2 className="heading-section mt-6 gsap-fade-up">
          How We Work
        </h2>
        <p className="body-large mt-8 gsap-fade-up">
          A structured methodology designed for clarity and precision.
        </p>
      </div>
      
      <div className="container-wide mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 gsap-stagger">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center gsap-stagger-item">
              <span className="text-7xl lg:text-8xl font-serif text-accent/70">{step.number}</span>
              <h3 className="mt-6 text-xl font-serif text-foreground">{step.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center gsap-fade-up">
          <Link href="/how-we-work" className="btn-outline">
            Explore Our Process
            <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
