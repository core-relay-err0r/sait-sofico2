import Link from "next/link"

const navigationLinks = [
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
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <span className="text-xl font-semibold tracking-wider text-foreground">
              SOFICO
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Divider */}
          <div className="mt-12 h-px w-16 bg-accent mx-auto" />
          
          {/* Description */}
          <p className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Operational coordination and structured support services for B2B companies 
            engaged in international trade activities.
          </p>
          
          {/* Legal Info */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground/60">
            <span>Hong Kong</span>
            <span>Registration: TEMP-XXXX</span>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center space-y-4">
            <p className="text-xs text-muted-foreground/50 leading-relaxed max-w-2xl mx-auto">
              SoFiCo Services Limited is not a bank and does not provide payment services. 
              The company does not hold or take custody of client funds.
            </p>
            <p className="text-xs text-muted-foreground/40">
              {new Date().getFullYear()} SoFiCo Services Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
