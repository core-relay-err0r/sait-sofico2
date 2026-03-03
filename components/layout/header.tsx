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
  { name: "Contact", href: "/contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background border-b border-border' 
          : 'bg-background'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-semibold tracking-wider text-foreground">
              SOFICO
            </span>
          </Link>
          
          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex md:items-center md:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-foreground text-background transition-colors duration-200 hover:bg-foreground/90"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-background border-l border-border">
            <div className="flex items-center justify-between h-20 px-6">
              <span className="text-xl font-semibold tracking-wider text-foreground">
                SOFICO
              </span>
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-foreground hover:text-accent transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-border">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium bg-foreground text-background"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
