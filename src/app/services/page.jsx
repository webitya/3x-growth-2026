import ServicesHero from "@/components/services/ServicesHero"
import ServicesNav from "@/components/services/ServicesNav"
import ServicesGrid from "@/components/services/ServicesGrid"
import ServicesFAQ from "@/components/services/ServicesFAQ"
import ServicesCTA from "@/components/services/ServicesCTA"

export const metadata = {
  title: "Services | 3x Growth - Sales System Solutions",
  description:
    "Explore our four proven sales consulting services: MQL Setup, SQL Setup, Monthly Support, and Sales Audits designed specifically for founders.",
  keywords: "sales services, MQL setup, SQL setup, sales audit, monthly coaching, sales consulting, sales support",
  openGraph: {
    title: "Our Services - 3x Growth Consulting",
    description: "Four ways we help you build and scale your sales system for predictable growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - 3x Growth Consulting",
    description: "Sales consulting services for companies",
  },
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesNav />
      <ServicesGrid />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  )
}
