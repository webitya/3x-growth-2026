"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram, Twitter, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const footerLinks = {
    Company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    Services: [
      { label: "Sales Strategy", href: "/services#strategy" },
      { label: "Lead Generation", href: "/services#leads" },
      { label: "Sales Training", href: "/services#training" },
      { label: "Consulting", href: "/services#consulting" },
    ],
    Resources: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Free Audit", href: "/audit" },
      { label: "Sales Tools", href: "/tools" },
      { label: "Newsletter", href: "#newsletter" },
    ],
    Legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("success");
        setEmail("");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("error");
      }
    } catch (error) {
      console.error("Subscribe error:", error);
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-blue-50/80 to-white/90 backdrop-blur-xl border-t border-blue-200/40 overflow-hidden">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* ==== Main Footer Section ==== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">

        {/* Brand & Newsletter - Enhanced Layout */}
        <div className="mb-12 pb-8 border-b border-blue-200/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Logo & Description */}
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 border border-white/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative text-white font-black text-lg z-10">3X</span>
                </div>
                <span className="text-xl font-black text-blue-700 tracking-tight group-hover:text-blue-600 transition-colors">
                  3x Growth
                </span>
              </Link>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Building predictable sales systems for SME founders since 2016. Transform your sales process with proven strategies.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/company/3x-growth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-blue-50/70 border border-blue-200/50 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                >
                  <Linkedin size={16} className="text-blue-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://twitter.com/3xgrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-blue-50/70 border border-blue-200/50 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                >
                  <Twitter size={16} className="text-blue-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://instagram.com/3xgrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-blue-50/70 border border-blue-200/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-pink-600 hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                >
                  <Instagram size={16} className="text-blue-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Enhanced Newsletter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-900">Join 1000+ Founders</h3>
              </div>
              <p className="text-sm text-slate-600">
                Get weekly insights on sales strategies, growth tactics, and proven frameworks.
              </p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 pr-32 rounded-lg bg-white/70 backdrop-blur-sm border border-blue-200/50 text-slate-700 placeholder-slate-400 focus:bg-white focus:border-blue-400/70 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-2 bottom-2 px-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 group disabled:opacity-50"
                >
                  {loading ? "..." : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
              {message === "success" && (
                <div className="flex items-center gap-2 text-green-600 text-sm animate-fade-in-up">
                  <CheckCircle2 className="w-4 h-4" />
                  Thanks for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Links Grid - Enhanced Spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">

          {/* Link Columns 1-4 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 group-hover:scale-125 transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 5th Column - Get Started */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Get Started</h3>

            <a
              href="tel:+916200207379"
              className="group relative px-5 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 border border-white/30 overflow-hidden flex items-center gap-2 justify-center w-full"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Phone className="w-4 h-4 relative" />
              <span className="relative">Book Free Audit</span>
              <Sparkles className="w-4 h-4 relative group-hover:rotate-12 transition-transform" />
            </a>

            <div className="space-y-2 text-sm text-slate-600">
              <a href="mailto:contact@3xgrowth.com" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="truncate">contact@3xgrowth.com</span>
              </a>
              <a href="tel:+916200207379" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                +91 620 020 7379
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ==== Bottom Bar ==== */}
      <div className="border-t border-blue-200/40 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-center sm:text-left">
                © {currentYear} <span className="text-blue-600 font-semibold">3x Growth</span>. All rights reserved.
              </p>
              <span className="hidden sm:inline text-slate-400">•</span>
              <p className="text-center sm:text-left text-xs">
                Website designed by{' '}
                <a
                  href="https://webitya.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 transition-colors font-semibold hover:underline"
                >
                  Webitya
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-blue-600 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-shimmer"></div>
      </div>
    </footer>
  );
}
