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
      <div className="container-wide section-spacing-sm">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <span className="text-[13px] font-medium uppercase tracking-[0.25em] text-foreground">
              SoFiCo
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Divider */}
          <div className="divider-accent mt-16" />
          
          {/* Description */}
          <p className="mt-12 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Operational coordination and structured support services for B2B companies 
            engaged in international trade activities.
          </p>
          
          {/* Legal Info */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground/60">
            <span>Hong Kong</span>
            <span>Registration: TEMP-XXXX</span>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs text-muted-foreground/50 leading-relaxed max-w-2xl">
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
