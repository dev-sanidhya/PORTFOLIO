import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const STATS = [
  { value: '20+', label: 'Hackathons Shipped', color: 'violet' },
  { value: '4', label: 'National Wins', color: 'cyan' },
  { value: '10+', label: 'AI Agents Built', color: 'emerald' },
  { value: '3', label: 'Prod Systems Live', color: 'amber' },
];

const STAT_COLORS = {
  violet: 'text-violet-400 border-violet-500/20 bg-violet-500/5',
  cyan: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
  emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
  amber: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
};

const terminalLines = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'Agentic AI Builder. Ships fast. Builds real.' },
  { prompt: true, text: 'cat identity.txt' },
  { prompt: false, text: 'B.Tech AI/ML @ VIPS (2024–2028)' },
  { prompt: false, text: 'New Delhi, India' },
  { prompt: true, text: 'cat philosophy.txt' },
  { prompt: false, text: '> Autonomous agents > manual pipelines' },
  { prompt: false, text: '> Claude SDK + MCP = real agency' },
  { prompt: false, text: '> Ship fast. Learn faster.' },
  { prompt: false, text: '> AI-enabled in everything I do.' },
  { prompt: true, text: 'ls hackathons/ | wc -l' },
  { prompt: false, text: '20+ projects shipped, 4 wins' },
  { prompt: true, text: '' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="01 · About"
          title="Who Am I?"
          subtitle="A passionate AI/ML engineer who loves turning complex problems into elegant intelligent solutions."
        />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-xs font-mono text-slate-500">~/sanidhya ~ bash</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-1.5">
                {terminalLines.map((line, i) => (
                  <div key={i} className="flex items-start gap-2">
                    {line.prompt ? (
                      <>
                        <span className="text-violet-400 shrink-0">❯</span>
                        <span className="text-slate-200">{line.text}</span>
                      </>
                    ) : (
                      <span className="text-slate-400 pl-4">{line.text}</span>
                    )}
                  </div>
                ))}
                {/* Blinking cursor */}
                <div className="flex items-center gap-2">
                  <span className="text-violet-400">❯</span>
                  <span className="terminal-cursor" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Sanidhya Shishodia</span>. I build autonomous AI agents
                that make real decisions, move real money, and operate without hand-holding. I've shipped
                20+ projects across 20+ hackathons: a DeFi agent trading live on Base, an OSINT platform
                watching global events in real time, and a multi-agent financial war room deployed in production.
              </p>
              <p>
                Early <span className="text-violet-300 font-medium">Claude Agent SDK + MCP adopter</span>: not just
                using LLMs as chatbots, but wiring them as decision-making cores inside production systems.
                Currently interning at Lit Amor and co-authoring research on market sentiment AI.
              </p>
              <p>
                My rule: <span className="text-cyan-300 italic">"If it can be autonomous, make it autonomous."</span>
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {STATS.map(({ value, label, color }) => (
                <div
                  key={label}
                  className={`rounded-xl border p-4 ${STAT_COLORS[color]} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="text-3xl font-black mb-1">{value}</div>
                  <div className="text-xs text-slate-400">{label}</div>
                </div>
              ))}
            </div>

            {/* Location tag */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="text-base">📍</span>
              <span>New Delhi, India</span>
              <span className="text-slate-700">·</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                Available now
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
