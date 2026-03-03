"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.from('.hero-eyebrow', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3
      })
      .from('.hero-title', {
        opacity: 0,
        y: 60,
        duration: 1,
      }, '-=0.4')
      .from('.hero-line', {
        scaleX: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-description', {
        opacity: 0,
        y: 40,
        duration: 0.8,
      }, '-=0.4')
      .from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, '-=0.4')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-narrow text-center py-32 lg:py-40">
        <span className="hero-eyebrow eyebrow">
          B2B Trade Services
        </span>
        
        <h1 className="hero-title heading-display mt-8 text-balance">
          Precision in<br />Global Trade
        </h1>
        
        <div className="hero-line divider-accent mt-10" />
        
        <p className="hero-description body-large mt-10">
          Operational coordination and structured support for enterprises 
          engaged in international commerce.
        </p>
        
        <div className="hero-buttons mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
          <Link href="/about" className="btn-outline">
            Learn More
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/20 to-muted-foreground/40" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
          Scroll
        </span>
      </div>
    </section>
  )
}
