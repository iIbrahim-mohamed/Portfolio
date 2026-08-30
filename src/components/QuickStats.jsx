import React from 'react';
import { Layout, Smartphone, ShieldCheck, Eye, Cpu } from 'lucide-react';

const statsCategories = [
  {
    id: 'fullstack',
    title: 'Full-Stack',
    subtitle: 'Web & Backend Development',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'group-hover:border-cyan-500/60',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]'
  },
  {
    id: 'mobile',
    title: 'Mobile',
    subtitle: 'Flutter & Dart',
    icon: Smartphone,
    color: 'from-cyan-400 to-teal-400',
    borderColor: 'group-hover:border-teal-500/60',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(20,184,166,0.25)]'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Penetration Testing & App Security',
    icon: ShieldCheck,
    color: 'from-emerald-400 to-cyan-500',
    borderColor: 'group-hover:border-emerald-500/60',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]'
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Computer Vision & YOLOv8',
    icon: Eye,
    color: 'from-purple-400 to-indigo-500',
    borderColor: 'group-hover:border-purple-500/60',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]'
  },
  {
    id: 'iot',
    title: 'IoT',
    subtitle: 'Connected Systems & Monitoring',
    icon: Cpu,
    color: 'from-amber-400 to-orange-500',
    borderColor: 'group-hover:border-amber-500/60',
    glowColor: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]'
  }
];

const QuickStats = () => {
  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statsCategories.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1 ${item.borderColor} ${item.glowColor}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium leading-tight mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickStats;
