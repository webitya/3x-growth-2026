import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTeam from "@/components/about/AboutTeam";
import AboutStats from "@/components/about/AboutStats";
import AboutValues from "@/components/about/AboutValues";

export const metadata = {
  title: "About Us - 3x Growth | Transforming SME Sales Since 2016",
  description: "Meet the team behind 3x Growth. We've helped 50+ SME founders achieve 220% average revenue growth through proven sales systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutStats />
      <AboutValues />
    </main>
  );
}
