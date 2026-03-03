"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Shield } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ComplianceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Icon animation
      gsap.from('.compliance-icon', {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      })

      // Text content animation
      gsap.from('.compliance-content > *', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      })

      // Line grow animation
      gsap.from('.compliance-line', {
        scaleX: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.compliance-line',
          start: 'top 85%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="compliance-icon inline-flex items-center justify-center w-20 h-20 rounded-full border border-accent/30 bg-accent/5">
          <Shield className="h-10 w-10 text-accent" strokeWidth={1} />
        </div>
        
        <div className="compliance-content">
          <span className="mt-8 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Compliance
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Built on Integrity
          </h2>
          <div className="compliance-line mt-8 h-px w-16 bg-accent mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Our operations are structured with regulatory awareness and compliance 
            at their foundation. We maintain clear boundaries regarding our 
            operational scope and regulatory positioning.
          </p>
          <div className="mt-12">
            <Link href="/compliance" className="btn-outline">
              View Compliance Information
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
