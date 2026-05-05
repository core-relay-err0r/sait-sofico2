import Link from "next/link"
import { ArrowRight, Lock } from "lucide-react"

import { Container } from "@/components/container"

export default function CatalogPage() {
  return (
    <div className="bg-background pt-20">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              B2B Catalog
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground">
              Product Reference
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Restricted access catalog for B2B coordination purposes.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="border border-border p-8 sm:p-12 bg-card max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-semibold text-foreground">Restricted Access</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This catalog section is not publicly browsable. Access requires a valid 
              authorization key. Individual product reference cards can be accessed 
              via direct links provided by our team.
            </p>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Need access? Contact our team for authorization.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
              >
                Request Access
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
