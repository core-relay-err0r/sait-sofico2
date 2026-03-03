"use client"

import Link from "next/link"
import { useState } from "react"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-semibold tracking-[0.2em] text-foreground">
              SOFICO
            </span>
          </Link>
          
          {/* Hamburger Menu Button - Right */}
          <button
            className="p-2 text-foreground hover:text-accent transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Full Screen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <Link 
                  href="/" 
                  className="text-xl font-semibold tracking-[0.2em] text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SOFICO
                </Link>
                <button
                  className="p-2 text-foreground hover:text-accent transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            {/* Menu Links - Centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-light tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Menu Footer */}
            <div className="px-6 py-10 text-center border-t border-border/30">
              <p className="text-xs text-muted-foreground/60 tracking-[0.2em] uppercase">
                B2B Trade Services
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
