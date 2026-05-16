import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, subtitle, kicker, align = 'left' }) {
  const number = tag?.split('·')[0]?.trim();
  const label = tag?.split('·')[1]?.trim() || tag;

  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mb-16 md:mb-24 ${isCenter ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {/* Ghost numeral floating behind */}
      {number && (
        <span
          aria-hidden="true"
          className={`ghost-numeral absolute -top-12 md:-top-24 text-[14rem] md:text-[22rem] leading-none ${
            isCenter ? 'left-1/2 -translate-x-1/2' : '-left-4 md:-left-8'
          }`}
        >
          {number}
        </span>
      )}

      <div className={`relative ${isCenter ? '' : 'flex items-start gap-6 md:gap-8'}`}>
        {!isCenter && (
          <div className="hidden md:flex flex-col items-center pt-3 shrink-0">
            <span className="w-px h-12 bg-paper-300/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-ember mt-2" />
          </div>
        )}

        <div className="flex-1">
          <span className="inline-flex items-center gap-3 label-mono mb-5">
            {kicker || label}
          </span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tightest text-paper">
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-5 text-paper-300 text-base md:text-lg leading-relaxed max-w-xl ${isCenter ? 'mx-auto' : ''}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
