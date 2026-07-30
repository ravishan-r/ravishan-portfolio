import React from 'react';

const Footer = () => {
  const roles = [
    'Electronics Engineer',
    'Python Developer',
    'IoT Builder',
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:contact@example.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Grid: Centered on mobile, Left-aligned on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
          
          {/* Identity Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Ravishan Rathnayake<span className="text-[#06B6D4]">.</span>
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Designing hardware, writing clean Python code, and building end-to-end IoT solutions.
            </p>
          </div>

          {/* Specializations / Roles */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#06B6D4]">
              Specializations
            </h3>
            <ul className="flex flex-col items-center md:items-start space-y-2 text-sm text-[#F8FAFC]">
              {roles.map((role) => (
                <li key={role} className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]"></span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#06B6D4]">
              Connect
            </h3>
            <ul className="flex flex-col items-center md:items-start space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-[#64748B] hover:text-[#06B6D4] transition-colors duration-200"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs text-[#64748B] space-y-2 sm:space-y-0">
          <p>Copyright © 2026 Ravishan Rathnayake</p>
          <p>All rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;