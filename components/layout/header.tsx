"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Vendors", href: "/vendors" },
  { name: "Compliance", href: "/compliance" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between py-5">
        <div className="flex-1">
          <Link href="/" className="inline-block">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              SoFiCo
            </span>
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="flex-1 flex justify-end">
          <div className="hidden lg:block">
            <Button asChild size="sm" className="rounded-md h-9 px-5">
              <Link href="/contact">
                Contact
              </Link>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-5 sm:max-w-sm border-l border-border">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  SoFiCo
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-10">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="w-full rounded-md">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
