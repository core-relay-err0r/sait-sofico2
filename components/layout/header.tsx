"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/how-we-work" },
  { name: "Vendors", href: "/vendors" },
  { name: "Compliance", href: "/compliance" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between py-6 lg:py-8">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <span className="text-[13px] font-medium uppercase tracking-[0.25em] text-foreground">
            SoFiCo
          </span>
        </Link>
        
        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* CTA - Right */}
        <div className="flex items-center gap-6">
          <Link 
            href="/contact"
            className="hidden lg:block text-[13px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:text-accent"
          >
            Contact
          </Link>
          
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <div 
          className={`absolute inset-0 bg-background flex flex-col transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container-wide flex items-center justify-between py-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-[13px] font-medium uppercase tracking-[0.25em] text-foreground">
                SoFiCo
              </span>
            </Link>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <nav className="space-y-8 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-3xl font-serif text-foreground hover:text-accent transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block text-3xl font-serif text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
