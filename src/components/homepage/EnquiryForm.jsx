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
        <div className="relative w-full max-w-md rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-blue-500/30 shadow-xl shadow-blue-900/40 p-5 transition-all duration-300 overflow-hidden group hover:shadow-blue-800/50 hover:border-blue-400/50">
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Compact Header */}
            <div className="relative z-10 mb-4">
                <h3 className="text-lg font-bold text-white mb-0.5">Drop your query</h3>
                <p className="text-xs text-blue-100/80">We'll respond within 24 hours</p>
            </div>

            {/* Compact Form */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
                {/* Name */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-blue-50/50 border border-blue-200/50 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                    placeholder="Your Name *"
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-blue-50/50 border border-blue-200/50 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                    placeholder="Email Address *"
                />

                {/* Phone */}
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-blue-50/50 border border-blue-200/50 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                    placeholder="Phone Number *"
                />

                {/* Company */}
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                    placeholder="Company Name (Optional)"
                />

                {/* Service Dropdown */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-left text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all flex items-center justify-between"
                    >
                        <span className={formData.service ? "text-white" : "text-slate-400"}>
                            {formData.service || "Select Service *"}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-blue-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Compact Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute z-20 w-full mt-1.5 bg-white/95 backdrop-blur-xl border border-blue-200/50 rounded-lg shadow-xl shadow-blue-500/20 overflow-hidden animate-fade-in">
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => handleServiceSelect(service)}
                                    className="w-full px-3.5 py-1.5 text-left text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-blue-100/50 last:border-0 flex items-center justify-between group"
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

                {/* Description */}
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                    placeholder="Brief description (Optional)"
                />

                {/* Compact Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.service}
                    className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-3.5 h-3.5" />
                            Send Enquiry
                        </>
                    )}
                </button>

                {/* Compact Success/Error Message */}
                {submitStatus === "success" && (
                    <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs flex items-start gap-2 animate-fade-in">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>Thank you! We'll get back to you within 24 hours.</span>
                    </div>
                )}
                {submitStatus === "error" && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs animate-fade-in">
                        Something went wrong. Please try again or call us directly.
                    </div>
                )}
            </form>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 group-hover:opacity-50 transition-opacity" />
        </div>
    );
}
