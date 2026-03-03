"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="container-narrow text-center">
        <div className="gsap-fade-up">
          <span className="eyebrow">Get Started</span>
          <h2 className="section-heading mt-4">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="section-subheading mt-6 mx-auto max-w-xl">
            Submit an inquiry to start a conversation about your operational coordination needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
