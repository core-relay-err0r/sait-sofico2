"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useGSAP() {
  const scope = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // Immediately show all elements without animation
      gsap.set('.gsap-fade-up, .gsap-fade-in, .gsap-slide-right, .gsap-scale-in, .gsap-stagger-item', {
        opacity: 1,
        transform: 'none'
      })
      return
    }

    const ctx = gsap.context(() => {
      // Fade up animations
      gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
        gsap.to(el as Element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Fade in animations
      gsap.utils.toArray('.gsap-fade-in').forEach((el) => {
        gsap.to(el as Element, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Slide right animations
      gsap.utils.toArray('.gsap-slide-right').forEach((el) => {
        gsap.to(el as Element, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Scale in animations
      gsap.utils.toArray('.gsap-scale-in').forEach((el) => {
        gsap.to(el as Element, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Stagger animations for groups
      gsap.utils.toArray('.gsap-stagger-container').forEach((container) => {
        const items = (container as Element).querySelectorAll('.gsap-stagger-item')
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container as Element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        })
      })
    }, scope)

    return () => ctx.revert()
  }, [])

  return scope
}

export function GSAPWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const scope = useGSAP()
  
  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  )
}
