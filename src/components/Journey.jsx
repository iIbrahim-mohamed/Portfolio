import React from 'react';
import SectionTitle from './SectionTitle';
import { educationJourney, trainingCourses } from '../data/journey';
import {
  GraduationCap,
  Network,
  Cloud,
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Cpu,
  Eye,
  Layers,
  Binary,
  CheckCircle2,
  Award
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  Network,
  Cloud,
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Cpu,
  Eye,
  Layers,
  Binary
};

const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Learning Path & Growth"
          title="Education & Journey"
          description="A timeline of my academic background, technical focus areas, and continuous learning path."
        />

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto mb-24">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 -translate-x-1/2 opacity-40"></div>

          <div className="space-y-12">
            {educationJourney.map((item, index) => {
              const IconComponent = iconMap[item.icon] || GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] z-10">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                    <div className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                      <span className="inline-block px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-bold mb-3 border border-cyan-500/30">
                        {item.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DEDICATED TRAINING & COURSES SECTION */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-blue-400" />
              Specialized Modules &amp; Workshops
            </div>
            <h3 className="text-3xl font-extrabold text-white">Training &amp; Courses</h3>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl mx-auto">
              Hands-on practical training programs in penetration testing, IoT architecture, image processing, and discrete math.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingCourses.map((course) => {
              const IconComponent = iconMap[course.icon] || Award;
              return (
                <div
                  key={course.id}
                  className="group p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                          {course.organization}
                        </span>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {course.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Topics badges */}
                    {course.topics && (
                      <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                          Key Topics Covered:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                              <span>{topic}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
