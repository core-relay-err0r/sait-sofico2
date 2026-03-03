import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { vendorPlaceholders } from "@/content/vendors"

export function VendorsSection() {
  return (
    <section className="section-spacing bg-card">
      <div className="container-medium text-center">
        <span className="eyebrow gsap-fade-up">Network</span>
        <h2 className="heading-section mt-6 gsap-fade-up">
          Vendor Network
        </h2>
        <p className="body-large mt-8 gsap-fade-up">
          Reference vendors for coordination purposes.
        </p>
      </div>
      
      <div className="container-wide mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border gsap-stagger">
          {vendorPlaceholders.slice(0, 6).map((vendor) => (
            <div 
              key={vendor.id} 
              className="bg-background aspect-[2/1] flex items-center justify-center gsap-stagger-item"
            >
              <div className="h-5 w-16 rounded-sm bg-muted" aria-label={vendor.name} />
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-xs text-muted-foreground/50 text-center gsap-fade-up">
          Vendor list shown for reference purposes only. No authorization or partnership is implied.
        </p>
        
        <div className="mt-10 text-center gsap-fade-up">
          <Link href="/vendors" className="btn-ghost">
            View All Vendors
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
