import SectionHeading from "../ui/SectionHeading";

const HIGHLIGHTS = [
  {
    id: "engineering-mindset",
    title: "Engineering Mindset",
    description:
      "Electronics & Telecommunications background trained in systems thinking, hardware precision, and complex problem-solving.",
  },
  {
    id: "stack-integration",
    title: "Bridging Stack Gaps",
    description:
      "Proficient in Python automation and modern React frontend architectures, bringing IoT and web systems together.",
  },
  {
    id: "production-focus",
    title: "Production Focus",
    description:
      "Dedicated to writing clean, maintainable code, accessible UIs, and robust developer documentation.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white text-slate-900 py-16 md:py-24 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reusable Section Heading linked via id for screen readers */}
        <SectionHeading
          id="about-heading"
          title="About Me"
          subtitle="Bridging Hardware Rigor with Modern Web Architecture"
        />

        {/* Narrative Container (Constrained width for reading comfort) */}
        <div className="max-w-3xl mx-auto space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
          <p>
            My engineering journey began in <strong>Electronics & Telecommunications Engineering</strong>. Working with microcontrollers, signals, and low-level communication protocols gave me a deep appreciation for how systems operate under the hood.
          </p>
          <p>
            While building IoT hardware prototypes, I realized that software transforms raw hardware capabilities into intuitive products and user experiences. That insight drove my transition into full-stack and frontend software engineering.
          </p>
          <p>
            Today, I utilize <strong>Python</strong> for backend automation and data processing, paired with <strong>React & Tailwind CSS</strong> to engineer responsive, component-driven web user interfaces.
          </p>
          <p>
            I prioritize maintainable architecture, web accessibility, and performance. Whether automating an engineering workflow or crafting UI layout systems, I apply a methodical engineering approach to every layer of software.
          </p>
        </div>

        {/* Highlights Grid (Slightly wider container for breathing room) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-500/40 hover:shadow-md transition-all duration-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}