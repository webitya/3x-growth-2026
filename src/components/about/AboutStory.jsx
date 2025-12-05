"use client";

import { Calendar, Award, Rocket, Target } from "lucide-react";

export default function AboutStory() {
  const milestones = [
    {
      year: "2016",
      title: "The Beginning",
      description: "Started helping first SME clients fix broken sales processes",
      icon: Rocket,
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-100 to-red-100",
      delay: "0ms"
    },
    {
      year: "2018",
      title: "Proven Framework",
      description: "Developed MQL/SQL qualification system that 3X'd client revenue",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-100 to-cyan-100",
      delay: "150ms"
    },
    {
      year: "2021",
      title: "Scale Mode",
      description: "Expanded to help 50+ SMEs across industries",
      icon: Award,
      gradient: "from-purple-500 to-indigo-500",
      bg: "from-purple-100 to-indigo-100",
      delay: "300ms"
    },
    {
      year: "2024",
      title: "Today",
      description: "220% average growth, predictable sales for every client",
      icon: Calendar,
      gradient: "from-green-500 to-emerald-500",
      bg: "from-green-100 to-emerald-100",
      delay: "450ms"
    }
  ];

  return (
    <section id="story" className="relative py-14 md:py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Our <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600">From startup to trusted partner for 50+ SMEs</p>
        </div>

        {/* TIMELINE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, idx) => {
            const Icon = milestone.icon;

            return (
              <div
                key={idx}
                className={`relative group ${idx % 2 === 1 ? 'md:mt-12' : ''}`}
                style={{ animationDelay: milestone.delay }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:border-purple-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  {/* Year badge */}
                  <div className={`absolute -top-4 left-6 px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.gradient} text-white text-xs font-bold shadow-lg`}>
                    {milestone.year}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.bg} flex items-center justify-center mb-4 mt-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className={`w-6 h-6 bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${milestone.gradient} rounded-bl-2xl rounded-br-2xl group-hover:w-full transition-all duration-700`}></div>

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${milestone.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
