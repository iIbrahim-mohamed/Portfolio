import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Send, Shield, Code, Cpu, Terminal, Eye, Layers, Lock, Sparkles } from 'lucide-react';
import profile from '../data/profile';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Animated typing effect logic
  useEffect(() => {
    const currentTitle = profile.heroTitles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % profile.heroTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  // Canvas background subtle particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(6, 182, 212, ' : 'rgba(59, 130, 246, ',
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle cyber grid pattern
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.4)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render & update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity + ')';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />

      {/* Futuristic Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span>Available for Full-Stack, Mobile & Security Projects</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Ibrahim Mohamed
              </span>
            </h1>

            {/* Animated Typing Title */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-slate-200">
                {displayText}
                <span className="animate-pulse text-cyan-400 font-extrabold ml-1">|</span>
              </span>
            </div>

            {/* Main Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {profile.heroDescription}
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {['Flutter', 'Dart', 'React.js', 'Python', 'YOLOv8', 'Penetration Testing', 'IoT'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 border border-slate-700/80 hover:border-cyan-500/60 hover:bg-slate-800 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Visual Profile Orbit Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              {/* Outer Rotating Futuristic Tech Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_25s_linear_infinite]"></div>
              <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-[spin_35s_linear_infinite_reverse]"></div>
              
              {/* Glowing Background Glow Circle */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-indigo-600/20 blur-xl"></div>

              {/* Profile Avatar Frame Container */}
              <div className="relative w-full h-full rounded-full p-3 bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.3)] backdrop-blur-md overflow-hidden">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Orbit Tech Badges */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-400 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                <span>Flutter &amp; React</span>
              </div>

              <div className="absolute bottom-4 -left-4 px-3 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/50 text-blue-400 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Cybersecurity</span>
              </div>

              <div className="absolute top-1/3 -right-6 px-3 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/50 text-purple-400 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Eye className="w-3.5 h-3.5 text-purple-400" />
                <span>AI &amp; YOLOv8</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
