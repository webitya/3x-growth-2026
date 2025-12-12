"use client";

import { useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

const services = [
    "Sales Strategy",
    "Lead Generation",
    "Sales Training",
    "Consulting"
];

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        description: ""
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceSelect = (service) => {
        setFormData({ ...formData, service });
        setIsDropdownOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/send-enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    description: ""
                });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative w-full sm:max-w-md mx-auto">
            {/* Soft Background Glows - Light Theme */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>

            <div className="relative rounded-2xl overflow-hidden p-[2px] shadow-2xl shadow-blue-600/20 group">
                {/* Infinite Moving Border Gradient */}
                <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#3B82F6_50%,#E2E8F0_100%)] animate-[spin_4s_linear_infinite]" />

                <div className="relative h-full w-full rounded-2xl bg-white/95 backdrop-blur-2xl p-5">
                    {/* Header */}
                    <div className="relative z-10 mb-4 text-center">
                        <h3 className="text-xl font-black text-slate-900 mb-1">
                            Get Your Growth Strategy
                        </h3>
                        <p className="text-xs text-slate-600 font-medium">
                            Expert analysis • Clear Roadmap • <span className="text-blue-600 font-bold">100% Free</span>
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
                        {/* Name */}
                        <div className="group/input">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:border-blue-400"
                                placeholder="Your Name *"
                            />
                        </div>

                        {/* Email & Phone Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:border-blue-400"
                                placeholder="Email *"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:border-blue-400"
                                placeholder="Phone *"
                            />
                        </div>

                        {/* Company */}
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:border-blue-400"
                            placeholder="Company Name (Optional)"
                        />

                        {/* Service Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-left text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:border-blue-400 flex items-center justify-between group/select"
                            >
                                <span className={formData.service ? "text-slate-900 font-medium" : "text-slate-500"}>
                                    {formData.service || "Select Service *"}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 group-hover/select:text-blue-500 transition-all duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute z-20 w-full mt-2 bg-white/95 backdrop-blur-xl border border-blue-200 rounded-lg shadow-xl shadow-blue-500/10 overflow-hidden animate-fade-in-up">
                                    {services.map((service, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => handleServiceSelect(service)}
                                            className="w-full px-4 py-2 text-left text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all border-b border-blue-50 last:border-0 flex items-center justify-between group"
                                        >
                                            <span>{service}</span>
                                            {formData.service === service && (
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Brief Description */}
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="2"
                            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-blue-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 shadow-sm hover:border-blue-400 resize-none"
                            placeholder="Brief description (Optional)"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.service}
                            className="group relative w-full px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-600/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                            {isSubmitting ? (
                                <>
                                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <>
                                    <span className="relative z-10">Get Free Audit</span>
                                    <Send className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>

                        {/* Status Messages */}
                        {submitStatus === "success" && (
                            <div className="p-2.5 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs flex items-center gap-2 animate-fade-in">
                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                                <span>Request received! We'll allowlisting you shortly.</span>
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs animate-fade-in text-center">
                                Something went wrong. Please try again.
                            </div>
                        )}
                    </form>

                    {/* Secure Badge */}
                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span>256-bit Secure Encryption</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
