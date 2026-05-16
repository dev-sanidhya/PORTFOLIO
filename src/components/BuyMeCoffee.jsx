import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const BMAC_URL = 'https://buymeacoffee.com/shishodiasd';

export default function BuyMeCoffee() {
  return (
    <section className="pt-20 pb-12 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto"
      >
        <a
          href={BMAC_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="group block border-y border-paper/[0.08] py-12 md:py-16 hover:bg-paper/[0.02] transition-colors duration-500"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <motion.span
                animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                className="text-4xl md:text-5xl select-none"
                aria-hidden="true"
              >
                ☕
              </motion.span>
              <div>
                <span className="label-mono block mb-2">Coffee fund</span>
                <h3 className="font-display text-3xl md:text-5xl text-paper leading-tight tracking-tight group-hover:text-ember transition-colors duration-500">
                  Liked it? <span className="italic-serif">Buy me a coffee.</span>
                </h3>
              </div>
            </div>
            <span className="flex items-center gap-2 text-sm text-paper-300 group-hover:text-ember transition-colors duration-500 pl-14 md:pl-0">
              <span className="link-underline">buymeacoffee.com/shishodiasd</span>
              <FiArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500" />
            </span>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
