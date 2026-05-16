import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-44 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="02 · Stack"
          kicker="02 / Stack"
          title={
            <>
              Tools I reach for <span className="italic-serif text-ember">on instinct</span>.
            </>
          }
          subtitle="Production-grade AI systems and full-stack applications - the everyday weapons."
        />

        <div className="space-y-12 md:space-y-16">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid md:grid-cols-12 gap-6 md:gap-10 pb-12 md:pb-16 border-b border-paper/[0.06] last:border-0"
            >
              {/* Left: index + category */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <span className="font-mono text-xs text-paper-400 tracking-widest">
                  /{String(gi + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-paper leading-tight tracking-tight">
                  {group.category}
                </h3>
                <span className="label-mono">
                  {String(group.items.length).padStart(2, '0')} technologies
                </span>
              </div>

              {/* Right: pills */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5 items-start content-start">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * si }}
                    className="text-sm px-4 py-2 rounded-full border border-paper/[0.10] text-paper-200 hover:text-paper hover:border-ember/60 hover:bg-ember/[0.06] hover:-translate-y-0.5 transition-all duration-400 cursor-default"
                    data-cursor="hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
