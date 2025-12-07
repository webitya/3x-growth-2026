"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Users, Target, Award, Zap } from "lucide-react";

export default function AboutStats() {
    const [counts, setCounts] = useState({
        clients: 0,
        growth: 0,
        success: 0,
        years: 0
    });

    const targetValues = {
        clients: 50,
        growth: 220,
        success: 100,
        years: 8
    };

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setCounts({
                clients: Math.floor(targetValues.clients * progress),
                growth: Math.floor(targetValues.growth * progress),
                success: Math.floor(targetValues.success * progress),
                years: Math.floor(targetValues.years * progress)
            });

            if (step >= steps) {
                setCounts(targetValues);
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        {
            icon: Users,
            value: counts.clients,
            suffix: "+",
            label: "SMEs Transformed",
            gradient: "from-blue-500 to-cyan-500",
            bg: "from-blue-500/10 to-cyan-500/10",
            progress: (counts.clients / targetValues.clients) * 100,
        },
        {
            icon: TrendingUp,
            value: counts.growth,
            suffix: "%",
            label: "Average Growth",
            gradient: "from-cyan-500 to-indigo-500",
            bg: "from-cyan-500/10 to-indigo-500/10",
            progress: (counts.growth / targetValues.growth) * 100,
        },
        {
            icon: Target,
            value: counts.success,
            suffix: "%",
            label: "Success Rate",
            gradient: "from-indigo-500 to-blue-500",
            bg: "from-indigo-500/10 to-blue-500/10",
            progress: (counts.success / targetValues.success) * 100,
        },
        {
            icon: Award,
            value: counts.years,
            suffix: "+",
            label: "Years Experience",
            gradient: "from-blue-500 to-blue-600",
            bg: "from-blue-500/10 to-blue-600/10",
            progress: (counts.years / targetValues.years) * 100,
        }
    ];

    return (
        <section className="relative py-12 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/6 rounded-full blur-3xl animate-blob animation-delay-1000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0) 1px, transparent 1px), linear-gradient(to bottom, rgb(0, 0, 0) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header - Compact */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/70 backdrop-blur-sm border border-blue-200/50 mb-4">
                        <Zap className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-bold text-blue-700">Performance Metrics</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                        Impact by{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                            Numbers
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                        Real results from real clients - proven track record of transforming SME sales
                    </p>
                </div>

                {/* Stats Grid - Compact */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}></div>

                                {/* Card - Compact */}
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-200/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500">
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon - Compact */}
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Value - Compact */}
                                        <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                                            {stat.value}{stat.suffix}
                                        </div>

                                        {/* Label */}
                                        <p className="text-xs font-bold text-slate-600 mb-4">
                                            {stat.label}
                                        </p>

                                        {/* Progress Bar */}
                                        <div className="relative w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                            <div
                                                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all ease-out`}
                                                style={{
                                                    width: `${stat.progress}%`,
                                                    transitionDuration: '2000ms'
                                                }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-tl-full rounded-br-2xl transition-opacity group-hover:opacity-20`}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA - Compact */}
                <div className="mt-10 text-center">
                    <p className="text-slate-600 mb-3 text-base">
                        Ready to become our next success story?
                    </p>
                    <a
                        href="#team"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                    >
                        Get Started Today
                    </a>
                </div>
            </div>

            {/* Top Separator */}
            <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 space-y-2 pt-2">
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
