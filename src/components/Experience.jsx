import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-44 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="03 · Work"
          kicker="03 / Work"
          title={
            <>
              Places I've <span className="italic-serif text-ember">built things</span>.
            </>
          }
          subtitle="Shipping production systems, mentoring, and contributing to research."
        />

        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-[7px] md:left-[120px] top-0 bottom-0 w-px bg-paper/[0.08]" aria-hidden="true" />

          <div className="space-y-14 md:space-y-20">
            {experience.map((exp, i) => (
              <motion.article
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid md:grid-cols-12 gap-6 md:gap-10 group"
              >
                {/* Rail dot */}
                <span className="absolute left-0 md:left-[112px] top-2 w-4 h-4 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-ember ring-4 ring-ink-800" />
                </span>

                {/* Duration column */}
                <div className="pl-8 md:pl-0 md:col-span-3 md:pr-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper-400">
                    {exp.duration}
                  </span>
                </div>

                {/* Card */}
                <div className="pl-8 md:pl-12 md:col-span-9">
                  <header className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                    <h3 className="font-display text-3xl md:text-4xl text-paper leading-tight tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="italic-serif text-xl md:text-2xl text-ember">
                      @ {exp.company}
                    </span>
                  </header>
                  <p className="font-mono text-xs text-paper-400 mb-5 tracking-wider uppercase">
                    {exp.location} · {exp.tag}
                  </p>

                  <ul className="space-y-3 text-paper-200 text-base leading-relaxed max-w-3xl">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-4">
                        <span className="font-mono text-[11px] text-paper-400 pt-1.5 shrink-0 tracking-wider">
                          /{String(bi + 1).padStart(2, '0')}
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
