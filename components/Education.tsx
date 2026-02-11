
import React from 'react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const education = [
    {
      degree: "Master's in Business Analytics",
      school: "Florida Atlantic University (FAU)",
      location: "Boca Raton, FL",
      period: "2025 – 2026",
      accent: "border-cyber"
    },
    {
      degree: "Bachelor's in Business Administration",
      school: "IQS - Universitat Ramon Llull",
      location: "Barcelona, Spain",
      period: "2019 – 2025",
      accent: "border-violet-500"
    },
    {
      degree: "Exchange Student in Business Administration",
      school: "University of Central Florida (UCF)",
      location: "Orlando, FL",
      period: "2024",
      accent: "border-blue-400"
    }
  ];

  return (
    <div className="space-y-12">
      <h2 className={`text-3xl md:text-4xl font-heading font-extrabold text-center ${isDarkMode ? 'text-white' : 'text-navy'}`}>
        Global <span className="text-cyber">Academic</span> Journey
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, idx) => (
          <div
            key={edu.degree}
            className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-start md:items-center gap-6 group`}
          >
            <div className={`hidden md:block w-32 shrink-0 font-mono text-sm opacity-60 text-right pr-8`}>
              {edu.period}
            </div>
            
            {/* Timeline element */}
            <div className="absolute left-0 md:left-32 top-0 bottom-0 flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full border-2 ${edu.accent} bg-navy group-hover:scale-125 transition-transform`}></div>
              {idx !== education.length - 1 && <div className="w-0.5 h-full bg-slate-200 dark:bg-white/10 my-2"></div>}
            </div>

            <div className={`md:ml-12 p-6 rounded-2xl w-full transition-all ${isDarkMode ? 'bg-navy-light/40 hover:bg-navy-light/60' : 'bg-white shadow-md hover:shadow-lg'} border-l-4 ${edu.accent}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className={`text-xl font-heading font-bold ${isDarkMode ? 'text-white' : 'text-navy'}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-cyber font-medium">{edu.school}</p>
                </div>
                <div className="text-sm font-mono opacity-60 md:hidden">
                  {edu.period}
                </div>
                <div className="text-sm font-mono opacity-80 text-right italic">
                  {edu.location}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Honor Society Highlight - Clickable & Sparkle Restored */}
        <a 
          href="https://betagammasigma.org/home"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-12 p-6 rounded-2xl flex items-center justify-center gap-6 border transition-all duration-300 group block ${
            isDarkMode 
              ? 'bg-cyber/5 border-cyber/20 hover:bg-cyber/10 hover:border-cyber/40' 
              : 'bg-slate-50 border-slate-200 hover:bg-white hover:shadow-lg hover:border-cyber/40'
          }`}
        >
          <div className="w-10 h-10 bg-cyber text-navy rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-cyber/10 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h4 className={`text-base font-heading font-bold ${isDarkMode ? 'text-white' : 'text-navy'}`}>
                Beta Gamma Sigma Honor Society
              </h4>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-cyber' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p className={`text-[10px] font-mono tracking-wide uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Top 10% of the degree cohort - IQS Universitat Ramon Llull
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Education;
