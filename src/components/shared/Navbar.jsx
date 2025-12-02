"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import NavbarDrawer from "./NavbarDrawer";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* ===== FLOATING NAVBAR WITH STRONG BOTTOM SHADOW ===== */}
      <nav
        className="
          fixed top-0 left-0 right-0 z-50
          bg-white/70 backdrop-blur-xl
          border-b border-white/30
          shadow-[0_8px_28px_-4px_rgba(0,0,0,0.15)]
          supports-[backdrop-filter]:bg-white/60
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* ===== Logo ===== */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="
                  w-10 h-10 rounded-xl
                  bg-gradient-to-br from-blue-600 to-indigo-700
                  flex items-center justify-center
                  shadow-lg shadow-blue-600/30
                  border border-white/30
                  transition-all duration-300
                  group-hover:scale-110 group-hover:shadow-xl
                "
              >
                <span className="text-white font-extrabold text-lg tracking-tight">
                  3X
                </span>
              </div>

              <span
                className="
                  inline text-base sm:text-xl font-semibold
                  bg-gradient-to-r from-slate-900 to-slate-700
                  bg-clip-text text-transparent
                  transition-colors duration-300
                  group-hover:text-blue-700
                "
              >
                3x Growth
              </span>
            </Link>

            {/* ===== Desktop Navigation ===== */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    relative text-slate-700 font-medium transition
                    hover:text-blue-600
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-blue-600 after:rounded-full
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA */}
              <a
                href="https://calendly.com/salessyllabus"
                className="
                  px-6 py-3 rounded-xl font-semibold
                  bg-blue-600 text-white
                  shadow-lg shadow-blue-600/30
                  hover:bg-blue-700 hover:shadow-blue-700/40
                  transition-all duration-300
                "
              >
                Book Call
              </a>
            </div>

            {/* ===== Mobile Menu Button ===== */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
              className="
                md:hidden p-2 rounded-xl
                bg-white/60 border border-white/20
                shadow-sm
                hover:bg-white/80
                transition-all duration-300
              "
            >
              <Menu size={24} className="text-slate-900" />
            </button>
          </div>
        </div>

        {/* ===== Bottom Shadow Glow Layer (Extra Depth) ===== */}
        <div
          className="
            absolute bottom-[-18px] left-0 w-full h-10
            bg-gradient-to-b from-black/10 to-transparent
            blur-xl
            pointer-events-none
          "
        />
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
