'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export function About({ isStandalonePage }: { isStandalonePage?: boolean } = {}) {
  const HeadingTag = isStandalonePage ? 'h1' : 'h2';
  return (
    <section id="about" className="py-24 relative overflow-x-clip" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center min-w-0">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }} className="relative w-full max-w-sm mx-auto md:mx-0 min-w-0">
            <div className="relative w-full aspect-[4/5] min-h-[280px] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/DJ-Alan-O-Sullivan-Profile-Image.png"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="DJ Alan O'Sullivan at a wedding reception in Cork"
                sizes="(max-width: 767px) 100vw, 384px"
                priority={isStandalonePage}
              />
            </div>
            <div className="mt-4 md:mt-0 md:absolute md:-bottom-6 md:-right-6 md:max-w-[min(100%,240px)] glass p-4 sm:p-6 rounded-2xl w-full md:w-auto z-10">
              <p className="text-sm sm:text-base font-medium italic text-white/80 leading-relaxed">
                &quot;My goal isn&apos;t just to play music—it&apos;s to create an atmosphere that people talk about for years.&quot;
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }} className="min-w-0">
            <HeadingTag id="about-heading" className="text-3xl sm:text-4xl font-display font-bold mb-6 uppercase tracking-tighter break-words">
              {isStandalonePage ? 'About – Professional DJ Cork' : 'ABOUT ME'}
            </HeadingTag>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              I am a professional open-format DJ and comprehensive event entertainer with over two decades of experience filling dancefloors and creating unforgettable nights.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Because I am an open-format DJ, versatility is my specialty—whether it&apos;s a high-energy nightclub, a romantic{' '}
              <Link href="/weddings" className="text-pink hover:underline">
                wedding
              </Link>
              , or a lively{' '}
              <Link href="/corporate" className="text-pink hover:underline">
                corporate event
              </Link>
              , I know how to read the room and play exactly what the crowd needs.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { h: '20+ Years', p: 'Experience' },
                { h: 'Open-Format', p: 'Versatility' },
                { h: 'Premium Gear', p: 'Yamaha & Pioneer' },
                { h: 'Fully Insured', p: 'Peace of Mind' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink mt-1" aria-hidden />
                  <div>
                    <h3 className="font-bold">{item.h}</h3>
                    <p className="text-xs text-white/50">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="text-pink font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Let&apos;s talk about your event <ChevronRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
