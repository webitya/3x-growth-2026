"use client";

import { Linkedin, Mail, Phone, Award, Star } from "lucide-react";
import Image from "next/image";

export default function AboutTeam() {
    return (
        <section id="team" className="relative py-12 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40 overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl animate-blob animation-delay-1000"></div>

                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px), linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header - Compact */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 mb-4">
                        <Award className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-bold text-blue-700">Leadership</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                        Meet Our{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                            Founder & CEO
                        </span>
                    </h2>
                    <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                        Leading the transformation of sales for companies with proven systems
                    </p>
                </div>

                {/* Founder Section - Compact Layout */}
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* LEFT: Photo & Social - Compact */}
                    <div className="flex flex-col items-center space-y-4">
                        {/* Photo Container - Compact */}
                        <div className="relative">
                            {/* Subtle Glow */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>

                            {/* Photo Circle - Compact */}
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-blue-500/20">
                                <Image
                                    src="/founder_sandeep_gupta.png"
                                    alt="Sandeep Gupta - Founder & CEO"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Status Badge - Compact */}
                            <div className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-white">Available</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links - Compact */}
                        <div className="flex gap-2">
                            <a
                                href="#"
                                className="group w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/50 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                            >
                                <Linkedin className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="mailto:3xgrowth.in@gmail.com"
                                className="group w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/50 flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition-all duration-300"
                            >
                                <Mail className="w-4 h-4 text-cyan-600 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="tel:+916200207379"
                                className="group w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/50 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                            </a>
                        </div>

                        {/* Quick Stats - Compact */}
                        <div className="flex gap-5">
                            <div className="text-center">
                                <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                    50+
                                </div>
                                <div className="text-[10px] text-slate-600 mt-0.5">Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                    220%
                                </div>
                                <div className="text-[10px] text-slate-600 mt-0.5">Avg Growth</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                    8+
                                </div>
                                <div className="text-[10px] text-slate-600 mt-0.5">Years Exp</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Information - Compact */}
                    <div className="space-y-4">
                        {/* Name & Title - Compact */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                                Sandeep Gupta
                            </h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200/50">
                                <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                                <span className="text-xs font-bold text-blue-700">
                                    Founder & CEO, 3x Growth
                                </span>
                            </div>
                        </div>

                        {/* Bio - Compact */}
                        <div className="space-y-3">
                            <p className="text-sm text-slate-700 leading-relaxed">
                                With over <span className="font-bold text-blue-600">8+ years of experience</span> in sales transformation, Sandeep has helped <span className="font-bold text-cyan-600">50+ founders</span> achieve predictable revenue growth.
                            </p>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                His proven sales systems have generated an average of <span className="font-bold text-blue-600">220% revenue growth</span> for clients, turning chaotic sales processes into reliable, scalable machines.
                            </p>
                        </div>

                        {/* Expertise - Compact */}
                        <div>
                            <div className="text-[10px] font-bold text-slate-500 mb-2 tracking-wider">CORE EXPERTISE</div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Sales Systems",
                                    "Pipeline Management",
                                    "Team Training",
                                    "Revenue Growth",
                                    "Process Optimization",
                                    "Business Growth"
                                ].map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2.5 py-1 rounded-lg bg-blue-50/80 border border-blue-200/50 text-[10px] font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-300 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA - Compact */}
                        <div className="pt-2">
                            <a
                                href="https://calendly.com/salessyllabus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                Schedule a Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Bars Separator */}
            <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 space-y-2 pt-2">
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
