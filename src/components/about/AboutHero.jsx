"use client";

import { ArrowRight, Zap, TrendingUp, Users, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutHero() {
  const [text, setText] = useState("");
  const fullText = "Transform Your Sales";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Light Background Effects */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Soft Gradient Blobs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT: Content - Compact */}
          <div className="space-y-5">
            {/* Compact Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/70 backdrop-blur-sm border border-blue-200/50">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-bold text-blue-700">Since 2016 • 50+ SMEs Transformed</span>
            </div>

            {/* Headline with Typewriter - Compact */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              We Help You{" "}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                {text}<span className="inline-block w-0.5 h-10 bg-blue-600 ml-2 animate-pulse"></span>
              </span>
            </h1>

            {/* Description - Compact */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
              Proven sales systems that transform chaos into{" "}
              <span className="font-bold text-blue-600">220% average growth</span>.
              No theory, just actionable playbooks built for SMEs.
            </p>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Users, value: "50+", label: "SMEs", color: "from-blue-500 to-cyan-500" },
                { icon: TrendingUp, value: "220%", label: "Avg Growth", color: "from-cyan-500 to-blue-500" },
                { icon: Zap, value: "90 Days", label: "Results", color: "from-indigo-500 to-blue-500" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className={`text-xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-600 mt-0.5">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTAs - Compact */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#team"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                Meet Our Founder
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-50/70 backdrop-blur-sm border border-blue-200/50 text-blue-700 font-bold text-sm hover:bg-blue-100/80 hover:border-blue-300/60 hover:-translate-y-1 transition-all duration-300"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* RIGHT: Visual - Compact */}
          <div className="relative lg:flex hidden items-center justify-center h-80">
            <div className="relative w-full h-full">
              {/* Floating Cards - Compact */}
              <div className="absolute top-0 left-8 w-60 h-36 bg-gradient-to-br from-blue-600/90 to-cyan-600/90 backdrop-blur-xl rounded-2xl shadow-2xl transform rotate-6 border border-blue-500/30 flex items-center justify-center p-5">
                <div className="text-center">
                  <div className="text-base font-bold text-white">100% Success Rate</div>
                </div>
              </div>

              <div className="absolute top-10 right-8 w-60 h-36 bg-gradient-to-br from-indigo-600/90 to-blue-600/90 backdrop-blur-xl rounded-2xl shadow-2xl transform -rotate-6 border border-indigo-500/30 flex items-center justify-center p-5">
                <div className="text-center">
                  <div className="text-base font-bold text-white">Proven Systems</div>
                </div>
              </div>

              {/* Center Card - Compact */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-blue-300/50 flex flex-col items-center justify-center p-6">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  220%
                </div>
                <div className="text-xs font-semibold text-slate-600">Average Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 to-transparent"></div>
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 Q300,10 600,30 T1200,30"
            stroke="rgb(96, 165, 250)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>
    </section>
  );
}
