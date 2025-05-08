import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById('about-section');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden text-white px-4"
      aria-label="Hero section"
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-600/10 to-transparent animate-gradient-xy z-0 pointer-events-none" />
      
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none grain" />

      <div className="z-10 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
          Welcome!
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
          I'm <span className="font-semibold text-white">a29pine</span> — welcome to my digital home.
        </p>
        <button
          onClick={handleScroll}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-xl text-white font-medium backdrop-blur-sm shadow-md hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          Explore More
        </button>
      </div>

      {/* Chevron */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 animate-bounce z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        aria-label="Scroll down to about section"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </button>
    </section>
  );
}
