"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { GSAPWrapper } from "@/components/gsap-provider"
import { vendorPlaceholders } from "@/content/vendors"

export default function VendorsPage() {
  return (
    <GSAPWrapper>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="max-w-3xl gsap-fade-up">
              <span className="eyebrow">Network</span>
              <h1 className="section-heading mt-6 text-balance">
                Vendor Network
              </h1>
              <p className="section-subheading mt-8">
                Reference vendors for coordination purposes. Our vendor coordination 
                services help align supplier capabilities with operational requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Vendor Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container-wide">
            <div className="gsap-fade-in">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {vendorPlaceholders.map((vendor) => (
                  <div
                    key={vendor.id}
                    className="flex h-24 items-center justify-center bg-card border border-border/50 hover:border-border transition-colors duration-300"
                  >
                    <div
                      className="h-6 w-20 rounded-sm bg-muted"
                      aria-label={vendor.name}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-muted/50 border border-border/30 gsap-fade-up">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vendor list shown for reference purposes only. No authorization or partnership 
                is implied. The inclusion of any vendor in this list does not constitute an 
                endorsement, recommendation, or representation of any commercial relationship. 
                Vendor availability and capabilities are subject to change without notice.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-24 lg:py-32 bg-card border-y border-border">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 gsap-stagger-container">
              <div className="gsap-stagger-item p-8 bg-background border border-border/50">
                <h2 className="text-lg font-semibold text-foreground">
                  Vendor Coordination
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Our vendor coordination services help align supplier capabilities with 
                  your operational requirements. We facilitate communication and 
                  documentation between parties involved in trade activities.
                </p>
              </div>
              <div className="gsap-stagger-item p-8 bg-background border border-border/50">
                <h2 className="text-lg font-semibold text-foreground">
                  Specification Alignment
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  We support the documentation and alignment of technical specifications 
                  between your organization and potential vendors. This includes 
                  requirement structuring and communication facilitation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="flex flex-col sm:flex-row gap-4 gsap-fade-up">
              <Button asChild size="lg" className="h-12 px-8 rounded-md text-base font-medium">
                <Link href="/contact">
                  Request Vendor Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 rounded-md text-base font-medium border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </GSAPWrapper>
  )
}
