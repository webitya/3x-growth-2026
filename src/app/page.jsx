import HomepageHero from "@/components/homepage/HomepageHero"
import HomepageProblem from "@/components/homepage/HomepageProblem"
import HomepageSolution from "@/components/homepage/HomepageSolution"
import HomepageSocialProof from "@/components/homepage/HomepageSocialProof"
import HomepageCaseStudies from "@/components/homepage/HomepageCaseStudies"
import HomepageServices from "@/components/homepage/HomepageServices"
import HomepageCTA from "@/components/homepage/HomepageCTA"

export const metadata = {
  title: "Stop Guessing When Your Next Sale Will Come | 3x Growth",
  description:
    "We fix broken sales systems so you can grow predictably—month after month. Get more quality leads, stop chasing dead deals, and scale with confidence.",
  keywords: "sales consulting, predictable revenue, sales systems, company growth, B2B sales, lead generation",
  openGraph: {
    title: "Stop Guessing When Your Next Sale Will Come",
    description: "We fix broken sales systems so you can grow predictably—month after month.",
    url: "https://www.salessyllabus.com",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <HomepageHero />
      <HomepageProblem />
      <HomepageSolution />
      <HomepageSocialProof />
      <HomepageCaseStudies />
      <HomepageServices />
      <HomepageCTA />
    </>
  )
}
