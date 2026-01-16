
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Technical Arsenal" 
          subtitle="My toolbox is packed with modern technologies that empower me to build exceptional software." 
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {SKILLS.map((skill, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-6 rounded-2xl glass-card flex flex-col items-center justify-center gap-3 group transition-all hover:border-primary/50"
            >
              <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Curve Visualizer (Decorative) */}
        <div className="mt-16 p-8 rounded-3xl glass-card overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-xl font-bold mb-2">Architecting the Future</h3>
              <p className="text-slate-500 text-sm">Deeply invested in WebAssembly, AI-integrated interfaces, and decentralization.</p>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(i => (
                <div 
                  key={i} 
                  className={`w-3 rounded-full bg-primary/20 flex items-end overflow-hidden`}
                  style={{ height: `${20 + (i * 10)}px` }}
                >
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-full bg-gradient-to-t from-primary to-accent"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Decorative Background lines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
