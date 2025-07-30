import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Search, Filter, Download, ExternalLink } from "lucide-react"

const categories = [
  { name: "All", count: 24 },
  { name: "Strategy", count: 8 },
  { name: "Automation", count: 6 },
  { name: "ROI", count: 5 },
  { name: "Case Studies", count: 5 },
]

const featuredResources = [
  {
    title: "The Complete B2B Lead Generation Strategy Guide",
    description: "A comprehensive 50-page guide covering everything from targeting to conversion optimization.",
    type: "Whitepaper",
    category: "Strategy",
    downloadLink: "https://salescentri.com/resources/whitepapers-ebooks",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "How TechCorp Increased Leads by 340% in 90 Days",
    description: "Detailed case study showing our proven methodology in action.",
    type: "Case Study",
    category: "ROI",
    downloadLink: "https://salescentri.com/resources/case-studies",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const blogPosts = [
  {
    title: "10 B2B Lead Generation Trends for 2024",
    excerpt: "Stay ahead of the competition with these emerging trends in B2B lead generation.",
    category: "Strategy",
    readTime: "5 min read",
    date: "Dec 15, 2023",
    slug: "b2b-lead-generation-trends-2024",
  },
  {
    title: "How to Set Up Automated Lead Nurturing Workflows",
    excerpt: "Step-by-step guide to creating effective automated campaigns that convert.",
    category: "Automation",
    readTime: "8 min read",
    date: "Dec 12, 2023",
    slug: "automated-lead-nurturing-workflows",
  },
  {
    title: "Measuring ROI: Key Metrics for Lead Generation Success",
    excerpt: "Learn which metrics matter most and how to track them effectively.",
    category: "ROI",
    readTime: "6 min read",
    date: "Dec 10, 2023",
    slug: "measuring-roi-lead-generation-metrics",
  },
  {
    title: "The Psychology of B2B Decision Making",
    excerpt: "Understanding how business buyers think and make purchasing decisions.",
    category: "Strategy",
    readTime: "7 min read",
    date: "Dec 8, 2023",
    slug: "psychology-b2b-decision-making",
  },
  {
    title: "CRM Integration Best Practices",
    excerpt: "Maximize your CRM's potential with these proven integration strategies.",
    category: "Automation",
    readTime: "9 min read",
    date: "Dec 5, 2023",
    slug: "crm-integration-best-practices",
  },
  {
    title: "Building High-Converting Landing Pages",
    excerpt: "Design principles and optimization techniques for better conversion rates.",
    category: "Strategy",
    readTime: "6 min read",
    date: "Dec 3, 2023",
    slug: "high-converting-landing-pages",
  },
]

export default function ResourcesPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 bg-primary-50 text-primary-700 border-primary-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Resources & Insights for <span className="gradient-text">B2B Growth</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover proven strategies, case studies, and actionable insights to scale your B2B lead generation and
              drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">Featured Resources</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Our most popular guides and case studies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <Card
                key={resource.title}
                className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <Badge variant="outline">{resource.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={resource.downloadLink}>
                      <Download className="w-4 h-4 mr-2" />
                      {resource.type === "Case Study" ? "Read Case Study" : "Download Guide"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search articles..." className="pl-10" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-700">{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-secondary-900">Latest Articles</h2>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <Card
                    key={post.slug}
                    className="hover:shadow-md transition-shadow animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" asChild className="p-0 h-auto">
                        <Link href={`/resources/${post.slug}`} className="flex items-center gap-2">
                          Read more
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary-600 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay updated with our latest insights
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Get weekly tips, strategies, and case studies delivered to your inbox.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white border-white" />
              <Button className="bg-secondary-800 hover:bg-secondary-900 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Ready to implement these strategies?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let our experts help you apply these insights to your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary-600">
                <Link href="https://salescentri.com/contact/sales-inquiry/request-quote">Get a Custom Quote</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
