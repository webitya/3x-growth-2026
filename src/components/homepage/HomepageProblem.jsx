"use client";

import { Check } from "lucide-react";

export default function HomepageProblem() {
  const problems = [
    "Unpredictable revenue – some months are great, others terrible.",
    "Wrong leads – lots of inquiries but nobody has budget or urgency.",
    "Time wasters – weeks spent on prospects who were never going to buy.",
    "Endless sales cycles – deals drag on with no next step.",
    "Proposals vanish – great meetings, then silence.",
    "Can't forecast – pipeline is guesswork, planning becomes risky.",
    "Team inconsistency – one rep performs, others struggle.",
    "Hiring mistakes – new salespeople don’t work out.",
  ];

  return (
    <section className="relative w-full py-14 md:py-20 overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />

        {/* Floating glow accents */}
        <div className="absolute top-0 left-10 w-56 h-56 bg-blue-200/30 blur-[90px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200/30 blur-[110px] rounded-full animate-float"></div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-slow { animation: float 10s ease-in-out infinite; }
        `}
      </style>

      {/* MAIN CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            You’re Not Alone — Most SMEs Face These Problems
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-1">
            Check the ones you’re experiencing right now:
          </p>
        </div>

        {/* PROBLEM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="
                flex items-start gap-3 
                p-3.5 md:p-4
                rounded-xl 
                bg-white/70 backdrop-blur-xl
                border border-slate-200/50
                hover:shadow-lg hover:-translate-y-1 
                transition-all duration-300
              "
            >
              {/* Icon Bubble */}
              <div
                className="
                  w-6 h-6 flex items-center justify-center 
                  rounded-md bg-green-100 text-green-600
                "
              >
                <Check size={14} />
              </div>

              <p className="text-slate-700 text-sm md:text-[15px] leading-snug">
                {problem}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
