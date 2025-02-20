import React from 'react';
import { Swords } from 'lucide-react';

export default function Taekwondo() {
  const achievements = [
    {
      title: "Martial Art",
      value: "Taekwondo",
      icon: "🥋"
    },
    {
      title: "Discipline",
      value: "Korean Martial Arts",
      icon: "🇰🇷"
    },
    {
      title: "Focus",
      value: "Mind & Body",
      icon: "🧘‍♂️"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Swords className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Taekwondo Journey
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
              Practicing Taekwondo has taught me discipline, respect, and the importance of 
              continuous self-improvement. These principles carry over into every aspect of my life, 
              from racing to personal growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}