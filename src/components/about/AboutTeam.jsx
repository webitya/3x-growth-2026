"use client";

import { Linkedin, Mail, Phone, Award } from "lucide-react";

export default function AboutTeam() {
    return (
        <section id="team" className="relative py-12 md:py-16 max-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden flex items-center">
            {/* Premium Tech Background */}
            <div className="absolute inset-0 pointer-events-none select-none">
                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>

                {/* Floating Orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500 opacity-20 rounded-full blur-3xl" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>

                {/* Diagonal Lines */}
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30"></div>
                <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Premium Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 mb-6">
                        <Award className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-blue-300">Leadership</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                        Meet Our{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Founder & CEO
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
                        Leading the transformation of SME sales with proven systems and strategies
                    </p>
                </div>

                {/* Premium Founder Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="group relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

                        {/* Main Card */}
                        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden">
                            <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
                                {/* Left: Profile Image Area */}
                                <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
                                    {/* Premium Avatar */}
                                    <div className="relative group/avatar">
                                        {/* Animated Ring */}
                                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full blur-md opacity-50 group-hover/avatar:opacity-75 transition duration-500 animate-spin-slow"></div>

                                        {/* Avatar Container */}
                                        <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                                {/* Initials */}
                                                <div className="text-center">
                                                    <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                        SG
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status Badge */}
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-2 border-slate-900 shadow-lg">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                <span className="text-xs font-bold text-white">Active</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex gap-3">
                                        <a
                                            href="#"
                                            className="group/social w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all duration-300"
                                        >
                                            <Linkedin className="w-5 h-5 text-blue-400 group-hover/social:text-white transition-colors" />
                                        </a>
                                        <a
                                            href="mailto:sandeep@3xgrowth.com"
                                            className="group/social w-12 h-12 rounded-xl bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300"
                                        >
                                            <Mail className="w-5 h-5 text-cyan-400 group-hover/social:text-white transition-colors" />
                                        </a>
                                        <a
                                            href="tel:+916200207379"
                                            className="group/social w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all duration-300"
                                        >
                                            <Phone className="w-5 h-5 text-blue-400 group-hover/social:text-white transition-colors" />
                                        </a>
                                    </div>
                                </div>

                                {/* Right: Information */}
                                <div className="md:col-span-3 space-y-4">
                                    {/* Name & Title */}
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                                            Sandeep Gupta
                                        </h3>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                Founder & CEO, 3x Growth
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <div className="space-y-4">
                                        <p className="text-slate-300 leading-relaxed">
                                            With over <span className="font-bold text-blue-400">8+ years of experience</span> in sales transformation, Sandeep has helped <span className="font-bold text-cyan-400">50+ SME founders</span> achieve predictable revenue growth.
                                        </p>
                                        <p className="text-slate-300 leading-relaxed">
                                            His proven sales systems have generated an average of <span className="font-bold text-blue-400">220% revenue growth</span> for clients, turning chaotic sales processes into reliable, scalable machines.
                                        </p>
                                    </div>

                                    {/* Expertise Tags */}
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 mb-3">CORE EXPERTISE</div>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                "Sales Systems",
                                                "Pipeline Management",
                                                "Team Training",
                                                "Revenue Growth",
                                                "Process Optimization",
                                                "SME Consulting"
                                            ].map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs font-semibold text-slate-300 hover:bg-slate-700/60 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats Row */}
                                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/50">
                                        <div className="text-center">
                                            <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                50+
                                            </div>
                                            <div className="text-xs text-slate-400 mt-1">Clients</div>
                                        </div>
                                        <div className="text-center border-x border-slate-700/50">
                                            <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                220%
                                            </div>
                                            <div className="text-xs text-slate-400 mt-1">Avg Growth</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                8+
                                            </div>
                                            <div className="text-xs text-slate-400 mt-1">Years Exp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Decoration */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-slate-400 mb-4">Ready to transform your sales?</p>
                    <a
                        href="tel:+916200207379"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Phone className="w-5 h-5" />
                        Schedule a Call with Sandeep
                    </a>
                </div>
            </div>
        </section>
    );
}
