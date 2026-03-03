"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { vendorPlaceholders } from "@/content/vendors"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function VendorsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.vendors-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      })

      // Grid animation
      gsap.from('.vendor-card', {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.vendors-grid',
          start: 'top 85%',
        }
      })

      // Footer text animation
      gsap.from('.vendors-footer', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.vendors-footer',
          start: 'top 95%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 bg-card">
      <div className="vendors-header mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Network
        </span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          Vendor Network
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Reference vendors for coordination purposes.
        </p>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 mt-16">
        <div className="vendors-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {vendorPlaceholders.slice(0, 6).map((vendor) => (
            <div 
              key={vendor.id} 
              className="vendor-card bg-background aspect-[2/1] flex items-center justify-center hover:bg-card transition-colors duration-300"
            >
              <div className="h-5 w-16 rounded-sm bg-muted" aria-label={vendor.name} />
            </div>
          ))}
        </div>
        
        <div className="vendors-footer mt-10 text-center">
          <p className="text-xs text-muted-foreground/60">
            Vendor list shown for reference purposes only. No authorization or partnership is implied.
          </p>
          
          <div className="mt-8">
            <Link href="/vendors" className="btn-ghost">
              View All Vendors
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
