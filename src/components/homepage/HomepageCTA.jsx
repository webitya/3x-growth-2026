"use client";

import { Phone, Mail, Zap, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomepageCTA() {
  return (
    <section className="relative bg-slate-950 py-16 md:py-20 overflow-hidden border-t border-blue-500/20">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 animate-blob animation-delay-1000"></div>

        {/* Scan line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-scan-fast opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Main CTA Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-900/30 overflow-hidden p-8 md:p-12 group hover:border-blue-500/50 transition-all duration-500">

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></span>
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></span>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float-slow"
                style={{
                  width: '3px',
                  height: '3px',
                  background: i % 2 === 0 ? '#60a5fa' : '#22d3ee',
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${8 + i * 2}s`,
                  boxShadow: '0 0 10px currentColor'
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">

            {/* Left Content */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 backdrop-blur-sm">
                <Zap className="w-3 h-3 text-blue-400 animate-pulse" />
                <span className="text-xs font-bold text-blue-300">Limited Slots Available</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Ready to{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    3X Your Sales?
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-xl -z-10"></span>
                </span>
              </h2>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                Book a free 30-minute sales audit and discover exactly how to scale your revenue predictably.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>100% actionable insights</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>30-min session</span>
                </div>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="space-y-4">
              {/* Primary CTA */}
              <a
                href="tel:+916200207379"
                className="group/btn relative block w-full px-6 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-600/40 hover:shadow-blue-600/60 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-2 border-blue-400/30 overflow-hidden text-center"
              >
                {/* Animated border */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity">
                  <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></span>
                </span>

                {/* Ripple effect */}
                <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover/btn:opacity-30 group-hover/btn:scale-150 transition-all duration-700 rounded-xl"></span>

                {/* Triple shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 skew-x-12"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent translate-x-full group-hover/btn:-translate-x-full transition-transform duration-1200 -skew-x-12"></span>

                <span className="relative flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all" />
                  Book Free Sales Audit
                  <Sparkles className="w-5 h-5 group-hover/btn:animate-pulse group-hover/btn:rotate-180 transition-all" />
                </span>

                {/* Pulsing glow ring */}
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover/btn:opacity-20 blur-lg group-hover/btn:animate-pulse"></span>
              </a>

              {/* Secondary CTA */}
              <a
                href="mailto:contact@3xgrowth.com"
                className="group/btn2 relative block w-full px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 backdrop-blur-xl border border-blue-500/30 text-blue-300 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-200 transition-all duration-300 overflow-hidden text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover/btn2:translate-x-full transition-transform duration-1000"></span>

                <span className="relative flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 group-hover/btn2:scale-110 transition-transform" />
                  Email Us Instead
                  <ArrowRight className="w-4 h-4 group-hover/btn2:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Contact info */}
              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <Phone className="w-3 h-3" />
                  <a href="tel:+916200207379">+91 620 020 7379</a>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <Mail className="w-3 h-3" />
                  <a href="mailto:contact@3xgrowth.com">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom animated glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-shimmer"></div>
      </div>
    </section>
  );
}
