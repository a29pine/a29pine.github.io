import React from 'react';
import { ShieldAlert, AlertTriangle, XOctagon } from 'lucide-react';

export default function Boundaries() {
  return (
    <div className="py-20 px-4 bg-gray-900/50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="relative">
            <ShieldAlert className="w-8 h-8 text-purple-400 animate-pulse" />
            <div className="absolute inset-0 bg-purple-400/20 blur-xl -z-10" />
          </div>
          <h2 className="text-3xl font-bold glitch" data-text="Restricted Access">
            Restricted Access
          </h2>
        </div>
        
        <div className="glass-card neon-glow p-8 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-purple-500/50 to-red-500/50" />
          
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-red-400">
              <AlertTriangle className="w-6 h-6" />
              <p className="text-xl font-semibold">Security Notice</p>
            </div>
            
            <div className="space-y-4">
              {[
                "Individuals who disrespect racing ethics and safety protocols",
                "Those who promote dangerous or illegal driving practices",
                "People who disregard car community etiquette"
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 hover:bg-red-900/10 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <XOctagon className="w-5 h-5 text-red-400 group-hover:rotate-12 transition-transform duration-300" />
                    <p className="text-gray-400">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-red-900/5 mix-blend-overlay pointer-events-none" />
    </div>
  );
}