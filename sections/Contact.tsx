
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { SOCIAL_LINKS } from '../constants';
import { Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have an idea or a project? Let's discuss how we can bring it to life with modern technology." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-display font-bold">Let's build something <span className="gradient-text">exceptional.</span></h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              Whether you're looking for a consultation, a full-time partner, or just want to talk about the latest tech trends, my inbox is always open.
            </p>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-card group transition-all hover:bg-primary/5 border border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm">
                  <img src={SOCIAL_LINKS.gmailIcon} alt="Email" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email Me</p>
                  <p className="font-medium text-slate-800 dark:text-slate-200">{SOCIAL_LINKS.email}</p>
                </div>
              </a>

              <a 
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card group transition-all hover:bg-green-500/5 border border-transparent hover:border-green-500/20"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm">
                  <img src={SOCIAL_LINKS.whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="font-medium text-slate-800 dark:text-slate-200">+977-9826048177</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Current Location</p>
                  <p className="font-medium text-slate-800 dark:text-slate-200">Kathmandu, Nepal (Open to Global Remote)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass-card border border-white/10 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">Subject</label>
              <input type="text" placeholder="Project Inquiry" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">Message</label>
              <textarea placeholder="Tell me about your project..." rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
