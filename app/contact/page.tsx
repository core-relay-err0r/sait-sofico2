import { ContactForm } from "@/components/contact-form"

const infoCards = [
  {
    title: "Communication Policy",
    description: "Communication is conducted via corporate email only. We do not accept inquiries via personal email addresses or social media.",
  },
  {
    title: "Response Time",
    description: "We review inquiries as part of standard business operations. Response times vary depending on inquiry nature and completeness.",
  },
  {
    title: "Inquiry Scope",
    description: "We accept inquiries related to operational coordination, supplier alignment, and trade documentation support services.",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Get in Touch
          </span>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
            Contact
          </h1>
          <div className="mt-8 h-px w-16 bg-accent mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Request a business introduction or submit an inquiry.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 bg-card border border-border">
                <h2 className="text-2xl font-serif text-foreground text-center lg:text-left">
                  Business Inquiry
                </h2>
                <p className="mt-3 text-sm text-muted-foreground text-center lg:text-left">
                  Complete the form below to submit an inquiry.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Information */}
            <div className="lg:col-span-5">
              <div className="space-y-5">
                {infoCards.map((card) => (
                  <div 
                    key={card.title} 
                    className="p-6 md:p-8 bg-card border border-border text-center lg:text-left"
                  >
                    <h3 className="text-lg font-serif text-foreground">
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
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm text-muted-foreground/70 leading-relaxed">
            Submission of an inquiry does not create a client relationship or contractual 
            obligation. All information provided will be handled in accordance with our 
            privacy policy. We reserve the right to decline inquiries at our discretion.
          </p>
        </div>
      </section>
    </div>
  )
}
