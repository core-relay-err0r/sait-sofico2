import { Globe, Zap, Users, Lock } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access to leading manufacturers and suppliers across international markets with multi-currency payment capabilities.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Streamlined procurement processes from supplier selection through delivery monitoring and fulfillment.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Expert coordination team managing negotiations, documentation, and supplier relationships on your behalf.",
  },
  {
    icon: Lock,
    title: "Secure Transactions",
    description: "Structured trade financing and international payments through established financial instruments.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Why Choose Us
            </span>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
              Your Trusted Partner
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" delay={200}>
            <div className="mt-6 sm:mt-8 h-px w-16 bg-accent mx-auto" />
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We simplify complex B2B trade operations, connecting you with 
              quality hardware suppliers while handling the coordination, 
              financing, and logistics.
            </p>
          </ScrollAnimation>
        </div>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title} index={index}>
              <div className="h-full p-6 lg:p-8 bg-card border border-border hover:border-accent/30 transition-colors text-center">
                <feature.icon className="h-8 w-8 text-accent mx-auto" strokeWidth={1.5} />
                <h3 className="mt-5 text-base font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
