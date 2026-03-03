"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cog, Users, FileText, Globe, ArrowRightLeft, Code } from "lucide-react"

const services = [
  {
    title: "Equipment Sourcing",
    description: "Coordinated approach to equipment procurement with verified supplier networks.",
    icon: Cog,
  },
  {
    title: "Supplier Coordination",
    description: "Alignment of supplier requirements and operational specifications.",
    icon: Users,
  },
  {
    title: "Commercial Alignment",
    description: "Documentation sequencing and process structuring for commercial alignment.",
    icon: FileText,
  },
  {
    title: "Trade Structuring",
    description: "Operational coordination for cross-border trade documentation.",
    icon: Globe,
  },
  {
    title: "Cross-Border Operations",
    description: "Support for structured cross-border documentation workflows.",
    icon: ArrowRightLeft,
  },
  {
    title: "Software Development",
    description: "Custom software solutions for trade operations management.",
    icon: Code,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container-wide">
        <div className="gsap-fade-up">
          <span className="eyebrow">Services</span>
          <h2 className="section-heading mt-4 max-w-2xl">
            Comprehensive Trade Support
          </h2>
          <p className="section-subheading mt-6 max-w-xl">
            Operational coordination services designed for B2B trade activities.
          </p>
        </div>
        
        <div className="mt-16 gsap-stagger-container">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="gsap-stagger-item group p-8 bg-background border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                  <service.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 gsap-fade-up">
          <Button 
            asChild 
            variant="outline" 
            className="rounded-md border-foreground/20 hover:bg-foreground/5"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
