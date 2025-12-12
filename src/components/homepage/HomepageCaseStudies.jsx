"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, TrendingUp, Target } from "lucide-react";
import { caseStudies } from "../../data/casestudydata";

export default function HomepageCaseStudies() {
    return (
        <section id="case-studies" className="relative w-full py-16 md:py-24 bg-slate-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
                        <Briefcase className="w-3 h-3" />
                        Proof of Work
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Real Results for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Real Companies</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        See how we've helped Indian B2B companies scale their revenue, fix valid sales processes, and build high-performance teams.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {caseStudies.map((study) => (
                        <Link
                            key={study.id}
                            href={`/case-studies/${study.slug}`}
                            className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>

                                {/* Floating Tags */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-bold text-white bg-blue-600/90 backdrop-blur-md rounded-lg shadow-lg">
                                        {study.industry}
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Target className="w-4 h-4 text-blue-400" />
                                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">{study.service}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:underline decoration-blue-400 decoration-2 underline-offset-4 transition-all">
                                        {study.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="flex-1 p-6 md:p-8 flex flex-col">
                                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                                    {study.summary}
                                </p>

                                {/* Key Results Grid */}
                                <div className="grid grid-cols-3 gap-4 py-4 mb-6 border-y border-slate-100 bg-slate-50/50 rounded-xl px-4">
                                    {study.results.map((result, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-lg md:text-xl font-black text-blue-600">{result.value}</div>
                                            <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wide">{result.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                                            {study.clientName.charAt(0)}
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-bold text-slate-900">{study.clientName}</div>
                                            <div className="text-xs text-slate-500">View Case Study</div>
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/30 hover:-translate-y-1"
                    >
                        <span>Start Your Success Story</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
