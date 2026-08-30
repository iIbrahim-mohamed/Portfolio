import React from 'react';
import SectionTitle from './SectionTitle';
import profile from '../data/profile';
import { Globe, Smartphone, Server, ShieldCheck, Eye, Cpu, LayoutDashboard, Share2, CheckCircle2 } from 'lucide-react';

const whatIDoItems = [
  {
    title: 'Web Development',
    description: 'Build modern, responsive and interactive web applications.',
    icon: Globe,
    color: 'text-cyan-400',
    border: 'hover:border-cyan-500/50'
  },
  {
    title: 'Mobile Development',
    description: 'Develop cross-platform applications using Flutter and Dart.',
    icon: Smartphone,
    color: 'text-teal-400',
    border: 'hover:border-teal-500/50'
  },
  {
    title: 'Backend Development',
    description: 'Build APIs, authentication systems, backend services and database-driven applications.',
    icon: Server,
    color: 'text-blue-400',
    border: 'hover:border-blue-500/50'
  },
  {
    title: 'Cybersecurity',
    description: 'Perform security testing, vulnerability assessment and application security work.',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    border: 'hover:border-emerald-500/50'
  },
  {
    title: 'AI & Computer Vision',
    description: 'Develop AI-powered detection and inspection systems.',
    icon: Eye,
    color: 'text-purple-400',
    border: 'hover:border-purple-500/50'
  },
  {
    title: 'IoT',
    description: 'Build connected systems involving sensors, monitoring and real-time data.',
    icon: Cpu,
    color: 'text-amber-400',
    border: 'hover:border-amber-500/50'
  },
  {
    title: 'Dashboards',
    description: 'Create modern dashboards and management systems.',
    icon: LayoutDashboard,
    color: 'text-indigo-400',
    border: 'hover:border-indigo-500/50'
  },
  {
    title: 'API Integration',
    description: 'Integrate REST APIs and external services into web and mobile applications.',
    icon: Share2,
    color: 'text-pink-400',
    border: 'hover:border-pink-500/50'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Discover My Background"
          title="About Me"
          description="Combining modern software engineering with strong security practices to deliver reliable digital solutions."
        />

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-base leading-relaxed bg-slate-900/60 p-8 rounded-2xl border border-slate-800 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-6 rounded bg-cyan-500"></span>
              Engineering Philosophy &amp; Vision
            </h3>
            
            <p>
              I am <strong className="text-white">Ibrahim Mohamed</strong>, a Full-Stack and Mobile Developer passionate about building modern, reliable, and high-performance digital solutions.
            </p>
            <p>
              My main focus is developing practical applications that combine clean user experiences, strong backend architecture, secure systems, and scalable technologies.
            </p>
            <p>
              I specialize in <span className="text-cyan-300 font-medium">Flutter and Dart</span> for cross-platform mobile and web applications, while also having experience with backend development, databases, APIs, web technologies, AI, IoT, and cybersecurity.
            </p>
            <p>
              Alongside software development, I am expanding my expertise in <span className="text-emerald-300 font-medium">cybersecurity and penetration testing</span>, with a focus on application security, web security, vulnerability assessment, security testing, and security hardening.
            </p>
            <p className="text-slate-400 italic pt-2">
              "I enjoy transforming ideas into functional products and continuously learning new technologies to improve the quality, security, and performance of my projects."
            </p>
          </div>

          {/* Quick Overview Feature Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Primary Stack', val: 'Flutter, Dart, React.js' },
              { label: 'Backend & Data', val: 'Python, Flask, REST APIs, MySQL' },
              { label: 'Security Focus', val: 'Pentesting, OWASP, AppSec' },
              { label: 'Advanced Tech', val: 'YOLOv8, OpenCV, IoT Systems' }
            ].map((box, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 transition-colors shadow-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">{box.label}</span>
                <span className="text-sm font-bold text-white mt-1 block">{box.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT I DO SECTION */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">What I Do</h3>
            <p className="text-slate-400 text-sm mt-2">Comprehensive software development &amp; technical services</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg ${item.border} hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
