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
    <section className="relative w-full py-8 md:min-h-[85vh] md:flex md:items-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50">

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/8 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/8 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200/50 backdrop-blur-sm">
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

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 -z-10"></div>

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
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-500">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 -z-10"></div>

                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>

                {/* Connecting dot */}
                <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Ready to transform your sales process?
          </p>
          <a
            href="tel:+916200207379"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-4 h-4" />
            Start Your Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
