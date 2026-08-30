import React from 'react';
import SectionTitle from './SectionTitle';
import ContactForm from './ContactForm';
import profile from '../data/profile';
import { Mail, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const contactCards = [
  {
    id: 'email',
    title: 'Email',
    value: profile.email,
    link: `mailto:${profile.email}`,
    buttonText: 'Send Email',
    icon: Mail,
    color: 'text-cyan-400',
    border: 'hover:border-cyan-500/50'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    value: profile.whatsapp,
    link: profile.whatsappUrl,
    buttonText: 'Chat on WhatsApp',
    icon: MessageSquare,
    color: 'text-emerald-400',
    border: 'hover:border-emerald-500/50'
  },
  {
    id: 'github',
    title: 'GitHub',
    value: profile.githubDisplay,
    link: profile.github,
    buttonText: 'View GitHub',
    icon: Github,
    color: 'text-purple-400',
    border: 'hover:border-purple-500/50'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    value: profile.linkedinDisplay,
    link: profile.linkedin,
    buttonText: 'Connect on LinkedIn',
    icon: Linkedin,
    color: 'text-blue-400',
    border: 'hover:border-blue-500/50'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Build Something Great Together"
          description="Have an idea, project, or business solution in mind? Let's turn it into a modern, secure, and reliable digital product."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 4 Contact Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className={`group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md transition-all duration-300 shadow-xl ${card.border} hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        {card.title}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {card.value}
                      </h4>
                    </div>
                  </div>

                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all duration-200"
                  >
                    <span>{card.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
