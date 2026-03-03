import Link from "next/link"
import { ArrowRight } from "lucide-react"

const complianceSections = [
  {
    id: "01",
    title: "Not a Licensed Bank",
    content: [
      "SoFiCo Services Limited is not a licensed bank and does not operate as a deposit-taking or credit institution.",
      "The company does not provide regulated financial services.",
      "Any references to trade or commercial activities relate to operational coordination and documentation support.",
    ],
  },
  {
    id: "02",
    title: "No Custody of Client Funds",
    content: [
      "SoFiCo Services Limited does not hold, manage, or take custody of client funds under any circumstances.",
      "We do not operate client accounts, hold deposits, or process payments on behalf of clients.",
      "Any payments related to trade activities are conducted directly between the relevant parties.",
    ],
  },
  {
    id: "03",
    title: "Export Control & Sanctions",
    content: [
      "SoFiCo Services Limited maintains operational awareness of export control and sanctions considerations.",
      "We may request documentation related to end-use and end-user information as part of coordination workflows.",
      "We do not provide regulatory advice. Clients remain responsible for their own compliance.",
    ],
  },
  {
    id: "04",
    title: "AML / KYC Cooperation",
    content: [
      "SoFiCo Services Limited cooperates with reasonable AML and KYC-related due diligence.",
      "We may request corporate documentation as part of onboarding and ongoing relationship management.",
      "We maintain appropriate record-keeping practices and cooperate with authorities where legally required.",
    ],
  },
]

export default function CompliancePage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Regulatory
          </span>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
            Compliance
          </h1>
          <div className="mt-8 h-px w-16 bg-accent mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Compliance information and regulatory positioning for SoFiCo Services Limited.
          </p>
        </div>
      </section>

      {/* Compliance Sections */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          {complianceSections.map((section, index) => (
            <div
              key={section.id}
              className={`py-12 md:py-16 ${
                index !== complianceSections.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                <div className="lg:col-span-1">
                  <span className="text-4xl lg:text-5xl font-serif text-accent/60">{section.id}</span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Support
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Due Diligence Support
          </h2>
        </div>
        
        <div className="mx-auto max-w-6xl px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <div className="bg-background p-10 md:p-12 text-center">
              <h3 className="text-xl font-serif text-foreground">
                Documentation
              </h3>
              <div className="mt-6 h-px w-12 bg-border mx-auto" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                We understand that our business partners may need to conduct due 
                diligence on our company. We are prepared to provide reasonable 
                documentation to support enhanced due diligence processes.
              </p>
            </div>
            <div className="bg-background p-10 md:p-12 text-center">
              <h3 className="text-xl font-serif text-foreground">
                Questions
              </h3>
              <div className="mt-6 h-px w-12 bg-border mx-auto" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                For questions regarding our compliance position or to request 
                additional information for due diligence purposes, please contact 
                us through our standard inquiry process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 border-y border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs text-muted-foreground/60 leading-relaxed">
            The information on this page is provided for informational purposes only and 
            does not constitute professional advice. This information should not be relied upon 
            as a substitute for appropriate professional counsel.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Have Questions?
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Submit Inquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-outline">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
