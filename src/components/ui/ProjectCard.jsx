import SkillBadge from "./SkillBadge";
import Button from "./Button";

export default function ProjectCard({ project }) {
  // Removed 'image' until real media assets are introduced to prevent linter warnings
  const { title, description, technologies, githubUrl, liveUrl } = project;

  return (
    <article className="h-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
      
      {/* Aspect ratio container with aria-hidden for decorative placeholder */}
      <div 
        aria-hidden="true" 
        className="relative w-full aspect-video bg-slate-900 overflow-hidden group flex items-center justify-center border-b border-slate-100"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-400 font-mono text-xs sm:text-sm px-4 text-center">
          <span className="group-hover:scale-105 group-hover:text-cyan-400 transition-all duration-300">
            {title} Preview
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <SkillBadge key={tech}>{tech}</SkillBadge>
          ))}
        </div>

        {/* Responsive Mobile-First Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-100">
          <Button href={githubUrl} variant="secondary" external>
            GitHub
          </Button>
          <Button href={liveUrl} variant="primary" external>
            Live Demo
          </Button>
        </div>

      </div>
    </article>
  );
}