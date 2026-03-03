"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cog, Users, FileText, Globe, ArrowRightLeft, Code } from "lucide-react"
import { GSAPWrapper } from "@/components/gsap-provider"

const services = [
  {
    id: "equipment-sourcing",
    title: "Structured Equipment Sourcing",
    icon: Cog,
    description: "Coordinated approach to equipment procurement with verified supplier networks.",
    details: [
      "Specification alignment and documentation",
      "Vendor identification and coordination",
      "Quality requirement structuring",
      "Procurement workflow support",
    ],
  },
  {
    id: "supplier-coordination",
    title: "Supplier Coordination",
    icon: Users,
    description: "Alignment of supplier requirements and operational specifications.",
    details: [
      "Multi-party coordination support",
      "Specification documentation",
      "Communication facilitation",
      "Workflow alignment",
    ],
  },
  {
    id: "commercial-alignment",
    title: "Commercial Alignment",
    icon: FileText,
    description: "Documentation sequencing and process structuring for commercial alignment.",
    details: [
      "Documentation sequencing",
      "Commercial term structuring",
      "Process documentation",
      "Operational workflow support",
    ],
  },
  {
    id: "trade-structuring",
    title: "International Trade Structuring",
    icon: Globe,
    description: "Operational coordination for cross-border trade documentation.",
    details: [
      "Cross-border documentation support",
      "Trade flow coordination",
      "Documentation alignment",
      "Operational process structuring",
    ],
  },
  {
    id: "cross-border-coordination",
    title: "Cross-Border Operational Coordination",
    icon: ArrowRightLeft,
    description: "Support for structured cross-border documentation workflows and documentation sequences.",
    details: [
      "Documentation support",
      "Multi-jurisdictional coordination",
      "Workflow documentation",
      "Process sequencing",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    icon: Code,
    description: "Custom software solutions for trade operations management.",
    details: [
      "Trade operations platforms",
      "Documentation management systems",
      "Workflow automation tools",
      "Integration solutions",
    ],
  },
]

export default function ServicesPage() {
  return (
    <GSAPWrapper>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="max-w-3xl gsap-fade-up">
              <span className="eyebrow">What We Offer</span>
              <h1 className="section-heading mt-6 text-balance">
                Our Services
              </h1>
              <p className="section-subheading mt-8">
                Comprehensive operational coordination services for B2B trade activities. 
                Our services focus on coordination, documentation, and process structuring.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-24 lg:pb-32">
          <div className="container-wide">
            <div className="gsap-stagger-container">
              <div className="space-y-1">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`gsap-stagger-item p-8 lg:p-12 ${
                      index % 2 === 0 ? "bg-card" : "bg-muted/50"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <service.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-foreground lg:text-2xl">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {service.details.map((detail) => (
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
        </section>

        {/* Disclaimer */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="gsap-fade-up">
              <h3 className="text-sm font-semibold">Important Notice</h3>
              <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-3xl">
                Not a licensed bank. Not a financial institution. No custody of client funds. 
                Services are limited to operational coordination and documentation support. 
                SoFiCo Services Limited does not provide payment processing, financial advisory, 
                or regulated financial services of any kind.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="flex flex-col sm:flex-row gap-4 gsap-fade-up">
              <Button asChild size="lg" className="h-12 px-8 rounded-md text-base font-medium">
                <Link href="/contact">
                  Request Introduction
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 rounded-md text-base font-medium border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="/how-we-work">
                  Learn How We Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </GSAPWrapper>
  )
}
