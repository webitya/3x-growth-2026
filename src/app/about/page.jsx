import AboutHero from "@/components/about/AboutHero"
import AboutStory from "@/components/about/AboutStory"
import AboutBeliefs from "@/components/about/AboutBeliefs"
import AboutWhoWeHelp from "@/components/about/AboutWhoWeHelp"
import AboutFounder from "@/components/about/AboutFounder"
import AboutCommitment from "@/components/about/AboutCommitment"

export const metadata = {
  title: "About 3x Growth | Sales Consulting Leadership",
  description:
    "Learn about Sandeep Gupta and how 3x Growth has been helping SMEs build predictable sales systems for 8+ years.",
  keywords: "about us, sales consultant, Sandeep Gupta, sales leadership, SME consulting",
  openGraph: {
    title: "About 3x Growth Consulting",
    description: "Real sales expertise from someone who has been in the trenches.",
  },
}

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutBeliefs />
      <AboutWhoWeHelp />
      <AboutFounder />
      <AboutCommitment />
    </>
  )
}
