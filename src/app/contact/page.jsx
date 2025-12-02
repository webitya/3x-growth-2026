"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  Send,
  AlertCircle,
  CheckCircle,
  Loader,
} from "lucide-react";

export default function ContactPage() {
  // ================= FORM STATE =================
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ================= FORM UI =================
  const ContactForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* STATUS MESSAGE */}
      {status && (
        <div
          className={`p-3 rounded-lg text-sm flex gap-2 items-start border ${
            status.type === "success"
              ? "bg-green-50 border-green-500/40 text-green-700"
              : "bg-red-50 border-red-500/40 text-red-700"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle size={18} />
          ) : (
            <AlertCircle size={18} />
          )}
          <p className="font-medium">{status.message}</p>
        </div>
      )}

      {/* ROW 1 — NAME + EMAIL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white 
          focus:border-blue-600 outline-none transition"
        />

        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white 
          focus:border-blue-600 outline-none transition"
        />
      </div>

      {/* ROW 2 — PHONE + COMPANY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white 
          focus:border-blue-600 outline-none transition"
        />

        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white 
          focus:border-blue-600 outline-none transition"
        />
      </div>

      {/* SERVICE */}
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white 
        focus:border-blue-600 outline-none transition"
      >
        <option value="">Service Interested In</option>
        <option value="mql-setup">Get More Quality Leads (MQL Setup)</option>
        <option value="sql-setup">Stop Chasing Dead Deals (SQL Setup)</option>
        <option value="monthly-support">Monthly Sales Support</option>
        <option value="sales-audit">Sales Team Audit</option>
        <option value="other">Other / Not Sure</option>
      </select>

      {/* MESSAGE */}
      <textarea
        name="message"
        rows={4}
        required
        value={formData.message}
        onChange={handleChange}
        placeholder="Message *"
        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white 
        resize-none focus:border-blue-600 outline-none transition"
      />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm 
        font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </button>

      <p className="text-[10px] text-slate-500 text-center">
        Your information is safe with us.
      </p>
    </form>
  );

  // ================= PAGE UI =================
  return (
    <>
      {/* HERO */}
      <section className="min-h-[48vh] flex items-center justify-center bg-gradient-to-br 
      from-blue-600 via-blue-500 to-blue-300 pt-20 pb-10">
        <div className="max-w-2xl mx-auto text-center px-4 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Fix Your <span className="text-yellow-300">Sales System</span>
          </h1>

          <p className="text-base md:text-lg text-blue-50 font-light">
            Build predictable revenue. Talk to our team today.
          </p>

          <div className="h-1 w-16 bg-yellow-300 mx-auto rounded-full" />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="w-full py-14 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Get in Touch
              </h2>
              <div className="h-1 w-12 bg-blue-600 rounded-full mt-1" />
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Call Us</p>
                <a
                  href="tel:+916200207379"
                  className="text-lg font-bold text-blue-600 hover:text-blue-800"
                >
                  +91 6200207379
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <div className="bg-emerald-600 text-white p-3 rounded-lg">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <a
                  href="mailto:contact@salessyllabus.com"
                  className="text-base font-bold text-emerald-600 hover:text-emerald-800 break-all"
                >
                  contact@salessyllabus.com
                </a>
              </div>
            </div>

            {/* RESPONSE TIME */}
            <div className="flex items-start gap-3">
              <div className="bg-amber-600 text-white p-3 rounded-lg">
                <Clock size={20} />
              </div>
              <p className="text-sm text-slate-700 leading-snug">
                We typically reply within 24 hours.
              </p>
            </div>

            {/* CTA */}
            <a
              href="tel:+916200207379"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 
              text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-md"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>

          {/* FORM AREA */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                Send a Message
              </h2>
              <p className="text-slate-600 mb-6 text-sm">We’ll reply shortly.</p>

              <ContactForm />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
