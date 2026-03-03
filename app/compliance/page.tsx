"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { GSAPWrapper } from "@/components/gsap-provider"

const complianceSections = [
  {
    id: "not-licensed-bank",
    title: "Not a Licensed Bank",
    content: [
      "SoFiCo Services Limited is not a licensed bank and does not operate as a deposit-taking or credit institution.",
      "The company does not provide regulated financial services.",
      "Any references to trade or commercial activities on this website relate to operational coordination and documentation support.",
    ],
  },
  {
    id: "no-custody",
    title: "No Custody of Client Funds",
    content: [
      "SoFiCo Services Limited does not hold, manage, or take custody of client funds under any circumstances.",
      "We do not operate client accounts, hold deposits, or process payments on behalf of clients.",
      "Any payments or transfers related to trade activities are conducted directly between the relevant parties using their own arrangements.",
      "The company does not provide escrow services or any form of financial intermediation.",
    ],
  },
  {
    id: "export-control",
    title: "Export Control & Sanctions Compliance",
    content: [
      "SoFiCo Services Limited maintains operational awareness of export control and sanctions considerations relevant to cross-border coordination.",
      "We may request documentation related to end-use and end-user information as part of coordination workflows.",
      "We do not provide regulatory advice. Clients remain responsible for their own compliance with applicable rules.",
      "We may decline or discontinue coordination support if we identify material compliance concerns.",
    ],
  },
  {
    id: "aml-kyc",
    title: "AML / KYC Cooperation",
    content: [
      "SoFiCo Services Limited cooperates with reasonable AML and KYC-related due diligence requested by counterparties.",
      "We may request corporate documentation as part of onboarding and ongoing relationship management.",
      "We maintain appropriate record-keeping practices and will cooperate with competent authorities where legally required.",
    ],
  },
]

export default function CompliancePage() {
  return (
    <GSAPWrapper>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="max-w-3xl gsap-fade-up">
              <span className="eyebrow">Regulatory</span>
              <h1 className="section-heading mt-6 text-balance">
                Compliance Information
              </h1>
              <p className="section-subheading mt-8">
                Compliance information and regulatory positioning for SoFiCo Services Limited. 
                This page provides clarity regarding our operational scope and regulatory status.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Sections */}
        <section className="pb-24 lg:pb-32">
          <div className="container-wide">
            <div className="gsap-stagger-container">
              <div className="space-y-1">
                {complianceSections.map((section, index) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className={`gsap-stagger-item p-8 lg:p-10 ${
                      index % 2 === 0 ? "bg-card" : "bg-muted/50"
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-foreground lg:text-2xl">
                      {section.title}
                    </h2>
                    <div className="mt-6 space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-24 lg:py-32 bg-card border-y border-border">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 gsap-stagger-container">
              <div className="gsap-stagger-item p-8 bg-background border border-border/50">
                <h3 className="text-lg font-semibold text-foreground">
                  Due Diligence Support
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  We understand that our business partners may need to conduct due 
                  diligence on our company. We are prepared to provide reasonable 
                  documentation and information to support enhanced due diligence (EDD) 
                  processes upon request.
                </p>
              </div>
              <div className="gsap-stagger-item p-8 bg-background border border-border/50">
                <h3 className="text-lg font-semibold text-foreground">
                  Questions
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  For questions regarding our compliance position or to request 
                  additional information for due diligence purposes, please contact 
                  us through our standard inquiry process.
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="mt-6 rounded-md border-foreground/20 hover:bg-foreground/5"
                >
                  <Link href="/contact">
                    Submit Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16">
          <div className="container-wide">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl gsap-fade-in">
              The information on this page is provided for informational purposes only and 
              does not constitute professional advice. This information should not be relied upon 
              as a substitute for appropriate professional counsel. SoFiCo Services Limited makes 
              no representations regarding the applicability of this information to any specific 
              situation or jurisdiction.
            </p>
          </div>
        </section>
      </div>
    </GSAPWrapper>
  )
}
