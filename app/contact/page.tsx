"use client"

import { ContactForm } from "@/components/contact-form"
import { GSAPWrapper } from "@/components/gsap-provider"

const infoCards = [
  {
    title: "Communication Policy",
    description: "Communication is conducted via corporate email only. We do not accept inquiries via personal email addresses or social media channels.",
  },
  {
    title: "Response Time",
    description: "We review inquiries as part of our standard business operations. Response times may vary depending on the nature and completeness of the inquiry.",
  },
  {
    title: "Inquiry Scope",
    description: "We accept inquiries related to operational coordination, supplier alignment, and trade documentation support services. We do not provide financial, legal, or regulatory advice.",
  },
]

export default function ContactPage() {
  return (
    <GSAPWrapper>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <div className="max-w-3xl gsap-fade-up">
              <span className="eyebrow">Get in Touch</span>
              <h1 className="section-heading mt-6 text-balance">
                Contact Us
              </h1>
              <p className="section-subheading mt-8">
                Request a business introduction or submit an inquiry. All communications 
                are conducted via corporate email only.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-24 lg:pb-32">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-7 gsap-fade-up">
                <div className="p-8 lg:p-10 bg-card border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground">
                    Business Inquiry Form
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please complete the form below to submit an inquiry.
                  </p>
                  <ContactForm />
                </div>
              </div>

              {/* Information */}
              <div className="lg:col-span-5">
                <div className="gsap-stagger-container">
                  <div className="space-y-4">
                    {infoCards.map((card) => (
                      <div 
                        key={card.title} 
                        className="gsap-stagger-item p-6 bg-muted/50 border border-border/30"
                      >
                        <h3 className="text-base font-semibold text-foreground">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-wide">
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-3xl gsap-fade-in">
              Submission of an inquiry does not create a client relationship or contractual 
              obligation. All information provided will be handled in accordance with our 
              privacy policy. We reserve the right to decline inquiries at our discretion.
            </p>
          </div>
        </section>
      </div>
    </GSAPWrapper>
  )
}
