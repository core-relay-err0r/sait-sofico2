"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const services = [
  {
    id: "01",
    title: "Structured Equipment Sourcing",
    description: "Coordinated approach to equipment procurement with verified supplier networks. We help align specifications with available options.",
    details: ["Specification alignment", "Vendor identification", "Quality requirements", "Procurement support"],
  },
  {
    id: "02",
    title: "Supplier Coordination",
    description: "Alignment of supplier requirements and operational specifications for seamless multi-party collaboration.",
    details: ["Multi-party coordination", "Specification documentation", "Communication facilitation", "Workflow alignment"],
  },
  {
    id: "03",
    title: "Commercial Alignment",
    description: "Documentation sequencing and process structuring for commercial alignment across all parties.",
    details: ["Documentation sequencing", "Commercial term structuring", "Process documentation", "Workflow support"],
  },
  {
    id: "04",
    title: "International Trade Structuring",
    description: "Operational coordination for cross-border trade documentation and compliance requirements.",
    details: ["Cross-border documentation", "Trade flow coordination", "Documentation alignment", "Process structuring"],
  },
  {
    id: "05",
    title: "Cross-Border Coordination",
    description: "Support for structured cross-border documentation workflows and multi-jurisdictional operations.",
    details: ["Documentation support", "Multi-jurisdictional work", "Workflow documentation", "Process sequencing"],
  },
  {
    id: "06",
    title: "Software Development",
    description: "Custom software solutions for trade operations management and workflow automation.",
    details: ["Trade platforms", "Documentation systems", "Workflow automation", "Integration solutions"],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <ScrollAnimation animation="fade-up">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              What We Offer
            </span>
            <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
              Our Services
            </h1>
            <div className="mt-8 h-px w-16 bg-accent mx-auto" />
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive operational coordination services for B2B trade activities.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={service.id} index={index}>
                <div className="h-full p-8 md:p-10 bg-card border border-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-serif text-accent/60">{service.id}</span>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-serif text-foreground">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="text-sm text-muted-foreground/70 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent/60 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Disclaimer */}
      <ScrollAnimation animation="fade-in">
        <section className="py-16 bg-card border-y border-border">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Not a licensed bank. Not a financial institution. No custody of client funds. 
              Services are limited to operational coordination and documentation support. 
              SoFiCo Services Limited does not provide payment processing, financial advisory, 
              or regulated financial services of any kind.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fade-up">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground">
              Ready to Get Started?
            </h2>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
              >
                Request Introduction
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link 
                href="/how-we-work" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
