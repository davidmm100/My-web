
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "david.mitrani.m@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="mt-32 py-20 px-6 border-t bg-navy border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-white">
          Let's <span className="text-cyber">Collaborate</span>.
        </h2>
        <p className="max-w-xl text-lg mb-12 text-slate-400">
          Looking for a global strategist who can bridge the gap between financial theory and data-driven reality? Let's connect and discuss how I can drive impact for your team.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          <a
            href="https://linkedin.com/in/david-mitrani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all group bg-white/5 hover:bg-white/10 text-white"
          >
            <span className="font-bold group-hover:text-cyber transition-colors">LinkedIn</span>
          </a>
          
          <button
            onClick={copyEmail}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all relative group bg-white/5 hover:bg-white/10 text-white"
          >
            <span className="font-bold group-hover:text-cyber transition-colors">{copied ? "Copied!" : "Copy Email"}</span>
            {copied && (
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-cyber text-navy text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap z-50">
                Email Copied to Clipboard
              </span>
            )}
          </button>
        </div>

        <div className="space-y-4">
          <div className="text-xs font-mono opacity-40 uppercase tracking-widest text-slate-400">
            Handcrafted with precision • {new Date().getFullYear()}
          </div>
          <p className="text-sm font-light italic opacity-60 text-slate-400">
            "Analyzed 300+ proposals, 6 languages, 1 vision: Data-Driven Finance."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
