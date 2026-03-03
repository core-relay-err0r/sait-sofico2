"use client"

import Link from "next/link"
import { Mail } from "lucide-react"

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { name: "Operational Coordination", href: "/services" },
      { name: "Supplier Alignment", href: "/services" },
      { name: "Documentation Support", href: "/services" },
      { name: "Trade Facilitation", href: "/services" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "How We Work", href: "/how-we-work" },
      { name: "Vendor Network", href: "/vendors" },
      { name: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Compliance", href: "/compliance" },
      { name: "Privacy Policy", href: "/compliance" },
      { name: "Terms of Service", href: "/compliance" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Disclaimer */}
      <div className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-[11px] text-muted-foreground/60 leading-relaxed">
            *SoFiCo Services Limited is a trade coordination company. Not a bank. Does not provide payment services or hold client funds. Registration: TEMP-XXXX
          </p>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column: Logo & Contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-[0.15em] text-foreground">
                SOFICO
              </span>
            </Link>
            
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-foreground mb-1">
                  General Inquiries
                </p>
                <a 
                  href="mailto:info@sofico.com" 
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  info@sofico.com
                </a>
              </div>
              
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-foreground mb-1">
                  Business Development
                </p>
                <a 
                  href="mailto:partners@sofico.com" 
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  partners@sofico.com
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground/70">
                Hong Kong SAR
              </p>
            </div>
          </div>
          
          {/* Right Columns: Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Services Column */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
                  {footerLinks.services.title}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.services.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Company Column */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
                  {footerLinks.company.title}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Legal Column */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
                  {footerLinks.legal.title}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} SoFiCo Services Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
