"use client"

import { useEffect, useRef, createContext, useContext } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const GSAPContext = createContext<boolean>(false)

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      gsap.set('.gsap-fade-up, .gsap-fade-in, .gsap-scale-in, .gsap-slide-up, .gsap-line-grow', {
        opacity: 1,
        transform: 'none'
      })
      return
    }

    // Fade up animations
    gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
      gsap.to(el as Element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Fade in animations
    gsap.utils.toArray('.gsap-fade-in').forEach((el) => {
      gsap.to(el as Element, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Scale in animations
    gsap.utils.toArray('.gsap-scale-in').forEach((el) => {
      gsap.to(el as Element, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Slide up animations
    gsap.utils.toArray('.gsap-slide-up').forEach((el) => {
      gsap.to(el as Element, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Line grow animations
    gsap.utils.toArray('.gsap-line-grow').forEach((el) => {
      gsap.to(el as Element, {
        scaleX: 1,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Stagger groups
    gsap.utils.toArray('.gsap-stagger').forEach((container) => {
      const items = (container as Element).querySelectorAll('.gsap-stagger-item')
      gsap.fromTo(items, 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container as Element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <GSAPContext.Provider value={true}>
      {children}
    </GSAPContext.Provider>
  )
}

export function useGSAPContext() {
  return useContext(GSAPContext)
}
