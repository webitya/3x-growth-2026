"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Sparkles, Phone } from "lucide-react";
import NavbarDrawer from "./NavbarDrawer";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ===== PREMIUM GLASSMORPHISM NAVBAR ===== */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-blue-200/60 shadow-xl shadow-blue-500/10'
            : 'bg-white/80 backdrop-blur-xl border-b border-blue-100/50'
          }
        `}
      >
        {/* Animated top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

        {/* Subtle floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-slow"
              style={{
                width: '2px',
                height: '2px',
                background: '#3B82F6',
                left: `${20 + i * 20}%`,
                top: '50%',
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + i * 2}s`,
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* ===== Logo with Glass Effect ===== */}
            <Link href="/" className="flex items-center gap-3 group relative">
              <div className="relative">
                {/* Subtle glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  className="
                    relative w-10 h-10 rounded-xl
                    bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700
                    flex items-center justify-center
                    shadow-lg shadow-blue-500/30
                    border border-white/40
                    transition-all duration-500
                    group-hover:scale-110 group-hover:shadow-blue-500/50
                    group-hover:shadow-xl
                    group-hover:rotate-6
                    overflow-hidden
                  "
                >
                  {/* Glass shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Top shine */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-bl-full"></div>

                  <span className="relative text-white font-black text-lg tracking-tighter z-10">
                    3X
                  </span>
                </div>
              </div>

              {/* Brand Text */}
              <div className="relative">
                <span
                  className="
                    text-xl font-black tracking-tight
                    bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700
                    bg-clip-text text-transparent
                    transition-all duration-300
                    group-hover:from-blue-600 group-hover:via-blue-500 group-hover:to-blue-600
                  "
                >
                  3x Growth
                </span>
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
              </div>
            </Link>

            {/* ===== Desktop Navigation ===== */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative text-sm font-semibold
                      transition-all duration-300
                      hover:scale-105
                      group
                      ${isActive
                        ? 'text-blue-700'
                        : 'text-slate-700 hover:text-blue-600'
                      }
                    `}
                  >
                    <span className="relative">
                      {link.label}

                      {/* Active indicator */}
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></span>
                      )}

                      {/* Hover indicator */}
                      {!isActive && (
                        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      )}

                      {/* Active dot */}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-500 rounded-full">
                          <span className="absolute inset-0 w-full h-full bg-blue-500 rounded-full animate-ping opacity-75"></span>
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}

              {/* Premium CTA Button */}
              <a
                href="https://calendly.com/salessyllabus"
                className="
                  group relative px-6 py-3 rounded-xl font-bold text-sm
                  bg-gradient-to-r from-blue-600 to-blue-700
                  text-white
                  shadow-lg shadow-blue-500/30
                  hover:shadow-blue-500/50 hover:shadow-xl
                  hover:-translate-y-1 hover:scale-105
                  transition-all duration-300
                  border border-white/30
                  overflow-hidden
                  flex items-center gap-2
                "
              >
                {/* Glass shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

                {/* Top shine */}
                <span className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></span>

                <Phone className="w-4 h-4 relative group-hover:rotate-12 transition-all" />
                <span className="relative font-black">Book Call</span>
                <Sparkles className="w-4 h-4 relative group-hover:rotate-180 transition-all" />
              </a>
            </div>

            {/* ===== Mobile Menu Button ===== */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
              className="
                md:hidden p-2.5 rounded-xl
                text-blue-700 bg-blue-50/50 border border-blue-200/50
                hover:bg-blue-100/70 hover:border-blue-300/70
                hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20
                transition-all duration-300
                group
                relative overflow-hidden
                backdrop-blur-sm
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Menu size={24} className="relative group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Bottom Border for Differentiation */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
          <div className="h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20"></div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <NavbarDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navLinks={navLinks}
      />

      {/* Spacer for Page Layout */}
      <div className="h-16 md:h-20" />
    </>
  );
}
