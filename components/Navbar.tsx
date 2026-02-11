
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Languages', href: 'global-advantage' },
    { label: 'Experience', href: 'experience' },
    { label: 'Arsenal', href: 'arsenal' },
    { label: 'Education', href: 'education' },
    { label: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
        <a 
          href="#top" 
          onClick={(e) => handleNavClick(e, 'top')}
          className="flex items-center space-x-2 group"
        >
          <div className="w-8 h-8 bg-cyber rounded-lg flex items-center justify-center font-heading font-bold text-navy transition-transform group-hover:scale-110">
            DM
          </div>
          <span className="font-heading font-semibold text-lg hidden sm:block text-white">
            David Mitrani
          </span>
        </a>

        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex items-center space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
