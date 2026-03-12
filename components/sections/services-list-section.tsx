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
        <div className="max-w-3xl mx-auto">
          <ul className="divide-y divide-border border-y border-border">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="block py-6 text-lg md:text-xl text-foreground hover:text-accent transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
