"use client";

import { ArrowRight, Zap, TrendingUp, Users, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutHero() {
  const [text, setText] = useState("");
  const fullText = "3X Your Sales";

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
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-50">
      {/* Premium background effects */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Animated gradient blobs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 rounded-full blur-3xl" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30 transform rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT: Compact Content */}
          <div className="space-y-5">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/30">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-bold text-white">Since 2016 • 50+ SMEs Transformed</span>
            </div>

            {/* Compact headline with typewriter */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              We Help You{" "}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                {text}<span className="inline-block w-1 h-12 bg-blue-600 ml-1 animate-pulse"></span>
              </span>
            </h1>

            {/* Compact description */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
              Proven sales systems that transform chaos into <span className="font-bold text-blue-600">220% average growth</span>. No theory, just actionable playbooks.
            </p>

            {/* Compact inline stats */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Users, text: "50+ SMEs", color: "from-blue-600 to-cyan-600" },
                { icon: TrendingUp, text: "220% Growth", color: "from-indigo-600 to-purple-600" },
                { icon: Zap, text: "3 Months", color: "from-pink-600 to-rose-600" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-900">{stat.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Compact CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Our Story
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#team"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border-2 border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Meet the Team
              </a>
            </div>
          </div>

          {/* RIGHT: Premium visual */}
          <div className="relative lg:flex hidden items-center justify-center h-80">
            {/* Floating cards stack */}
            <div className="relative w-full h-full">
              {/* Card 1 */}
              <div className="absolute top-0 left-8 w-64 h-40 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-2xl transform rotate-6 opacity-80"></div>

              {/* Card 2 */}
              <div className="absolute top-12 right-8 w-64 h-40 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl transform -rotate-6 opacity-80"></div>

              {/* Card 3 (center) */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 h-48 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col items-center justify-center p-6 animate-pulse">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  220%
                </div>
                <div className="text-sm font-semibold text-slate-600">Average Revenue Growth</div>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
