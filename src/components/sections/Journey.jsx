import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import { JOURNEY } from "../../data/journey";

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="bg-slate-50 text-slate-900 py-16 md:py-24 border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 'id' forwards to internal <h2> for accessibility */}
        <SectionHeading
          id="journey-heading"
          title="Engineering Journey"
          subtitle="Transitioning from Hardware Systems to Modern Software Engineering"
        />

        {/* Semantic Timeline List */}
        <ol className="mt-12 max-w-2xl mx-auto">
          {JOURNEY.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={index === JOURNEY.length - 1}
            />
          ))}
        </ol>

      </div>
    </section>
  );
}