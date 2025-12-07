"use client";



export default function AboutCommitment() {
  return (
    <section className="relative w-full  overflow-hidden">

      {/* Soft Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200/30 blur-[90px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-200/30 blur-[110px] rounded-full" />
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full h-px bg-slate-200/60" />
      </div>

      {/* FULL WIDTH BLUE SECTION */}
      <div className="w-full py-5 md:py-5 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4">



        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Why “3x Growth”?
        </h3>

        <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Because when your sales system actually works — your revenue multiplies.
        </p>

        <p className="text-yellow-300 font-semibold mt-5 mb-10 text-base md:text-lg">
          Your business *can* grow 3×. All you need is the right system.
        </p>

        {/* Section Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-6">
          Ready to Fix Your Sales System?
        </h3>

        {/* CTA BUTTONS — PURE TAILWIND HARD CODED */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* PRIMARY BUTTON — HARD CODED */}
          <a
            href="/contact"
            className="
              px-7 py-3 rounded-xl font-semibold
              bg-white text-blue-700
              shadow-lg shadow-blue-900/30
              hover:bg-blue-100
              transition-all duration-300
            "
          >
            Book Free Audit →
          </a>

          {/* SECONDARY BUTTON — ALWAYS VISIBLE */}
          <a
            href="/services"
            className="
              px-7 py-3 rounded-xl font-semibold
              border border-white/80 text-white
              hover:bg-white/10
              backdrop-blur-md
              transition-all duration-300
            "
          >
            Explore Services →
          </a>

        </div>
      </div>
    </section>
  );
}
