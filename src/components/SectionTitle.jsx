import React from 'react';

const SectionTitle = ({ subtitle, title, description, align = 'center' }) => {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left' : 'text-center'} mb-12`}>
      {subtitle && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className={`w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4 ${align === 'left' ? '' : 'mx-auto'}`}></div>
    </div>
  );
};

export default SectionTitle;
