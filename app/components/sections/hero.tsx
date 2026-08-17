'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=75&w=1920';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Crowded dancefloor with party lighting at a live DJ event"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">Cork&apos;s Premier Event DJ</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
            PACK THE FLOOR. <br />
            <span className="text-gradient">MAKE MEMORIES.</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
            Professional sound, stunning lighting, and the perfect soundtrack for your biggest moments. From Cork to nationwide, I bring the energy your event deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-8 py-4 bg-pink text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300 glow-blue">
              Check Availability <ChevronRight className="w-5 h-5" aria-hidden />
            </Link>
            <a href="#services-hub" className="px-8 py-4 glass text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300">
              View Packages
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/20 blur-[120px] rounded-full" aria-hidden />
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-pink/10 blur-[100px] rounded-full" aria-hidden />
    </section>
  );
}
