import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Target, BarChart3, Users, MessageSquare, Mic, Database, Workflow } from "lucide-react"

const features = [
  {
    id: "targeting",
    name: "Enriched Targeting",
    description: "AI-powered prospect identification with advanced filtering",
    icon: Target,
    details: [
      "Industry-specific targeting with 94% accuracy",
      "Company size and revenue filtering",
      "Technology stack identification",
      "Intent data integration",
      "Real-time contact verification",
    ],
  },
  {
    id: "automation",
    name: "Automated Workflows",
    description: "Set-and-forget campaigns that work 24/7",
    icon: Workflow,
    details: [
      "Multi-channel outreach sequences",
      "Personalized message templates",
      "Follow-up automation",
      "A/B testing capabilities",
      "Response tracking and optimization",
    ],
  },
  {
    id: "analytics",
    name: "Advanced Analytics",
    description: "Real-time insights and performance tracking",
    icon: BarChart3,
    details: [
      "Campaign performance dashboards",
      "ROI tracking and attribution",
      "Lead scoring and qualification",
      "Conversion funnel analysis",
      "Custom reporting and exports",
    ],
  },
  {
    id: "integration",
    name: "CRM Integration",
    description: "Seamless integration with your existing tools",
    icon: Database,
    details: [
      "Salesforce, HubSpot, Pipedrive sync",
      "Real-time data synchronization",
      "Custom field mapping",
      "Automated lead assignment",
      "Duplicate detection and merging",
    ],
  },
]

const capabilities = [
  {
    name: "Chat Bot Integration",
    description: "AI-powered chat bots that qualify leads 24/7",
    icon: MessageSquare,
    link: "https://salescentri.com/platforms/lead-management/chat-bot",
  },
  {
    name: "Voice AI Agent",
    description: "Intelligent voice agents for phone prospecting",
    icon: Mic,
    link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
  },
  {
    name: "Expert Support",
    description: "Dedicated San Diego team with 10+ years experience",
    icon: Users,
    link: "/contact",
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 bg-primary-50 text-primary-700 border-primary-200">Powerful Features</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Everything you need to <span className="gradient-text">scale your B2B sales</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive platform combines AI-powered targeting, automated workflows, and advanced analytics to
              deliver exceptional results for B2B companies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Tabs defaultValue="targeting" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="flex items-center gap-2">
                  <feature.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{feature.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold text-secondary-900">{feature.name}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-primary-400" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">Advanced Capabilities</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take your lead generation to the next level with our cutting-edge tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={capability.name}
                className="text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <capability.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{capability.name}</CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={capability.link}>
                      {capability.name.includes("Chat")
                        ? "Try Our Chat Bot"
                        : capability.name.includes("Voice")
                          ? "Activate Voice AI"
                          : "Learn More"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to see these features in action?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Book a personalized demo and discover how our features can transform your lead generation.
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
                <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
