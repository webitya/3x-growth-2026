"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Users, Target, Award } from "lucide-react";

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
            gradient: "from-indigo-500 to-purple-500",
            bg: "from-indigo-100 to-purple-100",
            progress: (counts.clients / targetValues.clients) * 100,
            delay: "0ms"
        },
        {
            icon: TrendingUp,
            value: counts.growth,
            suffix: "%",
            label: "Average Growth",
            gradient: "from-purple-500 to-pink-500",
            bg: "from-purple-100 to-pink-100",
            progress: (counts.growth / targetValues.growth) * 100,
            delay: "100ms"
        },
        {
            icon: Target,
            value: counts.success,
            suffix: "%",
            label: "Success Rate",
            gradient: "from-pink-500 to-rose-500",
            bg: "from-pink-100 to-rose-100",
            progress: (counts.success / targetValues.success) * 100,
            delay: "200ms"
        },
        {
            icon: Award,
            value: counts.years,
            suffix: "+",
            label: "Years Experience",
            gradient: "from-rose-500 to-orange-500",
            bg: "from-rose-100 to-orange-100",
            progress: (counts.years / targetValues.years) * 100,
            delay: "300ms"
        }
    ];

    return (
        <section className="relative py-14 md:py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl" style={{ animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Impact by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Numbers</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600">Real results from real clients</p>
                </div>

                {/* STATS DASHBOARD */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative bg-white bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border-2 border-white border-opacity-40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                style={{ animationDelay: stat.delay }}
                            >
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>

                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                                    <Icon className={`w-6 h-6 bg-gradient-to-r ${stat.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }} />
                                </div>

                                {/* Animated counter */}
                                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                                    {stat.value}{stat.suffix}
                                </div>

                                <p className="text-xs md:text-sm font-semibold text-slate-600 mb-4">
                                    {stat.label}
                                </p>

                                {/* Progress bar */}
                                <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all ease-out`}
                                        style={{
                                            width: `${stat.progress}%`,
                                            transitionDuration: '2000ms'
                                        }}
                                    ></div>
                                </div>

                                {/* Pulsing glow */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl pointer-events-none transition-opacity duration-500`} style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
