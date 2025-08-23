import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ExitPopup } from "@/components/ui/exit-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Olivierhay Solutions - B2B Lead Generation Agency | San Diego",
  description:
    "San Diego's premier B2B lead generation agency. We help companies scale with precision prospecting, automated workflows, and intelligent analytics.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: "B2B lead generation, San Diego, prospecting, CRM integration, sales automation",
  openGraph: {
    title: "Olivierhay Solutions - B2B Lead Generation Agency",
    description: "Scale your B2B business with precision prospecting and intelligent automation.",
    url: "https://olivierhaysolutions.com",
    siteName: "Olivierhay Solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ExitPopup />
      </body>
    </html>
  )
}
