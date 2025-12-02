"use client";

export default function AboutBeliefs() {
  const beliefs = [
    {
      title: "Sales Shouldn't Be a Mystery",
      description:
        "You should know where leads come from, which ones will close, and what revenue to expect.",
      icon: "1",
    },
    {
      title: "Simple Systems Win",
      description:
        "You don’t need complex CRMs. You need clear processes your team can actually follow.",
      icon: "2",
    },
    {
      title: "Your People Aren't the Problem",
      description:
        "Most ‘underperforming’ teams just lack good systems. Fix the process and people perform.",
      icon: "3",
    },
    {
      title: "Growth Doesn’t Take Years",
      description:
        "With the right systems you see improvement in 30–60 days, predictable growth in 90.",
      icon: "4",
    },
  ];

  return (
    <section className="relative w-full py-14 md:py-20 overflow-hidden">

      {/* Soft background + floating glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />
        <div className="absolute top-10 left-[12%] w-48 h-48 bg-blue-200/40 blur-[90px] rounded-full" />
        <div className="absolute bottom-0 right-[8%] w-64 h-64 bg-indigo-200/40 blur-[110px] rounded-full" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          What We Believe
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-2">
          The principles that shape how we build predictable sales systems
        </p>
        <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full mt-4" />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {beliefs.map((belief, idx) => (
            <div
              key={idx}
              className="
                flex gap-4 p-4 md:p-5 rounded-xl
                bg-white/70 backdrop-blur-xl
                border border-slate-200/40
                shadow-sm hover:shadow-lg hover:-translate-y-[2px]
                transition-all duration-300
              "
            >
              {/* Number Badge */}
              <div
                className="
                  w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                  rounded-full text-white font-bold text-base md:text-lg
                  bg-gradient-to-br from-blue-600 to-blue-700
                  shadow-md shadow-blue-300/40
                  flex-shrink-0
                "
              >
                {belief.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5">
                  {belief.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {belief.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
