'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { About } from '../sections/about-section';
import { Contact } from '../sections/contact-section';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20">
      <About isStandalonePage />
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-pink">THE PHILOSOPHY</h2>
              <p className="text-white/60 leading-relaxed">
                I am a professional open-format DJ and comprehensive event entertainer with over two decades of experience filling dancefloors and creating unforgettable nights. My goal isn&apos;t just to play music—it&apos;s to create an atmosphere that people talk about for years.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-pink">THE EQUIPMENT</h2>
              <p className="text-white/60 leading-relaxed">
                I use only industry-leading gear from Yamaha, dBTechnologies, Pioneer, and Chauvet DJ. For corporate events, I also provide full video screens for presentations, ensuring your event looks just as good as it sounds.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-pink">THE PROMISE</h2>
              <p className="text-white/60 leading-relaxed">
                Because I am an open-format DJ, versatility is my specialty—whether it&apos;s a high-energy nightclub, a romantic wedding, or a lively corporate event, I know how to read the room and play exactly what the crowd needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white/5 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=75&w=1200"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Nightclub crowd under stage lights during a DJ performance"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -left-6 glass p-6 rounded-2xl">
                <p className="text-3xl font-bold text-pink">2002</p>
                <p className="text-xs text-white/50 uppercase tracking-widest">The Beginning</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 uppercase tracking-tighter">MY JOURNEY</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  My journey behind the decks began in 2002, learning the craft under the invaluable guidance of the late, great DJ Ted Dunne. Since then, I&apos;ve taken my passion for music and entertainment all over Ireland and beyond.
                </p>
                <p>
                  I&apos;ve had the privilege of playing everything from unforgettable weddings stretching from Dingle to Kilkenny and Cork to Galway, to buzzing parties, bars, nightclubs, and festivals from Castletownbere to Dublin. Between 2008 and 2012, I took my skills international, holding a highly sought-after residency with the renowned Mambo Group in Ibiza. There, I hosted and entertained a vibrant mix of multinational crowds, running high-energy discos, karaoke nights, and interactive quizzes.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-display font-bold mb-6 uppercase tracking-tighter">THE CORK SCENE & COLLABORATIONS</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>In Cork, I&apos;ve held residencies and played at some of the city&apos;s most iconic venues, including Voodoo, Cubins, Savoy, Redz, and Bondi Beach Cork.</p>
                <p>
                  I&apos;m also a frequent collaborator with some of Cork&apos;s top wedding and party bands, including, the much sought after Flake The Gander. Whether I&apos;m playing a standalone set or working alongside a live band, my focus is always on keeping the energy high and the dancefloor full.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=75&w=1200"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Live DJ booth with audience lights at a nightlife venue"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
