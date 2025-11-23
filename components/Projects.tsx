import React from 'react';
import { PROJECTS } from '../constants';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all border border-slate-700 hover:border-accent"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Folder size={24} />
                </div>
                <div className="flex gap-4">
                  {/* Assuming we might have links in future, keeping UI ready */}
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </button>
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4 font-mono">{project.subtitle} | {project.period}</p>

              <ul className="space-y-2 mb-6 text-slate-300">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1 h-1 bg-accent rounded-full flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-700/50 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;