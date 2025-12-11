"use client";

import { Check, Clock, DollarSign, Phone, Target, Users, TrendingUp, Search } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      id: "sales-audit",
      icon: Search,
      title: "Sales and Marketing Audit",
      subtitle: "Find Out Exactly What's Wrong",
      problem: "Before fixing anything, we need to understand what's broken. You might be targeting the wrong people, losing deals at specific stages, or missing competitor moves.",
      solution: "Our audit shows you exactly where you're losing money and provides a clear roadmap to fix it.",
      analyzeAreas: [
        { title: "Who should you sell to?", desc: "Are you targeting the right customers?" },
        { title: "Where do leads come from?", desc: "Which channels work, which don't?" },
        { title: "Where do deals die?", desc: "At what stage do you lose most opportunities?" },
        { title: "How good is your team?", desc: "Can they generate leads, qualify, present, handle objections?" },
        { title: "Do reps really qualify?", desc: "Or do they just hope deals will close?" },
        { title: "What are competitors doing?", desc: "What are you missing?" }
      ],
      deliverables: [
        { icon: "📄", title: "20-50 Page Report", desc: "Clear findings and data" },
        { icon: "📋", title: "90-Day Action Plan", desc: "With priorities" },
        { icon: "🛣️", title: "Clear Roadmap", desc: "What to fix first" }
      ],
      timeline: "2-3 weeks",
      investment: "Custom Quote",
      result: "You'll know exactly what's broken, why it's broken, and what to fix first.",
      bestFor: "Companies unclear on why growth has stalled or those planning to scale.",
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50/80 to-red-50/80"
    },
    {
      id: "bot-model",
      icon: Target,
      title: "Lead Gen & Qualification",
      subtitle: "BOT Model (Build-Operate-Transfer)",
      problem: "Most sales teams waste time chasing deals that will never close. You need a predictable engine, not just random actions.",
      solution: "We build your complete B2B lead generation & qualification engine, operate it until it runs smoothly, and then transfer it to your team.",
      sqlCriteria: ["Approved budget", "Decision-making authority", "Clear need for your solution", "Defined buying timeline"],
      includes: [
        {
          title: "MQL Setup (Enquiries)",
          items: ["Inbound & outbound workflows", "Criteria for enquiry-level MQLs", "Tools, automation & tracking"]
        },
        {
          title: "SQL Setup (Qualification)",
          items: ["Qualification checklist", "High-impact questions", "Cost–value templates", "Opportunity scoring/grading"]
        },
        {
          title: "Training & Handover",
          items: ["Team training on the system", "Operational transparency", "Full transfer of assets"]
        }
      ],
      timeline: "3-6 months",
      investment: "Custom Quote",
      result: "A complete engine producing MQLs and high-intent SQLs, ensuring your team only speaks to real buyers.",
      bestFor: "Companies wanting to build an internal asset for long-term growth.",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50/80 to-cyan-50/80"
    },
    {
      id: "outsourced-model",
      icon: Users,
      title: "Outsourced Sales Model",
      subtitle: "End-to-End Responsibility",
      problem: "Hiring, training, and managing a sales team is difficult, expensive, and time-consuming. You want results without the headache.",
      solution: "We take full responsibility for delivering Sales Qualified Leads (SQLs). We build and manage the entire operation from our premises.",
      includes: [
        {
          title: "Complete Operation",
          items: ["Recruitment & onboarding", "Training & management", "Project management"]
        },
        {
          title: "Our Deliverables",
          items: ["Generate high-quality enquiries", "Qualify each into specific SQLs", "Work with your team to convert"]
        },
        {
          title: "Transparency",
          items: ["Timely performance reports", "Operational transparency", "Seamless communication"]
        }
      ],
      timeline: "Ongoing",
      investment: "Custom Quote",
      result: "We act as your extended team, delivering fully verified, high-intent SQLs directly to your pipeline.",
      bestFor: "Companies who want results (SQLs) and prefer to outsource the operational heavy lifting.",
      gradient: "from-purple-500 to-indigo-500",
      bg: "from-purple-50/80 to-indigo-50/80"
    }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-br from-blue-50/20 via-white to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative"
              >
                {/* Service Card */}
                <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl border border-blue-200/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden`}>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10 p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                            {service.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-white text-xs font-bold`}>
                            {service.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-red-50/50 border border-red-200/50">
                        <div className="text-xs font-bold text-red-600 mb-2">THE PROBLEM</div>
                        <p className="text-sm text-slate-700 leading-relaxed">{service.problem}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-green-50/50 border border-green-200/50">
                        <div className="text-xs font-bold text-green-600 mb-2">WHAT WE DO</div>
                        <p className="text-sm text-slate-700 leading-relaxed">{service.solution}</p>
                      </div>
                    </div>

                    {/* SQL Criteria (Service 2 only) */}
                    {service.sqlCriteria && (
                      <div className="mb-6 p-4 rounded-xl bg-blue-50/50 border border-blue-200/50">
                        <div className="text-xs font-bold text-blue-700 mb-3">WHAT'S A "SALES QUALIFIED LEAD" (SQL)?</div>
                        <div className="grid grid-cols-2 gap-2">
                          {service.sqlCriteria.map((criteria, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-slate-700">{criteria}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-slate-600 mt-2 italic">If any of these are missing, it's not a real opportunity.</p>
                      </div>
                    )}

                    {/* Includes/Support Areas */}
                    <div className="mb-6">
                      <div className="text-sm font-bold text-slate-900 mb-3">
                        {service.includes ? "WHAT'S INCLUDED:" : service.supportAreas ? "HOW IT WORKS:" : "WHAT WE ANALYZE:"}
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {(service.includes || service.supportAreas || service.analyzeAreas)?.map((item, i) => (
                          <div key={i} className="p-3 rounded-lg bg-slate-50/80 border border-slate-200/50">
                            <div className="text-xs font-bold text-blue-700 mb-2">{item.title}</div>
                            {item.items ? (
                              <ul className="space-y-1">
                                {item.items.map((subitem, j) => (
                                  <li key={j} className="flex items-start gap-1.5">
                                    <Check className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-xs text-slate-600">{subitem}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs text-slate-600">{item.desc}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Plans (Service 3 only) */}
                    {service.plans && (
                      <div className="mb-6">
                        <div className="text-sm font-bold text-slate-900 mb-3">AVAILABLE PLANS:</div>
                        <div className="grid md:grid-cols-3 gap-3">
                          {service.plans.map((plan, i) => (
                            <div key={i} className={`p-4 rounded-xl border-2 ${i === 1 ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 bg-slate-50/50'}`}>
                              <div className="text-base font-black text-slate-900 mb-1">{plan.hours}</div>
                              <div className="text-xs text-slate-600">{plan.price}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 text-xs font-bold text-slate-700">What You Get:</div>
                        <div className="grid md:grid-cols-2 gap-2 mt-2">
                          {service.benefits?.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-xs text-slate-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Deliverables (Service 4 only) */}
                    {service.deliverables && (
                      <div className="mb-6">
                        <div className="text-sm font-bold text-slate-900 mb-3">WHAT YOU RECEIVE:</div>
                        <div className="space-y-3">
                          {service.deliverables.map((item, i) => (
                            <div key={i} className="flex gap-3 p-3 rounded-lg bg-slate-50/80 border border-slate-200/50">
                              <div className="text-2xl">{item.icon}</div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 mb-1">{item.title}</div>
                                <div className="text-xs text-slate-600">{item.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer Info */}
                    <div className="grid md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50/80 border border-slate-200/50">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold text-slate-700">Timeline</span>
                        </div>
                        <div className="text-sm font-black text-slate-900">{service.timeline}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold text-slate-700">Investment</span>
                        </div>
                        <div className="text-sm font-black text-slate-900">{service.investment}</div>
                      </div>
                      <div className="md:col-span-1">
                        <a
                          href="https://calendly.com/salessyllabus"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block w-full px-4 py-2.5 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-bold text-sm text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                        >
                          Book a Call
                        </a>
                      </div>
                    </div>

                    {/* Result & Best For */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold text-green-600">RESULT:</span>
                        <span className="text-xs text-slate-700">{service.result}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold text-blue-600">BEST FOR:</span>
                        <span className="text-xs text-slate-700">{service.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
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
