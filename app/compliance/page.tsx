import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance | SoFiCo Services Limited",
  description: "Compliance information and regulatory positioning for SoFiCo Services Limited.",
}

const complianceSections = [
  {
    id: "not-licensed-bank",
    title: "Not a Licensed Bank",
    content: [
      "SoFiCo Services Limited is not a licensed bank, credit institution, or deposit-taking entity in any jurisdiction.",
      "The company does not hold a banking license or any license required to conduct regulated financial services.",
      "Any references to trade or commercial activities in our service descriptions relate solely to operational coordination and documentation support, not to financial intermediation.",
    ],
  },
  {
    id: "no-custody",
    title: "No Custody of Client Funds",
    content: [
      "SoFiCo Services Limited does not hold, manage, or take custody of client funds under any circumstances.",
      "We do not operate client accounts, hold deposits, or process payments on behalf of clients.",
      "All financial transactions related to trade activities are conducted directly between the relevant parties through their own banking relationships.",
      "The company does not provide escrow services, payment processing, or any form of financial intermediation.",
    ],
  },
  {
    id: "export-control",
    title: "Export Control & Sanctions Compliance",
    content: [
      "SoFiCo Services Limited maintains awareness of applicable export control regulations and sanctions regimes relevant to international trade activities.",
      "Our coordination services include consideration of export control documentation requirements and end-use verification processes.",
      "We do not provide legal advice regarding export control compliance. Clients are responsible for ensuring their own compliance with applicable export control and sanctions regulations.",
      "We reserve the right to decline or terminate coordination services where we identify potential sanctions or export control concerns.",
    ],
  },
  {
    id: "aml-kyc",
    title: "AML / KYC Cooperation",
    content: [
      "SoFiCo Services Limited cooperates with applicable anti-money laundering (AML) and know-your-customer (KYC) requirements.",
      "We conduct reasonable due diligence on business relationships in accordance with our internal policies.",
      "While we are not a regulated financial institution, we maintain appropriate record-keeping practices and will cooperate with competent authorities where legally required.",
      "We may request corporate documentation and identity verification as part of our engagement process.",
    ],
  },
  {
    id: "regulatory-positioning",
    title: "Regulatory Positioning Clarification",
    content: [
      "SoFiCo Services Limited operates as an operational coordination and business services company.",
      "Our services are limited to coordination, documentation support, and operational structuring for B2B trade activities.",
      "We do not engage in activities that would require licensing as a financial institution, payment service provider, or investment firm.",
      "This positioning is designed to ensure clarity regarding the scope and nature of our activities for due diligence and regulatory assessment purposes.",
      "Clients and counterparties should conduct their own assessment of regulatory requirements applicable to their specific activities and jurisdictions.",
    ],
  },
]

export default function CompliancePage() {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              Compliance
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Compliance information and regulatory positioning for SoFiCo Services Limited. 
              This page provides clarity regarding our operational scope and regulatory status.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Sections */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8">
            {complianceSections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className={`border border-border rounded-2xl p-8 ${
                  index % 2 === 0 ? "bg-card" : "bg-muted/30"
                }`}
              >
                <h2 className="text-xl font-semibold text-foreground">
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
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="border border-border rounded-2xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground">
                Due Diligence Support
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We understand that our business partners may need to conduct due 
                diligence on our company. We are prepared to provide reasonable 
                documentation and information to support enhanced due diligence (EDD) 
                processes upon request.
              </p>
            </div>
            <div className="border border-border rounded-2xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground">
                Questions
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                For questions regarding our compliance position or to request 
                additional information for due diligence purposes, please contact 
                us through our standard inquiry process.
              </p>
              <Button asChild variant="outline" className="mt-4 rounded-xl">
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
      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            The information on this page is provided for informational purposes only and 
            does not constitute legal advice. This information should not be relied upon 
            as a substitute for professional legal counsel. SoFiCo Services Limited makes 
            no representations regarding the applicability of this information to any 
            specific situation or jurisdiction.
          </p>
        </div>
      </section>
    </div>
  )
}
