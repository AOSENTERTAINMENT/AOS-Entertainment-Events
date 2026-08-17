'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Music, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  const pathname = usePathname();
  const isWeddingPage = pathname === '/weddings';
  const isCorporatePage = pathname === '/corporate';
  const footerClass = isWeddingPage ? 'bg-gold-light border-gold/10 text-black' : isCorporatePage ? 'bg-slate-900/50 border-white/5' : 'bg-white/5 border-white/5';
  const accentColor = isWeddingPage ? 'text-gold' : isCorporatePage ? 'text-gold' : 'text-pink';
  return (
    <footer className={`py-12 border-t ${footerClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-display font-bold tracking-tighter flex items-center justify-center md:justify-start gap-2 mb-2">
              <Music className={`w-5 h-5 ${accentColor}`} aria-hidden />
              <span>DJ ALAN <span className={accentColor}>O&apos;SULLIVAN</span></span>
            </Link>
            <p className={`text-xs ${isWeddingPage ? 'text-black/40' : 'text-white/40'}`}>
              © {new Date().getFullYear()} DJ Alan O&apos;Sullivan. All rights reserved. Created by{' '}
              <a href="https://www.inspiredrevolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Inspired Revolutions
              </a>
            </p>
          </div>
          <nav className="flex gap-6" aria-label="Social and email">
            <a
              href="https://www.instagram.com/djalanosullivan"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isWeddingPage ? 'bg-white border border-gold/20 hover:text-gold' : 'glass hover:text-pink'}`}
              aria-label="AOS Entertainment on Instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden />
            </a>
            <a
              href="https://www.facebook.com/DJAlanOSullivan/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isWeddingPage ? 'bg-white border border-gold/20 hover:text-gold' : 'glass hover:text-pink'}`}
              aria-label="AOS Entertainment on Facebook"
            >
              <Facebook className="w-5 h-5" aria-hidden />
            </a>
            <a
              href="mailto:alan@aosentertainment.ie"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isWeddingPage ? 'bg-white border border-gold/20 hover:text-gold' : 'glass hover:text-pink'}`}
              aria-label="Email alan@aosentertainment.ie"
            >
              <Mail className="w-5 h-5" aria-hidden />
            </a>
          </nav>
          <div className={`flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest ${isWeddingPage ? 'text-black/40' : 'text-white/40'}`}>
            <Link href="/dj-cork" className="hover:text-current transition-colors">
              DJ Cork
            </Link>
            <Link href="/about" className="hover:text-current transition-colors">
              About
            </Link>
            <Link href="/weddings" className="hover:text-current transition-colors">
              Weddings
            </Link>
            <Link href="/contact" className="hover:text-current transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-current transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
