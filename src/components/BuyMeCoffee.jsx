import { motion } from 'framer-motion';

const BMAC_URL = 'https://buymeacoffee.com/shishodiasd';

export default function BuyMeCoffee() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, #f59e0b 0%, #8b5cf6 60%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card gradient-border rounded-3xl p-8 md:p-10 text-center"
        >
          {/* Coffee icon */}
          <motion.div
            animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
            className="text-5xl mb-5 select-none inline-block"
            aria-hidden="true"
          >
            ☕
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
            Enjoyed my work?{' '}
            <span className="gradient-text">Buy me a coffee!</span>
          </h3>

          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            If my projects, writing, or open-source work has been helpful, a coffee goes a long way
            to keep the late-night coding sessions alive.
          </p>

          <a
            href={BMAC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-[#1a1a1a] text-base transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
              boxShadow: '0 0 0 0 rgba(251,191,36,0)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 30px rgba(251,191,36,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 0 rgba(251,191,36,0)')}
          >
            <span className="text-xl">☕</span>
            Buy Me a Coffee
          </a>

          <p className="mt-5 text-xs text-slate-600 font-mono">
            buymeacoffee.com/shishodiasd
          </p>
        </motion.div>
      </div>
    </section>
  );
}
