import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";

// Static configuration outside function scope
const SKILL_CATEGORIES = [
  {
    id: "frontend-desktop",
    title: "Frontend & Desktop",
    description: "Build responsive, modern, and cross-platform user interfaces.",
    skills: ["React", "JavaScript (ES6+)", "Electron", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
  },
  {
    id: "backend-automation",
    title: "Backend & Automation",
    description: "Develop backend automation scripts, data pipelines, and REST APIs.",
    skills: ["Python", "REST APIs", "Node.js (Basics)"],
  },
  {
    id: "hardware-engineering",
    title: "Hardware & Systems",
    description: "Integrate software with physical electronics, sensors, and IoT devices.",
    skills: ["IoT", "Microcontrollers (ESP32)", "Electronics", "Telecommunications", "C/C++"],
  },
  {
    id: "tools-workflow",
    title: "Tools & Workflow",
    description: "Utilize modern development tools, version control, and deployment platforms.",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-slate-50 text-slate-900 py-16 md:py-24 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reusable Section Heading linked via id for screen readers */}
        <SectionHeading
          id="skills-heading"
          title="Technical Skills"
          subtitle="Core technologies and engineering domains I work with daily"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Semantic list wrapper with improved border spacing */}
              <ul className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-slate-100">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <SkillBadge>{skill}</SkillBadge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}