"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: "Operational Coordination",
    description: "Structured coordination of cross-border trade operations with systematic documentation and process alignment.",
  },
  {
    title: "Supplier Alignment",
    description: "Vendor assessment, specification matching, and multi-party communication facilitation for trade activities.",
  },
  {
    title: "Documentation Support",
    description: "Comprehensive documentation workflows including contract structuring and compliance documentation.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.services-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      })

      // Cards stagger animation
      gsap.from('.service-card', {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
        }
      })

      // Button animation
      gsap.from('.services-btn', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-btn',
          start: 'top 90%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 border-t border-border">
      <div className="services-header mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          What We Do
        </span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          Services
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive operational coordination for B2B trade activities.
        </p>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 mt-20">
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card bg-background p-10 md:p-12 text-center group hover:bg-card transition-colors duration-500"
            >
              <span className="text-xs text-accent font-medium tracking-widest">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-serif text-foreground group-hover:text-accent transition-colors duration-300">{service.title}</h3>
              <div className="mt-6 h-px w-12 bg-border mx-auto group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="services-btn mt-16 text-center">
          <Link href="/services" className="btn-outline">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
