"use client";

import { Phone, Mail, CheckCircle2 } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section id="consultation" className="relative py-10 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-blob animation-delay-1000"></div>

        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Headline */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-sm md:text-base text-blue-100">
            Book a free 30-minute call—no pitch, just honest feedback.
          </p>
        </div>

        {/* Compact Benefits */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["Honest feedback", "Clear next steps", "30-min consultation"].map((benefit, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-300" />
              <span className="text-xs font-semibold text-white">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Compact CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <a
            href="https://calendly.com/salessyllabus"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm shadow-xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Book Free Call
          </a>
          <a
            href="mailto:3xgrowth.in@gmail.com"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>

        {/* Compact Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-blue-100 border-t border-white/20 pt-4">
          <a href="tel:+916200207379" className="hover:text-white transition-colors">
            📞 +91 6200207379
          </a>
          <span className="hidden sm:block">•</span>
          <a href="mailto:3xgrowth.in@gmail.com" className="hover:text-white transition-colors">
            📧 www.salessyllabus.com
          </a>
          <span className="hidden sm:block">•</span>
          <span>Apollo Partner Since 2016</span>
        </div>
      </div>
    </section>
  );
}
