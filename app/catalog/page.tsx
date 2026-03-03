import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Lock } from "lucide-react"

import { Container } from "@/components/container"
import { catalogItems } from "@/content/catalog"
import { getCatalogAccessKey } from "@/lib/env"

type Props = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function getKey(searchParams?: Record<string, string | string[] | undefined>): string | undefined {
  const raw = searchParams?.k
  return typeof raw === "string" ? raw : undefined
}

export default async function CatalogPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const requiredKey = getCatalogAccessKey()
  const key = getKey(resolvedSearchParams)
  const allowed = !!requiredKey && key === requiredKey

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
          {!allowed ? (
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
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catalogItems.map((item) => (
                  <Link
                    key={item.sku}
                    href={`/catalog/${encodeURIComponent(item.sku)}`}
                    className="group border border-border bg-card overflow-hidden transition-all duration-300 hover:border-accent/50"
                  >
                    <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] uppercase tracking-wider text-accent">
                        {item.category}
                      </span>
                      <h3 className="mt-2 text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.sku}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-accent">
                        View Details
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="border border-border p-6 bg-card text-center max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground">
                  This catalog is for B2B coordination reference only. 
                  Contact us for detailed specifications and availability.
                </p>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
