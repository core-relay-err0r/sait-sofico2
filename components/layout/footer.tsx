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
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="text-center">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <span className="text-3xl font-semibold tracking-[0.2em] text-foreground">
              SOFICO
            </span>
          </Link>
          
          {/* Tagline */}
          <p className="mt-6 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Operational coordination and structured support services for B2B companies engaged in international trade activities.
          </p>
          
          {/* Navigation */}
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Decorative Line */}
          <div className="mt-16 flex justify-center">
            <div className="w-16 h-px bg-border" />
          </div>
          
          {/* Location & Registration */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-muted-foreground/60">
            <span>Hong Kong</span>
            <span className="hidden sm:inline text-border">·</span>
            <span>Registration: TEMP-XXXX</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
            <p>
              © {new Date().getFullYear()} SoFiCo Services Limited. All rights reserved.
            </p>
            <p className="text-center sm:text-right max-w-md">
              Not a bank. Does not provide payment services or hold client funds.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
