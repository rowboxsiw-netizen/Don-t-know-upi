
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/5 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of high-impact platforms I've built from the ground up." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card h-[450px]"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  <a href="#" className="p-2 text-white hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
