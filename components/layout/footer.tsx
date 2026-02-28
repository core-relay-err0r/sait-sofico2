import Link from "next/link"

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Use", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Compliance", href: "/compliance" },
]

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Vendors", href: "/vendors" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground">
              SoFiCo Services Limited
            </h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Registration number: TEMP-XXXX</p>
              <p>Jurisdiction: Hong Kong (placeholder)</p>
              <p>Email: contact@sofico.example (placeholder)</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2">
              {navigationLinks.map((link) => (
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

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
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

        {/* Compliance Notice */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            SoFiCo Services Limited is not a bank and does not provide payment services. 
            The company does not hold or take custody of client funds.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SoFiCo Services Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
