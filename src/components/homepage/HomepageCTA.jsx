"use client";

import { Phone, Mail, CheckCircle } from "lucide-react";

export default function HomepageCTA() {
  const benefits = [
    "Clear picture of what's broken",
    "Top 3 fixes to prioritize",
    "Honest assessment if we can help",
  ];

  return (
    <section
      id="contact"
      className="
        relative w-full py-14 md:py-18 
        text-white overflow-hidden
        bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800
      "
    >
      {/* Top Water Wave Effect */}
      <svg
        className="absolute top-0 left-0 w-full -translate-y-1"
        viewBox="0 0 1440 80"
        fill="none"
      >
        <path
          d="M0,40 C360,120 1080,-40 1440,40 L1440,0 L0,0 Z"
          fill="white"
          opacity="0.55"
        />
      </svg>

      {/* Floating Glow Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-8 left-10 w-52 h-52 bg-blue-300/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-6 right-10 w-72 h-72 bg-indigo-400/20 blur-[130px] animate-pulse-slower" />
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-blue-500/10 blur-[90px] animate-float" />
      </div>

      {/* Content */}
      <div className="w-full max-w-3xl mx-auto px-4 text-center">

        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
          Ready to Stop Losing Deals?
        </h2>

        <p className="text-blue-100 text-sm md:text-base mb-8">
          Book a free 30-minute call — no pitch, just clarity.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex gap-2 items-start justify-center md:text-center"
            >
              <CheckCircle
                size={18}
                className="text-white mt-0.5 animate-pop"
              />
              <p className="text-blue-100 text-xs md:text-sm leading-snug">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+916200207379"
            className="
              px-5 py-2.5 rounded-lg font-semibold 
              bg-white text-blue-700 
              shadow-lg hover:shadow-xl 
              hover:bg-blue-50 active:scale-95
              transition-all duration-300
              flex items-center justify-center gap-2 text-sm md:text-base
            "
          >
            <Phone size={16} />
            Book Free Call
          </a>

          <a
            href="mailto:contact@salessyllabus.com"
            className="
              px-5 py-2.5 rounded-lg font-semibold 
              bg-white/10 border border-white/40 
              text-white hover:bg-white/20 
              transition-all duration-300
              flex items-center justify-center gap-2 text-sm md:text-base
            "
          >
            <Mail size={16} />
            Email Us
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse-slow {
          0% { opacity: 0.4; }
          50% { opacity: 0.8; }
          100% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        @keyframes pulse-slower {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }
        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }

        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .animate-pop:hover {
          animation: pop 0.35s ease-in-out;
        }
      `}</style>
    </section>
  );
}
