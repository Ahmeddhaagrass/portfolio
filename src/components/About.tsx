import { Calendar, MapPin, Download } from 'lucide-react';

const stats = [
  { value: '1', label: 'Years Experience' },
  { value: '40+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '10+', label: 'Open Source Contributions' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 rounded-3xl blur-xl" />
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              <img
                src="/ahmed-hagras.png"
                alt="Ahmed Hagras"
                className="w-full h-full object-cover object-top rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-slate-300 text-sm font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl font-bold text-slate-100 mb-6 leading-tight">
              Crafting digital experiences with purpose
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I am a software engineer based in Cairo with hands-on experience in full-stack development and AI-enabled systems, focused on building practical, maintainable products.
              </p>
              <p>
                My work combines clean architecture, solid backend engineering, and product-focused frontend delivery across business systems, smart applications, and machine learning projects.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                <p className="text-teal-400 text-xs font-semibold tracking-wider uppercase mb-1">Education</p>
                <p className="text-slate-300 text-sm">
                  BSc (Hons) Software Engineering, 2:1 — Nottingham Trent University (2022 - 2025)
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                <p className="text-teal-400 text-xs font-semibold tracking-wider uppercase mb-1">Experience</p>
                <p className="text-slate-300 text-sm">
                  Software Developer Intern at Global Project Services (Jun 2024 - Aug 2024) and Machine Learning Intern at Bright Network (Sep 2024 - Oct 2024).
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-teal-400" />
                Cairo, Egypt
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-teal-400" />
                Available from May 2026
              </span>
            </div>

            <a
              href="/Ahmed-Hagras-Resume.pdf"
              download="Ahmed-Hagras-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 font-medium px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-teal-500/30 transition-colors duration-300"
            >
              <p className="text-3xl font-bold text-teal-400 mb-1">{value}</p>
              <p className="text-slate-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
