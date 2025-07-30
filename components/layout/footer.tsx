import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  solutions: [
    { name: "Lead Generation", href: "/features" },
    { name: "B2B Prospecting", href: "/features" },
    { name: "CRM Integration", href: "https://salescentri.com/solutions/psa-suite/integrations" },
    { name: "Analytics", href: "/features" },
  ],
  support: [
    { name: "Documentation", href: "https://salescentri.com/docs/api-reference" },
    { name: "Live Chat", href: "https://salescentri.com/contact/support-request/live-chat" },
    { name: "Submit Ticket", href: "https://salescentri.com/contact/support-request/submit-ticket" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Leadership Team", href: "https://salescentri.com/company/about-us/leadership-team" },
    { name: "Careers", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold gradient-text">Olivierhay Solutions</span>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                San Diego's premier B2B lead generation agency. We help companies scale with precision prospecting and
                intelligent automation.
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-primary">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                San Diego, CA
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                hello@olivierhaysolutions.com
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-gray-400">&copy; 2024 Olivierhay Solutions. All rights reserved.</p>
            <p className="mt-4 text-xs leading-5 text-gray-400 sm:mt-0">
              Powered by{" "}
              <Link
                href="https://salescentri.com?utm_source=olivierhay.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-primary hover:text-primary-400"
              >
                Sales Intelligence Platform
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
