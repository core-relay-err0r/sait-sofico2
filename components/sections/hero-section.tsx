"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.from('.hero-eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2
      })
      .from('.hero-title', {
        opacity: 0,
        y: 40,
        duration: 0.8,
      }, '-=0.3')
      .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.7,
      }, '-=0.4')
      .from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.3')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[85vh] flex items-center">
      <div className="container-wide">
        <div className="max-w-4xl py-24 lg:py-32">
          <span className="hero-eyebrow eyebrow block">
            B2B Trade Operations
          </span>
          <h1 className="hero-title section-heading mt-6 text-balance">
            Structured Coordination for International Trade
          </h1>
          <p className="hero-description section-subheading mt-8 max-w-2xl">
            Operational coordination, supplier alignment, and documentation support 
            for cross-border trade. We provide structured coordination services for 
            B2B companies engaged in international commerce.
          </p>
          <div className="hero-buttons mt-12 flex flex-col sm:flex-row gap-4">
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
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
