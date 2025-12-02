"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function NavbarDrawer({ isOpen, onClose, navLinks }) {
  return (
    <>
      {/* Dimmed Background + Blur */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-40 md:hidden 
            bg-black/40 backdrop-blur-sm
            transition-opacity duration-300
          "
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 left-0 bottom-0 z-50 w-[85%] max-w-sm
          bg-white/70 backdrop-blur-2xl
          border-r border-white/30
          shadow-[4px_0_25px_rgba(0,0,0,0.12)]
          rounded-r-3xl
          transform transition-transform duration-300 md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col h-full">

          {/* Close Button */}
        <button
  onClick={onClose}
  aria-label="Close menu"
  className="
    mb-6 h-10 w-10 
    flex items-center justify-center
    rounded-lg
    bg-white/50 backdrop-blur-xl 
    border border-white/20
    shadow-sm 
    hover:bg-white/70 
    transition-all duration-300
  "
>
  <X size={18} className="text-slate-900" />
</button>


          {/* Links */}
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="
                  text-lg font-semibold text-slate-900 
                  hover:text-blue-600 transition-all
                  relative
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-blue-600 after:rounded-full
                  after:transition-all after:duration-300
                  hover:after:w-3/4
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="mt-auto pt-8 border-t border-white/30">
            <a
              href="https://calendly.com/salessyllabus"
              className="
                block w-full mb-4 text-center 
                px-6 py-3 rounded-xl font-semibold
                bg-blue-600 text-white 
                shadow-md shadow-blue-600/30
                hover:bg-blue-700 hover:shadow-blue-700/40
                transition-all duration-300
              "
            >
              Book Call
            </a>

            <a
              href="mailto:contact@salessyllabus.com"
              className="
                block w-full text-center 
                px-6 py-3 rounded-xl font-semibold
                bg-white/40 backdrop-blur-xl
                border border-blue-600 text-blue-600
                hover:bg-blue-50
                transition-all duration-300
              "
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
