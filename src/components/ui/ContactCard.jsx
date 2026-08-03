export default function ContactCard({ contact }) {
  const { title, value, href, isExternal, description, icon } = contact;

  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
            {title}
          </span>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-200">
            {value}
          </h3>
        </div>
        
        {/* Icon Badge Container */}
        {icon && (
          <div className="p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors duration-200 flex-shrink-0">
            {icon}
          </div>
        )}
      </div>

      {description && (
        <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
          {description}
        </p>
      )}
    </>
  );

  const cardStyles =
    "group p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col space-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2";

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cardStyles}
      >
        {cardContent}
      </a>
    );
  }

  return <div className={cardStyles}>{cardContent}</div>;
}