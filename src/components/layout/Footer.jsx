import { navigationLinks } from "../../data/navigation";
import { CONTACTS } from "../../data/contact";

// Hoisted static data array outside component scope to prevent re-allocation on re-renders
const ROLES = [
  "Electronics Engineer",
  "Python Developer",
  "IoT Builder",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = CONTACTS.filter((item) => item.href);

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Grid: Responsive 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start text-center md:text-left">
          
          {/* Identity & Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Ravishan Rathnayake<span className="text-cyan-500">.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Electronics Engineer specializing in modern full-stack software development, web applications, and industrial automation solutions.
            </p>
          </div>

          {/* Specializations / Roles */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-500">
              Specializations
            </h3>
            <ul className="flex flex-col items-center md:items-start space-y-2 text-sm text-slate-100">
              {ROLES.map((role) => (
                <li key={role} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Navigation (Reusing NAV_LINKS) */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-500">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col items-center md:items-start space-y-2 text-sm">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect / Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-500">
              Connect
            </h3>
            <nav aria-label="Social links">
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target={social.isExternal ? "_blank" : undefined}
                      rel={social.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md"
                    >
                      {social.icon && (
                        <span className="w-4 h-4 text-slate-400 [&>svg]:w-4 [&>svg]:h-4">
                          {social.icon}
                        </span>
                      )}
                      <span>{social.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Ravishan Rathnayake. All rights reserved.
          </p>
          
          <a
            href="#hero"
            className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              &uarr;
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}