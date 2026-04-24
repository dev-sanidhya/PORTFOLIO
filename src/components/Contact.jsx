import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import SectionHeading from './SectionHeading';

const LINKS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'shishodiasanidhya@gmail.com',
    href: 'mailto:shishodiasanidhya@gmail.com',
    color: 'violet',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/dev-sanidhya',
    href: 'https://github.com/dev-sanidhya',
    color: 'slate',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'sanidhya-shishodia',
    href: 'https://linkedin.com/in/sanidhya-shishodia',
    color: 'cyan',
  },
  {
    icon: FaXTwitter,
    label: 'X / Twitter',
    value: '@iisanidhya',
    href: 'https://x.com/iisanidhya',
    color: 'slate',
  },
  {
    icon: SiLeetcode,
    label: 'LeetCode',
    value: 'ssanidhya29_',
    href: 'https://leetcode.com/u/ssanidhya29_',
    color: 'amber',
  },
];

const HOVER_COLORS = {
  violet: 'hover:border-violet-500/40 hover:bg-violet-500/8 group-hover:text-violet-400',
  cyan: 'hover:border-cyan-500/40 hover:bg-cyan-500/8 group-hover:text-cyan-400',
  slate: 'hover:border-slate-500/40 hover:bg-slate-500/8 group-hover:text-slate-300',
  amber: 'hover:border-amber-500/40 hover:bg-amber-500/8 group-hover:text-amber-400',
};

const ICON_COLORS = {
  violet: 'group-hover:text-violet-400',
  cyan: 'group-hover:text-cyan-400',
  slate: 'group-hover:text-slate-300',
  amber: 'group-hover:text-amber-400',
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 50%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <SectionHeading
          tag="06 · Contact"
          title="Let's Build Together"
          subtitle="Open to internships, collaborations, and research opportunities. I'd love to hear from you."
        />

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-10 border border-white/[0.07] gradient-border"
        >
          {/* Headline */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
              Say <span className="gradient-text">Hello!</span>
            </h3>
            <p className="text-slate-400 text-sm">
              Whether it's a job opportunity, a side project, or just a chat about AI — I'm all ears.
            </p>
          </div>

          {/* Big email CTA */}
          <div className="text-center mb-10">
            <a
              href="mailto:shishodiasanidhya@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 btn-shimmer rounded-2xl text-white font-bold text-lg group"
            >
              <FiMail size={22} />
              shishodiasanidhya@gmail.com
              <FiArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-xs text-slate-600 uppercase tracking-widest font-mono">or find me on</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Social links grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {LINKS.filter((l) => l.label !== 'Email').map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 ${HOVER_COLORS[color]}`}
              >
                <div className={`p-2.5 rounded-lg bg-white/[0.05] text-slate-400 transition-colors duration-200 ${ICON_COLORS[color]}`}>
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                  <div className="text-sm text-slate-300 font-medium truncate">{value}</div>
                </div>
                <FiArrowUpRight size={15} className="ml-auto text-slate-600 group-hover:text-slate-400 shrink-0 transition-colors duration-200" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
