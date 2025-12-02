"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
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
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
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
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      
      {/* ==== Main Footer Section ==== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ==== Brand & Social ==== */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/30">
                <span className="text-white font-bold text-lg">3X</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                3x Growth
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Building predictable sales systems for SME founders since 2016.
            </p>

        <div className="flex gap-3 mt-6">

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/company/3x-growth"
    target="_blank"
    className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition"
  >
    <Linkedin size={18} />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com"
    target="_blank"
    className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-pink-600 hover:border-pink-500 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="white" viewBox="0 0 24 24">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.504 3.504 0 0 1 12 9.5zm4-2.75a1.25 1.25 0 1 1-1.25 1.25A1.248 1.248 0 0 1 16 6.75z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com"
    target="_blank"
    className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="white" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.3V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/>
    </svg>
  </a>

  {/* X (Twitter) */}
  <a
    href="https://twitter.com"
    target="_blank"
    className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-slate-700 hover:border-slate-600 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="white" viewBox="0 0 24 24">
      <path d="M18.3 2H21l-6.6 7.5L22 22h-6.8l-4.5-6-5 6H2l7.1-8.5L2 2h6.9l4.1 5.5L18.3 2z"/>
    </svg>
  </a>

  {/* Threads */}
  <a
    href="https://threads.net"
    target="_blank"
    className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-black hover:border-black transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="white" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14.09c-.97.92-2.22 1.41-3.59 1.41-2.92 0-5.09-2.09-5.09-5.38 0-3.26 2.17-5.38 5.09-5.38 1.37 0 2.62.49 3.59 1.44.93.91 1.46 2.19 1.49 3.63l-.01.39c-.03 1.45-.56 2.74-1.48 3.89z"/>
    </svg>
  </a>

</div>

          </div>

          {/* ==== Footer Links ==== */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wide">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white text-sm transition inline-block hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ==== Contact + Newsletter Right Side Compact ==== */}
          <div className="flex flex-col gap-6">

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wide">
                Contact
              </h3>

              <div className="space-y-3">
                <a
                  href="tel:+916200207379"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition group"
                >
                  <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition">
                    <Phone size={15} />
                  </div>
                  <span className="text-sm">+91 6200207379</span>
                </a>

                <a
                  href="mailto:contact@salessyllabus.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition group"
                >
                  <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition">
                    <Mail size={15} />
                  </div>
                  <span className="text-sm">contact@salessyllabus.com</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wide">
                Subscribe
              </h3>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-semibold flex items-center gap-1 transition disabled:opacity-40"
                >
                  {loading ? "..." : "Go"}
                  {!loading && <ArrowRight size={14} />}
                </button>
              </form>

              {message === "success" && (
                <div className="mt-2 flex items-center gap-2 text-emerald-300 text-xs">
                  <CheckCircle2 size={14} />
                  <span>Check your email!</span>
                </div>
              )}
              {message === "error" && (
                <p className="mt-2 text-red-300 text-xs">Something went wrong.</p>
              )}
            </div>

          </div>
        </div>

        {/* ==== Bottom Line ==== */}
        <div className="border-t border-slate-800 pt-6 mt-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            © {currentYear} 3x Growth Consulting. All rights reserved.
          </p>
          <p className="text-slate-500 text-[11px]">
            Built with precision for ambitious founders
          </p>
        </div>

      </div>
    </footer>
  );
}
