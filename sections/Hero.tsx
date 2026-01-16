
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card text-xs md:text-sm font-medium text-primary tracking-widest uppercase">
            Available for New Projects 🚀
          </span>
          
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tight mb-6">
            Hi, I'm <span className="gradient-text">Bharat Singh</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            I architect <span className="text-slate-900 dark:text-white font-semibold">robust digital experiences</span> using 
            advanced web technologies. Senior Engineer focused on pushing the boundaries of 
            <span className="text-primary font-semibold"> modern UX/UI</span> and performance.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card rounded-full font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-200/30 transition-all border border-slate-300/20"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce p-2 rounded-full border border-slate-500/20">
          <ArrowDown size={24} className="text-slate-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
