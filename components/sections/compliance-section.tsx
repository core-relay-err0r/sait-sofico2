"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, FileCheck, Lock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Regulatory Awareness",
    description: "Operations structured with compliance considerations at their foundation.",
  },
  {
    icon: FileCheck,
    title: "Documentation Standards",
    description: "Clear documentation practices aligned with industry requirements.",
  },
  {
    icon: Lock,
    title: "Operational Boundaries",
    description: "Well-defined scope of services with transparent limitations.",
  },
]

export function ComplianceSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="gsap-fade-up">
            <span className="eyebrow text-primary-foreground/60">Compliance</span>
            <h2 className="section-heading mt-4 text-primary-foreground">
              Compliance-First Approach
            </h2>
            <p className="section-subheading mt-6 text-primary-foreground/70">
              Our operations are structured with regulatory awareness and compliance 
              considerations at their foundation.
            </p>
            <div className="mt-10">
              <Button 
                asChild 
                variant="outline" 
                className="rounded-md border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/compliance">
                  View Compliance Info
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="gsap-stagger-container">
            <div className="space-y-6">
              {features.map((feature) => (
                <div 
                  key={feature.title} 
                  className="gsap-stagger-item flex gap-5 p-6 bg-primary-foreground/5 rounded-md"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10">
                      <feature.icon className="h-5 w-5 text-primary-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
