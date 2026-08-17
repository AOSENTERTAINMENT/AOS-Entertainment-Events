'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Menu, X } from 'lucide-react';

const MOBILE_NAV_ID = 'mobile-primary-nav';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isWeddingPage = pathname === '/weddings';
  const isCorporatePage = pathname === '/corporate';

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'DJ Cork', href: '/dj-cork' },
    { name: 'About', href: '/about' },
    { name: 'Weddings', href: '/weddings' },
    { name: 'Clubs & Parties', href: '/clubs-parties' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const navClass = isWeddingPage ? (isScrolled ? 'glass-light py-3' : 'bg-transparent py-6') : isCorporatePage ? (isScrolled ? 'glass-corporate py-3 shadow-2xl' : 'bg-transparent py-6') : (isScrolled ? 'glass py-3' : 'bg-transparent py-6');
  const textClass = isWeddingPage ? 'text-black' : 'text-white';
  const logoClass = isWeddingPage ? 'text-black' : 'text-white';
  const accentColor = isWeddingPage ? 'text-gold' : isCorporatePage ? 'text-gold' : 'text-pink';
  const logoBg = isWeddingPage ? 'bg-gold' : isCorporatePage ? 'bg-gold' : 'bg-gradient-to-br from-pink to-gold';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`} aria-label="Main">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-display font-bold tracking-tighter flex items-center gap-2 ${logoClass}`}>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${logoBg}`}>
            <Music className="w-5 h-5 text-white" aria-hidden />
          </div>
          <span>DJ ALAN <span className={accentColor}>O&apos;SULLIVAN</span></span>
        </Link>
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors ${pathname === link.href ? (isWeddingPage ? 'text-gold' : isCorporatePage ? 'text-gold' : 'text-pink') : (isWeddingPage ? 'text-black/70 hover:text-gold' : 'text-white/70 hover:text-pink')}`}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className={`px-4 xl:px-5 py-2 text-[10px] xl:text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${isWeddingPage ? 'bg-black text-white hover:bg-gold' : isCorporatePage ? 'bg-white text-slate-900 hover:bg-gold' : 'bg-white text-black hover:bg-pink hover:text-white'}`}>
            Book Now
          </Link>
        </div>
        <button
          type="button"
          className={`lg:hidden p-2 -mr-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${textClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls={MOBILE_NAV_ID}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id={MOBILE_NAV_ID}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full lg:hidden py-6 px-6 flex flex-col gap-4 ${isWeddingPage ? 'glass-light' : isCorporatePage ? 'glass-corporate' : 'glass'}`}
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-medium py-2 border-b ${isWeddingPage ? 'border-black/5 text-black' : 'border-white/5 text-white'}`}>
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
