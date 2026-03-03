"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const processSteps = [
  { number: "01", title: "Assessment", description: "Comprehensive review of operational requirements and trade objectives." },
  { number: "02", title: "Design", description: "Development of customized coordination frameworks and documentation flows." },
  { number: "03", title: "Execution", description: "Systematic implementation with ongoing alignment and process optimization." },
  { number: "04", title: "Support", description: "Continuous coordination throughout the trade lifecycle." },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.process-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      })

      // Steps stagger animation
      gsap.from('.process-step', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 85%',
        }
      })

      // Number animation
      gsap.from('.step-number', {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 85%',
        }
      })

      // Button animation
      gsap.from('.process-btn', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-btn',
          start: 'top 90%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 bg-card">
      <div className="process-header mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Our Approach
        </span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          How We Work
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          A structured methodology designed for clarity and precision.
        </p>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 mt-20">
        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="process-step text-center group">
              <span className="step-number inline-block text-6xl lg:text-7xl font-serif text-accent/30 group-hover:text-accent transition-colors duration-500">{step.number}</span>
              <h3 className="mt-4 text-xl font-serif text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="process-btn mt-20 text-center">
          <Link href="/how-we-work" className="btn-outline">
            Explore Our Process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
