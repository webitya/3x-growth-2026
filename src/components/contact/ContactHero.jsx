"use client";

import { Phone, Mail, MapPin, Clock, Sparkles, CheckCircle2 } from "lucide-react";

export default function ContactHero() {
    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            value: "+91 620 020 7379",
            href: "tel:+916200207379",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Mail,
            title: "Email Us",
            value: "contact@3xgrowth.com",
            href: "mailto:contact@3xgrowth.com",
            gradient: "from-cyan-500 to-indigo-500"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "India (Remote)",
            href: "#",
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            icon: Clock,
            title: "Response Time",
            value: "Within 24 hours",
            href: "#",
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section className="relative py-16 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-1000"></div>

                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px), linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 mb-6 shadow-lg shadow-blue-500/10">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-blue-700 tracking-wide">LET'S TALK</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
                        Ready to{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                                3X Your Sales?
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Book a free 30-minute audit or send us a message. We'll show you exactly how to fix what's broken in your sales process.
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contactMethods.map((method, idx) => {
                        const Icon = method.icon;

                        return (
                            <a
                                key={idx}
                                href={method.href}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-blue-200/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/60 hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Hover Gradient Overlay */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                <div className="relative flex flex-col items-center text-center space-y-3">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-500 mb-1">{method.title}</p>
                                        <p className="text-sm font-bold text-slate-900">{method.value}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 to-transparent"></div>
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path
                        d="M0,30 Q300,15 600,30 T1200,30"
                        stroke="rgb(96, 165, 250)"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.2"
                    />
                </svg>
            </div>
        </section>
    );
}
