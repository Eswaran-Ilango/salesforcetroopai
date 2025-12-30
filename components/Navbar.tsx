'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, COMPANY_CONFIG } from '@/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-salesforce rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-xl italic">{COMPANY_CONFIG.logoText}</span>
            </div>
            <span className="text-2xl font-bold text-navy tracking-tight">{COMPANY_CONFIG.name.split('Ai')[0]}<span className="text-salesforce">Ai</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-sm font-semibold transition-colors ${isActive(item.path) ? 'text-salesforce' : 'text-gray-600 hover:text-salesforce'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-salesforce text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-navy transition-all shadow-lg hover:shadow-salesforce/20"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold p-2 ${isActive(item.path) ? 'text-salesforce' : 'text-navy'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-salesforce text-white p-4 rounded-xl text-center font-bold"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
