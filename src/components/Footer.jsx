import React from 'react';
import { MessageSquare, Mail, ArrowUp, Shield } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import profile from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-black">
                <Shield className="w-4 h-4 text-slate-950 fill-slate-950" />
              </div>
              <span className="text-xl font-extrabold text-white">{profile.name}</span>
            </div>
            <p className="text-xs font-mono text-cyan-400">{profile.title} • {profile.secondaryTitle}</p>
            <p className="text-slate-400 text-xs max-w-sm italic">
              "Building modern, secure and scalable digital solutions."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all duration-200"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs font-mono text-slate-500">
          <p>© 2026 {profile.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
