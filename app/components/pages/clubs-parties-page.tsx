'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Services } from '../sections/services-section';
import { Gallery } from '../sections/gallery-section';
import { Contact } from '../sections/contact-section';

export function ClubsPartiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=75&w=1920"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
            alt="Packed club dancefloor with concert-style lighting effects"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">High-Energy Entertainment</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-8">
              CLUBS & <span className="text-gradient">PARTIES.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">From Cork&apos;s biggest clubs to your private milestone celebration. I bring the energy, the mixing, and the atmosphere.</p>
            <Link href="/contact" className="px-8 py-4 bg-pink text-white font-bold rounded-xl inline-flex items-center gap-2 hover:bg-white hover:text-black transition-all glow-blue">
              Book the Vibe <ChevronRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
      <Services showIds={['parties', 'clubs', 'interactive', 'themed', 'hen']} />
      <Gallery limit={6} />
      <Contact />
    </div>
  );
}
