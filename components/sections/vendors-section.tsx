import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { vendorPlaceholders } from "@/content/vendors"

export function VendorsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Network
        </span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
          Vendor Network
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Reference vendors for coordination purposes.
        </p>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {vendorPlaceholders.slice(0, 6).map((vendor) => (
            <div 
              key={vendor.id} 
              className="bg-background aspect-[2/1] flex items-center justify-center"
            >
              <div className="h-5 w-16 rounded-sm bg-muted" aria-label={vendor.name} />
            </div>
          ))}
        </div>
        
        <p className="mt-10 text-xs text-muted-foreground/60 text-center">
          Vendor list shown for reference purposes only. No authorization or partnership is implied.
        </p>
        
        <div className="mt-8 text-center">
          <Link 
            href="/vendors" 
            className="inline-flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground transition-colors duration-200 hover:text-accent"
          >
            View All Vendors
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
