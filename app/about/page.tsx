import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Award, Target } from "lucide-react"

const team = [
  {
    name: "Olivier Hay",
    role: "Founder & CEO",
    bio: "10+ years in B2B sales and lead generation. Former VP of Sales at TechCorp.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Martinez",
    role: "Head of Strategy",
    bio: "Data scientist turned growth strategist. Expert in AI-powered targeting.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "VP of Technology",
    bio: "Former Google engineer specializing in automation and CRM integrations.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const values = [
  {
    name: "Precision First",
    description: "We believe in quality over quantity. Every lead we generate is carefully targeted and qualified.",
    icon: Target,
  },
  {
    name: "Client Success",
    description: "Your success is our success. We're committed to delivering measurable ROI for every client.",
    icon: Award,
  },
  {
    name: "Innovation",
    description: "We continuously evolve our technology and strategies to stay ahead of the competition.",
    icon: Users,
  },
]

const stats = [
  { name: "Years of Experience", value: "10+" },
  { name: "B2B Companies Served", value: "500+" },
  { name: "Average ROI Increase", value: "340%" },
  { name: "Team Members", value: "25+" },
]

export default function AboutPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 bg-primary-50 text-primary-700 border-primary-200">
              <MapPin className="w-4 h-4 mr-2" />
              San Diego, California
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              About <span className="gradient-text">Olivierhay Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're a San Diego-based B2B lead generation agency dedicated to helping companies scale through precision
              prospecting and intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, Olivierhay Solutions was born from a simple observation: most B2B companies waste too
                much time and money on unqualified leads.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We set out to change that by combining cutting-edge AI technology with human expertise to deliver the
                highest quality leads in the industry.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve over 500 B2B companies worldwide, helping them achieve an average ROI
                increase of 340%.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-24 w-24 text-primary-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These principles guide everything we do at Olivierhay Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.name}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">{value.name}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="https://salescentri.com/company/about-us/leadership-team">Meet Our Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to work with us?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let's discuss how Olivierhay Solutions can help scale your B2B lead generation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary-600">
                <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-white hover:bg-white hover:text-secondary-900 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
