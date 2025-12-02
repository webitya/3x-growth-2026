"use client";

import PhoneIcon from "@mui/icons-material/CallRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/EmailRounded";
import Image from "next/image";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">

      {/* === Floating Contact Buttons (Compact) === */}
      <div className="flex flex-col gap-2.5">

        {/* Call */}
        <a
          href="tel:+916200207379"
          className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-lg 
            bg-blue-600 text-white
            flex items-center justify-center
            shadow-md shadow-blue-600/30
            hover:scale-105 hover:shadow-blue-700/40
            transition-all duration-300
          "
          aria-label="Call"
        >
          <PhoneIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/916200207379"
          target="_blank"
          className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-lg 
            bg-green-500 text-white
            flex items-center justify-center
            shadow-md shadow-green-500/30
            hover:scale-105 hover:shadow-green-600/40
            transition-all duration-300
          "
          aria-label="WhatsApp"
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
        </a>

        {/* Email */}
        <a
          href="mailto:contact@salessyllabus.com"
          className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-lg 
            bg-white/90 backdrop-blur-md
            border border-slate-200 
            text-blue-600
            flex items-center justify-center
            shadow-md shadow-slate-300/30
            hover:scale-105 hover:shadow-slate-400/40
            transition-all duration-300
          "
          aria-label="Email"
        >
          <EmailIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
        </a>
      </div>

      {/* === Compact Apollo Badge === */}
      <div
        className="
          flex items-center gap-1.5
          bg-white/80 backdrop-blur-xl 
          px-2 py-1 rounded-md
          border border-white/40 
          shadow-md shadow-slate-300/20
          hover:scale-105 transition-all duration-300
        "
      >
        <Image
          src="/appolo.svg"
          alt="Apollo Logo"
          width={20}
          height={20}
          className="object-contain opacity-90"
        />

        <span className="text-[9px] sm:text-[10px] font-semibold text-slate-700 tracking-tight">
          Appolo Partner
        </span>
      </div>

    </div>
  );
}
