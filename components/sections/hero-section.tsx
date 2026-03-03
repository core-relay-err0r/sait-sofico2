"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
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
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-btn', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.3')
      .from('.hero-scroll', {
        opacity: 0,
        duration: 0.6,
      }, '-=0.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen flex flex-col justify-center bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <div className="hero-eyebrow">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent border border-accent/30 px-5 py-2.5">
            B2B Trade Services
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="hero-title mt-8 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1]">
          Precision in Global Trade
        </h1>
        
        {/* Description */}
        <p className="hero-description mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Operational coordination and structured support for enterprises engaged in international commerce. 
          We bridge the gap between complex trade requirements and seamless execution.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="hero-btn btn-primary">
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/about" className="hero-btn btn-outline">
            Learn More
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/40" />
        <span className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          Scroll
        </span>
      </div>
    </section>
  )
}
