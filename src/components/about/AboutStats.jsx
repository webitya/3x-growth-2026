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
            bg: "from-blue-500/20 to-cyan-500/20",
            progress: (counts.clients / targetValues.clients) * 100,
        },
        {
            icon: TrendingUp,
            value: counts.growth,
            suffix: "%",
            label: "Average Growth",
            gradient: "from-cyan-500 to-indigo-500",
            bg: "from-cyan-500/20 to-indigo-500/20",
            progress: (counts.growth / targetValues.growth) * 100,
        },
        {
            icon: Target,
            value: counts.success,
            suffix: "%",
            label: "Success Rate",
            gradient: "from-indigo-500 to-purple-500",
            bg: "from-indigo-500/20 to-purple-500/20",
            progress: (counts.success / targetValues.success) * 100,
        },
        {
            icon: Award,
            value: counts.years,
            suffix: "+",
            label: "Years Experience",
            gradient: "from-purple-500 to-pink-500",
            bg: "from-purple-500/20 to-pink-500/20",
            progress: (counts.years / targetValues.years) * 100,
        }
    ];

    return (
        <section className="relative py-12 md:py-16 max-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden flex items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl" style={{ animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0) 1px, transparent 1px), linear-gradient(to bottom, rgb(0, 0, 0) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-6">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-blue-600">Performance Metrics</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                        Impact by{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Numbers
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                        Real results from real clients - proven track record of transforming SME sales
                    </p>
                </div>

                {/* Stats Grid */}
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

                                {/* Card */}
                                <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Value */}
                                        <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                                            {stat.value}{stat.suffix}
                                        </div>

                                        {/* Label */}
                                        <p className="text-sm font-bold text-slate-600 mb-6">
                                            {stat.label}
                                        </p>

                                        {/* Progress Bar */}
                                        <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
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
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-tl-full rounded-br-2xl transition-opacity group-hover:opacity-20`}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-4 text-lg">
                        Ready to become our next success story?
                    </p>
                    <a
                        href="#team"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                    >
                        Get Started Today
                    </a>
                </div>
            </div>
        </section>
    );
}
