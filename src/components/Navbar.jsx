import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Shield, Terminal } from 'lucide-react';
import profile from '../data/profile';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Cybersecurity', href: '#cybersecurity' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-2.5 text-xl font-bold text-white tracking-tight"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform duration-300">
            <Shield className="w-5 h-5 text-slate-950 fill-slate-950" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-extrabold">
            {profile.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CV Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.cv}
            download
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 p-5 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]"></span>}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-800/80 mt-2">
              <a
                href={profile.cv}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
