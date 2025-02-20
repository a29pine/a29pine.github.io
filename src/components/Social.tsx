import React from 'react';
import { Instagram, Twitter, Youtube, Mail, Discord, Steam } from 'lucide-react';

export default function Social() {
  const socials = [
    {
      icon: Discord,
      label: 'Discord',
      href: 'http://discord.com/users/744828801153892382/',
    },
    {
      icon: Steam,
      label: 'Steam',
      href: 'https://steamcommunity.com/profiles/76561198034850729',
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          Connect With Me
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="glass-card neon-glow p-6 flex flex-col items-center gap-3 group"
              >
                <Icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400">{social.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}