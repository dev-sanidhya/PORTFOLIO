import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const COLOR_MAP = {
  violet: {
    card: 'border-violet-500/15 hover:border-violet-500/40',
    title: 'text-violet-400',
    pill: 'bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)]',
    dot: 'bg-violet-500',
    glow: 'group-hover:shadow-[0_0_60px_rgba(139,92,246,0.1)]',
  },
  cyan: {
    card: 'border-cyan-500/15 hover:border-cyan-500/40',
    title: 'text-cyan-400',
    pill: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]',
    dot: 'bg-cyan-500',
    glow: 'group-hover:shadow-[0_0_60px_rgba(6,182,212,0.1)]',
  },
  emerald: {
    card: 'border-emerald-500/15 hover:border-emerald-500/40',
    title: 'text-emerald-400',
    pill: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]',
    dot: 'bg-emerald-500',
    glow: 'group-hover:shadow-[0_0_60px_rgba(16,185,129,0.1)]',
  },
  amber: {
    card: 'border-amber-500/15 hover:border-amber-500/40',
    title: 'text-amber-400',
    pill: 'bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20 hover:shadow-[0_0_12px_rgba(245,158,11,0.3)]',
    dot: 'bg-amber-500',
    glow: 'group-hover:shadow-[0_0_60px_rgba(245,158,11,0.1)]',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background grid */}
      <div className="absolute inset-0 line-grid opacity-40 pointer-events-none" />

      {/* Background orb */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="02 · Skills"
          title="Technical Arsenal"
          subtitle="Technologies I work with daily to build production-grade AI systems and full-stack applications."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, gi) => {
            const c = COLOR_MAP[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: gi * 0.1 }}
                className={`group glass-card rounded-2xl p-6 border transition-all duration-400 ${c.card} ${c.glow}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2.5 h-2.5 rounded-full ${c.dot} shadow-sm`} />
                  <h3 className={`font-mono text-[10px] font-semibold tracking-[0.18em] uppercase ${c.title}`}>
                    {group.category}
                  </h3>
                  <span className="ml-auto font-mono text-[10px] text-slate-600">[{String(group.items.length).padStart(2, '0')}]</span>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-pill text-xs font-medium px-3 py-1.5 rounded-full border ${c.pill} transition-all duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
