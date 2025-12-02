"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How long until we see results?",
      a: "Most clients see improvement in 30–60 days. Predictable revenue usually comes within 90 days.",
    },
    {
      q: "Do you work with our sales team?",
      a: "Yes. We coach, train, and guide your team. We don’t replace them—we make them better.",
    },
    {
      q: "What if we don’t have a sales team?",
      a: "No problem. We help you hire your first reps and build the correct sales systems from day one.",
    },
    {
      q: "Do we need a CRM?",
      a: "No. You can start with a simple spreadsheet. Systems matter more than tools.",
    },
    {
      q: "Which industries do you work with?",
      a: "We work with B2B companies across SaaS, services, manufacturing, and education.",
    },
    {
      q: "Is there a minimum commitment?",
      a: "Monthly support requires a 3-month commitment. Other projects are standalone.",
    },
    {
      q: "Can we combine multiple services?",
      a: "Yes. Many clients start with an Audit and then move into MQL/SQL setup or monthly support.",
    },
    {
      q: "How do we know if you're a good fit?",
      a: "Book a free call. We’ll tell you honestly if we can help—no pitch, no pressure.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Clear, honest answers to the questions founders ask us most.
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg">
          {faqs.map((faq, idx) => (
            <div key={idx} className="w-full">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex justify-between items-center text-left px-4 py-4 hover:bg-slate-50"
              >
                <span className="text-slate-900 text-sm font-semibold">
                  {faq.q}
                </span>
                <Plus
                  size={18}
                  className={`text-slate-600 transition-transform ${
                    openIndex === idx ? "rotate-45" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
