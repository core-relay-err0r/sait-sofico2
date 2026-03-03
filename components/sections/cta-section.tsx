"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Content animation
      gsap.from('.cta-content > *', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      })

      // Line animation
      gsap.from('.cta-line', {
        scaleX: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.cta-line',
          start: 'top 85%',
        }
      })

      // Buttons animation
      gsap.from('.cta-btn', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-buttons',
          start: 'top 90%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 border-t border-border">
      <div className="cta-content mx-auto max-w-3xl px-6 text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Get Started
        </span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          Ready to Begin?
        </h2>
        <div className="cta-line mt-8 h-px w-16 bg-accent mx-auto" />
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Request a business introduction to discuss your operational 
          coordination requirements.
        </p>
        <div className="cta-buttons mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="cta-btn btn-primary">
            Request Introduction
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/services" className="cta-btn btn-outline">
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
