import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Racing from './components/Racing';
import Car from './components/Car';
import Taekwondo from './components/Taekwondo';
import Preferences from './components/Preferences';
import Boundaries from './components/Boundaries';
import Social from './components/Social';
import Devices from './components/Devices';
import HamburgerMenu from './components/HamburgerMenu'; // Import the new component

function App() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (event: MouseEvent) => event.preventDefault();
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
      <HamburgerMenu /> {/* Add the new component here */}
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
    </div>
  );
}

export default App;