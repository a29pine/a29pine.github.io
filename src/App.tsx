import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Racing from './components/Racing';
import Car from './components/Car';
import Taekwondo from './components/Taekwondo';
import MMA from './components/MMA';
import Preferences from './components/Preferences';
import Social from './components/Social';
import Devices from './components/Devices';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    };
    document.addEventListener('contextmenu', handleContextMenu);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('section-fade-in');
      observer.observe(section);
    });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <HamburgerMenu />
      <main>
        <section>
          <Hero />
        </section>
        
        <section id="about-section">
          <About />
        </section>
        
        <section id="racing-section">
          <Racing />
        </section>
        
        <section id="car-section">
          <Car />
        </section>
        
        <section id="taekwondo-section">
          <Taekwondo />
        </section>
        
        <section id="mma-section">
          <MMA />
        </section>
        
        <section id="preferences-section">
          <Preferences />
        </section>
        
        <section id="boundaries-section">
          <Boundaries />
        </section>
        
        <section id="social-section">
          <Social />
        </section>

        <section id="devices-section">
          <Devices />
        </section>
      </main>

      {showPopup && (
        <div className="popup fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-md shadow-lg transition-opacity duration-500">
          Right-click is disabled on this website.
        </div>
      )}
    </div>
  );
}

export default App;