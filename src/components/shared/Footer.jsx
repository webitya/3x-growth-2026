"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram, Twitter, ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
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
    <footer className="relative bg-slate-950 text-white border-t border-blue-500/20 overflow-hidden">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/30 rounded-full blur-3xl"></div>
      </div>

      {/* ==== Main Footer Section ==== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 relative">

        {/* Brand & Compact Subscribe */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Logo & Description */}
            <div className="space-y-3">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <div className="relative w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/30 border border-blue-400/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative text-white font-bold text-sm z-10">3X</span>
                </div>
                <span className="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  3x Growth
                </span>
              </Link>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Building predictable sales systems for SME founders since 2016.
              </p>
              {/* Social Links */}
              <div className="flex gap-2">
                <a
                  href="https://linkedin.com/company/3x-growth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 group"
                >
                  <Linkedin size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://twitter.com/3xgrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 hover:scale-110 transition-all duration-300 group"
                >
                  <Twitter size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://instagram.com/3xgrowth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-pink-500 hover:scale-110 transition-all duration-300 group"
                >
                  <Instagram size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Compact Newsletter */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <p className="text-xs font-semibold text-white">Join 1000+ founders</p>
              </div>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 pr-20 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:bg-white/10 focus:border-blue-500/50 focus:outline-none transition-all text-xs"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md text-white text-[10px] font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-1 group disabled:opacity-50"
                >
                  {loading ? "..." : (
                    <>
                      Subscribe
                      <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
              {message === "success" && (
                <div className="flex items-center gap-1.5 text-green-400 text-[10px] animate-fade-in-up">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  Thanks for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Links Grid with 5 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {/* Link Columns 1-4 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-1.5 group"
                    >
                      <span className="w-0.5 h-0.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 5th Column - Get Started */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Get Started</h3>

            <a
              href="tel:+916200207379"
              className="group relative px-4 py-2.5 rounded-lg font-semibold text-xs bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 border border-blue-400/20 overflow-hidden flex items-center gap-2 justify-center w-full"
            >
              <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700 rounded-lg"></span>
              <Phone className="w-3 h-3 relative" />
              <span className="relative">Book Free Audit</span>
              <Zap className="w-3 h-3 relative group-hover:animate-pulse" />
            </a>

            <div className="space-y-1.5 text-xs text-slate-400">
              <a href="mailto:contact@3xgrowth.com" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 group">
                <Mail className="w-3 h-3 group-hover:scale-110 transition-transform" />
                <span className="truncate">contact@3xgrowth.com</span>
              </a>
              <a href="tel:+916200207379" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 group">
                <Phone className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                +91 620 020 7379
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ==== Bottom Bar ==== */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-center sm:text-left">
                © {currentYear} <span className="text-blue-400 font-semibold">3x Growth</span>. All rights reserved.
              </p>
              <span className="hidden sm:inline text-slate-700">•</span>
              <p className="text-center sm:text-left text-[10px]">
                Website designed by{' '}
                <a
                  href="https://webitya.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold hover:underline"
                >
                  Webitya
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px]">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-shimmer"></div>
      </div>
    </footer>
  );
}
