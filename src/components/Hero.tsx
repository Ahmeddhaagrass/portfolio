import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['React & Node Full-Stack Developer', 'Flutter Mobile Developer', 'AI & ML Engineer', 'Software Engineering Graduate'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(20,184,166,0.05)_0%,_transparent_50%)]" />

      <div className="grid-overlay absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 text-sm font-medium">Available for work</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            Ahmed Hagras
          </span>
        </h1>

        <div className="h-12 mb-6 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-slate-400 font-light">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-teal-400 ml-0.5 animate-pulse align-middle" />
          </p>
        </div>

        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Software Engineer (BSc 2:1) with experience in React, Node.js, Flutter, and AI/ML — building web platforms,
          mobile apps, and automation systems with clean architecture and measurable impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto border border-slate-700 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex items-center justify-center gap-5">
          {[
            { icon: Mail, href: 'mailto:hagrasahmed123@gmail.com', label: 'Email' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmedhagraas/', label: 'LinkedIn', external: true },
            { icon: Github, href: 'https://github.com/Ahmeddhaagrass', label: 'GitHub', external: true },
          ].map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="w-10 h-10 rounded-lg border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-teal-400 transition-colors animate-bounce"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
