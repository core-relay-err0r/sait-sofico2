import Link from "next/link"

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/terms-of-use" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Compliance", href: "/compliance" },
]

const navigationLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Vendors", href: "/vendors" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-semibold tracking-tight">
                SoFiCo Services Limited
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Operational coordination and structured support services for B2B companies 
              engaged in international trade activities.
            </p>
            <div className="mt-6 space-y-2 text-sm text-primary-foreground/60">
              <p>Registration: TEMP-XXXX</p>
              <p>Jurisdiction: Hong Kong</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Navigation
            </h4>
            <ul className="mt-6 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Legal
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs text-primary-foreground/50 leading-relaxed max-w-2xl">
              SoFiCo Services Limited is not a bank and does not provide payment services. 
              The company does not hold or take custody of client funds.
            </p>
            <p className="text-xs text-primary-foreground/50">
              {new Date().getFullYear()} SoFiCo Services Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
