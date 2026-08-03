export default function SectionHeading({ id, title, subtitle, centered = true }) {
  return (
    <div className={`space-y-2 mb-12 ${centered ? "text-center" : "text-left"}`}>
      <h2 id={id} className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-cyan-600 font-medium max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}