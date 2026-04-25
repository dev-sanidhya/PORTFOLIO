export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="gradient-text font-semibold">Sanidhya Shishodia</span>
          {' '}· Built with React + Vite + TailwindCSS
        </p>
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="font-mono text-xs">
            New Delhi, India · Available for hire
          </p>
          <p className="font-mono text-[9px] text-slate-700 tracking-[0.22em] uppercase select-none">
            SYS.STATUS: ONLINE
          </p>
        </div>
      </div>
    </footer>
  );
}
