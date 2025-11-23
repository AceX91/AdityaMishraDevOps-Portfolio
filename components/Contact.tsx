import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!message.trim()) {
      setStatus('error');
      return;
    }

    const to = PERSONAL_INFO.email || '';
    const subject = encodeURIComponent(`Website message from ${name || email || 'visitor'}`);
    const body = encodeURIComponent(`${message}\n\n---\nFrom: ${name || 'Anonymous'} ${email ? `<${email}>` : ''}`);

    // Open the user's mail client with prefilled subject/body as a fallback
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setStatus('sent');
    // show toast notification
    setShowToast(true);
    // auto-hide after 3.5s
    setTimeout(() => setShowToast(false), 3500);
    // Optionally clear form
    setName('');
    setEmail('');
    setMessage('');
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
              <a
                href={`https://www.google.com/maps/search/?api=1&query=22.5726,88.3639`}
                onClick={(e) => {
                  e.preventDefault();
                  const lat = 22.5726;
                  const lng = 88.3639;
                  const ua = navigator.userAgent || navigator.vendor || '';
                  const isiOS = /iPad|iPhone|iPod/.test(ua);
                  // On iOS prefer Apple Maps universal link; otherwise open Google Maps in new tab
                  try {
                    if (isiOS) {
                      window.location.href = `https://maps.apple.com/?q=${lat},${lng}`;
                      return;
                    }
                    // Default: open Google Maps web in new tab/window
                    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank', 'noopener,noreferrer');
                  } catch (err) {
                    // fallback to the href if window.open is blocked
                    window.location.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
                  }
                }}
                className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span>{PERSONAL_INFO.location}</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent" placeholder="Hello..." />
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accentHover text-slate-900 font-bold py-3 rounded-lg transition-colors">
                Send Message
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-400 mt-2">Please enter a message before sending.</p>
              )}
              {status === 'sent' && (
                <p className="text-sm text-green-400 mt-2">Opened mail client. Complete the send in your email app.</p>
              )}
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
      {/* Toast container */}
      {showToast && (
        <div className="toast-container">
          <div className="toast">Message delivered — check your mail client to send.</div>
        </div>
      )}
    </footer>
  );
};

export default Contact;