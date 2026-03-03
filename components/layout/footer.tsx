"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/how-we-work" },
  ],
  resources: [
    { name: "Vendors", href: "/vendors" },
    { name: "Compliance", href: "/compliance" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-wider text-background">
                SOFICO
              </span>
            </Link>
            <p className="mt-5 text-sm text-background/60 max-w-xs leading-relaxed">
              Operational coordination and structured support services for B2B companies engaged in international trade activities.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-background/40 block mb-1">Email</span>
                <a 
                  href="mailto:contact@sofico.services" 
                  className="text-sm text-background/80 hover:text-accent transition-colors"
                >
                  contact@sofico.services
                </a>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-background/40 block mb-1">Location</span>
                <span className="text-sm text-background/80">Hong Kong</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Columns */}
          <div className="lg:col-span-4 lg:col-start-6">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-background/40">
                  Company
                </h3>
                <ul className="mt-5 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-background/40">
                  Resources
                </h3>
                <ul className="mt-5 space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-background/40">
              Get Started
            </h3>
            <p className="mt-5 text-sm text-background/60 leading-relaxed">
              Ready to discuss your trade coordination needs?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-background hover:text-accent transition-colors duration-200 group"
            >
              Request Introduction
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="text-xs text-background/40">
                &copy; {new Date().getFullYear()} SoFiCo Services Limited
              </p>
              <p className="text-xs text-background/30 hidden sm:block">|</p>
              <p className="text-xs text-background/40">
                Not a bank. Does not hold client funds.
              </p>
            </div>
            <p className="text-xs text-background/30">
              Registration: TEMP-XXXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
