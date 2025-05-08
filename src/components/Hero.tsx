import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById('about-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center space-y-6 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
          Welcome!
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
          a29pine, Personal Website
        </p>
        <button
          onClick={handleScroll}
          className="glass-card neon-glow px-8 py-3 text-white font-semibold hover:scale-105 transition-transform duration-300"
        >
          Explore More
        </button>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-500/10 to-transparent z-0 animate-gradient-xy" />
      
      <div className="grain" />
    </div>
  );
}
