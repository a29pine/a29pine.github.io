import React, { useState } from 'react';
import { Trophy, Timer, Medal, Flag } from 'lucide-react';

export default function Racing() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const stats = [
    {
      icon: Trophy,
      title: "Karting Achievements",
      value: "7 Podiums",
      description: "Multiple podium finishes in competitive karting events"
    },
    {
      icon: Timer,
      title: "Favourite Track",
      value: "Nürburgring",
      description: "Technical & enjoyable"
    },
    {
      icon: Medal,
      title: "Racing License",
      value: "Licensed Driver",
      description: "Certified racing driver with professional credentials"
    },
    {
      icon: Flag,
      title: "Race Starts",
      value: "50+",
      description: "Extensive racing experience across multiple events"
    }
  ];

  return (
    <div id="target-section" className="py-20 px-4 racing-lights">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
        Racing Experience
      </h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`glass-card neon-glow p-6 space-y-4 cursor-pointer transition-all duration-300 hover-3d ${
                activeCard === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">{stat.title}</h3>
              </div>
              
              <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
                <p className="text-white text-2xl font-bold">{stat.value}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-400">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
