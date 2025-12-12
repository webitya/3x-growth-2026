"use client";

import Link from "next/link";
import { X, Phone, Mail, Sparkles, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function NavbarDrawer({ isOpen, onClose, navLinks }) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Light Overlay with Blur */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-40 md:hidden 
            bg-blue-900/20 backdrop-blur-md
            transition-opacity duration-300
            animate-fade-in-up
          "
          onClick={onClose}
        />
      )}

      {/* Premium Glass Drawer */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm
          bg-white/90 backdrop-blur-2xl
          border-l border-blue-200/50
          shadow-[-4px_0_30px_rgba(59,130,246,0.15)]
          rounded-l-2xl
          transform transition-all duration-500 md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Animated border glow */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"></div>

        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-1/4 right-0 w-48 h-48 bg-blue-400/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-blue-500/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative p-6 flex flex-col h-full">

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              self-end mb-8 h-10 w-10 
              flex items-center justify-center
              rounded-lg
              bg-blue-50/70 backdrop-blur-xl 
              border border-blue-200/50
              shadow-sm 
              hover:bg-blue-100/80 hover:border-blue-300/60
              hover:scale-110 hover:rotate-90
              transition-all duration-300
              group
            "
          >
            <X size={20} className="text-blue-700 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Links with Staggered Animation */}
          <nav className="flex flex-col gap-1 mb-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="
                  group relative px-4 py-3 rounded-lg
                  text-base font-semibold text-slate-700
                  hover:text-blue-700 hover:bg-blue-50/70
                  transition-all duration-300
                  flex items-center justify-between
                  border border-transparent hover:border-blue-200/40
                  overflow-hidden
                "
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                <span className="relative flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-500 group-hover:scale-150 transition-all"></span>
                  {link.label}
                </span>

                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-blue-600" />
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mb-6 space-y-2 px-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-200"></div>
              <span>Contact</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-200"></div>
            </div>
            <a
              href="tel:+916200207379"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              +91 620 020 7379
            </a>
            <a
              href="mailto:3xgrowth.in@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              3xgrowth.in@gmail.com
            </a>
          </div>

          {/* Actions - Premium Buttons */}
          <div className="mt-auto pt-6 border-t border-blue-200/50 space-y-3">
            {/* Primary CTA */}
            <a
              href="https://calendly.com/salessyllabus"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative block w-full text-center 
                px-6 py-3.5 rounded-lg font-semibold text-sm
                bg-gradient-to-r from-blue-600 to-blue-700 text-white
                shadow-lg shadow-blue-500/30
                hover:shadow-blue-500/50 hover:shadow-xl
                hover:-translate-y-0.5
                transition-all duration-300
                border border-white/30
                overflow-hidden
              "
            >
              {/* Shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></span>

              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Book Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:3xgrowth.in@gmail.com"
              className="
                group relative block w-full text-center 
                px-6 py-3 rounded-lg font-semibold text-sm
                bg-blue-50/70 backdrop-blur-xl
                border border-blue-200/50 text-blue-700
                hover:bg-blue-100/80 hover:border-blue-300/60 hover:text-blue-600
                transition-all duration-300
                overflow-hidden
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

              <span className="relative flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Email Us
              </span>
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-4 text-center">
            <p className="text-[10px] text-slate-500">
              © 2025 <span className="text-blue-600 font-semibold">3x Growth</span>
            </p>
          </div>
        </div>

        {/* Animated corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-blue-200/40 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-blue-200/40 rounded-br-2xl"></div>
      </div>
    </>
  );
}
