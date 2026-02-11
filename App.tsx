
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Languages from './components/Languages';
import ExperienceSection from './components/ExperienceSection';
import TechnicalArsenal from './components/TechnicalArsenal';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#0A192F';
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-300 bg-navy">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-20">
        <section id="hero" className="pt-20 scroll-mt-20">
          <Hero />
        </section>

        <section id="global-advantage" className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-12 text-center text-white">
            The <span className="text-cyber">Global Advantage</span>
          </h2>
          <Languages />
        </section>

        <section id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </section>

        <section id="arsenal" className="scroll-mt-24">
          <TechnicalArsenal />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
