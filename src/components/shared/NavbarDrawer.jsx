"use client";

import Link from "next/link";
import { X, Phone, Mail, Sparkles, ArrowRight, Zap } from "lucide-react";
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
      {/* Dimmed Background with Blur */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-40 md:hidden 
            bg-slate-950/80 backdrop-blur-md
            transition-opacity duration-300
            animate-fade-in-up
          "
          onClick={onClose}
        />
      )}

      {/* Premium Drawer */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm
          bg-slate-950/95 backdrop-blur-xl
          border-l border-blue-500/20
          shadow-[-4px_0_30px_rgba(59,130,246,0.2)]
          rounded-l-2xl
          transform transition-all duration-500 md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Animated border glow */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>

        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-1/4 right-0 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-indigo-600/30 rounded-full blur-3xl"></div>
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
              bg-white/5 backdrop-blur-xl 
              border border-white/10
              shadow-sm 
              hover:bg-blue-600/20 hover:border-blue-500/30
              hover:scale-110 hover:rotate-90
              transition-all duration-300
              group
            "
          >
            <X size={20} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
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
                  text-base font-semibold text-slate-300
                  hover:text-white hover:bg-white/5
                  transition-all duration-300
                  flex items-center justify-between
                  border border-transparent hover:border-blue-500/20
                  overflow-hidden
                "
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                <span className="relative flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 group-hover:scale-150 transition-all"></span>
                  {link.label}
                </span>

                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mb-6 space-y-2 px-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
              <span>Contact</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
            </div>
            <a
              href="tel:+916200207379"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              +91 620 020 7379
            </a>
            <a
              href="mailto:contact@3xgrowth.com"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              contact@3xgrowth.com
            </a>
          </div>

          {/* Actions - Premium Buttons */}
          <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
            {/* Primary CTA */}
            <a
              href="tel:+916200207379"
              className="
                group relative block w-full text-center 
                px-6 py-3.5 rounded-lg font-semibold text-sm
                bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                shadow-lg shadow-blue-600/30
                hover:shadow-blue-600/50 hover:shadow-xl
                hover:-translate-y-0.5
                transition-all duration-300
                border border-blue-400/20
                overflow-hidden
              "
            >
              {/* Ripple effect */}
              <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700 rounded-lg"></span>

              {/* Shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></span>

              <span className="relative flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Book Free Audit
                <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:contact@3xgrowth.com"
              className="
                group relative block w-full text-center 
                px-6 py-3 rounded-lg font-semibold text-sm
                bg-white/5 backdrop-blur-xl
                border border-blue-500/30 text-blue-300
                hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-200
                transition-all duration-300
                overflow-hidden
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

              <span className="relative flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Email Us
              </span>
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-4 text-center">
            <p className="text-[10px] text-slate-600">
              © 2025 <span className="text-blue-400">3x Growth</span>
            </p>
          </div>
        </div>

        {/* Animated corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-blue-500/20 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-blue-500/20 rounded-br-2xl"></div>
      </div>
    </>
  );
}
