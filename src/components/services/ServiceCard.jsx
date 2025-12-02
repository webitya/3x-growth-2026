"use client";

import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

export default function ServiceCard({
  number,
  title,
  icon: Icon,
  description,
  problem,
  solution,
  includes,
  timeline,
  investment,
  best_for,
  result,
  sqlDefinition,
  plans,
  features,
  deliverables,
  isPrimary = false,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white shadow-sm transition-all 
        ${isPrimary ? "ring-1 ring-blue-300 shadow-md" : "hover:shadow-md"}`}
    >
      <div className="p-6">
        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold tracking-wide">
              SERVICE {number}
            </span>

            <h3 className="text-xl font-semibold text-slate-900 mt-2 leading-snug">
              {title}
            </h3>

            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              {description}
            </p>
          </div>

          {Icon && (
            <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
              <Icon size={18} className="text-slate-600" />
            </div>
          )}
        </div>

        {/* PROBLEM */}
        <div className="mt-6 space-y-3">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
              The Problem
            </p>
            <p className="text-sm text-slate-800 leading-relaxed">{problem}</p>
          </div>

          {/* SOLUTION */}
          <div className="rounded-md border border-blue-200 bg-blue-50 p-3">
            <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-1">
              Our Solution
            </p>
            <p className="text-sm text-slate-800 leading-relaxed">{solution}</p>
          </div>

          {/* SQL Definition */}
          {sqlDefinition && (
            <div className="rounded-md border border-indigo-200 bg-indigo-50 p-3">
              <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-1">
                What is an SQL?
              </p>
              <p className="text-sm text-slate-800 leading-relaxed">
                {sqlDefinition}
              </p>
            </div>
          )}
        </div>

        {/* EXPAND BUTTON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-6 flex items-center justify-between px-3 py-2 
          bg-slate-50 rounded-md border border-slate-200 text-sm 
          font-semibold text-slate-800 hover:bg-slate-100 transition"
        >
          {expanded ? "Hide Details" : "View Details"}
          <ChevronDown
            size={18}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {expanded && (
          <div className="pt-6 mt-6 border-t border-slate-200 space-y-8">
            {/* INCLUDES */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">
                What is Included
              </h4>

              <ul className="space-y-2">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-slate-700">
                    <Check size={14} className="text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PLANS */}
            {plans && (
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3">
                  Available Plans
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {plans.map((plan, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-md bg-white border border-slate-200 hover:border-blue-300 transition"
                    >
                      <p className="text-xs text-slate-500 font-semibold mb-1">
                        Plan {idx + 1}
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {plan.hours}
                      </p>
                      <p className="text-blue-700 text-lg font-extrabold mt-1">
                        {plan.price}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">{plan.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FEATURES */}
            {features && (
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3">
                  What You Get
                </h4>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-slate-700">
                      <Check size={14} className="text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* DELIVERABLES */}
            {deliverables && (
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3">
                  What You Receive
                </h4>
                <div className="space-y-3">
                  {deliverables.map((item, idx) => {
                    const [title, desc] = item.split(" - ");
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-md bg-white border border-slate-200"
                      >
                        <p className="font-semibold text-slate-900 text-sm">
                          {title}
                        </p>
                        <p className="text-xs text-slate-700 mt-1">{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* RESULT */}
            <div className="p-4 rounded-md border border-blue-200 bg-blue-50">
              <p className="text-[11px] text-slate-600 font-semibold uppercase tracking-wide mb-1">
                Expected Result
              </p>
              <p className="text-sm text-slate-900">{result}</p>
            </div>
          </div>
        )}

        {/* TIMELINE + INVESTMENT */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          <div className="rounded-md border border-slate-200 p-3 bg-white">
            <p className="text-[11px] text-slate-500 font-semibold mb-1">
              Timeline
            </p>
            <p className="text-sm text-slate-900 font-semibold">{timeline}</p>
          </div>

          <div className="rounded-md border border-slate-200 p-3 bg-white">
            <p className="text-[11px] text-slate-500 font-semibold mb-1">
              Investment
            </p>
            <p className="text-sm text-slate-900 font-semibold">{investment}</p>
          </div>
        </div>

        {/* BEST FOR */}
        <div className="rounded-md border border-slate-200 bg-slate-50 p-4 mt-4">
          <p className="text-[11px] text-slate-600 font-semibold uppercase tracking-wide mb-1">
            Best For
          </p>
          <p className="text-sm text-slate-800 leading-relaxed">{best_for}</p>
        </div>
      </div>
    </div>
  );
}
