import React, { useState, useEffect } from 'react';
import { navigationLinks } from "../../data/navigation";
import Button from "../ui/Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu automatically on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="text-2xl font-bold tracking-tight text-[#0F172A] hover:text-[#06B6D4] transition-colors duration-200"
            >
              Ravishan R<span className="text-[#06B6D4]">.</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationLinks?.map((link) => (
              <a
                key={link.name || link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Resume Button */}
          <div className="hidden md:flex items-center">
            <Button href="#resume">
              Resume
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0F172A] hover:text-[#06B6D4] hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Toggle icon between Hamburger (☰) and Close (✕) */}
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg" id="mobile-menu">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigationLinks?.map((link) => (
              <a
                key={link.name || link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base text-center font-medium text-[#0F172A] hover:text-[#06B6D4] hover:bg-[#F8FAFC] transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Resume Button */}
            <div className="pt-2">
              <Button 
                href="#resume" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-full justify-center"
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;