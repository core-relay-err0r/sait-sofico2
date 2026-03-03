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
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-24">
        <div className="container-narrow text-center py-24 lg:py-32">
          <span className="eyebrow gsap-fade-up">Our Process</span>
          <h1 className="heading-display mt-8 gsap-fade-up">
            How We Work
          </h1>
          <div className="divider-accent mt-10 gsap-line-grow" />
          <p className="body-large mt-10 gsap-fade-up">
            A structured approach to operational coordination designed 
            for clarity and documented support.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-spacing border-t border-border">
        <div className="container-wide">
          <div className="gsap-stagger">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`gsap-stagger-item py-16 md:py-20 ${
                  index !== steps.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <span className="text-6xl lg:text-7xl font-serif text-accent/60">{step.step}</span>
                  </div>
                  <div className="lg:col-span-4 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-serif text-foreground">
                      {step.title}
                    </h2>
                    {step.subtitle && (
                      <span className="mt-2 inline-block text-sm text-muted-foreground">
                        ({step.subtitle})
                      </span>
                    )}
                  </div>
                  <div className="lg:col-span-3 text-center lg:text-left">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground/70 flex items-center gap-3">
                          <span className="h-px w-3 bg-accent/50" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checkpoints */}
      <section className="section-spacing bg-card">
        <div className="container-medium text-center">
          <span className="eyebrow gsap-fade-up">Compliance</span>
          <h2 className="heading-section mt-6 gsap-fade-up">
            Compliance Checkpoints
          </h2>
          <p className="body-large mt-8 gsap-fade-up">
            Integrated compliance awareness throughout our process.
          </p>
        </div>
        
        <div className="container-wide mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border gsap-stagger">
            {complianceCheckpoints.map((checkpoint) => (
              <div key={checkpoint.title} className="bg-background p-10 md:p-12 text-center gsap-stagger-item">
                <checkpoint.icon className="h-8 w-8 text-accent mx-auto" strokeWidth={1} />
                <h3 className="mt-6 text-xl font-serif text-foreground">{checkpoint.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  {checkpoint.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center gsap-fade-up">
            <Link href="/compliance" className="btn-outline">
              View Full Compliance Info
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="heading-section gsap-fade-up">
            Ready to Start?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 gsap-fade-up">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-outline">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
