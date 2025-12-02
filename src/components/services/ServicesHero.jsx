"use client";

export default function ServicesHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">

      {/* --- Soft Background Shapes (very minimal) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-48 h-48 bg-blue-200/30 blur-[90px] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-300/30 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Small Glass Tag */}
        <span className="inline-block px-3 py-1 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-xs font-semibold text-blue-700 shadow-sm">
          ✨ Proven Sales Systems
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
          Services That Help You  
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
            Grow Faster
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto mt-4 leading-relaxed">
          Choose the service that fits your business stage — or combine them for maximum predictability.
        </p>

        {/* Micro-Features — very compact */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {["Proven Results", "Flexible Plans", "Expert Support"].map((txt, i) => (
            <div
              key={i}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium shadow-sm"
            >
              <span className="w-5 h-5 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-[10px] font-bold">
                ✓
              </span>
              {txt}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
