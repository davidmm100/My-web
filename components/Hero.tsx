
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const roles = [
    "Business Analytics Specialist",
    "Financial Data Analyst",
    "Multilingual Strategist",
    "Data Storyteller"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <div className="flex flex-col items-center text-center py-12 md:py-16 relative">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyber/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      <div className="max-w-4xl w-full space-y-6 relative z-10 flex flex-col items-center">
        <div className="relative w-28 h-28 md:w-32 md:h-32 group mb-4">
          <div className="absolute -inset-2 border border-dashed border-cyber/30 rounded-full animate-[spin_25s_linear_infinite]"></div>
          <div className="absolute -inset-1 border border-violet-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
          
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-navy-light shadow-xl relative z-10 flex items-center justify-center bg-navy">
            <img 
              src="https://raw.githubusercontent.com/david-mitrani/portfolio/main/profile.png" 
              alt="David Mitrani" 
              className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=David+Mitrani&background=0A192F&color=64FFDA&size=256&bold=true";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="absolute -bottom-1 -right-1 bg-navy-light glass px-1.5 py-0.5 rounded border border-cyber/40 z-20 shadow-lg">
            <span className="text-cyber font-mono text-[7px] font-bold uppercase tracking-widest">Global</span>
          </div>
        </div>

        <h2 className="text-cyber font-mono font-medium tracking-widest uppercase text-[10px] md:text-xs animate-fade-in inline-block border-b border-cyber/30 pb-0.5">
          Global Financial Strategist
        </h2>

        <h1 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tight text-white">
          David Mitrani
        </h1>

        <div className="space-y-1">
          <p className="text-lg md:text-2xl font-heading font-semibold text-slate-400">
            <span className="text-cyber">Mastering</span> Data & <span className="text-violet-500">Financial Analysis</span>
          </p>
          <div className="text-base md:text-xl font-mono h-6 text-slate-300">
            {text}<span className="text-cyber animate-pulse">|</span>
          </div>
        </div>

        <p className="max-w-xl text-sm md:text-base font-light leading-relaxed text-slate-400">
          Multilingual analytical powerhouse transforming complex market data into actionable strategic insights. Leveraging Bloomberg expertise to drive rigorous financial modeling and business intelligence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
          <a
            href="#experience"
            className="w-full sm:w-auto px-6 py-3 bg-cyber text-navy font-bold rounded-lg hover:bg-cyber/80 transition-all shadow-lg shadow-cyber/20 transform hover:-translate-y-1 text-center text-sm"
          >
            View Strategic Projects
          </a>
          <a
            href="David_Mitrani_Resume.pdf"
            download="David_Mitrani_Resume.pdf"
            className="w-full sm:w-auto px-6 py-3 border-2 border-cyber text-cyber font-bold rounded-lg transition-all hover:bg-cyber/10 transform hover:-translate-y-1 text-center text-sm"
          >
            Download Executive Resume
          </a>
        </div>
      </div>

      <div className="mt-12 animate-bounce opacity-20 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => document.getElementById('global-advantage')?.scrollIntoView()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
