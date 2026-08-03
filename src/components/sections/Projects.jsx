import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white text-slate-900 py-16 md:py-24 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reusable Section Heading linked via id with recruiter-focused subtitle */}
        <SectionHeading
          id="projects-heading"
          title="Featured Projects"
          subtitle="Projects demonstrating modern frontend engineering, automation, and software development"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}