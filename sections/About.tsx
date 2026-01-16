
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Combining technical expertise with creative vision to build the web of the future." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-8 rounded-3xl glass-card relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-9xl font-display font-bold">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">👨‍💻</span>
              The Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              With over 8 years of experience in the software industry, I've transformed from a curious tinkerer to a Senior Full-Stack Engineer. My passion lies in creating seamless, accessible, and high-performance applications that users love.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in distributed systems and micro-frontends, ensuring that large-scale applications remain maintainable and blazing fast. I believe that 2026 is the year of hyper-personalized web experiences.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Vital Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Projects Done</span>
                  <span className="font-bold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Cups of Chai</span>
                  <span className="font-bold">∞</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Exp. Years</span>
                  <span className="font-bold">8+</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/30">
              Senior Level Expert
            </div>
          </motion.div>

          {/* Core Philosophy */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl glass-card md:col-span-3 grid md:grid-cols-4 gap-8"
          >
            {[
              { title: "Performance First", desc: "Every millisecond counts. Optimization is not an afterthought.", icon: "⚡" },
              { title: "User Centric", desc: "Code is for people. Empathy is my most used development tool.", icon: "❤️" },
              { title: "Clean Code", desc: "Maintainable, scalable, and documented architectures.", icon: "🛠️" },
              { title: "Continuous Learning", desc: "The tech landscape evolves daily; so do I.", icon: "📚" }
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
