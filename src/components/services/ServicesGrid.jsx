"use client";

import { Target, CheckCircle2, TrendingUp, BarChart3 } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  const services = [
    {
      number: 1,
      title: "Get More Quality Leads",
      subtitle: "MQL Setup",
      icon: Target,
      color: "blue",
      description: "Build a complete lead generation system",
      problem:
        "You're either getting no leads, or getting the wrong leads. Your marketing budget feels wasted because nobody's buying.",
      solution: "We build you a complete lead generation system that brings in people who actually want to buy.",
      includes: [
        "Outbound Sales Setup — Apollo.io-based targeting",
        "High-response email & call scripts",
        "Inbound capture + conversion systems",
        "SDR training for consistent meetings",
        "Test campaigns + refinement",
      ],
      timeline: "4–6 weeks",
      investment: "Custom quote",
      result: "Consistent flow of qualified meetings.",
      isPrimary: false,
    },

    {
      number: 2,
      title: "Stop Chasing Dead Deals",
      subtitle: "SQL Setup",
      icon: CheckCircle2,
      color: "emerald",
      description: "Teach your team proper qualification",
      problem:
        "Your team is busy but nothing closes. They chase deals that were never real.",
      solution: "We install a qualification system so reps only work real opportunities.",
      includes: [
        "Qualification checklist + scoring system",
        "BANT-based questions & scripts",
        "Opportunity scoring templates",
        "Team training + role-plays",
        "Implementation support",
      ],
      timeline: "3–4 weeks",
      investment: "Custom quote",
      result: "Higher close rates + accurate forecasting.",
      isPrimary: true,
    },

    {
      number: 3,
      title: "Monthly Sales Support",
      subtitle: "Ongoing Partnership",
      icon: TrendingUp,
      color: "amber",
      description: "Your part-time sales leader",
      problem:
        "You need sales leadership, but not full-time.",
      solution:
        "We act as your sales leader: fixing scripts, deals, pipeline, and performance.",
      includes: [
        "Lead gen support + campaign review",
        "Qualification coaching",
        "Deal closing guidance",
        "Follow-up optimization",
        "Weekly dashboards",
      ],
      timeline: "Ongoing (3-month minimum)",
      investment: "Plan-based pricing",
      result: "Faster deals, higher conversions, stronger team.",
      isPrimary: false,
    },

    {
      number: 4,
      title: "Sales Team Audit",
      subtitle: "Diagnostic Deep Dive",
      icon: BarChart3,
      color: "purple",
      description: "Know exactly what's broken",
      problem: "You know sales isn’t working — but not why.",
      solution:
        "A full diagnostic of your entire sales operation with a clear action plan.",
      includes: [
        "Ideal customer analysis",
        "Lead-gen channel review",
        "Sales process breakdown",
        "Skill assessment",
        "Pipeline quality check",
      ],
      timeline: "2–3 weeks",
      investment: "₹X,XX,XXX",
      result: "Clarity + a step-by-step roadmap.",
      isPrimary: false,
    },
  ];

  return (
    <section className="relative py-10 md:py-10 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* ⭐ Gradient Shapes (clean + compact) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-80 h-80 bg-blue-200/30 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/30 blur-[90px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ⭐ Compact Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
            Four Ways We Help You{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Win
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mt-3">
            Start with one service or combine them — each solves a real sales problem.
          </p>
        </div>

        {/* ⭐ COMPACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} isPrimary={service.isPrimary} />
          ))}
        </div>

        {/* ⭐ Compact Value Props */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 text-center gap-6 bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div>
            <div className="text-3xl font-black text-blue-600">3x</div>
            <p className="text-slate-600 text-sm">Average revenue growth</p>
          </div>

          <div className="hidden md:block border-l border-r border-slate-200"></div>

          <div>
            <div className="text-3xl font-black text-blue-600">90 Days</div>
            <p className="text-slate-600 text-sm">Time to see results</p>
          </div>

          <div className="hidden md:block border-l border-r border-slate-200"></div>

          <div>
            <div className="text-3xl font-black text-blue-600">100%</div>
            <p className="text-slate-600 text-sm">Hands-on implementation</p>
          </div>
        </div>

      </div>
    </section>
  );
}
