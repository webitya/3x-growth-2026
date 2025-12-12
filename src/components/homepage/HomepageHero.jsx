"use client";

import { TrendingUp, ArrowRight, Sparkles, Zap, Activity, Cpu, BarChart3, Code2, Boxes, Hexagon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import EnquiryForm from "./EnquiryForm";

export default function HomepageHero() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [mouseTrail, setMouseTrail] = useState([]);
  const buttonRef = useRef(null);
  const barHeights = [60, 80, 100, 120, 140];

  // Typing animation
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Next Sale";

  useEffect(() => {
    setMounted(true);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);



  // Mouse tracking for parallax, trail, and button interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
        clientX: e.clientX,
        clientY: e.clientY,
        timestamp: Date.now()
      };

      setMousePosition(newPos);

      // Mouse trail effect
      setMouseTrail(prev => [...prev.slice(-10), {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        opacity: 1
      }]);

      // Magnetic button effect
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        if (distance < 150) {
          const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
          const strength = Math.max(0, 1 - distance / 150) * 10;
          setButtonPosition({
            x: Math.cos(angle) * strength,
            y: Math.sin(angle) * strength
          });
        } else {
          setButtonPosition({ x: 0, y: 0 });
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fade out trail particles
  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setMouseTrail(prev =>
        prev.filter(p => Date.now() - p.id < 1000).map(p => ({
          ...p,
          opacity: Math.max(0, 1 - (Date.now() - p.id) / 1000)
        }))
      );
    }, 50);
    return () => clearInterval(fadeInterval);
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full min-h-[90vh] lg:h-[90vh] overflow-hidden flex items-center bg-gradient-to-br from-white via-blue-50/30 to-white"
    >
      {/* === LIGHT AURORA BACKGROUND === */}
      <div className="absolute inset-0 -z-30 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-blue-500/15 to-cyan-400/15 animate-aurora"
          style={{
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* === ANIMATED HEXAGON GRID === */}
      {mounted && (
        <div className="absolute inset-0 -z-25 opacity-5">
          {[...Array(8)].map((_, i) => (
            <div
              key={`hex-${i}`}
              className="absolute animate-float-slow"
              style={{
                left: `${(i % 4) * 25 + 10}%`,
                top: `${Math.floor(i / 4) * 30 + 10}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${8 + i}s`
              }}
            >
              <Hexagon className="w-16 h-16 text-blue-500/20 animate-spin-very-slow" />
            </div>
          ))}
        </div>
      )}

      {/* === MOUSE TRAIL PARTICLES === */}
      {mouseTrail.map((particle, i) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 pointer-events-none -z-20"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity * 0.3,
            transform: `scale(${particle.opacity})`,
            boxShadow: `0 0 ${15 * particle.opacity}px rgba(59, 130, 246, ${particle.opacity * 0.4})`,
            transition: 'opacity 0.3s, transform 0.3s'
          }}
        />
      ))}

      {/* === ADVANCED BACKGROUND === */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid with Parallax */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />

        {/* Pulsing Energy Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 border-2 border-blue-400/10 rounded-full animate-ping-slow" />
          <div className="absolute inset-8 border-2 border-blue-500/10 rounded-full animate-ping-slow animation-delay-1000" />
          <div className="absolute inset-16 border-2 border-cyan-400/10 rounded-full animate-ping-slow animation-delay-2000" />
        </div>

        {/* Layered Soft Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-cyan-400/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

        {/* Constellation Particles with Connection Lines */}
        {mounted && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none -z-5">
            {/* Generate connection lines between nearby particles */}
            {[...Array(30)].map((_, i) =>
              [...Array(30)].map((_, j) => {
                if (i >= j) return null;
                const x1 = (i % 6) * 16 + 8;
                const y1 = Math.floor(i / 6) * 20 + 10;
                const x2 = (j % 6) * 16 + 8;
                const y2 = Math.floor(j / 6) * 20 + 10;
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

                if (distance < 20) {
                  return (
                    <line
                      key={`line-${i}-${j}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgba(59, 130, 246, 0.08)"
                      strokeWidth="1"
                      className="animate-pulse-slow"
                    />
                  );
                }
                return null;
              })
            )}
          </svg>
        )}

        {/* Enhanced Constellation Particles */}
        {mounted && (
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float-slow"
                style={{
                  width: i % 5 === 0 ? '3px' : '2px',
                  height: i % 5 === 0 ? '3px' : '2px',
                  left: `${(i % 6) * 16 + 8}%`,
                  top: `${Math.floor(i / 6) * 20 + 10}%`,
                  background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#60a5fa' : '#0ea5e9',
                  opacity: 0.2 + Math.random() * 0.3,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  boxShadow: i % 5 === 0 ? '0 0 10px 1px currentColor' : '0 0 6px currentColor'
                }}
              />
            ))}
          </div>
        )}

        {/* Simplified Scan Line Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-full w-full animate-scan-line" />

        {/* Corner Accents with Pulse */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400/20 animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-500/20 animate-pulse-slow animation-delay-1000" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-cyan-400/20 animate-pulse-slow animation-delay-2000" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-400/20 animate-pulse-slow animation-delay-1000" />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">

          {/* LEFT CONTENT - COMPACT WITH STAGGERED ENTRANCE */}
          <div className="space-y-4 max-w-xl relative z-10">
            {/* Compact Status Badge with Breathing Effect */}
            <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/70 backdrop-blur-sm border border-blue-200/50 overflow-hidden group animate-fade-in-up hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
              </span>
              <Sparkles className="w-2.5 h-2.5 text-blue-600 animate-pulse" />
              <span className="text-xs font-bold text-blue-700 tracking-wide relative">B2B Marketing Company</span>
              <Boxes className="w-2.5 h-2.5 text-blue-600 animate-spin-slow" />
            </div>

            {/* Main Heading with Typing */}
            <h1
              id="hero-title"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight animate-fade-in-up animation-delay-200"
            >
              <span className="text-blue-900">Stop Guessing When Your</span>{" "}
              <span className="relative inline-block group">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 animate-gradient-x">
                  {displayedText}<span className="animate-blink">|</span>
                </span>
                {/* Subtle Glow */}
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-blue-600/10 blur-xl -z-10 group-hover:blur-2xl transition-all"></span>
              </span>{" "}
              <span className="text-blue-900">Will Come</span>
            </h1>

            {/* Compact Description */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed animate-fade-in-up animation-delay-300">
              We fix broken sales systems so you can{" "}
              <span className="relative inline-block">
                <span className="text-blue-600 font-semibold">grow predictably</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
              </span>
              —month after month. More quality leads, stop chasing dead deals, scale with confidence.
            </p>

            {/* Compact CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in-up animation-delay-400">
              {/* Primary CTA - Compact */}
              <a
                ref={buttonRef}
                href="https://calendly.com/salessyllabus"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden border border-white/30"
                style={{
                  transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
                }}
              >
                {/* Shimmer Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

                {/* Button Content */}
                <span className="relative flex items-center gap-2">
                  <Zap className="w-4 h-4 group-hover:animate-pulse" />
                  Book Free Sales Audit
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Secondary CTA - Compact */}
              <a
                href="#services"
                className="group relative px-6 py-3 rounded-lg border border-blue-200/50 bg-blue-50/70 backdrop-blur-sm text-blue-700 text-sm font-bold hover:bg-blue-100/80 hover:border-blue-300/60 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* Scan line */}
                <span className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity animate-scan-fast"></span>

                <Code2 className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                See Services
                <Activity className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Compact Social Proof */}
            <div className="flex items-center gap-4 pt-3 border-t border-blue-200/40 relative animate-fade-in-up animation-delay-500">
              {/* Animated Border with Particles */}
              <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-blue-500 via-blue-600 to-transparent animate-pulse"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full -translate-y-1/2 animate-ping"></div>

              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white flex items-center justify-center ring-2 ring-blue-400/20 hover:ring-blue-500/40 transition-all cursor-pointer hover:scale-110 hover:z-10 group"
                  >
                    <div className="text-[10px] font-bold text-blue-600 group-hover:scale-125 transition-transform">
                      U{i}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500 hover:scale-125 hover:rotate-12 transition-all cursor-pointer" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs font-medium text-slate-600">Trusted by <span className="text-blue-600 font-bold">50+ Companies</span></p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ENQUIRY FORM (Responsive) */}
          <div className="flex justify-center lg:justify-end relative w-full">
            {/* Multi-layered Soft Glows - Behind Form */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
            <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-full blur-[100px] -z-20 animate-pulse-slower" />

            <div className="relative z-20">
              <EnquiryForm />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(255,255,255,0.3)_100%)] pointer-events-none"></div>

      {/* Creative Bottom Wave Design for Section Differentiation */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 overflow-hidden">
        {/* Curved Wave SVG */}
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Wave Path */}
          <path
            d="M0,40 C300,80 600,0 900,40 C1050,60 1150,40 1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            className="animate-wave-slow"
          />
          {/* Second Wave Layer */}
          <path
            d="M0,60 C300,20 600,80 900,60 C1050,50 1150,70 1200,60 L1200,120 L0,120 Z"
            fill="rgb(239, 246, 255)"
            fillOpacity="0.4"
          />
        </svg>

        {/* Floating Particles */}
        {mounted && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={`wave-particle-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40 animate-float-slow"
                style={{
                  left: `${i * 12 + 5}%`,
                  bottom: `${20 + Math.random() * 40}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + i * 0.5}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Glassmorphism Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent backdrop-blur-sm"></div>
      </div>
    </section>
  );
}
