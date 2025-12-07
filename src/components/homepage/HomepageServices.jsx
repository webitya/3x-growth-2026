"use client";

import { Target, Users, TrendingUp, BarChart3, ArrowRight, Check } from "lucide-react";

export default function HomepageServices() {
  const services = [
    {
      icon: Target,
      title: "Sales Strategy",
      description: "Build a clear, repeatable sales process that converts leads into customers consistently.",
      features: [
        "ICP & persona definition",
        "Lead qualification framework",
        "Sales playbook creation"
      ],
      popular: false
    },
    {
      icon: BarChart3,
      title: "Pipeline Management",
      description: "Implement systems for accurate forecasting and predictable revenue growth.",
      features: [
        "CRM setup & optimization",
        "Pipeline health tracking",
        "Forecasting models"
      ],
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Sales Training",
      description: "Equip your team with proven frameworks to close more deals, faster.",
      features: [
        "Consultative selling training",
        "Objection handling",
        "Negotiation tactics"
      ],
      popular: false
    },
    {
      icon: Users,
      title: "Team Scaling",
      description: "Hire, onboard, and scale your sales team without losing consistency.",
      features: [
        "Hiring playbooks",
        "Onboarding programs",
        "Performance metrics"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="relative w-full py-12 overflow-hidden bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40">

      {/* Creative Top Separator - Hexagon Pattern */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/6 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/6 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

        {/* Header */}
        <div className="text-center mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/70 backdrop-blur-sm border border-blue-200/50">
            <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 tracking-wide">Our Services</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            How We{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Transform Sales
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-800/10 blur-xl -z-10"></span>
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions to build, optimize, and scale your sales operations
          </p>
        </div>

        {/* Services grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/40 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300/60 hover:-translate-y-2 transition-all duration-500"
                style={{
                  animationDelay: `${idx * 75}ms`
                }}
              >
                {/* Popular badge - Compact */}
                {service.popular && (
                  <div className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-bold shadow-lg animate-pulse">
                    Most Popular
                  </div>
                )}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 -z-10"></div>

                {/* Icon - Compact */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 to-indigo-100/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features - Compact */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Compact */}
        <div className="text-center bg-gradient-to-r from-blue-50/70 to-indigo-50/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
            Not sure which service you need?
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Book a free audit call and we'll recommend the best approach for your business
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <BarChart3 className="w-4 h-4" />
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
