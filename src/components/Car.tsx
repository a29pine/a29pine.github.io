import React from 'react';
import { Car as CarIcon, Settings, Gauge, PenTool as Tool, Zap } from 'lucide-react';
import carImage from './assets/350z.png';

export default function Car() {
  const specs = [
    { icon: Settings, label: "Engine", value: "3.5L V6 VQ35DE" },
    { icon: Gauge, label: "Power", value: "287 HP" },
    { icon: Tool, label: "Transmission", value: "6-Speed Manual" },
    { icon: Zap, label: "0-60 mph", value: "5.5s" }
  ];

  return (
    <div className="py-20 px-4 bg-gray-900/50">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
        My Car
      </h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="glass-card neon-glow p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg hover-3d">
                <img
                  src={carImage}
                  alt="2004 Nissan 350Z"
                  className="w-full h-auto max-h-96 object-contain transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <CarIcon className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">2004 Nissan 350Z</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={index}
                      className="glass-card p-4 hover:bg-purple-900/20 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="text-sm text-gray-400">{spec.label}</p>
                          <p className="font-semibold">{spec.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-gray-400">
                A stock 2004 Nissan 350Z, featuring the legendary VQ35DE engine. This Japanese sports car 
                represents the perfect balance of performance and reliability, ready for both street and track action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}