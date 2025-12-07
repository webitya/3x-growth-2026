"use client";

import { Check, Clock, DollarSign, Phone, Target, Users, TrendingUp, Search } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      id: "mql-setup",
      icon: Target,
      title: "Get More Quality Leads",
      subtitle: "MQL Setup",
      problem: "You're either getting no leads, or getting the wrong leads. Your marketing budget feels wasted because nobody's buying.",
      solution: "We build you a complete lead generation system that brings in people who actually want to buy.",
      includes: [
        {
          title: "Outbound Sales Setup",
          items: ["Apollo.io setup & targeting", "Build targeted contact lists", "Create response-getting campaigns"]
        },
        {
          title: "Email & Call Scripts",
          items: ["Proven meeting-booking templates", "Industry-personalized messaging", "A/B tested until they work"]
        },
        {
          title: "Inbound Lead Capture",
          items: ["Website visitor capture systems", "Buyer-attracting content", "High-converting forms"]
        },
        {
          title: "Team Training",
          items: ["SDR meeting generation training", "Quality outreach coaching", "Confidence building"]
        },
        {
          title: "Testing & Refinement",
          items: ["Test campaign execution", "Performance measurement", "Continuous optimization"]
        }
      ],
      timeline: "4-6 weeks",
      investment: "Custom quote",
      result: "Consistent flow of meetings with qualified prospects who match your ideal customer profile.",
      bestFor: "Companies with no consistent lead flow, or those wasting money on marketing that doesn't convert.",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50/80 to-cyan-50/80"
    },
    {
      id: "sql-setup",
      icon: Users,
      title: "Stop Chasing Dead Deals",
      subtitle: "SQL Setup",
      problem: "Your sales team is busy, but nothing closes. They spend weeks talking to people who can't or won't buy.",
      solution: "We teach your team how to qualify properly—so they only spend time on deals they can actually win.",
      sqlCriteria: ["Budget approved", "Authority to decide", "Clear need for your solution", "Timeline to buy"],
      includes: [
        {
          title: "Qualification Framework",
          items: ["Simple team checklist", "Clear opportunity criteria", "Deal scoring system"]
        },
        {
          title: "BANT Questions",
          items: ["Buying intent questions", "Decision maker identification", "Budget & timeline techniques"]
        },
        {
          title: "Tools & Templates",
          items: ["Cost-benefit analysis", "TCO calculators", "Forecasting documentation"]
        },
        {
          title: "Team Training",
          items: ["Workshop-style training", "Scenario role-playing", "Ongoing coaching"]
        },
        {
          title: "Implementation Support",
          items: ["Rollout assistance", "Issue resolution", "Adoption ensuring"]
        }
      ],
      timeline: "3-4 weeks",
      investment: "Custom quote",
      result: "Your team only spends time on deals they can win. Forecast accuracy improves dramatically.",
      bestFor: "Companies with lots of activity but low close rates, or those who can't predict which deals will actually close.",
      gradient: "from-indigo-500 to-blue-500",
      bg: "from-indigo-50/80 to-blue-50/80"
    },
    {
      id: "monthly-support",
      icon: TrendingUp,
      title: "Monthly Sales Support",
      subtitle: "Ongoing Partnership",
      problem: "You need sales leadership, but can't afford (or don't want) a full-time VP of Sales.",
      solution: "Think of us as your part-time sales leader. We commit 8, 10, or 20 hours per month to solve whatever's blocking your team.",
      supportAreas: [
        {
          title: "Lead Generation Support",
          items: ["Campaign review & improvement", "Script optimization", "SDR coaching", "Weekly dashboards"]
        },
        {
          title: "Sales Qualification Support",
          items: ["Call feedback", "Deal reality assessment", "Decision maker strategy", "Opportunity scoring"]
        },
        {
          title: "Deal Closing Support",
          items: ["Big deal strategy sessions", "Objection handling", "Proposal improvement", "Follow-up sequences"]
        }
      ],
      plans: [
        { hours: "8 hours/month", price: "Best for small teams" },
        { hours: "10 hours/month", price: "Most popular" },
        { hours: "20 hours/month", price: "For growing teams" }
      ],
      benefits: ["Dedicated Slack/WhatsApp access", "Weekly check-in calls", "Monthly performance review", "Access to templates & resources"],
      timeline: "Ongoing (3-month minimum)",
      result: "More deals close, fewer fall through cracks, your team gets stronger every month.",
      bestFor: "Companies that need ongoing sales leadership without the full-time cost.",
      gradient: "from-purple-500 to-indigo-500",
      bg: "from-purple-50/80 to-indigo-50/80"
    },
    {
      id: "sales-audit",
      icon: Search,
      title: "Sales Team Audit",
      subtitle: "Diagnostic Deep Dive",
      problem: "You know something's wrong with your sales, but you don't know what. You're making guesses and wasting money.",
      solution: "We audit your entire sales operation and give you a clear roadmap of exactly what to fix.",
      analyzeAreas: [
        { title: "Your Ideal Customer", desc: "Who to target, best customer patterns" },
        { title: "Lead Generation", desc: "Channel effectiveness, messaging resonance" },
        { title: "Sales Process", desc: "Deal death points, biggest drop-offs" },
        { title: "Team Skills", desc: "Lead generation, qualification, closing abilities" },
        { title: "Qualification Quality", desc: "Real qualifying vs hoping, pipeline accuracy" },
        { title: "Competitive Analysis", desc: "Competitor advantages, unique positioning" }
      ],
      deliverables: [
        { icon: "📄", title: "30-50 Page Audit Report", desc: "Clear findings with data, specific examples, honest assessment" },
        { icon: "📋", title: "90-Day Action Plan", desc: "Prioritized fixes, clear ownership, expected impact" },
        { icon: "📞", title: "2-Hour Strategy Session", desc: "Walk through findings, Q&A, implementation discussion" }
      ],
      timeline: "2-3 weeks",
      investment: "₹X,XX,XXX",
      result: "Complete clarity on what's broken, why it's broken, and exactly how to fix it.",
      bestFor: "Companies that know they have problems but aren't sure where to start, or those considering hiring more reps but wanting to fix the system first.",
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50/80 to-red-50/80"
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
                          href="/contact"
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
