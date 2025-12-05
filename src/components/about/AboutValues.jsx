"use client";

import { Target, Lightbulb, Shield, Rocket, Zap } from "lucide-react";

export default function AboutValues() {
    const values = [
        {
            icon: Target,
            title: "Results-Driven",
            description: "We don't get paid unless you see measurable revenue growth within 90 days. Your success is our success.",
            gradient: "from-blue-600 to-cyan-600",
            bg: "from-blue-500/10 to-cyan-500/10",
        },
        {
            icon: Shield,
            title: "Transparent",
            description: "No BS, no jargon. Just honest feedback on what's broken and exactly how to fix it with proven systems.",
            gradient: "from-cyan-600 to-indigo-600",
            bg: "from-cyan-500/10 to-indigo-500/10",
        },
        {
            icon: Lightbulb,
            title: "Practical",
            description: "We give you systems and playbooks, not theory. Every strategy is actionable and ready to implement.",
            gradient: "from-indigo-600 to-purple-600",
            bg: "from-indigo-500/10 to-purple-500/10",
        },
        {
            icon: Rocket,
            title: "Scalable",
            description: "Build once, scale forever. Our systems grow with your team and revenue without breaking.",
            gradient: "from-purple-600 to-pink-600",
            bg: "from-purple-500/10 to-pink-500/10",
        }
    ];

    return (
        <section className="relative py-10 md:py-14 max-h-[90vh] bg-white overflow-auto">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>

                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0) 1px, transparent 1px), linear-gradient(to bottom, rgb(0, 0, 0) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 mb-4">
                        <Zap className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-bold text-purple-600">Core Principles</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                        Our{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Values
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                        The principles that drive every decision and every client relationship
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((value, idx) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}></div>

                                {/* Card */}
                                <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]">
                                    {/* Background Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.bg} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-xl md:text-2xl font-black mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-5 rounded-tl-full rounded-br-2xl`}></div>
                                    <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${value.gradient} opacity-5 rounded-br-full rounded-tl-2xl`}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Statement */}
                <div className="mt-10 text-center">
                    <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                        <p className="text-base md:text-lg font-semibold text-slate-900 leading-relaxed">
                            "These aren't just words on a wall. They're commitments we make to every client, every single day."
                        </p>
                        <p className="text-sm text-slate-600 mt-3">— Sandeep Gupta, Founder & CEO</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
