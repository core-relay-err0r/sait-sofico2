"use client"

import Link from "next/link"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/how-we-work" },
  { name: "Vendors", href: "/vendors" },
  { name: "Compliance", href: "/compliance" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Top Row: Logo and Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <span className="text-xl font-semibold tracking-[0.2em] text-foreground">
              SOFICO
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Divider */}
        <div className="mt-10 h-px w-full bg-border" />
        
        {/* Bottom Row */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: Copyright & Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground/70">
            <span>© {new Date().getFullYear()} SoFiCo Services Limited</span>
            <span className="hidden sm:inline text-border">·</span>
            <span>Hong Kong</span>
          </div>
          
          {/* Right: Disclaimer */}
          <p className="text-xs text-muted-foreground/50 max-w-sm md:text-right">
            Not a bank. Does not provide payment services or hold client funds.
          </p>
        </div>
      </div>
    </footer>
  )
}
