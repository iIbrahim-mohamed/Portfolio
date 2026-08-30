import React from 'react';
import SectionTitle from './SectionTitle';
import { skillCategories } from '../data/skills';
import {
  Code2,
  Smartphone,
  Layout,
  Server,
  Database,
  ShieldAlert,
  Brain,
  Cpu,
  Wrench,
  Check
} from 'lucide-react';

const iconMap = {
  Code2,
  Smartphone,
  Layout,
  Server,
  Database,
  ShieldAlert,
  Brain,
  Cpu,
  Wrench
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950/90 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Technical Proficiency"
          title="Technical Skills"
          description="Explore my technical stack across software development, mobile apps, database design, cybersecurity tools, and AI vision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <div
                key={cat.id}
                className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800/90 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all duration-200"
                      >
                        <Check className="w-3 h-3 text-cyan-400 opacity-75" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{cat.skills.length} Technologies</span>
                  <span className="text-cyan-500 font-semibold group-hover:translate-x-1 transition-transform">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
