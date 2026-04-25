import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="text-center mb-16 md:mb-20"
    >
      <span className="inline-block font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-violet-400 mb-3 px-3 py-1 rounded border border-violet-500/25 bg-violet-500/[0.06]">
        [ {tag} ]
      </span>
      <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500/60" />
        <div className="w-1.5 h-1.5 bg-violet-500" />
        <div className="h-px w-24 bg-gradient-to-r from-violet-500/60 to-cyan-500/60" />
        <div className="w-1.5 h-1.5 bg-cyan-500" />
        <div className="h-px w-12 bg-gradient-to-r from-cyan-500/60 to-transparent" />
      </div>
    </motion.div>
  );
}
