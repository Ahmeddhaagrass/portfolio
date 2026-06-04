import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live: string | null;
  repo: string | null;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'Fajr — Islamic companion app',
    description:
      'An Islamic app that brings Qibla direction, Quran, daily athkar, accurate prayer times, and more into one calm, focused experience for everyday worship.',
    image:
      'https://images.pexels.com/photos/6612691/pexels-photo-6612691.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile', 'Islamic', 'Prayer times', 'Quran', 'Athkār'],
    live: null,
    repo: null,
    featured: true,
  },
  {
    title: 'Egzoti EG — luxury showroom',
    description:
      'Website for Egzoti EG, a luxury and exotic car showroom in Egypt — premium inventory, polished layout, and a browsing experience suited to high-end automotive clients.',
    image:
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web', 'Luxury retail', 'Responsive', 'Showroom'],
    live: null,
    repo: 'https://github.com/Ahmeddhaagrass/egzoti_demo',
    featured: true,
  },
  {
    title: 'GPS Project Management Platform',
    description:
      'A full-stack platform built during my internship to manage 40+ modular construction projects, with RBAC, JWT auth, REST APIs, and quotation workflow automation.',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'RBAC', 'JWT'],
    live: null,
    repo: 'https://github.com/Ahmeddhaagrass/portfolio',
    featured: true,
  },
  {
    title: 'Future Fridges Mobile App',
    description:
      'A team-built smart fridge application focused on inventory visibility, expiry tracking, and day-to-day usability, delivered through Agile collaboration, prototyping, and testing.',
    image:
      'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile', 'Agile', 'Figma', 'Testing'],
    live: null,
    repo: 'https://github.com/Ahmeddhaagrass/-ffsmart-fridge-app',
    featured: true,
  },
  {
    title: 'Aquaculture Food Management & Waste Reduction',
    description:
      'Final-year AI project contribution focused on feeding logic, waste monitoring, and sustainability insights to improve fish farm efficiency and reduce operational loss.',
    image:
      'https://images.pexels.com/photos/2131904/pexels-photo-2131904.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'AI', 'Sustainability', 'Aquaculture'],
    live: null,
    repo: 'https://github.com/Ahmeddhaagrass/FeedWise-Fish-Feeding-Efficiency-Waste-Reduction',
    featured: true,
  },
  {
    title: 'Event Booking Web System',
    description:
      'A full-stack event booking application with authentication, structured backend services, real-time filtering, and reliable booking flows with clear error handling.',
    image:
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Full Stack', 'Authentication', 'REST APIs'],
    live: null,
    repo: 'https://github.com/Ahmeddhaagrass/meal_to_meal',
    featured: true,
  },
  {
    title: 'Developer Salary Clustering & Classification',
    description:
      'Delivered a full data science solution for developer salary analysis using the 2024 Stack Overflow survey and CRISP-DM, applying K-Means and hierarchical clustering with classification models (k-NN, Decision Tree, Logistic Regression, Random Forest) to segment and predict salary groups.',
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'CRISP-DM', 'K-Means', 'Random Forest', 'EDA'],
    live: null,
    repo: 'https://github.com/Ahmeddhaagrass/AI-CRSWRK',
    featured: true,
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Designed and built this portfolio website myself to present my projects, experience, and contact details with a modern responsive UI and clean frontend architecture.',
    image:
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    live: null,
    repo: 'https://github.com/Ahmeddhaagrass/portfolio',
    featured: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const hasLive = Boolean(project.live);
  const hasRepo = Boolean(project.repo);

  return (
    <div className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        {project.featured && (
          <span className="absolute top-3 left-3 bg-teal-500 text-slate-950 text-xs font-semibold px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-slate-200 font-semibold leading-snug">{project.title}</h3>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-slate-700/60 text-slate-400 text-xs px-2.5 py-1 rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        {(hasLive || hasRepo) && (
          <div className="flex items-center gap-3 pt-3 border-t border-slate-700/50">
            {hasLive && project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} />
                Live site
              </a>
            )}
            {hasRepo && project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-sm transition-colors ml-auto"
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Selected projects</h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Real projects from mobile, web, and AI work, including internship delivery, product builds, and university project contributions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">More projects are coming soon.</p>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ahmeddhaagrass"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-teal-500/40 text-slate-400 hover:text-teal-400 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
          >
            <Github size={16} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
