import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects, projectCategories } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.filterCategory === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Featured Portfolio Work"
          title="Projects & Showcase"
          description="Explore real engineering projects spanning mobile applications, web platforms, AI visual inspection systems, IoT solutions, and cybersecurity audits."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
