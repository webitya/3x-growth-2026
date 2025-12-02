"use client";

import { useState } from "react";
import { Send, AlertCircle, CheckCircle, Loader } from "lucide-react";

export default function ContactForm() {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setStatus({ type: "error", message: "Network error. Try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      {/* Status Message */}
      {status && (
        <div
          className={`p-3 rounded-lg text-sm flex gap-2 items-start border ${
            status.type === "success"
              ? "bg-green-50 border-green-500/40 text-green-700"
              : "bg-red-50 border-red-500/40 text-red-700"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle size={18} className="mt-0.5" />
          ) : (
            <AlertCircle size={18} className="mt-0.5" />
          )}
          <p className="font-medium">{status.message}</p>
        </div>
      )}

      {/* Inputs — NO LABELS, SUPER CLEAN */}
      <input
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name *"
        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm
        bg-white focus:border-blue-600 focus:ring-0 outline-none transition"
      />

      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address *"
        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm
        bg-white focus:border-blue-600 focus:ring-0 outline-none transition"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm
        bg-white focus:border-blue-600 focus:ring-0 outline-none transition"
      />

      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name"
        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm
        bg-white focus:border-blue-600 focus:ring-0 outline-none transition"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm
        bg-white focus:border-blue-600 focus:ring-0 outline-none transition"
      >
        <option value="">Service Interested In</option>
        <option value="mql-setup">Get More Quality Leads (MQL Setup)</option>
        <option value="sql-setup">Stop Chasing Dead Deals (SQL Setup)</option>
        <option value="monthly-support">Monthly Sales Support</option>
        <option value="sales-audit">Sales Team Audit</option>
        <option value="other">Other / Not Sure</option>
      </select>

      <textarea
        name="message"
        required
        rows={4}
        value={formData.message}
        onChange={handleChange}
        placeholder="Message *"
        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm resize-none
        bg-white focus:border-blue-600 focus:ring-0 outline-none transition"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="
          w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 
          text-white text-sm font-semibold transition
          flex items-center justify-center gap-2
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {isLoading ? (
          <>
            <Loader size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className="text-[10px] text-slate-500 text-center">
        Your information is safe with us.
      </p>
    </form>
  );
}
