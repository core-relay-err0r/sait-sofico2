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
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center pt-24">
        <div className="container-narrow text-center py-20 lg:py-28">
          <span className="eyebrow gsap-fade-up">Get in Touch</span>
          <h1 className="heading-display mt-8 gsap-fade-up">
            Contact
          </h1>
          <div className="divider-accent mt-10 gsap-line-grow" />
          <p className="body-large mt-10 gsap-fade-up">
            Request a business introduction or submit an inquiry.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-spacing-sm border-t border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7 gsap-fade-up">
              <div className="p-8 md:p-12 bg-card border border-border">
                <h2 className="text-2xl font-serif text-foreground text-center lg:text-left">
                  Business Inquiry
                </h2>
                <p className="mt-4 text-sm text-muted-foreground text-center lg:text-left">
                  Complete the form below to submit an inquiry.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Information */}
            <div className="lg:col-span-5 gsap-stagger">
              <div className="space-y-6">
                {infoCards.map((card) => (
                  <div 
                    key={card.title} 
                    className="gsap-stagger-item p-8 bg-card border border-border text-center lg:text-left"
                  >
                    <h3 className="text-lg font-serif text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
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
      <section className="py-20 bg-card border-y border-border">
        <div className="container-narrow text-center">
          <p className="text-sm text-muted-foreground/70 leading-relaxed gsap-fade-up">
            Submission of an inquiry does not create a client relationship or contractual 
            obligation. All information provided will be handled in accordance with our 
            privacy policy. We reserve the right to decline inquiries at our discretion.
          </p>
        </div>
      </section>
    </div>
  )
}
