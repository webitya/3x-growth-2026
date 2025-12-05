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
    <section className="relative w-full py-8 md:min-h-[85vh] md:flex md:items-center overflow-hidden bg-white">

      {/* Subtle background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-10 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
      </div>

      {/* Main container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200/50 backdrop-blur-sm">
            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-bold text-red-600 tracking-wide">The Reality Check</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            You're Not Alone —{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Most SMEs Face These
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-orange-600/10 blur-xl -z-10"></span>
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Check the ones you're experiencing right now:
          </p>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-red-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{
                animationDelay: `${idx * 50}ms`
              }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 via-orange-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-orange-500/5 group-hover:to-red-500/5 transition-all duration-300 -z-10"></div>

              {/* Icon */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="relative w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-red-500 transition-colors duration-300 flex items-center justify-center">
                    <X className="w-3 h-3 text-slate-400 group-hover:text-red-500 transition-colors" />
                  </div>
                </div>

                {/* Text */}
                <p className="text-sm text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                  {problem}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">
              We help you fix these — systematically
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
