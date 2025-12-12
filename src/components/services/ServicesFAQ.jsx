"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long until we see results?",
      answer: "Most clients see improvement in 30-60 days. Significant, sustainable growth typically happens within 90 days."
    },
    {
      question: "Do you work with our team or replace them?",
      answer: "We work WITH your team. We train and coach them, we don't replace them."
    },
    {
      question: "What if we're a startup with no sales team?",
      answer: "We can help you hire your first reps AND set up the right systems from day one."
    },
    {
      question: "Do we need expensive CRM software?",
      answer: "No. We work with whatever you have. Most companies can start with simple tools."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across industries—SaaS, professional services, manufacturing, education. If you're B2B, we can help."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "For monthly support, yes—3 months minimum. For project-based work (audit, MQL setup, SQL setup), no ongoing commitment required."
    }
  ];

  return (
    <section className="relative py-12 bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-sm text-slate-600">Everything you need to know about our services</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/40 overflow-hidden hover:shadow-lg hover:border-blue-300/60 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <span className="font-bold text-slate-900 text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-5 pb-4 text-sm text-slate-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hexagon Pattern Separator */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent"></div>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </section>
  );
}
