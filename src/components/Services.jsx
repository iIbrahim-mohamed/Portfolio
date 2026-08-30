import React from 'react';
import SectionTitle from './SectionTitle';
import { services, workProcess } from '../data/services';
import {
  Globe,
  Smartphone,
  Server,
  ShoppingBag,
  Brain,
  Cpu,
  ShieldCheck,
  LayoutDashboard,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  Server,
  ShoppingBag,
  Brain,
  Cpu,
  ShieldCheck,
  LayoutDashboard
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Solutions & Capabilities"
          title="What I Can Build"
          description="End-to-end technical capabilities tailored for startups, enterprise platforms, and custom digital products."
        />

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((item) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <div
                key={item.id}
                className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* WORK PROCESS SECTION */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
              Methodology
            </span>
            <h3 className="text-3xl font-extrabold text-white mt-2">Work Process</h3>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              A structured 6-step engineering process for consistent quality, reliability, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProcess.map((proc) => (
              <div
                key={proc.step}
                className="group p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-lg relative overflow-hidden"
              >
                {/* Step Number Background Watermark */}
                <span className="absolute -top-3 -right-2 font-mono font-black text-6xl text-slate-800/30 group-hover:text-cyan-500/10 transition-colors pointer-events-none">
                  {proc.step}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 font-mono font-black text-sm flex items-center justify-center mb-4 border border-cyan-500/30">
                    {proc.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {proc.title}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
