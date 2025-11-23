import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  onOpenDeploy: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDeploy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-slate-100 tracking-tighter">
              AM<span className="text-accent">.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onOpenDeploy}
              className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium transition-all"
            >
              <Code size={16} />
              <span>Host This</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary absolute w-full border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
              >
                {link.name}
              </a>
            ))}
            <button
               onClick={() => {
                 setIsOpen(false);
                 onOpenDeploy();
               }}
               className="w-full text-left flex items-center gap-2 px-3 py-2 text-accent font-medium"
            >
              <Code size={16} />
              Host This Portfolio
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;