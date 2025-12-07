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
            gradient: "from-indigo-600 to-blue-600",
            bg: "from-indigo-500/10 to-blue-500/10",
        },
        {
            icon: Rocket,
            title: "Scalable",
            description: "Build once, scale forever. Our systems grow with your team and revenue without breaking.",
            gradient: "from-blue-600 to-blue-700",
            bg: "from-blue-500/10 to-blue-700/10",
        }
    ];

    return (
        <section className="relative py-12 bg-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0) 1px, transparent 1px), linear-gradient(to bottom, rgb(0, 0, 0) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header - Compact */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/70 backdrop-blur-sm border border-blue-200/50 mb-4">
                        <Zap className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-bold text-blue-700">Core Principles</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                        Our{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                            Values
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                        The principles that drive every decision and every client relationship
                    </p>
                </div>

                {/* Values Grid - Compact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {values.map((value, idx) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}></div>

                                {/* Card - Compact */}
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-200/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer transform hover:scale-[1.02]">
                                    {/* Background Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.bg} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon - Compact */}
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-lg md:text-xl font-black mb-2 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-5 rounded-tl-full rounded-br-2xl`}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Statement - Compact */}
                <div className="mt-8 text-center">
                    <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/70 backdrop-blur-sm border border-blue-200/50">
                        <p className="text-sm md:text-base font-semibold text-slate-900 leading-relaxed">
                            "These aren't just words on a wall. They're commitments we make to every client, every single day."
                        </p>
                        <p className="text-xs text-slate-600 mt-2">— Sandeep Gupta, Founder & CEO</p>
                    </div>
                </div>
            </div>

            {/* Hexagon Pattern Separator */}
            <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent"></div>
                <div className="absolute inset-0 opacity-15" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                }}></div>
            </div>
        </section>
    );
}
