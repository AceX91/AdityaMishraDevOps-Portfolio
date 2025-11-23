import React from 'react';
import { X, Github, Cloud, Upload, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeployModal: React.FC<DeployModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-lg p-6 overflow-y-auto max-h-[90vh]"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold text-white mb-2">How to Host This Portfolio</h2>
          <p className="text-slate-400 mb-6">I've added the configuration files so you can host this for free.</p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-accent">
                <Upload size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">1. Download Code</h3>
                <p className="text-sm text-slate-400">
                  Save all the files from this editor into a folder on your computer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-accent">
                <Github size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">2. Push to GitHub</h3>
                <div className="text-sm text-slate-400 space-y-2 mt-2">
                  <p>Run these commands in your folder:</p>
                  <pre className="bg-slate-900 p-3 rounded-lg font-mono text-xs overflow-x-auto text-slate-300">
git init
git add .
git commit -m "Initial commit"
# Create a repo on GitHub, then:
git remote add origin YOUR_REPO_URL
git push -u origin main</pre>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-accent">
                <Cloud size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">3. Deploy (Free)</h3>
                <p className="text-sm text-slate-400 mb-2">
                  Go to <a href="https://vercel.com/new" target="_blank" className="text-accent hover:underline">Vercel</a> or <a href="https://app.netlify.com/start" target="_blank" className="text-accent hover:underline">Netlify</a> and import your GitHub repository.
                </p>
                <div className="bg-slate-900/50 p-2 rounded text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Build Command:</span> npm run build<br/>
                  <span className="font-semibold text-slate-300">Output Directory:</span> dist
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DeployModal;