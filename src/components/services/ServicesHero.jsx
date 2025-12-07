"use client";

import { Sparkles, ArrowRight, Target, Users, TrendingUp, Search } from "lucide-react";

export default function ServicesHero() {
  const highlights = [
    { icon: Target, text: "MQL Setup", gradient: "from-blue-500 to-cyan-500" },
    { icon: Users, text: "SQL Setup", gradient: "from-indigo-500 to-blue-500" },
    { icon: TrendingUp, text: "Monthly Support", gradient: "from-purple-500 to-indigo-500" },
    { icon: Search, text: "Sales Audit", gradient: "from-orange-500 to-red-500" }
  ];

  const scrollToService = (idx) => {
    const serviceIds = ["mql-setup", "sql-setup", "monthly-support", "sales-audit"];
    const element = document.getElementById(serviceIds[idx]);
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
    <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/40 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px), linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Diagonal Lines */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 mb-8 shadow-lg shadow-blue-500/10">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold text-blue-700 tracking-wide">OUR SERVICES</span>
        </div>

        {/* Enhanced Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
          How We Help You{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Grow
            </span>
            {/* Underline Effect */}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
          </span>
        </h1>

        {/* Enhanced Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
          Choose the service that fits where you are right now—or{" "}
          <span className="font-bold text-blue-700">combine them for maximum impact</span>.
        </p>

        {/* Service Highlights - Clickable */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => scrollToService(idx)}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200/40 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-900">{item.text}</span>
              </button>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#consultation"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            Not Sure? Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#mql-setup"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 font-bold text-base hover:bg-blue-100 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
          >
            Explore Services Below
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Enhanced Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/60 to-transparent"></div>
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            d="M0,40 Q300,20 600,40 T1200,40"
            stroke="rgb(96, 165, 250)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M0,50 Q300,30 600,50 T1200,50"
            stroke="rgb(59, 130, 246)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>
    </section>
  );
}
