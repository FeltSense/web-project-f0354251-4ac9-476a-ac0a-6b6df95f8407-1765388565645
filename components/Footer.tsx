'use client';

import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-violet-400 transition-colors duration-300">
              Curated Fashion Boutique
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Discover expertly curated collections that define modern style and timeless elegance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 text-slate-400 hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Empty spacer column for layout */}
          <div></div>

          {/* Company Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-400 hover:text-violet-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              Support
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-400 hover:text-violet-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-900 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Curated Fashion Boutique. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div></div>
    </footer>
  );
}
