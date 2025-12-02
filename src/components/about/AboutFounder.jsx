"use client";

import { Linkedin, Award, Star } from "lucide-react";

export default function AboutFounder() {
  const experience = ["TimesJobs", "Naukri.com", "Elsevier Health Sciences"];
  const specialties = [
    "Built and scaled sales teams",
    "Created simple sales systems",
    "Hands-on operator, not a theorist",
  ];

  return (
    <section className="relative w-full py-12 md:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">

      {/* Soft Background Glows */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-blue-200/30 blur-[80px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200/30 blur-[110px] rounded-full -z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* === LEFT — COMPACT PROFILE CARD === */}
          <div className="flex justify-center">
            <div className="relative w-[260px] p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-blue-100 shadow-lg text-center">

              {/* Glow Behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 blur-2xl opacity-20 rounded-2xl -z-10" />

              {/* Founder Image */}
              <img
                src="https://media.licdn.com/dms/image/v2/C5603AQE2Y6u-qXO9jw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516434341732?e=2147483647&v=beta&t=MncFflTXdqi0coTM_GEDJILWz_rHJwBWN4JmeV_FjGA"
                alt="Sandeep Gupta"
                className="w-28 h-28 object-cover rounded-xl mx-auto shadow-md mb-4"
              />

              <h3 className="text-xl font-bold text-slate-900">Sandeep Gupta</h3>
              <p className="text-blue-600 font-semibold text-sm">Founder • Sales Strategist</p>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com/in/sandeepgupta"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                <Linkedin size={15} /> Connect
              </a>
            </div>
          </div>

          {/* === RIGHT — COMPACT TEXT BLOCK === */}
          <div className="space-y-5">

            {/* Heading */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Meet the Strategist Behind <span className="text-blue-600">3x Growth</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-2">
                15+ years of sales leadership at India’s top brands.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              {experience.map((company, idx) => (
                <div key={idx} className="flex items-center gap-3 mb-2 last:mb-0">
                  <Award size={18} className="text-blue-600" />
                  <span className="text-sm font-medium text-slate-800">{company}</span>
                </div>
              ))}
            </div>

            {/* Specialties */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <h4 className="text-base font-bold flex items-center gap-2 mb-2">
                <Star size={18} className="text-yellow-300" /> What He Does Best
              </h4>
              <ul className="space-y-1">
                {specialties.map((spec, idx) => (
                  <li key={idx} className="text-sm flex gap-2">
                    <span className="text-yellow-300 font-bold">✓</span> {spec}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm md:text-base text-slate-800 leading-relaxed">
              He turns chaotic sales operations into simple systems that grow every month.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
