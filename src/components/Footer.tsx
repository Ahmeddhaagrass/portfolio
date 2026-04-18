export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-teal-400 font-bold text-lg tracking-tight hover:text-teal-300 transition-colors"
        >
          AH<span className="text-slate-500">.</span>
        </button>

        <p className="text-slate-600 text-sm">Built by Ahmed Hagras</p>

        <nav className="flex items-center gap-5">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-600 hover:text-teal-400 text-xs transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
