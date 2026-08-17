'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Clock, Heart, Mic2, Sparkles, Star } from 'lucide-react';
import { Contact } from '../sections/contact-section';

export function WeddingsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wedding-theme min-h-screen">
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gold-light">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=75&w=1920"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
            alt="Wedding couple celebrating on a dancefloor during reception"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">Bespoke Wedding Entertainment</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-8 text-black">
              Your Perfect Day, <br />
              <span className="text-gold italic">Perfectly Scored.</span>
            </h1>
            <p className="text-xl text-black/70 mb-10 leading-relaxed max-w-2xl mx-auto font-serif">
              With over two decades of experience, I specialize in creating a bespoke soundtrack for your big day. From your romantic first dance to a high-energy finale, I know how to read the room and play exactly what the crowd needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gold text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-black transition-all duration-300 glow-gold">
                Check Your Date <ChevronRight className="w-5 h-5" aria-hidden />
              </Link>
              <a href="#wedding-services" className="px-8 py-4 border border-gold text-gold font-bold rounded-full flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-all duration-300">
                Wedding Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="wedding-experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }}>
              <h2 className="text-4xl font-serif font-bold mb-6 text-black">THE WEDDING EXPERIENCE</h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed font-serif">
                A wedding isn&apos;t just another party. It&apos;s a milestone. With over 20 years of experience, I understand the nuances of a wedding day—the importance of timing, the balance of genres, and the skill required to keep guests of all ages on the floor.
              </p>
              <p className="text-lg text-black/70 mb-8 leading-relaxed font-serif">
                Based in Cork, I&apos;ve performed at the county&apos;s most prestigious venues. My service is built on reliability, elegance, and high-energy entertainment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-gold mt-1 shrink-0" aria-hidden />
                  <div>
                    <h3 className="font-bold text-black">Personalized Playlists</h3>
                    <p className="text-xs text-black/50">Your music, your way.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-gold mt-1 shrink-0" aria-hidden />
                  <div>
                    <h3 className="font-bold text-black">Stunning Lighting</h3>
                    <p className="text-xs text-black/50">Mood-enhancing setups.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mic2 className="w-5 h-5 text-gold mt-1 shrink-0" aria-hidden />
                  <div>
                    <h3 className="font-bold text-black">Professional MC</h3>
                    <p className="text-xs text-black/50">Seamless announcements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold mt-1 shrink-0" aria-hidden />
                  <div>
                    <h3 className="font-bold text-black">Early Setup</h3>
                    <p className="text-xs text-black/50">Ready before you arrive.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }} className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gold/20 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=75&w=1200"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                  alt="Wedding guests dancing with ambient lights at reception"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="wedding-services" className="py-24 bg-gold-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-black">WEDDING SERVICES</h2>
            <p className="text-black/60 max-w-2xl mx-auto font-serif">Bespoke entertainment options tailored to your unique celebration.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-lg hover:border-gold transition-all">
              <h3 className="text-2xl font-serif font-bold mb-4 text-black">The After-Band Party</h3>
              <p className="text-black/70 mb-6 font-serif">
                The ultimate high-energy finale. I take over seamlessly from your band to keep the momentum going until the very last song. I specialize in reading the room and playing exactly what the crowd needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Seamless Handover
                </li>
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Pro Sound & Lighting
                </li>
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Open-Format Mixing
                </li>
              </ul>
              <Link href="/contact" className="block text-center py-3 border border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-white transition-all">
                Enquire for Details
              </Link>
            </div>
            <div className="bg-white p-8 rounded-3xl border-2 border-gold shadow-xl relative scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-black">The Full Night DJ</h3>
              <p className="text-black/70 mb-6 font-serif">
                Complete evening entertainment. From the first dance to the final farewell, I curate the entire atmosphere of your reception with over two decades of experience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Full Evening Coverage
                </li>
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Personalized MC Service
                </li>
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Premium Sound & Lighting
                </li>
              </ul>
              <Link href="/contact" className="block text-center py-3 bg-gold text-white font-bold rounded-full hover:bg-black transition-all">
                Enquire for Details
              </Link>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-lg hover:border-gold transition-all">
              <h3 className="text-2xl font-serif font-bold mb-4 text-black">The All-Day Luxury</h3>
              <p className="text-black/70 mb-6 font-serif">
                A truly bespoke experience. Music for your ceremony, drinks reception, and dinner, leading into a spectacular night of dancing with full AV solutions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Ceremony & Drinks Music
                </li>
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Dinner Background Vibe
                </li>
                <li className="flex items-center gap-2 text-sm text-black/70">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" aria-hidden /> Video Screen Options
                </li>
              </ul>
              <Link href="/contact" className="block text-center py-3 border border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-white transition-all">
                Enquire for Details
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="wedding-testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-black">WEDDING STORIES</h2>
            <p className="text-black/60 font-serif">Hear from couples who trusted Alan with their big day.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gold-light p-10 rounded-3xl border border-gold/5">
              <div className="flex gap-1 mb-6" role="img" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <p className="text-black/80 italic mb-8 leading-relaxed font-serif text-lg">
                &quot;Alan was the highlight of our wedding. He managed to keep both our teenage cousins and our grandparents on the floor all night. The transition from the band was seamless. If you&apos;re getting married in Cork, Alan is the only choice.&quot;
              </p>
              <div>
                <h3 className="font-bold text-black">Michelle & David</h3>
                <p className="text-xs text-black/40 uppercase tracking-widest">Castlemartyr Resort</p>
              </div>
            </div>
            <div className="bg-gold-light p-10 rounded-3xl border border-gold/5">
              <div className="flex gap-1 mb-6" role="img" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <p className="text-black/80 italic mb-8 leading-relaxed font-serif text-lg">
                &quot;From the first consultation, we knew we were in good hands. Alan&apos;s attention to detail is incredible. He played all our requests and knew exactly when to switch up the vibe. Our guests are still talking about the music!&quot;
              </p>
              <div>
                <h3 className="font-bold text-black">Emma & Sean</h3>
                <p className="text-xs text-black/40 uppercase tracking-widest">The Maryborough Hotel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
