import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

// Per-accent gradient mesh used on each project card.
const MESH_GRADIENTS = {
  violet: 'radial-gradient(circle at 30% 20%, #6a4dff44, transparent 60%), radial-gradient(circle at 80% 70%, #ff5b1f33, transparent 65%)',
  amber:  'radial-gradient(circle at 30% 20%, #ff8e3c44, transparent 60%), radial-gradient(circle at 80% 70%, #ff5b1f33, transparent 65%)',
  emerald:'radial-gradient(circle at 30% 20%, #4dd3a533, transparent 60%), radial-gradient(circle at 80% 70%, #ff5b1f33, transparent 65%)',
  rose:   'radial-gradient(circle at 30% 20%, #ff5b8044, transparent 60%), radial-gradient(circle at 80% 70%, #ff5b1f33, transparent 65%)',
  cyan:   'radial-gradient(circle at 30% 20%, #2cc6e833, transparent 60%), radial-gradient(circle at 80% 70%, #ff5b1f33, transparent 65%)',
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.setProperty('--mx', `${(x * 50 + 50).toFixed(1)}%`);
    card.style.setProperty('--my', `${(y * 50 + 50).toFixed(1)}%`);
    card.style.transform = `perspective(1400px) rotateX(${(-y * 2.4).toFixed(2)}deg) rotateY(${(x * 2.4).toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1400px) rotateX(0) rotateY(0)';
    }
  };

  const isLeft = index % 2 === 0;
  const mesh = MESH_GRADIENTS[project.accentColor] ?? MESH_GRADIENTS.violet;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: 0.05 + (index % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
        isLeft ? '' : 'md:[&>*:first-child]:order-2'
      }`}
    >
      {/* Visual / mesh card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor="hover"
        className="md:col-span-6 relative aspect-[5/4] rounded-3xl overflow-hidden border border-paper/[0.08] surface-card will-change-transform"
        style={{ transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease' }}
      >
        {/* Animated gradient mesh background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: mesh,
            filter: 'saturate(120%)',
          }}
        />
        {/* Soft cursor-following light */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 91, 31, 0.18), transparent 60%)',
            transition: 'opacity 0.4s ease',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(235,230,220,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(235,230,220,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Floating name */}
        <div className="absolute inset-0 flex items-end p-6 md:p-10">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper-400">
              proj · {String(index + 1).padStart(2, '0')}
              {project.badge && <span className="ml-3 text-ember">{project.badge}</span>}
            </span>
            <h3 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] tracking-tightest mt-2">
              {project.name}
            </h3>
          </div>
        </div>
        {/* Corner brackets */}
        <span className="absolute top-4 left-4 w-3 h-3 border-t border-l border-paper-300/40" />
        <span className="absolute top-4 right-4 w-3 h-3 border-t border-r border-paper-300/40" />
        <span className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-paper-300/40" />
        <span className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-paper-300/40" />
      </div>

      {/* Text content */}
      <div className="md:col-span-6 md:px-4">
        <p className="italic-serif text-ember text-xl md:text-2xl mb-3">{project.tagline}</p>
        <ul className="space-y-3 text-paper-200 text-base leading-relaxed mb-6 max-w-xl">
          {project.description.map((d, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-paper-400 shrink-0 mt-2 text-[6px]">●</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-paper/[0.10] text-paper-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-paper hover:text-ember transition-colors duration-300 group"
            >
              <FiGithub size={16} />
              <span className="link-underline text-sm">Code</span>
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-paper hover:text-ember transition-colors duration-300 group"
            >
              <FiArrowUpRight size={16} />
              <span className="link-underline text-sm">Live demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-44 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="04 · Work"
          kicker="04 / Projects"
          title={
            <>
              Things I've <span className="italic-serif text-ember">put into the world</span>.
            </>
          }
          subtitle="Autonomous agents, multi-agent war rooms, real-time OSINT, open-source infra."
        />

        <div className="space-y-28 md:space-y-36">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-24"
        >
          <a
            href="https://github.com/dev-sanidhya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <FiGithub size={15} />
            All work on GitHub
            <FiArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
