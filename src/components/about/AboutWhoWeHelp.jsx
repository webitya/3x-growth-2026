"use client";

import { Check } from "lucide-react";

export default function AboutWhoWeHelp() {
  const criteria = [
    "Doing ₹2-50 crore in annual revenue",
    "Selling B2B products or services",
    "Struggling with unpredictable sales",
    "Ready to invest in fixing their sales system (not just hiring more reps)",
    "Willing to implement changes and trust the process",
  ];

  return (
    <section className="relative w-full py-14 md:py-20 overflow-hidden">

      {/* 🌤️ LIGHT BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10">
        {/* Soft vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40" />

        {/* Floating glowing shapes */}
        <div className="absolute -top-10 right-10 w-52 h-52 bg-blue-200/40 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/40 blur-[110px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-100/30 blur-[80px] rounded-full transform -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Who We Help
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            We work with SME founders and business owners who are:
          </p>
        </div>

        {/* List — Compact */}
        <div className="space-y-3 mb-10">
          {criteria.map((criterion, idx) => (
            <div
              key={idx}
              className="
                flex items-start gap-3 p-3 md:p-4
                rounded-lg bg-white/70
                backdrop-blur-md
                border border-slate-200/60
                hover:border-blue-400/60
                shadow-sm hover:shadow-md
                transition-all duration-200
              "
            >
              <Check size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm md:text-base text-slate-800 leading-snug">
                {criterion}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Message */}
        <div className="
          rounded-xl p-5 md:p-6 
          bg-gradient-to-r from-amber-50/80 to-orange-50/80 
          border border-amber-300/50
          shadow-sm
        ">
          <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
            We are not for everyone. If you’re looking for quick tips or magic fixes, we are not the right fit.  
            But if youa are ready to build a real sales engine, we’d love to talk.
          </p>
        </div>

      </div>
    </section>
  );
}
