import Link from "next/link"
import { Container } from "@/components/container"

const serviceItems = [
  { name: "Electronic Product Development", href: "/services#electronic-product-development" },
  { name: "Electronic Design", href: "/services#electronic-design" },
  { name: "Tooling and Mould Manufacturing", href: "/services#tooling-mould-manufacturing" },
  { name: "Electronic Procurement", href: "/services#electronic-procurement" },
  { name: "Electronic Manufacturing", href: "/services#electronic-manufacturing" },
]

export function ServicesListSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-12 text-center">
            Services
          </h2>
          
          <ul className="space-y-0 border-t border-border">
            {serviceItems.map((item) => (
              <li key={item.name} className="border-b border-border">
                <Link 
                  href={item.href}
                  className="block py-5 text-lg text-foreground hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
