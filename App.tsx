import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
 

const App: React.FC = () => {
  

  return (
    <div className="relative bg-primary min-h-screen text-slate-200 font-sans selection:bg-accent selection:text-slate-900">
      {/* Animated background layers (clouds + waves) */}
      <div className="animated-bg">
        <svg className="bg-clouds" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#0ea5a9" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <g fill="url(#g1)">
            <ellipse cx="200" cy="180" rx="360" ry="120" />
            <ellipse cx="720" cy="120" rx="420" ry="140" />
            <ellipse cx="1040" cy="240" rx="300" ry="100" />
          </g>
        </svg>

        <svg className="bg-waves" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0f172a" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,144C672,128,768,128,864,122.7C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" opacity="0.9"/>
          <path fill="#111827" d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,234.7C672,224,768,224,864,213.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" opacity="0.6"/>
        </svg>
      </div>

      {/* Content (bring forward) */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Education />
          <Skills />
        </main>

        <Contact />
      </div>
    </div>
  );
};

export default App;