import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-primary border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-accent/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <GraduationCap size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-lg text-accent mb-4">{edu.degree}</p>
                  
                  {edu.coursework && (
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                      <div className="flex items-center gap-2 mb-2 text-slate-300 font-medium">
                        <BookOpen size={16} />
                        <span>Relevant Coursework</span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {edu.coursework}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;