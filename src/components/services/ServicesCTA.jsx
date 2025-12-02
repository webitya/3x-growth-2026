"use client";

import { CheckCircle2, PhoneIcon, Mail } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="w-full py-16 md:py-20 bg-blue-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Ready to Fix Your Sales System?
          </h2>

          <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
            Get clear, expert feedback on what is blocking your sales growth — no pitch, no pressure, only clarity.
          </p>
        </div>

        {/* Benefits Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            "Honest expert feedback",
            "Clarity on what’s broken",
            "Personalized action plan",
          ].map((text, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2">
              <CheckCircle2 size={18} className="text-blue-600" />
              <span className="text-sm text-slate-700 font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="tel:+916200207379"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold 
                       hover:bg-blue-700 transition flex items-center gap-2 justify-center"
          >
            <PhoneIcon size={18} />
            Call Now
          </a>

          <a
            href="mailto:contact@salessyllabus.com"
            className="px-8 py-3 bg-white border border-slate-300 text-slate-800 rounded-lg 
                       hover:border-blue-400 transition flex items-center gap-2 justify-center"
          >
            <Mail size={18} />
            Email Us
          </a>
        </div>

        {/* Contact Info Line */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-700 border-t border-slate-300 pt-6">
          <div className="flex items-center gap-2">
            <PhoneIcon size={16} className="text-blue-600" />
            <span>+91 6200207379</span>
          </div>

          <div className="hidden md:block w-1 h-1 bg-slate-400 rounded-full" />

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-600" />
            <span>contact@salessyllabus.com</span>
          </div>

          <div className="hidden md:block w-1 h-1 bg-slate-400 rounded-full" />

          <span className="font-medium">3x Growth Consulting</span>
        </div>

        {/* Social Proof — Minimal */}
        <div className="text-center mt-10">
          <p className="text-xs text-slate-500 mb-3">
            Trusted by companies across industries
          </p>

          <div className="flex justify-center flex-wrap gap-3">
            {[
              "Oracle NetSuite Partner",
              "SAP Partners",
              "ERP Companies",
              "Education Software",
              "AWS Partners",
            ].map((company, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-white border border-slate-300 
                           rounded-md text-slate-700"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
