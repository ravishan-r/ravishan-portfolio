export default function SkillBadge({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs sm:text-sm font-medium border border-slate-200/80 hover:bg-cyan-50 hover:text-cyan-800 hover:border-cyan-300 transition-colors duration-150">
      {children}
    </span>
  );
}