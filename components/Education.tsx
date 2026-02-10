
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
      </div>
    </div>
  );
};

export default Education;
