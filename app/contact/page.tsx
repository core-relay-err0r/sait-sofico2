"use client"

import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ContactPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimation animation="fade-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-accent leading-[1.1]">
              Contact
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Submit your inquiry and our team will respond within 1-2 business days.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Get In Touch */}
            <div className="lg:col-span-4">
              <ScrollAnimation animation="fade-up">
                <h2 className="text-xl font-semibold text-foreground">
                  Get In Touch
                </h2>
                <p className="mt-4 text-muted-foreground">
                  For inquiries about procurement, services or partnership opportunities.
                </p>

                <div className="mt-10 space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:info@soficoserv.com" 
                        className="text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        info@soficoserv.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Hong Kong</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-8">
              <ScrollAnimation animation="fade-up" delay={0.1}>
                <div className="p-6 md:p-8 bg-card border border-border rounded-lg">
                  <ContactForm />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
