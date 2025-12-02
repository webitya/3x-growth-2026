"use client";

import { Users, Target, Zap, BarChart3 } from "lucide-react";

export default function HomepageServices() {
  const services = [
    {
      icon: Users,
      title: "Get More Quality Leads",
      description:
        "Reach customers who actually need your product. No more wasted budget.",
    },
    {
      icon: Target,
      title: "Stop Chasing Dead Deals",
      description:
        "Identify real buyers fast and focus only on deals that can close.",
    },
    {
      icon: Zap,
      title: "Monthly Sales Support",
      description:
        "Your on-demand sales leader fixing pipeline issues as they appear.",
    },
    {
      icon: BarChart3,
      title: "Sales Team Audit",
      description:
        "Diagnose what's broken and get a clear 90-day action plan.",
    },
  ];

  return (
    <section
      id="services"
      className="
        relative w-full py-16 md:py-24 
        overflow-hidden
      "
    >
      {/* Background Gradient + Soft Blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100" />
        <div className="absolute top-10 left-12 w-64 h-64 bg-blue-200/30 blur-[110px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-300/30 blur-[140px] rounded-full" />
      </div>

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            How We Help You Grow
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Choose the solution that fits your needs
          </p>
        </div>

        {/* Services Grid — 4 items on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-14">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="
                  group p-6 rounded-2xl
                  bg-white/70 backdrop-blur-xl
                  border border-slate-200/40
                  shadow-sm 
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                "
              >
                {/* Icon Box */}
                <div
                  className="
                    w-12 h-12 mb-4 rounded-xl 
                    bg-blue-600/10 border border-blue-600/20 
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-blue-600/20
                  "
                >
                  <Icon size={24} className="text-blue-700" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="/services"
                  className="
                    inline-flex items-center gap-1.5 
                    px-4 py-2.5 text-sm font-semibold
                    rounded-lg
                    border border-blue-600/30 
                    bg-white/40 text-blue-700
                    transition-all duration-200
                    hover:bg-blue-50 hover:border-blue-600
                  "
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
