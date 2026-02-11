
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Languages', href: 'global-advantage' },
    { label: 'Experience', href: 'experience' },
    { label: 'Arsenal', href: 'arsenal' },
    { label: 'Education', href: 'education' },
    { label: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy/80 border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a 
          href="#top" 
          onClick={(e) => handleNavClick(e, 'top')}
          className="flex items-center space-x-2 group relative z-50"
        >
          <div className="w-8 h-8 bg-cyber rounded-lg flex items-center justify-center font-heading font-bold text-navy transition-transform group-hover:scale-110">
            DM
          </div>
          <span className="font-heading font-semibold text-lg hidden sm:block text-white">
            David Mitrani
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium hover:text-cyber transition-colors text-slate-400"
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="David_Mitrani_Resume.pdf"
              download="David_Mitrani_Resume.pdf"
              className="text-xs font-bold px-4 py-2 bg-cyber text-navy rounded-md hover:bg-cyber/80 transition-all shadow-sm whitespace-nowrap"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-slate-400 hover:text-cyber focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2.5 rotate-45' : 'w-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-navy/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-2xl font-heading font-bold text-white hover:text-cyber transition-all transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="David_Mitrani_Resume.pdf"
            download="David_Mitrani_Resume.pdf"
            className={`px-8 py-4 bg-cyber text-navy font-bold rounded-xl shadow-lg transition-all transform ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${navItems.length * 100}ms` }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
