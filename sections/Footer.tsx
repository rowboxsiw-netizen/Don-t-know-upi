
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-2xl font-display font-black gradient-text">BHARAT SINGH</span>
          <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-widest">Architecting Digital Futures © 2026</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="https://wa.me/9779826048177?text=Hello%20Bharat" target="_blank" rel="noopener" className="hover:text-primary transition-colors">WhatsApp</a>
        </div>
        
        <div className="text-xs text-slate-400">
          Built with React 18, TypeScript & Framer Motion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
