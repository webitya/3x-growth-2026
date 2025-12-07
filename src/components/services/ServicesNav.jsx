"use client";

import { Target, Users, TrendingUp, Search } from "lucide-react";

export default function ServicesNav() {
    const services = [
        {
            id: "mql-setup",
            icon: Target,
            title: "Get Quality Leads",
            subtitle: "MQL Setup",
            description: "No leads or wrong leads? We build your lead generation system.",
            gradient: "from-blue-500 to-cyan-500",
            bg: "from-blue-50 to-cyan-50"
        },
        {
            id: "sql-setup",
            icon: Users,
            title: "Stop Dead Deals",
            subtitle: "SQL Setup",
            description: "Busy but nothing closes? Learn to qualify properly.",
            gradient: "from-indigo-500 to-blue-500",
            bg: "from-indigo-50 to-blue-50"
        },
        {
            id: "monthly-support",
            icon: TrendingUp,
            title: "Monthly Support",
            subtitle: "Ongoing Partnership",
            description: "Need sales leadership? Part-time VP of Sales support.",
            gradient: "from-purple-500 to-indigo-500",
            bg: "from-purple-50 to-indigo-50"
        },
        {
            id: "sales-audit",
            icon: Search,
            title: "Sales Audit",
            subtitle: "Deep Dive",
            description: "Know something's wrong? Get a complete diagnostic.",
            gradient: "from-orange-500 to-red-500",
            bg: "from-orange-50 to-red-50"
        }
    ];

    const scrollToService = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative py-8 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                        Choose Your{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Starting Point
                        </span>
                    </h2>
                    <p className="text-sm text-slate-600">Click on a service to learn more</p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, idx) => {
                        const Icon = service.icon;

                        return (
                            <button
                                key={service.id}
                                onClick={() => scrollToService(service.id)}
                                className="group relative text-left bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-200/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Title & Subtitle */}
                                    <div className="mb-3">
                                        <h3 className="text-base font-black text-slate-900 mb-1">
                                            {service.title}
                                        </h3>
                                        <span className={`inline-block px-2 py-0.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-[10px] font-bold`}>
                                            {service.subtitle}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Arrow Indicator */}
                                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:gap-2 transition-all">
                                        <span>Learn More</span>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} rounded-bl-2xl rounded-br-2xl group-hover:w-full transition-all duration-500`}></div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Gradient Bars Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 space-y-2 pb-2">
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
