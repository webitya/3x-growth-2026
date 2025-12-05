"use client";

import { Phone, Mail, MapPin, Clock, Zap, ArrowRight } from "lucide-react";

export default function ContactHero() {
    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            value: "+91 620 020 7379",
            href: "tel:+916200207379",
            color: "blue"
        },
        {
            icon: Mail,
            title: "Email Us",
            value: "contact@3xgrowth.com",
            href: "mailto:contact@3xgrowth.com",
            color: "green"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "India (Remote)",
            href: "#",
            color: "purple"
        },
        {
            icon: Clock,
            title: "Response Time",
            value: "Within 24 hours",
            href: "#",
            color: "orange"
        }
    ];

    return (
        <section className="relative pt-10 md:pt-12 pb-12 md:pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200">
                        <Zap className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-bold text-blue-700 tracking-wide">Let's Talk</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                        Ready to{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                3X Your Sales?
                            </span>
                            <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-xl -z-10"></span>
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
                        const colorClasses = {
                            blue: "from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 group-hover:text-blue-600",
                            green: "from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 group-hover:text-green-600",
                            purple: "from-purple-100 to-indigo-100 hover:from-purple-200 hover:to-indigo-200 group-hover:text-purple-600",
                            orange: "from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 group-hover:text-orange-600"
                        };

                        return (
                            <a
                                key={idx}
                                href={method.href}
                                className="group relative bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                                style={{
                                    animationDelay: `${idx * 75}ms`
                                }}
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[method.color]} flex items-center justify-center transition-all duration-300`}>
                                        <Icon className="w-6 h-6 text-slate-700 transition-colors" />
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
        </section>
    );
}
