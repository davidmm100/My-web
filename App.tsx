
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Languages from './components/Languages';
import ExperienceSection from './components/ExperienceSection';
import TechnicalArsenal from './components/TechnicalArsenal';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0A192F';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#F8FAFC';
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-20">
        <section id="hero" className="pt-20 scroll-mt-20">
          <Hero isDarkMode={isDarkMode} />
        </section>

        <section id="global-advantage" className="scroll-mt-24">
          <h2 className={`text-3xl md:text-4xl font-heading font-extrabold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-navy'}`}>
            The <span className="text-cyber">Global Advantage</span>
          </h2>
          <Languages isDarkMode={isDarkMode} />
        </section>

        <section id="experience" className="scroll-mt-24">
          <ExperienceSection isDarkMode={isDarkMode} />
        </section>

        <section id="arsenal" className="scroll-mt-24">
          <TechnicalArsenal isDarkMode={isDarkMode} />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education isDarkMode={isDarkMode} />
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
