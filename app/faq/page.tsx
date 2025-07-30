import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, MessageSquare, Phone, Mail } from "lucide-react"

const faqCategories = [
  {
    name: "Getting Started",
    faqs: [
      {
        question: "How quickly can we get started?",
        answer:
          "We can have your account set up and your first campaign running within 48 hours of signing up. Our onboarding team will guide you through the entire process.",
      },
      {
        question: "What information do you need from us?",
        answer:
          "We'll need your ideal customer profile, target industries, company size preferences, and any existing lead data you'd like to integrate. Our team will help you define these during onboarding.",
      },
      {
        question: "Do you offer training for our team?",
        answer:
          "Yes! All plans include comprehensive training sessions. Professional and Enterprise customers get dedicated training calls, while Starter customers have access to our video training library.",
      },
    ],
  },
  {
    name: "Lead Generation",
    faqs: [
      {
        question: "What types of leads do you generate?",
        answer:
          "We specialize in B2B leads across all industries. Our AI-powered targeting ensures you receive high-quality prospects that match your ideal customer profile with 94% accuracy.",
      },
      {
        question: "How do you ensure lead quality?",
        answer:
          "We use a multi-step verification process including email validation, company verification, and intent data analysis. Each lead is scored based on fit and engagement likelihood.",
      },
      {
        question: "Can you target specific industries or company sizes?",
        answer:
          "Our platform allows for precise targeting by industry, company size, revenue, technology stack, and many other criteria. You have complete control over your targeting parameters.",
      },
    ],
  },
  {
    name: "CRM Integration",
    faqs: [
      {
        question: "Which CRMs do you integrate with?",
        answer:
          "We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, Zoho, and many others. Our API can connect with virtually any system.",
      },
      {
        question: "How does the integration work?",
        answer:
          "Our integration syncs leads in real-time to your CRM, automatically mapping fields and preventing duplicates. You can customize field mapping and lead assignment rules.",
      },
      {
        question: "What if we use a custom CRM?",
        answer:
          "No problem! Our Enterprise plan includes custom integrations. Our technical team can build a connection to any system with an API.",
      },
    ],
  },
  {
    name: "Pricing & Plans",
    faqs: [
      {
        question: "Can I change my plan anytime?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences.",
      },
      {
        question: "Do you offer custom pricing?",
        answer:
          "Yes! Our Enterprise plan offers custom pricing based on your specific needs. Contact us for a personalized quote.",
      },
      {
        question: "Is there a setup fee?",
        answer:
          "No setup fees for any of our plans. You only pay the monthly subscription fee, and you can cancel anytime.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll provide a full refund.",
      },
    ],
  },
]

const supportOptions = [
  {
    name: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageSquare,
    link: "https://salescentri.com/contact/support-request/live-chat",
    availability: "24/7",
  },
  {
    name: "Phone Support",
    description: "Speak directly with our experts",
    icon: Phone,
    link: "tel:+15551234567",
    availability: "Mon-Fri 8AM-6PM PST",
  },
  {
    name: "Email Support",
    description: "Send us a detailed question",
    icon: Mail,
    link: "mailto:support@olivierhaysolutions.com",
    availability: "Response within 2 hours",
  },
]

export default function FAQPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 bg-primary-50 text-primary-700 border-primary-200">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Got <span className="gradient-text">questions?</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to the most common questions about our B2B lead generation services, integrations, and
              pricing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={category.name}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">{category.name}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Integration Deep Link */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Need more technical details?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our comprehensive documentation and integration guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>CRM Integration Capabilities</CardTitle>
                <CardDescription>
                  Learn about our extensive CRM integration options and technical specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="https://salescentri.com/solutions/psa-suite/integrations">View Integration Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>API Documentation</CardTitle>
                <CardDescription>Complete API reference for developers and technical teams</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="https://salescentri.com/docs/api-reference">Read API Docs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">Still need help?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Our support team is here to help you succeed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card
                key={option.name}
                className="text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <option.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{option.name}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                  <Badge variant="outline" className="mt-2">
                    {option.availability}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={option.link}>{option.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
