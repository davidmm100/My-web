
import React from 'react';

interface LanguagesProps {
  isDarkMode: boolean;
}

const Languages: React.FC<LanguagesProps> = ({ isDarkMode }) => {
  const languages = [
    { name: 'Spanish', level: 'Native', color: 'bg-red-400' },
    { name: 'English', level: 'Native', color: 'bg-blue-400' },
    { name: 'Portuguese', level: 'Fluent', color: 'bg-green-400' },
    { name: 'Italian', level: 'Fluent', color: 'bg-emerald-400' },
    { name: 'Catalan', level: 'Fluent', color: 'bg-yellow-400' },
    { name: 'French', level: 'Basic', color: 'bg-indigo-400' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {languages.map((lang, index) => (
        <div
          key={lang.name}
          className={`group flex flex-col items-center p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
            isDarkMode ? 'glass hover:bg-white/5' : 'glass-light hover:bg-white/90'
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative w-20 h-20 flex items-center justify-center mb-4">
            {/* Pulsing ring */}
            <div className={`absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity animate-ping ${lang.color}`}></div>
            {/* Inner circle */}
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-navy font-bold text-xl z-10 ${lang.color}`}>
              {lang.name.charAt(0)}
            </div>
          </div>
          <h3 className={`font-heading font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-navy'}`}>
            {lang.name}
          </h3>
          <span className="text-xs font-mono font-medium tracking-widest text-cyber uppercase">
            {lang.level}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Languages;
