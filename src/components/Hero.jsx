import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiArrowDown, FiArrowUpRight, FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/dev-sanidhya', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/sanidhya-shishodia', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/iisanidhya', label: 'X' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ssanidhya29_', label: 'LeetCode' },
  { icon: FiMail, href: 'mailto:shishodiasanidhya@gmail.com', label: 'Email' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MARQUEE_ITEMS = [
  'Agentic AI',
  'Multi-Agent Systems',
  'Claude SDK',
  'MCP Protocol',
  'LLM Orchestration',
  'Production AI',
  'Autonomous Decisions',
  'Real Money. Real Systems.',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
    >
      {/* Faint baseline grid - editorial touch */}
      <div className="absolute inset-0 grid-bg opacity-[0.5] pointer-events-none" />

      {/* Top meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute top-28 md:top-32 left-0 right-0 px-6 md:px-12 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-paper-400">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
            <span className="text-ember">●</span>&nbsp;&nbsp;Portfolio · 2026
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] tracking-[0.3em] uppercase">
            New Delhi · 28.6°N 77.2°E
          </span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pt-32 pb-16 md:pb-24">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-3 label-mono">
            <span className="inline-block w-8 h-px bg-paper-300" />
            Independent Engineer &amp; Builder
          </span>
        </motion.div>

        {/* Massive editorial name */}
        <div className="space-y-1 md:space-y-2 leading-[0.86]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-[18vw] md:text-[14vw] leading-[0.86] tracking-tightest text-paper select-none"
            style={{ fontFeatureSettings: '"liga", "dlig"' }}
          >
            Sanidhya
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display italic text-[18vw] md:text-[14vw] leading-[0.86] tracking-tightest text-paper-300 select-none pl-[6vw]"
          >
            Shishodia<span className="text-ember not-italic">.</span>
          </motion.h1>
        </div>

        {/* Two-column lower deck */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-10 md:gap-8 items-end">
          {/* Left: bio + role */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="md:col-span-7 space-y-6"
          >
            <p className="text-lg md:text-2xl text-paper leading-snug max-w-2xl">
              I build <span className="italic-serif text-ember">autonomous AI agents</span> that think, decide, and act
              without hand-holding. Twenty hackathons, four wins, production systems trading real money &
              moving real decisions.
            </p>

            <div className="flex items-center gap-3 text-sm text-paper-300">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper-400">Now</span>
              <span className="h-px w-6 bg-paper-400/40" />
              <TypeAnimation
                sequence={[
                  'Building agentic systems with Claude SDK',
                  2800,
                  'Researching market sentiment AI',
                  2400,
                  'Mentoring at GSoC × OWASP',
                  2400,
                  'Shipping production multi-agent stacks',
                  2400,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="italic-serif text-paper text-base md:text-lg"
              />
            </div>
          </motion.div>

          {/* Right: CTAs + socials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="md:col-span-5 flex flex-col gap-6 md:items-end"
          >
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#projects" className="btn-primary text-sm">
                <span>See the work</span>
                <FiArrowUpRight />
              </a>
              <a href="#contact" className="btn-ghost text-sm">
                Get in touch
              </a>
            </div>

            <div className="flex items-center gap-1 md:justify-end">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full text-paper-300 hover:text-ember hover:bg-paper/[0.04] transition-colors duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3 label-mono">
              <span className="h-px w-8 bg-paper-400/40" />
              <span>B.Tech AI/ML · VIPS 2024–2028</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="relative border-y border-paper/[0.08] py-5 overflow-hidden"
      >
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display italic text-3xl md:text-5xl text-paper-300 whitespace-nowrap select-none"
            >
              {item}
              <span className="text-ember text-2xl md:text-4xl">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-28 md:bottom-32 right-6 md:right-12 hidden sm:flex flex-col items-center gap-3 text-paper-400"
      >
        <span className="label-mono [writing-mode:vertical-rl] rotate-180">Scroll to explore</span>
        <FiArrowDown className="animate-scroll-bounce" size={14} />
      </motion.div>
    </section>
  );
}
