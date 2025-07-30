import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    id: "starter",
    price: "$497",
    period: "/month",
    description: "Perfect for small businesses getting started with B2B lead generation",
    features: [
      "Up to 500 leads per month",
      "Basic targeting filters",
      "Email outreach campaigns",
      "CRM integration (1 platform)",
      "Monthly performance reports",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaLink: "https://salescentri.com/get-started/free-trial",
    popular: false,
  },
  {
    name: "Professional",
    id: "professional",
    price: "$997",
    period: "/month",
    description: "Advanced features for growing companies that need more leads and automation",
    features: [
      "Up to 2,000 leads per month",
      "Advanced AI targeting",
      "Multi-channel campaigns (Email + LinkedIn)",
      "CRM integration (unlimited)",
      "A/B testing capabilities",
      "Chat bot integration",
      "Weekly performance reports",
      "Priority phone support",
    ],
    cta: "Start Free Trial",
    ctaLink: "https://salescentri.com/get-started/free-trial",
    popular: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex requirements",
    features: [
      "Unlimited leads",
      "Custom targeting algorithms",
      "Omnichannel campaigns",
      "White-label solutions",
      "Voice AI agent",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 priority support",
    ],
    cta: "Need Custom Pricing?",
    ctaLink: "https://salescentri.com/pricing/enterprise-custom",
    popular: false,
  },
]

const faqs = [
  {
    question: "What's included in the free trial?",
    answer:
      "Our 14-day free trial includes access to all Starter plan features, up to 100 leads, and full platform access with no setup fees.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer custom integrations?",
    answer:
      "Yes, our Enterprise plan includes custom integrations. We can connect with virtually any CRM, marketing automation platform, or business tool.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer email support for Starter, priority phone support for Professional, and 24/7 dedicated support for Enterprise customers.",
  },
]

export default function PricingPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Simple, transparent <span className="gradient-text">pricing</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the perfect plan for your business. All plans include our core lead generation features with no
              hidden fees or long-term contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <Card
                key={tier.id}
                className={`relative ${tier.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-secondary-900">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                  <CardDescription className="mt-4">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${tier.popular ? "bg-primary hover:bg-primary-600" : ""}`}>
                    <Link href={tier.ctaLink}>{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions about our pricing? We're here to help.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Join hundreds of B2B companies that trust Olivierhay Solutions to scale their sales pipeline.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
              >
                <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
