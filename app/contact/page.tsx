import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, MessageSquare, Ticket, Clock } from "lucide-react"

const contactMethods = [
  {
    name: "Live Chat Support",
    description: "Get instant help from our support team",
    icon: MessageSquare,
    link: "https://salescentri.com/contact/support-request/live-chat",
    availability: "24/7",
  },
  {
    name: "Submit a Ticket",
    description: "Send us a detailed support request",
    icon: Ticket,
    link: "https://salescentri.com/contact/support-request/submit-ticket",
    availability: "Response within 2 hours",
  },
  {
    name: "Phone Support",
    description: "Speak directly with our team",
    icon: Phone,
    link: "tel:+15551234567",
    availability: "Mon-Fri 8AM-6PM PST",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 bg-primary-50 text-primary-700 border-primary-200">
              <MapPin className="w-4 h-4 mr-2" />
              San Diego Headquarters
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to transform your B2B lead generation? Our San Diego team is here to help. Reach out and let's
              discuss how we can scale your sales pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Multiple ways to reach us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Choose the contact method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={method.name}
                className="text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{method.name}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{method.availability}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={method.link}>{method.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                      First name
                    </label>
                    <Input id="first-name" name="first-name" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Last name
                    </label>
                    <Input id="last-name" name="last-name" type="text" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input id="company" name="company" type="text" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">Visit our office</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary-900">San Diego Headquarters</h3>
                    <p className="text-gray-600">
                      123 Innovation Drive
                      <br />
                      San Diego, CA 92101
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM PST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary-900">Email</h3>
                    <p className="text-gray-600">hello@olivierhaysolutions.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive map coming soon</p>
                </div>
              </div>
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
              Don't wait - book a demo today and see how we can transform your lead generation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
              >
                <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
