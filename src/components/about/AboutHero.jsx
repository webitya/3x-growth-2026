"use client";

import { ArrowRight, Zap, TrendingUp, Users, Sparkles, Award, Target } from "lucide-react";
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
    <section className="relative min-h-[70vh] max-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Premium Tech Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Animated Gradient Blobs */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-600 to-cyan-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-indigo-600 to-purple-600 opacity-30 rounded-full blur-3xl" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>

        {/* Diagonal Lines */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-40"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT: Content */}
          <div className="space-y-6">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 shadow-lg">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-bold text-blue-300">Since 2016 • 50+ SMEs Transformed</span>
            </div>

            {/* Headline with Typewriter */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              We Help You{" "}
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {text}<span className="inline-block w-1 h-12 bg-blue-500 ml-2 animate-pulse"></span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
              Proven sales systems that transform chaos into{" "}
              <span className="font-bold text-blue-400">220% average growth</span>.
              No theory, just actionable playbooks built for SMEs.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, value: "50+", label: "SMEs", color: "from-blue-500 to-cyan-500" },
                { icon: TrendingUp, value: "220%", label: "Avg Growth", color: "from-cyan-500 to-blue-500" },
                { icon: Zap, value: "90 Days", label: "Results", color: "from-indigo-500 to-purple-500" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#team"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                Meet Our Founder
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/50 text-blue-400 font-bold text-base hover:bg-slate-700/50 hover:-translate-y-1 transition-all duration-300"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* RIGHT: Premium Visual */}
          <div className="relative lg:flex hidden items-center justify-center h-96">
            <div className="relative w-full h-full">
              {/* Floating Tech Cards */}
              <div className="absolute top-0 left-8 w-72 h-44 bg-gradient-to-br from-blue-600/90 to-cyan-600/90 backdrop-blur-xl rounded-2xl shadow-2xl transform rotate-6 border border-blue-500/30 flex items-center justify-center p-6">
                <div className="text-center">
                  <Award className="w-12 h-12 text-white mx-auto mb-3" />
                  <div className="text-xl font-bold text-white">100% Success Rate</div>
                </div>
              </div>

              <div className="absolute top-12 right-8 w-72 h-44 bg-gradient-to-br from-indigo-600/90 to-purple-600/90 backdrop-blur-xl rounded-2xl shadow-2xl transform -rotate-6 border border-indigo-500/30 flex items-center justify-center p-6">
                <div className="text-center">
                  <Target className="w-12 h-12 text-white mx-auto mb-3" />
                  <div className="text-xl font-bold text-white">Proven Systems</div>
                </div>
              </div>

              {/* Center Card - Main */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-80 h-52 bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-blue-500/50 flex flex-col items-center justify-center p-8">
                <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  220%
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-4">Average Revenue Growth</div>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
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
