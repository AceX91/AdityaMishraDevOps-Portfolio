import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-700 top-0"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right flex-1">
                  <div className={`bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-accent/50 transition-colors shadow-lg ${index % 2 === 0 ? 'md:text-left md:ml-12 md:mr-0' : 'md:text-right md:mr-12 md:ml-0'}`}>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-accent font-medium mb-3">{exp.company}</h4>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-slate-400 mb-4 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>

                    <ul className={`space-y-2 text-slate-300 text-sm list-disc list-inside ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left rtl:list-inside'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      {exp.techStack?.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-900 text-xs text-slate-300 rounded border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-accent z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Empty Side for alignment */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;