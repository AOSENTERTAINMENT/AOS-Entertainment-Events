'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { Testimonials } from '../sections/testimonials-section';
import { Contact } from '../sections/contact-section';

export function CorporatePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="corporate-theme min-h-screen">
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=75&w=1920"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
            alt="Elegant corporate venue interior prepared for an evening event"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">Professional Event Solutions</span>
            <h1 className="text-6xl md:text-7xl font-display font-bold leading-tight mb-8">
              CORPORATE <br />
              <span className="text-gold">EXCELLENCE.</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Reliable, professional, and adaptable entertainment for Cork&apos;s leading businesses. Awards nights, brand launches, and gala dinners. I also provide full video screens for presentations, ensuring your event looks just as good as it sounds.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-8 py-4 bg-pink text-white font-bold rounded-xl inline-flex items-center gap-2 hover:bg-gold hover:text-black transition-all">
                Request a Proposal <ChevronRight className="w-5 h-5" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">POLISHED & PROFESSIONAL</h2>
              <p className="text-lg text-white/60 mb-6 leading-relaxed">I understand the specific requirements of corporate events. Punctuality, appropriate attire, and the ability to read a diverse room are non-negotiable.</p>
              <div className="space-y-4">
                {['Full MC & Announcement Services', 'Wireless Microphones & Video Screens', 'Mood-Enhancing Uplighting', 'Yamaha & dBTechnologies Sound Systems', 'Public Liability Insurance & Tax Clearance'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" aria-hidden />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-corporate">
              <Image
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=75&w=1200"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover opacity-80"
                alt="Corporate event stage with lighting and presentation setup"
              />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Contact />
    </div>
  );
}
