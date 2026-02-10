
import React from 'react';

interface TechnicalArsenalProps {
  isDarkMode: boolean;
}

const TechnicalArsenal: React.FC<TechnicalArsenalProps> = ({ isDarkMode }) => {
  const categories = [
    {
      title: "Core Financial Analysis",
      skills: ["Bloomberg Terminal", "Advanced Excel", "Financial Modeling", "Portfolio Analysis"],
      color: "text-cyber",
      bg: "bg-cyber/10"
    },
    {
      title: "Advanced Data Analytics",
      skills: ["Python", "SAP", "Predictive Analytics", "Tableau / BI", "Data Cleaning"],
      color: "text-violet-500",
      bg: "bg-violet-500/10"
    },
    {
      title: "Strategic Intelligence",
      skills: ["Google Analytics", "Market Research", "ESG Classification", "Econometrics"],
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    }
  ];

  return (
    <div className="space-y-12">
      <h2 className={`text-3xl md:text-4xl font-heading font-extrabold text-center ${isDarkMode ? 'text-white' : 'text-navy'}`}>
        Technical <span className="text-cyber">Arsenal</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            className={`p-8 rounded-3xl border transition-all hover:-translate-y-2 ${
              isDarkMode ? 'bg-navy-light/30 border-white/5' : 'bg-white shadow-xl border-slate-100'
            }`}
          >
            <h3 className={`text-xl font-heading font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-navy'}`}>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-mono font-medium ${cat.bg} ${cat.color} border border-transparent hover:border-current transition-all cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Honor Society Highlight */}
      <div className={`mt-12 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left ${isDarkMode ? 'bg-cyber/5 border border-cyber/20' : 'bg-cyber/10 border border-cyber/30'}`}>
        <div className="w-12 h-12 bg-cyber text-navy rounded-full flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <div>
          <h4 className={`font-heading font-bold ${isDarkMode ? 'text-white' : 'text-navy'}`}>Beta Gamma Sigma Business Honor Society</h4>
          <p className="text-sm font-mono opacity-80">Member (Top 10% of the degree cohort)</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArsenal;
