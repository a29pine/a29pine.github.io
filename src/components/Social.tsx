import React from 'react';
import { Instagram, Twitter, Youtube, Mail, MessageCircle } from 'lucide-react';

export default function Social() {
  const socials = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: '#',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: '#',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:example@example.com',
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

        <div className="flex justify-center mt-8">
          <a
            href="http://discord.com/users/744828801153892382/"
            className="glass-card neon-glow p-6 flex flex-col items-center gap-3 group"
          >
            <MessageCircle className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-400">Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
}