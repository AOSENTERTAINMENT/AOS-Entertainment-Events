'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { Testimonials } from '../sections/testimonials-section';
import { FAQ } from '../sections/faq-section';

export function DJCorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=75&w=1920"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
            alt="DJ performance in Cork with crowd and stage lights"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">Cork&apos;s Trusted Event DJ</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              PROFESSIONAL <br />
              <span className="text-gradient">DJ SERVICES IN CORK</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              With over two decades of experience, DJ Alan O&apos;Sullivan provides premium sound, intelligent lighting, and the perfect soundtrack for Cork&apos;s biggest weddings, corporate events, and private parties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-pink text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all glow-blue">
                Check Availability & Get a Quote <ChevronRight className="w-5 h-5" aria-hidden />
              </Link>
              <Link href="/gallery" className="px-8 py-4 glass text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                View event gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '20+ Years', l: 'Experience' },
              { n: 'Premium', l: 'Yamaha & Pioneer' },
              { n: 'Fully', l: 'Insured' },
              { n: 'Bespoke', l: 'Playlists' },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-pink mb-1">{item.n}</p>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{item.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">BESPOKE ENTERTAINMENT FOR EVERY OCCASION</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-gold/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-gold">Weddings</h3>
              <p className="text-white/60 mb-6 leading-relaxed">From the elegance of your first dance to a high-energy finale. I specialize in reading the room to keep every generation on the floor.</p>
              <Link href="/weddings" className="text-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Wedding DJ Cork <ChevronRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-gold/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-gold">Corporate Events</h3>
              <p className="text-white/60 mb-6 leading-relaxed">Polished, punctual, and professional. Ideal for awards nights, brand launches, and Christmas parties in Cork City and beyond.</p>
              <Link href="/corporate" className="text-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Corporate DJ Cork <ChevronRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10 hover:border-pink/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-pink">Private Parties</h3>
              <p className="text-white/60 mb-6 leading-relaxed">Celebrating a 21st, 30th, or 50th? I bring the club energy to your private celebration with a mix that spans decades.</p>
              <Link href="/clubs-parties" className="text-pink font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Party DJ Cork <ChevronRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 uppercase tracking-tighter">WHY HIRE DJ ALAN O&apos;SULLIVAN?</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">Hiring a DJ in Cork shouldn&apos;t be a gamble. When you book Alan, you are getting a professional open-format entertainer who knows how to read the room and play exactly what the crowd needs.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-pink" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Versatile Open-Format</h3>
                    <p className="text-sm text-white/50">From high-energy nightclubs to romantic weddings—I play for the crowd.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-gold" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Decades of Experience</h3>
                    <p className="text-sm text-white/50">Over 20 years filling dancefloors in Cork, Ibiza, and across Ireland.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-pink" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">High-End Production</h3>
                    <p className="text-sm text-white/50">Industry-leading gear from Yamaha, dBTechnologies, Pioneer, and Chauvet DJ.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=75&w=1200"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, min(45vw, 600px)"
                className="h-auto w-full object-cover"
                alt="Professional DJ controller and audio setup ready for an event"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">SERVING CORK CITY AND COUNTY</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            Based in Cork, Alan provides full-service DJ entertainment across the entire county. Whether you are hosting an intimate{' '}
            <Link href="/clubs-parties" className="text-pink hover:underline">
              private party in Kinsale
            </Link>{' '}
            or a{' '}
            <Link href="/corporate" className="text-pink hover:underline">
              corporate gala in Cork city
            </Link>
            , I travel to you with a complete professional setup.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-white/40">
            <span>Cork City</span>
            <span className="text-neon-blue" aria-hidden>
              •
            </span>
            <span>Kinsale</span>
            <span className="text-neon-blue" aria-hidden>
              •
            </span>
            <span>Midleton</span>
            <span className="text-neon-blue" aria-hidden>
              •
            </span>
            <span>Mallow</span>
            <span className="text-neon-blue" aria-hidden>
              •
            </span>
            <span>Carrigaline</span>
            <span className="text-neon-blue" aria-hidden>
              •
            </span>
            <span>Clonakilty</span>
            <span className="text-neon-blue" aria-hidden>
              •
            </span>
            <span>Fermoy</span>
            <span className="text-neon-blue" aria-hidden>
              •
            </span>
            <span>Bandon</span>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 uppercase tracking-tighter">
            READY TO PACK <br />
            <span className="text-gradient">YOUR DANCEFLOOR?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">Dates in Cork fill up fast. Get in touch today for a bespoke quote and to check availability for your date.</p>
          <Link href="/contact" className="px-12 py-6 bg-pink text-white font-bold rounded-2xl inline-flex items-center gap-3 hover:bg-white hover:text-black transition-all glow-blue text-lg">
            Check Your Date <ChevronRight className="w-6 h-6" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
