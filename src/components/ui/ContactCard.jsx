export default function ContactCard({ contact }) {
  const { title, value, href, isExternal, description } = contact;

  const cardContent = (
    <>
      <div className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
          {title}
        </span>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-200">
          {value}
        </h3>
      </div>
      {description && (
        <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
          {description}
        </p>
      )}
    </>
  );

  // Replaced plain focus with focus-visible and removed unnecessary justify-between
  const cardStyles =
    "group p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col space-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2";

  // If a link exists, render as an interactive <a> element using explicit isExternal flag
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

  // Static fallback card
  return <div className={cardStyles}>{cardContent}</div>;
}