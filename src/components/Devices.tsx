import React from 'react';
import { Monitor, Smartphone, Cpu, Laptop } from 'lucide-react';

export default function Devices() {
  const devices = [
    { icon: Cpu, label: "PC", specs: "Ryzen 7 7800X3D, 4090, 32GB DDR4" },
    { icon: Smartphone, label: "Phone", specs: "Samsung S24 Ultra SnapDragon" },
    { icon: Laptop, label: "Laptop", specs: "Thinkpad T480" },
    { icon: Monitor, label: "Monitor", specs: "ASUS ROG Strix OLED XG27AQDMG 27'' 1440p 240hz" }
  ];

  return (
    <div className="py-20 px-4 bg-gray-900/50">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
        Personal Devices
      </h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {devices.map((device, index) => {
          const Icon = device.icon;
          return (
            <div
              key={index}
              className="glass-card neon-glow p-6 space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">{device.label}</h3>
              </div>
              <p className="text-gray-400">{device.specs}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
