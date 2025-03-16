import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-md text-purple-400 hover:bg-gray-700 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/90 z-40 flex flex-col items-center justify-center space-y-6">
          <a href="#about-section" onClick={toggleMenu} className="text-2xl text-purple-400 hover:text-purple-600 transition-colors">
            About Me
          </a>
          <a href="#racing-section" onClick={toggleMenu} className="text-2xl text-purple-400 hover:text-purple-600 transition-colors">
            Racing Experience
          </a>
          <a href="#car-section" onClick={toggleMenu} className="text-2xl text-purple-400 hover:text-purple-600 transition-colors">
            My Car
          </a>
          <a href="#taekwondo-section" onClick={toggleMenu} className="text-2xl text-purple-400 hover:text-purple-600 transition-colors">
            Taekwondo
          </a>
          <a href="#preferences-section" onClick={toggleMenu} className="text-2xl text-purple-400 hover:text-purple-600 transition-colors">
            Preferences
          </a>
          <a href="#social-section" onClick={toggleMenu} className="text-2xl text-purple-400 hover:text-purple-600 transition-colors">
            Social
          </a>
          <a href="#devices-section" onClick={toggleMenu} className="text-2xl text-purple-400 hover:text-purple-600 transition-colors">
            Devices
          </a>
          <a href="https://hwid.a29pine.xyz" className="text-2xl text-purple-400 hover:text-purple-600 transition-colors">
            HWID Info
          </a>
        </div>
      )}
    </div>
  );
}