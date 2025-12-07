"use client";

import { CheckCircle2, Zap, Target, TrendingUp } from "lucide-react";

export default function HomepageSolution() {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Diagnose the Gaps",
      description: "We audit your current sales process, identify bottlenecks, and pinpoint exactly what's preventing predictable growth."
    },
    {
      icon: Zap,
      number: "02",
      title: "Build the System",
      description: "We implement proven frameworks for lead qualification, pipeline management, and forecasting that actually work."
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Scale with Confidence",
      description: "Your team executes consistently, revenue becomes predictable, and you can finally plan for sustainable growth."
    }
  ];

  return (
    <section className="relative w-full py-12 overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50">

      {/* Creative Top Separator - Diagonal Stripes */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(96, 165, 250, 0.1) 20px, rgba(96, 165, 250, 0.1) 40px)'
        }}></div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/6 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/6 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

        {/* Header */}
        <div className="text-center mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50/70 backdrop-blur-sm border border-green-200/50">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs font-bold text-green-700 tracking-wide">The Solution</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            How We{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Fix Your Sales
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-xl -z-10"></span>
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            A proven 3-step process to transform unpredictable sales into a scalable system
          </p>
        </div>

        {/* Steps - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 -z-10"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="relative group"
                style={{
                  animationDelay: `${idx * 100}ms`
                }}
              >
                {/* Card - Compact Glassmorphism */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/60 hover:-translate-y-2 transition-all duration-500">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 -z-10"></div>

                  {/* Number badge - Compact */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-black text-base flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {step.number}
                  </div>

                  {/* Icon - Compact */}
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 to-cyan-100/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>

                {/* Connecting dot */}
                <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Compact */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600 mb-3">
            Ready to transform your sales process?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-4 h-4" />
            Start Your Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
