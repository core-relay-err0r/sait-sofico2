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
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <span className="text-xl font-semibold tracking-[0.2em] text-foreground">
                SOFICO
              </span>
            </Link>
          </div>
          
          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Right: Contact Email */}
          <div className="flex-shrink-0">
            <a 
              href="mailto:info@sofico.hk" 
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              info@sofico.hk
            </a>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground/60">
            <p>© {new Date().getFullYear()} SoFiCo Services Limited. All rights reserved.</p>
            <p>Hong Kong · Registration: TEMP-XXXX · Not a bank. Does not hold client funds.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
