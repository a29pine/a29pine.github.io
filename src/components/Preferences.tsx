import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Preferences() {
  const likes = [
    { text: "Trackdays", emoji: "🏎️" },
    { text: "Jajjangmyeon", emoji: "🍜" },
    { text: "Sim Racing", emoji: "🎮🏁" },
    { text: "Gaming", emoji: "🎮" },
    { text: "Country Road Drives", emoji: "🌿🚗" },
    { text: "Piano & Music", emoji: "🎵🎹" },
    { text: "Dreamcatcher", emoji: "🎤" },
    { text: "Gahyun from Dreamcatcher", emoji: "👩" }
  ];
  
  const dislikes = [
    { text: "Disrespect Towards Women", emoji: "🚫♀️" },
    { text: "Unsafe Car Modifications", emoji: "🔧⚠️" },
    { text: "Reckless Driving", emoji: "🚗💥" },
    { text: "Racism", emoji: "🚫🌍" },
    { text: "Homophobia", emoji: "🚫🏳️‍🌈" },
    { text: "Soup", emoji: "🥣😖" }
  ];
  
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <ThumbsUp className="w-8 h-8 text-purple-400" />
            <span>Things I Like</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {likes.map((item, index) => (
              <div
                key={index}
                className="glass-card neon-glow p-4 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={item.text}>
                    ✅
                  </span>
                  <span className="font-medium">{item.text}</span>
                  <span className="text-xl ml-auto" role="img" aria-label={`${item.text} emoji`}>
                    {item.emoji}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <ThumbsDown className="w-8 h-8 text-purple-400" />
            <span>Things I Dislike</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {dislikes.map((item, index) => (
              <div
                key={index}
                className="glass-card neon-glow p-4 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={item.text}>
                    ❌
                  </span>
                  <span className="font-medium">{item.text}</span>
                  <span className="text-xl ml-auto" role="img" aria-label={`${item.text} emoji`}>
                    {item.emoji}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}