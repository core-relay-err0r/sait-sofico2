import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { vendors } from "@/content/vendors"

export default function VendorsPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Network
          </span>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
            Vendor Network
          </h1>
          <div className="mt-8 h-px w-16 bg-accent mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Reference vendors for coordination purposes. Our vendor coordination 
            services help align supplier capabilities with operational requirements.
          </p>
        </div>
      </section>

      {/* Vendor Grid */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-card aspect-[2/1] flex flex-col items-center justify-center p-4 transition-colors hover:bg-card/80"
              >
                <span className="text-sm sm:text-base font-medium text-foreground">
                  {vendor.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  {vendor.category}
                </span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-14 p-8 md:p-10 bg-card border border-border text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Vendor list shown for reference purposes only. No authorization or partnership 
              is implied. The inclusion of any vendor in this list does not constitute an 
              endorsement, recommendation, or representation of any commercial relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Services
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Vendor Services
          </h2>
        </div>
        
        <div className="mx-auto max-w-6xl px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <div className="bg-background p-10 md:p-12 text-center">
              <h3 className="text-xl font-serif text-foreground">
                Vendor Coordination
              </h3>
              <div className="mt-6 h-px w-12 bg-border mx-auto" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Our vendor coordination services help align supplier capabilities with 
                your operational requirements. We facilitate communication and 
                documentation between parties involved in trade activities.
              </p>
            </div>
            <div className="bg-background p-10 md:p-12 text-center">
              <h3 className="text-xl font-serif text-foreground">
                Specification Alignment
              </h3>
              <div className="mt-6 h-px w-12 bg-border mx-auto" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                We support the documentation and alignment of technical specifications 
                between your organization and potential vendors. This includes 
                requirement structuring and communication facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Need Vendor Information?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider bg-foreground text-background transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Request Information
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-wider border border-border text-foreground transition-all duration-200 hover:border-foreground"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
