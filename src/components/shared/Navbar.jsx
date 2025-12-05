"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Sparkles, Zap, Phone } from "lucide-react";
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
      {/* ===== ULTRA-PREMIUM FLOATING NAVBAR ===== */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-blue-500/30 shadow-2xl shadow-blue-500/20'
            : 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10'
          }
        `}
      >
        {/* Animated top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent animate-pulse"></div>

        {/* Animated scan line */}
        <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent h-full animate-scan-fast"></div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-slow"
              style={{
                width: i % 2 === 0 ? '3px' : '2px',
                height: i % 2 === 0 ? '3px' : '2px',
                background: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#818cf8' : '#22d3ee',
                left: `${15 + i * 15}%`,
                top: '50%',
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + i * 1.5}s`,
                boxShadow: '0 0 10px currentColor'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* ===== Enhanced Logo with Premium Effects ===== */}
            <Link href="/" className="flex items-center gap-3 group relative">
              {/* Logo Icon with Enhanced Effects */}
              <div className="relative">
                {/* Glow rings */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div
                  className="
                    relative w-10 h-10 rounded-xl
                    bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600
                    flex items-center justify-center
                    shadow-xl shadow-blue-600/40
                    border border-blue-400/30
                    transition-all duration-500
                    group-hover:scale-110 group-hover:shadow-blue-600/60
                    group-hover:shadow-2xl
                    group-hover:rotate-[8deg]
                    overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity
                  "
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Corner shine */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-white/40 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <span className="relative text-white font-black text-lg tracking-tighter z-10 group-hover:scale-110 transition-transform">
                    3X
                  </span>
                </div>
              </div>

              {/* Enhanced Brand Text */}
              <div className="relative">
                <span
                  className="
                    text-xl font-black tracking-tight
                    bg-gradient-to-r from-white via-blue-100 to-white
                    bg-clip-text text-transparent
                    transition-all duration-300
                    group-hover:from-blue-400 group-hover:via-cyan-300 group-hover:to-blue-400
                    relative
                  "
                >
                  3x Growth
                </span>
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                {/* Glow effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              </div>
            </Link>

            {/* ===== Desktop Navigation with Enhanced Effects ===== */}
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
                      after:absolute after:left-0 after:-bottom-2
                      after:h-0.5 after:rounded-full
                      after:bg-gradient-to-r after:from-blue-500 after:via-cyan-400 after:to-blue-500
                      after:transition-all after:duration-500
                      group
                      ${isActive
                        ? 'text-white after:w-full'
                        : 'text-slate-300 after:w-0 hover:text-white hover:after:w-full'
                      }
                    `}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <span className="relative">
                      {/* Gradient text for active link */}
                      <span className={isActive ? 'bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent' : ''}>
                        {link.label}
                      </span>

                      {/* Active dot indicator (always visible) */}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse">
                          <span className="absolute inset-0 w-full h-full bg-blue-400 rounded-full animate-ping"></span>
                        </span>
                      )}

                      {/* Hover dot indicator */}
                      {!isActive && (
                        <span className="absolute -top-1 -right-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all"></span>
                      )}

                      {/* Corner decoration */}
                      <span className={`absolute -bottom-1 -left-1 border-l border-b transition-all duration-300 ${isActive
                        ? 'w-2 h-2 border-blue-400/70'
                        : 'w-0 h-0 border-blue-400/0 group-hover:border-blue-400/50 group-hover:w-2 group-hover:h-2'
                        }`}></span>
                      <span className={`absolute -bottom-1 -right-1 border-r border-b transition-all duration-300 ${isActive
                        ? 'w-2 h-2 border-cyan-400/70'
                        : 'w-0 h-0 border-cyan-400/0 group-hover:border-cyan-400/50 group-hover:w-2 group-hover:h-2'
                        }`}></span>
                    </span>

                    {/* Multi-layer glow effect */}
                    <span className={`absolute inset-0 transition-opacity duration-300 blur-xl bg-blue-400/30 -z-10 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}></span>
                    <span className={`absolute inset-0 transition-opacity duration-500 blur-2xl bg-cyan-400/20 -z-20 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}></span>
                  </Link>
                );
              })}

              {/* Enhanced Premium CTA Button */}
              <a
                href="tel:+916200207379"
                className="
                  group relative px-6 py-3 rounded-xl font-bold text-sm
                  bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
                  text-white
                  shadow-xl shadow-blue-600/40
                  hover:shadow-blue-600/60 hover:shadow-2xl
                  hover:-translate-y-1 hover:scale-110
                  transition-all duration-300
                  border-2 border-blue-400/30
                  overflow-hidden
                  flex items-center gap-2
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/0 before:via-white/20 before:to-blue-400/0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700
                "
              >
                {/* Animated border */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></span>
                </span>

                {/* Corner glow */}
                <span className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></span>

                {/* Ripple effect */}
                <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700 rounded-xl"></span>

                {/* Triple shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1200 -skew-x-12"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1400"></span>

                <Phone className="w-4 h-4 relative group-hover:rotate-12 group-hover:scale-110 transition-all" />
                <span className="relative font-black">Book Call</span>
                <Sparkles className="w-4 h-4 relative group-hover:animate-pulse group-hover:rotate-180 transition-all" />

                {/* Pulsing glow ring */}
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 blur-lg group-hover:animate-pulse"></span>
              </a>
            </div>

            {/* ===== Enhanced Mobile Menu Button ===== */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
              className="
                md:hidden p-2.5 rounded-xl
                text-slate-300 bg-white/5 border-2 border-white/10
                hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-blue-400
                hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30
                transition-all duration-300
                group
                relative overflow-hidden
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Menu size={24} className="relative group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-shimmer"></div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <NavbarDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navLinks={navLinks}
      />

      {/* Spacer for Page Layout */}
      <div className="h-16 md:h-18" />
    </>
  );
}
