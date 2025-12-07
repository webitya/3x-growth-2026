"use client";

import { Star, Quote } from "lucide-react";

export default function HomepageSocialProof() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart India",
      image: "RK",
      rating: 5,
      quote: "3x Growth transformed our sales from chaotic to systematic. Revenue is up 220% and finally predictable."
    },
    {
      name: "Priya Sharma",
      role: "Founder, CloudSolutions",
      image: "PS",
      rating: 5,
      quote: "Best investment we made. Went from guessing to knowing exactly where our next sale will come from."
    },
    {
      name: "Amit Patel",
      role: "Director, SalesPro",
      image: "AP",
      rating: 5,
      quote: "They fixed our broken sales process in 3 months. Our close rate doubled and sales cycles are 40% shorter."
    }
  ];

  const stats = [
    { number: "50+", label: "SMEs Helped" },
    { number: "220%", label: "Avg Revenue Growth" },
    { number: "3 Months", label: "To See Results" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="relative w-full py-12 overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30">

      {/* Creative Top Separator - Gradient Bars */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 space-y-2 pt-2">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/6 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-500/6 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

        {/* Header */}
        <div className="text-center mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/70 backdrop-blur-sm border border-blue-200/50">
            <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            <span className="text-xs font-bold text-blue-700 tracking-wide">Client Success</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            Trusted by{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                50+ SME Founders
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-blue-800/10 blur-xl -z-10"></span>
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            See what founders say about working with us
          </p>
        </div>

        {/* Stats - Compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200/40 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-300/60 hover:-translate-y-1 transition-all duration-300"
              style={{
                animationDelay: `${idx * 50}ms`
              }}
            >
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm font-semibold text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-200/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/60 hover:-translate-y-2 transition-all duration-500"
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-green-500/0 group-hover:from-blue-500/5 group-hover:to-green-500/5 transition-all duration-500 -z-10"></div>

              {/* Quote icon - Compact */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Quote className="w-4 h-4 text-white fill-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-700 leading-relaxed mb-5 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center font-bold text-xs text-blue-800 ring-2 ring-white shadow-md">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Creative Bottom Separator - Shimmer Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-blue-400/40 to-blue-500/20 animate-shimmer"></div>
      </div>
    </section>
  );
}
