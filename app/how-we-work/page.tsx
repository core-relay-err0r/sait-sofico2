import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, UserCheck } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Requirements Intake",
    subtitle: "Non-binding",
    description: "Initial consultation to understand operational requirements and objectives. We gather information about your trade coordination needs.",
    details: [
      "Initial consultation and requirement gathering",
      "Assessment of coordination needs",
      "Scope definition and expectation alignment",
      "Non-binding preliminary evaluation",
    ],
  },
  {
    step: "02",
    title: "Vendor and Specification Alignment",
    description: "Identification and alignment of vendor capabilities with your stated requirements. Includes specification documentation and preliminary coordination.",
    details: [
      "Vendor identification based on requirements",
      "Specification documentation",
      "Capability alignment assessment",
      "Preliminary coordination activities",
    ],
  },
  {
    step: "03",
    title: "Documentation Sequencing",
    description: "Structured preparation and sequencing of documentation required for trade coordination. Includes workflow documentation and process structuring.",
    details: [
      "Documentation workflow preparation",
      "Process sequencing and structuring",
      "Coordination documentation",
      "Timeline and milestone alignment",
    ],
  },
  {
    step: "04",
    title: "Coordination Support",
    description: "Ongoing operational support throughout the coordination lifecycle. We provide coordination assistance and documentation support as required.",
    details: [
      "Ongoing coordination assistance",
      "Documentation support",
      "Multi-party communication facilitation",
      "Process monitoring and updates",
    ],
  },
]

const complianceCheckpoints = [
  { title: "Sanctions Screening", description: "Awareness of applicable sanctions regimes.", icon: Shield },
  { title: "Export Control", description: "Consideration of export control requirements.", icon: AlertTriangle },
  { title: "End-Use Review", description: "Documentation support for verification processes.", icon: UserCheck },
]

export default function HowWeWorkPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Our Process
          </span>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
            How We Work
          </h1>
          <div className="mt-8 h-px w-16 bg-accent mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to operational coordination designed 
            for clarity and documented support.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`py-16 md:py-20 ${
                index !== steps.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="text-center">
                <span className="text-5xl lg:text-6xl font-serif text-accent/60">{step.step}</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-serif text-foreground">
                  {step.title}
                </h2>
                {step.subtitle && (
                  <span className="mt-2 inline-block text-sm text-muted-foreground">
                    ({step.subtitle})
                  </span>
                )}
                <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {step.description}
                </p>
                <ul className="mt-8 inline-flex flex-col items-center gap-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="text-sm text-muted-foreground/70 flex items-center gap-3">
                      <span className="h-px w-4 bg-accent/50" />
                      {detail}
                      <span className="h-px w-4 bg-accent/50" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Checkpoints */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Compliance
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Compliance Checkpoints
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrated compliance awareness throughout our process.
          </p>
        </div>
        
        <div className="mx-auto max-w-6xl px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {complianceCheckpoints.map((checkpoint) => (
              <div key={checkpoint.title} className="bg-background p-10 md:p-12 text-center">
                <checkpoint.icon className="h-8 w-8 text-accent mx-auto" strokeWidth={1} />
                <h3 className="mt-6 text-xl font-serif text-foreground">{checkpoint.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  {checkpoint.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-14 text-center">
            <Link 
              href="/compliance" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground transition-all duration-200 hover:border-foreground"
            >
              View Full Compliance Info
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Ready to Start?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider bg-foreground text-background transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground transition-all duration-200 hover:border-foreground"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
