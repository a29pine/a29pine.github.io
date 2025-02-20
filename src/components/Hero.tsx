import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center space-y-6 z-10">
        <h1 className="typewriter text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text glitch" data-text="Welcome to My World">
          Welcome to My World
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Racing enthusiast, car lover, and passionate about life
        </p>
        <button className="glass-card neon-glow px-8 py-3 text-purple-400 font-semibold hover:scale-105 transition-all duration-300">
          Explore More
        </button>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-500" />
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900 z-0 animate-gradient-xy" />
      
      <div className="grain" />
    </div>
  );
}