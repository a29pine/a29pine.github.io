import React from 'react';
import { User, MapPin, Flag, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          About Me
        </h2>
        
        <div className="glass-card neon-glow p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <User className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold">Background</h3>
                <p className="text-gray-400">18 years old • Korean-German Heritage</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold">Current Location</h3>
                <p className="text-gray-400">United Kingdom</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Flag className="w-8 h-8 text-purple-400" />
              <div className="flex gap-3">
                <span className="text-2xl" role="img" aria-label="Korean flag">
                  🇰🇷
                </span>
                <span className="text-2xl" role="img" aria-label="German flag">
                  🇩🇪
                </span>
                <span className="text-2xl" role="img" aria-label="UK flag">
                  🇬🇧
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Heart className="w-8 h-8 text-red-400" />
              <div>
                <h3 className="text-xl font-semibold">Girlfriend</h3>
                <p className="text-gray-400">Kim Chaeyun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}