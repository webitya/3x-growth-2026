"use client";

import { TrendingUp } from "lucide-react";
import { useState } from "react";

export default function HomepageHero() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const barHeights = [60, 80, 100, 120, 140];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate w-full max-h-[90vh] overflow-hidden flex items-center bg-gradient-to-br from-[#f9fbff] via-[#f4f7ff] to-[#eef2ff]"
    >
      {/* --- Background Floating Shapes --- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute top-[-90px] left-[-40px] w-[420px] h-[420px] bg-[#cfe0ff]/50 blur-3xl rounded-full animate-float-slow" />
        <div className="absolute bottom-[-120px] right-[-60px] w-[520px] h-[520px] bg-[#d9e8ff]/50 blur-[110px] rounded-full animate-float-slower" />
        <div className="absolute top-1/3 right-1/4 w-[220px] h-[220px] bg-[#e6eeff]/60 blur-2xl rounded-full animate-float" />
      </div>

      {/* --- Water Waves (Corrected z-index, size, opacity) --- */}
      <div className="absolute bottom-0 left-0 w-full -z-10 pointer-events-none">

        {/* Top Glow Above Waves */}
        <div className="absolute -top-4 left-0 w-full h-10 bg-gradient-to-t from-[#f0f6ff] to-transparent opacity-70 blur-xl" />

        {/* Wave Layer 1 */}
        <svg
          className="relative block w-[230%] h-28 animate-wave-slow opacity-[0.7]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,110 1080,-20 1440,50 L1440,120 L0,120 Z"
            fill="#d7e6ff"
          />
        </svg>

        {/* Wave Layer 2 */}
        <svg
          className="absolute bottom-0 block w-[230%] h-24 animate-wave-medium opacity-[0.55]"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,90 1080,-10 1440,40 L1440,110 L0,110 Z"
            fill="#e4eeff"
          />
        </svg>

        {/* Wave Layer 3 */}
        <svg
          className="absolute bottom-0 block w-[230%] h-20 animate-wave-fast opacity-[0.45]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C360,70 1080,-20 1440,30 L1440,100 L0,100 Z"
            fill="#f2f7ff"
          />
        </svg>

        {/* Shimmer on water surface */}
        <div className="absolute bottom-5 left-0 w-full h-5 bg-white/45 blur-md animate-shimmer opacity-40"></div>
      </div>

      {/* --- Animations --- */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 10s ease-in-out infinite; }
        .animate-float-slower { animation: float 16s ease-in-out infinite; }

        @keyframes waveSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-45%); }
        }
        @keyframes waveMedium {
          0% { transform: translateX(0); }
          100% { transform: translateX(-35%); }
        }
        @keyframes waveFast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        .animate-wave-slow { animation: waveSlow 16s linear infinite; }
        .animate-wave-medium { animation: waveMedium 12s linear infinite; }
        .animate-wave-fast { animation: waveFast 9s linear infinite; }

        @keyframes shimmerEffect {
          0% { opacity: 0.3; transform: translateX(-20%); }
          50% { opacity: 0.55; transform: translateX(20%); }
          100% { opacity: 0.3; transform: translateX(-20%); }
        }
        .animate-shimmer {
          animation: shimmerEffect 6s ease-in-out infinite;
        }
      `}</style>

      {/* === MAIN CONTENT === */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-4 md:space-y-6 max-w-lg">
            <h1
              id="hero-title"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Stop Guessing When Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Next Sale
              </span>{" "}
              Will Come
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-medium">
              We Fix Broken Sales Systems So You Can Grow Predictably—Month After Month.
            </p>

            <p className="text-base md:text-lg text-slate-600 max-w-md">
              Most SMEs lose revenue every month because their sales systems don’t work.
            </p>

            <p className="text-base md:text-lg font-semibold text-slate-700">
              We build simple sales systems that deliver predictable growth.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="tel:+916200207379"
                className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:bg-blue-700 transition-all duration-300 backdrop-blur-md"
              >
                Book Free Sales Audit
              </a>

              <a
                href="#services"
                className="px-7 py-3 rounded-2xl border border-blue-600 text-blue-600 font-semibold bg-white/30 backdrop-blur-xl hover:bg-blue-50 transition-all duration-300"
              >
                See How We Help
              </a>
            </div>

            {/* SOCIAL PROOF */}
            <div className="flex items-center gap-4 pt-4 border-t border-blue-100/40 mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white shadow-md shadow-slate-300/20 text-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>

              <div>
                <p className="font-semibold text-slate-900 text-sm">50+ SMEs Growing</p>
                <p className="text-xs text-slate-600">With our proven system</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE GRAPH CARD */}
          <div className="hidden md:flex justify-end">
            <div className="
              relative w-full max-w-md rounded-3xl 
              bg-white/20 backdrop-blur-2xl 
              border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.18)] 
              p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
            ">
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm font-medium text-slate-700">Revenue Forecast</p>
                  <p className="text-xs text-slate-500">Predictable growth in action</p>
                </div>
                <TrendingUp size={22} className="text-green-600" />
              </div>

              <div className="relative z-10 rounded-xl bg-white/40 backdrop-blur-xl border border-white/40 p-5 shadow-inner">
                <div className="flex items-end gap-5 h-40">
                  {barHeights.map((h, i) => {
                    const isActive = hoverIndex === i;
                    return (
                      <div
                        key={i}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className="flex-1 flex flex-col items-center cursor-pointer"
                      >
                        <div
                          className="w-full rounded-t-xl transition-all duration-300"
                          style={{
                            height: `${isActive ? h + 20 : h}px`,
                            background: isActive
                              ? "linear-gradient(180deg, #4d7dff 0%, #9cc0ff 100%)"
                              : "linear-gradient(180deg, #6ea8ff 0%, #8fbaff 100%)",
                            transform: isActive ? "translateY(-6px)" : "translateY(0)",
                            boxShadow: isActive
                              ? "0 0 22px rgba(120,160,255,0.7)"
                              : "none",
                          }}
                        />
                        <span className={`mt-2 text-xs ${isActive ? "text-blue-700 font-semibold" : "text-slate-600"}`}>
                          M{i + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative z-10 mt-6 bg-white/40 backdrop-blur-xl rounded-xl border border-white/40 p-4 shadow">
                <p className="text-sm text-slate-600 mb-3">Key Metrics</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xl font-bold text-blue-600">240%</p>
                    <p className="text-xs text-slate-600">Pipeline Growth</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-green-600">65%</p>
                    <p className="text-xs text-slate-600">Win Rate Increase</p>
                  </div>
                </div>
              </div>

              <p className="relative z-10 mt-6 text-xs text-slate-500 text-right">
                Trusted by Oracle, SAP, AWS partners
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
