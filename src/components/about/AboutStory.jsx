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
      bg: "from-orange-100/50 to-red-100/50",
    },
    {
      year: "2018",
      title: "Proven Framework",
      description: "Developed MQL/SQL qualification system that 3X'd client revenue",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-100/50 to-cyan-100/50",
    },
    {
      year: "2021",
      title: "Scale Mode",
      description: "Expanded to help 50+ SMEs across industries",
      icon: Award,
      gradient: "from-indigo-500 to-blue-500",
      bg: "from-indigo-100/50 to-blue-100/50",
    },
    {
      year: "2024",
      title: "Today",
      description: "220% average growth, predictable sales for every client",
      icon: Calendar,
      gradient: "from-green-500 to-emerald-500",
      bg: "from-green-100/50 to-emerald-100/50",
    }
  ];

  return (
    <section id="story" className="relative py-12 bg-gradient-to-br from-green-50/30 via-white to-green-50/30 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/6 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Compact */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
            Our <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600">From startup to trusted partner for 50+ SMEs</p>
        </div>

        {/* TIMELINE CARDS - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((milestone, idx) => {
            const Icon = milestone.icon;

            return (
              <div
                key={idx}
                className={`relative group ${idx % 2 === 1 ? 'md:mt-8' : ''}`}
              >
                {/* Card - Compact */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-blue-200/40 shadow-sm hover:border-blue-300/60 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500">
                  {/* Year badge - Compact */}
                  <div className={`absolute -top-3 left-5 px-3 py-1 rounded-full bg-gradient-to-r ${milestone.gradient} text-white text-[10px] font-bold shadow-lg`}>
                    {milestone.year}
                  </div>

                  {/* Icon - Compact */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${milestone.bg} backdrop-blur-sm flex items-center justify-center mb-3 mt-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className={`w-5 h-5 text-${milestone.gradient.split('-')[1]}-600`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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

      {/* Diagonal Stripes Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(96, 165, 250, 0.1) 20px, rgba(96, 165, 250, 0.1) 40px)'
        }}></div>
      </div>
    </section>
  );
}
