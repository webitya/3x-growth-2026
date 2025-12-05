"use client";

import { Target, Lightbulb, Shield, Rocket } from "lucide-react";

export default function AboutValues() {
    const values = [
        {
            icon: Target,
            title: "Results-Driven",
            description: "We don't get paid unless you see measurable revenue growth within 3 months",
            gradient: "from-pink-500 to-rose-500",
            bg: "from-pink-100 to-rose-100",
            delay: "0ms"
        },
        {
            icon: Shield,
            title: "Transparent",
            description: "No BS, no jargon. Just honest feedback on what's broken and how to fix it",
            gradient: "from-rose-500 to-orange-500",
            bg: "from-rose-100 to-orange-100",
            delay: "150ms"
        },
        {
            icon: Lightbulb,
            title: "Practical",
            description: "We give you systems and playbooks, not theory. Everything is actionable",
            gradient: "from-orange-500 to-amber-500",
            bg: "from-orange-100 to-amber-100",
            delay: "300ms"
        },
        {
            icon: Rocket,
            title: "Scalable",
            description: "Build once, scale forever. Our systems grow with your team and revenue",
            gradient: "from-amber-500 to-yellow-500",
            bg: "from-amber-100 to-yellow-100",
            delay: "450ms"
        }
    ];

    return (
        <section className="relative py-14 md:py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-50 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Our <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Values</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600">What drives everything we do</p>
                </div>

                {/* VALUES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, idx) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={idx}
                                className="group"
                                style={{ animationDelay: value.delay }}
                            >
                                {/* Card with 3D hover effect */}
                                <div className="relative bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105">
                                    {/* Gradient glow */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-30 blur-xl rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300`}>
                                        <Icon className={`w-7 h-7 bg-gradient-to-r ${value.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }} />
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-xl md:text-2xl font-black mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {value.description}
                                    </p>

                                    {/* Corner decorations */}
                                    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-pink-300 border-opacity-50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-rose-300 border-opacity-50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-30% to-transparent opacity-0 group-hover:opacity-20 rounded-2xl pointer-events-none transition-opacity duration-1000" style={{
                                        animation: 'shimmer 2s ease-in-out infinite',
                                        backgroundSize: '200% 100%'
                                    }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
