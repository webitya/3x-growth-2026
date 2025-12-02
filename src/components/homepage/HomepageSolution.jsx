"use client";

import { Search, Wrench, TrendingUp } from "lucide-react";

export default function HomepageSolution() {
  const steps = [
    {
      title: "FIND WHAT'S BROKEN",
      description:
        "We audit your entire sales process—from lead generation to deal closure. You'll know exactly where you're losing money.",
      icon: Search,
    },
    {
      title: "FIX THE SYSTEM",
      description:
        "We build simple, step-by-step processes your team can actually follow. No complicated tools. No corporate jargon.",
      icon: Wrench,
    },
    {
      title: "GROW PREDICTABLY",
      description:
        "We stay with you to coach your team, fix what's not working, and help you grow month after month.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">

      {/* Background Gradient & Shapes */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-blue-100" />
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/30 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Sales Systems That Deliver Predictable Growth
          </h2>
          <p className="text-lg md:text-xl text-slate-600">Three-Step Process:</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="
                  relative p-8 rounded-2xl 
                  bg-white/70 backdrop-blur-2xl
                  border border-slate-200/40
                  shadow-sm hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* Icon Container */}
                <div
                  className="
                    w-14 h-14 rounded-xl mb-6
                    bg-blue-600/10 border border-blue-600/20
                    flex items-center justify-center
                  "
                >
                  <Icon size={30} className="text-blue-700" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>

                {/* Connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-blue-600 to-transparent opacity-60" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="tel:+916200207379"
            className="
              px-8 py-4 rounded-xl 
              bg-blue-600 text-white font-semibold
              shadow-lg shadow-blue-600/30
              hover:bg-blue-700 hover:shadow-blue-700/40
              transition-all duration-300 inline-block
            "
          >
            Get Your Free Sales Audit
          </a>
        </div>
      </div>
    </section>
  );
}
