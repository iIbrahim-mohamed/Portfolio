import React from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Cpu, Code2, Layers, AlertTriangle, Trophy } from 'lucide-react';
import { Github } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.25)] my-8">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between sticky top-0 z-20">
          <div>
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
              {project.category}
            </span>
            <h3 className="text-2xl font-black text-white mt-2">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Project Details Banner */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
            <span>Category: <strong className="text-cyan-400">{project.category}</strong></span>
            <span>Filter: <strong className="text-slate-200">{project.filterCategory}</strong></span>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider font-bold mb-2">
              Project Overview
            </h4>
            <p className="text-slate-200 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
              <h5 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                The Problem
              </h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
              <h5 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                The Solution
              </h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div>
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider font-bold mb-4">
              Key Features &amp; Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-950/90 border border-slate-800/80 flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Badges */}
          <div>
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider font-bold mb-3">
              Technologies &amp; Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-950/50 text-cyan-300 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture, Challenges, Results */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            {project.architecture && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h5 className="text-xs font-mono text-blue-400 uppercase font-bold mb-1 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  System Architecture
                </h5>
                <p className="text-slate-300 text-xs leading-relaxed">{project.architecture}</p>
              </div>
            )}

            {project.challenges && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h5 className="text-xs font-mono text-amber-400 uppercase font-bold mb-1 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  Technical Challenges
                </h5>
                <p className="text-slate-300 text-xs leading-relaxed">{project.challenges}</p>
              </div>
            )}

            {project.results && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h5 className="text-xs font-mono text-purple-400 uppercase font-bold mb-1 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-purple-400" />
                  Impact &amp; Results
                </h5>
                <p className="text-slate-300 text-xs leading-relaxed">{project.results}</p>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center gap-2 transition-transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors ml-auto"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
