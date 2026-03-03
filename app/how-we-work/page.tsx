"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, AlertTriangle, UserCheck, FileSearch } from "lucide-react"
import { GSAPWrapper } from "@/components/gsap-provider"

const steps = [
  {
    step: "01",
    title: "Requirements Intake",
    subtitle: "(Non-binding)",
    description:
      "Initial consultation to understand operational requirements and objectives. We gather information about your trade coordination needs and assess alignment with our service capabilities.",
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
    description:
      "Identification and alignment of vendor capabilities with your stated requirements. This includes specification documentation and preliminary vendor coordination.",
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
    description:
      "Structured preparation and sequencing of documentation required for trade coordination. This includes workflow documentation and process structuring.",
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
    description:
      "Ongoing operational support throughout the coordination lifecycle. We provide coordination assistance and documentation support as required.",
    details: [
      "Ongoing coordination assistance",
      "Documentation support",
      "Multi-party communication facilitation",
      "Process monitoring and updates",
    ],
  },
]

const complianceCheckpoints = [
  {
    title: "Sanctions Screening",
    description: "Awareness of applicable sanctions regimes and screening considerations.",
    icon: Shield,
  },
  {
    title: "Export Control Awareness",
    description: "Consideration of export control requirements and documentation needs.",
    icon: AlertTriangle,
  },
  {
    title: "End-Use Review",
    description: "Documentation support for end-use and end-user verification processes.",
    icon: UserCheck,
  },
]

export default function HowWeWorkPage() {
  return (
    <GSAPWrapper>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="max-w-3xl gsap-fade-up">
              <span className="eyebrow">Our Process</span>
              <h1 className="section-heading mt-6 text-balance">
                How We Work
              </h1>
              <p className="section-subheading mt-8">
                A structured approach to operational coordination. Our process is designed 
                to provide clear, documented support throughout the trade coordination lifecycle.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="pb-24 lg:pb-32">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Steps */}
              <div className="lg:col-span-8">
                <div className="gsap-stagger-container">
                  <div className="space-y-1">
                    {steps.map((step) => (
                      <div
                        key={step.step}
                        className="gsap-stagger-item p-8 lg:p-10 bg-card border border-border/50"
                      >
                        <div className="flex items-start gap-6">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold text-base">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h2 className="text-xl font-semibold text-foreground">
                              {step.title}
                              {step.subtitle && (
                                <span className="ml-2 text-sm font-normal text-muted-foreground">
                                  {step.subtitle}
                                </span>
                              )}
                            </h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                            <ul className="mt-6 space-y-2">
                              {step.details.map((detail) => (
                                <li
                                  key={detail}
                                  className="flex items-center gap-3 text-sm text-muted-foreground"
                                >
                                  <div className="h-1 w-1 rounded-full bg-foreground" />
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
              </div>

              {/* Compliance Checkpoints Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 gsap-fade-up">
                  <div className="p-6 bg-card border border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <FileSearch className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                      <h3 className="text-lg font-semibold text-foreground">
                        Compliance Checkpoints
                      </h3>
                    </div>
                    <div className="space-y-6">
                      {complianceCheckpoints.map((checkpoint) => (
                        <div key={checkpoint.title} className="flex items-start gap-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
                            <checkpoint.icon className="h-4 w-4 text-foreground" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">
                              {checkpoint.title}
                            </h4>
                            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                              {checkpoint.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-border">
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full rounded-md border-foreground/20 hover:bg-foreground/5"
                      >
                        <Link href="/compliance">
                          View Compliance Info
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="container-wide">
            <div className="flex flex-col sm:flex-row gap-4 gsap-fade-up">
              <Button asChild size="lg" className="h-12 px-8 rounded-md text-base font-medium">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 rounded-md text-base font-medium border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </GSAPWrapper>
  )
}
