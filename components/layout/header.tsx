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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-lg font-semibold tracking-[0.2em] text-foreground">
              SOFICO
            </span>
          </Link>
          
          {/* Hamburger Menu Button - Right */}
          <button
            className="p-2 text-foreground hover:text-accent transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Dropdown Menu Panel */}
      <div 
        className={`absolute top-full left-0 right-0 bg-background border-b border-border overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors duration-200 py-3"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
