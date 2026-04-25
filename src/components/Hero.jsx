import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown, FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/dev-sanidhya', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/sanidhya-shishodia', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/iisanidhya', label: 'X / Twitter' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ssanidhya29_', label: 'LeetCode' },
  { icon: FiMail, href: 'mailto:shishodiasanidhya@gmail.com', label: 'Email' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-float-slow absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #8b5cf6, #7c3aed)' }} />
        <div className="animate-float-medium absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #06b6d4, #0891b2)' }} />
        <div className="animate-float-fast absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #10b981, #059669)' }} />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24"
      >
        {/* System status line */}
        <motion.div variants={itemVariants} className="mb-5">
          <p className="font-mono text-[10px] tracking-[0.28em] text-slate-700 uppercase select-none">
            SANIDHYA.SYS
            <span className="text-violet-800/60 mx-2">//</span>
            ONLINE
            <span className="text-violet-800/60 mx-2">//</span>
            NEW DELHI, IND
          </p>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            Open to Freelancing · Internships · Full-time Roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1 className="font-black tracking-tighter leading-none select-none" style={{ fontSize: 'clamp(4rem, 14vw, 10rem)' }}>
            <span className="gradient-text block">Sanidhya</span>
            <span className="text-outline block">Shishodia</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div variants={itemVariants} className="mt-6 mb-5 h-9 flex items-center justify-center">
          <span className="text-lg md:text-2xl font-mono text-slate-400">
            <span className="text-slate-600 font-mono text-sm md:text-xl">{'sys@sanidhya:~$ '}</span>
            <TypeAnimation
              sequence={[
                'Agentic AI Builder', 2800,
                'Multi-Agent Systems Engineer', 2500,
                'LLM Pipeline Architect', 2400,
                'Claude Agent SDK Developer', 2400,
                'Full Stack Developer', 1800,
                'Hackathon Champion ×4', 2200,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              className="text-white"
            />
            <span className="terminal-cursor" />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          I build autonomous AI agents that think, decide, and act independently.
          20+ hackathons shipped. 4 wins. Production systems in the wild.
          <br />
          <span className="text-slate-500 text-sm">B.Tech AI/ML @ VIPS · New Delhi · 2024–2028</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="hud-btn btn-shimmer px-8 py-3.5 rounded-full text-white font-semibold text-sm"
          >
            View Projects
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.07] font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiDownload size={15} />
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-xl text-slate-500 hover:text-violet-400 hover:bg-violet-500/10 border border-transparent hover:border-violet-500/20 transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono">Scroll</span>
        <FiArrowDown className="animate-scroll-bounce" size={16} />
      </motion.div>
    </section>
  );
}
