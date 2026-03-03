"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Requirements Intake",
    description: "Initial consultation to understand operational requirements and objectives.",
  },
  {
    number: "02",
    title: "Vendor Alignment",
    description: "Specification alignment and vendor identification based on stated requirements.",
  },
  {
    number: "03",
    title: "Documentation",
    description: "Structured documentation preparation and workflow coordination.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Operational support throughout the coordination lifecycle.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="gsap-fade-up">
            <span className="eyebrow">Process</span>
            <h2 className="section-heading mt-4">
              How We Work
            </h2>
            <p className="section-subheading mt-6">
              A structured approach to operational coordination designed for efficiency and transparency.
            </p>
            <div className="mt-10">
              <Button 
                asChild 
                variant="outline" 
                className="rounded-md border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="/how-we-work">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="gsap-stagger-container">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="gsap-stagger-item flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-semibold text-muted-foreground">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 border-b border-border pb-8">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
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
