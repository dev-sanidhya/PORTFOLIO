import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const TAG_COLORS = {
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/25',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
};

const DOT_COLORS = {
  violet: 'border-violet-500 shadow-[0_0_16px_rgba(139,92,246,0.5)]',
  cyan: 'border-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.5)]',
  amber: 'border-amber-500 shadow-[0_0_16px_rgba(245,158,11,0.45)]',
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -right-40 top-20 w-80 h-80 rounded-full opacity-[0.04] blur-[90px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
      <div className="absolute -left-40 bottom-20 w-80 h-80 rounded-full opacity-[0.04] blur-[90px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="03 · Experience"
          title="Where I've Worked"
          subtitle="Real-world experience building production systems and contributing to cutting-edge research."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 timeline-line opacity-40" />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const c = TAG_COLORS[exp.tagColor];
              const dot = DOT_COLORS[exp.tagColor];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-start gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 shrink-0 flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6`}>
                    <div className={`w-3.5 h-3.5 bg-[#030712] border-2 ${dot} ml-2 md:ml-0`} />
                  </div>

                  {/* Card — takes up ~half width on desktop */}
                  <div className={`flex-1 md:max-w-[46%] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="glass-card rounded-2xl p-6 border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-bold text-white text-lg leading-tight">{exp.role}</h3>
                          <p className="text-slate-400 text-sm mt-0.5">{exp.company}</p>
                          <p className="text-slate-600 text-xs mt-0.5">{exp.location}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${c}`}>
                            {exp.tag}
                          </span>
                          <span className="text-[10px] text-slate-600 font-mono whitespace-nowrap tracking-wider">{exp.duration}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/[0.06] mb-4" />

                      {/* Bullets */}
                      <ul className="space-y-2.5">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                            <span className="text-violet-400 shrink-0 mt-0.5">▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
