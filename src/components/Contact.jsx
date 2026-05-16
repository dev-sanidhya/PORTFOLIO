import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const LINKS = [
  { icon: FiGithub, label: 'GitHub', value: 'github.com/dev-sanidhya', href: 'https://github.com/dev-sanidhya' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'sanidhya-shishodia', href: 'https://linkedin.com/in/sanidhya-shishodia' },
  { icon: FaXTwitter, label: 'X', value: '@iisanidhya', href: 'https://x.com/iisanidhya' },
  { icon: SiLeetcode, label: 'LeetCode', value: 'ssanidhya29_', href: 'https://leetcode.com/u/ssanidhya29_' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-44 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Eyebrow */}
          <span className="label-mono mb-6 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-paper-300" />
            06 / Contact
          </span>

          {/* Massive CTA headline */}
          <h2 className="font-display text-[14vw] md:text-[10vw] leading-[0.92] tracking-tightest text-paper select-none">
            Let's build
            <br />
            <span className="italic-serif text-ember">something real</span>.
          </h2>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-14 md:mt-20 items-end">
            {/* Left: email + intro */}
            <div className="md:col-span-7 space-y-8">
              <p className="text-lg md:text-xl text-paper-200 leading-relaxed max-w-xl">
                Freelance projects, internships, full-time roles, or a 2 AM idea you can't shake.
                I read everything.
              </p>

              <a
                href="mailto:shishodiasanidhya@gmail.com"
                className="group inline-flex items-baseline gap-4 max-w-full"
              >
                <span className="font-display text-3xl md:text-5xl text-paper italic-serif group-hover:text-ember transition-colors duration-500 break-all">
                  shishodiasanidhya@gmail.com
                </span>
                <FiArrowUpRight className="text-paper-300 group-hover:text-ember group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 shrink-0" size={28} />
              </a>

              <div className="flex items-center gap-3 text-sm text-paper-300">
                <FiMail size={14} />
                <span>Replies within 24h on weekdays</span>
              </div>
            </div>

            {/* Right: socials */}
            <div className="md:col-span-5 md:pl-8 md:border-l md:border-paper/[0.08]">
              <span className="label-mono">Or find me</span>
              <div className="hairline mt-2 mb-5 max-w-[140px]" />
              <ul className="space-y-1">
                {LINKS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="group flex items-center justify-between py-3 px-2 -mx-2 border-b border-paper/[0.06] hover:bg-paper/[0.02] transition-colors duration-400"
                    >
                      <span className="flex items-center gap-4">
                        <Icon size={15} className="text-paper-300 group-hover:text-ember transition-colors duration-400" />
                        <span className="text-paper group-hover:text-ember transition-colors duration-400">{label}</span>
                      </span>
                      <span className="flex items-center gap-3 text-paper-400 text-sm">
                        <span className="font-mono text-xs">{value}</span>
                        <FiArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-400" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
