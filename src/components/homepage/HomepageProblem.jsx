"use client";

import { AlertCircle, X, CheckCircle2 } from "lucide-react";

export default function HomepageProblem() {
  const problems = [
    "Unpredictable revenue – some months are great, others terrible",
    "Wrong leads – lots of inquiries but nobody has budget",
    "Time wasters – weeks on prospects who never buy",
    "Endless sales cycles – deals drag with no next step",
    "Proposals vanish – great meetings, then silence",
    "Can't forecast – pipeline is guesswork, planning risky",
    "Team inconsistency – one rep performs, others struggle",
    "Hiring mistakes – new salespeople don't work out",
  ];

  return (
    <section className="relative w-full py-12 overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-white">



      {/* Subtle background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
      </div>

      {/* Main container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

        {/* Header */}
        <div className="text-center mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50/70 backdrop-blur-sm border border-red-200/50">
            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-bold text-red-600 tracking-wide">The Reality Check</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            You're Not Alone —{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Most SMEs Face These
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-800/10 blur-xl -z-10"></span>
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Check the ones you're experiencing right now:
          </p>
        </div>

        {/* Problem cards grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200/40 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-300/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{
                animationDelay: `${idx * 50}ms`
              }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-400/5 group-hover:to-blue-500/5 transition-all duration-300 -z-10"></div>

              {/* Icon */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="relative w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-blue-500 transition-colors duration-300 flex items-center justify-center">
                    <X className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>

                {/* Text */}
                <p className="text-sm text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                  {problem}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Compact */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-50/70 to-emerald-50/70 backdrop-blur-sm border border-green-200/50">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">
              We help you fix these — systematically
            </span>
          </div>
        </div>
      </div>

      {/* Creative Bottom Separator - Gradient Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/60 via-blue-50/30 to-transparent"></div>

        {/* Multiple wave layers */}
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            d="M0,40 Q300,20 600,40 T1200,40"
            stroke="rgb(96, 165, 250)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M0,50 Q300,30 600,50 T1200,50"
            stroke="rgb(59, 130, 246)"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
          />
        </svg>
      </div>
    </section>
  );
}
