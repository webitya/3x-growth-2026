
import HomepageCaseStudies from "@/components/homepage/HomepageCaseStudies";
import HomepageCTA from "@/components/homepage/HomepageCTA";

export const metadata = {
    title: "Case Studies | 3x Growth",
    description: "See how we've helped Indian B2B companies scale their revenue with proven sales systems.",
};

export default function CaseStudiesPage() {
    return (
        <main className="pt-20">
            <HomepageCaseStudies />
            <HomepageCTA />
        </main>
    );
}
