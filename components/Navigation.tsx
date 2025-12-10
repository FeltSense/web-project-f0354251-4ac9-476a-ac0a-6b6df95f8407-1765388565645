'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Collections', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            Curated
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-6 py-2.5 transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-slate-300 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-6 py-2.5 transition-all duration-300 shadow-sm hover:shadow-md text-sm text-center"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
