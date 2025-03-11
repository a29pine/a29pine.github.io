import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Racing from './components/Racing';
import Car from './components/Car';
import Taekwondo from './components/Taekwondo';
import Preferences from './components/Preferences';
import Boundaries from './components/Boundaries';
import Social from './components/Social';
import Devices from './components/Devices'; // Import the new component

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
      <main>
        <section>
          <Hero />
        </section>
        
        <section id="about-section">
          <About />
        </section>
        
        <section>
          <Racing />
        </section>
        
        <section>
          <Car />
        </section>
        
        <section>
          <Taekwondo />
        </section>
        
        <section>
          <Preferences />
        </section>
        
        <section>
          <Boundaries />
        </section>
        
        <section>
          <Social />
        </section>

        <section>
          <Devices /> {/* Add the new component here */}
        </section>
      </main>
    </div>
  );
}

export default App;