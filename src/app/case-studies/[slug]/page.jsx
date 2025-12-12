import { caseStudies } from "@/data/casestudydata";
import { ArrowLeft, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import HomepageCTA from "@/components/homepage/HomepageCTA";

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export default function CaseStudyPage({ params }) {
    const study = caseStudies.find((s) => s.slug === params.slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            {/* Sticky Top Bar for Navigation */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link
                        href="/#case-studies"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Case Studies
                    </Link>
                    <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors">
                        Get Similar Results
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-12 pb-20 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold">
                                {study.industry}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                                {study.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                                {study.summary}
                            </p>
                        </div>
                        {/* Hero Image */}
                        <div className="flex-1 w-full">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-slate-700">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Bar */}
            <div className="relative -mt-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden border border-slate-100">
                    {study.results.map((result, idx) => (
                        <div key={idx} className="flex-1 p-6 md:p-8 text-center hover:bg-blue-50/30 transition-colors">
                            <div className="text-3xl md:text-4xl font-black text-blue-600 mb-1">{result.value}</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{result.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                    {/* Challenge */}
                    <div className="grid md:grid-cols-[200px_1fr] gap-8">
                        <div className="text-xl font-bold text-slate-400">The Challenge</div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why they were struggling</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">{study.challenge}</p>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="grid md:grid-cols-[200px_1fr] gap-8">
                        <div className="text-xl font-bold text-blue-600">The Solution</div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{study.service} Implementation</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">{study.solution}</p>

                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                    Key Actions Taken
                                </h4>
                                <ul className="space-y-2">
                                    {study.results.map((r, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                            Authorized {study.service} Protocol
                                        </li>
                                    ))}
                                    <li className="flex items-center gap-2 text-slate-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                        Weekly optimization sprints
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Outcome */}
                    <div className="grid md:grid-cols-[200px_1fr] gap-8">
                        <div className="text-xl font-bold text-green-600">The Outcome</div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Scalable Growth Achieved</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">{study.outcome}</p>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="relative p-10 bg-slate-900 rounded-3xl text-white overflow-hidden mt-8">
                        <Quote className="absolute top-8 left-8 w-16 h-16 text-slate-700 opacity-50" />
                        <div className="relative z-10 text-center">
                            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">"{study.testimonial.quote}"</p>
                            <div>
                                <div className="font-bold text-lg">{study.testimonial.author}</div>
                                <div className="text-slate-400">{study.testimonial.role}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <HomepageCTA />
        </main>
    );
}
