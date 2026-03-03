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
      
      <div className="mx-auto max-w-5xl px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {vendorPlaceholders.slice(0, 6).map((vendor) => (
            <div 
              key={vendor.id} 
              className="group border border-border/50 bg-foreground/5 aspect-[2.5/1] flex items-center justify-center transition-all duration-300 hover:border-accent/50 hover:bg-foreground/10"
            >
              <div className="h-6 w-20 rounded bg-foreground/20 group-hover:bg-foreground/30 transition-colors" aria-label={vendor.name} />
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
