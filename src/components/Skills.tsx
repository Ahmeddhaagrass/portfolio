import { Code2, Database, Globe, Layers, Server, Terminal, Wrench } from 'lucide-react';

const categories = [
  {
    icon: Globe,
    title: 'Frontend',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    skills: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20',
    skills: ['Node.js', 'ASP.NET Core', 'REST APIs', 'Python', 'Express'],
  },
  {
    icon: Code2,
    title: 'AI & Machine Learning',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
    skills: ['PyTorch', 'Scikit-learn', 'YOLO', 'CNNs', 'Feature Engineering', 'EDA'],
  },
  {
    icon: Database,
    title: 'Database',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    icon: Layers,
    title: 'DevOps & Cloud',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
    skills: ['Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Git'],
  },
  {
    icon: Wrench,
    title: 'Practices & Tools',
    color: 'text-slate-400',
    bg: 'bg-slate-400/10',
    border: 'border-slate-400/20',
    skills: ['Agile', 'Scrum', 'OOP', 'System Design', 'Figma', 'Jira'],
  },
];

const proficiencies = [
  { label: 'React.js / Full-Stack', pct: 90 },
  { label: 'Python / ML', pct: 85 },
  { label: 'Node.js / REST APIs', pct: 88 },
  { label: 'SQL / Databases', pct: 82 },
  { label: 'TypeScript', pct: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Skills & Technologies</h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            A curated set of tools and technologies I've honed over years of building production-grade software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map(({ icon: Icon, title, color, bg, border, skills }) => (
            <div
              key={title}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4`}>
                <Icon size={20} className={color} />
              </div>
              <h3 className="text-slate-200 font-semibold mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-700/60 text-slate-400 text-xs px-2.5 py-1 rounded-lg group-hover:text-slate-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
              <Code2 size={18} className="text-teal-400" />
            </div>
            <div>
              <h3 className="text-slate-200 font-semibold">Core Proficiencies</h3>
              <p className="text-slate-500 text-xs">Based on years of daily use</p>
            </div>
          </div>

          <div className="space-y-5">
            {proficiencies.map(({ label, pct }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-400 text-sm">{label}</span>
                  <span className="text-teal-400 text-sm font-medium">{pct}%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700 flex items-center gap-2 text-slate-500 text-xs">
            <Terminal size={13} />
            <span>Always learning • Targeting Software Engineering & AI roles at IBM and enterprise tech</span>
          </div>
        </div>
      </div>
    </section>
  );
}
