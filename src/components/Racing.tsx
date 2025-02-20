import React, { useState } from 'react';
import { Trophy, Timer, Medal, Flag } from 'lucide-react';

export default function Racing() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const stats = [
    {
      icon: Trophy,
      title: "Karting Achievements",
      value: "7 Podiums",
      image: "https://images.unsplash.com/photo-1652703747774-558a10faacc2?auto=format&fit=crop&w=800",
      description: "Multiple podium finishes in competitive karting events"
    },
    {
      icon: Timer,
      title: "Best Lap Time",
      value: "2:22.000",
      image: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?auto=format&fit=crop&w=800",
      description: "Personal best at Silverstone Circuit in GT3RS"
    },
    {
      icon: Medal,
      title: "Racing License",
      value: "Licensed Driver",
      image: "https://images.unsplash.com/photo-1623796898333-4310fac51d60?auto=format&fit=crop&w=800",
      description: "Certified racing driver with professional credentials"
    },
    {
      icon: Flag,
      title: "Race Starts",
      value: "50+",
      image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=800",
      description: "Extensive racing experience across multiple events"
    }
  ];

  return (
    <div className="py-20 px-4 racing-lights">
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
              
              <div className="relative h-48 overflow-hidden rounded-lg">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-2xl font-bold text-purple-400">{stat.value}</p>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}