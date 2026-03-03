"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { vendorPlaceholders } from "@/content/vendors"

export function VendorsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-wide">
        <div className="text-center gsap-fade-up">
          <span className="eyebrow">Network</span>
          <h2 className="section-heading mt-4">
            Vendor Network
          </h2>
          <p className="section-subheading mt-6 mx-auto max-w-xl">
            Reference vendors for coordination purposes.
          </p>
        </div>
        
        <div className="mt-16 gsap-fade-in">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {vendorPlaceholders.slice(0, 12).map((vendor) => (
              <div
                key={vendor.id}
                className="flex h-20 items-center justify-center bg-card border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div
                  className="h-6 w-20 rounded-sm bg-muted"
                  aria-label={vendor.name}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center gsap-fade-in">
          <p className="text-xs text-muted-foreground">
            Vendor list shown for reference purposes only. No authorization or partnership is implied.
          </p>
        </div>
        
        <div className="mt-8 text-center gsap-fade-up">
          <Button 
            asChild 
            variant="outline" 
            className="rounded-md border-foreground/20 hover:bg-foreground/5"
          >
            <Link href="/vendors">
              View All Vendors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
