import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              I am currently open to new opportunities in Cloud Engineering, DevOps, and Systems Programming. 
              Feel free to reach out if you have a question or just want to say hi!
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent" placeholder="Hello..." />
              </div>
              <button className="w-full bg-accent hover:bg-accentHover text-slate-900 font-bold py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;