import Link from "next/link"
import { Container } from "@/components/container"

const services = [
  { name: "Electronic Product Development", href: "/services#electronic-product-development" },
  { name: "Electronic Design", href: "/services#electronic-design" },
  { name: "Tooling and Mould Manufacturing", href: "/services#tooling-mould-manufacturing" },
  { name: "Electronic Procurement", href: "/services#electronic-procurement" },
  { name: "Electronic Manufacturing", href: "/services#electronic-manufacturing" },
]

export function ServicesListSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Title - Left Column */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </h2>
          </div>
          
          {/* List - Right Column */}
          <div className="md:col-span-8">
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-base md:text-lg text-accent hover:text-accent/70 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
