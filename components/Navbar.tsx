
import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const navItems = [
    { label: 'Languages', href: 'global-advantage' },
    { label: 'Experience', href: 'experience' },
    { label: 'Arsenal', href: 'arsenal' },
    { label: 'Education', href: 'education' }
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkMode ? 'bg-navy/80 border-b border-white/5' : 'bg-white/80 border-b border-slate-200'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a 
          href="#top" 
          onClick={(e) => handleNavClick(e, 'top')}
          className="flex items-center space-x-2 group"
        >
          <div className="w-8 h-8 bg-cyber rounded-lg flex items-center justify-center font-heading font-bold text-navy transition-transform group-hover:scale-110">
            DM
          </div>
          <span className={`font-heading font-semibold text-lg hidden sm:block ${isDarkMode ? 'text-white' : 'text-navy'}`}>
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
                className={`text-sm font-medium hover:text-cyber transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="David_Mitrani_Resume.pdf"
              download="David_Mitrani_Resume.pdf"
              className={`text-xs font-bold px-4 py-2 bg-cyber text-navy rounded-md hover:bg-cyber/80 transition-all shadow-sm whitespace-nowrap`}
            >
              Download Resume
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${isDarkMode ? 'hover:bg-white/10 text-cyber' : 'hover:bg-slate-100 text-navy'}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.242 17.657l.707.707M6.343 6.343l.707-.707M14.99 12a3 3 0 11-5.999 0 3 3 0 015.999 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
