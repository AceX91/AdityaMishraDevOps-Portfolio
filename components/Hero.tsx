import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-medium mb-4 tracking-wide">HELLO, I'M</p>
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-slate-400 mb-8 font-light">
              Software Engineer specializing in <br/>
              <span className="text-slate-200 font-semibold">Cloud, DevOps & Systems</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience"
                className="group bg-accent hover:bg-accentHover text-slate-900 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
              >
                View Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-accent transition-colors">
                <Mail size={24} />
              </a>
              <div className="h-px w-20 bg-slate-700"></div>
              <span className="text-slate-500 text-sm font-mono">{PERSONAL_INFO.location}</span>
            </div>
          </motion.div>

          {/* Abstract Visual Representation of Code/Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="font-mono text-sm text-slate-300 overflow-x-auto">
                <code>
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">Engineer</span> <span className="text-purple-400">extends</span> <span className="text-yellow-300">Human</span> {'{'}
                  {'\n'}  <span className="text-blue-400">constructor</span>() {'{'}
                  {'\n'}    <span className="text-red-400">this</span>.skills = [<span className="text-green-400">'AWS'</span>, <span className="text-green-400">'Linux'</span>, <span className="text-green-400">'C++'</span>];
                  {'\n'}    <span className="text-red-400">this</span>.passion = <span className="text-green-400">'Optimization'</span>;
                  {'\n'}  {'}'}
                  {'\n'}
                  {'\n'}  <span className="text-blue-400">optimizeSystem</span>() {'{'}
                  {'\n'}    <span className="text-purple-400">return</span> <span className="text-green-400">"Efficiency increased by 67%"</span>;
                  {'\n'}  {'}'}
                  {'\n'}{'}'}
                </code>
              </pre>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;