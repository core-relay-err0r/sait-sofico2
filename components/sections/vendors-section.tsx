import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { vendorPlaceholders } from "@/content/vendors"

export function VendorsSection() {
  return (
    <section className="pt-20 pb-16 bg-card">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Network
        </span>
        <h2 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
          Vendor Network
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Reference vendors for coordination purposes.
        </p>
      </div>
      
      <div className="mx-auto max-w-5xl px-6 mt-10 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
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
            className="inline-flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground/80 transition-colors duration-200 hover:text-accent"
          >
            View All Vendors
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
