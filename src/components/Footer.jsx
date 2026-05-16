import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      setTime(
        ist.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="px-6 md:px-12 pb-10 pt-6">
      <div className="max-w-7xl mx-auto">
        {/* Giant signature */}
        <div className="border-t border-paper/[0.08] pt-12 md:pt-20 pb-10">
          <a
            href="#home"
            className="block font-display text-[18vw] md:text-[14vw] leading-[0.86] tracking-tightest text-paper hover:text-ember transition-colors duration-700 select-none"
          >
            Sanidhya
            <span className="italic-serif text-ember">.</span>
          </a>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-6 border-t border-paper/[0.06]">
          <div className="space-y-2 text-paper-300 text-sm">
            <p>© {new Date().getFullYear()} Sanidhya Shishodia · All rights reserved</p>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper-400">
              Hand-built · React · Vite · Tailwind · Framer Motion
            </p>
          </div>

          <div className="flex items-end justify-between md:flex-col md:items-end gap-2">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper-400 flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-ember animate-ping opacity-60" />
                <span className="relative rounded-full bg-ember h-1.5 w-1.5" />
              </span>
              <span>Delhi · {time} IST</span>
            </div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-paper-300 hover:text-ember transition-colors duration-400 text-sm group"
            >
              <FiArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-400" />
              <span className="link-underline">Back to top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
