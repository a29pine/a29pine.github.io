import React from 'react';
import { BoxingGlove } from 'lucide-react';

export default function MMA() {
  const achievements = [
    {
      title: "Martial Art",
      value: "Mixed Martial Arts",
      icon: "🥋"
    },
    {
      title: "Discipline",
      value: "Various Martial Arts",
      icon: "🥊"
    },
    {
      title: "Rank",
      value: "Purple Belt 4th Stripe",
      icon: "🔰"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <BoxingGlove className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            MMA Journey
          </h2>
        </div>
        
        <div className="glass-card neon-glow p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:bg-purple-900/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <span className="text-4xl" role="img" aria-label={achievement.title}>
                    {achievement.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Training in MMA has provided me with a comprehensive understanding of various martial arts disciplines. 
              Achieving the rank of Purple Belt 4th Stripe when I was younger is a testament to my dedication and hard work in this field. 
              However, I have since discontinued MMA in pursuit of Taekwondo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}