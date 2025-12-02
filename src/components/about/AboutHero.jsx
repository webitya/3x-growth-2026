"use client";

export default function AboutHero() {
  return (
    <section
      className="
        relative w-full 
        min-h-[55vh] max-h-[70vh] 
        flex items-center justify-center 
        pt-5 overflow-hidden
        bg-gradient-to-br from-blue-600 via-blue-500 to-blue-100
      "
    >
      {/* Background Glow Shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/30 blur-[120px] rounded-full" />
      </div>

      {/* Content Wrapper (max-height controlled) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="
            max-w-3xl mx-auto text-center 
            space-y-5 
            py-10 md:py-12 
            flex flex-col items-center justify-center
          "
        >
          {/* Title */}
          <h1
            className="
              text-4xl md:text-5xl lg:text-6xl 
              font-extrabold leading-tight tracking-tight text-white
            "
          >
            We have Been Where{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-200 text-transparent bg-clip-text">
              You Are
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              text-lg md:text-xl text-white/90 
              max-w-2xl mx-auto leading-relaxed
            "
          >
            Frustrated with unpredictable sales. Watching good deals slip away.  
            Ready for real, sustained growth.
          </p>

          {/* Divider */}
          <div className="h-1 w-20 mx-auto bg-yellow-300 rounded-full opacity-90" />
        </div>
      </div>
    </section>
  );
}
