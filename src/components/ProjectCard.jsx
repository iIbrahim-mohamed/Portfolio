import React from 'react';
import { Eye, ExternalLink, CheckCircle2, Code2, FolderGit2 } from 'lucide-react';
import { Github } from './SocialIcons';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="group rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] flex flex-col justify-between">
      {/* Sleek Tech Header (No Project Image) */}
      <div className="relative p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 text-[10px] font-mono border border-cyan-500/30 font-bold block mb-1">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">ID #{project.id} • {project.filterCategory}</span>
          </div>
        </div>

        <button
          onClick={() => onViewDetails(project)}
          className="p-2 rounded-lg bg-slate-800/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all text-xs font-bold flex items-center gap-1.5"
          title="View Details"
        >
          <Eye className="w-4 h-4" />
          <span className="hidden sm:inline">Details</span>
        </button>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Feature Highlights (Up to 3) */}
          <div className="space-y-1.5 mb-5">
            {project.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950 text-cyan-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button
            onClick={() => onViewDetails(project)}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
          >
            <Eye className="w-4 h-4" />
            <span>View Full Details</span>
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-900"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
