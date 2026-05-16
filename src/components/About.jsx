import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const STATS = [
  { value: '20+', label: 'Hackathons shipped' },
  { value: '04', label: 'National wins' },
  { value: '10+', label: 'AI agents built' },
  { value: '03', label: 'Prod systems live' },
];

const PRINCIPLES = [
  { k: 'If it can be autonomous, make it autonomous.' },
  { k: 'Ship fast. Learn faster.' },
  { k: 'Agents over pipelines.' },
  { k: 'Claude SDK + MCP = real agency.' },
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-44 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag="01 · About"
          kicker="01 / About"
          title={
            <>
              An engineer who builds <span className="italic-serif text-ember">things that act</span>,
              not things that wait.
            </>
          }
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: long-form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 space-y-7 text-paper-200 text-lg leading-[1.65] md:pl-2"
          >
            <p>
              I'm <span className="text-paper italic-serif text-xl">Sanidhya Shishodia</span>. I build autonomous AI
              agents that make real decisions, move real money, and operate without hand-holding.
              A DeFi agent trading live on Base. An OSINT platform watching world events in real time.
              A multi-agent financial war room running in production.
            </p>
            <p>
              Early <span className="text-paper">Claude Agent SDK + MCP</span> adopter: not chatbots, not
              prompt-glue — LLMs wired in as decision-making cores inside real systems. Currently
              interning at Lit Amor and co-authoring research on market sentiment AI.
            </p>

            <div className="pt-4 space-y-3">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.k}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="flex items-baseline gap-4 group"
                >
                  <span className="font-mono text-[11px] text-paper-400 tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="italic-serif text-paper text-xl md:text-2xl leading-snug">{p.k}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: stats column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 md:pl-8 md:border-l md:border-paper/[0.08]"
          >
            <div className="space-y-2">
              <span className="label-mono">Track Record</span>
              <div className="hairline mt-2 mb-6 max-w-[180px]" />
            </div>

            <div className="space-y-7">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                  className="flex items-baseline justify-between border-b border-paper/[0.06] pb-4 group"
                >
                  <span className="font-display text-5xl md:text-6xl text-paper leading-none tracking-tightest group-hover:text-ember transition-colors duration-500">
                    {s.value}
                  </span>
                  <span className="label-mono text-right max-w-[140px]">{s.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-paper-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-ember animate-ping opacity-60" />
                <span className="relative rounded-full bg-ember h-1.5 w-1.5" />
              </span>
              <span>Available · New Delhi, IN</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
