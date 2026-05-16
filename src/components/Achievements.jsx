import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const TYPE_LABEL = {
  winner: 'WIN',
  finalist: 'FINALIST',
  competition: 'ENTRY',
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 md:py-44 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="05 · Wins"
          kicker="05 / Wins"
          title={
            <>
              Trophies on the <span className="italic-serif text-ember">shelf</span>.
            </>
          }
          subtitle="Competing against thousands at national hackathons and strategy competitions."
        />

        {/* Headline stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 gap-6 md:gap-10 mb-20 md:mb-28 border-y border-paper/[0.08] py-10 md:py-14"
        >
          {[
            { value: '04', label: 'Hackathons won' },
            { value: '20+', label: 'Hackathons shipped' },
            { value: '3K+', label: 'Competitors beaten' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span className="font-display text-6xl md:text-8xl text-paper leading-none tracking-tightest">
                {value}
              </span>
              <span className="label-mono mt-3">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Achievement list */}
        <div className="space-y-0">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-12 gap-3 md:gap-6 items-center py-5 md:py-7 border-b border-paper/[0.06] hover:bg-paper/[0.02] transition-colors duration-500 px-2 -mx-2"
              data-cursor="hover"
            >
              <span className="col-span-1 font-mono text-[11px] text-paper-400 tracking-widest">
                /{String(i + 1).padStart(2, '0')}
              </span>

              <span className="col-span-1 text-2xl md:text-3xl">{ach.icon}</span>

              <h3 className="col-span-8 md:col-span-7 font-display text-xl md:text-3xl text-paper leading-tight group-hover:text-ember transition-colors duration-500 tracking-tight">
                {ach.title}
              </h3>

              <p className="hidden md:block md:col-span-2 text-sm text-paper-300 leading-snug">
                {ach.detail}
              </p>

              <span className="col-span-2 md:col-span-1 text-right">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper-400 group-hover:text-ember transition-colors duration-500">
                  {TYPE_LABEL[ach.type] || ach.type}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
