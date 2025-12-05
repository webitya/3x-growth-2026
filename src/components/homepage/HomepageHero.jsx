"use client";

import { TrendingUp, ArrowRight, Sparkles, Zap, Activity, Cpu, BarChart3, Code2, Boxes, Hexagon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function HomepageHero() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [mouseTrail, setMouseTrail] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const [colorShift, setColorShift] = useState(0);
  const cardRef = useRef(null);
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

  // Glitch effect on headline
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 5000); // Glitch every 5 seconds
    return () => clearInterval(glitchInterval);
  }, []);

  // Color shift animation
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorShift(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(colorInterval);
  }, []);

  // Mouse tracking for parallax, trail, and interactions
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

      // 3D card tilt
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const cardX = (e.clientX - rect.left) / rect.width;
        const cardY = (e.clientY - rect.top) / rect.height;
        setCardRotation({
          x: (cardY - 0.5) * 20,
          y: (cardX - 0.5) * -20
        });
      }

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
      className="relative w-full min-h-[90vh] lg:h-[90vh] overflow-hidden flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* === AURORA BACKGROUND === */}
      <div className="absolute inset-0 -z-30 opacity-40">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-aurora"
          style={{
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* === ANIMATED HEXAGON GRID === */}
      {mounted && (
        <div className="absolute inset-0 -z-25 opacity-10">
          {[...Array(12)].map((_, i) => (
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
              <Hexagon className="w-16 h-16 text-blue-400/30 animate-spin-very-slow" />
            </div>
          ))}
        </div>
      )}

      {/* === MOUSE TRAIL PARTICLES === */}
      {mouseTrail.map((particle, i) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 pointer-events-none -z-20"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: `scale(${particle.opacity})`,
            boxShadow: `0 0 ${20 * particle.opacity}px rgba(96, 165, 250, ${particle.opacity})`,
            transition: 'opacity 0.3s, transform 0.3s'
          }}
        />
      ))}

      {/* === MATRIX RAIN EFFECT === */}
      {mounted && (
        <div className="absolute inset-0 -z-20 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={`matrix-${i}`}
              className="absolute top-0 font-mono text-xs text-blue-400/20 animate-matrix-rain"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              {[...Array(30)].map((_, j) => (
                <div key={j} className="mb-1">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* === ADVANCED BACKGROUND === */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid with Parallax */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />

        {/* Pulsing Energy Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping-slow" />
          <div className="absolute inset-8 border-2 border-indigo-500/20 rounded-full animate-ping-slow animation-delay-1000" />
          <div className="absolute inset-16 border-2 border-cyan-500/20 rounded-full animate-ping-slow animation-delay-2000" />
        </div>

        {/* Layered Neon Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

        {/* Constellation Particles with Connection Lines */}
        {mounted && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none -z-5">
            {/* Generate connection lines between nearby particles */}
            {[...Array(40)].map((_, i) =>
              [...Array(40)].map((_, j) => {
                if (i >= j) return null;
                const x1 = (i % 8) * 12.5 + 5;
                const y1 = Math.floor(i / 8) * 20 + 10;
                const x2 = (j % 8) * 12.5 + 5;
                const y2 = Math.floor(j / 8) * 20 + 10;
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

                if (distance < 20) {
                  return (
                    <line
                      key={`line-${i}-${j}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgba(96, 165, 250, 0.1)"
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
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float-slow"
                style={{
                  width: i % 5 === 0 ? '4px' : '2px',
                  height: i % 5 === 0 ? '4px' : '2px',
                  left: `${(i % 8) * 12.5 + 5}%`,
                  top: `${Math.floor(i / 8) * 20 + 10}%`,
                  background: i % 4 === 0 ? '#60a5fa' : i % 4 === 1 ? '#a78bfa' : i % 4 === 2 ? '#22d3ee' : '#ffffff',
                  opacity: 0.3 + Math.random() * 0.4,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  boxShadow: i % 5 === 0 ? '0 0 15px 2px currentColor' : '0 0 10px currentColor'
                }}
              />
            ))}
          </div>
        )}

        {/* Floating Tech Keywords */}
        {mounted && (
          <div className="absolute inset-0 font-mono text-xs text-blue-400/10">
            {['AI', 'ML', 'API', 'SDK', 'CRM', '3X'].map((text, i) => (
              <div
                key={text}
                className="absolute animate-float-keywords"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + i}s`
                }}
              >
                {text}
              </div>
            ))}
          </div>
        )}

        {/* Multiple Scan Line Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-full w-full animate-scan-line" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/3 to-transparent h-full w-full animate-scan-line-horizontal" />

        {/* Corner Accents with Pulse */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/30 animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-indigo-500/30 animate-pulse-slow animation-delay-1000" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-cyan-500/30 animate-pulse-slow animation-delay-2000" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 animate-pulse-slow animation-delay-1000" />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* LEFT CONTENT - COMPACT WITH STAGGERED ENTRANCE */}
          <div className="space-y-4 max-w-xl relative z-10">
            {/* Compact Status Badge with Breathing Effect */}
            <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 backdrop-blur-sm overflow-hidden group animate-fade-in-up hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
              </span>
              <Sparkles className="w-2.5 h-2.5 text-blue-400 animate-pulse" />
              <span className="text-xs font-bold text-blue-300 tracking-wide relative">Q1 2026 Partners</span>
              <Boxes className="w-2.5 h-2.5 text-cyan-400 animate-spin-slow" />
            </div>

            {/* Main Heading with GLITCH Effect & Typing */}
            <h1
              id="hero-title"
              className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight animate-fade-in-up animation-delay-200 ${glitchActive ? 'animate-glitch' : ''}`}
            >
              <span className="text-white">Stop Guessing When Your</span>{" "}
              <span className="relative inline-block group">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 animate-gradient-x">
                  {displayedText}<span className="animate-blink">|</span>
                </span>
                {/* Multi-layered Glow with Color Shift */}
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-2xl -z-10 group-hover:blur-3xl transition-all"></span>
                <span className="absolute -inset-2 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 blur-3xl -z-20 group-hover:blur-[60px] transition-all"></span>
                <span className="absolute -inset-3 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 blur-[80px] -z-30 animate-pulse-slow"></span>

                {/* Rainbow holographic overlay */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, hsl(${colorShift}, 100%, 70%, 0.1), transparent)`
                  }}
                />
              </span>{" "}
              <span className="text-white">Will Come</span>
            </h1>

            {/* Compact Description */}
            <p className="text-sm md:text-base text-slate-300 leading-relaxed animate-fade-in-up animation-delay-300">
              We fix broken sales systems so you can{" "}
              <span className="relative inline-block">
                <span className="text-blue-400 font-semibold">grow predictably</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
              </span>
              —month after month. More quality leads, stop chasing dead deals, scale with confidence.
            </p>

            {/* Compact CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in-up animation-delay-400">
              {/* Primary CTA - Compact */}
              <a
                ref={buttonRef}
                href="tel:+916200207379"
                className="group relative px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-blue-400 before:to-indigo-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:-z-10"
                style={{
                  transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
                }}
              >
                {/* Ripple pulse effect */}
                <span className="absolute inset-0 rounded-xl bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700"></span>

                {/* Animated Background Gradient */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                {/* Multiple Shimmer Effects */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>
                <span className="absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 animation-delay-500"></span>

                {/* Button Content */}
                <span className="relative flex items-center gap-2">
                  <Zap className="w-4 h-4 group-hover:animate-pulse" />
                  Book Free Sales Audit
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Enhanced Glows */}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>

              {/* Secondary CTA - Compact */}
              <a
                href="#services"
                className="group relative px-6 py-3 rounded-lg border border-blue-500/30 bg-slate-900/50 backdrop-blur-sm text-blue-300 text-sm font-bold hover:bg-slate-800/50 hover:border-blue-400/50 hover:text-blue-200 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* Animated Corner Decorations */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute -top-px -left-px w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span>
                </span>
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute -top-px -right-px w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute -bottom-px -left-px w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span>
                </span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute -bottom-px -right-px w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span>
                </span>

                {/* Scan line */}
                <span className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent h-full opacity-0 group-hover:opacity-100 transition-opacity animate-scan-fast"></span>

                <Code2 className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                See Services
                <Activity className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Compact Social Proof */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-700/50 relative animate-fade-in-up animation-delay-500">
              {/* Animated Border with Particles */}
              <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent animate-pulse"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full -translate-y-1/2 animate-ping"></div>

              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-900 flex items-center justify-center ring-2 ring-blue-500/20 hover:ring-blue-400/40 transition-all cursor-pointer hover:scale-110 hover:z-10 group"
                  >
                    <div className="text-[10px] font-bold text-blue-400 group-hover:scale-125 transition-transform">
                      U{i}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400 hover:scale-125 hover:rotate-12 transition-all cursor-pointer" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs font-medium text-slate-400">Trusted by <span className="text-blue-400 font-bold">50+ SMEs</span></p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - 3D TILTING DASHBOARD */}
          <div className="hidden lg:flex justify-end relative perspective-deep">
            {/* Multi-layered Glow Effects */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
            <div className="absolute -inset-12 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-[100px] -z-20 animate-pulse-slower" />
            <div className="absolute -inset-14 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-[120px] -z-30 animate-blob" />

            <div
              ref={cardRef}
              className="
                relative w-full max-w-md rounded-2xl
                bg-gradient-to-br from-slate-900/90 to-slate-800/90
                backdrop-blur-xl border border-slate-700/50
                shadow-2xl shadow-blue-900/20
                p-6 transition-all duration-300
                overflow-hidden group
                hover:shadow-blue-500/30 hover:border-blue-500/30
                transform-gpu
              "
              style={{
                transform: `perspective(1000px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg) scale(1.02)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated Border Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-20 blur-sm -z-10 animate-spin-slow" />

              {/* Multiple Data Streams */}
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-data-stream" />
              <div className="absolute top-0 right-4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent animate-data-stream animation-delay-1000" />

              {/* Header with Icons */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 animate-pulse" />
                    Revenue Forecast
                    <Cpu className="w-3 h-3 text-cyan-400 animate-spin-slow" />
                  </p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-400 rounded-full animate-ping"></span>
                    <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse animation-delay-500"></span>
                    AI-Powered Prediction
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:border-green-400/50 transition-colors cursor-pointer hover:scale-110 transform duration-300 hover:rotate-12">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
              </div>

              {/* Advanced Graph */}
              <div className="relative z-10 rounded-xl bg-slate-950/50 border border-slate-700/50 p-5 mb-6 overflow-hidden group/graph hover:border-blue-500/30 transition-colors">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>

                {/* Enhanced Data Points */}
                <div className="absolute top-2 right-2 flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="w-1 h-1 rounded-full bg-blue-400/50 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    </div>
                  ))}
                </div>

                <div className="relative flex items-end gap-3 h-40">
                  {barHeights.map((h, i) => {
                    const isActive = hoverIndex === i;
                    return (
                      <div
                        key={i}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className="flex-1 flex flex-col items-center cursor-pointer"
                      >
                        <div className="relative w-full h-full flex items-end">
                          {/* Bar with Enhanced Effects */}
                          <div
                            className="w-full rounded-t transition-all duration-300 relative overflow-hidden"
                            style={{
                              height: `${isActive ? h + 20 : h}px`,
                            }}
                          >
                            {/* Gradient Fill with Animation */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${isActive
                              ? 'from-blue-600 via-blue-500 to-cyan-400'
                              : 'from-blue-600/60 via-blue-500/40 to-cyan-400/30'
                              } transition-all duration-300`} />

                            {/* Multiple Shimmer Layers */}
                            {isActive && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 animate-shimmer" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 animate-shimmer animation-delay-500" />
                                <div className="absolute inset-0 border-t-2 border-cyan-400/50 animate-pulse" />
                              </>
                            )}

                            {/* Enhanced Side Glows */}
                            <div className={`absolute -left-1 top-0 bottom-0 w-px bg-blue-400/50 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                            <div className={`absolute -right-1 top-0 bottom-0 w-px bg-blue-400/50 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                            <div className={`absolute left-0 right-0 -top-1 h-px bg-cyan-400/50 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                          </div>

                          {/* Enhanced Hover Info with Animation */}
                          {isActive && (
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-lg px-3 py-2 whitespace-nowrap shadow-lg shadow-blue-500/20 animate-fade-in z-20">
                              <p className="text-xs font-bold text-blue-300 mb-1 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                ${(50 + i * 25)}K
                              </p>
                              <div className="flex items-center gap-1 text-[10px] text-green-400">
                                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                                +{15 + i * 5}% growth
                              </div>
                            </div>
                          )}
                        </div>
                        <span className={`mt-2 text-[10px] font-medium transition-all duration-300 ${isActive ? "text-blue-400 font-bold" : "text-slate-600"
                          }`}>
                          M{i + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Enhanced Stats with Advanced Effects */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 overflow-hidden group/stat hover:border-blue-400/40 transition-all cursor-pointer hover:scale-105 transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover/stat:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute top-0 right-0 w-10 h-10 bg-blue-400/10 rounded-bl-full"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-2xl font-bold text-blue-400 relative">3x</p>
                    <BarChart3 className="w-4 h-4 text-blue-400/50 group-hover/stat:rotate-12 transition-transform" />
                  </div>
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider relative">Pipeline Growth</p>
                  <div className="mt-2 h-1 bg-slate-700/50 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full animate-progress-bar"></div>
                  </div>
                </div>

                <div className="relative p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-600/5 border border-green-500/20 overflow-hidden group/stat hover:border-green-400/40 transition-all cursor-pointer hover:scale-105 transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 -translate-x-full group-hover/stat:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute top-0 right-0 w-10 h-10 bg-green-400/10 rounded-bl-full"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-2xl font-bold text-green-400 relative">+65%</p>
                    <TrendingUp className="w-4 h-4 text-green-400/50 group-hover/stat:rotate-12 transition-transform" />
                  </div>
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider relative">Win Rate</p>
                  <div className="mt-2 h-1 bg-slate-700/50 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-full animate-progress-bar animation-delay-500"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Bottom Effects */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-50 transition-opacity blur-sm"></div>

              {/* Corner CPU Indicator with Animation */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[8px] text-slate-500 group-hover:text-blue-400 transition-colors">
                <Cpu className="w-3 h-3 animate-pulse" />
                <span className="font-mono">LIVE</span>
                <div className="flex gap-px">
                  <div className="w-px h-2 bg-green-400 animate-wave"></div>
                  <div className="w-px h-2 bg-green-400 animate-wave animation-delay-100"></div>
                  <div className="w-px h-2 bg-green-400 animate-wave animation-delay-200"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced Vignette Effect with Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_rgba(15,23,42,0.3)_100%)] pointer-events-none"></div>
    </section>
  );
}
