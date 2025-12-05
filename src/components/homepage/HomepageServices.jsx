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
    <section id="services" className="relative w-full py-8 md:min-h-[85vh] md:flex md:items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50">

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/8 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/8 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 backdrop-blur-sm">
            <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 tracking-wide">Our Services</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            How We{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                Transform Sales
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 blur-xl -z-10"></span>
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions to build, optimize, and scale your sales operations
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-500"
                style={{
                  animationDelay: `${idx * 75}ms`
                }}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg animate-pulse">
                    Most Popular
                  </div>
                )}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 -z-10"></div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
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

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            Not sure which service you need?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Book a free audit call and we'll recommend the best approach for your business
          </p>
          <a
            href="tel:+916200207379"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <BarChart3 className="w-4 h-4" />
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
