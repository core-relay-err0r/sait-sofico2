import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, UserCheck, Check } from "lucide-react"

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

      {/* Process Steps - New Card Layout */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.step}
                className="group relative bg-card border border-border p-8 md:p-10 transition-all duration-300 hover:border-accent/30"
              >
                {/* Step Number Badge */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl font-serif text-accent">{step.step}</span>
                  {step.subtitle && (
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-1">
                      {step.subtitle}
                    </span>
                  )}
                </div>
                
                {/* Title */}
                <h2 className="text-xl md:text-2xl font-serif text-foreground mb-4">
                  {step.title}
                </h2>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {/* Divider */}
                <div className="h-px w-full bg-border mb-6" />
                
                {/* Details List */}
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              View Full Compliance Info
              <ArrowRight className="h-3.5 w-3.5" />
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
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
            >
              Start a Conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
