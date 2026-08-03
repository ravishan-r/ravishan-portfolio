export default function TimelineItem({ item, isLast }) {
  const { year, category, title, description } = item;

  return (
    <li className="relative flex gap-6 pb-12 last:pb-0">
      
      {/* Vertical Timeline Connecting Line */}
      {!isLast && (
        <span
          className="absolute left-[11px] top-7 -bottom-2 w-[2px] bg-slate-200"
          aria-hidden="true"
        />
      )}

      {/* Decorative Timeline Bullet Marker */}
      <div 
        aria-hidden="true" 
        className="relative z-10 flex-shrink-0 mt-1"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 ring-4 ring-white border-2 border-cyan-500">
          <span className="h-2 w-2 rounded-full bg-cyan-600" />
        </span>
      </div>

      {/* Content Container */}
      <div className="flex-1 space-y-2">
        {/* Meta Header: Year & Category Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <time 
            dateTime={year} 
            className="text-xs font-bold text-cyan-600 uppercase tracking-wider"
          >
            {year}
          </time>
          {category && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              {category}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900">
          {title}
        </h3>

        {/* Description (Redundant max-w-2xl removed) */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

    </li>
  );
}