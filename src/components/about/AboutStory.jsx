"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="relative w-full py-14 md:py-20 overflow-hidden">

      {/* LIGHT BACKGROUND + SOFT GLOWS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />

        <div className="absolute top-10 left-[15%] w-48 h-48 bg-blue-100/40 blur-[90px] rounded-full" />
        <div className="absolute bottom-0 right-[10%] w-64 h-64 bg-indigo-100/40 blur-[110px] rounded-full" />
      </div>

      {/* LAYOUT WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Story</h2>
          <div className="h-1 w-12 mx-auto bg-blue-600 rounded-full mt-2" />
        </div>

        {/* GRID LAYOUT: TEXT LEFT — IMAGE RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT COLUMN — TEXT */}
          <div className="space-y-6">

            {/* Intro card */}
            <div
              className="
                border-l-4 border-blue-500 
                bg-white/70 backdrop-blur-xl 
                rounded-xl p-5 shadow-sm
              "
            >
              <p className="text-slate-800 text-base md:text-lg font-semibold leading-relaxed">
                Most sales consultants give you a fancy presentation and disappear.  
                <span className="text-blue-600 font-bold"> We’re different.</span>
              </p>
            </div>

            {/* Story text */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We have actually run sales teams — hired reps, built processes,
              closed deals, fixed mistakes, and learned what really works.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              For the past 8+ years, we have been inside SME businesses,
              fixing broken sales systems and building predictable revenue engines.
            </p>

            {/* Highlight card */}
            <div
              className="
                bg-gradient-to-r from-blue-100 to-blue-50 
                border border-blue-200/40
                rounded-xl p-5 shadow-sm
              "
            >
              <p className="text-slate-800 text-base md:text-lg font-semibold leading-relaxed">
                We don’t just advise — we build the system with you.
              </p>
              <div className="flex items-center gap-2 mt-3 text-blue-700 text-xs md:text-sm font-medium">
                <ArrowRight size={16} />
                8+ years of hands-on experience
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN — IMAGE */}
          <div className="w-full flex justify-center md:justify-end">
            <div
              className="
                relative w-full max-w-md rounded-2xl overflow-hidden
                shadow-lg shadow-blue-200/40
                border border-white/40 bg-white/40 backdrop-blur-xl
              "
            >
              <Image
                src="/about-hero.jpeg"  // 🔁 change this to your actual image
                alt="Our Story - Sales Team"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
