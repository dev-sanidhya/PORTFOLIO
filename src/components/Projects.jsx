import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const BADGE_STYLES = {
  violet: 'border-violet-500/30 text-violet-400/90 bg-violet-500/[0.07]',
  amber:  'border-amber-500/30  text-amber-400/90  bg-amber-500/[0.07]',
  emerald:'border-emerald-500/30 text-emerald-400/90 bg-emerald-500/[0.07]',
  rose:   'border-rose-500/30   text-rose-400/90   bg-rose-500/[0.07]',
  cyan:   'border-cyan-500/30   text-cyan-400/90   bg-cyan-500/[0.07]',
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -7;
    const rotateY = ((x - cx) / cx) * 7;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card h-full glass-card rounded-2xl overflow-hidden border border-white/[0.07] transition-all duration-200"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease, box-shadow 0.3s ease' }}
      >
        {/* Status header bar */}
        <div className="px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.015] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.demo && project.demo !== '#' ? 'bg-emerald-400 animate-pulse-dot' : 'bg-violet-400/70'}`} />
            <span className="font-mono text-[9px] text-slate-600 tracking-[0.15em] uppercase">
              proj-{String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-[9px] text-slate-700">·</span>
            <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">{project.name}</span>
          </div>
          {project.badge && (
            <span className={`font-mono text-[8px] tracking-[0.1em] uppercase px-1.5 py-0.5 border rounded-sm ${BADGE_STYLES[project.accentColor] ?? BADGE_STYLES.violet}`}>
              {project.badge}
            </span>
          )}
        </div>

        <div className="p-7">
          {/* Project name + external links */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-black gradient-text">{project.name}</h3>
                {project.badge && (
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/[0.07] border border-white/10 text-slate-400">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-sm">{project.tagline}</p>
            </div>
            <div className="flex items-center gap-2 ml-4 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <FiGithub size={18} />
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="p-2 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-400 font-mono"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-5" />

          {/* Description bullets */}
          <ul className="space-y-2.5">
            {project.description.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                <span className="text-cyan-500 shrink-0 mt-0.5">▸</span>
                {d}
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-200"
            >
              <FiGithub size={13} />
              View Code
            </a>
            {project.demo && project.demo !== '#' ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-500/25 hover:border-emerald-500/50 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-200"
              >
                <FiExternalLink size={13} />
                Live Demo
              </a>
            ) : (
              <span className="text-xs text-slate-600 px-3 py-1.5 rounded-lg border border-white/[0.04] bg-white/[0.02]">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-96 rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8b5cf6 0%, #06b6d4 50%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="04 · Projects"
          title="What I've Built"
          subtitle="AI-powered full-stack systems: autonomous agents, multi-agent war rooms, real-time OSINT, and open-source agent infrastructure."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* View more on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/dev-sanidhya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.07] text-sm transition-all duration-300 group"
          >
            <FiGithub size={16} className="group-hover:text-violet-400 transition-colors duration-200" />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
