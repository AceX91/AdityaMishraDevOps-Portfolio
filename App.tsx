import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import DeployModal from './components/DeployModal';

const App: React.FC = () => {
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  return (
    <div className="bg-primary min-h-screen text-slate-200 font-sans selection:bg-accent selection:text-slate-900">
      <Navbar onOpenDeploy={() => setIsDeployModalOpen(true)} />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>

      <Contact />
      
      <DeployModal 
        isOpen={isDeployModalOpen} 
        onClose={() => setIsDeployModalOpen(false)} 
      />
    </div>
  );
};

export default App;