import React from 'react';
import SectionTitle from './SectionTitle';
import { ShieldCheck, Lock, Terminal, ShieldAlert, Cpu, Network, CheckCircle2, AlertOctagon } from 'lucide-react';

const securityCards = [
  {
    title: 'Penetration Testing',
    description: 'Security testing and vulnerability assessment following authorized ethical hacker methodologies.',
    icon: ShieldAlert,
    color: 'text-emerald-400',
    border: 'hover:border-emerald-500/50'
  },
  {
    title: 'Application Security',
    description: 'Building and testing applications with security in mind, implementing input validation, authentication, and encryption.',
    icon: Lock,
    color: 'text-cyan-400',
    border: 'hover:border-cyan-500/50'
  },
  {
    title: 'Web Security',
    description: 'Understanding common web application security vulnerabilities including OWASP Top 10 risks.',
    icon: Terminal,
    color: 'text-blue-400',
    border: 'hover:border-blue-500/50'
  },
  {
    title: 'Vulnerability Assessment',
    description: 'Identifying, scanning, and analyzing potential vulnerabilities across applications and server environments.',
    icon: AlertOctagon,
    color: 'text-rose-400',
    border: 'hover:border-rose-500/50'
  },
  {
    title: 'Security Hardening',
    description: 'Improving system and application security through policy enforcement, firewall rules, and headers.',
    icon: Cpu,
    color: 'text-purple-400',
    border: 'hover:border-purple-500/50'
  },
  {
    title: 'Network Security',
    description: 'Networking and security fundamentals including port scanning, packet analysis, and traffic inspection.',
    icon: Network,
    color: 'text-amber-400',
    border: 'hover:border-amber-500/50'
  }
];

const securityTools = ['Nmap', 'WPScan', 'OWASP ZAP', 'Kali Linux', 'Linux', 'Metasploit Basics', 'Burp Suite Proxy', 'Wireshark'];

const Cybersecurity = () => {
  return (
    <section id="cybersecurity" className="py-24 bg-slate-950/95 relative overflow-hidden">
      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Glowing Hex Orb */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Offensive & Defensive Security"
          title="Cybersecurity & Security"
          description="Alongside software development, I am developing practical cybersecurity skills focused on penetration testing, application security, web security, vulnerability assessment, and security hardening."
        />

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md transition-all duration-300 shadow-xl ${card.border} hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]`}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* SECURITY TOOLKIT BAR */}
        <div className="p-8 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Security Toolkit &amp; Environment</h4>
                <p className="text-slate-400 text-xs">Primary security auditing, scanning, and penetration testing tools</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {securityTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-950 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cybersecurity;
