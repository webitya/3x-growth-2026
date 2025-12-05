"use client";

import { Linkedin } from "lucide-react";

export default function AboutTeam() {
    const team = [
        {
            name: "Aditya Sinha",
            role: "Founder & Sales Strategist",
            image: "AS",
            linkedin: "#",
            specialty: "Sales Systems",
            delay: "0ms"
        },
        {
            name: "Priya Sharma",
            role: "Lead Consultant",
            image: "PS",
            linkedin: "#",
            specialty: "Pipeline Management",
            delay: "100ms"
        },
        {
            name: "Raj Kumar",
            role: "Sales Coach",
            image: "RK",
            linkedin: "#",
            specialty: "Team Training",
            delay: "200ms"
        },
        {
            name: "Sarah Khan",
            role: "Operations Head",
            image: "SK",
            linkedin: "#",
            specialty: "Process Optimization",
            delay: "300ms"
        }
    ];

    return (
        <section className="relative py-14 md:py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl" style={{ animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Meet the <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Team</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600">Sales experts who've been in your shoes</p>
                </div>

                {/* TEAM GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col items-center"
                            style={{ animationDelay: member.delay }}
                        >
                            {/* Hexagon-like container (using rounded square for simplicity) */}
                            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                                {/* Glow ring */}
                                <div className="absolute -inset-2 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-30 rounded-2xl blur-lg transition-opacity duration-500"></div>

                                {/* Main avatar card */}
                                <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 cursor-pointer">
                                    {/* Avatar initials */}
                                    <div className="text-center relative z-10">
                                        <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                                            {member.image}
                                        </div>
                                    </div>

                                    {/* LinkedIn overlay */}
                                    <a
                                        href={member.linkedin}
                                        className="absolute inset-0 flex items-center justify-center bg-green-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                                    >
                                        <Linkedin className="w-8 h-8 text-white" />
                                    </a>
                                </div>

                                {/* Floating specialty badge */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[10px] font-bold shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 whitespace-nowrap">
                                    {member.specialty}
                                </div>
                            </div>

                            {/* Name & Role */}
                            <div className="text-center">
                                <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-slate-600">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
