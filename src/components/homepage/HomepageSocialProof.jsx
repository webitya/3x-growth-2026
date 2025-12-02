"use client";

export default function HomepageResults() {
  const results = [
    {
      stat: "+300%",
      title: "Oracle NetSuite Partner",
      description:
        "We improved their qualification process — now handling 3–4 more enterprise clients every quarter.",
    },
    {
      stat: "2x Growth",
      title: "SAP Partner",
      description:
        "Outbound engine built from scratch — doubled monthly meetings in just 60 days.",
    },
    {
      stat: "100% Predictable",
      title: "ERP Company",
      description:
        "Complete sales team + process rebuild. First time ever achieving predictable sales.",
    },
    {
      stat: "Profitable Growth",
      title: "Education Software",
      description:
        "A consistent flow of qualified pipeline ensured week-on-week revenue stability.",
    },
    {
      stat: "3x Pipeline",
      title: "AWS Partner",
      description:
        "Pipeline tripled in 90 days with structured outbound + qualification systems.",
    },
  ];

  return (
    <section className="w-full bg-[#0c1528] py-16 md:py-24 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Real Results From Real Businesses
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Proven transformation across industries — consistent, predictable growth
            </p>
          </div>

          {/* Results Grid */}
          <div className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-4 md:gap-6
          ">
            {results.map((item, idx) => (
              <div
                key={idx}
                className="
                  p-5 md:p-6 rounded-xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)]
                  hover:shadow-[0_0_25px_rgba(0,0,0,0.35)]
                  hover:-translate-y-1 
                  transition-all duration-300
                "
              >
                <p className="text-xl md:text-2xl font-bold text-blue-300 mb-1">
                  {item.stat}
                </p>

                <h3 className="text-base md:text-lg font-semibold text-white mb-1.5">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
