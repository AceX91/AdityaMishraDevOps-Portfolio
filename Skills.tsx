import React from 'react';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Technical Arsenal
            </h3>
            <div className="space-y-8">
              {SKILLS.map((category, index) => (
                <motion.div 
                  key={category.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-slate-200 mb-3">{category.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 hover:border-accent/50 transition-colors">
                        <CheckCircle size={14} className="text-accent" />
                        <span className="text-sm text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Certifications & Awards
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-slate-200 font-medium">{cert.name}</p>
                    {cert.issuer && <p className="text-sm text-slate-400 mt-1">{cert.issuer}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;