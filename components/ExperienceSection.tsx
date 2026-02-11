
import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center text-white">
        Strategic <span className="text-violet-500">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 p-8 rounded-3xl glass">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <a 
                href="https://diverinvest.es/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-heading font-bold text-cyber hover:underline decoration-cyber/30 underline-offset-4 transition-all"
              >
                Diverinvest Corporate Family Office
              </a>
              <p className="text-lg font-medium text-slate-300">Financial Assets Intern</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <span className="text-sm font-mono opacity-60">Summers 2022 & 2023 | Barcelona</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8 text-slate-400">
            {[
              "Analyzed 300+ investment proposals for high-net-worth portfolios.",
              "Utilized Bloomberg Excel formulas to update daily prices and financial ratios for bonds and funds.",
              "Consolidated monthly portfolio data across 5+ banking institutions for customized client reporting.",
              "Enhanced the portfolio tracking database by optimizing asset records and improving search efficiency by 35%.",
              "Conducted ESG classification and analyzed prospectuses/KIIDs for sustainable investing strategies."
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-cyber mr-3 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 p-8 rounded-3xl flex flex-col items-center justify-center text-center group bg-navy-light/50 border border-white/5 hover:border-cyber/50 transition-all">
          <div className="text-6xl font-heading font-extrabold text-cyber mb-2 group-hover:scale-110 transition-transform">35%</div>
          <p className="text-sm font-mono uppercase tracking-widest text-slate-400">Efficiency Increase</p>
          <p className="mt-4 text-sm opacity-80">Optimized asset records and improved search architecture for the tracking database.</p>
        </div>

        <div className="md:col-span-6 p-8 rounded-3xl glass">
          <h3 className="text-xl font-heading font-bold mb-6 text-white">Leadership & Academic Involvement</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-cyber/10 text-cyber rounded-lg flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Class Delegate, IQS</h4>
                <p className="text-sm opacity-70">Represented 30+ students; coordinated academic concerns with faculty.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-violet/10 text-violet-500 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Peer Tutor, IQS</h4>
                <p className="text-sm opacity-70">Tutored classes in econometrics and statistics for 50%+ of the cohort.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-400/10 text-blue-400 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Event Organizer, Olami FAU</h4>
                <p className="text-sm opacity-70">Planned and organized 40+ community events; supported member recruitment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 p-8 rounded-3xl flex flex-col items-center justify-center text-center group bg-violet/10 border border-violet-500/20 hover:border-violet-500/50 transition-all">
          <div className="text-6xl font-heading font-extrabold text-violet-500 mb-2 group-hover:scale-110 transition-transform">300+</div>
          <p className="text-sm font-mono uppercase tracking-widest text-slate-400">Investment Proposals</p>
          <p className="mt-4 text-sm opacity-80">Rigorously analyzed and vetted high-level financial proposals for diverse asset classes.</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
