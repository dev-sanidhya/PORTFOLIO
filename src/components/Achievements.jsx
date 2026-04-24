import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const TYPE_STYLES = {
  winner: {
    border: 'border-amber-500/25 hover:border-amber-500/50',
    glow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
    label: 'Winner',
  },
  finalist: {
    border: 'border-violet-500/25 hover:border-violet-500/50',
    glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/25',
    label: 'Finalist',
  },
  competition: {
    border: 'border-cyan-500/25 hover:border-cyan-500/50',
    glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
    label: 'Competition',
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="05 · Achievements"
          title="Wins & Recognition"
          subtitle="Competing against thousands at national hackathons and strategy competitions."
        />

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 mb-8 border border-white/[0.07]"
        >
          <div className="grid grid-cols-3 divide-x divide-white/[0.07] text-center">
            {[
              { value: '3', label: 'Hackathons Won' },
              { value: '5+', label: 'National Finals' },
              { value: '3,000+', label: 'Competitors Beaten' },
            ].map(({ value, label }) => (
              <div key={label} className="px-4 py-2">
                <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievement cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, i) => {
            const style = TYPE_STYLES[ach.type];
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group glass-card rounded-2xl p-5 border transition-all duration-300 cursor-default ${style.border} ${style.glow}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-3xl shrink-0 mt-0.5">{ach.icon}</div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-sm leading-snug mb-1.5">{ach.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{ach.detail}</p>
                    <span className={`inline-block mt-3 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border ${style.badge}`}>
                      {style.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
