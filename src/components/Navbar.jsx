import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Wins' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[100] pt-5 md:pt-6 px-4 md:px-8 pointer-events-none"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 pointer-events-auto">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 select-none"
            aria-label="Home"
          >
            <span className="font-display italic text-3xl text-paper leading-none translate-y-[1px] group-hover:text-ember transition-colors duration-500">
              S<span className="text-ember">.</span>
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper-300">Sanidhya</span>
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-paper-400 mt-1">Shishodia</span>
            </span>
          </a>

          {/* Center pill nav */}
          <motion.nav
            animate={{
              backgroundColor: scrolled ? 'rgba(16,16,18,0.7)' : 'rgba(16,16,18,0.35)',
              borderColor: scrolled ? 'rgba(235,230,220,0.10)' : 'rgba(235,230,220,0.06)',
            }}
            transition={{ duration: 0.4 }}
            className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border backdrop-blur-xl"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3.5 py-1.5 text-[13px] text-paper-300 hover:text-paper rounded-full hover:bg-paper/[0.05] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </motion.nav>

          {/* Right CTA */}
          <a
            href="mailto:shishodiasanidhya@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] text-paper bg-paper/[0.06] hover:bg-paper/[0.10] border border-paper/[0.08] hover:border-paper/[0.18] transition-all duration-400"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-ember animate-ping opacity-60" />
              <span className="relative rounded-full bg-ember h-1.5 w-1.5" />
            </span>
            Available
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-full bg-ink-700/70 backdrop-blur-md border border-paper/[0.08] text-paper-200"
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden bg-ink-800/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-display italic text-5xl text-paper py-1"
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:shishodiasanidhya@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMenuOpen(false)}
                className="mt-8 px-6 py-3 rounded-full bg-ember text-ink-900 font-medium text-sm"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
