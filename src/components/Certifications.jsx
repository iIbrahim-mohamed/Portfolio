import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { certifications, certificationCategories } from '../data/certifications';
import { Award, ExternalLink, Eye, X, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts =
    activeCategory === 'All'
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 bg-slate-950/95 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Verified Qualifications"
          title="Certifications & Credentials"
          description="Explore specialized training certificates and achievements across cybersecurity and software development."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {certificationCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-48 bg-slate-950 overflow-hidden group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg hover:bg-cyan-400 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                </div>

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-cyan-400 text-[11px] font-mono border border-cyan-500/30">
                  {cert.category}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                    <span>{cert.organization}</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Certificate Lightbox</span>
                  </button>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <span>External Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            {/* Modal Header */}
            <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{selectedCert.title}</h4>
                  <p className="text-xs text-slate-400 font-mono">{selectedCert.organization} • {selectedCert.date}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              <div className="rounded-xl overflow-hidden border border-slate-800 mb-6 bg-slate-950">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain max-h-[450px] mx-auto"
                />
              </div>

              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-cyan-400">
                  Certificate Overview
                </h5>
                <p>{selectedCert.description}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs font-mono text-slate-400">Category: {selectedCert.category}</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
