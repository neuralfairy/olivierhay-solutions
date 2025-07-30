import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Zap, BarChart3, Users, Star } from "lucide-react"

const stats = [
  { name: "Lead Quality Score", value: "94%", description: "Average conversion rate" },
  { name: "Time Saved", value: "15hrs", description: "Per week on prospecting" },
  { name: "ROI Increase", value: "340%", description: "Average client improvement" },
  { name: "Happy Clients", value: "500+", description: "B2B companies served" },
]

const features = [
  {
    name: "Precision Targeting",
    description: "AI-powered prospect identification with 94% accuracy rates",
    icon: Target,
  },
  {
    name: "Automated Workflows",
    description: "Set-and-forget campaigns that nurture leads 24/7",
    icon: Zap,
  },
  {
    name: "Advanced Analytics",
    description: "Real-time insights and ROI tracking for every campaign",
    icon: BarChart3,
  },
  {
    name: "Expert Support",
    description: "Dedicated San Diego team with 10+ years experience",
    icon: Users,
  },
]

const testimonials = [
  {
    content:
      "Olivierhay Solutions transformed our lead generation. We saw a 300% increase in qualified leads within 60 days.",
    author: "Sarah Chen",
    role: "VP of Sales, TechCorp",
    rating: 5,
  },
  {
    content: "The precision targeting is incredible. We're now reaching decision-makers we never could before.",
    author: "Michael Rodriguez",
    role: "CEO, GrowthLabs",
    rating: 5,
  },
]

const clientLogos = ["TechCorp", "GrowthLabs", "InnovateCo", "ScaleUp", "ProBusiness", "LeadGen+"]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-primary-50 text-primary-700 border-primary-200">
              San Diego's #1 B2B Lead Generation Agency
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Scale Your B2B Business with <span className="gradient-text">Precision Prospecting</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              We help B2B companies generate high-quality leads through intelligent targeting, automated workflows, and
              data-driven strategies. Stop wasting time on unqualified prospects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
                <Link href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://salescentri.com/platforms/lead-management/lead-generation">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-primary-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold leading-6 text-gray-600 mb-8">
            Trusted by 500+ B2B companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className="text-gray-400 font-semibold text-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                Why Choose Olivierhay Solutions?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our data-driven approach delivers measurable results for B2B companies
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.name}
                  className="flex flex-col bg-primary-50 p-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-primary-600">{stat.value}</dd>
                  <dd className="text-sm text-gray-500">{stat.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Everything you need to scale your B2B sales
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive platform combines AI-powered targeting with human expertise
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="flex flex-col animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">What our clients say</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg leading-8 text-gray-900 mb-6">"{testimonial.content}"</blockquote>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your lead generation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Join 500+ B2B companies that trust Olivierhay Solutions to scale their sales pipeline.
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
