import React from 'react';
import { MessageCircle, Cpu, HardDrive } from 'lucide-react';

export default function Social() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          Connect With Me & More
        </h2>
        
        <div className="flex justify-center gap-8">
          {/* Discord Box */}
          <a
            href="http://discord.com/users/744828801153892382/"
            className="glass-card neon-glow p-6 flex flex-col items-center gap-3 group"
          >
            <MessageCircle className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-400">Discord</span>
          </a>

          {/* HWID Box */}
          <a
            href="https://hwid.a29pine.xyz"
            className="glass-card neon-glow p-6 flex flex-col items-center gap-3 group"
          >
            <Cpu className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-400">Device Info</span>
          </a>
        </div>
      </div>
    </div>
  );
}
