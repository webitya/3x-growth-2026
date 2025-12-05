"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, User, Mail, Phone, MessageSquare, Building2, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Techy background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full animate-blob animation-delay-1000"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Why Contact Us (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span className="text-xs font-bold text-blue-700">Why Choose Us</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Ready to Scale?
              </h2>

              <p className="text-sm text-slate-600">
                Get a free audit and actionable insights to transform your sales process.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Free 30-Min Audit",
                  description: "Diagnose sales process gaps"
                },
                {
                  title: "220% Avg Growth",
                  description: "Proven results with 50+ SMEs"
                },
                {
                  title: "Fast Implementation",
                  description: "See results within 3 months"
                },
                {
                  title: "No Lock-In",
                  description: "Project-based pricing"
                }
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all -z-10"></div>

                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{benefit.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick CTA */}
         
          </div>

          {/* Right: Premium Contact Form (3 columns) */}
          <div className="lg:col-span-3">
            <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-500">
              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-blue-500/20 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-indigo-500/20 rounded-bl-2xl"></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 hover:from-blue-500/5 hover:to-indigo-500/5 transition-all duration-700 -z-10"></div>

              <div className="relative">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </span>
                  Send Message
                </h3>
                <p className="text-xs text-slate-600 mb-6">Fill out the form and we'll respond within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Company (One Row) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Company</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone (One Row) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Message *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm resize-none bg-slate-50 focus:bg-white"
                        placeholder="Tell us about your sales challenges..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative w-full px-6 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin relative" />
                        <span className="relative">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                        <span className="relative">Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs animate-fade-in-up">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <p className="font-semibold">Message sent! We'll respond within 24 hours.</p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <p className="font-semibold">{errorMessage}</p>
                    </div>
                  )}

                  <p className="text-[10px] text-slate-500 text-center">
                    🔒 Your information is secure and will never be shared
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
