"use client";

import { Phone, Mail, Zap, CheckCircle2 } from "lucide-react";

export default function HomepageCTA() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-1000"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, rgb(255, 255, 255) 1px, transparent 1px), linear-gradient(to bottom, rgb(255, 255, 255) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Zap className="w-4 h-4 text-white animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wide">LIMITED SLOTS AVAILABLE</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Ready to 3X Your Sales?
            </h2>

            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
              Book a free 30-minute sales audit and discover exactly how to scale your revenue predictably.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                <span>100% actionable insights</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                <span>30-min session</span>
              </div>
            </div>
          </div>

          {/* Right CTAs */}
          <div className="space-y-3">
            {/* Primary CTA */}
            <a
              href="https://calendly.com/salessyllabus"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full px-8 py-4 rounded-xl font-bold text-base bg-white text-blue-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
            >
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

              <span className="relative flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Book Free Sales Audit
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:contact@salessyllabus.com"
              className="group relative block w-full px-8 py-4 rounded-xl font-bold text-base bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

              <span className="relative flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Email Us Instead
              </span>
            </a>

            {/* Contact Info */}
            <div className="flex items-center justify-center gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+916200207379">+91 620 020 7379</a>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@salessyllabus.com">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 Q300,15 600,30 T1200,30"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
